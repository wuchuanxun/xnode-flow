<template>
  <div :class="classes" :style="areaStyles" @contextmenu="mouseMenu">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" :width="width" :height="height" :id="id" class="dropzone">
      <g transform="translate(0,0) scale(1,1)">
        <slot></slot>
      </g>
      <defs>
        <marker id="markerArrow" markerWidth="10" markerHeight="10" refx="0" refy="5" orient="90" overflow="visible" markerUnits="strokeWidth">
          <path d="M0,0 L0,10 L10,5 z" style="fill: #61a8e0;" transform="translate(-6,-5) scale(1,1)"/>
        </marker>
      </defs>
    </svg>
  </div>
</template>

<script>
const prefixCls = 'task-work-area'

export default {
  name: 'xwork-area',
  props: {
    width: {
      type: [String, Number],
      default: '100%'
    },
    height: {
      type: [String, Number],
      default: "100vh"
    },
    cursor:{
      type:String,
      default:'default'
    },
    id: {
      type: [String, Number]
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`
      ]
    },
    areaStyles () {
      let style = {}
      style.minWidth = `${this.width}px`;
      style.minHeight = `${this.height}px`;
      style.cursor=this.cursor;
      return style
    }
  },
  methods: {
    mouseMenu: function (event) {
      this.$emit('on-mouse', event, this.id)
    }
  }
}
</script>
