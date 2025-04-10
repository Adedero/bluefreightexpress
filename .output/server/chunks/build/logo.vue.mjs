import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "logo",
  __ssrInlineRender: true,
  props: {
    color: { default: "#22d3ee" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--9976a0b6": _ctx.color
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper grid grid-cols-2 gap-[3.5px] w-fit h-fit" }, _attrs, _cssVars))} data-v-cd2d9251><div class="w-[10px] aspect-square bg-cyan-400 rotate-[60deg] -translate-x-[3px]" data-v-cd2d9251></div><div class="w-[10px] aspect-square bg-cyan-400" data-v-cd2d9251></div><div class="w-[10px] aspect-square bg-cyan-400" data-v-cd2d9251></div><div class="w-[10px] aspect-square bg-cyan-400" data-v-cd2d9251></div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd2d9251"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=logo.vue.mjs.map
