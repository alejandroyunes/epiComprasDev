<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import './rent-or-sell.scss'
import HandWithKeySvg from '@/components/icons/HandWithKeySvg.vue'
import ContractAgreeSvg from '@/components/icons/ContractAgreeSvg.vue'
import ApartmentSvg from '@/components/icons/ApartmentSvg.vue'
import House2Svg from '@/components/icons/House2Svg.vue'
import DomeSvg from '@/components/icons/DomeSvg.vue'
import OfficeSvg from '@/components/icons/OfficeSvg.vue'
import ApartmentColorSvg from '@/components/icons/ApartmentColorSvg.vue'
import TitlePost from '../title/TitlePost.vue'
import HouseColorSvg from '@/components/icons/HouseColorSvg.vue'
import WareHouseSvg from '@/components/icons/WareHouseSvg.vue'

const isRenting = ref<boolean>(false)
const fisrstTime = ref<boolean>(true)

const rent = () => {
  isRenting.value = true
  fisrstTime.value = false
}

</script>

<template>
  <section class="rent-or-sell">


    <TitlePost v-if="fisrstTime" title="¿Está buscando vender o arrendar su propiedad?" />

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


    <TitlePost v-if="isRenting" title="¿Qué tipo de inmueble es?" />

    <div class="rent-options" v-if="isRenting">
      <div class="rent-option">
        <p>Apartmentos</p>
        <div class="rent-option-svg">
          <ApartmentColorSvg />
        </div>
      </div>
      <div class="rent-option">
        <p>Casas</p>
        <div class="rent-option-svg">
          <HouseColorSvg />
        </div>
      </div>
      <div class="rent-option">
        <p>Bodega</p>
        <div class="rent-option-svg">
          <WareHouseSvg />
        </div>
      </div>
      <div class="rent-option">
        <p>Consultorio</p>
        <div class="rent-option-svg">
          <OfficeSvg />
        </div>
      </div>
    </div>

  </section>
</template>