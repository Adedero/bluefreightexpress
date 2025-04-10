import { _ as __nuxt_component_2$1 } from './my-button.vue.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { n as navigateTo } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "package-tracker",
  __ssrInlineRender: true,
  setup(__props) {
    const trackingNumber = ref("");
    const errorMsg = ref("");
    const track = () => {
      if (!trackingNumber.value) return;
      navigateTo(`/track/${trackingNumber.value}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_MyButton = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full px-4 lg:px-24 py-20 bg-[--color-surface]" }, _attrs))} data-v-a681287e><div class="w-full h-full flex shadow-md" data-v-a681287e><input type="search"${ssrRenderAttr("value", unref(trackingNumber))} placeholder="Enter Tracking Number" class="tracking-id-input flex-grow" data-v-a681287e>`);
      _push(ssrRenderComponent(_component_MyButton, {
        onClick: track,
        text: "Track",
        icon: "lucide:package-search",
        disabled: !((_a = unref(trackingNumber)) == null ? void 0 : _a.trim())
      }, null, _parent));
      _push(`</div>`);
      if (unref(errorMsg)) {
        _push(`<small class="text-red-500 font-semibold" data-v-a681287e>${ssrInterpolate(unref(errorMsg))}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/package-tracker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a681287e"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=package-tracker.vue.mjs.map
