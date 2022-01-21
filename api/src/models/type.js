const { Schema } = require('mongoose')
const dbHelper = require('../utils/dbHelper')

const articleSchema = new Schema({
  name: String,
  articleCount: {  // 文章数量
    type: Number,
    default: 0
  }
})

const DATABASE_NAME = "blog"
const TABLE_NAME = "types"
const getModel = async () => {
  return await dbHelper.model(DATABASE_NAME, TABLE_NAME, articleSchema)
}

module.exports = {
  async add(params) {
    const model = await getModel()
    return await dbHelper.insert(model, params)
  },
  async list(query, fields, options) {
    const model = await getModel()
    let list = await dbHelper.find(model, query, fields, options)
    return list
  },
  async detail(query) {
    const model = await getModel()
    return await dbHelper.findOne(model, query)
  },
  async update({ _id, ...newData }) {
    const model = await getModel()
    return await dbHelper.update(model, { _id }, newData)
  }
}