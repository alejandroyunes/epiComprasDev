<script setup lang="ts">
import { ref } from 'vue'
import './input.scss'
import SearchSvg from '../../icons/SearchSvg.vue'
import ArrowRightSvg from '../../icons/ArrowRightSvg.vue'

const inputText = ref('')
const isInputFocused = ref<boolean | undefined>(undefined)

const handleFocus = () => {
  isInputFocused.value = true
}

const handleBlur = () => {
  isInputFocused.value = false
}

</script>

<template>

  <form class="nav-form">
    <SearchSvg class="search icon" />
    <input 
      type="text" 
      class="nav-input" 
      :class="{ 'expand': isInputFocused, 'shrink': isInputFocused === false }"
      v-model="inputText" 
      @focus="handleFocus"
      @blur="handleBlur" />
    <ArrowRightSvg class="arrow icon" />
  </form>

</template>