<template>
  <g :class="{'task-tline':true,active:selected}">
    <path :class="conWrapCls" :d="drawCurvePath(portData.Mxy, portData.Txy)" marker-end="url(#markerArrow)">
    </path>
    <path :class="conCls" :d="lpath" @mousedown="bodyClick">
    </path>
  </g>
</template>
<script>
import Line from './utils/line.js'
const prefixCls = 'task-tline'

export default {
  name: 'TLine',
  data () {
    return {
      lpath: 'M0 0 Q 0 0, 0 0 T 0 0',
      selected:false
    }
  },
  props: {
    portData: {
      IsSelected:{
        type:Boolean,
        default:false
      },
      ptype: {
        type: [String, Number],
        default: 'Q'
      },
      dotted: {
        type: [String, Boolean],
        default: false
      },
      Mxy: {
        x: [String, Number],
        y: [String, Number]
      },
      Txy: {
        x: [String, Number],
        y: [String, Number]
      }
    }
  },
  computed: {
    conCls () {
      return [
        `${prefixCls}-con`
      ]
    },
    conWrapCls () {
      let me = this
      return [
        `${prefixCls}-con-wrap`,
        me.portData.dotted ? `${prefixCls}-dotted` : ``
      ]
    },
  },
  methods: {
    drawCurvePath (Mxy, Txy) {
      if (Mxy && Txy) {
        this.lpath = Line.drawCurvePath(Mxy, Txy, this.portData.ptype)
      }
      return this.lpath
    },
    bodyClick(ev){
      this.selected=true;
      this.$emit("selected")
      ev.stopPropagation();
      ev.preventDefault();
    },
    click(ev){
      if(this.selected){
        this.selected=false;
        this.$emit("unselected")
        ev.stopPropagation();
        ev.preventDefault();
      }
    },
    delete(ev){
      if(this.selected && ev.keyCode=="46"){
        this.$emit('delete');
      }
    }
  },
  created(){
    this.selected=this.portData.IsSelected;
  },
  mounted(){
    document.documentElement.addEventListener('mousedown',this.click,false);
    document.documentElement.addEventListener('keyup',this.delete,false);
  },
  beforeDestroy(){
    document.documentElement.removeEventListener('mousedown',this.click);
    document.documentElement.addEventListener('keyup',this.delete,false);
  }
}
</script>
