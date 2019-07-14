<template>
  <g :transform="'translate('+left+','+top+')'" style="margin:10px;">
    <foreignObject :height="height" :width="width">
      <div class="vdr" :style="style"
        :id="'xnode-'+name" ref="Area"
        :class="active&&(!inlinking)? 'active' : 'inactive'"
        @mousedown="bodyDown($event)"
        @dblclick="$emit('dblclick')"
        @touchstart="bodyDown($event)"
        @touchend="up($event)"
        @mouseenter="bodyEnter"
        @mouseleave="bodyLeave">
        <div :class="['vdr-content-wrap',`shape-${shape}`]">
          <div v-show="hovered&&inlinking">
            <div v-for="(item,index) in inMode" :key="index" class="linkdot" :style="{
              position:'absolute',
              top:'0px',
              left:item
            }"></div>
            <div v-for="(item,index) in outMode" :key="10+index" class="linkdot" :style="{
              position:'absolute',
              bottom:'0px',
              left:item
            }"></div>
          </div>
        </div>
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