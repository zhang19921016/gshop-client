import Vue from 'vue'
import Vuex from 'vuex'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
} from '../mutation-types'
import {reqAddress,reqCategorys,reqShops} from '../../api'

Vue.use(Vuex)

const state = {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {}, // 地址信息对象
  categorys: [], // 食品分类数组
  shops: [], // 商家数组
}

const mutations = {
  [RECEIVE_ADDRESS] (state,{address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state,{categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state,{shops}) {
    state.shops = shops
  }
}

const actions = {
  async getAddress ({commit,state}) {
    //发送请求,得到数据
    const {latitude,longitude} = state
    const result = await reqAddress(longitude,latitude)
    console.log(result);
    if (result.code === 0) {
      const address = result.data
      //将数据提交到mutation中
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  async getCategorys ({commit}) {
    //发送请求,得到数据
    const result = await reqCategorys()
    const categorys = result.data
    //将数据提交到mutation中
    commit(RECEIVE_CATEGORYS,{categorys})
  },
  async getShops ({commit,state}) {
    //发送请求,得到数据
    const {longitude,latitude} = state
    const result = await reqShops(longitude,latitude)
    const shops = result.data
    //将数据提交到mutation中
    commit(RECEIVE_SHOPS,{shops})
  },
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
