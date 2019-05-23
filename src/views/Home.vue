<template>
  <div>
    <button @click="LinkEnable=true;">link</button>
    <WorkArea :width="700" :height="700" id="chome">
      <template v-for="(item,index) in nodes">
        <VueDragResize :key="index" :parentW="700" :parentH="700" :parentLimitation="true"
          :name="item.name" :w="200" :h="200" :inlinking="LinkEnable"
          :x="item.positionX" :y="item.positionY" 
          @resizing="resize" @dragging="resize"
          @v-on:dragstop="updateCompleted" @linkmove="linkmove"
          @linkend="linkend" @linkNodeAreaIn="Destnodein" @linkNodeAreaOut="Destnodeout"
          >
          <div style="width:100%">
            <h3>Hello World!</h3>
            <p> item:{{index}} </p>
            <p> {{item.name}} </p>
          </div>
        </VueDragResize>
      </template>
      <CurvePath areaid="chome" :paths="paths" ref="curve"></CurvePath>
    </WorkArea>
  </div>
</template>

<script>
// @ is an alias to /src
import CurvePath from "../components/xPath/CurvePath.vue";
import WorkArea from '@/components/xCanvas/WorkArea.vue'
import VueDragResize from '@/components/DragResize/DragResize.vue'
import { constants } from 'crypto';

export default {
  name: 'home',
  components: {
    CurvePath,
    WorkArea,
    VueDragResize
  },
  data() {
      return {
          LinkEnable:false,
          LinkNode1Found:false,
          LinkNode2Found:false,
          nodes: [{
            name: 'node1',
            positionX: 300,
            positionY: 0,
          },
          {
            name: 'node2',
            positionX: 300,
            positionY: 300,
          }],
          paths:[],
          vpath:undefined
      }
  },

  methods: {
      resize(val) {
        console.log(val.rect)
        this.$refs.curve.vReloadall()
      },
      updateCompleted(){
        this.$refs.curve.vReloadall()
      },
      linkmove(val){
        this.LinkNode1Found=true;
        if(this.LinkNode2Found){
          return;
        }
        this.vpath={
          dotted: true,
          ptype: 'Q',
          startNode: val.source,
          Txy: val
        }
        this.$refs.curve.virtualLoad(this.vpath);
      },
      linkend(val){
        this.$refs.curve.virtualLoad(undefined);
        if(this.LinkNode2Found){
          this.paths.push(this.vpath);
          //this.$refs.curve.vReloadall()
          this.vpath={};
        }
        this.LinkNode1Found=false;
        this.LinkNode2Found=false;
        this.LinkEnable=false;
      },
      Destnodein(val){
        if(this.LinkNode1Found){
          this.LinkNode2Found=true;
          this.vpath.endNode=val;
          this.$refs.curve.virtualLoad(this.vpath);
        }
      },
      Destnodeout(val){
        this.LinkNode2Found=false;
      }
  }
}
</script>
