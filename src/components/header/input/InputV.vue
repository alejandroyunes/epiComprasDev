<script setup lang="ts">
import './input.scss'
import { ref } from 'vue'
import SearchSvg from '../../icons/SearchSvg.vue'
import ArrowRightSvg from '../../icons/ArrowRightSvg.vue'

const input = ref(undefined)

</script>

<template>

  <form class="form">
    <SearchSvg class="search" />
    <input class="input" type="text" placeholder="Buscar" />
    <ArrowRightSvg class="arrow" />
  </form>

</template>