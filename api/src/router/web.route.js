const Router = require('koa-router')
const router = new Router({ prefix: '/web' })

const webController = require('../controller/web.controller')

router.get('/article/list', webController.articleList)
router.get('/article/detail/:id', webController.articleDetail)

router.get('/type/list', webController.typeList)
router.get('/type/detail/:name', webController.typeInfo)


module.exports = router