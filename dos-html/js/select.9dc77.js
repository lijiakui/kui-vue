/*! kui-vue v1.7.5 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{BybE:function(t,e,l){"use strict";var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[l("div",{ref:"demo",staticClass:"k-demo-main"},[l("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),l("div",{staticClass:"k-desc"},[l("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),l("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),l("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[l("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),l("div",{staticClass:"k-demo-line"}),t._v(" "),l("Collapse",[l("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},n=[];l.d(e,"a",function(){return a}),l.d(e,"b",function(){return n})},C8VU:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=l("z7BB"),s=(a=n)&&a.__esModule?a:{default:a};e.default=s.default},IlMa:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={base:'<Select :width="200" v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>\n</Select>\n<Button @click="select=\'\'">清除</Button>\n<Button @click="select=1">选中橘子</Button>\n<script>\n    export default {\n      data() {\n          return {\n            select: "3",\n            data: [\n              { label: "苹果🍎", value: 0 },\n              { label: "橘子🍊", value: 1 },\n              { label: "香蕉🍌", value: 2 },\n              { label: "栗子🌰", value: 3 },\n              { label: "葡萄🍇", value: 4 }\n            ],\n          };\n        }\n  }\n<\/script>',size:'<Select :width="200" v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>\n</Select>\n<Select :width="200" v-model="select" mini >\n<Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>\n</Select>\n<script>\n    export default {\n      data() {\n          return {\n            select: ""\n          };\n        }\n  }\n<\/script>',clearable:'<Select :width="200" clearable  v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>\n</Select>\n<Select :width="200" clearable mini  v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>\n</Select>\n<script>\n    export default {\n      data() {\n          return {\n            select: ""\n          };\n        }\n  }\n<\/script>',search:'<Select :width="200" filterable  v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>\n</Select>\n<script>\n    export default {\n      data() {\n          return {\n            select: ""\n          };\n        }\n  }\n<\/script>',disabled:'<Select disabled :width="200"  v-model="select"></Select>\n<Select :width="200">\n  <Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label" :disabled="y==3"></Option>\n</Select>\ndata() {\n    return {\n      select: "3",\n      data: [\n        { label: "苹果🍎", value: 0 },\n        { label: "橘子🍊", value: 1 },\n        { label: "香蕉🍌", value: 2 },\n        { label: "栗子🌰", value: 3 },\n        { label: "葡萄🍇", value: 4 }\n      ],\n    };\n  }'};e.default=a},LUBn:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(l("YEIV")),n=o(l("cF/K")),s=o(l("Ff65")),v=o(l("7+I9"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:v.default},components:{Code:n.default,Collapse:s.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,a.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},fWij:function(t,e,l){"use strict";l.r(e);var a=l("kzfp"),n=l.n(a);for(var s in a)"default"!==s&&function(t){l.d(e,t,function(){return a[t]})}(s);e.default=n.a},"gY1+":function(t,e,l){"use strict";l.r(e);var a=l("ulqI"),n=l("fWij");for(var s in n)"default"!==s&&function(t){l.d(e,t,function(){return n[t]})}(s);var v=l("KHd+"),o=Object(v.a)(n.default,a.a,a.b,!1,null,null,null);e.default=o.exports},kzfp:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(l("IlMa")),n=s(l("C8VU"));function s(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:n.default},data:function(){return{code:a.default,select:"3",select1:2,select2:2,select3:1,select4:1,data:[{label:"苹果🍎",value:0},{label:"橘子🍊",value:1},{label:"香蕉🍌",value:2},{label:"栗子🌰",value:3},{label:"葡萄🍇",value:4}]}}}},sOOp:function(t,e,l){"use strict";l.r(e);var a=l("LUBn"),n=l.n(a);for(var s in a)"default"!==s&&function(t){l.d(e,t,function(){return a[t]})}(s);e.default=n.a},ulqI:function(t,e,l){"use strict";var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h2",[t._v("Select 选择器")]),t._v(" "),l("Alert",[t._v("注意：非 template/render 模式下，需使用 k-select")]),t._v(" "),l("h3",[t._v("代码示例")]),t._v(" "),l("Row",{attrs:{gutter:"8"}},[l("Col",{attrs:{span:"12"}},[l("Demo",{attrs:{title:"基础用法"}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("Select",{attrs:{width:200},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},t._l(t.data,function(e,a){return l("Option",{key:a,attrs:{value:e.value}},[t._v(t._s(e.label))])})),t._v(" "),l("Button",{on:{click:function(e){t.select=""}}},[t._v("清除")]),t._v(" "),l("Button",{on:{click:function(e){t.select=1}}},[t._v("选中橘子")])],1),t._v(" "),l("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),l("code",[t._v("v-model")]),t._v("进行数据双向绑定")]),t._v(" "),l("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),l("Demo",{attrs:{title:"尺寸"}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("Select",{attrs:{width:200,value:""},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}},t._l(t.data,function(e,a){return l("Option",{key:a,attrs:{value:e.value}},[t._v(t._s(e.label))])})),t._v(" "),l("Select",{attrs:{width:200,mini:"",value:""},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}},t._l(t.data,function(e,a){return l("Option",{key:a,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1),t._v(" "),l("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),l("code",[t._v("width")]),t._v("和\n        "),l("code",[t._v("mini")]),t._v("可控制组件尺寸大小")]),t._v(" "),l("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.size))])]),t._v(" "),l("Demo",{attrs:{title:"可清除"}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("Select",{attrs:{width:200,clearable:""},model:{value:t.select2,callback:function(e){t.select2=e},expression:"select2"}},t._l(t.data,function(t,e){return l("Option",{key:e,attrs:{value:t.value,label:t.label}})})),t._v(" "),l("Select",{attrs:{width:200,clearable:"",mini:""},model:{value:t.select2,callback:function(e){t.select2=e},expression:"select2"}},t._l(t.data,function(t,e){return l("Option",{key:e,attrs:{value:t.value,label:t.label}})}))],1),t._v(" "),l("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),l("code",[t._v("clearable")]),t._v("可控制组件是否显示清除按钮")]),t._v(" "),l("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.clearable))])])],1),t._v(" "),l("Col",{attrs:{span:"12"}},[l("Demo",{attrs:{title:"可搜索"}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("Select",{attrs:{width:200,filterable:""},model:{value:t.select3,callback:function(e){t.select3=e},expression:"select3"}},t._l(t.data,function(t,e){return l("Option",{key:e,attrs:{value:t.value,label:t.label}})}))],1),t._v(" "),l("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),l("code",[t._v("filterable")]),t._v("可设置组件是否呈现搜索模式")]),t._v(" "),l("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.search))])]),t._v(" "),l("Demo",{attrs:{title:"禁用"}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("Select",{attrs:{disabled:"",width:200}}),t._v(" "),l("Select",{attrs:{width:200},model:{value:t.select4,callback:function(e){t.select4=e},expression:"select4"}},t._l(t.data,function(t,e){return l("Option",{key:e,attrs:{value:t.value,label:t.label,disabled:3==e}})}))],1),t._v(" "),l("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),l("code",[t._v("disabled")]),t._v("可设置组件是否被禁用")]),t._v(" "),l("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.disabled))])])],1)],1),t._v(" "),l("h3",[t._v("Select API")]),t._v(" "),t._m(0),t._v(" "),l("h3",[t._v("Option API")]),t._v(" "),t._m(1)],1)},n=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"table-border"},[l("table",[l("tr",[l("th",[t._v("属性")]),t._v(" "),l("th",[t._v("说明")]),t._v(" "),l("th",[t._v("类型")]),t._v(" "),l("th",[t._v("默认值")])]),t._v(" "),l("tr",[l("td",[t._v("value")]),t._v(" "),l("td",[t._v("指定选中项目的 value 值，可以使用 v-model 双向绑定数据")]),t._v(" "),l("td",[t._v("String,Number")]),t._v(" "),l("td",[t._v("-")])]),t._v(" "),l("tr",[l("td",[t._v("width")]),t._v(" "),l("td",[t._v("组件宽度")]),t._v(" "),l("td",[t._v("String,Number")]),t._v(" "),l("td",[t._v("-")])]),t._v(" "),l("tr",[l("td",[t._v("placeholder")]),t._v(" "),l("td",[t._v("选择框默认文字")]),t._v(" "),l("td",[t._v("String")]),t._v(" "),l("td",[t._v("请选择")])]),t._v(" "),l("tr",[l("td",[t._v("disabled")]),t._v(" "),l("td",[t._v("是否禁用当前项")]),t._v(" "),l("td",[t._v("Boolean")]),t._v(" "),l("td",[t._v("false")])]),t._v(" "),l("tr",[l("td",[t._v("clearable")]),t._v(" "),l("td",[t._v("是否可以清空选项")]),t._v(" "),l("td",[t._v("Boolean")]),t._v(" "),l("td",[t._v("false")])]),t._v(" "),l("tr",[l("td",[t._v("change")]),t._v(" "),l("td",[t._v("在选项状态发生改变时触发，返回选择项{value:xx,label:xx}")]),t._v(" "),l("td",[t._v("Function")]),t._v(" "),l("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"table-border"},[l("table",[l("tr",[l("th",[t._v("属性")]),t._v(" "),l("th",[t._v("说明")]),t._v(" "),l("th",[t._v("类型")]),t._v(" "),l("th",[t._v("默认值")])]),t._v(" "),l("tr",[l("td",[t._v("value")]),t._v(" "),l("td",[t._v("选项值，默认根据此属性值进行筛选，必填")]),t._v(" "),l("td",[t._v("String,Number")]),t._v(" "),l("td",[t._v("-")])]),t._v(" "),l("tr",[l("td",[t._v("label")]),t._v(" "),l("td",[t._v("选项显示的内容")]),t._v(" "),l("td",[t._v("String,Number")]),t._v(" "),l("td",[t._v("-")])]),t._v(" "),l("tr",[l("td",[t._v("mini")]),t._v(" "),l("td",[t._v("组件尺寸大小")]),t._v(" "),l("td",[t._v("Boolean ")]),t._v(" "),l("td",[t._v("false")])]),t._v(" "),l("tr",[l("td",[t._v("disabled")]),t._v(" "),l("td",[t._v("是否禁用当前项")]),t._v(" "),l("td",[t._v("Boolean")]),t._v(" "),l("td",[t._v("false")])]),t._v(" "),l("tr",[l("td",[t._v("transfer")]),t._v(" "),l("td",[t._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),t._v(" "),l("td",[t._v("Boolean")]),t._v(" "),l("td",[t._v("false")])])])])}];l.d(e,"a",function(){return a}),l.d(e,"b",function(){return n})},z7BB:function(t,e,l){"use strict";l.r(e);var a=l("BybE"),n=l("sOOp");for(var s in n)"default"!==s&&function(t){l.d(e,t,function(){return n[t]})}(s);var v=l("KHd+"),o=Object(v.a)(n.default,a.a,a.b,!1,null,null,null);e.default=o.exports}}]);