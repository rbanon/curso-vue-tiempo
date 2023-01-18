import axios from 'axios';

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&lang={lang}

export const API_KEY = "02ffdb4f65cd1aa34f5916f397fd47a7";
export const API_LANG = 'es';

export const whetherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});
