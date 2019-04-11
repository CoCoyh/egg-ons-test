'use strict';

const { Service } = require('egg');

class PublishService extends Service {
  async publishMsg(message) {
    const { app, ctx } = this;
    const { Message } = app.ons;

    try {
      const msg2device = new Message('MQ_INST_29772019_BagzDII4%LAB_MQTT_TEST', '*', JSON.stringify(message));
      // msg2device.properties.mqttSecondTopic = `/p2p/${app.config.mqtt.consumerGroup}@@@${message.userName}`;
      msg2device.properties.mqttSecondTopic = '/p2p/GID_CID_TEST_COCO@@@001';
      // 保持所有下发的消息设备都有接收到
      msg2device.properties.qoslevel = 2;
      const res = await app.ons.send(msg2device);
      return res;
    } catch (e) {
      ctx.logger.error(e, `推送消息到发单微信号 ${message} 失败`);
      throw new Error(e, `推送消息到发单微信号 ${message} 失败`);
    }
  }
}

module.exports = PublishService;
