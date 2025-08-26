<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { usePaintingsStore } from '@/stores/PaintingsStore.ts';
import { useThemeStore } from '@/stores/ThemeStore.ts';
import PaintingComp from './PaintingComp.vue';

const paintingsStore = usePaintingsStore();
const themeStore = useThemeStore();

const { getterPaintings: paintings, getterPaintName: paintName } = storeToRefs(paintingsStore);
const { isDarkTheme } = storeToRefs(themeStore);

onMounted(() => {
  paintingsStore.getLengthPaintings('');
  paintingsStore.searchPaintings('');
  paintingsStore.searchAuthors();
  paintingsStore.searchLocations();
});
</script>
<template>
  <div class="paintings" v-if="paintings.length > 0">
    <PaintingComp v-for="painting in paintings" :key="painting.id" :painting="painting" />
  </div>

  <div v-else class="paintings zero_paintings" :class="isDarkTheme ? 'dark-theme' : ''">
    <span class="no_matches"
      >No matches for <b>{{ paintName }}</b></span
    ><br />
    <span class="please_try">Please try again with a different spelling or keywords.</span>
  </div>
</template>
