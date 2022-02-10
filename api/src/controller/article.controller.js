const reqResult = require('../utils/reqResult')
const articleModel = require('../models/article')
const typeModel = require('../models/type')
class ArticleController {
  //#region 文章
  async list(ctx) {
    let { page, size, title, type, publish } = ctx.query
    page = parseInt(page || 1)
    size = parseInt(size || 10)
    let searchQuery = {}
    title && Object.assign(searchQuery, { title: { $regex: title, $options: 'i' } })
    type && Object.assign(searchQuery, { type })
    publish != undefined && publish != '' && Object.assign(searchQuery, { publish })
    try {
      let result = await articleModel.list(searchQuery, null, { skip: (page - 1) * size, limit: size })
      let typeIDs = []
      result.list.forEach(article => {
        typeIDs.push(article.type)
      })
      let types = await typeModel.list({ _id: { $in: typeIDs } }), typesDic = {}
      types.forEach(type => {
        typesDic[type._id] = type.name
      })
      result.list.forEach(article => {
        article._doc.typeName = typesDic[article.type]
      })

      ctx.body = reqResult.success('文章加载成功', result)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('加载文章错误'), ctx)
    }
  }
  async detail(ctx) {
    const { id } = ctx.params
    try {
      let info = await articleModel.detail({ _id: id })
      ctx.body = reqResult.success(null, info)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('加载文章错误'), ctx)
    }
  }
  async operation(ctx) {
    let { _id, title, intro, content, type, publish = 0, createAt } = ctx.request.body
    try {
      let result = null, message = null
      if (_id) {
        result = await articleModel.update({ _id, title, intro, content, type, publish, createAt })
        message = '文章更新成功'
      } else {
        result = await articleModel.add({ title, intro, content, type, publish, createAt })
        message = publish == 1 ? '文章发布成功' : '文章保存成功'
      }
      ctx.body = reqResult.success(message, result)
    } catch (error) {
      console.log('创建文章错误 - ', error)
      ctx.app.emit('error', reqResult.error('创建文章错误'), ctx)
    }
  }
  async publish(ctx) {
    let { _id, publish } = ctx.request.body
    try {
      if (!_id || publish == undefined) return ctx.app.emit('error', reqResult.PARAM_ILLEGAL('缺少参数'), ctx)
      let result = await articleModel.update({ _id, publish })
      ctx.body = reqResult.success(publish == 1 ? '文章已发布' : '文章已下架', result)
    } catch (error) {
      console.log('发布文章错误 - ', error)
      ctx.app.emit('error', reqResult.error('发布文章错误'), ctx)
    }
  }
  async delete(ctx) {
    let { _id } = ctx.query
    try {
      if (!_id) return ctx.app.emit('error', reqResult.PARAM_ILLEGAL('缺少参数'), ctx)
      let result = await articleModel.delete({ _id })
      ctx.body = reqResult.success('文章已删除', result)
    } catch (error) {
      console.log('删除文章错误 - ', error)
      ctx.app.emit('error', reqResult.error('删除文章错误'), ctx)
    }
  }
  //#endregion

  //#region 分类
  async types_list(ctx) {
    let { page, size, name } = ctx.query
    page = parseInt(page || 1)
    size = parseInt(size || 20)
    let searchQuery = {}
    name && Object.assign(searchQuery, { name })
    try {
      let result = await typeModel.list(searchQuery, null, { skip: (page - 1) * size, limit: size })
      ctx.body = reqResult.success('分类加载成功', result)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('加载分类错误'), ctx)
    }
  }
  async types_detail(ctx) {
    const { id } = ctx.params
    try {
      let info = await typeModel.detail({ _id: id })
      ctx.body = reqResult.success(null, info)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('加载分类错误'), ctx)
    }
  }
  async types_operation(ctx) {
    let { _id, name } = ctx.request.body
    try {
      let result = null, message = null
      if (_id) {
        result = await typeModel.update({ _id, name })
        message = '分类更新成功'
      } else {
        result = await typeModel.add({ name })
        message = '分类保存成功'
      }
      ctx.body = reqResult.success(message, result)
    } catch (error) {
      console.log('创建分类错误 - ', error)
      ctx.app.emit('error', reqResult.error('创建分类错误'), ctx)
    }
  }
  //#endregion
}

module.exports = new ArticleController()