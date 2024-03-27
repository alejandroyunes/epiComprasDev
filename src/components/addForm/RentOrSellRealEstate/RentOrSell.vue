<script setup lang="ts">
import './rent-or-sell.scss'
import KeySvg from '@/components/icons/KeySvg.vue'
import ContractSvg from '@/components/icons/ContractSvg.vue'
</script>

<template>
  <section class="add-form-outer">
    <h1 class="add-form-title">¿Está buscando vender o arrendar su propiedad?</h1>

    <div class="add-form-services">

      <div class="add-service-item">
        <p>Arriendo</p>
        <div class="add-service-svg">
          <KeySvg />
        </div>
      </div>
      <div class="add-service-item">
        <p>Vender</p>
        <div class="add-service-svg">
          <ContractSvg />
        </div>
      </div>

    </div>

  </section>
</template>
