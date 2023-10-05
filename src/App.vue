<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <div class="wrapper">
    <RouterView />
  </div>
  <TheFooter />
</template>

<style scoped>
.wrapper {
  height: 100%;
  padding: 30px 0;
  flex: 1;
}
</style>
