<template>
  <ListView :propsData='$store.state.jobs' />
</template>

<script>
import ListView from '@/components/ListView.vue'

export default {
  components: { ListView },
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style>

</style>