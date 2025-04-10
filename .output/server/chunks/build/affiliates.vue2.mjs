import { defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "subtitle-text",
  __ssrInlineRender: true,
  props: {
    text: {},
    bgColor: {},
    dark: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex w-fit", _ctx.bgColor ? `bg-${_ctx.bgColor}` : _ctx.dark ? "bg-black/30 " : "bg-surface"]
      }, _attrs))}><div class="bg-accent w-[5px] h-full flex-shrink-0"></div><p class="${ssrRenderClass(["text-sm font-medium px-3 py-2", _ctx.dark ? "text-white" : ""])}">${ssrInterpolate(_ctx.text)}</p></div>`);
    };
  }
});

const affiliate_1 = "" + __buildAssetsURL("affiliate-1.BdNJ6Plb.jpg");

const affiliate_2 = "" + __buildAssetsURL("affiliate-2.Dbyp0-qc.jpg");

const affiliate_3 = "" + __buildAssetsURL("affiliate-3.CuWs4sPT.jpg");

const affiliate_4 = "" + __buildAssetsURL("affiliate-4.DpNJnVQl.jpg");

const affiliate_5 = "" + __buildAssetsURL("affiliate-5.DWbTcf3G.jpg");

const affiliate_6 = "" + __buildAssetsURL("affiliate-6._BagaXK3.jpg");

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "affiliates",
  __ssrInlineRender: true,
  setup(__props) {
    const affiliates = [
      affiliate_1,
      affiliate_2,
      affiliate_3,
      affiliate_4,
      affiliate_5,
      affiliate_6
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-4 md:px-24 pb-20" }, _attrs))}><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4"><!--[-->`);
      ssrRenderList(affiliates, (affiliate) => {
        _push(`<img${ssrRenderAttr("src", affiliate)} class="block">`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=affiliates.vue2.mjs.map
