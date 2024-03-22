<script setup lang="ts">
import './ads.scss'
import { RouterLink } from 'vue-router'
import { ads } from './data'

</script>

<template>
  <div>
    <ul>
      <li v-for="category in ads" :key="category.id" class="item">
        <p>{{ category.description }}</p>
        <p>hello</p>
      </li>
    </ul>

  </div>
</template>
