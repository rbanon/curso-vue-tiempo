<script>
  import { weatherApi, API_KEY, API_LANG } from './api/weather-api';
  import SearchBoxComponent from './pages/home/components/SearchBoxComponent.vue';

  export default {
    name: 'app',
    data() {
      return {
        weather: {},
      };
    },
    methods: {
      async fetchWeather(event) {
        try {
          const resp = await weatherApi.get(`?q=${event?.data}&appid=${API_KEY}&lang=${API_LANG}`);
          this.weather = resp.data;
        } catch (error) {
          console.error(error);
        }
      },
      dateBuilder() {
        let day = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return day.toLocaleDateString('es-ES', options);
      },
    },
    components: { SearchBoxComponent },
  };
</script>

<template>
  <div class="main-container" :class="weather?.main && weather?.main?.temp > 16 ? 'warm' : 'cold'">
    <main>
      <SearchBoxComponent @call-api="fetchWeather"></SearchBoxComponent>
      <div class="weather-wrap" v-if="weather?.main">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp - 273.15) }}°c</div>
          <div class="weather">{{ weather.weather[0].description }}</div>
        </div>
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

  .location-box .location {
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  }

  .location-box .date {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
  }

  .weather-box {
    text-align: center;
  }

  .weather-box .temp {
    display: inline-block;
    padding: 10px 25px;
    color: #fff;
    font-size: 102px;
    font-weight: 900;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 30px 0px;
    box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }

  .weather-box .weather {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }
</style>
