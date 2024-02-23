const fs = require('fs')
const path = require('path')
const reqResult = require('../utils/reqResult')
const dayjs = require('dayjs')
const uuid = require('node-uuid')
const uploader = require('../utils/uploader')
const { ALI_OSS_UPLOAD_PATH } = require('../config/config.default')
class SystemController {
  async upload(ctx) {
    try {
      const img = ctx.request.files ? ctx.request.files.file : null
      if (!img) {
        return ctx.body = reqResult.error('选择资源异常')
      }
      const pathWithMonth = `${ALI_OSS_UPLOAD_PATH}/${dayjs().format('YYYY-MM-DD')}/`,
        extname = path.extname(img.name || '*.png'),
        imgName = uuid.v4() + extname,
        pathForOss = pathWithMonth + imgName;
      const readable = fs.createReadStream(img.path)
      const result = await uploader.put(pathForOss, readable)
      if (!result) return ctx.body = reqResult.error('图片上传失败')
      const imgOnlineUrl = `http://img.guoxb.com/${result.name}`
      ctx.body = reqResult.success('图片上传成功', imgOnlineUrl)
    } catch (error) {
      console.log(error);
      ctx.app.emit('error', reqResult.error('图片上传错误'), ctx)
    }
  }


  async openId(ctx) {
    debugger
    try {
      const encryptedData = "3JwSMFUP10pw4L082BT/pcqlmI/8fII543TlwpQr/Pnqqndc+16WQYbA2KzCrxj7HwBI7F84cz4ayWAahaPGwTyyrE7Ju+z/6xs6tMtGIVY24lXqLWBar8Dbmaif64Bow5OwzLg4LxK80b0+BOjJtx/tR7/QoAme1JBqXhO8h8fUdpOFA1arup4KpBKguhUsgId0Q2ZGVdWO4a2DLLo7wQ=="
      const iv = "pB/Kjv2vMStmdiXHn8vW5A=="
      const rst = uploader.decrypt(encryptedData, 'ZEyTRpiY8yuWtXgtaT5Mgg==', iv)
      console.log(rst)
      ctx.body = reqResult.success(null, rst)
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new SystemController()