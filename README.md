
## m-grid

这个是一个响应式组件，表现效果与Boostrap 3的栅格系统效果几乎一致。

npm
```ls
npm install -S vue-m-grid
```

use
```js
import MContainer from 'vue-m-grid'

Vue.use(MContainer) // 注册 m-container, m-row, m-col组件
```


```html
<m-container fluid>
  <m-row>
    <m-col md="4"></m-col>
    <m-col md="4"></m-col>
    <m-col md="4"></m-col>
  </m-row>
</m-container>

```

### MContainer Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|  fluid  | 是否占用100%宽度 | Boolean |   —  |  false  |


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
