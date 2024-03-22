<script setup lang="ts">
import './ads.scss'
import { ads } from './data'

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
