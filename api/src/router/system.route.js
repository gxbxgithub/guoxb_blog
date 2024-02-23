const Router = require('koa-router')
const router = new Router({ prefix: '/system' })
const systemController = require('../controller/system.controller')
const { auth } = require('../middleware/auth.middleware')

// 文件图片
router.post('/upload', auth, systemController.upload)
router.get('/openid', systemController.openId)

module.exports = router






//#region @koa/multer 获取 form-data 数据
/*
// router.post('/upload', auth, upload.fields([{ name: 'file', maxCount: 1 }]), systemController.upload)

const multer = require('@koa/multer')
const upload = multer({
  storage: multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/')  //注意路径必须存在
    },
    //修改文件名称
    filename: function (req, file, cb) {
      let fileFormat = (file.originalname).split(".");
      cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
  })
})
async upload(ctx) {
  try {
    const files = ctx.request.files?.file || []
    if (files.length == 0) {
      return ctx.body = reqResult.error('选择资源异常')
    }
    const img = files[0],
      pathWithMonth = `${ALI_OSS_UPLOAD_PATH}/${dayjs().format('YYYY-MM-DD')}/`,
      extname = path.extname(img.originalname || '*.png'),
      imgName = uuid.v4() + extname,
      pathForOss = pathWithMonth + imgName;
    const result = await uploader.put(pathForOss, img.path, ctx)
    if (!result) return ctx.body = reqResult.error('图片上传失败')
    const imgOnlineUrl = `http://img.guoxb.com/${result.name}`
    ctx.body = reqResult.success('图片上传成功', imgOnlineUrl)
  } catch (error) {
    console.log(error);
    ctx.app.emit('error', reqResult.error('图片上传错误'), ctx)
  }
}
*/
//#endregion