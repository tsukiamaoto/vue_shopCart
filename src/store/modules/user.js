import { loginUser, signupUser, logoutUser } from '../../api/user'
import Cookie from 'js-cookie'

const state = () => ({
  user: {},
  isLogined: false,
})

const actions = {
  async checkLogin({ commit }) {
    if(Cookie.get('session-key') !== undefined) {
      const result = await loginUser()
      commit('loginUser', result.isLogined)
    }
  },
  async loginUser({ commit }, user) {
    const result = await loginUser(user)
    commit('loginUser', result.isLogined)
  },
  async logoutUser({ commit }) {
    const result = await logoutUser()
    commit('logoutUser', result.isLogined)
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
  },
  checkLogin(state, isLogined) {
    state.isLogined = isLogined
  }
}

export default {
  namespaced: true, // add to user package
  state,
  mutations,
  actions,
}