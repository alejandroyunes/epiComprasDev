<script setup lang="ts">
import './go-back.scss'
import ArrowRightSvg from '@/components/icons/shared/ArrowRightSvg.vue'
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
  <div class="go-back" @click="router.back">
    <ArrowRightSvg class="icon" />
    <p>Volver</p>
  </div>
</template>