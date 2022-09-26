import Trend from './src/index.vue'
import { App} from 'vue'

export default {
  install(app: App) {
    app.component('trend',Trend)
  }
}