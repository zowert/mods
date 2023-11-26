<template>
  <GridDisplay class="cards">
    <ReduxCard :image="somelogo" title="SWAROWSKI REDUX" link="/redux/swarowskiredux"></ReduxCard>
    <ReduxCard :image="somelogo1" title="SWAROWSKI BANG" link="/redux/swarowskibang"></ReduxCard>
    <ReduxCard :image="somelogo6" title="SWAROWSKI VOL2" link="/redux/swarowskivol2"></ReduxCard>
    <ReduxCard :image="somelogo2" title="SWAROWSKI 002" link="/redux/swarowski002"></ReduxCard>
<ReduxCard :image="somelogo3" title="SWAROWSKI 004" link="/redux/swarowski004"></ReduxCard>
<ReduxCard :image="somelogo7" title="HATE FEARLESS" link="/redux/HateFearless">
</ReduxCard>
<ReduxCard :image="somelogo4" title="HATE MODS AURORA" link="/redux/HateModsAurora"></ReduxCard>
<ReduxCard :image="somelogo5" title="HATE MODS LIBERTY" link="/redux/HateLiberty"></ReduxCard>
<ReduxCard :image="somelogo8" title="HATE BLOODSTONE" link="/redux/HateBloodstone"></ReduxCard>
  </GridDisplay>
</template>

<script>
import somelogo from  './../assets/images/image-removebg-preview (4).png'
import somelogo1 from './../assets/images/image-removebg-preview (4).png'  
import somelogo2 from './../assets/images/image-removebg-preview (4).png' 
import somelogo3 from './../assets/images/image-removebg-preview (4).png' 
import somelogo4 from './../assets/images/111111.png' 
import somelogo5 from './../assets/images/111111.png'
import somelogo6 from './../assets/images/image-removebg-preview (4).png'
import somelogo7 from './../assets/images/111111.png'
import somelogo8 from './../assets/images/111111.png'
import ReduxCard from "../components/ReduxCard.vue"
import GridDisplay from "./../components/GridDisplay/GridDisplay.vue"
  
export default {
  components: {ReduxCard, GridDisplay},
  data() {
    return {
      somelogo,
      somelogo1,
      somelogo2,
      somelogo3,
      somelogo4,
      somelogo5,
      somelogo6,
      somelogo7,
      somelogo8,
    }
  }  
}

</script>

<style scoped>
.cards * {
  width: 100%;
}
</style>