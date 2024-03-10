<script setup lang="ts">
</script>

<template>
  <header class="outer">
    <nav class="inner">
      <div class="nav-one">
        <img alt="" class="logo" src="@/assets/logo.svg" width="125" height="45" />
        <input type="text">
        <div>city</div>
      </div>

      <div class="nav-two">
        <div>icon</div>
        <button>enter</button>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
.outer {
  background-color: red;
  width: 100%;
}

.inner {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1280px;
  justify-content: space-between;
}

.nav-one,
.nav-two {
  display: flex;
  flex-direction: row;
}

.nav-one {
  flex: 1;
  justify-content: flex-start;
  outline: 2px solid green;
}

.nav-two {
  flex: 0;
  justify-content: flex-end;
  outline: 2px solid green;
}
</style>