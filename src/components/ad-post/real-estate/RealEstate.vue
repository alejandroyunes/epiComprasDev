<script setup lang="ts">
import { ref } from 'vue'
import './real-estate.scss'
import '../ad-post.scss'
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

const isRentingOrSelling = ref(true)
const propertyOptionsSection = ref(false)
const propertyDetails = ref(false)

const typeOfPost = ref<'isRenting' | 'isSelling' | undefined>(undefined)
const propertyTypes = ref(['Apartmentos', 'Casas', 'Bodega', 'Locales', 'Edificio', 'Habitaciones', 'Hoteles', 'Fincas', 'Consultorios', 'Terrenos y Lotes'])
const selectedPropertyType = ref<string | undefined>(undefined)

const selectPostType = (selection: 'isRenting' | 'isSelling') => {
  typeOfPost.value = selection
  isRentingOrSelling.value = false
  propertyOptionsSection.value = true
}

const handlePropertySelection = (propertyType: string) => {
  selectedPropertyType.value = propertyType
  propertyOptionsSection.value = false
  propertyDetails.value = true
}

const goBack = () => {
  if (propertyOptionsSection.value) {
    isRentingOrSelling.value = true
    propertyOptionsSection.value = false
  } else if (propertyDetails.value) {
    propertyOptionsSection.value = true
    propertyDetails.value = false
  }
}

const getPropertyIcon = (property: string | number) => {

  return {
    'Apartmentos': ApartmentColorSvg,
    'Casas': HouseColorSvg,
    'Bodega': WareHouseSvg,
    'Locales': ShopColorSvg,
    'Edificio': BuildingColorSvg,
    'Habitaciones': BedColorSvg,
    'Hoteles': HotelColorSvg,
    'Fincas': FincaColorSvg,
    'Consultorios': ConsultorioColorSvg,
    'Terrenos y Lotes': TerrenoColorSvg

  }[property] || null
}

</script>

<template>

  <section v-if="isRentingOrSelling">
    <TitlePost title="¿Está buscando vender o arrendar su propiedad?" />
    <GoBack />

    <div class="rent-or-sell">
      <div class="ad-post-item" @click="selectPostType('isRenting')">
        <p>Arrendar</p>
        <div class="ad-post-svg">
          <HandWithKeySvg />
        </div>
      </div>
      <div class="ad-post-item" @click="selectPostType('isSelling')">
        <p>Vender</p>
        <div class="ad-post-svg">
          <ContractAgreeSvg />
        </div>
      </div>
    </div>

  </section>

  <section v-if="propertyOptionsSection">
    <TitlePost title="¿Qué tipo de inmueble es?" />
    <GoBack :goBack="goBack" />

    <div class="real-estate-options">
      <div v-for="property in propertyTypes" :key="property" class="ad-post-item"
        @click="handlePropertySelection(property)">
        <p>{{ property }}</p>
        <div class="ad-post-svg">
          <component :is="getPropertyIcon(property)" />
        </div>
      </div>
    </div>

  </section>

  <section v-if="propertyDetails">
    <TitlePost title="Empezemos describiendo el inmueble" />
    <GoBack :goBack="goBack" />

    <div class="real-estate-info">

      <div>
        <label class="label" for="full-address">Dirección</label>
        <input class="" type="text" name="full-address" placeholder="Incluye calle, número, comuna y ciudad." />
      </div>

      <div class="city-and-state">
        <div class="">
          <label class="label" for="state">Departamento</label>
          <input class="" type="text" name="state" placeholder="Antioquia" />
        </div>

        <div>
          <label class="label" for="city">Municipio o ciudad</label>
          <input class="" type="text" name="city" placeholder="Medellín" />
        </div>

      </div>

    </div>
  </section>

</template>