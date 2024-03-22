<script setup lang="ts">
import { ref } from 'vue'
import './ads-list.scss'
import { ads } from './data'
import HeartSvg from '../icons/HeartSvg.vue'
import HeartFillSvg from '../icons/HeartFillSvg.vue'

const favorites = ref<string[]>([])

const handleFavorite = (adId: string) => {
  if (!favorites.value.includes(adId)) {
    favorites.value.push(adId)
  } else {
    favorites.value = favorites.value.filter(id => id !== adId)
  }
}
</script>

<template>
  <section class="ads-container">
    <ul>
      <li v-for="ad in ads" :key="ad.id">
        <RouterLink :to="ad.url">
          <img class="ad-image" :src="ad.image" alt="" width="300px" height="165px">
        </RouterLink>
        <div class="ads-info-inner">
          <div class="ads-title">
            <h3>{{ ad.title }}</h3>
            <HeartSvg v-show="!favorites.includes(ad.id)" @click="handleFavorite(ad.id)"/>
            <HeartFillSvg v-show="favorites.includes(ad.id)" @click="handleFavorite(ad.id)" />
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
