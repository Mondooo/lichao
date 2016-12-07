/* 
* please keep the code elegant
*/

// config
import config from './config/config';
import httpConfig from './config/http';
import routerConfig from './config/route';
import i18nConfig from './i18n/config';

// service
import qService from './services/q-service';
import toolService from './services/tool-service';
import AuthTool  from './services/auth-tool';

// resource
import accountRes from './resources/account-res';

// directive
import headerDirect from './common/header/headerDirect';

// filter

// controllers
// 登陆及首页Controller
import portalCtrl from './auth/portal/portalCtrl';
import inCtrl from './in/inCtrl';
import homeCtrl from './in/home/homeCtrl';

angular.module('soraka',
  ['ngAnimate', 'ngCookies', 'ngSanitize', 'ui.router', 'ngResource', 'ngStorage'])

  // 配置全局常量
  .constant('lcConfig', config)
  .constant('moment', window.moment)
  .constant('BASE_URL', 'http://10.60.36.96:8080/api') // 测试
  // .constant('BASE_URL', '/api') // 发布

  // 基础配置
  .config(httpConfig)
  .config(routerConfig)
  
  // 自动执行
  .run(i18nConfig)

  // services 初始化
  .service('qService', qService)
  .service('toolService', toolService)
  .service('AuthTool',AuthTool)

  // factory 初始化
  .factory('accountRes', accountRes)

  // directive 初始化
  .directive('lcHeader', headerDirect)
  
  // filter 初始化

  // controllers 初始化
  .controller('portalCtrl', portalCtrl)
  .controller('inCtrl', inCtrl)
  .controller('homeCtrl', homeCtrl)
  ;