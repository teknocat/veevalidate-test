import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueMeta)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
