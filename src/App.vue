/* eslint-disable */
<template>
  <div id='app'>
    <button @click="goTo('/arts')">Go to Articles</button>
    <button @click="goTo('/')">Go to Home</button>
    <custom-router></custom-router>
  </div>
</template>

<script>
/* eslint-disable */
// import customRouter from './components/CustomRouter'
export default {
  methods: {
    goTo (route) {
      this.$pushRoute(route)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
