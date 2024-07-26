import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import { createYmaps } from "vue-yandex-maps";

const app = createApp(App)
// createApp(App).mount('#app')

const ymaps = createYmaps({
  apikey: "713d474f-195e-44ab-b74d-d9d35047ded2",
});

app.use(ymaps);
app.mount('#app')





