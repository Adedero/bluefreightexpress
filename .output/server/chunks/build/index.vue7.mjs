import { b as useRoute, _ as __nuxt_component_0 } from './server.mjs';
import __nuxt_component_0$1 from './index2117.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link.mjs';
import { defineComponent, unref, withCtx, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './harbour-2.jpg.mjs';
import { s as services } from './services.mjs';
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
import '@iconify/utils/lib/css/icon';
import './asyncData.mjs';
import './plane-2.jpg.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { slug } = useRoute().params;
    const service = services.find((service2) => service2.slug === slug.toString());
    useHead({
      title: (service == null ? void 0 : service.name) || "Service"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SubtitleText = _sfc_main$1;
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Affiliates = _sfc_main$2;
      if (unref(service)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_NuxtLayout, { name: "main-default" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<section class="w-screen h-[30rem] relative flex items-center gap-16 px-4 lg:px-24"${_scopeId}><div class="text-white flex flex-col gap-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SubtitleText, {
                text: "Service Detail",
                dark: ""
              }, null, _parent2, _scopeId));
              _push2(`<h1 class="rubik text-4xl md:text-6xl font-bold text-white text-balance"${_scopeId}>${ssrInterpolate(unref(service).name)}</h1><p class="font-medium max-w-[36rem]"${_scopeId}>${ssrInterpolate(unref(service).preview)}</p></div><div class="w-full h-full absolute left-0 bottom-0 -z-[9] bg-gradient-to-r from-primary-500/70 to-transparent"${_scopeId}></div><img${ssrRenderAttr("src", _imports_0)} class="w-full h-full object-cover absolute left-0 bottom-0 -z-10 scale-x-[-1]"${_scopeId}></section><div class="py-20 px-4 lg:px-24"${_scopeId}><img${ssrRenderAttr("src", unref(service).previewImage)} class="w-full"${_scopeId}><div class="pt-20"${_scopeId}><div class="flex items-center gap-5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: `my-icon:${unref(service).icon}`,
                size: unref(service).iconSize
              }, null, _parent2, _scopeId));
              _push2(`<h4 class="rubik font-semibold text-3xl md:text-4xl"${_scopeId}>${ssrInterpolate(unref(service).name)} Services</h4></div><p class="whitespace-pre-wrap text-slate-500 mt-5"${_scopeId}>${ssrInterpolate(unref(service).content.introduction)}</p><hr class="my-10"${_scopeId}><div class="relative"${_scopeId}><div class="whitespace-pre-wrap text-slate-500"${_scopeId}><img${ssrRenderAttr("src", unref(service).image1)} class="max-h-96 w-full md:w-1/3 md:float-right md:ml-4 mb-2 object-cover"${_scopeId}> ${ssrInterpolate(unref(service).content.body)}</div></div><hr class="my-10"${_scopeId}><div class="whitespace-pre-wrap text-slate-500 bg-surface px-6 py-5"${_scopeId}>${ssrInterpolate(unref(service).content.conclusion)}</div></div></div><div class="grid gap-5 pb-20 px-4 lg:px-24"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SubtitleText, { text: "Other Services" }, null, _parent2, _scopeId));
              _push2(`<h4 class="rubik font-semibold text-3xl md:text-4xl"${_scopeId}> We Have More To Offer </h4><div class="mt-10 flex gap-10 justify-center flex-wrap"${_scopeId}><!--[-->`);
              ssrRenderList(unref(services).filter((ser) => {
                var _a;
                return ser.id !== ((_a = unref(service)) == null ? void 0 : _a.id);
              }) ?? [], (s) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  key: s.id,
                  to: `/services/${s.slug}`,
                  class: "group"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="w-full max-w-72 h-96 relative overflow-hidden"${_scopeId2}><div class="absolute left-1/2 top-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-primary-500/80 text-white p-4 grid place-content-center gap-5 text-sm text-center text-balance transition-all translate-y-full group-hover:-translate-y-1/2 opacity-0 group-hover:opacity-100 duration-300"${_scopeId2}><p${_scopeId2}>${ssrInterpolate(s.preview)}</p><div class="group-hover:underline flex items-center gap-1 font-semibold justify-center"${_scopeId2}><span${_scopeId2}>More</span>`);
                      _push3(ssrRenderComponent(_component_Icon, { name: "lucide:link" }, null, _parent3, _scopeId2));
                      _push3(`</div></div><img${ssrRenderAttr("src", s.image1)} class="w-full h-full object-cover"${_scopeId2}></div><p class="group-hover:text-accent transition-colors text-center text-primary-500 mt-4 rubik font-semibold text-lg"${_scopeId2}>${ssrInterpolate(s.name)}</p>`);
                    } else {
                      return [
                        createVNode("div", { class: "w-full max-w-72 h-96 relative overflow-hidden" }, [
                          createVNode("div", { class: "absolute left-1/2 top-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-primary-500/80 text-white p-4 grid place-content-center gap-5 text-sm text-center text-balance transition-all translate-y-full group-hover:-translate-y-1/2 opacity-0 group-hover:opacity-100 duration-300" }, [
                            createVNode("p", null, toDisplayString(s.preview), 1),
                            createVNode("div", { class: "group-hover:underline flex items-center gap-1 font-semibold justify-center" }, [
                              createVNode("span", null, "More"),
                              createVNode(_component_Icon, { name: "lucide:link" })
                            ])
                          ]),
                          createVNode("img", {
                            src: s.image1,
                            class: "w-full h-full object-cover"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("p", { class: "group-hover:text-accent transition-colors text-center text-primary-500 mt-4 rubik font-semibold text-lg" }, toDisplayString(s.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
              _push2(ssrRenderComponent(_component_Affiliates, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("section", { class: "w-screen h-[30rem] relative flex items-center gap-16 px-4 lg:px-24" }, [
                  createVNode("div", { class: "text-white flex flex-col gap-6" }, [
                    createVNode(_component_SubtitleText, {
                      text: "Service Detail",
                      dark: ""
                    }),
                    createVNode("h1", { class: "rubik text-4xl md:text-6xl font-bold text-white text-balance" }, toDisplayString(unref(service).name), 1),
                    createVNode("p", { class: "font-medium max-w-[36rem]" }, toDisplayString(unref(service).preview), 1)
                  ]),
                  createVNode("div", { class: "w-full h-full absolute left-0 bottom-0 -z-[9] bg-gradient-to-r from-primary-500/70 to-transparent" }),
                  createVNode("img", {
                    src: _imports_0,
                    class: "w-full h-full object-cover absolute left-0 bottom-0 -z-10 scale-x-[-1]"
                  })
                ]),
                createVNode("div", { class: "py-20 px-4 lg:px-24" }, [
                  createVNode("img", {
                    src: unref(service).previewImage,
                    class: "w-full"
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "pt-20" }, [
                    createVNode("div", { class: "flex items-center gap-5" }, [
                      createVNode(_component_Icon, {
                        name: `my-icon:${unref(service).icon}`,
                        size: unref(service).iconSize
                      }, null, 8, ["name", "size"]),
                      createVNode("h4", { class: "rubik font-semibold text-3xl md:text-4xl" }, toDisplayString(unref(service).name) + " Services", 1)
                    ]),
                    createVNode("p", { class: "whitespace-pre-wrap text-slate-500 mt-5" }, toDisplayString(unref(service).content.introduction), 1),
                    createVNode("hr", { class: "my-10" }),
                    createVNode("div", { class: "relative" }, [
                      createVNode("div", { class: "whitespace-pre-wrap text-slate-500" }, [
                        createVNode("img", {
                          src: unref(service).image1,
                          class: "max-h-96 w-full md:w-1/3 md:float-right md:ml-4 mb-2 object-cover"
                        }, null, 8, ["src"]),
                        createTextVNode(" " + toDisplayString(unref(service).content.body), 1)
                      ])
                    ]),
                    createVNode("hr", { class: "my-10" }),
                    createVNode("div", { class: "whitespace-pre-wrap text-slate-500 bg-surface px-6 py-5" }, toDisplayString(unref(service).content.conclusion), 1)
                  ])
                ]),
                createVNode("div", { class: "grid gap-5 pb-20 px-4 lg:px-24" }, [
                  createVNode(_component_SubtitleText, { text: "Other Services" }),
                  createVNode("h4", { class: "rubik font-semibold text-3xl md:text-4xl" }, " We Have More To Offer "),
                  createVNode("div", { class: "mt-10 flex gap-10 justify-center flex-wrap" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(services).filter((ser) => {
                      var _a;
                      return ser.id !== ((_a = unref(service)) == null ? void 0 : _a.id);
                    }) ?? [], (s) => {
                      return openBlock(), createBlock(_component_NuxtLink, {
                        key: s.id,
                        to: `/services/${s.slug}`,
                        class: "group"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "w-full max-w-72 h-96 relative overflow-hidden" }, [
                            createVNode("div", { class: "absolute left-1/2 top-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-primary-500/80 text-white p-4 grid place-content-center gap-5 text-sm text-center text-balance transition-all translate-y-full group-hover:-translate-y-1/2 opacity-0 group-hover:opacity-100 duration-300" }, [
                              createVNode("p", null, toDisplayString(s.preview), 1),
                              createVNode("div", { class: "group-hover:underline flex items-center gap-1 font-semibold justify-center" }, [
                                createVNode("span", null, "More"),
                                createVNode(_component_Icon, { name: "lucide:link" })
                              ])
                            ]),
                            createVNode("img", {
                              src: s.image1,
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("p", { class: "group-hover:text-accent transition-colors text-center text-primary-500 mt-4 rubik font-semibold text-lg" }, toDisplayString(s.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))
                  ])
                ]),
                createVNode(_component_Affiliates)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue7.mjs.map
