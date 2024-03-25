<script setup lang="ts">
import './input.scss'
import SearchSvg from '../../icons/SearchSvg.vue'
import ArrowRightSvg from '../../icons/ArrowRightSvg.vue'

</script>

<template>

  <form class="nav-form">
    <SearchSvg class="search icon" />
    <input class="nav-input" type="text" placeholder="Buscar" />
    <ArrowRightSvg class="arrow icon" />
  </form>

</template>