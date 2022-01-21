const menuModel = require('../models/menu')
const userModel = require('../models/user')
const reqResult = require('../utils/reqResult')
class SettingController {
  //#region 菜单
  async menus_auth(ctx) {
    try {
      // 获取用户权限菜单
      const menus = await menuModel.list(null, { sort: { weight: -1 } })
      // 包装菜单
      let menusDic = {}
      menus.forEach(menu => {
        menusDic[menu._id] = menu._doc
      })
      let newMenus = []
      Object.keys(menusDic).forEach(key => {
        let menu = menusDic[key]
        let parent = menu.parent
        if (parent) {
          let menuChild = menusDic[parent].child || []
          menuChild.push(menu)
          menusDic[parent].child = menuChild
        } else {
          newMenus.push(menusDic[key])
        }
      })
      ctx.body = reqResult.success('菜单加载成功', newMenus)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('加载菜单错误'), ctx)
    }
  }
  async menus(ctx) {
    let { page, size, name } = ctx.query
    page = parseInt(page || 1)
    size = parseInt(size || 10)
    let searchQuery = {}
    name && Object.assign(searchQuery, { name: { $regex: name } })
    try {
      let result = await menuModel.listWithTotal(searchQuery, null, { skip: (page - 1) * size, limit: size })
      // 获取父级菜单
      let parentIDs = []
      result.list.forEach(menu => {
        if (menu.parent) parentIDs.push(menu.parent)
      })
      let parentMenus = await menuModel.list({ _id: { $in: parentIDs } })
      let parentMenusDic = {}
      parentMenus.forEach(menu => {
        parentMenusDic[menu._id] = menu
      })
      result.list.forEach(menu => {
        if (menu.parent) menu._doc.parent = parentMenusDic[menu.parent]
      })
      ctx.body = reqResult.success('菜单加载成功', result)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('加载菜单列表错误'), ctx)
    }
  }
  async menus_search(ctx) {
    const { name } = ctx.query
    let searchQuery = {}
    if (!name) {
      return ctx.body = reqResult.success(null, [])
    }
    Object.assign(searchQuery, { name: { $regex: name } })
    try {
      let result = await menuModel.list(searchQuery)
      ctx.body = reqResult.success('菜单加载成功', result)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('加载菜单列表错误'), ctx)
    }
  }
  async menus_detail(ctx) {
    const { id } = ctx.params
    try {
      let info = await menuModel.detail({ _id: id })
      if (info.parent) {
        let parentMenu = await menuModel.detail({ _id: info.parent })
        info._doc.parent = parentMenu
      }
      ctx.body = reqResult.success(null, info)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('加载菜单错误'), ctx)
    }
  }
  async menus_operation(ctx) {
    let { _id, name, icon, parent, path, weight } = ctx.request.body
    try {
      let result = null, message = null
      if (_id) {
        result = await menuModel.update({ _id, name, icon, parent, path, weight })
        message = '菜单更新成功'
      } else {
        result = await menuModel.add({ name, icon, parent, path, weight })
        message = '菜单保存成功'
      }
      ctx.body = reqResult.success(message, result)
    } catch (error) {
      console.log('菜单操作错误 - ', error)
      ctx.app.emit('error', reqResult.error('菜单操作错误'), ctx)
    }
  }
  async menus_delete(ctx) {
    let { _id } = ctx.request.query
    try {
      if (!_id) return ctx.app.emit('error', reqResult.PARAM_ILLEGAL('缺少参数'), ctx)
      let result = await menuModel.delete(_id)
      ctx.body = reqResult.success('菜单已删除', result)
    } catch (error) {
      console.log('删除菜单错误 - ', error)
      ctx.app.emit('error', reqResult.error('删除菜单错误'), ctx)
    }
  }
  //#endregion

  //#region SVG
  async svgs(ctx) {
    let { page, size } = ctx.query
    let searchQuery = {}
    let options = null
    if (page || size) {
      page = parseInt(page)
      size = parseInt(size)
      options = { skip: (page - 1) * size, limit: size }
    }
    try {
      let result = await menuModel.svg_list(searchQuery)
      ctx.body = reqResult.success('图标加载成功', result)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('加载图标列表错误'), ctx)
    }
  }
  async svgs_create(ctx) {
    let { name, code } = ctx.request.body
    try {
      if (!name || !code) return reqResult.params()
      const result = await menuModel.svg_add({ name, code })
      ctx.body = reqResult.success('图标保存成功', result)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('图标添加错误'), ctx)
    }
  }
  //#endregion
}

module.exports = new SettingController()