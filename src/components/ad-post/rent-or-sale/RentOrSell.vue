<script setup lang="ts">
import './rent-or-sell.scss'
import KeySvg from '@/components/icons/KeySvg.vue'
import ContractSvg from '@/components/icons/ContractSvg.vue'

</script>

<template>
  <section class="rent-or-sell">
    <h1 class="rent-or-sell-title">¿Está buscando vender o arrendar su propiedad?</h1>

    <div class="rent-or-sell-options">

      <div class="rent-or-sell-item">
        <p>Arrendar</p>
        <div class="rent-or-sell-svg">
          <KeySvg />
        </div>
      </div>
      <div class="rent-or-sell-item">
        <p>Vender</p>
        <div class="rent-or-sell-svg">
          <ContractSvg />
        </div>
      </div>

    </div>

  </section>
</template>
