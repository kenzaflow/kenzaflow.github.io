import{r as p,f as Ee,u as qe,a as Be,j as e,B as b,c as We,h as M,g as He,x as ot,T as ct,y as dt,z as ut,D as pt,s as ft,q as ht,d as D,E as mt,v as xt,I as H,A as _,G as E,e as Ue,L as Te,n as vt,M as ie}from"./index-iJOU9LjR.js";import{u as yt}from"./index-CckmsBXr.js";import{u as ve}from"./useQuery-DPqw8mhH.js";import{u as Ke,W as gt}from"./use-manifest-DNP09E0r.js";import{W as wt}from"./window-buttons-Bvx52Qhj.js";import{u as Ye,A as Q,m as ee}from"./use-colors-BxM1ci3V.js";import{u as jt}from"./noise-BnVVm7Zg.js";import{S as Je}from"./ScrollArea-Bsj6NYop.js";import{G as z}from"./Group-C39_Ghv2.js";import{T as le}from"./ThemeIcon-ClRCma8m.js";import{S as se}from"./Stack-Cs4rQFww.js";import{T as I}from"./Text-VW8m8fwo.js";import{T as Pe}from"./Title-DM0_R12A.js";import{I as _e}from"./IconX-D3748ucF.js";import{T as ze}from"./TextInput-BrL89NKl.js";import{g as Le,I as bt}from"./IconStar-eKJOSZ34.js";import{A as kt}from"./Anchor-q83Gwrmg.js";import{I as St}from"./IconDots-qPra_Wqr.js";import"./InputBase-DQXXXadO.js";import"./Input-Bmx8j6zV.js";function te(t,s,n){return s===void 0&&n===void 0?t:s!==void 0&&n===void 0?Math.max(t,s):Math.min(s===void 0&&n!==void 0?t:Math.max(t,s),n)}function Mt(t,s,n="ltr"){const i=p.useRef(null),d=p.useRef(!1),l=p.useRef(!1),u=p.useRef(0),[r,y]=p.useState(!1);return p.useEffect(()=>{d.current=!0},[]),p.useEffect(()=>{const a=i.current,x=({x:f,y:$})=>{cancelAnimationFrame(u.current),u.current=requestAnimationFrame(()=>{if(d.current&&a){a.style.userSelect="none";const P=a.getBoundingClientRect();if(P.width&&P.height){const w=te((f-P.left)/P.width,0,1);t({x:n==="ltr"?w:1-w,y:te(($-P.top)/P.height,0,1)})}}})},g=()=>{document.addEventListener("mousemove",A),document.addEventListener("mouseup",j),document.addEventListener("touchmove",C),document.addEventListener("touchend",j)},v=()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",j),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",j)},o=()=>{!l.current&&d.current&&(l.current=!0,typeof(s==null?void 0:s.onScrubStart)=="function"&&s.onScrubStart(),y(!0),g())},j=()=>{l.current&&d.current&&(l.current=!1,y(!1),v(),setTimeout(()=>{typeof(s==null?void 0:s.onScrubEnd)=="function"&&s.onScrubEnd()},0))},c=f=>{o(),f.preventDefault(),A(f)},A=f=>x({x:f.clientX,y:f.clientY}),T=f=>{f.cancelable&&f.preventDefault(),o(),C(f)},C=f=>{f.cancelable&&f.preventDefault(),x({x:f.changedTouches[0].clientX,y:f.changedTouches[0].clientY})};return a==null||a.addEventListener("mousedown",c),a==null||a.addEventListener("touchstart",T,{passive:!1}),()=>{a&&(a.removeEventListener("mousedown",c),a.removeEventListener("touchstart",T))}},[n,t]),{ref:i,active:r}}function Ie(t,s){return s.length===0?t:s.reduce((n,i)=>Math.abs(i-t)<Math.abs(n-t)?i:n)}var Qe={root:"m_18320242","skeleton-fade":"m_299c329c"};const Tt={visible:!0,animate:!0},Pt=We((t,{width:s,height:n,radius:i,circle:d})=>({root:{"--skeleton-height":M(n),"--skeleton-width":d?M(n):M(s),"--skeleton-radius":d?"1000px":i===void 0?void 0:He(i)}})),X=Ee((t,s)=>{const n=qe("Skeleton",Tt,t),{classNames:i,className:d,style:l,styles:u,unstyled:r,vars:y,width:a,height:x,circle:g,visible:v,radius:o,animate:j,mod:c,...A}=n,T=Be({name:"Skeleton",classes:Qe,props:n,className:d,style:l,classNames:i,styles:u,unstyled:r,vars:y,varsResolver:Pt});return e.jsx(b,{ref:s,...T("root"),mod:[{visible:v,animate:j},c],...A})});X.classes=Qe;X.displayName="@mantine/core/Skeleton";const[_t,oe]=ot("SliderProvider was not found in tree"),Xe=p.forwardRef(({size:t,disabled:s,variant:n,color:i,thumbSize:d,radius:l,...u},r)=>{const{getStyles:y}=oe();return e.jsx(b,{tabIndex:-1,variant:n,size:t,ref:r,...y("root"),...u})});Xe.displayName="@mantine/core/SliderRoot";const Ge=p.forwardRef(({max:t,min:s,value:n,position:i,label:d,dragging:l,onMouseDown:u,onKeyDownCapture:r,labelTransitionProps:y,labelAlwaysOn:a,thumbLabel:x,onFocus:g,onBlur:v,showLabelOnHover:o,isHovered:j,children:c=null,disabled:A},T)=>{const{getStyles:C}=oe(),[f,$]=p.useState(!1),P=a||l||f||o&&j;return e.jsxs(b,{tabIndex:0,role:"slider","aria-label":x,"aria-valuemax":t,"aria-valuemin":s,"aria-valuenow":n,ref:T,__vars:{"--slider-thumb-offset":`${i}%`},...C("thumb",{focusable:!0}),mod:{dragging:l,disabled:A},onFocus:w=>{$(!0),typeof g=="function"&&g(w)},onBlur:w=>{$(!1),typeof v=="function"&&v(w)},onTouchStart:u,onMouseDown:u,onKeyDownCapture:r,onClick:w=>w.stopPropagation(),children:[c,e.jsx(ct,{mounted:d!=null&&!!P,transition:"fade",duration:0,...y,children:w=>e.jsx("div",{...C("label",{style:w}),children:d})})]})});Ge.displayName="@mantine/core/SliderThumb";function Ze({value:t,min:s,max:n}){const i=(t-s)/(n-s)*100;return Math.min(Math.max(i,0),100)}function zt({mark:t,offset:s,value:n,inverted:i=!1}){return i?typeof s=="number"&&t.value<=s||t.value>=n:typeof s=="number"?t.value>=s&&t.value<=n:t.value<=n}function et({marks:t,min:s,max:n,disabled:i,value:d,offset:l,inverted:u}){const{getStyles:r}=oe();if(!t)return null;const y=t.map((a,x)=>p.createElement(b,{...r("markWrapper"),__vars:{"--mark-offset":`${Ze({value:a.value,min:s,max:n})}%`},key:x},e.jsx(b,{...r("mark"),mod:{filled:zt({mark:a,value:d,offset:l,inverted:u}),disabled:i}}),a.label&&e.jsx("div",{...r("markLabel"),children:a.label})));return e.jsx("div",{children:y})}et.displayName="@mantine/core/SliderMarks";function tt({filled:t,children:s,offset:n,disabled:i,marksOffset:d,inverted:l,containerProps:u,...r}){const{getStyles:y}=oe();return e.jsx(b,{...y("trackContainer"),mod:{disabled:i},...u,children:e.jsxs(b,{...y("track"),mod:{inverted:l,disabled:i},children:[e.jsx(b,{mod:{inverted:l,disabled:i},__vars:{"--slider-bar-width":`calc(${t}% + var(--slider-size))`,"--slider-bar-offset":`calc(${n}% - var(--slider-size))`},...y("bar")}),s,e.jsx(et,{...r,offset:d,disabled:i,inverted:l})]})})}tt.displayName="@mantine/core/SliderTrack";function Lt({value:t,containerWidth:s,min:n,max:i,step:d,precision:l}){const r=(s?Math.min(Math.max(t,0),s)/s:t)*(i-n),y=(r!==0?Math.round(r/d)*d:0)+n,a=Math.max(y,n);return l!==void 0?Number(a.toFixed(l)):a}function ae(t,s){return parseFloat(t.toFixed(s))}function It(t){if(!t)return 0;const s=t.toString().split(".");return s.length>1?s[1].length:0}function me(t,s){const i=[...s].sort((d,l)=>d.value-l.value).find(d=>d.value>t);return i?i.value:t}function xe(t,s){const i=[...s].sort((d,l)=>l.value-d.value).find(d=>d.value<t);return i?i.value:t}function Ae(t){const s=[...t].sort((n,i)=>n.value-i.value);return s.length>0?s[0].value:0}function Ce(t){const s=[...t].sort((n,i)=>n.value-i.value);return s.length>0?s[s.length-1].value:100}var st={root:"m_dd36362e",label:"m_c9357328",thumb:"m_c9a9a60a",trackContainer:"m_a8645c2",track:"m_c9ade57f",bar:"m_38aeed47",markWrapper:"m_b7b0423a",mark:"m_dd33bc19",markLabel:"m_68c77a5b"};const At={radius:"xl",min:0,max:100,step:1,marks:[],label:t=>t,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,thumbLabel:"",showLabelOnHover:!0,disabled:!1,scale:t=>t},Ct=We((t,{size:s,color:n,thumbSize:i,radius:d})=>({root:{"--slider-size":ft(s,"slider-size"),"--slider-color":n?ht(n,t):void 0,"--slider-radius":d===void 0?void 0:He(d),"--slider-thumb-size":i!==void 0?M(i):"calc(var(--slider-size) * 2)"}})),ye=Ee((t,s)=>{const n=qe("Slider",At,t),{classNames:i,styles:d,value:l,onChange:u,onChangeEnd:r,size:y,min:a,max:x,step:g,precision:v,defaultValue:o,name:j,marks:c,label:A,labelTransitionProps:T,labelAlwaysOn:C,thumbLabel:f,showLabelOnHover:$,thumbChildren:P,disabled:w,unstyled:Z,scale:ce,inverted:U,className:B,style:K,vars:de,hiddenInputProps:ue,restrictToMarks:R,thumbProps:pe,...q}=n,fe=Be({name:"Slider",props:n,classes:st,classNames:i,className:B,styles:d,style:K,vars:de,varsResolver:Ct,unstyled:Z}),{dir:V}=dt(),[he,m]=p.useState(!1),[h,k]=ut({value:typeof l=="number"?te(l,a,x):l,defaultValue:typeof o=="number"?te(o,a,x):o,finalValue:te(0,a,x),onChange:u}),O=p.useRef(h),we=p.useRef(null),W=p.useRef(null),je=Ze({value:h,min:a,max:x}),re=ce(h),rt=typeof A=="function"?A(re):A,Y=v??It(g),nt=p.useCallback(({x:L})=>{if(!w){const J=Lt({value:L,min:a,max:x,step:g,precision:Y});k(R&&(c!=null&&c.length)?Ie(J,c.map(ne=>ne.value)):J),O.current=J}},[w,a,x,g,Y,k,c,R]),{ref:it,active:at}=Mt(nt,{onScrubEnd:()=>!w&&(r==null?void 0:r(R&&(c!=null&&c.length)?Ie(O.current,c.map(L=>L.value)):O.current))},V),lt=L=>{var J,ne,be,ke,Se,Me;if(!w)switch(L.key){case"ArrowUp":{if(L.preventDefault(),(J=W.current)==null||J.focus(),R&&c){const N=me(h,c);k(N),r==null||r(N);break}const F=ae(Math.min(Math.max(h+g,a),x),Y);k(F),r==null||r(F);break}case"ArrowRight":{if(L.preventDefault(),(ne=W.current)==null||ne.focus(),R&&c){const N=V==="rtl"?xe(h,c):me(h,c);k(N),r==null||r(N);break}const F=ae(Math.min(Math.max(V==="rtl"?h-g:h+g,a),x),Y);k(F),r==null||r(F);break}case"ArrowDown":{if(L.preventDefault(),(be=W.current)==null||be.focus(),R&&c){const N=xe(h,c);k(N),r==null||r(N);break}const F=ae(Math.min(Math.max(h-g,a),x),Y);k(F),r==null||r(F);break}case"ArrowLeft":{if(L.preventDefault(),(ke=W.current)==null||ke.focus(),R&&c){const N=V==="rtl"?me(h,c):xe(h,c);k(N),r==null||r(N);break}const F=ae(Math.min(Math.max(V==="rtl"?h+g:h-g,a),x),Y);k(F),r==null||r(F);break}case"Home":{if(L.preventDefault(),(Se=W.current)==null||Se.focus(),R&&c){k(Ae(c)),r==null||r(Ae(c));break}k(a),r==null||r(a);break}case"End":{if(L.preventDefault(),(Me=W.current)==null||Me.focus(),R&&c){k(Ce(c)),r==null||r(Ce(c));break}k(x),r==null||r(x);break}}};return e.jsx(_t,{value:{getStyles:fe},children:e.jsxs(Xe,{...q,ref:pt(s,we),onKeyDownCapture:lt,onMouseDownCapture:()=>{var L;return(L=we.current)==null?void 0:L.focus()},size:y,disabled:w,children:[e.jsx(tt,{inverted:U,offset:0,filled:je,marks:c,min:a,max:x,value:re,disabled:w,containerProps:{ref:it,onMouseEnter:$?()=>m(!0):void 0,onMouseLeave:$?()=>m(!1):void 0},children:e.jsx(Ge,{max:x,min:a,value:re,position:je,dragging:at,label:rt,ref:W,labelTransitionProps:T,labelAlwaysOn:C,thumbLabel:f,showLabelOnHover:$,isHovered:he,disabled:w,...pe,children:P})}),e.jsx("input",{type:"hidden",name:j,value:re,...ue})]})})});ye.classes=st;ye.displayName="@mantine/core/Slider";/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rt=D("outline","message","IconMessage",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ft=D("outline","radio","IconRadio",[["path",{d:"M14 3l-9.371 3.749a1 1 0 0 0 -.629 .928v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-11a1 1 0 0 0 -1 -1h-14.5",key:"svg-0"}],["path",{d:"M4 12h16",key:"svg-1"}],["path",{d:"M7 12v-2",key:"svg-2"}],["path",{d:"M17 16v.01",key:"svg-3"}],["path",{d:"M13 16v.01",key:"svg-4"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Re=D("outline","search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Nt=D("outline","volume-2","IconVolume2",[["path",{d:"M15 8a5 5 0 0 1 0 8",key:"svg-0"}],["path",{d:"M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dt=D("outline","volume-3","IconVolume3",[["path",{d:"M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",key:"svg-0"}],["path",{d:"M16 10l4 4m0 -4l-4 4",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var $t=D("outline","volume","IconVolume",[["path",{d:"M15 8a5 5 0 0 1 0 8",key:"svg-0"}],["path",{d:"M17.7 5a9 9 0 0 1 0 14",key:"svg-1"}],["path",{d:"M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fe=D("filled","player-pause-filled","IconPlayerPauseFilled",[["path",{d:"M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",key:"svg-0"}],["path",{d:"M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ne=D("filled","player-play-filled","IconPlayerPlayFilled",[["path",{d:"M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var De=D("filled","player-track-next-filled","IconPlayerTrackNextFilled",[["path",{d:"M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z",key:"svg-0"}],["path",{d:"M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var $e=D("filled","player-track-prev-filled","IconPlayerTrackPrevFilled",[["path",{d:"M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z",key:"svg-0"}],["path",{d:"M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vt=D("filled","star-filled","IconStarFilled",[["path",{d:"M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z",key:"svg-0"}]]);const G="https://ytmusic.kevinzaracho.com";function Ot(t){return/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i.test(t)}function Et(t){return/(iPhone)|(iPad)|(iPod)/i.test(t)}function qt(t){return/(Win32)|(Win64)|(Windows)|(WinCE)/i.test(t)}function Bt(t){return/Android/i.test(t)}function Wt(t){return/Linux/i.test(t)}function Ht(){if(typeof window>"u")return"undetermined";const{userAgent:t}=window.navigator;return Et(t)?"ios":Ot(t)?"macos":qt(t)?"windows":Bt(t)?"android":Wt(t)?"linux":"undetermined"}function Ut(){return Ht()}function Ve(t){const s=Math.floor(t/3600),n=Math.floor(t%3600/60),i=t%60,d=s>0?String(n).padStart(2,"0"):String(n),l=String(i).padStart(2,"0");return s>0?`${s}:${d}:${l}`:`${d}:${l}`}function Kt(t,s,n){return t=(1103515245*(t*Math.PI)+12345)%2147483648,Math.floor(s+t/2147483648*(n-s+1))}const Yt="_track_1xql0_1",Jt="_lyricsText_1xql0_15",Qt="_artistText_1xql0_19",Xt="_shadow_1xql0_23",Gt="_shadowLyrics_1xql0_27",Zt="_wrapper_1xql0_34",es="_coverBg_1xql0_41",ts="_coverbgCenter_1xql0_70",ss="_center_1xql0_1",rs="_coverbgLeft_1xql0_100",ns="_leftSide_1xql0_1",is="_coverbgRight_1xql0_122",as="_rightSide_1xql0_1",S={track:Yt,lyricsText:Jt,artistText:Qt,shadow:Xt,shadowLyrics:Gt,wrapper:Zt,coverBg:es,coverbgCenter:ts,center:ss,coverbgLeft:rs,leftSide:ns,coverbgRight:is,rightSide:as},ls=[{id:"U19wX8npUV8",title:"can't slow down",artist:"almost monday",duration:176},{id:"AwvJBlzY1CA",title:"moon man",artist:"Balu Brigada",duration:220},{id:"mbX0skEiMqs",title:"What're We Doing Here",artist:"ALEXSUCKS",duration:185},{id:"rXsQmkz1T7A",title:"Walking On A Dream",artist:"Empire Of The Sun",duration:199},{id:"h2H5hgpRm-Q",title:"All Girls Are The Same",artist:"Juice WRLD",duration:166},{id:"m-tdxanB_1I",title:"Strangers",artist:"Roosevelt",duration:221},{id:"ZYwadke1l9k",title:"On Your Own",artist:"Meltt",duration:205},{id:"DofpRUpLeYA",title:"Yo Tengo Un Ángel",artist:"Rels B",duration:170},{id:"W_dDNNEdIJg",title:`Stayin' Alive (From "Saturday Night Fever" Soundtrack)`,artist:"Bee Gees",duration:285},{id:"KFS9c852M_k",title:"Somebody's Watching Me",artist:"Rockwell",duration:299},{id:"lyuvl1EY11Q",title:"Complicated",artist:"Mac Miller",duration:233},{id:"AxQ6pUmh61Q",title:"You Know You Like It",artist:"DJ Snake",duration:248},{id:"rJ0D1GbDq1Q",title:"Let Me Love You (feat. Justin Bieber)",artist:"DJ Snake",duration:206},{id:"8iq6-5j1Q2M",title:"A Different Way (feat. Lauv)",artist:"DJ Snake",duration:199},{id:"N5SC0seO8jg",title:"Middle",artist:"DJ Snake",duration:221},{id:"6lJjotvT4FQ",title:"Mumbai Power (feat. Beam)",artist:"Skrillex",duration:159}];function ge({id:t}){return ve({queryKey:["music-track-image",t],enabled:!!t,refetchOnWindowFocus:!1,queryFn:async({signal:n})=>{if(t){const i=await fetch(`${G}/artwork?id=${t}`,{signal:n});if(!i.ok)throw new Error("Error al obtener la imagen");const d=await i.blob();return new Promise((l,u)=>{const r=new FileReader;r.onloadend=()=>l(r.result),r.onerror=u,r.readAsDataURL(d)})}}}).data}function As(){const t=Ke("music-player");return e.jsx(e.Fragment,{children:e.jsx(gt,{manifest:t,children:e.jsx(b,{pos:"absolute",left:0,top:0,right:0,bottom:0,children:e.jsx(b,{pos:"relative",w:"100%",h:"100%",children:e.jsx(os,{})})})})})}function os(){const t=Ke("music-player"),[s,n]=mt({key:"music-library",defaultValue:ls}),i=p.useCallback(function(h){const k=s.findIndex(O=>O.id===h.id);n(k===-1?[...s,h]:[...s.slice(0,k),...s.slice(k+1)])},[s,n]),d=p.useCallback(function(h){return s.some(k=>k.id===h.id)},[s]),[l,u]=p.useState(!1),[r,y]=p.useState(null);function a(m){const h=m.target.value;y(h!==""?h:null),u(!1)}const x=ve({queryKey:["search",...r?[r]:[]],enabled:r!==null,refetchOnWindowFocus:!1,queryFn:async({signal:m})=>{if(r){const h=new URLSearchParams;return h.append("q",r),await(await fetch(`${G}/search?${h}`,{signal:m})).json()}}}),[g,v]=p.useState([]),[o,j]=p.useState(null),[c,A]=p.useState(100),[T,C]=p.useState(!1),[f,$]=p.useState(null),P=p.useCallback(()=>{if(f){const m=!T;C(m),m?f.play():f.pause()}},[T,f]),w=p.useCallback(m=>{o===m?P():(f&&(f.pause(),f.currentTime=0,f.playbackRate=1),j(m))},[o,P,f]),Z=p.useCallback(async m=>{const h=new URLSearchParams;h.append("id",m.id);const O=await(await fetch(`${G}/radio?${h}`)).json();v([m,...O]),m!==o&&w(m)},[o,w]),ce=p.useCallback(m=>{if(!r){const h=s.indexOf(m),k=s.slice(0,h),O=s.slice(h+1);v([...k,m,...O])}r&&Z(m)},[Z,s,r]),U=p.useCallback(()=>{if(f&&o)if(f.currentTime<=2){const m=g.indexOf(o),h=g[m-1];h&&w(h)}else f.currentTime=0},[o,w,g,f]),B=p.useCallback(()=>{if(f&&o){const m=g.indexOf(o),h=g[m+1];h?w(h):(f.pause(),C(!1))}},[o,w,g,f]),[K,de]=p.useState(!1),{taskIsMinimized:ue,taskIsOpen:R}=jt(),pe=R(t.appId)&&!ue(t.appId),q=Ye(),fe=Ut(),V=ge({id:o==null?void 0:o.id});p.useEffect(()=>{if("mediaSession"in navigator)return o&&(navigator.mediaSession.metadata=new MediaMetadata({title:o.title,artist:o.artist,artwork:[{src:`${G}/artwork?id=${o.id}`,type:"image/jpg"}]})),navigator.mediaSession.setActionHandler("play",P),navigator.mediaSession.setActionHandler("pause",P),navigator.mediaSession.setActionHandler("previoustrack",U),navigator.mediaSession.setActionHandler("nexttrack",B),navigator.mediaSession.playbackState=T?"playing":"paused",()=>{navigator.mediaSession.setActionHandler("play",null),navigator.mediaSession.setActionHandler("pause",null),navigator.mediaSession.setActionHandler("previoustrack",null),navigator.mediaSession.setActionHandler("nexttrack",null)}},[o,B,P,U,T]);const{musicBackground:he}=xt();return e.jsxs(e.Fragment,{children:[o?e.jsx("audio",{ref:m=>$(m),style:{display:"none"},preload:"auto",src:`${G}/file?id=${o.id}`,autoPlay:!0,onPlaying:()=>{C(!0)},onPause:()=>{C(!1)},onEnded:B}):null,e.jsx(Q,{mode:"wait",children:he&&o&&pe&&T&&e.jsx(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(ds,{currentTrack:o})},"background"+o.id)}),e.jsxs(b,{pt:8*7,w:"100%",h:"100%",display:"grid",style:{gridTemplateRows:"1fr auto",willChange:"transform"},children:[e.jsx(b,{w:"100%",h:"100%",display:"grid",style:{gridTemplateColumns:"1fr",overflow:"hidden"},about:"playlist+lyrics",children:e.jsx(Q,{mode:"wait",initial:!1,children:e.jsxs(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween"},style:{display:"grid",width:"100%",height:"100%",overflow:"hidden",gridTemplateColumns:q?"1fr":"1fr 1fr"},children:[!q||!K?e.jsx(Je,{styles:{root:{pointerEvents:"auto"},viewport:{maskImage:`linear-gradient(180deg, transparent ${M(0)}, black ${M(20)}, black calc(100% - ${M(100)}), transparent 100%)`}},w:"100%",h:"100%",children:e.jsx(cs,{currentTrack:o,data:x.data,handlePlay:w,handleSetPlaylistFromLibrary:ce,handleStartRadio:Z,handleToggleFavorite:i,isError:x.isError,isLoading:x.isLoading,library:s,search:r,setSearchOpened:u,trackIsInFavorite:d})}):null,!q||K?e.jsxs(b,{pos:"relative",w:"100%",h:"100%",style:{overflow:"hidden"},children:[e.jsx(us,{track:o,audio:f,playing:T}),e.jsx(b,{pos:"absolute",right:0,bottom:0,p:"sm",children:e.jsx(Q,{})})]}):null]},`view-${K}`)})}),e.jsx(Q,{mode:"popLayout",children:q&&o?e.jsx(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsxs(b,{p:8,className:S.lyricsText,display:"grid",style:{gridTemplateColumns:"1fr auto"},children:[e.jsxs(z,{w:"100%",wrap:"nowrap",className:S.shadow,display:"grid",style:{overflow:"hidden",gridTemplateColumns:"auto 1fr"},gap:"xs",children:[e.jsx(le,{bg:"transparent",size:"lg",radius:"sm",style:{borderWidth:0,overflow:"hidden"},children:V?e.jsx(H,{src:V,alt:o.title}):null}),e.jsxs(se,{gap:0,w:"100%",style:{overflow:"hidden"},children:[e.jsx(I,{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},size:"xs",fw:600,className:S.lyricsText,children:o.title}),e.jsx(I,{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},className:S.artistText,fw:500,size:"xs",children:o.artist})]})]}),e.jsxs(z,{className:S.shadow,gap:"xs",children:[e.jsx(_,{color:"dimmed",size:"lg",radius:"xl",variant:"subtle",onClick:()=>{U()},style:{pointerEvents:"auto"},children:e.jsx($e,{})}),e.jsxs(_,{color:"dimmed",size:"lg",radius:"xl",variant:"light",onClick:()=>{P()},style:{pointerEvents:"auto"},children:[T?null:e.jsx(Ne,{}),T?e.jsx(Fe,{}):null]}),e.jsx(_,{color:"dimmed",size:"lg",radius:"xl",variant:"subtle",onClick:()=>{B()},style:{pointerEvents:"auto"},children:e.jsx(De,{})}),e.jsx(_,{color:"dimmed",size:"lg",radius:"xl",variant:"subtle",onClick:()=>{de(!K)},style:{pointerEvents:"auto"},children:e.jsx(Rt,{})})]})]})},"player-controls"):null})]}),q?e.jsx(e.Fragment,{children:e.jsx(b,{pos:"absolute",style:{willChange:"transform"},left:0,right:0,top:0,h:50,children:e.jsxs(z,{px:8,h:"100%",display:"grid",style:{gridTemplateColumns:"1fr auto"},children:[e.jsxs(z,{pl:6,wrap:"nowrap",w:"100%",align:"center",style:{overflow:"hidden"},gap:8/2,children:[e.jsx(_,{component:"div",variant:"transparent",size:"xs",radius:0,children:t.iconV2}),e.jsx(Pe,{order:6,w:"auto",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:r?`Búsqueda: ${r}`:"Biblioteca"})]}),e.jsxs(z,{pr:0,wrap:"nowrap",children:[r?e.jsx(_,{color:"dimmed",size:"lg",radius:"xl",variant:"subtle",onClick:()=>{y(null)},style:{pointerEvents:"auto"},children:e.jsx(_e,{})}):null,r?null:e.jsx(e.Fragment,{children:e.jsxs(E,{transitionProps:{transition:"pop-top-right"},closeOnClickOutside:!0,position:"bottom",opened:l,onChange:u,children:[e.jsx(E.Target,{children:e.jsx(_,{color:"dimmed",size:"lg",radius:"xl",variant:"subtle",onClick:()=>{u(m=>!m)},style:{pointerEvents:"auto"},children:e.jsx(Re,{})})}),e.jsx(E.Dropdown,{children:e.jsx(ze,{px:8,miw:250,variant:"unstyled",autoFocus:!0,onKeyDown:Le([["Enter",a]])})})]})})]})]})})}):null,q?null:e.jsxs(e.Fragment,{children:[e.jsx(b,{pos:"absolute",style:{willChange:"transform",overflow:"hidden"},left:0,right:"50%",top:0,h:50,px:10,children:e.jsxs(z,{wrap:"nowrap",w:"100%",display:"grid",style:{gridTemplateColumns:"1fr auto"},justify:"space-between",h:"100%",children:[e.jsxs(z,{w:"100%",wrap:"nowrap",h:"100%",display:"grid",style:{gridTemplateColumns:"auto 1fr"},gap:8*2,children:[e.jsx(b,{w:"fit-content",children:e.jsx(wt,{manifest:t})}),e.jsxs(z,{wrap:"nowrap",w:"100%",align:"center",style:{overflow:"hidden"},gap:8/2,children:[e.jsx(_,{component:"div",variant:"transparent",size:"xs",radius:0,children:t.iconV2}),e.jsx(Pe,{order:6,w:"auto",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:r?`Búsqueda: ${r}`:"Biblioteca"})]})]}),e.jsxs(z,{pr:0,wrap:"nowrap",children:[r?e.jsx(_,{color:"dimmed",size:"lg",radius:"xl",variant:"subtle",onClick:()=>{y(null)},style:{pointerEvents:"auto"},children:e.jsx(_e,{})}):null,r?null:e.jsx(e.Fragment,{children:e.jsxs(E,{transitionProps:{transition:"scale"},closeOnClickOutside:!0,position:"bottom",opened:l,onChange:u,children:[e.jsx(E.Target,{children:e.jsx(_,{color:"dimmed",size:"lg",radius:"xl",variant:"subtle",onClick:()=>{u(m=>!m)},style:{pointerEvents:"auto"},children:e.jsx(Re,{})})}),e.jsx(E.Dropdown,{children:e.jsx(ze,{px:8,miw:250,variant:"unstyled",autoFocus:!0,onKeyDown:Le([["Enter",a]])})})]})}),e.jsxs(E,{position:"bottom",transitionProps:{transition:"scale"},children:[e.jsx(E.Target,{children:e.jsxs(_,{color:"dimmed",size:"lg",radius:"xl",variant:"subtle",style:{pointerEvents:"auto"},children:[c/100>=.5?e.jsx($t,{}):null,c/100>0&&c/100<.5?e.jsx(Nt,{}):null,c/100===0?e.jsx(Dt,{}):null]})}),e.jsx(E.Dropdown,{children:fe!=="ios"?e.jsx(ye,{value:c,w:100,onChange:m=>{A(m),f&&(f.volume=m/100)},showLabelOnHover:!1,labelAlwaysOn:!1,label:null}):null})]})]})]})}),e.jsx(b,{pos:"absolute",style:{willChange:"transform"},left:"50%",right:0,top:0,p:8,children:e.jsx(Q,{children:o?e.jsx(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween"},children:e.jsxs(z,{wrap:"nowrap",justify:"space-between",gap:"md",children:[e.jsxs(z,{wrap:"nowrap",className:S.shadow,display:"grid",style:{overflow:"hidden",gridTemplateColumns:"auto 1fr"},gap:"xs",children:[e.jsx(le,{bg:"transparent",size:"lg",radius:"sm",style:{borderWidth:0,overflow:"hidden"},children:V?e.jsx(H,{src:V,alt:o.title}):null}),e.jsxs(se,{gap:0,w:"100%",style:{overflow:"hidden"},children:[e.jsx(I,{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},size:"xs",fw:600,className:S.lyricsText,children:o.title}),e.jsx(I,{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},className:S.artistText,fw:500,size:"xs",children:o.artist})]})]}),e.jsxs(z,{wrap:"nowrap",className:S.shadow,gap:"xs",children:[e.jsx(_,{color:"dimmed",size:"lg",radius:"xl",variant:"subtle",onClick:()=>{U()},style:{pointerEvents:"auto"},children:e.jsx($e,{})}),e.jsxs(_,{color:"dimmed",size:"lg",radius:"xl",variant:"light",onClick:()=>{P()},style:{pointerEvents:"auto"},children:[T?null:e.jsx(Ne,{}),T?e.jsx(Fe,{}):null]}),e.jsx(_,{color:"dimmed",size:"lg",radius:"xl",variant:"subtle",onClick:()=>{B()},style:{pointerEvents:"auto"},children:e.jsx(De,{})})]})]})},"track-player"):null})})]})]})}function Oe({track:t,fromLibrary:s,currentTrack:n,handlePlay:i,handleSetPlaylistFromLibrary:d,handleStartRadio:l,handleToggleFavorite:u,trackIsInFavorite:r}){const y=ge({id:t.id});return e.jsxs(vt,{className:S.track,p:0,h:"auto",w:"100%",variant:t===n?"light":"subtle",onClick:()=>{i(t),d(t)},styles:{label:{width:"100%",justifyContent:"space-between"},inner:{textAlign:"left",width:"100%"}},children:[e.jsxs(z,{display:"grid",style:{gridTemplateColumns:"auto 1fr auto"},className:S.shadow,py:4,px:4,gap:"xs",children:[e.jsx(le,{bg:"transparent",size:"lg",radius:"sm",style:{borderWidth:0,overflow:"hidden"},children:y?e.jsx(H,{src:y,alt:t.title}):null}),e.jsxs(se,{style:{overflow:"hidden"},gap:0,w:"100%",children:[e.jsx(I,{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},size:"xs",fw:600,className:S.lyricsText,children:t.title}),e.jsx(I,{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},className:S.artistText,fw:500,size:"xs",children:t.artist})]})]}),e.jsxs(z,{wrap:"nowrap",px:4,gap:8,children:[e.jsx(_,{component:"a",about:s?"favorite":r(t)?void 0:"favorite",color:r(t)?"yellow":void 0,onClick:a=>{a.preventDefault(),a.stopPropagation(),u(t)},size:"sm",radius:"xl",variant:"subtle",children:r(t)?e.jsx(Vt,{style:{width:M(16),height:M(16)}}):e.jsx(bt,{style:{width:M(16),height:M(16)}})}),e.jsxs(ie,{children:[e.jsx(ie.Target,{children:e.jsx(_,{onClick:a=>{a.preventDefault(),a.stopPropagation()},component:"a",size:"sm",radius:"xl",variant:"subtle",children:e.jsx(St,{style:{width:M(16),height:M(16)}})})}),e.jsx(ie.Dropdown,{children:e.jsx(ie.Item,{onClick:a=>{a.preventDefault(),a.stopPropagation(),l(t)},leftSection:e.jsx(Ft,{style:{width:M(16),height:M(16)}}),children:"Iniciar radio"})})]}),e.jsxs(z,{style:{pointerEvents:"none"},gap:0,children:[e.jsx(I,{p:0,lightHidden:!0,c:"white",fz:10,fw:"bold",children:Ve(t.duration)}),e.jsx(I,{p:0,darkHidden:!0,c:"black",opacity:.7,fz:10,fw:"bold",children:Ve(t.duration)})]})]})]})}function cs({currentTrack:t,handlePlay:s,handleSetPlaylistFromLibrary:n,trackIsInFavorite:i,handleToggleFavorite:d,handleStartRadio:l,search:u,library:r,setSearchOpened:y,isLoading:a,isError:x,data:g}){const v=p.useMemo(()=>{if(!u&&r.length===0)return e.jsxs(b,{children:[e.jsx(I,{ta:"center",size:"lg",p:4,children:"No tienes canciones en la biblioteca."}),e.jsx(Ue,{children:e.jsx(kt,{onClick:()=>{y(!0)},fw:500,ta:"center",size:"lg",p:4,children:"Buscar"})})]},"view-library-empty");if(!u&&r.length>0)return r.map(j=>e.jsx(Oe,{track:j,fromLibrary:!0,currentTrack:t,handlePlay:s,handleSetPlaylistFromLibrary:n,handleStartRadio:l,handleToggleFavorite:d,trackIsInFavorite:i},`library-${j.id}`));if(u&&a)return Array.from({length:10}).map((j,c)=>e.jsx(b,{p:4,children:e.jsxs(z,{display:"grid",style:{gridTemplateColumns:"auto 1fr auto"},children:[e.jsx(X,{display:"grid",children:e.jsx(le,{bg:"transparent",size:"lg",radius:"sm",style:{borderWidth:0,overflow:"hidden"}})}),e.jsx(se,{gap:0,children:e.jsx(X,{w:"fit-content",animate:!0,children:e.jsx(I,{size:"xs",fw:600,className:S.lyricsText,children:Array.from({length:Kt(c,8,25)}).fill("x").join("")})})}),e.jsx(X,{display:"grid",children:e.jsx(X,{w:"fit-content",children:e.jsx(I,{className:S.artistText,fw:500,size:"xs",children:Array.from({length:5}).fill("x").join("")})})})]})},"skeleton-music-search"+c));if(u&&x)return e.jsx(I,{ta:"center",size:"lg",p:4,children:"No se encontraron resultados."},"view-search-error");if(u&&g)return g.map(j=>e.jsx(Oe,{track:j,currentTrack:t,handlePlay:s,handleSetPlaylistFromLibrary:n,handleStartRadio:l,handleToggleFavorite:d,trackIsInFavorite:i},`search-${j.id}`))},[t,g,s,n,l,d,x,a,r,u,y,i]),[o]=yt();return e.jsx(e.Fragment,{children:e.jsx(se,{ref:o,py:20,pb:100,gap:0,p:8,children:v})})}function ds({currentTrack:t}){const s=ge({id:t.id});return e.jsx(b,{pos:"absolute",left:0,top:0,right:0,bottom:0,style:{overflow:"hidden","--center-duration":String(60/120*1e3*4*4)+"ms","--left-duration":String(60/120*1e3*4*4*2)+"ms","--right-duration":String(60/120*1e3*4*4*2)+"ms"},className:S.wrapper,children:s?e.jsxs(e.Fragment,{children:[e.jsx(H,{pos:"absolute",left:0,top:0,right:0,bottom:0,style:{objectFit:"cover"},w:"100%",h:"100%",display:"block",src:s,className:S.coverBg}),e.jsx(H,{pos:"absolute",left:0,top:0,right:0,bottom:0,style:{objectFit:"cover"},w:"100%",h:"100%",display:"block",src:s,className:S.coverbgCenter}),e.jsx(H,{pos:"absolute",left:0,top:0,right:0,bottom:0,style:{objectFit:"cover"},w:"100%",h:"100%",display:"block",src:s,className:S.coverbgLeft}),e.jsx(H,{pos:"absolute",left:0,top:0,right:0,bottom:0,style:{objectFit:"cover"},w:"100%",h:"100%",display:"block",src:s,className:S.coverbgRight})]}):null})}function us({track:t,audio:s,playing:n}){const[i,d]=p.useState(0);p.useEffect(()=>{const v=()=>{s&&d(s.currentTime)};return s&&s.addEventListener("timeupdate",v),()=>{s&&s.removeEventListener("timeupdate",v)}},[s]);const l=ve({queryKey:["lyrics",t],queryFn:async({signal:v})=>{if(t){const o=`${G}/lyrics?id=${t.id}`;return{original:await(await fetch(o,{signal:v})).json()}}},enabled:!!t,refetchOnWindowFocus:!1}),u=p.useMemo(()=>{if(l.data&&l.data.original.synced){const v=l.data.original.synced.findIndex(o=>o.seconds>i);return v===-1?l.data.original.synced.length-1:v-1}return-2},[l,i]),[r,y]=p.useState(null);p.useEffect(()=>{r&&r.scrollTo({top:0,behavior:"smooth"})},[r,t]);const a=p.useCallback(()=>{if(u!==-1){let v=document.querySelector(`[data-line="${u+1}"]`);v||(v=document.querySelector(`[data-line="${u}"]`),v||(v=document.querySelector('[data-line="0"]'))),v&&v.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}},[u]);p.useEffect(()=>{a()},[u,a]);const x=p.useMemo(()=>{var v,o;return e.jsx(e.Fragment,{children:(o=(v=l.data)==null?void 0:v.original.synced)==null?void 0:o.map((j,c)=>e.jsxs(b,{onClick:()=>{s&&(s.currentTime=j.seconds)},className:S.lyricsText,"data-line":c,p:4,pt:c===0?20:4,opacity:c===u?1:c===u+1?.5:c<u?.1:.25,style:{transition:"all 200ms ease",pointerEvents:"auto",cursor:"pointer",willChange:"auto"},children:[j.lyrics.length>0?e.jsx(e.Fragment,{children:e.jsx(I,{size:"lg",fw:600,children:j.lyrics})}):null,j.lyrics.length===0&&n?e.jsxs(b,{style:{overflow:"hidden",transition:"all 200ms ease",height:c===u?M(18):0,width:c===u?M(18):0},children:[e.jsx(Te,{lightHidden:!0,color:"white",size:"xs",type:"dots"}),e.jsx(Te,{darkHidden:!0,color:"black",size:"xs",type:"dots"})]}):null]},`line-${c}`))})},[s,u,n,l]),g=Ye();return e.jsx(e.Fragment,{children:e.jsxs(Je,{viewportRef:y,styles:{root:{pointerEvents:"auto"},viewport:{maskImage:`linear-gradient(180deg, transparent ${M(0)}, black ${M(20)}, black calc(100% - ${M(100)}), transparent 100%)`}},classNames:{viewport:S.shadowLyrics},px:g?8*3:8,pos:"relative",w:"100%",h:"100%",children:[!l.isLoading&&!l.data?e.jsx(Ue,{py:20,pb:100,children:e.jsx(I,{c:"dimmed",ta:"center",maw:"20ch",fw:600,children:"Reproduce una canción para ver la letra..."})}):null,!l.isLoading&&l.data?e.jsx(b,{py:20,pb:100,children:e.jsx(Q,{mode:"wait",children:e.jsx(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:x},"lyrics"+(t==null?void 0:t.id))})}):null]})})}export{As as default};
