import { createApp } from 'vue'
import App from './App.vue'
import vClickOutside from 'click-outside-vue3'
import router from './router'
import store from './store'
import '@/assets/tailwind.css'

import Switcher from '@/components/UI/Switcher';

createApp(App)
	.use(store)
	.use(router)
	.use(vClickOutside)
	.component('switcher', Switcher)
	.mount('#app');
