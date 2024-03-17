<script setup lang="ts">
import CategoriesC from '@/components/categories/CategoriesC.vue'
import AdsC from '@/components/ads/AdsC.vue'

</script>

<template>
  <main class="home-outer">
    <CategoriesC />
    <AdsC />
  </main>
</template>


<style lang="scss">
.home-outer {
  width: 100%;
  padding: 0 20px;
  max-width: var(--max-width);
  margin: 0 auto;
}
</style>
