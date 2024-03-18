<script setup lang="ts">
import './styles.scss'
import { ref } from 'vue'

import NotificationBellSvg from '@/components/icons/NotificationBellSvg.vue'
import NoNotificationBellSvg from '@/components/icons/NoNotificationBellSvg.vue'
import ExitSvg from '@/components/icons/ExitSvg.vue'

const showNotification = ref(false)
const notifications = ref(false)

const toggleSlider = () => {
  showNotification.value = !showNotification.value
}

const toggleNotification = () => {
  notifications.value = !notifications.value
}

</script>

<template>
  <div @click="toggleSlider" class="notification-outer">
    <div v-show="!notifications" class="notification-inner">
      <NotificationBellSvg @click="toggleNotification" class="icon nav-bell-icon" />
    </div>
    <NoNotificationBellSvg @click="toggleNotification" v-show="notifications" class=" icon nav-bell-icon" />

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
    <div class="animation-exit" @click="toggleSlider">
      <ExitSvg class="icon"/>
    </div>
  </div>

  <div @click="toggleSlider" :class="{ 'outer-bg': showNotification }"></div>
</template>