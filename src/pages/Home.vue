<script>
import Appbar from '../components/appbar.vue'
import TypesList from '../components/typesList.vue'
import SortBar from '../components/sortBar.vue'
import ShopitemList from '../components/shopitemList.vue'
import Pagination from '../components/paginantion.vue'
import BackToTop from '../components/backToTop.vue'
export default {
  components: {
    Appbar, 
    TypesList,
    SortBar,
    ShopitemList,
    Pagination,
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
        <TypesList/>
      </div>  
      <div class="shopitem ps-3">
        <div class="row justify-content-end">
          <SortBar/>
        </div>
        <div class="row">
          <ShopitemList />
        </div>
      </div>
    </div>
    <div class="pagination">
      <Pagination />
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
    width: 160px;
  }
  .shopitem {
    width: calc(90% - 160px);
    background: white;
  }
</style>