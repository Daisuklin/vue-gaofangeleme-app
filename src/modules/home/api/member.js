import { fetch, common } from 'common';

// 会员收藏信息
export function memberfavotites({
  type,
  pageno,
  pageSize
}) {
  return fetch.get('/memberapi/memberfavotites', {
    type,
    pageno,
    pageSize
  });
}

// 商品推荐
export function centRecommendList() {
  return fetch.get('/memberapi/centRecommendList');
}

// 浏览记录
export function goodsBrowseList({
  browseState, // 0为商品  1 店铺
  pageNo,
  pageSize
}) {
  return fetch.get('/memberapi/goodsBrowseList', {
    browseState,
    pageNo,
    pageSize
  });
}

// 删除浏览记录
export function delGoodsBrowse({ browseId }) {
  return fetch.get('/memberapi/delGoodsBrowse', {
    browseId
  });
}

// 删除全部
export function delGoodsBrowseByAll({ browseState }) {
  return fetch.get('/memberapi/delGoodsBrowseByAll', {
    browseState
  });
}

// http://testbbc.leimingtech.com/memberapi/delGoodsBrowseByAll

// 积分
export function shopPointsLogList({
  pageNo,
  pageSize
}) {
  return fetch.get('/memberapi/shopPointsLogList', {
    pageNo,
    pageSize
  });
}

// 会员信息
export function memberDetail() {
  return fetch.get('/memberapi/memberDetail');
}

// 
export function memberAvailable() {
  return fetch.get('/memberapi/memberAvailable');
}

// 修改会员信息
export function updateMemberInfo({
  nichen,
  birthday,
  sex,
  imgUrl,
}) {
  return fetch.get('/memberapi/updateMemberInfo', {
    nichen,
    birthday,
    sex,
    imgUrl,
  });
}

// 充值订单
export function recharge({
  amount
}) {
  return fetch.get('/predepositApi/recharge', {
    amount
  });
}

// 文件上传
export function filesUpload({
  images
}) {
  return fetch.upload('/memberapi/filesUpload', {
    images
  });
}

// 修改密码
export function updatePassword({
  newpassword,
  password
}) {
  return fetch.get('/memberapi/updatePassword', {
    newpassword,
    password
  });
}
//设置支付密码
export function updatePaymentPass({ newpassword }) {
  return fetch.get('/memberapi/updatePaymentPass', {
    newpassword
  });
}

//我的评价
export function evaluateGoods({
                                  pageNo,
                                  pageSize
                              }) {
    return fetch.get('/memberapi/evaluateGoods', {
        pageNo,
        pageSize
    });
}

/*
 * 品牌页面
 * */
export function brandList({ storeId, brandName,pageNo, pageSize}) {
    return fetch.get('/brand/api/list', {
        storeId,
        brandName,
        pageNo,
        pageSize
    });
}
/*
 * 全局验证码
 * */
export function bindMobileList({ memberId, mobileCode, mobile}) {
    return fetch.get('/floor/api/bindMobile', {
        memberId,
        mobileCode,
        mobile
    });
}


/**
 * 退出登录
 */
export function logout({}) {
    return fetch.get('/loginapi/loginout', {});
}
/*
 * 查看物流
 * */
export function search({ type, postid,shippingExpressId}) {
    return fetch.get('/KuaiApi/search', {
        type,
        postid,
        shippingExpressId
    });
}

