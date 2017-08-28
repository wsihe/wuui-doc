## 参与贡献

### 开发环境搭建

首先你需要 Node.js 4+ 和 NPM 3+

```
  git clone https://github.com/wsihe/wuui.git
  npm run dev

  # open http://localhost:8088
```
build:

```
  npm run build
```
### 开发规范

- 使用 ES2015 语法

- CSS 命名采用 BEM 的风格

- 在examples/test内测试组件

### Issue 规范

- issue 仅用于提交 Bug 或 Feature 相关的内容，其它内容可能会被直接关闭。

- 在提交 issue 之前，请搜索相关内容是否已被提出。

- 请说明 Muse UI 和 Vue 的版本号，并提供操作系统和浏览器信息。推荐使用 JSFiddle 生成在线 demo，这能够更直观地重现问题。

### Pull Request 规范

- 请先 fork 一份到自己的项目下，不要直接在仓库下建分支。

- commit 信息要以[组件名]: 描述信息 的形式填写，例如 appbar: fix xxx bug。

- 不要提交 dist 或 docs 文件夹下的文件

- 执行 npm run build 后可以正确打包文件。

- 提交 PR 前请 rebase，确保 commit 记录的整洁。

- 如果是修复 bug，请在 PR 中给出描述信息