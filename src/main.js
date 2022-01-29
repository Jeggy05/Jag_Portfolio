import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueGapi from 'vue-gapi'

Vue.config.productionTip = false

//Vue.use is for adding a plugin on your vue app and we are adding VueGapi plugin.
//Here we use Vue.use which takes the first parameter as the plugin 
//and 2nd parameter takes the gapi.client.init configuration parameters.
//Here we are initializing the gapi.client object to make subsequent API requests
Vue.use(VueGapi, {
  clientId: '',
  discoveryDocs: ['https://gmail.googleapis.com/$discovery/rest?version=v1'],
  scope: 'https://mail.google.com/'
})

// NOTE: 45min refresh policy is what google recommends
//window.setInterval(this.$gapi.refreshToken(), 2.7e+6)

new Vue({
  render: h => h(App),
}).$mount('#app')

