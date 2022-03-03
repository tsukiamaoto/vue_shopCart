<script>
import { ref } from 'vue'
import { mapState, mapActions } from 'vuex'

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
      'signupUser'
    ])
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <label>帳號</label>
    <input type="email" required v-model="username"/>
    <label>密碼</label>
    <input type="password" required v-model="password"/>
    <button type="submit" @click="signupUser({username, password})">註冊</button>
  </form>
  <p>帳號: {{ username }}</p>
  <p>密碼: {{ password }}</p>
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

input, button {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

</style>