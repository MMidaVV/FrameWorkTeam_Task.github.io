<script setup lang="ts">
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { usePaintingsStore } from '@/stores/PaintingsStore.ts';
import { useThemeStore } from '@/stores/ThemeStore.ts';
import magnifier from '../images/magnifier.svg';
import darkMagnifier from '../images/dark_magnifier.svg';
import whiteDelete from '../images/delete.svg';
import darkDelete from '../images/dark_delete.svg';

const themeStore = useThemeStore();
const { isDarkTheme } = storeToRefs(themeStore);

const paintingsStore = usePaintingsStore();
const searchInput = ref('');

watch(searchInput, (newValue) => {
  paintingsStore.switchPaintName(newValue);
});

const deleteSearch = () => {
  searchInput.value = '';
};
</script>

<template>
  <div class="search_bar" :class="isDarkTheme ? 'dark-theme' : ''">
    <div class="search">
      <img :src="isDarkTheme ? darkMagnifier : magnifier" alt="magnifier" />
      <input
        type="text"
        name="search_bar"
        id="search_bar"
        placeholder="Painting title"
        v-model="searchInput"
      />
      <button type="button" v-on:click="deleteSearch">
        <img :src="isDarkTheme ? darkDelete : whiteDelete" alt="delete" />
      </button>
    </div>
  </div>
</template>
