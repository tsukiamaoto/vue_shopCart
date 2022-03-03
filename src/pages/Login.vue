<script>
import Appbar from '../components/appbar.vue'
import { ref } from 'vue'
import { mapState, mapActions } from 'vuex'
import { router } from '../route'

export default {
  setup() {
    const username = ref("")
    const password = ref("")

    return { 
      username,
      password,
    }
  },
  computed: mapState({
    isLogined: state => state.user.isLogined
  }),
  methods: {
    ...mapActions('user', [
      'loginUser',
      'checkLogin'
    ]),
    redirect() {
      router.push({ name: "Home" })
    }
  },
  mounted(){
    this.checkLogin()
  },
  watch: {
    isLogined(val) {
      if(val !== false) {
        this.redirect()
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <label>帳號</label>
    <input type="email" required v-model="username"/>
    <label>密碼</label>
    <input type="password" required v-model="password"/>
    <el-button  class="btn" type="primary" round @click="loginUser({username, password})">登入</el-button>
    <router-link to="/signup"><el-button class="btn" type="primary" round>註冊帳號</el-button></router-link>
    
  </form>
</template>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

.btn {
  width: 100%;
  margin: 0.5em 0;
  font-size: 18px;
}
</style>