<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import './rent-or-sell.scss'
import HandWithKeySvg from '@/components/icons/HandWithKeySvg.vue'
import ContractAgreeSvg from '@/components/icons/ContractAgreeSvg.vue'
import ApartmentSvg from '@/components/icons/ApartmentSvg.vue'
import House2Svg from '@/components/icons/House2Svg.vue'
import DomeSvg from '@/components/icons/DomeSvg.vue'
import BriefCaseSvg from '@/components/icons/BriefCaseSvg.vue'


const isRenting = ref<boolean>(false)
const fisrstTime = ref<boolean>(true)

const rent = () => {
  isRenting.value = true
  fisrstTime.value = false
}

</script>

<template>
  <section class="rent-or-sell">

    <h1 class="rent-or-sell-title" v-if="fisrstTime">¿Está buscando vender o arrendar su propiedad?</h1>

    <div class="rent-or-sell-options" v-if="fisrstTime">

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


    <h1 class="rent-or-sell-title" v-if="isRenting">¿Qué tipo de inmueble es?</h1>

    <div class="rent-options" v-if="isRenting">
      <div class="rent-option">
        <p>apartments</p>
        <ApartmentSvg class="icon rent-option-svg" />
      </div>
      <div class="rent-option">
        <p>Casas</p>
        <House2Svg class="icon rent-option-svg" />
      </div>
      <div class="rent-option">
        <p>Bodega</p>
        <DomeSvg class="icon rent-option-svg" />
      </div>
      <div class="rent-option">
        <p>Consultorio</p>

        <BriefCaseSvg class="icon rent-option-svg" />
      </div>
    </div>

  </section>
</template>