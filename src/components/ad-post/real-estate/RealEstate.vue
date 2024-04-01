<script setup lang="ts">
import { ref } from 'vue'
import './real-estate.scss'
import HandWithKeySvg from '../icons/real-estate/rental-or-sell/HandWithKeySvg.vue'
import ContractAgreeSvg from '../icons/real-estate/rental-or-sell/ContractAgreeSvg.vue'
import ApartmentColorSvg from '../icons/real-estate/type-of-property/ApartmentColorSvg.vue'
import HouseColorSvg from '../icons/real-estate/type-of-property/HouseColorSvg.vue'
import WareHouseSvg from '../icons/real-estate/type-of-property/WareHouseSvg.vue'
import BuildingColorSvg from '../icons/real-estate/type-of-property/BuildingColorSvg.vue'
import ShopColorSvg from '../icons/real-estate/type-of-property/ShopColorSvg.vue'
import BedColorSvg from '../icons/real-estate/type-of-property/BedColorSvg.vue'
import HotelColorSvg from '../icons/real-estate/type-of-property/HotelColorSvg.vue'
import FincaColorSvg from '../icons/real-estate/type-of-property/FincaColorSvg.vue'
import ConsultorioColorSvg from '../icons/real-estate/type-of-property/ConsultorioColorSvg.vue'
import TerrenoColorSvg from '../icons/real-estate/type-of-property/TerrenoColorSvg.vue'

import TitlePost from '../title/TitlePost.vue'
import GoBack from '@/components/ad-post/go-back/GoBack.vue'


const isRenting = ref<boolean>(false)
const fisrstTime = ref<boolean>(true)

const rent = () => {
  isRenting.value = true
  fisrstTime.value = false
}

</script>

<template>

  <section v-if="fisrstTime">
    <TitlePost title="¿Está buscando vender o arrendar su propiedad?" />
    <GoBack />

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

  </section>

  <section v-if="isRenting">
    <TitlePost title="¿Qué tipo de inmueble es?" />
    <GoBack />

    <div class="rent-options-wrapper">
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