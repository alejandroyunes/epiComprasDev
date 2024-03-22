<script lang="ts" setup>
import AdsList from '@/components/ads/AdsList.vue'
import TitleC from '@/components/title/TitleC.vue'

</script>

<template>
  <TitleC :view="'ver más'" :title="'Anuncios Recientes'" :border="false" />
  <AdsList />
</template>
