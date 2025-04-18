import{_ as z}from"./BlBd1IDK.js";import{_ as A}from"./DCY7k-J1.js";import F from"./M1RVPDDQ.js";import R from"./fBIZX7qm.js";import H from"./DlFPt46N.js";import Q from"./DMFbTD8B.js";import W from"./D7Ir2U6L.js";import G from"./jfX0-rg6.js";import J from"./D64qf54c.js";import K from"./DnAWv13y.js";import X from"./GQLcbJV4.js";import{e as Y,g as Z,h,i as ee,c as P,a as l,b as i,w as m,o as U,s as le,d as s,u as t,F as oe,r as te,n as ie}from"./gPK0ByQQ.js";import{r as N}from"./DsQcneMW.js";import{p as se,o as ne,f as de,d as re}from"./g0waoi1n.js";import{u as ae}from"./D8avhuev.js";import{u as me}from"./DkvVPrHr.js";import"./BnjfZgYi.js";import"./D2I85gBQ.js";import"./Lwt39ek_.js";import"./DwYIVbMJ.js";import"./D_4x3YkE.js";import"./DgehqBfD.js";import"./DHSJuXaH.js";import"./QrWvGmxL.js";import"./DK2eP8E6.js";import"./D_LpeG6J.js";import"./0Qre1QGV.js";import"./pjINWgZp.js";import"./CNvx1l84.js";import"./DLrBJtzW.js";import"./DzmVOasW.js";import"./BmJu6AM4.js";const ue={class:"w-dvw px-0 py-4 md:p-4"},pe={class:"border rounded-xl shadow-sm px-2 py-2 flex items-center justify-between gap-2"},fe={class:"mt-4 font-rubik font-normal"},ce={class:"bg-[--p-surface-50] rounded-md p-2 grid gap-4"},ge={class:"grid md:grid-cols-2 gap-2"},ve={class:"grid form-control"},ye={class:"grid form-control"},Ve={class:"flex items-center justify-end gap-2"},be={class:"bg-[--p-surface-50] rounded-md p-2 grid gap-4"},_e={class:"border rounded-lg p-2"},xe={class:"flex items-center justify-end"},Ce={class:"grid md:grid-cols-3 gap-2"},ke={class:"grid form-control"},Pe={class:"grid form-control"},Ue={class:"grid form-control"},Me={class:"flex items-center justify-end gap-2"},$e={class:"bg-[--p-surface-50] rounded-md p-2 grid gap-4"},we={class:"grid md:grid-cols-2 lg:grid-cols-4 gap-2"},Ne={class:"grid form-control"},Se={class:"grid form-control"},De={class:"grid form-control"},Ie={class:"grid form-control"},Te={class:"flex items-center justify-end gap-2"},je={class:"bg-[--p-surface-50] rounded-md p-2 grid gap-4"},Ee={class:"grid md:grid-cols-4 gap-2"},Le={class:"grid form-control md:col-span-4 lg:hidden"},Oe={class:"grid form-control md:col-span-2"},qe={class:"form-control hidden lg:grid lg:col-span-2"},Be={class:"grid form-control md:col-span-2 lg:col-span-1"},ze={class:"grid form-control md:col-span-2 lg:col-span-1"},Ae={class:"grid form-control md:col-span-2 lg:col-span-1"},Fe={class:"grid form-control md:col-span-2 lg:col-span-1"},Re={class:"grid form-control md:col-span-2 lg:col-span-1"},He={class:"grid form-control md:col-span-2 lg:col-span-1"},Qe={class:"grid form-control md:col-span-2"},We={class:"grid form-control md:col-span-4"},Ge={class:"flex items-center justify-end gap-2"},$l=Y({__name:"index",setup(Je){ae({title:"Create Order"});const S=Z(),o=h({client:{name:"",email:"",role:"USER"},items:[{_id:N(),name:"",quantity:1,unitPrice:0}],priority:"low",deliveryMode:"pickup station",freightMode:"air",status:"processing",destination:{address:"",name:"",city:"",state:"",country:"",countryCode:"",lat:null,lng:null,description:""}}),D=()=>{o.items.unshift({_id:N(),name:"",quantity:1,unitPrice:0})},I=a=>{var e;o.items=(e=o.items)==null?void 0:e.filter(u=>u._id!==a)},T=a=>{o.destination={name:a.name,address:a.address,state:a.state,city:a.city,country:a.country,countryCode:a.countryCode.toUpperCase(),lat:a.lat,lng:a.lng}},y=ee(!1),j=async()=>{var a;o.items=(a=o.items)==null?void 0:a.map(e=>({...e,_id:void 0})),y.value=!0;try{const e=await $fetch("/api/orders",{method:"POST",body:o});await ie(`/admin/orders/${e.order._id}`)}catch(e){me(e,S)}finally{y.value=!1}};return(a,e)=>{const u=le,E=z,V=X,p=K,b=J,_=G,x=W,C=Q,L=A,O=H,q=R,B=F;return U(),P("div",ue,[l("header",pe,[e[17]||(e[17]=l("h1",{class:"font-rubik text-xl font-bold text-[--p-primary-color]"}," New Order ",-1)),i(E,{to:"/admin/"},{default:m(()=>[i(u,{label:"Back",icon:"pi pi-arrow-left",size:"small",severity:"secondary"})]),_:1})]),l("div",fe,[i(B,{value:"1",linear:""},{default:m(()=>[i(_,{value:"1"},{default:m(()=>[i(V,null,{default:m(()=>e[18]||(e[18]=[s("Client Data")])),_:1}),i(b,{l:""},{default:m(({activateCallback:f})=>{var r,g;return[l("div",ce,[l("div",ge,[l("div",ve,[e[19]||(e[19]=l("label",{for:"name"},[s("Name "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{id:"name",modelValue:t(o).client.name,"onUpdate:modelValue":e[0]||(e[0]=n=>t(o).client.name=n),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])]),l("div",ye,[e[20]||(e[20]=l("label",{for:"email"},[s("Email "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{id:"email",modelValue:t(o).client.email,"onUpdate:modelValue":e[1]||(e[1]=n=>t(o).client.email=n),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])])]),l("div",Ve,[i(u,{disabled:!((r=t(o).client)!=null&&r.name)||!((g=t(o).client)!=null&&g.email),onClick:n=>f("2"),label:"Next",icon:"pi pi-arrow-right","icon-pos":"right"},null,8,["disabled","onClick"])])])]}),_:1})]),_:1}),i(_,{value:"2"},{default:m(()=>[i(V,null,{default:m(()=>e[21]||(e[21]=[s("Items")])),_:1}),i(b,null,{default:m(({activateCallback:f})=>{var r,g;return[l("div",be,[l("div",null,[i(u,{onClick:D,label:"Add item",size:"small",icon:"pi pi-plus"})]),(U(!0),P(oe,null,te(t(o).items,(n,k)=>{var v;return U(),P("div",{key:n._id},[l("div",_e,[l("div",xe,[i(u,{onClick:c=>I(n._id),severity:"danger",icon:"pi pi-trash",size:"small",disabled:((v=t(o).items)==null?void 0:v.length)===1},null,8,["onClick","disabled"])]),l("div",Ce,[l("div",ke,[e[22]||(e[22]=l("label",null,[s("Name "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{modelValue:n.name,"onUpdate:modelValue":c=>n.name=c,modelModifiers:{trim:!0},placeholder:`Item-${k+1}`,fluid:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),l("div",Pe,[e[23]||(e[23]=l("label",null,[s("Quantity "),l("span",{class:"text-red-500"},"*")],-1)),i(x,{min:1,modelValue:n.quantity,"onUpdate:modelValue":c=>n.quantity=c,fluid:""},null,8,["modelValue","onUpdate:modelValue"])]),l("div",Ue,[e[24]||(e[24]=l("label",null,[s("Unit Price ($) "),l("span",{class:"text-red-500"},"*")],-1)),i(x,{modelValue:n.unitPrice,"onUpdate:modelValue":c=>n.unitPrice=c,"max-fraction-digits":2,fluid:""},null,8,["modelValue","onUpdate:modelValue"])])])])])}),128)),l("div",Me,[i(u,{onClick:n=>f("1"),label:"Prev",icon:"pi pi-arrow-left",severity:"secondary"},null,8,["onClick"]),i(u,{disabled:!((r=t(o).items)!=null&&r.length)||((g=t(o).items)==null?void 0:g.some(n=>!n.name||!n.quantity||!n.unitPrice)),onClick:n=>f("3"),label:"Next",icon:"pi pi-arrow-right","icon-pos":"right"},null,8,["disabled","onClick"])])])]}),_:1})]),_:1}),i(_,{value:"3"},{default:m(()=>[i(V,null,{default:m(()=>e[25]||(e[25]=[s("Delivery Information")])),_:1}),i(b,null,{default:m(({activateCallback:f})=>[l("div",$e,[l("div",we,[l("div",Ne,[e[26]||(e[26]=l("label",null,[s("Priority "),l("span",{class:"text-red-500"},"*")],-1)),i(C,{modelValue:t(o).priority,"onUpdate:modelValue":e[2]||(e[2]=r=>t(o).priority=r),options:t(se)},null,8,["modelValue","options"])]),l("div",Se,[e[27]||(e[27]=l("label",null,[s("Order Status "),l("span",{class:"text-red-500"},"*")],-1)),i(C,{modelValue:t(o).status,"onUpdate:modelValue":e[3]||(e[3]=r=>t(o).status=r),options:t(ne)},null,8,["modelValue","options"])]),l("div",De,[e[28]||(e[28]=l("label",null,[s("Freight Mode "),l("span",{class:"text-red-500"},"*")],-1)),i(C,{modelValue:t(o).freightMode,"onUpdate:modelValue":e[4]||(e[4]=r=>t(o).freightMode=r),options:t(de)},null,8,["modelValue","options"])]),l("div",Ie,[e[29]||(e[29]=l("label",null,[s("Delivery Mode "),l("span",{class:"text-red-500"},"*")],-1)),i(C,{modelValue:t(o).deliveryMode,"onUpdate:modelValue":e[5]||(e[5]=r=>t(o).deliveryMode=r),options:t(re)},null,8,["modelValue","options"])])]),l("div",Te,[i(u,{onClick:r=>f("2"),label:"Prev",icon:"pi pi-arrow-left",severity:"secondary"},null,8,["onClick"]),i(u,{onClick:r=>f("4"),label:"Next",icon:"pi pi-arrow-right","icon-pos":"right",disabled:!t(o).priority||!t(o).status||!t(o).deliveryMode||!t(o).freightMode},null,8,["onClick","disabled"])])])]),_:1})]),_:1}),i(_,{value:"4"},{default:m(()=>[i(V,null,{default:m(()=>e[30]||(e[30]=[s("Order Destination")])),_:1}),i(b,null,{default:m(({activateCallback:f})=>{var r,g,n,k,v,c,M,$,w;return[l("div",je,[e[42]||(e[42]=l("p",{class:"font-semibold"},"Search for a location or select one by clicking anywhere on the map",-1)),l("div",null,[i(L,{onLocationPicked:T})]),l("div",Ee,[l("div",Le,[e[31]||(e[31]=l("label",null,[s("Address "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{modelValue:t(o).destination.address,"onUpdate:modelValue":e[6]||(e[6]=d=>t(o).destination.address=d),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])]),l("div",Oe,[e[32]||(e[32]=l("label",null,[s("Name "),l("small",null,"(optional)")],-1)),i(p,{modelValue:t(o).destination.name,"onUpdate:modelValue":e[7]||(e[7]=d=>t(o).destination.name=d),modelModifiers:{trim:!0},placeholder:"e.g. NPE Warehouse",fluid:""},null,8,["modelValue"])]),l("div",qe,[e[33]||(e[33]=l("label",null,[s("Address "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{modelValue:t(o).destination.address,"onUpdate:modelValue":e[8]||(e[8]=d=>t(o).destination.address=d),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])]),l("div",Be,[e[34]||(e[34]=l("label",null,[s("City "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{modelValue:t(o).destination.city,"onUpdate:modelValue":e[9]||(e[9]=d=>t(o).destination.city=d),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])]),l("div",ze,[e[35]||(e[35]=l("label",null,[s("State or Region "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{modelValue:t(o).destination.state,"onUpdate:modelValue":e[10]||(e[10]=d=>t(o).destination.state=d),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])]),l("div",Ae,[e[36]||(e[36]=l("label",null,[s("Country "),l("span",{class:"text-red-500"},"*")],-1)),i(p,{modelValue:t(o).destination.country,"onUpdate:modelValue":e[11]||(e[11]=d=>t(o).destination.country=d),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])]),l("div",Fe,[e[37]||(e[37]=l("label",null,[s("Country Code"),l("span",{class:"text-red-500"},"*")],-1)),i(p,{modelValue:t(o).destination.countryCode,"onUpdate:modelValue":e[12]||(e[12]=d=>t(o).destination.countryCode=d),modelModifiers:{trim:!0},fluid:""},null,8,["modelValue"])]),l("div",Re,[e[38]||(e[38]=l("label",null,[s("Latitude"),l("span",{class:"text-red-500"},"*")],-1)),i(x,{modelValue:t(o).destination.lat,"onUpdate:modelValue":e[13]||(e[13]=d=>t(o).destination.lat=d),min:-90,max:90,grouping:!1,fluid:""},null,8,["modelValue"])]),l("div",He,[e[39]||(e[39]=l("label",null,[s("Longitude"),l("span",{class:"text-red-500"},"*")],-1)),i(x,{modelValue:t(o).destination.lng,"onUpdate:modelValue":e[14]||(e[14]=d=>t(o).destination.lng=d),min:-180,max:180,grouping:!1,fluid:""},null,8,["modelValue"])]),l("div",Qe,[e[40]||(e[40]=l("label",null,[s("Estimated Delivery Date "),l("span",{class:"text-red-500"},"*")],-1)),i(O,{modelValue:t(o).estimatedDelivery,"onUpdate:modelValue":e[15]||(e[15]=d=>t(o).estimatedDelivery=d),"date-format":"dd M, yy",fluid:""},null,8,["modelValue"])]),l("div",We,[e[41]||(e[41]=l("label",null,[s("Description "),l("small",null,"(optional)")],-1)),i(q,{modelValue:t(o).destination.description,"onUpdate:modelValue":e[16]||(e[16]=d=>t(o).destination.description=d),modelModifiers:{trim:!0},rows:"4",class:"resize-none",fluid:""},null,8,["modelValue"])])]),l("div",Ge,[i(u,{onClick:d=>f("2"),label:"Prev",icon:"pi pi-arrow-left",severity:"secondary"},null,8,["onClick"]),i(u,{onClick:j,loading:t(y),label:"Submit",icon:"pi pi-check","icon-pos":"right",disabled:t(y)||!t(o).estimatedDelivery||!((r=t(o).destination)!=null&&r.address)||!((g=t(o).destination)!=null&&g.city)||!((n=t(o).destination)!=null&&n.state)||!((k=t(o).destination)!=null&&k.country)||!((v=t(o).destination)!=null&&v.countryCode)||((c=t(o).destination)==null?void 0:c.lat)===null||((M=t(o).destination)==null?void 0:M.lat)===void 0||(($=t(o).destination)==null?void 0:$.lng)===null||((w=t(o).destination)==null?void 0:w.lng)===void 0},null,8,["loading","disabled"])])])]}),_:1})]),_:1})]),_:1})])])}}});export{$l as default};
