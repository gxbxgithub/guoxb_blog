exports.ids = [5];
exports.modules = {

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6ed35b08", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_f9d9e844_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_f9d9e844_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_f9d9e844_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_f9d9e844_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_f9d9e844_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".article-view .module-title[data-v-f9d9e844]{font-size:28px;font-weight:700;line-height:2em;border-bottom-width:2px;font-family:\"Trebuchet MS\",Arial,\"Lucida Grande\",Verdana,Lucida,Helvetica,sans-serif}.article-view .article-time[data-v-f9d9e844],.article-view .article-type[data-v-f9d9e844]{color:#666;margin:1em 0}.article-view .article-time a[data-v-f9d9e844],.article-view .article-type a[data-v-f9d9e844]{color:#666}.article-view .article-time a[data-v-f9d9e844]:hover,.article-view .article-type a[data-v-f9d9e844]:hover{color:#fc6423}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/_id.vue?vue&type=template&id=f9d9e844&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-view one-column"},[_vm._ssrNode("<ul class=\"layout guide-view\" data-v-f9d9e844>","</ul>",[_vm._ssrNode("<li data-v-f9d9e844>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("首页 ")]),_vm._ssrNode("»")],2),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-f9d9e844>","</li>",[_c('nuxt-link',{attrs:{"to":"/article/"}},[_vm._v("分类 ")]),_vm._ssrNode("»")],2),_vm._ssrNode(" <li data-v-f9d9e844>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</li>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"layout\" data-v-f9d9e844>","</div>",[_vm._ssrNode("<div class=\"module-view article-view\" data-v-f9d9e844>","</div>",[_vm._ssrNode("<div class=\"module-title\" data-v-f9d9e844><h1 data-v-f9d9e844>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1></div> "),_vm._ssrNode("<p class=\"article-type\" data-v-f9d9e844>","</p>",[_vm._ssrNode("分类："),_c('nuxt-link',{attrs:{"to":'/' + _vm.article.typeInfo.shortName + '/'}},[_vm._v(_vm._s(_vm.article.typeInfo.name))])],2),_vm._ssrNode(" <p class=\"article-time\" data-v-f9d9e844>"+_vm._ssrEscape("日期："+_vm._s(_vm.$dayjs(_vm.article.createAt).format('YYYY年M月D日')))+"</p> <div class=\"code-view\" data-v-f9d9e844>"+(_vm._s(_vm.$md.render(_vm.article.content)))+"</div>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/_id.vue?vue&type=template&id=f9d9e844&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  head() {
    return {
      title: this.article.title + ' - 郭晓波的博客'
    };
  },

  async asyncData({
    $axios,
    params
  }) {
    let result = await $axios.$get("web/article/detail/" + params.id);
    return {
      article: result.data
    };
  }

});
// CONCATENATED MODULE: ./pages/article/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f9d9e844",
  "43cc6e18"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map