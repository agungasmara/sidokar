(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueBlink = factory());
}(this, (function () { 'use strict';

var index = {
  props: {
    duration: {
      type: Number,
      default: 530
    }
  },
  data: function data() {
    return {
      visible: true,
      timer: null
    }
  },
  mounted: function mounted() {
    var this$1 = this;

    this.timer = setInterval(function () {
      this$1.visible = !this$1.visible;
    }, this.duration);
  },
  render: function render(h) {
    var style = {
      visibility: this.visible ? 'visible' : 'hidden'
    };
    return h('span', {style: style}, this.$slots.default)
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.timer);
  }
};

return index;

})));
