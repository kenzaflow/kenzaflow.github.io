import{h as z,f as $,u as x,a as y,j as S,B as T,c as w}from"./index-iJOU9LjR.js";const W=["h1","h2","h3","h4","h5","h6"],H=["xs","sm","md","lg","xl"];function b(t,n){const e=n!==void 0?n:`h${t}`;return W.includes(e)?{fontSize:`var(--mantine-${e}-font-size)`,fontWeight:`var(--mantine-${e}-font-weight)`,lineHeight:`var(--mantine-${e}-line-height)`}:H.includes(e)?{fontSize:`var(--mantine-font-size-${e})`,fontWeight:`var(--mantine-h${t}-font-weight)`,lineHeight:`var(--mantine-h${t}-line-height)`}:{fontSize:z(e),fontWeight:`var(--mantine-h${t}-font-weight)`,lineHeight:`var(--mantine-h${t}-line-height)`}}var l={root:"m_8a5d1357"};const j={order:1},N=w((t,{order:n,size:e,lineClamp:s,textWrap:a})=>{const i=b(n,e);return{root:{"--title-fw":i.fontWeight,"--title-lh":i.lineHeight,"--title-fz":i.fontSize,"--title-line-clamp":typeof s=="number"?s.toString():void 0,"--title-text-wrap":a}}}),r=$((t,n)=>{const e=x("Title",j,t),{classNames:s,className:a,style:i,styles:h,unstyled:f,order:o,vars:m,size:c,variant:u,lineClamp:g,textWrap:R,mod:p,...d}=e,v=y({name:"Title",props:e,classes:l,className:a,style:i,classNames:s,styles:h,unstyled:f,vars:m,varsResolver:N});return[1,2,3,4,5,6].includes(o)?S.jsx(T,{...v("root"),component:`h${o}`,variant:u,ref:n,mod:[{order:o,"data-line-clamp":typeof g=="number"},p],size:c,...d}):null});r.classes=l;r.displayName="@mantine/core/Title";export{r as T};
