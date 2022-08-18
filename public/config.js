window.getConfig = {
  version: '1.0.1', // 版本号，过中台请求头中的参数M-Sy-Version
  appid: '2021042722340916', // 用户id，过中台请求头中的参数M-Sy-AppId
  serviceid: 'C645891', // 中台不环境对应不同的service参数，
  ticketPadKey: 'SY87E3C9255AB744B280DCD73D93C51A', // 密钥，中台每个账号对应一个密钥，ticket，token等都对应一个密钥
  clientId: 'zfbzPro',
  role: 'admin',
  // pc拆分项目ip端口
  host: 'http://113.125.201.131:18082', // 成都企管
  staticUrl: 'http://113.125.201.131:18082', // 静态资源地址，请测试环境、质检环境、生产环境配置../..
  previewHost: 'http://113.125.201.131:18082', // 材料下载
  ywfl: '05',
  cplx: 'zfbzPro',
  hjlb: '', // 区分环境的参数
}
