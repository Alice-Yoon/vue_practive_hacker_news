<template>
  <div id="NavBar">
    <router-link to="/news" class="nav">News</router-link>
    <router-link to="/jobs" class="nav">Jobs</router-link>
    <router-link to="/ask" class="nav">Ask</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#NavBar {
  border: 1px solid #2c3e50;
  padding: 15px;
}

.nav {
  margin-right: 30px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav.router-link-exact-active {
  color: #42b983;
  border-bottom: 1px solid #42b983;
}
</style>