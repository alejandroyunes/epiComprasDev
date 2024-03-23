<script setup lang="ts">
import './3-card-site-info.scss'
import AdsColorSvg from '../../icons/AdsColorSvg.vue'
import AnnouncementSvg from '../../icons/AnnouncementSvg.vue'
import DealSvg from '../../icons/DealSvg.vue'

</script>

<template>
  <div class="container">
    <div class="column">
      <div class="icon">
        <AdsColorSvg />
      </div>
      <h2>Publica tu Anuncio</h2>
      <p>Este es un sitio para publicar tu anuncio y llegar a una audiencia amplia.</p>
    </div>
    <div class="column">
      <div class="icon">
        <AnnouncementSvg />
      </div>
      <h2>Contacta al Comprador</h2>
      <p>Una vez que publiques tu anuncio, los clientes interesados podrán contactarte directamente para obtener más
        información o realizar una compra.</p>
    </div>
    <div class="column">
      <div class="icon">
        <DealSvg />
      </div>
      <h2>Compra y Cierra el Trato</h2>
      <p>En esta fase, podrás concretar la venta y cerrar el trato de manera segura y en un lugar confiable.</p>
    </div>
  </div>



</template>