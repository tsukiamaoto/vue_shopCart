<script>
import { mapState, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('product', [
      'getProducts',
    ]),
    productsOrderByDate() {
      const query = {
        sort_type: 'publicationDate'
      }

      this.getProducts(query)
      this.changeUrlWithQuery(query)
    },
    productsOrderByPriceFromLowToHigh() {
      const query = {
        sort_type: 'price',
        order: 'desc',
      }

      this.getProducts(query)
      this.changeUrlWithQuery(query)
    },
    productsOrderByPriceFromHighToLow() {
      const query = {
        sort_type: 'price',
        order: 'asc',
      }

      this.getProducts(query)
      this.changeUrlWithQuery(query)
    },
    changeUrlWithQuery(query) {
      this.$router.replace({ name: 'Home', query: {...query}})
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