<template>
  <div class="nav_menu">
      <DropDownMenu title="REDUX" class="submenu">
          <router-link to="/canada-redux" class="submenu_item"><span>CANADA REDUX</span></router-link>
          <router-link to="/all-redux" class="submenu_item"><span>ALL REDUX</span></router-link>
      </DropDownMenu>
      <div class="submenu">
         <router-link class="submenu_header" to="/gunpack">GUNPACK</router-link>
      </div>
      <div class="submenu">
        <router-link class="submenu_header" to="/revolver">REVOLVER</router-link>
      </div>
      <div class="submenu">
         <router-link class="submenu_header" to="/carabin">CARABINE</router-link>
      </div>
  </div>
</template>

<script>
import DropDownMenu from "./DropDownMenu.vue"
  
export default {
  components: {DropDownMenu}
}
</script>

<style>

.mods a {
  margin-left: 20px;
  transition: color 0.3s;
}

.mods a:hover {
  color: #9c9c9c;
}

.dropdown {
  width: 100%;
}

.nav_menu {
  width: 200px;
  min-width: 250px;
}

.submenu_header {
  text-align: center;
  font-size: 28px;
  user-select: none;
  cursor: pointer;
  color: #fff;
  border: none;
  font-weight: 700;
}

.submenu_content {
  padding-top: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.submenu_content::after {
  content: '';
  display: block;
  position: absolute;
  width: 80%;
  height: 1px;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: #545454;
}

.submenu_item {
  text-align: center;
  padding: 10px;

  
  position: relative;
}

.submenu_item span {
  position: relative;
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
}
.submenu_item span::after {
  content: '';
  display: block;
  position: absolute;
  width: 5px;
  height: 5px;
  top: 50%;
  left: -10px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: #545454;
}


.submenu {
  text-align: center;
  border: 1px solid white;
  border-left: none;
  border-right: none;
  padding-bottom: 15px;
  padding-top: 15px;
}

.submenu .dropdown__header span {
  color: red;
  text-align: center;
  font-size: 28px;
  user-select: none;
  cursor: pointer;
  color: #fff;
  border: none;
  font-weight: 700;
}
</style>