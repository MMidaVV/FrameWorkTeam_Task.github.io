<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/stores/ThemeStore.ts';
import SearchComp from './SearchComp.vue';
import PaginationComp from './PaginationComp.vue';
import PaintingsComp from './PaintingsComp.vue';

const themeStore = useThemeStore();
const { isDarkTheme } = storeToRefs(themeStore);
</script>

<template>
  <div class="main" :class="isDarkTheme ? 'dark-theme' : ''">
    <SearchComp />
    <PaintingsComp />
    <PaginationComp />
  </div>
</template>
