<template>
  <div class="footer">
    <img :src="somelogo" />
  </div>
</template>


<script>
import somelogo from './../assets/images/canada.png'

export default {
 data() {
   return {
    somelogo,
   }
 }
}
</script>

<style scoped>
.footer {
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  border-top: 1px solid white;
}

.footer img {
  width: 90px;
  height: 40px;
  
}
</style>