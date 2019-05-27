import CurvePath from "./components/xPath/CurvePath.vue";
import WorkArea from './components/xCanvas/WorkArea.vue'
import VueDragResize from './components/DragResize/DragResize.vue'

const version = '2.2.13';
const install = function(Vue, config = {}) {
  if (install.installed) return;

  Vue.component(CurvePath.name, CurvePath);
  Vue.component(WorkArea.name, WorkArea);
  Vue.component(VueDragResize.name, VueDragResize);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  install,
  version,
  CurvePath,
  WorkArea,
  VueDragResize
};
