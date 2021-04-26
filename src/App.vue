<template>
<div>
  <NavBar />
  <Spinner />
  <router-view/>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Spinner from './components/Spinner.vue'

export default {
  components: { NavBar, Spinner }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
