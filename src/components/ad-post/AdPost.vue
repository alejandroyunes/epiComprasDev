<script setup lang="ts">
import './ad-post.scss'
import CarServiceSvg from '@/components/icons/CarServiceSvg.vue'
import GamePadSvg from '@/components/icons/GamePadSvg.vue'
import HouseServiceSvg from '@/components/icons/HouseServiceSvg.vue'
import ServicesSvg from '@/components/icons/ServicesSvg.vue'
</script>

<template>
  <section class="ad-post">
    <h1 class="ad-post-title">¡Hola! ¿qué vas a publicar?</h1>

    <div class="ad-post-options">

      <!-- RealEstate -->
      <RouterLink :to="'/publicar-anuncio/inmobiliaria'">
        <div class="ad-post-item">
          <p>Inmuebles</p>
          <div class="ad-post-svg">
            <HouseServiceSvg />
          </div>
        </div>
      </RouterLink>

      <div class="ad-post-item">
        <p>Productos</p>
        <div class="ad-post-svg">
          <GamePadSvg />
        </div>
      </div>
      <div class="ad-post-item">
        <p>Vehículos</p>
        <div class="ad-post-svg">
          <CarServiceSvg />
        </div>
      </div>
      <div class="ad-post-item">
        <p>Servicios</p>
        <div class="ad-post-svg">
          <ServicesSvg />
        </div>
      </div>

    </div>

  </section>
</template>
