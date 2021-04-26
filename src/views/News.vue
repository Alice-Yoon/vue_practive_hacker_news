<template>
  <ListView :propsData='$store.state.news' />
</template>

<script>
import ListView from '@/components/ListView.vue'

export default {
  components: { ListView },
  created() {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style>

</style>