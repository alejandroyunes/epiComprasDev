<script setup lang="ts">
import '../categories/scss/categoriesList.scss'
import { RouterLink } from 'vue-router'
import { ads } from './data'

</script>

<template>
  <section class="list-inner">
    <ul>
      <li v-for="category in ads" :key="category.id">
        <p>{{ category.description }}</p>
      </li>
    </ul>

  </section>
</template>
