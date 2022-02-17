export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '郭晓波的博客',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,user-scalable=no,minimum-scale=1.0,maximum-scale=1.0' },
      { hid: 'description', name: 'description', content: '郭晓波的博客_前端技术分享，问题笔记，生活随笔!' },
      { name: 'keywords', content: '前端技术,问题笔记,生活随笔' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/common.scss',
    '@assets/css/markdown.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/elementui',
    // '@/plugins/vue-highlight'
    {
      src: '@/plugins/vue-highlight',
      ssr: false
    },
    {
      src: '@/plugins/route',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    '@nuxtjs/dayjs'
  ],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    runtime: true
  },

  // Optional
  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    defaultTimeZone: 'Asia/BeiJing',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone' // import 'dayjs/plugin/timezone'
    ] // Your Day.js plugin
  },

  styleResources: {
    scss: ['@assets/css/variable.scss']
  },

  axios: {
    proxy: true,
    prefix: '/api',
  },

  proxy: {
    '/api': {
      target: process.env.NODE_ENV == 'dev' ? 'http://localhost:3130' : 'http://172.17.0.1:3130',
      // pathRewrite: { '^/api': '' }
    }
  },

  // hooks: {
  //   'vue-renderer:ssr:context'(context) {
  //     const routePath = JSON.stringify(context.nuxt.routePath)
  //     context.nuxt = { serverRendered: true, routePath }
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [
      "axios", 
      // "element-ui"
    ],
    // 开启打包分析
    analyze: false,
    assetFilter: function(assetFilename) {	    		
      return assetFilename.endsWith('.js');	    	
    }
  },
}
