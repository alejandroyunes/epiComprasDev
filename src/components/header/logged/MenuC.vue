<script setup lang="ts">
import './menu.scss'
import ProfileSvg from "../icons/menu/ProfileSvg.vue"
import MessageSvg from "../icons/menu/MessagesSvg.vue"
import AdsSvg from "../icons/menu/AdsSvg.vue"
import HeartSvg from "../icons/menu/HeartSvg.vue"
import HelpSvg from "../icons/menu/HelpSvg.vue"
import LogoutSvg from "../icons/menu/LogoutSvg.vue"

import { ref } from 'vue'

const showDropdown = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

</script>

<template>
  <ProfileSvg class="icon profile" @click="toggleDropdown" />

  <div class="container">
    <div v-if="showDropdown" class="dropdown">
      <a href="#" class="a">
        <span class="iconDropdown">
          <ProfileSvg class="icon" />
        </span>
        Perfil
      </a>
      <a href="#" class="a">
        <span class="iconDropdown">
          <AdsSvg class="icon" />
        </span>
        Publicaciones
      </a>
      <a href="#" class="a">
        <span class="iconDropdown">
          <MessageSvg class="icon" />
        </span>
        Mensajes
      </a>
      <a href="#" class="a">
        <span class="iconDropdown">
          <HeartSvg class="icon" />
        </span>
        Favoritos
      </a>
      <a href="#" class="a">
        <span class="iconDropdown">
          <HelpSvg class="icon" />
        </span>
        Centro de ayuda
      </a>
      <span @click="toggleDropdown" class="a">
        <span class="iconDropdown">
          <LogoutSvg class="icon" />
        </span>
        Salir
      </span>
    </div>
  </div>
  
  <div @click="toggleDropdown" :class="{ 'outer-dropdown-bg': showDropdown }"></div>
</template>
