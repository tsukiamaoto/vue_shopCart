<script>
export default {
  props: ['products'],
  methods: {
    isExistedImage: function(product) {
      return product.categories.length > 0 && 
            product.categories[0].images.length > 0 &&
            product.categories[0].images.find(img => img != '')
    },
    getImage: function(imgs) {
      const mainImage = imgs.find(img => img != '')
      
      return mainImage
    },
  }
}
</script>

<template>
  <div class="content" v-for="product in this.products" :key="product.id">
    <div class="row">
      <div class="col-md-2">
        <router-link class="link" :to="{ name: 'Product', params: { productId: product.id } }">
          <img class="img rounded float-start"
            v-if="isExistedImage(product)"
            :src="getImage(product.categories[0].images)"
            alt="image"
            loading="lazy"
          />
          <img class="img rounded float-start"
            v-else
            src="../assets/no-image.svg"
            alt="image"
            loading="lazy"
          />
        </router-link>
      </div>
      <div class="col-md-6 d-flex align-content-start">
        <router-link class="link" :to="{ name: 'Product', params: { productId: product.id } }">
          <p class="name">{{product.name}}</p>
        </router-link>
      </div>
      <div class="col-md-3  d-flex align-content-start" v-if="product.categories.length > 0">
        $ {{product.categories[0].price}}
      </div>
    </div>
  </div>
</template>

<style scoped>
  .content{
    max-height: 20vh;
    padding: 15px 15px;
  }
  .img {
    width: 10vw;
    height: 16vh;
  }
  .name {
    text-align: left;
    font-weight: bold;
    overflow: hidden;
    max-height: 18vh;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .link {
    text-decoration: none
  }
</style>