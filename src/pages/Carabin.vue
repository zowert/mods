<template>
  <GridDisplay class="cards">
    <DownloadableItem :image="carabin1" link="https://drive.google.com/file/d/1xwZ05SGraQK0gzycY5tQvNljhMH2sm9m/view?usp=sharing">   
    </DownloadableItem>
    <DownloadableItem :image="carabin2" link="https://drive.google.com/file/d/1_vlFfbb-Qo77KqemtRt7TuVAFHzCJMT6/view?usp=sharing">   
      </DownloadableItem>
    <DownloadableItem :image="carabin3" link="https://drive.google.com/file/d/1ZBfE-lKhsB6GK5GuMloAYDvx32YgDv0i/view?usp=sharing">   
      </DownloadableItem>
    <DownloadableItem :image="carabin4" link="https://drive.google.com/file/d/1oNXQ0MHcXQ-rAJitmzrKyv5ZNDfTai0z/view?usp=sharing">   
      </DownloadableItem>
    <DownloadableItem :image="carabin5" link="https://drive.google.com/file/d/1Tqq33pKKtgN7hi3R_PmNy2uRf7oljnHK/view">   
      </DownloadableItem>
    <DownloadableItem :image="carabin6" link="https://drive.google.com/file/d/1xD2SF8QHwGepwIyORhgVaB1ao-kSYlvW/view?usp=sharing">   
      </DownloadableItem>
    <DownloadableItem class="image-fix-1" :image="carabin7" link="https://drive.google.com/file/d/14CvApeQlhs78DWxQaxF0fBR6irYiOgSW/view">   
      </DownloadableItem>
    <DownloadableItem class="image-fix-1" :image="carabin8" link="https://drive.google.com/file/d/1jMeIJgatFj36xUfYCHLzc_0G1PKFeQxU/view?usp=sharing">   
      </DownloadableItem>
  </GridDisplay>
</template>

<script>
import GridDisplay from "./../components/GridDisplay/GridDisplay.vue"
import carabin1 from './../assets/images/1-removebg-preview.png'
import carabin2 from './../assets/images/2-removebg-preview.png'
import carabin3 from './../assets/images/3-removebg-preview.png'
import carabin4 from './../assets/images/4-removebg-preview.png'
import carabin5 from './../assets/images/5-removebg-preview-removebg-preview.png'
import carabin6 from './../assets/images/6-removebg-preview.png'
import carabin7 from './../assets/images/7-removebg-preview.png'
import carabin8 from './../assets/images/552655.png'
import DownloadableItem from "../components/DownloadableItem.vue" 
export default {
  components: {DownloadableItem, GridDisplay},
  data() {
    return {
      carabin1,
      carabin2,
      carabin3,
      carabin4,
      carabin5,
      carabin6,
      carabin7,
      carabin8,
      
    }
  }  
}
</script>

<style scoped>
.cards {

}

.image-fix-1 {
  
}
</style>
