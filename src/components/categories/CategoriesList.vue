<script setup lang="ts">
import './scss/categoriesList.scss'
import { categories } from './categoriesData'

</script>

<template>
  <section class="list-inner">
    <ul>
      <li v-for="category in categories" :key="category.name">
        <img :src="category.image" alt="">
        <h3>{{ category.name }}</h3>
      </li>
    </ul>

  </section>
</template>
