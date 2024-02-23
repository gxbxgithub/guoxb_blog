import {vx} from '../constant/index'
import { service, serviceLoading } from '../network/request'

const state = () => ({
  types: []
})

const mutations = {
  [vx.SET_TYPES_LIST](state, list) {
    state.types = list
  }
}

const actions = {
  async [vx.GET_TYPES_LIST]({state, commit}, reload) {
    if (!reload && state.types && state.types.length > 0) return
    const result = await service.get('/type/list')
    if (!result) return
    commit(vx.SET_TYPES_LIST, result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}