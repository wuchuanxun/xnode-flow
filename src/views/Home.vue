<template>
  <div>
    <button @click="LinkEnable=true;">link</button>
    <WorkArea :width="700" :height="700" id="chome">
      <template v-for="(item,index) in nodes">
        <VueDragResize :key="index" :parentW="700" :parentH="700" :parentLimitation="true"
          :name="item.name" :w="200" :h="100" :inlinking="LinkEnable"
          :x="item.positionX" :y="item.positionY" 
          @resizing="$refs.curve.vReloadall()" @dragging="$refs.curve.vReloadall()"
          @dragstop="$refs.curve.vReloadall()" @linkmove="linkmove"
          @linkend="linkend" @linkNodeAreaIn="Destnodein" @linkNodeAreaOut="Destnodeout"
          @delete="removeNode(index)"
          >
          <div style="width:100%">
            <h3>Hello World!</h3>
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
            positionY: 60,
          },
          {
            name: 'node2',
            positionX: 100,
            positionY: 200,
          },
          {
            name: 'node3',
            positionX: 400,
            positionY: 200,
          },
          {
            name: 'node4',
            positionX: 300,
            positionY: 400,
          }],
          paths:[],
          vpath:undefined
      }
  },

  methods: {
      removeNode(index){
        let rnode=this.nodes.splice(index,1)[0];
        for (let index = this.paths.length-1; index > -1; index--) {
          if(this.paths[index].startNode==rnode.name || this.paths[index].endNode==rnode.name){
            this.paths.splice(index,1);
          }          
        }
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
