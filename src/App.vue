<template>
<div>
  <NavBar />
  <Spinner :loading="$store.state.loading" />
  <router-view/>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Spinner from './components/Spinner.vue'

export default {
  components: { NavBar, Spinner },
  created() {

  },
  methods: {
    startSpinner() {
      this.loadingStatus = true
    },
    endSpinner() {
      this.loadingStatus = false
    }
  }
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
