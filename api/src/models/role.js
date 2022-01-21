const { Schema } = require('mongoose')
const dbHelper = require('../utils/dbHelper')

const roleSchema = new Schema({
  name: String,
  menus: Array, // 菜单nid数组
})

const DATABASE_NAME = "blog"
const TABLE_NAME = "roles"
const getModel = async () => {
  return await dbHelper.model(DATABASE_NAME, TABLE_NAME, roleSchema)
}

module.exports = {
  async oneByQuery(query) {
    const model = await getModel()
    return await dbHelper.findOne(model, query)
  },
  async list(query) {
    const model = await getModel()
    return await dbHelper.find(model, query)
  }
}