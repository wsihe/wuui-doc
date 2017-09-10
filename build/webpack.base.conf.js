var path = require('path')
var webpack = require('webpack')
var utils = require('./utils')
var config = require('../config')
var md = require('markdown-it')();
var striptags = require('./strip-tags');
var slugify = require('transliteration').slugify;
var vueLoaderConfig = require('./vue-loader.conf')
var json = require('json-loader')

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

var markdown = require('markdown-it')({
  html: true,
  breaks: true
})

markdown.use = [
    [require('markdown-it-anchor'), {
      level: 2,
      slugify: slugify,
      // permalink: true,
      permalinkBefore: true
    }],
    [require('markdown-it-container'), 'demo', {
      validate: function(params) {
        return params.trim().match(/^demo\s*(.*)$/);
      },

      render: function(tokens, idx) {
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          var description = (m && m.length > 1) ? m[1] : '';
          var content = tokens[idx + 1].content;
          var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
          var script = striptags.fetch(content, 'script');
          var style = striptags.fetch(content, 'style');
          var jsfiddle = { html: html, script: script, style: style };
          var descriptionHTML = description
            ? md.render(description)
            : '';

          jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));

          return `<Demo class="demo-box" :jsfiddle="${jsfiddle}">
                    <div class="source" slot="source">${html}</div>
                    ${descriptionHTML}
                    <div slot="highlight">`;
        }
        return '</div></Demo>\n';
      }
    }],
    [require('markdown-it-container'), 'tip']
  ]

var preprocess = function(MarkdownIt, source) {
  MarkdownIt.renderer.rules.table_open = function() {
    return '<table class="table">';
  };
  MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
  return source;
}

var wrap = function(render) {
  return function() {
    return render.apply(this, arguments)
    .replace('<code class="', '<code class="hljs ')
    .replace('<code>', '<code class="hljs">');
  };
};

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json','.styl','.md'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'services': resolve('src/services'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: [resolve('src/libs')],
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: {
          preventExtract: true,
          preprocess: function(markdownIt, source) {
            // do any thing
            return source
          },
          use:markdown.use,
          preprocess:preprocess
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
  ]
}
