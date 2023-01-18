<template>
  <div class="weather-box">
    <div class="temp">{{ (weather.main.temp - 273.15).toFixed(2) }}°C</div>
    <div class="weather">
      {{ weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1) }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'weather-box',
    created() {},
    data() {
      return {};
    },
    props: {
      weather: {
        type: Object,
      },
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>
  .weather-box {
    .temp {
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
    .weather {
      color: #fff;
      font-size: 48px;
      font-weight: 700;
      font-style: italic;
      text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    }
  }
</style>
