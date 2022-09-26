import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import trend from './trend'
import { App } from 'vue';

const components = [
  chooseArea,
  chooseIcon,
  trend
]
export default {
  install(app:App) {
    components.forEach(component => {
      app.use(component)
    })
  }
}
