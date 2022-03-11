import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faTwitter,
    faLinkedin,
    faGithub,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
    faPaperPlane
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueGtag from "vue-gtag"

/* add icons to the library */
library.add(faTwitter, faLinkedin, faGithub, faInstagram, faPaperPlane)

const app = createApp(App)

app.use(VueGtag, {
    config: { id: "UA-135425831-1" }
})

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
