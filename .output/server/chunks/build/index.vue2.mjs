import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import script$9 from './index233.mjs';
import script$8 from './index28.mjs';
import script$7 from './index230.mjs';
import script$6 from './index219.mjs';
import script$5 from './index222.mjs';
import script$4 from './index271.mjs';
import script$3 from './index268.mjs';
import script$2 from './index269.mjs';
import script$1 from './index266.mjs';
import { u as useToast, s as script, n as navigateTo } from './server.mjs';
import { defineComponent, reactive, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import random from 'random-string-generator';
import { o as orderStatuses, f as freightModes, d as deliveryModes, _ as _sfc_main$1 } from './index.mjs';
import { u as useErrorToast } from './use-error-toast.mjs';
import '../_/nitro.mjs';
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
import 'nodemailer';
import '@dword-design/functions';
import 'ipx';
import '@primeuix/utils';
import './index3.mjs';
import './index4.mjs';
import '@primeuix/utils/dom';
import '@primeuix/utils/zindex';
import './index5.mjs';
import './index6.mjs';
import './index7.mjs';
import './index8.mjs';
import './index9.mjs';
import './index10.mjs';
import '@primeuix/utils/eventbus';
import './index11.mjs';
import './index12.mjs';
import './index212.mjs';
import './index217.mjs';
import './index252.mjs';
import './index13.mjs';
import './index14.mjs';
import 'vue-router';
import '@iconify/vue';
import '@primeuix/styles/base';
import 'mongoose';
import '@primeuix/utils/uuid';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const order = reactive({
      client: {
        name: "",
        email: "",
        role: "USER"
      },
      items: [
        {
          _id: random(),
          name: "",
          quantity: 1,
          unitPrice: 0
        }
      ],
      deliveryMode: "pickup station",
      freightMode: "air",
      status: "processing",
      destination: {
        address: "",
        name: "",
        city: "",
        state: "",
        country: "",
        countryCode: "",
        lat: null,
        lng: null,
        description: ""
      }
    });
    const addNewItem = () => {
      order.items.unshift({
        _id: random(),
        name: "",
        quantity: 1,
        unitPrice: 0
      });
    };
    const removeItem = (id) => {
      var _a;
      order.items = (_a = order.items) == null ? void 0 : _a.filter((item) => item._id !== id);
    };
    const onLocationPicked = (location) => {
      order.destination = {
        name: location.name,
        address: location.address,
        state: location.state,
        city: location.city,
        country: location.country,
        countryCode: location.countryCode.toUpperCase(),
        lat: location.lat,
        lng: location.lng
      };
    };
    const loading = ref(false);
    const createOrder = async () => {
      var _a;
      order.items = (_a = order.items) == null ? void 0 : _a.map((item) => ({
        ...item,
        _id: void 0
      }));
      loading.value = true;
      try {
        const data = await $fetch("/api/orders", {
          method: "POST",
          body: order
        });
        await navigateTo(`/admin/orders/${data.order._id}`);
      } catch (error) {
        useErrorToast(error, toast);
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_PrimeButton = script;
      const _component_PrimeStepper = script$1;
      const _component_PrimeStepItem = script$2;
      const _component_PrimeStep = script$3;
      const _component_PrimeStepPanel = script$4;
      const _component_PrimeInputText = script$5;
      const _component_PrimeInputNumber = script$6;
      const _component_PrimeSelect = script$7;
      const _component_LocationPicker = _sfc_main$1;
      const _component_PrimeDatePicker = script$8;
      const _component_PrimeTextarea = script$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-dvw px-0 py-4 md:p-4" }, _attrs))}><header class="border rounded-xl shadow-sm px-2 py-2 flex items-center justify-between gap-2"><h1 class="font-rubik text-xl font-bold text-[--p-primary-color]"> New Order </h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/admin/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PrimeButton, {
              label: "Back",
              icon: "pi pi-arrow-left",
              size: "small",
              severity: "secondary"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PrimeButton, {
                label: "Back",
                icon: "pi pi-arrow-left",
                size: "small",
                severity: "secondary"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header><div class="mt-4 font-rubik font-normal">`);
      _push(ssrRenderComponent(_component_PrimeStepper, {
        value: "1",
        linear: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PrimeStepItem, { value: "1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PrimeStep, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Client Data`);
                      } else {
                        return [
                          createTextVNode("Client Data")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PrimeStepPanel, { l: "" }, {
                    default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                      var _a, _b, _c, _d;
                      if (_push4) {
                        _push4(`<div class="bg-[--p-surface-50] rounded-md p-2 grid gap-4"${_scopeId3}><div class="grid md:grid-cols-2 gap-2"${_scopeId3}><div class="grid form-control"${_scopeId3}><label for="name"${_scopeId3}>Name <span class="text-red-500"${_scopeId3}>*</span></label>`);
                        _push4(ssrRenderComponent(_component_PrimeInputText, {
                          id: "name",
                          modelValue: unref(order).client.name,
                          "onUpdate:modelValue": ($event) => unref(order).client.name = $event,
                          modelModifiers: { trim: true },
                          fluid: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid form-control"${_scopeId3}><label for="email"${_scopeId3}>Email <span class="text-red-500"${_scopeId3}>*</span></label>`);
                        _push4(ssrRenderComponent(_component_PrimeInputText, {
                          id: "email",
                          modelValue: unref(order).client.email,
                          "onUpdate:modelValue": ($event) => unref(order).client.email = $event,
                          modelModifiers: { trim: true },
                          fluid: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div><div class="flex items-center justify-end gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_PrimeButton, {
                          disabled: !((_a = unref(order).client) == null ? void 0 : _a.name) || !((_b = unref(order).client) == null ? void 0 : _b.email),
                          onClick: ($event) => activateCallback("2"),
                          label: "Next",
                          icon: "pi pi-arrow-right",
                          "icon-pos": "right"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                            createVNode("div", { class: "grid md:grid-cols-2 gap-2" }, [
                              createVNode("div", { class: "grid form-control" }, [
                                createVNode("label", { for: "name" }, [
                                  createTextVNode("Name "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  id: "name",
                                  modelValue: unref(order).client.name,
                                  "onUpdate:modelValue": ($event) => unref(order).client.name = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control" }, [
                                createVNode("label", { for: "email" }, [
                                  createTextVNode("Email "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  id: "email",
                                  modelValue: unref(order).client.email,
                                  "onUpdate:modelValue": ($event) => unref(order).client.email = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                              createVNode(_component_PrimeButton, {
                                disabled: !((_c = unref(order).client) == null ? void 0 : _c.name) || !((_d = unref(order).client) == null ? void 0 : _d.email),
                                onClick: ($event) => activateCallback("2"),
                                label: "Next",
                                icon: "pi pi-arrow-right",
                                "icon-pos": "right"
                              }, null, 8, ["disabled", "onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PrimeStep, null, {
                      default: withCtx(() => [
                        createTextVNode("Client Data")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_PrimeStepPanel, { l: "" }, {
                      default: withCtx(({ activateCallback }) => {
                        var _a, _b;
                        return [
                          createVNode("div", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                            createVNode("div", { class: "grid md:grid-cols-2 gap-2" }, [
                              createVNode("div", { class: "grid form-control" }, [
                                createVNode("label", { for: "name" }, [
                                  createTextVNode("Name "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  id: "name",
                                  modelValue: unref(order).client.name,
                                  "onUpdate:modelValue": ($event) => unref(order).client.name = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control" }, [
                                createVNode("label", { for: "email" }, [
                                  createTextVNode("Email "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  id: "email",
                                  modelValue: unref(order).client.email,
                                  "onUpdate:modelValue": ($event) => unref(order).client.email = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                              createVNode(_component_PrimeButton, {
                                disabled: !((_a = unref(order).client) == null ? void 0 : _a.name) || !((_b = unref(order).client) == null ? void 0 : _b.email),
                                onClick: ($event) => activateCallback("2"),
                                label: "Next",
                                icon: "pi pi-arrow-right",
                                "icon-pos": "right"
                              }, null, 8, ["disabled", "onClick"])
                            ])
                          ])
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PrimeStepItem, { value: "2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PrimeStep, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Items`);
                      } else {
                        return [
                          createTextVNode("Items")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PrimeStepPanel, null, {
                    default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                      var _a, _b, _c, _d;
                      if (_push4) {
                        _push4(`<div class="bg-[--p-surface-50] rounded-md p-2 grid gap-4"${_scopeId3}><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_PrimeButton, {
                          onClick: addNewItem,
                          label: "Add item",
                          size: "small",
                          icon: "pi pi-plus"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><!--[-->`);
                        ssrRenderList(unref(order).items, (item, index) => {
                          var _a2;
                          _push4(`<div${_scopeId3}><div class="border rounded-lg p-2"${_scopeId3}><div class="flex items-center justify-end"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_PrimeButton, {
                            onClick: ($event) => removeItem(item._id),
                            severity: "danger",
                            icon: "pi pi-trash",
                            size: "small",
                            disabled: ((_a2 = unref(order).items) == null ? void 0 : _a2.length) === 1
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="grid md:grid-cols-3 gap-2"${_scopeId3}><div class="grid form-control"${_scopeId3}><label${_scopeId3}>Name <span class="text-red-500"${_scopeId3}>*</span></label>`);
                          _push4(ssrRenderComponent(_component_PrimeInputText, {
                            modelValue: item.name,
                            "onUpdate:modelValue": ($event) => item.name = $event,
                            modelModifiers: { trim: true },
                            placeholder: `Item-${index + 1}`,
                            fluid: ""
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="grid form-control"${_scopeId3}><label${_scopeId3}>Quantity <span class="text-red-500"${_scopeId3}>*</span></label>`);
                          _push4(ssrRenderComponent(_component_PrimeInputNumber, {
                            min: 1,
                            modelValue: item.quantity,
                            "onUpdate:modelValue": ($event) => item.quantity = $event,
                            fluid: ""
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="grid form-control"${_scopeId3}><label${_scopeId3}>Unit Price ($) <span class="text-red-500"${_scopeId3}>*</span></label>`);
                          _push4(ssrRenderComponent(_component_PrimeInputNumber, {
                            modelValue: item.unitPrice,
                            "onUpdate:modelValue": ($event) => item.unitPrice = $event,
                            "max-fraction-digits": 2,
                            fluid: ""
                          }, null, _parent4, _scopeId3));
                          _push4(`</div></div></div></div>`);
                        });
                        _push4(`<!--]--><div class="flex items-center justify-end gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_PrimeButton, {
                          onClick: ($event) => activateCallback("1"),
                          label: "Prev",
                          icon: "pi pi-arrow-left",
                          severity: "secondary"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_PrimeButton, {
                          disabled: !((_a = unref(order).items) == null ? void 0 : _a.length) || ((_b = unref(order).items) == null ? void 0 : _b.some((item) => !item.name || !item.quantity || !item.unitPrice)),
                          onClick: ($event) => activateCallback("3"),
                          label: "Next",
                          icon: "pi pi-arrow-right",
                          "icon-pos": "right"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                            createVNode("div", null, [
                              createVNode(_component_PrimeButton, {
                                onClick: addNewItem,
                                label: "Add item",
                                size: "small",
                                icon: "pi pi-plus"
                              })
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(order).items, (item, index) => {
                              var _a2;
                              return openBlock(), createBlock("div", {
                                key: item._id
                              }, [
                                createVNode("div", { class: "border rounded-lg p-2" }, [
                                  createVNode("div", { class: "flex items-center justify-end" }, [
                                    createVNode(_component_PrimeButton, {
                                      onClick: ($event) => removeItem(item._id),
                                      severity: "danger",
                                      icon: "pi pi-trash",
                                      size: "small",
                                      disabled: ((_a2 = unref(order).items) == null ? void 0 : _a2.length) === 1
                                    }, null, 8, ["onClick", "disabled"])
                                  ]),
                                  createVNode("div", { class: "grid md:grid-cols-3 gap-2" }, [
                                    createVNode("div", { class: "grid form-control" }, [
                                      createVNode("label", null, [
                                        createTextVNode("Name "),
                                        createVNode("span", { class: "text-red-500" }, "*")
                                      ]),
                                      createVNode(_component_PrimeInputText, {
                                        modelValue: item.name,
                                        "onUpdate:modelValue": ($event) => item.name = $event,
                                        modelModifiers: { trim: true },
                                        placeholder: `Item-${index + 1}`,
                                        fluid: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                    ]),
                                    createVNode("div", { class: "grid form-control" }, [
                                      createVNode("label", null, [
                                        createTextVNode("Quantity "),
                                        createVNode("span", { class: "text-red-500" }, "*")
                                      ]),
                                      createVNode(_component_PrimeInputNumber, {
                                        min: 1,
                                        modelValue: item.quantity,
                                        "onUpdate:modelValue": ($event) => item.quantity = $event,
                                        fluid: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "grid form-control" }, [
                                      createVNode("label", null, [
                                        createTextVNode("Unit Price ($) "),
                                        createVNode("span", { class: "text-red-500" }, "*")
                                      ]),
                                      createVNode(_component_PrimeInputNumber, {
                                        modelValue: item.unitPrice,
                                        "onUpdate:modelValue": ($event) => item.unitPrice = $event,
                                        "max-fraction-digits": 2,
                                        fluid: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ])
                              ]);
                            }), 128)),
                            createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                              createVNode(_component_PrimeButton, {
                                onClick: ($event) => activateCallback("1"),
                                label: "Prev",
                                icon: "pi pi-arrow-left",
                                severity: "secondary"
                              }, null, 8, ["onClick"]),
                              createVNode(_component_PrimeButton, {
                                disabled: !((_c = unref(order).items) == null ? void 0 : _c.length) || ((_d = unref(order).items) == null ? void 0 : _d.some((item) => !item.name || !item.quantity || !item.unitPrice)),
                                onClick: ($event) => activateCallback("3"),
                                label: "Next",
                                icon: "pi pi-arrow-right",
                                "icon-pos": "right"
                              }, null, 8, ["disabled", "onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PrimeStep, null, {
                      default: withCtx(() => [
                        createTextVNode("Items")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_PrimeStepPanel, null, {
                      default: withCtx(({ activateCallback }) => {
                        var _a, _b;
                        return [
                          createVNode("div", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                            createVNode("div", null, [
                              createVNode(_component_PrimeButton, {
                                onClick: addNewItem,
                                label: "Add item",
                                size: "small",
                                icon: "pi pi-plus"
                              })
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(order).items, (item, index) => {
                              var _a2;
                              return openBlock(), createBlock("div", {
                                key: item._id
                              }, [
                                createVNode("div", { class: "border rounded-lg p-2" }, [
                                  createVNode("div", { class: "flex items-center justify-end" }, [
                                    createVNode(_component_PrimeButton, {
                                      onClick: ($event) => removeItem(item._id),
                                      severity: "danger",
                                      icon: "pi pi-trash",
                                      size: "small",
                                      disabled: ((_a2 = unref(order).items) == null ? void 0 : _a2.length) === 1
                                    }, null, 8, ["onClick", "disabled"])
                                  ]),
                                  createVNode("div", { class: "grid md:grid-cols-3 gap-2" }, [
                                    createVNode("div", { class: "grid form-control" }, [
                                      createVNode("label", null, [
                                        createTextVNode("Name "),
                                        createVNode("span", { class: "text-red-500" }, "*")
                                      ]),
                                      createVNode(_component_PrimeInputText, {
                                        modelValue: item.name,
                                        "onUpdate:modelValue": ($event) => item.name = $event,
                                        modelModifiers: { trim: true },
                                        placeholder: `Item-${index + 1}`,
                                        fluid: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                    ]),
                                    createVNode("div", { class: "grid form-control" }, [
                                      createVNode("label", null, [
                                        createTextVNode("Quantity "),
                                        createVNode("span", { class: "text-red-500" }, "*")
                                      ]),
                                      createVNode(_component_PrimeInputNumber, {
                                        min: 1,
                                        modelValue: item.quantity,
                                        "onUpdate:modelValue": ($event) => item.quantity = $event,
                                        fluid: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "grid form-control" }, [
                                      createVNode("label", null, [
                                        createTextVNode("Unit Price ($) "),
                                        createVNode("span", { class: "text-red-500" }, "*")
                                      ]),
                                      createVNode(_component_PrimeInputNumber, {
                                        modelValue: item.unitPrice,
                                        "onUpdate:modelValue": ($event) => item.unitPrice = $event,
                                        "max-fraction-digits": 2,
                                        fluid: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ])
                              ]);
                            }), 128)),
                            createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                              createVNode(_component_PrimeButton, {
                                onClick: ($event) => activateCallback("1"),
                                label: "Prev",
                                icon: "pi pi-arrow-left",
                                severity: "secondary"
                              }, null, 8, ["onClick"]),
                              createVNode(_component_PrimeButton, {
                                disabled: !((_a = unref(order).items) == null ? void 0 : _a.length) || ((_b = unref(order).items) == null ? void 0 : _b.some((item) => !item.name || !item.quantity || !item.unitPrice)),
                                onClick: ($event) => activateCallback("3"),
                                label: "Next",
                                icon: "pi pi-arrow-right",
                                "icon-pos": "right"
                              }, null, 8, ["disabled", "onClick"])
                            ])
                          ])
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PrimeStepItem, { value: "3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PrimeStep, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Delivery Information`);
                      } else {
                        return [
                          createTextVNode("Delivery Information")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PrimeStepPanel, null, {
                    default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="bg-[--p-surface-50] rounded-md p-2 grid gap-4"${_scopeId3}><div class="grid md:grid-cols-3 gap-2"${_scopeId3}><div class="grid form-control"${_scopeId3}><label${_scopeId3}>Order Status <span class="text-red-500"${_scopeId3}>*</span></label>`);
                        _push4(ssrRenderComponent(_component_PrimeSelect, {
                          modelValue: unref(order).status,
                          "onUpdate:modelValue": ($event) => unref(order).status = $event,
                          options: unref(orderStatuses)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid form-control"${_scopeId3}><label${_scopeId3}>Freight Mode <span class="text-red-500"${_scopeId3}>*</span></label>`);
                        _push4(ssrRenderComponent(_component_PrimeSelect, {
                          modelValue: unref(order).freightMode,
                          "onUpdate:modelValue": ($event) => unref(order).freightMode = $event,
                          options: unref(freightModes)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid form-control"${_scopeId3}><label${_scopeId3}>Delivery Mode <span class="text-red-500"${_scopeId3}>*</span></label>`);
                        _push4(ssrRenderComponent(_component_PrimeSelect, {
                          modelValue: unref(order).deliveryMode,
                          "onUpdate:modelValue": ($event) => unref(order).deliveryMode = $event,
                          options: unref(deliveryModes)
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div><div class="flex items-center justify-end gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_PrimeButton, {
                          onClick: ($event) => activateCallback("2"),
                          label: "Prev",
                          icon: "pi pi-arrow-left",
                          severity: "secondary"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_PrimeButton, {
                          onClick: ($event) => activateCallback("4"),
                          label: "Next",
                          icon: "pi pi-arrow-right",
                          "icon-pos": "right",
                          disabled: !unref(order).status || !unref(order).deliveryMode || !unref(order).freightMode
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                            createVNode("div", { class: "grid md:grid-cols-3 gap-2" }, [
                              createVNode("div", { class: "grid form-control" }, [
                                createVNode("label", null, [
                                  createTextVNode("Order Status "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeSelect, {
                                  modelValue: unref(order).status,
                                  "onUpdate:modelValue": ($event) => unref(order).status = $event,
                                  options: unref(orderStatuses)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              createVNode("div", { class: "grid form-control" }, [
                                createVNode("label", null, [
                                  createTextVNode("Freight Mode "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeSelect, {
                                  modelValue: unref(order).freightMode,
                                  "onUpdate:modelValue": ($event) => unref(order).freightMode = $event,
                                  options: unref(freightModes)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              createVNode("div", { class: "grid form-control" }, [
                                createVNode("label", null, [
                                  createTextVNode("Delivery Mode "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeSelect, {
                                  modelValue: unref(order).deliveryMode,
                                  "onUpdate:modelValue": ($event) => unref(order).deliveryMode = $event,
                                  options: unref(deliveryModes)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                              createVNode(_component_PrimeButton, {
                                onClick: ($event) => activateCallback("2"),
                                label: "Prev",
                                icon: "pi pi-arrow-left",
                                severity: "secondary"
                              }, null, 8, ["onClick"]),
                              createVNode(_component_PrimeButton, {
                                onClick: ($event) => activateCallback("4"),
                                label: "Next",
                                icon: "pi pi-arrow-right",
                                "icon-pos": "right",
                                disabled: !unref(order).status || !unref(order).deliveryMode || !unref(order).freightMode
                              }, null, 8, ["onClick", "disabled"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PrimeStep, null, {
                      default: withCtx(() => [
                        createTextVNode("Delivery Information")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_PrimeStepPanel, null, {
                      default: withCtx(({ activateCallback }) => [
                        createVNode("div", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                          createVNode("div", { class: "grid md:grid-cols-3 gap-2" }, [
                            createVNode("div", { class: "grid form-control" }, [
                              createVNode("label", null, [
                                createTextVNode("Order Status "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode(_component_PrimeSelect, {
                                modelValue: unref(order).status,
                                "onUpdate:modelValue": ($event) => unref(order).status = $event,
                                options: unref(orderStatuses)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            createVNode("div", { class: "grid form-control" }, [
                              createVNode("label", null, [
                                createTextVNode("Freight Mode "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode(_component_PrimeSelect, {
                                modelValue: unref(order).freightMode,
                                "onUpdate:modelValue": ($event) => unref(order).freightMode = $event,
                                options: unref(freightModes)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            createVNode("div", { class: "grid form-control" }, [
                              createVNode("label", null, [
                                createTextVNode("Delivery Mode "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode(_component_PrimeSelect, {
                                modelValue: unref(order).deliveryMode,
                                "onUpdate:modelValue": ($event) => unref(order).deliveryMode = $event,
                                options: unref(deliveryModes)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                            createVNode(_component_PrimeButton, {
                              onClick: ($event) => activateCallback("2"),
                              label: "Prev",
                              icon: "pi pi-arrow-left",
                              severity: "secondary"
                            }, null, 8, ["onClick"]),
                            createVNode(_component_PrimeButton, {
                              onClick: ($event) => activateCallback("4"),
                              label: "Next",
                              icon: "pi pi-arrow-right",
                              "icon-pos": "right",
                              disabled: !unref(order).status || !unref(order).deliveryMode || !unref(order).freightMode
                            }, null, 8, ["onClick", "disabled"])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PrimeStepItem, { value: "4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PrimeStep, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Order Destination`);
                      } else {
                        return [
                          createTextVNode("Order Destination")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PrimeStepPanel, null, {
                    default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
                      if (_push4) {
                        _push4(`<div class="bg-[--p-surface-50] rounded-md p-2 grid gap-4"${_scopeId3}><p class="font-semibold"${_scopeId3}>Search for a location or select one by clicking anywhere on the map</p><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_LocationPicker, { onLocationPicked }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid md:grid-cols-4 gap-2"${_scopeId3}><div class="grid form-control md:col-span-4 lg:hidden"${_scopeId3}><label${_scopeId3}>Address <span class="text-red-500"${_scopeId3}>*</span></label>`);
                        _push4(ssrRenderComponent(_component_PrimeInputText, {
                          modelValue: unref(order).destination.address,
                          "onUpdate:modelValue": ($event) => unref(order).destination.address = $event,
                          modelModifiers: { trim: true },
                          fluid: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid form-control md:col-span-2"${_scopeId3}><label${_scopeId3}>Name <small${_scopeId3}>(optional)</small></label>`);
                        _push4(ssrRenderComponent(_component_PrimeInputText, {
                          modelValue: unref(order).destination.name,
                          "onUpdate:modelValue": ($event) => unref(order).destination.name = $event,
                          modelModifiers: { trim: true },
                          placeholder: "e.g. BFE Warehouse",
                          fluid: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="form-control hidden lg:grid lg:col-span-2"${_scopeId3}><label${_scopeId3}>Address <span class="text-red-500"${_scopeId3}>*</span></label>`);
                        _push4(ssrRenderComponent(_component_PrimeInputText, {
                          modelValue: unref(order).destination.address,
                          "onUpdate:modelValue": ($event) => unref(order).destination.address = $event,
                          modelModifiers: { trim: true },
                          fluid: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid form-control md:col-span-2 lg:col-span-1"${_scopeId3}><label${_scopeId3}>City <span class="text-red-500"${_scopeId3}>*</span></label>`);
                        _push4(ssrRenderComponent(_component_PrimeInputText, {
                          modelValue: unref(order).destination.city,
                          "onUpdate:modelValue": ($event) => unref(order).destination.city = $event,
                          modelModifiers: { trim: true },
                          fluid: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid form-control md:col-span-2 lg:col-span-1"${_scopeId3}><label${_scopeId3}>State or Region <span class="text-red-500"${_scopeId3}>*</span></label>`);
                        _push4(ssrRenderComponent(_component_PrimeInputText, {
                          modelValue: unref(order).destination.state,
                          "onUpdate:modelValue": ($event) => unref(order).destination.state = $event,
                          modelModifiers: { trim: true },
                          fluid: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid form-control md:col-span-2 lg:col-span-1"${_scopeId3}><label${_scopeId3}>Country <span class="text-red-500"${_scopeId3}>*</span></label>`);
                        _push4(ssrRenderComponent(_component_PrimeInputText, {
                          modelValue: unref(order).destination.country,
                          "onUpdate:modelValue": ($event) => unref(order).destination.country = $event,
                          modelModifiers: { trim: true },
                          fluid: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid form-control md:col-span-2 lg:col-span-1"${_scopeId3}><label${_scopeId3}>Country Code<span class="text-red-500"${_scopeId3}>*</span></label>`);
                        _push4(ssrRenderComponent(_component_PrimeInputText, {
                          modelValue: unref(order).destination.countryCode,
                          "onUpdate:modelValue": ($event) => unref(order).destination.countryCode = $event,
                          modelModifiers: { trim: true },
                          fluid: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid form-control md:col-span-2 lg:col-span-1"${_scopeId3}><label${_scopeId3}>Latitude<span class="text-red-500"${_scopeId3}>*</span></label>`);
                        _push4(ssrRenderComponent(_component_PrimeInputNumber, {
                          modelValue: unref(order).destination.lat,
                          "onUpdate:modelValue": ($event) => unref(order).destination.lat = $event,
                          min: -90,
                          max: 90,
                          grouping: false,
                          fluid: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid form-control md:col-span-2 lg:col-span-1"${_scopeId3}><label${_scopeId3}>Longitude<span class="text-red-500"${_scopeId3}>*</span></label>`);
                        _push4(ssrRenderComponent(_component_PrimeInputNumber, {
                          modelValue: unref(order).destination.lng,
                          "onUpdate:modelValue": ($event) => unref(order).destination.lng = $event,
                          min: -180,
                          max: 180,
                          grouping: false,
                          fluid: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid form-control md:col-span-2"${_scopeId3}><label${_scopeId3}>Estimated Delivery Date <span class="text-red-500"${_scopeId3}>*</span></label>`);
                        _push4(ssrRenderComponent(_component_PrimeDatePicker, {
                          modelValue: unref(order).estimatedDelivery,
                          "onUpdate:modelValue": ($event) => unref(order).estimatedDelivery = $event,
                          "date-format": "dd M, yy",
                          fluid: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="grid form-control md:col-span-4"${_scopeId3}><label${_scopeId3}>Description <small${_scopeId3}>(optional)</small></label>`);
                        _push4(ssrRenderComponent(_component_PrimeTextarea, {
                          modelValue: unref(order).destination.description,
                          "onUpdate:modelValue": ($event) => unref(order).destination.description = $event,
                          modelModifiers: { trim: true },
                          rows: "4",
                          class: "resize-none",
                          fluid: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div><div class="flex items-center justify-end gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_PrimeButton, {
                          onClick: ($event) => activateCallback("2"),
                          label: "Prev",
                          icon: "pi pi-arrow-left",
                          severity: "secondary"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_PrimeButton, {
                          onClick: createOrder,
                          loading: unref(loading),
                          label: "Submit",
                          icon: "pi pi-check",
                          "icon-pos": "right",
                          disabled: unref(loading) || !unref(order).estimatedDelivery || !((_a = unref(order).destination) == null ? void 0 : _a.address) || !((_b = unref(order).destination) == null ? void 0 : _b.city) || !((_c = unref(order).destination) == null ? void 0 : _c.state) || !((_d = unref(order).destination) == null ? void 0 : _d.country) || !((_e = unref(order).destination) == null ? void 0 : _e.countryCode) || ((_f = unref(order).destination) == null ? void 0 : _f.lat) === null || ((_g = unref(order).destination) == null ? void 0 : _g.lat) === void 0 || ((_h = unref(order).destination) == null ? void 0 : _h.lng) === null || ((_i = unref(order).destination) == null ? void 0 : _i.lng) === void 0
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                            createVNode("p", { class: "font-semibold" }, "Search for a location or select one by clicking anywhere on the map"),
                            createVNode("div", null, [
                              createVNode(_component_LocationPicker, { onLocationPicked })
                            ]),
                            createVNode("div", { class: "grid md:grid-cols-4 gap-2" }, [
                              createVNode("div", { class: "grid form-control md:col-span-4 lg:hidden" }, [
                                createVNode("label", null, [
                                  createTextVNode("Address "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  modelValue: unref(order).destination.address,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.address = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2" }, [
                                createVNode("label", null, [
                                  createTextVNode("Name "),
                                  createVNode("small", null, "(optional)")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  modelValue: unref(order).destination.name,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.name = $event,
                                  modelModifiers: { trim: true },
                                  placeholder: "e.g. BFE Warehouse",
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "form-control hidden lg:grid lg:col-span-2" }, [
                                createVNode("label", null, [
                                  createTextVNode("Address "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  modelValue: unref(order).destination.address,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.address = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                                createVNode("label", null, [
                                  createTextVNode("City "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  modelValue: unref(order).destination.city,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.city = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                                createVNode("label", null, [
                                  createTextVNode("State or Region "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  modelValue: unref(order).destination.state,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.state = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                                createVNode("label", null, [
                                  createTextVNode("Country "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  modelValue: unref(order).destination.country,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.country = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                                createVNode("label", null, [
                                  createTextVNode("Country Code"),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  modelValue: unref(order).destination.countryCode,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.countryCode = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                                createVNode("label", null, [
                                  createTextVNode("Latitude"),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputNumber, {
                                  modelValue: unref(order).destination.lat,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.lat = $event,
                                  min: -90,
                                  max: 90,
                                  grouping: false,
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                                createVNode("label", null, [
                                  createTextVNode("Longitude"),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputNumber, {
                                  modelValue: unref(order).destination.lng,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.lng = $event,
                                  min: -180,
                                  max: 180,
                                  grouping: false,
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2" }, [
                                createVNode("label", null, [
                                  createTextVNode("Estimated Delivery Date "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeDatePicker, {
                                  modelValue: unref(order).estimatedDelivery,
                                  "onUpdate:modelValue": ($event) => unref(order).estimatedDelivery = $event,
                                  "date-format": "dd M, yy",
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-4" }, [
                                createVNode("label", null, [
                                  createTextVNode("Description "),
                                  createVNode("small", null, "(optional)")
                                ]),
                                createVNode(_component_PrimeTextarea, {
                                  modelValue: unref(order).destination.description,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.description = $event,
                                  modelModifiers: { trim: true },
                                  rows: "4",
                                  class: "resize-none",
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                              createVNode(_component_PrimeButton, {
                                onClick: ($event) => activateCallback("2"),
                                label: "Prev",
                                icon: "pi pi-arrow-left",
                                severity: "secondary"
                              }, null, 8, ["onClick"]),
                              createVNode(_component_PrimeButton, {
                                onClick: createOrder,
                                loading: unref(loading),
                                label: "Submit",
                                icon: "pi pi-check",
                                "icon-pos": "right",
                                disabled: unref(loading) || !unref(order).estimatedDelivery || !((_j = unref(order).destination) == null ? void 0 : _j.address) || !((_k = unref(order).destination) == null ? void 0 : _k.city) || !((_l = unref(order).destination) == null ? void 0 : _l.state) || !((_m = unref(order).destination) == null ? void 0 : _m.country) || !((_n = unref(order).destination) == null ? void 0 : _n.countryCode) || ((_o = unref(order).destination) == null ? void 0 : _o.lat) === null || ((_p = unref(order).destination) == null ? void 0 : _p.lat) === void 0 || ((_q = unref(order).destination) == null ? void 0 : _q.lng) === null || ((_r = unref(order).destination) == null ? void 0 : _r.lng) === void 0
                              }, null, 8, ["loading", "disabled"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PrimeStep, null, {
                      default: withCtx(() => [
                        createTextVNode("Order Destination")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_PrimeStepPanel, null, {
                      default: withCtx(({ activateCallback }) => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
                        return [
                          createVNode("div", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                            createVNode("p", { class: "font-semibold" }, "Search for a location or select one by clicking anywhere on the map"),
                            createVNode("div", null, [
                              createVNode(_component_LocationPicker, { onLocationPicked })
                            ]),
                            createVNode("div", { class: "grid md:grid-cols-4 gap-2" }, [
                              createVNode("div", { class: "grid form-control md:col-span-4 lg:hidden" }, [
                                createVNode("label", null, [
                                  createTextVNode("Address "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  modelValue: unref(order).destination.address,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.address = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2" }, [
                                createVNode("label", null, [
                                  createTextVNode("Name "),
                                  createVNode("small", null, "(optional)")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  modelValue: unref(order).destination.name,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.name = $event,
                                  modelModifiers: { trim: true },
                                  placeholder: "e.g. BFE Warehouse",
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "form-control hidden lg:grid lg:col-span-2" }, [
                                createVNode("label", null, [
                                  createTextVNode("Address "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  modelValue: unref(order).destination.address,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.address = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                                createVNode("label", null, [
                                  createTextVNode("City "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  modelValue: unref(order).destination.city,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.city = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                                createVNode("label", null, [
                                  createTextVNode("State or Region "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  modelValue: unref(order).destination.state,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.state = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                                createVNode("label", null, [
                                  createTextVNode("Country "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  modelValue: unref(order).destination.country,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.country = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                                createVNode("label", null, [
                                  createTextVNode("Country Code"),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputText, {
                                  modelValue: unref(order).destination.countryCode,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.countryCode = $event,
                                  modelModifiers: { trim: true },
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                                createVNode("label", null, [
                                  createTextVNode("Latitude"),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputNumber, {
                                  modelValue: unref(order).destination.lat,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.lat = $event,
                                  min: -90,
                                  max: 90,
                                  grouping: false,
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                                createVNode("label", null, [
                                  createTextVNode("Longitude"),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeInputNumber, {
                                  modelValue: unref(order).destination.lng,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.lng = $event,
                                  min: -180,
                                  max: 180,
                                  grouping: false,
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-2" }, [
                                createVNode("label", null, [
                                  createTextVNode("Estimated Delivery Date "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode(_component_PrimeDatePicker, {
                                  modelValue: unref(order).estimatedDelivery,
                                  "onUpdate:modelValue": ($event) => unref(order).estimatedDelivery = $event,
                                  "date-format": "dd M, yy",
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "grid form-control md:col-span-4" }, [
                                createVNode("label", null, [
                                  createTextVNode("Description "),
                                  createVNode("small", null, "(optional)")
                                ]),
                                createVNode(_component_PrimeTextarea, {
                                  modelValue: unref(order).destination.description,
                                  "onUpdate:modelValue": ($event) => unref(order).destination.description = $event,
                                  modelModifiers: { trim: true },
                                  rows: "4",
                                  class: "resize-none",
                                  fluid: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                              createVNode(_component_PrimeButton, {
                                onClick: ($event) => activateCallback("2"),
                                label: "Prev",
                                icon: "pi pi-arrow-left",
                                severity: "secondary"
                              }, null, 8, ["onClick"]),
                              createVNode(_component_PrimeButton, {
                                onClick: createOrder,
                                loading: unref(loading),
                                label: "Submit",
                                icon: "pi pi-check",
                                "icon-pos": "right",
                                disabled: unref(loading) || !unref(order).estimatedDelivery || !((_a = unref(order).destination) == null ? void 0 : _a.address) || !((_b = unref(order).destination) == null ? void 0 : _b.city) || !((_c = unref(order).destination) == null ? void 0 : _c.state) || !((_d = unref(order).destination) == null ? void 0 : _d.country) || !((_e = unref(order).destination) == null ? void 0 : _e.countryCode) || ((_f = unref(order).destination) == null ? void 0 : _f.lat) === null || ((_g = unref(order).destination) == null ? void 0 : _g.lat) === void 0 || ((_h = unref(order).destination) == null ? void 0 : _h.lng) === null || ((_i = unref(order).destination) == null ? void 0 : _i.lng) === void 0
                              }, null, 8, ["loading", "disabled"])
                            ])
                          ])
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PrimeStepItem, { value: "1" }, {
                default: withCtx(() => [
                  createVNode(_component_PrimeStep, null, {
                    default: withCtx(() => [
                      createTextVNode("Client Data")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_PrimeStepPanel, { l: "" }, {
                    default: withCtx(({ activateCallback }) => {
                      var _a, _b;
                      return [
                        createVNode("div", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                          createVNode("div", { class: "grid md:grid-cols-2 gap-2" }, [
                            createVNode("div", { class: "grid form-control" }, [
                              createVNode("label", { for: "name" }, [
                                createTextVNode("Name "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode(_component_PrimeInputText, {
                                id: "name",
                                modelValue: unref(order).client.name,
                                "onUpdate:modelValue": ($event) => unref(order).client.name = $event,
                                modelModifiers: { trim: true },
                                fluid: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid form-control" }, [
                              createVNode("label", { for: "email" }, [
                                createTextVNode("Email "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode(_component_PrimeInputText, {
                                id: "email",
                                modelValue: unref(order).client.email,
                                "onUpdate:modelValue": ($event) => unref(order).client.email = $event,
                                modelModifiers: { trim: true },
                                fluid: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                            createVNode(_component_PrimeButton, {
                              disabled: !((_a = unref(order).client) == null ? void 0 : _a.name) || !((_b = unref(order).client) == null ? void 0 : _b.email),
                              onClick: ($event) => activateCallback("2"),
                              label: "Next",
                              icon: "pi pi-arrow-right",
                              "icon-pos": "right"
                            }, null, 8, ["disabled", "onClick"])
                          ])
                        ])
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PrimeStepItem, { value: "2" }, {
                default: withCtx(() => [
                  createVNode(_component_PrimeStep, null, {
                    default: withCtx(() => [
                      createTextVNode("Items")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_PrimeStepPanel, null, {
                    default: withCtx(({ activateCallback }) => {
                      var _a, _b;
                      return [
                        createVNode("div", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                          createVNode("div", null, [
                            createVNode(_component_PrimeButton, {
                              onClick: addNewItem,
                              label: "Add item",
                              size: "small",
                              icon: "pi pi-plus"
                            })
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(order).items, (item, index) => {
                            var _a2;
                            return openBlock(), createBlock("div", {
                              key: item._id
                            }, [
                              createVNode("div", { class: "border rounded-lg p-2" }, [
                                createVNode("div", { class: "flex items-center justify-end" }, [
                                  createVNode(_component_PrimeButton, {
                                    onClick: ($event) => removeItem(item._id),
                                    severity: "danger",
                                    icon: "pi pi-trash",
                                    size: "small",
                                    disabled: ((_a2 = unref(order).items) == null ? void 0 : _a2.length) === 1
                                  }, null, 8, ["onClick", "disabled"])
                                ]),
                                createVNode("div", { class: "grid md:grid-cols-3 gap-2" }, [
                                  createVNode("div", { class: "grid form-control" }, [
                                    createVNode("label", null, [
                                      createTextVNode("Name "),
                                      createVNode("span", { class: "text-red-500" }, "*")
                                    ]),
                                    createVNode(_component_PrimeInputText, {
                                      modelValue: item.name,
                                      "onUpdate:modelValue": ($event) => item.name = $event,
                                      modelModifiers: { trim: true },
                                      placeholder: `Item-${index + 1}`,
                                      fluid: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                                  ]),
                                  createVNode("div", { class: "grid form-control" }, [
                                    createVNode("label", null, [
                                      createTextVNode("Quantity "),
                                      createVNode("span", { class: "text-red-500" }, "*")
                                    ]),
                                    createVNode(_component_PrimeInputNumber, {
                                      min: 1,
                                      modelValue: item.quantity,
                                      "onUpdate:modelValue": ($event) => item.quantity = $event,
                                      fluid: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "grid form-control" }, [
                                    createVNode("label", null, [
                                      createTextVNode("Unit Price ($) "),
                                      createVNode("span", { class: "text-red-500" }, "*")
                                    ]),
                                    createVNode(_component_PrimeInputNumber, {
                                      modelValue: item.unitPrice,
                                      "onUpdate:modelValue": ($event) => item.unitPrice = $event,
                                      "max-fraction-digits": 2,
                                      fluid: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ])
                              ])
                            ]);
                          }), 128)),
                          createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                            createVNode(_component_PrimeButton, {
                              onClick: ($event) => activateCallback("1"),
                              label: "Prev",
                              icon: "pi pi-arrow-left",
                              severity: "secondary"
                            }, null, 8, ["onClick"]),
                            createVNode(_component_PrimeButton, {
                              disabled: !((_a = unref(order).items) == null ? void 0 : _a.length) || ((_b = unref(order).items) == null ? void 0 : _b.some((item) => !item.name || !item.quantity || !item.unitPrice)),
                              onClick: ($event) => activateCallback("3"),
                              label: "Next",
                              icon: "pi pi-arrow-right",
                              "icon-pos": "right"
                            }, null, 8, ["disabled", "onClick"])
                          ])
                        ])
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PrimeStepItem, { value: "3" }, {
                default: withCtx(() => [
                  createVNode(_component_PrimeStep, null, {
                    default: withCtx(() => [
                      createTextVNode("Delivery Information")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_PrimeStepPanel, null, {
                    default: withCtx(({ activateCallback }) => [
                      createVNode("div", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                        createVNode("div", { class: "grid md:grid-cols-3 gap-2" }, [
                          createVNode("div", { class: "grid form-control" }, [
                            createVNode("label", null, [
                              createTextVNode("Order Status "),
                              createVNode("span", { class: "text-red-500" }, "*")
                            ]),
                            createVNode(_component_PrimeSelect, {
                              modelValue: unref(order).status,
                              "onUpdate:modelValue": ($event) => unref(order).status = $event,
                              options: unref(orderStatuses)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ]),
                          createVNode("div", { class: "grid form-control" }, [
                            createVNode("label", null, [
                              createTextVNode("Freight Mode "),
                              createVNode("span", { class: "text-red-500" }, "*")
                            ]),
                            createVNode(_component_PrimeSelect, {
                              modelValue: unref(order).freightMode,
                              "onUpdate:modelValue": ($event) => unref(order).freightMode = $event,
                              options: unref(freightModes)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ]),
                          createVNode("div", { class: "grid form-control" }, [
                            createVNode("label", null, [
                              createTextVNode("Delivery Mode "),
                              createVNode("span", { class: "text-red-500" }, "*")
                            ]),
                            createVNode(_component_PrimeSelect, {
                              modelValue: unref(order).deliveryMode,
                              "onUpdate:modelValue": ($event) => unref(order).deliveryMode = $event,
                              options: unref(deliveryModes)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                          createVNode(_component_PrimeButton, {
                            onClick: ($event) => activateCallback("2"),
                            label: "Prev",
                            icon: "pi pi-arrow-left",
                            severity: "secondary"
                          }, null, 8, ["onClick"]),
                          createVNode(_component_PrimeButton, {
                            onClick: ($event) => activateCallback("4"),
                            label: "Next",
                            icon: "pi pi-arrow-right",
                            "icon-pos": "right",
                            disabled: !unref(order).status || !unref(order).deliveryMode || !unref(order).freightMode
                          }, null, 8, ["onClick", "disabled"])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PrimeStepItem, { value: "4" }, {
                default: withCtx(() => [
                  createVNode(_component_PrimeStep, null, {
                    default: withCtx(() => [
                      createTextVNode("Order Destination")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_PrimeStepPanel, null, {
                    default: withCtx(({ activateCallback }) => {
                      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
                      return [
                        createVNode("div", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                          createVNode("p", { class: "font-semibold" }, "Search for a location or select one by clicking anywhere on the map"),
                          createVNode("div", null, [
                            createVNode(_component_LocationPicker, { onLocationPicked })
                          ]),
                          createVNode("div", { class: "grid md:grid-cols-4 gap-2" }, [
                            createVNode("div", { class: "grid form-control md:col-span-4 lg:hidden" }, [
                              createVNode("label", null, [
                                createTextVNode("Address "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode(_component_PrimeInputText, {
                                modelValue: unref(order).destination.address,
                                "onUpdate:modelValue": ($event) => unref(order).destination.address = $event,
                                modelModifiers: { trim: true },
                                fluid: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid form-control md:col-span-2" }, [
                              createVNode("label", null, [
                                createTextVNode("Name "),
                                createVNode("small", null, "(optional)")
                              ]),
                              createVNode(_component_PrimeInputText, {
                                modelValue: unref(order).destination.name,
                                "onUpdate:modelValue": ($event) => unref(order).destination.name = $event,
                                modelModifiers: { trim: true },
                                placeholder: "e.g. BFE Warehouse",
                                fluid: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "form-control hidden lg:grid lg:col-span-2" }, [
                              createVNode("label", null, [
                                createTextVNode("Address "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode(_component_PrimeInputText, {
                                modelValue: unref(order).destination.address,
                                "onUpdate:modelValue": ($event) => unref(order).destination.address = $event,
                                modelModifiers: { trim: true },
                                fluid: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                              createVNode("label", null, [
                                createTextVNode("City "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode(_component_PrimeInputText, {
                                modelValue: unref(order).destination.city,
                                "onUpdate:modelValue": ($event) => unref(order).destination.city = $event,
                                modelModifiers: { trim: true },
                                fluid: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                              createVNode("label", null, [
                                createTextVNode("State or Region "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode(_component_PrimeInputText, {
                                modelValue: unref(order).destination.state,
                                "onUpdate:modelValue": ($event) => unref(order).destination.state = $event,
                                modelModifiers: { trim: true },
                                fluid: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                              createVNode("label", null, [
                                createTextVNode("Country "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode(_component_PrimeInputText, {
                                modelValue: unref(order).destination.country,
                                "onUpdate:modelValue": ($event) => unref(order).destination.country = $event,
                                modelModifiers: { trim: true },
                                fluid: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                              createVNode("label", null, [
                                createTextVNode("Country Code"),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode(_component_PrimeInputText, {
                                modelValue: unref(order).destination.countryCode,
                                "onUpdate:modelValue": ($event) => unref(order).destination.countryCode = $event,
                                modelModifiers: { trim: true },
                                fluid: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                              createVNode("label", null, [
                                createTextVNode("Latitude"),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode(_component_PrimeInputNumber, {
                                modelValue: unref(order).destination.lat,
                                "onUpdate:modelValue": ($event) => unref(order).destination.lat = $event,
                                min: -90,
                                max: 90,
                                grouping: false,
                                fluid: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid form-control md:col-span-2 lg:col-span-1" }, [
                              createVNode("label", null, [
                                createTextVNode("Longitude"),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode(_component_PrimeInputNumber, {
                                modelValue: unref(order).destination.lng,
                                "onUpdate:modelValue": ($event) => unref(order).destination.lng = $event,
                                min: -180,
                                max: 180,
                                grouping: false,
                                fluid: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid form-control md:col-span-2" }, [
                              createVNode("label", null, [
                                createTextVNode("Estimated Delivery Date "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode(_component_PrimeDatePicker, {
                                modelValue: unref(order).estimatedDelivery,
                                "onUpdate:modelValue": ($event) => unref(order).estimatedDelivery = $event,
                                "date-format": "dd M, yy",
                                fluid: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid form-control md:col-span-4" }, [
                              createVNode("label", null, [
                                createTextVNode("Description "),
                                createVNode("small", null, "(optional)")
                              ]),
                              createVNode(_component_PrimeTextarea, {
                                modelValue: unref(order).destination.description,
                                "onUpdate:modelValue": ($event) => unref(order).destination.description = $event,
                                modelModifiers: { trim: true },
                                rows: "4",
                                class: "resize-none",
                                fluid: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                            createVNode(_component_PrimeButton, {
                              onClick: ($event) => activateCallback("2"),
                              label: "Prev",
                              icon: "pi pi-arrow-left",
                              severity: "secondary"
                            }, null, 8, ["onClick"]),
                            createVNode(_component_PrimeButton, {
                              onClick: createOrder,
                              loading: unref(loading),
                              label: "Submit",
                              icon: "pi pi-check",
                              "icon-pos": "right",
                              disabled: unref(loading) || !unref(order).estimatedDelivery || !((_a = unref(order).destination) == null ? void 0 : _a.address) || !((_b = unref(order).destination) == null ? void 0 : _b.city) || !((_c = unref(order).destination) == null ? void 0 : _c.state) || !((_d = unref(order).destination) == null ? void 0 : _d.country) || !((_e = unref(order).destination) == null ? void 0 : _e.countryCode) || ((_f = unref(order).destination) == null ? void 0 : _f.lat) === null || ((_g = unref(order).destination) == null ? void 0 : _g.lat) === void 0 || ((_h = unref(order).destination) == null ? void 0 : _h.lng) === null || ((_i = unref(order).destination) == null ? void 0 : _i.lng) === void 0
                            }, null, 8, ["loading", "disabled"])
                          ])
                        ])
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/create-order/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
