import MContainer from './container'
import MRow from './row'
import MCol from './col'
import './container.less'

MContainer.install = function (Vue) {
  Vue.component(MContainer.name, MContainer)
  Vue.component(MRow.name, MRow)
  Vue.component(MCol.name, MCol)
}

export {
  MContainer as default,
  MContainer,
  MRow,
  MCol
}
