<script setup lang="ts">
// import SearchSvg from '@/assets/icons/SearchSvg.vue'
// import ArrowRightSvg from '../../../../public/icons/ArrowRightSvg.vue'
</script>

<template>

  <div class="main">
    <div class="icon">
      <!-- <SearchSvg /> -->
    </div>
    <form class="form">
      <input class="input" type="text" placeholder="Buscar" />
    </form>
    <div class="arrow">
      <!-- <ArrowRightSvg /> -->
    </div>
  </div>
</template>

<style lang="scss">
.main {
  display: "flex";
  position: "relative";
}

.icon {
  position: "absolute";
  top: "50%";
  left: 8;
  transform: "translateY(-50%)";
}

.form {
  width: "100%";
}

.input {
  border: 1px solid red;
  border-radius: 16px;
  padding: 8px 16px;

  :focus {
    border-color: red
  }
}

.arrow {
  cursor: "pointer";
  position: "absolute";
  top: "50%";
  right: 8;
  transform: "translateY(-50%)";
}
</style>

