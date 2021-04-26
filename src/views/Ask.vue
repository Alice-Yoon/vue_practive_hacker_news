<template>
  <ListView :propsData='$store.state.ask' />
</template>

<script>
import ListView from '@/components/ListView.vue'

export default {
  components: { ListView },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>

</style>