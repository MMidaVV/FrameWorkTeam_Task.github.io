<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { usePaintingsStore } from "../stores/PaintingsStore"
import { useThemeStore } from '@/stores/ThemeStore';

const paintingsStore = usePaintingsStore();
const themeStore = useThemeStore();

const isDarkTheme = computed(() => themeStore.isDarkTheme)

interface Painting {
  authorId: number;
  created: number;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
}

defineProps<{
    painting: Painting;
}>();


</script>

<template>
    <div class="painting" :class="isDarkTheme ? 'dark-theme' : ''">
        <img :src="`https://test-front.framework.team${painting.imageUrl}`" alt="Painting">
        <div class="info_box">
            <div class="info_box_border" :class="isDarkTheme ? 'dark-theme' : ''">
                <div class="info_text">
                    <h2>
                        {{ painting.name }}
                    </h2>
                    <h4>
                        {{ painting.created }}
                    </h4>               
                </div>

                <div class="info_text_second">
                    <h2>
                        {{ paintingsStore.authors.find(a => a.id == painting.authorId)?.name }}
                    </h2>
                    <h4>
                        {{ paintingsStore.locations.find(l => l.id == painting.locationId)?.location }}
                    </h4>               
                </div>
            </div>
        </div>
    </div>
</template>