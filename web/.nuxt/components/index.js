export const LayoutFooter = () => import('../../components/layout-footer.vue' /* webpackChunkName: "components/layout-footer" */).then(c => wrapFunctional(c.default || c))
export const LayoutHeader = () => import('../../components/layout-header.vue' /* webpackChunkName: "components/layout-header" */).then(c => wrapFunctional(c.default || c))
export const ModuleArticleNew = () => import('../../components/module/article-new.vue' /* webpackChunkName: "components/module-article-new" */).then(c => wrapFunctional(c.default || c))
export const ModuleArticlePrev = () => import('../../components/module/article-prev.vue' /* webpackChunkName: "components/module-article-prev" */).then(c => wrapFunctional(c.default || c))
export const ModuleTypeList = () => import('../../components/module/type-list.vue' /* webpackChunkName: "components/module-type-list" */).then(c => wrapFunctional(c.default || c))

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
