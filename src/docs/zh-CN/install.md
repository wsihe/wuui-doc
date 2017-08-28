## 安装

### 使用 npm 或 yarn 安装

**推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用

```bash
$ npm install wuui --save
```

```bash
$ yarn add wuui
```
如果网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `wuui` 。

在 npm 发布包内的 `wuui/dist` 目录下提供了 `wuui.js` `wuui.css`。

```html
  <link rel="stylesheet" href="path/wuui.css">
  <script src="path/wuui.js"></script>
```
path替换为实际地址

> **强烈不推荐使用已构建文件**，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。