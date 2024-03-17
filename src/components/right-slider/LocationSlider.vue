<script setup lang="ts">
import './styles.scss'
import { ref } from 'vue'

import LocationSvg from '@/components/icons/LocationSvg.vue'
import NotificationBellSvg from '@/components/icons/NotificationBellSvg.vue'
import ExitSvg from '@/components/icons/ExitSvg.vue'

const showNotification = ref(false)

const toggleSlider = () => {
  showNotification.value = !showNotification.value
}

</script>

<template>
  <div @click="toggleSlider" class="location-outer">
    <LocationSvg class="location-icon" />

    <div class="city">
      <p>Medellín</p>
    </div>
  </div>

  <div class="slider-container" :class="{ 'open': showNotification }">
    <div class="animation-container">
      <div class="animation-bell">
        <NotificationBellSvg />
      </div>
      <div class="notifications">
        <p>No hay location</p>
      </div>
    </div>
    <div class="animation-exit" @click="toggleSlider()">
      <ExitSvg />
    </div>
  </div>

  <div @click="toggleSlider()" :class="{ 'bg': showNotification }"></div>
</template>