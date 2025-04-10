import { ref, provide, computed, inject, defineComponent, mergeModels, useModel, watch, mergeProps, useSSRContext, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import __nuxt_component_0 from './index2117.mjs';

function useAccordion(defaultOpenItems = [], props) {
  const openItems = ref([...defaultOpenItems]);
  const toggleItem = (name) => {
    if (props.multiple) {
      if (openItems.value.includes(name)) {
        openItems.value = openItems.value.filter((item) => item !== name);
      } else {
        openItems.value.push(name);
      }
    } else {
      openItems.value = openItems.value.includes(name) ? [] : [name];
    }
  };
  provide("accordion", {
    openItems,
    toggleItem,
    props: computed(() => props)
  });
  return { openItems, toggleItem };
}
function useAccordionItem(name) {
  const accordion = inject("accordion");
  if (!accordion) {
    return { accordionProps: ref({}) };
  }
  const isOpen = computed(() => accordion.openItems.value.includes(name));
  const toggle = () => {
    accordion.toggleItem(name);
  };
  return { isOpen, toggle, accordionProps: accordion.props };
}

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "accordion",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    expandIcon: {},
    collapseIcon: {},
    multiple: { type: Boolean }
  }, {
    "modelValue": { required: false, default: [] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const modelValue = useModel(__props, "modelValue");
    const { openItems } = useAccordion(modelValue.value, props);
    watch(openItems, (value) => {
      modelValue.value = value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion-wrapper" }, _attrs))} data-v-3dab3158>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/accordion/accordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Accordion = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3dab3158"]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "accordion-item",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    expandIcon: {},
    collapseIcon: {},
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const name = props.name || self.crypto.randomUUID();
    const { isOpen, toggle: baseToggle, accordionProps } = useAccordionItem(name);
    const expandIconLocal = computed(
      () => accordionProps.value.expandIcon || props.expandIcon || "lucide:chevron-down"
    );
    const collapseIconLocal = computed(
      () => accordionProps.value.collapseIcon || props.collapseIcon || "lucide:chevron-up"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion-item" }, _attrs))} data-v-09cc0126><button class="accordion-item__title"${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""} data-v-09cc0126>`);
      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
        _push(`${ssrInterpolate(_ctx.title)}`);
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "icon", {
        isOpen: { isOpen: unref(isOpen) }
      }, () => {
        _push(ssrRenderComponent(_component_Icon, {
          name: unref(isOpen) ? unref(expandIconLocal) : unref(collapseIconLocal),
          class: "accordion-item__icon"
        }, null, _parent));
      }, _push, _parent);
      _push(`</button>`);
      if (unref(isOpen)) {
        _push(`<div class="text-slate-500" data-v-09cc0126><hr class="my-2" data-v-09cc0126><p data-v-09cc0126>`);
        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
          _push(`${ssrInterpolate(_ctx.description)}`);
        }, _push, _parent);
        _push(`</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/accordion/accordion-item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AccordionItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-09cc0126"]]);

const homePageFaqs = [
  { q: "What is Next Port Express?", a: "Next Port Express is a Swiss logistics company offering fast and reliable shipping solutions for both local and international deliveries." },
  { q: "How do I track my shipment?", a: 'You can track your shipment by entering the tracking number on the "Track" page of our website.' },
  { q: "What shipping options are available?", a: "We offer standard, expedited, and express shipping options depending on your delivery needs and destination." },
  { q: "How long does it take to ship internationally?", a: 'International shipping times vary depending on the destination. We advise you reach us on our "Contact" page for more information.' },
  { q: "What happens if my package is lost?", a: "If your package is lost, please contact our customer support team. We will investigate the issue and provide a solution or compensation if necessary." },
  { q: "Can I change my shipping address after placing an order?", a: "If the order has not been dispatched, we can update your shipping address. Please contact us immediately to request the change." }
];
const aboutPageFaqs = [
  { q: "How did Next Port Express get started?", a: "Next Port Express was founded with the goal of simplifying shipping for businesses and individuals, offering fast, reliable, and affordable logistics solutions." },
  { q: "What makes Next Port Express different from other shipping companies?", a: "We focus on providing personalized customer service, real-time tracking, and various shipping options tailored to each customer's needs." },
  { q: "Is Next Port Express eco-friendly?", a: "Yes, we are committed to reducing our carbon footprint by implementing eco-friendly practices such as optimizing delivery routes and using sustainable packaging." },
  { q: "How do I contact Next Port Express for customer support?", a: "You can reach our customer support team via email, phone, or through our online contact form on the website." },
  { q: "What countries does Next Port Express ship to?", a: "We ship to over 150 countries worldwide. For specific country availability, check the shipping options at checkout." },
  { q: "Can I request a custom shipping solution?", a: "Yes! We offer custom shipping solutions for businesses with unique needs. Contact us to discuss your requirements." }
];

export { Accordion as A, aboutPageFaqs as a, AccordionItem as b, homePageFaqs as h };
//# sourceMappingURL=faq.mjs.map
