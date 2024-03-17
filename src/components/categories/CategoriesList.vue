<script setup lang="ts">
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


<style lang="scss">
.list-inner {
  margin: 0 auto;

  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-border);
      border-radius: 10px;
    }
  }
}


.list-inner li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.list-inner img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.list-inner h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-text);
}
</style>