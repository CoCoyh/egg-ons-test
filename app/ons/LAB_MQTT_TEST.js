'use strict';

const { Subscription } = require('egg');

class MsgSubscriber extends Subscription {
  async subscribe(msg) {
    console.log('订阅消息：', msg);
  }
  static get subExpression() {
    return '*';
  }
}
module.exports = MsgSubscriber;
