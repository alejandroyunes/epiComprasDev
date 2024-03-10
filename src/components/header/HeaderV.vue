<script setup lang="ts">
import './header.scss'
import InputV from '@/components/header/input/InputV.vue'

</script>

<template>
  <header class="outer">
    <nav class="inner">

      <div class="nav-one">
        <img alt="" class="logo" src="@/assets/logo.svg" width="35" height="30" />
        <InputV />
      </div>

      <div class="nav-two">

        <div class="left">
          <div class="logo-mobile">
            <img alt="" class="logo" src="@/assets/logo.svg" width="30" height="28" />
          </div>
          <div>city</div>
        </div>

        <div class="right">
          <div>icon</div>
          <button>enter</button>
        </div>

      </div>

    </nav>
  </header>
</template>