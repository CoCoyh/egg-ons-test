'use strict';
const httpClient = require('urllib');
const path = require('path');

module.exports = appInfo => {
  return {
    keys: 'my-cookie-secret-key',
    debug: true,
    env: 'dev',
    ons: {
      default: {
        nameSrv: '',
        accessKey: '',
        secretKey: '',

      },
      sub: [
        {
          consumerGroup: 'MQ_INST_29772019_BagzDII4%GID_CID_UP_DEV',
          pullThresholdForQueue: 500,
          pullInterval: 0,
          consumeMessageBatchMaxSize: 1,
          pullBatchSize: 32,
          parallelConsumeLimit: 1,
          topics: [
            'MQ_INST_29772019_BagzDII4%LAB_MQTT_TEST',
          ],
        },
      ],
      pub: [
        {
          producerGroup: 'MQ_INST_29772019_BagzDII4%GID_PID_UP_DEV',
          topics: [
            'MQ_INST_29772019_BagzDII4%LAB_MQTT_TEST',
          ],
        },
        // {
        //   producerGroup: 'MQ_INST_29772019_BagzDII4%GID_PID_DOWN_DEV',
        //   topics: [
        //     'MQ_INST_29772019_BagzDII4%CRM_MQTT_CLIENT_MSG',
        //   ],
        // },
      ],
    },
  }
};
