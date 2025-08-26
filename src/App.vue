<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/stores/ThemeStore.ts';
import HeaderComp from './comps/HeaderComp.vue';
import MainComp from './comps/MainComp.vue';

const themeStore = useThemeStore();
const { isDarkTheme } = storeToRefs(themeStore);
</script>

<template class="application" :class="isDarkTheme ? 'dark-theme' : ''">
  <div class="application" :class="isDarkTheme ? 'dark-theme' : ''">
    <HeaderComp />
    <MainComp />
  </div>
</template>

<style scoped></style>
