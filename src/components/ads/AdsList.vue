<script setup lang="ts">
import { ref } from 'vue'
import './ads-list.scss'
import { ads } from './data'
import HeartSvg from '../icons/HeartSvg.vue'
import HeartFillSvg from '../icons/HeartFillSvg.vue'
import AdsSkeleton from '../loaders/skeleton/AdsSkeleton.vue'

const favorites = ref<string[]>([])
const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 3000)

const handleFavorite = (adId: string) => {
  if (!favorites.value.includes(adId)) {
    favorites.value.push(adId)
  } else {
    favorites.value = favorites.value.filter(id => id !== adId)
  }
}
</script>

<template>
  <section v-if="!isLoading" class="ads-container">
    <ul>
      <li v-for="ad in ads" :key="ad.id">
        <div class="li-container">

          <div class="li-item">

            <RouterLink :to="ad.url">
              <img class="ad-image" :src="ad.image" alt="" width="300px" height="165px">
            </RouterLink>
            <div class="ads-info-inner">
              <div class="ads-title">
                <h3>{{ ad.title }}</h3>
                <HeartSvg v-show="!favorites.includes(ad.id)" @click="handleFavorite(ad.id)" class="ad-heart" />
                <HeartFillSvg v-show="favorites.includes(ad.id)" @click="handleFavorite(ad.id)" class="ad-heart-fill" />
              </div>
              <p>{{ ad.description }}</p>
              <p>{{ ad.price }}</p>
              <p>{{ ad.location }}</p>
              <p>{{ ad.date }}</p>

            </div>


          </div>


        </div>

      </li>
    </ul>
  </section>

  <AdsSkeleton v-if="isLoading" />

</template>
