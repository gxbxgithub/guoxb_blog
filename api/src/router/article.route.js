const Router = require('koa-router')
const router = new Router()
const articleController = require('../controller/article.controller')
const { auth } = require('../middleware/auth.middleware')
const { articleValidator } = require('../middleware/validate.middleware')

// 文章
router.get('/article/list', articleController.list)
router.get('/article/detail/:id', articleController.detail)
router.post('/article/create', auth, articleValidator, articleController.operation)
router.put('/article/edit', auth, articleValidator, articleController.operation)
router.put('/article/publish', auth, articleController.publish)
router.delete('/article/delete', auth, articleController.delete)

// 分类
router.get('/type/list', auth, articleController.types_list)
router.get('/type/detail/:id', auth, articleController.types_detail)
router.post('/type/create', auth, articleController.types_operation)
router.put('/type/edit', auth, articleController.types_operation)

module.exports = router