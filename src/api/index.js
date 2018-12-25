/**
 * 请求接口的方法
 */

import ajax from './ajax'

const BASE = '/api'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqCategorys = () => ajax(BASE + '/index_category')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude,latitude) => ajax(BASE + '/shops',{longitude,latitude})

// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>

// [5、获取一次性验证码](#5获取一次性验证码)<br/>

// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE + '/login_pwd',{name,pwd,captcha},'POST')

// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqLoginSms = (phone,code) => ajax(BASE + '/login_sms',{phone,code},'POST')

// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendcode = (phone) => ajax(BASE + '/sendcode',{phone})

// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserinfo = () => ajax(BASE + '/userinfo')
// [10、用户登出](#10用户登出)<br/>
export const reqLogout = () => ajax(BASE + '/logout')

//mock请求
export const reqGoods = () => ajax('/goods')
export const reqRatings = () => ajax('/ratings')
export const reqInfo = () => ajax('/info')
