import{_ as z}from"./CsPfNzEd.js";import{o as F,f as A,d as R,_ as Q}from"./DsORpex4.js";import W from"./CF90hbaa.js";import G from"./DvoDAsIQ.js";import H from"./D4xTUMbY.js";import J from"./B-Xf3wQM.js";import K from"./GD_SiCA-.js";import X from"./DD-cK4m0.js";import Y from"./CmUF1Txu.js";import Z from"./CFLc3v_B.js";import h from"./BhhRpd5K.js";import{g as ee,j as le,k as te,l as oe,c as U,o as M,a as l,b as i,w as m,s as ie,d as n,m as o,F as ne,r as se,n as de}from"./CXM8C5h9.js";import{r as N}from"./DsQcneMW.js";import{u as re}from"./D2Uv6k5y.js";/* empty css        */import"./BvNuPkbj.js";import"./CpOS-HWj.js";import"./CWFbdga9.js";import"./BS-qBcPE.js";import"./DWYP69uJ.js";import"./CmeO1j9U.js";import"./B-Bo7xz0.js";import"./B55uF3tP.js";import"./D8gjQl_4.js";import"./oCnzFtNG.js";import"./D0vWFl9C.js";import"./6lRoRFo_.js";import"./DK2PVj89.js";import"./Dz0YChoE.js";import"./DNq4Qns9.js";const ae={class:"w-dvw px-0 py-4 md:p-4"},me={class:"border rounded-xl shadow-sm px-2 py-2 flex items-center justify-between gap-2"},ue={class:"mt-4 font-rubik font-normal"},pe={class:"bg-[--p-surface-50] rounded-md p-2 grid gap-4"},fe={class:"grid md:grid-cols-2 gap-2"},ce={class:"grid form-control"},ge={class:"grid form-control"},ve={class:"flex items-center justify-end gap-2"},ye={class:"bg-[--p-surface-50] rounded-md p-2 grid gap-4"},Ve={class:"border rounded-lg p-2"},be={class:"flex items-center justify-end"},_e={class:"grid md:grid-cols-3 gap-2"},xe={class:"grid form-control"},ke={class:"grid form-control"},Ce={class:"grid form-control"},Ue={class:"flex items-center justify-end gap-2"},Me={class:"bg-[--p-surface-50] rounded-md p-2 grid gap-4"},Pe={class:"grid md:grid-cols-3 gap-2"},$e={class:"grid form-control"},we={class:"grid form-control"},Ne={class:"grid form-control"},Se={class:"flex items-center justify-end gap-2"},De={class:"bg-[--p-surface-50] rounded-md p-2 grid gap-4"},Ie={class:"grid md:grid-cols-4 gap-2"},je={class:"grid form-control md:col-span-4 lg:hidden"},Te={class:"grid form-control md:col-span-2"},Be={class:"form-control hidden lg:grid lg:col-span-2"},Ee={class:"grid form-control md:col-span-2 lg:col-span-1"},Le={class:"grid form-control md:col-span-2 lg:col-span-1"},qe={class:"grid form-control md:col-span-2 lg:col-span-1"},Oe={class:"grid form-control md:col-span-2 lg:col-span-1"},ze={class:"grid form-control md:col-span-2 lg:col-span-1"},Fe={class:"grid form-control md:col-span-2 lg:col-span-1"},Ae={class:"grid form-control md:col-span-2"},Re={class:"grid form-control md:col-span-4"},Qe={class:"flex items-center justify-end gap-2"},kl=ee({__name:"index",setup(We){const S=le(),t=te({client:{name:"",email:"",role:"USER"},items:[{_id:N(),name:"",quantity:1,unitPrice:0}],deliveryMode:"pickup station",freightMode:"air",status:"processing",destination:{address:"",name:"",city:"",state:"",country:"",countryCode:"",lat:null,lng:null,description:""}}),D=()=>{t.items.unshift({_id:N(),name:"",quantity:1,unitPrice:0})},I=a=>{var e;t.items=(e=t.items)==null?void 0:e.filter(u=>u._id!==a)},j=a=>{t.destination={name:a.name,address:a.address,state:a.state,city:a.city,country:a.country,countryCode:a.countryCode.toUpperCase(),lat:a.lat,lng:a.lng}},y=oe(!1),T=async()=>{var a;t.items=(a=t.items)==null?void 0:a.map(e=>({...e,_id:void 0})),y.value=!0;try{const e=await $fetch("/api/orders",{method:"POST",body:t});await de(`/admin/orders/${e.order._id}`)}catch(e){re(e,S)}finally{y.value=!1}};return(a,e)=>{const u=ie,B=z,V=h,p=Z,b=Y,_=X,x=K,C=J,E=Q,L=H,q=G,O=W;return M(),U("div",ae,[l("header",me,[e[16]||(e[16]=l("h1",{class:"font-rubik text-xl font-bold text-[--p-primary-color]"}," New Order ",-1)),i(B,{to:"/admin/"},{default:m(()=>[i(u,{label:"Back",icon:"pi pi-arrow-left",size:"small",severity:"secondary"})]),_:1})]),l("div",ue,[i(O,{value:"1",linear:""},{default:m(()=>[i(_,{value:"1"},{default:m(()=>[i(V,null,{default:m(()=>e[17]||(e[17]=[n("Client Data")])),_:1}),i(b,{l:""},{default:m(({activateCallback:f})=>{var r,g;return[l("div",pe,[l("div",fe,[l("div",ce,[e[18]||(e[18]=l("label",{for:"name"},[n("Name "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{id:"name",modelValue:o(t).client.name,"onUpdate:modelValue":e[0]||(e[0]=s=>o(t).client.name=s),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])]),l("div",ge,[e[19]||(e[19]=l("label",{for:"email"},[n("Email "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{id:"email",modelValue:o(t).client.email,"onUpdate:modelValue":e[1]||(e[1]=s=>o(t).client.email=s),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])])]),l("div",ve,[i(u,{disabled:!((r=o(t).client)!=null&&r.name)||!((g=o(t).client)!=null&&g.email),onClick:s=>f("2"),label:"Next",icon:"pi pi-arrow-right","icon-pos":"right"},null,8,["disabled","onClick"])])])]}),_:1})]),_:1}),i(_,{value:"2"},{default:m(()=>[i(V,null,{default:m(()=>e[20]||(e[20]=[n("Items")])),_:1}),i(b,null,{default:m(({activateCallback:f})=>{var r,g;return[l("div",ye,[l("div",null,[i(u,{onClick:D,label:"Add item",size:"small",icon:"pi pi-plus"})]),(M(!0),U(ne,null,se(o(t).items,(s,k)=>{var v;return M(),U("div",{key:s._id},[l("div",Ve,[l("div",be,[i(u,{onClick:c=>I(s._id),severity:"danger",icon:"pi pi-trash",size:"small",disabled:((v=o(t).items)==null?void 0:v.length)===1},null,8,["onClick","disabled"])]),l("div",_e,[l("div",xe,[e[21]||(e[21]=l("label",null,[n("Name "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{modelValue:s.name,"onUpdate:modelValue":c=>s.name=c,modelModifiers:{trim:!0},placeholder:`Item-${k+1}`,fluid:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),l("div",ke,[e[22]||(e[22]=l("label",null,[n("Quantity "),l("span",{class:"text-red-500"},"*")],-1)),i(x,{min:1,modelValue:s.quantity,"onUpdate:modelValue":c=>s.quantity=c,fluid:""},null,8,["modelValue","onUpdate:modelValue"])]),l("div",Ce,[e[23]||(e[23]=l("label",null,[n("Unit Price ($) "),l("span",{class:"text-red-500"},"*")],-1)),i(x,{modelValue:s.unitPrice,"onUpdate:modelValue":c=>s.unitPrice=c,"max-fraction-digits":2,fluid:""},null,8,["modelValue","onUpdate:modelValue"])])])])])}),128)),l("div",Ue,[i(u,{onClick:s=>f("1"),label:"Prev",icon:"pi pi-arrow-left",severity:"secondary"},null,8,["onClick"]),i(u,{disabled:!((r=o(t).items)!=null&&r.length)||((g=o(t).items)==null?void 0:g.some(s=>!s.name||!s.quantity||!s.unitPrice)),onClick:s=>f("3"),label:"Next",icon:"pi pi-arrow-right","icon-pos":"right"},null,8,["disabled","onClick"])])])]}),_:1})]),_:1}),i(_,{value:"3"},{default:m(()=>[i(V,null,{default:m(()=>e[24]||(e[24]=[n("Delivery Information")])),_:1}),i(b,null,{default:m(({activateCallback:f})=>[l("div",Me,[l("div",Pe,[l("div",$e,[e[25]||(e[25]=l("label",null,[n("Order Status "),l("span",{class:"text-red-500"},"*")],-1)),i(C,{modelValue:o(t).status,"onUpdate:modelValue":e[2]||(e[2]=r=>o(t).status=r),options:o(F)},null,8,["modelValue","options"])]),l("div",we,[e[26]||(e[26]=l("label",null,[n("Freight Mode "),l("span",{class:"text-red-500"},"*")],-1)),i(C,{modelValue:o(t).freightMode,"onUpdate:modelValue":e[3]||(e[3]=r=>o(t).freightMode=r),options:o(A)},null,8,["modelValue","options"])]),l("div",Ne,[e[27]||(e[27]=l("label",null,[n("Delivery Mode "),l("span",{class:"text-red-500"},"*")],-1)),i(C,{modelValue:o(t).deliveryMode,"onUpdate:modelValue":e[4]||(e[4]=r=>o(t).deliveryMode=r),options:o(R)},null,8,["modelValue","options"])])]),l("div",Se,[i(u,{onClick:r=>f("2"),label:"Prev",icon:"pi pi-arrow-left",severity:"secondary"},null,8,["onClick"]),i(u,{onClick:r=>f("4"),label:"Next",icon:"pi pi-arrow-right","icon-pos":"right",disabled:!o(t).status||!o(t).deliveryMode||!o(t).freightMode},null,8,["onClick","disabled"])])])]),_:1})]),_:1}),i(_,{value:"4"},{default:m(()=>[i(V,null,{default:m(()=>e[28]||(e[28]=[n("Order Destination")])),_:1}),i(b,null,{default:m(({activateCallback:f})=>{var r,g,s,k,v,c,P,$,w;return[l("div",De,[e[40]||(e[40]=l("p",{class:"font-semibold"},"Search for a location or select one by clicking anywhere on the map",-1)),l("div",null,[i(E,{onLocationPicked:j})]),l("div",Ie,[l("div",je,[e[29]||(e[29]=l("label",null,[n("Address "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{modelValue:o(t).destination.address,"onUpdate:modelValue":e[5]||(e[5]=d=>o(t).destination.address=d),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])]),l("div",Te,[e[30]||(e[30]=l("label",null,[n("Name "),l("small",null,"(optional)")],-1)),i(p,{modelValue:o(t).destination.name,"onUpdate:modelValue":e[6]||(e[6]=d=>o(t).destination.name=d),modelModifiers:{trim:!0},placeholder:"e.g. BFE Warehouse",fluid:""},null,8,["modelValue"])]),l("div",Be,[e[31]||(e[31]=l("label",null,[n("Address "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{modelValue:o(t).destination.address,"onUpdate:modelValue":e[7]||(e[7]=d=>o(t).destination.address=d),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])]),l("div",Ee,[e[32]||(e[32]=l("label",null,[n("City "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{modelValue:o(t).destination.city,"onUpdate:modelValue":e[8]||(e[8]=d=>o(t).destination.city=d),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])]),l("div",Le,[e[33]||(e[33]=l("label",null,[n("State or Region "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{modelValue:o(t).destination.state,"onUpdate:modelValue":e[9]||(e[9]=d=>o(t).destination.state=d),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])]),l("div",qe,[e[34]||(e[34]=l("label",null,[n("Country "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{modelValue:o(t).destination.country,"onUpdate:modelValue":e[10]||(e[10]=d=>o(t).destination.country=d),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])]),l("div",Oe,[e[35]||(e[35]=l("label",null,[n("Country Code"),l("span",{class:"text-red-500"},"*")],-1)),i(p,{modelValue:o(t).destination.countryCode,"onUpdate:modelValue":e[11]||(e[11]=d=>o(t).destination.countryCode=d),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])]),l("div",ze,[e[36]||(e[36]=l("label",null,[n("Latitude"),l("span",{class:"text-red-500"},"*")],-1)),i(x,{modelValue:o(t).destination.lat,"onUpdate:modelValue":e[12]||(e[12]=d=>o(t).destination.lat=d),min:-90,max:90,grouping:!1,fluid:""},null,8,["modelValue"])]),l("div",Fe,[e[37]||(e[37]=l("label",null,[n("Longitude"),l("span",{class:"text-red-500"},"*")],-1)),i(x,{modelValue:o(t).destination.lng,"onUpdate:modelValue":e[13]||(e[13]=d=>o(t).destination.lng=d),min:-180,max:180,grouping:!1,fluid:""},null,8,["modelValue"])]),l("div",Ae,[e[38]||(e[38]=l("label",null,[n("Estimated Delivery Date "),l("span",{class:"text-red-500"},"*")],-1)),i(L,{modelValue:o(t).estimatedDelivery,"onUpdate:modelValue":e[14]||(e[14]=d=>o(t).estimatedDelivery=d),"date-format":"dd M, yy",fluid:""},null,8,["modelValue"])]),l("div",Re,[e[39]||(e[39]=l("label",null,[n("Description "),l("small",null,"(optional)")],-1)),i(q,{modelValue:o(t).destination.description,"onUpdate:modelValue":e[15]||(e[15]=d=>o(t).destination.description=d),modelModifiers:{trim:!0},rows:"4",class:"resize-none",fluid:""},null,8,["modelValue"])])]),l("div",Qe,[i(u,{onClick:d=>f("2"),label:"Prev",icon:"pi pi-arrow-left",severity:"secondary"},null,8,["onClick"]),i(u,{onClick:T,loading:o(y),label:"Submit",icon:"pi pi-check","icon-pos":"right",disabled:o(y)||!o(t).estimatedDelivery||!((r=o(t).destination)!=null&&r.address)||!((g=o(t).destination)!=null&&g.city)||!((s=o(t).destination)!=null&&s.state)||!((k=o(t).destination)!=null&&k.country)||!((v=o(t).destination)!=null&&v.countryCode)||((c=o(t).destination)==null?void 0:c.lat)===null||((P=o(t).destination)==null?void 0:P.lat)===void 0||(($=o(t).destination)==null?void 0:$.lng)===null||((w=o(t).destination)==null?void 0:w.lng)===void 0},null,8,["loading","disabled"])])])]}),_:1})]),_:1})]),_:1})])])}}});export{kl as default};
