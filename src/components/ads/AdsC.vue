<script setup lang="ts">
import './ads.scss'
import TitleC from '@/components/title/TitleC.vue'
import AdsList from '@/components/ads/AdsList.vue'

</script>

<template>
  <TitleC :view="'ver más'" :title="'Anuncios Recientes'" :border="false" />

  <AdsList />

</template>
