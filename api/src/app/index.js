const Koa = require('koa')
const KoaBody = require('koa-body')
const router = require('../router')
const staticFiles = require('koa-static')
const path = require('path')
const httpUtils = require('../utils/httpUtils')
const errHandler = require('./errHandler')
const { REMOTE_SETTINGS_PATH } = require('../config/config.default')
const settings = require(`../config/${process.env.NODE_ENV}/setting.json`)

const app = new Koa()
// app.use(KoaBody())
app.use(KoaBody({multipart: true,formLimit:'1mb'}));
app.use(router.routes()).use(router.allowedMethods())

app.use(staticFiles(path.join(__dirname, '../../public')));

// 统一监听错误事件
app.on('error', errHandler)
// 全局配置文件
global.appSettings = settings
// httpUtils.get(`${REMOTE_SETTINGS_PATH}?v=${Date.now()}`).then(settings => {
//   global.appSettings = settings
// })

module.exports = app