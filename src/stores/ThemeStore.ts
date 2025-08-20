import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('themeStore', () => {
    const isDarkTheme = ref(localStorage.getItem('theme') === 'true')

    const toggleTheme = () => {
        isDarkTheme.value = !isDarkTheme.value
        updateTheme()
    }

    const updateTheme = () => {
        if (isDarkTheme.value) {
            localStorage.setItem('theme', 'true')
        } else {
            localStorage.setItem('theme', 'false')
        }
    }

    return {
        isDarkTheme,
        toggleTheme
    }
});