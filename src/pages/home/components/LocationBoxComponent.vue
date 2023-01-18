<template>
  <div class="location-box">
    <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
    <div class="date">{{ dateBuilder() }}</div>
  </div>
</template>

<script>
  export default {
    name: 'location-box',
    data() {
      return {};
    },
    props: {
      weather: {
        type: Object,
      },
    },
    methods: {
      dateBuilder() {
        let day = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return day.toLocaleDateString('es-ES', options);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .location-box {
    .location {
      color: #fff;
      font-size: 32px;
      font-weight: 500;
      text-align: center;
      text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
    }

    .date {
      color: #fff;
      font-size: 20px;
      font-weight: 300;
      font-style: italic;
      text-align: center;
    }
  }
</style>
