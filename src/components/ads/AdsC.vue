<script setup lang="ts">
import './ads.scss'
import TitleC from '@/components/title/TitleC.vue'

interface ArrayType {
  id: number
  title: string
  description: string
  price: string
  location: string
  date: string
  image: string
  url: string
}

const array: ArrayType[] = [
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

    <ul>
        <li v-for="ad in array" :key="ad.id">
        <p>byebye</p>
      </li>
    </ul>
  </section>
</template>