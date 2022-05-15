<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('product', [
      'getProducts',
      'reset',
    ]),
    productsOrderByDate() {
      // has to set default on next and prev because next and prev are previos record
      const params = Object.fromEntries(new URLSearchParams(location.search)) 
      const query = {
        ...params,
        next: "",
        prev:"",
        sort_type: 'publicationDate'
      }
      this.reset()
      this.getProducts(query)
      this.changeUrlWithQuery(query)
    },
    productsOrderByPriceFromLowToHigh() {
      // has to set default on next and prev because next and prev are previos record
      const params = Object.fromEntries(new URLSearchParams(location.search)) 
      const query = {
        ...params,
        next: "",
        prev:"",
        sort_type: 'price',
        order: 'desc',
      }

      this.reset()
      this.getProducts(query)
      this.changeUrlWithQuery(query)
    },
    productsOrderByPriceFromHighToLow() {
      // has to set default on next and prev because next and prev are previos record
      const params = Object.fromEntries(new URLSearchParams(location.search)) 
      const query = {
        ...params,
        next: "",
        prev:"",
        sort_type: 'price',
        order: 'asc',
      }
      
      this.reset()
      this.getProducts(query)
      this.changeUrlWithQuery(query)
    },
    changeUrlWithQuery(query = {}) {
      this.$router.replace({ name: 'Home', query: {
        ...query,
      }})
    }
  }
}
</script>
<template>
  <div class="content">
    <div class="d-flex justify-content-end p-2 me-3">
      <button class="btn dropdown-toggle" type="button" id="SortMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        排序
      </button>
      <ul class="dropdown-menu" aria-labelledby="SortMenuButton">
        <li><a class="dropdown-item" v-on:click="productsOrderByDate">最新</a></li>
        <li><a class="dropdown-item" v-on:click="productsOrderByPriceFromLowToHigh">價格-由高到低</a></li>
        <li><a class="dropdown-item" v-on:click="productsOrderByPriceFromHighToLow">價格-由低到高</a></li>
      </ul>
    </div>
    
  </div>  
</template>

<style scoped>
</style>