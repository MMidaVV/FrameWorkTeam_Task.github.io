import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('themeStore', () => {
  const darkTheme = ref(localStorage.getItem('theme') === 'true');

  const isDarkTheme = computed(() => darkTheme.value);

  const updateTheme = () => {
    if (darkTheme.value) {
      localStorage.setItem('theme', 'true');
    } else {
      localStorage.setItem('theme', 'false');
    }
  };

  const toggleTheme = () => {
    darkTheme.value = !darkTheme.value;
    updateTheme();
  };

  return {
    darkTheme,
    isDarkTheme,
    toggleTheme,
  };
});
