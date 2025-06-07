import { a as script, s as script$1, d as createError, u as useToast, _ as __nuxt_component_0 } from './server.mjs';
import __nuxt_component_0$1 from './index2117.mjs';
import { _ as __nuxt_component_2 } from './my-button.vue.mjs';
import { defineComponent, ref, unref, isRef, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, useTemplateRef, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { z } from 'zod';
import { s as site } from './index.mjs';
import { u as useErrorToast } from './use-error-toast.mjs';
import script$3 from './index222.mjs';
import script$2 from './index215.mjs';
import random from 'random-string-generator';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { u as useHead } from './v3.mjs';
import { _ as _sfc_main$3, a as _sfc_main$4 } from './affiliates.vue2.mjs';
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
import './index3.mjs';
import './index4.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "captcha",
  __ssrInlineRender: true,
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const visible = ref(false);
    const randomStr = ref();
    const input = ref();
    const error = ref();
    const generateCaptcha = async () => {
      visible.value = true;
      error.value = "";
      input.value = "";
      randomStr.value = random(6, "alphanumeric");
    };
    const submitCaptcha = () => {
      error.value = "";
      if (!input.value || input.value !== randomStr.value) {
        error.value = "Invalid captcha.";
        emit("submit", false);
        return;
      }
      emit("submit", true);
      visible.value = false;
      onHide();
    };
    function onHide() {
      input.value = "";
      randomStr.value = "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrimeDialog = script;
      const _component_PrimeButton = script$1;
      const _component_PrimeInputGroup = script$2;
      const _component_PrimeInputText = script$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_PrimeDialog, {
        header: "Captcha",
        visible: unref(visible),
        "onUpdate:visible": ($event) => isRef(visible) ? visible.value = $event : null,
        onHide,
        class: "font-rubik font-normal relative max-w-96"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full relative"${_scopeId}><div${_scopeId}><h4 class="font-bold text-lg"${_scopeId}>Are you human?</h4><p class="text-sm"${_scopeId}>Please enter the text in the image below</p><div class="flex flex-col gap-2 items-center justify-center mt-4"${_scopeId}><div class="relative bg-slate-200 text-slate-500 font-semibold" style="${ssrRenderStyle({ "width": "150px", "height": "70px" })}"${_scopeId}><div class="w-full h-full grid place-content-center text-lg select-none"${_scopeId}>${ssrInterpolate(unref(randomStr))}</div></div>`);
            _push2(ssrRenderComponent(_component_PrimeButton, {
              onClick: generateCaptcha,
              label: "Refresh",
              icon: "pi pi-replay",
              size: "small",
              severity: "secondary"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_PrimeInputGroup, { class: "w-full mt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PrimeInputText, {
                    modelValue: unref(input),
                    "onUpdate:modelValue": ($event) => isRef(input) ? input.value = $event : null,
                    size: "small"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PrimeButton, {
                    onClick: submitCaptcha,
                    size: "small",
                    label: "Submit",
                    icon: "pi pi-send",
                    disabled: !unref(input)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PrimeInputText, {
                      modelValue: unref(input),
                      "onUpdate:modelValue": ($event) => isRef(input) ? input.value = $event : null,
                      size: "small"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_PrimeButton, {
                      onClick: submitCaptcha,
                      size: "small",
                      label: "Submit",
                      icon: "pi pi-send",
                      disabled: !unref(input)
                    }, null, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-2"${_scopeId}>`);
            if (unref(error)) {
              _push2(`<small class="text-red-500"${_scopeId}>${ssrInterpolate(unref(error))}</small>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full relative" }, [
                createVNode("div", null, [
                  createVNode("h4", { class: "font-bold text-lg" }, "Are you human?"),
                  createVNode("p", { class: "text-sm" }, "Please enter the text in the image below"),
                  createVNode("div", { class: "flex flex-col gap-2 items-center justify-center mt-4" }, [
                    createVNode("div", {
                      class: "relative bg-slate-200 text-slate-500 font-semibold",
                      style: { "width": "150px", "height": "70px" }
                    }, [
                      createVNode("div", {
                        ref: "el",
                        class: "w-full h-full grid place-content-center text-lg select-none"
                      }, toDisplayString(unref(randomStr)), 513)
                    ]),
                    createVNode(_component_PrimeButton, {
                      onClick: generateCaptcha,
                      label: "Refresh",
                      icon: "pi pi-replay",
                      size: "small",
                      severity: "secondary"
                    })
                  ]),
                  createVNode(_component_PrimeInputGroup, { class: "w-full mt-4" }, {
                    default: withCtx(() => [
                      createVNode(_component_PrimeInputText, {
                        modelValue: unref(input),
                        "onUpdate:modelValue": ($event) => isRef(input) ? input.value = $event : null,
                        size: "small"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_PrimeButton, {
                        onClick: submitCaptcha,
                        size: "small",
                        label: "Submit",
                        icon: "pi pi-send",
                        disabled: !unref(input)
                      }, null, 8, ["disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-2" }, [
                    unref(error) ? (openBlock(), createBlock("small", {
                      key: 0,
                      class: "text-red-500"
                    }, toDisplayString(unref(error)), 1)) : createCommentVNode("", true)
                  ])
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

function useMail() {
  const mail = (options) => {
    if (!options.to || !options.text && !options.html) {
      throw createError({
        statusCode: 400,
        statusMessage: "No recipient or mail body provided"
      });
    }
    return $fetch("/api/mail", { method: "POST", body: options });
  };
  return mail;
}

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "contact-form",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const mail = useMail();
    const form = useTemplateRef("contact-form");
    const contact = ref({});
    const Schema = z.object({
      name: z.string({ message: "Full name is required " }),
      email: z.string({ message: "Email is required" }).email({ message: "Please, enter a valid email" }),
      phoneNumber: z.string({ message: "Phone number is required" }).min(3, { message: "Please, enter a valid phone number" }),
      country: z.string({ message: "Country is required" }),
      city: z.string({ message: "City is required" }),
      subject: z.string({ message: "Subject is required" }),
      message: z.string({ message: "Message is required" })
    });
    const validationResult = ref(null);
    const loading = ref(false);
    const submitForm = async () => {
      var _a;
      validationResult.value = await Schema.safeParseAsync(contact.value);
      if (!validationResult.value.success) {
        (_a = form.value) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
        return;
      }
      const { data } = validationResult.value;
      const html = `
  <p style="margin: 0 0 1rem 0">You have a new contact request from your website.</p>
  <p>Name: <span style="font-weight: 600">${data.name}</span></p>
  <p>Email: <span style="font-weight: 600">${data.email}</span></p>
  <p>Phone Number: <span style="font-weight: 600">${data.phoneNumber}</span></p>
  <p>Country: <span style="font-weight: 600">${data.country}</span></p>
  <p>City: <span style="font-weight: 600">${data.city}</span></p>
  <p>Subject: <span style="font-weight: 600">${data.subject}</span></p>
  <p>Message: <span style="font-weight: 600">${data.message}</span></p>
  `;
      loading.value = true;
      try {
        await mail({
          to: site.emails[0],
          subject: "Contact Request",
          html
        });
        toast.add({
          severity: "success",
          summary: "Success",
          detail: "Your message has been sent successfully",
          life: 3e3
        });
        contact.value = {};
      } catch (error) {
        useErrorToast(error, toast);
      } finally {
        loading.value = false;
      }
    };
    const handleCaptchaSubmit = (value) => {
      if (value) {
        submitForm();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
      const _component_Captcha = _sfc_main$2;
      const _component_MyButton = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: "contact-form",
        class: "grid md:grid-cols-2 gap-5"
      }, _attrs))} data-v-0b082c34><div class="form-control" data-v-0b082c34><label for="full-name" data-v-0b082c34>Full Name *</label><input type="text" id="full-name"${ssrRenderAttr("value", unref(contact).name)} placeholder="John Doe" class="my-input" data-v-0b082c34>`);
      if ((_b = (_a = unref(validationResult)) == null ? void 0 : _a.error) == null ? void 0 : _b.formErrors.fieldErrors.name) {
        _push(`<small class="text-accent" data-v-0b082c34>${ssrInterpolate((_c = unref(validationResult).error.formErrors.fieldErrors.name) == null ? void 0 : _c[0])}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-control" data-v-0b082c34><label for="phone-number" data-v-0b082c34>Phone Number *</label><input type="text" id="phone-number"${ssrRenderAttr("value", unref(contact).phoneNumber)} placeholder="+1234567890" class="my-input" data-v-0b082c34>`);
      if ((_e = (_d = unref(validationResult)) == null ? void 0 : _d.error) == null ? void 0 : _e.formErrors.fieldErrors.phoneNumber) {
        _push(`<small class="text-accent" data-v-0b082c34>${ssrInterpolate((_f = unref(validationResult).error.formErrors.fieldErrors.phoneNumber) == null ? void 0 : _f[0])}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-control md:col-span-2" data-v-0b082c34><label for="email" data-v-0b082c34>Email *</label><input type="email" id="email"${ssrRenderAttr("value", unref(contact).email)} placeholder="johndoe@example.com" class="my-input" data-v-0b082c34>`);
      if ((_h = (_g = unref(validationResult)) == null ? void 0 : _g.error) == null ? void 0 : _h.formErrors.fieldErrors.email) {
        _push(`<small class="text-accent" data-v-0b082c34>${ssrInterpolate((_i = unref(validationResult).error.formErrors.fieldErrors.email) == null ? void 0 : _i[0])}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-control" data-v-0b082c34><label for="country" data-v-0b082c34>Country *</label><input type="text" id="country"${ssrRenderAttr("value", unref(contact).country)} placeholder="e.g. USA" class="my-input" data-v-0b082c34>`);
      if ((_k = (_j = unref(validationResult)) == null ? void 0 : _j.error) == null ? void 0 : _k.formErrors.fieldErrors.country) {
        _push(`<small class="text-accent" data-v-0b082c34>${ssrInterpolate((_l = unref(validationResult).error.formErrors.fieldErrors.country) == null ? void 0 : _l[0])}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-control" data-v-0b082c34><label for="city" data-v-0b082c34>City *</label><input type="text" id="city"${ssrRenderAttr("value", unref(contact).city)} placeholder="e.g. New York" class="my-input" data-v-0b082c34>`);
      if ((_n = (_m = unref(validationResult)) == null ? void 0 : _m.error) == null ? void 0 : _n.formErrors.fieldErrors.city) {
        _push(`<small class="text-accent" data-v-0b082c34>${ssrInterpolate((_o = unref(validationResult).error.formErrors.fieldErrors.city) == null ? void 0 : _o[0])}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-control md:col-span-2" data-v-0b082c34><label for="subject" data-v-0b082c34>Subject *</label><input type="text" id="subject"${ssrRenderAttr("value", unref(contact).subject)} placeholder="e.g. Quote Request" class="my-input" data-v-0b082c34>`);
      if ((_q = (_p = unref(validationResult)) == null ? void 0 : _p.error) == null ? void 0 : _q.formErrors.fieldErrors.subject) {
        _push(`<small class="text-accent" data-v-0b082c34>${ssrInterpolate((_r = unref(validationResult).error.formErrors.fieldErrors.subject) == null ? void 0 : _r[0])}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-control md:col-span-2" data-v-0b082c34><label for="message" data-v-0b082c34>Message *</label><textarea id="message" rows="6" placeholder="Your message goes here" class="my-input" data-v-0b082c34>${ssrInterpolate(unref(contact).message)}</textarea>`);
      if ((_t = (_s = unref(validationResult)) == null ? void 0 : _s.error) == null ? void 0 : _t.formErrors.fieldErrors.message) {
        _push(`<small class="text-accent" data-v-0b082c34>${ssrInterpolate((_u = unref(validationResult).error.formErrors.fieldErrors.message) == null ? void 0 : _u[0])}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center justify-center md:col-span-2 mt-4" data-v-0b082c34>`);
      _push(ssrRenderComponent(_component_Captcha, { onSubmit: handleCaptchaSubmit }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MyButton, {
              loading: unref(loading),
              variant: "secondary",
              text: "Send Message",
              icon: "lucide:send"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_MyButton, {
                loading: unref(loading),
                variant: "secondary",
                text: "Send Message",
                icon: "lucide:send"
              }, null, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact-form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0b082c34"]]);

const _imports_0 = "" + __buildAssetsURL("contact-us.XwfrBarW.jpg");

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contact"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SubtitleText = _sfc_main$3;
      const _component_Icon = __nuxt_component_0$1;
      const _component_ContactForm = __nuxt_component_3;
      const _component_Affiliates = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "main-default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="w-screen h-[36rem] relative flex items-center gap-16 px-4 lg:px-24"${_scopeId}><div class="text-white flex flex-col gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SubtitleText, {
              text: "Reach Out To Us",
              dark: ""
            }, null, _parent2, _scopeId));
            _push2(`<h1 class="rubik text-4xl md:text-6xl font-bold text-white text-balance"${_scopeId}> Contact Us </h1><p class="font-medium max-w-[36rem]"${_scopeId}> Get in touch with us and we&#39;ll respond as soon as we can. We typically reply within the hour. </p></div><div class="w-full h-full absolute left-0 bottom-0 -z-[9] bg-gradient-to-r from-primary-500/50 to-transparent"${_scopeId}></div><img${ssrRenderAttr("src", _imports_0)} class="w-full h-full object-cover object-top absolute left-0 bottom-0 -z-10"${_scopeId}></section><div class="py-20 lg:px-24 flex items-center justify-center"${_scopeId}><div class="max-w-[54rem] bg-primary-500 text-white py-12 px-6 md:py-16 md:px-24 flex flex-col gap-5 items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SubtitleText, {
              text: "Contact Form",
              dark: ""
            }, null, _parent2, _scopeId));
            _push2(`<h4 class="rubik font-semibold text-3xl md:text-4xl"${_scopeId}> Get In Touch With Us </h4><p${_scopeId}> We appreciate your interest please complete the form below and we will contact you to discuss your warehousing, distribution, air, ocean freight or any other logistics needs. </p><div class="w-full grid md:grid-cols-2 gap-12"${_scopeId}><div class="flex flex-col items-center justify-center gap-1"${_scopeId}><div class="aspect-square p-6 rounded-full bg-primary-400 grid place-content-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:mail",
              size: "1.75rem"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-sm font-medium text-center"${_scopeId}><p${_scopeId}>${ssrInterpolate(unref(site).emails[0])}</p><p${_scopeId}>${ssrInterpolate(unref(site).emails[1])}</p></div></div><div class="flex flex-col items-center justify-center gap-1"${_scopeId}><div class="aspect-square p-6 rounded-full bg-primary-400 grid place-content-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:clock",
              size: "1.75rem"
            }, null, _parent2, _scopeId));
            _push2(`</div><p class="text-sm font-medium text-center whitespace-pre-wrap"${_scopeId}>${ssrInterpolate(unref(site).openHours)}</p></div></div><div class="mt-10 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ContactForm, null, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            _push2(ssrRenderComponent(_component_Affiliates, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("section", { class: "w-screen h-[36rem] relative flex items-center gap-16 px-4 lg:px-24" }, [
                createVNode("div", { class: "text-white flex flex-col gap-6" }, [
                  createVNode(_component_SubtitleText, {
                    text: "Reach Out To Us",
                    dark: ""
                  }),
                  createVNode("h1", { class: "rubik text-4xl md:text-6xl font-bold text-white text-balance" }, " Contact Us "),
                  createVNode("p", { class: "font-medium max-w-[36rem]" }, " Get in touch with us and we'll respond as soon as we can. We typically reply within the hour. ")
                ]),
                createVNode("div", { class: "w-full h-full absolute left-0 bottom-0 -z-[9] bg-gradient-to-r from-primary-500/50 to-transparent" }),
                createVNode("img", {
                  src: _imports_0,
                  class: "w-full h-full object-cover object-top absolute left-0 bottom-0 -z-10"
                })
              ]),
              createVNode("div", { class: "py-20 lg:px-24 flex items-center justify-center" }, [
                createVNode("div", { class: "max-w-[54rem] bg-primary-500 text-white py-12 px-6 md:py-16 md:px-24 flex flex-col gap-5 items-center justify-center" }, [
                  createVNode(_component_SubtitleText, {
                    text: "Contact Form",
                    dark: ""
                  }),
                  createVNode("h4", { class: "rubik font-semibold text-3xl md:text-4xl" }, " Get In Touch With Us "),
                  createVNode("p", null, " We appreciate your interest please complete the form below and we will contact you to discuss your warehousing, distribution, air, ocean freight or any other logistics needs. "),
                  createVNode("div", { class: "w-full grid md:grid-cols-2 gap-12" }, [
                    createVNode("div", { class: "flex flex-col items-center justify-center gap-1" }, [
                      createVNode("div", { class: "aspect-square p-6 rounded-full bg-primary-400 grid place-content-center" }, [
                        createVNode(_component_Icon, {
                          name: "lucide:mail",
                          size: "1.75rem"
                        })
                      ]),
                      createVNode("div", { class: "text-sm font-medium text-center" }, [
                        createVNode("p", null, toDisplayString(unref(site).emails[0]), 1),
                        createVNode("p", null, toDisplayString(unref(site).emails[1]), 1)
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col items-center justify-center gap-1" }, [
                      createVNode("div", { class: "aspect-square p-6 rounded-full bg-primary-400 grid place-content-center" }, [
                        createVNode(_component_Icon, {
                          name: "lucide:clock",
                          size: "1.75rem"
                        })
                      ]),
                      createVNode("p", { class: "text-sm font-medium text-center whitespace-pre-wrap" }, toDisplayString(unref(site).openHours), 1)
                    ])
                  ]),
                  createVNode("div", { class: "mt-10 w-full" }, [
                    createVNode(_component_ContactForm)
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue4.mjs.map
