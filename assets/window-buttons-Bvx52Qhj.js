import{d,r as u,j as o,v as h,A as x,T as v,B as M,ae as w}from"./index-iJOU9LjR.js";import{u as g}from"./use-colors-BxM1ci3V.js";import{u as k}from"./noise-BnVVm7Zg.js";import{G as m}from"./Group-C39_Ghv2.js";import{I as y,T as I}from"./IconX-D3748ucF.js";/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var f=d("outline","arrows-diagonal-2","IconArrowsDiagonal2",[["path",{d:"M16 20l4 0l0 -4",key:"svg-0"}],["path",{d:"M14 14l6 6",key:"svg-1"}],["path",{d:"M8 4l-4 0l0 4",key:"svg-2"}],["path",{d:"M4 4l6 6",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var j=d("outline","arrows-diagonal-minimize-2","IconArrowsDiagonalMinimize2",[["path",{d:"M18 10h-4v-4",key:"svg-0"}],["path",{d:"M20 4l-6 6",key:"svg-1"}],["path",{d:"M6 14h4v4",key:"svg-2"}],["path",{d:"M10 14l-6 6",key:"svg-3"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var b=d("outline","minus","IconMinus",[["path",{d:"M5 12l14 0",key:"svg-0"}]]);function c({onClick:e,iconVisible:t,icon:r,color:i,tooltipLabel:l,disabled:p=!1}){const a=h(),s=g();return o.jsx(I,{label:l,disabled:!0,children:o.jsx(x,{disabled:p,onClick:n=>{n.preventDefault(),e()},size:s?16:14,style:{boxShadow:`0px 0px 0px 1px var(--mantine-color-${i}-7)`},radius:"100%",color:i,children:o.jsx(v,{mounted:t,transition:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},duration:a.animations?void 0:0,children:n=>o.jsx(M,{c:w(`var(--mantine-color-${i}-9)`,.6),style:{...n,lineHeight:0},w:10,h:10,children:u.createElement(r,{width:"100%",height:"100%",strokeWidth:3})})})})})}function T({manifest:e,invert:t}){const{taskIsMaximized:r,toggleAppMaximized:i,toggleAppMinimized:l,closeTask:p}=k(),[a,s]=u.useState(!1),n=g();return o.jsx(m,{wrap:"nowrap",style:{pointerEvents:"none",overflow:"hidden"},children:o.jsxs(m,{wrap:"nowrap",onMouseEnter:()=>{s(!0)},onMouseLeave:()=>{s(!1)},style:{pointerEvents:"auto",flexDirection:t?"row-reverse":"row"},p:2,gap:n?16/2:14/2,children:[o.jsx(c,{tooltipLabel:"Cerrar",color:"red",onClick:()=>{p(e.appId)},iconVisible:a,icon:y}),n?null:o.jsxs(o.Fragment,{children:[o.jsx(c,{tooltipLabel:"Minimizar",color:"yellow",onClick:()=>{l(e.appId)},iconVisible:a,icon:b}),e.canMaximize!==!1?o.jsx(o.Fragment,{children:o.jsx(c,{tooltipLabel:r(e.appId)?"Restaurar tamaño":"Maximizar",color:"green",onClick:()=>{i(e.appId)},iconVisible:a,icon:r(e.appId)?j:f})}):null]})]})})}export{b as I,T as W};
