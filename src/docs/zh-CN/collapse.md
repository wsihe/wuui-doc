<script>
  export default {
    data () {
      return {
        value: '1',
        value1: '1'
      }
    }
  }
</script>
## Collapse 折叠面板

### 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- `手风琴` 是一种特殊的折叠面板，只允许单个内容区域展开。

### 折叠面板

::: demo 可以同时展开多个面板。

```html
<wu-collapse v-model="value">
 	<wu-collapse-item header="This is panel header 1" name="1">
 	  <p> Collapse-Collapse1 </p>
 	</wu-collapse-item>
 	<wu-collapse-item header="This is panel header 2" name="2">
   	<p> Collapse-Collapse2 </p>
  </wu-collapse-item>
  <wu-collapse-item header="This is panel header 3" name="3">
   	<p> Collapse-Collapse3 </p>
  </wu-collapse-item>
</wu-dropdown-menu>
```
:::

### 手风琴

::: demo 手风琴，每次只打开一个tab。默认打开第一个。

```html
<wu-collapse v-model="value1" accordion>
 	<wu-collapse-item header="This is panel header 1" name="1">
 	  <p> Collapse-Collapse1 </p>
 	</wu-collapse-item>
 	<wu-collapse-item header="This is panel header 2" name="2">
   	<p> Collapse-Collapse2 </p>
  </wu-collapse-item>
  <wu-collapse-item header="This is panel header 3" name="3">
   	<p> Collapse-Collapse3 </p>
  </wu-collapse-item>
</wu-dropdown-menu>
```
:::

### 简洁风格

::: demo 一套没有边框的简洁样式。

```html
<wu-collapse bordered>
 	<wu-collapse-item header="This is panel header 1" name="1">
 	  <p> Collapse-Collapse1 </p>
 	</wu-collapse-item>
 	<wu-collapse-item header="This is panel header 2" name="2">
   	<p> Collapse-Collapse2 </p>
  </wu-collapse-item>
  <wu-collapse-item header="This is panel header 3" name="3">
   	<p> Collapse-Collapse3 </p>
  </wu-collapse-item>
</wu-dropdown-menu>
```
:::

## API

### wu-collapse

| 参数             | 说明                                         | 类型     | 默认值                          |
|------------------|----------------------------------------------|----------|---------------------------------|
| value            | 当前激活 tab 面板的 key| string[]\|string   | 默认无，accordion模式下默认第一个元素|
| on-change        | 切换面板的回调                               | Function | 无                              |


### wu-collapse-item

| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| name  | 对应 value   | string                  | 无     |
| header | 面板头内容 | string\|ReactNode | 无     |
| disabled | 禁用后的面板展开与否将无法通过用户交互改变 | boolean | false |

