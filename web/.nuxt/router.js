import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1657b236 = () => interopDefault(import('../pages/article/index.vue' /* webpackChunkName: "pages/article/index" */))
const _55a3b7c8 = () => interopDefault(import('../pages/article/_id.html.vue' /* webpackChunkName: "pages/article/_id.html" */))
const _52b864be = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _5fef8885 = () => interopDefault(import('../pages/_type.vue' /* webpackChunkName: "pages/_type" */))

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
    component: _1657b236,
    name: "article"
  }, {
    path: "/article/:id.html",
    component: _55a3b7c8,
    name: "article-id.html"
  }, {
    path: "/",
    component: _52b864be,
    name: "index"
  }, {
    path: "/:type",
    component: _5fef8885,
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
