
## MContainer

响应式布局容器，与Boostrap 3的栅格系统效果一致

```html
<m-container fluid>
  <m-row>
    <m-col md="4"></m-col>
    <m-col md="4"></m-col>
    <m-col md="4"></m-col>
  </m-row>
</m-container>

```

样式来自：[100行less实现bootstrap的12栅格布局](https://segmentfault.com/a/1190000010104455)

### MContainer Attributes

+ fluid 是否占用100%宽度，与Boostrap .container-fluid一致默认false。

### MCol Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|  xs  | 与Boostrap .col-xs 一致 |  Number,String  |   —  |  —  |
|  sm  | 与Boostrap .col-sm一致  | Number,String   |   —  |  —  |
|  md  |  —  |   Number,String  |   —  |  —  |
|  lg  |  —  |   Number,String  |   —  |  —  |
|  offset |  与Boostrap .col-md-offset一致  |  Number,String  |  —  |  —  |
|  pull|  —  |  Number,String |   —  |  —  |
|  push|  —  |  Number,String |   —  |  —  |
|  xs-offset|  —  |   Number,String |   —  |  —  |
|  sm-offset|  —  |   Number,String |   —  |  —  |
|  lg-offset|  —  |   Number,String |   —  |  —  |
|  xs-pull|  —  |   Number,String |   —  |  —  |
|  sm-pull|  —  |   Number,String |   —  |  —  |
|  lg-pull|  —  |   Number,String |   —  |  —  |
|  xs-push|  —  |   Number,String |   —  |  —  |
|  sm-push|  —  |   Number,String |   —  |  —  |
|  lg-push|  —  |   Number,String |   —  |  —  |
