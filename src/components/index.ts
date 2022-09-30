import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import trend from './trend'
import notification from './notification'
import list from './list'
import progress from './progress'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import chooseCity from './chooseCity'
import { App } from 'vue';

const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  progress,
  chooseTime,
  chooseDate,
  chooseCity
]
export default {
  install(app:App) {
    components.forEach(component => {
      app.use(component)
    })
  }
}
