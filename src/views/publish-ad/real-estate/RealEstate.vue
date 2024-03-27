<script setup lang="ts">
import RentOrSell from '@/components/ad-post/rent-or-sale/RentOrSell.vue'
</script>

<template>
  <section class="real-estate-post-outer">
    <div class="real-estate-post-inner">
      <RentOrSell />
    </div>
  </section>
</template>


<style lang="scss">
.real-estate-post-outer {
  width: 100%;
  padding: 0 20px;
}

.real-estate-post-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}
</style>