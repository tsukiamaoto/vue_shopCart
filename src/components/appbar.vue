<script>
import { mapActions, mapState } from 'vuex'
import { router } from '../route' 
import CartOutlineIcon from 'vue-material-design-icons/CartOutline.vue'
export default {
  computed: mapState({
    isLogined: state => state.user.isLogined
  }),
  methods: {
    ...mapActions('user', [
      'checkLogin',
      'logoutUser'
    ]),
    toHome() {
      router.push({ name: 'Home' })
    }
  },
  mounted(){
    this.checkLogin()
  },
  watch: {
    isLogined(val) {
      if(val !== false) {
        this.toHome()
      }
    }
  },
  components: {
    CartOutlineIcon
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div>
        <a class="navbar-brand" href="/">Book Shop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div class="d-flex">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="btn nav-item me-2">
              <button class="btn btn-outline-primary btn-sm position-relative">
                <CartOutlineIcon />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">+99</span>
              </button>
            </li>
            <li class="nav-item dropdown">
              <button class="btn nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">使用者</button>
              <ul v-if="isLogined" class="dropdown-menu dropdown-menu-md-end" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="/">登出</a></li>
              </ul>

              <ul v-else class="dropdown-menu dropdown-menu-md-end" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="/login">登入</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hurricane&display=swap');
.navbar-brand {
  font-family: 'Hurricane', cursive; 
}

.navbar {
  height: 90px;
}
</style>