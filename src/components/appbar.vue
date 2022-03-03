<script>
import { ref } from 'vue'
import { mapActions, mapState } from 'vuex'
import { router } from '../route' 

export default {
  setup(){
    const activeIndex = ref('1')
    const activeIndex2 = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }

    return {
      activeIndex,
      activeIndex2,
      handleSelect,
    }
  },
  computed: mapState({
    isLogined: state => state.user.isLogined
  }),
  methods: {
    ...mapActions('user', [
      'checkLogin',
      'logoutUser'
    ]),
    toLogin() {
      router.push({ name: 'Login' })
    },
    toHome() {
      router.push({ name: 'Home' })
    }
  },
  mounted(){
    // this.methods.checkLogin()
    this.checkLogin()
  },
  watch: {
    isLogined(val) {
      if(val !== false) {
        this.toLogin()
      }
    }
  }
}
</script>

<template>
  <el-menu
    :default-active="$activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1" @click="toHome">Home</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item v-if="!isLogined" @click="toLogin">Login</el-menu-item>
    <el-menu-item v-else index="" @click="logoutUser">Logout</el-menu-item>
  </el-menu>
</template>
