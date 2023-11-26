<template>
  <div class="parent-component">
    <div class="grid-container">
      <div class="grid">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.parent-component {
  width: 100%;
}
.grid-container {
  display: flex;
  flex-wrap: nowrap; 
  justify-content: center;
  overflow: hidden;
  width: 100%;
}

.grid {
  max-width: 100%; 
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  gap: 20px; 
  padding: 0 20px;
}
  
@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 992px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>