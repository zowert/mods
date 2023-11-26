<template>
  <div class="menu menu_container">
    <div class="container">
      <router-link to="/" class="logo">
        <img :src="somelogo" />
        </router-link>

      <div class="mods">
        <router-link to="/">Главная</router-link>
        <a href="https://www.youtube.com/channel/UCHarTopAc8qkDdXXUgAKCZA">Youtube</a>
        <a href="https://discord.gg/ccuxYweH">Наш дискорд</a>
        <a href="https://t.me/zowert">Сотрудничество</a>
      </div>
    </div>
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


<style>

.logo img {
  width: 130px;
  height: 60px;
  margin-top: 7px;
  margin-left: 30px;
}

.menu {
  text-transform: uppercase;
  color: white;
}

.menu .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.canada {
  display: flex;
  align-items: center;
}
.mods a {
  font-weight: 700;
}
</style>