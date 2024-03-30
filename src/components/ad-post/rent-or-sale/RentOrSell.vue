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
import BuildingColorSvg from '@/components/icons/BuildingColorSvg.vue'
import ShopColorSvg from '@/components/icons/ShopColorSvg.vue'
import BedColorSvg from '@/components/icons/BedColorSvg.vue'
import HotelColorSvg from '@/components/icons/HotelColorSvg.vue'
import FincaColorSvg from '@/components/icons/FincaColorSvg.vue'
import ConsultorioColorSvg from '@/components/icons/ConsultorioColorSvg.vue'
import TerrenoColorSvg from '@/components/icons/TerrenoColorSvg.vue'

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
        <p>Locales</p>
        <div class="rent-option-svg">
          <ShopColorSvg />
        </div>
      </div>

      <div class="rent-option">
        <p>Edificio</p>
        <div class="rent-option-svg">
          <BuildingColorSvg />
        </div>
      </div>

      <div class="rent-option">
        <p>Habitaciones</p>
        <div class="rent-option-svg">
          <BedColorSvg />
        </div>
      </div>

      <div class="rent-option">
        <p>Hoteles</p>
        <div class="rent-option-svg">
          <HotelColorSvg />
        </div>
      </div>

      <div class="rent-option">
        <p>Fincas</p>
        <div class="rent-option-svg">
          <FincaColorSvg />
        </div>
      </div>
      <div class="rent-option">
        <p>Consultorios</p>
        <div class="rent-option-svg">
          <ConsultorioColorSvg />
        </div>
      </div>

      <div class="rent-option">
        <p>Terrenos y Lotes</p>
        <div class="rent-option-svg">
          <TerrenoColorSvg />
        </div>
      </div>

    </div>

  </section>
</template>