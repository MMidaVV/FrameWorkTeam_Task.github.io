<script setup lang="ts">
import PaintingComp from "./PaintingComp.vue";
import { usePaintingsStore } from "../stores/PaintingsStore"
import { onMounted, computed } from "vue";

const paintingsStore = usePaintingsStore();

const paintings = computed(() => paintingsStore.paintings)

onMounted(() => {
    paintingsStore.getLengthPaintings('');
    paintingsStore.getPaintings('');
    paintingsStore.searchAuthors();
    paintingsStore.searchLocations();
})
</script>
<template>
    <div class="paintings">
        <PaintingComp v-for="painting in paintings" :key="painting.id" :painting="painting" />
    </div>
</template>
