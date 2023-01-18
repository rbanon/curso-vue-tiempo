import axios from 'axios';

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&lang={lang}

export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});
