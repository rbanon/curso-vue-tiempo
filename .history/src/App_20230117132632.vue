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

  .search-box {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
  }

  .search-box .search-bar {
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

  .search-box .search-bar:focus {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px 0px 16px 0px;
  }
</style>
