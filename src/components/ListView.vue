<template>
  <ul>
    <li v-for="data in propsData" :key="data.id">
      <a :href='data.url' target="_blank">{{ data.title }}</a>
      <span>({{ data.url }})</span>
      <p>{{ data.points }} by {{ data.user}} {{ data.time_ago }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['propsData']
}
</script>

<style scoped>
  li {
    list-style: none;
    padding: 10px;
    border-bottom: 1px solid grey;
  }
</style>