import customRouter from './customRouter'
import { listen, push } from './history'

export default {
  install (Vue, options) {
    Vue.component('customRouter', customRouter)
    Vue.prototype.$routes = options.routes
    Vue.prototype.$pushRoute = push

    if (options.hook) {
      listen(options.hook)
    }
  }
}
