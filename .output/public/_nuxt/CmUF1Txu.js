import{ag as k,aD as y,al as P,aN as $,an as g,bh as I,c as v,o as n,Y as s,ay as A,z as p,q as u,w as o,K as f,aA as h,y as S,a as B,aQ as m,a0 as O,F as V}from"./CXM8C5h9.js";var T={root:function(t){var r=t.instance;return["p-steppanel",{"p-steppanel-active":r.isVertical&&r.active}]},content:"p-steppanel-content"},N=k.extend({name:"steppanel",classes:T}),C={name:"StepperSeparator",hostName:"Stepper",extends:y,inject:{$pcStepper:{default:null}}};function w(e,t,r,l,c,a){return n(),v("span",s({class:e.cx("separator")},e.ptmo(a.$pcStepper.pt,"separator")),null,16)}C.render=w;var D={name:"BaseStepPanel",extends:y,props:{value:{type:[String,Number],default:void 0},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:N,provide:function(){return{$pcStepPanel:this,$parentInstance:this}}},j={name:"StepPanel",extends:D,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepItem:{default:null},$pcStepList:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el){var t,r,l=$(this.$pcStepper.$el,'[data-pc-name="step"]'),c=g(this.isVertical?(t=this.$pcStepItem)===null||t===void 0?void 0:t.$el:(r=this.$pcStepList)===null||r===void 0?void 0:r.$el,'[data-pc-name="step"]'),a=I(c,l);this.isSeparatorVisible=this.isVertical&&a!==l.length-1}},methods:{getPTOptions:function(t){var r=t==="root"?this.ptmi:this.ptm;return r(t,{context:{active:this.active}})},updateValue:function(t){this.$pcStepper.updateValue(t)}},computed:{active:function(){var t,r,l=this.$pcStepItem?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value;return l===((r=this.$pcStepper)===null||r===void 0?void 0:r.d_value)},isVertical:function(){return!!this.$pcStepItem},activeValue:function(){var t;return this.isVertical?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value},id:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.id,"_steppanel_").concat(this.activeValue)},ariaControls:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.id,"_step_").concat(this.activeValue)},a11yAttrs:function(){return{id:this.id,role:"tabpanel","aria-controls":this.ariaControls,"data-pc-name":"steppanel","data-p-active":this.active}},dataP:function(){return P({vertical:this.$pcStepItem!=null})}},components:{StepperSeparator:C}},_=["data-p"];function F(e,t,r,l,c,a){var b=A("StepperSeparator");return a.isVertical?(n(),v(V,{key:0},[e.asChild?u(e.$slots,"default",{key:1,active:a.active,a11yAttrs:a.a11yAttrs,activateCallback:function(i){return a.updateValue(i)}}):(n(),p(O,s({key:0,name:"p-toggleable-content"},e.ptm("transition")),{default:o(function(){return[f((n(),p(h(e.as),s({id:a.id,class:e.cx("root"),role:"tabpanel","aria-controls":a.ariaControls,"data-p":a.dataP},a.getPTOptions("root")),{default:o(function(){return[c.isSeparatorVisible?(n(),p(b,{key:0,"data-p":a.dataP},null,8,["data-p"])):S("",!0),B("div",s({class:e.cx("content"),"data-p":a.dataP},a.getPTOptions("content")),[u(e.$slots,"default",{active:a.active,activateCallback:function(i){return a.updateValue(i)}})],16,_)]}),_:3},16,["id","class","aria-controls","data-p"])),[[m,a.active]])]}),_:3},16))],64)):(n(),v(V,{key:1},[e.asChild?e.asChild&&a.active?u(e.$slots,"default",{key:1,active:a.active,a11yAttrs:a.a11yAttrs,activateCallback:function(i){return a.updateValue(i)}}):S("",!0):f((n(),p(h(e.as),s({key:0,id:a.id,class:e.cx("root"),role:"tabpanel","aria-controls":a.ariaControls},a.getPTOptions("root")),{default:o(function(){return[u(e.$slots,"default",{active:a.active,activateCallback:function(i){return a.updateValue(i)}})]}),_:3},16,["id","class","aria-controls"])),[[m,a.active]])],64))}j.render=F;export{j as default};
