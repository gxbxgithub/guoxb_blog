const { Schema } = require('mongoose')
const dbHelper = require('../utils/dbHelper')

const articleSchema = new Schema({
  title: String,
  intro: String, // 简介
  content: String,  // markdown 内容
  type: String, // 分类
  readCount: {  // 阅读数
    type: Number,
    default: 0
  },
  publish: {  // 是否发布 1:发布 0:未发布(草稿)
    type: Number,
    default: 1
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

const DATABASE_NAME = "blog"
const TABLE_NAME = "articles"
const getModel = async () => {
  return await dbHelper.model(DATABASE_NAME, TABLE_NAME, articleSchema)
}

module.exports = {
  async add(params) {
    const model = await getModel()
    return await dbHelper.insert(model, params)
  },
  async detail(query) {
    const model = await getModel()
    return await dbHelper.findOne(model, query)
  },
  async list(query, fields, options) {
    const model = await getModel()
    let list = await dbHelper.find(model, query, fields, options)
    let total = await dbHelper.count(model, query);
    return { list, total }
  },
  async update({ _id, ...newData }) {
    const model = await getModel()
    return await dbHelper.update(model, { _id }, newData)
  },
  async delete({ _id }) {
    const model = await getModel()
    return await dbHelper.remove(model, { _id })
  }
}