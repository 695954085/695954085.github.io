(function(t){function e(e){for(var a,o,r=e[0],s=e[1],c=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&m.push(l[o][0]),l[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,r=1;r<i.length;r++){var s=i[r];0!==l[s]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},l={app:0},n=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p=" /";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=s;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"18ec":function(t,e,i){},2178:function(t,e,i){"use strict";i("18ec")},"3cf6":function(t,e,i){"use strict";i("6e41")},"3eb2":function(t,e,i){t.exports=i.p+"img/cgb_logo.bab7c5b6.jpeg"},4867:function(t,e,i){"use strict";i("af97")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],o=(i("034f"),i("2877")),r={},s=Object(o["a"])(r,l,n,!1,null,null,null),c=s.exports,p=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-header",{staticClass:"el-header-demo"},[i("el-image",{staticStyle:{width:"200px",height:"60px",display:"inline-block"},attrs:{src:t.url,fit:"contain"}}),i("div",{staticStyle:{display:"inline-block",height:"30px",position:"relative",top:"-15px","border-left":"2px black solid","padding-right":"10px"}}),i("span",{staticStyle:{"font-size":"19px","font-weight":"bold",position:"relative",top:"-24px"}},[t._v("供应链金融平台")]),i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","active-text-color":"#FF0000",router:""}},[i("el-menu-item",{attrs:{index:"user"}},[t._v("用户中心")]),i("el-menu-item",{attrs:{index:"portal"}},[t._v("门户中心")]),i("el-menu-item",{attrs:{index:"jinpiao"}},[t._v("金票")])],1),i("span",{staticStyle:{float:"right",position:"relative",top:"18px","margin-left":"10px",cursor:"pointer"},on:{click:t.unLogin}},[t._v("退出系统")]),i("i",{staticClass:"el-icon-switch-button",staticStyle:{position:"relative",float:"right","font-size":"30px",color:"red",top:"15px",cursor:"pointer"},on:{click:t.unLogin}}),i("div",{staticStyle:{display:"inline-block",height:"60px",position:"relative","border-left":"1px #00221121 solid",margin:"0px 20px",float:"right"}}),i("div",{staticStyle:{float:"right",display:"flex","flex-direction":"column",height:"60px","justify-content":"center","font-size":"14px","margin-left":"5px"}},[i("span",[t._v("YoYo")]),i("span",{staticStyle:{"margin-top":"1px"}},[t._v("广发银行")])]),i("el-avatar",{staticStyle:{float:"right",top:"9px",position:"relative"},attrs:{icon:"el-icon-user-solid"}})],1),i("el-main",[i("el-container",[i("el-aside",{staticStyle:{"box-shadow":"0 0 19px -10px"},attrs:{width:"200px"}},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","active-text-color":"#FF0000"},on:{open:t.handleOpen,close:t.handleClose,select:t.handleSelect}},[i("el-menu-item",{attrs:{index:"1"}},[i("i",{staticClass:"el-icon-menu"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页")])]),i("el-submenu",{attrs:{index:"2"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-monitor"}),i("span",[t._v("系统管理")])]),i("el-menu-item",{attrs:{index:"commission"}},[t._v("待办")])],2),i("el-submenu",{attrs:{index:"3"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-document"}),i("span",[t._v("业务管理")])]),i("el-menu-item-group",[i("template",{slot:"title"},[t._v("分组一")]),i("el-menu-item",{attrs:{index:"1-1"}},[t._v("选项1")]),i("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),i("el-menu-item-group",{attrs:{title:"分组2"}},[i("el-menu-item",{attrs:{index:"1-3"}},[t._v("选项3")])],1),i("el-submenu",{attrs:{index:"1-4"}},[i("template",{slot:"title"},[t._v("选项4")]),i("el-menu-item",{attrs:{index:"1-4-1"}},[t._v("选项1")])],2)],2),i("el-submenu",{attrs:{index:"4"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-document"}),i("span",[t._v("业务查询")])]),i("el-menu-item-group",[i("template",{slot:"title"},[t._v("分组一")]),i("el-menu-item",{attrs:{index:"1-1"}},[t._v("选项1")]),i("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],2),i("el-menu-item-group",{attrs:{title:"分组2"}},[i("el-menu-item",{attrs:{index:"1-3"}},[t._v("选项3")])],1),i("el-submenu",{attrs:{index:"1-4"}},[i("template",{slot:"title"},[t._v("选项4")]),i("el-menu-item",{attrs:{index:"1-4-1"}},[t._v("选项1")])],2)],2)],1)],1),i("el-main",[i("router-view")],1)],1)],1)],1)},m=[],u={data:function(){return{activeIndex:"jinpiao",url:i("3eb2")}},methods:{handleSelect:function(){this.$router.push("commission")},unLogin:function(){this.$router.push("/")}}},f=u,h=(i("3cf6"),Object(o["a"])(f,d,m,!1,null,"4111530d",null)),x=h.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{staticClass:"login"},[i("div",{staticClass:"login-header"},[i("el-image",{staticStyle:{width:"200px",height:"60px",display:"inline-block"},attrs:{src:t.url,fit:"contain"}}),i("div",{staticStyle:{display:"inline-block",height:"30px",position:"relative",top:"-15px","border-left":"2px black solid","padding-right":"10px"}}),i("span",{staticStyle:{"font-size":"19px","font-weight":"bold",position:"relative",top:"-24px"}},[t._v("供应链金融平台")])],1),i("div",{staticClass:"login-body"},[i("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"密码登录",name:"first"}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[i("el-form-item",{attrs:{"label-width":"0px"}},[i("el-input",{attrs:{placeholder:"请输入账号"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[i("template",{slot:"prepend"},[i("i",{staticClass:"el-icon-user",staticStyle:{color:"red","font-size":"20px"}})])],2)],1),i("el-form-item",{attrs:{"label-width":"0px"}},[i("el-input",{attrs:{placeholder:"请输入密码"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[i("template",{slot:"prepend"},[i("i",{staticClass:"el-icon-unlock",staticStyle:{color:"red","font-size":"20px"}})])],2)],1),i("el-form-item",{attrs:{"label-width":"0px"}},[i("el-button",{staticStyle:{width:"100%","background-color":"red"},attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")])],1)],1),i("span",{staticStyle:{color:"red",float:"right",cursor:"pointer"}},[t._v("找回密码")])],1),i("el-tab-pane",{attrs:{label:"短信登录",name:"second"}})],1)],1)])])},v=[],g={data:function(){return{url:i("3eb2"),form:{name:""},activeName:"first"}},methods:{login:function(){this.$router.push("/jinpiao")}}},y=g,_=(i("d6db"),Object(o["a"])(y,b,v,!1,null,null,null)),S=_.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("User Center")])},C=[],w={},I=Object(o["a"])(w,k,C,!1,null,null,null),j=I.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("portal center")])},O=[],z={},E=Object(o["a"])(z,$,O,!1,null,null,null),P=E.exports,M=function(){var t=this,e=this,i=e.$createElement,a=e._self._c||i;return a("el-container",[a("el-main",{staticClass:"el-main-demo",staticStyle:{padding:"10px",display:"flex"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-badge",{staticClass:"item",attrs:{value:0}},[a("span",[e._v("我的待办")])])],1),a("div",{staticStyle:{display:"flex",position:"relative",top:"50%","flex-direction":"column","text-align":"center",transform:"translate(0, -50%)"}},[a("i",{staticClass:"el-icon-document",staticStyle:{color:"red",dispay:"block","margin-bottom":"10px","font-size":"40px"}}),a("span",[e._v("暂无数据")])])]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("常用功能")])]),a("div",{staticClass:"box-card-icon",on:{click:function(){return t.$router.push("commission")}}},[a("span",{staticStyle:{display:"inline-block",width:"50px",height:"50px","border-radius":"50px","background-color":"green"}},[a("i",{staticClass:"el-icon-s-order",staticStyle:{color:"white","font-size":"30px",position:"relative",top:"50%",transform:"translate(0, -50%)"}})]),a("span",{staticStyle:{"margin-top":"10px"}},[e._v("转单")])]),a("div",{staticClass:"box-card-icon"},[a("span",{staticStyle:{display:"inline-block",width:"50px",height:"50px","border-radius":"50px","background-color":"orange"}},[a("i",{staticClass:"el-icon-search",staticStyle:{color:"white","font-size":"30px",position:"relative",top:"50%",transform:"translate(0, -50%)"}})]),a("span",{staticStyle:{"margin-top":"10px"}},[e._v("交易查询")])]),a("div",{staticClass:"box-card-icon"},[a("span",{staticStyle:{display:"inline-block",width:"50px",height:"50px","border-radius":"50px","background-color":"red"}},[a("i",{staticClass:"el-icon-money",staticStyle:{color:"white","font-size":"30px",position:"relative",top:"50%",transform:"translate(0, -50%)"}})]),a("span",{staticStyle:{"margin-top":"10px"}},[e._v("账单")])])]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("应收金票")])]),a("div",{staticClass:"box-card-jinpiao"},[a("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","border-radius":"10px","background-color":"red"}}),a("span",{staticStyle:{"margin-left":"10px"}},[e._v("持有未到期的金单总额")]),a("span",{staticStyle:{float:"right"}},[a("i",{staticClass:"el-icon-arrow-right"})]),a("span",{staticStyle:{float:"right",color:"red","margin-right":"15px"}},[e._v("760.55元")])]),a("div",{staticClass:"box-card-jinpiao"},[a("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","border-radius":"10px","background-color":"red"}}),a("span",{staticStyle:{"margin-left":"10px"}},[e._v("今日到期的金单总额")]),a("span",{staticStyle:{float:"right"}},[a("i",{staticClass:"el-icon-arrow-right"})]),a("span",{staticStyle:{float:"right",color:"red","margin-right":"15px"}},[e._v("0.00元")])]),a("div",{staticClass:"box-card-jinpiao"},[a("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","border-radius":"10px","background-color":"red"}}),a("span",{staticStyle:{"margin-left":"10px"}},[e._v("本月到期的金单总额")]),a("span",{staticStyle:{float:"right"}},[a("i",{staticClass:"el-icon-arrow-right"})]),a("span",{staticStyle:{float:"right",color:"red","margin-right":"15px"}},[e._v("0.00元")])])]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("应收金票")])]),a("div",{staticClass:"box-card-jinpiao"},[a("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","border-radius":"10px","background-color":"red"}}),a("span",{staticStyle:{"margin-left":"10px"}},[e._v("持有未到期的金单总额")]),a("span",{staticStyle:{float:"right"}},[a("i",{staticClass:"el-icon-arrow-right"})]),a("span",{staticStyle:{float:"right",color:"red","margin-right":"15px"}},[e._v("760.55元")])]),a("div",{staticClass:"box-card-jinpiao"},[a("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","border-radius":"10px","background-color":"red"}}),a("span",{staticStyle:{"margin-left":"10px"}},[e._v("今日到期的金单总额")]),a("span",{staticStyle:{float:"right"}},[a("i",{staticClass:"el-icon-arrow-right"})]),a("span",{staticStyle:{float:"right",color:"red","margin-right":"15px"}},[e._v("0.00元")])]),a("div",{staticClass:"box-card-jinpiao"},[a("span",{staticStyle:{display:"inline-block",width:"10px",height:"10px","border-radius":"10px","background-color":"red"}}),a("span",{staticStyle:{"margin-left":"10px"}},[e._v("本月到期的金单总额")]),a("span",{staticStyle:{float:"right"}},[a("i",{staticClass:"el-icon-arrow-right"})]),a("span",{staticStyle:{float:"right",color:"red","margin-right":"15px"}},[e._v("0.00元")])])])],1)],1)},T=[],F={methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},L=F,N=(i("4867"),Object(o["a"])(L,M,T,!1,null,null,null)),J=N.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-header",{staticStyle:{"padding-top":"30px"}},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/jinpiao"}}},[t._v("首页")]),i("el-breadcrumb-item",{attrs:{to:{path:"/workbench"}}},[t._v("工作台")]),i("el-breadcrumb-item",[t._v("待办")])],1)],1),i("el-main",[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[i("el-form-item",{staticStyle:{"margin-right":"50px"},attrs:{label:"交易编号"}},[i("el-input",{attrs:{placeholder:"请输入交易编号"},model:{value:t.formInline.id,callback:function(e){t.$set(t.formInline,"id",e)},expression:"formInline.id"}})],1),i("el-form-item",{staticStyle:{"margin-right":"50px"},attrs:{label:"当前节点"}},[i("el-input",{attrs:{placeholder:"请输入交易编号"},model:{value:t.formInline.node,callback:function(e){t.$set(t.formInline,"node",e)},expression:"formInline.node"}})],1),i("el-form-item",{attrs:{label:"当前节点"}},[i("el-input",{attrs:{placeholder:"请输入交易编号"},model:{value:t.formInline.node,callback:function(e){t.$set(t.formInline,"node",e)},expression:"formInline.node"}})],1)],1),i("el-form",{staticClass:"demo-form-inline",staticStyle:{"margin-top":"30px"}},[i("el-form-item",{staticStyle:{"margin-right":"50px"},attrs:{label:"交易编号"}},[i("el-input",{attrs:{placeholder:"请输入交易编号"},model:{value:t.formInline.id,callback:function(e){t.$set(t.formInline,"id",e)},expression:"formInline.id"}})],1),i("el-form-item",{staticStyle:{"margin-right":"50px"},attrs:{label:"当前节点"}},[i("el-input",{attrs:{placeholder:"请输入交易编号"},model:{value:t.formInline.node,callback:function(e){t.$set(t.formInline,"node",e)},expression:"formInline.node"}})],1),i("el-form-item",{attrs:{label:"当前节点"}},[i("el-input",{attrs:{placeholder:"请输入交易编号"},model:{value:t.formInline.node,callback:function(e){t.$set(t.formInline,"node",e)},expression:"formInline.node"}})],1)],1)],1)],1)},U=[],Y={data:function(){return{formInline:{id:"",node:""}}},methods:{onSubmit:function(){console.log("submit!")}}},q=Y,A=(i("d051"),Object(o["a"])(q,R,U,!1,null,null,null)),B=A.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-header",{staticStyle:{"padding-top":"30px"}},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/jinpiao"}}},[t._v("首页")]),i("el-breadcrumb-item",{attrs:{to:{path:"/workbench"}}},[t._v("工作台")])],1)],1),i("el-main",[i("el-tabs",{staticClass:"el-tabs-demo",attrs:{type:"card"}},[i("el-tab-pane",{attrs:{label:"User"}},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[i("el-form-item",{staticStyle:{"margin-right":"50px"},attrs:{label:"交易编号"}},[i("el-input",{attrs:{placeholder:"请输入交易编号"},model:{value:t.formInline.id,callback:function(e){t.$set(t.formInline,"id",e)},expression:"formInline.id"}})],1),i("el-form-item",{staticStyle:{"margin-right":"50px"},attrs:{label:"当前节点"}},[i("el-input",{attrs:{placeholder:"请输入交易编号"},model:{value:t.formInline.node,callback:function(e){t.$set(t.formInline,"node",e)},expression:"formInline.node"}})],1),i("el-form-item",{attrs:{label:"当前节点"}},[i("el-input",{attrs:{placeholder:"请输入交易编号"},model:{value:t.formInline.node,callback:function(e){t.$set(t.formInline,"node",e)},expression:"formInline.node"}})],1)],1)],1),i("el-tab-pane",{attrs:{label:"Config"}},[t._v("Config")]),i("el-tab-pane",{attrs:{label:"Role"}},[t._v("Role")]),i("el-tab-pane",{attrs:{label:"Task"}},[t._v("Task")])],1),i("el-form",{staticClass:"demo-form-inline",staticStyle:{"margin-top":"30px"}},[i("el-form-item",{staticStyle:{"margin-right":"50px"},attrs:{label:"交易编号"}},[i("el-input",{attrs:{placeholder:"请输入交易编号"},model:{value:t.formInline.id,callback:function(e){t.$set(t.formInline,"id",e)},expression:"formInline.id"}})],1),i("el-form-item",{staticStyle:{"margin-right":"50px"},attrs:{label:"当前节点"}},[i("el-input",{attrs:{placeholder:"请输入交易编号"},model:{value:t.formInline.node,callback:function(e){t.$set(t.formInline,"node",e)},expression:"formInline.node"}})],1)],1)],1)],1)},G=[],H={data:function(){return{formInline:{id:"",node:""}}},methods:{onSubmit:function(){console.log("submit!")}}},K=H,Q=(i("2178"),Object(o["a"])(K,D,G,!1,null,null,null)),V=Q.exports;a["default"].use(p["a"]);var W=[{path:"/",redirect:"login"},{path:"/",name:"Main",component:x,children:[{path:"user",component:j},{path:"portal",component:P},{path:"jinpiao",component:J},{path:"commission",component:B},{path:"workbench",component:V}]},{path:"/login",name:"Login",component:S}],X=new p["a"]({mode:"history",base:" /",routes:W}),Z=X,tt=i("2f62");a["default"].use(tt["a"]);var et=new tt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),it=i("5c96"),at=i.n(it);i("0fae");a["default"].config.productionTip=!1,a["default"].use(at.a),new a["default"]({router:Z,store:et,render:function(t){return t(c)}}).$mount("#app")},"6e41":function(t,e,i){},8580:function(t,e,i){},"85ec":function(t,e,i){},af97:function(t,e,i){},d051:function(t,e,i){"use strict";i("8580")},d6db:function(t,e,i){"use strict";i("e67a")},e67a:function(t,e,i){}});
//# sourceMappingURL=app.1f299ee0.js.map