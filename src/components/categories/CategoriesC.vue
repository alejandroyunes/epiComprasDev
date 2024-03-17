<script setup lang="ts">
import CategoriesTitle from '@/components/categories/CategoriesTitle.vue'
import CategoriesList from '@/components/categories/CategoriesList.vue'
</script>

<template>
  <section class="categories-inner">
    <CategoriesTitle />
    <CategoriesList />
  </section>
</template>


<style lang="scss">
.categories-inner {
  margin: 0 auto;
  max-width: var(--max-width);
  
  @media (max-width: 1024px) {}
}
</style>