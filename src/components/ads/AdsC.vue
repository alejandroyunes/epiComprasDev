<script setup lang="ts">
import './ads.scss'
import { ads } from './data';
import TitleC from '@/components/title/TitleC.vue'

</script>

<template>
  <TitleC :view="'ver más'" :title="'Anuncios Recientes'" :border="false" />


  <div class="ads-item">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
  </div>


  <div class="ads-item">
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  </div>

  <div class="ads-item">
    <ul>
      <li v-for="ad in ads" :key="ad.id">
        <p>{{ ad.date }}</p>
        <p>{{ ad.description }}</p>
      </li>
    </ul>
  </div>




</template>
