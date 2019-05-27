import component from "./src/CurvePath.vue";

component.install=(Vue)=>{
  Vue.component(component.name,component);
} 

export default component;