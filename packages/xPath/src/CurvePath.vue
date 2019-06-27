<template>
  <g ref="gss">
    <template v-if="clinks.length > 0">
      <template v-for="(item,index) in clinks">
        <t-line :key="index" :portData="item" 
          @selected="SetSelectState(index,true)"
          @unselected="SetSelectState(index,false)"
          @delete="$emit('delete',index)">
        </t-line>
      </template>
    </template>
    <t-line v-if="vpath" :portData="vpath" >
    </t-line>
  </g>
</template>
<script>
import TLine from './tline.vue'

export default {
  components: {TLine},
  name: 'xcurve-path',
  props: {
    paths: {
      type: Array
    },
    areaid: [String, Number]
  },
  data () {
    return {
      clinks: [],
      vpath:undefined
    }
  },
  watch: {
    paths (newData, oldData) {
      this.vReloadall()
    }
  },
  mounted: function () {
    this.vReloadall()
  },
  methods: {
    SetSelectState(index,value){
      this.paths[index].IsSelected=value;
      this.$emit(value? 'activated':'deactivated');
    },
    vReloadall () {
      let me = this
      this.clinks = []
      this.paths.forEach((o) => {
        let vstart = document.getElementById('xnode-'+o.startNode)
        let vend = document.getElementById('xnode-'+o.endNode)
        if (vend && vstart) {
          let obj = me.computeXY(vstart, vend);
          obj.dotted = o.dotted;
          obj.ptype = o.ptype;
          obj.IsSelected=o.IsSelected;
          me.clinks.push(obj);
        }
      })
    },
    virtualLoad(vpath){
      if(vpath){
        if(vpath.endNode){
          let vstart = document.getElementById('xnode-'+vpath.startNode)
          let vend = document.getElementById('xnode-'+vpath.endNode)
          if (vend && vstart) {
            let obj = this.computeXY(vstart, vend)
            obj.dotted = vpath.dotted
            obj.ptype = vpath.ptype
            this.vpath = obj;
          }
        }else{
          let vstart = document.getElementById('xnode-'+vpath.startNode)
          let area = document.getElementById(this.areaid)
          let sbox=vstart.getBoundingClientRect();
          vpath.Mxy= {
            x: sbox.x+sbox.width/2 - area.getBoundingClientRect().left,
            y: sbox.y+sbox.height - area.getBoundingClientRect().top
          };
          vpath.Txy={
            x:vpath.Txy.x - area.getBoundingClientRect().left,
            y:vpath.Txy.y - area.getBoundingClientRect().top
          };
          this.vpath=vpath;
        }
      }else{
        this.vpath=undefined;
      }
    },
    computeXY (vstart, vend) {
      let area = document.getElementById(this.areaid)
      let sbox=vstart.getBoundingClientRect();
      let ebox=vend.getBoundingClientRect();
      let obj = {
        Mxy: {
          x: sbox.x+sbox.width/2 - area.getBoundingClientRect().left,
          y: sbox.y+sbox.height - area.getBoundingClientRect().top
        },
        Txy: {
          x: ebox.x+ebox.width/2 - area.getBoundingClientRect().left,
          y: ebox.y - area.getBoundingClientRect().top
        }
      }
      return obj
    }
  }
}
</script>
