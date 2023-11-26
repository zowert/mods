<template>
   <div class="card">
      <div class="image-wrapper">
      <img :src="image" />
      </div>
      <a class="download-btn"  :href="link">DOWNLOAD</a>
    </div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String
      },
      link: {
        type: String
      }
    }
  }
</script>

<style scoped>
.card {
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 110%;
  height: 100%; 
}
  
.download-btn {
  text-align: center;
  display: flex;
  justify-content: center; 
   font-weight: 700;
  margin-top: auto;
}

  .image-wrapper {
    max-height: 200px;
    display: flex;
    justify-content: center; 
  }
</style>