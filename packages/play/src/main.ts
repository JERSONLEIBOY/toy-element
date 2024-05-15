import { createApp } from 'vue'
import App from './App.vue'

import ToElement from "toy-element";
import "toy-element/dist/index.css";

createApp(App).use(ToElement).mount('#app')
