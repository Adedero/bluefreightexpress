import N from"./B15qw-eD.js";import{_ as M}from"./CsPfNzEd.js";import{_ as q}from"./BIP37ZU3.js";import{g as D,A as U,j,l as m,a1 as z,c,o as u,a2 as A,a as e,K as h,y as E,d as k,L as F,m as t,t as L,a3 as K,b as i,n as I,w as $,_ as O}from"./CXM8C5h9.js";import{z as f}from"./mSkvzYyn.js";import{u as R}from"./D2Uv6k5y.js";import{_ as P}from"./DlAUqK2U.js";const G=f.object({email:f.string({message:"Email is required"}).email({message:"Please, enter a valid email"}),password:f.string({message:"Password is required"})}),H={class:"form-control"},J={key:0,class:"text-red-500 font-semibold"},Q={class:"form-control"},W={class:"relative"},X=["type"],Y={key:0,class:"text-red-500 font-semibold"},Z={class:"mt-5"},ee=D({__name:"form",setup(S){const a=U(),p=j(),s=m({}),n=m(!1),r=m(),_=m(!1),{fetch:T}=z(),V=async()=>{if(r.value=await G.safeParseAsync(s.value),!!r.value.success){_.value=!0;try{await $fetch("/api/auth/login",{method:"POST",body:s.value}),await T();const{redirect:l}=a.query;if(l){await I(l);return}await I("/admin")}catch(l){R(l,p)}finally{_.value=!1}}};return(l,o)=>{var x,w,v,g,y,b;const B=N,C=q;return u(),c("form",{onSubmit:A(V,["prevent"]),id:"form",class:"grid gap-5 w-full md:w-96"},[e("div",H,[o[3]||(o[3]=e("label",{for:"email"},[k("Email "),e("span",{class:"text-red-500"},"*")],-1)),h(e("input",{type:"email",id:"email","onUpdate:modelValue":o[0]||(o[0]=d=>t(s).email=d),class:"v-input"},null,512),[[F,t(s).email]]),(w=(x=t(r))==null?void 0:x.error)!=null&&w.formErrors.fieldErrors.email?(u(),c("small",J,L((v=t(r).error.formErrors.fieldErrors.email)==null?void 0:v[0]),1)):E("",!0)]),e("div",Q,[o[4]||(o[4]=e("label",{for:"password"},[k("Password "),e("span",{class:"text-red-500"},"*")],-1)),e("div",W,[h(e("input",{type:t(n)?"text":"password",id:"password","onUpdate:modelValue":o[1]||(o[1]=d=>t(s).password=d),class:"v-input pr-10"},null,8,X),[[K,t(s).password]]),e("button",{type:"button",class:"absolute top-1/2 right-3 -translate-y-1/2 text-slate-600 hover:text-primary-500 grid place-content-center",onClick:o[2]||(o[2]=d=>n.value=!t(n))},[i(B,{name:t(n)?"lucide:eye-off":"lucide:eye",size:"1.2rem"},null,8,["name"])])]),(y=(g=t(r))==null?void 0:g.error)!=null&&y.formErrors.fieldErrors.password?(u(),c("small",Y,L((b=t(r).error.formErrors.fieldErrors.password)==null?void 0:b[0]),1)):E("",!0)]),e("div",Z,[i(C,{loading:t(_),type:"submit",text:"Log In",disabled:!t(s).email||!t(s).password,icon:"lucide:log-in",class:"w-full"},null,8,["loading","disabled"])])],32)}}}),te=P(ee,[["__scopeId","data-v-799c3d27"]]),se={},oe={class:"md:hidden fixed top-4 right-4"},re={class:"mt-10 w-[80vw] md:w-fit"};function ae(S,a){const p=N,s=M,n=te,r=O;return u(),c("div",null,[i(r,{name:"auth-default"},{default:$(()=>[e("div",null,[e("div",oe,[i(s,{to:"/",class:"flex items-center gap-2 text-xs font-semibold px-3 py-1 bg-primary-500/60 hover:bg-primary-500/70 transition-colors rounded-full text-white"},{default:$(()=>[a[0]||(a[0]=e("span",null,"Back to website",-1)),i(p,{name:"lucide:arrow-right"})]),_:1})]),a[1]||(a[1]=e("header",null,[e("h1",{class:"rubik font-bold text-4xl md:text-5xl"},"Log In"),e("p",{class:"text-sm mt-1"},"Log in with your admin credentials")],-1)),e("div",re,[i(n)])])]),_:1})])}const pe=P(se,[["render",ae]]);export{pe as default};
