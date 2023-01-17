import axios from 'axios';

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&lang={lang}

// export const API_KEY = '5ad4cc52b04e6c53ee69b3229a9f1cbd';
// export const API_LANG = 'es';

export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});
