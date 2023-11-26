<template>
  <div class="dropdown">
    <div class="dropdown__header" @click="toggle">
      <span>{{title}}</span>
      <div class="dropdown__arrow">
        <svg :style="`transform: rotate(${rotation}deg);`" xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
      </div>
    </div>
    <div class="dropdown__content" :style="`max-height: ${height};`" >
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: String
  },
  data() {
    return {
      rotationAngle: -90,
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  },
  computed: {
    rotation() {
      return this.open ? 90 : -90;
    },
    height() {
      return this.open ? "1000px" : 0;
    }
  }
}
  
</script>

<style scoped>

.dropdown__header {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
}
  
.dropdown__content {
  position: relative;
  display: flex;
  flex-direction: column;
  transition: max-height 0.3s ease;
  overflow: hidden; 
}

.dropdown__arrow {
  position: absolute;
  right: 15px;
  
  width: 15px;
  height: 15px;
  margin-left: 10px;
}

.dropdown__arrow svg {
  position: absolute;
  left: 0;
  top: -5px;
  transition: transform 0.3s ease;
}
</style>