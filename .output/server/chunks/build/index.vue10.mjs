import { _ as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_2 } from './package-tracker.vue.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead } from './v3.mjs';
import { _ as _sfc_main$1, a as _sfc_main$2 } from './affiliates.vue2.mjs';
import '../_/nitro.mjs';
import 'nodemailer';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:path';
import 'ipx';
import 'vue-router';
import '@iconify/vue';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import 'mongoose';
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';
import './my-button.vue.mjs';
import './index2117.mjs';
import '@iconify/utils/lib/css/icon';
import './asyncData.mjs';
import './_plugin-vue_export-helper.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _imports_0 = "" + __buildAssetsURL("map.BZ4e9yGq.jpg");

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Track"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SubtitleText = _sfc_main$1;
      const _component_PackageTracker = __nuxt_component_2;
      const _component_Affiliates = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "main-default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-screen h-[28rem] relative flex items-center gap-16 px-4 lg:px-24"${_scopeId}><div class="text-white flex flex-col gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SubtitleText, {
              text: "Package Tracker",
              dark: ""
            }, null, _parent2, _scopeId));
            _push2(`<h1 class="rubik text-4xl md:text-6xl font-bold text-white text-balance"${_scopeId}> Track </h1><p class="font-medium max-w-[36rem]"${_scopeId}> Follow up on your packages with our secure and reliable tracking system. </p></div><div class="w-full h-full absolute left-0 bottom-0 -z-[9] bg-gradient-to-r from-primary-500/50 to-transparent"${_scopeId}></div><img${ssrRenderAttr("src", _imports_0)} class="w-full h-full object-cover object-top absolute left-0 bottom-0 -z-10"${_scopeId}></section><div class="mb-20"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PackageTracker, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Affiliates, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("section", { class: "w-screen h-[28rem] relative flex items-center gap-16 px-4 lg:px-24" }, [
                createVNode("div", { class: "text-white flex flex-col gap-6" }, [
                  createVNode(_component_SubtitleText, {
                    text: "Package Tracker",
                    dark: ""
                  }),
                  createVNode("h1", { class: "rubik text-4xl md:text-6xl font-bold text-white text-balance" }, " Track "),
                  createVNode("p", { class: "font-medium max-w-[36rem]" }, " Follow up on your packages with our secure and reliable tracking system. ")
                ]),
                createVNode("div", { class: "w-full h-full absolute left-0 bottom-0 -z-[9] bg-gradient-to-r from-primary-500/50 to-transparent" }),
                createVNode("img", {
                  src: _imports_0,
                  class: "w-full h-full object-cover object-top absolute left-0 bottom-0 -z-10"
                })
              ]),
              createVNode("div", { class: "mb-20" }, [
                createVNode(_component_PackageTracker)
              ]),
              createVNode(_component_Affiliates)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/track/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue10.mjs.map
