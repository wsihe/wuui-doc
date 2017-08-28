## Grid 栅格

24 栅格系统。


使用单一的一组 `wu-row` 和 `wu-col` 栅格组件，就可以创建一个基本的栅格系统，所有列（wu-col）必须放在 `wu-row` 内。

<wu-row type="flex" class="row-bg">
  <wu-col :span="6"><div class="grid-content bg-purple"></div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple-light"></div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple"></div></wu-col>
</wu-row>
<wu-row type="flex" class="row-bg" justify="center">
  <wu-col :span="6"><div class="grid-content bg-purple"></div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple-light"></div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple"></div></wu-col>
</wu-row>
<wu-row type="flex" class="row-bg" justify="end">
  <wu-col :span="6"><div class="grid-content bg-purple"></div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple-light"></div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple"></div></wu-col>
</wu-row>
<wu-row type="flex" class="row-bg" justify="space-between">
  <wu-col :span="6"><div class="grid-content bg-purple"></div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple-light"></div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple"></div></wu-col>
</wu-row>
<wu-row type="flex" class="row-bg" justify="space-around">
  <wu-col :span="6"><div class="grid-content bg-purple"></div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple-light"></div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple"></div></wu-col>
</wu-row>

<style>
  .wu-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .wu-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: rgba(0,160,233,.7);
  }
  .bg-purple {
    background: #00a0e9;
  }
  .bg-purple-light {
    background: rgba(0,160,233,.7);
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>



### wu-row

| 成员       | 说明             | 类型               | 默认值       |
|-----------|-----------------|--------------------|-------------|
| gutter    | 栅格间隔   | number | 0        |
| type      | 布局模式，可选 `flex`，[现代浏览器](http://caniuse.com/#search=flex) 下有效 | string |         |
| align     | flex 布局下的垂直对齐方式：`top` `middle` `bottom`  | string | `top`      |
| justify   | flex 布局下的水平排列方式：`start` `end` `center` `space-around` `space-between`   | string | `start`        |

### wu-col

| 成员      | 说明             | 类型               | 默认值       |
|----------|-----------------|--------------------|-------------|
| span     | 栅格占位格数，为 0 时相当于 `display: none`   | number | -        |
| order    | 栅格顺序，`flex` 布局模式下有效   | number | 0        |
| offset   | 栅格左侧的间隔格数，间隔内不可以有栅格  | number | 0        |
| push     | 栅格向右移动格数   | number | 0        |
| pull     | 栅格向左移动格数   | number | 0        |
| xs       | `<768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number\|object | - |
| sm       | `≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number\|object | - |
| md       | `≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number\|object | - |
| lg       | `≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number\|object | - |
| xl       | `≥1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number\|object | - |

响应式栅格的断点遵循了 [BootStrap 3 的规则](https://getbootstrap.com/docs/3.3/css/#responsive-utilities-classes)（不包含链接里 `occasionally` 的部分)。