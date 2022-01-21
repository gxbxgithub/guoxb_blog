const jwt = require('jsonwebtoken')
const reqResult = require('../utils/reqResult')
const { JWT_SECRET } = require('../config/config.default')
const userModel = require('../models/user')

class UserController {
  /**
   * 账号相关
   */
  //#region 
  async register(ctx) {
    let { username, password } = ctx.request.body
    try {
      let result = await userModel.createUser({ username, password })
      ctx.body = reqResult.success('用户注册成功', result)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('用户注册错误'), ctx)
    }
  }
  async login(ctx) {
    let { username } = ctx.request.body
    try {
      const userInfo = await userModel.getUserInfo({ username })
      const { password, ...resInfo } = userInfo && JSON.parse(JSON.stringify(userInfo))
      resInfo.token = jwt.sign(resInfo, JWT_SECRET, { expiresIn: '1d' })
      ctx.body = reqResult.success('登录成功', resInfo)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('用户登录错误'), ctx)
    }
  }
  async editPassword(ctx) {
    const { _id } = ctx.state.user
    const { password } = ctx.request.body
    try {
      await userModel.updateInfoById({ _id, password })
      ctx.body = reqResult.success('用户密码修改成功')
    } catch (error) {
      ctx.app.emit('error', reqResult.error('用户信息修改错误'), ctx)
    }
  }
  async editUserInfo(ctx) {
    const { _id } = ctx.state.user
    const { name, isAdmin } = ctx.request.body
    try {
      await userModel.updateInfoById({ _id, name, isAdmin })
      ctx.body = reqResult.success('用户信息修改成功')
    } catch (error) {
      ctx.app.emit('error', reqResult.error('用户信息修改错误'), ctx)
    }
  }
  //#endregion

  /**
   * 菜单
   */
  async menus(ctx) {
    const user = ctx.state.user
    let nums = [
      100,
      200,
      201,
      202,
      203,
      105,
      107,
      255,
      307,
      522,
      977
    ]
    let menus = {
      100: { num: 100, parent: '977' },
      200: { num: 200, parent: '977' },
      201: { num: 201, parent: '200' },
      202: { num: 202, parent: '200' },
      203: { num: 203, parent: '522' },
      105: { num: 105, parent: '522' },
      107: { num: 107, parent: '105' },
      255: { num: 255, parent: '203' },
      307: { num: 307, parent: '201' },
      522: { num: 522, parent: '' },
      977: { num: 977, parent: '' },
    }
    // 977 - 100
    //       200 - 201 - 307
    //             202
    // 522 - 203 - 255
    //       105 - 107
    let newMenus = []
    nums.forEach(num => {
      let menu = menus[num]
      let parent = menu.parent
      if (parent) {
        let menuChild = menus[parent].child || []
        menuChild.push(menu)
        menus[parent].child = menuChild
      } else {
        newMenus.push(menus[num])
      }
    })

    ctx.body = reqResult.success('返回菜单成功', newMenus)
  }
}

module.exports = new UserController()