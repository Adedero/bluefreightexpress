import { b as useRoute, u as useToast, e as useUserSession, _ as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link.mjs';
import __nuxt_component_0 from './index2117.mjs';
import { _ as __nuxt_component_2 } from './my-button.vue.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderDynamicModel, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { u as useHead } from './v3.mjs';
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
import '@iconify/utils/lib/css/icon';
import './asyncData.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "form",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useToast();
    const credentials = ref({});
    const showPassword = ref(false);
    const result = ref();
    const loading = ref(false);
    useUserSession();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_Icon = __nuxt_component_0;
      const _component_MyButton = __nuxt_component_2;
      _push(`<form${ssrRenderAttrs(mergeProps({
        id: "form",
        class: "grid gap-5 w-full md:w-96"
      }, _attrs))} data-v-799c3d27><div class="form-control" data-v-799c3d27><label for="email" data-v-799c3d27>Email <span class="text-red-500" data-v-799c3d27>*</span></label><input type="email" id="email"${ssrRenderAttr("value", unref(credentials).email)} class="v-input" data-v-799c3d27>`);
      if ((_b = (_a = unref(result)) == null ? void 0 : _a.error) == null ? void 0 : _b.formErrors.fieldErrors.email) {
        _push(`<small class="text-red-500 font-semibold" data-v-799c3d27>${ssrInterpolate((_c = unref(result).error.formErrors.fieldErrors.email) == null ? void 0 : _c[0])}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-control" data-v-799c3d27><label for="password" data-v-799c3d27>Password <span class="text-red-500" data-v-799c3d27>*</span></label><div class="relative" data-v-799c3d27><input${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} id="password"${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(credentials).password, null)} class="v-input pr-10" data-v-799c3d27><button type="button" class="absolute top-1/2 right-3 -translate-y-1/2 text-slate-600 hover:text-primary-500 grid place-content-center" data-v-799c3d27>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(showPassword) ? "lucide:eye-off" : "lucide:eye",
        size: "1.2rem"
      }, null, _parent));
      _push(`</button></div>`);
      if ((_e = (_d = unref(result)) == null ? void 0 : _d.error) == null ? void 0 : _e.formErrors.fieldErrors.password) {
        _push(`<small class="text-red-500 font-semibold" data-v-799c3d27>${ssrInterpolate((_f = unref(result).error.formErrors.fieldErrors.password) == null ? void 0 : _f[0])}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-5" data-v-799c3d27>`);
      _push(ssrRenderComponent(_component_MyButton, {
        loading: unref(loading),
        type: "submit",
        text: "Log In",
        disabled: !unref(credentials).email || !unref(credentials).password,
        icon: "lucide:log-in",
        class: "w-full"
      }, null, _parent));
      _push(`</div></form>`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/login/form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-799c3d27"]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Log In"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_0;
      const _component_LoginForm = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "auth-default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="md:hidden fixed top-4 right-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "flex items-center gap-2 text-xs font-semibold px-3 py-1 bg-primary-500/60 hover:bg-primary-500/70 transition-colors rounded-full text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Back to website</span>`);
                  _push3(ssrRenderComponent(_component_Icon, { name: "lucide:arrow-right" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, "Back to website"),
                    createVNode(_component_Icon, { name: "lucide:arrow-right" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><header${_scopeId}><h1 class="rubik font-bold text-4xl md:text-5xl"${_scopeId}>Log In</h1><p class="text-sm mt-1"${_scopeId}>Log in with your admin credentials</p></header><div class="mt-10 w-[80vw] md:w-fit"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LoginForm, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "md:hidden fixed top-4 right-4" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "flex items-center gap-2 text-xs font-semibold px-3 py-1 bg-primary-500/60 hover:bg-primary-500/70 transition-colors rounded-full text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Back to website"),
                      createVNode(_component_Icon, { name: "lucide:arrow-right" })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("header", null, [
                  createVNode("h1", { class: "rubik font-bold text-4xl md:text-5xl" }, "Log In"),
                  createVNode("p", { class: "text-sm mt-1" }, "Log in with your admin credentials")
                ]),
                createVNode("div", { class: "mt-10 w-[80vw] md:w-fit" }, [
                  createVNode(_component_LoginForm)
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue6.mjs.map
