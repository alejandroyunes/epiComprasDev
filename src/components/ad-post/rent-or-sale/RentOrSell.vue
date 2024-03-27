<script setup lang="ts">
import './rent-or-sell.scss'
import HandWithKeySvg from '@/components/icons/HandWithKeySvg.vue'
import ContractAgreeSvg from '@/components/icons/ContractAgreeSvg.vue'
</script>

<template>
  <section class="rent-or-sell">
    <h1 class="rent-or-sell-title">¿Está buscando vender o arrendar su propiedad?</h1>

    <div class="rent-or-sell-options">

      <div class="rent-or-sell-item">
        <p>Arrendar</p>
        <div class="rent-or-sell-svg">
          <HandWithKeySvg />
        </div>
      </div>
      <div class="rent-or-sell-item">
        <p>Vender</p>
        <div class="rent-or-sell-svg">
          <ContractAgreeSvg />
        </div>
      </div>

    </div>

  </section>
</template>
