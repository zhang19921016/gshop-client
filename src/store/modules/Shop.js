import Vue from 'vue'
import Vuex from 'vuex'
import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  ADD_FOODCOUNT,
  REDUCE_FOODCOUNT
} from '../mutation-types'
import {reqGoods,reqRatings,reqInfo} from '../../api'

Vue.use(Vuex)

const state = {
  goods: [],
  ratings: [],
  info: {}
}

const mutations = {
  [RECEIVE_GOODS] (state,{goods}) {
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state,{ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state,{info}) {
    state.info = info
  },
  [ADD_FOODCOUNT] (state,{food}) {
    if (!food.count) {
      /*food.count = 1*/
      //后添加的属性,无法实现数据绑定
      Vue.set(food,'count',1)
    }else{
      food.count++
    }
  },
  [REDUCE_FOODCOUNT] (state,{food}) {
    if (food.count > 0) {
      food.count--
    }
  }
}

const actions = {
  async getGoods ({commit},cb) {
    //发送请求,得到数据
    const result = await reqGoods();
    if (result.code === 0) {
      const goods = result.data
      //将数据提交到mutation中
      commit(RECEIVE_GOODS,{goods})
      typeof cb==='function' && cb()
    }
  },
  async getRatings ({commit}) {
    //发送请求,得到数据
    const result = await reqRatings();
    if (result.code === 0) {
      const ratings = result.data
      //将数据提交到mutation中
      commit(RECEIVE_RATINGS,{ratings})
    }
  },
  async getInfo ({commit}) {
    //发送请求,得到数据
    const result = await reqInfo();
    if (result.code === 0) {
      const info = result.data
      //将数据提交到mutation中
      commit(RECEIVE_INFO,{info})
    }
  },
  updateFoodCount ({commit},{isAddFoodCount,food}) {
    if (isAddFoodCount) {
      //加1
      commit(ADD_FOODCOUNT,{food})
    }else{
      commit(REDUCE_FOODCOUNT,{food})
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
