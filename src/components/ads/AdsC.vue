<script setup lang="ts">
import './ads.scss'
import { ads } from './data';
import TitleC from '@/components/title/TitleC.vue'


</script>

<template>
  <section>
    <TitleC :view="'ver más'" :title="'Anuncios Recientes'" :border="false" />
    <p>hello</p>

    <ul class="ads-item">
      <li v-for="ad in ads" :key="ad.id">
        <!-- <RouterLink :to="ad.url">
          <img class="ad-image" :src="ad.image" alt="" width="300px" height="165px">
        </RouterLink> -->
        <!-- <router-link :to="ad.url">
          <img class="ad-image" :src="ad.image" alt="" width="300px" height="165px">
        </router-link> -->
        <div class="ad-info">
          <div class="ad-title">
            <h3>{{ ad.title }}</h3>
            <HeartSvg class="ad-heart" />
            <HeartFillSvg v-show="false" class="ad-heart-fill" />
          </div>
          <p>{{ ad.description }}</p>
          <p>{{ ad.price }}</p>
          <p>{{ ad.location }}</p>
          <p>{{ ad.date }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>