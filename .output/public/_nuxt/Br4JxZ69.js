import{ag as u,aD as p,U as d,ap as v,k as l,c,o as r,F as o,p as b,E as h,aQ as $,f as y,w as f,aA as m,a0 as T}from"./gPK0ByQQ.js";var P={root:function(a){var i=a.instance;return["p-tabpanel",{"p-tabpanel-active":i.active}]}},k=u.extend({name:"tabpanel",classes:P}),A={name:"BaseTabPanel",extends:p,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:k,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},C={name:"TabPanel",extends:A,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var a;return v((a=this.$pcTabs)===null||a===void 0?void 0:a.d_value,this.value)},id:function(){var a;return"".concat((a=this.$pcTabs)===null||a===void 0?void 0:a.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var a;return"".concat((a=this.$pcTabs)===null||a===void 0?void 0:a.$id,"_tab_").concat(this.value)},attrs:function(){return d(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var a;return{id:this.id,tabindex:(a=this.$pcTabs)===null||a===void 0?void 0:a.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function S(e,a,i,B,_,t){var s,n;return t.$pcTabs?(r(),c(o,{key:1},[e.asChild?l(e.$slots,"default",{key:1,class:T(e.cx("root")),active:t.active,a11yAttrs:t.a11yAttrs}):(r(),c(o,{key:0},[!((s=t.$pcTabs)!==null&&s!==void 0&&s.lazy)||t.active?h((r(),y(m(e.as),d({key:0,class:e.cx("root")},t.attrs),{default:f(function(){return[l(e.$slots,"default")]}),_:3},16,["class"])),[[$,(n=t.$pcTabs)!==null&&n!==void 0&&n.lazy?!0:t.active]]):b("",!0)],64))],64)):l(e.$slots,"default",{key:0})}C.render=S;export{C as default};
