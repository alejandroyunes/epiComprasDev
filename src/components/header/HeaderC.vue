<script setup lang="ts">
import './header.scss'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { setDarkMode } from '../../utils/utils'
import InputV from '@/components/header/input/InputV.vue'
import UserMenu from '@/components/header/user-menu/UserMenu.vue'
import SunSvg from './icons/header/SunSvg.vue'
import MoonSvg from './icons/header/MoonS.vue'
import PlusSvg from './icons/header/PlusSvg.vue'
import LocationSlider from '@/components/right-slider/LocationSlider.vue'

const isDarkMode = ref<boolean>(localStorage.getItem('isDarkMode') === 'true')

setDarkMode(isDarkMode.value)

const handleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  setDarkMode(isDarkMode.value)
}

const router = useRouter()

</script>

<template>
  <header class="nav-outer">
    <nav class="nav-inner">

      <div class="nav-one">
        <img alt="" class="nav-logo" src="@/assets/logo.svg" @click="router.push('/')" width="40" height="40" />
        <InputV />
      </div>

      <div class="nav-two">

        <div class="nav-left">
          <div class="nav-logo-mobile">
            <img alt="" src="@/assets/logo.svg"  @click="router.push('/')" width="40" height="40" />
          </div>
          <div>
            <LocationSlider />
          </div>
        </div>

        <div class="nav-right">

          <MoonSvg v-show="!isDarkMode" @click="handleTheme" class="icon sun" />
          <SunSvg v-show="isDarkMode" @click="handleTheme" class="icon moon" />

          <UserMenu />

          <PlusSvg @click="router.push('/publicar-anuncio')" class="icon" />
        </div>

      </div>

    </nav>
  </header>
</template>