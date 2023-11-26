<script setup>
import Menu from './components/Menu.vue'
import SideMenu from './components/SideMenu.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Menu></Menu>
  <main>
    <SideMenu />
    <div class="pagecontainer">
      <div class="router_container">
      <RouterView></RouterView>
      </div>
        <Footer></Footer>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
}

.pagecontainer {
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
}
  
.router_container {
  min-height: calc(100vh - 140px);
  width: 100%;
  padding-bottom: 30px;
}
</style>
