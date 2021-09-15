import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase";
import Particles from "particles.vue";
import vuetify from './plugins/vuetify'

Vue.use(Particles);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAnSfeF02nqwBaHs-fwflwLJ5oJC01Mkr8",
  authDomain: "fireblogsys.firebaseapp.com",
  projectId: "fireblogsys",
  storageBucket: "fireblogsys.appspot.com",
  messagingSenderId: "447748915790",
  appId: "1:447748915790:web:70441c9b66b3e9b121391f"
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
