/**
 * 包含n个直接更新状态的方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_SAVEUSER,
  RECEIVE_RESETUSER
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state,{address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state,{categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state,{shops}) {
    state.shops = shops
  },
  [RECEIVE_SAVEUSER] (state,{user}) {
    state.user = user
  },
  [RECEIVE_RESETUSER] (state) {
    state.user = {}
  }
}
