<script>
  import { weatherApi } from './api/weather-api';
  import { API_KEY, API_LANG } from './api/config';
  import LocationBoxComponent from './pages/home/components/LocationBoxComponent.vue';
  import SearchBoxComponent from './pages/home/components/SearchBoxComponent.vue';
  import WeatherBoxComponent from './pages/home/components/WeatherBoxComponent.vue';

  export default {
    name: 'app',
    data() {
      return {
        weather: {},
        temperature: 0,
      };
    },
    methods: {
      async fetchWeather(event) {
        try {
          const resp = await weatherApi.get(`?q=${event?.data}&appid=${API_KEY}&lang=${API_LANG}`);
          this.weather = resp.data;
          this.temperature = (this.weather.main.temp - 273.15).toFixed(2);
        } catch (error) {
          console.error(error);
        }
      },
    },
    components: { SearchBoxComponent, LocationBoxComponent, WeatherBoxComponent },
  };
</script>

<template>
  <div class="main-container" :class="weather?.main && temperature > 16 ? 'warm' : 'cold'">
    <main>
      <SearchBoxComponent @call-api="fetchWeather" />
      <div class="weather-wrap" v-if="weather?.main">
        <LocationBoxComponent :weather="weather" />
        <WeatherBoxComponent :weather="weather" />
      </div>
    </main>
  </div>
</template>

<style>
  body {
    display: flex;
    justify-content: center;
    font-family: 'montserrat', sans-serif;
    min-height: 100vh;
    margin: 0;
  }

  #app {
    width: 100%;
    max-width: 900px;
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  .main-container {
    width: 100%;
    height: 100%;
  }

  .cold {
    background-image: url('./assets/cold-bg.jpg');
    background-size: cover;
    background-position: bottom;
    transition: 0.4s;
  }

  .warm {
    background-image: url('./assets/warm-bg.jpg');
    background-size: cover;
    background-position: bottom;
    transition: 0.4s;
  }

  .weather-box {
    text-align: center;
  }
</style>
