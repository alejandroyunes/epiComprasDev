<script setup lang="ts">
import './scss/styles.scss'
import './scss/location.scss'
import { ref } from 'vue'
import LocationSvg from '@/components/icons/LocationSvg.vue'
import ExitSvg from '@/components/icons/ExitSvg.vue'

const showLocation = ref(false)

const toggleSlider = () => {
  showLocation.value = !showLocation.value
}

</script>

<template>
  <div @click="toggleSlider" class="location-outer">
    <LocationSvg class="location-icon" />

    <div class="location-city">
      <p>Medellín</p>
    </div>
  </div>

  <div class="slider-outer" :class="{ 'open': showLocation }">
    
    <div class="slider-inner">
      
      <div class="location-search">
        <p>
          ¿Dónde quieres buscar?
        </p>
      </div>

      <div>
      </div>

    </div>

    <div class="slider-exit" @click="toggleSlider()">
      <ExitSvg class="icon" />
    </div>

  </div>

  <div @click="toggleSlider()" :class="{ 'outer-bg': showLocation }"></div>
</template>