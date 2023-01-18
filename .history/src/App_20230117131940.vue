<script>
  export default {
    name: 'app',
    data() {
      return {
        query: '',
      };
    },
  };
</script>

<template>
  <div class="main-container">
    <main>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Introduce ciudad..." v-model="query" />
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
</style>
