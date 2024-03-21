<script setup lang="ts">
import '../categories/scss/categoriesList.scss'
import { RouterLink } from 'vue-router'
import { ads } from './data'

</script>

<template>
  <section>
    <ul>
      <li v-for="category in ads" :key="category.id" class="item">
        <p>{{ category.description }}</p>
        <p>hello</p>
      </li>
    </ul>

  </section>
</template>
