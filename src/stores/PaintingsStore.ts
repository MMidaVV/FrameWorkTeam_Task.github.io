import { ref } from 'vue';
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
  const authors = ref<Authors[]>([])
  const locations = ref<Locations[]>([])
  const paintingsLength = ref(1);
  const pageNumber = ref(1);
  const paintName = ref('')

  const getLengthPaintings = async (input: string) => {
    try {
      const res = await axios.get(`https://test-front.framework.team/paintings?q=${input}`);
      paintingsLength.value = Math.ceil(res.data.length / 6);
    } catch (error) {
      console.log('Ошибка при получении списка картин', error)
    }
  }

  const getPaintings = async (input: string) => {
    try {
      const res = await axios.get(`https://test-front.framework.team/paintings?_page=${pageNumber.value}&_limit=${6}&q=${input}`);
      paintings.value = res.data;
    } catch (error) {
      console.log('Ошибка при загрузке картин', error);
    }
  };

  const searchPaintings = async (input: string) => {
    try {
      const res = await axios.get(`https://test-front.framework.team/paintings?_page=${pageNumber.value}&_limit=${6}&q=${input}`);
      paintings.value = res.data;
    } catch (error) {
      console.log('Ошибка при поиске картин', error);
    }
  };

  const switchPaintName = (name: string) => {
    pageNumber.value = 1;
    paintName.value = name;
    getPaintings(paintName.value);
    getLengthPaintings(paintName.value);
  };

  const searchAuthors = async () => {
    try {
      const res = await axios.get(`https://test-front.framework.team/authors`);
      authors.value = res.data;
    } catch (error) {
      console.log("Ошибка при поиске авторов", error)
    }
  }

  const searchLocations = async () => {
    try {
      const res = await axios.get(`https://test-front.framework.team/locations`);
      locations.value = res.data;
    } catch (error) {
      console.log("Ошибка при поиске локаций", error)
    }
  }

  const pagePlus = () => {
    if (pageNumber.value < paintingsLength.value) {
      pageNumber.value += 1;
      getPaintings(paintName.value); 
    }
  }

  const pageMinus = () => {
    if (pageNumber.value > 1) {
      pageNumber.value -= 1;
      getPaintings(paintName.value); 
    }
  }

  const pageSwitch = (page: number) => {
    pageNumber.value = page;
    console.log(pageNumber.value)
    getPaintings(paintName.value);
  }

  return {
    paintingsLength,
    paintings,
    authors,
    locations,
    pageNumber,
    getPaintings,
    searchPaintings,
    switchPaintName,
    searchAuthors,
    searchLocations,
    getLengthPaintings,
    pagePlus,
    pageMinus,
    pageSwitch
  };
});
