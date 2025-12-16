import './assets/main.css'
import './assets/base.css'
import './scss/styles.scss'
import 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faBars, faGear } from '@fortawesome/free-solid-svg-icons'
library.add(faUser, faBars, faGear)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
