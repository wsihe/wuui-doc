## Pagination 分页

### 何时使用

- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。

### 基本

::: demo 基本分页。

```html
<div class="pager">
 <wu-pagination :total="50"></wu-pagination>
</div>
```
:::

### 更多

::: demo 更多分页。

```html
<div class="pager">
 <wu-pagination :total="100"></wu-pagination>
</div>
```
:::

<style>
	.pager .wu-pagination {
		margin-bottom: 20px;
	}
	.pager ul li {
    margin-left: 0px;
    padding-left: 0px;
	}
</style>

## API

### wu-pagination

| 参数             | 说明                               | 类型          | 默认值                   |
|------------------|------------------------------------|---------------|--------------------------|
| current          | 当前页数                           | number        | -                   |
| total            | 数据总数                           | number        | 0                        |
| page-size         | 每页条数                           | number        | -                         |
| on-change         | 页码改变的回调，参数是改变后的页码及每页条数 | Function(page, pageSize)      | noop                     |
| show-jumper  | 是否可以快速跳转至某页             | boolean         | false                    |
| size             | 当为「small」时，是小尺寸分页      | string        | ""                       |
| show-total        | 用于显示数据总量和当前数据顺序     | Function(total, range) | -              |
