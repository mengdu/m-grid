webpackJsonp([0],{"/FMH":function(t,s){},"3t51":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=e("7+uW"),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"layout-footer"},[e("div",{staticStyle:{"max-width":"800px",margin:"0 auto"}},[e("ul",{staticClass:"copyright"},[e("li",[t._v("© 2018 Lanyue.")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.lanyueos.com"}},[t._v("Home")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.lanyueos.com"}},[t._v("Blog")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/mengdu"}},[t._v("Github")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/mengdu"}},[t._v("About")])])])])])}]};var a=e("VU/8")(null,l,!1,function(t){e("kr4L")},null,null).exports,v={props:{repo:String}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:this.repo}},[s("img",{staticClass:"fork-img",attrs:{src:"https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png",alt:"Fork me on GitHub"}})])},staticRenderFns:[]};var _=e("VU/8")(v,n,!1,function(t){e("g8Ef")},null,null).exports,o=e("G0wi"),m=e.n(o),i=e("zyZ7"),c=e.n(i),d=e("7YgM"),u=e.n(d),p={name:"App",components:{Doc:c.a,Readme:m.a,LayoutFooter:a,ForkLink:_},data:function(){return{pkg:u.a}},computed:{repo:function(){return u.a.repository.url.replace(/git\+/,"")}},methods:{rowHover:function(t){console.log(t)}},created:function(){window.label=this.label}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("header",[e("h1",{staticStyle:{"font-weight":"100"}},[t._v("m-grid 栅格布局")]),t._v(" "),e("div",{staticStyle:{"margin-bottom":"50px"}},[e("a",{attrs:{href:t.repo,target:"_blank"}},[e("m-button",{attrs:{type:"info",size:"large",round:""}},[t._v("Github")])],1),t._v("\n       \n      "),e("a",{attrs:{href:"#example"}},[e("m-button",{attrs:{type:"success",size:"large",plain:"",round:""}},[t._v("Example")])],1)])]),t._v(" "),e("main",{staticClass:"doc-block"},[e("div",{staticStyle:{"max-width":"800px",margin:"0 auto"}},[e("readme")],1),t._v(" "),e("Doc")],1),t._v(" "),e("layout-footer")],1)},staticRenderFns:[]};var h=e("VU/8")(p,g,!1,function(t){e("8f5J")},null,null).exports,f={name:"DemoBlock",props:{jsfiddle:Object},created:function(){}},b={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"demo-block"},[this._t("source"),this._v(" "),s("div",{ref:"meta",staticClass:"meta"},[this.$slots.default?s("div",{staticClass:"description"},[this._t("default")],2):this._e(),this._v(" "),this._t("highlight")],2)],2)},staticRenderFns:[]};var x=e("VU/8")(f,b,!1,function(t){e("E4G2")},null,null).exports,j={name:"MContainer",props:{fluid:Boolean}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:{"m-container":!this.fluid,"m-container-fluid":this.fluid}},[this._t("default")],2)},staticRenderFns:[]};var S=e("VU/8")(j,w,!1,function(t){e("/FMH")},null,null).exports,N={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"m-row"},[this._t("default")],2)},staticRenderFns:[]},k=e("VU/8")({name:"MRow"},N,!1,null,null,null).exports,y={name:"MCol",props:{xs:[String,Number],sm:[String,Number],md:[String,Number],lg:[String,Number],offset:[String,Number],pull:[String,Number],push:[String,Number],xsOffset:[String,Number],smOffset:[String,Number],lgOffset:[String,Number],xsPull:[String,Number],smPull:[String,Number],lgPull:[String,Number],xsPush:[String,Number],smPush:[String,Number],lgPush:[String,Number]},methods:{cls:function(t,s){return"m-col-"+t+"-"+s}}},P={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{class:[t.xs&&t.cls("xs",t.xs),t.sm&&t.cls("sm",t.sm),t.md&&t.cls("md",t.md),t.lg&&t.cls("lg",t.lg),t.offset&&t.cls("md-offset",t.offset),t.pull&&t.cls("md-pull",t.pull),t.push&&t.cls("md-push",t.push),t.xsOffset&&t.cls("xs-offset",t.xsOffset),t.smOffset&&t.cls("sm-offset",t.smOffset),t.lgOffset&&t.cls("lg-offset",t.lgOffset),t.xsPull&&t.cls("xs-pull",t.xsPull),t.smPull&&t.cls("sm-pull",t.smPull),t.lgPull&&t.cls("xs-pull",t.lgPull),t.xsPush&&t.cls("xs-push",t.xsPush),t.smPush&&t.cls("sm-push",t.smPush),t.lgPush&&t.cls("lg-push",t.lgPush)]},[t._t("default")],2)},staticRenderFns:[]},E=e("VU/8")(y,P,!1,null,null,null).exports;S.install=function(t){t.component(S.name,S),t.component(k.name,k),t.component(E.name,E)};var C=S,F=e("HPNY"),M=e.n(F);e("TkPJ");r.a.use(C),r.a.use(M.a),r.a.component("DemoBlock",x),r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:h},template:"<App/>"})},"5sSg":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[t._m(0),t._v(" "),e("m-container",{staticClass:"test-container"},[e("m-row",[e("m-col",{attrs:{md:"1"}},[t._v("md-1")]),t._v(" "),e("m-col",{attrs:{md:"1"}},[t._v("md-1")]),t._v(" "),e("m-col",{attrs:{md:"1"}},[t._v("md-1")]),t._v(" "),e("m-col",{attrs:{md:"1"}},[t._v("md-1")]),t._v(" "),e("m-col",{attrs:{md:"1"}},[t._v("md-1")]),t._v(" "),e("m-col",{attrs:{md:"1"}},[t._v("md-1")]),t._v(" "),e("m-col",{attrs:{md:"1"}},[t._v("md-1")]),t._v(" "),e("m-col",{attrs:{md:"1"}},[t._v("md-1")]),t._v(" "),e("m-col",{attrs:{md:"1"}},[t._v("md-1")]),t._v(" "),e("m-col",{attrs:{md:"1"}},[t._v("md-1")]),t._v(" "),e("m-col",{attrs:{md:"1"}},[t._v("md-1")]),t._v(" "),e("m-col",{attrs:{md:"1"}},[t._v("md-1")])],1),t._v(" "),e("p"),t._v(" "),e("m-row",[e("m-col",{attrs:{md:"4"}},[t._v("md-4")]),t._v(" "),e("m-col",{attrs:{md:"4"}},[t._v("md-4")]),t._v(" "),e("m-col",{attrs:{md:"4"}},[t._v("md-4")])],1),t._v(" "),e("p"),t._v(" "),e("m-row",[e("m-col",{attrs:{xs:"1"}},[t._v("xs-1")]),t._v(" "),e("m-col",{attrs:{xs:"1"}},[t._v("xs-1")]),t._v(" "),e("m-col",{attrs:{xs:"1"}},[t._v("xs-1")]),t._v(" "),e("m-col",{attrs:{xs:"1"}},[t._v("xs-1")]),t._v(" "),e("m-col",{attrs:{xs:"1"}},[t._v("xs-1")]),t._v(" "),e("m-col",{attrs:{xs:"1"}},[t._v("xs-1")]),t._v(" "),e("m-col",{attrs:{xs:"1"}},[t._v("xs-1")]),t._v(" "),e("m-col",{attrs:{xs:"1"}},[t._v("xs-1")]),t._v(" "),e("m-col",{attrs:{xs:"1"}},[t._v("xs-1")]),t._v(" "),e("m-col",{attrs:{xs:"1"}},[t._v("xs-1")]),t._v(" "),e("m-col",{attrs:{xs:"1"}},[t._v("xs-1")]),t._v(" "),e("m-col",{attrs:{xs:"1"}},[t._v("xs-1")])],1),t._v(" "),e("p"),t._v(" "),e("m-row",[e("m-col",{attrs:{xs:"3"}},[t._v("xs-3")]),t._v(" "),e("m-col",{attrs:{xs:"3"}},[t._v("xs-3")]),t._v(" "),e("m-col",{attrs:{xs:"3"}},[t._v("xs-3")]),t._v(" "),e("m-col",{attrs:{xs:"3"}},[t._v("xs-3")])],1),t._v(" "),e("p"),t._v(" "),e("m-row",[e("m-col",{attrs:{sm:"1"}},[t._v("sm-1")]),t._v(" "),e("m-col",{attrs:{sm:"1"}},[t._v("sm-1")]),t._v(" "),e("m-col",{attrs:{sm:"1"}},[t._v("sm-1")]),t._v(" "),e("m-col",{attrs:{sm:"1"}},[t._v("sm-1")]),t._v(" "),e("m-col",{attrs:{sm:"1"}},[t._v("sm-1")]),t._v(" "),e("m-col",{attrs:{sm:"1"}},[t._v("sm-1")]),t._v(" "),e("m-col",{attrs:{sm:"1"}},[t._v("sm-1")]),t._v(" "),e("m-col",{attrs:{sm:"1"}},[t._v("sm-1")]),t._v(" "),e("m-col",{attrs:{sm:"1"}},[t._v("sm-1")]),t._v(" "),e("m-col",{attrs:{sm:"1"}},[t._v("sm-1")]),t._v(" "),e("m-col",{attrs:{sm:"1"}},[t._v("sm-1")]),t._v(" "),e("m-col",{attrs:{sm:"1"}},[t._v("sm-1")])],1),t._v(" "),e("p"),t._v(" "),e("m-row",[e("m-col",{attrs:{sm:"2"}},[t._v("sm-2")]),t._v(" "),e("m-col",{attrs:{sm:"4"}},[t._v("sm-4")]),t._v(" "),e("m-col",{attrs:{sm:"4"}},[t._v("sm-4")]),t._v(" "),e("m-col",{attrs:{sm:"2"}},[t._v("sm-2")])],1),t._v(" "),e("p"),t._v(" "),e("m-row",[e("m-col",{attrs:{lg:"1"}},[t._v("lg-1")]),t._v(" "),e("m-col",{attrs:{lg:"1"}},[t._v("lg-1")]),t._v(" "),e("m-col",{attrs:{lg:"1"}},[t._v("lg-1")]),t._v(" "),e("m-col",{attrs:{lg:"1"}},[t._v("lg-1")]),t._v(" "),e("m-col",{attrs:{lg:"1"}},[t._v("lg-1")]),t._v(" "),e("m-col",{attrs:{lg:"1"}},[t._v("lg-1")]),t._v(" "),e("m-col",{attrs:{lg:"1"}},[t._v("lg-1")]),t._v(" "),e("m-col",{attrs:{lg:"1"}},[t._v("lg-1")]),t._v(" "),e("m-col",{attrs:{lg:"1"}},[t._v("lg-1")]),t._v(" "),e("m-col",{attrs:{lg:"1"}},[t._v("lg-1")]),t._v(" "),e("m-col",{attrs:{lg:"1"}},[t._v("lg-1")]),t._v(" "),e("m-col",{attrs:{lg:"1"}},[t._v("lg-1")])],1),t._v(" "),e("p"),t._v(" "),e("m-row",[e("m-col",{attrs:{lg:"6"}},[t._v("lg-6")]),t._v(" "),e("m-col",{attrs:{lg:"6"}},[t._v("lg-6")])],1),t._v(" "),e("p"),t._v(" "),e("m-row",[e("m-col",{attrs:{md:"3",xs:"4"}},[t._v("md-3，xs-4")]),t._v(" "),e("m-col",{attrs:{md:"3",xs:"5"}},[t._v("md-3，xs-5")]),t._v(" "),e("m-col",{attrs:{md:"6",xs:"3"}},[t._v("md-6，xs-3")])],1),t._v(" "),e("p"),t._v(" "),e("m-row",[e("m-col",{attrs:{md:"3",offset:"3"}},[t._v("md-3，offset-3")]),t._v(" "),e("m-col",{attrs:{md:"3",offset:"3"}},[t._v("md-3，offset-3")])],1),t._v(" "),e("p"),t._v(" "),e("m-row",[e("m-col",{attrs:{md:"8",push:"4"}},[t._v("md-8，push-4")]),t._v(" "),e("m-col",{attrs:{md:"4",pull:"8"}},[t._v("md-4，pull-8")])],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("¶")]),this._v(" Example")])}]};var l=e("VU/8")(null,r,!1,function(t){e("UBqb")},null,null);s.default=l.exports},"7YgM":function(t,s){t.exports={name:"vue-m-button",version:"1.0.0",description:"A button component for vue.",author:"lanyueos@qq.com",license:"MIT",main:"dist/index.js",repository:{type:"git",url:"git+https://github.com/mengdu/m-button"},bugs:{url:"https://github.com/mengdu/m-button/issues"},homepage:"https://mengdu.github.io/m-button/example/",scripts:{dev:"webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",start:"npm run dev",unit:"jest --config test/unit/jest.conf.js --coverage",e2e:"node test/e2e/runner.js",test:"npm run unit && npm run e2e",lint:"eslint --ext .js,.vue src test/unit test/e2e/specs",docs:"node build/docs.js",build:"node build/build.js"},dependencies:{},devDependencies:{autoprefixer:"^7.1.2","babel-core":"^6.22.1","babel-eslint":"^8.2.1","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-jest":"^21.0.2","babel-loader":"^7.1.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-es2015-modules-commonjs":"^6.26.0","babel-plugin-transform-runtime":"^6.22.0","babel-plugin-transform-vue-jsx":"^3.5.0","babel-preset-env":"^1.3.2","babel-preset-stage-2":"^6.22.0","babel-register":"^6.22.0",chalk:"^2.0.1",cheerio:"^1.0.0-rc.2",chromedriver:"^2.27.2","copy-webpack-plugin":"^4.0.1","cross-spawn":"^5.0.1","css-loader":"^0.28.0",eslint:"^4.15.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^3.0.0","eslint-loader":"^1.7.1","eslint-plugin-import":"^2.7.0","eslint-plugin-node":"^5.2.0","eslint-plugin-promise":"^3.4.0","eslint-plugin-standard":"^3.0.1","eslint-plugin-vue":"^4.0.0","extract-text-webpack-plugin":"^3.0.0","file-loader":"^1.1.4","friendly-errors-webpack-plugin":"^1.6.1","html-webpack-plugin":"^2.30.1",jest:"^22.0.4","jest-serializer-vue":"^0.3.0",less:"^3.0.1","less-loader":"^4.1.0","markdown-it-anchor":"^4.0.0","markdown-it-container":"^2.0.0",nightwatch:"^0.9.12","node-notifier":"^5.1.2","optimize-css-assets-webpack-plugin":"^3.2.0",ora:"^1.2.0",portfinder:"^1.0.13","postcss-import":"^11.0.0","postcss-loader":"^2.0.8","postcss-url":"^7.2.1",rimraf:"^2.6.0","selenium-server":"^3.0.1",semver:"^5.3.0",shelljs:"^0.7.6",transliteration:"^1.6.2","uglifyjs-webpack-plugin":"^1.1.1","url-loader":"^0.5.8",vue:"^2.5.2","vue-jest":"^1.0.2","vue-loader":"^13.3.0","vue-m-button":"^1.0.0","vue-markdown-loader":"^2.4.1","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.5.2",webpack:"^3.6.0","webpack-bundle-analyzer":"^2.9.0","webpack-dev-server":"^2.9.1","webpack-merge":"^4.1.0"},engines:{node:">= 6.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},"8f5J":function(t,s){},E4G2:function(t,s){},G0wi:function(t,s,e){t.exports=e("yKNT")},KdQE:function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,".test-container .m-row>div{background-color:#8496ab;height:35px;text-align:center;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;line-height:35px}.test-container .m-row>div:nth-child(odd){background-color:#c8d2de}",""])},TkPJ:function(t,s){},UBqb:function(t,s,e){var r=e("KdQE");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("73049038",r,!0,{})},g8Ef:function(t,s){},kr4L:function(t,s){},yKNT:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h2",{attrs:{id:"mcontainer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mcontainer","aria-hidden":"true"}},[t._v("¶")]),t._v(" MContainer")]),t._v(" "),e("p",[t._v("响应式布局容器，与Boostrap 3的栅格系统效果一致")]),t._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-container")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("fluid")]),t._v(">")]),t._v("\n  "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-row")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-col")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("md")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"4"')]),t._v(">")]),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-col")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-col")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("md")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"4"')]),t._v(">")]),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-col")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-col")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("md")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"4"')]),t._v(">")]),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-col")]),t._v(">")]),t._v("\n  "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-row")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("m-container")]),t._v(">")]),t._v("\n\n")])]),t._v(" "),e("p",[t._v("样式来自："),e("a",{attrs:{href:"https://segmentfault.com/a/1190000010104455"}},[t._v("100行less实现bootstrap的12栅格布局")])]),t._v(" "),e("h3",{attrs:{id:"mcontainer-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mcontainer-attributes","aria-hidden":"true"}},[t._v("¶")]),t._v(" MContainer Attributes")]),t._v(" "),e("ul",[e("li",[t._v("fluid 是否占用100%宽度，与Boostrap .container-fluid一致默认false。")])]),t._v(" "),e("h3",{attrs:{id:"mcol-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mcol-attributes","aria-hidden":"true"}},[t._v("¶")]),t._v(" MCol Attributes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("xs")]),t._v(" "),e("td",[t._v("与Boostrap .col-xs 一致")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("sm")]),t._v(" "),e("td",[t._v("与Boostrap .col-sm一致")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("md")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("lg")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("offset")]),t._v(" "),e("td",[t._v("与Boostrap .col-md-offset一致")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("pull")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("push")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("xs-offset")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("sm-offset")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("lg-offset")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("xs-pull")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("sm-pull")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("lg-pull")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("xs-push")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("sm-push")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])]),t._v(" "),e("tr",[e("td",[t._v("lg-push")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])])])])])}]},l=e("VU/8")(null,r,!1,null,null,null);s.default=l.exports},zyZ7:function(t,s,e){t.exports=e("5sSg")}},["3t51"]);
//# sourceMappingURL=app.d0c0d12efba567d41da4.js.map