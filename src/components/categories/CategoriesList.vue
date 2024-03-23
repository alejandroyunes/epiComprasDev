<script setup lang="ts">
import './categoriesList.scss'
import { RouterLink } from 'vue-router'
import { categories } from './categoriesData'

</script>

<template>
  <section class="category-list-container">
    <ul>
      <li v-for="category in categories" :key="category.name">
        <RouterLink :to="category.url">
          <img :src="category.image" :alt="category.alt" width="80px" height="80px">
          <h3>{{ category.name }}</h3>
        </RouterLink>
      </li>
    </ul>

  </section>
</template>
