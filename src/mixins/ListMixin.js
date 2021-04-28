export default {
  // 재사용할 컴포넌트 옵션

  created() {
    this.$store.commit('TOGGLE_LOADING', true)
    setTimeout(() => {
      this.$store.dispatch('FETCH_NEWS')
        .then(() => {
          this.$store.commit('TOGGLE_LOADING', false)
        })
    }, 3000)
  }
}