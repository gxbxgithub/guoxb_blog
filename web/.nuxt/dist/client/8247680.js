(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{368:function(t,e,r){var content=r(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("6ed35b08",content,!0,{sourceMap:!1})},373:function(t,e,r){"use strict";r(368)},374:function(t,e,r){var l=r(34)(!1);l.push([t.i,'.article-view .module-title[data-v-f9d9e844]{font-size:28px;font-weight:700;line-height:2em;border-bottom-width:2px;font-family:"Trebuchet MS",Arial,"Lucida Grande",Verdana,Lucida,Helvetica,sans-serif}.article-view .article-time[data-v-f9d9e844],.article-view .article-type[data-v-f9d9e844]{color:#666;margin:1em 0}.article-view .article-time a[data-v-f9d9e844],.article-view .article-type a[data-v-f9d9e844]{color:#666}.article-view .article-time a[data-v-f9d9e844]:hover,.article-view .article-type a[data-v-f9d9e844]:hover{color:#fc6423}',""]),t.exports=l},384:function(t,e,r){"use strict";r.r(e);var l=r(9),c=(r(43),{head:function(){return{title:this.article.title+" - 郭晓波的博客"}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,l=t.params,e.next=3,r.$get("web/article/detail/"+l.id);case 3:return c=e.sent,e.abrupt("return",{article:c.data});case 5:case"end":return e.stop()}}),e)})))()}}),n=(r(373),r(19)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-view one-column"},[r("ul",{staticClass:"layout guide-view"},[r("li",[r("nuxt-link",{attrs:{to:"/"}},[t._v("首页 ")]),t._v("»")],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/article/"}},[t._v("分类 ")]),t._v("»")],1),t._v(" "),r("li",[t._v(t._s(t.article.title))])]),t._v(" "),r("div",{staticClass:"layout"},[r("div",{staticClass:"module-view article-view"},[r("div",{staticClass:"module-title"},[r("h1",[t._v(t._s(t.article.title))])]),t._v(" "),r("p",{staticClass:"article-type"},[t._v("分类："),r("nuxt-link",{attrs:{to:"/"+t.article.typeInfo.shortName+"/"}},[t._v(t._s(t.article.typeInfo.name))])],1),t._v(" "),r("p",{staticClass:"article-time"},[t._v("日期："+t._s(t.$dayjs(t.article.createAt).format("YYYY年M月D日")))]),t._v(" "),r("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-view",domProps:{innerHTML:t._s(t.$md.render(t.article.content))}})])])])}),[],!1,null,"f9d9e844",null);e.default=component.exports}}]);