import DButton from './components/button.vue'
import './style/index.scss'

import type { App } from 'vue'

const components = [
  DButton
]

function install(app: App) {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

// export default {
//   install
// }

export {
  DButton,
  install
}