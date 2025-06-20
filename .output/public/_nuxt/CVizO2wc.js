import{s as y}from"./XERr68V8.js";import{s as A}from"./0ynRyS5V.js";import P from"./CgmZoFCH.js";import k from"./-vd4hG6w.js";import _ from"./DkT0j2xu.js";import{ag as I,aD as C,U as s,ay as v,c as f,o as d,k as x,F as w,r as S,f as l,w as u,b as g,a0 as B,p as b,aA as p,t as N}from"./Cup_hyTX.js";import"./DFv47sJ2.js";var H=({dt:e})=>`
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: ${e("accordion.panel.border.width")};
    border-color: ${e("accordion.panel.border.color")};
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${e("accordion.header.padding")};
    color: ${e("accordion.header.color")};
    background: ${e("accordion.header.background")};
    border-style: solid;
    border-width: ${e("accordion.header.border.width")};
    border-color: ${e("accordion.header.border.color")};
    font-weight: ${e("accordion.header.font.weight")};
    border-radius: ${e("accordion.header.border.radius")};
    transition: background ${e("accordion.transition.duration")}, color ${e("accordion.transition.duration")}, outline-color ${e("accordion.transition.duration")}, box-shadow ${e("accordion.transition.duration")};
    outline-color: transparent;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: ${e("accordion.header.first.border.width")};
    border-start-start-radius: ${e("accordion.header.first.top.border.radius")};
    border-start-end-radius: ${e("accordion.header.first.top.border.radius")};
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-end-start-radius: ${e("accordion.header.last.bottom.border.radius")};
    border-end-end-radius: ${e("accordion.header.last.bottom.border.radius")};
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-end-start-radius: ${e("accordion.header.last.active.bottom.border.radius")};
    border-end-end-radius: ${e("accordion.header.last.active.bottom.border.radius")};
}

.p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.color")};
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: ${e("accordion.header.focus.ring.shadow")};
    outline: ${e("accordion.header.focus.ring.width")} ${e("accordion.header.focus.ring.style")} ${e("accordion.header.focus.ring.color")};
    outline-offset: ${e("accordion.header.focus.ring.offset")};
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: ${e("accordion.header.hover.background")};
    color: ${e("accordion.header.hover.color")};
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.hover.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: ${e("accordion.header.active.background")};
    color: ${e("accordion.header.active.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.active.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
    background: ${e("accordion.header.active.hover.background")};
    color: ${e("accordion.header.active.hover.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.active.hover.color")};
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: ${e("accordion.content.border.width")};
    border-color: ${e("accordion.content.border.color")};
    background-color: ${e("accordion.content.background")};
    color: ${e("accordion.content.color")};
    padding: ${e("accordion.content.padding")};
}
`,D={root:"p-accordion p-component"},E=I.extend({name:"accordion",style:H,classes:D}),F={name:"BaseAccordion",extends:C,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:E,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},K={name:"Accordion",extends:F,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(o){this.d_value=o},activeIndex:{immediate:!0,handler:function(o){this.hasAccordionTab&&(this.d_value=this.multiple?o==null?void 0:o.map(String):o==null?void 0:o.toString())}}},methods:{isItemActive:function(o){var n;return this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.includes(o):this.d_value===o},updateValue:function(o){var n,t=this.isItemActive(o);this.multiple?t?this.d_value=this.d_value.filter(function(i){return i!==o}):this.d_value?this.d_value.push(o):this.d_value=[o]:this.d_value=t?null:o,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.map(Number):Number(this.d_value)),this.$emit(t?"tab-close":"tab-open",{originalEvent:void 0,index:Number(o)})},isAccordionTab:function(o){return o.type.name==="AccordionTab"},getTabProp:function(o,n){return o.props?o.props[n]:void 0},getKey:function(o,n){return this.getTabProp(o,"header")||n},getHeaderPT:function(o,n){var t=this;return{root:s({onClick:function(a){return t.onTabClick(a,n)}},this.getTabProp(o,"headerProps"),this.getTabPT(o,"header",n)),toggleicon:s(this.getTabProp(o,"headeractionprops"),this.getTabPT(o,"headeraction",n))}},getContentPT:function(o,n){return{root:s(this.getTabProp(o,"contentProps"),this.getTabPT(o,"toggleablecontent",n)),transition:this.getTabPT(o,"transition",n),content:this.getTabPT(o,"content",n)}},getTabPT:function(o,n,t){var i=this.tabs.length,a={props:o.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:t,count:i,first:t===0,last:t===i-1,active:this.isItemActive("".concat(t))}};return s(this.ptm("accordiontab.".concat(n),a),this.ptmo(this.getTabProp(o,"pt"),n,a))},onTabClick:function(o,n){this.$emit("tab-click",{originalEvent:o,index:n})}},computed:{tabs:function(){var o=this;return this.$slots.default().reduce(function(n,t){return o.isAccordionTab(t)?n.push(t):t.children&&t.children instanceof Array&&t.children.forEach(function(i){o.isAccordionTab(i)&&n.push(i)}),n},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:_,AccordionHeader:k,AccordionContent:P,ChevronUpIcon:A,ChevronRightIcon:y}};function U(e,o,n,t,i,a){var m=v("AccordionHeader"),$=v("AccordionContent"),T=v("AccordionPanel");return d(),f("div",s({class:e.cx("root")},e.ptmi("root")),[a.hasAccordionTab?(d(!0),f(w,{key:0},S(a.tabs,function(r,c){return d(),l(T,{key:a.getKey(r,c),value:"".concat(c),pt:{root:a.getTabPT(r,"root",c)},disabled:a.getTabProp(r,"disabled")},{default:u(function(){return[g(m,{class:B(a.getTabProp(r,"headerClass")),pt:a.getHeaderPT(r,c)},{toggleicon:u(function(h){return[h.active?(d(),l(p(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),s({key:0,class:[e.collapseIcon,h.class],"aria-hidden":"true",ref_for:!0},a.getTabPT(r,"headericon",c)),null,16,["class"])):(d(),l(p(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),s({key:1,class:[e.expandIcon,h.class],"aria-hidden":"true",ref_for:!0},a.getTabPT(r,"headericon",c)),null,16,["class"]))]}),default:u(function(){return[r.children&&r.children.headericon?(d(),l(p(r.children.headericon),{key:0,isTabActive:a.isItemActive("".concat(c)),active:a.isItemActive("".concat(c)),index:c},null,8,["isTabActive","active","index"])):b("",!0),r.props&&r.props.header?(d(),f("span",s({key:1,ref_for:!0},a.getTabPT(r,"headertitle",c)),N(r.props.header),17)):b("",!0),r.children&&r.children.header?(d(),l(p(r.children.header),{key:2})):b("",!0)]}),_:2},1032,["class","pt"]),g($,{pt:a.getContentPT(r,c)},{default:u(function(){return[(d(),l(p(r)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):x(e.$slots,"default",{key:1})],16)}K.render=U;export{K as default};
