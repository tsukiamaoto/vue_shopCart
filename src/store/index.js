import { createStore } from 'vuex'
import user from './modules/user'
import product from './modules/product'

export default createStore({
  modules: {
    user,
    product,
  },
})