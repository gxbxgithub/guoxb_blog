const reqResult = require('../utils/reqResult')
const articleModel = require('../models/article')
const typeModel = require('../models/type')

class WebController {
  async articleList(ctx) {
    let { page, size, title, type } = ctx.query

    let skipQuery = { sort: { createAt: -1 } }
    size = parseInt(size || 10)
    page && Object.assign(skipQuery, { skip: (parseInt(page) - 1) * size, limit: size })

    let searchQuery = { publish: 1 }
    title && Object.assign(searchQuery, { title: { $regex: title, $options: 'i' } })

    try {
      if (type) {
        let typeInfo = await typeModel.oneByQuery({ shortName: type.toLowerCase() })
        typeInfo && Object.assign(searchQuery, { type: typeInfo._id })
      }
      let result = await articleModel.list(searchQuery, "-content", skipQuery)
      let typeIDs = []
      result.list.forEach(article => {
        typeIDs.push(article.type)
      })
      let types = await typeModel.list({ _id: { $in: typeIDs } }), typesDic = {}
      types.forEach(type => {
        typesDic[type._id] = type
      })
      result.list.forEach(article => {
        article._doc.typeInfo = typesDic[article.type]
      })

      ctx.body = reqResult.success('文章加载成功', result)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('加载文章错误'), ctx)
    }
  }
  async articleDetail(ctx) {
    const { id } = ctx.params
    console.log('id = ', id);
    try {
      let info = await articleModel.detail({ _id: id })
      if (info) {
        let type = await typeModel.oneByQuery({ _id: info.type })
        info._doc.typeInfo = type
        // 更新阅读数
        info._doc.readCount += 1
        await articleModel.update(info._doc)
      }
      ctx.body = reqResult.success(null, info)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('加载文章错误'), ctx)
    }
  }
  async typeList(ctx) {
    try {
      let types = await typeModel.list()
      // 查找分类下文章数量
      let reqArray = []
      types.forEach(type => {
        reqArray.push(articleModel.count({ type: type._doc._id }))
      })
      let countRst = await Promise.all(reqArray)
      for (let i = 0; i < types.length; i ++) {
        types[i]._doc.count = countRst[i]
      }
      ctx.body = reqResult.success(null, types)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('加载分类错误'), ctx)
    }
  }
  async typeInfo(ctx) {
    const { name } = ctx.params
    try {
      let type = await typeModel.oneByQuery({ shortName: name })
      ctx.body = reqResult.success(null, type)
    } catch (error) {
      ctx.app.emit('error', reqResult.error('加载分类信息错误'), ctx)
    }
  }
}

module.exports = new WebController()