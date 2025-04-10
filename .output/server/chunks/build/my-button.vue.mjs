import __nuxt_component_0 from './index2117.mjs';
import { defineComponent, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-button",
  __ssrInlineRender: true,
  props: {
    text: {},
    variant: { default: "primary" },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    type: {},
    icon: {},
    iconPos: { default: "right" },
    size: { default: "normal" }
  },
  setup(__props) {
    const buttonClass = computed(() => {
      if (__props.variant === "secondary") {
        return {
          main: "bg-accent text-primary-500 disabled:bg-accent/80 disabled:text-white/90",
          before: "before:bg-white"
        };
      }
      return {
        main: "bg-primary-500 text-white disabled:bg-primary-400 disabled:text-white/80",
        before: "before:bg-primary-400"
      };
    });
    const buttonSize = computed(() => {
      if (__props.size === "small") {
        return "0.75rem 1rem";
      }
      if (__props.size === "large") {
        return "1.5rem 2.5rem";
      }
      return "1rem 1.75rem";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _cssVars = { style: {
        "--47f86861": unref(buttonSize)
      } };
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["my-button", unref(buttonClass).main, unref(buttonClass).before, _ctx.loading || _ctx.disabled ? "cursor-not-allowed" : "cursor-pointer"],
        type: _ctx.type,
        disabled: _ctx.loading || _ctx.disabled
      }, _attrs, _cssVars))} data-v-43e283c4>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`<div class="${ssrRenderClass([{ "flex-row-reverse": _ctx.iconPos === "left" }, "w-full h-full flex justify-center items-center gap-2"])}" data-v-43e283c4><span class="block" data-v-43e283c4>${ssrInterpolate(_ctx.text)}</span>`);
        if (_ctx.icon || _ctx.loading) {
          _push(`<span class="${ssrRenderClass([{ "animate-spin": _ctx.loading }, "grid place-content-center"])}" data-v-43e283c4>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: _ctx.loading ? "lucide:loader-circle" : _ctx.icon,
            size: "1.2rem"
          }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }, _push, _parent);
      _push(`</button>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my-button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43e283c4"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=my-button.vue.mjs.map
