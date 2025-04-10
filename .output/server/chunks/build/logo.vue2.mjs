import { defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "logo",
  __ssrInlineRender: true,
  props: {
    color: { default: "#ffb82b" },
    size: { default: "36" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: _ctx.size,
        height: _ctx.size,
        viewBox: "0 0 110 100",
        xmlns: "http://www.w3.org/2000/svg",
        fill: _ctx.color
      }, _attrs))}><path d="M2 7 L40 50 L2 93 L28 93 L66 50 L28 7 Z"></path><path d="M42 7 L80 50 L42 93 L68 93 L106 50 L68 7 Z"></path></svg>`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=logo.vue2.mjs.map
