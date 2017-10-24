## TimePicker 时间选择框

输入或选择时间的控件。

## 何时使用
--------

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## API

### wu-time-picker

| 参数                 | 说明 | 类型 | 默认值 |
|---------------------|-----|-----|-------|
| defaultValue        | 默认时间 | [moment](http://momentjs.com/) | 无 |
| value               | 当前时间 | [moment](http://momentjs.com/) | 无 |
| defaultOpenValue    | 无选中值时，面板打开时高亮的值 | [moment](http://momentjs.com/) | moment() |
| open                | 面板是否打开 | boolean | false |
| onOpenChange        | 面板打开/关闭时的回调 | (open: boolean): void | 无 |
| placeholder         | 没有值的时候显示的内容 | string | "请选择时间" |
| onChange            | 时间发生变化的回调     | function(time: moment, timeString: string): void | 无 |
| format              | 展示的时间格式 | string | "HH:mm:ss" |
| disabled            | 禁用全部操作 | boolean | false |
| disabledHours       | 禁止选择部分小时选项 | function() | 无 |
| disabledMinutes     | 禁止选择部分分钟选项 | function(selectedHour) | 无 |
| disabledSeconds     | 禁止选择部分秒选项 | function(selectedHour, selectedMinute) | 无 |
| hideDisabledOptions | 隐藏禁止选择的选项 | boolean | false |
| getPopupContainer   | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | 无 |
| addon | 选择框底部显示自定义的内容 | function | 无 |
| popupClassName | 弹出层类名 | string | '' |