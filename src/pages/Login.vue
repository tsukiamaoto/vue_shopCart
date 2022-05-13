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
      router.push({ name: 'Home' })
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
  },
  components: {
    Appbar,
  }
}
</script>

<template>
  <Appbar />
  <form>
    <div class="form-floating mb-3">
      <input id="floatingInputAccount" class="form-control" type="email" placeholder="name@example.com" v-model="username"/>
      <label for="floatingInputAccount">帳號</label>
    </div>

    <div class="form-floating mb-3">
      <input id="floatingInputPassword" class="form-control" type="password" placeholder="Password" v-model="password"/>
      <label for="floatingInputPassword">密碼</label>
    </div>

    <button class="btn btn-outline-primary" type="button" @click="loginUser({username, password})">登入</button>
    <router-link :to="{ name: 'Signup'}">
      <button class="btn btn-outline-primary" type="button" >註冊帳號</button>
    </router-link>
    
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
  font-size: 0.7em;
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