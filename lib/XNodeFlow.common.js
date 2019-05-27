module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "3d62":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DragResize_vue_vue_type_style_index_0_id_19cd4b1d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b6f0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DragResize_vue_vue_type_style_index_0_id_19cd4b1d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DragResize_vue_vue_type_style_index_0_id_19cd4b1d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DragResize_vue_vue_type_style_index_0_id_19cd4b1d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b6f0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30389bc2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/xPath/src/CurvePath.vue?vue&type=template&id=e2583c8e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{ref:"gss"},[(_vm.clinks.length > 0)?[_vm._l((_vm.clinks),function(item,index){return [_c('t-line',{key:index,attrs:{"portData":item}})]})]:_vm._e(),(_vm.vpath)?_c('t-line',{attrs:{"portData":_vm.vpath}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/xPath/src/CurvePath.vue?vue&type=template&id=e2583c8e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30389bc2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/xPath/src/tline.vue?vue&type=template&id=796c089b&
var tlinevue_type_template_id_796c089b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{class:_vm.classes},[_c('path',{class:_vm.conWrapCls,attrs:{"d":_vm.drawCurvePath(_vm.portData.Mxy, _vm.portData.Txy)}}),_c('path',{class:_vm.conCls,attrs:{"d":_vm.lpath}})])}
var tlinevue_type_template_id_796c089b_staticRenderFns = []


// CONCATENATED MODULE: ./packages/xPath/src/tline.vue?vue&type=template&id=796c089b&

// CONCATENATED MODULE: ./packages/xPath/src/utils/line.js
function XYObject (x, y) {
  this.x = x
  this.y = y
}

/* harmony default export */ var line = ({
  /**
   * 计算二次贝塞尔曲线 Q线
   * @param Mxy 起点坐标
   * @param Txy 结束坐标
   * @returns {string} 'M xy Q xy xy Txy'
   */
  calculatedCurvePathQ (Mxy = {}, Txy = {}) {
    let mtx = Math.floor((Txy.x - Mxy.x) / 4)
    let mty = Math.floor((Txy.y - Mxy.y) / 4)

    if (mty < 0 && mtx > 10) {
      if (mty > -10) {
        this.Q1xy = new XYObject(Mxy.x + 10, Mxy.y + 10)
      } else {
        this.Q1xy = new XYObject(Mxy.x + 10, Mxy.y + 4 * Math.abs(mty))
      }
      this.Q2xy = new XYObject(Mxy.x + 2 * mtx, Mxy.y + 2 * mty)
    } else {
      this.Q1xy = new XYObject(Mxy.x, Mxy.y + 2 * mty)
      this.Q2xy = new XYObject(Mxy.x + 2 * mtx, Mxy.y + 2 * mty)
    }

    let path = 'M' + Mxy.x + ' ' + Mxy.y + ' Q ' + this.Q1xy.x + ' ' + this.Q1xy.y + ', ' + this.Q2xy.x + ' ' + this.Q2xy.y + ' T ' + Txy.x + ' ' + Txy.y
    return path
  },

  /**
   * 计算折线 L线
   * @param Mxy 起点坐标
   * @param Txy 结束坐标
   * @returns {string} 'M xy Q xy xy Txy'
   */
  calculatedCurvePathL (Mxy = {}, Txy = {}) {
    let mtx = Math.floor((Txy.x - Mxy.x) / 2)
    let mty = Math.floor((Txy.y - Mxy.y) / 2)

    if (mty > 0) {
      this.L1xy = new XYObject(Mxy.x, Mxy.y + mty)
      this.L2xy = new XYObject(Txy.x, Mxy.y + mty)
      this.path = 'M' + Mxy.x + ' ' + Mxy.y + ' L ' + this.L1xy.x + ' ' + this.L1xy.y + ', ' + this.L2xy.x + ' ' + this.L2xy.y + ' T ' + Txy.x + ' ' + Txy.y
    } else {
      this.L1xy = new XYObject(Mxy.x, Mxy.y + 30)
      this.L2xy = new XYObject(Mxy.x + mtx, Mxy.y + 30)
      this.L3xy = new XYObject(Mxy.x + mtx, Txy.y - 30)
      this.L4xy = new XYObject(Txy.x, Txy.y - 30)
      this.path = 'M' + Mxy.x + ' ' + Mxy.y + ' L ' + this.L1xy.x + ' ' + this.L1xy.y + ', ' + this.L2xy.x + ' ' + this.L2xy.y + ', ' + this.L3xy.x + ' ' + this.L3xy.y + ', ' + this.L4xy.x + ' ' + this.L4xy.y + ' T ' + Txy.x + ' ' + Txy.y
    }
    return this.path
  },
  
  /**
   * 获取曲线路径
   * @param Mxy 起点坐标
   * @param Txy 结束坐标
   * @returns {string} 'M xy Q xy xy Txy'
   */
  drawCurvePath (Mxy = {}, Txy = {}, type = 'Q') {
    if (type === 'Q') {
      return this.calculatedCurvePathQ(Mxy, Txy)
    } else if (type === 'L') {
      return this.calculatedCurvePathL(Mxy, Txy)
    }
  }
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/xPath/src/tline.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


const prefixCls = 'task-tline'

/* harmony default export */ var tlinevue_type_script_lang_js_ = ({
  name: 'TLine',
  data () {
    return {
      lpath: 'M0 0 Q 0 0, 0 0 T 0 0'
    }
  },
  props: {
    portData: {
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
    classes () {
      return [
        `${prefixCls}`
      ]
    },
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
    }
  },
  methods: {
    drawCurvePath (Mxy, Txy) {
      if (Mxy && Txy) {
        this.lpath = line.drawCurvePath(Mxy, Txy, this.portData.ptype)
      }
      return this.lpath
    }
  }
});

// CONCATENATED MODULE: ./packages/xPath/src/tline.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tlinevue_type_script_lang_js_ = (tlinevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/xPath/src/tline.vue





/* normalize component */

var component = normalizeComponent(
  src_tlinevue_type_script_lang_js_,
  tlinevue_type_template_id_796c089b_render,
  tlinevue_type_template_id_796c089b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tline = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/xPath/src/CurvePath.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var CurvePathvue_type_script_lang_js_ = ({
  components: {TLine: tline},
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
    vReloadall () {
      let me = this
      this.clinks = []
      this.paths.forEach((o) => {
        let vstart = document.getElementById('xnode-'+o.startNode)
        let vend = document.getElementById('xnode-'+o.endNode)
        if (vend && vstart) {
          let obj = me.computeXY(vstart, vend)
          obj.dotted = o.dotted
          obj.ptype = o.ptype
          me.clinks.push(obj)
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
});

// CONCATENATED MODULE: ./packages/xPath/src/CurvePath.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_CurvePathvue_type_script_lang_js_ = (CurvePathvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/xPath/src/CurvePath.vue





/* normalize component */

var CurvePath_component = normalizeComponent(
  src_CurvePathvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CurvePath = (CurvePath_component.exports);
// CONCATENATED MODULE: ./packages/xPath/index.js


CurvePath.install=(Vue)=>{
  Vue.component(CurvePath.name,CurvePath);
} 

/* harmony default export */ var xPath = (CurvePath);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30389bc2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/xCanvas/src/WorkArea.vue?vue&type=template&id=3749c9e3&
var WorkAreavue_type_template_id_3749c9e3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes,style:(_vm.areaStyles),on:{"contextmenu":_vm.mouseMenu}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","version":"1.1","width":_vm.width,"height":_vm.height,"id":_vm.id}},[_c('g',{attrs:{"transform":"translate(0,0) scale(1,1)"}},[_vm._t("default")],2)])])}
var WorkAreavue_type_template_id_3749c9e3_staticRenderFns = []


// CONCATENATED MODULE: ./packages/xCanvas/src/WorkArea.vue?vue&type=template&id=3749c9e3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/xCanvas/src/WorkArea.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

const WorkAreavue_type_script_lang_js_prefixCls = 'task-work-area'

/* harmony default export */ var WorkAreavue_type_script_lang_js_ = ({
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
        `${WorkAreavue_type_script_lang_js_prefixCls}`
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
});

// CONCATENATED MODULE: ./packages/xCanvas/src/WorkArea.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_WorkAreavue_type_script_lang_js_ = (WorkAreavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/xCanvas/src/WorkArea.vue





/* normalize component */

var WorkArea_component = normalizeComponent(
  src_WorkAreavue_type_script_lang_js_,
  WorkAreavue_type_template_id_3749c9e3_render,
  WorkAreavue_type_template_id_3749c9e3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WorkArea = (WorkArea_component.exports);
// CONCATENATED MODULE: ./packages/xCanvas/index.js


WorkArea.install=(Vue)=>{
  Vue.component(WorkArea.name,WorkArea);
} 

/* harmony default export */ var xCanvas = (WorkArea);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30389bc2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/DragResize/src/DragResize.vue?vue&type=template&id=19cd4b1d&scoped=true&
var DragResizevue_type_template_id_19cd4b1d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{staticStyle:{"margin":"10px"},attrs:{"transform":'translate('+_vm.left+','+_vm.top+')'}},[_c('foreignObject',{attrs:{"height":_vm.height,"width":_vm.width}},[_c('div',{staticClass:"vdr",class:_vm.active&&(!_vm.inlinking)? 'active' : 'inactive',style:(_vm.style),attrs:{"id":'xnode-'+_vm.name},on:{"mousedown":function($event){return _vm.bodyDown($event)},"touchstart":function($event){return _vm.bodyDown($event)},"touchend":function($event){return _vm.up($event)},"mouseenter":function($event){return _vm.bodyEnter()},"mouseleave":function($event){return _vm.bodyLeave()}}},[_vm._t("default"),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isResizable&_vm.active&(!_vm.inlinking)),expression:"isResizable&active&(!inlinking)"}]},_vm._l((_vm.sticks),function(stick,index){return _c('div',{key:index,class:['vdr-stick-' + stick,'vdr-stick'],style:(_vm.vdrStick(stick)),on:{"mousedown":function($event){$event.stopPropagation();$event.preventDefault();return _vm.stickDown(stick, $event)},"touchstart":function($event){$event.stopPropagation();$event.preventDefault();return _vm.stickDown(stick, $event)}}})}),0)],2)])],1)}
var DragResizevue_type_template_id_19cd4b1d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/DragResize/src/DragResize.vue?vue&type=template&id=19cd4b1d&scoped=true&

// CONCATENATED MODULE: ./node_modules/eslint-loader??ref--13-0!./packages/DragResize/src/DragResize.js?vue&type=script&lang=js&
const stickSize = 8;
const styleMapping = {
  y: {
    t: 'top',
    m: 'marginTop',
    b: 'bottom',
  },
  x: {
    l: 'left',
    m: 'marginLeft',
    r: 'right',
  }
};

/* harmony default export */ var DragResizevue_type_script_lang_js_ = ({
    name: 'xdrag-resize',
    props: {
        inlinking:{
            type:Boolean,default:false,
        },
        name:{
            type:String,default:"",
        },
        parentScaleX: {
            type: Number, default: 1,
        },
        parentScaleY: {
            type: Number, default: 1,
        },
        isActive: {
            type: Boolean, default: false
        },
        preventActiveBehavior: {
            type: Boolean, default: false
        },
        isDraggable: {
            type: Boolean, default: true
        },
        isResizable: {
            type: Boolean, default: true
        },
        aspectRatio: {
            type: Boolean, default: false
        },
        parentLimitation: {
            type: Boolean, default: false
        },
        snapToGrid: {
            type: Boolean, default: true
        },
        gridX: {
            type: Number,
            default: 10,
            validator: function (val) {
                return val > 0
            }
        },
        gridY: {
            type: Number,
            default: 10,
            validator: function (val) {
                return val > 0
            }
        },
        parentW: {
            type: Number,
            default: 0,
            validator: function (val) {
                return val >= 0
            }
        },
        parentH: {
            type: Number,
            default: 0,
            validator: function (val) {
                return val >= 0
            }
        },
        w: {
            type: Number,
            default: 100,
            validator: function (val) {
                return val > 0
            }
        },
        h: {
            type: Number,
            default: 100,
            validator: function (val) {
                return val > 0
            }
        },
        minw: {
            type: Number,
            default: 50,
            validator: function (val) {
                return val > 0
            }
        },
        minh: {
            type: Number,
            default: 50,
            validator: function (val) {
                return val > 0
            }
        },
        x: {
            type: Number,
            default: 0,
            validator: function (val) {
                return typeof val === 'number'
            }
        },
        y: {
            type: Number,
            default: 0,
            validator: function (val) {
                return typeof val === 'number'
            }
        },
        z: {
            type: [String, Number],
            default: 'auto',
            validator: function (val) {
                let valid = (typeof val === 'string') ? val === 'auto' : val >= 0;
                return valid
            }
        },
        dragHandle: {
            type: String,
            default: null
        },
        dragCancel: {
            type: String,
            default: null
        },
        sticks: {
            type: Array,
            default: function () {
                return ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']
            }
        },
        axis: {
            type: String,
            default: 'both',
            validator: function (val) {
                return ['x', 'y', 'both', 'none'].indexOf(val) !== -1
            }
        }
    },

    data: function () {
        return {
            linking:false,
            active: this.isActive,
            rawWidth: this.w,
            rawHeight: this.h,
            rawLeft: this.x,
            rawTop: this.y,
            rawRight: null,
            rawBottom: null,
            zIndex: this.z,
            aspectFactor: this.w / this.h,
            parentWidth: null,
            parentHeight: null,
            left: this.x,
            top: this.y,
            right: null,
            bottom: null,
            minWidth: this.minw,
            minHeight: this.minh
        }
    },

    created: function () {
        this.stickDrag = false;
        this.bodyDrag = false;
        this.stickAxis = null;
        this.stickStartPos = {mouseX: 0, mouseY: 0, x: 0, y: 0, w: 0, h: 0};
        this.limits = {
            minLeft: null,
            maxLeft: null,
            minRight: null,
            maxRight: null,
            minTop: null,
            maxTop: null,
            minBottom: null,
            maxBottom: null
        };

        this.currentStick = [];
    },

    mounted: function () {
        this.parentElement = this.$el.parentNode;
        this.parentWidth = this.parentW ? this.parentW : this.parentElement.clientWidth;
        this.parentHeight = this.parentH ? this.parentH : this.parentElement.clientHeight;

        this.rawRight = this.parentWidth - this.rawWidth - this.rawLeft;
        this.rawBottom = this.parentHeight - this.rawHeight - this.rawTop;

        document.documentElement.addEventListener('keyup',this.keyup);
        document.documentElement.addEventListener('mousemove', this.move);
        document.documentElement.addEventListener('mouseup', this.up);
        document.documentElement.addEventListener('mouseleave', this.up);

        document.documentElement.addEventListener('mousedown', this.deselect);

        document.documentElement.addEventListener('touchmove', this.move, true);
        document.documentElement.addEventListener('touchend touchcancel', this.up, true);
        document.documentElement.addEventListener('touchstart', this.up, true);

        if (this.dragHandle) {
            let dragHandles = Array.prototype.slice.call(this.$el.querySelectorAll(this.dragHandle));
            for (let i in dragHandles) {
                dragHandles[i].setAttribute('data-drag-handle', this._uid);
            }
        }

        if (this.dragCancel) {
            let cancelHandles = Array.prototype.slice.call(this.$el.querySelectorAll(this.dragCancel));
            for (let i in cancelHandles) {
                cancelHandles[i].setAttribute('data-drag-cancel', this._uid);
            }
        }
    },

    beforeDestroy: function () {
        document.documentElement.removeEventListener('keyup',this.keyup);
        document.documentElement.removeEventListener('mousemove', this.move);
        document.documentElement.removeEventListener('mouseup', this.up);
        document.documentElement.removeEventListener('mouseleave', this.up);

        document.documentElement.removeEventListener('mousedown', this.deselect);

        document.documentElement.removeEventListener('touchmove', this.move, true);
        document.documentElement.removeEventListener('touchend touchcancel', this.up, true);
        document.documentElement.removeEventListener('touchstart', this.up, true);
    },

    methods: {
        keyup(ev){
            if(this.active && ev.keyCode=="46"){
                this.$emit('delete');
            }
        },

        deselect() {
            if (this.preventActiveBehavior) {
                return
            }
            this.active = false
        },

        move(ev) { 
            if (!this.stickDrag && !this.bodyDrag) {
                return
            }
            if(this.inlinking){
                this.linking=true;
                this.$emit('linkmove',{
                    x:ev.clientX,
                    y:ev.clientY,
                    source:this.name
                });
                return;
            }
            ev.stopPropagation();

            if (this.stickDrag) {
                this.stickMove(ev);
            }
            if (this.bodyDrag) {
                this.bodyMove(ev)
            }
        },

        up(ev) {
            if(this.inlinking){
                this.bodyDrag = false;
                this.stickDrag = false;
                if(this.linking){
                    this.$emit('linkend',this.name);
                    this.linking=false;
                }
                return;
            }
            if (this.stickDrag) {
                this.stickUp(ev);
            }
            if (this.bodyDrag) {
                this.bodyUp(ev)
            }
        },

        bodyEnter(){
            if(this.inlinking){
                this.$emit('linkNodeAreaIn',this.name);
            }
        },

        bodyLeave(){
            if(this.inlinking){
                this.$emit('linkNodeAreaOut',this.name);
            }
        },

        bodyDown: function (ev) {
            let target = ev.target || ev.srcElement;

            if (!this.preventActiveBehavior) {
                this.active = true;
            }

            if (ev.button && ev.button !== 0) {
                return
            }

            this.$emit('clicked', ev);

            if (!this.isDraggable || !this.active) {
                return
            }

            if (this.dragHandle && target.getAttribute('data-drag-handle') !== this._uid.toString()) {
                return
            }

            if (this.dragCancel && target.getAttribute('data-drag-cancel') === this._uid.toString()) {
                return
            }

            ev.stopPropagation();
            ev.preventDefault();

            this.bodyDrag = true;

            this.stickStartPos.mouseX = typeof ev.pageX !== 'undefined' ? ev.pageX : ev.touches[0].pageX;
            this.stickStartPos.mouseY = typeof ev.pageY !== 'undefined' ? ev.pageY : ev.touches[0].pageY;

            this.stickStartPos.left = this.left;
            this.stickStartPos.right = this.right;
            this.stickStartPos.top = this.top;
            this.stickStartPos.bottom = this.bottom;

            if (this.parentLimitation) {
                this.limits = this.calcDragLimitation();
            }
        },

        calcDragLimitation() {
            const parentWidth = this.parentWidth;
            const parentHeight = this.parentHeight;

            return {
                minLeft: 0,
                maxLeft: parentWidth - this.width,
                minRight: 0,
                maxRight: parentWidth - this.width,
                minTop: 0,
                maxTop: parentHeight - this.height,
                minBottom: 0,
                maxBottom: parentHeight - this.height
            }
        },

        bodyMove(ev) {
            const stickStartPos = this.stickStartPos;
            const parentWidth = this.parentWidth;
            const parentHeight = this.parentHeight;
            const gridX = this.gridX;
            const gridY = this.gridY;
            const width = this.width;
            const height = this.height;
            const pageX = typeof ev.pageX !== 'undefined' ? ev.pageX : ev.touches[0].pageX;
            const pageY = typeof ev.pageY !== 'undefined' ? ev.pageY : ev.touches[0].pageY;

            let delta = {
                x: (this.axis !== 'y' && this.axis !== 'none' ? stickStartPos.mouseX - pageX : 0) / this.parentScaleX,
                y: (this.axis !== 'x' && this.axis !== 'none' ? stickStartPos.mouseY - pageY : 0) / this.parentScaleY
            };

            let newTop = stickStartPos.top - delta.y;
            let newBottom = stickStartPos.bottom + delta.y;
            let newLeft = stickStartPos.left - delta.x;
            let newRight = stickStartPos.right + delta.x;

            if (this.snapToGrid) {
                let alignTop = true;
                let alignLeft = true;

                let diffT = newTop - Math.floor(newTop / gridY) * gridY;
                let diffB = (parentHeight - newBottom) - Math.floor((parentHeight - newBottom) / gridY) * gridY;
                let diffL = newLeft - Math.floor(newLeft / gridX) * gridX;
                let diffR = (parentWidth - newRight) - Math.floor((parentWidth - newRight) / gridX) * gridX;

                if (diffT > (gridY / 2)) { diffT = diffT - gridY; }
                if (diffB > (gridY / 2)) { diffB = diffB - gridY; }
                if (diffL > (gridX / 2)) { diffL = diffL - gridX; }
                if (diffR > (gridX / 2)) { diffR = diffR - gridX; }

                if (Math.abs(diffB) < Math.abs(diffT)) { alignTop = false; }
                if (Math.abs(diffR) < Math.abs(diffL)) { alignLeft = false; }

                newTop = newTop - (alignTop ? diffT : diffB);
                newBottom = parentHeight - height - newTop;
                newLeft = newLeft - (alignLeft ? diffL : diffR);
                newRight = parentWidth - width - newLeft;
            }

            this.rawTop = newTop;
            this.rawBottom = newBottom;
            this.rawLeft = newLeft;
            this.rawRight = newRight;
            this.$emit('dragging', {
                'rect':this.rect,
                'name':this.name
            });
        },

        bodyUp() {
            this.bodyDrag = false;
            this.$emit('dragging', {
                'rect':this.rect,
                'name':this.name
            });
            this.$emit('dragstop', {
                'rect':this.rect,
                'name':this.name
            });

            this.stickStartPos = {mouseX: 0, mouseY: 0, x: 0, y: 0, w: 0, h: 0};
            this.limits = {
                minLeft: null,
                maxLeft: null,
                minRight: null,
                maxRight: null,
                minTop: null,
                maxTop: null,
                minBottom: null,
                maxBottom: null
            };
        },

        stickDown: function (stick, ev) {
            if (!this.isResizable || !this.active) {
                return
            }

            this.stickDrag = true;
            this.stickStartPos.mouseX = typeof ev.pageX !== 'undefined' ? ev.pageX : ev.touches[0].pageX;
            this.stickStartPos.mouseY = typeof ev.pageY !== 'undefined' ? ev.pageY : ev.touches[0].pageY;
            this.stickStartPos.left = this.left;
            this.stickStartPos.right = this.right;
            this.stickStartPos.top = this.top;
            this.stickStartPos.bottom = this.bottom;
            this.currentStick = stick.split('');
            this.stickAxis = null;

            switch (this.currentStick[0]) {
                case 'b':
                    this.stickAxis = 'y';
                    break;
                case 't':
                    this.stickAxis = 'y';
                    break;
            }
            switch (this.currentStick[1]) {
                case 'r':
                    this.stickAxis = this.stickAxis === 'y' ? 'xy' : 'x';
                    break;
                case 'l':
                    this.stickAxis = this.stickAxis === 'y' ? 'xy' : 'x';
                    break;
            }


            this.limits = this.calcResizeLimitation();
        },

        calcResizeLimitation() {
            let minw = this.minWidth;
            let minh = this.minHeight;
            const aspectFactor = this.aspectFactor;
            const width = this.width;
            const height = this.height;
            const bottom = this.bottom;
            const top = this.top;
            const left = this.left;
            const right = this.right;
            const stickAxis = this.stickAxis;

            const parentLim = this.parentLimitation ? 0 : null;

            if (this.aspectRatio) {
                if (minw / minh > aspectFactor) {
                    minh = minw / aspectFactor;
                } else {
                    minw = aspectFactor * minh;
                }
            }

            let limits = {
                minLeft: parentLim,
                maxLeft: left + (width - minw),
                minRight: parentLim,
                maxRight: right + (width - minw),
                minTop: parentLim,
                maxTop: top + (height - minh),
                minBottom: parentLim,
                maxBottom: bottom + (height - minh)
            };

            if (this.aspectRatio) {
                const aspectLimits = {
                    minLeft: left - (Math.min(top, bottom) * aspectFactor) * 2,
                    maxLeft: left + ((((height - minh) / 2) * aspectFactor) * 2),

                    minRight: right - (Math.min(top, bottom) * aspectFactor) * 2,
                    maxRight: right + ((((height - minh) / 2) * aspectFactor) * 2),

                    minTop: top - (Math.min(left, right) / aspectFactor) * 2,
                    maxTop: top + ((((width - minw) / 2) / aspectFactor) * 2),

                    minBottom: bottom - (Math.min(left, right) / aspectFactor) * 2,
                    maxBottom: bottom + ((((width - minw) / 2) / aspectFactor) * 2)
                };

                if (stickAxis === 'x') {
                    limits = {
                        minLeft: Math.max(limits.minLeft, aspectLimits.minLeft),
                        maxLeft: Math.min(limits.maxLeft, aspectLimits.maxLeft),
                        minRight: Math.max(limits.minRight, aspectLimits.minRight),
                        maxRight: Math.min(limits.maxRight, aspectLimits.maxRight)
                    }
                } else if (stickAxis === 'y') {
                    limits = {
                        minTop: Math.max(limits.minTop, aspectLimits.minTop),
                        maxTop: Math.min(limits.maxTop, aspectLimits.maxTop),
                        minBottom: Math.max(limits.minBottom, aspectLimits.minBottom),
                        maxBottom: Math.min(limits.maxBottom, aspectLimits.maxBottom)
                    }
                }
            }


            return limits;
        },

        stickMove(ev) {
            const stickStartPos = this.stickStartPos;
            const pageX = typeof ev.pageX !== 'undefined' ? ev.pageX : ev.touches[0].pageX;
            const pageY = typeof ev.pageY !== 'undefined' ? ev.pageY : ev.touches[0].pageY;

            const delta = {
                x: (stickStartPos.mouseX - pageX) / this.parentScaleX,
                y: (stickStartPos.mouseY - pageY) / this.parentScaleY
            };

            let newTop = stickStartPos.top - delta.y;
            let newBottom = stickStartPos.bottom + delta.y;
            let newLeft = stickStartPos.left - delta.x;
            let newRight = stickStartPos.right + delta.x;

            switch (this.currentStick[0]) {
                case 'b':

                    if (this.snapToGrid) {
                        newBottom = this.parentHeight - Math.round((this.parentHeight - newBottom) / this.gridY) * this.gridY;
                    }

                    this.rawBottom = newBottom;
                    break;

                case 't':

                    if (this.snapToGrid) {
                        newTop = Math.round(newTop / this.gridY) * this.gridY;
                    }

                    this.rawTop = newTop;
                    break;
            }

            switch (this.currentStick[1]) {
                case 'r':

                    if (this.snapToGrid) {
                        newRight = this.parentWidth - Math.round((this.parentWidth - newRight) / this.gridX) * this.gridX;
                    }

                    this.rawRight = newRight;
                    break;

                case 'l':

                    if (this.snapToGrid) {
                        newLeft = Math.round(newLeft / this.gridX) * this.gridX;
                    }

                    this.rawLeft = newLeft;
                    break;
            }

            this.$emit('resizing', {
                'rect':this.rect,
                'name':this.name
            });
        },

        stickUp() {
            this.stickDrag = false;
            this.stickStartPos = {
                mouseX: 0,
                mouseY: 0,
                x: 0,
                y: 0,
                w: 0,
                h: 0
            };
            this.limits = {
                minLeft: null,
                maxLeft: null,
                minRight: null,
                maxRight: null,
                minTop: null,
                maxTop: null,
                minBottom: null,
                maxBottom: null
            };
            this.rawTop = this.top;
            this.rawBottom = this.bottom;
            this.rawLeft = this.left;
            this.rawRight = this.right;

            this.stickAxis = null;

            this.$emit('resizing', {
                'rect':this.rect,
                'name':this.name
            });
            this.$emit('resizestop', this.rect);
        },

        aspectRatioCorrection() {
            if (!this.aspectRatio) {
                return
            }

            const bottom = this.bottom;
            const top = this.top;
            const left = this.left;
            const right = this.right;
            const width = this.width;
            const height = this.height;
            const aspectFactor = this.aspectFactor;
            const currentStick = this.currentStick;

            if (width / height > aspectFactor) {
                let newWidth = aspectFactor * height;

                if (currentStick[1] === 'l') {
                    this.left = left + width - newWidth;
                } else {
                    this.right = right + width - newWidth;
                }
            } else {
                let newHeight = width / aspectFactor;

                if (currentStick[0] === 't') {
                    this.top = top + height - newHeight;
                } else {
                    this.bottom = bottom + height - newHeight;
                }
            }
        },
    },

    computed: {
        style() {
            //console.log(this.width);
            return {
                width: (this.width-8) + 'px',
                height: (this.height-8) + 'px',
                zIndex: this.zIndex,
                margin: '4px'
            }
        },

        vdrStick() {
            return (stick) => {
                const stickStyle = {
                    width: `${stickSize / this.parentScaleX}px`,
                    height: `${stickSize / this.parentScaleY}px`,
                };
                stickStyle[styleMapping.y[stick[0]]] = `${stickSize / this.parentScaleX / -2}px`;
                stickStyle[styleMapping.x[stick[1]]] = `${stickSize / this.parentScaleX / -2}px`;
                return stickStyle;
            }
        },

        width() {
            if(this.parentWidth-this.left-this.right>0){
                return this.parentWidth - this.left - this.right;
            }
            return this.rawWidth;
        },

        height() {
            if(this.parentHeight-this.top-this.bottom>0){
                return this.parentHeight - this.top - this.bottom;
            }
            return this.rawHeight;
        },

        rect() {
            return {
                left: Math.round(this.left),
                top: Math.round(this.top),
                width: Math.round(this.width),
                height: Math.round(this.height)
            }
        }
    },

    watch: {
        rawLeft(newLeft) {
            const limits = this.limits;
            const stickAxis = this.stickAxis;
            const aspectFactor = this.aspectFactor;
            const aspectRatio = this.aspectRatio;
            const left = this.left;
            const bottom = this.bottom;
            const top = this.top;

            if (limits.minLeft !== null && newLeft < limits.minLeft) {
                newLeft = limits.minLeft;
            } else if (limits.maxLeft !== null && limits.maxLeft < newLeft) {
                newLeft = limits.maxLeft;
            }

            if (aspectRatio && stickAxis === 'x') {
                const delta = left - newLeft;
                this.rawTop = top - (delta / aspectFactor) / 2;
                this.rawBottom = bottom - (delta / aspectFactor) / 2;
            }

            this.left = newLeft;
        },

        rawRight(newRight) {
            const limits = this.limits;
            const stickAxis = this.stickAxis;
            const aspectFactor = this.aspectFactor;
            const aspectRatio = this.aspectRatio;
            const right = this.right;
            const bottom = this.bottom;
            const top = this.top;

            if (limits.minRight !== null && newRight < limits.minRight) {
                newRight = limits.minRight;
            } else if (limits.maxRight !== null && limits.maxRight < newRight) {
                newRight = limits.maxRight;
            }

            if (aspectRatio && stickAxis === 'x') {
                const delta = right - newRight;
                this.rawTop = top - (delta / aspectFactor) / 2;
                this.rawBottom = bottom - (delta / aspectFactor) / 2;
            }

            this.right = newRight;
        },

        rawTop(newTop) {
            const limits = this.limits;
            const stickAxis = this.stickAxis;
            const aspectFactor = this.aspectFactor;
            const aspectRatio = this.aspectRatio;
            const right = this.right;
            const left = this.left;
            const top = this.top;

            if (limits.minTop !== null && newTop < limits.minTop) {
                newTop = limits.minTop;
            } else if (limits.maxTop !== null && limits.maxTop < newTop) {
                newTop = limits.maxTop;
            }

            if (aspectRatio && stickAxis === 'y') {
                const delta = top - newTop;
                this.rawLeft = left - (delta * aspectFactor) / 2;
                this.rawRight = right - (delta * aspectFactor) / 2;
            }

            this.top = newTop;
        },

        rawBottom(newBottom) {
            const limits = this.limits;
            const stickAxis = this.stickAxis;
            const aspectFactor = this.aspectFactor;
            const aspectRatio = this.aspectRatio;
            const right = this.right;
            const left = this.left;
            const bottom = this.bottom;

            if (limits.minBottom !== null && newBottom < limits.minBottom) {
                newBottom = limits.minBottom;
            } else if (limits.maxBottom !== null && limits.maxBottom < newBottom) {
                newBottom = limits.maxBottom;
            }

            if (aspectRatio && stickAxis === 'y') {
                const delta = bottom - newBottom;
                this.rawLeft = left - (delta * aspectFactor) / 2;
                this.rawRight = right - (delta * aspectFactor) / 2;
            }

            this.bottom = newBottom;
        },

        width() {
            this.aspectRatioCorrection();
        },

        height() {
            this.aspectRatioCorrection();
        },

        active(isActive) {
            if (isActive) {
                this.$emit('activated');
            } else {
                this.$emit('deactivated');
            }
        },

        isActive(val) {
            this.active = val;
        },

        z(val) {
            if (val >= 0 || val === 'auto') {
                this.zIndex = val
            }
        },

        aspectRatio(val) {
            if (val) {
                this.aspectFactor = this.width / this.height;
            }
        },

        minw(val) {
            if (val > 0 && val <= this.width) {
                this.minWidth = val
            }
        },

        minh(val) {
            if (val > 0 && val <= this.height) {
                this.minHeight = val
            }
        },

        x() {
            if (this.stickDrag || this.bodyDrag) {
                return
            }
            if (this.parentLimitation) {
                this.limits = this.calcDragLimitation();
            }

            let delta = this.x - this.left;
            this.rawLeft = this.x;
            this.rawRight = this.right - delta;
        },

        y() {
            if (this.stickDrag || this.bodyDrag) {
                return
            }

            if (this.parentLimitation) {
                this.limits = this.calcDragLimitation();
            }

            let delta = this.y - this.top;
            this.rawTop = this.y;
            this.rawBottom = this.bottom - delta;
        },

        w() {
            if (this.stickDrag || this.bodyDrag) {
                return
            }

            this.currentStick = ['m', 'r'];
            this.stickAxis = 'x';

            if (this.parentLimitation) {
                this.limits = this.calcResizeLimitation();
            }

            let delta = this.width - this.w;
            this.rawRight = this.right + delta;
        },

        h() {
            if (this.stickDrag || this.bodyDrag) {
                return
            }

            this.currentStick = ['b', 'm'];
            this.stickAxis = 'y';

            if (this.parentLimitation) {
                this.limits = this.calcResizeLimitation();
            }

            let delta = this.height - this.h;
            this.rawBottom = this.bottom + delta;
        },

        parentW(val) {
            this.right = val - this.width - this.left;
            this.parentWidth = val;
        },

        parentH(val) {
            this.bottom = val - this.height - this.top;
            this.parentHeight = val;
        }
    }
});
// CONCATENATED MODULE: ./packages/DragResize/src/DragResize.js?vue&type=script&lang=js&
 /* harmony default export */ var src_DragResizevue_type_script_lang_js_ = (DragResizevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/DragResize/src/DragResize.vue?vue&type=style&index=0&id=19cd4b1d&lang=scss&scoped=true&
var DragResizevue_type_style_index_0_id_19cd4b1d_lang_scss_scoped_true_ = __webpack_require__("3d62");

// CONCATENATED MODULE: ./packages/DragResize/src/DragResize.vue






/* normalize component */

var DragResize_component = normalizeComponent(
  src_DragResizevue_type_script_lang_js_,
  DragResizevue_type_template_id_19cd4b1d_scoped_true_render,
  DragResizevue_type_template_id_19cd4b1d_scoped_true_staticRenderFns,
  false,
  null,
  "19cd4b1d",
  null
  
)

/* harmony default export */ var DragResize = (DragResize_component.exports);
// CONCATENATED MODULE: ./packages/DragResize/index.js


DragResize.install=(Vue)=>{
  Vue.component(DragResize.name,DragResize);
} 

/* harmony default export */ var packages_DragResize = (DragResize);
// CONCATENATED MODULE: ./packages/index.js




const components = [
  xPath,
  xCanvas,
  packages_DragResize
]

const install = function(Vue) {
  if (install.installed) return;
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = (Object.assign({install},
  ...components.map((ele)=>{return {[ele]:ele}})));

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=XNodeFlow.common.js.map