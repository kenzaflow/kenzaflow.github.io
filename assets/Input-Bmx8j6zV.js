import{r as H,j as d,f as R,u as g,a7 as ye,C as he,a as P,B as E,c as F,S as B,h as W,b as ve,J as _e,V as Se,s as ae,g as Ie}from"./index-iJOU9LjR.js";function ue(s=null){const e=H.createContext(s);return[({children:n,value:r})=>d.jsx(e.Provider,{value:r,children:n}),()=>H.useContext(e)]}const[be,ge]=ue({size:"sm"}),Ne={},pe=R((s,e)=>{const t=g("InputClearButton",Ne,s),{size:l,variant:n,vars:r,classNames:f,styles:_,...y}=t,c=ge(),{resolvedClassNames:S,resolvedStyles:u}=ye({classNames:f,styles:_,props:t});return d.jsx(he,{variant:n||"transparent",ref:e,size:l||(c==null?void 0:c.size)||"sm",classNames:S,styles:u,__staticSelector:"InputClearButton",...y})});pe.displayName="@mantine/core/InputClearButton";const[ze,K]=ue({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var I={wrapper:"m_6c018570",input:"m_8fb7ebe7",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",description:"m_fe47ce59"};const le={},$e=F((s,{size:e})=>({description:{"--input-description-size":e===void 0?void 0:`calc(${B(e)} - ${W(2)})`}})),M=R((s,e)=>{const t=g("InputDescription",le,s),{classNames:l,className:n,style:r,styles:f,unstyled:_,vars:y,size:c,__staticSelector:S,__inheritStyles:u=!0,variant:b,...p}=g("InputDescription",le,t),i=K(),a=P({name:["InputWrapper",S],props:t,classes:I,className:n,style:r,classNames:l,styles:f,unstyled:_,rootSelector:"description",vars:y,varsResolver:$e}),m=u&&(i==null?void 0:i.getStyles)||a;return d.jsx(E,{component:"p",ref:e,variant:b,size:c,...m("description",i!=null&&i.getStyles?{className:n,style:r}:void 0),...p})});M.classes=I;M.displayName="@mantine/core/InputDescription";const Ce={},je=F((s,{size:e})=>({error:{"--input-error-size":e===void 0?void 0:`calc(${B(e)} - ${W(2)})`}})),Q=R((s,e)=>{const t=g("InputError",Ce,s),{classNames:l,className:n,style:r,styles:f,unstyled:_,vars:y,size:c,__staticSelector:S,__inheritStyles:u=!0,variant:b,...p}=t,i=P({name:["InputWrapper",S],props:t,classes:I,className:n,style:r,classNames:l,styles:f,unstyled:_,rootSelector:"error",vars:y,varsResolver:je}),a=K(),m=u&&(a==null?void 0:a.getStyles)||i;return d.jsx(E,{component:"p",ref:e,variant:b,size:c,...m("error",a!=null&&a.getStyles?{className:n,style:r}:void 0),...p})});Q.classes=I;Q.displayName="@mantine/core/InputError";const ce={labelElement:"label"},xe=F((s,{size:e})=>({label:{"--input-label-size":B(e),"--input-asterisk-color":void 0}})),U=R((s,e)=>{const t=g("InputLabel",ce,s),{classNames:l,className:n,style:r,styles:f,unstyled:_,vars:y,labelElement:c,size:S,required:u,htmlFor:b,onMouseDown:p,children:i,__staticSelector:a,variant:m,mod:C,...h}=g("InputLabel",ce,t),o=P({name:["InputWrapper",a],props:t,classes:I,className:n,style:r,classNames:l,styles:f,unstyled:_,rootSelector:"label",vars:y,varsResolver:xe}),N=K(),q=(N==null?void 0:N.getStyles)||o;return d.jsxs(E,{...q("label",N!=null&&N.getStyles?{className:n,style:r}:void 0),component:c,variant:m,size:S,ref:e,htmlFor:c==="label"?b:void 0,mod:[{required:u},C],onMouseDown:z=>{p==null||p(z),!z.defaultPrevented&&z.detail>1&&z.preventDefault()},...h,children:[i,u&&d.jsx("span",{...q("required"),"aria-hidden":!0,children:" *"})]})});U.classes=I;U.displayName="@mantine/core/InputLabel";const de={},re=R((s,e)=>{const t=g("InputPlaceholder",de,s),{classNames:l,className:n,style:r,styles:f,unstyled:_,vars:y,__staticSelector:c,variant:S,error:u,mod:b,...p}=g("InputPlaceholder",de,t),i=P({name:["InputPlaceholder",c],props:t,classes:I,className:n,style:r,classNames:l,styles:f,unstyled:_,rootSelector:"placeholder"});return d.jsx(E,{...i("placeholder"),mod:[{error:!!u},b],component:"span",variant:S,ref:e,...p})});re.classes=I;re.displayName="@mantine/core/InputPlaceholder";function Be(s,{hasDescription:e,hasError:t}){const l=s.findIndex(y=>y==="input"),n=s.slice(0,l),r=s.slice(l+1),f=e&&n.includes("description")||t&&n.includes("error");return{offsetBottom:e&&r.includes("description")||t&&r.includes("error"),offsetTop:f}}const Ee={labelElement:"label",inputContainer:s=>s,inputWrapperOrder:["label","description","input","error"]},we=F((s,{size:e})=>({label:{"--input-label-size":B(e),"--input-asterisk-color":void 0},error:{"--input-error-size":e===void 0?void 0:`calc(${B(e)} - ${W(2)})`},description:{"--input-description-size":e===void 0?void 0:`calc(${B(e)} - ${W(2)})`}})),oe=R((s,e)=>{const t=g("InputWrapper",Ee,s),{classNames:l,className:n,style:r,styles:f,unstyled:_,vars:y,size:c,variant:S,__staticSelector:u,inputContainer:b,inputWrapperOrder:p,label:i,error:a,description:m,labelProps:C,descriptionProps:h,errorProps:o,labelElement:N,children:q,withAsterisk:z,id:L,required:X,__stylesApiProps:Y,mod:Z,...ie}=t,T=P({name:["InputWrapper",u],props:Y||t,classes:I,className:n,style:r,classNames:l,styles:f,unstyled:_,vars:y,varsResolver:we}),j={size:c,variant:S,__staticSelector:u},x=ve(L),ee=typeof z=="boolean"?z:X,k=(o==null?void 0:o.id)||`${x}-error`,O=(h==null?void 0:h.id)||`${x}-description`,V=x,A=!!a&&typeof a!="boolean",D=!!m,J=`${A?k:""} ${D?O:""}`,te=J.trim().length>0?J.trim():void 0,v=(C==null?void 0:C.id)||`${x}-label`,se=i&&d.jsx(U,{labelElement:N,id:v,htmlFor:V,required:ee,...j,...C,children:i},"label"),w=D&&d.jsx(M,{...h,...j,size:(h==null?void 0:h.size)||j.size,id:(h==null?void 0:h.id)||O,children:m},"description"),ne=d.jsx(H.Fragment,{children:b(q)},"input"),G=A&&H.createElement(Q,{...o,...j,size:(o==null?void 0:o.size)||j.size,key:"error",id:(o==null?void 0:o.id)||k},a),me=p.map(fe=>{switch(fe){case"label":return se;case"input":return ne;case"description":return w;case"error":return G;default:return null}});return d.jsx(ze,{value:{getStyles:T,describedBy:te,inputId:V,labelId:v,...Be(p,{hasDescription:D,hasError:A})},children:d.jsx(E,{ref:e,variant:S,size:c,mod:[{error:!!a},Z],...T("root"),...ie,children:me})})});oe.classes=I;oe.displayName="@mantine/core/InputWrapper";const We={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},Re=F((s,e,t)=>({wrapper:{"--input-margin-top":t.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":t.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":ae(e.size,"input-height"),"--input-fz":B(e.size),"--input-radius":e.radius===void 0?void 0:Ie(e.radius),"--input-left-section-width":e.leftSectionWidth!==void 0?W(e.leftSectionWidth):void 0,"--input-right-section-width":e.rightSectionWidth!==void 0?W(e.rightSectionWidth):void 0,"--input-padding-y":e.multiline?ae(e.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":e.leftSectionPointerEvents,"--input-right-section-pointer-events":e.rightSectionPointerEvents}})),$=_e((s,e)=>{const t=g("Input",We,s),{classNames:l,className:n,style:r,styles:f,unstyled:_,required:y,__staticSelector:c,__stylesApiProps:S,size:u,wrapperProps:b,error:p,disabled:i,leftSection:a,leftSectionProps:m,leftSectionWidth:C,rightSection:h,rightSectionProps:o,rightSectionWidth:N,rightSectionPointerEvents:q,leftSectionPointerEvents:z,variant:L,vars:X,pointer:Y,multiline:Z,radius:ie,id:T,withAria:j,withErrorStyles:x,mod:ee,inputSize:k,__clearSection:O,__clearable:V,__defaultRightSection:A,...D}=t,{styleProps:J,rest:te}=Se(D),v=K(),se={offsetBottom:v==null?void 0:v.offsetBottom,offsetTop:v==null?void 0:v.offsetTop},w=P({name:["Input",c],props:S||t,classes:I,className:n,style:r,classNames:l,styles:f,unstyled:_,stylesCtx:se,rootSelector:"wrapper",vars:X,varsResolver:Re}),ne=j?{required:y,disabled:i,"aria-invalid":!!p,"aria-describedby":v==null?void 0:v.describedBy,id:(v==null?void 0:v.inputId)||T}:{},G=h||V&&O||A;return d.jsx(be,{value:{size:u||"sm"},children:d.jsxs(E,{...w("wrapper"),...J,...b,mod:[{error:!!p&&x,pointer:Y,disabled:i,multiline:Z,"data-with-right-section":!!h,"data-with-left-section":!!a},ee],variant:L,size:u,children:[a&&d.jsx("div",{...m,"data-position":"left",...w("section",{className:m==null?void 0:m.className,style:m==null?void 0:m.style}),children:a}),d.jsx(E,{component:"input",...te,...ne,ref:e,required:y,mod:{disabled:i,error:!!p&&x},variant:L,__size:k,...w("input")}),G&&d.jsx("div",{...o,"data-position":"right",...w("section",{className:o==null?void 0:o.className,style:o==null?void 0:o.style}),children:G})]})})});$.classes=I;$.Wrapper=oe;$.Label=U;$.Error=Q;$.Description=M;$.Placeholder=re;$.ClearButton=pe;$.displayName="@mantine/core/Input";export{$ as I,K as u};
