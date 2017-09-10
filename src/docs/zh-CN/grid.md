## Grid 栅格

24 栅格系统，快速创建布局。

 #### 基础布局

 ::: demo 使用单一的一组 `wu-row` 和 `wu-col` 栅格组件，就可以创建一个基本的栅格系统，所有列（wu-col）必须放在 `wu-row` 内。

 ```html
<wu-row>
  <wu-col :span="6"><div class="grid-content bg-purple">col-6</div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple-light">col-6</div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple">col-6</div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple-light">col-6</div></wu-col>
</wu-row>
 ```
 :::


 #### 区块间隔

 ::: demo 栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 ``(16+8n)px` 作为栅格间隔。(n 是自然数)

 ```html
<wu-row :gutter="20">
  <wu-col :span="6"><div class="grid-content bg-purple">col-6</div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple-light">col-6</div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple">col-6</div></wu-col>
  <wu-col :span="6"><div class="grid-content bg-purple-light">col-6</div></wu-col>
</wu-row>
 ```
 :::

 #### 左右偏移

 ::: demo 使用 `offset` 可以将列向右侧偏。例如，`:offset="8"` 将元素向右侧偏移了 8 个列（column）的宽度。

 ```html
<wu-row>
  <wu-col :span="8"><div class="grid-content bg-purple">col-8</div></wu-col>
  <wu-col :span="8" :offset="8"><div class="grid-content bg-purple-light">col-8</div></wu-col>
</wu-row>
<wu-row>
  <wu-col :span="6" :offset="6" ><div class="grid-content bg-purple">col-6 col-offset-6</div></wu-col>
  <wu-col :span="6" :offset="6"><div class="grid-content bg-purple-light">col-6 col-offset-6</div></wu-col>
</wu-row>
<wu-row>
  <wu-col :span="12" :offset="6" ><div class="grid-content bg-purple">col-12 col-offset-6</div></wu-col>
</wu-row>
 ```
 :::

#### 栅格排序

::: demo 通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。

```html
 <wu-row>
   <wu-col :span="18" :push="6"><div class="grid-content bg-purple">col-18 col-push-6</div></wu-col>
   <wu-col :span="6" :pull="18"><div class="grid-content bg-purple-light">col-6 col-pull-18</div></wu-col>
 </wu-row>
```
:::

#### Flex 布局

::: demo 使用 `row-flex` 定义 `flex` 布局，其子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。

```html
 <wu-row type="flex" justify="start">
   <wu-col :span="4"><div class="grid-content bg-purple">col-4</div></wu-col>
   <wu-col :span="4"><div class="grid-content bg-purple-light">col-4</div></wu-col>
   <wu-col :span="4"><div class="grid-content bg-purple">col-4</div></wu-col>
   <wu-col :span="4"><div class="grid-content bg-purple-light">col-4</div></wu-col>
 </wu-row>
 <wu-row type="flex" class="row-bg" justify="space-around">
   <wu-col :span="4"><div class="grid-content bg-purple">col-4</div></wu-col>
   <wu-col :span="4"><div class="grid-content bg-purple-light">col-4</div></wu-col>
   <wu-col :span="4"><div class="grid-content bg-purple">col-4</div></wu-col>
   <wu-col :span="4"><div class="grid-content bg-purple-light">col-4</div></wu-col>
 </wu-row>

```
:::

#### 响应式布局

::: demo 参照 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设五个响应尺寸：`xs` `sm` `md` `lg` `xl`。

```html
 <wu-row>
   <wu-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10"><div class="grid-content bg-purple">col</div></wu-col>
   <wu-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4"><div class="grid-content bg-purple-light">col</div></wu-col>
   <wu-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10"><div class="grid-content bg-purple">col</div></wu-col>
 </wu-row>
```
:::

<style>
  .wu-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
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
    height: 36px;
    line-height: 36px;
    text-align:center;
    color:#fff;
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