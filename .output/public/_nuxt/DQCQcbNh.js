import{ag as i,aD as s,c as l,o as d,q as a,y as c,Y as u}from"./CXM8C5h9.js";var f=i.extend({name:"deferredcontent"}),m={name:"DeferredContent",extends:s,inheritAttrs:!1,emits:["load"],style:f,data:function(){return{loaded:!1}},mounted:function(){this.loaded||(this.shouldLoad()?this.load():this.bindScrollListener())},beforeUnmount:function(){this.unbindScrollListener()},methods:{bindScrollListener:function(){var t=this;this.documentScrollListener=function(){t.shouldLoad()&&(t.load(),t.unbindScrollListener())},window.addEventListener("scroll",this.documentScrollListener)},unbindScrollListener:function(){this.documentScrollListener&&(window.removeEventListener("scroll",this.documentScrollListener),this.documentScrollListener=null)},shouldLoad:function(){if(this.loaded)return!1;var t=this.$refs.container.getBoundingClientRect(),n=document.documentElement,o=n.clientHeight;return o>=t.top},load:function(t){this.loaded=!0,this.$emit("load",t)}}};function h(e,t,n,o,r,L){return d(),l("div",u({ref:"container"},e.ptmi("root")),[r.loaded?a(e.$slots,"default",{key:0}):c("",!0)],16)}m.render=h;export{m as default};
