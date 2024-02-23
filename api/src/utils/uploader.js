const OSS = require('ali-oss')
const crypto = require("crypto");

class AliOSS {
  constructor() {
    this.client = null
  }
  
  put(namePath, localFilePath) {
    if (this.client) {
      return this.client.put(namePath, localFilePath)
    }
    if (appSettings && appSettings.oss) {
      this.client = new OSS(appSettings.oss)
      return this.client.put(namePath, localFilePath)
    }
  }

  decrypt(encryptedData, sessionKey, iv) {
    encryptedData = encryptedData.replace(/ /g, '+')
    const decipher = crypto.createDecipheriv(
      "aes-128-cbc",
      Buffer.from(sessionKey, "base64"),
      Buffer.from(iv, "base64")
    );
    let ret = decipher.update(encryptedData, "base64");
    ret += decipher.final();
    return ret;
  }
}

module.exports = new AliOSS()