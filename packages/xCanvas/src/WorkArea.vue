<template>
  <div :class="classes" :style="areaStyles" @contextmenu="mouseMenu">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" :width="width" :height="height" :id="id">
      <g transform="translate(0,0) scale(1,1)">
        <slot></slot>
      </g>
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
      default: 0
    },
    height: {
      type: [String, Number],
      default: 0
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
      style.minWidth = `${this.width}px`
      style.minHeight = `${this.height}px`
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
