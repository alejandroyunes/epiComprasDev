<script setup lang="ts">
import { ref } from 'vue'
import './ads.scss'
import { ads } from './data'
import HeartSvg from '../icons/HeartSvg.vue'
import HeartFillSvg from '../icons/HeartFillSvg.vue'

const favorites = ref<string[]>([])
console.log(favorites)
const handleFavorite = (adId: number) => {
  const adIdString = String(adId)
  if (!favorites.value.includes(adIdString)) {
    favorites.value.push(adIdString)
  } else {
    favorites.value = favorites.value.filter(id => id !== adIdString)
  }
}
</script>

<template>
  <section class="ads-container">
    <ul>
      <li v-for="ad in ads" :key="ad.id" class="item">
        <RouterLink :to="ad.url">
          <img class="ad-image" :src="ad.image" alt="" width="300px" height="165px">
        </RouterLink>
        <div class="ad-info">
          <div class="ad-title">
            <h3>{{ ad.title }}</h3>
            <HeartSvg v-show="!favorites.includes(String(ad.id))" @click="handleFavorite(ad.id)" class="ad-heart" />
            <HeartFillSvg v-show="favorites.includes(String(ad.id))" @click="handleFavorite(ad.id)"
              class="ad-heart-fill" />
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
