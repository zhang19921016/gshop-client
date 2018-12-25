/**
 *vuex最核心的管理模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import Msite from './modules/Msite'
import User from './modules/User'
import Shop from './modules/Shop'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    Msite,
    User,
    Shop
  },
  actions,
  getters
})
