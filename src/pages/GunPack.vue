<template>
  <GridDisplay class="cards">
    <DownloadableItem :image="gunImage1" link="https://drive.google.com/file/d/1V1WKQSuh0e9vEruq7SPH7ppRqkSRY9Oi/view">   
    </DownloadableItem>
    <DownloadableItem :image="gunImage2" link="https://drive.google.com/file/d/1sNST6i5oVMNgX_tts-3O78fczPmAG_aN/view">   
    </DownloadableItem>
    <DownloadableItem :image="gunImage3" link="https://drive.google.com/file/d/1SxcKMLu_vTV0i_l35O7w1ZeDywt5A-dn/view">   
    </DownloadableItem>  
    <DownloadableItem :image="gunImage4" link="https://drive.google.com/file/d/1HW9LPsDCfNhItvGOV5IsSEKiGqCY3lRl/view?usp=sharing">   
      </DownloadableItem>
    <DownloadableItem :image="gunImage5" link="https://drive.google.com/file/d/1t7g0Z7XMw2G2y9EZjJept_1WhatYnNhH/view?usp=sharing">   
      </DownloadableItem>
      <DownloadableItem :image="gunImage6" link="https://drive.google.com/drive/folders/1n58gAz4epRIVit7jGv2fuXG30ocXg-mw">
      </DownloadableItem>
    <DownloadableItem :image="gunImage7" link="https://drive.google.com/file/d/1dg6DUyu_3fHz7g8KeGCNpGs-RiVg4HnE/view?usp=sharing">
      </DownloadableItem>
    <DownloadableItem :image="gunImage8" link="https://drive.google.com/file/d/1-NgRvlr5_pXEP8FzVAXOJF5Mjwtwjwap/view">
      </DownloadableItem>
  </GridDisplay>
</template>

<script>
import GridDisplay from "./../components/GridDisplay/GridDisplay.vue"
import gunImage1 from './../assets/images/img1.png'
import gunImage2 from './../assets/images/4244242424242.png'
import gunImage3 from './../assets/images/4rtyynovyypng_1690547250.png'
import gunImage4 from './../assets/images/gfthgcvgvgf-removebg-preview (1).png'
import gunImage5 from './../assets/images/image-removebg-preview_2-removebg-preview.png'
import gunImage6 from './../assets/images/LEGOPBMODSgg-removebg-preview.png'
import gunImage7 from './../assets/images/LPBModskkk-removebg-preview.png'
import gunImage8 from './../assets/images/PBModshh-removebg-preview.png'
import gunImage9 from './../assets/images/3b3267e6d1a08686hhhhh-removebg-preview.png'
import DownloadableItem from "../components/DownloadableItem.vue" 
export default {
  components: {DownloadableItem, GridDisplay},
  data() {
    return {
      gunImage1,
      gunImage2,
      gunImage3,
      gunImage4,
      gunImage5,
      gunImage6,
      gunImage7,
      gunImage8,
      gunImage9,
    }
  }  
}
</script>

<style scoped>
.cards {
  
}

</style>