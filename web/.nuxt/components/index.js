export { default as LayoutFooter } from '../../components/layout-footer.vue'
export { default as LayoutHeader } from '../../components/layout-header.vue'
export { default as LayoutMenu } from '../../components/layout-menu.vue'
export { default as ModuleArticleNew } from '../../components/module/article-new.vue'
export { default as ModuleArticlePrev } from '../../components/module/article-prev.vue'
export { default as ModuleTypeList } from '../../components/module/type-list.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
