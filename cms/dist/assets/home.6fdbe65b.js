var N=Object.defineProperty,$=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var E=(e,n,o)=>n in e?N(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,F=(e,n)=>{for(var o in n||(n={}))T.call(n,o)&&E(e,o,n[o]);if(C)for(var o of C(n))V.call(n,o)&&E(e,o,n[o]);return e},b=(e,n)=>$(e,L(n));import{j as f,r as g,o as a,c,x as t,t as r,C as R,B as m,D as p,F as D,G as v,H as I,I as q,J as z,u as G,l as J,k as K,K as O,L as P,M as Q,N as U,O as W,P as X,Q as Y,R as Z,S as ee,T as ne,v as s,U as te,y as oe,z as ae,A as M}from"./vendor.acb92e5d.js";/* empty css                  *//* empty css                  *//* empty css                   */import{_ as h}from"./index.98466bb9.js";const se=["innerHTML"],ue={name:"SubMenu"},le=f(b(F({},ue),{props:["menu"],setup(e){return(n,o)=>{const d=g("sub-menu"),i=I,u=q;return a(),c(u,{index:e.menu.path},{title:t(()=>[e.menu.icon?(a(),r("span",{key:0,class:"svg",innerHTML:e.menu.icon},null,8,se)):R("",!0),m("span",null,p(e.menu.name),1)]),default:t(()=>[(a(!0),r(v,null,D(e.menu.child,(l,w)=>(a(),r(v,{key:l._id},[l.child?(a(),c(d,{key:0,menu:l},null,8,["menu"])):(a(),c(i,{key:1,index:e.menu.path+l.path},{default:t(()=>[m("span",null,p(l.name),1)]),_:2},1032,["index"]))],64))),128))]),_:1},8,["index"])}}}));var _e=h(le,[["__scopeId","data-v-3cb761e3"]]);const ce=f({props:["menus"],setup(e){return(n,o)=>{const d=I,i=z;return a(),c(i,{class:"menu-view","unique-opened":!0,router:!0,"default-active":n.$route.path},{default:t(()=>[(a(!0),r(v,null,D(e.menus,(u,l)=>(a(),r(v,{key:u._id},[u.child?(a(),c(_e,{key:0,menu:u},null,8,["menu"])):(a(),c(d,{key:1,index:u.path},{default:t(()=>[m("span",null,p(u.name),1)]),_:2},1032,["index"]))],64))),128))]),_:1},8,["default-active"])}}});var re=h(ce,[["__scopeId","data-v-474cbafa"]]);const de=e=>(oe("data-v-fadf233c"),e=e(),ae(),e),ie={class:"main-view"},me=de(()=>m("p",{class:"title"},"CMS\u7BA1\u7406\u7CFB\u7EDF",-1)),pe={class:"el-dropdown-link"},ve=M("\u4FEE\u6539\u5BC6\u7801"),fe=M("\u9000\u51FA\u767B\u5F55"),he=f({setup(e){const n=G(),{proxy:o}=J(),d=K(),i=O(()=>n.state.home.userInfo),u=_=>{_=="exit"?(localStorage.clear(),location.reload()):_=="edit"&&d.push("/setting/editpass")},l=P({}),w=async()=>{const _=await o.$api_loading.get("/setting/menus_auth");!_||(console.log("\u83B7\u53D6\u5DE6\u4FA7\u83DC\u5355\u9879\uFF1A",_.data),l.value=_.data)};return Q(()=>{w()}),(_,we)=>{const x=U,k=W,B=X,S=Y,A=Z,j=g("router-view"),H=ee,y=ne;return a(),r("div",ie,[s(y,{class:"container-view"},{default:t(()=>[s(S,{class:"header-view"},{default:t(()=>[me,s(B,{class:"dropdown",placement:"bottom",onCommand:u},{dropdown:t(()=>[s(k,null,{default:t(()=>[s(x,{command:"edit"},{default:t(()=>[ve]),_:1}),s(x,{command:"exit"},{default:t(()=>[fe]),_:1})]),_:1})]),default:t(()=>[m("span",pe,p(te(i).name||"\u533F\u540D\u7528\u6237")+"\uFF0C\u6B22\u8FCE\u60A8",1)]),_:1})]),_:1}),s(y,null,{default:t(()=>[s(A,{width:"200px",class:"aside-view"},{default:t(()=>[s(re,{menus:l.value},null,8,["menus"])]),_:1}),s(H,{class:"body-view"},{default:t(()=>[s(j)]),_:1})]),_:1})]),_:1})])}}});var ge=h(he,[["__scopeId","data-v-fadf233c"]]);export{ge as default};
