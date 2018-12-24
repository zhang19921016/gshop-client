/**
 * 包含n个简介更新状态的方法的对象
 */
import {reqAddress,reqCategorys,reqShops,reqLogout,reqUserinfo} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_SAVEUSER,
  RECEIVE_RESETUSER

} from './mutation-types'

export default {
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
