const Router = require('koa-router')
const router = new Router({ prefix: '/web' })

const webController = require('../controller/web.controller')

router.get('/article/list', webController.articleList)
router.get('/article/detail/:id', webController.articleDetail)

router.get('/type/list', webController.typeList)

module.exports = router