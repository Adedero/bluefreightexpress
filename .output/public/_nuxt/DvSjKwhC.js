import{_ as V}from"./a2dPSMXm.js";import{_ as F}from"./BlBd1IDK.js";import{_ as X}from"./C0hDOxjr.js";import{_ as j}from"./DlAUqK2U.js";import{z as Z,a9 as k,u as _,c as h,o as u,a as e,b as p,w as x,e as I,i as W,p as C,d as A,t as g,a0 as J,F as y,r as E,f as P,B as U,Q as H,A as q,k as ee}from"./gPK0ByQQ.js";import D from"./BqSeNZ_T.js";import{n as $,i as te,a as se,t as R,w as ne,b as oe,c as le}from"./CW9WqglX.js";import{_ as ie}from"./V_FlH8S5.js";import{s as M}from"./g0waoi1n.js";const K=se?window:void 0;function z(a){var n;const t=k(a);return(n=t==null?void 0:t.$el)!=null?n:t}function N(...a){const n=[],t=()=>{n.forEach(s=>s()),n.length=0},l=(s,r,v,f)=>(s.addEventListener(r,v,f),()=>s.removeEventListener(r,v,f)),c=Z(()=>{const s=R(k(a[0])).filter(r=>r!=null);return s.every(r=>typeof r!="string")?s:void 0}),d=ne(()=>{var s,r;return[(r=(s=c.value)==null?void 0:s.map(v=>z(v)))!=null?r:[K].filter(v=>v!=null),R(k(c.value?a[1]:a[0])),R(_(c.value?a[2]:a[1])),k(c.value?a[3]:a[2])]},([s,r,v,f])=>{if(t(),!(s!=null&&s.length)||!(r!=null&&r.length)||!(v!=null&&v.length))return;const w=le(f)?{...f}:f;n.push(...s.flatMap(L=>r.flatMap(T=>v.map(O=>l(L,T,O,w)))))},{flush:"post"}),o=()=>{d(),t()};return oe(t),o}let G=!1;function re(a,n,t={}){const{window:l=K,ignore:c=[],capture:d=!0,detectIframe:o=!1,controls:s=!1}=t;if(!l)return s?{stop:$,cancel:$,trigger:$}:$;if(te&&!G){G=!0;const i={passive:!0};Array.from(l.document.body.children).forEach(m=>N(m,"click",$,i)),N(l.document.documentElement,"click",$,i)}let r=!0;const v=i=>k(c).some(m=>{if(typeof m=="string")return Array.from(l.document.querySelectorAll(m)).some(b=>b===i.target||i.composedPath().includes(b));{const b=z(m);return b&&(i.target===b||i.composedPath().includes(b))}});function f(i){const m=k(i);return m&&m.$.subTree.shapeFlag===16}function w(i,m){const b=k(i),B=b.$.subTree&&b.$.subTree.children;return B==null||!Array.isArray(B)?!1:B.some(Y=>Y.el===m.target||m.composedPath().includes(Y.el))}const L=i=>{const m=z(a);if(i.target!=null&&!(!(m instanceof Element)&&f(a)&&w(a,i))&&!(!m||m===i.target||i.composedPath().includes(m))){if("detail"in i&&i.detail===0&&(r=!v(i)),!r){r=!0;return}n(i)}};let T=!1;const O=[N(l,"click",i=>{T||(T=!0,setTimeout(()=>{T=!1},0),L(i))},{passive:!0,capture:d}),N(l,"pointerdown",i=>{const m=z(a);r=!v(i)&&!!(m&&!i.composedPath().includes(m))},{passive:!0}),o&&N(l,"blur",i=>{setTimeout(()=>{var m;const b=z(a);((m=l.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(b!=null&&b.contains(l.document.activeElement))&&n(i)},0)},{passive:!0})].filter(Boolean),Q=()=>O.forEach(i=>i());return s?{stop:Q,cancel:()=>{r=!1},trigger:i=>{r=!0,L(i),r=!1}}:Q}const ae={},ce={class:"bg-gradient-to-r from-primary-500 to-primary-500/70 text-white px-4 lg:px-24 py-4 md:py-8 top-0 flex flex-wrap items-center relative h-36 overflow-hidden"};function ue(a,n){const t=V,l=F;return u(),h("header",null,[e("div",ce,[p(l,{to:"/",class:"flex items-center gap-2"},{default:x(()=>[p(t),n[0]||(n[0]=e("h1",{class:"text-3xl font-bold rubik"},[e("span",{class:"md:hidden"},"NPE"),e("span",{class:"hidden md:inline text-4xl"},"Next Port Express")],-1))]),_:1}),n[1]||(n[1]=e("div",{class:"w-full flex justify-end"},[e("p",{class:"text-sm italic"},"Freight solutions for all industries.")],-1)),n[2]||(n[2]=e("img",{src:X,alt:"harbour",class:"absolute w-full right-0 -z-10"},null,-1))])])}const de=j(ae,[["render",ue]]),me={class:"md:hidden w-full"},fe={class:"flex items-center justify-between gap-3 w-full"},pe={key:0,class:"opacity-30"},ve={class:"pl-8 pr-4 overflow-hidden grid"},_e={class:"w-full h-full grid gap-4"},he=I({__name:"nav-link-item",props:{link:{},isLast:{type:Boolean}},setup(a){const n=W(!1);let t=null;const l=()=>{t&&clearTimeout(t),n.value=!0},c=()=>{t=setTimeout(()=>{n.value=!1},200)},d=W(!1);return(o,s)=>{const r=F,v=D;return u(),h(y,null,[e("div",me,[e("div",fe,[p(r,{to:o.link.href,class:"router-link-s font-semibold py-4 hover:text-accent flex-grow"},{default:x(()=>[A(g(o.link.label),1)]),_:1},8,["to"]),o.link.items&&o.link.items.length>0?(u(),h("button",{key:0,onClick:s[0]||(s[0]=f=>d.value=!_(d)),class:"hover:bg-primary-400 h-full p-2 grid place-content-center"},[p(v,{name:_(d)?"lucide:chevron-up":"lucide:chevron-down",size:"1.1rem"},null,8,["name"])])):C("",!0)]),o.isLast?C("",!0):(u(),h("hr",pe)),o.link.items&&o.link.items.length>0?(u(),h("div",{key:1,class:J([_(d)?"grid-rows-[1fr]":"grid-rows-[0fr]","grid transition-all duration-300 ease-out w-full overflow-hidden"])},[e("div",ve,[(u(!0),h(y,null,E(o.link.items,f=>(u(),P(r,{to:f.href,key:f.label,class:"font-semibold py-4 text-sm hover:text-accent flex-grow"},{default:x(()=>[A(g(f.label),1)]),_:2},1032,["to"]))),128))])],2)):C("",!0)]),e("div",{onMouseenter:l,onMouseleave:c,class:"hidden md:block relative"},[p(r,{to:o.link.href,class:"router-link w-full h-full text-white relative font-semibold flex items-center gap-1.5"},{default:x(()=>[e("span",null,g(o.link.label),1),o.link.items&&o.link.items.length>0?(u(),P(v,{key:0,name:_(n)?"lucide:chevron-up":"lucide:chevron-down",size:"1.1rem"},null,8,["name"])):C("",!0)]),_:1},8,["to"]),o.link.items&&o.link.items.length>0&&_(n)?(u(),h("div",{key:0,onMouseenter:s[1]||(s[1]=f=>n.value=!0),onMouseleave:s[2]||(s[2]=f=>n.value=!1),class:"absolute w-40 -bottom-[11.5rem] bg-white shadow p-4 rounded-md"},[e("div",_e,[(u(!0),h(y,null,E(o.link.items,f=>(u(),P(r,{to:f.href,key:f.label,class:"text-slate-500 hover:text-text-color hover:underline"},{default:x(()=>[A(g(f.label),1)]),_:2},1032,["to"]))),128))])],32)):C("",!0)],32)],64)}}}),be=j(he,[["__scopeId","data-v-d149efb8"]]),S=[{href:"/",label:"Home"},{href:"/about",label:"About Us"},{href:"/services",label:"Services",items:[{href:"/services/air-freight",label:"Air Freight"},{href:"/services/local-shipping",label:"Local Shipping"},{href:"/services/ocean-freight",label:"Ocean Freight"},{href:"/services/warehousing",label:"Warehousing"}]},{href:"/track",label:"Track"},{href:"/contact",label:"Contact"}];function ge(a){const n=new AbortController;U(()=>{a.value&&window.addEventListener("scroll",t,{signal:n.signal})}),H(()=>{n.abort()});function t(){var c,d,o,s;const{scrollY:l}=window;l>=144?((c=a.value)==null||c.classList.add("fixed"),(d=a.value)==null||d.classList.remove("absolute")):((o=a.value)==null||o.classList.remove("fixed"),(s=a.value)==null||s.classList.add("absolute"))}}const xe={class:"relative md:px-4 lg:px-24 flex items-center justify-between"},we={class:"px-4 md:hidden"},ke={class:"hidden md:flex items-center gap-10"},ye={ref:"small-nav",class:"overflow-hidden w-full"},Le={class:"p-4"},$e=I({__name:"navbar",setup(a){const n=q("nav"),t=q("small-nav");ge(n);const l=W(!1);re(t,d=>{if(!l)return;const o=d.target;o.id==="menu-btn"||o.classList.contains("i-lucide:menu")||(l.value=!1)});const c=()=>{l.value=!1};return U(()=>{window.addEventListener("resize",c)}),H(()=>{window.removeEventListener("resize",c)}),(d,o)=>{const s=V,r=F,v=be,f=D;return u(),h("nav",{ref_key:"nav",ref:n,class:"absolute z-50 top-0 left-0 w-dvw bg-primary-500/20 backdrop-blur-sm"},[e("div",xe,[e("div",we,[p(r,{to:"/"},{default:x(()=>[p(s)]),_:1})]),e("div",ke,[(u(!0),h(y,null,E(_(S),w=>(u(),P(v,{link:w,key:w.label},null,8,["link"]))),128))]),e("button",{id:"menu-btn",onClick:o[0]||(o[0]=w=>l.value=!_(l)),class:"block md:hidden bg-white hover:bg-accent transition-colors h-16 px-6 font-semibold"},[p(f,{name:"lucide:menu",size:"2rem"})]),p(r,{to:"/contact",class:"hidden md:block"},{default:x(()=>o[1]||(o[1]=[e("button",{class:"bg-white hover:bg-accent transition-colors h-16 px-6 font-semibold"}," Request Quote ",-1)])),_:1})]),e("div",{class:J([_(l)?"grid-rows-[1fr]":"grid-rows-[0fr]","grid transition-all duration-300 ease-out w-full bg-primary-500 text-white overflow-hidden"])},[e("div",ye,[e("div",Le,[(u(!0),h(y,null,E(_(S),(w,L)=>(u(),P(v,{link:w,key:w.label,isLast:L===_(S).length-1},null,8,["link","isLast"]))),128))])],512)],2)],512)}}}),Ee=I({__name:"scroll-top",setup(a){const n=q("el");function t(){window.scrollTo({top:0,behavior:"smooth"})}const l=()=>{var c,d;window.scrollY>400?(c=n.value)==null||c.classList.remove("opacity-0"):(d=n.value)==null||d.classList.add("opacity-0")};return U(()=>{window.addEventListener("scroll",l)}),H(()=>{window.removeEventListener("scroll",l)}),(c,d)=>{const o=D;return u(),h("button",{onClick:t,ref_key:"el",ref:n,class:"fixed z-20 opacity-0 right-10 bottom-10 border border-white/20 aspect-square p-2 bg-primary-500 text-white hover:bg-accent hover:text-primary-500 transition-all"},[p(o,{name:"lucide:arrow-up",size:"1.3rem"})],512)}}}),Te={class:"bg-primary-500 py-10 px-4 md:px-24"},Ce={class:"my-10 grid md:grid-cols-4 gap-10"},Me={class:"mt-5 text-sm text-slate-300"},Ne={class:"mt-5 text-sm text-slate-300"},ze={class:"grid gap-1"},Ae={class:"mt-5 text-sm text-slate-300"},Pe={class:"grid gap-1"},Se={class:"mt-5 text-sm text-slate-300 grid gap-4"},Fe=I({__name:"footer",setup(a){return(n,t)=>{var o;const l=V,c=F,d=ie;return u(),h("footer",Te,[e("div",null,[p(c,{to:"/",class:"flex items-center gap-2"},{default:x(()=>[p(l),t[0]||(t[0]=e("p",{class:"rubik text-2xl md:text-4xl font-bold text-white"}," Next Port Express ",-1))]),_:1}),t[1]||(t[1]=e("p",{class:"mt-4 text-xs text-slate-300"}," To be the industry leader, globally recognized for effective & efficient solutions. To provide innovative solutions delivering quality, excellence and speed. ",-1))]),t[7]||(t[7]=e("hr",{class:"mt-10 mb-5 opacity-15"},null,-1)),e("div",Ce,[e("div",null,[t[2]||(t[2]=e("div",{class:"grid gap-5"},[e("p",{class:"text-white rubik text-lg"},"Location"),e("div",{class:"h-[2px] w-10 bg-accent"})],-1)),e("div",Me,[e("p",null,g(_(M).address),1),e("p",null,g(_(M).city)+", "+g(_(M).state)+", "+g(_(M).countryAbbr),1),e("p",null,"E. "+g(_(M).email),1)])]),e("div",null,[t[3]||(t[3]=e("div",{class:"grid gap-5"},[e("p",{class:"text-white rubik text-lg"},"Pages"),e("div",{class:"h-[2px] w-10 bg-accent"})],-1)),e("div",Ne,[e("ul",ze,[(u(!0),h(y,null,E(_(S),s=>(u(),h("li",{key:s.label},[p(c,{to:s.href,class:"hover:underline"},{default:x(()=>[A(g(s.label),1)]),_:2},1032,["to"])]))),128))])])]),e("div",null,[t[4]||(t[4]=e("div",{class:"grid gap-5"},[e("p",{class:"text-white rubik text-lg"},"Our Services"),e("div",{class:"h-[2px] w-10 bg-accent"})],-1)),e("div",Ae,[e("ul",Pe,[(u(!0),h(y,null,E(((o=_(S).find(s=>s.label.toLowerCase()==="services"))==null?void 0:o.items)??[],s=>(u(),h("li",{key:s.label},[p(c,{to:s.href,class:"hover:underline"},{default:x(()=>[A(g(s.label),1)]),_:2},1032,["to"])]))),128))])])]),e("div",null,[t[6]||(t[6]=e("div",{class:"grid gap-5"},[e("p",{class:"text-white rubik text-lg"},"Contact Us"),e("div",{class:"h-[2px] w-10 bg-accent"})],-1)),e("div",Se,[t[5]||(t[5]=e("p",null,"For any inquiries, please contact us and we'll get back to you as soon as we can.",-1)),p(c,{to:"/contact"},{default:x(()=>[p(d,{text:"Contact Us",variant:"secondary"})]),_:1})])])]),t[8]||(t[8]=e("hr",{class:"my-5 opacity-15"},null,-1)),t[9]||(t[9]=e("div",{class:"text-center text-xs text-slate-300"}," © Copyright 2012 - Next Port Express ",-1))])}}}),Ie={},Oe={class:"relative"};function Be(a,n){const t=de,l=$e,c=Ee,d=Fe;return u(),h("main",null,[p(t),e("div",Oe,[p(l),ee(a.$slots,"default")]),p(c),p(d)])}const Ye=j(Ie,[["render",Be]]);export{Ye as default};
