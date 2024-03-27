<script setup lang="ts">
import './add-form.scss'
import CarServiceSvg from '@/components/icons/CarServiceSvg.vue'
import GamePadSvg from '@/components/icons/GamePadSvg.vue'
import HouseServiceSvg from '@/components/icons/HouseServiceSvg.vue'
import ServicesSvg from '@/components/icons/ServicesSvg.vue'
</script>

<template>
  <section class="add-form-outer">
    <h1 class="add-form-title">¡Hola! Cuéntanos, ¿qué vas a publicar?</h1>
    <div class="add-form-services">

      <div class="add-service-item">
        <p>Inmuebles</p>
        <div class="add-service-svg">
          <HouseServiceSvg />
        </div>
      </div>
      <div class="add-service-item">
        <p>Productos</p>
        <div class="add-service-svg">
          <ServicesSvg />
        </div>
      </div>
      <div class="add-service-item">
        <p>Vehículos</p>
        <div class="add-service-svg">
          <CarServiceSvg />
        </div>
      </div>
      <div class="add-service-item">
        <p>Servicios</p>
        <div class="add-service-svg">
          <GamePadSvg />
        </div>
      </div>

    </div>
  </section>
</template>
