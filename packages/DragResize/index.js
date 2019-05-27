import component from "./src/DragResize.vue";

component.install=(Vue)=>{
  Vue.component(component.name,component);
} 

export default component;