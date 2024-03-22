<script setup lang="ts">
import { ads } from './data'

</script>

<template>
  <section class="ads-outer">
    <ul>
      <li v-for="category in ads" :key="category.id" class="item">
        <p>{{ category.description }}</p>
        <p>hello</p>
      </li>
    </ul>

  </section>
</template>


<style lang="scss">
.ads-outer {
  outline: 1px solid red;
}
</style>
