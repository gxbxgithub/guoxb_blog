const { Schema } = require('mongoose')
const dbHelper = require('../utils/dbHelper')

const menuSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  icon: String,
  parent: String,
  path: String,
  weight: {
    type: Number,
    default: 100
  }
})
const svgSchema = new Schema({
  name: String,
  code: String
})

const DATABASE_NAME = "blog"
const TABLE_NAME = "menus"
const getModel = async () => {
  return await dbHelper.model(DATABASE_NAME, TABLE_NAME, menuSchema)
}
const TABLE_NAME_SVG = "svgs"
const getSvgModel = async () => {
  return await dbHelper.model(DATABASE_NAME, TABLE_NAME_SVG, svgSchema)
}

module.exports = {
  //#region 菜单
  async list(query, options) {
    const model = await getModel()
    return await dbHelper.find(model, query, null, options)
  },
  async listWithTotal(query, fields, options) {
    const model = await getModel()
    let list = await dbHelper.find(model, query, fields, options)
    let total = await dbHelper.count(model, query);
    return { list, total }
  },
  async detail(query) {
    const model = await getModel()
    return await dbHelper.findOne(model, query)
  },
  async add(params) {
    const model = await getModel()
    return await dbHelper.insert(model, params)
  },
  async update({ _id, ...newData }) {
    const model = await getModel()
    return await dbHelper.update(model, { _id }, newData)
  },
  async delete(_id) {
    const model = await getModel()
    return await dbHelper.remove(model, { _id })
  },
  //#endregion

  //#region SVG
  async svg_list(query) {
    const model = await getSvgModel()
    return await dbHelper.find(model, query)
  },
  async svg_add(params) {
    const model = await getSvgModel()
    return await dbHelper.insert(model, params)
  },
  //#endregion
}