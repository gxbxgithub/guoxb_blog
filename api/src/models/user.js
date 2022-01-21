const { Schema } = require('mongoose')
const dbHelper = require('../utils/dbHelper')

const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  isAdmin: {
    type: Number,
    default: 0
  },
  roles: Array, // 角色_id数组
})

const DATABASE_NAME = "blog"
const TABLE_NAME = "users"
const getModel = async () => {
  return await dbHelper.model(DATABASE_NAME, TABLE_NAME, userSchema)
}

module.exports = {
  async createUser(params) {
    const model = await getModel()
    return await dbHelper.insert(model, params)
  },
  async getUserInfo({ _id, username }) {
    const model = await getModel()
    let query = {}
    _id && Object.assign(query, { _id })
    username && Object.assign(query, { username })
    return await dbHelper.findOne(model, query)
  },
  async updateInfoById({ _id, password, name, isAdmin }) {
    const model = await getModel()
    let newUser = {}
    password && Object.assign(newUser, { password })
    name && Object.assign(newUser, { name })
    isAdmin != undefined && Object.assign(newUser, { isAdmin })
    return await dbHelper.update(model, { _id }, newUser)
  }
}