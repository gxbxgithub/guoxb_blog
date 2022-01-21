const Router = require('koa-router')
const router = new Router({ prefix: '/user' })

const userController = require('../controller/user.controller')
const { userValidator, passValidator, cryptPassword, verifyLogin, verifyAuthUser } = require('../middleware/user.middleware')
const { auth } = require('../middleware/auth.middleware')

/** 账号相关 */
router.post('/login', userValidator, verifyLogin, userController.login)
router.put('/edit/password', auth, passValidator, cryptPassword, userController.editPassword)
router.put('/edit/info', auth, verifyAuthUser, userController.editUserInfo)

/** 菜单 */
router.get('/menus', auth, userController.menus)

module.exports = router