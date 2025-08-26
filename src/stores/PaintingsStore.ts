import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

interface Painting {
  authorId: number;
  created: number;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
}

interface Authors {
  id: number;
  name: string;
}

interface Locations {
  id: number;
  location: string;
}

export const usePaintingsStore = defineStore('paintingsStore', () => {
  const paintings = ref<Painting[]>([]);
  const authors = ref<Authors[]>([]);
  const locations = ref<Locations[]>([]);
  const paintingsLength = ref(1);
  const pageNumber = ref(1);
  const paintName = ref('');

  const getterPaintings = computed(() => paintings.value);
  const getterPageNumber = computed(() => pageNumber.value);
  const getterPaintName = computed(() => paintName.value);
  const getterPaintingsLength = computed(() => paintingsLength.value);

  const getLengthPaintings = async (input: string) => {
    const res = await axios.get(`https://test-front.framework.team/paintings?q=${input}`);
    paintingsLength.value = Math.ceil(res.data.length / 6);
  };

  const searchPaintings = async (input: string) => {
    try {
      const res = await axios.get(
        `https://test-front.framework.team/paintings?_page=${pageNumber.value}&_limit=${6}&q=${input}`,
      );
      paintings.value = res.data;
    } catch (error) {
      paintings.value = [];
    }
  };

  const switchPaintName = (name: string) => {
    pageNumber.value = 1;
    paintName.value = name;
    searchPaintings(paintName.value);
    getLengthPaintings(paintName.value);
  };

  const searchAuthors = async () => {
    const res = await axios.get('https://test-front.framework.team/authors');
    authors.value = res.data;
  };

  const searchLocations = async () => {
    const res = await axios.get('https://test-front.framework.team/locations');
    locations.value = res.data;
  };

  const pagePlus = () => {
    if (pageNumber.value < paintingsLength.value) {
      pageNumber.value += 1;
      searchPaintings(paintName.value);
    }
  };

  const pageMinus = () => {
    if (pageNumber.value > 1) {
      pageNumber.value -= 1;
      searchPaintings(paintName.value);
    }
  };

  const pageSwitch = (page: number) => {
    pageNumber.value = page;
    searchPaintings(paintName.value);
  };

  return {
    paintingsLength,
    paintings,
    authors,
    locations,
    pageNumber,
    paintName,
    getterPaintings,
    getterPageNumber,
    getterPaintName,
    getterPaintingsLength,
    searchPaintings,
    switchPaintName,
    searchAuthors,
    searchLocations,
    getLengthPaintings,
    pagePlus,
    pageMinus,
    pageSwitch,
  };
});
