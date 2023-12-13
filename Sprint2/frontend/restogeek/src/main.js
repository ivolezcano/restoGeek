import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebook, faGithub, faInstagram, faLinkedin, faRedditAlien, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faFacebook, faWhatsapp, faXTwitter, faRedditAlien, faLinkedin, faInstagram, faGithub, faYoutube, faShareNodes)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
