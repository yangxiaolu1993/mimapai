const Mock = require('mockjs')
//小报告详情
Mock.mock('/mock/fortune_mini/details', function (options) {
  console.log(JSON.parse(options.body))
  let id = JSON.parse(options.body).report_id
  let dataBuy = {
    "code": 200,
    "data": {
      "id": "22",
      "user_report_record_id": "18120500024383095735",
      "is_locked": 0,
      "report_name": "偏财运",
      "report_type": "2001",
      "birthday": "1993-03-07",
      "master_code": 5,
      "nickname": "杨小璐 ",
      "origin": 1,
      "special_text_map": {},
      "life_number": {
        "a": 0,
        "b": 7,
        "c": 0,
        "d": 3,
        "e": 2,
        "f": 0,
        "g": 1,
        "h": 9,
        "i": 7,
        "j": 3,
        "k": 2,
        "l": 1,
        "m": 1,
        "n": 3,
        "o": 4,
        "p": 5,
        "q": 7,
        "r": 3,
        "s": 3,
        "t": 9,
        "u": 4,
        "v": 5,
        "w": 4,
        "x": 8,
        "ijm": 731,
        "kln": 213,
        "mno": 134,
        "jmw": 314,
        "imx": 718,
        "xws": 843,
        "noq": 347,
        "mop": 145,
        "qpr": 753,
        "knv": 235,
        "lnu": 134,
        "vut": 549,
        "inward": 8,
        "outward": 6,
        "subconscious": 3,
        "yinyang": "外阳内阳",
        "conflict_num": 3,
        "family_code": 32,
        "doctrine": 1,
        "five_elements": "木"
      },
      "fleet_time": "流年4",
      "connect_str": "你的偏财运关键词",
      "keyword": "学习",
      "content": "对不起，经过对你流年密码努力的测算，我们发现，你今年的偏财运很弱。不过也不要灰心，毕竟想在流年4得到偏财，是件很难的事。因为这是学习提升的一年，不宜计较得失，一般人在流年4财运都会处于一个平稳状态，要沉住气，到了流年6才会有加倍的回报",
      "report_copywriting": "炒股投资买彩票，你2019年能赚到手抽筋么！",
      "coupon_sum": 0,
      "coupon_have": 0,
      "coupon_uncollected": 0
    },
    "request_id": "19022717332112092954"
  }
  let noBuy = {
    "code": 200,
    "data": {
      "id": "25",
      "is_locked": 1,
      "report_name": "提升财运",
      "report_type": "2001",
      "birthday": "1993-03-07",
      "master_code": 5,
      "nickname": "杨小璐",
      "origin": 1,
      "special_text_map": {},
      "life_number": {
        "a": 0,
        "b": 7,
        "c": 0,
        "d": 3,
        "e": 2,
        "f": 0,
        "g": 1,
        "h": 9,
        "i": 7,
        "j": 3,
        "k": 2,
        "l": 1,
        "m": 1,
        "n": 3,
        "o": 4,
        "p": 5,
        "q": 7,
        "r": 3,
        "s": 3,
        "t": 9,
        "u": 4,
        "v": 5,
        "w": 4,
        "x": 8,
        "ijm": 731,
        "kln": 213,
        "mno": 134,
        "jmw": 314,
        "imx": 718,
        "xws": 843,
        "noq": 347,
        "mop": 145,
        "qpr": 753,
        "knv": 235,
        "lnu": 134,
        "vut": 549,
        "inward": 8,
        "outward": 6,
        "subconscious": 3,
        "yinyang": "外阳内阳",
        "conflict_num": 3,
        "family_code": 32,
        "doctrine": 1,
        "five_elements": "木"
      },
      "fleet_time": "流年4",
      "connect_str": "你提升财运的关键是",
      "report_copywriting": "2019那些会让你少赚钱的原因一览无遗！",
      "report_price": {
        "price": 1,
        "origin_price": 1880,
        "de_er_ta_self": 0,
        "pi_self": 0,
        "description": "节日限时价"
      },
      "coupon_sum": 3,
      "coupon_have": 0,
      "coupon_uncollected": 3
    },
    "request_id": "19022611103239602774"
  }
  switch (id) {
    case '20':
      return Mock.mock(noBuy)
      break;
    case '21':
      return Mock.mock(dataBuy)
      break;
    case '22':
      return Mock.mock(noBuy)
      break;
    case '23':
      return Mock.mock(dataBuy)
      break;
    case '24':
      return Mock.mock(noBuy)
      break;
    case '25':
      return Mock.mock(dataBuy)
      break;
    case '26':
      return Mock.mock(noBuy)
      break;
    default:
      return Mock.mock(noBuy)
  }

})

// 优惠券-未授权
Mock.mock('/mock/couponsinit', function (options) {
  let data = {
    "code": 200,
    "msg": "查询成功",
    "data": {
      "invite_num": 0,
      "id": "18112200148383141325",
      "title": "匹配好友领取解码券",
      "depict": "活动规则\r\n1.用户π友列表中来自匹配的人数达到规定数量，即可领券1张解码券；\r\n2.一张解码券可解锁密码派小程序任意一个财运指南1次（一个生日对应1次）；\r\n3.每个用户最多累计领取使用3张券。\r\n4.活动时间：2018年12月25日-2019年3月25日\r\n请在有效期内领取并使用解码券，逾期将失效。",
      "status": 1,
      "activity_start_time": "2018-11-25 00:00:00",
      "activity_end_time": "2019-03-25 11:59:59",
      "activity_option_list": [{
        "id": "18112200148384687968",
        "title": "免费解锁 财运指南",
        "content_depict": "任何一个财运卡片",
        "conditional_depict": "匹配好友达到6人",
        "sort": 1,
        "status": 1
      }, {
        "id": "18112200148385863752",
        "title": "免费解锁 财运指南",
        "content_depict": "任何一个财运卡片",
        "conditional_depict": "匹配好友达到12人",
        "sort": 2,
        "status": 1
      }, {
        "id": "18112200148386706789",
        "title": "免费解锁 财运指南",
        "content_depict": "任何一个财运卡片",
        "conditional_depict": "匹配好友达到18人",
        "sort": 3,
        "status": 1
      }]
    },
    "request_id": "19030116065612630545"
  }
  return Mock.mock(data)
})
// 优惠券-授权
Mock.mock('/mock/coupons/get', function (options) {
  let data = {
    "code": 200,
    "data": {
      "invite_num": 15,
      "id": "18112200148383141325",
      "title": "匹配好友领取解码券",
      "depict": "活动规则\r\n1.用户π友列表中来自匹配的人数达到规定数量，即可领券1张解码券；\r\n2.一张解码券可解锁密码派小程序任意一个财运指南1次（一个生日对应1次）；\r\n3.每个用户最多累计领取使用3张券。\r\n4.活动时间：2018年12月25日-2019年3月25日\r\n请在有效期内领取并使用解码券，逾期将失效。",
      "status": 1,
      "activity_start_time": "2018-11-25 00:00:00",
      "activity_end_time": "2019-03-25 11:59:59",
      "activity_option_list": [{
        "id": "18112200148384687968",
        "title": "免费解锁 财运指南",
        "content_depict": "任何一个财运卡片",
        "conditional_depict": "匹配好友达到6人",
        "sort": 1,
        "status": 2
      }, {
        "id": "18112200148385863752",
        "user_coupon_id": "19030100008138702006",
        "title": "免费解锁 财运指南",
        "content_depict": "任何一个财运卡片",
        "conditional_depict": "匹配好友达到12人",
        "sort": 2,
        "status": 3
      }, {
        "id": "18112200148386706789",
        "title": "免费解锁 财运指南",
        "content_depict": "任何一个财运卡片",
        "conditional_depict": "匹配好友达到18人",
        "sort": 3,
        "status": 1
      }]
    },
    "request_id": "19030116300278608771"
  }
  return Mock.mock(data)
})

/** 
 * π友
 * type 1 添加  2 匹配
 * */

Mock.mock('/mock/pi_friend', function (options) {
  let {
    type,
    page_size,
    index
  } = JSON.parse(options.body)

  let match = {
    "code": 200,
    "data": {
      "list": [{
        "surplus": 0,
        "exists": 0,
        "id": "1",
        "name": "璐璐1",
        "avatar": "http://img.xuanyiai.com/FjnSCuIpFUXBXIuyx3JQPJnrKsRO",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19930307",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 57,
        "origin_id": "19021900016407319132",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "2",
        "name": "Eric2",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqFonPosaUYgIu66uWS1yWaLC4e6KAyic7TLkHQafeBFAqAX2vonR4SUkgkwgibeoDkoVCzuSfLVibFg/132",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19910309",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 57,
        "origin_id": "19021900016414808128",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "3",
        "name": "一点前睡觉3",
        "avatar": "https://wx.qlogo.cn/mmopen/vi_32/M2AciblEHKSf4yUM7xXU1by8fvYAm400TOc35tEG13XLGrt5x6icKg3RDccicKSeyiaO9xStbk0H3nS83fxevyNj9g/132",
        "master_code": 9,
        "master_code_description": "丰盈乐享的9号人",
        "birthday": "19920321",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 55,
        "origin_id": "19021900016413345372",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "4",
        "name": "给我点个赞\uD83D\uDC4D  4",
        "avatar": "http://img.xuanyiai.com/FvZ3wro0cdPe5YKeOEF34afc4IHo",
        "master_code": 4,
        "master_code_description": "精于规划的4号人",
        "birthday": "19900921",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 96,
        "origin_id": "19021900016411804851",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "5",
        "name": "腊肠滑稽煲仔饭5",
        "note": "何真铭111",
        "avatar": "http://img.xuanyiai.com/Fkp_jLp8O7eDbC7I-_TdM9hEqoRY",
        "master_code": 3,
        "master_code_description": "热情活力的3号人",
        "birthday": "19950402",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 58,
        "origin_id": "19022200030198567861",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "6",
        "name": "定格6",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/1ZDgicfA4gy0famI6aVPIS9ib4ckfx8BKk0KaW3rZT0ga5sY0KrDXP36vq9vGsAPGyvmgbO4iczrkE8RiaBeJEaS8A/132",
        "master_code": 8,
        "master_code_description": "一诺千金的8号人",
        "birthday": "19900601",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 94,
        "origin_id": "19021900016405818564",
        "is_repeat": 0
      },{
        "surplus": 0,
        "exists": 0,
        "id": "7",
        "name": "璐璐7",
        "avatar": "http://img.xuanyiai.com/FjnSCuIpFUXBXIuyx3JQPJnrKsRO",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19930307",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 57,
        "origin_id": "19021900016407319132",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "8",
        "name": "Eric8",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqFonPosaUYgIu66uWS1yWaLC4e6KAyic7TLkHQafeBFAqAX2vonR4SUkgkwgibeoDkoVCzuSfLVibFg/132",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19910309",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 57,
        "origin_id": "19021900016414808128",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "9",
        "name": "一点前睡觉9",
        "avatar": "https://wx.qlogo.cn/mmopen/vi_32/M2AciblEHKSf4yUM7xXU1by8fvYAm400TOc35tEG13XLGrt5x6icKg3RDccicKSeyiaO9xStbk0H3nS83fxevyNj9g/132",
        "master_code": 9,
        "master_code_description": "丰盈乐享的9号人",
        "birthday": "19920321",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 55,
        "origin_id": "19021900016413345372",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "10",
        "name": "给我点个赞10 ",
        "avatar": "http://img.xuanyiai.com/FvZ3wro0cdPe5YKeOEF34afc4IHo",
        "master_code": 4,
        "master_code_description": "精于规划的4号人",
        "birthday": "19900921",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 96,
        "origin_id": "19021900016411804851",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "11",
        "name": "腊肠滑稽煲仔饭11",
        "note": "何真铭111",
        "avatar": "http://img.xuanyiai.com/Fkp_jLp8O7eDbC7I-_TdM9hEqoRY",
        "master_code": 3,
        "master_code_description": "热情活力的3号人",
        "birthday": "19950402",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 58,
        "origin_id": "19022200030198567861",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "12",
        "name": "定格12",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/1ZDgicfA4gy0famI6aVPIS9ib4ckfx8BKk0KaW3rZT0ga5sY0KrDXP36vq9vGsAPGyvmgbO4iczrkE8RiaBeJEaS8A/132",
        "master_code": 8,
        "master_code_description": "一诺千金的8号人",
        "birthday": "19900601",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 94,
        "origin_id": "19021900016405818564",
        "is_repeat": 0
      },{
        "surplus": 0,
        "exists": 0,
        "id": "13",
        "name": "璐璐13",
        "avatar": "http://img.xuanyiai.com/FjnSCuIpFUXBXIuyx3JQPJnrKsRO",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19930307",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 57,
        "origin_id": "19021900016407319132",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "14",
        "name": "Eric14",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqFonPosaUYgIu66uWS1yWaLC4e6KAyic7TLkHQafeBFAqAX2vonR4SUkgkwgibeoDkoVCzuSfLVibFg/132",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19910309",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 57,
        "origin_id": "19021900016414808128",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "15",
        "name": "一点前睡觉15",
        "avatar": "https://wx.qlogo.cn/mmopen/vi_32/M2AciblEHKSf4yUM7xXU1by8fvYAm400TOc35tEG13XLGrt5x6icKg3RDccicKSeyiaO9xStbk0H3nS83fxevyNj9g/132",
        "master_code": 9,
        "master_code_description": "丰盈乐享的9号人",
        "birthday": "19920321",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 55,
        "origin_id": "19021900016413345372",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "16",
        "name": "给我点个赞16",
        "avatar": "http://img.xuanyiai.com/FvZ3wro0cdPe5YKeOEF34afc4IHo",
        "master_code": 4,
        "master_code_description": "精于规划的4号人",
        "birthday": "19900921",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 96,
        "origin_id": "19021900016411804851",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "17",
        "name": "腊肠滑稽煲仔饭17",
        "note": "何真铭111",
        "avatar": "http://img.xuanyiai.com/Fkp_jLp8O7eDbC7I-_TdM9hEqoRY",
        "master_code": 3,
        "master_code_description": "热情活力的3号人",
        "birthday": "19950402",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 58,
        "origin_id": "19022200030198567861",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "18",
        "name": "定格18",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/1ZDgicfA4gy0famI6aVPIS9ib4ckfx8BKk0KaW3rZT0ga5sY0KrDXP36vq9vGsAPGyvmgbO4iczrkE8RiaBeJEaS8A/132",
        "master_code": 8,
        "master_code_description": "一诺千金的8号人",
        "birthday": "19900601",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 94,
        "origin_id": "19021900016405818564",
        "is_repeat": 0
      },{
        "surplus": 0,
        "exists": 0,
        "id": "19",
        "name": "璐璐19",
        "avatar": "http://img.xuanyiai.com/FjnSCuIpFUXBXIuyx3JQPJnrKsRO",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19930307",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 57,
        "origin_id": "19021900016407319132",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "20",
        "name": "Eric20",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqFonPosaUYgIu66uWS1yWaLC4e6KAyic7TLkHQafeBFAqAX2vonR4SUkgkwgibeoDkoVCzuSfLVibFg/132",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19910309",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 57,
        "origin_id": "19021900016414808128",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "21",
        "name": "一点前睡觉21",
        "avatar": "https://wx.qlogo.cn/mmopen/vi_32/M2AciblEHKSf4yUM7xXU1by8fvYAm400TOc35tEG13XLGrt5x6icKg3RDccicKSeyiaO9xStbk0H3nS83fxevyNj9g/132",
        "master_code": 9,
        "master_code_description": "丰盈乐享的9号人",
        "birthday": "19920321",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 55,
        "origin_id": "19021900016413345372",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "22",
        "name": "给我点个赞22",
        "avatar": "http://img.xuanyiai.com/FvZ3wro0cdPe5YKeOEF34afc4IHo",
        "master_code": 4,
        "master_code_description": "精于规划的4号人",
        "birthday": "19900921",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 96,
        "origin_id": "19021900016411804851",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "23",
        "name": "腊肠滑稽煲仔饭23",
        "note": "何真铭111",
        "avatar": "http://img.xuanyiai.com/Fkp_jLp8O7eDbC7I-_TdM9hEqoRY",
        "master_code": 3,
        "master_code_description": "热情活力的3号人",
        "birthday": "19950402",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 58,
        "origin_id": "19022200030198567861",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "24",
        "name": "定格24",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/1ZDgicfA4gy0famI6aVPIS9ib4ckfx8BKk0KaW3rZT0ga5sY0KrDXP36vq9vGsAPGyvmgbO4iczrkE8RiaBeJEaS8A/132",
        "master_code": 8,
        "master_code_description": "一诺千金的8号人",
        "birthday": "19900601",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 94,
        "origin_id": "19021900016405818564",
        "is_repeat": 0
      },{
        "surplus": 0,
        "exists": 0,
        "id": "25",
        "name": "璐璐25",
        "avatar": "http://img.xuanyiai.com/FjnSCuIpFUXBXIuyx3JQPJnrKsRO",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19930307",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 57,
        "origin_id": "19021900016407319132",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "26",
        "name": "Eric26",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqFonPosaUYgIu66uWS1yWaLC4e6KAyic7TLkHQafeBFAqAX2vonR4SUkgkwgibeoDkoVCzuSfLVibFg/132",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19910309",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 57,
        "origin_id": "19021900016414808128",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "27",
        "name": "一点前睡觉27",
        "avatar": "https://wx.qlogo.cn/mmopen/vi_32/M2AciblEHKSf4yUM7xXU1by8fvYAm400TOc35tEG13XLGrt5x6icKg3RDccicKSeyiaO9xStbk0H3nS83fxevyNj9g/132",
        "master_code": 9,
        "master_code_description": "丰盈乐享的9号人",
        "birthday": "19920321",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 55,
        "origin_id": "19021900016413345372",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "28",
        "name": "给我点个赞28",
        "avatar": "http://img.xuanyiai.com/FvZ3wro0cdPe5YKeOEF34afc4IHo",
        "master_code": 4,
        "master_code_description": "精于规划的4号人",
        "birthday": "19900921",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 96,
        "origin_id": "19021900016411804851",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "29",
        "name": "腊肠滑稽煲仔饭29",
        "note": "何真铭111",
        "avatar": "http://img.xuanyiai.com/Fkp_jLp8O7eDbC7I-_TdM9hEqoRY",
        "master_code": 3,
        "master_code_description": "热情活力的3号人",
        "birthday": "19950402",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 58,
        "origin_id": "19022200030198567861",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "30",
        "name": "定格30",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/1ZDgicfA4gy0famI6aVPIS9ib4ckfx8BKk0KaW3rZT0ga5sY0KrDXP36vq9vGsAPGyvmgbO4iczrkE8RiaBeJEaS8A/132",
        "master_code": 8,
        "master_code_description": "一诺千金的8号人",
        "birthday": "19900601",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 94,
        "origin_id": "19021900016405818564",
        "is_repeat": 0
      },{
        "surplus": 0,
        "exists": 0,
        "id": "31",
        "name": "璐璐31",
        "avatar": "http://img.xuanyiai.com/FjnSCuIpFUXBXIuyx3JQPJnrKsRO",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19930307",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 57,
        "origin_id": "19021900016407319132",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "32",
        "name": "Eric32",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqFonPosaUYgIu66uWS1yWaLC4e6KAyic7TLkHQafeBFAqAX2vonR4SUkgkwgibeoDkoVCzuSfLVibFg/132",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19910309",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 57,
        "origin_id": "19021900016414808128",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "33",
        "name": "一点前睡觉33",
        "avatar": "https://wx.qlogo.cn/mmopen/vi_32/M2AciblEHKSf4yUM7xXU1by8fvYAm400TOc35tEG13XLGrt5x6icKg3RDccicKSeyiaO9xStbk0H3nS83fxevyNj9g/132",
        "master_code": 9,
        "master_code_description": "丰盈乐享的9号人",
        "birthday": "19920321",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 55,
        "origin_id": "19021900016413345372",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "34",
        "name": "给我点个赞34",
        "avatar": "http://img.xuanyiai.com/FvZ3wro0cdPe5YKeOEF34afc4IHo",
        "master_code": 4,
        "master_code_description": "精于规划的4号人",
        "birthday": "19900921",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 96,
        "origin_id": "19021900016411804851",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "35",
        "name": "腊肠滑稽煲仔饭35",
        "note": "何真铭111",
        "avatar": "http://img.xuanyiai.com/Fkp_jLp8O7eDbC7I-_TdM9hEqoRY",
        "master_code": 3,
        "master_code_description": "热情活力的3号人",
        "birthday": "19950402",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 58,
        "origin_id": "19022200030198567861",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "36",
        "name": "定格36",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/1ZDgicfA4gy0famI6aVPIS9ib4ckfx8BKk0KaW3rZT0ga5sY0KrDXP36vq9vGsAPGyvmgbO4iczrkE8RiaBeJEaS8A/132",
        "master_code": 8,
        "master_code_description": "一诺千金的8号人",
        "birthday": "19900601",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 94,
        "origin_id": "19021900016405818564",
        "is_repeat": 0
      },{
        "surplus": 0,
        "exists": 0,
        "id": "37",
        "name": "璐璐37",
        "avatar": "http://img.xuanyiai.com/FjnSCuIpFUXBXIuyx3JQPJnrKsRO",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19930307",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 57,
        "origin_id": "19021900016407319132",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "38",
        "name": "Eric38",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqFonPosaUYgIu66uWS1yWaLC4e6KAyic7TLkHQafeBFAqAX2vonR4SUkgkwgibeoDkoVCzuSfLVibFg/132",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19910309",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 57,
        "origin_id": "19021900016414808128",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "39",
        "name": "一点前睡觉39",
        "avatar": "https://wx.qlogo.cn/mmopen/vi_32/M2AciblEHKSf4yUM7xXU1by8fvYAm400TOc35tEG13XLGrt5x6icKg3RDccicKSeyiaO9xStbk0H3nS83fxevyNj9g/132",
        "master_code": 9,
        "master_code_description": "丰盈乐享的9号人",
        "birthday": "19920321",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 55,
        "origin_id": "19021900016413345372",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "40",
        "name": "给我点个赞40",
        "avatar": "http://img.xuanyiai.com/FvZ3wro0cdPe5YKeOEF34afc4IHo",
        "master_code": 4,
        "master_code_description": "精于规划的4号人",
        "birthday": "19900921",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 96,
        "origin_id": "19021900016411804851",
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "41",
        "name": "腊肠滑稽煲仔饭41",
        "note": "何真铭111",
        "avatar": "http://img.xuanyiai.com/Fkp_jLp8O7eDbC7I-_TdM9hEqoRY",
        "master_code": 3,
        "master_code_description": "热情活力的3号人",
        "birthday": "19950402",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 58,
        "origin_id": "19022200030198567861",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "42",
        "name": "定格42",
        "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/1ZDgicfA4gy0famI6aVPIS9ib4ckfx8BKk0KaW3rZT0ga5sY0KrDXP36vq9vGsAPGyvmgbO4iczrkE8RiaBeJEaS8A/132",
        "master_code": 8,
        "master_code_description": "一诺千金的8号人",
        "birthday": "19900601",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 2,
        "match_value": 94,
        "origin_id": "19021900016405818564",
        "is_repeat": 0
      }],
      "total": 1,
      "total_element": 6
    },
    "request_id": "查询成功"
  }
  let add = {
    "code": 200,
    "data": {
      "list": [{
        "surplus": 0,
        "exists": 0,
        "id": "18120500019768992373",
        "name": "瑞",
        "master_code": 1,
        "master_code_description": "勇往直前的1号人",
        "birthday": "19950112",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 3,
        "origin": 1,
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "18120600007451707163",
        "name": "吧vv",
        "master_code": 5,
        "master_code_description": "自由冒险的5号人",
        "birthday": "19900805",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 1,
        "born_time": "11:30",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "18122200018639964611",
        "name": "觉得很",
        "avatar": "http://img.xuanyiai.com/Finq7llw5Lwfd0u0HsMIFw1LTaXr",
        "master_code": 9,
        "master_code_description": "丰盈乐享的9号人",
        "birthday": "19900701",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 1,
        "born_time": "12:30",
        "born_latitude": 0.0,
        "born_longitude": 0.0,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "19012600018024901171",
        "name": "ggggggggdsg",
        "master_code": 2,
        "master_code_description": "细腻敏感的2号人",
        "birthday": "19900901",
        "user_id": "18120500004439567821",
        "sex": 2,
        "relationship_type": 4,
        "origin": 1,
        "born_time": "12:30",
        "born_area": "北京市;西城区",
        "born_latitude": 39.9343,
        "born_longitude": 116.373,
        "is_repeat": 0
      }, {
        "surplus": 0,
        "exists": 0,
        "id": "19022200019000466863",
        "name": "呵呵等会",
        "master_code": 2,
        "master_code_description": "细腻敏感的2号人",
        "birthday": "19900703",
        "user_id": "18120500004439567821",
        "sex": 1,
        "relationship_type": 4,
        "origin": 1,
        "born_time": "14:30",
        "born_area": "重庆市;彭水苗族土家族自治县",
        "born_latitude": 29.3596,
        "born_longitude": 108.273,
        "is_repeat": 0
      }],
      "total": 1,
      "total_element": 5
    },
    "request_id": "查询成功"
  }

  let list = []
  let data = ''
  let total = 0
  if (type == 1) {
    data = add.data.list
    total = add.data.list.length
  } else {
    data = match.data.list
    total = match.data.list.length
  }
  for (let i = 0; i < Math.min(page_size, data.length-index); i++) {
    list.push(data[i + index])
  }
  let req = {
    list:list,
    total:total
  }
  return Mock.mock(req)
  
})