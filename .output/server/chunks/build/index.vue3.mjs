import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { t as toTitleCase } from './index15.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import script$3 from './index247.mjs';
import script$2 from './index240.mjs';
import script$1 from './index243.mjs';
import { s as script, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './v3.mjs';
import { u as useFetch } from './fetch.mjs';
import { u as useDateFormat } from './index16.mjs';
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
import '@primeuix/utils/dom';
import './index17.mjs';
import './index230.mjs';
import '@primeuix/utils';
import '@primeuix/utils/zindex';
import './index5.mjs';
import './index11.mjs';
import './index6.mjs';
import './index12.mjs';
import './index212.mjs';
import './index217.mjs';
import './index222.mjs';
import './index3.mjs';
import './index4.mjs';
import './index10.mjs';
import '@primeuix/utils/eventbus';
import './index252.mjs';
import './index219.mjs';
import './index13.mjs';
import './index14.mjs';
import './index18.mjs';
import './index8.mjs';
import './index19.mjs';
import './index24.mjs';
import './index20.mjs';
import './index227.mjs';
import './index21.mjs';
import './index30.mjs';
import 'vue-router';
import '@iconify/vue';
import '@primeuix/styles/base';
import 'mongoose';
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import './asyncData.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Admin"
    });
    const page = ref(0);
    const { data: count } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/orders/count", "$BDyEMCVgmz")), __temp = await __temp, __restore(), __temp);
    const { data: orders } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/orders", { query: { page: page.value }, watch: [page] }, "$-5AfRAlzgG")), __temp = await __temp, __restore(), __temp);
    const onRowClick = async (event) => {
      await navigateTo(`/admin/orders/${event.data._id}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_PrimeButton = script;
      const _component_PrimeDataTable = script$1;
      const _component_PrimeColumn = script$2;
      const _component_PrimePaginator = script$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-dvw p-4" }, _attrs))}><header class="border rounded-lg shadow-sm px-2 py-2 flex items-center justify-between gap-2"><h1 class="font-rubik text-xl font-bold text-[--p-primary-color]"> Orders: ${ssrInterpolate(unref(count) === null ? "Loading" : unref(count))}</h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/admin/create-order" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PrimeButton, {
              label: "New",
              icon: "pi pi-plus",
              size: "small"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PrimeButton, {
                label: "New",
                icon: "pi pi-plus",
                size: "small"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header><div class="mt-4">`);
      if (unref(orders) === null) {
        _push(`<div> Loading </div>`);
      } else {
        _push(`<div><div class="w-full overflow-x-auto">`);
        _push(ssrRenderComponent(_component_PrimeDataTable, {
          value: unref(orders),
          "striped-rows": "",
          selectionMode: "single",
          "data-key": "_id",
          onRowClick,
          class: "text-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_PrimeColumn, {
                field: "user.name",
                header: "Client"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PrimeColumn, {
                field: "orderId",
                header: "Order ID"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PrimeColumn, {
                field: "trackingNumber",
                header: "Tracking Number"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PrimeColumn, {
                field: "status",
                header: "Status"
              }, {
                body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(("toTitleCase" in _ctx ? _ctx.toTitleCase : unref(toTitleCase))(data.status))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(("toTitleCase" in _ctx ? _ctx.toTitleCase : unref(toTitleCase))(data.status)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PrimeColumn, {
                field: "freightMode",
                header: "Freight Mode"
              }, {
                body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(("toTitleCase" in _ctx ? _ctx.toTitleCase : unref(toTitleCase))(data.freightMode))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(("toTitleCase" in _ctx ? _ctx.toTitleCase : unref(toTitleCase))(data.freightMode)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PrimeColumn, { header: "Destination" }, {
                body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(data.destination.state)}, ${ssrInterpolate(data.destination.country)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(data.destination.state) + ", " + toDisplayString(data.destination.country), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PrimeColumn, { header: "Est. Delivery" }, {
                body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(data.estimatedDelivery, "DD MMM, YYYY"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(data.estimatedDelivery, "DD MMM, YYYY")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PrimeColumn, { header: "Created" }, {
                body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(data.createdAt, "DD MMM, YYYY hh:mm a"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(data.createdAt, "DD MMM, YYYY hh:mm a")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PrimeColumn, { header: "Last Updated" }, {
                body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(data.updatedAt, "DD MMM, YYYY hh:mm a"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(data.updatedAt, "DD MMM, YYYY hh:mm a")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_PrimeColumn, {
                  field: "user.name",
                  header: "Client"
                }),
                createVNode(_component_PrimeColumn, {
                  field: "orderId",
                  header: "Order ID"
                }),
                createVNode(_component_PrimeColumn, {
                  field: "trackingNumber",
                  header: "Tracking Number"
                }),
                createVNode(_component_PrimeColumn, {
                  field: "status",
                  header: "Status"
                }, {
                  body: withCtx(({ data }) => [
                    createTextVNode(toDisplayString(("toTitleCase" in _ctx ? _ctx.toTitleCase : unref(toTitleCase))(data.status)), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_PrimeColumn, {
                  field: "freightMode",
                  header: "Freight Mode"
                }, {
                  body: withCtx(({ data }) => [
                    createTextVNode(toDisplayString(("toTitleCase" in _ctx ? _ctx.toTitleCase : unref(toTitleCase))(data.freightMode)), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_PrimeColumn, { header: "Destination" }, {
                  body: withCtx(({ data }) => [
                    createTextVNode(toDisplayString(data.destination.state) + ", " + toDisplayString(data.destination.country), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_PrimeColumn, { header: "Est. Delivery" }, {
                  body: withCtx(({ data }) => [
                    createTextVNode(toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(data.estimatedDelivery, "DD MMM, YYYY")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_PrimeColumn, { header: "Created" }, {
                  body: withCtx(({ data }) => [
                    createTextVNode(toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(data.createdAt, "DD MMM, YYYY hh:mm a")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_PrimeColumn, { header: "Last Updated" }, {
                  body: withCtx(({ data }) => [
                    createTextVNode(toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(data.updatedAt, "DD MMM, YYYY hh:mm a")), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_PrimePaginator, {
          rows: 20,
          "total-records": unref(count) ?? unref(orders).length,
          onPage: (event) => page.value = event.page
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue3.mjs.map
