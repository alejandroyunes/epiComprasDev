<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import './rent-or-sell.scss'
import HandWithKeySvg from '@/components/icons/HandWithKeySvg.vue'
import ContractAgreeSvg from '@/components/icons/ContractAgreeSvg.vue'
import ApartmentSvg from '@/components/icons/ApartmentSvg.vue'
import House2Svg from '@/components/icons/House2Svg.vue'
import DomeSvg from '@/components/icons/DomeSvg.vue'
import OfficeBriefSvg from '@/components/icons/OfficeBriefSvg.vue'


const isRenting = ref<boolean>(false)
const fisrstTime = ref<boolean>(true) 

const rent = () => {
  isRenting.value = true
  fisrstTime.value = false
}


</script>

<template>
  <section class="rent-or-sell" v-if="fisrstTime">
    <h1 class="rent-or-sell-title">¿Está buscando vender o arrendar su propiedad?</h1>

    <div class="rent-or-sell-options">

      <div class="rent-or-sell-item" @click="rent">
        <p>Arrendar</p>
        <div class="rent-or-sell-svg">
          <HandWithKeySvg />
        </div>
      </div>
      <div class="rent-or-sell-item" @click="rent">
        <p>Vender</p>
        <div class="rent-or-sell-svg">
          <ContractAgreeSvg />
        </div>
      </div>

    </div>

    <div class="rent-options" v-if="isRenting">
      <div class="rent-option">
        <ApartmentSvg  class="icon rent-option-svg"/>
        <p>apartments</p>
      </div>
      <div class="rent-option">
        <House2Svg class="icon rent-option-svg" />
        <p>Casas</p>
      </div>
      <div class="rent-option">
        <DomeSvg class="icon rent-option-svg" />
        <p>Bodega</p>
      </div>
      <div class="rent-option">
        <OfficeBriefSvg class="icon rent-option-svg" />
        <p>Consultorio</p>
      </div>
    </div>

  </section>
</template>
