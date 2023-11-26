<template>
  <div  class="redux-card__wrapper">
  <router-link :to="link" class="redux-card">
    <img class="redux-card__image" :src="image" />
  </router-link>
  <router-link :to="link" class="redux-card__title">{{title}}</router-link>
    </div>
</template>

<script>

export default {
  props: {
    link: String, 
    image: String,
    title: String
  }
} 
</script>

<style scoped>

.redux-card__wrapper {
  margin-top: 12px; 
}
.redux-card {
  cursor: pointer;
   display: block;
  
  height: 140px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.redux-card__image {
   display: block;
  width: 100%;
  height: 100%;
}

.redux-card__title {
  color: white;  
  text-align: center;
  font-weight: 700;
  width: 100%;
  display: block;
}

.redux-card {
  position: relative;
}

.redux-card {
  box-sizing: border-box;
  background-repeat: no-repeat;
  border-radius: 1em;
  border: 0.15em solid white;
  box-shadow: inset 0 0 0 0.2em white, inset 0 0 1em 0.3em white, inset 1em 1em 0.4em rgba(0,0,0,0.6), 0 0 0 0.2em white, 0 0 1em 0.3em white, 1em 1em 0.4em rgba(0,0,0,0.6);
}



</style>