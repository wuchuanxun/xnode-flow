<template>
  <div id="app">
    <button @click="LinkEnable=true;">link</button>
    <button @click="activeall">ac</button>
    <xwork-area :width="700" :height="700" id="chome" cursor="copy">
      <template v-for="(item,index) in nodes">
        <xdrag-resize :key="index" :parentW="700" :parentH="700" :parentLimitation="true"
          :name="item.name" :w="200" :h="100" :inlinking="LinkEnable"
          :x="item.positionX" :y="item.positionY" :isActive="item.IsSelected"
          :shape="item.shape" :inMode="item.inMode" :scale="0.9"
          @activated="item.IsSelected=true" @deactivated="item.IsSelected=false"
          @resizing="$refs.curve.vReloadall()" @dragging="$refs.curve.vReloadall()"
          @dragstop="$refs.curve.vReloadall()" @linkmove="linkmove" @dblclick="dbclickHandler(item.name)"
          @linkend="linkend" @linkNodeAreaIn="Destnodein" @linkNodeAreaOut="Destnodeout"
          @delete="removeNode(index)"
          >
          <div style="width:100%">
            <h3>Hello World!</h3>
            <p> {{item.name}} </p>
          </div>
        </xdrag-resize>
      </template>
      <xcurve-path areaid="chome" :paths="paths" ref="curve"
        @delete="removeLink"></xcurve-path>
    </xwork-area>
  </div>
</template>

<script>

export default {
  data() {
      return {
          LinkEnable:false,
          LinkNode1Found:false,
          LinkNode2Found:false,
          nodes: [{
            name: 'node1',
            positionX: 300,
            positionY: 60,
            shape:'elipse',
            inMode:['50%'],
          },
          {
            name: 'node2',
            positionX: 100,
            positionY: 200,
            inMode:['50%'],
            shape:'diamond'
          },
          {
            name: 'node3',
            positionX: 400,
            positionY: 200,
            inMode:['30%','70%'],
            shape:'rect'
          },
          {
            name: 'node4',
            positionX: 300,
            positionY: 400,
            inMode:['50%'],
            shape:'elipse'
          }],
          paths:[],
          vpath:undefined
      }
  },

  methods: {
      removeNode(index){
        let rnode=this.nodes.splice(index,1)[0];
        console.log(rnode.IsSelected);
        for (let index = this.paths.length-1; index > -1; index--) {
          if(this.paths[index].startNode==rnode.name || this.paths[index].endNode==rnode.name){
            this.paths.splice(index,1);
          }          
        }
      },
      dbclickHandler(val){
        alert(val);
      },
      activeall(){
        this.nodes.forEach(ele=>{
          this.$set(ele,'IsSelected',true);
        })
      },
      removeLink(index){
        this.paths.splice(index,1);
      },
      linkmove(val){
        if(this.LinkNode2Found){
          return;
        }
        if(this.LinkNode1Found){
          val.pctg=this.vpath.Pstart;
        }
        this.vpath={
          dotted: false,
          ptype: 'Q',
          startNode: val.source,
          Pstart:val.pctg,
          Txy: val
        };
        this.LinkNode1Found=true;
        this.$refs.curve.virtualLoad(this.vpath);
      },
      linkend(){
        this.$refs.curve.virtualLoad(undefined);
        if(this.LinkNode2Found){
          this.vpath.IsSelected=false;
          this.paths.push(this.vpath);
          //this.$refs.curve.vReloadall()
          this.vpath={};
        }
        this.LinkNode1Found=false;
        this.LinkNode2Found=false;
        this.LinkEnable=false;
      },
      Destnodein(val,pctg){
        if(this.vpath && this.vpath.startNode==val){
          return;
        }
        if(this.LinkNode1Found){
          this.LinkNode2Found=true;
          this.vpath.endNode=val;
          this.vpath.Pend=pctg;
          this.$refs.curve.virtualLoad(this.vpath);
        }
      },
      Destnodeout(){
        this.LinkNode2Found=false;
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
