<script setup lang="ts">
import SearchComp from './SearchComp.vue';
import PaginationComp from './PaginationComp.vue';
import PaintingsComp from './PaintingsComp.vue';
import { useThemeStore } from '@/stores/ThemeStore';
import { computed } from 'vue';

const themeStore = useThemeStore();
const isDarkTheme = computed(() => themeStore.isDarkTheme)
</script>

<template>
    <div class="main" :class="isDarkTheme ? 'dark-theme' : ''">
      <SearchComp />
      <PaintingsComp />
      <PaginationComp />
    </div>
</template>
