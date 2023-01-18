<script>
  import { weatherApi, API_KEY, API_LANG } from './api/weather-api';

  export default {
    name: 'app',
    data() {
      return {
        query: '',
        weather: {},
      };
    },

    methods: {
      async fetchWeather() {
        try {
          const resp = await weatherApi.get(`?q=${this.query}&appid=${API_KEY}&lang=${API_LANG}`);
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
  };
</script>

<template>
  <div class="main-container">
    <main>
      <div class="search-box">
        <input
          type="text"
          class="search-bar"
          placeholder="Introduce ciudad..."
          v-model="query"
          @keyup.enter="fetchWeather"
        />
      </div>

      <div class="weather-wrap" v-if="weather?.main">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
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
    background-image: url('./assets/warm-bg.jpg');
    background-size: cover;
    background-position: bottom;
  }

  .search-box {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
  }

  .search-box .search-bar {
    display: flex;
    width: 100%;
    padding: 15px;
    margin: 20px;
    color: #313131;
    font-size: 20px;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 16px 0px 16px;
    transition: 0.4s;
  }

  .search-box .search-bar:focus {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px 0px 16px 0px;
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
