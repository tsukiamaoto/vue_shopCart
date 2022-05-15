<script>
import { mapActions, mapState } from 'vuex'

import Appbar from '../components/appbar.vue'
import TypesList from '../components/typesList.vue'
import SortBar from '../components/sortBar.vue'
import ShopitemList from '../components/shopitemList.vue'
import BackToTop from '../components/backToTop.vue'
import InfiniteLoading from '../components/infiniteLoading.vue'

export default {
  computed: {
    ...mapState({
      products: state => state.product.products,
      types: state => state.product.types,
      prev: state => state.product.prev,
      next: state => state.product.next,
      loading: state => state.product.loading,
      complete: state => state.product.complete
    }),
    query: function(){
      return {
        ...Object.fromEntries(new URLSearchParams(location.search)),
        next: this.next,
        prev: this.prev
      }
    }
  },
  methods: {
    ...mapActions('product', [
      'getProducts',
      'getTypes',
    ]),
    async getProductsByQuery(loadState){
      // loadState is infiniteLoading component virable
      try {
        await this.getProducts(this.query)
        if(this.loading) {
          loadState.loaded()
        }
        if(this.complete) {
          loadState.complete()
        }
        this.changeUrlWithQuery(this.query)
      } catch(err) {
        loadState.error()
        console.error(err)
      }      
    },
    changeUrlWithQuery(query = {}) {
      this.$router.replace({ name: 'Home', query: {
        ...query,
      }})
    },
  },
  mounted(){
    this.getProducts()
    this.getTypes()
  },
  components: {
    Appbar, 
    TypesList,
    SortBar,
    ShopitemList,
    BackToTop,
    InfiniteLoading,
  }
}
</script>

<template>
  <div class="">
    <div class="appbar">
      <Appbar/>
    </div>
    <div class="shop-content row g-0">
      <div class="menu">
        <TypesList :types="types"/>
      </div> 
      <div class="shopitem ps-3">
        <div class="row justify-content-end">
          <SortBar/>
        </div>
        <div class="row">
          <ShopitemList :products="products"/>
        </div>
        <InfiniteLoading :loadData="getProductsByQuery"/>
      </div>
    </div>
    <div class="backToTop">
      <BackToTop />
    </div>
  </div>
  
</template>

<style scoped>
  .appbar {
    /* position: -webkit-sticky;
    position: sticky;
    top: 0; */
  }
  .shop-content {
    position: relative;
    height: calc(100% - 56px);
  }
  .menu {
    width: 190px;
  }
  .shopitem {
    width: calc(90% - 190px);
    background: white;
  }
</style>