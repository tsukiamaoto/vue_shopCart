import { loginUser, signupUser, logoutUser } from '../../api/user'
import Cookie from 'js-cookie'

const state = () => ({
  user: {},
  isLogined: false,
})

const actions = {
  checkLogin({ commit }) {
    if(Cookie.get('session-key') !== undefined) {
      const isLogined = true
      commit('loginUser', isLogined)
    }
  },
  async loginUser({ commit }, user) {
    const result = await loginUser(user)
    commit('loginUser', result.isLogined)
  },
  async logoutUser({ commit }) {
    const result = await logoutUser()
    commit('logoutUser', result.isLogined)

    // Cookie.remove('session-key', {path: '/api'})
  },
  async signupUser({ commit }, user) {
    await signupUser(user)
  }
}

const mutations = {
  loginUser(state, isLogined) {
    state.isLogined = isLogined
  },
  logoutUser(state, isLogined) {
    state.isLogined = isLogined
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}