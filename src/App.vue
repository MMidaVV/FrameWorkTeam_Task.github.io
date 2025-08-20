<script setup lang="ts">
import HeaderComp from './comps/HeaderComp.vue';
import MainComp from './comps/MainComp.vue';
import { useThemeStore } from '@/stores/ThemeStore';
import { computed } from 'vue';

const themeStore = useThemeStore();
const isDarkTheme = computed(() => themeStore.isDarkTheme)
</script>

<template >
  <div class="application" :class="isDarkTheme ? 'dark-theme' : ''">
    <HeaderComp />
    <MainComp />
  </div>
</template>

<style scoped></style>
