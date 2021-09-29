<template>
  <div id="app">
    <Cronometro />
  </div>
</template>

<script>
import Cronometro from './components/Cronometro.vue'
export default {
  name: 'App',
  components: {
    Cronometro
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  padding: 60px;
  align-items: center;
}
</style>
