<script>
export default {
  props: {
    itemInfo: Object,
  }
}
</script>
<template>
  <div class="row">
    <h>{{this.itemInfo.name}}</h>
  </div>
  <div class="row">
    <p>作者：{{this.itemInfo.editor}}</p>
  </div>
  <div class="price-info row">
    <div class="row">
      <p>定價:NT$ {{this.itemInfo.pricing}}</p>
    </div>
  </div>
</template>
<style scoped>

</style>