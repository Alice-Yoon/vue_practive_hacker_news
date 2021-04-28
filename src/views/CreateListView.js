// import ListView from '@/components/ListView.vue'

// export default function createListView(name) {
//   return {
//     // 재사용할 컴포넌트 옵션들
//     name: name,
//     created() {
//       this.$store.commit('TOGGLE_LOADING', true)
//       setTimeout(() => {
//         this.$store.dispatch('FETCH_LIST', this.$route.name)
//           .then(() => {
//             this.$store.commit('TOGGLE_LOADING', false)
//           })
//       }, 3000)
//     },
//     render(createElement) {
//       return createElement(ListView)
//     }
//   }  
// }

// HOC 예시!!