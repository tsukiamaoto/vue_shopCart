import { getProduct, getProducts, getTypes } from '../../api/product'

const state = () => ({ 
  products: [],
  types: [],
  product: {},
  next: "",
  prev: "",
})

const actions = {
  async getProduct({ commit }, productId) {
    const result = await getProduct(productId)
    commit('getProduct', result)
  },
  async getProducts({ commit }, query = {}) {
    query = {
      c: query.column || "",
      search_query: query.searchQuery || "",
      limit: query.limit || "",
      sort_type: query.sortType || "",
      order: query.order || "",
      next: query.next || "",
      prev: query.prev || "",
    }

    const result = await getProducts(query)
    commit('getProducts', {
      products: result.data,
      next: result.next,
      prev: result.prev,
    })
  },
  async getTypes({ commit }) {
    const result = await getTypes()
    commit('getTypes', result)
  }
}

const mutations = {
  getProduct(state, product) {
    state.product = product
  },
  getProducts(state, {products, next, prev}) {
    state.products = products
    state.next = next
    state.prev = prev
  },
  getTypes(state, types) {
    state.types = types
  }
}

export default {
  namespaced: true, // add to product package
  state,
  mutations,
  actions
}