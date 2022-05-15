<script>
import InfiniteLoading from "v3-infinite-loading"
import "v3-infinite-loading/lib/style.css"

export default {
  props: {
    loadData: Function
  },
  data() {
    return {
      distance: 100,
      firstLoad: false
    }
  },
  components: {
    InfiniteLoading
  }
}
</script>

<template>
  <InfiniteLoading 
    @infinite="loadData"
    :distance="distance"
    :firstLoad="firstLoad"
  >
    <template #spinner>
      <div class="spinner-border text-info" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </template>

    <template #complete>
      <span></span>
    </template>

    <!-- <template #error>
    </template> -->
  </InfiniteLoading>
  
</template>

<style>

</style>