import component from "./src/WorkArea.vue";

component.install=(Vue)=>{
  Vue.component(component.name,component);
} 

export default component;