<script setup lang="ts">
import TitleC from '@/components/title/TitleC.vue'
import CategoriesList from '@/components/categories/CategoriesList.vue'
</script>

<template>
  <section>
    <TitleC :view="'vermás'" :title="'Categorías'" :border="true" />
    <CategoriesList />
  </section>
</template>
