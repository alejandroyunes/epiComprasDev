<script setup lang="ts">
import './header.scss'
import { ref } from 'vue'
import { setDarkMode } from '../../utils/utils'
import InputV from '@/components/header/input/InputV.vue'
import UserMenu from '@/components/header/user-menu/UserMenu.vue'
import SunSvg from '@/components/icons/SunSvg.vue'
import MoonSvg from '@/components/icons/MoonS.vue'
import PlusSvg from '@/components/icons/PlusSvg.vue'
import LocationSlider from '@/components/right-slider/LocationSlider.vue'
import NotificationSlider from '@/components/right-slider/NotificationSlider.vue'

const isDarkMode = ref<boolean>(localStorage.getItem('isDarkMode') === 'true')
const isLogged = ref(false)

setDarkMode(isDarkMode.value)

const handleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  setDarkMode(isDarkMode.value)
}

const handleAdPost = () => {
  console.log('Ad post')
}

</script>

<template>
  <header class="nav-outer">
    <nav class="nav-inner">

      <div class="nav-one">
        <img alt="" class="nav-logo" src="@/assets/logo.svg" width="45" height="45" />
        <InputV />
      </div>

      <div class="nav-two">

        <div class="nav-left">
          <div class="nav-logo-mobile">
            <img alt="" src="@/assets/logo.svg" width="45" height="45" />
          </div>
          <div>
            <LocationSlider />
          </div>
        </div>

        <div class="nav-right">
          <NotificationSlider v-if="isLogged" />

          <MoonSvg v-show="!isDarkMode" @click="handleTheme" class="icon sun" />
          <SunSvg v-show="isDarkMode" @click="handleTheme" class="icon moon" />

          <UserMenu />

          <PlusSvg @click="handleAdPost" class="icon" />
        </div>

      </div>

    </nav>
  </header>
</template>