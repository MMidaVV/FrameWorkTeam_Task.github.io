<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePaintingsStore } from '@/stores/PaintingsStore.ts';
import { useThemeStore } from '@/stores/ThemeStore.ts';
import arrow from '../images/arrow_icon.svg';
import darkArrow from '../images/dark_arrow.svg';

const paintingsStore = usePaintingsStore();
const themeStore = useThemeStore();

const {
  getterPageNumber: currentPage,
  getterPaintingsLength: totalPages,
  getterPaintings: paintings,
} = storeToRefs(paintingsStore);
const { isDarkTheme } = storeToRefs(themeStore);
</script>

<template>
  <div v-if="paintings.length > 0" class="pagination" :class="isDarkTheme ? 'dark-theme' : ''">
    <button type="button" class="button_left" v-on:click="paintingsStore.pageMinus">
      <img :src="isDarkTheme ? darkArrow : arrow" alt="" />
    </button>
    <div class="numbers">
      <button type="button" v-if="currentPage > 3" v-on:click="paintingsStore.pageSwitch(1)">
        <span>1</span>
      </button>

      <span v-if="currentPage > 3">...</span>

      <button
        type="button"
        v-if="currentPage === 3 || (currentPage === totalPages && totalPages !== 1)"
        v-on:click="paintingsStore.pageSwitch(currentPage - 2)"
      >
        <span>{{ currentPage - 2 }}</span>
      </button>
      <button
        type="button"
        v-if="currentPage > 1"
        v-on:click="paintingsStore.pageSwitch(currentPage - 1)"
      >
        <span>{{ currentPage - 1 }}</span>
      </button>

      <button type="button">
        <div class="pageNumber">
          <span>{{ currentPage }}</span>
        </div>
      </button>

      <button
        type="button"
        v-if="currentPage < totalPages"
        v-on:click="paintingsStore.pageSwitch(currentPage + 1)"
      >
        <span>{{ currentPage + 1 }}</span>
      </button>
      <button
        type="button"
        v-if="currentPage === totalPages - 2 || (currentPage === 1 && totalPages !== 1)"
        v-on:click="paintingsStore.pageSwitch(currentPage + 2)"
      >
        <span>{{ currentPage + 2 }}</span>
      </button>

      <span v-if="currentPage < totalPages - 2">...</span>

      <button
        type="button"
        v-if="currentPage < totalPages - 2"
        v-on:click="paintingsStore.pageSwitch(totalPages)"
      >
        <span>{{ totalPages }}</span>
      </button>
    </div>
    <button type="button" class="button_right" v-on:click="paintingsStore.pagePlus">
      <img :src="isDarkTheme ? darkArrow : arrow" alt="" />
    </button>
  </div>
</template>
