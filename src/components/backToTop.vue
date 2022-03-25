<script>
import { ref } from 'vue'
import ArrowUpBoldOutlineIcon from 'vue-material-design-icons/ArrowUpBoldOutline.vue'
export default {
  setup() {
    const scrollY = ref(0)
    const scrollTimer = ref(0)

    return { 
      scrollY,
      scrollTimer,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.scrollTimer) return;
      this.scrollTimer = setTimeout(() => {
        this.scrollY = window.scrollY
        clearTimeout(this.scrollTimer)
        this.scrollTimer = 0
      }, 100)
    },
    toTop() {
      ;window.scrollTo({
        top: 0,
        bahavior: "smooth"
      })
    }
  },
  components: {
    ArrowUpBoldOutlineIcon
  }
}
</script>

<template>
  <transition name="fade" v-show="scrollY > 300">
    <div class="backTop">
      <button type="button" class="btn btn-primary btn-circle btn-sm" @click="toTop">
        <ArrowUpBoldOutlineIcon />
      </button>
    </div>
  </transition>
</template>

<style scoped>
.backTop {
  position: fixed;
  right: 5%;
  bottom: 33%;
}
.btn-circle {
  width: 50px;
  height: 50px;
  padding: 10px 0;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 25px;
}
</style>