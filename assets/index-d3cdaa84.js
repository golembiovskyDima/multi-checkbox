(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function qr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Xr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?ps(r):Xr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(V(e))return e}}const us=/;(?![^(]*\))/g,ds=/:([^]+)/,ms=/\/\*.*?\*\//gs;function ps(e){const t={};return e.replace(ms,"").split(us).forEach(n=>{if(n){const r=n.split(ds);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Bn(e){let t="";if(ee(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Bn(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const hs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gs=qr(hs);function Fi(e){return!!e||e===""}const Vr=e=>ee(e)?e:e==null?"":R(e)||V(e)&&(e.toString===Di||!L(e.toString))?JSON.stringify(e,Ri,2):String(e),Ri=(e,t)=>t&&t.__v_isRef?Ri(e,t.value):kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Li(t)?{[`Set(${t.size})`]:[...t.values()]}:V(t)&&!R(t)&&!$i(t)?String(t):t,K={},wt=[],Pe=()=>{},vs=()=>!1,bs=/^on[^a-z]/,Yn=e=>bs.test(e),Gr=e=>e.startsWith("onUpdate:"),fe=Object.assign,Jr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ys=Object.prototype.hasOwnProperty,$=(e,t)=>ys.call(e,t),R=Array.isArray,kt=e=>Wn(e)==="[object Map]",Li=e=>Wn(e)==="[object Set]",L=e=>typeof e=="function",ee=e=>typeof e=="string",Zr=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",ji=e=>V(e)&&L(e.then)&&L(e.catch),Di=Object.prototype.toString,Wn=e=>Di.call(e),xs=e=>Wn(e).slice(8,-1),$i=e=>Wn(e)==="[object Object]",Qr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Cn=qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},_s=/-(\w)/g,Le=Kn(e=>e.replace(_s,(t,n)=>n?n.toUpperCase():"")),ws=/\B([A-Z])/g,Tt=Kn(e=>e.replace(ws,"-$1").toLowerCase()),qn=Kn(e=>e.charAt(0).toUpperCase()+e.slice(1)),cr=Kn(e=>e?`on${qn(e)}`:""),qt=(e,t)=>!Object.is(e,t),ur=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ks=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Fa;const As=()=>Fa||(Fa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let we;class Os{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Es(e,t=we){t&&t.active&&t.effects.push(e)}function Ps(){return we}const ea=e=>{const t=new Set(e);return t.w=0,t.n=0,t},zi=e=>(e.w&Ze)>0,Ui=e=>(e.n&Ze)>0,Cs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},Is=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];zi(a)&&!Ui(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},_r=new WeakMap;let $t=0,Ze=1;const wr=30;let ke;const dt=Symbol(""),kr=Symbol("");class ta{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Es(this,r)}run(){if(!this.active)return this.fn();let t=ke,n=Ge;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ke,ke=this,Ge=!0,Ze=1<<++$t,$t<=wr?Cs(this):Ra(this),this.fn()}finally{$t<=wr&&Is(this),Ze=1<<--$t,ke=this.parent,Ge=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ke===this?this.deferStop=!0:this.active&&(Ra(this),this.onStop&&this.onStop(),this.active=!1)}}function Ra(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ge=!0;const Hi=[];function Nt(){Hi.push(Ge),Ge=!1}function Mt(){const e=Hi.pop();Ge=e===void 0?!0:e}function pe(e,t,n){if(Ge&&ke){let r=_r.get(e);r||_r.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ea()),Bi(a)}}function Bi(e,t){let n=!1;$t<=wr?Ui(e)||(e.n|=Ze,n=!zi(e)):n=!e.has(ke),n&&(e.add(ke),ke.deps.push(e))}function Ue(e,t,n,r,a,i){const o=_r.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((u,c)=>{(c==="length"||c>=l)&&s.push(u)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Qr(n)&&s.push(o.get("length")):(s.push(o.get(dt)),kt(e)&&s.push(o.get(kr)));break;case"delete":R(e)||(s.push(o.get(dt)),kt(e)&&s.push(o.get(kr)));break;case"set":kt(e)&&s.push(o.get(dt));break}if(s.length===1)s[0]&&Ar(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);Ar(ea(l))}}function Ar(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&La(r);for(const r of n)r.computed||La(r)}function La(e,t){(e!==ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ss=qr("__proto__,__v_isRef,__isVue"),Yi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Zr)),Ts=na(),Ns=na(!1,!0),Ms=na(!0),ja=Fs();function Fs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=z(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(z)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Nt();const r=z(this)[t].apply(this,n);return Mt(),r}}),e}function Rs(e){const t=z(this);return pe(t,"has",e),t.hasOwnProperty(e)}function na(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Js:Vi:t?Xi:qi).get(r))return r;const o=R(r);if(!e){if(o&&$(ja,a))return Reflect.get(ja,a,i);if(a==="hasOwnProperty")return Rs}const s=Reflect.get(r,a,i);return(Zr(a)?Yi.has(a):Ss(a))||(e||pe(r,"get",a),t)?s:oe(s)?o&&Qr(a)?s:s.value:V(s)?e?Gi(s):Vn(s):s}}const Ls=Wi(),js=Wi(!0);function Wi(e=!1){return function(n,r,a,i){let o=n[r];if(Pt(o)&&oe(o)&&!oe(a))return!1;if(!e&&(!Rn(a)&&!Pt(a)&&(o=z(o),a=z(a)),!R(n)&&oe(o)&&!oe(a)))return o.value=a,!0;const s=R(n)&&Qr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===z(i)&&(s?qt(a,o)&&Ue(n,"set",r,a):Ue(n,"add",r,a)),l}}function Ds(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ue(e,"delete",t,void 0),r}function $s(e,t){const n=Reflect.has(e,t);return(!Zr(t)||!Yi.has(t))&&pe(e,"has",t),n}function zs(e){return pe(e,"iterate",R(e)?"length":dt),Reflect.ownKeys(e)}const Ki={get:Ts,set:Ls,deleteProperty:Ds,has:$s,ownKeys:zs},Us={get:Ms,set(e,t){return!0},deleteProperty(e,t){return!0}},Hs=fe({},Ki,{get:Ns,set:js}),ra=e=>e,Xn=e=>Reflect.getPrototypeOf(e);function mn(e,t,n=!1,r=!1){e=e.__v_raw;const a=z(e),i=z(t);n||(t!==i&&pe(a,"get",t),pe(a,"get",i));const{has:o}=Xn(a),s=r?ra:n?oa:Xt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function pn(e,t=!1){const n=this.__v_raw,r=z(n),a=z(e);return t||(e!==a&&pe(r,"has",e),pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function hn(e,t=!1){return e=e.__v_raw,!t&&pe(z(e),"iterate",dt),Reflect.get(e,"size",e)}function Da(e){e=z(e);const t=z(this);return Xn(t).has.call(t,e)||(t.add(e),Ue(t,"add",e,e)),this}function $a(e,t){t=z(t);const n=z(this),{has:r,get:a}=Xn(n);let i=r.call(n,e);i||(e=z(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?qt(t,o)&&Ue(n,"set",e,t):Ue(n,"add",e,t),this}function za(e){const t=z(this),{has:n,get:r}=Xn(t);let a=n.call(t,e);a||(e=z(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ue(t,"delete",e,void 0),i}function Ua(){const e=z(this),t=e.size!==0,n=e.clear();return t&&Ue(e,"clear",void 0,void 0),n}function gn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=z(o),l=t?ra:e?oa:Xt;return!e&&pe(s,"iterate",dt),o.forEach((u,c)=>r.call(a,l(u),l(c),i))}}function vn(e,t,n){return function(...r){const a=this.__v_raw,i=z(a),o=kt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),c=n?ra:t?oa:Xt;return!t&&pe(i,"iterate",l?kr:dt),{next(){const{value:m,done:h}=u.next();return h?{value:m,done:h}:{value:s?[c(m[0]),c(m[1])]:c(m),done:h}},[Symbol.iterator](){return this}}}}function qe(e){return function(...t){return e==="delete"?!1:this}}function Bs(){const e={get(i){return mn(this,i)},get size(){return hn(this)},has:pn,add:Da,set:$a,delete:za,clear:Ua,forEach:gn(!1,!1)},t={get(i){return mn(this,i,!1,!0)},get size(){return hn(this)},has:pn,add:Da,set:$a,delete:za,clear:Ua,forEach:gn(!1,!0)},n={get(i){return mn(this,i,!0)},get size(){return hn(this,!0)},has(i){return pn.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:gn(!0,!1)},r={get(i){return mn(this,i,!0,!0)},get size(){return hn(this,!0)},has(i){return pn.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=vn(i,!1,!1),n[i]=vn(i,!0,!1),t[i]=vn(i,!1,!0),r[i]=vn(i,!0,!0)}),[e,n,t,r]}const[Ys,Ws,Ks,qs]=Bs();function aa(e,t){const n=t?e?qs:Ks:e?Ws:Ys;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Xs={get:aa(!1,!1)},Vs={get:aa(!1,!0)},Gs={get:aa(!0,!1)},qi=new WeakMap,Xi=new WeakMap,Vi=new WeakMap,Js=new WeakMap;function Zs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qs(e){return e.__v_skip||!Object.isExtensible(e)?0:Zs(xs(e))}function Vn(e){return Pt(e)?e:ia(e,!1,Ki,Xs,qi)}function el(e){return ia(e,!1,Hs,Vs,Xi)}function Gi(e){return ia(e,!0,Us,Gs,Vi)}function ia(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Qs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function At(e){return Pt(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function Rn(e){return!!(e&&e.__v_isShallow)}function Ji(e){return At(e)||Pt(e)}function z(e){const t=e&&e.__v_raw;return t?z(t):e}function Zi(e){return Fn(e,"__v_skip",!0),e}const Xt=e=>V(e)?Vn(e):e,oa=e=>V(e)?Gi(e):e;function Qi(e){Ge&&ke&&(e=z(e),Bi(e.dep||(e.dep=ea())))}function eo(e,t){e=z(e);const n=e.dep;n&&Ar(n)}function oe(e){return!!(e&&e.__v_isRef===!0)}function to(e){return tl(e,!1)}function tl(e,t){return oe(e)?e:new nl(e,t)}class nl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:z(t),this._value=n?t:Xt(t)}get value(){return Qi(this),this._value}set value(t){const n=this.__v_isShallow||Rn(t)||Pt(t);t=n?t:z(t),qt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Xt(t),eo(this))}}function mt(e){return oe(e)?e.value:e}const rl={get:(e,t,n)=>mt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return oe(a)&&!oe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function no(e){return At(e)?e:new Proxy(e,rl)}var ro;class al{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ro]=!1,this._dirty=!0,this.effect=new ta(t,()=>{this._dirty||(this._dirty=!0,eo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=z(this);return Qi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ro="__v_isReadonly";function il(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Pe):(r=e.get,a=e.set),new al(r,a,i||!a,n)}function Je(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Gn(i,t,n)}return a}function Ce(e,t,n,r){if(L(e)){const i=Je(e,t,n,r);return i&&ji(i)&&i.catch(o=>{Gn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ce(e[i],t,n,r));return a}function Gn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Je(l,null,10,[e,o,s]);return}}ol(e,n,a,r)}function ol(e,t,n,r=!0){console.error(e)}let Vt=!1,Or=!1;const ie=[];let Me=0;const Ot=[];let $e=null,st=0;const ao=Promise.resolve();let sa=null;function sl(e){const t=sa||ao;return e?t.then(this?e.bind(this):e):t}function ll(e){let t=Me+1,n=ie.length;for(;t<n;){const r=t+n>>>1;Gt(ie[r])<e?t=r+1:n=r}return t}function la(e){(!ie.length||!ie.includes(e,Vt&&e.allowRecurse?Me+1:Me))&&(e.id==null?ie.push(e):ie.splice(ll(e.id),0,e),io())}function io(){!Vt&&!Or&&(Or=!0,sa=ao.then(so))}function fl(e){const t=ie.indexOf(e);t>Me&&ie.splice(t,1)}function cl(e){R(e)?Ot.push(...e):(!$e||!$e.includes(e,e.allowRecurse?st+1:st))&&Ot.push(e),io()}function Ha(e,t=Vt?Me+1:0){for(;t<ie.length;t++){const n=ie[t];n&&n.pre&&(ie.splice(t,1),t--,n())}}function oo(e){if(Ot.length){const t=[...new Set(Ot)];if(Ot.length=0,$e){$e.push(...t);return}for($e=t,$e.sort((n,r)=>Gt(n)-Gt(r)),st=0;st<$e.length;st++)$e[st]();$e=null,st=0}}const Gt=e=>e.id==null?1/0:e.id,ul=(e,t)=>{const n=Gt(e)-Gt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function so(e){Or=!1,Vt=!0,ie.sort(ul);const t=Pe;try{for(Me=0;Me<ie.length;Me++){const n=ie[Me];n&&n.active!==!1&&Je(n,null,14)}}finally{Me=0,ie.length=0,oo(),Vt=!1,sa=null,(ie.length||Ot.length)&&so()}}function dl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[c]||K;h&&(a=n.map(_=>ee(_)?_.trim():_)),m&&(a=n.map(ks))}let s,l=r[s=cr(t)]||r[s=cr(Le(t))];!l&&i&&(l=r[s=cr(Tt(t))]),l&&Ce(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ce(u,e,6,a)}}function lo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=u=>{const c=lo(u,t,!0);c&&(s=!0,fe(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(V(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):fe(o,i),V(e)&&r.set(e,o),o)}function Jn(e,t){return!e||!Yn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Tt(t))||$(e,t))}let ye=null,Zn=null;function Ln(e){const t=ye;return ye=e,Zn=e&&e.type.__scopeId||null,t}function fo(e){Zn=e}function co(){Zn=null}function ml(e,t=ye,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ja(-1);const i=Ln(t);let o;try{o=e(...a)}finally{Ln(i),r._d&&Ja(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:c,renderCache:m,data:h,setupState:_,ctx:M,inheritAttrs:N}=e;let U,w;const P=Ln(e);try{if(n.shapeFlag&4){const j=a||r;U=Ne(c.call(j,j,m,i,_,h,M)),w=l}else{const j=t;U=Ne(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),w=t.props?l:pl(l)}}catch(j){Bt.length=0,Gn(j,e,1),U=ne(Jt)}let E=U;if(w&&N!==!1){const j=Object.keys(w),{shapeFlag:H}=E;j.length&&H&7&&(o&&j.some(Gr)&&(w=hl(w,o)),E=Ct(E,w))}return n.dirs&&(E=Ct(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),U=E,Ln(P),U}const pl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yn(n))&&((t||(t={}))[n]=e[n]);return t},hl=(e,t)=>{const n={};for(const r in e)(!Gr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ba(r,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const h=c[m];if(o[h]!==r[h]&&!Jn(u,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ba(r,o,u):!0:!!o;return!1}function Ba(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Jn(n,i))return!0}return!1}function vl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const bl=e=>e.__isSuspense;function yl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):cl(e)}function xl(e,t){if(Q){let n=Q.provides;const r=Q.parent&&Q.parent.provides;r===n&&(n=Q.provides=Object.create(r)),n[e]=t}}function In(e,t,n=!1){const r=Q||ye;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const bn={};function Ut(e,t,n){return uo(e,t,n)}function uo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=Ps()===(Q==null?void 0:Q.scope)?Q:null;let l,u=!1,c=!1;if(oe(e)?(l=()=>e.value,u=Rn(e)):At(e)?(l=()=>e,r=!0):R(e)?(c=!0,u=e.some(E=>At(E)||Rn(E)),l=()=>e.map(E=>{if(oe(E))return E.value;if(At(E))return ft(E);if(L(E))return Je(E,s,2)})):L(e)?t?l=()=>Je(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ce(e,s,3,[h])}:l=Pe,t&&r){const E=l;l=()=>ft(E())}let m,h=E=>{m=w.onStop=()=>{Je(E,s,4)}},_;if(Qt)if(h=Pe,t?n&&Ce(t,s,3,[l(),c?[]:void 0,h]):l(),a==="sync"){const E=vf();_=E.__watcherHandles||(E.__watcherHandles=[])}else return Pe;let M=c?new Array(e.length).fill(bn):bn;const N=()=>{if(w.active)if(t){const E=w.run();(r||u||(c?E.some((j,H)=>qt(j,M[H])):qt(E,M)))&&(m&&m(),Ce(t,s,3,[E,M===bn?void 0:c&&M[0]===bn?[]:M,h]),M=E)}else w.run()};N.allowRecurse=!!t;let U;a==="sync"?U=N:a==="post"?U=()=>de(N,s&&s.suspense):(N.pre=!0,s&&(N.id=s.uid),U=()=>la(N));const w=new ta(l,U);t?n?N():M=w.run():a==="post"?de(w.run.bind(w),s&&s.suspense):w.run();const P=()=>{w.stop(),s&&s.scope&&Jr(s.scope.effects,w)};return _&&_.push(P),P}function _l(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?mo(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=Q;It(this);const s=uo(a,i.bind(r),n);return o?It(o):pt(),s}function mo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ft(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),oe(e))ft(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)ft(e[n],t);else if(Li(e)||kt(e))e.forEach(n=>{ft(n,t)});else if($i(e))for(const n in e)ft(e[n],t);return e}function vt(e){return L(e)?{setup:e,name:e.name}:e}const Sn=e=>!!e.type.__asyncLoader,po=e=>e.type.__isKeepAlive;function wl(e,t){ho(e,"a",t)}function kl(e,t){ho(e,"da",t)}function ho(e,t,n=Q){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)po(a.parent.vnode)&&Al(r,t,n,a),a=a.parent}}function Al(e,t,n,r){const a=Qn(t,e,r,!0);go(()=>{Jr(r[t],a)},n)}function Qn(e,t,n=Q,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Nt(),It(n);const s=Ce(t,n,e,o);return pt(),Mt(),s});return r?a.unshift(i):a.push(i),i}}const We=e=>(t,n=Q)=>(!Qt||e==="sp")&&Qn(e,(...r)=>t(...r),n),Ol=We("bm"),El=We("m"),Pl=We("bu"),Cl=We("u"),Il=We("bum"),go=We("um"),Sl=We("sp"),Tl=We("rtg"),Nl=We("rtc");function Ml(e,t=Q){Qn("ec",e,t)}function Fl(e,t){const n=ye;if(n===null)return e;const r=nr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,u=K]=t[i];o&&(L(o)&&(o={mounted:o,updated:o}),o.deep&&ft(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:u}))}return e}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Nt(),Ce(l,n,8,[e.el,s,e,t]),Mt())}}const vo="components";function Rl(e,t){return jl(vo,e,!0,t)||e}const Ll=Symbol();function jl(e,t,n=!0,r=!1){const a=ye||Q;if(a){const i=a.type;if(e===vo){const s=pf(i,!1);if(s&&(s===t||s===Le(t)||s===qn(Le(t))))return i}const o=Ya(a[e]||i[e],t)||Ya(a.appContext[e],t);return!o&&r?i:o}}function Ya(e,t){return e&&(e[t]||e[Le(t)]||e[qn(Le(t))])}function fa(e,t,n,r){let a;const i=n&&n[r];if(R(e)||ee(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(V(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Er=e=>e?Io(e)?nr(e)||e.proxy:Er(e.parent):null,Ht=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Er(e.parent),$root:e=>Er(e.root),$emit:e=>e.emit,$options:e=>ca(e),$forceUpdate:e=>e.f||(e.f=()=>la(e.update)),$nextTick:e=>e.n||(e.n=sl.bind(e.proxy)),$watch:e=>_l.bind(e)}),mr=(e,t)=>e!==K&&!e.__isScriptSetup&&$(e,t),Dl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(mr(r,t))return o[t]=1,r[t];if(a!==K&&$(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&$(u,t))return o[t]=3,i[t];if(n!==K&&$(n,t))return o[t]=4,n[t];Pr&&(o[t]=0)}}const c=Ht[t];let m,h;if(c)return t==="$attrs"&&pe(e,"get",t),c(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&$(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,$(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return mr(a,t)?(a[t]=n,!0):r!==K&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&$(e,o)||mr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Ht,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Pr=!0;function $l(e){const t=ca(e),n=e.proxy,r=e.ctx;Pr=!1,t.beforeCreate&&Wa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:c,beforeMount:m,mounted:h,beforeUpdate:_,updated:M,activated:N,deactivated:U,beforeDestroy:w,beforeUnmount:P,destroyed:E,unmounted:j,render:H,renderTracked:ce,renderTriggered:re,errorCaptured:xe,serverPrefetch:ve,expose:je,inheritAttrs:Rt,components:fn,directives:cn,filters:sr}=t;if(u&&zl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const Y=o[G];L(Y)&&(r[G]=Y.bind(n))}if(a){const G=a.call(n,n);V(G)&&(e.data=Vn(G))}if(Pr=!0,i)for(const G in i){const Y=i[G],nt=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Pe,un=!L(Y)&&L(Y.set)?Y.set.bind(n):Pe,rt=ae({get:nt,set:un});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Ie=>rt.value=Ie})}if(s)for(const G in s)bo(s[G],r,n,G);if(l){const G=L(l)?l.call(n):l;Reflect.ownKeys(G).forEach(Y=>{xl(Y,G[Y])})}c&&Wa(c,e,"c");function se(G,Y){R(Y)?Y.forEach(nt=>G(nt.bind(n))):Y&&G(Y.bind(n))}if(se(Ol,m),se(El,h),se(Pl,_),se(Cl,M),se(wl,N),se(kl,U),se(Ml,xe),se(Nl,ce),se(Tl,re),se(Il,P),se(go,j),se(Sl,ve),R(je))if(je.length){const G=e.exposed||(e.exposed={});je.forEach(Y=>{Object.defineProperty(G,Y,{get:()=>n[Y],set:nt=>n[Y]=nt})})}else e.exposed||(e.exposed={});H&&e.render===Pe&&(e.render=H),Rt!=null&&(e.inheritAttrs=Rt),fn&&(e.components=fn),cn&&(e.directives=cn)}function zl(e,t,n=Pe,r=!1){R(e)&&(e=Cr(e));for(const a in e){const i=e[a];let o;V(i)?"default"in i?o=In(i.from||a,i.default,!0):o=In(i.from||a):o=In(i),oe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Wa(e,t,n){Ce(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function bo(e,t,n,r){const a=r.includes(".")?mo(n,r):()=>n[r];if(ee(e)){const i=t[e];L(i)&&Ut(a,i)}else if(L(e))Ut(a,e.bind(n));else if(V(e))if(R(e))e.forEach(i=>bo(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Ut(a,i,e)}}function ca(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>jn(l,u,o,!0)),jn(l,t,o)),V(t)&&i.set(t,l),l}function jn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&jn(e,i,n,!0),a&&a.forEach(o=>jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ul[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ul={data:Ka,props:ot,emits:ot,methods:ot,computed:ot,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:ot,directives:ot,watch:Bl,provide:Ka,inject:Hl};function Ka(e,t){return t?e?function(){return fe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Hl(e,t){return ot(Cr(e),Cr(t))}function Cr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function ot(e,t){return e?fe(fe(Object.create(null),e),t):t}function Bl(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function Yl(e,t,n,r=!1){const a={},i={};Fn(i,tr,1),e.propsDefaults=Object.create(null),yo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:el(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Wl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=z(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let h=c[m];if(Jn(e.emitsOptions,h))continue;const _=t[h];if(l)if($(i,h))_!==i[h]&&(i[h]=_,u=!0);else{const M=Le(h);a[M]=Ir(l,s,M,_,e,!1)}else _!==i[h]&&(i[h]=_,u=!0)}}}else{yo(e,t,a,i)&&(u=!0);let c;for(const m in s)(!t||!$(t,m)&&((c=Tt(m))===m||!$(t,c)))&&(l?n&&(n[m]!==void 0||n[c]!==void 0)&&(a[m]=Ir(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],u=!0)}u&&Ue(e,"set","$attrs")}function yo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Cn(l))continue;const u=t[l];let c;a&&$(a,c=Le(l))?!i||!i.includes(c)?n[c]=u:(s||(s={}))[c]=u:Jn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=z(n),u=s||K;for(let c=0;c<i.length;c++){const m=i[c];n[m]=Ir(a,l,m,u[m],e,!$(u,m))}}return o}function Ir(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(It(a),r=u[n]=l.call(null,t),pt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Tt(n))&&(r=!0))}return r}function xo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const c=m=>{l=!0;const[h,_]=xo(m,t,!0);fe(o,h),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return V(e)&&r.set(e,wt),wt;if(R(i))for(let c=0;c<i.length;c++){const m=Le(i[c]);qa(m)&&(o[m]=K)}else if(i)for(const c in i){const m=Le(c);if(qa(m)){const h=i[c],_=o[m]=R(h)||L(h)?{type:h}:Object.assign({},h);if(_){const M=Ga(Boolean,_.type),N=Ga(String,_.type);_[0]=M>-1,_[1]=N<0||M<N,(M>-1||$(_,"default"))&&s.push(m)}}}const u=[o,s];return V(e)&&r.set(e,u),u}function qa(e){return e[0]!=="$"}function Xa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Va(e,t){return Xa(e)===Xa(t)}function Ga(e,t){return R(t)?t.findIndex(n=>Va(n,e)):L(t)&&Va(t,e)?0:-1}const _o=e=>e[0]==="_"||e==="$stable",ua=e=>R(e)?e.map(Ne):[Ne(e)],Kl=(e,t,n)=>{if(t._n)return t;const r=ml((...a)=>ua(t(...a)),n);return r._c=!1,r},wo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(_o(a))continue;const i=e[a];if(L(i))t[a]=Kl(a,i,r);else if(i!=null){const o=ua(i);t[a]=()=>o}}},ko=(e,t)=>{const n=ua(t);e.slots.default=()=>n},ql=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=z(t),Fn(t,"_",n)):wo(t,e.slots={})}else e.slots={},t&&ko(e,t);Fn(e.slots,tr,1)},Xl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,wo(t,a)),o=t}else t&&(ko(e,t),o={default:1});if(i)for(const s in a)!_o(s)&&!(s in o)&&delete a[s]};function Ao(){return{app:null,config:{isNativeTag:vs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vl=0;function Gl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!V(a)&&(a=null);const i=Ao(),o=new Set;let s=!1;const l=i.app={_uid:Vl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:bf,get config(){return i.config},set config(u){},use(u,...c){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...c)):L(u)&&(o.add(u),u(l,...c))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,c){return c?(i.components[u]=c,l):i.components[u]},directive(u,c){return c?(i.directives[u]=c,l):i.directives[u]},mount(u,c,m){if(!s){const h=ne(r,a);return h.appContext=i,c&&t?t(h,u):e(h,u,m),s=!0,l._container=u,u.__vue_app__=l,nr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return i.provides[u]=c,l}};return l}}function Sr(e,t,n,r,a=!1){if(R(e)){e.forEach((h,_)=>Sr(h,t&&(R(t)?t[_]:t),n,r,a));return}if(Sn(r)&&!a)return;const i=r.shapeFlag&4?nr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,c=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(ee(u)?(c[u]=null,$(m,u)&&(m[u]=null)):oe(u)&&(u.value=null)),L(l))Je(l,s,12,[o,c]);else{const h=ee(l),_=oe(l);if(h||_){const M=()=>{if(e.f){const N=h?$(m,l)?m[l]:c[l]:l.value;a?R(N)&&Jr(N,i):R(N)?N.includes(i)||N.push(i):h?(c[l]=[i],$(m,l)&&(m[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,$(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(c[e.k]=o))};o?(M.id=-1,de(M,n)):M()}}}const de=yl;function Jl(e){return Zl(e)}function Zl(e,t){const n=As();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:c,parentNode:m,nextSibling:h,setScopeId:_=Pe,insertStaticContent:M}=e,N=(f,d,p,v=null,g=null,x=null,A=!1,y=null,k=!!d.dynamicChildren)=>{if(f===d)return;f&&!jt(f,d)&&(v=dn(f),Ie(f,g,x,!0),f=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:b,ref:S,shapeFlag:C}=d;switch(b){case er:U(f,d,p,v);break;case Jt:w(f,d,p,v);break;case pr:f==null&&P(d,p,v,A);break;case be:fn(f,d,p,v,g,x,A,y,k);break;default:C&1?H(f,d,p,v,g,x,A,y,k):C&6?cn(f,d,p,v,g,x,A,y,k):(C&64||C&128)&&b.process(f,d,p,v,g,x,A,y,k,bt)}S!=null&&g&&Sr(S,f&&f.ref,x,d||f,!d)},U=(f,d,p,v)=>{if(f==null)r(d.el=s(d.children),p,v);else{const g=d.el=f.el;d.children!==f.children&&u(g,d.children)}},w=(f,d,p,v)=>{f==null?r(d.el=l(d.children||""),p,v):d.el=f.el},P=(f,d,p,v)=>{[f.el,f.anchor]=M(f.children,d,p,v,f.el,f.anchor)},E=({el:f,anchor:d},p,v)=>{let g;for(;f&&f!==d;)g=h(f),r(f,p,v),f=g;r(d,p,v)},j=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=h(f),a(f),f=p;a(d)},H=(f,d,p,v,g,x,A,y,k)=>{A=A||d.type==="svg",f==null?ce(d,p,v,g,x,A,y,k):ve(f,d,g,x,A,y,k)},ce=(f,d,p,v,g,x,A,y)=>{let k,b;const{type:S,props:C,shapeFlag:T,transition:F,dirs:D}=f;if(k=f.el=o(f.type,x,C&&C.is,C),T&8?c(k,f.children):T&16&&xe(f.children,k,null,v,g,x&&S!=="foreignObject",A,y),D&&at(f,null,v,"created"),re(k,f,f.scopeId,A,v),C){for(const B in C)B!=="value"&&!Cn(B)&&i(k,B,null,C[B],x,f.children,v,g,De);"value"in C&&i(k,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Te(b,v,f)}D&&at(f,null,v,"beforeMount");const W=(!g||g&&!g.pendingBranch)&&F&&!F.persisted;W&&F.beforeEnter(k),r(k,d,p),((b=C&&C.onVnodeMounted)||W||D)&&de(()=>{b&&Te(b,v,f),W&&F.enter(k),D&&at(f,null,v,"mounted")},g)},re=(f,d,p,v,g)=>{if(p&&_(f,p),v)for(let x=0;x<v.length;x++)_(f,v[x]);if(g){let x=g.subTree;if(d===x){const A=g.vnode;re(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},xe=(f,d,p,v,g,x,A,y,k=0)=>{for(let b=k;b<f.length;b++){const S=f[b]=y?Ve(f[b]):Ne(f[b]);N(null,S,d,p,v,g,x,A,y)}},ve=(f,d,p,v,g,x,A)=>{const y=d.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:S}=d;k|=f.patchFlag&16;const C=f.props||K,T=d.props||K;let F;p&&it(p,!1),(F=T.onVnodeBeforeUpdate)&&Te(F,p,d,f),S&&at(d,f,p,"beforeUpdate"),p&&it(p,!0);const D=g&&d.type!=="foreignObject";if(b?je(f.dynamicChildren,b,y,p,v,D,x):A||Y(f,d,y,null,p,v,D,x,!1),k>0){if(k&16)Rt(y,d,C,T,p,v,g);else if(k&2&&C.class!==T.class&&i(y,"class",null,T.class,g),k&4&&i(y,"style",C.style,T.style,g),k&8){const W=d.dynamicProps;for(let B=0;B<W.length;B++){const Z=W[B],_e=C[Z],yt=T[Z];(yt!==_e||Z==="value")&&i(y,Z,_e,yt,g,f.children,p,v,De)}}k&1&&f.children!==d.children&&c(y,d.children)}else!A&&b==null&&Rt(y,d,C,T,p,v,g);((F=T.onVnodeUpdated)||S)&&de(()=>{F&&Te(F,p,d,f),S&&at(d,f,p,"updated")},v)},je=(f,d,p,v,g,x,A)=>{for(let y=0;y<d.length;y++){const k=f[y],b=d[y],S=k.el&&(k.type===be||!jt(k,b)||k.shapeFlag&70)?m(k.el):p;N(k,b,S,null,v,g,x,A,!0)}},Rt=(f,d,p,v,g,x,A)=>{if(p!==v){if(p!==K)for(const y in p)!Cn(y)&&!(y in v)&&i(f,y,p[y],null,A,d.children,g,x,De);for(const y in v){if(Cn(y))continue;const k=v[y],b=p[y];k!==b&&y!=="value"&&i(f,y,b,k,A,d.children,g,x,De)}"value"in v&&i(f,"value",p.value,v.value)}},fn=(f,d,p,v,g,x,A,y,k)=>{const b=d.el=f?f.el:s(""),S=d.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:T,slotScopeIds:F}=d;F&&(y=y?y.concat(F):F),f==null?(r(b,p,v),r(S,p,v),xe(d.children,p,S,g,x,A,y,k)):C>0&&C&64&&T&&f.dynamicChildren?(je(f.dynamicChildren,T,p,g,x,A,y),(d.key!=null||g&&d===g.subTree)&&Oo(f,d,!0)):Y(f,d,p,S,g,x,A,y,k)},cn=(f,d,p,v,g,x,A,y,k)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?g.ctx.activate(d,p,v,A,k):sr(d,p,v,g,x,A,k):Ca(f,d,k)},sr=(f,d,p,v,g,x,A)=>{const y=f.component=ff(f,v,g);if(po(f)&&(y.ctx.renderer=bt),cf(y),y.asyncDep){if(g&&g.registerDep(y,se),!f.el){const k=y.subTree=ne(Jt);w(null,k,d,p)}return}se(y,f,d,p,g,x,A)},Ca=(f,d,p)=>{const v=d.component=f.component;if(gl(f,d,p))if(v.asyncDep&&!v.asyncResolved){G(v,d,p);return}else v.next=d,fl(v.update),v.update();else d.el=f.el,v.vnode=d},se=(f,d,p,v,g,x,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:C,u:T,parent:F,vnode:D}=f,W=S,B;it(f,!1),S?(S.el=D.el,G(f,S,A)):S=D,C&&ur(C),(B=S.props&&S.props.onVnodeBeforeUpdate)&&Te(B,F,S,D),it(f,!0);const Z=dr(f),_e=f.subTree;f.subTree=Z,N(_e,Z,m(_e.el),dn(_e),f,g,x),S.el=Z.el,W===null&&vl(f,Z.el),T&&de(T,g),(B=S.props&&S.props.onVnodeUpdated)&&de(()=>Te(B,F,S,D),g)}else{let S;const{el:C,props:T}=d,{bm:F,m:D,parent:W}=f,B=Sn(d);if(it(f,!1),F&&ur(F),!B&&(S=T&&T.onVnodeBeforeMount)&&Te(S,W,d),it(f,!0),C&&fr){const Z=()=>{f.subTree=dr(f),fr(C,f.subTree,f,g,null)};B?d.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=dr(f);N(null,Z,p,v,f,g,x),d.el=Z.el}if(D&&de(D,g),!B&&(S=T&&T.onVnodeMounted)){const Z=d;de(()=>Te(S,W,Z),g)}(d.shapeFlag&256||W&&Sn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&de(f.a,g),f.isMounted=!0,d=p=v=null}},k=f.effect=new ta(y,()=>la(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,it(f,!0),b()},G=(f,d,p)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,Wl(f,d.props,v,p),Xl(f,d.children,p),Nt(),Ha(),Mt()},Y=(f,d,p,v,g,x,A,y,k=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,C=d.children,{patchFlag:T,shapeFlag:F}=d;if(T>0){if(T&128){un(b,C,p,v,g,x,A,y,k);return}else if(T&256){nt(b,C,p,v,g,x,A,y,k);return}}F&8?(S&16&&De(b,g,x),C!==b&&c(p,C)):S&16?F&16?un(b,C,p,v,g,x,A,y,k):De(b,g,x,!0):(S&8&&c(p,""),F&16&&xe(C,p,v,g,x,A,y,k))},nt=(f,d,p,v,g,x,A,y,k)=>{f=f||wt,d=d||wt;const b=f.length,S=d.length,C=Math.min(b,S);let T;for(T=0;T<C;T++){const F=d[T]=k?Ve(d[T]):Ne(d[T]);N(f[T],F,p,null,g,x,A,y,k)}b>S?De(f,g,x,!0,!1,C):xe(d,p,v,g,x,A,y,k,C)},un=(f,d,p,v,g,x,A,y,k)=>{let b=0;const S=d.length;let C=f.length-1,T=S-1;for(;b<=C&&b<=T;){const F=f[b],D=d[b]=k?Ve(d[b]):Ne(d[b]);if(jt(F,D))N(F,D,p,null,g,x,A,y,k);else break;b++}for(;b<=C&&b<=T;){const F=f[C],D=d[T]=k?Ve(d[T]):Ne(d[T]);if(jt(F,D))N(F,D,p,null,g,x,A,y,k);else break;C--,T--}if(b>C){if(b<=T){const F=T+1,D=F<S?d[F].el:v;for(;b<=T;)N(null,d[b]=k?Ve(d[b]):Ne(d[b]),p,D,g,x,A,y,k),b++}}else if(b>T)for(;b<=C;)Ie(f[b],g,x,!0),b++;else{const F=b,D=b,W=new Map;for(b=D;b<=T;b++){const he=d[b]=k?Ve(d[b]):Ne(d[b]);he.key!=null&&W.set(he.key,b)}let B,Z=0;const _e=T-D+1;let yt=!1,Ta=0;const Lt=new Array(_e);for(b=0;b<_e;b++)Lt[b]=0;for(b=F;b<=C;b++){const he=f[b];if(Z>=_e){Ie(he,g,x,!0);continue}let Se;if(he.key!=null)Se=W.get(he.key);else for(B=D;B<=T;B++)if(Lt[B-D]===0&&jt(he,d[B])){Se=B;break}Se===void 0?Ie(he,g,x,!0):(Lt[Se-D]=b+1,Se>=Ta?Ta=Se:yt=!0,N(he,d[Se],p,null,g,x,A,y,k),Z++)}const Na=yt?Ql(Lt):wt;for(B=Na.length-1,b=_e-1;b>=0;b--){const he=D+b,Se=d[he],Ma=he+1<S?d[he+1].el:v;Lt[b]===0?N(null,Se,p,Ma,g,x,A,y,k):yt&&(B<0||b!==Na[B]?rt(Se,p,Ma,2):B--)}}},rt=(f,d,p,v,g=null)=>{const{el:x,type:A,transition:y,children:k,shapeFlag:b}=f;if(b&6){rt(f.component.subTree,d,p,v);return}if(b&128){f.suspense.move(d,p,v);return}if(b&64){A.move(f,d,p,bt);return}if(A===be){r(x,d,p);for(let C=0;C<k.length;C++)rt(k[C],d,p,v);r(f.anchor,d,p);return}if(A===pr){E(f,d,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(x),r(x,d,p),de(()=>y.enter(x),g);else{const{leave:C,delayLeave:T,afterLeave:F}=y,D=()=>r(x,d,p),W=()=>{C(x,()=>{D(),F&&F()})};T?T(x,D,W):W()}else r(x,d,p)},Ie=(f,d,p,v=!1,g=!1)=>{const{type:x,props:A,ref:y,children:k,dynamicChildren:b,shapeFlag:S,patchFlag:C,dirs:T}=f;if(y!=null&&Sr(y,null,p,f,!0),S&256){d.ctx.deactivate(f);return}const F=S&1&&T,D=!Sn(f);let W;if(D&&(W=A&&A.onVnodeBeforeUnmount)&&Te(W,d,f),S&6)cs(f.component,p,v);else{if(S&128){f.suspense.unmount(p,v);return}F&&at(f,null,d,"beforeUnmount"),S&64?f.type.remove(f,d,p,g,bt,v):b&&(x!==be||C>0&&C&64)?De(b,d,p,!1,!0):(x===be&&C&384||!g&&S&16)&&De(k,d,p),v&&Ia(f)}(D&&(W=A&&A.onVnodeUnmounted)||F)&&de(()=>{W&&Te(W,d,f),F&&at(f,null,d,"unmounted")},p)},Ia=f=>{const{type:d,el:p,anchor:v,transition:g}=f;if(d===be){fs(p,v);return}if(d===pr){j(f);return}const x=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:y}=g,k=()=>A(p,x);y?y(f.el,x,k):k()}else x()},fs=(f,d)=>{let p;for(;f!==d;)p=h(f),a(f),f=p;a(d)},cs=(f,d,p)=>{const{bum:v,scope:g,update:x,subTree:A,um:y}=f;v&&ur(v),g.stop(),x&&(x.active=!1,Ie(A,f,d,p)),y&&de(y,d),de(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},De=(f,d,p,v=!1,g=!1,x=0)=>{for(let A=x;A<f.length;A++)Ie(f[A],d,p,v,g)},dn=f=>f.shapeFlag&6?dn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Sa=(f,d,p)=>{f==null?d._vnode&&Ie(d._vnode,null,null,!0):N(d._vnode||null,f,d,null,null,null,p),Ha(),oo(),d._vnode=f},bt={p:N,um:Ie,m:rt,r:Ia,mt:sr,mc:xe,pc:Y,pbc:je,n:dn,o:e};let lr,fr;return t&&([lr,fr]=t(bt)),{render:Sa,hydrate:lr,createApp:Gl(Sa,lr)}}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Oo(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ve(a[i]),s.el=o.el),n||Oo(o,s)),s.type===er&&(s.el=o.el)}}function Ql(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const ef=e=>e.__isTeleport,be=Symbol(void 0),er=Symbol(void 0),Jt=Symbol(void 0),pr=Symbol(void 0),Bt=[];let Oe=null;function Re(e=!1){Bt.push(Oe=e?null:[])}function tf(){Bt.pop(),Oe=Bt[Bt.length-1]||null}let Zt=1;function Ja(e){Zt+=e}function Eo(e){return e.dynamicChildren=Zt>0?Oe||wt:null,tf(),Zt>0&&Oe&&Oe.push(e),e}function ze(e,t,n,r,a,i){return Eo(me(e,t,n,r,a,i,!0))}function nf(e,t,n,r,a){return Eo(ne(e,t,n,r,a,!0))}function Tr(e){return e?e.__v_isVNode===!0:!1}function jt(e,t){return e.type===t.type&&e.key===t.key}const tr="__vInternal",Po=({key:e})=>e??null,Tn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ee(e)||oe(e)||L(e)?{i:ye,r:e,k:t,f:!!n}:e:null;function me(e,t=null,n=null,r=0,a=null,i=e===be?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Po(t),ref:t&&Tn(t),scopeId:Zn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ye};return s?(da(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Zt>0&&!o&&Oe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Oe.push(l),l}const ne=rf;function rf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ll)&&(e=Jt),Tr(e)){const s=Ct(e,t,!0);return n&&da(s,n),Zt>0&&!i&&Oe&&(s.shapeFlag&6?Oe[Oe.indexOf(e)]=s:Oe.push(s)),s.patchFlag|=-2,s}if(hf(e)&&(e=e.__vccOpts),t){t=af(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=Bn(s)),V(l)&&(Ji(l)&&!R(l)&&(l=fe({},l)),t.style=Xr(l))}const o=ee(e)?1:bl(e)?128:ef(e)?64:V(e)?4:L(e)?2:0;return me(e,t,n,r,a,o,i,!0)}function af(e){return e?Ji(e)||tr in e?fe({},e):e:null}function Ct(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?of(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Po(s),ref:t&&t.ref?n&&a?R(a)?a.concat(Tn(t)):[a,Tn(t)]:Tn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==be?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Co(e=" ",t=0){return ne(er,null,e,t)}function Ne(e){return e==null||typeof e=="boolean"?ne(Jt):R(e)?ne(be,null,e.slice()):typeof e=="object"?Ve(e):ne(er,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ct(e)}function da(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),da(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(tr in t)?t._ctx=ye:a===3&&ye&&(ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ye},n=32):(t=String(t),r&64?(n=16,t=[Co(t)]):n=8);e.children=t,e.shapeFlag|=n}function of(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Bn([t.class,r.class]));else if(a==="style")t.style=Xr([t.style,r.style]);else if(Yn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Te(e,t,n,r=null){Ce(e,t,7,[n,r])}const sf=Ao();let lf=0;function ff(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||sf,i={uid:lf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Os(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xo(r,a),emitsOptions:lo(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=dl.bind(null,i),e.ce&&e.ce(i),i}let Q=null;const It=e=>{Q=e,e.scope.on()},pt=()=>{Q&&Q.scope.off(),Q=null};function Io(e){return e.vnode.shapeFlag&4}let Qt=!1;function cf(e,t=!1){Qt=t;const{props:n,children:r}=e.vnode,a=Io(e);Yl(e,n,a,t),ql(e,r);const i=a?uf(e,t):void 0;return Qt=!1,i}function uf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Zi(new Proxy(e.ctx,Dl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?mf(e):null;It(e),Nt();const i=Je(r,e,0,[e.props,a]);if(Mt(),pt(),ji(i)){if(i.then(pt,pt),t)return i.then(o=>{Za(e,o,t)}).catch(o=>{Gn(o,e,0)});e.asyncDep=i}else Za(e,i,t)}else So(e,t)}function Za(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=no(t)),So(e,n)}let Qa;function So(e,t,n){const r=e.type;if(!e.render){if(!t&&Qa&&!r.render){const a=r.template||ca(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=Qa(a,u)}}e.render=r.render||Pe}It(e),Nt(),$l(e),Mt(),pt()}function df(e){return new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}})}function mf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=df(e))},slots:e.slots,emit:e.emit,expose:t}}function nr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(no(Zi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ht)return Ht[n](e)},has(t,n){return n in t||n in Ht}}))}function pf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function hf(e){return L(e)&&"__vccOpts"in e}const ae=(e,t)=>il(e,t,Qt);function To(e,t,n){const r=arguments.length;return r===2?V(t)&&!R(t)?Tr(t)?ne(e,null,[t]):ne(e,t):ne(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Tr(n)&&(n=[n]),ne(e,t,n))}const gf=Symbol(""),vf=()=>In(gf),bf="3.2.47",yf="http://www.w3.org/2000/svg",lt=typeof document<"u"?document:null,ei=lt&&lt.createElement("template"),xf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?lt.createElementNS(yf,e):lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ei.innerHTML=r?`<svg>${e}</svg>`:e;const s=ei.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function _f(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function wf(e,t,n){const r=e.style,a=ee(n);if(n&&!a){if(t&&!ee(t))for(const i in t)n[i]==null&&Nr(r,i,"");for(const i in n)Nr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ti=/\s*!important$/;function Nr(e,t,n){if(R(n))n.forEach(r=>Nr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=kf(e,t);ti.test(n)?e.setProperty(Tt(r),n.replace(ti,""),"important"):e[r]=n}}const ni=["Webkit","Moz","ms"],hr={};function kf(e,t){const n=hr[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return hr[t]=r;r=qn(r);for(let a=0;a<ni.length;a++){const i=ni[a]+r;if(i in e)return hr[t]=i}return t}const ri="http://www.w3.org/1999/xlink";function Af(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ri,t.slice(6,t.length)):e.setAttributeNS(ri,t,n);else{const i=gs(t);n==null||i&&!Fi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Of(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Fi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Ef(e,t,n,r){e.addEventListener(t,n,r)}function Pf(e,t,n,r){e.removeEventListener(t,n,r)}function Cf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=If(t);if(r){const u=i[t]=Nf(r,a);Ef(e,s,u,l)}else o&&(Pf(e,s,o,l),i[t]=void 0)}}const ai=/(?:Once|Passive|Capture)$/;function If(e){let t;if(ai.test(e)){t={};let r;for(;r=e.match(ai);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tt(e.slice(2)),t]}let gr=0;const Sf=Promise.resolve(),Tf=()=>gr||(Sf.then(()=>gr=0),gr=Date.now());function Nf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ce(Mf(r,n.value),t,5,[r])};return n.value=e,n.attached=Tf(),n}function Mf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ii=/^on[a-z]/,Ff=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?_f(e,r,a):t==="style"?wf(e,n,r):Yn(t)?Gr(t)||Cf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rf(e,t,r,a))?Of(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Af(e,t,r,a))};function Rf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ii.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ii.test(t)&&ee(n)?!1:t in e}const Lf={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Dt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Dt(e,!0),r.enter(e)):r.leave(e,()=>{Dt(e,!1)}):Dt(e,t))},beforeUnmount(e,{value:t}){Dt(e,t)}};function Dt(e,t){e.style.display=t?e._vod:"none"}const jf=fe({patchProp:Ff},xf);let oi;function Df(){return oi||(oi=Jl(jf))}const $f=(...e)=>{const t=Df().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=zf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function zf(e){return ee(e)?document.querySelector(e):e}const Uf={class:"item"},Hf=vt({__name:"GroupItem",props:{group:{type:Object,required:!0},values:{type:Array,required:!0}},emits:["update:values"],setup(e,{emit:t}){const n=e,r=to(!1),a=ae(()=>n.group.values.map(c=>c.key)),i=ae(()=>a.value.every(c=>n.values.includes(c))),o=()=>{r.value=!r.value},s=c=>{t("update:values",c)},l=(c,m)=>{let h=[...n.values];m?h.push(c):h=h.filter(_=>_!==c),s(h)},u=()=>{let c=[...n.values];i.value?c=c.filter(m=>!a.value.includes(m)):c=[...c,...a.value],s(c)};return Ut(i,c=>{c&&!r.value&&(r.value=!0)}),(c,m)=>{const h=Rl("font-awesome-icon");return Re(),ze("div",{class:Bn(["group",{"is-open":r.value}])},[me("div",Uf,[ne(mt(Mr),{name:e.group.label,checked:mt(i),"onUpdate:checked":u},null,8,["name","checked"]),me("div",{class:"label",onClick:o},[ne(h,{icon:"fa-solid fa-chevron-right",size:"xs"}),me("div",null,Vr(e.group.label),1)])]),Fl(me("ul",null,[(Re(!0),ze(be,null,fa(e.group.values,_=>(Re(),ze("li",{key:_.label,class:"group-item"},[ne(mt(Mr),{name:_.label,checked:e.values.includes(_.key),label:_.label,"onUpdate:checked":M=>l(_.key,M)},null,8,["name","checked","label","onUpdate:checked"])]))),128))],512),[[Lf,r.value]])],2)}}});const ma=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Bf=ma(Hf,[["__scopeId","data-v-086f904d"]]),Yf=e=>(fo("data-v-19ad29c6"),e=e(),co(),e),Wf={class:"groups-checkbox"},Kf={class:"all-label"},qf=Yf(()=>me("div",null,"All attributes",-1)),Xf=vt({__name:"GroupsCheckbox",props:{data:{type:Array,required:!0},selectedValues:{type:Array,required:!0}},emits:["update:values"],setup(e,{emit:t}){const n=e,r=ae(()=>n.data.reduce((l,u)=>[...l,...u.values.map(c=>c.key)],[])),a=ae(()=>r.value.length===n.selectedValues.length),i=()=>{a.value?o([]):o(r.value)},o=s=>{t("update:values",s)};return(s,l)=>(Re(),ze("div",Wf,[me("div",Kf,[ne(mt(Mr),{checked:mt(a),"onUpdate:checked":i,name:"all"},null,8,["checked"]),qf]),(Re(!0),ze(be,null,fa(e.data,u=>(Re(),nf(Bf,{key:u.label,group:u,values:e.selectedValues,"onUpdate:values":o},null,8,["group","values"]))),128))]))}});const Vf=ma(Xf,[["__scopeId","data-v-19ad29c6"]]),Gf={class:"app-checkbox"},Jf=["id","checked"],Zf=["for"],Qf=me("span",{class:"checkmark"},null,-1),Mr=vt({__name:"AppCheckbox",props:{checked:{type:Boolean,required:!0},label:{type:String,required:!1},name:{type:String,required:!0}},emits:["update:checked"],setup(e,{emit:t}){const n=r=>{const a=r.target;t("update:checked",a.checked)};return(r,a)=>(Re(),ze("div",Gf,[me("input",{id:e.name,type:"checkbox",checked:e.checked,onChange:n},null,40,Jf),me("label",{for:e.name},[Qf,Co(" "+Vr(e.label),1)],8,Zf)]))}});const ec=e=>(fo("data-v-cf8bf101"),e=e(),co(),e),tc={class:"seelcted-list"},nc=ec(()=>me("div",{class:"row"}," Values: ",-1)),rc=vt({__name:"App",setup(e){const t=Vn([{label:"Gorup",values:[{key:"first",label:"first"},{key:"second",label:"second"}]},{label:"Address",values:[{key:"city",label:"city"},{key:"address",label:"address"}]},{label:"Numbers",values:[{key:"one",label:"one"},{key:"two",label:"two"},{key:"three",label:"three"}]}]),n=to([]),r=a=>{n.value=[...a]};return(a,i)=>(Re(),ze("div",null,[ne(mt(Vf),{data:t,"selected-values":n.value,"onUpdate:values":r},null,8,["data","selected-values"]),me("div",tc,[nc,me("ul",null,[(Re(!0),ze(be,null,fa(n.value,o=>(Re(),ze("li",{class:"row",key:o},Vr(o),1))),128))])])]))}});const ac=ma(rc,[["__scopeId","data-v-cf8bf101"]]);function si(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?si(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):si(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dn(e){return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dn(e)}function ic(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function li(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oc(e,t,n){return t&&li(e.prototype,t),n&&li(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pa(e,t){return lc(e)||cc(e,t)||No(e,t)||dc()}function on(e){return sc(e)||fc(e)||No(e)||uc()}function sc(e){if(Array.isArray(e))return Fr(e)}function lc(e){if(Array.isArray(e))return e}function fc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function No(e,t){if(e){if(typeof e=="string")return Fr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fr(e,t)}}function Fr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function uc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fi=function(){},ha={},Mo={},Fo=null,Ro={mark:fi,measure:fi};try{typeof window<"u"&&(ha=window),typeof document<"u"&&(Mo=document),typeof MutationObserver<"u"&&(Fo=MutationObserver),typeof performance<"u"&&(Ro=performance)}catch{}var mc=ha.navigator||{},ci=mc.userAgent,ui=ci===void 0?"":ci,Qe=ha,X=Mo,di=Fo,yn=Ro;Qe.document;var Ke=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Lo=~ui.indexOf("MSIE")||~ui.indexOf("Trident/"),xn,_n,wn,kn,An,He="___FONT_AWESOME___",Rr=16,jo="fa",Do="svg-inline--fa",ht="data-fa-i2svg",Lr="data-fa-pseudo-element",pc="data-fa-pseudo-element-pending",ga="data-prefix",va="data-icon",mi="fontawesome-i2svg",hc="async",gc=["HTML","HEAD","STYLE","SCRIPT"],$o=function(){try{return!0}catch{return!1}}(),q="classic",J="sharp",ba=[q,J];function sn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var en=sn((xn={},te(xn,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(xn,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),xn)),tn=sn((_n={},te(_n,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(_n,J,{solid:"fass",regular:"fasr"}),_n)),nn=sn((wn={},te(wn,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(wn,J,{fass:"fa-solid",fasr:"fa-regular"}),wn)),vc=sn((kn={},te(kn,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(kn,J,{"fa-solid":"fass","fa-regular":"fasr"}),kn)),bc=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,zo="fa-layers-text",yc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,xc=sn((An={},te(An,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(An,J,{900:"fass",400:"fasr"}),An)),Uo=[1,2,3,4,5,6,7,8,9,10],_c=Uo.concat([11,12,13,14,15,16,17,18,19,20]),wc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rn=new Set;Object.keys(tn[q]).map(rn.add.bind(rn));Object.keys(tn[J]).map(rn.add.bind(rn));var kc=[].concat(ba,on(rn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ct.GROUP,ct.SWAP_OPACITY,ct.PRIMARY,ct.SECONDARY]).concat(Uo.map(function(e){return"".concat(e,"x")})).concat(_c.map(function(e){return"w-".concat(e)})),Yt=Qe.FontAwesomeConfig||{};function Ac(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Oc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Ec=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ec.forEach(function(e){var t=pa(e,2),n=t[0],r=t[1],a=Oc(Ac(n));a!=null&&(Yt[r]=a)})}var Ho={styleDefault:"solid",familyDefault:"classic",cssPrefix:jo,replacementClass:Do,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yt.familyPrefix&&(Yt.cssPrefix=Yt.familyPrefix);var St=O(O({},Ho),Yt);St.autoReplaceSvg||(St.observeMutations=!1);var I={};Object.keys(Ho).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){St[e]=n,Wt.forEach(function(r){return r(I)})},get:function(){return St[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){St.cssPrefix=t,Wt.forEach(function(n){return n(I)})},get:function(){return St.cssPrefix}});Qe.FontAwesomeConfig=I;var Wt=[];function Pc(e){return Wt.push(e),function(){Wt.splice(Wt.indexOf(e),1)}}var Xe=Rr,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Cc(e){if(!(!e||!Ke)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Ic="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function an(){for(var e=12,t="";e-- >0;)t+=Ic[Math.random()*62|0];return t}function Ft(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ya(e){return e.classList?Ft(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Bo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Sc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Bo(e[n]),'" ')},"").trim()}function rr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function xa(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function Tc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Nc(e){var t=e.transform,n=e.width,r=n===void 0?Rr:n,a=e.height,i=a===void 0?Rr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Lo?l+="translate(".concat(t.x/Xe-r/2,"em, ").concat(t.y/Xe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Xe,"em), calc(-50% + ").concat(t.y/Xe,"em)) "):l+="translate(".concat(t.x/Xe,"em, ").concat(t.y/Xe,"em) "),l+="scale(".concat(t.size/Xe*(t.flipX?-1:1),", ").concat(t.size/Xe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Mc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Yo(){var e=jo,t=Do,n=I.cssPrefix,r=I.replacementClass,a=Mc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var pi=!1;function vr(){I.autoAddCss&&!pi&&(Cc(Yo()),pi=!0)}var Fc={mixout:function(){return{dom:{css:Yo,insertCss:vr}}},hooks:function(){return{beforeDOMElementCreation:function(){vr()},beforeI2svg:function(){vr()}}}},Be=Qe||{};Be[He]||(Be[He]={});Be[He].styles||(Be[He].styles={});Be[He].hooks||(Be[He].hooks={});Be[He].shims||(Be[He].shims=[]);var Ee=Be[He],Wo=[],Rc=function e(){X.removeEventListener("DOMContentLoaded",e),$n=1,Wo.map(function(t){return t()})},$n=!1;Ke&&($n=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),$n||X.addEventListener("DOMContentLoaded",Rc));function Lc(e){Ke&&($n?setTimeout(e,0):Wo.push(e))}function ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Bo(e):"<".concat(t," ").concat(Sc(r),">").concat(i.map(ln).join(""),"</").concat(t,">")}function hi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var jc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},br=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?jc(n,a):n,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function Dc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function jr(e){var t=Dc(e);return t.length===1?t[0].toString(16):null}function $c(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function gi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Dr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=gi(t);typeof Ee.hooks.addPack=="function"&&!a?Ee.hooks.addPack(e,gi(t)):Ee.styles[e]=O(O({},Ee.styles[e]||{}),i),e==="fas"&&Dr("fa",t)}var On,En,Pn,xt=Ee.styles,zc=Ee.shims,Uc=(On={},te(On,q,Object.values(nn[q])),te(On,J,Object.values(nn[J])),On),_a=null,Ko={},qo={},Xo={},Vo={},Go={},Hc=(En={},te(En,q,Object.keys(en[q])),te(En,J,Object.keys(en[J])),En);function Bc(e){return~kc.indexOf(e)}function Yc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Bc(a)?a:null}var Jo=function(){var t=function(i){return br(xt,function(o,s,l){return o[l]=br(s,i,{}),o},{})};Ko=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),qo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Go=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in xt||I.autoFetchSvg,r=br(zc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Xo=r.names,Vo=r.unicodes,_a=ar(I.styleDefault,{family:I.familyDefault})};Pc(function(e){_a=ar(e.styleDefault,{family:I.familyDefault})});Jo();function wa(e,t){return(Ko[e]||{})[t]}function Wc(e,t){return(qo[e]||{})[t]}function ut(e,t){return(Go[e]||{})[t]}function Zo(e){return Xo[e]||{prefix:null,iconName:null}}function Kc(e){var t=Vo[e],n=wa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return _a}var ka=function(){return{prefix:null,iconName:null,rest:[]}};function ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=en[r][e],i=tn[r][e]||tn[r][a],o=e in Ee.styles?e:null;return i||o||null}var vi=(Pn={},te(Pn,q,Object.keys(nn[q])),te(Pn,J,Object.keys(nn[J])),Pn);function ir(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,q,"".concat(I.cssPrefix,"-").concat(q)),te(t,J,"".concat(I.cssPrefix,"-").concat(J)),t),o=null,s=q;(e.includes(i[q])||e.some(function(u){return vi[q].includes(u)}))&&(s=q),(e.includes(i[J])||e.some(function(u){return vi[J].includes(u)}))&&(s=J);var l=e.reduce(function(u,c){var m=Yc(I.cssPrefix,c);if(xt[c]?(c=Uc[s].includes(c)?vc[s][c]:c,o=c,u.prefix=c):Hc[s].indexOf(c)>-1?(o=c,u.prefix=ar(c,{family:s})):m?u.iconName=m:c!==I.replacementClass&&c!==i[q]&&c!==i[J]&&u.rest.push(c),!a&&u.prefix&&u.iconName){var h=o==="fa"?Zo(u.iconName):{},_=ut(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||_||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!xt.far&&xt.fas&&!I.autoFetchSvg&&(u.prefix="fas")}return u},ka());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(xt.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=ut(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=et()||"fas"),l}var qc=function(){function e(){ic(this,e),this.definitions={}}return oc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Dr(s,o[s]);var l=nn[q][s];l&&Dr(l,o[s]),Jo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),bi=[],_t={},Et={},Xc=Object.keys(Et);function Vc(e,t){var n=t.mixoutsTo;return bi=e,_t={},Object.keys(Et).forEach(function(r){Xc.indexOf(r)===-1&&delete Et[r]}),bi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Dn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){_t[o]||(_t[o]=[]),_t[o].push(i[o])})}r.provides&&r.provides(Et)}),n}function $r(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=_t[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function gt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=_t[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ye(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Et[e]?Et[e].apply(null,t):void 0}function zr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(t)return t=ut(n,t)||t,hi(Qo.definitions,n,t)||hi(Ee.styles,n,t)}var Qo=new qc,Gc=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,gt("noAuto")},Jc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ke?(gt("beforeI2svg",t),Ye("pseudoElements2svg",t),Ye("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Lc(function(){Qc({autoReplaceSvgRoot:n}),gt("watch",t)})}},Zc={icon:function(t){if(t===null)return null;if(Dn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ut(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ar(t[0]);return{prefix:r,iconName:ut(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(bc))){var a=ir(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:ut(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:ut(i,t)||t}}}},ge={noAuto:Gc,config:I,dom:Jc,parse:Zc,library:Qo,findIconDefinition:zr,toHtml:ln},Qc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Ee.styles).length>0||I.autoFetchSvg)&&Ke&&I.autoReplaceSvg&&ge.dom.i2svg({node:r})};function or(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ke){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function eu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(xa(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=rr(O(O({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function tu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function Aa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,m=e.extra,h=e.watchable,_=h===void 0?!1:h,M=r.found?r:n,N=M.width,U=M.height,w=a==="fak",P=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),E={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:P,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(U)})},j=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/U*16*.0625,"em")}:{};_&&(E.attributes[ht]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(c||an())},children:[l]}),delete E.attributes.title);var H=O(O({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:O(O({},j),m.styles)}),ce=r.found&&n.found?Ye("generateAbstractMask",H)||{children:[],attributes:{}}:Ye("generateAbstractIcon",H)||{children:[],attributes:{}},re=ce.children,xe=ce.attributes;return H.children=re,H.attributes=xe,s?tu(H):eu(H)}function yi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[ht]="");var c=O({},o.styles);xa(a)&&(c.transform=Nc({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var m=rr(c);m.length>0&&(u.style=m);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function nu(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=rr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var yr=Ee.styles;function Ur(e){var t=e[0],n=e[1],r=e.slice(4),a=pa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ct.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ct.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var ru={found:!1,width:512,height:512};function au(e,t){!$o&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Hr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=et()),new Promise(function(r,a){if(Ye("missingIconAbstract"),n==="fa"){var i=Zo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&yr[t]&&yr[t][e]){var o=yr[t][e];return r(Ur(o))}au(e,t),r(O(O({},ru),{},{icon:I.showMissingIcons&&e?Ye("missingIconAbstract")||{}:{}}))})}var xi=function(){},Br=I.measurePerformance&&yn&&yn.mark&&yn.measure?yn:{mark:xi,measure:xi},zt='FA "6.3.0"',iu=function(t){return Br.mark("".concat(zt," ").concat(t," begins")),function(){return es(t)}},es=function(t){Br.mark("".concat(zt," ").concat(t," ends")),Br.measure("".concat(zt," ").concat(t),"".concat(zt," ").concat(t," begins"),"".concat(zt," ").concat(t," ends"))},Oa={begin:iu,end:es},Nn=function(){};function _i(e){var t=e.getAttribute?e.getAttribute(ht):null;return typeof t=="string"}function ou(e){var t=e.getAttribute?e.getAttribute(ga):null,n=e.getAttribute?e.getAttribute(va):null;return t&&n}function su(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function lu(){if(I.autoReplaceSvg===!0)return Mn.replace;var e=Mn[I.autoReplaceSvg];return e||Mn.replace}function fu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function cu(e){return X.createElement(e)}function ts(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?fu:cu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ts(o,{ceFn:r}))}),a}function uu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Mn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ts(a),n)}),n.getAttribute(ht)===null&&I.keepOriginalSource){var r=X.createComment(uu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ya(n).indexOf(I.replacementClass))return Mn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ln(s)}).join(`
`);n.setAttribute(ht,""),n.innerHTML=o}};function wi(e){e()}function ns(e,t){var n=typeof t=="function"?t:Nn;if(e.length===0)n();else{var r=wi;I.mutateApproach===hc&&(r=Qe.requestAnimationFrame||wi),r(function(){var a=lu(),i=Oa.begin("mutate");e.map(a),i(),n()})}}var Ea=!1;function rs(){Ea=!0}function Yr(){Ea=!1}var zn=null;function ki(e){if(di&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Nn:t,r=e.nodeCallback,a=r===void 0?Nn:r,i=e.pseudoElementsCallback,o=i===void 0?Nn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;zn=new di(function(u){if(!Ea){var c=et();Ft(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!_i(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&_i(m.target)&&~wc.indexOf(m.attributeName))if(m.attributeName==="class"&&ou(m.target)){var h=ir(ya(m.target)),_=h.prefix,M=h.iconName;m.target.setAttribute(ga,_||c),M&&m.target.setAttribute(va,M)}else su(m.target)&&a(m.target)})}}),Ke&&zn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function du(){zn&&zn.disconnect()}function mu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function pu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ir(ya(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Wc(a.prefix,e.innerText)||wa(a.prefix,jr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function hu(e){var t=Ft(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||an()):(t["aria-hidden"]="true",t.focusable="false")),t}function gu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=pu(e),r=n.iconName,a=n.prefix,i=n.rest,o=hu(e),s=$r("parseNodeAttributes",{},e),l=t.styleParser?mu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var vu=Ee.styles;function as(e){var t=I.autoReplaceSvg==="nest"?Ai(e,{styleParser:!1}):Ai(e);return~t.extra.classes.indexOf(zo)?Ye("generateLayersText",e,t):Ye("generateSvgReplacementMutation",e,t)}var tt=new Set;ba.map(function(e){tt.add("fa-".concat(e))});Object.keys(en[q]).map(tt.add.bind(tt));Object.keys(en[J]).map(tt.add.bind(tt));tt=on(tt);function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ke)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(mi,"-").concat(m))},a=function(m){return n.remove("".concat(mi,"-").concat(m))},i=I.autoFetchSvg?tt:ba.map(function(c){return"fa-".concat(c)}).concat(Object.keys(vu));i.includes("fa")||i.push("fa");var o=[".".concat(zo,":not([").concat(ht,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(ht,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ft(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Oa.begin("onTree"),u=s.reduce(function(c,m){try{var h=as(m);h&&c.push(h)}catch(_){$o||_.name==="MissingIcon"&&console.error(_)}return c},[]);return new Promise(function(c,m){Promise.all(u).then(function(h){ns(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),m(h)})})}function bu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;as(e).then(function(n){n&&ns([n],t)})}function yu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:zr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:zr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var xu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,m=n.title,h=m===void 0?null:m,_=n.titleId,M=_===void 0?null:_,N=n.classes,U=N===void 0?[]:N,w=n.attributes,P=w===void 0?{}:w,E=n.styles,j=E===void 0?{}:E;if(t){var H=t.prefix,ce=t.iconName,re=t.icon;return or(O({type:"icon"},t),function(){return gt("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(h?P["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(M||an()):(P["aria-hidden"]="true",P.focusable="false")),Aa({icons:{main:Ur(re),mask:l?Ur(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ce,transform:O(O({},Fe),a),symbol:o,title:h,maskId:c,titleId:M,extra:{attributes:P,styles:j,classes:U}})})}},_u={mixout:function(){return{icon:yu(xu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Oi,n.nodeCallback=bu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Oi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,m=r.maskId,h=r.extra;return new Promise(function(_,M){Promise.all([Hr(a,s),c.iconName?Hr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var U=pa(N,2),w=U[0],P=U[1];_([n,Aa({icons:{main:w,mask:P},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(M)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=rr(s);l.length>0&&(a.style=l);var u;return xa(o)&&(u=Ye("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},wu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return or({type:"layer"},function(){gt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(on(i)).join(" ")},children:o}]})}}}},ku={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return or({type:"counter",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),nu({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(on(s))}})})}}}},Au={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,m=c===void 0?{}:c,h=r.styles,_=h===void 0?{}:h;return or({type:"text",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),yi({content:n,transform:O(O({},Fe),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(I.cssPrefix,"-layers-text")].concat(on(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Lo){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,yi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ou=new RegExp('"',"ug"),Ei=[1105920,1112319];function Eu(e){var t=e.replace(Ou,""),n=$c(t,0),r=n>=Ei[0]&&n<=Ei[1],a=t.length===2?t[0]===t[1]:!1;return{value:jr(a?t[0]:t),isSecondary:r||a}}function Pi(e,t){var n="".concat(pc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ft(e.children),o=i.filter(function(re){return re.getAttribute(Lr)===t})[0],s=Qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(yc),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?J:q,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?tn[h][l[2].toLowerCase()]:xc[h][u],M=Eu(m),N=M.value,U=M.isSecondary,w=l[0].startsWith("FontAwesome"),P=wa(_,N),E=P;if(w){var j=Kc(N);j.iconName&&j.prefix&&(P=j.iconName,_=j.prefix)}if(P&&!U&&(!o||o.getAttribute(ga)!==_||o.getAttribute(va)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var H=gu(),ce=H.extra;ce.attributes[Lr]=t,Hr(P,_).then(function(re){var xe=Aa(O(O({},H),{},{icons:{main:re,mask:ka()},prefix:_,iconName:E,extra:ce,watchable:!0})),ve=X.createElement("svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=xe.map(function(je){return ln(je)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Pu(e){return Promise.all([Pi(e,"::before"),Pi(e,"::after")])}function Cu(e){return e.parentNode!==document.head&&!~gc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Lr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ci(e){if(Ke)return new Promise(function(t,n){var r=Ft(e.querySelectorAll("*")).filter(Cu).map(Pu),a=Oa.begin("searchPseudoElements");rs(),Promise.all(r).then(function(){a(),Yr(),t()}).catch(function(){a(),Yr(),n()})})}var Iu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ci,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;I.searchPseudoElements&&Ci(a)}}},Ii=!1,Su={mixout:function(){return{dom:{unwatch:function(){rs(),Ii=!0}}}},hooks:function(){return{bootstrap:function(){ki($r("mutationObserverCallbacks",{}))},noAuto:function(){du()},watch:function(n){var r=n.observeMutationsRoot;Ii?Yr():ki($r("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Si=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Tu={mixout:function(){return{parse:{transform:function(n){return Si(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Si(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:h};return{tag:"g",attributes:O({},_.outer),children:[{tag:"g",attributes:O({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),_.path)}]}]}}}},xr={x:0,y:0,width:"100%",height:"100%"};function Ti(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Nu(e){return e.tag==="g"?e.children:[e]}var Mu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ir(a.split(" ").map(function(o){return o.trim()})):ka();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,c=i.icon,m=o.width,h=o.icon,_=Tc({transform:l,containerWidth:m,iconWidth:u}),M={tag:"rect",attributes:O(O({},xr),{},{fill:"white"})},N=c.children?{children:c.children.map(Ti)}:{},U={tag:"g",attributes:O({},_.inner),children:[Ti(O({tag:c.tag,attributes:O(O({},c.attributes),_.path)},N))]},w={tag:"g",attributes:O({},_.outer),children:[U]},P="mask-".concat(s||an()),E="clip-".concat(s||an()),j={tag:"mask",attributes:O(O({},xr),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,w]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Nu(h)},j]};return r.push(H,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(P,")")},xr)}),{children:r,attributes:a}}}},Fu={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ru={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Lu=[Fc,_u,wu,ku,Au,Iu,Su,Tu,Mu,Fu,Ru];Vc(Lu,{mixoutsTo:ge});ge.noAuto;var is=ge.config,ju=ge.library;ge.dom;var Un=ge.parse;ge.findIconDefinition;ge.toHtml;var Du=ge.icon;ge.layer;var $u=ge.text;ge.counter;var zu={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};function Ni(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ni(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ni(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hn(e){return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hn(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Hu(e,t){if(e==null)return{};var n=Uu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wr(e){return Bu(e)||Yu(e)||Wu(e)||Ku()}function Bu(e){if(Array.isArray(e))return Kr(e)}function Yu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wu(e,t){if(e){if(typeof e=="string")return Kr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kr(e,t)}}function Kr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ku(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},os={exports:{}};(function(e){(function(t){var n=function(w,P,E){if(!u(P)||m(P)||h(P)||_(P)||l(P))return P;var j,H=0,ce=0;if(c(P))for(j=[],ce=P.length;H<ce;H++)j.push(n(w,P[H],E));else{j={};for(var re in P)Object.prototype.hasOwnProperty.call(P,re)&&(j[w(re,E)]=n(w,P[re],E))}return j},r=function(w,P){P=P||{};var E=P.separator||"_",j=P.split||/(?=[A-Z])/;return w.split(j).join(E)},a=function(w){return M(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(P,E){return E?E.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var P=a(w);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(w,P){return r(w,P).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},u=function(w){return w===Object(w)},c=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},h=function(w){return s.call(w)=="[object RegExp]"},_=function(w){return s.call(w)=="[object Boolean]"},M=function(w){return w=w-0,w===w},N=function(w,P){var E=P&&"process"in P?P.process:P;return typeof E!="function"?w:function(j,H){return E(j,w,H)}},U={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,P){return n(N(a,P),w)},decamelizeKeys:function(w,P){return n(N(o,P),w,P)},pascalizeKeys:function(w,P){return n(N(i,P),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=U:t.humps=U})(qu)})(os);var Xu=os.exports,Vu=["class","style"];function Gu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Xu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Ju(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Pa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Pa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=Ju(c);break;case"style":l.style=Gu(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Hu(n,Vu);return To(e.tag,Ae(Ae(Ae({},t),{},{class:a.class,style:Ae(Ae({},a.style),o)},a.attrs),s),r)}var ss=!1;try{ss=!0}catch{}function Zu(){if(!ss&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Kt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function Qu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Mi(e){if(e&&Hn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Un.icon)return Un.icon(e);if(e===null)return null;if(Hn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ed=vt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ae(function(){return Mi(t.icon)}),i=ae(function(){return Kt("classes",Qu(t))}),o=ae(function(){return Kt("transform",typeof t.transform=="string"?Un.transform(t.transform):t.transform)}),s=ae(function(){return Kt("mask",Mi(t.mask))}),l=ae(function(){return Du(a.value,Ae(Ae(Ae(Ae({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Ut(l,function(c){if(!c)return Zu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=ae(function(){return l.value?Pa(l.value.abstract[0],{},r):null});return function(){return u.value}}});vt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=is.familyPrefix,i=ae(function(){return["".concat(a,"-layers")].concat(Wr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return To("div",{class:i.value},r.default?r.default():[])}}});vt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=is.familyPrefix,i=ae(function(){return Kt("classes",[].concat(Wr(t.counter?["".concat(a,"-layers-counter")]:[]),Wr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ae(function(){return Kt("transform",typeof t.transform=="string"?Un.transform(t.transform):t.transform)}),s=ae(function(){var u=$u(t.value.toString(),Ae(Ae({},o.value),i.value)),c=u.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=ae(function(){return Pa(s.value,{},r)});return function(){return l.value}}});ju.add(zu);const ls=$f(ac);ls.component("font-awesome-icon",ed);ls.mount("#app");
