import { defineComponent, ref, useTemplateRef, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';

/* empty css                                        */
/* empty css                                                                  */
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "location-picker",
  __ssrInlineRender: true,
  emits: ["locationPicked"],
  setup(__props, { emit: __emit }) {
    const pickedLocation = ref(null);
    const loading = ref(false);
    ref(null);
    useTemplateRef("map-el");
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full rounded-md overflow-hidden" style="${ssrRenderStyle({ "height": "500px" })}"></div>`);
      if (unref(pickedLocation)) {
        _push(`<div class="mt-4 p-4 bg-gray-50 border rounded shadow-sm relative">`);
        if (unref(loading)) {
          _push(`<div class="absolute inset-0 bg-white/80 flex items-center justify-center z-10"><span class="text-sm text-gray-600 animate-pulse">Loading location...</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p><strong>Lat:</strong> ${ssrInterpolate(unref(pickedLocation).lat)}</p><p><strong>Lng:</strong> ${ssrInterpolate(unref(pickedLocation).lng)}</p><p><strong>Address:</strong> ${ssrInterpolate(unref(pickedLocation).address)}</p><p><strong>City:</strong> ${ssrInterpolate(unref(pickedLocation).city || unref(pickedLocation).town || unref(pickedLocation).village)}</p><p><strong>State:</strong> ${ssrInterpolate(unref(pickedLocation).state)}</p><p><strong>Country:</strong> ${ssrInterpolate(unref(pickedLocation).country)}</p><button class="mt-3 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}> Clear Selection </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=location-picker.vue2.mjs.map
