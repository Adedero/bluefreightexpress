import{ag as c,aD as o,Y as i,z as l,q as n,o as d,w as p,aA as u,a4 as v}from"./CXM8C5h9.js";var f={root:function(t){var s=t.instance,r=t.props;return["p-accordionpanel",{"p-accordionpanel-active":s.active,"p-disabled":r.disabled}]}},m=c.extend({name:"accordionpanel",classes:f}),h={name:"BaseAccordionPanel",extends:o,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:m,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},y={name:"AccordionPanel",extends:h,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return i(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function A(a,t,s,r,$,e){return a.asChild?n(a.$slots,"default",{key:1,class:v(a.cx("root")),active:e.active,a11yAttrs:e.a11yAttrs}):(d(),l(u(a.as),i({key:0,class:a.cx("root")},e.attrs),{default:p(function(){return[n(a.$slots,"default")]}),_:3},16,["class"]))}y.render=A;export{y as default};
