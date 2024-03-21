<script setup lang="ts">
import './ads.scss'
// import { ref } from 'vue'
import { ads } from './data'
import { RouterLink } from 'vue-router'
import TitleC from '@/components/title/TitleC.vue'
import HeartSvg from '@/components/icons/HeartSvg.vue'
import HeartFillSvg from '@/components/icons/HeartFillSvg.vue'

// const favorites = ref<string[]>([])
// const showFavorites = ref<boolean>(false)

// const handleFavorite = (adId: number) => {
//   showFavorites.value = !showFavorites.value

//   const adIdString = String(adId)
//   if (!favorites.value.includes(adIdString)) {
//     favorites.value.push(adIdString)
//   } else {
//     favorites.value = favorites.value.filter(id => id !== adIdString)
//   }
// }

const array = [
  {
    id: 1,
    title: 'Bicicleta',
    description: 'Bicicleta de montaña en buen estado',
    price: '100€',
    location: 'Madrid',
    date: 'Hoy',
    image: 'https://via.placeholder.com/300x165',
    url: '/ad/1'
  },
  {
    id: 2,
    title: 'Móvil',
    description: 'Móvil en buen estado',
    price: '200€',
    location: 'Barcelona',
    date: 'Ayer',
    image: 'https://via.placeholder.com/300x165',
    url: '/ad/2'
  },
  {
    id: 3,
    title: 'Portátil',
    description: 'Portátil en buen estado',
    price: '300€',
    location: 'Valencia',
    date: 'Hace 2 días',
    image: 'https://via.placeholder.com/300x165',
    url: '/ad/3'
  }
]

</script>




<template>
  <section>
    <TitleC :view="'ver más'" :title="'Anuncios Recientes'" :border="false" />
    <p>hello</p>

    <ul class="ads-item">
      <!-- <li v-for="ad in array"> -->
        <li v-for="ad in array" :key="ad.id">
        <p>hello</p>
        <!-- <RouterLink :to="ad.url">
          <img class="ad-image" :src="ad.image" alt="" width="300px" height="165px">
        </RouterLink> -->
        <!-- <router-link :to="ad.url">
          <img class="ad-image" :src="ad.image" alt="" width="300px" height="165px">
        </router-link>
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
        </div> -->
      </li>
    </ul>
  </section>
</template>