const Koa = require('koa')
const KoaBody = require('koa-body')
const router = require('../router')
const httpUtils = require('../utils/httpUtils')
const errHandler = require('./errHandler')
const { REMOTE_SETTINGS_PATH } = require('../config/config.default')

const app = new Koa()
// app.use(KoaBody())
app.use(KoaBody({multipart: true,formLimit:'1mb'}));
app.use(router.routes()).use(router.allowedMethods())

// 统一监听错误事件
app.on('error', errHandler)
// 全局配置文件
httpUtils.get(`${REMOTE_SETTINGS_PATH}?v=${Date.now()}`).then(settings => {
  global.appSettings = settings
})

module.exports = app