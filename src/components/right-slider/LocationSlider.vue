<script setup lang="ts">
import './scss/styles.scss'
import './scss/location.scss'
import { ref } from 'vue'
import LocationSvg from '@/components/icons/LocationSvg.vue'
import ExitSvg from '@/components/icons/ExitSvg.vue'
import SearchSvg from '@/components/icons/SearchSvg.vue'
import ArrowRightSvg from '@/components/icons/ArrowRightSvg.vue'

const showLocation = ref(false)

const toggleSlider = () => {
  showLocation.value = !showLocation.value
}

</script>

<template>
  <div @click="toggleSlider" class="location-outer">
    <LocationSvg class="icon location-icon" />

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

        <form class="location-form">
          <SearchSvg class="search icon" />
          <input class="location-input" type="text" placeholder="Buscar" />
          <ArrowRightSvg class="arrow icon" />
        </form>
      </div>

      <div class="location-current">
        <div class="location-square">
          <LocationSvg class="icon location-icon" />

          <p>
            Usar la ubicación actual
          </p>

          <!-- <p>
            Hubo un error en la ubicación
          </p>

          <p>
            Ubicación bloqueada. Verifique la configuración del navegador/teléfono
          </p> -->
        </div>
      </div>

    </div>

    <div class="slider-exit" @click="toggleSlider()">
      <ExitSvg class="icon" />
    </div>

  </div>

  <div @click="toggleSlider()" :class="{ 'outer-bg': showLocation }"></div>
</template>