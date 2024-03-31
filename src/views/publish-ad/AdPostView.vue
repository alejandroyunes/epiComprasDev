<script setup lang="ts">
import AdPost from '@/components/ad-post/AdPost.vue'
</script>

<template>
  <section class="ad-post-outer">
    <div class="ad-post-inner">
      <h1>hello world</h1>
      <AdPost />
    </div>
  </section>
</template>


<style lang="scss">
.ad-post-outer {
  width: 100%;
}

.ad-post-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}
</style>