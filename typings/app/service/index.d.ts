// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPublish = require('../../../app/service/publish');

declare module 'egg' {
  interface IService {
    publish: ExportPublish;
  }
}
