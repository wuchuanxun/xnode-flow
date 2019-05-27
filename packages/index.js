import CurvePath from './xPath';
import WorkArea from './xCanvas'
import VueDragResize from './DragResize'

const components = [
  CurvePath,
  WorkArea,
  VueDragResize
]

const install = function(Vue) {
  if (install.installed) return;
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Object.assign({install},
  ...components.map((ele)=>{return {[ele]:ele}}))
