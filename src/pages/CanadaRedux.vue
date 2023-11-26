<template>

  <GridDisplay class="cards">
    <ReduxCard class="image-fix-2" :image="CANADAREDUXImage" title="CANADA REDUX" link="/redux/canada-redux-1"></ReduxCard>
  </GridDisplay>
</template>

<script>
import CANADAREDUXImage from  './../assets/images/jgjjjj.png'
  import ReduxCard from "../components/ReduxCard.vue"
  import GridDisplay from "./../components/GridDisplay/GridDisplay.vue"
  
export default {
  components: {ReduxCard, GridDisplay},
  data() {
    return {
      CANADAREDUXImage
    }
  }
}
</script>

<style>
.image-fix-2 .redux-card__image{
  width: 70% !important;
  height: 70% !important;
  
}
</style>