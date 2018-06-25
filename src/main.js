// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

// PouchDB 
import PouchDB from 'pouchdb-browser'
import lf from 'pouchdb-find'
import plf from 'pouchdb-live-find'

PouchDB.plugin(lf)
PouchDB.plugin(plf)

Vue.use(require('vue-pouch'), {
  pouch: PouchDB,
  defaultDB: 'articles'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
