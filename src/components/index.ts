import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import { App } from 'vue';

const components = [
  chooseArea,
  chooseIcon
]
export default {
  install(app:App) {
    components.forEach(component => {
      app.use(component)
    })
  }
}
