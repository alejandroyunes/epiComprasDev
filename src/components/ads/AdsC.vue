<script setup lang="ts">
import './ads.scss'
import { ads } from './data'
import TitleC from '@/components/title/TitleC.vue'
import HeartSvg from '@/components/icons/HeartSvg.vue'
import HeartFillSvg from '@/components/icons/HeartFillSvg.vue'

</script>

<template>
  <section>
    <TitleC />
    <ul class="ads-inner">
      <li v-for="ad in ads" :key="ad.id">
        <img class="ad-image" :src="ad.image" alt="">
        <div class="ad-info">
          <div class="ad-title">
            <h3>{{ ad.title }}</h3>
            <!-- <HeartSvg class="ad-heart" /> -->
            <HeartFillSvg class="ad-heart-fill" />
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
