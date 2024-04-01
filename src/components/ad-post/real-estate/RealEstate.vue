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

const fisrstTime = ref<boolean>(true)
const isRenting = ref<boolean>(false)
const address = ref<boolean>(false)

const rent = () => {
  isRenting.value = true
  fisrstTime.value = false
}

const goBack = () => {
  isRenting.value = false
  fisrstTime.value = true
}

const addressCollection = () => {
  isRenting.value = false
  fisrstTime.value = false
  address.value = true
}

</script>

<template>

  <section v-if="fisrstTime">
    <TitlePost title="¿Está buscando vender o arrendar su propiedad?" />
    <GoBack />

    <div class="rent-or-sell">
      <div class="ad-post-item" @click="rent">
        <p>Arrendar</p>
        <div class="ad-post-svg">
          <HandWithKeySvg />
        </div>
      </div>
      <div class="ad-post-item" @click="rent">
        <p>Vender</p>
        <div class="ad-post-svg">
          <ContractAgreeSvg />
        </div>
      </div>
    </div>

  </section>

  <section v-if="isRenting">
    <TitlePost title="¿Qué tipo de inmueble es?" />
    <GoBack :goBack="goBack" />

    <div class="real-estate-options" @click="addressCollection">
      <div class="ad-post-item">
        <p>Apartmentos</p>
        <div class="ad-post-svg">
          <ApartmentColorSvg />
        </div>
      </div>

      <div class="ad-post-item">
        <p>Casas</p>
        <div class="ad-post-svg">
          <HouseColorSvg />
        </div>
      </div>

      <div class="ad-post-item">
        <p>Bodega</p>
        <div class="ad-post-svg">
          <WareHouseSvg />
        </div>
      </div>

      <div class="ad-post-item">
        <p>Locales</p>
        <div class="ad-post-svg">
          <ShopColorSvg />
        </div>
      </div>

      <div class="ad-post-item">
        <p>Edificio</p>
        <div class="ad-post-svg">
          <BuildingColorSvg />
        </div>
      </div>

      <div class="ad-post-item">
        <p>Habitaciones</p>
        <div class="ad-post-svg">
          <BedColorSvg />
        </div>
      </div>

      <div class="ad-post-item">
        <p>Hoteles</p>
        <div class="ad-post-svg">
          <HotelColorSvg />
        </div>
      </div>

      <div class="ad-post-item">
        <p>Fincas</p>
        <div class="ad-post-svg">
          <FincaColorSvg />
        </div>
      </div>

      <div class="ad-post-item">
        <p>Consultorios</p>
        <div class="ad-post-svg">
          <ConsultorioColorSvg />
        </div>
      </div>

      <div class="ad-post-item">
        <p>Terrenos y Lotes</p>
        <div class="ad-post-svg">
          <TerrenoColorSvg />
        </div>
      </div>

    </div>

  </section>

  <section v-if="address">
    <TitlePost title="Empezemos describiendo el inmueble" />
    <GoBack />
    <div class="real-estate-info">

      <div>
        <label class="label" for="full-address">Dirección</label>
        <input class="" type="text" name="full-address"
          placeholder="Incluye calle, número, comuna y ciudad." />
      </div>

      <div class="city-and-state">
        <div class="">
          <label class="label" for="state">Departamento</label>
          <input class="" type="text" name="state"
            placeholder="Antioquia" />
        </div>

        <div>
          <label class="label" for="city">Dirección</label>
          <input class="" type="text" name="city"
            placeholder="Medellín" />
        </div>

      </div>

    </div>
  </section>

</template>