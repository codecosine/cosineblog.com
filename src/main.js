import Vue from 'vue';
import App from './App.vue';
import router from './router';
import filter from './utils/filter'

// setup Vue filter
filter(Vue)

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
