import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

require('./mock.js')

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
