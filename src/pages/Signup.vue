<script>
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
      'signupUser',
      'checkLogin',
    ]),
    redirect() {
      router.back()
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
  <Appbar />
  <form @submit.prevent="onSubmit">
    <div class="form-floating mb-3">
      <input id="floatingSignupInputAccount" class="form-control" type="email" placeholder="name@example.com" v-model="username"/>
      <label for="floatingSignupInputAccount">帳號</label>
    </div>

    <div class="form-floating mb-3">
      <input id="floatingSignupInputPassword" class="form-control" type="password" placeholder="Password" v-model="password"/>
      <label for="floatingSignupInputPassword">密碼</label>
    </div>

    <button class="btn btn-outline-primary" type="button" @click="signupUser({username, password})">註冊</button>
    
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