<script setup lang="ts">
import { ref } from 'vue'
import './ads-skeleton.scss'
import { ads } from '@/components/ads/data';

const favorites = ref<string[]>([])
const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 2000)

const handleFavorite = (adId: string) => {
  if (!favorites.value.includes(adId)) {
    favorites.value.push(adId)
  } else {
    favorites.value = favorites.value.filter(id => id !== adId)
  }
}


</script>

<template>

  <section class="ads-skeleton">
    <ul>
      <li v-for="ad in ads" :key="ad.id">
        <div class="shine-line card-img">
          <span class="circle"></span>
        </div>
        <div class="ads-info-inner">
          <p class="shine-line card-title"></p>
          <p class="shine-line card-description-long"></p>
          <p class="shine-line card-description-medium"></p>
          <p class="shine-line card-description-short"></p>

          <p class="shine-line card-description-shorter margin-top-24 "></p>
          <p class="shine-line card-description-shorter"></p>
        </div>
      </li>
    </ul>
  </section>

</template>