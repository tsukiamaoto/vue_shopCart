<script>
import { ref } from 'vue'

import Appbar from '../components/appbar.vue'
import BackToTop from '../components/backToTop.vue'
import TypesList from '../components/typesList.vue'
import ItemImgCarousel from '../components/itemImgCarousel.vue'
import ItemInfo from '../components/itemInfo.vue'
import ItemPurchaseButton from '../components/itemPurchaseButton.vue'
export default {
  setup() {
    const itemImgs = ref(['https://pbs.twimg.com/media/FOlEIPWakAEg4UC?format=jpg&name=large', 'https://pbs.twimg.com/media/FOlEIPWaQAM-i7i?format=jpg&name=large'])
    const itemInfo = ref({
      name: '原子習慣：細微改變帶來巨大成就的實證法則',
      editor: '詹姆斯．克利爾',
      pricing: 330,
    })

    return { 
      itemImgs,
      itemInfo,
    }
  },
  components: {
    Appbar,
    BackToTop,
    TypesList,
    ItemImgCarousel,
    ItemInfo,
    ItemPurchaseButton,
  }
}
</script>
<template>
  <div>
    <div class="appbar">
      <Appbar />
    </div>
    <div class="row">
      <div class="menu col-2">
        <TypesList />
      </div>
      <div class="item-content col-10">
        <div class="row">
          <div class="col-sm-8 col-md-9">
            <div class="row">
              <div class="item-img col-sm-4 col-md-5">
                <div class="row">
                  <img src="https://pbs.twimg.com/media/FOhheqlaIAEzKaN?format=jpg&name=4096x4096"
                  alt="pic"
                  loading="lazy"
                  />
                </div>
                <div class="item-img-carousel row">
                  <ItemImgCarousel :itemImgs="itemImgs"/>
                </div>
              </div>
              <div class="col-sm-8 col-md-7">
                <ItemInfo :itemInfo="itemInfo"/>
              </div>
            </div>
          </div>
          <div class="item-purchase-info col-sm-4 col-md-3">
            <ItemPurchaseButton />
          </div>
        </div>
      </div>
    </div>
    
    <div>
      <BackToTop />
    </div>
  </div>
</template>
<style scoped>
.menu {
  width: 160px;
}
.item-content {
  position: relative;
  width: calc(90% - 160px);
  margin-left: 70px;
  margin-top: 10px;
}

.item-img {
  position: relative;
  float: left;
  width: 310px;
}
.item-img-carousel {
  padding: 0 40px;
}
</style>