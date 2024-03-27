<script setup lang="ts">
import RentOrSell from '@/components/addForm/RentOrSellRealEstate/RentOrSell.vue'
</script>

<template>
  <section class="add-post-outer">
    <div class="add-post-inner">
      <RentOrSell />
    </div>
  </section>
</template>


<style lang="scss">
.add-post-outer {
  width: 100%;
  padding: 0 20px;
}

.add-post-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}
</style>