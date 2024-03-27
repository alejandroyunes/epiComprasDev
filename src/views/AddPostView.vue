<script setup lang="ts">
import AddForm from '@/components/addForm/AddForm.vue'
</script>

<template>
  <section class="add-post-outer">
    <div class="add-post-inner">
      <AddForm />

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