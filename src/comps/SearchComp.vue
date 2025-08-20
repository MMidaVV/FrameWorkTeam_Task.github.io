<script setup lang="ts">
import { ref, watch, computed } from "vue";
import magnifier from "../images/magnifier.svg";
import dark_magnifier from "../images/dark_magnifier.svg";
import white_delete from "../images/delete.svg";
import dark_delete from "../images/dark_delete.svg";
import { usePaintingsStore } from "../stores/PaintingsStore";
import { useThemeStore } from '@/stores/ThemeStore';

const themeStore = useThemeStore();
const isDarkTheme = computed(() => themeStore.isDarkTheme)

const paintingsStore = usePaintingsStore();
const search_input = ref('');

watch(search_input, (newValue, oldValue) => {
  paintingsStore.switchPaintName(newValue);
});

const deleteSearch = () => { search_input.value = '' };
</script>

<template>
  <div class="search_bar" :class="isDarkTheme ? 'dark-theme' : ''">
    <div class="search">
      <img :src="isDarkTheme ? dark_magnifier : magnifier" />
      <input 
        type="text" 
        name="search_bar" 
        id="search_bar" 
        placeholder="Painting title" 
        v-model="search_input"
      />
      <button v-on:click="deleteSearch">
        <img :src="isDarkTheme ? dark_delete : white_delete" />
      </button>
    </div>
  </div>
</template>
