import Vue from 'vue';
import App from './App.vue';
import router from './router';
import filter from './utils/filter'
import store from './store'

// setup Vue filter
filter(Vue)

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
