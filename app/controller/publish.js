'use strict';

const { Controller } = require('egg');

class PublishController extends Controller {
  async publishMsg() {
    const { ctx } = this;
    const message = {
      id: 1,
    };
    const res = await ctx.service.publish.publishMsg(message);
    ctx.body = res;
  }
}

module.exports = PublishController;
