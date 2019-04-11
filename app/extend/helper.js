'use strict';

const crypto = require('crypto');

module.exports = {
  /**
   * 返回客户端的用户名和密码加密
   */
  encrypt(text) {
    const cipher = crypto.createCipher('aes-256-cbc', 'clientAuth');
    let crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    crypted = Buffer.from(crypted, 'hex').toString('base64');
    return crypted;
  },
  /**
   * 解密
   * @param {text}
   */
  decrypt(text) {
    crypted = Buffer.from(crypted, 'base64').toString('hex');
    const decipher = crypto.createDecipher('aes-256-cbc', key, vi);
    let dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  },
  /**
   * 从clientId中获取usrName或deviceId
   */
  subString(str) {
    return str.subString(str.indexOf('@') + 3);
  },
  /**
   * 服务中类型定义
   */
  getType() {
    const type = {
      DEVICE_STATUS: {
        ONLINE: 2,
        OFFLINE: 0,
        INIT: 1,
      },
      RES_TASK_STATUS: {
        SUCCESS: 1,
        FAILED: 2,
      },
      WECHAT_USR_TYPE: {
        INIT: 0,
        // 群主号
        OWNER: 1,
        // 客服号
        CUSTOMER_SERVICE: 2,
        // 发单号
        INVOICE: 3,
      },
    };
    return type;
  },
};
