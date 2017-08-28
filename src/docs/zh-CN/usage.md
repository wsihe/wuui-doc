## 使用

Wuui 使用 Vue.use() 方法全部加载

```javascript
  import Vue from 'vue'
  import Wuui from 'wuui'
  Vue.use(Wuui)
```

引入样式：

```javascript
  import 'wuui/dist/wuui.css'
```

### 按需加载

- 手动引入

   ```js
     import DatePicker from 'wuui/src/date-picker';  // 加载 JS
     import 'wuui/src/style/index.less';         // 加载 LESS
   ```