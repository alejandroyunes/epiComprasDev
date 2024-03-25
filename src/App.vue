<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderC from '@/components/header/HeaderC.vue'
import Footer from '@/components/footer/FooterC.vue'

</script>

<template>
  <HeaderC /> 
  <RouterView />
  <Footer />
</template>