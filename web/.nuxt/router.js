import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7c50bc6e = () => interopDefault(import('../pages/article/index.vue' /* webpackChunkName: "pages/article/index" */))
const _6574fb1e = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _444703a2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _517e2769 = () => interopDefault(import('../pages/_type.vue' /* webpackChunkName: "pages/_type" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/article",
    component: _7c50bc6e,
    name: "article"
  }, {
    path: "/article/:id",
    component: _6574fb1e,
    name: "article-id"
  }, {
    path: "/",
    component: _444703a2,
    name: "index"
  }, {
    path: "/:type",
    component: _517e2769,
    name: "type"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
