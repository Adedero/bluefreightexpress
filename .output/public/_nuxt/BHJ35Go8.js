import{ag as r,aD as a,c as i,o as l,q as o,Y as p}from"./CXM8C5h9.js";var u={root:function(t){var n=t.instance;return["p-splitterpanel",{"p-splitterpanel-nested":n.isNested}]}},d=r.extend({name:"splitterpanel",classes:u}),c={name:"BaseSplitterPanel",extends:a,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:d,provide:function(){return{$pcSplitterPanel:this,$parentInstance:this}}},f={name:"SplitterPanel",extends:c,inheritAttrs:!1,data:function(){return{nestedState:null}},computed:{isNested:function(){var t=this;return this.$slots.default().some(function(n){return t.nestedState=n.type.name==="Splitter"?!0:null,t.nestedState})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function m(e,t,n,S,v,s){return l(),i("div",p({ref:"container",class:e.cx("root")},e.ptmi("root",s.getPTOptions)),[o(e.$slots,"default")],16)}f.render=m;export{f as default};
