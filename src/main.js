import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import {
    faTwitter,
    faLinkedin,
    faGithub,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import {
    faPaperPlane
} from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faTwitter,faLinkedin,faGithub,faInstagram,faPaperPlane)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
