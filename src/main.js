// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import FastClick from 'fastclick';
import store from './store';
import  { ToastPlugin, LoadingPlugin, AlertPlugin } from 'vux'

Vue.config.productionTip = false;

FastClick.attach(document.body);

Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.use(AlertPlugin);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
