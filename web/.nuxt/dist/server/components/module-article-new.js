exports.ids = [1];
exports.modules = {

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c9963da8", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_article_new_vue_vue_type_style_index_0_id_51ab2998_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_article_new_vue_vue_type_style_index_0_id_51ab2998_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_article_new_vue_vue_type_style_index_0_id_51ab2998_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_article_new_vue_vue_type_style_index_0_id_51ab2998_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_article_new_vue_vue_type_style_index_0_id_51ab2998_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".asset-view .asset-title[data-v-51ab2998]{padding-bottom:10px;font-family:\"Trebuchet MS\",Arial,\"Lucida Grande\",Verdana,Lucida,Helvetica,sans-serif;font-size:24px;font-weight:500;border-bottom:1px solid #dcdfe6;text-align:justify;line-height:30px}.asset-view .asset-tags[data-v-51ab2998]{font-size:16px;line-height:30px;text-align:right;color:#666}.asset-view .asset-tags a[data-v-51ab2998]{color:#fc6423}.asset-view .asset-content[data-v-51ab2998]{font-size:16px;line-height:26px;margin-top:10px}.asset-view .asset-content .asset-more-link[data-v-51ab2998]{margin-top:10px;display:inline-block;color:#fc6423}.asset-view .asset-content .asset-more-link[data-v-51ab2998]:hover{text-decoration:underline}.asset-view .asset-footer[data-v-51ab2998]{margin-top:5px}.asset-view .asset-footer .time[data-v-51ab2998]{font-size:14px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/module/article-new.vue?vue&type=template&id=51ab2998&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"module-view asset-view"},[_vm._ssrNode("<h2 class=\"asset-title\" data-v-51ab2998>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h2> "),_vm._ssrNode("<p class=\"asset-tags\" data-v-51ab2998>","</p>",[_vm._ssrNode("分类："),_c('nuxt-link',{attrs:{"to":'/' + _vm.article.typeInfo.shortName + '/'}},[_vm._v(_vm._s(_vm.article.typeInfo.name))])],2),_vm._ssrNode(" <div class=\"asset-content\" data-v-51ab2998><p class=\"asset-body\" data-v-51ab2998>"+(_vm._s(_vm.article.intro))+"</p> <a"+(_vm._ssrAttr("href",'/article/' + _vm.article._id))+" class=\"asset-more-link\" data-v-51ab2998>阅读全文 »</a></div> <div class=\"asset-footer\" data-v-51ab2998><p class=\"time\" data-v-51ab2998>"+_vm._ssrEscape(_vm._s(_vm.$dayjs(_vm.article.createAt).format('YYYY年M月D日 HH:mm')))+"</p></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/module/article-new.vue?vue&type=template&id=51ab2998&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/module/article-new.vue?vue&type=script&lang=js&
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
/* harmony default export */ var article_newvue_type_script_lang_js_ = ({
  name: 'ModuleArticleNew',
  props: {
    article: {
      type: Object,
      default: {}
    }
  }
});
// CONCATENATED MODULE: ./components/module/article-new.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_article_newvue_type_script_lang_js_ = (article_newvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/module/article-new.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_article_newvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "51ab2998",
  "f4212ffe"
  
)

/* harmony default export */ var article_new = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=module-article-new.js.map