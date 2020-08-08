// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

const http = axios.create({
  baseURL: 'https://pzsearch.ceddini.me/',
  headers: { 'Cache-Control': 'no-cache' },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
});

Vue.prototype.$http = http;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
