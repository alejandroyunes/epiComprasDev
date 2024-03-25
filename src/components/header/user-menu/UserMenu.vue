<script setup lang="ts">
import { ref } from 'vue'

import './user-menu.scss'
import ProfileSvg from "../../icons/ProfileSvg.vue"
import HelpSvg from "../../icons//HelpSvg.vue"
import LogoutSvg from "../../icons/LogoutSvg.vue"
import MessageSvg from "../../icons/MessagesSvg.vue"
import AdsSvg from "../../icons/AdsSvg.vue"
import HeartSvg from "../../icons/HeartSvg.vue"
import NotificationSlider from '@/components/right-slider/NotificationSlider.vue'

const showDropdown = ref(false)
const logged = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const handleLogin = () => {
  console.log('Login')
  showDropdown.value = false
  logged.value = !logged.value
}

</script>

<template>
  <NotificationSlider v-if="logged" />

  <ProfileSvg class="icon user-icon" @click="toggleDropdown" />
  <div class="user-menu-outer" v-if="showDropdown">
    <ul class="menu-dropdown">

      <li href="#" v-if="!logged" class="menu-dropdown-item">
        <ProfileSvg class="icon" />
        <p>Crear Perfil</p>
      </li>

      <li href="#" v-if="logged" class="menu-dropdown-item">
        <ProfileSvg class="icon" />
        <p>Perfil</p>
      </li>

      <li href="#" v-if="logged" class="menu-dropdown-item">
        <AdsSvg class="icon" />
        <p>Publicaciones</p>
      </li>

      <li href="#" v-if="logged" class="menu-dropdown-item">
        <MessageSvg class="icon" />
        <p>Mensajes</p>
      </li>

      <li href="#" v-if="logged" class="menu-dropdown-item">
        <HeartSvg class="icon" />
        <p>Favoritos</p>
      </li>

      <li href="#" class="menu-dropdown-item">
        <HelpSvg class="icon" />
        <p>Centro de ayuda</p>
      </li>

      <li @click="handleLogin" v-if="!logged" class="menu-dropdown-item">
        <LogoutSvg class="icon" />
        <p>Entrar</p>
      </li>

      <li @click="handleLogin" v-if="logged" class="menu-dropdown-item">
        <LogoutSvg class="icon" />
        <p>Salir</p>
      </li>

    </ul>
  </div>

  <div @click="toggleDropdown" :class="{ 'menu-dropdown-bg': showDropdown }"></div>
</template>
