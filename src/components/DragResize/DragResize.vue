<template>
  <g :transform="'translate('+left+','+top+')'" style="margin:10px;">
    <foreignObject :height="height" :width="width">
      <div class="vdr" :style="style"
        :id="'xnode-'+name"
        :class="active&&(!inlinking)? 'active' : 'inactive'"
        @mousedown="bodyDown($event)"
        @touchstart="bodyDown($event)"
        @touchend="up($event)"
        @mouseenter="bodyEnter()"
        @mouseleave="bodyLeave()">
        <slot></slot>
        <div v-show="isResizable&active&(!inlinking)">
          <div
            v-for="(stick,index) in sticks"
            :key="index"
            :class="['vdr-stick-' + stick,'vdr-stick']"
            @mousedown.stop.prevent="stickDown(stick, $event)"
            @touchstart.stop.prevent="stickDown(stick, $event)"
            :style="vdrStick(stick)">
          </div>
        </div>
      </div>
    </foreignObject>
  </g>
</template>

<script src="./DragResize.js"></script>

<style lang="scss" scoped>
.vdr {
  box-sizing: border-box;
  display: flex;
  align-content: center;
  align-items: center;
  border: 1px solid #d6d6d6;
}

.vdr.active{
  border: 1px dashed #d6d6d6;
}

.vdr-stick {
  box-sizing:border-box;
  position: absolute;
  margin: 4px;
  font-size: 1px;
  background: #ffffff;
  border: 1px solid #6c6c6c;
  box-shadow: 0 0 2px #bbb;
}

.vdr-stick-tl, .vdr-stick-br {
    cursor: nwse-resize;
}

.vdr-stick-tm, .vdr-stick-bm {
    left: 50%;
    cursor: ns-resize;
}

.vdr-stick-tr, .vdr-stick-bl {
    cursor: nesw-resize;
}

.vdr-stick-ml, .vdr-stick-mr {
    top: 50%;
    cursor: ew-resize;
}

.vdr-stick.not-resizable{
    display: none;
}
</style>