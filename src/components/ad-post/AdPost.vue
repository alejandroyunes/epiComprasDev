<script setup lang="ts">
import './ad-post.scss'

import HouseServiceSvg from './icons/ad-post/HouseServiceSvg.vue'
import GamePadSvg from './icons/ad-post/GamePadSvg.vue'
import CarServiceSvg from './icons/ad-post/CarServiceSvg.vue'
import ServicesSvg from './icons/ad-post/ServicesSvg.vue'

import TitlePost from '@/components/ad-post/title/TitlePost.vue'
import GoBack from '@/components/ad-post/go-back/GoBack.vue'
</script>

<template>
  <section>
    <TitlePost title="¡Hola! ¿qué vas a publicar?" />

    <GoBack />
    
    <div class="ad-post-container">

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
