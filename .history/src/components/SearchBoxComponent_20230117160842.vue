<template>
  <div class="search-box">
    <input
      type="text"
      class="search-bar"
      placeholder="Introduce ciudad..."
      v-model="query"
      @keyup.enter="fetchWeather"
    />
  </div>
</template>

<script>
  export default {
    name: 'search-box',
    data() {
      return {};
    },
    props: {},
    methods: {},
  };
</script>

<style lang="scss" scoped>
  .search-box {
    display: flex;
    width: 100%;
    margin-bottom: 30px;

    .search-bar {
      display: flex;
      width: 100%;
      padding: 15px;

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
  }

  .search-box .search-bar:focus {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px 0px 16px 0px;
  }
</style>
