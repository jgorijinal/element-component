import chooseCity from './src/index.vue'
import { App } from 'vue'
export default {
  install(app:App) {
    app.component('choose-city',chooseCity)
  }
}
