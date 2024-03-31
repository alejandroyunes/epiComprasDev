<script setup lang="ts">
import './ad-post.scss'
import HouseServiceSvg from '@/components/icons/ad-post/post/HouseServiceSvg.vue'
import GamePadSvg from '@/components/icons/ad-post/post/GamePadSvg.vue'
import CarServiceSvg from '@/components/icons/ad-post/post/CarServiceSvg.vue'
import ServicesSvg from '@/components/icons/ad-post/post/ServicesSvg.vue'

import TitlePost from '@/components/ad-post/title/TitlePost.vue'

</script>

<template>
  <section class="ad-post">
    <TitlePost title="¡Hola! ¿qué vas a publicar?" />

    <div class="ad-post-options">

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
