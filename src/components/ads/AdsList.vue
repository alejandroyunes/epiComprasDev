<script setup lang="ts">
import './ads.scss'
import { ads } from './data'

</script>

<template>
  <section class="testing-class-one">
    <ul>
      <li v-for="category in ads" :key="category.id" class="item">
        <p>{{ category.description }}</p>
        <p>hello</p>
      </li>
    </ul>

  </section>
</template>
