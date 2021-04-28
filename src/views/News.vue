<template>
  <ListView :propsData='$store.state.news' />
</template>

<script>
import ListView from '@/components/ListView.vue'
import ListMixin from '../mixins/ListMixin.js'

export default {
  components: { ListView },
  mixins: [ListMixin]
  // created() {
  //   this.$store.commit('TOGGLE_LOADING', true)
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_NEWS')
  //       .then(() => {
  //         this.$store.commit('TOGGLE_LOADING', false)
  //       })
  //   }, 3000)
  // }
}
</script>

<style>

</style>