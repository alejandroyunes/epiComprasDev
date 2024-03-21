<script setup lang="ts">
// import './ads.scss'
import { ads } from './data';
import TitleC from '@/components/title/TitleC.vue'

</script>

<template>
  <TitleC :view="'ver más'" :title="'Anuncios Recientes'" :border="false" />


    <ul class="ads-inner">
      <li v-for="ad in ads" :key="ad.id">
        <p>{{ ad.date }}</p>
        <p>{{ ad.description }}</p>
      </li>
    </ul>

</template>

<style lang="scss">
.ads-inner {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 20px 0;
  padding: 0;
  @media (max-width: 1080px) and (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 900px) and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }


}

</style>