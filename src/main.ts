import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
import router from './router'
import AnimateOnScroll from 'primevue/animateonscroll';



const app = createApp(App)

app.directive('animateonscroll', AnimateOnScroll);

app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
 });

app.mount('#app')
