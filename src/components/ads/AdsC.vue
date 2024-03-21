<script setup lang="ts">
import './ads.scss'
import { ads } from './data';
import TitleC from '@/components/title/TitleC.vue'

</script>

<template>
  <section>
    <TitleC :view="'ver más'" :title="'Anuncios Recientes'" :border="false" />

    <ul>
      <li v-for="ad in ads" :key="ad.id">
        <p>{{ ad.date }}</p>
      </li>
    </ul>
  </section>
</template>