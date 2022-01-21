const Router = require('koa-router')
const router = new Router({ prefix: '/setting' })
const { auth } = require('../middleware/auth.middleware')

const settingController = require('../controller/setting.controller')
const { menuValidator } = require('../middleware/validate.middleware')

/** 菜单 */
router.get('/menus_auth', auth, settingController.menus_auth)
router.get('/menus', auth, settingController.menus)
router.get('/menus/search', auth, settingController.menus_search)
router.get('/menus/detail/:id', auth, settingController.menus_detail)
router.post('/menus/create', auth, menuValidator, settingController.menus_operation)
router.put('/menus/edit', auth, menuValidator, settingController.menus_operation)
router.delete('/menus/delete', auth, settingController.menus_delete)

/** SVG 图标 */
router.get('/svg', auth, settingController.svgs)
router.post('/svg/create', auth, settingController.svgs_create)

module.exports = router