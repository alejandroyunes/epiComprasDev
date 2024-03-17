<script setup lang="ts">
import './scss/categoriesList.scss'
import { RouterLink } from 'vue-router'
import { categories } from './categoriesData'

</script>

<template>
  <section class="list-inner">
    <ul>
      <li v-for="category in categories" :key="category.name">
        <RouterLink :to="category.url">
          <img :src="category.image" :alt="category.alt" width="100px" height="100px">
          <h3>{{ category.name }}</h3>
        </RouterLink>
      </li>
    </ul>

  </section>
</template>
