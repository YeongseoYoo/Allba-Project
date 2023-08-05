import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import jquery from '/jquery-3.3.1.min.js';
import fullCalendar from 'vue-fullcalendar'

Vue.component('full-calendar', fullCalendar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  jquery,
}).$mount('#app')
