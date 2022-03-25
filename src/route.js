import { createRouter, createWebHistory } from 'vue-router'
import Login from './pages/Login.vue'
import Signup from './pages/Signup.vue'
import Home from './pages/Home.vue'
import Product from './pages/Product.vue'
import Cookie from 'js-cookie'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: { requiredAuth: true }
  },
  {
    name: 'Login',
    path: '/login', 
    component: Login,  
  },
  {
    name: 'Signup',
    path: '/signup', 
    component: Signup ,
    meta: { requiredAuth: true }
  },
  {
    name: 'Product',
    path: '/product',
    component: Product,
    meta: { requiredAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) =>{
  if(to.meta.requiredAuth) {
    const sessionKey = Cookie.get('session-key')
    if(sessionKey === undefined){
      return { name: 'Login' } 
    }
  }
})

export {
  router
}