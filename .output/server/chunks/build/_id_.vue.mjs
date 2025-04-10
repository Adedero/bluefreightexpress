import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { defineComponent, ref, unref, isRef, withCtx, createBlock, createCommentVNode, createVNode, openBlock, toDisplayString, withAsyncContext, watch, computed, mergeProps, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import script$7 from './index233.mjs';
import script$6 from './index28.mjs';
import script$5 from './index230.mjs';
import script$4 from './index219.mjs';
import script$3 from './index222.mjs';
import script$2 from './index261.mjs';
import { a as script, s as script$1, b as useRoute, u as useToast, c as useConfirm, d as createError, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import random from 'random-string-generator';
import { _ as _sfc_main$2, o as orderStatuses, f as freightModes, d as deliveryModes, t as trackingUpdateSeverities } from './index.mjs';
import { u as useFetch } from './fetch.mjs';
import { u as useErrorToast } from './use-error-toast.mjs';
import { u as useDateFormat } from './index16.mjs';
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
import './index20.mjs';
import './index21.mjs';
import 'vue-router';
import '@iconify/vue';
import '@primeuix/styles/base';
import 'mongoose';
import '@primeuix/utils/uuid';
import './asyncData.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "location-picker-dialog",
  __ssrInlineRender: true,
  emits: ["locationPicked"],
  setup(__props, { emit: __emit }) {
    const visible = ref(false);
    const emit = __emit;
    const pickedLocation = ref(null);
    const onLocationPicked = (location) => {
      pickedLocation.value = location;
      emit("locationPicked", location);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrimeDialog = script;
      const _component_LocationPicker = _sfc_main$2;
      const _component_PrimeButton = script$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_PrimeDialog, {
        visible: unref(visible),
        "onUpdate:visible": ($event) => isRef(visible) ? visible.value = $event : null,
        onHide: ($event) => pickedLocation.value = null,
        header: "Location Picker",
        class: "w-full md:w-[80vw]"
      }, {
        closebutton: withCtx(({ closeCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(pickedLocation)) {
              _push2(ssrRenderComponent(_component_PrimeButton, {
                onClick: ($event) => closeCallback(),
                severity: "secondary",
                icon: "pi pi-times",
                rounded: "",
                text: ""
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_PrimeButton, {
                onClick: ($event) => closeCallback(),
                icon: "pi pi-check",
                label: "Continue",
                size: "small"
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              !unref(pickedLocation) ? (openBlock(), createBlock(_component_PrimeButton, {
                key: 0,
                onClick: ($event) => closeCallback(),
                severity: "secondary",
                icon: "pi pi-times",
                rounded: "",
                text: ""
              }, null, 8, ["onClick"])) : (openBlock(), createBlock(_component_PrimeButton, {
                key: 1,
                onClick: ($event) => closeCallback(),
                icon: "pi pi-check",
                label: "Continue",
                size: "small"
              }, null, 8, ["onClick"]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(pickedLocation)) {
              _push2(`<div class="text-sm mb-2"${_scopeId}><p${_scopeId}>Location selected</p><div class="font-bold flex items-center gap-1"${_scopeId}><span class="pi pi-map-marker"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(unref(pickedLocation).address)}</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_LocationPicker, { onLocationPicked }, null, _parent2, _scopeId));
          } else {
            return [
              unref(pickedLocation) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-sm mb-2"
              }, [
                createVNode("p", null, "Location selected"),
                createVNode("div", { class: "font-bold flex items-center gap-1" }, [
                  createVNode("span", { class: "pi pi-map-marker" }),
                  createVNode("span", null, toDisplayString(unref(pickedLocation).address), 1)
                ])
              ])) : createCommentVNode("", true),
              createVNode(_component_LocationPicker, { onLocationPicked })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { id } = route.params;
    const toast = useToast();
    const confirm = useConfirm();
    const { data: order } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/orders/${id.toString()}`, "$viz9LMEN1w")), __temp = await __temp, __restore(), __temp);
    if (!order.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Order not found",
        fatal: true
      });
    }
    const updatedOrder = ref(JSON.parse(JSON.stringify(order.value)));
    watch(updatedOrder, () => {
      updatedOrder.value.totalPrice = updatedOrder.value.items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
    }, { deep: true });
    const loading = ref(false);
    const updateOrder = async () => {
      loading.value = true;
      try {
        const data = await $fetch(`/api/orders/${id.toString()}`, {
          method: "PUT",
          body: updatedOrder.value
        });
        toast.add({
          severity: "success",
          summary: "Order updated",
          detail: "The order has been successfully updated",
          life: 3e3
        });
        updatedOrder.value = {
          // @ts-ignore
          ...data.order,
          user: updatedOrder.value.user
        };
        order.value = JSON.parse(JSON.stringify(updatedOrder.value));
      } catch (error) {
        useErrorToast(error, toast);
      } finally {
        loading.value = false;
      }
    };
    const isDeleting = ref(false);
    const deleteOrder = async () => {
      isDeleting.value = true;
      try {
        await $fetch(`/api/orders/${id.toString()}`, { method: "DELETE" });
        toast.add({
          severity: "success",
          summary: "Order deleted",
          detail: "The order has been successfully deleted",
          life: 3e3
        });
        setTimeout(() => {
          navigateTo("/admin");
        }, 3e3);
      } catch (err) {
        useErrorToast(err, toast);
      } finally {
        isDeleting.value = false;
      }
    };
    const confirmDelete = () => {
      confirm.require({
        header: `Delete order ${order.value.orderId}`,
        message: "Are you sure you want to proceed?",
        icon: "pi pi-exclamation-triangle",
        rejectProps: {
          label: "Cancel",
          severity: "secondary",
          outlined: true,
          icon: "pi pi-times-circle"
        },
        acceptProps: {
          label: "Delete",
          severity: "danger",
          icon: "pi pi-trash"
        },
        accept: () => {
          deleteOrder();
        }
      });
    };
    const onLocationPicked = (obj, field, location) => {
      obj[field] = {
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
    const shouldDisableUserSaveBtn = computed(() => {
      const hasChanged = updatedOrder.value.user.name.trim() !== order.value.user.name.trim() || updatedOrder.value.user.email.trim() !== order.value.user.email.trim();
      return !hasChanged || !updatedOrder.value.user.name || !updatedOrder.value.user.email;
    });
    const resetUser = () => {
      updatedOrder.value.user = { ...order.value.user };
    };
    const addNewItem = () => {
      updatedOrder.value.items.unshift({
        _id: random(),
        name: "",
        quantity: 1,
        unitPrice: 0
      });
    };
    const removeItem = (id2) => {
      updatedOrder.value.items = updatedOrder.value.items.filter((item) => item._id !== id2);
    };
    const shouldDisableItemsSaveBtn = computed(() => {
      const hasChanged = JSON.stringify(updatedOrder.value.items) !== JSON.stringify(order.value.items);
      return !hasChanged || !updatedOrder.value.items || updatedOrder.value.items.length === 0 || updatedOrder.value.items.some((item) => !item.name.trim() || !item.quantity || !item.unitPrice);
    });
    const resetItems = () => {
      updatedOrder.value.items = JSON.parse(JSON.stringify(order.value.items));
    };
    const shouldDisableDeliverySaveBtn = computed(() => {
      var _a, _b, _c, _d;
      const hasChanged = updatedOrder.value.status !== ((_a = order.value) == null ? void 0 : _a.status) || updatedOrder.value.freightMode !== ((_b = order.value) == null ? void 0 : _b.freightMode) || updatedOrder.value.deliveryMode !== ((_c = order.value) == null ? void 0 : _c.deliveryMode) || updatedOrder.value.estimatedDelivery !== ((_d = order.value) == null ? void 0 : _d.estimatedDelivery);
      return !hasChanged || !updatedOrder.value.status || !updatedOrder.value.freightMode || !updatedOrder.value.deliveryMode || !updatedOrder.value.estimatedDelivery;
    });
    const resetDelivery = () => {
      const fields = ["status", "freightMode", "deliveryMode", "estimatedDelivery"];
      fields.forEach((field) => updatedOrder.value[field] = order.value[field]);
    };
    const shouldDisableDestinationSaveBtn = computed(() => {
      const requiredFields = ["address", "city", "state", "country", "countryCode", "lat", "lng"];
      const hasAllRequiredFields = requiredFields.every(
        (field) => Boolean(updatedOrder.value.destination[field])
      );
      const hasChanged = requiredFields.some(
        (field) => {
          var _a;
          return updatedOrder.value.destination[field] !== ((_a = order.value) == null ? void 0 : _a.destination)[field];
        }
      );
      return !hasAllRequiredFields || !hasChanged;
    });
    const resetDestination = () => {
      updatedOrder.value.destination = JSON.parse(JSON.stringify(order.value.destination));
    };
    const addTrackingUpdate = () => {
      updatedOrder.value.trackingUpdates.unshift({
        _id: random(),
        status: updatedOrder.value.status,
        severity: "info",
        comment: "",
        location: {
          name: "",
          address: "",
          city: "",
          state: "",
          country: "",
          countryCode: "",
          lat: null,
          lng: null
        },
        timestamp: /* @__PURE__ */ new Date()
      });
    };
    const removeTrackingUpdate = (id2) => {
      updatedOrder.value.trackingUpdates = updatedOrder.value.trackingUpdates.filter((update) => update._id !== id2);
    };
    const resetAllTrackingUpdates = () => {
      updatedOrder.value.trackingUpdates = JSON.parse(JSON.stringify(order.value.trackingUpdates));
    };
    const resetTrackingUpdate = (id2) => {
      updatedOrder.value.trackingUpdates = updatedOrder.value.trackingUpdates.map((update) => update._id === id2 ? JSON.parse(JSON.stringify(order.value.trackingUpdates.find((update2) => update2._id === id2))) : update);
    };
    const shouldDisableTrackingUpdateSaveBtn = computed(() => {
      const hasAllRequiredFields = updatedOrder.value.trackingUpdates.every(
        (update) => Boolean(update.status) && Boolean(update.severity) && Boolean(update.comment) && Boolean(update.timestamp) && Boolean(update.location.address) && Boolean(update.location.city) && Boolean(update.location.state) && Boolean(update.location.country) && Boolean(update.location.lat) && Boolean(update.location.lng)
      );
      const hasChanged = JSON.stringify(updatedOrder.value.trackingUpdates) !== JSON.stringify(order.value.trackingUpdates);
      return !hasAllRequiredFields || !hasChanged;
    });
    const isCopied = ref(false);
    const copyTrackingNumber = async () => {
      await (void 0).clipboard.writeText(order.value.trackingNumber);
      isCopied.value = true;
      setTimeout(() => isCopied.value = false, 3e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_PrimeButton = script$1;
      const _component_PrimeFieldset = script$2;
      const _component_PrimeInputText = script$3;
      const _component_PrimeInputNumber = script$4;
      const _component_PrimeSelect = script$5;
      const _component_PrimeDatePicker = script$6;
      const _component_LocationPickerDialog = _sfc_main$1;
      const _component_PrimeTextarea = script$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-dvw p-4 pb-10" }, _attrs))}>`);
      if (unref(order)) {
        _push(`<div><header class="border rounded-xl shadow-sm px-2 py-2 flex items-center justify-between gap-2"><h1 class="font-rubik text-xl font-bold text-[--p-primary-color]"> Order (${ssrInterpolate(unref(order).status)}) ${ssrInterpolate(unref(order).orderId)}</h1><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/admin" }, {
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
        _push(ssrRenderComponent(_component_PrimeButton, {
          loading: unref(isDeleting),
          icon: "pi pi-trash",
          "icon-pos": "right",
          severity: "danger",
          size: "small",
          onClick: ($event) => confirmDelete()
        }, null, _parent));
        _push(`</div></header><div class="mt-4"><div class="flex items-center gap-2 flex-wrap"><p>Tracking Number: </p><p class="font-semibold">${ssrInterpolate(unref(order).trackingNumber)}</p>`);
        _push(ssrRenderComponent(_component_PrimeButton, {
          onClick: copyTrackingNumber,
          label: unref(isCopied) ? "Copied" : "Copy",
          icon: unref(isCopied) ? "pi pi-check" : "pi pi-copy",
          size: "small",
          severity: "secondary"
        }, null, _parent));
        _push(`</div></div><div class="mt-4 font-rubik font-normal grid gap-8">`);
        _push(ssrRenderComponent(_component_PrimeFieldset, {
          legend: "1. Client Data",
          toggleable: "",
          collapsed: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<section class="bg-[--p-surface-50] rounded-md p-2 grid gap-4"${_scopeId}><div class="grid md:grid-cols-2 gap-2"${_scopeId}><div class="grid form-control"${_scopeId}><label${_scopeId}>Name</label>`);
              _push2(ssrRenderComponent(_component_PrimeInputText, {
                modelValue: unref(updatedOrder).user.name,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).user.name = $event,
                fluid: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="grid form-control"${_scopeId}><label${_scopeId}>Email</label>`);
              _push2(ssrRenderComponent(_component_PrimeInputText, {
                modelValue: unref(updatedOrder).user.email,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).user.email = $event,
                fluid: ""
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="flex justify-end gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PrimeButton, {
                onClick: resetUser,
                label: "Reset",
                icon: "pi pi-replay",
                size: "small",
                severity: "secondary"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PrimeButton, {
                onClick: updateOrder,
                loading: unref(loading),
                disabled: unref(loading) || unref(shouldDisableUserSaveBtn),
                label: "Save",
                icon: "pi pi-save",
                size: "small"
              }, null, _parent2, _scopeId));
              _push2(`</div></section>`);
            } else {
              return [
                createVNode("section", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                  createVNode("div", { class: "grid md:grid-cols-2 gap-2" }, [
                    createVNode("div", { class: "grid form-control" }, [
                      createVNode("label", null, "Name"),
                      createVNode(_component_PrimeInputText, {
                        modelValue: unref(updatedOrder).user.name,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).user.name = $event,
                        fluid: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid form-control" }, [
                      createVNode("label", null, "Email"),
                      createVNode(_component_PrimeInputText, {
                        modelValue: unref(updatedOrder).user.email,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).user.email = $event,
                        fluid: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-end gap-2" }, [
                    createVNode(_component_PrimeButton, {
                      onClick: resetUser,
                      label: "Reset",
                      icon: "pi pi-replay",
                      size: "small",
                      severity: "secondary"
                    }),
                    createVNode(_component_PrimeButton, {
                      onClick: updateOrder,
                      loading: unref(loading),
                      disabled: unref(loading) || unref(shouldDisableUserSaveBtn),
                      label: "Save",
                      icon: "pi pi-save",
                      size: "small"
                    }, null, 8, ["loading", "disabled"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_PrimeFieldset, {
          legend: "2. Items",
          toggleable: "",
          collapsed: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<section class="bg-[--p-surface-50] rounded-md p-2 grid gap-4"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PrimeButton, {
                onClick: addNewItem,
                label: "Add item",
                size: "small",
                icon: "pi pi-plus"
              }, null, _parent2, _scopeId));
              _push2(`</div><!--[-->`);
              ssrRenderList(unref(updatedOrder).items, (item, index) => {
                var _a;
                _push2(`<div${_scopeId}><div class="border rounded-lg p-2"${_scopeId}><div class="flex items-center justify-end"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_PrimeButton, {
                  onClick: ($event) => removeItem(item._id),
                  severity: "danger",
                  icon: "pi pi-trash",
                  size: "small",
                  disabled: ((_a = unref(updatedOrder).items) == null ? void 0 : _a.length) === 1
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="grid md:grid-cols-3 gap-2"${_scopeId}><div class="grid form-control"${_scopeId}><label${_scopeId}>Name <span class="text-red-500"${_scopeId}>*</span></label>`);
                _push2(ssrRenderComponent(_component_PrimeInputText, {
                  modelValue: item.name,
                  "onUpdate:modelValue": ($event) => item.name = $event,
                  modelModifiers: { trim: true },
                  placeholder: `Item-${index + 1}`,
                  fluid: ""
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="grid form-control"${_scopeId}><label${_scopeId}>Quantity <span class="text-red-500"${_scopeId}>*</span></label>`);
                _push2(ssrRenderComponent(_component_PrimeInputNumber, {
                  min: 1,
                  modelValue: item.quantity,
                  "onUpdate:modelValue": ($event) => item.quantity = $event,
                  fluid: ""
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="grid form-control"${_scopeId}><label${_scopeId}>Unit Price ($) <span class="text-red-500"${_scopeId}>*</span></label>`);
                _push2(ssrRenderComponent(_component_PrimeInputNumber, {
                  modelValue: item.unitPrice,
                  "onUpdate:modelValue": ($event) => item.unitPrice = $event,
                  "max-fraction-digits": 2,
                  fluid: ""
                }, null, _parent2, _scopeId));
                _push2(`</div></div></div></div>`);
              });
              _push2(`<!--]--><div class="flex items-center gap-2"${_scopeId}><span${_scopeId}>Total Price: </span><span class="font-bold"${_scopeId}>$${ssrInterpolate(unref(updatedOrder).totalPrice)}</span></div><div class="flex justify-end gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PrimeButton, {
                onClick: resetItems,
                label: "Reset",
                icon: "pi pi-replay",
                size: "small",
                severity: "secondary"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PrimeButton, {
                onClick: updateOrder,
                loading: unref(loading),
                disabled: unref(loading) || unref(shouldDisableItemsSaveBtn),
                label: "Save",
                icon: "pi pi-save",
                size: "small"
              }, null, _parent2, _scopeId));
              _push2(`</div></section>`);
            } else {
              return [
                createVNode("section", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                  createVNode("div", null, [
                    createVNode(_component_PrimeButton, {
                      onClick: addNewItem,
                      label: "Add item",
                      size: "small",
                      icon: "pi pi-plus"
                    })
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(updatedOrder).items, (item, index) => {
                    var _a;
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
                            disabled: ((_a = unref(updatedOrder).items) == null ? void 0 : _a.length) === 1
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
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", null, "Total Price: "),
                    createVNode("span", { class: "font-bold" }, "$" + toDisplayString(unref(updatedOrder).totalPrice), 1)
                  ]),
                  createVNode("div", { class: "flex justify-end gap-2" }, [
                    createVNode(_component_PrimeButton, {
                      onClick: resetItems,
                      label: "Reset",
                      icon: "pi pi-replay",
                      size: "small",
                      severity: "secondary"
                    }),
                    createVNode(_component_PrimeButton, {
                      onClick: updateOrder,
                      loading: unref(loading),
                      disabled: unref(loading) || unref(shouldDisableItemsSaveBtn),
                      label: "Save",
                      icon: "pi pi-save",
                      size: "small"
                    }, null, 8, ["loading", "disabled"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_PrimeFieldset, {
          legend: "3. Delivery Information",
          toggleable: "",
          collapsed: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<section class="bg-[--p-surface-50] rounded-md p-2 grid gap-4"${_scopeId}><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-2"${_scopeId}><div class="grid form-control"${_scopeId}><label${_scopeId}>Order Status <span class="text-red-500"${_scopeId}>*</span></label>`);
              _push2(ssrRenderComponent(_component_PrimeSelect, {
                modelValue: unref(updatedOrder).status,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).status = $event,
                options: unref(orderStatuses)
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="grid form-control"${_scopeId}><label${_scopeId}>Freight Mode <span class="text-red-500"${_scopeId}>*</span></label>`);
              _push2(ssrRenderComponent(_component_PrimeSelect, {
                modelValue: unref(updatedOrder).freightMode,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).freightMode = $event,
                options: unref(freightModes)
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="grid form-control"${_scopeId}><label${_scopeId}>Delivery Mode <span class="text-red-500"${_scopeId}>*</span></label>`);
              _push2(ssrRenderComponent(_component_PrimeSelect, {
                modelValue: unref(updatedOrder).deliveryMode,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).deliveryMode = $event,
                options: unref(deliveryModes)
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="grid form-control"${_scopeId}><label${_scopeId}>Estimated Delivery Date <span class="text-red-500"${_scopeId}>*</span></label>`);
              _push2(ssrRenderComponent(_component_PrimeDatePicker, {
                modelValue: unref(updatedOrder).estimatedDelivery,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).estimatedDelivery = $event,
                "date-format": "dd M, yy",
                fluid: ""
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="flex justify-end gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PrimeButton, {
                onClick: resetDelivery,
                label: "Reset",
                icon: "pi pi-replay",
                size: "small",
                severity: "secondary"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PrimeButton, {
                onClick: updateOrder,
                loading: unref(loading),
                disabled: unref(loading) || unref(shouldDisableDeliverySaveBtn),
                label: "Save",
                icon: "pi pi-save",
                size: "small"
              }, null, _parent2, _scopeId));
              _push2(`</div></section>`);
            } else {
              return [
                createVNode("section", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                  createVNode("div", { class: "grid md:grid-cols-2 lg:grid-cols-4 gap-2" }, [
                    createVNode("div", { class: "grid form-control" }, [
                      createVNode("label", null, [
                        createTextVNode("Order Status "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_PrimeSelect, {
                        modelValue: unref(updatedOrder).status,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).status = $event,
                        options: unref(orderStatuses)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    createVNode("div", { class: "grid form-control" }, [
                      createVNode("label", null, [
                        createTextVNode("Freight Mode "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_PrimeSelect, {
                        modelValue: unref(updatedOrder).freightMode,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).freightMode = $event,
                        options: unref(freightModes)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    createVNode("div", { class: "grid form-control" }, [
                      createVNode("label", null, [
                        createTextVNode("Delivery Mode "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_PrimeSelect, {
                        modelValue: unref(updatedOrder).deliveryMode,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).deliveryMode = $event,
                        options: unref(deliveryModes)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    createVNode("div", { class: "grid form-control" }, [
                      createVNode("label", null, [
                        createTextVNode("Estimated Delivery Date "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_PrimeDatePicker, {
                        modelValue: unref(updatedOrder).estimatedDelivery,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).estimatedDelivery = $event,
                        "date-format": "dd M, yy",
                        fluid: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-end gap-2" }, [
                    createVNode(_component_PrimeButton, {
                      onClick: resetDelivery,
                      label: "Reset",
                      icon: "pi pi-replay",
                      size: "small",
                      severity: "secondary"
                    }),
                    createVNode(_component_PrimeButton, {
                      onClick: updateOrder,
                      loading: unref(loading),
                      disabled: unref(loading) || unref(shouldDisableDeliverySaveBtn),
                      label: "Save",
                      icon: "pi pi-save",
                      size: "small"
                    }, null, 8, ["loading", "disabled"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_PrimeFieldset, {
          legend: "4. Destination",
          toggleable: "",
          collapsed: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<section class="bg-[--p-surface-50] rounded-md p-2 grid gap-4"${_scopeId}><div class="w-fit"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_LocationPickerDialog, {
                onLocationPicked: (location) => onLocationPicked(unref(updatedOrder), "destination", location)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_PrimeButton, {
                      label: "Search or click destination on map",
                      outlined: "",
                      icon: "pi pi-map"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_PrimeButton, {
                        label: "Search or click destination on map",
                        outlined: "",
                        icon: "pi pi-map"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid md:grid-cols-12 gap-2"${_scopeId}><div class="grid form-control md:col-span-12 lg:col-span-6"${_scopeId}><label${_scopeId}>Address <span class="text-red-500"${_scopeId}>*</span></label>`);
              _push2(ssrRenderComponent(_component_PrimeInputText, {
                modelValue: unref(updatedOrder).destination.address,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.address = $event,
                modelModifiers: { trim: true },
                fluid: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="grid form-control md:col-span-6 lg:col-span-6"${_scopeId}><label${_scopeId}>Name <small${_scopeId}>(optional)</small></label>`);
              _push2(ssrRenderComponent(_component_PrimeInputText, {
                modelValue: unref(updatedOrder).destination.name,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.name = $event,
                modelModifiers: { trim: true },
                placeholder: "e.g. BFE Warehouse",
                fluid: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="grid form-control md:col-span-6 lg:col-span-4"${_scopeId}><label${_scopeId}>City <span class="text-red-500"${_scopeId}>*</span></label>`);
              _push2(ssrRenderComponent(_component_PrimeInputText, {
                modelValue: unref(updatedOrder).destination.city,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.city = $event,
                modelModifiers: { trim: true },
                fluid: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="grid form-control md:col-span-6 lg:col-span-4"${_scopeId}><label${_scopeId}>State or Region <span class="text-red-500"${_scopeId}>*</span></label>`);
              _push2(ssrRenderComponent(_component_PrimeInputText, {
                modelValue: unref(updatedOrder).destination.state,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.state = $event,
                modelModifiers: { trim: true },
                fluid: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="grid form-control md:col-span-6 lg:col-span-4"${_scopeId}><label${_scopeId}>Country <span class="text-red-500"${_scopeId}>*</span></label>`);
              _push2(ssrRenderComponent(_component_PrimeInputText, {
                modelValue: unref(updatedOrder).destination.country,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.country = $event,
                modelModifiers: { trim: true },
                fluid: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="grid form-control md:col-span-4 lg:col-span-4"${_scopeId}><label${_scopeId}>Country Code<span class="text-red-500"${_scopeId}>*</span></label>`);
              _push2(ssrRenderComponent(_component_PrimeInputText, {
                modelValue: unref(updatedOrder).destination.countryCode,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.countryCode = $event,
                modelModifiers: { trim: true },
                fluid: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="grid form-control md:col-span-4 lg:col-span-4"${_scopeId}><label${_scopeId}>Latitude<span class="text-red-500"${_scopeId}>*</span></label>`);
              _push2(ssrRenderComponent(_component_PrimeInputNumber, {
                modelValue: unref(updatedOrder).destination.lat,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.lat = $event,
                min: -90,
                max: 90,
                grouping: false,
                fluid: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="grid form-control md:col-span-4 lg:col-span-4"${_scopeId}><label${_scopeId}>Longitude<span class="text-red-500"${_scopeId}>*</span></label>`);
              _push2(ssrRenderComponent(_component_PrimeInputNumber, {
                modelValue: unref(updatedOrder).destination.lng,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.lng = $event,
                min: -180,
                max: 180,
                grouping: false,
                fluid: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="grid form-control md:col-span-12"${_scopeId}><label${_scopeId}>Description <small${_scopeId}>(optional)</small></label>`);
              _push2(ssrRenderComponent(_component_PrimeTextarea, {
                modelValue: unref(updatedOrder).destination.description,
                "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.description = $event,
                modelModifiers: { trim: true },
                rows: "4",
                class: "resize-none",
                fluid: ""
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="flex justify-end gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PrimeButton, {
                onClick: resetDestination,
                label: "Reset",
                icon: "pi pi-replay",
                size: "small",
                severity: "secondary"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PrimeButton, {
                onClick: updateOrder,
                loading: unref(loading),
                disabled: unref(loading) || unref(shouldDisableDestinationSaveBtn),
                label: "Save",
                icon: "pi pi-save",
                size: "small"
              }, null, _parent2, _scopeId));
              _push2(`</div></section>`);
            } else {
              return [
                createVNode("section", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                  createVNode("div", { class: "w-fit" }, [
                    createVNode(_component_LocationPickerDialog, {
                      onLocationPicked: (location) => onLocationPicked(unref(updatedOrder), "destination", location)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_PrimeButton, {
                          label: "Search or click destination on map",
                          outlined: "",
                          icon: "pi pi-map"
                        })
                      ]),
                      _: 1
                    }, 8, ["onLocationPicked"])
                  ]),
                  createVNode("div", { class: "grid md:grid-cols-12 gap-2" }, [
                    createVNode("div", { class: "grid form-control md:col-span-12 lg:col-span-6" }, [
                      createVNode("label", null, [
                        createTextVNode("Address "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_PrimeInputText, {
                        modelValue: unref(updatedOrder).destination.address,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.address = $event,
                        modelModifiers: { trim: true },
                        fluid: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid form-control md:col-span-6 lg:col-span-6" }, [
                      createVNode("label", null, [
                        createTextVNode("Name "),
                        createVNode("small", null, "(optional)")
                      ]),
                      createVNode(_component_PrimeInputText, {
                        modelValue: unref(updatedOrder).destination.name,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.name = $event,
                        modelModifiers: { trim: true },
                        placeholder: "e.g. BFE Warehouse",
                        fluid: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid form-control md:col-span-6 lg:col-span-4" }, [
                      createVNode("label", null, [
                        createTextVNode("City "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_PrimeInputText, {
                        modelValue: unref(updatedOrder).destination.city,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.city = $event,
                        modelModifiers: { trim: true },
                        fluid: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid form-control md:col-span-6 lg:col-span-4" }, [
                      createVNode("label", null, [
                        createTextVNode("State or Region "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_PrimeInputText, {
                        modelValue: unref(updatedOrder).destination.state,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.state = $event,
                        modelModifiers: { trim: true },
                        fluid: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid form-control md:col-span-6 lg:col-span-4" }, [
                      createVNode("label", null, [
                        createTextVNode("Country "),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_PrimeInputText, {
                        modelValue: unref(updatedOrder).destination.country,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.country = $event,
                        modelModifiers: { trim: true },
                        fluid: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid form-control md:col-span-4 lg:col-span-4" }, [
                      createVNode("label", null, [
                        createTextVNode("Country Code"),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_PrimeInputText, {
                        modelValue: unref(updatedOrder).destination.countryCode,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.countryCode = $event,
                        modelModifiers: { trim: true },
                        fluid: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid form-control md:col-span-4 lg:col-span-4" }, [
                      createVNode("label", null, [
                        createTextVNode("Latitude"),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_PrimeInputNumber, {
                        modelValue: unref(updatedOrder).destination.lat,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.lat = $event,
                        min: -90,
                        max: 90,
                        grouping: false,
                        fluid: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid form-control md:col-span-4 lg:col-span-4" }, [
                      createVNode("label", null, [
                        createTextVNode("Longitude"),
                        createVNode("span", { class: "text-red-500" }, "*")
                      ]),
                      createVNode(_component_PrimeInputNumber, {
                        modelValue: unref(updatedOrder).destination.lng,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.lng = $event,
                        min: -180,
                        max: 180,
                        grouping: false,
                        fluid: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid form-control md:col-span-12" }, [
                      createVNode("label", null, [
                        createTextVNode("Description "),
                        createVNode("small", null, "(optional)")
                      ]),
                      createVNode(_component_PrimeTextarea, {
                        modelValue: unref(updatedOrder).destination.description,
                        "onUpdate:modelValue": ($event) => unref(updatedOrder).destination.description = $event,
                        modelModifiers: { trim: true },
                        rows: "4",
                        class: "resize-none",
                        fluid: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-end gap-2" }, [
                    createVNode(_component_PrimeButton, {
                      onClick: resetDestination,
                      label: "Reset",
                      icon: "pi pi-replay",
                      size: "small",
                      severity: "secondary"
                    }),
                    createVNode(_component_PrimeButton, {
                      onClick: updateOrder,
                      loading: unref(loading),
                      disabled: unref(loading) || unref(shouldDisableDestinationSaveBtn),
                      label: "Save",
                      icon: "pi pi-save",
                      size: "small"
                    }, null, 8, ["loading", "disabled"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_PrimeFieldset, {
          legend: "5. Tracking Updates",
          toggleable: "",
          collapsed: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<section class="bg-[--p-surface-50] rounded-md p-2 grid gap-4"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PrimeButton, {
                onClick: addTrackingUpdate,
                label: "Add Update",
                size: "small",
                icon: "pi pi-plus"
              }, null, _parent2, _scopeId));
              _push2(`</div><!--[-->`);
              ssrRenderList(unref(updatedOrder).trackingUpdates, (item, index) => {
                _push2(`<div class="border rounded-lg p-2 grid gap-4"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between"${_scopeId}><p class="font-semibold"${_scopeId}>${ssrInterpolate(index + 1)}. ${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(item.timestamp, "DD MMM, YYYY hh:mm a"))}</p><div class="flex items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_PrimeButton, {
                  onClick: ($event) => resetTrackingUpdate(item._id),
                  severity: "secondary",
                  icon: "pi pi-replay",
                  size: "small"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_PrimeButton, {
                  onClick: ($event) => removeTrackingUpdate(item._id),
                  severity: "danger",
                  icon: "pi pi-trash",
                  size: "small"
                }, null, _parent2, _scopeId));
                _push2(`</div></div><div class="grid md:grid-cols-3 gap-2"${_scopeId}><div class="grid form-control"${_scopeId}><label${_scopeId}>Status <span class="text-red-500"${_scopeId}>*</span></label>`);
                _push2(ssrRenderComponent(_component_PrimeInputText, {
                  modelValue: item.status,
                  "onUpdate:modelValue": ($event) => item.status = $event,
                  modelModifiers: { trim: true },
                  disabled: "",
                  fluid: ""
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="grid form-control"${_scopeId}><label${_scopeId}>Severity <span class="text-red-500"${_scopeId}>*</span></label>`);
                _push2(ssrRenderComponent(_component_PrimeSelect, {
                  modelValue: item.severity,
                  "onUpdate:modelValue": ($event) => item.severity = $event,
                  options: unref(trackingUpdateSeverities)
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="grid form-control"${_scopeId}><label${_scopeId}>Timestamp <span class="text-red-500"${_scopeId}>*</span></label>`);
                _push2(ssrRenderComponent(_component_PrimeDatePicker, {
                  modelValue: item.timestamp,
                  "onUpdate:modelValue": ($event) => item.timestamp = $event,
                  showTime: "",
                  hourFormat: "12",
                  "date-format": "dd M, yy",
                  fluid: ""
                }, null, _parent2, _scopeId));
                _push2(`</div></div><div class="grid form-control md:col-span-3"${_scopeId}><label${_scopeId}>Comment <span class="text-red-500"${_scopeId}>*</span></label>`);
                _push2(ssrRenderComponent(_component_PrimeTextarea, {
                  modelValue: item.comment,
                  "onUpdate:modelValue": ($event) => item.comment = $event,
                  modelModifiers: { trim: true },
                  rows: "3",
                  class: "resize-none",
                  fluid: ""
                }, null, _parent2, _scopeId));
                _push2(`</div></div><p class="font-semibold"${_scopeId}>Location Data</p><div class="w-fit"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_LocationPickerDialog, {
                  onLocationPicked: (location) => onLocationPicked(item, "location", location)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_PrimeButton, {
                        label: "Search or click destination on map",
                        outlined: "",
                        icon: "pi pi-map"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_PrimeButton, {
                          label: "Search or click destination on map",
                          outlined: "",
                          icon: "pi pi-map"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="grid md:grid-cols-12 gap-2"${_scopeId}><div class="grid form-control md:col-span-12 lg:col-span-6"${_scopeId}><label${_scopeId}>Address <span class="text-red-500"${_scopeId}>*</span></label>`);
                _push2(ssrRenderComponent(_component_PrimeInputText, {
                  modelValue: item.location.address,
                  "onUpdate:modelValue": ($event) => item.location.address = $event,
                  modelModifiers: { trim: true },
                  fluid: ""
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="grid form-control md:col-span-6 lg:col-span-6"${_scopeId}><label${_scopeId}>Name <small${_scopeId}>(optional)</small></label>`);
                _push2(ssrRenderComponent(_component_PrimeInputText, {
                  modelValue: item.location.name,
                  "onUpdate:modelValue": ($event) => item.location.name = $event,
                  modelModifiers: { trim: true },
                  placeholder: "e.g. BFE Warehouse",
                  fluid: ""
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="grid form-control md:col-span-6 lg:col-span-4"${_scopeId}><label${_scopeId}>City <span class="text-red-500"${_scopeId}>*</span></label>`);
                _push2(ssrRenderComponent(_component_PrimeInputText, {
                  modelValue: item.location.city,
                  "onUpdate:modelValue": ($event) => item.location.city = $event,
                  modelModifiers: { trim: true },
                  fluid: ""
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="grid form-control md:col-span-6 lg:col-span-4"${_scopeId}><label${_scopeId}>State or Region <span class="text-red-500"${_scopeId}>*</span></label>`);
                _push2(ssrRenderComponent(_component_PrimeInputText, {
                  modelValue: item.location.state,
                  "onUpdate:modelValue": ($event) => item.location.state = $event,
                  modelModifiers: { trim: true },
                  fluid: ""
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="grid form-control md:col-span-6 lg:col-span-4"${_scopeId}><label${_scopeId}>Country <span class="text-red-500"${_scopeId}>*</span></label>`);
                _push2(ssrRenderComponent(_component_PrimeInputText, {
                  modelValue: item.location.country,
                  "onUpdate:modelValue": ($event) => item.location.country = $event,
                  modelModifiers: { trim: true },
                  fluid: ""
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="grid form-control md:col-span-4 lg:col-span-4"${_scopeId}><label${_scopeId}>Country Code<span class="text-red-500"${_scopeId}>*</span></label>`);
                _push2(ssrRenderComponent(_component_PrimeInputText, {
                  modelValue: item.location.countryCode,
                  "onUpdate:modelValue": ($event) => item.location.countryCode = $event,
                  modelModifiers: { trim: true },
                  fluid: ""
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="grid form-control md:col-span-4 lg:col-span-4"${_scopeId}><label${_scopeId}>Latitude<span class="text-red-500"${_scopeId}>*</span></label>`);
                _push2(ssrRenderComponent(_component_PrimeInputNumber, {
                  modelValue: item.location.lat,
                  "onUpdate:modelValue": ($event) => item.location.lat = $event,
                  min: -90,
                  max: 90,
                  grouping: false,
                  fluid: ""
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="grid form-control md:col-span-4 lg:col-span-4"${_scopeId}><label${_scopeId}>Longitude<span class="text-red-500"${_scopeId}>*</span></label>`);
                _push2(ssrRenderComponent(_component_PrimeInputNumber, {
                  modelValue: item.location.lng,
                  "onUpdate:modelValue": ($event) => item.location.lng = $event,
                  min: -180,
                  max: 180,
                  grouping: false,
                  fluid: ""
                }, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              });
              _push2(`<!--]--><div class="flex justify-end gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PrimeButton, {
                onClick: resetAllTrackingUpdates,
                label: "Reset",
                icon: "pi pi-replay",
                size: "small",
                severity: "secondary"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PrimeButton, {
                onClick: updateOrder,
                loading: unref(loading),
                disabled: unref(loading) || unref(shouldDisableTrackingUpdateSaveBtn),
                label: "Save",
                icon: "pi pi-save",
                size: "small"
              }, null, _parent2, _scopeId));
              _push2(`</div></section>`);
            } else {
              return [
                createVNode("section", { class: "bg-[--p-surface-50] rounded-md p-2 grid gap-4" }, [
                  createVNode("div", null, [
                    createVNode(_component_PrimeButton, {
                      onClick: addTrackingUpdate,
                      label: "Add Update",
                      size: "small",
                      icon: "pi pi-plus"
                    })
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(updatedOrder).trackingUpdates, (item, index) => {
                    return openBlock(), createBlock("div", {
                      key: item._id,
                      class: "border rounded-lg p-2 grid gap-4"
                    }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("p", { class: "font-semibold" }, toDisplayString(index + 1) + ". " + toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(item.timestamp, "DD MMM, YYYY hh:mm a")), 1),
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_PrimeButton, {
                              onClick: ($event) => resetTrackingUpdate(item._id),
                              severity: "secondary",
                              icon: "pi pi-replay",
                              size: "small"
                            }, null, 8, ["onClick"]),
                            createVNode(_component_PrimeButton, {
                              onClick: ($event) => removeTrackingUpdate(item._id),
                              severity: "danger",
                              icon: "pi pi-trash",
                              size: "small"
                            }, null, 8, ["onClick"])
                          ])
                        ]),
                        createVNode("div", { class: "grid md:grid-cols-3 gap-2" }, [
                          createVNode("div", { class: "grid form-control" }, [
                            createVNode("label", null, [
                              createTextVNode("Status "),
                              createVNode("span", { class: "text-red-500" }, "*")
                            ]),
                            createVNode(_component_PrimeInputText, {
                              modelValue: item.status,
                              "onUpdate:modelValue": ($event) => item.status = $event,
                              modelModifiers: { trim: true },
                              disabled: "",
                              fluid: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "grid form-control" }, [
                            createVNode("label", null, [
                              createTextVNode("Severity "),
                              createVNode("span", { class: "text-red-500" }, "*")
                            ]),
                            createVNode(_component_PrimeSelect, {
                              modelValue: item.severity,
                              "onUpdate:modelValue": ($event) => item.severity = $event,
                              options: unref(trackingUpdateSeverities)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ]),
                          createVNode("div", { class: "grid form-control" }, [
                            createVNode("label", null, [
                              createTextVNode("Timestamp "),
                              createVNode("span", { class: "text-red-500" }, "*")
                            ]),
                            createVNode(_component_PrimeDatePicker, {
                              modelValue: item.timestamp,
                              "onUpdate:modelValue": ($event) => item.timestamp = $event,
                              showTime: "",
                              hourFormat: "12",
                              "date-format": "dd M, yy",
                              fluid: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "grid form-control md:col-span-3" }, [
                          createVNode("label", null, [
                            createTextVNode("Comment "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          createVNode(_component_PrimeTextarea, {
                            modelValue: item.comment,
                            "onUpdate:modelValue": ($event) => item.comment = $event,
                            modelModifiers: { trim: true },
                            rows: "3",
                            class: "resize-none",
                            fluid: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("p", { class: "font-semibold" }, "Location Data"),
                      createVNode("div", { class: "w-fit" }, [
                        createVNode(_component_LocationPickerDialog, {
                          onLocationPicked: (location) => onLocationPicked(item, "location", location)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_PrimeButton, {
                              label: "Search or click destination on map",
                              outlined: "",
                              icon: "pi pi-map"
                            })
                          ]),
                          _: 2
                        }, 1032, ["onLocationPicked"])
                      ]),
                      createVNode("div", { class: "grid md:grid-cols-12 gap-2" }, [
                        createVNode("div", { class: "grid form-control md:col-span-12 lg:col-span-6" }, [
                          createVNode("label", null, [
                            createTextVNode("Address "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          createVNode(_component_PrimeInputText, {
                            modelValue: item.location.address,
                            "onUpdate:modelValue": ($event) => item.location.address = $event,
                            modelModifiers: { trim: true },
                            fluid: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "grid form-control md:col-span-6 lg:col-span-6" }, [
                          createVNode("label", null, [
                            createTextVNode("Name "),
                            createVNode("small", null, "(optional)")
                          ]),
                          createVNode(_component_PrimeInputText, {
                            modelValue: item.location.name,
                            "onUpdate:modelValue": ($event) => item.location.name = $event,
                            modelModifiers: { trim: true },
                            placeholder: "e.g. BFE Warehouse",
                            fluid: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "grid form-control md:col-span-6 lg:col-span-4" }, [
                          createVNode("label", null, [
                            createTextVNode("City "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          createVNode(_component_PrimeInputText, {
                            modelValue: item.location.city,
                            "onUpdate:modelValue": ($event) => item.location.city = $event,
                            modelModifiers: { trim: true },
                            fluid: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "grid form-control md:col-span-6 lg:col-span-4" }, [
                          createVNode("label", null, [
                            createTextVNode("State or Region "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          createVNode(_component_PrimeInputText, {
                            modelValue: item.location.state,
                            "onUpdate:modelValue": ($event) => item.location.state = $event,
                            modelModifiers: { trim: true },
                            fluid: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "grid form-control md:col-span-6 lg:col-span-4" }, [
                          createVNode("label", null, [
                            createTextVNode("Country "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          createVNode(_component_PrimeInputText, {
                            modelValue: item.location.country,
                            "onUpdate:modelValue": ($event) => item.location.country = $event,
                            modelModifiers: { trim: true },
                            fluid: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "grid form-control md:col-span-4 lg:col-span-4" }, [
                          createVNode("label", null, [
                            createTextVNode("Country Code"),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          createVNode(_component_PrimeInputText, {
                            modelValue: item.location.countryCode,
                            "onUpdate:modelValue": ($event) => item.location.countryCode = $event,
                            modelModifiers: { trim: true },
                            fluid: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "grid form-control md:col-span-4 lg:col-span-4" }, [
                          createVNode("label", null, [
                            createTextVNode("Latitude"),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          createVNode(_component_PrimeInputNumber, {
                            modelValue: item.location.lat,
                            "onUpdate:modelValue": ($event) => item.location.lat = $event,
                            min: -90,
                            max: 90,
                            grouping: false,
                            fluid: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "grid form-control md:col-span-4 lg:col-span-4" }, [
                          createVNode("label", null, [
                            createTextVNode("Longitude"),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          createVNode(_component_PrimeInputNumber, {
                            modelValue: item.location.lng,
                            "onUpdate:modelValue": ($event) => item.location.lng = $event,
                            min: -180,
                            max: 180,
                            grouping: false,
                            fluid: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ]);
                  }), 128)),
                  createVNode("div", { class: "flex justify-end gap-2" }, [
                    createVNode(_component_PrimeButton, {
                      onClick: resetAllTrackingUpdates,
                      label: "Reset",
                      icon: "pi pi-replay",
                      size: "small",
                      severity: "secondary"
                    }),
                    createVNode(_component_PrimeButton, {
                      onClick: updateOrder,
                      loading: unref(loading),
                      disabled: unref(loading) || unref(shouldDisableTrackingUpdateSaveBtn),
                      label: "Save",
                      icon: "pi pi-save",
                      size: "small"
                    }, null, 8, ["loading", "disabled"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/orders/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.vue.mjs.map
