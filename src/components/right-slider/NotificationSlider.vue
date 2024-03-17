<script setup lang="ts">
import './styles.scss'
import { ref } from 'vue'

import NotificationBellSvg from '@/components/icons/NotificationBellSvg.vue'
import NoNotificationBellSvg from '@/components/icons/NoNotificationBellSvg.vue'
import ExitSvg from '@/components/icons/ExitSvg.vue'

const showNotification = ref(false)

const toggleSlider = () => {
  showNotification.value = !showNotification.value
}

</script>

<template>
  <div @click="toggleSlider" class="notification-outer">
    <div class="notification-inner">
      <NotificationBellSvg class="bell-icon" />
    </div>
    <!-- <NoNotificationBellSvg class="bell-icon" /> -->

  </div>

  <div class="slider-container" :class="{ 'open': showNotification }">
    <div class="animation-container">
      <div class="animation-bell">
        <!-- <NotificationBellSvg /> -->
        <NoNotificationBellSvg />
      </div>
      <div class="notifications">
        <p>No hay notificaciones</p>
      </div>
    </div>
    <div class="animation-exit" @click="toggleSlider()">
      <ExitSvg />
    </div>
  </div>

  <div @click="toggleSlider()" :class="{ 'bg': showNotification }"></div>
</template>