const defaultBbgrxx = async() => {
  window.bbgrxx = {
    ztConfig: {
      'M-Sy-Service': window.getConfig.serviceid,
      serviceid: window.getConfig.serviceid,
      role: 'admin',
      'M-Sy-AppId': window.getConfig.appid, // App Key
      'M-Sy-Version': window.getConfig.version,
      AppSecret: 'SY6EE1BFA49CE3482EA003DD5C87CBFF', // App Secret
      client_id: 'zfbzPro', // 本平台登录的用户名
      ticketPadKey: window.getConfig.ticketPadKey,
    },
    grbh: '1000001237663',
    zjhm: '120101199003070275',
    userid: '1924876472',
    blqd: 'zmd',
    username: '萧',
    jgbm: '4401050002',
    zxbm: '4401050002',
    zxjgbm: '4401050002',
    tocken: '111',
    locationMsg: {
      adcode: '522701',
      provinceCode: '520000',
      citycode: '0854',
      latitude: 26.21291,
      longtitude: 107.61988,
      address: '贵州省黔南布依族苗族自治州都匀市匀东镇神玥住房金融云计算',
      province: '贵州省',
      city: '黔南布依族苗族自治州',
      district: '都匀市',
      street: '科技大道',
    },
  }
}

export default function init() {
  return new Promise<void>((resolve, reject) => {
    try {
      defaultBbgrxx()
      resolve()
    } catch {
      reject(new Error('预处理方法执行失败'))
    }
  })
}
