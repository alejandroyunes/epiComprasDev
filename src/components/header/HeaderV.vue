<script setup lang="ts">
import './header.scss'
import { ref } from 'vue'
import { setDarkMode } from '../../utils/utils'
import InputV from '@/components/header/input/InputV.vue'
import SunSvg from '@/components/icons/SunSvg.vue'
import MoonSvg from '@/components/icons/MoonS.vue'
import LocationSlider from '@/components/right-slider/LocationSlider.vue'
import NotificationSlider from '@/components/right-slider/NotificationSlider.vue'
import ProfileSvg from '@/components/icons/ProfileSvg.vue'

const isDarkMode = ref<boolean>(localStorage.getItem('isDarkMode') === 'true')

setDarkMode(isDarkMode.value)

const handleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  setDarkMode(isDarkMode.value)
};

</script>

<template>
  <header class="nav-outer">
    <nav class="nav-inner">

      <div class="nav-one">
        <img alt="" class="nav-logo" src="@/assets/logo.svg" width="35" height="30" />
        <InputV />
      </div>

      <div class="nav-two">

        <div class="nav-left">
          <div class="nav-logo-mobile">
            <img alt="" src="@/assets/logo.svg" width="35" height="30" />
          </div>
          <div>
            <LocationSlider/>
          </div>
        </div>

        <div class="nav-right">
          <NotificationSlider/>
          <ProfileSvg class="profile" />
          <MoonSvg v-show="!isDarkMode" @click="handleTheme" class="sun" />
          <SunSvg v-show="isDarkMode" @click="handleTheme" class="moon" />
          <button>enter</button>
        </div>

      </div>

    </nav>
  </header>
</template>