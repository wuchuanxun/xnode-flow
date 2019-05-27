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