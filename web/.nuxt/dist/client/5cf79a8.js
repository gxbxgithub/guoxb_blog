(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{356:function(t,e,o){var content=o(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("136859a2",content,!0,{sourceMap:!1})},361:function(t,e,o){"use strict";o(356)},362:function(t,e,o){var n=o(34)(!1);n.push([t.i,'.asset-view .asset-title[data-v-606fb723]{padding-bottom:10px;font-family:"Trebuchet MS",Arial,"Lucida Grande",Verdana,Lucida,Helvetica,sans-serif;font-size:24px;font-weight:500;border-bottom:1px solid #dcdfe6;text-align:justify;line-height:30px}.asset-view .asset-tags[data-v-606fb723]{font-size:16px;line-height:30px;text-align:right;color:#666}.asset-view .asset-tags a[data-v-606fb723]{color:#fc6423}.asset-view .asset-content[data-v-606fb723]{font-size:16px;line-height:26px;margin-top:10px}.asset-view .asset-content .asset-body[data-v-606fb723]{white-space:pre-wrap}.asset-view .asset-content .asset-more-link[data-v-606fb723]{margin-top:10px;display:inline-block;color:#fc6423}.asset-view .asset-content .asset-more-link[data-v-606fb723]:hover{text-decoration:underline}.asset-view .asset-footer[data-v-606fb723]{margin-top:5px}.asset-view .asset-footer .time[data-v-606fb723]{font-size:14px}',""]),t.exports=n},365:function(t,e,o){"use strict";o.r(e);var n={name:"ModuleArticleNew",props:{article:{type:Object,default:{}}}},l=(o(361),o(19)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"module-view asset-view"},[o("h2",{staticClass:"asset-title"},[t._v(t._s(t.article.title))]),t._v(" "),o("p",{staticClass:"asset-tags"},[t._v("分类："),o("nuxt-link",{attrs:{to:"/"+t.article.typeInfo.shortName+"/"}},[t._v(t._s(t.article.typeInfo.name))])],1),t._v(" "),o("div",{staticClass:"asset-content"},[o("p",{staticClass:"asset-body"},[t._v(t._s(t.article.intro))]),t._v(" "),o("nuxt-link",{staticClass:"asset-more-link",attrs:{to:"/article/"+t.article._id+".html"}},[t._v("阅读全文 »")])],1),t._v(" "),o("div",{staticClass:"asset-footer"},[o("p",{staticClass:"time"},[t._v(t._s(t.$dayjs(t.article.createAt).format("YYYY年M月D日")))])])])}),[],!1,null,"606fb723",null);e.default=component.exports}}]);