import Vue from 'vue'
import VueCal from '@/App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faAngleLeft)
library.add(faAngleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

export default new Vue({
  el: '#app',
  render: h => h(VueCal),
})
