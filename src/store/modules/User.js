import Vue from 'vue'
import Vuex from 'vuex'
import {
  RECEIVE_SAVEUSER,
  RECEIVE_RESETUSER
} from '../mutation-types'
import {reqLogout,reqUserinfo} from '../../api'


Vue.use(Vuex)


const state = {
  user:{}
}

const mutations = {
  [RECEIVE_SAVEUSER] (state,{user}) {
    state.user = user
  },
  [RECEIVE_RESETUSER] (state) {
    state.user = {}
  }
}

const actions = {
  saveUser ({commit},user) {
    commit (RECEIVE_SAVEUSER,{user})
  },
  async saveUserInfo ({commit}) {
    const result = await reqUserinfo()
    const user = result.data
    if (result.code === 0) {
      commit(RECEIVE_SAVEUSER,{user})
    }
  },
  async resetUser ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RECEIVE_RESETUSER)
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
