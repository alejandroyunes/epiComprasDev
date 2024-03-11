<script setup lang="ts">
import './header.scss'
import InputV from '@/components/header/input/InputV.vue'
import LocationSvg from '../../components/icons/LocationSvg.vue'
import SunSvg from '../../components/icons/SunSvg.vue'
import MoonSvg from '../../components/icons/MoonS.vue'

</script>

<template>
  <header class="outer">
    <nav class="inner">

      <div class="nav-one">
        <img alt="" class="logo" src="@/assets/logo.svg" width="35" height="30" />
        <InputV />
      </div>

      <div class="nav-two">

        <div class="left">
          <div class="logo-mobile">
            <img alt="" class="logo" src="@/assets/logo.svg" width="30" height="28" />
          </div>
          <div class="location">
            <LocationSvg class="icon" />
            <div class="city">
              <p>Medellín</p>
            </div>
          </div>
        </div>

        <div class="right">
          <SunSvg class="sun" />
          <MoonSvg class="moon" />
          <button>enter</button>
        </div>

      </div>

    </nav>
  </header>
</template>