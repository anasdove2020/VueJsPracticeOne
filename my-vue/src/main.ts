import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import Indonesia from './components/Indonesia.vue'
import Malaysia from './components/Malaysia.vue'
import Warna from './components/Warna.vue'

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('indonesia', Indonesia)
app.component('malaysia', Malaysia)
app.component('warna', Warna)

app.mount('#app')
