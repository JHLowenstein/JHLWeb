(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[470],{9666:function(e,t,s){"use strict";s.d(t,{u:function(){return X}});var n,a,r,i,l=s(6006);function o(...e){return e.filter(Boolean).join(" ")}function c(e,t,...s){if(e in t){let n=t[e];return"function"==typeof n?n(...s):n}let n=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,c),n}var d=((n=d||{})[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n),m=((a=m||{})[a.Unmount=0]="Unmount",a[a.Hidden=1]="Hidden",a);function u({ourProps:e,theirProps:t,slot:s,defaultTag:n,features:a,visible:r=!0,name:i}){let l=h(t,e);if(r)return f(l,s,n,i);let o=null!=a?a:0;if(2&o){let{static:e=!1,...t}=l;if(e)return f(t,s,n,i)}if(1&o){let{unmount:e=!0,...t}=l;return c(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},s,n,i)})}return f(l,s,n,i)}function f(e,t={},s,n){let{as:a=s,children:r,refName:i="ref",...c}=b(e,["unmount","static"]),d=void 0!==e.ref?{[i]:e.ref}:{},m="function"==typeof r?r(t):r;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(t));let u={};if(t){let e=!1,s=[];for(let[n,a]of Object.entries(t))"boolean"==typeof a&&(e=!0),!0===a&&s.push(n);e&&(u["data-headlessui-state"]=s.join(" "))}if(a===l.Fragment&&Object.keys(x(c)).length>0){if(!(0,l.isValidElement)(m)||Array.isArray(m)&&m.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=m.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>o(null==e?void 0:e.className(...t),c.className):o(null==e?void 0:e.className,c.className);return(0,l.cloneElement)(m,Object.assign({},h(m.props,x(b(c,["ref"]))),u,d,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let s of e)null!=s&&("function"==typeof s?s(t):s.current=t)}}}(m.ref,d.ref),t?{className:t}:{}))}return(0,l.createElement)(a,Object.assign({},b(c,["ref"]),a!==l.Fragment&&d,a!==l.Fragment&&u),m)}function h(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},s={};for(let n of e)for(let e in n)e.startsWith("on")&&"function"==typeof n[e]?(null!=s[e]||(s[e]=[]),s[e].push(n[e])):t[e]=n[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(s).map(e=>[e,void 0])));for(let e in s)Object.assign(t,{[e](t,...n){for(let a of s[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;a(t,...n)}}});return t}function p(e){var t;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function x(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function b(e,t=[]){let s=Object.assign({},e);for(let e of t)e in s&&delete s[e];return s}let g=(0,l.createContext)(null);g.displayName="OpenClosedContext";var N=((r=N||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function v(){return(0,l.useContext)(g)}function y({value:e,children:t}){return l.createElement(g.Provider,{value:e},t)}var j=Object.defineProperty,A=(e,t,s)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,w=(e,t,s)=>(A(e,"symbol"!=typeof t?t+"":t,s),s);let E=new class{constructor(){w(this,"current",this.detect()),w(this,"handoffState","pending"),w(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},O=(e,t)=>{E.isServer?(0,l.useEffect)(e,t):(0,l.useLayoutEffect)(e,t)};function L(){let e=(0,l.useRef)(!1);return O(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function C(e){let t=(0,l.useRef)(e);return O(()=>{t.current=e},[e]),t}function S(){let[e,t]=(0,l.useState)(E.isHandoffComplete);return e&&!1===E.isHandoffComplete&&t(!1),(0,l.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,l.useEffect)(()=>E.handoff(),[]),e}let R=function(e){let t=C(e);return l.useCallback((...e)=>t.current(...e),[t])},k=Symbol();function T(...e){let t=(0,l.useRef)(e);(0,l.useEffect)(()=>{t.current=e},[e]);let s=R(e=>{for(let s of t.current)null!=s&&("function"==typeof s?s(e):s.current=e)});return e.every(e=>null==e||(null==e?void 0:e[k]))?void 0:s}function F(){let e=[],t={addEventListener:(e,s,n,a)=>(e.addEventListener(s,n,a),t.add(()=>e.removeEventListener(s,n,a))),requestAnimationFrame(...e){let s=requestAnimationFrame(...e);return t.add(()=>cancelAnimationFrame(s))},nextFrame:(...e)=>t.requestAnimationFrame(()=>t.requestAnimationFrame(...e)),setTimeout(...e){let s=setTimeout(...e);return t.add(()=>clearTimeout(s))},microTask(...e){var s;let n={current:!0};return s=()=>{n.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(s):Promise.resolve().then(s).catch(e=>setTimeout(()=>{throw e})),t.add(()=>{n.current=!1})},style(e,t,s){let n=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:n})})},group(e){let t=F();return e(t),this.add(()=>t.dispose())},add:t=>(e.push(t),()=>{let s=e.indexOf(t);if(s>=0)for(let t of e.splice(s,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function P(e,...t){e&&t.length>0&&e.classList.add(...t)}function I(e,...t){e&&t.length>0&&e.classList.remove(...t)}function W(){let[e]=(0,l.useState)(F);return(0,l.useEffect)(()=>()=>e.dispose(),[e]),e}function U(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let M=(0,l.createContext)(null);M.displayName="TransitionContext";var B=((i=B||{}).Visible="visible",i.Hidden="hidden",i);let D=(0,l.createContext)(null);function H(e){return"children"in e?H(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function V(e,t){let s=C(e),n=(0,l.useRef)([]),a=L(),r=W(),i=R((e,t=m.Hidden)=>{let i=n.current.findIndex(({el:t})=>t===e);-1!==i&&(c(t,{[m.Unmount](){n.current.splice(i,1)},[m.Hidden](){n.current[i].state="hidden"}}),r.microTask(()=>{var e;!H(n)&&a.current&&(null==(e=s.current)||e.call(s))}))}),o=R(e=>{let t=n.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):n.current.push({el:e,state:"visible"}),()=>i(e,m.Unmount)}),d=(0,l.useRef)([]),u=(0,l.useRef)(Promise.resolve()),f=(0,l.useRef)({enter:[],leave:[],idle:[]}),h=R((e,s,n)=>{d.current.splice(0),t&&(t.chains.current[s]=t.chains.current[s].filter(([t])=>t!==e)),null==t||t.chains.current[s].push([e,new Promise(e=>{d.current.push(e)})]),null==t||t.chains.current[s].push([e,new Promise(e=>{Promise.all(f.current[s].map(([e,t])=>t)).then(()=>e())})]),"enter"===s?u.current=u.current.then(()=>null==t?void 0:t.wait.current).then(()=>n(s)):n(s)}),p=R((e,t,s)=>{Promise.all(f.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=d.current.shift())||e()}).then(()=>s(t))});return(0,l.useMemo)(()=>({children:n,register:o,unregister:i,onStart:h,onStop:p,wait:u,chains:f}),[o,i,n,h,p,f,u])}function Z(){}D.displayName="NestingContext";let q=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function K(e){var t;let s={};for(let n of q)s[n]=null!=(t=e[n])?t:Z;return s}let Y=d.RenderStrategy,_=p(function(e,t){let{show:s,appear:n=!1,unmount:a,...r}=e,i=(0,l.useRef)(null),o=T(i,t);S();let c=v();if(void 0===s&&null!==c&&(s=(c&N.Open)===N.Open),![!0,!1].includes(s))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[d,m]=(0,l.useState)(s?"visible":"hidden"),f=V(()=>{m("hidden")}),[h,p]=(0,l.useState)(!0),x=(0,l.useRef)([s]);O(()=>{!1!==h&&x.current[x.current.length-1]!==s&&(x.current.push(s),p(!1))},[x,s]);let b=(0,l.useMemo)(()=>({show:s,appear:n,initial:h}),[s,n,h]);(0,l.useEffect)(()=>{if(s)m("visible");else if(H(f)){let e=i.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&m("hidden")}else m("hidden")},[s,f]);let g={unmount:a};return l.createElement(D.Provider,{value:f},l.createElement(M.Provider,{value:b},u({ourProps:{...g,as:l.Fragment,children:l.createElement(J,{ref:o,...g,...r})},theirProps:{},defaultTag:l.Fragment,features:Y,visible:"visible"===d,name:"Transition"})))}),J=p(function(e,t){var s;let n,{beforeEnter:a,afterEnter:r,beforeLeave:i,afterLeave:d,enter:f,enterFrom:h,enterTo:p,entered:x,leave:b,leaveFrom:g,leaveTo:v,...j}=e,A=(0,l.useRef)(null),w=T(A,t),E=j.unmount?m.Unmount:m.Hidden,{show:k,appear:B,initial:Z}=function(){let e=(0,l.useContext)(M);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[q,_]=(0,l.useState)(k?"visible":"hidden"),J=function(){let e=(0,l.useContext)(D);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:Q,unregister:X}=J,z=(0,l.useRef)(null);(0,l.useEffect)(()=>Q(A),[Q,A]),(0,l.useEffect)(()=>{if(E===m.Hidden&&A.current){if(k&&"visible"!==q){_("visible");return}return c(q,{hidden:()=>X(A),visible:()=>Q(A)})}},[q,A,Q,X,k,E]);let G=C({enter:U(f),enterFrom:U(h),enterTo:U(p),entered:U(x),leave:U(b),leaveFrom:U(g),leaveTo:U(v)}),$=(s={beforeEnter:a,afterEnter:r,beforeLeave:i,afterLeave:d},n=(0,l.useRef)(K(s)),(0,l.useEffect)(()=>{n.current=K(s)},[s]),n),ee=S();(0,l.useEffect)(()=>{if(ee&&"visible"===q&&null===A.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[A,q,ee]);let et=Z&&!B,es=!ee||et||z.current===k?"idle":k?"enter":"leave",en=function(e=0){let[t,s]=(0,l.useState)(e),n=L(),a=(0,l.useCallback)(e=>{n.current&&s(t=>t|e)},[t,n]),r=(0,l.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:a,hasFlag:r,removeFlag:(0,l.useCallback)(e=>{n.current&&s(t=>t&~e)},[s,n]),toggleFlag:(0,l.useCallback)(e=>{n.current&&s(t=>t^e)},[s])}}(0),ea=R(e=>c(e,{enter:()=>{en.addFlag(N.Opening),$.current.beforeEnter()},leave:()=>{en.addFlag(N.Closing),$.current.beforeLeave()},idle:()=>{}})),er=R(e=>c(e,{enter:()=>{en.removeFlag(N.Opening),$.current.afterEnter()},leave:()=>{en.removeFlag(N.Closing),$.current.afterLeave()},idle:()=>{}})),ei=V(()=>{_("hidden"),X(A)},J);(function({container:e,direction:t,classes:s,onStart:n,onStop:a}){let r=L(),i=W(),l=C(t);O(()=>{let t=F();i.add(t.dispose);let o=e.current;if(o&&"idle"!==l.current&&r.current){var d,m,u,f;let e,r,i,h,p,x,b;return t.dispose(),n.current(l.current),t.add((d=o,m=s.current,u="enter"===l.current,f=()=>{t.dispose(),a.current(l.current)},r=u?"enter":"leave",i=F(),h=void 0!==f?(e={called:!1},(...t)=>{if(!e.called)return e.called=!0,f(...t)}):()=>{},"enter"===r&&(d.removeAttribute("hidden"),d.style.display=""),p=c(r,{enter:()=>m.enter,leave:()=>m.leave}),x=c(r,{enter:()=>m.enterTo,leave:()=>m.leaveTo}),b=c(r,{enter:()=>m.enterFrom,leave:()=>m.leaveFrom}),I(d,...m.enter,...m.enterTo,...m.enterFrom,...m.leave,...m.leaveFrom,...m.leaveTo,...m.entered),P(d,...p,...b),i.nextFrame(()=>{I(d,...b),P(d,...x),function(e,t){let s=F();if(!e)return s.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[r,i]=[n,a].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),l=r+i;if(0!==l){s.group(s=>{s.setTimeout(()=>{t(),s.dispose()},l),s.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&s.dispose()})});let n=s.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),n())})}else t();s.add(()=>t()),s.dispose}(d,()=>(I(d,...p),P(d,...m.entered),h()))}),i.dispose)),t.dispose}},[t])})({container:A,classes:G,direction:es,onStart:C(e=>{ei.onStart(A,e,ea)}),onStop:C(e=>{ei.onStop(A,e,er),"leave"!==e||H(ei)||(_("hidden"),X(A))})}),(0,l.useEffect)(()=>{et&&(E===m.Hidden?z.current=null:z.current=k)},[k,et,q]);let el=j;return B&&k&&(el={...el,className:o(j.className,...G.current.enter,...G.current.enterFrom)}),l.createElement(D.Provider,{value:ei},l.createElement(y,{value:c(q,{visible:N.Open,hidden:N.Closed})|en.flags},u({ourProps:{ref:w},theirProps:el,defaultTag:"div",features:Y,visible:"visible"===q,name:"Transition.Child"})))}),Q=p(function(e,t){let s=null!==(0,l.useContext)(M),n=null!==v();return l.createElement(l.Fragment,null,!s&&n?l.createElement(_,{ref:t,...e}):l.createElement(J,{ref:t,...e}))}),X=Object.assign(_,{Child:Q,Root:_})},5115:function(e,t,s){Promise.resolve().then(s.t.bind(s,2011,23)),Promise.resolve().then(s.bind(s,8475)),Promise.resolve().then(s.bind(s,6497)),Promise.resolve().then(s.bind(s,419)),Promise.resolve().then(s.bind(s,9033)),Promise.resolve().then(s.bind(s,8894))},6497:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var n=s(9268),a=s(6006),r=s(6394),i=s.n(r),l=s(9666),o=s(8532);function c(){let[e,t]=(0,a.useState)(1),s=(0,a.useRef)(null),r=()=>{s.current&&s.current.parentElement&&(s.current.parentElement.style.height="".concat(s.current.clientHeight,"px"))};return(0,a.useEffect)(()=>{r()},[]),(0,n.jsx)("section",{children:(0,n.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:(0,n.jsxs)("div",{className:" my-40 md:my-20 md:pt-40  ",children:[(0,n.jsx)("div",{className:"max-w-3xl mx-auto text-center pb-12","data-aos-id-tabs":!0,children:(0,n.jsxs)("h2",{className:"h2 mb-4","data-aos":"fade-up","data-aos-anchor":"[data-aos-id-tabs]",children:[(0,n.jsx)("span",{className:"text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 ",children:"BRIGHT BOLD UNIQUE"})," ",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"",children:"HAIR PRODUCTS"})]})}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex flex-wrap justify-center -m-2","data-aos":"fade-up","data-aos-delay":"400","data-aos-anchor":"[data-aos-id-tabs]",children:[(0,n.jsx)("button",{className:"flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ".concat(1!==e&&"opacity-50"),onClick:()=>t(1),children:(0,n.jsx)("span",{className:"text-pink-300 group-hover:text-pink-400 transition-colors duration-150 ease-in-out",children:"Lowenol Surfactants"})}),(0,n.jsx)("button",{className:"flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ".concat(2!==e&&"opacity-50"),onClick:()=>t(2),children:(0,n.jsx)("span",{className:"text-emerald-300 group-hover:text-emerald-400 transition-colors duration-150 ease-in-out",children:"Bleaching Products"})}),(0,n.jsx)("button",{className:"flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ".concat(3!==e&&"opacity-50"),onClick:()=>t(3),children:(0,n.jsx)("span",{className:"text-violet-400 group-hover:text-violet-200 transition-colors duration-150 ease-in-out",children:"Stabilizing / Chelating Agents"})}),(0,n.jsx)("button",{className:"flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ".concat(4!==e&&"opacity-50"),onClick:()=>t(4),children:(0,n.jsx)("span",{className:"text-sky-300 group-hover:text-sky-400 transition-colors duration-150 ease-in-out",children:"Protein Derivatives / Conditioner"})}),(0,n.jsx)("button",{className:"flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ".concat(5!==e&&"opacity-50"),onClick:()=>t(5),children:(0,n.jsx)("span",{className:"text-amber-300 group-hover:text-amber-400 transition-colors duration-150 ease-in-out",children:"Colors"})}),(0,n.jsx)("button",{className:"flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ".concat(6!==e&&"opacity-50"),onClick:()=>t(6),children:(0,n.jsx)("span",{className:"text-pink-300 group-hover:text-pink-400 transition-colors duration-150 ease-in-out",children:"Shining Colors"})}),(0,n.jsx)("button",{className:"flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ".concat(7!==e&&"opacity-50"),onClick:()=>t(7),children:(0,n.jsx)("span",{className:"text-emerald-300 group-hover:text-emerald-700 transition-colors duration-150 ease-in-out",children:"Viscosity Builders"})})]}),(0,n.jsx)("div",{className:"transition-all",children:(0,n.jsxs)("div",{className:"relative flex flex-col mt-16","data-aos":"fade-up",ref:s,children:[(0,n.jsx)(l.u,{show:1===e,className:"w-full",enter:"transition ease-in-out duration-500 transform order-first",enterFrom:"opacity-0 scale-98",enterTo:"opacity-100 scale-100",leave:"transition ease-out duration-300 transform absolute",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-98",beforeEnter:()=>r(),children:(0,n.jsxs)("article",{className:"relative max-w-md mx-auto md:max-w-none",children:[(0,n.jsx)("figure",{className:"md:absolute md:inset-y-0 md:right-0 md:w-1/2",children:(0,n.jsx)(i(),{className:"w-full  object-cover",src:o.Z,width:516,height:387,alt:"color chemistry",style:{pointerEvents:"none"}})}),(0,n.jsxs)("div",{className:"relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl",children:[(0,n.jsx)("h3",{className:"h3 mb-5",children:"Lowenol Surfactants"}),(0,n.jsxs)("p",{className:"text-snow-300  my-3",children:[(0,n.jsx)("span",{className:"font-bold text-pink-400",children:"LOWENOL C-9685:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Nonionic foam stabilizing/dispersing agent/viscosity controlling agent for shampoos and hair colors."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-pink-400",children:"LOWENOL S-216X:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Mildly cationic dye leveling and viscosity controlling agent for oxidation hair color systems (soya based)."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-pink-400",children:"LOWENOL 1985A, LOWENOL 1985B, LOWENOL T-163, LOWENOL T-163A:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Weakly cationic surfactant for semi-permanent hair color systems."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-pink-400",children:"LOWENOL 6559:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Nonionic emulsifying agent used to prepare high, medium, and low-viscosity cream developers and as a base for various hair-care creams."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-pink-400",children:"LOWENOL COPOLYMER 725:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Cationic polyquaternium surfactant used in semi-permanent liquid hair color system."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-pink-400",children:"LOWENOL COPOLYMER 1097:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Cationic polyquarternium surfactant used in semi-permanent cream hair color system."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-pink-400",children:"LOWENOL EMULSION 80:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Emulsifying agent/opacifying agent for cream oxidation hair color system."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-pink-400",children:"LOWENOL T-163:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Weak cationic surfactant for semi-permanent hair color system."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-pink-400",children:"LOWENOL SOLVENT 4996:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Nonionic solvent system specially designed for semi-permanent hair color system."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-pink-400",children:"LOWENOL EMULSION LAO:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Emulsifying agent that masks Ammonia malodor with consistency ideal for professional market."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-pink-400",children:"LOWENOL EMULSION LAO-NT:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Emulsifying agent that masks Ammonia malodor with consistency ideal for retail market."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-pink-400",children:"LOWENOL EMULSION PEARLESCENT:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Emulsifying agent that gives finished cream hair color and cream developer pearlescent appearance."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-pink-400"})," ",(0,n.jsx)("span",{className:"font-semibold "})]})]})]})}),(0,n.jsx)(l.u,{show:2===e,className:"w-full",enter:"transition ease-in-out duration-500 transform order-first",enterFrom:"opacity-0 scale-98",enterTo:"opacity-100 scale-100",leave:"transition ease-out duration-300 transform absolute",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-98",beforeEnter:()=>r(),children:(0,n.jsxs)("article",{className:"relative max-w-md mx-auto md:max-w-none",children:[(0,n.jsx)("figure",{className:"md:absolute md:inset-y-0 md:left-0 md:w-1/2",children:(0,n.jsx)(i(),{className:"w-full h-full object-cover ",src:o.Z,width:516,height:387,alt:"color chemistry",style:{pointerEvents:"none"}})}),(0,n.jsxs)("div",{className:"relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto",children:[(0,n.jsx)("h3",{className:"h3 mb-5",children:"Bleaching Products"}),(0,n.jsxs)("p",{className:"text-snow-400  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-emerald-400",children:"BLEACHING CREAM:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Persulfates based anhydrous high lift bleaching system."})]}),(0,n.jsxs)("p",{className:"text-snow-400  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-emerald-400",children:"BLEACHING COLORS:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"One-step bleaching and coloring."})]})]})]})}),(0,n.jsx)(l.u,{show:3===e,className:"w-full",enter:"transition ease-in-out duration-500 transform order-first",enterFrom:"opacity-0 scale-98",enterTo:"opacity-100 scale-100",leave:"transition ease-out duration-300 transform absolute",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-98",beforeEnter:()=>r(),children:(0,n.jsxs)("article",{className:"relative max-w-md mx-auto md:max-w-none",children:[(0,n.jsx)("figure",{className:"md:absolute md:inset-y-0 md:right-0 md:w-1/2",children:(0,n.jsx)(i(),{className:"w-full h-full object-cover",src:o.Z,width:516,height:387,alt:"color chemistry",style:{pointerEvents:"none"}})}),(0,n.jsxs)("div",{className:"relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl",children:[(0,n.jsx)("h3",{className:"h3 mb-5",children:"Stabilizing/ Cheating Agents"}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-violet-400",children:"KELENES:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Amino acid based chelating agents for use in cosmetic products (shampoos, bleaches, coloring, lotions, creams)."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-violet-400",children:"LOWENOL STABILIZER L-536:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Color additive used in hair color system to prevent undesirable surface oxidation, used mainly in light shades."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-violet-400",children:"LOWENOL STABILIZER D-552:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Color additive used in hair color system to prevent undesirable surface oxidation, used mainly in dark shades."})]})]})]})}),(0,n.jsx)(l.u,{show:4===e,className:"w-full",enter:"transition ease-in-out duration-500 transform order-first",enterFrom:"opacity-0 scale-98",enterTo:"opacity-100 scale-100",leave:"transition ease-out duration-300 transform absolute",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-98",beforeEnter:()=>r(),children:(0,n.jsxs)("article",{className:"relative max-w-md mx-auto md:max-w-none",children:[(0,n.jsx)("figure",{className:"md:absolute md:inset-y-0 md:left-0 md:w-1/2",children:(0,n.jsx)(i(),{className:"w-full h-full object-cover",src:o.Z,width:516,height:387,alt:"color chemistry",style:{pointerEvents:"none"}})}),(0,n.jsxs)("div",{className:"relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto",children:[(0,n.jsx)("h3",{className:"h3 mb-5",children:"Protein Derivatives/ Conditioners"}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-sky-400",children:"LOWENOL HWP:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Hydrolyzed protein (liquid) for shampoo and hair color systems."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-sky-400",children:"LOWENOL CONDITIONER PWW:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Conditioning agent for hair color systems."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-sky-400",children:"LOWENOL COPOLYMER 725:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Cationic polyquaternium conditioning agent, and viscosity builder for semi-permanent liquid hair color system."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-sky-400",children:"LOWENOL COPOLYMER 1097:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Cationic polyquaternium conditioning agent, and viscosity builder for semi-permanent cream hair color system."})]})]})]})}),(0,n.jsx)(l.u,{show:5===e,className:"w-full",enter:"transition ease-in-out duration-500 transform order-first",enterFrom:"opacity-0 scale-98",enterTo:"opacity-100 scale-100",leave:"transition ease-out duration-300 transform absolute",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-98",beforeEnter:()=>r(),children:(0,n.jsxs)("article",{className:"relative max-w-md mx-auto md:max-w-none",children:[(0,n.jsx)("figure",{className:"md:absolute md:inset-y-0 md:right-0 md:w-1/2",children:(0,n.jsx)(i(),{className:"w-full h-full object-cover",src:o.Z,width:516,height:387,alt:"color chemistry",style:{pointerEvents:"none"}})}),(0,n.jsxs)("div",{className:"relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl",children:[(0,n.jsx)("h3",{className:"h3 mb-5",children:"Colors"}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-amber-400",children:"LOWALANS:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Anionic dyes for semi-permanent and temporary color systems."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-amber-400",children:"LOWACRYLS:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Cationic dyes for semi-permanent and temporary color systems."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-amber-400",children:"LOWADENES:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Disperse dyes for semi-permanent and temporary color systems."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-amber-400",children:"LOWASOLS:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Dyes specially designed for semi-permanent and temporary colors."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-amber-400",children:"FD&C, EXT. D&C, D&C:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"U.S. certified colors for food, drug and cosmetic applications."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-amber-400",children:"HC COLORS:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Alkyl/hydroxyalkyl substituted aromatics for semi-permanent hair color systems."})]}),(0,n.jsx)("h6",{className:"h6 font-bold mt-3",children:"Oxidation Hair Colors"}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-amber-400",children:"RODOLS:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Intermediates for use in oxidation color systems."})]})]})]})}),(0,n.jsx)(l.u,{show:6===e,className:"w-full",enter:"transition ease-in-out duration-500 transform order-first",enterFrom:"opacity-0 scale-98",enterTo:"opacity-100 scale-100",leave:"transition ease-out duration-300 transform absolute",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-98",beforeEnter:()=>r(),children:(0,n.jsxs)("article",{className:"relative max-w-md mx-auto md:max-w-none",children:[(0,n.jsx)("figure",{className:"md:absolute md:inset-y-0 md:left-0 md:w-1/2",children:(0,n.jsx)(i(),{className:"w-full h-full object-cover",src:o.Z,width:516,height:387,alt:"color chemistry",style:{pointerEvents:"none"}})}),(0,n.jsxs)("div",{className:"relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto",children:[(0,n.jsx)("h3",{className:"h3 mb-5",children:"Shining Colors"}),(0,n.jsxs)("p",{className:"text-snow-400  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-pink-400",children:"BRIGHT SEMI-PERMANENT CREAM HAIR COLORS"})," ",(0,n.jsx)("span",{className:"font-semibold "})]})]})]})}),(0,n.jsx)(l.u,{show:7===e,className:"w-full",enter:"transition ease-in-out duration-500 transform order-first",enterFrom:"opacity-0 scale-98",enterTo:"opacity-100 scale-100",leave:"transition ease-out duration-300 transform absolute",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-98",beforeEnter:()=>r(),children:(0,n.jsxs)("article",{className:"relative max-w-md mx-auto md:max-w-none",children:[(0,n.jsx)("figure",{className:"md:absolute md:inset-y-0 md:right-0 md:w-1/2",children:(0,n.jsx)(i(),{className:"w-full h-full object-cover",src:o.Z,width:516,height:387,alt:"color chemistry",style:{pointerEvents:"none"}})}),(0,n.jsxs)("div",{className:"relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl",children:[(0,n.jsx)("h3",{className:"h3 mb-5",children:"Viscosity Builders"}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-emerald-400",children:"CELLOW 940:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Cellulose based polymer for semi-permanent hair colors and shampoos."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-emerald-400",children:"LOWENOL COPOLYMER 725:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Cationic polyquaternium surfactant/viscosity-increasing agent for semi-permanent liquid hair color system."})]}),(0,n.jsxs)("p",{className:"text-snow-300  mb-3",children:[(0,n.jsx)("span",{className:"font-bold text-emerald-400",children:"LOWENOL COPOLYMER 1097:"})," ",(0,n.jsx)("span",{className:"font-semibold ",children:"Cationic polyquaternium surfactant/viscosity-increasing agent for semi-permanent liquid cream color system."})]})]})]})})]})})]})]})})})}},8532:function(e,t){"use strict";t.Z={src:"/_next/static/media/chemistry.f8ccd963.png",height:1080,width:1080,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAv0lEQVR42gUA22rCMPSc09R2YR1jsAtl6zY2B/v/jxgML1CxL75oxYqkotGY1tb0COYbw8wIiAhKKQKXvCW+QELwCMghO4TwRi6Xq+Zy8YSgmUmLU95mVb04MiB5XpZm1lYkemqPcy5RruzC/f9E8VatB8OUJMYsz6cAuhZ9UVfaPMfJx9c7uaI241yTKk2rJ+Fo+ufbJggDanR9W91pbI8l23K3LjLB2AsjIZ8eWZgIXPd7+L7vv3725csDde4K56lkfvutCPoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},8894:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/hm5.3f6ccba7.png",height:1080,width:1080,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0UlEQVR42mOY5L2m221JjeOsfIaqZu0pk/zWTvJePdlvNUOWdWe6XH5L5ZS4M8eLG5ZMsFg+wW/1JJ/VDE1W6Rsc7KfnHI08cLm6ZFG/5bKJvquBmhj6nKfMs04yVZnHwBBfJFM11X/jRO9Vk33WMEwIXNviNiPMriXLs39++LZpAesn+66Z4ruGYVr4+uSgXcza0xq91yyP3TctYMMU37VAxFDnsdQh5Eiu59pJXiun+W+Y7LMWaM4koFH+3rssrFZ2uS6Z5rNmgteqid6rIQgATJBbYcZ7+L0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},8475:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/hpc.a250259b.png",height:924,width:1640,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AMft/cPu/sPq+r7r+sXh9NHK3rXj87rh8QDH9P++5vjM6fa/7Pet5fS9us7BzuCz7f0A6dLo3bbS2czg3tTiec3Zm7K/6Yah4L7XAP+YxPiVv+2lxM69xOakvvNhgP9ShP9xoQD9mMD8msH5ncDjhaP8d6L3V4P+gKf9fKQ/9F6jkh9kMQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},419:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/hpm4.ce775248.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAu0lEQVR42g3IwU7CQBAA0JnudI26iBaDB+PBr/Bv/Qt/wLuJdyUEGkKhpJDSdmF3ZwaSd3r47SsgtaWj2iVg5QgoiSNFVVHIAar1MkCaTl+vcUVJe+HY9g/8blT5MWjyaS+SNQ30u9+/1Y/fj5+eJ5+6qO1QBCF7Q93w8fayrf7LncnLwm4O/vaU8KudByN2NsqO56ZuIwQ8Jucm5CMLqoVI3X1xR0PbgcuIDEmmiICIxgCYfFSMOTIzXwDn+28gP9gADAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},9033:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/hpm5.48161ab4.png",height:924,width:1640,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AKrt2K/w3Kfx1KPXtv7b5+LvoNHxcs7rawCr7dmi4dF+1ril3NDu1dPn3Zvf0pnF6lcAp+fWpezZjuLEcdHXr9HH/7bD2cCIv+lQAKLl0qLs2ZLRrMSzttPcldK5h77PW7/mWgCa487Q1sz6xc3vycLN5Wm65Ue74Uu64FaR6Vo+spqd5QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},3177:function(e,t,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=s(6006),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,r={},c=null,d=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!o.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:d,props:r,_owner:l.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},9268:function(e,t,s){"use strict";e.exports=s(3177)},6394:function(e,t,s){e.exports=s(2011)}},function(e){e.O(0,[11,667,139,744],function(){return e(e.s=5115)}),_N_E=e.O()}]);