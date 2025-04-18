import{ag as N,ai as T,aD as w,al as $,bk as d,bl as O,an as z,bq as C,bp as v,as as W,bt as B,az as y,c as b,o as u,E as g,p as m,a as h,U as o,f as x,aA as L,k as I}from"./gPK0ByQQ.js";import{s as P}from"./DgehqBfD.js";import{s as R}from"./DHSJuXaH.js";var V={root:"p-tablist",content:function(t){var i=t.instance;return["p-tablist-content",{"p-tablist-viewport":i.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},E=N.extend({name:"tablist",classes:V}),A={name:"BaseTabList",extends:w,props:{},style:E,provide:function(){return{$pcTabList:this,$parentInstance:this}}},H={name:"TabList",extends:A,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;setTimeout(function(){t.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,i=this.getVisibleButtonWidths(),r=d(t)-i,n=Math.abs(t.scrollLeft),a=r*.8,s=n-a,l=Math.max(s,0);t.scrollLeft=B(t)?-1*l:l},onNextButtonClick:function(){var t=this.$refs.content,i=this.getVisibleButtonWidths(),r=d(t)-i,n=Math.abs(t.scrollLeft),a=r*.8,s=n+a,l=t.scrollWidth-r,c=Math.min(s,l);t.scrollLeft=B(t)?-1*c:c},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,i=t.content,r=t.inkbar,n=t.tabs;if(r){var a=z(i,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(r.style.height=C(a)+"px",r.style.top=v(a).top-v(n).top+"px"):(r.style.width=W(a)+"px",r.style.left=v(a).left-v(n).left+"px")}},updateButtonState:function(){var t=this.$refs,i=t.list,r=t.content,n=r.scrollTop,a=r.scrollWidth,s=r.scrollHeight,l=r.offsetWidth,c=r.offsetHeight,p=Math.abs(r.scrollLeft),f=[d(r),O(r)],k=f[0],S=f[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=n!==0,this.isNextButtonEnabled=i.offsetHeight>=c&&parseInt(n)!==s-S):(this.isPrevButtonEnabled=p!==0,this.isNextButtonEnabled=i.offsetWidth>=l&&parseInt(p)!==a-k)},getVisibleButtonWidths:function(){var t=this.$refs,i=t.prevButton,r=t.nextButton,n=0;return this.showNavigators&&(n=((i==null?void 0:i.offsetWidth)||0)+((r==null?void 0:r.offsetWidth)||0)),n}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return $({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:P,ChevronRightIcon:R},directives:{ripple:T}},D=["data-p"],M=["aria-label","tabindex"],U=["data-p"],j=["aria-orientation"],q=["aria-label","tabindex"];function _(e,t,i,r,n,a){var s=y("ripple");return u(),b("div",o({ref:"list",class:e.cx("root"),"data-p":a.dataP},e.ptmi("root")),[a.showNavigators&&n.isPrevButtonEnabled?g((u(),b("button",o({key:0,ref:"prevButton",type:"button",class:e.cx("prevButton"),"aria-label":a.prevButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return a.onPrevButtonClick&&a.onPrevButtonClick.apply(a,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(u(),x(L(a.templates.previcon||"ChevronLeftIcon"),o({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,M)),[[s]]):m("",!0),h("div",o({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return a.onScroll&&a.onScroll.apply(a,arguments)}),"data-p":a.dataP},e.ptm("content")),[h("div",o({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":a.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[I(e.$slots,"default"),h("span",o({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,j)],16,U),a.showNavigators&&n.isNextButtonEnabled?g((u(),b("button",o({key:1,ref:"nextButton",type:"button",class:e.cx("nextButton"),"aria-label":a.nextButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return a.onNextButtonClick&&a.onNextButtonClick.apply(a,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(u(),x(L(a.templates.nexticon||"ChevronRightIcon"),o({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,q)),[[s]]):m("",!0)],16,D)}H.render=_;export{H as default};
