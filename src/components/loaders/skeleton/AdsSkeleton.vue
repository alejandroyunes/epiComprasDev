<script setup lang="ts">
import './ads-skeleton.scss'
</script>
<template>

  <section class="ads-skeleton">
    <ul>
      <li v-for="index in 5" :key="index">

        <div class="li-container">

          <div class="li-item">
            <div class="shine-line card-img">
              <span class="circle"></span>
            </div>
            <div class="ads-info-inner">
              <p class="shine-line card-title"></p>
              <p class="shine-line card-description-long"></p>
              <p class="shine-line card-description-medium"></p>
              <p class="shine-line card-description-short"></p>

              <p class="shine-line card-description-shorter margin-top-24 "></p>
              <p class="shine-line card-description-shorter"></p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>

</template>