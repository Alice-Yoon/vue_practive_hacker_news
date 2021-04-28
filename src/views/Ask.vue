<template>
  <ListView :propsData='$store.state.ask' />
</template>

<script>
import ListView from '@/components/ListView.vue'

export default {
  components: { ListView },
  created() {
    this.$store.commit('TOGGLE_LOADING', true)
    setTimeout(() => {
      this.$store.dispatch('FETCH_ASK')
        .then(() => {
          this.$store.commit('TOGGLE_LOADING', false)
        })
    }, 3000)
  }
}
</script>

<style>

</style>