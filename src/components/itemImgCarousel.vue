<script>
export default {
  props: {
    itemImgs: Array,
  },
  computed: {
    itemImgsRemoveFirstWithGuid: function(){
      return this.itemImgs.map(img => {
        let key = this.guid()
        return {
          img,
          key,
        }
      }).slice(1,this.itemImgs.length)
    },
    itemImgActive: function() {
      return this.itemImgs[0]
    }
  },
  methods: {
    guid: function() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
    }
  }
}
</script>
<template>
  <div id="carouselItemControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="itemImgActive" class="d-block w-100" alt="pic">
      </div>
      <div class="carousel-item" v-for="itemImgRemoveFirstWithGuid in itemImgsRemoveFirstWithGuid" :key="itemImgRemoveFirstWithGuid.key">
        <img :src="itemImgRemoveFirstWithGuid.img" class="d-block w-100" alt="pic">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselItemControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselItemControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style scoped>

</style>