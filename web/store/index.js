export const state = () => ({
  menuShown: false,
  types: []
})

export const mutations = {
  ShowMenu(state, shown) {
    state.menuShown = shown
  },
  SetTypes(state, types) {
    state.types = types
  }
}

export const actions = {
  async loadTypes({commit, state}, params) {
    if (state.types.length > 0) return state.types
    let result = await this.$axios.$get('web/type/list')
    let types = result?.data
    commit('SetTypes', types)
    return types
  }
}