<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/stores/ThemeStore.ts';
import sun from '../images/sun.svg';
import moon from '../images/moon.svg';
import logo from '../images/logo.svg';
import darkLogo from '../images/dark_logo.svg';

const themeStore = useThemeStore();
const { isDarkTheme } = storeToRefs(themeStore);
</script>

<template>
  <header class="header" :class="isDarkTheme ? 'dark-theme' : ''">
    <div class="top_header">
      <div class="logo">
        <img :src="isDarkTheme ? darkLogo : logo" alt="logo" />
      </div>
      <button class="switch_theme" type="button" v-on:click="themeStore.toggleTheme()">
        <img :src="isDarkTheme ? sun : moon" alt="switch_theme" />
      </button>
    </div>
  </header>
</template>
