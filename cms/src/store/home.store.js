import {vx} from '../constant/index'
import { service, serviceLoading } from '@/network/request'

const state = () => ({
  userInfo: JSON.parse(localStorage.getItem('userInfo') || "{}")
})

const mutations = {
  [vx.SAVE_USERINFO](state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  async login({ commit }, params) {
    let result = await service.post('/user/login', params)
    if (result) {
      const { token, ...userInfo } = result.data
      commit(vx.SAVE_USERINFO, userInfo)
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
    return result
  },
  async menus() {
    let result = await service.get('/user/menus')
    return result
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}