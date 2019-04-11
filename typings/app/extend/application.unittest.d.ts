// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExtendUnittestApplication = require('../../../app/extend/application.unittest');
declare module 'egg' {
  type ExtendUnittestApplicationType = typeof ExtendUnittestApplication;
  interface Application extends ExtendUnittestApplicationType { }
}