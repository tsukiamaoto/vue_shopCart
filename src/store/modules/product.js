import { getProduct, getProducts, getTypes } from '../../api/product'

const state = () => ({ 
  products: [],
  types: [],
  product: {},
  next: "",
  prev: "",
  loading: false,
  complete: false
})

const actions = {
  async getProduct({ commit }, productId) {
    const result = await getProduct(productId)
    commit('getProduct', result)
  },
  async getProducts({ commit }, query = {}) {
    query = {
      c: query.c || "",
      search_query: query.search_query || "",
      limit: query.limit || "",
      sort_type: query.sort_type || "",
      order: query.order || "",
      next: query.next || "",
      prev: query.prev || "",
    }

    const result = await getProducts(query)
    commit('loading', true)

    if (result.data.length < 30) {
      commit('complete', true)
      commit('loading', false)
    }
    commit('getProducts', {
      products: result.data,
      next: result.next,
      prev: result.prev,
    })
  },
  async getTypes({ commit }) {
    const result = await getTypes()
    commit('getTypes', result)
  },
  reset({ commit }) {
    commit('reset')
  },
}

const mutations = {
  getProduct(state, product) {
    state.product = product
  },
  getProducts(state, {products, next, prev}) {
    const newProducts = state.products.concat(products)
    state.products = newProducts
    state.next = next
    state.prev = prev
  },
  getTypes(state, types) {
    state.types = types
  },
  reset(state) {
    state.products = []
    state.product = {}
    state.next = ""
    state.prev = ""
    state.loading = false
    state.complete = false
  },
  loading(state, loading) {
    state.loading = loading
  },
  complete(state, complete) {
    state.complete = complete
  }
}

export default {
  namespaced: true, // add to product package
  state,
  mutations,
  actions
}