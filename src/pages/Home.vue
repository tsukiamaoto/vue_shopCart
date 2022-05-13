<script>
import { mapActions, mapState } from 'vuex'
import Appbar from '../components/appbar.vue'
import TypesList from '../components/typesList.vue'
import SortBar from '../components/sortBar.vue'
import ShopitemList from '../components/shopitemList.vue'
import BackToTop from '../components/backToTop.vue'
export default {
  computed: mapState({
    products: state => state.product.products,
    types: state => state.product.types,
  }),
  methods: {
    ...mapActions('product', [
      'getProducts',
      'getTypes',
    ])
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