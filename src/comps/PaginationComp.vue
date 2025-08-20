<script setup lang="ts">
import arrow from "../images/arrow_icon.svg"
import dark_arrow from "../images/dark_arrow.svg"
import { usePaintingsStore } from "../stores/PaintingsStore"
import { useThemeStore } from '@/stores/ThemeStore';
import { ref, computed } from "vue";

const paintingsStore = usePaintingsStore();
const themeStore = useThemeStore();

const currentPage = computed(() => paintingsStore.pageNumber);
const totalPages = computed(() => paintingsStore.paintingsLength);
const isDarkTheme = computed(() => themeStore.isDarkTheme)
const pageSwitch = paintingsStore.pageSwitch;



</script>

<template>
  <div class="pagination" :class="isDarkTheme ? 'dark-theme' : ''">
    <button class="button_left" v-on:click="paintingsStore.pageMinus">
      <img :src="isDarkTheme ? dark_arrow : arrow" alt="" />
    </button>
      <div class="numbers">
        <button v-if="currentPage > 3" v-on:click="pageSwitch(1)">
          <span>1</span>
        </button>

        <span v-if="currentPage > 3">...</span>

        <button v-if="currentPage === 3 || currentPage === totalPages" v-on:click="pageSwitch(currentPage - 2)">
          <span>{{ currentPage - 2 }}</span>
        </button>
        <button v-if="currentPage > 1" v-on:click="pageSwitch(currentPage - 1)">
          <span>{{ currentPage - 1 }}</span>
        </button>
        
        <button>
          <div class="pageNumber"><span>{{ currentPage }}</span></div>
        </button>
        
        <button v-if="currentPage < totalPages" v-on:click="pageSwitch(currentPage + 1)">
          <span>{{ currentPage + 1 }}</span>
        </button>
        <button v-if="currentPage === totalPages - 2 || currentPage === 1" v-on:click="pageSwitch(currentPage + 2)">
          <span>{{ currentPage + 2 }}</span>
        </button>
        
        <span v-if="currentPage < totalPages - 2">...</span>

        <button v-if="currentPage < totalPages - 2" v-on:click="pageSwitch(totalPages)">
          <span>{{ totalPages }}</span>
        </button>
      </div>
    <button class="button_right" v-on:click="paintingsStore.pagePlus">
      <img :src="isDarkTheme ? dark_arrow : arrow" alt="" />
    </button>
  </div>
</template>
