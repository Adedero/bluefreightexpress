import{ag as t,aG as r,c as a,o as s,k as n,T as p}from"./DHCjx-0A.js";import{s as c}from"./C8WNGDPJ.js";var u=`
.p-checkbox-group {
    display: inline-flex;
}
`,i={root:"p-checkbox-group p-component"},m=t.extend({name:"checkboxgroup",style:u,classes:i}),l={name:"BaseCheckboxGroup",extends:c,style:m,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},d={name:"CheckboxGroup",extends:l,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("checkbox-group-")}},mounted:function(){this.groupName=this.groupName||r("checkbox-group-")}};function h(e,o,x,k,f,g){return s(),a("div",p({class:e.cx("root")},e.ptmi("root")),[n(e.$slots,"default")],16)}d.render=h;export{d as default};
