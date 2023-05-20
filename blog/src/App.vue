<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopMenu from "./components/TopMenu.vue"

</script>

<template>
  <div class="container">
    <div class="content">
      <TopMenu />
      <RouterView />
    </div>

  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.content {
  width: 70%;
}

@media (max-width: 1200px) {
  .content {
    width: 80%;
  }
}
@media (max-width: 900px) {
  .content {
    width: 100%;
  }
}
</style>
