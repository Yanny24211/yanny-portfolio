(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Cf={exports:{}},go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function A_(){if(Bp)return go;Bp=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return go.Fragment=e,go.jsx=i,go.jsxs=i,go}var Ip;function T_(){return Ip||(Ip=1,Cf.exports=A_()),Cf.exports}var At=T_(),Rf={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function b_(){if(zp)return ie;zp=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function y(U,$,vt){this.props=U,this.context=$,this.refs=b,this.updater=vt||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function B(U,$,vt){this.props=U,this.context=$,this.refs=b,this.updater=vt||M}var O=B.prototype=new _;O.constructor=B,E(O,y.prototype),O.isPureReactComponent=!0;var D=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function z(U,$,vt,St,K,ht){return vt=ht.ref,{$$typeof:o,type:U,key:$,ref:vt!==void 0?vt:null,props:ht}}function j(U,$){return z(U.type,$,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function R(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return $[vt]})}var H=/\/+/g;function lt(U,$){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):$.toString(36)}function st(){}function gt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(st,st):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function dt(U,$,vt,St,K){var ht=typeof U;(ht==="undefined"||ht==="boolean")&&(U=null);var xt=!1;if(U===null)xt=!0;else switch(ht){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(U.$$typeof){case o:case e:xt=!0;break;case g:return xt=U._init,dt(xt(U._payload),$,vt,St,K)}}if(xt)return K=K(U),xt=St===""?"."+lt(U,0):St,D(K)?(vt="",xt!=null&&(vt=xt.replace(H,"$&/")+"/"),dt(K,$,vt,"",function(re){return re})):K!=null&&(w(K)&&(K=j(K,vt+(K.key==null||U&&U.key===K.key?"":(""+K.key).replace(H,"$&/")+"/")+xt)),$.push(K)),1;xt=0;var bt=St===""?".":St+":";if(D(U))for(var Ot=0;Ot<U.length;Ot++)St=U[Ot],ht=bt+lt(St,Ot),xt+=dt(St,$,vt,ht,K);else if(Ot=x(U),typeof Ot=="function")for(U=Ot.call(U),Ot=0;!(St=U.next()).done;)St=St.value,ht=bt+lt(St,Ot++),xt+=dt(St,$,vt,ht,K);else if(ht==="object"){if(typeof U.then=="function")return dt(gt(U),$,vt,St,K);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return xt}function P(U,$,vt){if(U==null)return U;var St=[],K=0;return dt(U,St,"","",function(ht){return $.call(vt,ht,K++)}),St}function Z(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var q=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Mt(){}return ie.Children={map:P,forEach:function(U,$,vt){P(U,function(){$.apply(this,arguments)},vt)},count:function(U){var $=0;return P(U,function(){$++}),$},toArray:function(U){return P(U,function($){return $})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ie.Component=y,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=B,ie.StrictMode=r,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ie.__COMPILER_RUNTIME={__proto__:null,c:function(U){return G.H.useMemoCache(U)}},ie.cache=function(U){return function(){return U.apply(null,arguments)}},ie.cloneElement=function(U,$,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var St=E({},U.props),K=U.key,ht=void 0;if($!=null)for(xt in $.ref!==void 0&&(ht=void 0),$.key!==void 0&&(K=""+$.key),$)!V.call($,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&$.ref===void 0||(St[xt]=$[xt]);var xt=arguments.length-2;if(xt===1)St.children=vt;else if(1<xt){for(var bt=Array(xt),Ot=0;Ot<xt;Ot++)bt[Ot]=arguments[Ot+2];St.children=bt}return z(U.type,K,void 0,void 0,ht,St)},ie.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},ie.createElement=function(U,$,vt){var St,K={},ht=null;if($!=null)for(St in $.key!==void 0&&(ht=""+$.key),$)V.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(K[St]=$[St]);var xt=arguments.length-2;if(xt===1)K.children=vt;else if(1<xt){for(var bt=Array(xt),Ot=0;Ot<xt;Ot++)bt[Ot]=arguments[Ot+2];K.children=bt}if(U&&U.defaultProps)for(St in xt=U.defaultProps,xt)K[St]===void 0&&(K[St]=xt[St]);return z(U,ht,void 0,void 0,null,K)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(U){return{$$typeof:h,render:U}},ie.isValidElement=w,ie.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Z}},ie.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},ie.startTransition=function(U){var $=G.T,vt={};G.T=vt;try{var St=U(),K=G.S;K!==null&&K(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(Mt,q)}catch(ht){q(ht)}finally{G.T=$}},ie.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ie.use=function(U){return G.H.use(U)},ie.useActionState=function(U,$,vt){return G.H.useActionState(U,$,vt)},ie.useCallback=function(U,$){return G.H.useCallback(U,$)},ie.useContext=function(U){return G.H.useContext(U)},ie.useDebugValue=function(){},ie.useDeferredValue=function(U,$){return G.H.useDeferredValue(U,$)},ie.useEffect=function(U,$,vt){var St=G.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(U,$)},ie.useId=function(){return G.H.useId()},ie.useImperativeHandle=function(U,$,vt){return G.H.useImperativeHandle(U,$,vt)},ie.useInsertionEffect=function(U,$){return G.H.useInsertionEffect(U,$)},ie.useLayoutEffect=function(U,$){return G.H.useLayoutEffect(U,$)},ie.useMemo=function(U,$){return G.H.useMemo(U,$)},ie.useOptimistic=function(U,$){return G.H.useOptimistic(U,$)},ie.useReducer=function(U,$,vt){return G.H.useReducer(U,$,vt)},ie.useRef=function(U){return G.H.useRef(U)},ie.useState=function(U){return G.H.useState(U)},ie.useSyncExternalStore=function(U,$,vt){return G.H.useSyncExternalStore(U,$,vt)},ie.useTransition=function(){return G.H.useTransition()},ie.version="19.1.0",ie}var Fp;function K0(){return Fp||(Fp=1,Rf.exports=b_()),Rf.exports}var yi=K0(),wf={exports:{}},_o={},Df={exports:{}},Uf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function C_(){return Hp||(Hp=1,function(o){function e(P,Z){var q=P.length;P.push(Z);t:for(;0<q;){var Mt=q-1>>>1,U=P[Mt];if(0<l(U,Z))P[Mt]=Z,P[q]=U,q=Mt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Z=P[0],q=P.pop();if(q!==Z){P[0]=q;t:for(var Mt=0,U=P.length,$=U>>>1;Mt<$;){var vt=2*(Mt+1)-1,St=P[vt],K=vt+1,ht=P[K];if(0>l(St,q))K<U&&0>l(ht,St)?(P[Mt]=ht,P[K]=q,Mt=K):(P[Mt]=St,P[vt]=q,Mt=vt);else if(K<U&&0>l(ht,q))P[Mt]=ht,P[K]=q,Mt=K;else break t}}return Z}function l(P,Z){var q=P.sortIndex-Z.sortIndex;return q!==0?q:P.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,v=null,x=3,M=!1,E=!1,b=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=P)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function G(P){if(b=!1,D(P),!E)if(i(m)!==null)E=!0,V||(V=!0,lt());else{var Z=i(p);Z!==null&&dt(G,Z.startTime-P)}}var V=!1,z=-1,j=5,w=-1;function R(){return y?!0:!(o.unstable_now()-w<j)}function H(){if(y=!1,V){var P=o.unstable_now();w=P;var Z=!0;try{t:{E=!1,b&&(b=!1,B(z),z=-1),M=!0;var q=x;try{e:{for(D(P),v=i(m);v!==null&&!(v.expirationTime>P&&R());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,x=v.priorityLevel;var U=Mt(v.expirationTime<=P);if(P=o.unstable_now(),typeof U=="function"){v.callback=U,D(P),Z=!0;break e}v===i(m)&&r(m),D(P)}else r(m);v=i(m)}if(v!==null)Z=!0;else{var $=i(p);$!==null&&dt(G,$.startTime-P),Z=!1}}break t}finally{v=null,x=q,M=!1}Z=void 0}}finally{Z?lt():V=!1}}}var lt;if(typeof O=="function")lt=function(){O(H)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,gt=st.port2;st.port1.onmessage=H,lt=function(){gt.postMessage(null)}}else lt=function(){_(H,0)};function dt(P,Z){z=_(function(){P(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var q=x;x=Z;try{return P()}finally{x=q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,Z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=x;x=P;try{return Z()}finally{x=q}},o.unstable_scheduleCallback=function(P,Z,q){var Mt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Mt+q:Mt):q=Mt,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=q+U,P={id:g++,callback:Z,priorityLevel:P,startTime:q,expirationTime:U,sortIndex:-1},q>Mt?(P.sortIndex=q,e(p,P),i(m)===null&&P===i(p)&&(b?(B(z),z=-1):b=!0,dt(G,q-Mt))):(P.sortIndex=U,e(m,P),E||M||(E=!0,V||(V=!0,lt()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var Z=x;return function(){var q=x;x=Z;try{return P.apply(this,arguments)}finally{x=q}}}}(Uf)),Uf}var Gp;function R_(){return Gp||(Gp=1,Df.exports=C_()),Df.exports}var Lf={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function w_(){if(Vp)return Tn;Vp=1;var o=K0();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Tn.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Tn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Tn.version="19.1.0",Tn}var kp;function D_(){if(kp)return Lf.exports;kp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Lf.exports=w_(),Lf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function U_(){if(Xp)return _o;Xp=1;var o=R_(),e=K0(),i=D_();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),t;if(f===s)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,s=f;break}if(A===s){S=!0,s=c,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,s=c;break}if(A===s){S=!0,s=f,a=c;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case G:return"Suspense";case V:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case O:return(t.displayName||"Context")+".Provider";case B:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var dt=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Mt=[],U=-1;function $(t){return{current:t}}function vt(t){0>U||(t.current=Mt[U],Mt[U]=null,U--)}function St(t,n){U++,Mt[U]=t.current,t.current=n}var K=$(null),ht=$(null),xt=$(null),bt=$(null);function Ot(t,n){switch(St(xt,n),St(ht,t),St(K,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?up(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=up(n),t=fp(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}vt(K),St(K,t)}function re(){vt(K),vt(ht),vt(xt)}function Zt(t){t.memoizedState!==null&&St(bt,t);var n=K.current,a=fp(n,t.type);n!==a&&(St(ht,t),St(K,a))}function Fe(t){ht.current===t&&(vt(K),vt(ht)),bt.current===t&&(vt(bt),uo._currentValue=q)}var Pe=Object.prototype.hasOwnProperty,ce=o.unstable_scheduleCallback,I=o.unstable_cancelCallback,Dn=o.unstable_shouldYield,pe=o.unstable_requestPaint,ee=o.unstable_now,Xt=o.unstable_getCurrentPriorityLevel,we=o.unstable_ImmediatePriority,Gt=o.unstable_UserBlockingPriority,L=o.unstable_NormalPriority,T=o.unstable_LowPriority,tt=o.unstable_IdlePriority,_t=o.log,yt=o.unstable_setDisableYieldValue,ut=null,It=null;function Ct(t){if(typeof _t=="function"&&yt(t),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(ut,t)}catch{}}var Rt=Math.clz32?Math.clz32:Ft,me=Math.log,Tt=Math.LN2;function Ft(t){return t>>>=0,t===0?32:31-(me(t)/Tt|0)|0}var Yt=256,Qt=4194304;function Pt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function oe(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?c=Pt(s):(S&=A,S!==0?c=Pt(S):a||(a=A&~t,a!==0&&(c=Pt(a))))):(A=s&~f,A!==0?c=Pt(A):S!==0?c=Pt(S):a||(a=s&~t,a!==0&&(c=Pt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function te(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function De(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var t=Yt;return Yt<<=1,(Yt&4194048)===0&&(Yt=256),t}function Lt(){var t=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),t}function ot(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function pt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bt(t,n,a,s,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,N=t.expirationTimes,J=t.hiddenUpdates;for(a=S&~a;0<a;){var ct=31-Rt(a),mt=1<<ct;A[ct]=0,N[ct]=-1;var et=J[ct];if(et!==null)for(J[ct]=null,ct=0;ct<et.length;ct++){var nt=et[ct];nt!==null&&(nt.lane&=-536870913)}a&=~mt}s!==0&&Nt(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function Nt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Rt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function ne(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Rt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function He(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Je(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ye(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Dp(t.type))}function Hn(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var fn=Math.random().toString(36).slice(2),rn="__reactFiber$"+fn,_n="__reactProps$"+fn,Un="__reactContainer$"+fn,Va="__reactEvents$"+fn,No="__reactListeners$"+fn,Oo="__reactHandles$"+fn,ka="__reactResources$"+fn,aa="__reactMarker$"+fn;function ra(t){delete t[rn],delete t[_n],delete t[Va],delete t[No],delete t[Oo]}function Ci(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Un]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=mp(t);t!==null;){if(a=t[rn])return a;t=mp(t)}return n}t=a,a=t.parentNode}return null}function Ri(t){if(t=t[rn]||t[Un]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Xa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function sa(t){var n=t[ka];return n||(n=t[ka]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $e(t){t[aa]=!0}var Po=new Set,Bo={};function wi(t,n){C(t,n),C(t+"Capture",n)}function C(t,n){for(Bo[t]=n,t=0;t<n.length;t++)Po.add(n[t])}var W=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},at={};function Y(t){return Pe.call(at,t)?!0:Pe.call(it,t)?!1:W.test(t)?at[t]=!0:(it[t]=!0,!1)}function Et(t,n,a){if(Y(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function wt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Dt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var zt,Jt;function Wt(t){if(zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);zt=n&&n[1]||"",Jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+t+Jt}var kt=!1;function fe(t,n){if(!t||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(nt){var et=nt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(nt){et=nt}t.call(mt.prototype)}}else{try{throw Error()}catch(nt){et=nt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(nt){if(nt&&et&&typeof nt.stack=="string")return[nt.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var N=S.split(`
`),J=A.split(`
`);for(c=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===N.length||c===J.length)for(s=N.length-1,c=J.length-1;1<=s&&0<=c&&N[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(N[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||N[s]!==J[c]){var ct=`
`+N[s].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=s&&0<=c);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Wt(a):""}function Me(t){switch(t.tag){case 26:case 27:case 5:return Wt(t.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return fe(t.type,!1);case 11:return fe(t.type.render,!1);case 1:return fe(t.type,!0);case 31:return Wt("Activity");default:return""}}function Xe(t){try{var n="";do n+=Me(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _e(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qt(t){var n=_e(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qe(t){t._valueTracker||(t._valueTracker=qt(t))}function Se(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=_e(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Mn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var oa=/[\n"\\]/g;function Ge(t){return t.replace(oa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Di(t,n,a,s,c,f,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ge(n)):t.value!==""+ge(n)&&(t.value=""+ge(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?En(t,S,ge(n)):a!=null?En(t,S,ge(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ge(A):t.removeAttribute("name")}function Be(t,n,a,s,c,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ge(a):"",n=n!=null?""+ge(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function En(t,n,a){n==="number"&&Mn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function sn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ge(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function dn(t,n,a){if(n!=null&&(n=""+ge(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ge(a):""}function vn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ge(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function mi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ui=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ud(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Ui.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function fd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&ud(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&ud(t,f,n[f])}function Tc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Em=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Io(t){return Em.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var bc=null;function Cc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yr=null,Mr=null;function dd(t){var n=Ri(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(Di(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ge(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[_n]||null;if(!c)throw Error(r(90));Di(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Se(s)}break t;case"textarea":dn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sn(t,!!a.multiple,n,!1)}}}var Rc=!1;function hd(t,n,a){if(Rc)return t(n,a);Rc=!0;try{var s=t(n);return s}finally{if(Rc=!1,(yr!==null||Mr!==null)&&(Ml(),yr&&(n=yr,t=Mr,Mr=yr=null,dd(n),t)))for(n=0;n<t.length;n++)dd(t[n])}}function Es(t,n){var a=t.stateNode;if(a===null)return null;var s=a[_n]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wc=!1;if(Li)try{var As={};Object.defineProperty(As,"passive",{get:function(){wc=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{wc=!1}var la=null,Dc=null,zo=null;function pd(){if(zo)return zo;var t,n=Dc,a=n.length,s,c="value"in la?la.value:la.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return zo=c.slice(t,1<s?1-s:void 0)}function Fo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function md(){return!1}function Ln(t){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ho:md,this.isPropagationStopped=md,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Ln(Wa),Ts=g({},Wa,{view:0,detail:0}),Am=Ln(Ts),Uc,Lc,bs,Vo=g({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(Uc=t.screenX-bs.screenX,Lc=t.screenY-bs.screenY):Lc=Uc=0,bs=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),gd=Ln(Vo),Tm=g({},Vo,{dataTransfer:0}),bm=Ln(Tm),Cm=g({},Ts,{relatedTarget:0}),Nc=Ln(Cm),Rm=g({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),wm=Ln(Rm),Dm=g({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Um=Ln(Dm),Lm=g({},Wa,{data:0}),_d=Ln(Lm),Nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Om={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bm(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Pm[t])?!!n[t]:!1}function Oc(){return Bm}var Im=g({},Ts,{key:function(t){if(t.key){var n=Nm[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Om[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(t){return t.type==="keypress"?Fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zm=Ln(Im),Fm=g({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=Ln(Fm),Hm=g({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),Gm=Ln(Hm),Vm=g({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),km=Ln(Vm),Xm=g({},Vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wm=Ln(Xm),qm=g({},Wa,{newState:0,oldState:0}),Ym=Ln(qm),jm=[9,13,27,32],Pc=Li&&"CompositionEvent"in window,Cs=null;Li&&"documentMode"in document&&(Cs=document.documentMode);var Zm=Li&&"TextEvent"in window&&!Cs,xd=Li&&(!Pc||Cs&&8<Cs&&11>=Cs),Sd=" ",yd=!1;function Md(t,n){switch(t){case"keyup":return jm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ed(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function Qm(t,n){switch(t){case"compositionend":return Ed(n);case"keypress":return n.which!==32?null:(yd=!0,Sd);case"textInput":return t=n.data,t===Sd&&yd?null:t;default:return null}}function Km(t,n){if(Er)return t==="compositionend"||!Pc&&Md(t,n)?(t=pd(),zo=Dc=la=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xd&&n.locale!=="ko"?null:n.data;default:return null}}var Jm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Jm[t.type]:n==="textarea"}function Td(t,n,a,s){yr?Mr?Mr.push(s):Mr=[s]:yr=s,n=Rl(n,"onChange"),0<n.length&&(a=new Go("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Rs=null,ws=null;function $m(t){rp(t,0)}function ko(t){var n=Xa(t);if(Se(n))return t}function bd(t,n){if(t==="change")return n}var Cd=!1;if(Li){var Bc;if(Li){var Ic="oninput"in document;if(!Ic){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),Ic=typeof Rd.oninput=="function"}Bc=Ic}else Bc=!1;Cd=Bc&&(!document.documentMode||9<document.documentMode)}function wd(){Rs&&(Rs.detachEvent("onpropertychange",Dd),ws=Rs=null)}function Dd(t){if(t.propertyName==="value"&&ko(ws)){var n=[];Td(n,ws,t,Cc(t)),hd($m,n)}}function tg(t,n,a){t==="focusin"?(wd(),Rs=n,ws=a,Rs.attachEvent("onpropertychange",Dd)):t==="focusout"&&wd()}function eg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ko(ws)}function ng(t,n){if(t==="click")return ko(n)}function ig(t,n){if(t==="input"||t==="change")return ko(n)}function ag(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Gn=typeof Object.is=="function"?Object.is:ag;function Ds(t,n){if(Gn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Pe.call(n,c)||!Gn(t[c],n[c]))return!1}return!0}function Ud(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ld(t,n){var a=Ud(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ud(a)}}function Nd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Nd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Od(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Mn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Mn(t.document)}return n}function zc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var rg=Li&&"documentMode"in document&&11>=document.documentMode,Ar=null,Fc=null,Us=null,Hc=!1;function Pd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hc||Ar==null||Ar!==Mn(s)||(s=Ar,"selectionStart"in s&&zc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Us&&Ds(Us,s)||(Us=s,s=Rl(Fc,"onSelect"),0<s.length&&(n=new Go("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ar)))}function qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Tr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},Gc={},Bd={};Li&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Ya(t){if(Gc[t])return Gc[t];if(!Tr[t])return t;var n=Tr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Bd)return Gc[t]=n[a];return t}var Id=Ya("animationend"),zd=Ya("animationiteration"),Fd=Ya("animationstart"),sg=Ya("transitionrun"),og=Ya("transitionstart"),lg=Ya("transitioncancel"),Hd=Ya("transitionend"),Gd=new Map,Vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vc.push("scrollEnd");function si(t,n){Gd.set(t,n),wi(n,[t])}var Vd=new WeakMap;function Qn(t,n){if(typeof t=="object"&&t!==null){var a=Vd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xe(n)},Vd.set(t,n),n)}return{value:t,source:n,stack:Xe(n)}}var Kn=[],br=0,kc=0;function Xo(){for(var t=br,n=kc=br=0;n<t;){var a=Kn[n];Kn[n++]=null;var s=Kn[n];Kn[n++]=null;var c=Kn[n];Kn[n++]=null;var f=Kn[n];if(Kn[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&kd(a,c,f)}}function Wo(t,n,a,s){Kn[br++]=t,Kn[br++]=n,Kn[br++]=a,Kn[br++]=s,kc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Xc(t,n,a,s){return Wo(t,n,a,s),qo(t)}function Cr(t,n){return Wo(t,null,null,n),qo(t)}function kd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Rt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function qo(t){if(50<no)throw no=0,Qu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Rr={};function cg(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,n,a,s){return new cg(t,n,a,s)}function Wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ni(t,n){var a=t.alternate;return a===null?(a=Vn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Xd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Yo(t,n,a,s,c,f){var S=0;if(s=t,typeof t=="function")Wc(t)&&(S=1);else if(typeof t=="string")S=f_(t,a,K.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Vn(31,a,n,c),t.elementType=w,t.lanes=f,t;case E:return ja(a.children,c,f,n);case b:S=8,c|=24;break;case y:return t=Vn(12,a,n,c|2),t.elementType=y,t.lanes=f,t;case G:return t=Vn(13,a,n,c),t.elementType=G,t.lanes=f,t;case V:return t=Vn(19,a,n,c),t.elementType=V,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case O:S=10;break t;case B:S=9;break t;case D:S=11;break t;case z:S=14;break t;case j:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Vn(S,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function ja(t,n,a,s){return t=Vn(7,t,s,n),t.lanes=a,t}function qc(t,n,a){return t=Vn(6,t,null,n),t.lanes=a,t}function Yc(t,n,a){return n=Vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var wr=[],Dr=0,jo=null,Zo=0,Jn=[],$n=0,Za=null,Oi=1,Pi="";function Qa(t,n){wr[Dr++]=Zo,wr[Dr++]=jo,jo=t,Zo=n}function Wd(t,n,a){Jn[$n++]=Oi,Jn[$n++]=Pi,Jn[$n++]=Za,Za=t;var s=Oi;t=Pi;var c=32-Rt(s)-1;s&=~(1<<c),a+=1;var f=32-Rt(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Oi=1<<32-Rt(n)+c|a<<c|s,Pi=f+t}else Oi=1<<f|a<<c|s,Pi=t}function jc(t){t.return!==null&&(Qa(t,1),Wd(t,1,0))}function Zc(t){for(;t===jo;)jo=wr[--Dr],wr[Dr]=null,Zo=wr[--Dr],wr[Dr]=null;for(;t===Za;)Za=Jn[--$n],Jn[$n]=null,Pi=Jn[--$n],Jn[$n]=null,Oi=Jn[--$n],Jn[$n]=null}var Rn=null,Ye=null,Te=!1,Ka=null,gi=!1,Qc=Error(r(519));function Ja(t){var n=Error(r(418,""));throw Os(Qn(n,t)),Qc}function qd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[_n]=s,a){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<ao.length;a++)he(ao[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),Be(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),qe(n);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),vn(n,s.value,s.defaultValue,s.children),qe(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||cp(n.textContent,a)?(s.popover!=null&&(he("beforetoggle",n),he("toggle",n)),s.onScroll!=null&&he("scroll",n),s.onScrollEnd!=null&&he("scrollend",n),s.onClick!=null&&(n.onclick=wl),n=!0):n=!1,n||Ja(t)}function Yd(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Rn=Rn.return}}function Ls(t){if(t!==Rn)return!1;if(!Te)return Yd(t),Te=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||hf(t.type,t.memoizedProps)),a=!a),a&&Ye&&Ja(t),Yd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ye=li(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ye=null}}else n===27?(n=Ye,Aa(t.type)?(t=_f,_f=null,Ye=t):Ye=n):Ye=Rn?li(t.stateNode.nextSibling):null;return!0}function Ns(){Ye=Rn=null,Te=!1}function jd(){var t=Ka;return t!==null&&(Pn===null?Pn=t:Pn.push.apply(Pn,t),Ka=null),t}function Os(t){Ka===null?Ka=[t]:Ka.push(t)}var Kc=$(null),$a=null,Bi=null;function ca(t,n,a){St(Kc,n._currentValue),n._currentValue=a}function Ii(t){t._currentValue=Kc.current,vt(Kc)}function Jc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function $c(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var N=0;N<n.length;N++)if(A.context===n[N]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Jc(f.return,a,t),s||(S=null);break t}f=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Jc(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Ps(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=c.type;Gn(c.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(c===bt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(uo):t=[uo])}c=c.return}t!==null&&$c(n,t,a,s),n.flags|=262144}function Qo(t){for(t=t.firstContext;t!==null;){if(!Gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function tr(t){$a=t,Bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Zd($a,t)}function Ko(t,n){return $a===null&&tr(t),Zd(t,n)}function Zd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(t===null)throw Error(r(308));Bi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Bi=Bi.next=n;return a}var ug=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},fg=o.unstable_scheduleCallback,dg=o.unstable_NormalPriority,on={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tu(){return{controller:new ug,data:new Map,refCount:0}}function Bs(t){t.refCount--,t.refCount===0&&fg(dg,function(){t.controller.abort()})}var Is=null,eu=0,Ur=0,Lr=null;function hg(t,n){if(Is===null){var a=Is=[];eu=0,Ur=af(),Lr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return eu++,n.then(Qd,Qd),n}function Qd(){if(--eu===0&&Is!==null){Lr!==null&&(Lr.status="fulfilled");var t=Is;Is=null,Ur=0,Lr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function pg(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Kd=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&hg(t,n),Kd!==null&&Kd(t,n)};var er=$(null);function nu(){var t=er.current;return t!==null?t:Ve.pooledCache}function Jo(t,n){n===null?St(er,er.current):St(er,n.pool)}function Jd(){var t=nu();return t===null?null:{parent:on._currentValue,pool:t}}var zs=Error(r(460)),$d=Error(r(474)),$o=Error(r(542)),iu={then:function(){}};function th(t){return t=t.status,t==="fulfilled"||t==="rejected"}function tl(){}function eh(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(tl,tl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ih(t),t;default:if(typeof n.status=="string")n.then(tl,tl);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ih(t),t}throw Fs=n,zs}}var Fs=null;function nh(){if(Fs===null)throw Error(r(459));var t=Fs;return Fs=null,t}function ih(t){if(t===zs||t===$o)throw Error(r(483))}var ua=!1;function au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ru(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(be&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=qo(t),kd(t,null,a),n}return Wo(t,s,n,a),qo(t)}function Hs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ne(t,a)}}function su(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ou=!1;function Gs(){if(ou){var t=Lr;if(t!==null)throw t}}function Vs(t,n,a,s){ou=!1;var c=t.updateQueue;ua=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var N=A,J=N.next;N.next=null,S===null?f=J:S.next=J,S=N;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,A=ct.lastBaseUpdate,A!==S&&(A===null?ct.firstBaseUpdate=J:A.next=J,ct.lastBaseUpdate=N))}if(f!==null){var mt=c.baseState;S=0,ct=J=N=null,A=f;do{var et=A.lane&-536870913,nt=et!==A.lane;if(nt?(xe&et)===et:(s&et)===et){et!==0&&et===Ur&&(ou=!0),ct!==null&&(ct=ct.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var $t=t,jt=A;et=n;var Ne=a;switch(jt.tag){case 1:if($t=jt.payload,typeof $t=="function"){mt=$t.call(Ne,mt,et);break t}mt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=jt.payload,et=typeof $t=="function"?$t.call(Ne,mt,et):$t,et==null)break t;mt=g({},mt,et);break t;case 2:ua=!0}}et=A.callback,et!==null&&(t.flags|=64,nt&&(t.flags|=8192),nt=c.callbacks,nt===null?c.callbacks=[et]:nt.push(et))}else nt={lane:et,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ct===null?(J=ct=nt,N=mt):ct=ct.next=nt,S|=et;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;nt=A,A=nt.next,nt.next=null,c.lastBaseUpdate=nt,c.shared.pending=null}}while(!0);ct===null&&(N=mt),c.baseState=N,c.firstBaseUpdate=J,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),Sa|=S,t.lanes=S,t.memoizedState=mt}}function ah(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function rh(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ah(a[t],n)}var Nr=$(null),el=$(0);function sh(t,n){t=Xi,St(el,t),St(Nr,n),Xi=t|n.baseLanes}function lu(){St(el,Xi),St(Nr,Nr.current)}function cu(){Xi=el.current,vt(Nr),vt(el)}var ha=0,le=null,Ue=null,tn=null,nl=!1,Or=!1,nr=!1,il=0,ks=0,Pr=null,mg=0;function Ze(){throw Error(r(321))}function uu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Gn(t[a],n[a]))return!1;return!0}function fu(t,n,a,s,c,f){return ha=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?kh:Xh,nr=!1,f=a(s,c),nr=!1,Or&&(f=lh(n,a,s,c)),oh(t),f}function oh(t){P.H=cl;var n=Ue!==null&&Ue.next!==null;if(ha=0,tn=Ue=le=null,nl=!1,ks=0,Pr=null,n)throw Error(r(300));t===null||hn||(t=t.dependencies,t!==null&&Qo(t)&&(hn=!0))}function lh(t,n,a,s){le=t;var c=0;do{if(Or&&(Pr=null),ks=0,Or=!1,25<=c)throw Error(r(301));if(c+=1,tn=Ue=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Mg,f=n(a,s)}while(Or);return f}function gg(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Xs(n):n,t=t.useState()[0],(Ue!==null?Ue.memoizedState:null)!==t&&(le.flags|=1024),n}function du(){var t=il!==0;return il=0,t}function hu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function pu(t){if(nl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nl=!1}ha=0,tn=Ue=le=null,Or=!1,ks=il=0,Pr=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?le.memoizedState=tn=t:tn=tn.next=t,tn}function en(){if(Ue===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var n=tn===null?le.memoizedState:tn.next;if(n!==null)tn=n,Ue=t;else{if(t===null)throw le.alternate===null?Error(r(467)):Error(r(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},tn===null?le.memoizedState=tn=t:tn=tn.next=t}return tn}function mu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xs(t){var n=ks;return ks+=1,Pr===null&&(Pr=[]),t=eh(Pr,t,n),n=le,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?kh:Xh),t}function al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xs(t);if(t.$$typeof===O)return An(t)}throw Error(r(438,String(t)))}function gu(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=le.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=mu(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function zi(t,n){return typeof n=="function"?n(t):n}function rl(t){var n=en();return _u(n,Ue,t)}function _u(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=S=null,N=null,J=n,ct=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(xe&mt)===mt:(ha&mt)===mt){var et=J.revertLane;if(et===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===Ur&&(ct=!0);else if((ha&et)===et){J=J.next,et===Ur&&(ct=!0);continue}else mt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},N===null?(A=N=mt,S=f):N=N.next=mt,le.lanes|=et,Sa|=et;mt=J.action,nr&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else et={lane:mt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},N===null?(A=N=et,S=f):N=N.next=et,le.lanes|=mt,Sa|=mt;J=J.next}while(J!==null&&J!==n);if(N===null?S=f:N.next=A,!Gn(f,t.memoizedState)&&(hn=!0,ct&&(a=Lr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=N,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function vu(t){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Gn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function ch(t,n,a){var s=le,c=en(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Gn((Ue||c).memoizedState,a);S&&(c.memoizedState=a,hn=!0),c=c.queue;var A=dh.bind(null,s,c,t);if(Ws(2048,8,A,[t]),c.getSnapshot!==n||S||tn!==null&&tn.memoizedState.tag&1){if(s.flags|=2048,Br(9,sl(),fh.bind(null,s,c,a,n),null),Ve===null)throw Error(r(349));f||(ha&124)!==0||uh(s,n,a)}return a}function uh(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=mu(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function fh(t,n,a,s){n.value=a,n.getSnapshot=s,hh(n)&&ph(t)}function dh(t,n,a){return a(function(){hh(n)&&ph(t)})}function hh(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Gn(t,a)}catch{return!0}}function ph(t){var n=Cr(t,2);n!==null&&Yn(n,t,2)}function xu(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),nr){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:t},n}function mh(t,n,a,s){return t.baseState=a,_u(t,Ue,typeof s=="function"?s:zi)}function _g(t,n,a,s,c){if(ll(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,gh(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gh(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var A=a(c,s),N=P.S;N!==null&&N(S,A),_h(t,n,A)}catch(J){Su(t,n,J)}finally{P.T=f}}else try{f=a(c,s),_h(t,n,f)}catch(J){Su(t,n,J)}}function _h(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){vh(t,n,s)},function(s){return Su(t,n,s)}):vh(t,n,a)}function vh(t,n,a){n.status="fulfilled",n.value=a,xh(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,gh(t,a)))}function Su(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,xh(n),n=n.next;while(n!==s)}t.action=null}function xh(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Sh(t,n){return n}function yh(t,n){if(Te){var a=Ve.formState;if(a!==null){t:{var s=le;if(Te){if(Ye){e:{for(var c=Ye,f=gi;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ye=li(c.nextSibling),s=c.data==="F!";break t}}Ja(s)}s=!1}s&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sh,lastRenderedState:n},a.queue=s,a=Hh.bind(null,le,s),s.dispatch=a,s=xu(!1),f=Tu.bind(null,le,!1,s.queue),s=Nn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=_g.bind(null,le,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Mh(t){var n=en();return Eh(n,Ue,t)}function Eh(t,n,a){if(n=_u(t,n,Sh)[0],t=rl(zi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Xs(n)}catch(S){throw S===zs?$o:S}else s=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Br(9,sl(),vg.bind(null,c,a),null)),[s,f,t]}function vg(t,n){t.action=n}function Ah(t){var n=en(),a=Ue;if(a!==null)return Eh(n,a,t);en(),n=n.memoizedState,a=en();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Br(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=le.updateQueue,n===null&&(n=mu(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function sl(){return{destroy:void 0,resource:void 0}}function Th(){return en().memoizedState}function ol(t,n,a,s){var c=Nn();s=s===void 0?null:s,le.flags|=t,c.memoizedState=Br(1|n,sl(),a,s)}function Ws(t,n,a,s){var c=en();s=s===void 0?null:s;var f=c.memoizedState.inst;Ue!==null&&s!==null&&uu(s,Ue.memoizedState.deps)?c.memoizedState=Br(n,f,a,s):(le.flags|=t,c.memoizedState=Br(1|n,f,a,s))}function bh(t,n){ol(8390656,8,t,n)}function Ch(t,n){Ws(2048,8,t,n)}function Rh(t,n){return Ws(4,2,t,n)}function wh(t,n){return Ws(4,4,t,n)}function Dh(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Uh(t,n,a){a=a!=null?a.concat([t]):null,Ws(4,4,Dh.bind(null,n,t),a)}function yu(){}function Lh(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&uu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Nh(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&uu(n,s[1]))return s[0];if(s=t(),nr){Ct(!0);try{t()}finally{Ct(!1)}}return a.memoizedState=[s,n],s}function Mu(t,n,a){return a===void 0||(ha&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=B2(),le.lanes|=t,Sa|=t,a)}function Oh(t,n,a,s){return Gn(a,n)?a:Nr.current!==null?(t=Mu(t,a,s),Gn(t,n)||(hn=!0),t):(ha&42)===0?(hn=!0,t.memoizedState=a):(t=B2(),le.lanes|=t,Sa|=t,n)}function Ph(t,n,a,s,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=P.T,A={};P.T=A,Tu(t,!1,n,a);try{var N=c(),J=P.S;if(J!==null&&J(A,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ct=pg(N,s);qs(t,n,ct,qn(t))}else qs(t,n,s,qn(t))}catch(mt){qs(t,n,{then:function(){},status:"rejected",reason:mt},qn())}finally{Z.p=f,P.T=S}}function xg(){}function Eu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Bh(t).queue;Ph(t,c,n,q,a===null?xg:function(){return Ih(t),a(s)})}function Bh(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ih(t){var n=Bh(t).next.queue;qs(t,n,{},qn())}function Au(){return An(uo)}function zh(){return en().memoizedState}function Fh(){return en().memoizedState}function Sg(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();t=fa(a);var s=da(n,t,a);s!==null&&(Yn(s,n,a),Hs(s,n,a)),n={cache:tu()},t.payload=n;return}n=n.return}}function yg(t,n,a){var s=qn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ll(t)?Gh(n,a):(a=Xc(t,n,a,s),a!==null&&(Yn(a,t,s),Vh(a,n,s)))}function Hh(t,n,a){var s=qn();qs(t,n,a,s)}function qs(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ll(t))Gh(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(c.hasEagerState=!0,c.eagerState=A,Gn(A,S))return Wo(t,n,c,0),Ve===null&&Xo(),!1}catch{}finally{}if(a=Xc(t,n,c,s),a!==null)return Yn(a,t,s),Vh(a,n,s),!0}return!1}function Tu(t,n,a,s){if(s={lane:2,revertLane:af(),action:s,hasEagerState:!1,eagerState:null,next:null},ll(t)){if(n)throw Error(r(479))}else n=Xc(t,a,s,2),n!==null&&Yn(n,t,2)}function ll(t){var n=t.alternate;return t===le||n!==null&&n===le}function Gh(t,n){Or=nl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Vh(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ne(t,a)}}var cl={readContext:An,use:al,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze},kh={readContext:An,use:al,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:bh,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ol(4194308,4,Dh.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ol(4194308,4,t,n)},useInsertionEffect:function(t,n){ol(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var s=t();if(nr){Ct(!0);try{t()}finally{Ct(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Nn();if(a!==void 0){var c=a(n);if(nr){Ct(!0);try{a(n)}finally{Ct(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=yg.bind(null,le,t),[s.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=xu(t);var n=t.queue,a=Hh.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:yu,useDeferredValue:function(t,n){var a=Nn();return Mu(a,t,n)},useTransition:function(){var t=xu(!1);return t=Ph.bind(null,le,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=le,c=Nn();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(xe&124)!==0||uh(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,bh(dh.bind(null,s,f,t),[t]),s.flags|=2048,Br(9,sl(),fh.bind(null,s,f,a,n),null),a},useId:function(){var t=Nn(),n=Ve.identifierPrefix;if(Te){var a=Pi,s=Oi;a=(s&~(1<<32-Rt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=il++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=mg++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Au,useFormState:yh,useActionState:yh,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tu.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:gu,useCacheRefresh:function(){return Nn().memoizedState=Sg.bind(null,le)}},Xh={readContext:An,use:al,useCallback:Lh,useContext:An,useEffect:Ch,useImperativeHandle:Uh,useInsertionEffect:Rh,useLayoutEffect:wh,useMemo:Nh,useReducer:rl,useRef:Th,useState:function(){return rl(zi)},useDebugValue:yu,useDeferredValue:function(t,n){var a=en();return Oh(a,Ue.memoizedState,t,n)},useTransition:function(){var t=rl(zi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:Xs(t),n]},useSyncExternalStore:ch,useId:zh,useHostTransitionStatus:Au,useFormState:Mh,useActionState:Mh,useOptimistic:function(t,n){var a=en();return mh(a,Ue,t,n)},useMemoCache:gu,useCacheRefresh:Fh},Mg={readContext:An,use:al,useCallback:Lh,useContext:An,useEffect:Ch,useImperativeHandle:Uh,useInsertionEffect:Rh,useLayoutEffect:wh,useMemo:Nh,useReducer:vu,useRef:Th,useState:function(){return vu(zi)},useDebugValue:yu,useDeferredValue:function(t,n){var a=en();return Ue===null?Mu(a,t,n):Oh(a,Ue.memoizedState,t,n)},useTransition:function(){var t=vu(zi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:Xs(t),n]},useSyncExternalStore:ch,useId:zh,useHostTransitionStatus:Au,useFormState:Ah,useActionState:Ah,useOptimistic:function(t,n){var a=en();return Ue!==null?mh(a,Ue,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:gu,useCacheRefresh:Fh},Ir=null,Ys=0;function ul(t){var n=Ys;return Ys+=1,Ir===null&&(Ir=[]),eh(Ir,t,n)}function js(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function fl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Wh(t){var n=t._init;return n(t._payload)}function qh(t){function n(X,F){if(t){var Q=X.deletions;Q===null?(X.deletions=[F],X.flags|=16):Q.push(F)}}function a(X,F){if(!t)return null;for(;F!==null;)n(X,F),F=F.sibling;return null}function s(X){for(var F=new Map;X!==null;)X.key!==null?F.set(X.key,X):F.set(X.index,X),X=X.sibling;return F}function c(X,F){return X=Ni(X,F),X.index=0,X.sibling=null,X}function f(X,F,Q){return X.index=Q,t?(Q=X.alternate,Q!==null?(Q=Q.index,Q<F?(X.flags|=67108866,F):Q):(X.flags|=67108866,F)):(X.flags|=1048576,F)}function S(X){return t&&X.alternate===null&&(X.flags|=67108866),X}function A(X,F,Q,ft){return F===null||F.tag!==6?(F=qc(Q,X.mode,ft),F.return=X,F):(F=c(F,Q),F.return=X,F)}function N(X,F,Q,ft){var Ht=Q.type;return Ht===E?ct(X,F,Q.props.children,ft,Q.key):F!==null&&(F.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===j&&Wh(Ht)===F.type)?(F=c(F,Q.props),js(F,Q),F.return=X,F):(F=Yo(Q.type,Q.key,Q.props,null,X.mode,ft),js(F,Q),F.return=X,F)}function J(X,F,Q,ft){return F===null||F.tag!==4||F.stateNode.containerInfo!==Q.containerInfo||F.stateNode.implementation!==Q.implementation?(F=Yc(Q,X.mode,ft),F.return=X,F):(F=c(F,Q.children||[]),F.return=X,F)}function ct(X,F,Q,ft,Ht){return F===null||F.tag!==7?(F=ja(Q,X.mode,ft,Ht),F.return=X,F):(F=c(F,Q),F.return=X,F)}function mt(X,F,Q){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=qc(""+F,X.mode,Q),F.return=X,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case x:return Q=Yo(F.type,F.key,F.props,null,X.mode,Q),js(Q,F),Q.return=X,Q;case M:return F=Yc(F,X.mode,Q),F.return=X,F;case j:var ft=F._init;return F=ft(F._payload),mt(X,F,Q)}if(dt(F)||lt(F))return F=ja(F,X.mode,Q,null),F.return=X,F;if(typeof F.then=="function")return mt(X,ul(F),Q);if(F.$$typeof===O)return mt(X,Ko(X,F),Q);fl(X,F)}return null}function et(X,F,Q,ft){var Ht=F!==null?F.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ht!==null?null:A(X,F,""+Q,ft);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Ht?N(X,F,Q,ft):null;case M:return Q.key===Ht?J(X,F,Q,ft):null;case j:return Ht=Q._init,Q=Ht(Q._payload),et(X,F,Q,ft)}if(dt(Q)||lt(Q))return Ht!==null?null:ct(X,F,Q,ft,null);if(typeof Q.then=="function")return et(X,F,ul(Q),ft);if(Q.$$typeof===O)return et(X,F,Ko(X,Q),ft);fl(X,Q)}return null}function nt(X,F,Q,ft,Ht){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return X=X.get(Q)||null,A(F,X,""+ft,Ht);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case x:return X=X.get(ft.key===null?Q:ft.key)||null,N(F,X,ft,Ht);case M:return X=X.get(ft.key===null?Q:ft.key)||null,J(F,X,ft,Ht);case j:var ue=ft._init;return ft=ue(ft._payload),nt(X,F,Q,ft,Ht)}if(dt(ft)||lt(ft))return X=X.get(Q)||null,ct(F,X,ft,Ht,null);if(typeof ft.then=="function")return nt(X,F,Q,ul(ft),Ht);if(ft.$$typeof===O)return nt(X,F,Q,Ko(F,ft),Ht);fl(F,ft)}return null}function $t(X,F,Q,ft){for(var Ht=null,ue=null,Vt=F,Kt=F=0,mn=null;Vt!==null&&Kt<Q.length;Kt++){Vt.index>Kt?(mn=Vt,Vt=null):mn=Vt.sibling;var Ee=et(X,Vt,Q[Kt],ft);if(Ee===null){Vt===null&&(Vt=mn);break}t&&Vt&&Ee.alternate===null&&n(X,Vt),F=f(Ee,F,Kt),ue===null?Ht=Ee:ue.sibling=Ee,ue=Ee,Vt=mn}if(Kt===Q.length)return a(X,Vt),Te&&Qa(X,Kt),Ht;if(Vt===null){for(;Kt<Q.length;Kt++)Vt=mt(X,Q[Kt],ft),Vt!==null&&(F=f(Vt,F,Kt),ue===null?Ht=Vt:ue.sibling=Vt,ue=Vt);return Te&&Qa(X,Kt),Ht}for(Vt=s(Vt);Kt<Q.length;Kt++)mn=nt(Vt,X,Kt,Q[Kt],ft),mn!==null&&(t&&mn.alternate!==null&&Vt.delete(mn.key===null?Kt:mn.key),F=f(mn,F,Kt),ue===null?Ht=mn:ue.sibling=mn,ue=mn);return t&&Vt.forEach(function(wa){return n(X,wa)}),Te&&Qa(X,Kt),Ht}function jt(X,F,Q,ft){if(Q==null)throw Error(r(151));for(var Ht=null,ue=null,Vt=F,Kt=F=0,mn=null,Ee=Q.next();Vt!==null&&!Ee.done;Kt++,Ee=Q.next()){Vt.index>Kt?(mn=Vt,Vt=null):mn=Vt.sibling;var wa=et(X,Vt,Ee.value,ft);if(wa===null){Vt===null&&(Vt=mn);break}t&&Vt&&wa.alternate===null&&n(X,Vt),F=f(wa,F,Kt),ue===null?Ht=wa:ue.sibling=wa,ue=wa,Vt=mn}if(Ee.done)return a(X,Vt),Te&&Qa(X,Kt),Ht;if(Vt===null){for(;!Ee.done;Kt++,Ee=Q.next())Ee=mt(X,Ee.value,ft),Ee!==null&&(F=f(Ee,F,Kt),ue===null?Ht=Ee:ue.sibling=Ee,ue=Ee);return Te&&Qa(X,Kt),Ht}for(Vt=s(Vt);!Ee.done;Kt++,Ee=Q.next())Ee=nt(Vt,X,Kt,Ee.value,ft),Ee!==null&&(t&&Ee.alternate!==null&&Vt.delete(Ee.key===null?Kt:Ee.key),F=f(Ee,F,Kt),ue===null?Ht=Ee:ue.sibling=Ee,ue=Ee);return t&&Vt.forEach(function(E_){return n(X,E_)}),Te&&Qa(X,Kt),Ht}function Ne(X,F,Q,ft){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var Ht=Q.key;F!==null;){if(F.key===Ht){if(Ht=Q.type,Ht===E){if(F.tag===7){a(X,F.sibling),ft=c(F,Q.props.children),ft.return=X,X=ft;break t}}else if(F.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===j&&Wh(Ht)===F.type){a(X,F.sibling),ft=c(F,Q.props),js(ft,Q),ft.return=X,X=ft;break t}a(X,F);break}else n(X,F);F=F.sibling}Q.type===E?(ft=ja(Q.props.children,X.mode,ft,Q.key),ft.return=X,X=ft):(ft=Yo(Q.type,Q.key,Q.props,null,X.mode,ft),js(ft,Q),ft.return=X,X=ft)}return S(X);case M:t:{for(Ht=Q.key;F!==null;){if(F.key===Ht)if(F.tag===4&&F.stateNode.containerInfo===Q.containerInfo&&F.stateNode.implementation===Q.implementation){a(X,F.sibling),ft=c(F,Q.children||[]),ft.return=X,X=ft;break t}else{a(X,F);break}else n(X,F);F=F.sibling}ft=Yc(Q,X.mode,ft),ft.return=X,X=ft}return S(X);case j:return Ht=Q._init,Q=Ht(Q._payload),Ne(X,F,Q,ft)}if(dt(Q))return $t(X,F,Q,ft);if(lt(Q)){if(Ht=lt(Q),typeof Ht!="function")throw Error(r(150));return Q=Ht.call(Q),jt(X,F,Q,ft)}if(typeof Q.then=="function")return Ne(X,F,ul(Q),ft);if(Q.$$typeof===O)return Ne(X,F,Ko(X,Q),ft);fl(X,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,F!==null&&F.tag===6?(a(X,F.sibling),ft=c(F,Q),ft.return=X,X=ft):(a(X,F),ft=qc(Q,X.mode,ft),ft.return=X,X=ft),S(X)):a(X,F)}return function(X,F,Q,ft){try{Ys=0;var Ht=Ne(X,F,Q,ft);return Ir=null,Ht}catch(Vt){if(Vt===zs||Vt===$o)throw Vt;var ue=Vn(29,Vt,null,X.mode);return ue.lanes=ft,ue.return=X,ue}finally{}}}var zr=qh(!0),Yh=qh(!1),ti=$(null),_i=null;function pa(t){var n=t.alternate;St(ln,ln.current&1),St(ti,t),_i===null&&(n===null||Nr.current!==null||n.memoizedState!==null)&&(_i=t)}function jh(t){if(t.tag===22){if(St(ln,ln.current),St(ti,t),_i===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(_i=t)}}else ma()}function ma(){St(ln,ln.current),St(ti,ti.current)}function Fi(t){vt(ti),_i===t&&(_i=null),vt(ln)}var ln=$(0);function dl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||gf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function bu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Cu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=qn(),c=fa(s);c.payload=n,a!=null&&(c.callback=a),n=da(t,c,s),n!==null&&(Yn(n,t,s),Hs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=qn(),c=fa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=da(t,c,s),n!==null&&(Yn(n,t,s),Hs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=qn(),s=fa(a);s.tag=2,n!=null&&(s.callback=n),n=da(t,s,a),n!==null&&(Yn(n,t,a),Hs(n,t,a))}};function Zh(t,n,a,s,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Ds(a,s)||!Ds(c,f):!0}function Qh(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Cu.enqueueReplaceState(n,n.state,null)}function ir(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Kh(t){hl(t)}function Jh(t){console.error(t)}function $h(t){hl(t)}function pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function t2(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ru(t,n,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,n)},a}function e2(t){return t=fa(t),t.tag=3,t}function n2(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){t2(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){t2(n,a,s),typeof c!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function Eg(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ps(n,a,c,!0),a=ti.current,a!==null){switch(a.tag){case 13:return _i===null?Ju():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===iu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),tf(t,s,c)),!1;case 22:return a.flags|=65536,s===iu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),tf(t,s,c)),!1}throw Error(r(435,a.tag))}return tf(t,s,c),Ju(),!1}if(Te)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Qc&&(t=Error(r(422),{cause:s}),Os(Qn(t,a)))):(s!==Qc&&(n=Error(r(423),{cause:s}),Os(Qn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Qn(s,a),c=Ru(t.stateNode,s,c),su(t,c),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=Qn(f,a),eo===null?eo=[f]:eo.push(f),je!==4&&(je=2),n===null)return!0;s=Qn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Ru(a.stateNode,s,t),su(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ya===null||!ya.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=e2(c),n2(c,t,a,s),su(a,c),!1}a=a.return}while(a!==null);return!1}var i2=Error(r(461)),hn=!1;function xn(t,n,a,s){n.child=t===null?Yh(n,null,a,s):zr(n,t.child,a,s)}function a2(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var A in s)A!=="ref"&&(S[A]=s[A])}else S=s;return tr(n),s=fu(t,n,a,S,f,c),A=du(),t!==null&&!hn?(hu(t,n,c),Hi(t,n,c)):(Te&&A&&jc(n),n.flags|=1,xn(t,n,s,c),n.child)}function r2(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Wc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,s2(t,n,f,s,c)):(t=Yo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Bu(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ds,a(S,s)&&t.ref===n.ref)return Hi(t,n,c)}return n.flags|=1,t=Ni(f,s),t.ref=n.ref,t.return=n,n.child=t}function s2(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Ds(f,s)&&t.ref===n.ref)if(hn=!1,n.pendingProps=s=f,Bu(t,c))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,Hi(t,n,c)}return wu(t,n,a,s,c)}function o2(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return l2(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jo(n,f!==null?f.cachePool:null),f!==null?sh(n,f):lu(),jh(n);else return n.lanes=n.childLanes=536870912,l2(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Jo(n,f.cachePool),sh(n,f),ma(),n.memoizedState=null):(t!==null&&Jo(n,null),lu(),ma());return xn(t,n,c,a),n.child}function l2(t,n,a,s){var c=nu();return c=c===null?null:{parent:on._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Jo(n,null),lu(),jh(n),t!==null&&Ps(t,n,s,!0),null}function ml(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function wu(t,n,a,s,c){return tr(n),a=fu(t,n,a,s,void 0,c),s=du(),t!==null&&!hn?(hu(t,n,c),Hi(t,n,c)):(Te&&s&&jc(n),n.flags|=1,xn(t,n,a,c),n.child)}function c2(t,n,a,s,c,f){return tr(n),n.updateQueue=null,a=lh(n,s,a,c),oh(t),s=du(),t!==null&&!hn?(hu(t,n,f),Hi(t,n,f)):(Te&&s&&jc(n),n.flags|=1,xn(t,n,a,f),n.child)}function u2(t,n,a,s,c){if(tr(n),n.stateNode===null){var f=Rr,S=a.contextType;typeof S=="object"&&S!==null&&(f=An(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Cu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},au(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?An(S):Rr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(bu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Cu.enqueueReplaceState(f,f.state,null),Vs(n,s,f,c),Gs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,N=ir(a,A);f.props=N;var J=f.context,ct=a.contextType;S=Rr,typeof ct=="object"&&ct!==null&&(S=An(ct));var mt=a.getDerivedStateFromProps;ct=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||J!==S)&&Qh(n,f,s,S),ua=!1;var et=n.memoizedState;f.state=et,Vs(n,s,f,c),Gs(),J=n.memoizedState,A||et!==J||ua?(typeof mt=="function"&&(bu(n,a,mt,s),J=n.memoizedState),(N=ua||Zh(n,a,N,s,et,J,S))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=S,s=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,ru(t,n),S=n.memoizedProps,ct=ir(a,S),f.props=ct,mt=n.pendingProps,et=f.context,J=a.contextType,N=Rr,typeof J=="object"&&J!==null&&(N=An(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||et!==N)&&Qh(n,f,s,N),ua=!1,et=n.memoizedState,f.state=et,Vs(n,s,f,c),Gs();var nt=n.memoizedState;S!==mt||et!==nt||ua||t!==null&&t.dependencies!==null&&Qo(t.dependencies)?(typeof A=="function"&&(bu(n,a,A,s),nt=n.memoizedState),(ct=ua||Zh(n,a,ct,s,et,nt,N)||t!==null&&t.dependencies!==null&&Qo(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,nt,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,nt,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=N,s=ct):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,ml(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=zr(n,t.child,null,c),n.child=zr(n,null,a,c)):xn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Hi(t,n,c),t}function f2(t,n,a,s){return Ns(),n.flags|=256,xn(t,n,a,s),n.child}var Du={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uu(t){return{baseLanes:t,cachePool:Jd()}}function Lu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function d2(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Te){if(c?pa(n):ma(),Te){var A=Ye,N;if(N=A){t:{for(N=A,A=gi;N.nodeType!==8;){if(!A){A=null;break t}if(N=li(N.nextSibling),N===null){A=null;break t}}A=N}A!==null?(n.memoizedState={dehydrated:A,treeContext:Za!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},N=Vn(18,null,null,0),N.stateNode=A,N.return=n,n.child=N,Rn=n,Ye=null,N=!0):N=!1}N||Ja(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return gf(A)?n.lanes=32:n.lanes=536870912,null;Fi(n)}return A=s.children,s=s.fallback,c?(ma(),c=n.mode,A=gl({mode:"hidden",children:A},c),s=ja(s,c,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,c=n.child,c.memoizedState=Uu(a),c.childLanes=Lu(t,S,a),n.memoizedState=Du,s):(pa(n),Nu(n,A))}if(N=t.memoizedState,N!==null&&(A=N.dehydrated,A!==null)){if(f)n.flags&256?(pa(n),n.flags&=-257,n=Ou(t,n,a)):n.memoizedState!==null?(ma(),n.child=t.child,n.flags|=128,n=null):(ma(),c=s.fallback,A=n.mode,s=gl({mode:"visible",children:s.children},A),c=ja(c,A,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,zr(n,t.child,null,a),s=n.child,s.memoizedState=Uu(a),s.childLanes=Lu(t,S,a),n.memoizedState=Du,n=c);else if(pa(n),gf(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var J=S.dgst;S=J,s=Error(r(419)),s.stack="",s.digest=S,Os({value:s,source:null,stack:null}),n=Ou(t,n,a)}else if(hn||Ps(t,n,a,!1),S=(a&t.childLanes)!==0,hn||S){if(S=Ve,S!==null&&(s=a&-a,s=(s&42)!==0?1:He(s),s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==N.retryLane))throw N.retryLane=s,Cr(t,s),Yn(S,t,s),i2;A.data==="$?"||Ju(),n=Ou(t,n,a)}else A.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=N.treeContext,Ye=li(A.nextSibling),Rn=n,Te=!0,Ka=null,gi=!1,t!==null&&(Jn[$n++]=Oi,Jn[$n++]=Pi,Jn[$n++]=Za,Oi=t.id,Pi=t.overflow,Za=n),n=Nu(n,s.children),n.flags|=4096);return n}return c?(ma(),c=s.fallback,A=n.mode,N=t.child,J=N.sibling,s=Ni(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&65011712,J!==null?c=Ni(J,c):(c=ja(c,A,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,A=t.child.memoizedState,A===null?A=Uu(a):(N=A.cachePool,N!==null?(J=on._currentValue,N=N.parent!==J?{parent:J,pool:J}:N):N=Jd(),A={baseLanes:A.baseLanes|a,cachePool:N}),c.memoizedState=A,c.childLanes=Lu(t,S,a),n.memoizedState=Du,s):(pa(n),a=t.child,t=a.sibling,a=Ni(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Nu(t,n){return n=gl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function gl(t,n){return t=Vn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ou(t,n,a){return zr(n,t.child,null,a),t=Nu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function h2(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Jc(t.return,n,a)}function Pu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function p2(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(xn(t,n,s.children,a),s=ln.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&h2(t,a,n);else if(t.tag===19)h2(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(St(ln,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&dl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Pu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&dl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Pu(n,!0,a,null,f);break;case"together":Pu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Sa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ps(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ni(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ni(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Bu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Qo(t)))}function Ag(t,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),ca(n,on,t.memoizedState.cache),Ns();break;case 27:case 5:Zt(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?d2(t,n,a):(pa(n),t=Hi(t,n,a),t!==null?t.sibling:null);pa(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ps(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return p2(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(ln,ln.current),s)break;return null;case 22:case 23:return n.lanes=0,o2(t,n,a);case 24:ca(n,on,t.memoizedState.cache)}return Hi(t,n,a)}function m2(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!Bu(t,a)&&(n.flags&128)===0)return hn=!1,Ag(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,Te&&(n.flags&1048576)!==0&&Wd(n,Zo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Wc(s)?(t=ir(s,t),n.tag=1,n=u2(null,n,s,t,a)):(n.tag=0,n=wu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===D){n.tag=11,n=a2(null,n,s,t,a);break t}else if(c===z){n.tag=14,n=r2(null,n,s,t,a);break t}}throw n=gt(s)||s,Error(r(306,n,""))}}return n;case 0:return wu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ir(s,n.pendingProps),u2(t,n,s,c,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,ru(t,n),Vs(n,s,null,a);var S=n.memoizedState;if(s=S.cache,ca(n,on,s),s!==f.cache&&$c(n,[on],a,!0),Gs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=f2(t,n,s,a);break t}else if(s!==c){c=Qn(Error(r(424)),n),Os(c),n=f2(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ye=li(t.firstChild),Rn=n,Te=!0,Ka=null,gi=!0,a=Yh(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ns(),s===c){n=Hi(t,n,a);break t}xn(t,n,s,a)}n=n.child}return n;case 26:return ml(t,n),t===null?(a=xp(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,t=n.pendingProps,s=Dl(xt.current).createElement(a),s[rn]=n,s[_n]=t,yn(s,a,t),$e(s),n.stateNode=s):n.memoizedState=xp(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Zt(n),t===null&&Te&&(s=n.stateNode=gp(n.type,n.pendingProps,xt.current),Rn=n,gi=!0,c=Ye,Aa(n.type)?(_f=c,Ye=li(s.firstChild)):Ye=c),xn(t,n,n.pendingProps.children,a),ml(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Te&&((c=s=Ye)&&(s=Jg(s,n.type,n.pendingProps,gi),s!==null?(n.stateNode=s,Rn=n,Ye=li(s.firstChild),gi=!1,c=!0):c=!1),c||Ja(n)),Zt(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,hf(c,f)?s=null:S!==null&&hf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=fu(t,n,gg,null,null,a),uo._currentValue=c),ml(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&Te&&((t=a=Ye)&&(a=$g(a,n.pendingProps,gi),a!==null?(n.stateNode=a,Rn=n,Ye=null,t=!0):t=!1),t||Ja(n)),null;case 13:return d2(t,n,a);case 4:return Ot(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=zr(n,null,s,a):xn(t,n,s,a),n.child;case 11:return a2(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ca(n,n.type,s.value),xn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,tr(n),c=An(c),s=s(c),n.flags|=1,xn(t,n,s,a),n.child;case 14:return r2(t,n,n.type,n.pendingProps,a);case 15:return s2(t,n,n.type,n.pendingProps,a);case 19:return p2(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=gl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ni(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return o2(t,n,a);case 24:return tr(n),s=An(on),t===null?(c=nu(),c===null&&(c=Ve,f=tu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},au(n),ca(n,on,c)):((t.lanes&a)!==0&&(ru(t,n),Vs(n,null,null,a),Gs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ca(n,on,s)):(s=f.cache,ca(n,on,s),s!==c.cache&&$c(n,[on],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Gi(t){t.flags|=4}function g2(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ap(n)){if(n=ti.current,n!==null&&((xe&4194048)===xe?_i!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==_i))throw Fs=iu,$d;t.flags|=8192}}function _l(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Lt():536870912,t.lanes|=n,Vr|=n)}function Zs(t,n){if(!Te)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Tg(t,n,a){var s=n.pendingProps;switch(Zc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ii(on),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ls(n)?Gi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jd())),We(n),null;case 26:return a=n.memoizedState,t===null?(Gi(n),a!==null?(We(n),g2(n,a)):(We(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Gi(n),We(n),g2(n,a)):(We(n),n.flags&=-16777217):(t.memoizedProps!==s&&Gi(n),We(n),n.flags&=-16777217),null;case 27:Fe(n),a=xt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}t=K.current,Ls(n)?qd(n):(t=gp(c,s,a),n.stateNode=t,Gi(n))}return We(n),null;case 5:if(Fe(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(t=K.current,Ls(n))qd(n);else{switch(c=Dl(xt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[rn]=n,t[_n]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(yn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Gi(n)}}return We(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=xt.current,Ls(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Rn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||cp(t.nodeValue,a)),t||Ja(n)}else t=Dl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return We(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ls(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else Ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=jd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Fi(n),n):(Fi(n),null)}if(Fi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),_l(n,n.updateQueue),We(n),null;case 4:return re(),t===null&&lf(n.stateNode.containerInfo),We(n),null;case 10:return Ii(n.type),We(n),null;case 19:if(vt(ln),c=n.memoizedState,c===null)return We(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)Zs(c,!1);else{if(je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=dl(t),f!==null){for(n.flags|=128,Zs(c,!1),t=f.updateQueue,n.updateQueue=t,_l(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Xd(a,t),a=a.sibling;return St(ln,ln.current&1|2),n.child}t=t.sibling}c.tail!==null&&ee()>Sl&&(n.flags|=128,s=!0,Zs(c,!1),n.lanes=4194304)}else{if(!s)if(t=dl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,_l(n,t),Zs(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Te)return We(n),null}else 2*ee()-c.renderingStartTime>Sl&&a!==536870912&&(n.flags|=128,s=!0,Zs(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ee(),n.sibling=null,t=ln.current,St(ln,s?t&1|2:t&1),n):(We(n),null);case 22:case 23:return Fi(n),cu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&_l(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&vt(er),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(on),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function bg(t,n){switch(Zc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ii(on),re(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 13:if(Fi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ns()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return vt(ln),null;case 4:return re(),null;case 10:return Ii(n.type),null;case 22:case 23:return Fi(n),cu(),t!==null&&vt(er),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ii(on),null;case 25:return null;default:return null}}function _2(t,n){switch(Zc(n),n.tag){case 3:Ii(on),re();break;case 26:case 27:case 5:Fe(n);break;case 4:re();break;case 13:Fi(n);break;case 19:vt(ln);break;case 10:Ii(n.type);break;case 22:case 23:Fi(n),cu(),t!==null&&vt(er);break;case 24:Ii(on)}}function Qs(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(A){Ie(n,n.return,A)}}function ga(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var S=s.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var N=a,J=A;try{J()}catch(ct){Ie(c,N,ct)}}}s=s.next}while(s!==f)}}catch(ct){Ie(n,n.return,ct)}}function v2(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{rh(n,a)}catch(s){Ie(t,t.return,s)}}}function x2(t,n,a){a.props=ir(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ie(t,n,s)}}function Ks(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ie(t,n,c)}}function vi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ie(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(t,n,c)}else a.current=null}function S2(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ie(t,t.return,c)}}function Iu(t,n,a){try{var s=t.stateNode;Yg(s,t.type,a,n),s[_n]=n}catch(c){Ie(t,t.return,c)}}function y2(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Aa(t.type)||t.tag===4}function zu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||y2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=wl));else if(s!==4&&(s===27&&Aa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Fu(t,n,a),t=t.sibling;t!==null;)Fu(t,n,a),t=t.sibling}function vl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(vl(t,n,a),t=t.sibling;t!==null;)vl(t,n,a),t=t.sibling}function M2(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,s,a),n[rn]=t,n[_n]=a}catch(f){Ie(t,t.return,f)}}var Vi=!1,Qe=!1,Hu=!1,E2=typeof WeakSet=="function"?WeakSet:Set,pn=null;function Cg(t,n){if(t=t.containerInfo,ff=Bl,t=Od(t),zc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,A=-1,N=-1,J=0,ct=0,mt=t,et=null;e:for(;;){for(var nt;mt!==a||c!==0&&mt.nodeType!==3||(A=S+c),mt!==f||s!==0&&mt.nodeType!==3||(N=S+s),mt.nodeType===3&&(S+=mt.nodeValue.length),(nt=mt.firstChild)!==null;)et=mt,mt=nt;for(;;){if(mt===t)break e;if(et===a&&++J===c&&(A=S),et===f&&++ct===s&&(N=S),(nt=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=nt}a=A===-1||N===-1?null:{start:A,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(df={focusedElem:t,selectionRange:a},Bl=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var $t=ir(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate($t,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(jt){Ie(a,a.return,jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)mf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":mf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function A2(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:_a(t,a),s&4&&Qs(5,a);break;case 1:if(_a(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Ie(a,a.return,S)}else{var c=ir(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ie(a,a.return,S)}}s&64&&v2(a),s&512&&Ks(a,a.return);break;case 3:if(_a(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{rh(t,n)}catch(S){Ie(a,a.return,S)}}break;case 27:n===null&&s&4&&M2(a);case 26:case 5:_a(t,a),n===null&&s&4&&S2(a),s&512&&Ks(a,a.return);break;case 12:_a(t,a);break;case 13:_a(t,a),s&4&&C2(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Bg.bind(null,a),t_(t,a))));break;case 22:if(s=a.memoizedState!==null||Vi,!s){n=n!==null&&n.memoizedState!==null||Qe,c=Vi;var f=Qe;Vi=s,(Qe=n)&&!f?va(t,a,(a.subtreeFlags&8772)!==0):_a(t,a),Vi=c,Qe=f}break;case 30:break;default:_a(t,a)}}function T2(t){var n=t.alternate;n!==null&&(t.alternate=null,T2(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ra(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ke=null,On=!1;function ki(t,n,a){for(a=a.child;a!==null;)b2(t,n,a),a=a.sibling}function b2(t,n,a){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:Qe||vi(a,n),ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||vi(a,n);var s=ke,c=On;Aa(a.type)&&(ke=a.stateNode,On=!1),ki(t,n,a),so(a.stateNode),ke=s,On=c;break;case 5:Qe||vi(a,n);case 6:if(s=ke,c=On,ke=null,ki(t,n,a),ke=s,On=c,ke!==null)if(On)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{ke.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:ke!==null&&(On?(t=ke,pp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),mo(t)):pp(ke,a.stateNode));break;case 4:s=ke,c=On,ke=a.stateNode.containerInfo,On=!0,ki(t,n,a),ke=s,On=c;break;case 0:case 11:case 14:case 15:Qe||ga(2,a,n),Qe||ga(4,a,n),ki(t,n,a);break;case 1:Qe||(vi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&x2(a,n,s)),ki(t,n,a);break;case 21:ki(t,n,a);break;case 22:Qe=(s=Qe)||a.memoizedState!==null,ki(t,n,a),Qe=s;break;default:ki(t,n,a)}}function C2(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{mo(t)}catch(a){Ie(n,n.return,a)}}function Rg(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new E2),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new E2),n;default:throw Error(r(435,t.tag))}}function Gu(t,n){var a=Rg(t);n.forEach(function(s){var c=Ig.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function kn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Aa(A.type)){ke=A.stateNode,On=!1;break t}break;case 5:ke=A.stateNode,On=!1;break t;case 3:case 4:ke=A.stateNode.containerInfo,On=!0;break t}A=A.return}if(ke===null)throw Error(r(160));b2(f,S,c),ke=null,On=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)R2(n,t),n=n.sibling}var oi=null;function R2(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kn(n,t),Xn(t),s&4&&(ga(3,t,t.return),Qs(3,t),ga(5,t,t.return));break;case 1:kn(n,t),Xn(t),s&512&&(Qe||a===null||vi(a,a.return)),s&64&&Vi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=oi;if(kn(n,t),Xn(t),s&512&&(Qe||a===null||vi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[aa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,s,a),f[rn]=t,$e(f),s=f;break t;case"link":var S=Mp("link","href",c).get(s+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=Mp("meta","content",c).get(s+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,$e(f),s=f}t.stateNode=s}else Ep(c,t.type,t.stateNode);else t.stateNode=yp(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Ep(c,t.type,t.stateNode):yp(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Iu(t,t.memoizedProps,a.memoizedProps)}break;case 27:kn(n,t),Xn(t),s&512&&(Qe||a===null||vi(a,a.return)),a!==null&&s&4&&Iu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,t),Xn(t),s&512&&(Qe||a===null||vi(a,a.return)),t.flags&32){c=t.stateNode;try{mi(c,"")}catch(nt){Ie(t,t.return,nt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Iu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Hu=!0);break;case 6:if(kn(n,t),Xn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(nt){Ie(t,t.return,nt)}}break;case 3:if(Nl=null,c=oi,oi=Ul(n.containerInfo),kn(n,t),oi=c,Xn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{mo(n.containerInfo)}catch(nt){Ie(t,t.return,nt)}Hu&&(Hu=!1,w2(t));break;case 4:s=oi,oi=Ul(t.stateNode.containerInfo),kn(n,t),Xn(t),oi=s;break;case 12:kn(n,t),Xn(t);break;case 13:kn(n,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yu=ee()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Gu(t,s)));break;case 22:c=t.memoizedState!==null;var N=a!==null&&a.memoizedState!==null,J=Vi,ct=Qe;if(Vi=J||c,Qe=ct||N,kn(n,t),Qe=ct,Vi=J,Xn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||N||Vi||Qe||ar(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){N=a=n;try{if(f=N.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=N.stateNode;var mt=N.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;A.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(nt){Ie(N,N.return,nt)}}}else if(n.tag===6){if(a===null){N=n;try{N.stateNode.nodeValue=c?"":N.memoizedProps}catch(nt){Ie(N,N.return,nt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Gu(t,a))));break;case 19:kn(n,t),Xn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Gu(t,s)));break;case 30:break;case 21:break;default:kn(n,t),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(y2(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=zu(t);vl(t,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(mi(S,""),a.flags&=-33);var A=zu(t);vl(t,A,S);break;case 3:case 4:var N=a.stateNode.containerInfo,J=zu(t);Fu(t,J,N);break;default:throw Error(r(161))}}catch(ct){Ie(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function w2(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;w2(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function _a(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)A2(t,n.alternate,n),n=n.sibling}function ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),ar(n);break;case 1:vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&x2(n,n.return,a),ar(n);break;case 27:so(n.stateNode);case 26:case 5:vi(n,n.return),ar(n);break;case 22:n.memoizedState===null&&ar(n);break;case 30:ar(n);break;default:ar(n)}t=t.sibling}}function va(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:va(c,f,a),Qs(4,f);break;case 1:if(va(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ie(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var A=s.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)ah(N[c],A)}catch(J){Ie(s,s.return,J)}}a&&S&64&&v2(f),Ks(f,f.return);break;case 27:M2(f);case 26:case 5:va(c,f,a),a&&s===null&&S&4&&S2(f),Ks(f,f.return);break;case 12:va(c,f,a);break;case 13:va(c,f,a),a&&S&4&&C2(c,f);break;case 22:f.memoizedState===null&&va(c,f,a),Ks(f,f.return);break;case 30:break;default:va(c,f,a)}n=n.sibling}}function Vu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Bs(a))}function ku(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Bs(t))}function xi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)D2(t,n,a,s),n=n.sibling}function D2(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,s),c&2048&&Qs(9,n);break;case 1:xi(t,n,a,s);break;case 3:xi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Bs(t)));break;case 12:if(c&2048){xi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(N){Ie(n,n.return,N)}}else xi(t,n,a,s);break;case 13:xi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?xi(t,n,a,s):Js(t,n):f._visibility&2?xi(t,n,a,s):(f._visibility|=2,Fr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Vu(S,n);break;case 24:xi(t,n,a,s),c&2048&&ku(n.alternate,n);break;default:xi(t,n,a,s)}}function Fr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,A=a,N=s,J=S.flags;switch(S.tag){case 0:case 11:case 15:Fr(f,S,A,N,c),Qs(8,S);break;case 23:break;case 22:var ct=S.stateNode;S.memoizedState!==null?ct._visibility&2?Fr(f,S,A,N,c):Js(f,S):(ct._visibility|=2,Fr(f,S,A,N,c)),c&&J&2048&&Vu(S.alternate,S);break;case 24:Fr(f,S,A,N,c),c&&J&2048&&ku(S.alternate,S);break;default:Fr(f,S,A,N,c)}n=n.sibling}}function Js(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Js(a,s),c&2048&&Vu(s.alternate,s);break;case 24:Js(a,s),c&2048&&ku(s.alternate,s);break;default:Js(a,s)}n=n.sibling}}var $s=8192;function Hr(t){if(t.subtreeFlags&$s)for(t=t.child;t!==null;)U2(t),t=t.sibling}function U2(t){switch(t.tag){case 26:Hr(t),t.flags&$s&&t.memoizedState!==null&&h_(oi,t.memoizedState,t.memoizedProps);break;case 5:Hr(t);break;case 3:case 4:var n=oi;oi=Ul(t.stateNode.containerInfo),Hr(t),oi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=$s,$s=16777216,Hr(t),$s=n):Hr(t));break;default:Hr(t)}}function L2(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function to(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,O2(s,t)}L2(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)N2(t),t=t.sibling}function N2(t){switch(t.tag){case 0:case 11:case 15:to(t),t.flags&2048&&ga(9,t,t.return);break;case 3:to(t);break;case 12:to(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,xl(t)):to(t);break;default:to(t)}}function xl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,O2(s,t)}L2(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ga(8,n,n.return),xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,xl(n));break;default:xl(n)}t=t.sibling}}function O2(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Bs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=t;pn!==null;){s=pn;var c=s.sibling,f=s.return;if(T2(s),s===a){pn=null;break t}if(c!==null){c.return=f,pn=c;break t}pn=f}}}var wg={getCacheForType:function(t){var n=An(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Dg=typeof WeakMap=="function"?WeakMap:Map,be=0,Ve=null,de=null,xe=0,Ce=0,Wn=null,xa=!1,Gr=!1,Xu=!1,Xi=0,je=0,Sa=0,rr=0,Wu=0,ei=0,Vr=0,eo=null,Pn=null,qu=!1,Yu=0,Sl=1/0,yl=null,ya=null,Sn=0,Ma=null,kr=null,Xr=0,ju=0,Zu=null,P2=null,no=0,Qu=null;function qn(){if((be&2)!==0&&xe!==0)return xe&-xe;if(P.T!==null){var t=Ur;return t!==0?t:af()}return ye()}function B2(){ei===0&&(ei=(xe&536870912)===0||Te?k():536870912);var t=ti.current;return t!==null&&(t.flags|=32),ei}function Yn(t,n,a){(t===Ve&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)&&(Wr(t,0),Ea(t,xe,ei,!1)),pt(t,a),((be&2)===0||t!==Ve)&&(t===Ve&&((be&2)===0&&(rr|=a),je===4&&Ea(t,xe,ei,!1)),Si(t))}function I2(t,n,a){if((be&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||te(t,n),c=s?Ng(t,n):$u(t,n,!0),f=s;do{if(c===0){Gr&&!s&&Ea(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Ug(a)){c=$u(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=t;c=eo;var N=A.current.memoizedState.isDehydrated;if(N&&(Wr(A,S).flags|=256),S=$u(A,S,!1),S!==2){if(Xu&&!N){A.errorRecoveryDisabledLanes|=f,rr|=f,c=4;break t}f=Pn,Pn=c,f!==null&&(Pn===null?Pn=f:Pn.push.apply(Pn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){Wr(t,0),Ea(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ea(s,n,ei,!xa);break t;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Yu+300-ee(),10<c)){if(Ea(s,n,ei,!xa),oe(s,0,!0)!==0)break t;s.timeoutHandle=dp(z2.bind(null,s,a,Pn,yl,qu,n,ei,rr,Vr,xa,f,2,-0,0),c);break t}z2(s,a,Pn,yl,qu,n,ei,rr,Vr,xa,f,0,-0,0)}}break}while(!0);Si(t)}function z2(t,n,a,s,c,f,S,A,N,J,ct,mt,et,nt){if(t.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(co={stylesheets:null,count:0,unsuspend:d_},U2(n),mt=p_(),mt!==null)){t.cancelPendingCommit=mt(W2.bind(null,t,n,f,a,s,c,S,A,N,ct,1,et,nt)),Ea(t,f,S,!J);return}W2(t,n,f,a,s,c,S,A,N)}function Ug(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Gn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ea(t,n,a,s){n&=~Wu,n&=~rr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Rt(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&Nt(t,a,n)}function Ml(){return(be&6)===0?(io(0),!1):!0}function Ku(){if(de!==null){if(Ce===0)var t=de.return;else t=de,Bi=$a=null,pu(t),Ir=null,Ys=0,t=de;for(;t!==null;)_2(t.alternate,t),t=t.return;de=null}}function Wr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Zg(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ku(),Ve=t,de=a=Ni(t.current,null),xe=n,Ce=0,Wn=null,xa=!1,Gr=te(t,n),Xu=!1,Vr=ei=Wu=rr=Sa=je=0,Pn=eo=null,qu=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Rt(s),f=1<<c;n|=t[c],s&=~f}return Xi=n,Xo(),a}function F2(t,n){le=null,P.H=cl,n===zs||n===$o?(n=nh(),Ce=3):n===$d?(n=nh(),Ce=4):Ce=n===i2?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,de===null&&(je=1,pl(t,Qn(n,t.current)))}function H2(){var t=P.H;return P.H=cl,t===null?cl:t}function G2(){var t=P.A;return P.A=wg,t}function Ju(){je=4,xa||(xe&4194048)!==xe&&ti.current!==null||(Gr=!0),(Sa&134217727)===0&&(rr&134217727)===0||Ve===null||Ea(Ve,xe,ei,!1)}function $u(t,n,a){var s=be;be|=2;var c=H2(),f=G2();(Ve!==t||xe!==n)&&(yl=null,Wr(t,n)),n=!1;var S=je;t:do try{if(Ce!==0&&de!==null){var A=de,N=Wn;switch(Ce){case 8:Ku(),S=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var J=Ce;if(Ce=0,Wn=null,qr(t,A,N,J),a&&Gr){S=0;break t}break;default:J=Ce,Ce=0,Wn=null,qr(t,A,N,J)}}Lg(),S=je;break}catch(ct){F2(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Bi=$a=null,be=s,P.H=c,P.A=f,de===null&&(Ve=null,xe=0,Xo()),S}function Lg(){for(;de!==null;)V2(de)}function Ng(t,n){var a=be;be|=2;var s=H2(),c=G2();Ve!==t||xe!==n?(yl=null,Sl=ee()+500,Wr(t,n)):Gr=te(t,n);t:do try{if(Ce!==0&&de!==null){n=de;var f=Wn;e:switch(Ce){case 1:Ce=0,Wn=null,qr(t,n,f,1);break;case 2:case 9:if(th(f)){Ce=0,Wn=null,k2(n);break}n=function(){Ce!==2&&Ce!==9||Ve!==t||(Ce=7),Si(t)},f.then(n,n);break t;case 3:Ce=7;break t;case 4:Ce=5;break t;case 7:th(f)?(Ce=0,Wn=null,k2(n)):(Ce=0,Wn=null,qr(t,n,f,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var A=de;if(!S||Ap(S)){Ce=0,Wn=null;var N=A.sibling;if(N!==null)de=N;else{var J=A.return;J!==null?(de=J,El(J)):de=null}break e}}Ce=0,Wn=null,qr(t,n,f,5);break;case 6:Ce=0,Wn=null,qr(t,n,f,6);break;case 8:Ku(),je=6;break t;default:throw Error(r(462))}}Og();break}catch(ct){F2(t,ct)}while(!0);return Bi=$a=null,P.H=s,P.A=c,be=a,de!==null?0:(Ve=null,xe=0,Xo(),je)}function Og(){for(;de!==null&&!Dn();)V2(de)}function V2(t){var n=m2(t.alternate,t,Xi);t.memoizedProps=t.pendingProps,n===null?El(t):de=n}function k2(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=c2(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=c2(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:pu(n);default:_2(a,n),n=de=Xd(n,Xi),n=m2(a,n,Xi)}t.memoizedProps=t.pendingProps,n===null?El(t):de=n}function qr(t,n,a,s){Bi=$a=null,pu(n),Ir=null,Ys=0;var c=n.return;try{if(Eg(t,c,n,a,xe)){je=1,pl(t,Qn(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;je=1,pl(t,Qn(a,t.current)),de=null;return}n.flags&32768?(Te||s===1?t=!0:Gr||(xe&536870912)!==0?t=!1:(xa=t=!0,(s===2||s===9||s===3||s===6)&&(s=ti.current,s!==null&&s.tag===13&&(s.flags|=16384))),X2(n,t)):El(n)}function El(t){var n=t;do{if((n.flags&32768)!==0){X2(n,xa);return}t=n.return;var a=Tg(n.alternate,n,Xi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);je===0&&(je=5)}function X2(t,n){do{var a=bg(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);je=6,de=null}function W2(t,n,a,s,c,f,S,A,N){t.cancelPendingCommit=null;do Al();while(Sn!==0);if((be&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=kc,Bt(t,a,f,S,A,N),t===Ve&&(de=Ve=null,xe=0),kr=n,Ma=t,Xr=a,ju=f,Zu=c,P2=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,zg(L,function(){return Q2(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,c=Z.p,Z.p=2,S=be,be|=4;try{Cg(t,n,a)}finally{be=S,Z.p=c,P.T=s}}Sn=1,q2(),Y2(),j2()}}function q2(){if(Sn===1){Sn=0;var t=Ma,n=kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=Z.p;Z.p=2;var c=be;be|=4;try{R2(n,t);var f=df,S=Od(t.containerInfo),A=f.focusedElem,N=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&Nd(A.ownerDocument.documentElement,A)){if(N!==null&&zc(A)){var J=N.start,ct=N.end;if(ct===void 0&&(ct=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(ct,A.value.length);else{var mt=A.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var nt=et.getSelection(),$t=A.textContent.length,jt=Math.min(N.start,$t),Ne=N.end===void 0?jt:Math.min(N.end,$t);!nt.extend&&jt>Ne&&(S=Ne,Ne=jt,jt=S);var X=Ld(A,jt),F=Ld(A,Ne);if(X&&F&&(nt.rangeCount!==1||nt.anchorNode!==X.node||nt.anchorOffset!==X.offset||nt.focusNode!==F.node||nt.focusOffset!==F.offset)){var Q=mt.createRange();Q.setStart(X.node,X.offset),nt.removeAllRanges(),jt>Ne?(nt.addRange(Q),nt.extend(F.node,F.offset)):(Q.setEnd(F.node,F.offset),nt.addRange(Q))}}}}for(mt=[],nt=A;nt=nt.parentNode;)nt.nodeType===1&&mt.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<mt.length;A++){var ft=mt[A];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}Bl=!!ff,df=ff=null}finally{be=c,Z.p=s,P.T=a}}t.current=n,Sn=2}}function Y2(){if(Sn===2){Sn=0;var t=Ma,n=kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=Z.p;Z.p=2;var c=be;be|=4;try{A2(t,n.alternate,n)}finally{be=c,Z.p=s,P.T=a}}Sn=3}}function j2(){if(Sn===4||Sn===3){Sn=0,pe();var t=Ma,n=kr,a=Xr,s=P2;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,kr=Ma=null,Z2(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ya=null),Je(a),n=n.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,c=Z.p,Z.p=2,P.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var A=s[S];f(A.value,{componentStack:A.stack})}}finally{P.T=n,Z.p=c}}(Xr&3)!==0&&Al(),Si(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===Qu?no++:(no=0,Qu=t):no=0,io(0)}}function Z2(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Bs(n)))}function Al(t){return q2(),Y2(),j2(),Q2()}function Q2(){if(Sn!==5)return!1;var t=Ma,n=ju;ju=0;var a=Je(Xr),s=P.T,c=Z.p;try{Z.p=32>a?32:a,P.T=null,a=Zu,Zu=null;var f=Ma,S=Xr;if(Sn=0,kr=Ma=null,Xr=0,(be&6)!==0)throw Error(r(331));var A=be;if(be|=4,N2(f.current),D2(f,f.current,S,a),be=A,io(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{Z.p=c,P.T=s,Z2(t,n)}}function K2(t,n,a){n=Qn(a,n),n=Ru(t.stateNode,n,2),t=da(t,n,2),t!==null&&(pt(t,2),Si(t))}function Ie(t,n,a){if(t.tag===3)K2(t,t,a);else for(;n!==null;){if(n.tag===3){K2(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ya===null||!ya.has(s))){t=Qn(a,t),a=e2(2),s=da(n,a,2),s!==null&&(n2(a,s,n,t),pt(s,2),Si(s));break}}n=n.return}}function tf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Dg;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Xu=!0,c.add(a),t=Pg.bind(null,t,n,a),n.then(t,t))}function Pg(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(xe&a)===a&&(je===4||je===3&&(xe&62914560)===xe&&300>ee()-Yu?(be&2)===0&&Wr(t,0):Wu|=a,Vr===xe&&(Vr=0)),Si(t)}function J2(t,n){n===0&&(n=Lt()),t=Cr(t,n),t!==null&&(pt(t,n),Si(t))}function Bg(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),J2(t,a)}function Ig(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),J2(t,a)}function zg(t,n){return ce(t,n)}var Tl=null,Yr=null,ef=!1,bl=!1,nf=!1,sr=0;function Si(t){t!==Yr&&t.next===null&&(Yr===null?Tl=Yr=t:Yr=Yr.next=t),bl=!0,ef||(ef=!0,Hg())}function io(t,n){if(!nf&&bl){nf=!0;do for(var a=!1,s=Tl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-Rt(42|t)+1)-1,f&=c&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,np(s,f))}else f=xe,f=oe(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||te(s,f)||(a=!0,np(s,f));s=s.next}while(a);nf=!1}}function Fg(){$2()}function $2(){bl=ef=!1;var t=0;sr!==0&&(jg()&&(t=sr),sr=0);for(var n=ee(),a=null,s=Tl;s!==null;){var c=s.next,f=tp(s,n);f===0?(s.next=null,a===null?Tl=c:a.next=c,c===null&&(Yr=a)):(a=s,(t!==0||(f&3)!==0)&&(bl=!0)),s=c}io(t)}function tp(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Rt(f),A=1<<S,N=c[S];N===-1?((A&a)===0||(A&s)!==0)&&(c[S]=De(A,n)):N<=n&&(t.expiredLanes|=A),f&=~A}if(n=Ve,a=xe,a=oe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&I(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||te(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&I(s),Je(a)){case 2:case 8:a=Gt;break;case 32:a=L;break;case 268435456:a=tt;break;default:a=L}return s=ep.bind(null,t),a=ce(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&I(s),t.callbackPriority=2,t.callbackNode=null,2}function ep(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Al()&&t.callbackNode!==a)return null;var s=xe;return s=oe(t,t===Ve?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(I2(t,s,n),tp(t,ee()),t.callbackNode!=null&&t.callbackNode===a?ep.bind(null,t):null)}function np(t,n){if(Al())return null;I2(t,n,!0)}function Hg(){Qg(function(){(be&6)!==0?ce(we,Fg):$2()})}function af(){return sr===0&&(sr=k()),sr}function ip(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Io(""+t)}function ap(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Gg(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=ip((c[_n]||null).action),S=s.submitter;S&&(n=(n=S[_n]||null)?ip(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new Go("action","action",null,s,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(sr!==0){var N=S?ap(c,S):new FormData(c);Eu(a,{pending:!0,data:N,method:c.method,action:f},null,N)}}else typeof f=="function"&&(A.preventDefault(),N=S?ap(c,S):new FormData(c),Eu(a,{pending:!0,data:N,method:c.method,action:f},f,N))},currentTarget:c}]})}}for(var rf=0;rf<Vc.length;rf++){var sf=Vc[rf],Vg=sf.toLowerCase(),kg=sf[0].toUpperCase()+sf.slice(1);si(Vg,"on"+kg)}si(Id,"onAnimationEnd"),si(zd,"onAnimationIteration"),si(Fd,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(sg,"onTransitionRun"),si(og,"onTransitionStart"),si(lg,"onTransitionCancel"),si(Hd,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wi("onBeforeInput",["compositionend","keypress","textInput","paste"]),wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ao));function rp(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var A=s[S],N=A.instance,J=A.currentTarget;if(A=A.listener,N!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=J;try{f(c)}catch(ct){hl(ct)}c.currentTarget=null,f=N}else for(S=0;S<s.length;S++){if(A=s[S],N=A.instance,J=A.currentTarget,A=A.listener,N!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=J;try{f(c)}catch(ct){hl(ct)}c.currentTarget=null,f=N}}}}function he(t,n){var a=n[Va];a===void 0&&(a=n[Va]=new Set);var s=t+"__bubble";a.has(s)||(sp(n,t,2,!1),a.add(s))}function of(t,n,a){var s=0;n&&(s|=4),sp(a,t,s,n)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function lf(t){if(!t[Cl]){t[Cl]=!0,Po.forEach(function(a){a!=="selectionchange"&&(Xg.has(a)||of(a,!1,t),of(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Cl]||(n[Cl]=!0,of("selectionchange",!1,n))}}function sp(t,n,a,s){switch(Dp(n)){case 2:var c=__;break;case 8:c=v_;break;default:c=Mf}a=c.bind(null,n,a,t),c=void 0,!wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function cf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var A=s.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=s.return;S!==null;){var N=S.tag;if((N===3||N===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=Ci(A),S===null)return;if(N=S.tag,N===5||N===6||N===26||N===27){s=f=S;continue t}A=A.parentNode}}s=s.return}hd(function(){var J=f,ct=Cc(a),mt=[];t:{var et=Gd.get(t);if(et!==void 0){var nt=Go,$t=t;switch(t){case"keypress":if(Fo(a)===0)break t;case"keydown":case"keyup":nt=zm;break;case"focusin":$t="focus",nt=Nc;break;case"focusout":$t="blur",nt=Nc;break;case"beforeblur":case"afterblur":nt=Nc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=bm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=Gm;break;case Id:case zd:case Fd:nt=wm;break;case Hd:nt=km;break;case"scroll":case"scrollend":nt=Am;break;case"wheel":nt=Wm;break;case"copy":case"cut":case"paste":nt=Um;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=vd;break;case"toggle":case"beforetoggle":nt=Ym}var jt=(n&4)!==0,Ne=!jt&&(t==="scroll"||t==="scrollend"),X=jt?et!==null?et+"Capture":null:et;jt=[];for(var F=J,Q;F!==null;){var ft=F;if(Q=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||Q===null||X===null||(ft=Es(F,X),ft!=null&&jt.push(ro(F,ft,Q))),Ne)break;F=F.return}0<jt.length&&(et=new nt(et,$t,null,a,ct),mt.push({event:et,listeners:jt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",nt=t==="mouseout"||t==="pointerout",et&&a!==bc&&($t=a.relatedTarget||a.fromElement)&&(Ci($t)||$t[Un]))break t;if((nt||et)&&(et=ct.window===ct?ct:(et=ct.ownerDocument)?et.defaultView||et.parentWindow:window,nt?($t=a.relatedTarget||a.toElement,nt=J,$t=$t?Ci($t):null,$t!==null&&(Ne=u($t),jt=$t.tag,$t!==Ne||jt!==5&&jt!==27&&jt!==6)&&($t=null)):(nt=null,$t=J),nt!==$t)){if(jt=gd,ft="onMouseLeave",X="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(jt=vd,ft="onPointerLeave",X="onPointerEnter",F="pointer"),Ne=nt==null?et:Xa(nt),Q=$t==null?et:Xa($t),et=new jt(ft,F+"leave",nt,a,ct),et.target=Ne,et.relatedTarget=Q,ft=null,Ci(ct)===J&&(jt=new jt(X,F+"enter",$t,a,ct),jt.target=Q,jt.relatedTarget=Ne,ft=jt),Ne=ft,nt&&$t)e:{for(jt=nt,X=$t,F=0,Q=jt;Q;Q=jr(Q))F++;for(Q=0,ft=X;ft;ft=jr(ft))Q++;for(;0<F-Q;)jt=jr(jt),F--;for(;0<Q-F;)X=jr(X),Q--;for(;F--;){if(jt===X||X!==null&&jt===X.alternate)break e;jt=jr(jt),X=jr(X)}jt=null}else jt=null;nt!==null&&op(mt,et,nt,jt,!1),$t!==null&&Ne!==null&&op(mt,Ne,$t,jt,!0)}}t:{if(et=J?Xa(J):window,nt=et.nodeName&&et.nodeName.toLowerCase(),nt==="select"||nt==="input"&&et.type==="file")var Ht=bd;else if(Ad(et))if(Cd)Ht=ig;else{Ht=eg;var ue=tg}else nt=et.nodeName,!nt||nt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&Tc(J.elementType)&&(Ht=bd):Ht=ng;if(Ht&&(Ht=Ht(t,J))){Td(mt,Ht,a,ct);break t}ue&&ue(t,et,J),t==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&En(et,"number",et.value)}switch(ue=J?Xa(J):window,t){case"focusin":(Ad(ue)||ue.contentEditable==="true")&&(Ar=ue,Fc=J,Us=null);break;case"focusout":Us=Fc=Ar=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,Pd(mt,a,ct);break;case"selectionchange":if(rg)break;case"keydown":case"keyup":Pd(mt,a,ct)}var Vt;if(Pc)t:{switch(t){case"compositionstart":var Kt="onCompositionStart";break t;case"compositionend":Kt="onCompositionEnd";break t;case"compositionupdate":Kt="onCompositionUpdate";break t}Kt=void 0}else Er?Md(t,a)&&(Kt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Kt="onCompositionStart");Kt&&(xd&&a.locale!=="ko"&&(Er||Kt!=="onCompositionStart"?Kt==="onCompositionEnd"&&Er&&(Vt=pd()):(la=ct,Dc="value"in la?la.value:la.textContent,Er=!0)),ue=Rl(J,Kt),0<ue.length&&(Kt=new _d(Kt,t,null,a,ct),mt.push({event:Kt,listeners:ue}),Vt?Kt.data=Vt:(Vt=Ed(a),Vt!==null&&(Kt.data=Vt)))),(Vt=Zm?Qm(t,a):Km(t,a))&&(Kt=Rl(J,"onBeforeInput"),0<Kt.length&&(ue=new _d("onBeforeInput","beforeinput",null,a,ct),mt.push({event:ue,listeners:Kt}),ue.data=Vt)),Gg(mt,t,J,a,ct)}rp(mt,n)})}function ro(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Rl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Es(t,a),c!=null&&s.unshift(ro(t,c,f)),c=Es(t,n),c!=null&&s.push(ro(t,c,f))),t.tag===3)return s;t=t.return}return[]}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function op(t,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var A=a,N=A.alternate,J=A.stateNode;if(A=A.tag,N!==null&&N===s)break;A!==5&&A!==26&&A!==27||J===null||(N=J,c?(J=Es(a,f),J!=null&&S.unshift(ro(a,J,N))):c||(J=Es(a,f),J!=null&&S.push(ro(a,J,N)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var Wg=/\r\n?/g,qg=/\u0000|\uFFFD/g;function lp(t){return(typeof t=="string"?t:""+t).replace(Wg,`
`).replace(qg,"")}function cp(t,n){return n=lp(n),lp(t)===n}function wl(){}function Le(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||mi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&mi(t,""+s);break;case"className":wt(t,"class",s);break;case"tabIndex":wt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(t,a,s);break;case"style":fd(t,s,f);break;case"data":if(n!=="object"){wt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Io(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Le(t,n,"name",c.name,c,null),Le(t,n,"formEncType",c.formEncType,c,null),Le(t,n,"formMethod",c.formMethod,c,null),Le(t,n,"formTarget",c.formTarget,c,null)):(Le(t,n,"encType",c.encType,c,null),Le(t,n,"method",c.method,c,null),Le(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Io(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=wl);break;case"onScroll":s!=null&&he("scroll",t);break;case"onScrollEnd":s!=null&&he("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Io(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":he("beforetoggle",t),he("toggle",t),Et(t,"popover",s);break;case"xlinkActuate":Dt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Dt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Dt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Dt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Dt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Dt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Et(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mm.get(a)||a,Et(t,a,s))}}function uf(t,n,a,s,c,f){switch(a){case"style":fd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?mi(t,s):(typeof s=="number"||typeof s=="bigint")&&mi(t,""+s);break;case"onScroll":s!=null&&he("scroll",t);break;case"onScrollEnd":s!=null&&he("scrollend",t);break;case"onClick":s!=null&&(t.onclick=wl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Et(t,a,s)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",t),he("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,f,S,a,null)}}c&&Le(t,n,"srcSet",a.srcSet,a,null),s&&Le(t,n,"src",a.src,a,null);return;case"input":he("invalid",t);var A=f=S=c=null,N=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":c=ct;break;case"type":S=ct;break;case"checked":N=ct;break;case"defaultChecked":J=ct;break;case"value":f=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Le(t,n,s,ct,a,null)}}Be(t,f,A,N,J,S,c,!1),qe(t);return;case"select":he("invalid",t),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":s=A;default:Le(t,n,c,A,a,null)}n=f,a=S,t.multiple=!!s,n!=null?sn(t,!!s,n,!1):a!=null&&sn(t,!!s,a,!0);return;case"textarea":he("invalid",t),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":s=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Le(t,n,S,A,a,null)}vn(t,s,c,f),qe(t);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Le(t,n,N,s,a,null)}return;case"dialog":he("beforetoggle",t),he("toggle",t),he("cancel",t),he("close",t);break;case"iframe":case"object":he("load",t);break;case"video":case"audio":for(s=0;s<ao.length;s++)he(ao[s],t);break;case"image":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"embed":case"source":case"link":he("error",t),he("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,J,s,a,null)}return;default:if(Tc(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&uf(t,n,ct,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Le(t,n,A,s,a,null))}function Yg(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,A=null,N=null,J=null,ct=null;for(nt in a){var mt=a[nt];if(a.hasOwnProperty(nt)&&mt!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":N=mt;default:s.hasOwnProperty(nt)||Le(t,n,nt,null,s,mt)}}for(var et in s){var nt=s[et];if(mt=a[et],s.hasOwnProperty(et)&&(nt!=null||mt!=null))switch(et){case"type":f=nt;break;case"name":c=nt;break;case"checked":J=nt;break;case"defaultChecked":ct=nt;break;case"value":S=nt;break;case"defaultValue":A=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:nt!==mt&&Le(t,n,et,nt,s,mt)}}Di(t,S,A,N,J,ct,f,c);return;case"select":nt=S=A=et=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":nt=N;default:s.hasOwnProperty(f)||Le(t,n,f,null,s,N)}for(c in s)if(f=s[c],N=a[c],s.hasOwnProperty(c)&&(f!=null||N!=null))switch(c){case"value":et=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==N&&Le(t,n,c,f,s,N)}n=A,a=S,s=nt,et!=null?sn(t,!!a,et,!1):!!s!=!!a&&(n!=null?sn(t,!!a,n,!0):sn(t,!!a,a?[]:"",!1));return;case"textarea":nt=et=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Le(t,n,A,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":et=c;break;case"defaultValue":nt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Le(t,n,S,c,s,f)}dn(t,et,nt);return;case"option":for(var $t in a)if(et=a[$t],a.hasOwnProperty($t)&&et!=null&&!s.hasOwnProperty($t))switch($t){case"selected":t.selected=!1;break;default:Le(t,n,$t,null,s,et)}for(N in s)if(et=s[N],nt=a[N],s.hasOwnProperty(N)&&et!==nt&&(et!=null||nt!=null))switch(N){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Le(t,n,N,et,s,nt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)et=a[jt],a.hasOwnProperty(jt)&&et!=null&&!s.hasOwnProperty(jt)&&Le(t,n,jt,null,s,et);for(J in s)if(et=s[J],nt=a[J],s.hasOwnProperty(J)&&et!==nt&&(et!=null||nt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Le(t,n,J,et,s,nt)}return;default:if(Tc(n)){for(var Ne in a)et=a[Ne],a.hasOwnProperty(Ne)&&et!==void 0&&!s.hasOwnProperty(Ne)&&uf(t,n,Ne,void 0,s,et);for(ct in s)et=s[ct],nt=a[ct],!s.hasOwnProperty(ct)||et===nt||et===void 0&&nt===void 0||uf(t,n,ct,et,s,nt);return}}for(var X in a)et=a[X],a.hasOwnProperty(X)&&et!=null&&!s.hasOwnProperty(X)&&Le(t,n,X,null,s,et);for(mt in s)et=s[mt],nt=a[mt],!s.hasOwnProperty(mt)||et===nt||et==null&&nt==null||Le(t,n,mt,et,s,nt)}var ff=null,df=null;function Dl(t){return t.nodeType===9?t:t.ownerDocument}function up(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fp(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function hf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var pf=null;function jg(){var t=window.event;return t&&t.type==="popstate"?t===pf?!1:(pf=t,!0):(pf=null,!1)}var dp=typeof setTimeout=="function"?setTimeout:void 0,Zg=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,Qg=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(t){return hp.resolve(null).then(t).catch(Kg)}:dp;function Kg(t){setTimeout(function(){throw t})}function Aa(t){return t==="head"}function pp(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var S=t.ownerDocument;if(a&1&&so(S.documentElement),a&2&&so(S.body),a&4)for(a=S.head,so(a),S=a.firstChild;S;){var A=S.nextSibling,N=S.nodeName;S[aa]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=A}}if(c===0){t.removeChild(f),mo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);mo(n)}function mf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":mf(a),ra(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Jg(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[aa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function $g(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function gf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function t_(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var _f=null;function mp(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function gp(t,n,a){switch(n=Dl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function so(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ra(t)}var ni=new Map,_p=new Set;function Ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Wi=Z.d;Z.d={f:e_,r:n_,D:i_,C:a_,L:r_,m:s_,X:l_,S:o_,M:c_};function e_(){var t=Wi.f(),n=Ml();return t||n}function n_(t){var n=Ri(t);n!==null&&n.tag===5&&n.type==="form"?Ih(n):Wi.r(t)}var Zr=typeof document>"u"?null:document;function vp(t,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var c=Ge(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),_p.has(c)||(_p.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),yn(n,"link",t),$e(n),s.head.appendChild(n)))}}function i_(t){Wi.D(t),vp("dns-prefetch",t,null)}function a_(t,n){Wi.C(t,n),vp("preconnect",t,n)}function r_(t,n,a){Wi.L(t,n,a);var s=Zr;if(s&&t&&n){var c='link[rel="preload"][as="'+Ge(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ge(a.imageSizes)+'"]')):c+='[href="'+Ge(t)+'"]';var f=c;switch(n){case"style":f=Qr(t);break;case"script":f=Kr(t)}ni.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ni.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(oo(f))||n==="script"&&s.querySelector(lo(f))||(n=s.createElement("link"),yn(n,"link",t),$e(n),s.head.appendChild(n)))}}function s_(t,n){Wi.m(t,n);var a=Zr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ge(s)+'"][href="'+Ge(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Kr(t)}if(!ni.has(f)&&(t=g({rel:"modulepreload",href:t},n),ni.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(lo(f)))return}s=a.createElement("link"),yn(s,"link",t),$e(s),a.head.appendChild(s)}}}function o_(t,n,a){Wi.S(t,n,a);var s=Zr;if(s&&t){var c=sa(s).hoistableStyles,f=Qr(t);n=n||"default";var S=c.get(f);if(!S){var A={loading:0,preload:null};if(S=s.querySelector(oo(f)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ni.get(f))&&vf(t,a);var N=S=s.createElement("link");$e(N),yn(N,"link",t),N._p=new Promise(function(J,ct){N.onload=J,N.onerror=ct}),N.addEventListener("load",function(){A.loading|=1}),N.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ll(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(f,S)}}}function l_(t,n){Wi.X(t,n);var a=Zr;if(a&&t){var s=sa(a).hoistableScripts,c=Kr(t),f=s.get(c);f||(f=a.querySelector(lo(c)),f||(t=g({src:t,async:!0},n),(n=ni.get(c))&&xf(t,n),f=a.createElement("script"),$e(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function c_(t,n){Wi.M(t,n);var a=Zr;if(a&&t){var s=sa(a).hoistableScripts,c=Kr(t),f=s.get(c);f||(f=a.querySelector(lo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ni.get(c))&&xf(t,n),f=a.createElement("script"),$e(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function xp(t,n,a,s){var c=(c=xt.current)?Ul(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Qr(a.href),a=sa(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Qr(a.href);var f=sa(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(oo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ni.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(t,a),f||u_(c,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=sa(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Qr(t){return'href="'+Ge(t)+'"'}function oo(t){return'link[rel="stylesheet"]['+t+"]"}function Sp(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function u_(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),$e(n),t.head.appendChild(n))}function Kr(t){return'[src="'+Ge(t)+'"]'}function lo(t){return"script[async]"+t}function yp(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ge(a.href)+'"]');if(s)return n.instance=s,$e(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),$e(s),yn(s,"style",c),Ll(s,a.precedence,t),n.instance=s;case"stylesheet":c=Qr(a.href);var f=t.querySelector(oo(c));if(f)return n.state.loading|=4,n.instance=f,$e(f),f;s=Sp(a),(c=ni.get(c))&&vf(s,c),f=(t.ownerDocument||t).createElement("link"),$e(f);var S=f;return S._p=new Promise(function(A,N){S.onload=A,S.onerror=N}),yn(f,"link",s),n.state.loading|=4,Ll(f,a.precedence,t),n.instance=f;case"script":return f=Kr(a.src),(c=t.querySelector(lo(f)))?(n.instance=c,$e(c),c):(s=a,(c=ni.get(f))&&(s=g({},a),xf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),$e(c),yn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ll(s,a.precedence,t));return n.instance}function Ll(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var A=s[S];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Nl=null;function Mp(t,n,a){if(Nl===null){var s=new Map,c=Nl=new Map;c.set(a,s)}else c=Nl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[aa]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var A=s.get(S);A?A.push(f):s.set(S,[f])}}return s}function Ep(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function f_(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ap(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var co=null;function d_(){}function h_(t,n,a){if(co===null)throw Error(r(475));var s=co;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Qr(a.href),f=t.querySelector(oo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Ol.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,$e(f);return}f=t.ownerDocument||t,a=Sp(a),(c=ni.get(c))&&vf(a,c),f=f.createElement("link"),$e(f);var S=f;S._p=new Promise(function(A,N){S.onload=A,S.onerror=N}),yn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Ol.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function p_(){if(co===null)throw Error(r(475));var t=co;return t.stylesheets&&t.count===0&&Sf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Sf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ol(){if(this.count--,this.count===0){if(this.stylesheets)Sf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pl=null;function Sf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pl=new Map,n.forEach(m_,t),Pl=null,Ol.call(t))}function m_(t,n){if(!(n.state.loading&4)){var a=Pl.get(t);if(a)var s=a.get(null);else{a=new Map,Pl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=Ol.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var uo={$$typeof:O,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function g_(t,n,a,s,c,f,S,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Tp(t,n,a,s,c,f,S,A,N,J,ct,mt){return t=new g_(t,n,a,S,A,N,J,mt),n=1,f===!0&&(n|=24),f=Vn(3,null,null,n),t.current=f,f.stateNode=t,n=tu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},au(f),t}function bp(t){return t?(t=Rr,t):Rr}function Cp(t,n,a,s,c,f){c=bp(c),s.context===null?s.context=c:s.pendingContext=c,s=fa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=da(t,s,n),a!==null&&(Yn(a,t,n),Hs(a,t,n))}function Rp(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function yf(t,n){Rp(t,n),(t=t.alternate)&&Rp(t,n)}function wp(t){if(t.tag===13){var n=Cr(t,67108864);n!==null&&Yn(n,t,67108864),yf(t,67108864)}}var Bl=!0;function __(t,n,a,s){var c=P.T;P.T=null;var f=Z.p;try{Z.p=2,Mf(t,n,a,s)}finally{Z.p=f,P.T=c}}function v_(t,n,a,s){var c=P.T;P.T=null;var f=Z.p;try{Z.p=8,Mf(t,n,a,s)}finally{Z.p=f,P.T=c}}function Mf(t,n,a,s){if(Bl){var c=Ef(s);if(c===null)cf(t,n,s,Il,a),Up(t,s);else if(S_(c,t,n,a,s))s.stopPropagation();else if(Up(t,s),n&4&&-1<x_.indexOf(t)){for(;c!==null;){var f=Ri(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Pt(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var N=1<<31-Rt(S);A.entanglements[1]|=N,S&=~N}Si(f),(be&6)===0&&(Sl=ee()+500,io(0))}}break;case 13:A=Cr(f,2),A!==null&&Yn(A,f,2),Ml(),yf(f,2)}if(f=Ef(s),f===null&&cf(t,n,s,Il,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else cf(t,n,s,null,a)}}function Ef(t){return t=Cc(t),Af(t)}var Il=null;function Af(t){if(Il=null,t=Ci(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Il=t,null}function Dp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case we:return 2;case Gt:return 8;case L:case T:return 32;case tt:return 268435456;default:return 32}default:return 32}}var Tf=!1,Ta=null,ba=null,Ca=null,fo=new Map,ho=new Map,Ra=[],x_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Up(t,n){switch(t){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(n.pointerId)}}function po(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ri(n),n!==null&&wp(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function S_(t,n,a,s,c){switch(n){case"focusin":return Ta=po(Ta,t,n,a,s,c),!0;case"dragenter":return ba=po(ba,t,n,a,s,c),!0;case"mouseover":return Ca=po(Ca,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return fo.set(f,po(fo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,ho.set(f,po(ho.get(f)||null,t,n,a,s,c)),!0}return!1}function Lp(t){var n=Ci(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Hn(t.priority,function(){if(a.tag===13){var s=qn();s=He(s);var c=Cr(a,s);c!==null&&Yn(c,a,s),yf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ef(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);bc=s,a.target.dispatchEvent(s),bc=null}else return n=Ri(a),n!==null&&wp(n),t.blockedOn=a,!1;n.shift()}return!0}function Np(t,n,a){zl(t)&&a.delete(n)}function y_(){Tf=!1,Ta!==null&&zl(Ta)&&(Ta=null),ba!==null&&zl(ba)&&(ba=null),Ca!==null&&zl(Ca)&&(Ca=null),fo.forEach(Np),ho.forEach(Np)}function Fl(t,n){t.blockedOn===n&&(t.blockedOn=null,Tf||(Tf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,y_)))}var Hl=null;function Op(t){Hl!==t&&(Hl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Hl===t&&(Hl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Af(s||a)===null)continue;break}var f=Ri(a);f!==null&&(t.splice(n,3),n-=3,Eu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function mo(t){function n(N){return Fl(N,t)}Ta!==null&&Fl(Ta,t),ba!==null&&Fl(ba,t),Ca!==null&&Fl(Ca,t),fo.forEach(n),ho.forEach(n);for(var a=0;a<Ra.length;a++){var s=Ra[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)Lp(a),a.blockedOn===null&&Ra.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[_n]||null;if(typeof f=="function")S||Op(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[_n]||null)A=S.formAction;else if(Af(c)!==null)continue}else A=S.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),Op(a)}}}function bf(t){this._internalRoot=t}Gl.prototype.render=bf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=qn();Cp(a,s,t,n,null,null)},Gl.prototype.unmount=bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Cp(t.current,2,null,t,null,null),Ml(),n[Un]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var n=ye();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,t),a===0&&Lp(t)}};var Pp=e.version;if(Pp!=="19.1.0")throw Error(r(527,Pp,"19.1.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var M_={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{ut=Vl.inject(M_),It=Vl}catch{}}return _o.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Kh,f=Jh,S=$h,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=Tp(t,1,!1,null,null,a,s,c,f,S,A,null),t[Un]=n.current,lf(t),new bf(n)},_o.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Kh,S=Jh,A=$h,N=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=Tp(t,1,!0,n,a??null,s,c,f,S,A,N,J),n.context=bp(null),a=n.current,s=qn(),s=He(s),c=fa(s),c.callback=null,da(a,c,s),a=s,n.current.lanes=a,pt(n,a),Si(n),t[Un]=n.current,lf(t),new Gl(n)},_o.version="19.1.0",_o}var Wp;function L_(){if(Wp)return wf.exports;Wp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),wf.exports=U_(),wf.exports}var N_=L_();const O_="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%2300979C'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M19%20136.512V120.095C19.3442%20119.924%2019.3442%20119.582%2019.3442%20119.24C24.5074%2096.8376%2038.6201%2083.3275%2060.9939%2078.0261C62.8871%2077.5131%2064.9524%2077.6841%2066.8455%2077H77.8603C78.0324%2077.3421%2078.5487%2077.1711%2078.893%2077.1711C89.9078%2078.3682%2099.8899%2082.3015%20108.667%2089.142C116.24%2094.7854%20122.092%20101.968%20127.427%20109.663C128.115%20110.689%20128.46%20110.689%20129.148%20109.663C132.246%20105.217%20135.516%20100.942%20139.302%2097.0086C148.424%2087.2609%20159.439%2080.4203%20172.863%2078.0261C174.756%2077.5131%20176.993%2077.6841%20178.887%2077H189.557C189.729%2077.3421%20190.074%2077.1711%20190.418%2077.1711C193.688%2077.5131%20196.786%2078.1971%20199.884%2079.0522C222.946%2085.7217%20239.296%20106.756%20237.919%20130.527C236.886%20150.536%20226.732%20164.901%20209.005%20173.964C200.228%20178.753%20190.59%20179.95%20180.608%20179.779C167.528%20179.608%20156.169%20175.161%20146.359%20166.611C139.474%20160.625%20134.139%20153.443%20129.148%20145.918C128.46%20144.892%20128.115%20145.063%20127.427%20146.089C124.329%20150.707%20121.059%20155.324%20117.273%20159.77C110.561%20167.295%20102.816%20173.451%2093.1778%20176.701C81.3025%20180.805%2069.255%20180.976%2057.2076%20177.727C39.8249%20172.767%2027.9495%20161.822%2021.4095%20145.063C20.3768%20142.327%2019.8605%20139.249%2019%20136.512ZM73.7298%20161.651C83.5398%20161.993%2091.973%20158.744%2099.2015%20152.075C106.602%20145.234%20111.937%20136.683%20117.273%20128.304C117.445%20127.791%20117.445%20127.449%20117.101%20126.936C112.626%20119.924%20107.979%20112.913%20101.783%20107.098C89.9078%2095.8115%2075.9672%2092.0492%2060.3055%2097.0086C47.3975%20101.284%2039.1364%20110.347%2037.2433%20124.028C35.3501%20136.854%2040.3412%20147.115%2050.6675%20154.811C57.5518%20159.77%2065.2966%20161.822%2073.7298%20161.651ZM182.845%20161.651C186.631%20161.651%20190.418%20161.48%20194.032%20160.454C207.628%20156.35%20216.578%20147.97%20219.16%20133.947C221.741%20120.095%20216.406%20108.979%20204.703%20101.113C191.795%2092.2202%20173.035%2093.0753%20159.955%20102.823C151.178%20109.321%20145.326%20118.043%20139.474%20127.107C139.13%20127.62%20139.302%20127.962%20139.474%20128.475C144.121%20135.828%20148.768%20143.182%20154.792%20149.509C162.364%20157.547%20171.486%20162.164%20182.845%20161.651Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M73.5577%20122.831C79.0651%20122.831%2084.7446%20123.002%2090.252%20122.831C91.6289%20122.831%2091.801%20123.173%2091.801%20124.541C91.6288%20126.081%2091.6288%20127.62%2091.801%20129.159C91.9731%20130.527%2091.6288%20130.869%2090.0799%20130.869H68.0503C64.264%20130.869%2060.4776%20130.698%2056.6913%20130.869C55.4865%20130.869%2055.1423%20130.527%2055.1423%20129.159C55.3144%20127.62%2055.3144%20126.081%2055.1423%20124.37C55.1423%20123.173%2055.4865%20122.831%2056.6913%20122.831C62.1987%20123.002%2067.8782%20122.831%2073.5577%20122.831ZM181.985%20111.886C183.361%20111.886%20184.738%20112.057%20185.943%20111.886C186.804%20111.886%20187.148%20112.228%20187.148%20113.083C186.976%20115.478%20187.148%20117.872%20186.976%20120.266C186.976%20121.463%20187.32%20121.805%20188.525%20121.805C190.762%20121.634%20193.172%20121.805%20195.581%20121.634C196.614%20121.634%20196.958%20121.805%20196.958%20123.002V130.869C196.958%20131.724%20196.614%20132.066%20195.753%20132.066C193.344%20131.895%20190.934%20132.066%20188.353%20131.895C187.32%20131.895%20186.976%20132.237%20186.976%20133.263C187.148%20135.657%20186.976%20138.051%20187.148%20140.446C187.148%20141.472%20186.804%20141.985%20185.771%20141.985C183.189%20141.814%20180.608%20141.814%20178.026%20141.985C176.994%20141.985%20176.649%20141.643%20176.649%20140.617C176.821%20138.051%20176.649%20135.657%20176.821%20133.092C176.821%20132.237%20176.477%20131.895%20175.617%20131.895C173.207%20132.066%20170.798%20131.895%20168.388%20132.066C167.011%20132.066%20166.839%20131.553%20166.839%20130.527C166.839%20128.133%20167.011%20125.738%20166.839%20123.344C166.667%20121.976%20167.356%20121.634%20168.56%20121.634C170.97%20121.805%20173.207%20121.634%20175.617%20121.805C176.477%20121.805%20176.821%20121.463%20176.821%20120.608C176.649%20118.214%20176.821%20115.649%20176.649%20113.255C176.649%20112.228%20176.994%20111.886%20178.026%20111.886C179.403%20112.057%20180.608%20111.886%20181.985%20111.886Z'%20fill='white'/%3e%3c/svg%3e",P_=Object.freeze(Object.defineProperty({__proto__:null,default:O_},Symbol.toStringTag,{value:"Module"})),B_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cpath%20fill='url(%23paint0_linear_159_730)'%20d='M94.6743%2034.0023H153.856L92.4196%20216.032C91.7882%20217.902%2090.586%20219.528%2088.9824%20220.679C87.3788%20221.831%2085.4545%20222.45%2083.4803%20222.451H37.4223C35.9265%20222.451%2034.4522%20222.095%2033.1213%20221.412C31.7904%20220.729%2030.6411%20219.74%2029.7687%20218.525C28.8962%20217.31%2028.3256%20215.905%2028.104%20214.425C27.8824%20212.946%2028.0162%20211.435%2028.4943%20210.018L85.7327%2040.4209C86.3639%2038.5497%2087.5662%2036.9236%2089.1703%2035.7717C90.7744%2034.6198%2092.6995%2034.0001%2094.6743%2034V34.0023Z'/%3e%3cpath%20fill='%230078D4'%20d='M180.674%20156.095H86.8261C85.9536%20156.094%2085.101%20156.356%2084.3795%20156.847C83.6579%20157.337%2083.1008%20158.034%2082.7807%20158.845C82.4606%20159.657%2082.3923%20160.546%2082.5848%20161.397C82.7773%20162.248%2083.2217%20163.022%2083.86%20163.616L144.165%20219.903C145.92%20221.54%20148.232%20222.451%20150.633%20222.451H203.774L180.674%20156.095Z'/%3e%3cpath%20fill='url(%23paint1_linear_159_730)'%20d='M94.6745%2034.0023C92.6781%2033.9946%2090.7315%2034.6255%2089.1192%2035.8028C87.5068%2036.98%2086.3131%2038.642%2085.7125%2040.5459L28.5649%20209.863C28.0546%20211.286%2027.8944%20212.81%2028.0979%20214.308C28.3013%20215.805%2028.8624%20217.232%2029.7337%20218.466C30.6051%20219.701%2031.7609%20220.708%2033.1036%20221.401C34.4463%20222.095%2035.9362%20222.455%2037.4474%20222.451H84.6942C86.4539%20222.136%2088.0986%20221.36%2089.4603%20220.202C90.822%20219.044%2091.8519%20217.546%2092.4448%20215.859L103.841%20182.273L144.549%20220.241C146.255%20221.652%20148.395%20222.433%20150.608%20222.451H203.551L180.331%20156.096L112.642%20156.112L154.07%2034.0023H94.6745Z'/%3e%3cpath%20fill='url(%23paint2_linear_159_730)'%20d='M170.264%2040.4118C169.634%2038.5435%20168.434%2036.9201%20166.832%2035.7702C165.23%2034.6204%20163.308%2034.002%20161.336%2034.0022H95.3792C97.3508%2034.0023%2099.2727%2034.6208%20100.874%2035.7707C102.476%2036.9205%20103.677%2038.5437%20104.307%2040.4118L161.548%20210.016C162.026%20211.433%20162.16%20212.944%20161.939%20214.424C161.718%20215.904%20161.147%20217.309%20160.275%20218.525C159.402%20219.74%20158.253%20220.73%20156.922%20221.413C155.591%20222.096%20154.116%20222.453%20152.62%20222.453H218.579C220.075%20222.452%20221.55%20222.096%20222.88%20221.413C224.211%20220.729%20225.36%20219.739%20226.233%20218.524C227.105%20217.308%20227.675%20215.903%20227.896%20214.423C228.118%20212.944%20227.984%20211.433%20227.505%20210.016L170.264%2040.4118Z'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_159_730'%20x1='116.244'%20x2='54.783'%20y1='47.967'%20y2='229.54'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23114A8B'/%3e%3cstop%20offset='1'%20stop-color='%230669BC'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_159_730'%20x1='135.444'%20x2='121.227'%20y1='132.585'%20y2='137.392'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-opacity='.3'/%3e%3cstop%20offset='.071'%20stop-opacity='.2'/%3e%3cstop%20offset='.321'%20stop-opacity='.1'/%3e%3cstop%20offset='.623'%20stop-opacity='.05'/%3e%3cstop%20offset='1'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_159_730'%20x1='127.625'%20x2='195.091'%20y1='42.671'%20y2='222.414'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%233CCBF4'/%3e%3cstop%20offset='1'%20stop-color='%232892DF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",I_=Object.freeze(Object.defineProperty({__proto__:null,default:B_},Symbol.toStringTag,{value:"Module"})),z_="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%23394AAB'/%3e%3cpath%20d='M134.001%2033C169.144%2033%20199.828%2052.0863%20216.262%2080.4561L216.102%2080.183L174.753%20103.991C166.607%2090.1977%20151.672%2080.8892%20134.54%2080.6975L134.001%2080.6945C107.875%2080.6945%2086.6945%20101.874%2086.6945%20127.999C86.6945%20136.543%2088.9723%20144.552%2092.9335%20151.469C101.088%20165.704%20116.416%20175.306%20134.001%20175.306C151.693%20175.306%20167.109%20165.582%20175.222%20151.195L175.025%20151.54L216.311%20175.458C200.057%20203.588%20169.794%20222.615%20135.059%20222.994L134.001%20223C98.746%20223%2067.9753%20203.796%2051.582%20175.276C43.5791%20161.353%2039%20145.212%2039%20127.999C39%2075.5334%2081.5323%2033%20134.001%2033Z'%20fill='white'/%3e%3c/svg%3e",F_=Object.freeze(Object.defineProperty({__proto__:null,default:z_},Symbol.toStringTag,{value:"Module"})),H_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%232396ED'%20rx='60'/%3e%3cpath%20fill='%23fff'%20d='M141.187%20122.123H161.904V103.379H141.187V122.123ZM116.525%20122.123H137.241V103.379H116.525V122.123ZM92.3554%20122.123H113.072V103.379H92.3554V122.123ZM68.1859%20122.123H88.4093V103.379H68.1859V122.123ZM43.5233%20122.123H64.2399V103.379H43.5233V122.123ZM68.1859%2099.4333H88.4093V80.6896H68.1859V99.4333ZM92.3554%2099.4333H113.072V80.6896H92.3554V99.4333ZM116.525%2099.4333H137.241V80.6896H116.525V99.4333ZM116.525%2076.7436H137.241V58H116.525V76.7436ZM228%20113.738C228%20113.738%20219.121%20105.352%20200.871%20108.312C198.898%2094.0075%20183.607%2085.6222%20183.607%2085.6222C183.607%2085.6222%20169.303%20102.886%20179.661%20122.123C176.702%20123.603%20171.769%20125.576%20164.37%20125.576H28.7257C26.2594%20134.948%2026.2594%20197.097%2094.3284%20197.097C143.16%20197.097%20179.661%20174.408%20196.925%20132.974C222.574%20134.948%20228%20113.738%20228%20113.738Z'/%3e%3c/svg%3e",G_=Object.freeze(Object.defineProperty({__proto__:null,default:H_},Symbol.toStringTag,{value:"Module"})),V_="/yanny-portfolio/assets/electron-DZyrg6d4.svg",k_=Object.freeze(Object.defineProperty({__proto__:null,default:V_},Symbol.toStringTag,{value:"Module"})),X_="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%23242938'/%3e%3cpath%20d='M173.5%2098H121.25C121.5%2099.25%20122%20100.5%20122.25%20101.5C124%20107.5%20125%20113.75%20125.5%20120.25C125.75%20122.75%20125.75%20125.5%20125.75%20128C125.75%20130.5%20125.75%20133.25%20125.5%20135.75C125%20142.25%20124%20148.5%20122.25%20154.5C122%20155.75%20121.5%20157%20121.25%20158H173.5C190%20158%20203.25%20144.5%20203.25%20128C203.25%20111.5%20190%2098%20173.5%2098Z'%20fill='%2300A9E5'/%3e%3cpath%20d='M125.5%20135.75C125.75%20133.25%20125.75%20130.5%20125.75%20128C125.75%20125.5%20125.75%20122.75%20125.5%20120.25C125%20113.75%20124%20107.5%20122.25%20101.5C122%20100.25%20121.5%2099%20121.25%2098H40.5C37.5%20107.5%2036%20117.5%2036%20128C36%20138.5%2037.5%20148.5%2040.5%20158H121.25C121.5%20156.75%20122%20155.5%20122.25%20154.5C124%20148.5%20125%20142.25%20125.5%20135.75Z'%20fill='%23353535'/%3e%3cpath%20d='M182.5%20168H117.5C115.5%20172.5%20113.25%20176.75%20110.75%20180.75C107%20187%20102.5%20192.5%2097.5001%20197.75C95.7501%20199.5%2094.0001%20201%2092.2501%20202.75C88.7501%20206%2084.7501%20208.75%2080.7501%20211.5C96.5001%20222%20115.5%20228%20135.75%20228C170.5%20228%20201%20210.25%20219%20183.5C209.75%20174%20196.75%20168%20182.5%20168Z'%20fill='%2300BFB3'/%3e%3cpath%20d='M110.75%20180.75C113.25%20176.75%20115.5%20172.5%20117.5%20168H44.25C52%20185.75%2064.75%20201%2081%20211.5C85%20208.75%2088.75%20206%2092.5%20202.75C94.25%20201.25%2096%20199.5%2097.75%20197.75C102.5%20192.75%20107%20187%20110.75%20180.75Z'%20fill='%23019B8F'/%3e%3cpath%20d='M97.5%2058.25C95.75%2056.5%2094%2055%2092.25%2053.25C88.75%2050%2084.75%2047.25%2080.75%2044.5C64.75%2055%2052%2070.25%2044%2088H117.5C115.5%2083.5%20113%2079%20110.5%2075C107%2068.75%20102.5%2063.25%2097.5%2058.25Z'%20fill='%23F9B110'/%3e%3cpath%20d='M135.75%2028C115.5%2028%2096.5001%2034%2080.7501%2044.5C84.7501%2047.25%2088.5001%2050%2092.2501%2053.25C94.0001%2054.75%2095.7501%2056.5%2097.5001%2058.25C102.5%2063.5%20107%2069%20110.75%2075.25C113.25%2079.25%20115.5%2083.5%20117.5%2088H182.5C196.75%2088%20209.75%2082%20219%2072.5C201%2045.75%20170.5%2028%20135.75%2028Z'%20fill='%23FED10A'/%3e%3c/svg%3e",W_=Object.freeze(Object.defineProperty({__proto__:null,default:X_},Symbol.toStringTag,{value:"Module"})),q_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cpath%20fill='%23fff'%20d='M228%20182.937C225.089%20184.04%20221.875%20184.037%20218.965%20182.931C216.056%20181.824%20213.652%20179.69%20212.209%20176.932C203.146%20163.365%20193.138%20150.41%20183.519%20137.177L179.348%20131.617C167.894%20146.963%20156.44%20161.697%20145.987%20176.988C144.625%20179.624%20142.352%20181.675%20139.59%20182.759C136.828%20183.844%20133.766%20183.887%20130.975%20182.882L173.955%20125.223L133.977%2073.1236C136.855%2072.0845%20140.003%2072.0702%20142.89%2073.0832C145.777%2074.0962%20148.226%2076.0744%20149.824%2078.6838C159.109%2092.2506%20169.396%20105.206%20179.626%20118.94C189.913%20105.317%20200.088%2092.3062%20209.596%2078.8506C210.965%2076.2574%20213.24%2074.258%20215.988%2073.2328C218.735%2072.2076%20221.764%2072.2281%20224.497%2073.2904L208.984%2093.8631C202.034%20103.037%20195.195%20112.267%20187.967%20121.219C187.384%20121.741%20186.918%20122.379%20186.599%20123.093C186.28%20123.807%20186.115%20124.58%20186.115%20125.362C186.115%20126.143%20186.28%20126.916%20186.599%20127.63C186.918%20128.344%20187.384%20128.982%20187.967%20129.504C201.256%20147.13%20214.433%20164.811%20228%20182.937V182.937Z'/%3e%3cpath%20fill='%23fff'%20d='M28%20124.5C29.1676%20118.94%2029.8905%20112.879%2031.5029%20107.208C41.122%2073.0129%2080.3214%2058.7788%20107.288%2079.9632C123.079%2092.3624%20127.027%20109.933%20126.249%20129.727H37.2855C35.8399%20165.09%2061.3611%20186.441%2093.9994%20175.543C99.2938%20173.649%20104.033%20170.467%20107.79%20166.283C111.547%20162.099%20114.202%20157.045%20115.517%20151.578C117.241%20146.018%20120.021%20145.073%20125.303%20146.685C124.433%20153.454%20122.04%20159.938%20118.303%20165.649C114.567%20171.36%20109.584%20176.149%20103.73%20179.657C94.0573%20184.947%2082.96%20187.042%2072.0247%20185.644C61.0894%20184.246%2050.8763%20179.426%2042.8457%20171.873C34.9011%20162.94%2030.0973%20151.654%2029.1676%20139.735C29.1676%20137.845%2028.4448%20135.954%2028.0556%20134.175C28.0185%20130.876%2028%20127.651%2028%20124.5ZM37.3967%20122.109H117.853C117.352%2096.4769%20101.172%2078.2951%2079.5986%2078.1283C55.5785%2077.7947%2038.3976%2095.5873%2037.3411%20121.998L37.3967%20122.109Z'/%3e%3c/svg%3e",Y_=Object.freeze(Object.defineProperty({__proto__:null,default:q_},Symbol.toStringTag,{value:"Module"})),j_="/yanny-portfolio/assets/flask-BFYgfYAz.svg",Z_=Object.freeze(Object.defineProperty({__proto__:null,default:j_},Symbol.toStringTag,{value:"Module"})),Q_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23F03C2E'%20rx='60'/%3e%3cg%20clip-path='url(%23clip0_7_283)'%3e%3cpath%20fill='%23fff'%20d='M224.225%20119.094L136.906%2031.775C135.711%2030.5787%20134.291%2029.6298%20132.729%2028.9824C131.166%2028.3349%20129.491%2028.0017%20127.8%2028.0017C126.109%2028.0017%20124.434%2028.3349%20122.871%2028.9824C121.309%2029.6298%20119.889%2030.5787%20118.694%2031.775L100.569%2049.9L123.569%2072.9C128.919%2071.025%20135.044%2072.3062%20139.306%2076.5687C141.335%2078.6014%20142.752%2081.1638%20143.394%2083.9632C144.036%2086.7626%20143.878%2089.6862%20142.937%2092.4L165.106%20114.569C170.469%20112.719%20176.656%20113.912%20180.937%20118.206C182.361%20119.63%20183.49%20121.32%20184.26%20123.18C185.03%20125.04%20185.426%20127.033%20185.426%20129.046C185.425%20131.059%20185.029%20133.052%20184.258%20134.912C183.487%20136.771%20182.358%20138.461%20180.934%20139.884C179.511%20141.308%20177.821%20142.436%20175.961%20143.206C174.101%20143.977%20172.108%20144.373%20170.095%20144.372C168.082%20144.372%20166.088%20143.975%20164.229%20143.205C162.369%20142.434%20160.679%20141.305%20159.256%20139.881C154.756%20135.381%20153.644%20128.756%20155.919%20123.212L135.244%20102.537V156.944C136.745%20157.686%20138.116%20158.666%20139.306%20159.844C140.729%20161.267%20141.858%20162.956%20142.629%20164.816C143.399%20166.675%20143.795%20168.668%20143.795%20170.681C143.795%20172.694%20143.399%20174.687%20142.629%20176.546C141.858%20178.406%20140.729%20180.096%20139.306%20181.519C137.883%20182.942%20136.193%20184.071%20134.334%20184.841C132.474%20185.611%20130.481%20186.008%20128.469%20186.008C126.456%20186.008%20124.463%20185.611%20122.604%20184.841C120.744%20184.071%20119.054%20182.942%20117.631%20181.519C116.206%20180.096%20115.076%20178.407%20114.305%20176.548C113.533%20174.688%20113.136%20172.694%20113.136%20170.681C113.136%20168.668%20113.533%20166.675%20114.305%20164.815C115.076%20162.955%20116.206%20161.266%20117.631%20159.844C119.112%20158.369%20120.756%20157.25%20122.65%20156.5V101.587C120.825%20100.837%20119.112%2099.7312%20117.631%2098.2437C115.479%2096.0943%20114.016%2093.3526%20113.428%2090.3684C112.841%2087.3841%20113.155%2084.2924%20114.331%2081.4875L91.6437%2058.8125L31.7687%20118.625C30.5716%20119.821%2029.6219%20121.241%2028.9739%20122.804C28.3259%20124.367%2027.9924%20126.042%2027.9924%20127.734C27.9924%20129.426%2028.3259%20131.102%2028.9739%20132.665C29.6219%20134.228%2030.5716%20135.648%2031.7687%20136.844L119.094%20224.156C120.289%20225.352%20121.709%20226.301%20123.271%20226.949C124.834%20227.596%20126.509%20227.929%20128.2%20227.929C129.891%20227.929%20131.566%20227.596%20133.129%20226.949C134.691%20226.301%20136.111%20225.352%20137.306%20224.156L224.225%20137.375C225.422%20136.179%20226.372%20134.759%20227.02%20133.196C227.668%20131.633%20228.001%20129.958%20228.001%20128.266C228.001%20126.574%20227.668%20124.898%20227.02%20123.335C226.372%20121.772%20225.422%20120.352%20224.225%20119.156'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_7_283'%3e%3crect%20width='200'%20height='200'%20fill='%23fff'%20transform='translate(28%2028)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",K_=Object.freeze(Object.defineProperty({__proto__:null,default:Q_},Symbol.toStringTag,{value:"Module"})),J_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cpath%20fill='%23fff'%20d='M101.634%20182.619C101.634%20182.619%2093.9548%20187.293%20106.979%20188.63C122.707%20190.634%20131.023%20190.299%20148.386%20186.962C148.386%20186.962%20153.06%20189.971%20159.406%20192.306C120.331%20209.002%2070.9089%20191.304%20101.634%20182.619ZM96.6252%20160.914C96.6252%20160.914%2088.2753%20167.26%20101.299%20168.593C118.327%20170.262%20131.69%20170.597%20154.732%20165.926C154.732%20165.926%20157.741%20169.267%20162.747%20170.936C115.664%20184.961%2062.8975%20172.269%2096.6252%20160.917V160.914ZM188.795%20198.984C188.795%20198.984%20194.471%20203.658%20182.449%20207.334C160.073%20214.012%2088.6104%20216.019%2068.5735%20207.334C61.564%20204.325%2074.9197%20199.982%2079.2587%20199.319C83.6012%20198.317%2085.9366%20198.317%2085.9366%20198.317C78.2569%20192.973%2034.8424%20209.337%2063.8959%20214.046C143.709%20227.073%20209.499%20208.37%20188.792%20199.018L188.795%20198.984ZM105.307%20138.203C105.307%20138.203%2068.9052%20146.888%2092.2793%20149.89C102.298%20151.223%20122%20150.892%20140.368%20149.555C155.396%20148.221%20170.458%20145.548%20170.458%20145.548C170.458%20145.548%20165.113%20147.886%20161.441%20150.222C124.342%20159.915%2053.2107%20155.573%2073.5827%20145.554C90.9526%20137.204%20105.307%20138.203%20105.307%20138.203V138.203ZM170.423%20174.604C207.83%20155.234%20190.46%20136.534%20178.438%20138.873C175.429%20139.54%20174.096%20140.207%20174.096%20140.207C174.096%20140.207%20175.097%20138.203%20177.436%20137.54C201.145%20129.19%20219.849%20162.586%20169.757%20175.61C169.757%20175.61%20170.092%20175.275%20170.423%20174.608V174.604ZM108.979%20227.364C145.046%20229.703%20200.147%20226.03%20201.484%20208.995C201.484%20208.995%20198.817%20215.673%20171.764%20220.683C141.042%20226.359%20102.968%20225.692%2080.5957%20222.016C80.5957%20222.016%2085.2698%20226.023%20108.982%20227.36L108.979%20227.364Z'/%3e%3cpath%20fill='%23F58219'%20d='M147.685%2028C147.685%2028%20168.389%2049.0388%20127.983%2080.7594C95.5891%20106.472%20120.632%20121.168%20127.983%20137.861C108.948%20120.833%2095.2609%20105.802%20104.606%2091.7762C118.331%2071.0828%20156.062%2061.0644%20147.685%2028ZM137%20123.842C146.683%20134.862%20134.333%20144.881%20134.333%20144.881C134.333%20144.881%20159.044%20132.195%20147.692%20116.494C137.338%20101.466%20129.324%2094.1184%20172.738%2069.0689C172.738%2069.0689%20104.278%2086.0968%20137.007%20123.835L137%20123.842Z'/%3e%3c/svg%3e",$_=Object.freeze(Object.defineProperty({__proto__:null,default:J_},Symbol.toStringTag,{value:"Module"})),tv="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%23F0DB4F'/%3e%3cpath%20d='M67.3117%20213.932L86.9027%20202.076C90.6821%20208.777%2094.1202%20214.447%20102.367%20214.447C110.272%20214.447%20115.256%20211.355%20115.256%20199.327V117.529H139.314V199.667C139.314%20224.584%20124.708%20235.926%20103.398%20235.926C84.1533%20235.926%2072.9819%20225.959%2067.3113%20213.93'%20fill='%23323330'/%3e%3cpath%20d='M152.381%20211.354L171.969%20200.013C177.126%20208.434%20183.828%20214.62%20195.684%20214.62C205.653%20214.62%20212.009%20209.636%20212.009%20202.762C212.009%20194.514%20205.479%20191.592%20194.481%20186.782L188.468%20184.203C171.111%20176.815%20159.597%20167.535%20159.597%20147.945C159.597%20129.901%20173.345%20116.153%20194.826%20116.153C210.12%20116.153%20221.118%20121.481%20229.022%20135.4L210.291%20147.429C206.166%20140.04%20201.7%20137.119%20194.826%20137.119C187.78%20137.119%20183.312%20141.587%20183.312%20147.429C183.312%20154.646%20187.78%20157.568%20198.09%20162.037L204.104%20164.614C224.553%20173.379%20236.067%20182.313%20236.067%20202.418C236.067%20224.072%20219.055%20235.928%20196.2%20235.928C173.861%20235.928%20159.426%20225.274%20152.381%20211.354'%20fill='%23323330'/%3e%3c/svg%3e",ev=Object.freeze(Object.defineProperty({__proto__:null,default:tv},Symbol.toStringTag,{value:"Module"})),nv="/yanny-portfolio/assets/kubernetes-4QYX_yoq.svg",iv=Object.freeze(Object.defineProperty({__proto__:null,default:nv},Symbol.toStringTag,{value:"Module"})),av="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cg%20clip-path='url(%23clip0_101_404)'%3e%3cpath%20fill='navy'%20d='M204.453%20128.02C204.453%2085.8242%20170.195%2051.5703%20128%2051.5703C85.8047%2051.5703%2051.5469%2085.8242%2051.5469%20128.02C51.5469%20170.219%2085.8047%20204.473%20128%20204.473C170.195%20204.473%20204.453%20170.219%20204.453%20128.02Z'/%3e%3cpath%20fill='%23fff'%20d='M182.066%2096.3438C182.066%2083.9883%20172.035%2073.957%20159.68%2073.957C147.324%2073.957%20137.293%2083.9883%20137.293%2096.3438C137.293%20108.695%20147.324%20118.73%20159.68%20118.73C172.035%20118.73%20182.066%20108.695%20182.066%2096.3438Z'/%3e%3cpath%20fill='navy'%20d='M226.84%2051.5469C226.84%2039.1914%20216.809%2029.1602%20204.453%2029.1602C192.098%2029.1602%20182.066%2039.1914%20182.066%2051.5469C182.066%2063.9023%20192.098%2073.9336%20204.453%2073.9336C216.809%2073.9336%20226.84%2063.9258%20226.84%2051.5469Z'/%3e%3cpath%20fill='%23fff'%20d='M82.5078%20160.586H107.281V166.227H76.1094V116.066H82.5078V160.586Z'/%3e%3cpath%20fill='%23fff'%20d='M136.871%20166.227V161.199C133.492%20165.953%20130.133%20167.809%20124.832%20167.809C117.82%20167.809%20113.344%20163.965%20113.344%20157.969V130.176H119.047V155.707C119.047%20160.039%20121.937%20162.805%20126.48%20162.805C132.457%20162.805%20136.32%20157.988%20136.32%20150.617V130.176H142.023V166.227H136.871Z'/%3e%3cpath%20fill='%23fff'%20d='M183.945%20167.199C182.086%20167.684%20181.199%20167.809%20180.016%20167.809C176.301%20167.809%20174.504%20166.164%20174.102%20162.508C170.047%20166.227%20166.395%20167.809%20161.855%20167.809C154.566%20167.809%20150.027%20163.691%20150.027%20157.145C150.027%20152.457%20152.16%20149.227%20156.363%20147.516C158.559%20146.629%20159.805%20146.352%20167.914%20145.316C172.457%20144.77%20173.891%20143.734%20173.891%20141.328V139.805C173.891%20136.363%20171%20134.441%20165.848%20134.441C160.48%20134.441%20157.863%20136.426%20157.379%20140.84H151.59C151.738%20137.27%20152.414%20135.203%20154.062%20133.344C156.469%20130.66%20160.797%20129.141%20166.035%20129.141C174.906%20129.141%20179.594%20132.582%20179.594%20138.98V160.188C179.594%20161.98%20180.691%20163.016%20182.699%20163.016C183.035%20163.016%20183.313%20163.016%20183.945%20162.867V167.199ZM173.891%20148.402C171.969%20149.289%20170.723%20149.562%20164.664%20150.387C158.539%20151.273%20155.984%20153.215%20155.984%20156.996C155.984%20160.652%20158.602%20162.785%20163.078%20162.785C166.457%20162.785%20169.266%20161.684%20171.613%20159.551C173.32%20157.969%20173.891%20156.809%20173.891%20154.863V148.402Z'/%3e%3cpath%20stroke='gray'%20stroke-dasharray='8.63%208.63'%20stroke-miterlimit='10'%20stroke-width='2.294'%20d='M216.09%2083.121C223.164%2097.0195%20226.859%20112.394%20226.859%20128C226.859%20182.574%20182.574%20226.859%20128%20226.859C73.4257%20226.859%2029.1406%20182.574%2029.1406%20128C29.1406%2073.4257%2073.4257%2029.1406%20128%2029.1406C145.551%2029.1406%20162.762%2033.8086%20177.883%2042.6367'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_101_404'%3e%3crect%20width='200'%20height='200'%20fill='%23fff'%20transform='translate(28%2028)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",rv=Object.freeze(Object.defineProperty({__proto__:null,default:av},Symbol.toStringTag,{value:"Module"})),sv="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cpath%20fill='%23007FFF'%20fill-rule='evenodd'%20d='M192.031%20157.671C192.823%20157.216%20193.482%20156.561%20193.941%20155.771C194.4%20154.981%20194.643%20154.084%20194.646%20153.171L194.74%20123.03C194.742%20122.117%20194.986%20121.22%20195.445%20120.43C195.903%20119.64%20196.562%20118.985%20197.354%20118.53L213.693%20109.145C214.485%20108.69%20215.382%20108.452%20216.295%20108.453C217.208%20108.455%20218.105%20108.696%20218.895%20109.154C219.686%20109.611%20220.342%20110.268%20220.798%20111.059C221.254%20111.85%20221.495%20112.747%20221.495%20113.661V168.457C221.495%20169.374%20221.253%20170.273%20220.794%20171.066C220.335%20171.859%20219.675%20172.517%20218.88%20172.973L157.219%20208.39C156.431%20208.842%20155.539%20209.08%20154.631%20209.081C153.723%20209.082%20152.83%20208.845%20152.042%20208.395L103.651%20180.718C102.854%20180.262%20102.191%20179.605%20101.73%20178.811C101.269%20178.017%20101.026%20177.115%20101.026%20176.197V148.567C101.026%20148.536%20101.063%20148.515%20101.094%20148.53C101.12%20148.546%20101.156%20148.53%20101.156%20148.494V148.463C101.156%20148.442%20101.167%20148.421%20101.188%20148.411L141.042%20125.515C141.078%20125.494%20141.062%20125.437%20141.021%20125.437C141.01%20125.437%20140.999%20125.432%20140.991%20125.424C140.984%20125.417%20140.979%20125.406%20140.979%20125.395L141.057%2098.3064C141.061%2097.3904%20140.823%2096.4896%20140.367%2095.6949C139.912%2094.9003%20139.254%2094.2399%20138.462%2093.7803C137.67%2093.3207%20136.77%2093.0782%20135.854%2093.0773C134.938%2093.0764%20134.038%2093.3171%20133.245%2093.7751L103.625%20110.843C102.834%20111.298%20101.938%20111.538%20101.026%20111.538C100.114%20111.538%2099.2176%20111.298%2098.4271%20110.843L68.7135%2093.7335C67.9219%2093.2776%2067.0243%2093.038%2066.1109%2093.0387C65.1974%2093.0393%2064.3001%2093.2802%2063.5092%2093.7372C62.7182%2094.1941%2062.0613%2094.8511%2061.6045%2095.6421C61.1476%2096.4331%2060.9068%2097.3304%2060.9063%2098.2439V147.202C60.9069%20148.115%2060.6677%20149.011%2060.2128%20149.802C59.7578%20150.593%2059.1031%20151.251%2058.314%20151.709C57.525%20152.168%2056.6293%20152.411%2055.7168%20152.414C54.8043%20152.417%2053.9069%20152.181%2053.1146%20151.728L36.625%20142.301C35.8263%20141.845%2035.1627%20141.185%2034.7016%20140.389C34.2405%20139.594%2033.9985%20138.69%2034%20137.77L34.1458%2052.197C34.1478%2051.2847%2034.3894%2050.389%2034.8464%2049.5994C35.3033%2048.8098%2035.9597%2048.1541%2036.7497%2047.698C37.5397%2047.2418%2038.4357%2047.0011%2039.348%2047C40.2603%2046.9989%2041.1568%2047.2375%2041.9479%2047.6918L98.4323%2080.1345C99.2216%2080.5878%20100.116%2080.8263%20101.026%2080.8263C101.936%2080.8263%20102.831%2080.5878%20103.62%2080.1345L160.089%2047.6918C160.881%2047.2368%20161.779%2046.9982%20162.692%2047C163.606%2047.0018%20164.503%2047.2438%20165.294%2047.7019C166.084%2048.1599%20166.74%2048.8178%20167.196%2049.6096C167.652%2050.4013%20167.891%2051.299%20167.891%2052.2126V137.806C167.891%20138.722%20167.65%20139.622%20167.192%20140.414C166.734%20141.207%20166.075%20141.865%20165.281%20142.322L135.708%20159.353C134.914%20159.811%20134.255%20160.471%20133.797%20161.265C133.339%20162.059%20133.099%20162.961%20133.101%20163.878C133.103%20164.794%20133.347%20165.694%20133.809%20166.487C134.27%20167.279%20134.933%20167.935%20135.729%20168.39L152.042%20177.676C152.83%20178.125%20153.722%20178.36%20154.629%20178.358C155.536%20178.356%20156.427%20178.118%20157.214%20177.666L192.031%20157.671V157.671ZM195.453%2080.8897C195.454%2081.8108%20195.699%2082.7152%20196.163%2083.5107C196.627%2084.3062%20197.294%2084.9644%20198.096%2085.4182C198.897%2085.8719%20199.805%2086.1049%20200.726%2086.0935C201.647%2086.0821%20202.548%2085.8267%20203.339%2085.3532L218.964%2075.9782C219.735%2075.5161%20220.373%2074.862%20220.817%2074.0798C221.261%2073.2976%20221.494%2072.4139%20221.495%2071.5147V52.4105C221.493%2051.4899%20221.247%2050.5862%20220.783%2049.7914C220.318%2048.9966%20219.651%2048.3391%20218.85%2047.886C218.048%2047.4329%20217.141%2047.2003%20216.221%2047.2119C215.3%2047.2236%20214.399%2047.479%20213.609%2047.9522L197.984%2057.3272C197.213%2057.7894%20196.574%2058.4434%20196.131%2059.2256C195.687%2060.0078%20195.454%2060.8915%20195.453%2061.7908V80.8949V80.8897Z'%20clip-rule='evenodd'/%3e%3c/svg%3e",ov=Object.freeze(Object.defineProperty({__proto__:null,default:sv},Symbol.toStringTag,{value:"Module"})),lv="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cg%20clip-path='url(%23clip0_7_147)'%3e%3cpath%20fill='%23fff'%20fill-rule='evenodd'%20d='M203.801%20178.21C194.011%20177.938%20186.416%20178.941%20180.051%20181.619C178.218%20182.355%20175.277%20182.355%20175.035%20184.662C176.015%20185.63%20176.133%20187.214%20176.992%20188.556C178.459%20190.991%20181.033%20194.271%20183.357%20195.973L191.191%20201.571C195.965%20204.488%20201.351%20206.193%20206.002%20209.113C208.696%20210.817%20211.388%20213.007%20214.082%20214.834C215.454%20215.807%20216.285%20217.392%20218%20217.997V217.629C217.144%20216.538%20216.897%20214.957%20216.044%20213.735L212.367%20210.209C208.82%20205.465%20204.41%20201.325%20199.636%20197.922C195.718%20195.245%20187.152%20191.596%20185.56%20187.097L185.319%20186.824C188.008%20186.552%20191.191%20185.605%20193.764%20184.875C197.929%20183.784%20201.721%20184.024%20206.002%20182.93L211.882%20181.226V180.135C209.678%20177.946%20208.087%20175.025%20205.763%20172.959C199.521%20167.606%20192.661%20162.373%20185.56%20157.994C181.766%20155.562%20176.868%20153.977%20172.829%20151.913C171.356%20151.182%20168.911%20150.817%20168.055%20149.601C165.846%20146.929%20164.625%20143.397%20163.034%20140.232L152.997%20119.064C150.794%20114.319%20149.444%20109.574%20146.755%20105.195C134.144%2084.5124%20120.431%2071.9828%2099.375%2059.6932C94.8477%2057.1382%2089.4616%2056.0393%2083.7353%2054.7032L74.5546%2054.2124C72.5928%2053.3616%2070.6364%2051.0493%2068.9216%2049.9531C61.9441%2045.5739%2043.9475%2036.0847%2038.8029%2048.5897C35.4966%2056.4974%2043.7006%2064.2824%2046.4855%2068.299C48.5708%2071.0966%2051.2597%2074.2597%2052.7332%2077.4228C53.5563%2079.4897%2053.8307%2081.682%2054.6895%2083.8717C56.6458%2089.2243%2058.4842%2095.1878%2061.0551%20100.178C62.427%20102.733%2063.8675%20105.413%2065.5824%20107.723C66.5619%20109.086%2068.2768%20109.67%2068.6417%20111.859C66.9268%20114.294%2066.8089%20117.94%2065.8293%20120.986C61.42%20134.734%2063.1349%20151.766%2069.377%20161.888C71.3389%20164.928%2075.9622%20171.622%2082.2345%20169.065C87.744%20166.875%2086.5148%20159.941%2088.1062%20153.857C88.4766%20152.399%2088.2297%20151.425%2088.9623%20150.449V150.722L93.9834%20160.819C97.7781%20166.78%20104.391%20172.986%20109.897%20177.125C112.833%20179.315%20115.16%20183.089%20118.831%20184.425V184.057H118.59C117.854%20182.966%20116.751%20182.475%20115.772%20181.624C113.569%20179.435%20111.121%20176.757%20109.406%20174.325C104.267%20167.513%2099.7399%20159.968%2095.6983%20152.183C93.7365%20148.412%2092.0216%20144.275%2090.4357%20140.504C89.6949%20139.043%2089.6949%20136.85%2088.4739%20136.125C86.6355%20138.797%2083.9466%20141.115%2082.5939%20144.398C80.2672%20149.628%2080.0257%20156.077%2079.1697%20162.769C78.6758%20162.891%2078.8953%20162.769%2078.6758%20163.041C74.7631%20162.071%2073.4132%20158.051%2071.9453%20154.648C68.274%20146.01%2067.6594%20132.141%2070.8422%20122.164C71.6983%20119.609%2075.375%20111.579%2073.9071%20109.146C73.1662%20106.834%2070.7242%20105.498%2069.3743%20103.671C67.7829%20101.359%2066.0735%2098.4409%2064.9705%2095.8859C62.0346%2089.0689%2060.5667%2081.5293%2057.3812%2074.7151C55.9077%2071.552%2053.3396%2068.2662%2051.257%2065.3486C48.9303%2062.0628%2046.3648%2059.7505%2044.5265%2055.8593C43.9146%2054.4959%2043.0585%2052.3309%2044.0381%2050.8693C44.2795%2049.8959%2044.7734%2049.5059%2045.7475%2049.2878C47.3389%2047.9244%2051.8716%2049.6532%2053.463%2050.3785C57.9903%2052.2054%2061.7849%2053.907%2065.5796%2056.4592C67.2945%2057.6754%2069.1329%2059.9877%2071.3361%2060.5985H73.9098C77.8279%2061.4493%2082.2317%2060.8712%2085.9002%2061.9619C92.3893%2064.0343%2098.2637%2067.0719%20103.532%2070.3604C119.567%2080.4577%20132.792%2094.8143%20141.725%20111.971C143.193%20114.769%20143.805%20117.324%20145.155%20120.244C147.729%20126.208%20150.912%20132.289%20153.477%20138.132C156.051%20143.85%20158.498%20149.694%20162.17%20154.438C164.008%20156.993%20171.35%20158.329%20174.654%20159.668C177.104%20160.759%20180.896%20161.741%20183.105%20163.077C187.264%20165.632%20191.427%20168.552%20195.342%20171.35C197.298%20172.806%20203.423%20175.849%20203.787%20178.276L203.801%20178.21ZM78.9584%2072.4873C77.267%2072.4724%2075.5809%2072.6769%2073.9427%2073.0954V73.3681H74.1842C75.1637%2075.315%2076.8786%2076.6538%2078.1023%2078.3581L80.9202%2084.1989L81.1616%2083.9262C82.8765%2082.71%2083.7353%2080.7631%2083.7353%2077.8454C83%2076.9947%2082.8793%2076.1412%2082.2674%2075.2904C81.5321%2074.0743%2079.9407%2073.4635%2078.9584%2072.4928V72.4873Z'%20clip-rule='evenodd'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_7_147'%3e%3crect%20width='180'%20height='180'%20fill='%23fff'%20transform='translate(38%2038)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",cv=Object.freeze(Object.defineProperty({__proto__:null,default:lv},Symbol.toStringTag,{value:"Module"})),uv="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cpath%20fill='%2381CD39'%20d='M119.878%2031.1164C124.797%2028.3008%20131.203%2028.2883%20136.117%2031.1164C160.839%2045.0855%20185.569%2059.0332%20210.287%2073.0108C214.937%2075.6296%20218.046%2080.8038%20217.999%2086.1608V170.206C218.034%20175.785%20214.617%20181.083%20209.712%20183.642C185.071%20197.535%20160.442%20211.444%20135.805%20225.337C130.786%20228.207%20124.251%20227.986%20119.387%20224.88C112%20220.598%20104.6%20216.336%2097.2121%20212.058C95.7022%20211.158%2094.0004%20210.442%2092.9345%20208.978C93.8766%20207.708%2095.5618%20207.55%2096.9309%20206.995C100.014%20206.014%20102.847%20204.44%20105.679%20202.913C106.396%20202.423%20107.27%20202.611%20107.957%20203.049C114.274%20206.671%20120.536%20210.399%20126.874%20213.986C128.226%20214.767%20129.595%20213.73%20130.751%20213.086C154.931%20199.419%20179.141%20185.805%20203.318%20172.134C204.214%20171.703%20204.709%20170.752%20204.636%20169.771C204.653%20142.046%20204.64%20114.317%20204.645%2086.5918C204.747%2085.4785%20204.103%2084.455%20203.096%2083.999C178.541%2070.1702%20153.997%2056.3205%20129.446%2042.4882C128.575%2041.8893%20127.426%2041.8878%20126.554%2042.4837C102.002%2056.3205%2077.4638%2070.1832%2052.9124%2084.011C51.9092%2084.4675%2051.236%2085.4745%2051.3554%2086.5918C51.3596%20114.317%2051.3554%20142.046%2051.3554%20169.775C51.2682%20170.756%2051.801%20171.687%2052.6906%20172.109C59.2422%20175.824%2065.8024%20179.513%2072.3582%20183.216C76.0516%20185.203%2080.5863%20186.385%2084.6555%20184.862C88.2463%20183.574%2090.7633%20179.909%2090.6948%20176.097C90.7288%20148.534%2090.6778%20120.967%2090.7203%2093.4078C90.6309%2092.1841%2091.7912%2091.1731%2092.981%2091.2885C96.1292%2091.267%2099.281%2091.2461%20102.429%2091.297C103.743%2091.267%20104.647%2092.5847%20104.485%2093.8174C104.472%20121.555%20104.519%20149.293%20104.464%20177.03C104.472%20184.423%20101.435%20192.467%2094.5973%20196.084C86.1737%20200.447%2075.7619%20199.522%2067.4399%20195.338C60.2355%20191.742%2053.3603%20187.498%2046.2838%20183.646C41.3661%20181.101%2037.966%20175.782%2038.0006%20170.207V86.1608C37.949%2080.6929%2041.1825%2075.4248%2045.9764%2072.8445C70.6133%2058.9408%2095.2461%2045.0261%20119.878%2031.1164Z'/%3e%3cpath%20fill='%2381CD39'%20d='M141.372%2089.3351C152.117%2088.6433%20163.62%2088.9255%20173.289%2094.2185C180.776%2098.2754%20184.926%20106.789%20185.058%20115.106C184.849%20116.227%20183.676%20116.846%20182.605%20116.769C179.488%20116.765%20176.369%20116.812%20173.252%20116.748C171.929%20116.799%20171.161%20115.58%20170.995%20114.411C170.099%20110.431%20167.928%20106.49%20164.183%20104.57C158.433%20101.692%20151.767%20101.837%20145.497%20101.897C140.92%20102.139%20135.998%20102.536%20132.12%20105.227C129.143%20107.266%20128.239%20111.382%20129.301%20114.697C130.303%20117.077%20133.05%20117.845%20135.299%20118.553C148.248%20121.94%20161.97%20121.602%20174.672%20126.059C179.931%20127.876%20185.075%20131.409%20186.875%20136.915C189.23%20144.295%20188.198%20153.115%20182.947%20159.039C178.689%20163.914%20172.488%20166.568%20166.303%20168.009C158.075%20169.844%20149.536%20169.891%20141.18%20169.076C133.323%20168.18%20125.146%20166.116%20119.081%20160.763C113.894%20156.259%20111.361%20149.241%20111.612%20142.469C111.672%20141.325%20112.811%20140.527%20113.907%20140.621C117.046%20140.596%20120.186%20140.587%20123.325%20140.626C124.58%20140.536%20125.509%20141.62%20125.574%20142.802C126.152%20146.593%20127.577%20150.573%20130.884%20152.82C137.264%20156.937%20145.271%20156.655%20152.577%20156.77C158.63%20156.502%20165.425%20156.421%20170.364%20152.42C172.97%20150.138%20173.742%20146.32%20173.038%20143.036C172.275%20140.263%20169.374%20138.971%20166.883%20138.126C154.1%20134.083%20140.224%20135.55%20127.565%20130.977C122.425%20129.161%20117.455%20125.727%20115.481%20120.447C112.726%20112.974%20113.988%20103.73%20119.789%2098.0061C125.445%2092.312%20133.609%2090.1192%20141.372%2089.3346V89.3351'/%3e%3c/svg%3e",fv=Object.freeze(Object.defineProperty({__proto__:null,default:uv},Symbol.toStringTag,{value:"Module"})),dv="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='256'%20fill='none'%20viewBox='0%200%20256%20256'%3e%3crect%20width='256'%20height='256'%20fill='%23242938'%20rx='60'/%3e%3cpath%20fill='%2300D8FF'%20d='M128.001%20146.951C138.305%20146.951%20146.657%20138.598%20146.657%20128.295C146.657%20117.992%20138.305%20109.639%20128.001%20109.639C117.698%20109.639%20109.345%20117.992%20109.345%20128.295C109.345%20138.598%20117.698%20146.951%20128.001%20146.951Z'/%3e%3cpath%20fill-rule='evenodd'%20stroke='%2300D8FF'%20stroke-width='8.911'%20d='M128.002%2090.3633C153.05%2090.3633%20176.319%2093.9575%20193.864%2099.9976C215.003%20107.275%20228%20118.306%20228%20128.295C228%20138.704%20214.226%20150.423%20191.525%20157.944C174.363%20163.63%20151.779%20166.598%20128.002%20166.598C103.624%20166.598%2080.5389%20163.812%2063.1834%20157.881C41.2255%20150.376%2028%20138.506%2028%20128.295C28%20118.387%2040.4096%20107.441%2061.2515%20100.175C78.8617%2094.0353%20102.705%2090.3633%20127.998%2090.3633H128.002Z'%20clip-rule='evenodd'/%3e%3cpath%20fill-rule='evenodd'%20stroke='%2300D8FF'%20stroke-width='8.911'%20d='M94.9811%20109.438C107.495%2087.7402%20122.232%2069.3783%20136.23%2057.1971C153.094%2042.5206%20169.144%2036.7728%20177.796%2041.7623C186.813%2046.9623%20190.084%2064.7496%20185.259%2088.1712C181.614%20105.879%20172.9%20126.925%20161.021%20147.523C148.842%20168.641%20134.897%20187.247%20121.09%20199.315C103.619%20214.587%2086.7284%20220.114%2077.8833%20215.013C69.3003%20210.067%2066.0181%20193.846%2070.1356%20172.161C73.6145%20153.838%2082.3451%20131.349%2094.977%20109.438L94.9811%20109.438Z'%20clip-rule='evenodd'/%3e%3cpath%20fill-rule='evenodd'%20stroke='%2300D8FF'%20stroke-width='8.911'%20d='M95.0123%20147.578C82.4633%20125.904%2073.9194%20103.962%2070.3531%2085.7517C66.0602%2063.8109%2069.0954%2047.0355%2077.7401%2042.0315C86.7485%2036.8163%20103.792%2042.866%20121.674%2058.7437C135.194%2070.7479%20149.077%2088.8052%20160.99%20109.383C173.204%20130.481%20182.358%20151.856%20185.919%20169.844C190.425%20192.608%20186.778%20210.001%20177.941%20215.116C169.367%20220.08%20153.676%20214.825%20136.945%20200.427C122.809%20188.263%20107.685%20169.468%2095.0123%20147.578Z'%20clip-rule='evenodd'/%3e%3c/svg%3e",hv=Object.freeze(Object.defineProperty({__proto__:null,default:dv},Symbol.toStringTag,{value:"Module"})),pv="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%23764ABC'/%3e%3cpath%20d='M166.579%20165.599C173.96%20164.835%20179.559%20158.472%20179.304%20150.837C179.05%20143.202%20172.687%20137.094%20165.052%20137.094H164.543C156.653%20137.348%20150.545%20143.965%20150.799%20151.855C151.054%20155.673%20152.581%20158.981%20154.871%20161.272C146.218%20178.324%20132.984%20190.795%20113.132%20201.23C99.6432%20208.356%2085.6452%20210.901%2071.6472%20209.12C60.1944%20207.593%2051.2866%20202.502%2045.6874%20194.104C37.5431%20181.633%2036.7796%20168.144%2043.6513%20154.655C48.487%20144.983%2056.1222%20137.857%2060.9579%20134.294C59.9399%20130.986%2058.4128%20125.386%2057.6493%20121.314C20.7456%20148.038%2024.5632%20184.178%2035.7615%20201.23C44.1603%20213.955%2061.2124%20221.845%2080.046%20221.845C85.1362%20221.845%2090.2264%20221.336%2095.3165%20220.063C127.894%20213.701%20152.581%20194.358%20166.579%20165.599V165.599Z'%20fill='white'/%3e%3cpath%20d='M211.372%20134.04C192.03%20111.388%20163.525%2098.9175%20130.948%2098.9175H126.876C124.585%2094.3363%20119.749%2091.2822%20114.405%2091.2822H113.896C106.006%2091.5367%2099.8977%2098.154%20100.152%20106.044C100.407%20113.679%20106.769%20119.787%20114.405%20119.787H114.914C120.513%20119.533%20125.349%20115.97%20127.385%20111.134H131.966C151.308%20111.134%20169.633%20116.733%20186.176%20127.677C198.901%20136.076%20208.064%20147.02%20213.154%20160.254C217.481%20170.943%20217.226%20181.378%20212.645%20190.286C205.519%20203.775%20193.557%20211.156%20177.777%20211.156C167.597%20211.156%20157.926%20208.102%20152.835%20205.811C150.036%20208.356%20144.946%20212.428%20141.383%20214.973C152.326%20220.063%20163.525%20222.863%20174.214%20222.863C198.647%20222.863%20216.717%20209.374%20223.589%20195.885C230.97%20181.124%20230.461%20155.673%20211.372%20134.04Z'%20fill='white'/%3e%3cpath%20d='M82.0822%20169.926C82.3367%20177.561%2088.6994%20183.669%2096.3347%20183.669H96.8437C104.733%20183.414%20110.842%20176.797%20110.587%20168.907C110.333%20161.272%20103.97%20155.164%2096.3347%20155.164H95.8256C95.3166%20155.164%2094.5531%20155.164%2094.0441%20155.419C83.6092%20138.112%2079.2826%20119.278%2080.8096%2098.9177C81.8277%2083.6472%2086.9178%2070.4127%2095.8256%2059.4689C103.206%2050.0521%20117.459%2045.4709%20127.13%2045.2164C154.108%2044.7074%20165.561%2078.3025%20166.324%2091.7915C169.633%2092.555%20175.232%2094.3365%20179.05%2095.6091C175.996%2054.3787%20150.545%2033%20126.112%2033C103.206%2033%2082.0822%2049.543%2073.6834%2073.9759C61.976%20106.553%2069.6113%20137.857%2083.8637%20162.545C82.5912%20164.326%2081.8277%20167.126%2082.0822%20169.926V169.926Z'%20fill='white'/%3e%3c/svg%3e",mv=Object.freeze(Object.defineProperty({__proto__:null,default:pv},Symbol.toStringTag,{value:"Module"})),gv="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%23242938'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M93.213%20222.94L50%2048L223.23%2097.874L93.213%20222.94Z'%20stroke='white'%20stroke-width='4'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M136.583%2072.9419L158.174%20160.438L71.6071%20135.493L136.583%2072.9419Z'%20stroke='white'%20stroke-width='4'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M115.103%20147.36L104.379%20103.895L147.387%20116.241L115.103%20147.36Z'%20stroke='white'%20stroke-width='4'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M93.6509%2060.4829L104.375%20103.948L61.3669%2091.6019L93.6509%2060.4829Z'%20stroke='white'%20stroke-width='4'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M179.663%2085.2598L190.387%20128.725L147.379%20116.379L179.663%2085.2598Z'%20stroke='white'%20stroke-width='4'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M115.108%20147.39L125.832%20190.855L82.824%20178.509L115.108%20147.39Z'%20stroke='white'%20stroke-width='4'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3c/svg%3e",_v=Object.freeze(Object.defineProperty({__proto__:null,default:gv},Symbol.toStringTag,{value:"Module"})),vv="data:image/svg+xml,%3csvg%20width='256'%20height='256'%20viewBox='0%200%20256%20256'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='256'%20height='256'%20rx='60'%20fill='%23242938'/%3e%3cpath%20d='M227.088%2057.6016L133.256%20225.389C131.318%20228.854%20126.341%20228.874%20124.375%20225.427L28.6823%2057.6177C26.54%2053.861%2029.7524%2049.3105%2034.0096%2050.0715L127.942%2066.8613C128.541%2066.9684%20129.155%2066.9674%20129.754%2066.8582L221.722%2050.0955C225.965%2049.3222%20229.192%2053.8374%20227.088%2057.6016Z'%20fill='url(%23paint0_linear_307_179)'/%3e%3cpath%20d='M172.687%2028.0492L103.249%2041.6554C102.107%2041.879%20101.262%2042.8462%20101.194%2044.007L96.9221%20116.148C96.8216%20117.847%2098.3821%20119.166%20100.04%20118.783L119.373%20114.322C121.182%20113.905%20122.816%20115.498%20122.445%20117.317L116.701%20145.443C116.314%20147.336%20118.092%20148.954%20119.94%20148.393L131.881%20144.765C133.732%20144.203%20135.511%20145.826%20135.119%20147.721L125.991%20191.9C125.42%20194.664%20129.096%20196.171%20130.629%20193.801L131.653%20192.219L188.235%2079.2992C189.183%2077.4085%20187.549%2075.2526%20185.472%2075.6534L165.573%2079.494C163.703%2079.8545%20162.112%2078.113%20162.639%2076.2834L175.628%2031.2582C176.156%2029.4255%20174.559%2027.6825%20172.687%2028.0492Z'%20fill='url(%23paint1_linear_307_179)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_307_179'%20x1='26.3459'%20y1='44.075'%20x2='143.127'%20y2='202.673'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2341D1FF'/%3e%3cstop%20offset='1'%20stop-color='%23BD34FE'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_307_179'%20x1='122.551'%20y1='31.7433'%20x2='143.676'%20y2='176.66'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFEA83'/%3e%3cstop%20offset='0.0833333'%20stop-color='%23FFDD35'/%3e%3cstop%20offset='1'%20stop-color='%23FFA800'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",xv=Object.freeze(Object.defineProperty({__proto__:null,default:vv},Symbol.toStringTag,{value:"Module"})),Sv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAAC1pJREFUeF7t3b+SHEUSgPHhEYR957BYrIMhhwcg9AJINjY4BA9wG3oBAgdsuQheQHHOeTgy1llZLA5nEugR7qJXMSG0/7p7snpUWfkbR05lT+WXWV9Vz860PvjX+Z//23khgEBJAh8QQMm6SxqBKwIEoBEQKEyAAAoXX+oIEIAeQKAwAQIoXHypI0AAegCBwgQIoHDxpY4AAegBBAoTIIDCxZc6AgSgBxAoTIAAChdf6ggQgB5AoDABAihcfKkjQAB6AIHCBAigcPGljgAB6AEEChMggMLFlzoCBKAHEChMgAAKF1/qCBCAHkCgMAECKFx8qSNAAHoAgcIECKBw8aWOAAHoAQQKEyCAwsWXOgIEoAcQKEyAAAoXX+oIEIAeQKAwAQIoXHypI0AAegCBwgQIoHDxpY4AAegBBAoTIIDCxZc6AgSgBxAoTIAAChdf6ggQgB5AoDABAihcfKkjQAB6AIHCBAigcPGljgAB6AEEChMggMLFlzoCBKAHEChMgAAKF1/qCBCAHkCgMAECKFx8qSNAAHoAgcIECKBw8aWOAAHoAQQKEyCAwsWXOgIEoAcQKEyAAAoXX+oIEIAeQKAwAQIoXHypI0AAegCBwgQIoHDxpY4AAegBBAoTIIDCxZc6AgSgBxAoTIAAChdf6ggQgB5AoDABAihcfKkjQAB6AIHCBAigcPGljgAB6AEEChMggMLFlzoCBKAHEChMgAAKF1/qCBCAHkCgMAECKFx8qSNAAHoAgcIECKBw8aWOAAHoAQQKEyCAwsWXOgIEoAcQKEyAAAoXX+oIEIAeQKAwAQIoXHypI1BCAK8vL64q/fq3N/96jUfgwcenuwcnp+MltnFGwwpgWvSXL55b9Bs3UG+Xn0Tw4cnp7qNHT3qbWpfzGVIAv794frX4veoSOHn0hAQWlH84Abz88cyuv6DwVYY8/PqpW4N7ij2UAOz8VZb1ujw//+6XdQGFRg8jAIu/UNeuTHX6XODhV09XRtUYPowA/v3tFzUqJsuDCLgVuB3bEAKw+x+0JkoFOQUQQKmGl+y7BAhgYAH45N9yX0LAh4E3KQ1xC+D+f0n7G+NzAAKwCgoTIAACKNz+UicAArAKChMgAAIo3P5SJwACsAoKEyAAAijc/lInAAKwCgoTIAACKNz+UicAArAKChMgAAKYbf9PP/nn7svHn82OM2B7As9+/nV3/uqPZm80/R5gyWt6pNj0qvCcQV8FvtYRkwC+P3u8pE+M2ZjAs19+3U0SeN+vkR8vRgAE8L7X153v34sA9qeBSQSjPXmYAAiAAFYQGO1zBAIggBXtf9yhPZ0A9pmP9lwBAiCA467qFe/WowD2twOjPGOQAAhgxZI87tBeBTBRGOVWgAAI4LiresW79SyAUf4yQAAEsGJJHndozwIY5bMAAiCA467qFe9GACtgHTiUAA4UwNSc5xf/PRD7mGHTNyg//eQfzZLrWQBTkiM8ZJQAAgLo4VtqzVZbgwv956dvG1zl7SUIoCnOWy9GAATQpMum3f/LL9r+hoIAmpTm3osQAAE06bLWu/80KQJoUhoCWINx6Y+Bem/ONTlHx26x+xNAtCrL4p0AnACWdco9o7bY/QkgXJZFFyAAAljUKHcN2mr3J4BQWRYHEwABLG6W2wZutfsTQKgsi4MJgAAWN8v1gVvu/gRwcFlWBRIAAaxqmL8P3nL3J4CDy7IqkAAIYFXD7AdvvfsfNKmZoG+e/tz0GYO+CbhFlQ64Zsv/HtyfAZcVYOvdf9ks1o0igJu8nACcANatot3u6qnJrb/1t3oSBwQQAAHMto0TwCyiXcbdf8qKAAhgtrsJ4H5EWXd/Ari9rm4B3ALMSvGYn/yvmszKwU4ATgCzLeMEcDeizLu/E4ATwOzinwYQwN2Yst777zNyAnACmJUAAdyOKPvu7wTgBDC7+J0Axt39CYAACGARgZuDRtj9CYAAFrW/W4CbmLLf+/sM4O7W92fAa2wI4F0go+z+TgBOAE4Aiwi8O2iU3Z8ACGBR+zsBvMU00u5PAARAAIsIvB000u5PAASwqP2dAN5gGm33JwACIIBFBN4MGm33JwACWNT+TgBj7v4EQAAEsIhAP7v/+au2//nq9H85nr/6YyGF+WEeCTbP6CgjPBKsHeae7v17/9+XCKBd34WuRAAhfO8E93TvTwDt6nrXlXwT8BqZyp8B9LT7T2UhAAJYRMAJYBGm2UE97f4EMFuuJgOcAJwArgj0tvsTQJP1PXsRAiCAKwK97f4EMLt2mwwgAALocvcngCbre/YiBEAAXe7+BDC7dpsMIIDiAujx3n9fEn8FaLLG770IARwogOlbatM3y7K/vj973G0KBLB9aQjgQAFsXxrvQADb9wABEMD2XXbgO/QsgJNHT3YfPXpyYGb9hBEAAfTTjddmQgDbl4YACGD7LjvwHXoWwMOvn+4enJwemFk/YQRAAP10Y5ITwCjH/wk3ARAAAawkMMLPgPcpEwABrGz/4w3v8RZgpN3fCeCWXl76c+DjLYO679STAB58fLqbFv8I9/1/7ygnACeAbg3TiwBG2/UJ4J6Wn04A09djvd4/gen5fS2/bTnt4ktf06KfXqPt+NfzdwJY2hHGpScwyp/uWhaCAFrSdK2uCRDAzfIQQNcta3ItCRAAAbTsJ9dKRoAACCBZy5puSwIEQAAt+8m1khEgAAJI1rKm25IAARBAy35yrWQECIAAkrWs6bYkQAAE0LKfXCsZAQIYVAAvfzzbvf7tIlk7mu6xCYz0M95W7Ib4IhABtGqHsa9DAIOeAF5fXuxe/nA2dvfKLkRg5F/0RcAMcQIggEgL1IglgNvrPIQAptR+f/F8d/nieY1uluUqAhb/3biGEcCUos8CVq2LMoPd+xcRgFuBMmt6caJ2//tRDXUC2KfqdmDx+hh24KjP8GtdsCEFsP9M4K/LC98PaN0xnV9vWvgfnpwO8d92HQP1sAK4Dm86FXiNSWD/rL/Rn9+3RfXKCGALeK6JQHYCBJC9guaPQIAAAQTgCUUgOwECyF5B80cgQIAAAvCEIpCdAAFkr6D5IxAgQAABeEIRyE6AALJX0PwRCBAggAA8oQhkJ0AA2Sto/ggECBBAAJ5QBLITIIDsFTR/BAIECCAATygC2QkQQPYKmj8CAQIEEIAnFIHsBAggewXNH4EAAQIIwBOKQHYCBJC9guaPQIAAAQTgCUUgOwECyF5B80cgQIAAAvCEIpCdAAFkr6D5IxAgQAABeEIRyE6AALJX0PwRCBAggAA8oQhkJ0AA2Sto/ggECBBAAJ5QBLITIIDsFTR/BAIECCAATygC2QkQQPYKmj8CAQIEEIAnFIHsBAggewXNH4EAAQIIwBOKQHYCBJC9guaPQIAAAQTgCUUgOwECyF5B80cgQIAAAvCEIpCdAAFkr6D5IxAgQAABeEIRyE6AALJX0PwRCBAggAA8oQhkJ0AA2Sto/ggECBBAAJ5QBLITIIDsFTR/BAIECCAATygC2QkQQPYKmj8CAQIEEIAnFIHsBAggewXNH4EAAQIIwBOKQHYCBJC9guaPQIAAAQTgCUUgOwECyF5B80cgQIAAAvCEIpCdAAFkr6D5IxAgQAABeEIRyE6AALJX0PwRCBAggAA8oQhkJ0AA2Sto/ggECBBAAJ5QBLITIIDsFTR/BAIECCAATygC2QkQQPYKmj8CAQIEEIAnFIHsBAggewXNH4EAAQIIwBOKQHYCBJC9guaPQIAAAQTgCUUgOwECyF5B80cgQIAAAvCEIpCdAAFkr6D5IxAgQAABeEIRyE6AALJX0PwRCBAggAA8oQhkJ0AA2Sto/ggECBBAAJ5QBLITIIDsFTR/BAIECCAATygC2QkQQPYKmj8CAQL/B56a/VuhRin/AAAAAElFTkSuQmCC",yv=Object.freeze(Object.defineProperty({__proto__:null,default:Sv},Symbol.toStringTag,{value:"Module"})),Mv="/yanny-portfolio/assets/Gooselator-CP5A0a-J.png",Ev=Object.freeze(Object.defineProperty({__proto__:null,default:Mv},Symbol.toStringTag,{value:"Module"})),Av="/yanny-portfolio/assets/REC2022-World-Growth-Engine-BaHqX_WY.png",Tv=Object.freeze(Object.defineProperty({__proto__:null,default:Av},Symbol.toStringTag,{value:"Module"})),bv="/yanny-portfolio/assets/Simple-GPU-CIV3hCDc.png",Cv=Object.freeze(Object.defineProperty({__proto__:null,default:bv},Symbol.toStringTag,{value:"Module"})),Rv="/yanny-portfolio/assets/pixel-draw-C9sAgP7d.png",wv=Object.freeze(Object.defineProperty({__proto__:null,default:Rv},Symbol.toStringTag,{value:"Module"})),Dv="/yanny-portfolio/assets/yanny-portfolio-oiRU8jOF.png",Uv=Object.freeze(Object.defineProperty({__proto__:null,default:Dv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const J0="175",Lv=0,qp=1,Nv=2,q1=1,Ov=2,Ki=3,Fa=0,In=1,Ji=2,Ia=0,ps=1,Yp=2,jp=3,Zp=4,Pv=5,mr=100,Bv=101,Iv=102,zv=103,Fv=104,Hv=200,Gv=201,Vv=202,kv=203,u0=204,f0=205,Xv=206,Wv=207,qv=208,Yv=209,jv=210,Zv=211,Qv=212,Kv=213,Jv=214,d0=0,h0=1,p0=2,gs=3,m0=4,g0=5,_0=6,v0=7,Y1=0,$v=1,t3=2,za=0,e3=1,n3=2,i3=3,a3=4,r3=5,s3=6,o3=7,j1=300,_s=301,vs=302,x0=303,S0=304,yc=306,y0=1e3,_r=1001,M0=1002,pi=1003,l3=1004,kl=1005,Ei=1006,Nf=1007,vr=1008,na=1009,Z1=1010,Q1=1011,Ao=1012,$0=1013,xr=1014,$i=1015,Ro=1016,td=1017,ed=1018,To=1020,K1=35902,J1=1021,$1=1022,hi=1023,tm=1024,em=1025,bo=1026,Co=1027,nm=1028,nd=1029,im=1030,id=1031,ad=1033,fc=33776,dc=33777,hc=33778,pc=33779,E0=35840,A0=35841,T0=35842,b0=35843,C0=36196,R0=37492,w0=37496,D0=37808,U0=37809,L0=37810,N0=37811,O0=37812,P0=37813,B0=37814,I0=37815,z0=37816,F0=37817,H0=37818,G0=37819,V0=37820,k0=37821,mc=36492,X0=36494,W0=36495,am=36283,q0=36284,Y0=36285,j0=36286,c3=3200,u3=3201,f3=0,d3=1,Ba="",ai="srgb",xs="srgb-linear",vc="linear",Oe="srgb",Jr=7680,Qp=519,h3=512,p3=513,m3=514,rm=515,g3=516,_3=517,v3=518,x3=519,Kp=35044,Jp="300 es",ta=2e3,xc=2001;class ys{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Of=Math.PI/180,Z0=180/Math.PI;function wo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function S3(o,e){return(o%e+e)%e}function Pf(o,e,i){return(1-i)*o+i*e}function vo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,i=0){ze.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ae{constructor(e,i,r,l,u,d,h,m,p){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],M=r[5],E=r[8],b=l[0],y=l[3],_=l[6],B=l[1],O=l[4],D=l[7],G=l[2],V=l[5],z=l[8];return u[0]=d*b+h*B+m*G,u[3]=d*y+h*O+m*V,u[6]=d*_+h*D+m*z,u[1]=p*b+g*B+v*G,u[4]=p*y+g*O+v*V,u[7]=p*_+g*D+v*z,u[2]=x*b+M*B+E*G,u[5]=x*y+M*O+E*V,u[8]=x*_+M*D+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-r*u*g+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=g*d-h*p,x=h*m-g*u,M=p*u-d*m,E=i*v+r*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=v*b,e[1]=(l*p-g*r)*b,e[2]=(h*r-l*d)*b,e[3]=x*b,e[4]=(g*i-l*m)*b,e[5]=(l*u-h*i)*b,e[6]=M*b,e[7]=(r*m-p*i)*b,e[8]=(d*i-r*u)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Bf.makeScale(e,i)),this}rotate(e){return this.premultiply(Bf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Bf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bf=new ae;function sm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Sc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function y3(){const o=Sc("canvas");return o.style.display="block",o}const $p={};function gc(o){o in $p||($p[o]=!0,console.warn(o))}function M3(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function E3(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function A3(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const t1=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e1=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T3(){const o={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Oe&&(l.r=ea(l.r),l.g=ea(l.g),l.b=ea(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Oe&&(l.r=ms(l.r),l.g=ms(l.g),l.b=ms(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ba?vc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[xs]:{primaries:e,whitePoint:r,transfer:vc,toXYZ:t1,fromXYZ:e1,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:Oe,toXYZ:t1,fromXYZ:e1,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),o}const Ae=T3();function ea(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ms(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let $r;class b3{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{$r===void 0&&($r=Sc("canvas")),$r.width=e.width,$r.height=e.height;const l=$r.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=$r}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Sc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ea(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ea(i[r]/255)*255):i[r]=ea(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C3=0;class rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C3++}),this.uuid=wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(If(l[d].image)):u.push(If(l[d]))}else u=If(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function If(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?b3.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R3=0;class zn extends ys{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=_r,l=_r,u=Ei,d=vr,h=hi,m=na,p=zn.DEFAULT_ANISOTROPY,g=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R3++}),this.uuid=wo(),this.name="",this.source=new rd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case y0:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case M0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case y0:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case M0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=j1;zn.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,i=0,r=0,l=1){Ke.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],E=m[9],b=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-b)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+b)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(M+1)/2,G=(_+1)/2,V=(g+x)/4,z=(v+b)/4,j=(E+y)/4;return O>D&&O>G?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=V/r,u=z/r):D>G?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=V/l,u=j/l):G<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(G),r=z/u,l=j/u),this.set(r,l,u,i),this}let B=Math.sqrt((y-E)*(y-E)+(v-b)*(v-b)+(x-g)*(x-g));return Math.abs(B)<.001&&(B=1),this.x=(y-E)/B,this.y=(v-b)/B,this.z=(x-g)/B,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w3 extends ys{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ke(0,0,e,i),this.scissorTest=!1,this.viewport=new Ke(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new zn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new rd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends w3{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class om extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D3 extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[d+0],M=u[d+1],E=u[d+2],b=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(h===1){e[i+0]=x,e[i+1]=M,e[i+2]=E,e[i+3]=b;return}if(v!==b||m!==x||p!==M||g!==E){let y=1-h;const _=m*x+p*M+g*E+v*b,B=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const G=Math.sqrt(O),V=Math.atan2(G,_*B);y=Math.sin(y*V)/G,h=Math.sin(h*V)/G}const D=h*B;if(m=m*y+x*D,p=p*y+M*D,g=g*y+E*D,v=v*y+b*D,y===1-h){const G=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=G,p*=G,g*=G,v*=G}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[d],x=u[d+1],M=u[d+2],E=u[d+3];return e[i]=h*E+g*v+m*M-p*x,e[i+1]=m*E+g*x+p*v-h*M,e[i+2]=p*E+g*M+h*x-m*v,e[i+3]=g*E-h*v-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(u/2),x=m(r/2),M=m(l/2),E=m(u/2);switch(d){case"XYZ":this._x=x*g*v+p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v-x*M*E;break;case"YXZ":this._x=x*g*v+p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v+x*M*E;break;case"ZXY":this._x=x*g*v-p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v-x*M*E;break;case"ZYX":this._x=x*g*v-p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v+x*M*E;break;case"YZX":this._x=x*g*v+p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v-x*M*E;break;case"XZY":this._x=x*g*v-p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+h+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>v){const M=2*Math.sqrt(1+r-h-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-r-v);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-u*m,this._y=l*g+d*m+u*h-r*p,this._z=u*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=d*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(n1.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(n1.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),g=2*(h*i-u*l),v=2*(u*r-d*i);return this.x=i+m*p+d*v-h*g,this.y=r+m*g+h*p-u*v,this.z=l+m*v+u*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zf.copy(this).projectOnVector(e),this.sub(zf)}reflect(e){return this.sub(zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zf=new rt,n1=new Do;class Uo{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,ci):ci.fromBufferAttribute(u,d),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xl.copy(r.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Wl.subVectors(this.max,xo),ts.subVectors(e.a,xo),es.subVectors(e.b,xo),ns.subVectors(e.c,xo),Da.subVectors(es,ts),Ua.subVectors(ns,es),or.subVectors(ts,ns);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-or.z,or.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,or.z,0,-or.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-or.y,or.x,0];return!Ff(i,ts,es,ns,Wl)||(i=[1,0,0,0,1,0,0,0,1],!Ff(i,ts,es,ns,Wl))?!1:(ql.crossVectors(Da,Ua),i=[ql.x,ql.y,ql.z],Ff(i,ts,es,ns,Wl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],ci=new rt,Xl=new Uo,ts=new rt,es=new rt,ns=new rt,Da=new rt,Ua=new rt,or=new rt,xo=new rt,Wl=new rt,ql=new rt,lr=new rt;function Ff(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){lr.fromArray(o,u);const h=l.x*Math.abs(lr.x)+l.y*Math.abs(lr.y)+l.z*Math.abs(lr.z),m=e.dot(lr),p=i.dot(lr),g=r.dot(lr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const U3=new Uo,So=new rt,Hf=new rt;class sd{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):U3.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const i=So.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(So,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(Hf)),this.expandByPoint(So.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new rt,Gf=new rt,Yl=new rt,La=new rt,Vf=new rt,jl=new rt,kf=new rt;class L3{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Yi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,i),Yi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Gf.copy(e).add(i).multiplyScalar(.5),Yl.copy(i).sub(e).normalize(),La.copy(this.origin).sub(Gf);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Yl),h=La.dot(this.direction),m=-La.dot(Yl),p=La.lengthSq(),g=Math.abs(1-d*d);let v,x,M,E;if(g>0)if(v=d*m-h,x=d*h-m,E=u*g,v>=0)if(x>=-E)if(x<=E){const b=1/g;v*=b,x*=b,M=v*(v+d*x+2*h)+x*(d*v+x+2*m)+p}else x=u,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-d*u+h)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(d*u+h)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=d>0?-u:u,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Gf).addScaledVector(Yl,x),M}intersectSphere(e,i){Yi.subVectors(e.center,this.origin);const r=Yi.dot(this.direction),l=Yi.dot(Yi)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(h=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,i,r,l,u){Vf.subVectors(i,e),jl.subVectors(r,e),kf.crossVectors(Vf,jl);let d=this.direction.dot(kf),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;La.subVectors(this.origin,e);const m=h*this.direction.dot(jl.crossVectors(La,jl));if(m<0)return null;const p=h*this.direction.dot(Vf.cross(La));if(p<0||m+p>d)return null;const g=-h*La.dot(kf);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,i,r,l,u,d,h,m,p,g,v,x,M,E,b,y){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,g,v,x,M,E,b,y)}set(e,i,r,l,u,d,h,m,p,g,v,x,M,E,b,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=E,_[11]=b,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/is.setFromMatrixColumn(e,0).length(),u=1/is.setFromMatrixColumn(e,1).length(),d=1/is.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=d*g,M=d*v,E=h*g,b=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+E*p,i[5]=x-b*p,i[9]=-h*m,i[2]=b-x*p,i[6]=E+M*p,i[10]=d*m}else if(e.order==="YXZ"){const x=m*g,M=m*v,E=p*g,b=p*v;i[0]=x+b*h,i[4]=E*h-M,i[8]=d*p,i[1]=d*v,i[5]=d*g,i[9]=-h,i[2]=M*h-E,i[6]=b+x*h,i[10]=d*m}else if(e.order==="ZXY"){const x=m*g,M=m*v,E=p*g,b=p*v;i[0]=x-b*h,i[4]=-d*v,i[8]=E+M*h,i[1]=M+E*h,i[5]=d*g,i[9]=b-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const x=d*g,M=d*v,E=h*g,b=h*v;i[0]=m*g,i[4]=E*p-M,i[8]=x*p+b,i[1]=m*v,i[5]=b*p+x,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const x=d*m,M=d*p,E=h*m,b=h*p;i[0]=m*g,i[4]=b-x*v,i[8]=E*v+M,i[1]=v,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*v+E,i[10]=x-b*v}else if(e.order==="XZY"){const x=d*m,M=d*p,E=h*m,b=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+b,i[5]=d*g,i[9]=M*v-E,i[2]=E*v-M,i[6]=h*g,i[10]=b*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N3,e,O3)}lookAt(e,i,r){const l=this.elements;return jn.subVectors(e,i),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Na.crossVectors(r,jn),Na.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Na.crossVectors(r,jn)),Na.normalize(),Zl.crossVectors(jn,Na),l[0]=Na.x,l[4]=Zl.x,l[8]=jn.x,l[1]=Na.y,l[5]=Zl.y,l[9]=jn.y,l[2]=Na.z,l[6]=Zl.z,l[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],M=r[13],E=r[2],b=r[6],y=r[10],_=r[14],B=r[3],O=r[7],D=r[11],G=r[15],V=l[0],z=l[4],j=l[8],w=l[12],R=l[1],H=l[5],lt=l[9],st=l[13],gt=l[2],dt=l[6],P=l[10],Z=l[14],q=l[3],Mt=l[7],U=l[11],$=l[15];return u[0]=d*V+h*R+m*gt+p*q,u[4]=d*z+h*H+m*dt+p*Mt,u[8]=d*j+h*lt+m*P+p*U,u[12]=d*w+h*st+m*Z+p*$,u[1]=g*V+v*R+x*gt+M*q,u[5]=g*z+v*H+x*dt+M*Mt,u[9]=g*j+v*lt+x*P+M*U,u[13]=g*w+v*st+x*Z+M*$,u[2]=E*V+b*R+y*gt+_*q,u[6]=E*z+b*H+y*dt+_*Mt,u[10]=E*j+b*lt+y*P+_*U,u[14]=E*w+b*st+y*Z+_*$,u[3]=B*V+O*R+D*gt+G*q,u[7]=B*z+O*H+D*dt+G*Mt,u[11]=B*j+O*lt+D*P+G*U,u[15]=B*w+O*st+D*Z+G*$,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],M=e[14],E=e[3],b=e[7],y=e[11],_=e[15];return E*(+u*m*v-l*p*v-u*h*x+r*p*x+l*h*M-r*m*M)+b*(+i*m*M-i*p*x+u*d*x-l*d*M+l*p*g-u*m*g)+y*(+i*p*v-i*h*M-u*d*v+r*d*M+u*h*g-r*p*g)+_*(-l*h*g-i*m*v+i*h*x+l*d*v-r*d*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],M=e[11],E=e[12],b=e[13],y=e[14],_=e[15],B=v*y*p-b*x*p+b*m*M-h*y*M-v*m*_+h*x*_,O=E*x*p-g*y*p-E*m*M+d*y*M+g*m*_-d*x*_,D=g*b*p-E*v*p+E*h*M-d*b*M-g*h*_+d*v*_,G=E*v*m-g*b*m-E*h*x+d*b*x+g*h*y-d*v*y,V=i*B+r*O+l*D+u*G;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/V;return e[0]=B*z,e[1]=(b*x*u-v*y*u-b*l*M+r*y*M+v*l*_-r*x*_)*z,e[2]=(h*y*u-b*m*u+b*l*p-r*y*p-h*l*_+r*m*_)*z,e[3]=(v*m*u-h*x*u-v*l*p+r*x*p+h*l*M-r*m*M)*z,e[4]=O*z,e[5]=(g*y*u-E*x*u+E*l*M-i*y*M-g*l*_+i*x*_)*z,e[6]=(E*m*u-d*y*u-E*l*p+i*y*p+d*l*_-i*m*_)*z,e[7]=(d*x*u-g*m*u+g*l*p-i*x*p-d*l*M+i*m*M)*z,e[8]=D*z,e[9]=(E*v*u-g*b*u-E*r*M+i*b*M+g*r*_-i*v*_)*z,e[10]=(d*b*u-E*h*u+E*r*p-i*b*p-d*r*_+i*h*_)*z,e[11]=(g*h*u-d*v*u-g*r*p+i*v*p+d*r*M-i*h*M)*z,e[12]=G*z,e[13]=(g*b*l-E*v*l+E*r*x-i*b*x-g*r*y+i*v*y)*z,e[14]=(E*h*l-d*b*l-E*r*m+i*b*m+d*r*y-i*h*y)*z,e[15]=(d*v*l-g*h*l+g*r*m-i*v*m-d*r*x+i*h*x)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,g=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,g=d+d,v=h+h,x=u*p,M=u*g,E=u*v,b=d*g,y=d*v,_=h*v,B=m*p,O=m*g,D=m*v,G=r.x,V=r.y,z=r.z;return l[0]=(1-(b+_))*G,l[1]=(M+D)*G,l[2]=(E-O)*G,l[3]=0,l[4]=(M-D)*V,l[5]=(1-(x+_))*V,l[6]=(y+B)*V,l[7]=0,l[8]=(E+O)*z,l[9]=(y-B)*z,l[10]=(1-(x+b))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=is.set(l[0],l[1],l[2]).length();const d=is.set(l[4],l[5],l[6]).length(),h=is.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],ui.copy(this);const p=1/u,g=1/d,v=1/h;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=g,ui.elements[5]*=g,ui.elements[6]*=g,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,i.setFromRotationMatrix(ui),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=ta){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),x=(r+l)/(r-l);let M,E;if(h===ta)M=-(d+u)/(d-u),E=-2*d*u/(d-u);else if(h===xc)M=-d/(d-u),E=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=ta){const m=this.elements,p=1/(i-e),g=1/(r-l),v=1/(d-u),x=(i+e)*p,M=(r+l)*g;let E,b;if(h===ta)E=(d+u)*v,b=-2*v;else if(h===xc)E=u*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=b,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const is=new rt,ui=new an,N3=new rt(0,0,0),O3=new rt(1,1,1),Na=new rt,Zl=new rt,jn=new rt,i1=new an,a1=new Do;class ia{constructor(e=0,i=0,r=0,l=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(ve(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return i1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(i1,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return a1.setFromEuler(this),this.setFromQuaternion(a1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class lm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P3=0;const r1=new rt,as=new Do,ji=new an,Ql=new rt,yo=new rt,B3=new rt,I3=new Do,s1=new rt(1,0,0),o1=new rt(0,1,0),l1=new rt(0,0,1),c1={type:"added"},z3={type:"removed"},rs={type:"childadded",child:null},Xf={type:"childremoved",child:null};class Fn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P3++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new rt,i=new ia,r=new Do,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new ae}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(s1,e)}rotateY(e){return this.rotateOnAxis(o1,e)}rotateZ(e){return this.rotateOnAxis(l1,e)}translateOnAxis(e,i){return r1.copy(e).applyQuaternion(this.quaternion),this.position.add(r1.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(s1,e)}translateY(e){return this.translateOnAxis(o1,e)}translateZ(e){return this.translateOnAxis(l1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ql.copy(e):Ql.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(yo,Ql,this.up):ji.lookAt(Ql,yo,this.up),this.quaternion.setFromRotationMatrix(ji),l&&(ji.extractRotation(l.matrixWorld),as.setFromRotationMatrix(ji),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(c1),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(z3),Xf.child=e,this.dispatchEvent(Xf),Xf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(c1),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,e,B3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,I3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),v=d(e.shapes),x=d(e.skeletons),M=d(e.animations),E=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new rt(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new rt,Zi=new rt,Wf=new rt,Qi=new rt,ss=new rt,os=new rt,u1=new rt,qf=new rt,Yf=new rt,jf=new rt,Zf=new Ke,Qf=new Ke,Kf=new Ke;class di{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),fi.subVectors(e,i),l.cross(fi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){fi.subVectors(l,i),Zi.subVectors(r,i),Wf.subVectors(e,i);const d=fi.dot(fi),h=fi.dot(Zi),m=fi.dot(Wf),p=Zi.dot(Zi),g=Zi.dot(Wf),v=d*p-h*h;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-h*g)*x,E=(d*g-h*m)*x;return u.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,Qi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Qi.x),m.addScaledVector(d,Qi.y),m.addScaledVector(h,Qi.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return Zf.setScalar(0),Qf.setScalar(0),Kf.setScalar(0),Zf.fromBufferAttribute(e,i),Qf.fromBufferAttribute(e,r),Kf.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Zf,u.x),d.addScaledVector(Qf,u.y),d.addScaledVector(Kf,u.z),d}static isFrontFacing(e,i,r,l){return fi.subVectors(r,i),Zi.subVectors(e,i),fi.cross(Zi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),fi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return di.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;ss.subVectors(l,r),os.subVectors(u,r),qf.subVectors(e,r);const m=ss.dot(qf),p=os.dot(qf);if(m<=0&&p<=0)return i.copy(r);Yf.subVectors(e,l);const g=ss.dot(Yf),v=os.dot(Yf);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(ss,d);jf.subVectors(e,u);const M=ss.dot(jf),E=os.dot(jf);if(E>=0&&M<=E)return i.copy(u);const b=M*p-m*E;if(b<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(os,h);const y=g*E-M*v;if(y<=0&&v-g>=0&&M-E>=0)return u1.subVectors(u,l),h=(v-g)/(v-g+(M-E)),i.copy(l).addScaledVector(u1,h);const _=1/(y+b+x);return d=b*_,h=x*_,i.copy(r).addScaledVector(ss,d).addScaledVector(os,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function Jf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Re{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ae.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ae.workingColorSpace){if(e=S3(e,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Jf(d,u,e+1/3),this.g=Jf(d,u,e),this.b=Jf(d,u,e-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(e,i=ai){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ai){const r=cm[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Ae.fromWorkingColorSpace(Cn.copy(this),e),Math.round(ve(Cn.r*255,0,255))*65536+Math.round(ve(Cn.g*255,0,255))*256+Math.round(ve(Cn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=g<=.5?v/(d+h):v/(2-d-h),d){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ai){Ae.fromWorkingColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==ai?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+e,Oa.s+i,Oa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Oa),e.getHSL(Kl);const r=Pf(Oa.h,Kl.h,i),l=Pf(Oa.s,Kl.s,i),u=Pf(Oa.l,Kl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Re;Re.NAMES=cm;let F3=0;class Mc extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F3++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=ps,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=u0,this.blendDst=f0,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(r.blending=this.blending),this.side!==Fa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==u0&&(r.blendSrc=this.blendSrc),this.blendDst!==f0&&(r.blendDst=this.blendDst),this.blendEquation!==mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class od extends Mc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=Y1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new rt,Jl=new ze;let H3=0;class Ti{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H3++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Kp,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Jl.fromBufferAttribute(this,i),Jl.applyMatrix3(e),this.setXY(i,Jl.x,Jl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=vo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=vo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=vo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=vo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=vo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),u=Bn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kp&&(e.usage=this.usage),e}}class um extends Ti{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class fm extends Ti{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class bi extends Ti{constructor(e,i,r){super(new Float32Array(e),i,r)}}let G3=0;const ii=new an,$f=new Fn,ls=new rt,Zn=new Uo,Mo=new Uo,gn=new rt;class Ga extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G3++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sm(e)?fm:um)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ae().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,i,r){return ii.makeTranslation(e,i,r),this.applyMatrix4(ii),this}scale(e,i,r){return ii.makeScale(e,i,r),this.applyMatrix4(ii),this}lookAt(e){return $f.lookAt(e),$f.updateMatrix(),this.applyMatrix4($f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new bi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Zn.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Mo.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors(Zn.min,Mo.min),Zn.expandByPoint(gn),gn.addVectors(Zn.max,Mo.max),Zn.expandByPoint(gn)):(Zn.expandByPoint(Mo.min),Zn.expandByPoint(Mo.max))}Zn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)gn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)gn.fromBufferAttribute(h,p),m&&(ls.fromBufferAttribute(e,p),gn.add(ls)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let j=0;j<r.count;j++)h[j]=new rt,m[j]=new rt;const p=new rt,g=new rt,v=new rt,x=new ze,M=new ze,E=new ze,b=new rt,y=new rt;function _(j,w,R){p.fromBufferAttribute(r,j),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,R),x.fromBufferAttribute(u,j),M.fromBufferAttribute(u,w),E.fromBufferAttribute(u,R),g.sub(p),v.sub(p),M.sub(x),E.sub(x);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(H),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(H),h[j].add(b),h[w].add(b),h[R].add(b),m[j].add(y),m[w].add(y),m[R].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let j=0,w=B.length;j<w;++j){const R=B[j],H=R.start,lt=R.count;for(let st=H,gt=H+lt;st<gt;st+=3)_(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const O=new rt,D=new rt,G=new rt,V=new rt;function z(j){G.fromBufferAttribute(l,j),V.copy(G);const w=h[j];O.copy(w),O.sub(G.multiplyScalar(G.dot(w))).normalize(),D.crossVectors(V,w);const H=D.dot(m[j])<0?-1:1;d.setXYZW(j,O.x,O.y,O.z,H)}for(let j=0,w=B.length;j<w;++j){const R=B[j],H=R.start,lt=R.count;for(let st=H,gt=H+lt;st<gt;st+=3)z(e.getX(st+0)),z(e.getX(st+1)),z(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ti(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new rt,u=new rt,d=new rt,h=new rt,m=new rt,p=new rt,g=new rt,v=new rt;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),b=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,y),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,y),h.add(g),m.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let M=0,E=0;for(let b=0,y=m.length;b<y;b++){h.isInterleavedBufferAttribute?M=m[b]*h.data.stride+h.offset:M=m[b]*g;for(let _=0;_<g;_++)x[E++]=p[M++]}return new Ti(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ga,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=e(x,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f1=new an,cr=new L3,$l=new sd,d1=new rt,tc=new rt,ec=new rt,nc=new rt,t0=new rt,ic=new rt,h1=new rt,ac=new rt;class Ai extends Fn{constructor(e=new Ga,i=new od){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){ic.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],v=u[m];g!==0&&(t0.fromBufferAttribute(v,e),d?ic.addScaledVector(t0,g):ic.addScaledVector(t0.sub(i),g))}i.add(ic)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),$l.copy(r.boundingSphere),$l.applyMatrix4(u),cr.copy(e.ray).recast(e.near),!($l.containsPoint(cr.origin)===!1&&(cr.intersectSphere($l,d1)===null||cr.origin.distanceToSquared(d1)>(e.far-e.near)**2))&&(f1.copy(u).invert(),cr.copy(e.ray).applyMatrix4(f1),!(r.boundingBox!==null&&cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,cr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,b=x.length;E<b;E++){const y=x[E],_=d[y.materialIndex],B=Math.max(y.start,M.start),O=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let D=B,G=O;D<G;D+=3){const V=h.getX(D),z=h.getX(D+1),j=h.getX(D+2);l=rc(this,_,e,r,p,g,v,V,z,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let y=E,_=b;y<_;y+=3){const B=h.getX(y),O=h.getX(y+1),D=h.getX(y+2);l=rc(this,d,e,r,p,g,v,B,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,b=x.length;E<b;E++){const y=x[E],_=d[y.materialIndex],B=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=B,G=O;D<G;D+=3){const V=D,z=D+1,j=D+2;l=rc(this,_,e,r,p,g,v,V,z,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let y=E,_=b;y<_;y+=3){const B=y,O=y+1,D=y+2;l=rc(this,d,e,r,p,g,v,B,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function V3(o,e,i,r,l,u,d,h){let m;if(e.side===In?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===Fa,h),m===null)return null;ac.copy(h),ac.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(ac);return p<i.near||p>i.far?null:{distance:p,point:ac.clone(),object:o}}function rc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,tc),o.getVertexPosition(m,ec),o.getVertexPosition(p,nc);const g=V3(o,e,i,r,tc,ec,nc,h1);if(g){const v=new rt;di.getBarycoord(h1,tc,ec,nc,v),l&&(g.uv=di.getInterpolatedAttribute(l,h,m,p,v,new ze)),u&&(g.uv1=di.getInterpolatedAttribute(u,h,m,p,v,new ze)),d&&(g.normal=di.getInterpolatedAttribute(d,h,m,p,v,new rt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new rt,materialIndex:0};di.getNormal(tc,ec,nc,x.normal),g.face=x,g.barycoord=v}return g}class Lo extends Ga{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],g=[],v=[];let x=0,M=0;E("z","y","x",-1,-1,r,i,e,d,u,0),E("z","y","x",1,-1,r,i,-e,d,u,1),E("x","z","y",1,1,e,r,i,l,d,2),E("x","z","y",1,-1,e,r,-i,l,d,3),E("x","y","z",1,-1,e,i,r,l,u,4),E("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new bi(p,3)),this.setAttribute("normal",new bi(g,3)),this.setAttribute("uv",new bi(v,2));function E(b,y,_,B,O,D,G,V,z,j,w){const R=D/z,H=G/j,lt=D/2,st=G/2,gt=V/2,dt=z+1,P=j+1;let Z=0,q=0;const Mt=new rt;for(let U=0;U<P;U++){const $=U*H-st;for(let vt=0;vt<dt;vt++){const St=vt*R-lt;Mt[b]=St*B,Mt[y]=$*O,Mt[_]=gt,p.push(Mt.x,Mt.y,Mt.z),Mt[b]=0,Mt[y]=0,Mt[_]=V>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),v.push(vt/z),v.push(1-U/j),Z+=1}}for(let U=0;U<j;U++)for(let $=0;$<z;$++){const vt=x+$+dt*U,St=x+$+dt*(U+1),K=x+($+1)+dt*(U+1),ht=x+($+1)+dt*U;m.push(vt,St,ht),m.push(St,K,ht),q+=6}h.addGroup(M,q,w),M+=q,x+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function wn(o){const e={};for(let i=0;i<o.length;i++){const r=Ss(o[i]);for(const l in r)e[l]=r[l]}return e}function k3(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function dm(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const X3={clone:Ss,merge:wn};var W3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ha extends Mc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W3,this.fragmentShader=q3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=k3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class hm extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=ta}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new rt,p1=new ze,m1=new ze;class ri extends hm{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Z0*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Of*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Z0*2*Math.atan(Math.tan(Of*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z)}getViewSize(e,i){return this.getViewBounds(e,p1,m1),i.subVectors(m1,p1)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Of*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const cs=-90,us=1;class Y3 extends Fn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(cs,us,e,i);l.layers=this.layers,this.add(l);const u=new ri(cs,us,e,i);u.layers=this.layers,this.add(u);const d=new ri(cs,us,e,i);d.layers=this.layers,this.add(d);const h=new ri(cs,us,e,i);h.layers=this.layers,this.add(h);const m=new ri(cs,us,e,i);m.layers=this.layers,this.add(m);const p=new ri(cs,us,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===ta)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===xc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,x,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class pm extends zn{constructor(e=[],i=_s,r,l,u,d,h,m,p,g){super(e,i,r,l,u,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class j3 extends Sr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new pm(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ei}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Lo(5,5,5),u=new Ha({name:"CubemapFromEquirect",uniforms:Ss(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Ia});u.uniforms.tEquirect.value=i;const d=new Ai(l,u),h=i.minFilter;return i.minFilter===vr&&(i.minFilter=Ei),new Y3(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class sc extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z3={type:"move"};class e0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const b of e.hand.values()){const y=i.getJointPose(b,r),_=this._getHandJoint(p,b);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Z3)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new sc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Q3 extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const n0=new rt,K3=new rt,J3=new ae;class hr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=n0.subVectors(r,i).cross(K3.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(n0),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||J3.getNormalMatrix(e),l=this.coplanarPoint(n0).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new sd,oc=new rt;class mm{constructor(e=new hr,i=new hr,r=new hr,l=new hr,u=new hr,d=new hr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ta){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],M=l[8],E=l[9],b=l[10],y=l[11],_=l[12],B=l[13],O=l[14],D=l[15];if(r[0].setComponents(m-u,x-p,y-M,D-_).normalize(),r[1].setComponents(m+u,x+p,y+M,D+_).normalize(),r[2].setComponents(m+d,x+g,y+E,D+B).normalize(),r[3].setComponents(m-d,x-g,y-E,D-B).normalize(),r[4].setComponents(m-h,x-v,y-b,D-O).normalize(),i===ta)r[5].setComponents(m+h,x+v,y+b,D+O).normalize();else if(i===xc)r[5].setComponents(h,v,b,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(oc.x=l.normal.x>0?e.max.x:e.min.x,oc.y=l.normal.y>0?e.max.y:e.min.y,oc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gm extends zn{constructor(e,i,r=xr,l,u,d,h=pi,m=pi,p,g=bo){if(g!==bo&&g!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,d,h,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ec extends Ga{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=e/h,x=i/m,M=[],E=[],b=[],y=[];for(let _=0;_<g;_++){const B=_*x-d;for(let O=0;O<p;O++){const D=O*v-u;E.push(D,-B,0),b.push(0,0,1),y.push(O/h),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<h;B++){const O=B+p*_,D=B+p*(_+1),G=B+1+p*(_+1),V=B+1+p*_;M.push(O,D,V),M.push(D,G,V)}this.setIndex(M),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(b,3)),this.setAttribute("uv",new bi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class ds extends Ga{constructor(e=1,i=.4,r=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:u},r=Math.floor(r),l=Math.floor(l);const d=[],h=[],m=[],p=[],g=new rt,v=new rt,x=new rt;for(let M=0;M<=r;M++)for(let E=0;E<=l;E++){const b=E/l*u,y=M/r*Math.PI*2;v.x=(e+i*Math.cos(y))*Math.cos(b),v.y=(e+i*Math.cos(y))*Math.sin(b),v.z=i*Math.sin(y),h.push(v.x,v.y,v.z),g.x=e*Math.cos(b),g.y=e*Math.sin(b),x.subVectors(v,g).normalize(),m.push(x.x,x.y,x.z),p.push(E/l),p.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=l;E++){const b=(l+1)*M+E-1,y=(l+1)*(M-1)+E-1,_=(l+1)*(M-1)+E,B=(l+1)*M+E;d.push(b,y,B),d.push(y,_,B)}this.setIndex(d),this.setAttribute("position",new bi(h,3)),this.setAttribute("normal",new bi(m,3)),this.setAttribute("uv",new bi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class $3 extends Mc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tx extends Mc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ex extends Fn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class nx extends hm{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ix extends ex{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class ax extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function g1(o,e,i,r){const l=rx(r);switch(i){case J1:return o*e;case tm:return o*e;case em:return o*e*2;case nm:return o*e/l.components*l.byteLength;case nd:return o*e/l.components*l.byteLength;case im:return o*e*2/l.components*l.byteLength;case id:return o*e*2/l.components*l.byteLength;case $1:return o*e*3/l.components*l.byteLength;case hi:return o*e*4/l.components*l.byteLength;case ad:return o*e*4/l.components*l.byteLength;case fc:case dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case hc:case pc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case A0:case b0:return Math.max(o,16)*Math.max(e,8)/4;case E0:case T0:return Math.max(o,8)*Math.max(e,8)/2;case C0:case R0:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case w0:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case D0:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case U0:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case L0:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case N0:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case O0:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case P0:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case B0:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case I0:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case z0:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case F0:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case H0:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case G0:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case V0:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case k0:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case mc:case X0:case W0:return Math.ceil(o/4)*Math.ceil(e/4)*16;case am:case q0:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Y0:case j0:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function rx(o){switch(o){case na:case Z1:return{byteLength:1,components:1};case Ao:case Q1:case Ro:return{byteLength:2,components:1};case td:case ed:return{byteLength:2,components:4};case xr:case $0:case $i:return{byteLength:4,components:1};case K1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:J0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=J0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _m(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function sx(o){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,g);else{v.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<v.length;M++){const E=v[x],b=v[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,v[x]=b)}v.length=x+1;for(let M=0,E=v.length;M<E;M++){const b=v[M];o.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ux=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$x=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_S=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ES=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,US=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$S=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ty=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ey=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,py=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,my=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ey=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ty=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,by=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ry=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ny=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,By=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:ox,alphahash_pars_fragment:lx,alphamap_fragment:cx,alphamap_pars_fragment:ux,alphatest_fragment:fx,alphatest_pars_fragment:dx,aomap_fragment:hx,aomap_pars_fragment:px,batching_pars_vertex:mx,batching_vertex:gx,begin_vertex:_x,beginnormal_vertex:vx,bsdfs:xx,iridescence_fragment:Sx,bumpmap_pars_fragment:yx,clipping_planes_fragment:Mx,clipping_planes_pars_fragment:Ex,clipping_planes_pars_vertex:Ax,clipping_planes_vertex:Tx,color_fragment:bx,color_pars_fragment:Cx,color_pars_vertex:Rx,color_vertex:wx,common:Dx,cube_uv_reflection_fragment:Ux,defaultnormal_vertex:Lx,displacementmap_pars_vertex:Nx,displacementmap_vertex:Ox,emissivemap_fragment:Px,emissivemap_pars_fragment:Bx,colorspace_fragment:Ix,colorspace_pars_fragment:zx,envmap_fragment:Fx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Gx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:$x,envmap_vertex:kx,fog_vertex:Xx,fog_pars_vertex:Wx,fog_fragment:qx,fog_pars_fragment:Yx,gradientmap_pars_fragment:jx,lightmap_pars_fragment:Zx,lights_lambert_fragment:Qx,lights_lambert_pars_fragment:Kx,lights_pars_begin:Jx,lights_toon_fragment:tS,lights_toon_pars_fragment:eS,lights_phong_fragment:nS,lights_phong_pars_fragment:iS,lights_physical_fragment:aS,lights_physical_pars_fragment:rS,lights_fragment_begin:sS,lights_fragment_maps:oS,lights_fragment_end:lS,logdepthbuf_fragment:cS,logdepthbuf_pars_fragment:uS,logdepthbuf_pars_vertex:fS,logdepthbuf_vertex:dS,map_fragment:hS,map_pars_fragment:pS,map_particle_fragment:mS,map_particle_pars_fragment:gS,metalnessmap_fragment:_S,metalnessmap_pars_fragment:vS,morphinstance_vertex:xS,morphcolor_vertex:SS,morphnormal_vertex:yS,morphtarget_pars_vertex:MS,morphtarget_vertex:ES,normal_fragment_begin:AS,normal_fragment_maps:TS,normal_pars_fragment:bS,normal_pars_vertex:CS,normal_vertex:RS,normalmap_pars_fragment:wS,clearcoat_normal_fragment_begin:DS,clearcoat_normal_fragment_maps:US,clearcoat_pars_fragment:LS,iridescence_pars_fragment:NS,opaque_fragment:OS,packing:PS,premultiplied_alpha_fragment:BS,project_vertex:IS,dithering_fragment:zS,dithering_pars_fragment:FS,roughnessmap_fragment:HS,roughnessmap_pars_fragment:GS,shadowmap_pars_fragment:VS,shadowmap_pars_vertex:kS,shadowmap_vertex:XS,shadowmask_pars_fragment:WS,skinbase_vertex:qS,skinning_pars_vertex:YS,skinning_vertex:jS,skinnormal_vertex:ZS,specularmap_fragment:QS,specularmap_pars_fragment:KS,tonemapping_fragment:JS,tonemapping_pars_fragment:$S,transmission_fragment:ty,transmission_pars_fragment:ey,uv_pars_fragment:ny,uv_pars_vertex:iy,uv_vertex:ay,worldpos_vertex:ry,background_vert:sy,background_frag:oy,backgroundCube_vert:ly,backgroundCube_frag:cy,cube_vert:uy,cube_frag:fy,depth_vert:dy,depth_frag:hy,distanceRGBA_vert:py,distanceRGBA_frag:my,equirect_vert:gy,equirect_frag:_y,linedashed_vert:vy,linedashed_frag:xy,meshbasic_vert:Sy,meshbasic_frag:yy,meshlambert_vert:My,meshlambert_frag:Ey,meshmatcap_vert:Ay,meshmatcap_frag:Ty,meshnormal_vert:by,meshnormal_frag:Cy,meshphong_vert:Ry,meshphong_frag:wy,meshphysical_vert:Dy,meshphysical_frag:Uy,meshtoon_vert:Ly,meshtoon_frag:Ny,points_vert:Oy,points_frag:Py,shadow_vert:By,shadow_frag:Iy,sprite_vert:zy,sprite_frag:Fy},Ut={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Mi={basic:{uniforms:wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Re(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:wn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:wn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Re(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:wn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:wn([Ut.points,Ut.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:wn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:wn([Ut.common,Ut.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:wn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:wn([Ut.sprite,Ut.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:wn([Ut.common,Ut.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:wn([Ut.lights,Ut.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Mi.physical={uniforms:wn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const lc={r:0,b:0,g:0},fr=new ia,Hy=new an;function Gy(o,e,i,r,l,u,d){const h=new Re(0);let m=u===!0?0:1,p,g,v=null,x=0,M=null;function E(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:e).get(D)),D}function b(O){let D=!1;const G=E(O);G===null?_(h,m):G&&G.isColor&&(_(G,1),D=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,d):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,D){const G=E(D);G&&(G.isCubeTexture||G.mapping===yc)?(g===void 0&&(g=new Ai(new Lo(1,1,1),new Ha({name:"BackgroundCubeMaterial",uniforms:Ss(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),fr.copy(D.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Hy.makeRotationFromEuler(fr)),g.material.toneMapped=Ae.getTransfer(G.colorSpace)!==Oe,(v!==G||x!==G.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=G,x=G.version,M=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Ai(new Ec(2,2),new Ha({name:"BackgroundMaterial",uniforms:Ss(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(G.colorSpace)!==Oe,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||x!==G.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=G,x=G.version,M=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,D){O.getRGB(lc,dm(o)),r.buffers.color.setClear(lc.r,lc.g,lc.b,D,d)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,D=1){h.set(O),m=D,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(h,m)},render:b,addToRenderList:y,dispose:B}}function Vy(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,d=!1;function h(R,H,lt,st,gt){let dt=!1;const P=v(st,lt,H);u!==P&&(u=P,p(u.object)),dt=M(R,st,lt,gt),dt&&E(R,st,lt,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(dt||d)&&(d=!1,D(R,H,lt,st),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function v(R,H,lt){const st=lt.wireframe===!0;let gt=r[R.id];gt===void 0&&(gt={},r[R.id]=gt);let dt=gt[H.id];dt===void 0&&(dt={},gt[H.id]=dt);let P=dt[st];return P===void 0&&(P=x(m()),dt[st]=P),P}function x(R){const H=[],lt=[],st=[];for(let gt=0;gt<i;gt++)H[gt]=0,lt[gt]=0,st[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:lt,attributeDivisors:st,object:R,attributes:{},index:null}}function M(R,H,lt,st){const gt=u.attributes,dt=H.attributes;let P=0;const Z=lt.getAttributes();for(const q in Z)if(Z[q].location>=0){const U=gt[q];let $=dt[q];if($===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;P++}return u.attributesNum!==P||u.index!==st}function E(R,H,lt,st){const gt={},dt=H.attributes;let P=0;const Z=lt.getAttributes();for(const q in Z)if(Z[q].location>=0){let U=dt[q];U===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),gt[q]=$,P++}u.attributes=gt,u.attributesNum=P,u.index=st}function b(){const R=u.newAttributes;for(let H=0,lt=R.length;H<lt;H++)R[H]=0}function y(R){_(R,0)}function _(R,H){const lt=u.newAttributes,st=u.enabledAttributes,gt=u.attributeDivisors;lt[R]=1,st[R]===0&&(o.enableVertexAttribArray(R),st[R]=1),gt[R]!==H&&(o.vertexAttribDivisor(R,H),gt[R]=H)}function B(){const R=u.newAttributes,H=u.enabledAttributes;for(let lt=0,st=H.length;lt<st;lt++)H[lt]!==R[lt]&&(o.disableVertexAttribArray(lt),H[lt]=0)}function O(R,H,lt,st,gt,dt,P){P===!0?o.vertexAttribIPointer(R,H,lt,gt,dt):o.vertexAttribPointer(R,H,lt,st,gt,dt)}function D(R,H,lt,st){b();const gt=st.attributes,dt=lt.getAttributes(),P=H.defaultAttributeValues;for(const Z in dt){const q=dt[Z];if(q.location>=0){let Mt=gt[Z];if(Mt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(Mt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(Mt=R.instanceColor)),Mt!==void 0){const U=Mt.normalized,$=Mt.itemSize,vt=e.get(Mt);if(vt===void 0)continue;const St=vt.buffer,K=vt.type,ht=vt.bytesPerElement,xt=K===o.INT||K===o.UNSIGNED_INT||Mt.gpuType===$0;if(Mt.isInterleavedBufferAttribute){const bt=Mt.data,Ot=bt.stride,re=Mt.offset;if(bt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<q.locationSize;Zt++)_(q.location+Zt,bt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Zt=0;Zt<q.locationSize;Zt++)y(q.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Zt=0;Zt<q.locationSize;Zt++)O(q.location+Zt,$/q.locationSize,K,U,Ot*ht,(re+$/q.locationSize*Zt)*ht,xt)}else{if(Mt.isInstancedBufferAttribute){for(let bt=0;bt<q.locationSize;bt++)_(q.location+bt,Mt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<q.locationSize;bt++)y(q.location+bt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let bt=0;bt<q.locationSize;bt++)O(q.location+bt,$/q.locationSize,K,U,$*ht,$/q.locationSize*bt*ht,xt)}}else if(P!==void 0){const U=P[Z];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(q.location,U);break;case 3:o.vertexAttrib3fv(q.location,U);break;case 4:o.vertexAttrib4fv(q.location,U);break;default:o.vertexAttrib1fv(q.location,U)}}}}B()}function G(){j();for(const R in r){const H=r[R];for(const lt in H){const st=H[lt];for(const gt in st)g(st[gt].object),delete st[gt];delete H[lt]}delete r[R]}}function V(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const lt in H){const st=H[lt];for(const gt in st)g(st[gt].object),delete st[gt];delete H[lt]}delete r[R.id]}function z(R){for(const H in r){const lt=r[H];if(lt[R.id]===void 0)continue;const st=lt[R.id];for(const gt in st)g(st[gt].object),delete st[gt];delete lt[R.id]}}function j(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:V,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:y,disableUnusedAttributes:B}}function ky(o,e,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let E=0;E<v;E++)M+=g[E];i.update(M,r,1)}function m(p,g,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)d(p[E],g[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b]*x[b];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Xy(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==hi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const j=z===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==na&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==$i&&!j)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:B,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:G,maxSamples:V}}function Wy(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new hr,h=new ae,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const E=v.clippingPlanes,b=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!l||E===null||E.length===0||u&&!y)u?g(null):p();else{const B=u?0:r,O=B*4;let D=_.clippingState||null;m.value=D,D=g(E,x,O,M);for(let G=0;G!==O;++G)D[G]=i[G];_.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,M,E){const b=v!==null?v.length:0;let y=null;if(b!==0){if(y=m.value,E!==!0||y===null){const _=M+b*4,B=x.matrixWorldInverse;h.getNormalMatrix(B),(y===null||y.length<_)&&(y=new Float32Array(_));for(let O=0,D=M;O!==b;++O,D+=4)d.copy(v[O]).applyMatrix4(B,h),d.normal.toArray(y,D),y[D+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function qy(o){let e=new WeakMap;function i(d,h){return h===x0?d.mapping=_s:h===S0&&(d.mapping=vs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===x0||h===S0)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new j3(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const hs=4,_1=[.125,.215,.35,.446,.526,.582],gr=20,i0=new nx,v1=new Re;let a0=null,r0=0,s0=0,o0=!1;const pr=(1+Math.sqrt(5))/2,fs=1/pr,x1=[new rt(-pr,fs,0),new rt(pr,fs,0),new rt(-fs,0,pr),new rt(fs,0,pr),new rt(0,pr,-fs),new rt(0,pr,fs),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],Yy=new rt;class S1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=Yy}=u;a0=this._renderer.getRenderTarget(),r0=this._renderer.getActiveCubeFace(),s0=this._renderer.getActiveMipmapLevel(),o0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=E1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(a0,r0,s0),this._renderer.xr.enabled=o0,e.scissorTest=!1,cc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===_s||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),a0=this._renderer.getRenderTarget(),r0=this._renderer.getActiveCubeFace(),s0=this._renderer.getActiveMipmapLevel(),o0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Ro,format:hi,colorSpace:xs,depthBuffer:!1},l=y1(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y1(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jy(u)),this._blurMaterial=Zy(u,e,i)}return l}_compileMaterial(e){const i=new Ai(this._lodPlanes[0],e);this._renderer.compile(i,i0)}_sceneToCubeUV(e,i,r,l,u){const m=new ri(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(v1),v.toneMapping=za,v.autoClear=!1;const E=new od({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),b=new Ai(new Lo,E);let y=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,y=!0):(E.color.copy(v1),y=!0);for(let B=0;B<6;B++){const O=B%3;O===0?(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[B],u.y,u.z)):O===1?(m.up.set(0,0,p[B]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[B],u.z)):(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[B]));const D=this._cubeSize;cc(l,O*D,B>2?D:0,D,D),v.setRenderTarget(l),y&&v.render(b,m),v.render(e,m)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=M,v.autoClear=x,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===_s||e.mapping===vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=E1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M1());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Ai(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;cc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,i0)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=x1[(l-u-1)%x1.length];this._blur(e,u-1,u,d,h)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ai(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*gr-1),b=u/E,y=isFinite(u)?1+Math.floor(g*b):gr;y>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${gr}`);const _=[];let B=0;for(let z=0;z<gr;++z){const j=z/b,w=Math.exp(-j*j/2);_.push(w),z===0?B+=w:z<y&&(B+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/B;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:O}=this;x.dTheta.value=E,x.mipInt.value=O-r;const D=this._sizeLods[l],G=3*D*(l>O-hs?l-O+hs:0),V=4*(this._cubeSize-D);cc(i,G,V,3*D,2*D),m.setRenderTarget(i),m.render(v,i0)}}function jy(o){const e=[],i=[],r=[];let l=o;const u=o-hs+1+_1.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-hs?m=_1[d-o+hs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,E=6,b=3,y=2,_=1,B=new Float32Array(b*E*M),O=new Float32Array(y*E*M),D=new Float32Array(_*E*M);for(let V=0;V<M;V++){const z=V%3*2/3-1,j=V>2?0:-1,w=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];B.set(w,b*E*V),O.set(x,y*E*V);const R=[V,V,V,V,V,V];D.set(R,_*E*V)}const G=new Ga;G.setAttribute("position",new Ti(B,b)),G.setAttribute("uv",new Ti(O,y)),G.setAttribute("faceIndex",new Ti(D,_)),e.push(G),l>hs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function y1(o,e,i){const r=new Sr(o,e,i);return r.texture.mapping=yc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function cc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function Zy(o,e,i){const r=new Float32Array(gr),l=new rt(0,1,0);return new Ha({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function M1(){return new Ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function E1(){return new Ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function ld(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qy(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===x0||m===S0,g=m===_s||m===vs;if(p||g){let v=e.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new S1(o)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new S1(o)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Ky(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&gc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Jy(o,e,i,r){const l={},u=new WeakMap;function d(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",d),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,E=v.attributes.position;let b=0;if(M!==null){const B=M.array;b=M.version;for(let O=0,D=B.length;O<D;O+=3){const G=B[O+0],V=B[O+1],z=B[O+2];x.push(G,V,V,z,z,G)}}else if(E!==void 0){const B=E.array;b=E.version;for(let O=0,D=B.length/3-1;O<D;O+=3){const G=O+0,V=O+1,z=O+2;x.push(G,V,V,z,z,G)}}else return;const y=new(sm(x)?fm:um)(x,1);y.version=b;const _=u.get(v);_&&e.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function $y(o,e,i){let r;function l(x){r=x}let u,d;function h(x){u=x.type,d=x.bytesPerElement}function m(x,M){o.drawElements(r,M,u,x*d),i.update(M,r,1)}function p(x,M,E){E!==0&&(o.drawElementsInstanced(r,M,u,x*d,E),i.update(M,r,E))}function g(x,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,E);let y=0;for(let _=0;_<E;_++)y+=M[_];i.update(y,r,1)}function v(x,M,E,b){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/d,M[_],b[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,b,0,E);let _=0;for(let B=0;B<E;B++)_+=M[B]*b[B];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function tM(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function eM(o,e,i){const r=new WeakMap,l=new Ke;function u(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let R=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),y===!0&&(D=3);let G=h.attributes.position.count*D,V=1;G>e.maxTextureSize&&(V=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const z=new Float32Array(G*V*4*v),j=new om(z,G,V,v);j.type=$i,j.needsUpdate=!0;const w=D*4;for(let H=0;H<v;H++){const lt=_[H],st=B[H],gt=O[H],dt=G*V*4*H;for(let P=0;P<lt.count;P++){const Z=P*w;E===!0&&(l.fromBufferAttribute(lt,P),z[dt+Z+0]=l.x,z[dt+Z+1]=l.y,z[dt+Z+2]=l.z,z[dt+Z+3]=0),b===!0&&(l.fromBufferAttribute(st,P),z[dt+Z+4]=l.x,z[dt+Z+5]=l.y,z[dt+Z+6]=l.z,z[dt+Z+7]=0),y===!0&&(l.fromBufferAttribute(gt,P),z[dt+Z+8]=l.x,z[dt+Z+9]=l.y,z[dt+Z+10]=l.z,z[dt+Z+11]=gt.itemSize===4?l.w:1)}}x={count:v,texture:j,size:new ze(G,V)},r.set(h,x),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const b=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",b),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function nM(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const vm=new zn,A1=new gm(1,1),xm=new om,Sm=new D3,ym=new pm,T1=[],b1=[],C1=new Float32Array(16),R1=new Float32Array(9),w1=new Float32Array(4);function Ms(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=T1[l];if(u===void 0&&(u=new Float32Array(l),T1[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function cn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function un(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Ac(o,e){let i=b1[e];i===void 0&&(i=new Int32Array(e),b1[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function iM(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function aM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2fv(this.addr,e),un(i,e)}}function rM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(cn(i,e))return;o.uniform3fv(this.addr,e),un(i,e)}}function sM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4fv(this.addr,e),un(i,e)}}function oM(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;w1.set(r),o.uniformMatrix2fv(this.addr,!1,w1),un(i,r)}}function lM(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;R1.set(r),o.uniformMatrix3fv(this.addr,!1,R1),un(i,r)}}function cM(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;C1.set(r),o.uniformMatrix4fv(this.addr,!1,C1),un(i,r)}}function uM(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function fM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2iv(this.addr,e),un(i,e)}}function dM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3iv(this.addr,e),un(i,e)}}function hM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4iv(this.addr,e),un(i,e)}}function pM(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function mM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2uiv(this.addr,e),un(i,e)}}function gM(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3uiv(this.addr,e),un(i,e)}}function _M(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4uiv(this.addr,e),un(i,e)}}function vM(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(A1.compareFunction=rm,u=A1):u=vm,i.setTexture2D(e||u,l)}function xM(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Sm,l)}function SM(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||ym,l)}function yM(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||xm,l)}function MM(o){switch(o){case 5126:return iM;case 35664:return aM;case 35665:return rM;case 35666:return sM;case 35674:return oM;case 35675:return lM;case 35676:return cM;case 5124:case 35670:return uM;case 35667:case 35671:return fM;case 35668:case 35672:return dM;case 35669:case 35673:return hM;case 5125:return pM;case 36294:return mM;case 36295:return gM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return vM;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return yM}}function EM(o,e){o.uniform1fv(this.addr,e)}function AM(o,e){const i=Ms(e,this.size,2);o.uniform2fv(this.addr,i)}function TM(o,e){const i=Ms(e,this.size,3);o.uniform3fv(this.addr,i)}function bM(o,e){const i=Ms(e,this.size,4);o.uniform4fv(this.addr,i)}function CM(o,e){const i=Ms(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function RM(o,e){const i=Ms(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function wM(o,e){const i=Ms(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function DM(o,e){o.uniform1iv(this.addr,e)}function UM(o,e){o.uniform2iv(this.addr,e)}function LM(o,e){o.uniform3iv(this.addr,e)}function NM(o,e){o.uniform4iv(this.addr,e)}function OM(o,e){o.uniform1uiv(this.addr,e)}function PM(o,e){o.uniform2uiv(this.addr,e)}function BM(o,e){o.uniform3uiv(this.addr,e)}function IM(o,e){o.uniform4uiv(this.addr,e)}function zM(o,e,i){const r=this.cache,l=e.length,u=Ac(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||vm,u[d])}function FM(o,e,i){const r=this.cache,l=e.length,u=Ac(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Sm,u[d])}function HM(o,e,i){const r=this.cache,l=e.length,u=Ac(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||ym,u[d])}function GM(o,e,i){const r=this.cache,l=e.length,u=Ac(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||xm,u[d])}function VM(o){switch(o){case 5126:return EM;case 35664:return AM;case 35665:return TM;case 35666:return bM;case 35674:return CM;case 35675:return RM;case 35676:return wM;case 5124:case 35670:return DM;case 35667:case 35671:return UM;case 35668:case 35672:return LM;case 35669:case 35673:return NM;case 5125:return OM;case 36294:return PM;case 36295:return BM;case 36296:return IM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return GM}}class kM{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=MM(i.type)}}class XM{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=VM(i.type)}}class WM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const l0=/(\w+)(\])?(\[|\.)?/g;function D1(o,e){o.seq.push(e),o.map[e.id]=e}function qM(o,e,i){const r=o.name,l=r.length;for(l0.lastIndex=0;;){const u=l0.exec(r),d=l0.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){D1(i,p===void 0?new kM(h,o,e):new XM(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new WM(h),D1(i,v)),i=v}}}class _c{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);qM(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function U1(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const YM=37297;let jM=0;function ZM(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const L1=new ae;function QM(o){Ae._getMatrix(L1,Ae.workingColorSpace,o);const e=`mat3( ${L1.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case vc:return[e,"LinearTransferOETF"];case Oe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function N1(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+ZM(o.getShaderSource(e),d)}else return l}function KM(o,e){const i=QM(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function JM(o,e){let i;switch(e){case e3:i="Linear";break;case n3:i="Reinhard";break;case i3:i="Cineon";break;case a3:i="ACESFilmic";break;case s3:i="AgX";break;case o3:i="Neutral";break;case r3:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const uc=new rt;function $M(){Ae.getLuminanceCoefficients(uc);const o=uc.x.toFixed(4),e=uc.y.toFixed(4),i=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function eE(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function nE(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Eo(o){return o!==""}function O1(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function P1(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Q0(o){return o.replace(iE,rE)}const aE=new Map;function rE(o,e){let i=se[e];if(i===void 0){const r=aE.get(e);if(r!==void 0)i=se[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Q0(i)}const sE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B1(o){return o.replace(sE,oE)}function oE(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function I1(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lE(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===q1?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ov?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function cE(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case _s:case vs:e="ENVMAP_TYPE_CUBE";break;case yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uE(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function fE(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Y1:e="ENVMAP_BLENDING_MULTIPLY";break;case $v:e="ENVMAP_BLENDING_MIX";break;case t3:e="ENVMAP_BLENDING_ADD";break}return e}function dE(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function hE(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=lE(i),p=cE(i),g=uE(i),v=fE(i),x=dE(i),M=tE(i),E=eE(u),b=l.createProgram();let y,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Eo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Eo).join(`
`),_.length>0&&(_+=`
`)):(y=[I1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),_=[I1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==za?"#define TONE_MAPPING":"",i.toneMapping!==za?se.tonemapping_pars_fragment:"",i.toneMapping!==za?JM("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,KM("linearToOutputTexel",i.outputColorSpace),$M(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Eo).join(`
`)),d=Q0(d),d=O1(d,i),d=P1(d,i),h=Q0(h),h=O1(h,i),h=P1(h,i),d=B1(d),h=B1(h),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===Jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=B+y+d,D=B+_+h,G=U1(l,l.VERTEX_SHADER,O),V=U1(l,l.FRAGMENT_SHADER,D);l.attachShader(b,G),l.attachShader(b,V),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function z(H){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(b).trim(),st=l.getShaderInfoLog(G).trim(),gt=l.getShaderInfoLog(V).trim();let dt=!0,P=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(dt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,G,V);else{const Z=N1(l,G,"vertex"),q=N1(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+lt+`
`+Z+`
`+q)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(st===""||gt==="")&&(P=!1);P&&(H.diagnostics={runnable:dt,programLog:lt,vertexShader:{log:st,prefix:y},fragmentShader:{log:gt,prefix:_}})}l.deleteShader(G),l.deleteShader(V),j=new _c(l,b),w=nE(l,b)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(b,YM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jM++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=G,this.fragmentShader=V,this}let pE=0;class mE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new gE(e),i.set(e,r)),r}}class gE{constructor(e){this.id=pE++,this.code=e,this.usedTimes=0}}function _E(o,e,i,r,l,u,d){const h=new lm,m=new mE,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,R,H,lt,st){const gt=lt.fog,dt=st.geometry,P=w.isMeshStandardMaterial?lt.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),q=Z&&Z.mapping===yc?Z.image.height:null,Mt=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const U=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,$=U!==void 0?U.length:0;let vt=0;dt.morphAttributes.position!==void 0&&(vt=1),dt.morphAttributes.normal!==void 0&&(vt=2),dt.morphAttributes.color!==void 0&&(vt=3);let St,K,ht,xt;if(Mt){const ye=Mi[Mt];St=ye.vertexShader,K=ye.fragmentShader}else St=w.vertexShader,K=w.fragmentShader,m.update(w),ht=m.getVertexShaderID(w),xt=m.getFragmentShaderID(w);const bt=o.getRenderTarget(),Ot=o.state.buffers.depth.getReversed(),re=st.isInstancedMesh===!0,Zt=st.isBatchedMesh===!0,Fe=!!w.map,Pe=!!w.matcap,ce=!!Z,I=!!w.aoMap,Dn=!!w.lightMap,pe=!!w.bumpMap,ee=!!w.normalMap,Xt=!!w.displacementMap,we=!!w.emissiveMap,Gt=!!w.metalnessMap,L=!!w.roughnessMap,T=w.anisotropy>0,tt=w.clearcoat>0,_t=w.dispersion>0,yt=w.iridescence>0,ut=w.sheen>0,It=w.transmission>0,Ct=T&&!!w.anisotropyMap,Rt=tt&&!!w.clearcoatMap,me=tt&&!!w.clearcoatNormalMap,Tt=tt&&!!w.clearcoatRoughnessMap,Ft=yt&&!!w.iridescenceMap,Yt=yt&&!!w.iridescenceThicknessMap,Qt=ut&&!!w.sheenColorMap,Pt=ut&&!!w.sheenRoughnessMap,oe=!!w.specularMap,te=!!w.specularColorMap,De=!!w.specularIntensityMap,k=It&&!!w.transmissionMap,Lt=It&&!!w.thicknessMap,ot=!!w.gradientMap,pt=!!w.alphaMap,Bt=w.alphaTest>0,Nt=!!w.alphaHash,ne=!!w.extensions;let He=za;w.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(He=o.toneMapping);const Je={shaderID:Mt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:K,defines:w.defines,customVertexShaderID:ht,customFragmentShaderID:xt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Zt,batchingColor:Zt&&st._colorsTexture!==null,instancing:re,instancingColor:re&&st.instanceColor!==null,instancingMorph:re&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:xs,alphaToCoverage:!!w.alphaToCoverage,map:Fe,matcap:Pe,envMap:ce,envMapMode:ce&&Z.mapping,envMapCubeUVHeight:q,aoMap:I,lightMap:Dn,bumpMap:pe,normalMap:ee,displacementMap:x&&Xt,emissiveMap:we,normalMapObjectSpace:ee&&w.normalMapType===d3,normalMapTangentSpace:ee&&w.normalMapType===f3,metalnessMap:Gt,roughnessMap:L,anisotropy:T,anisotropyMap:Ct,clearcoat:tt,clearcoatMap:Rt,clearcoatNormalMap:me,clearcoatRoughnessMap:Tt,dispersion:_t,iridescence:yt,iridescenceMap:Ft,iridescenceThicknessMap:Yt,sheen:ut,sheenColorMap:Qt,sheenRoughnessMap:Pt,specularMap:oe,specularColorMap:te,specularIntensityMap:De,transmission:It,transmissionMap:k,thicknessMap:Lt,gradientMap:ot,opaque:w.transparent===!1&&w.blending===ps&&w.alphaToCoverage===!1,alphaMap:pt,alphaTest:Bt,alphaHash:Nt,combine:w.combine,mapUv:Fe&&b(w.map.channel),aoMapUv:I&&b(w.aoMap.channel),lightMapUv:Dn&&b(w.lightMap.channel),bumpMapUv:pe&&b(w.bumpMap.channel),normalMapUv:ee&&b(w.normalMap.channel),displacementMapUv:Xt&&b(w.displacementMap.channel),emissiveMapUv:we&&b(w.emissiveMap.channel),metalnessMapUv:Gt&&b(w.metalnessMap.channel),roughnessMapUv:L&&b(w.roughnessMap.channel),anisotropyMapUv:Ct&&b(w.anisotropyMap.channel),clearcoatMapUv:Rt&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:me&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(w.sheenRoughnessMap.channel),specularMapUv:oe&&b(w.specularMap.channel),specularColorMapUv:te&&b(w.specularColorMap.channel),specularIntensityMapUv:De&&b(w.specularIntensityMap.channel),transmissionMapUv:k&&b(w.transmissionMap.channel),thicknessMapUv:Lt&&b(w.thicknessMap.channel),alphaMapUv:pt&&b(w.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(ee||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!dt.attributes.uv&&(Fe||pt),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ot,skinning:st.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:He,decodeVideoTexture:Fe&&w.map.isVideoTexture===!0&&Ae.getTransfer(w.map.colorSpace)===Oe,decodeVideoTextureEmissive:we&&w.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(w.emissiveMap.colorSpace)===Oe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ji,flipSided:w.side===In,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ne&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&w.extensions.multiDraw===!0||Zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Je.vertexUv1s=p.has(1),Je.vertexUv2s=p.has(2),Je.vertexUv3s=p.has(3),p.clear(),Je}function _(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)R.push(H),R.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(B(R,w),O(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function B(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function O(w,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),w.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),w.push(h.mask)}function D(w){const R=E[w.type];let H;if(R){const lt=Mi[R];H=X3.clone(lt.uniforms)}else H=w.uniforms;return H}function G(w,R){let H;for(let lt=0,st=g.length;lt<st;lt++){const gt=g[lt];if(gt.cacheKey===R){H=gt,++H.usedTimes;break}}return H===void 0&&(H=new hE(o,R,w,u),g.push(H)),H}function V(w){if(--w.usedTimes===0){const R=g.indexOf(w);g[R]=g[g.length-1],g.pop(),w.destroy()}}function z(w){m.remove(w)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:G,releaseProgram:V,releaseShaderCache:z,programs:g,dispose:j}}function vE(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function xE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function z1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function F1(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(v,x,M,E,b,y){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:E,renderOrder:v.renderOrder,z:b,group:y},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=b,_.group=y),e++,_}function h(v,x,M,E,b,y){const _=d(v,x,M,E,b,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,E,b,y){const _=d(v,x,M,E,b,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||xE),r.length>1&&r.sort(x||z1),l.length>1&&l.sort(x||z1)}function g(){for(let v=e,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function SE(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new F1,o.set(r,[d])):l>=u.length?(d=new F1,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function yE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Re};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function ME(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let EE=0;function AE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function TE(o){const e=new yE,i=ME(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,u=new an,d=new an;function h(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,E=0,b=0,y=0,_=0,B=0,O=0,D=0,G=0,V=0,z=0;p.sort(AE);for(let w=0,R=p.length;w<R;w++){const H=p[w],lt=H.color,st=H.intensity,gt=H.distance,dt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=lt.r*st,v+=lt.g*st,x+=lt.b*st;else if(H.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(H.sh.coefficients[P],st);z++}else if(H.isDirectionalLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,q=i.get(H);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=dt,r.directionalShadowMatrix[M]=H.shadow.matrix,B++}r.directional[M]=P,M++}else if(H.isSpotLight){const P=e.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(lt).multiplyScalar(st),P.distance=gt,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,r.spot[b]=P;const Z=H.shadow;if(H.map&&(r.spotLightMap[G]=H.map,G++,Z.updateMatrices(H),H.castShadow&&V++),r.spotLightMatrix[b]=Z.matrix,H.castShadow){const q=i.get(H);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.spotShadow[b]=q,r.spotShadowMap[b]=dt,D++}b++}else if(H.isRectAreaLight){const P=e.get(H);P.color.copy(lt).multiplyScalar(st),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=P,y++}else if(H.isPointLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const Z=H.shadow,q=i.get(H);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,r.pointShadow[E]=q,r.pointShadowMap[E]=dt,r.pointShadowMatrix[E]=H.shadow.matrix,O++}r.point[E]=P,E++}else if(H.isHemisphereLight){const P=e.get(H);P.skyColor.copy(H.color).multiplyScalar(st),P.groundColor.copy(H.groundColor).multiplyScalar(st),r.hemi[_]=P,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==M||j.pointLength!==E||j.spotLength!==b||j.rectAreaLength!==y||j.hemiLength!==_||j.numDirectionalShadows!==B||j.numPointShadows!==O||j.numSpotShadows!==D||j.numSpotMaps!==G||j.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=D+G-V,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=z,j.directionalLength=M,j.pointLength=E,j.spotLength=b,j.rectAreaLength=y,j.hemiLength=_,j.numDirectionalShadows=B,j.numPointShadows=O,j.numSpotShadows=D,j.numSpotMaps=G,j.numLightProbes=z,r.version=EE++)}function m(p,g){let v=0,x=0,M=0,E=0,b=0;const y=g.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const O=p[_];if(O.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(O.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),d.identity(),u.copy(O.matrixWorld),u.premultiply(y),d.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),E++}else if(O.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),x++}else if(O.isHemisphereLight){const D=r.hemi[b];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(y),b++}}}return{setup:h,setupView:m,state:r}}function H1(o){const e=new TE(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function d(g){r.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function bE(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new H1(o),e.set(l,[h])):u>=d.length?(h=new H1(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const CE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wE(o,e,i){let r=new mm;const l=new ze,u=new ze,d=new Ke,h=new $3({depthPacking:u3}),m=new tx,p={},g=i.maxTextureSize,v={[Fa]:In,[In]:Fa,[Ji]:Ji},x=new Ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:CE,fragmentShader:RE}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Ga;E.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ai(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=q1;let _=this.type;this.render=function(V,z,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||V.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Ia),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const st=_!==Ki&&this.type===Ki,gt=_===Ki&&this.type!==Ki;for(let dt=0,P=V.length;dt<P;dt++){const Z=V[dt],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const Mt=q.getFrameExtents();if(l.multiply(Mt),u.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Mt.x),l.x=u.x*Mt.x,q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Mt.y),l.y=u.y*Mt.y,q.mapSize.y=u.y)),q.map===null||st===!0||gt===!0){const $=this.type!==Ki?{minFilter:pi,magFilter:pi}:{};q.map!==null&&q.map.dispose(),q.map=new Sr(l.x,l.y,$),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const U=q.getViewportCount();for(let $=0;$<U;$++){const vt=q.getViewport($);d.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),lt.viewport(d),q.updateMatrices(Z,$),r=q.getFrustum(),D(z,j,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===Ki&&B(q,j),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(w,R,H)};function B(V,z){const j=e.update(b);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Sr(l.x,l.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(z,null,j,x,b,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(z,null,j,M,b,null)}function O(V,z,j,w){let R=null;const H=j.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(H!==void 0)R=H;else if(R=j.isPointLight===!0?m:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const lt=R.uuid,st=z.uuid;let gt=p[lt];gt===void 0&&(gt={},p[lt]=gt);let dt=gt[st];dt===void 0&&(dt=R.clone(),gt[st]=dt,z.addEventListener("dispose",G)),R=dt}if(R.visible=z.visible,R.wireframe=z.wireframe,w===Ki?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:v[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const lt=o.properties.get(R);lt.light=j}return R}function D(V,z,j,w,R){if(V.visible===!1)return;if(V.layers.test(z.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&R===Ki)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,V.matrixWorld);const st=e.update(V),gt=V.material;if(Array.isArray(gt)){const dt=st.groups;for(let P=0,Z=dt.length;P<Z;P++){const q=dt[P],Mt=gt[q.materialIndex];if(Mt&&Mt.visible){const U=O(V,Mt,w,R);V.onBeforeShadow(o,V,z,j,st,U,q),o.renderBufferDirect(j,null,st,U,V,q),V.onAfterShadow(o,V,z,j,st,U,q)}}}else if(gt.visible){const dt=O(V,gt,w,R);V.onBeforeShadow(o,V,z,j,st,dt,null),o.renderBufferDirect(j,null,st,dt,V,null),V.onAfterShadow(o,V,z,j,st,dt,null)}}const lt=V.children;for(let st=0,gt=lt.length;st<gt;st++)D(lt[st],z,j,w,R)}function G(V){V.target.removeEventListener("dispose",G);for(const j in p){const w=p[j],R=V.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const DE={[d0]:h0,[p0]:_0,[m0]:v0,[gs]:g0,[h0]:d0,[_0]:p0,[v0]:m0,[g0]:gs};function UE(o,e){function i(){let k=!1;const Lt=new Ke;let ot=null;const pt=new Ke(0,0,0,0);return{setMask:function(Bt){ot!==Bt&&!k&&(o.colorMask(Bt,Bt,Bt,Bt),ot=Bt)},setLocked:function(Bt){k=Bt},setClear:function(Bt,Nt,ne,He,Je){Je===!0&&(Bt*=He,Nt*=He,ne*=He),Lt.set(Bt,Nt,ne,He),pt.equals(Lt)===!1&&(o.clearColor(Bt,Nt,ne,He),pt.copy(Lt))},reset:function(){k=!1,ot=null,pt.set(-1,0,0,0)}}}function r(){let k=!1,Lt=!1,ot=null,pt=null,Bt=null;return{setReversed:function(Nt){if(Lt!==Nt){const ne=e.get("EXT_clip_control");Nt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),Lt=Nt;const He=Bt;Bt=null,this.setClear(He)}},getReversed:function(){return Lt},setTest:function(Nt){Nt?bt(o.DEPTH_TEST):Ot(o.DEPTH_TEST)},setMask:function(Nt){ot!==Nt&&!k&&(o.depthMask(Nt),ot=Nt)},setFunc:function(Nt){if(Lt&&(Nt=DE[Nt]),pt!==Nt){switch(Nt){case d0:o.depthFunc(o.NEVER);break;case h0:o.depthFunc(o.ALWAYS);break;case p0:o.depthFunc(o.LESS);break;case gs:o.depthFunc(o.LEQUAL);break;case m0:o.depthFunc(o.EQUAL);break;case g0:o.depthFunc(o.GEQUAL);break;case _0:o.depthFunc(o.GREATER);break;case v0:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pt=Nt}},setLocked:function(Nt){k=Nt},setClear:function(Nt){Bt!==Nt&&(Lt&&(Nt=1-Nt),o.clearDepth(Nt),Bt=Nt)},reset:function(){k=!1,ot=null,pt=null,Bt=null,Lt=!1}}}function l(){let k=!1,Lt=null,ot=null,pt=null,Bt=null,Nt=null,ne=null,He=null,Je=null;return{setTest:function(ye){k||(ye?bt(o.STENCIL_TEST):Ot(o.STENCIL_TEST))},setMask:function(ye){Lt!==ye&&!k&&(o.stencilMask(ye),Lt=ye)},setFunc:function(ye,Hn,fn){(ot!==ye||pt!==Hn||Bt!==fn)&&(o.stencilFunc(ye,Hn,fn),ot=ye,pt=Hn,Bt=fn)},setOp:function(ye,Hn,fn){(Nt!==ye||ne!==Hn||He!==fn)&&(o.stencilOp(ye,Hn,fn),Nt=ye,ne=Hn,He=fn)},setLocked:function(ye){k=ye},setClear:function(ye){Je!==ye&&(o.clearStencil(ye),Je=ye)},reset:function(){k=!1,Lt=null,ot=null,pt=null,Bt=null,Nt=null,ne=null,He=null,Je=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],E=null,b=!1,y=null,_=null,B=null,O=null,D=null,G=null,V=null,z=new Re(0,0,0),j=0,w=!1,R=null,H=null,lt=null,st=null,gt=null;const dt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Z=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=Z>=2);let Mt=null,U={};const $=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),St=new Ke().fromArray($),K=new Ke().fromArray(vt);function ht(k,Lt,ot,pt){const Bt=new Uint8Array(4),Nt=o.createTexture();o.bindTexture(k,Nt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ne=0;ne<ot;ne++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,pt,0,o.RGBA,o.UNSIGNED_BYTE,Bt):o.texImage2D(Lt+ne,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Bt);return Nt}const xt={};xt[o.TEXTURE_2D]=ht(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=ht(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=ht(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=ht(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),bt(o.DEPTH_TEST),d.setFunc(gs),pe(!1),ee(qp),bt(o.CULL_FACE),I(Ia);function bt(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Ot(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function re(k,Lt){return v[k]!==Lt?(o.bindFramebuffer(k,Lt),v[k]=Lt,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Lt),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Zt(k,Lt){let ot=M,pt=!1;if(k){ot=x.get(Lt),ot===void 0&&(ot=[],x.set(Lt,ot));const Bt=k.textures;if(ot.length!==Bt.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let Nt=0,ne=Bt.length;Nt<ne;Nt++)ot[Nt]=o.COLOR_ATTACHMENT0+Nt;ot.length=Bt.length,pt=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,pt=!0);pt&&o.drawBuffers(ot)}function Fe(k){return E!==k?(o.useProgram(k),E=k,!0):!1}const Pe={[mr]:o.FUNC_ADD,[Bv]:o.FUNC_SUBTRACT,[Iv]:o.FUNC_REVERSE_SUBTRACT};Pe[zv]=o.MIN,Pe[Fv]=o.MAX;const ce={[Hv]:o.ZERO,[Gv]:o.ONE,[Vv]:o.SRC_COLOR,[u0]:o.SRC_ALPHA,[jv]:o.SRC_ALPHA_SATURATE,[qv]:o.DST_COLOR,[Xv]:o.DST_ALPHA,[kv]:o.ONE_MINUS_SRC_COLOR,[f0]:o.ONE_MINUS_SRC_ALPHA,[Yv]:o.ONE_MINUS_DST_COLOR,[Wv]:o.ONE_MINUS_DST_ALPHA,[Zv]:o.CONSTANT_COLOR,[Qv]:o.ONE_MINUS_CONSTANT_COLOR,[Kv]:o.CONSTANT_ALPHA,[Jv]:o.ONE_MINUS_CONSTANT_ALPHA};function I(k,Lt,ot,pt,Bt,Nt,ne,He,Je,ye){if(k===Ia){b===!0&&(Ot(o.BLEND),b=!1);return}if(b===!1&&(bt(o.BLEND),b=!0),k!==Pv){if(k!==y||ye!==w){if((_!==mr||D!==mr)&&(o.blendEquation(o.FUNC_ADD),_=mr,D=mr),ye)switch(k){case ps:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yp:o.blendFunc(o.ONE,o.ONE);break;case jp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ps:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case jp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}B=null,O=null,G=null,V=null,z.set(0,0,0),j=0,y=k,w=ye}return}Bt=Bt||Lt,Nt=Nt||ot,ne=ne||pt,(Lt!==_||Bt!==D)&&(o.blendEquationSeparate(Pe[Lt],Pe[Bt]),_=Lt,D=Bt),(ot!==B||pt!==O||Nt!==G||ne!==V)&&(o.blendFuncSeparate(ce[ot],ce[pt],ce[Nt],ce[ne]),B=ot,O=pt,G=Nt,V=ne),(He.equals(z)===!1||Je!==j)&&(o.blendColor(He.r,He.g,He.b,Je),z.copy(He),j=Je),y=k,w=!1}function Dn(k,Lt){k.side===Ji?Ot(o.CULL_FACE):bt(o.CULL_FACE);let ot=k.side===In;Lt&&(ot=!ot),pe(ot),k.blending===ps&&k.transparent===!1?I(Ia):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),u.setMask(k.colorWrite);const pt=k.stencilWrite;h.setTest(pt),pt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),we(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Ot(o.SAMPLE_ALPHA_TO_COVERAGE)}function pe(k){R!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),R=k)}function ee(k){k!==Lv?(bt(o.CULL_FACE),k!==H&&(k===qp?o.cullFace(o.BACK):k===Nv?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ot(o.CULL_FACE),H=k}function Xt(k){k!==lt&&(P&&o.lineWidth(k),lt=k)}function we(k,Lt,ot){k?(bt(o.POLYGON_OFFSET_FILL),(st!==Lt||gt!==ot)&&(o.polygonOffset(Lt,ot),st=Lt,gt=ot)):Ot(o.POLYGON_OFFSET_FILL)}function Gt(k){k?bt(o.SCISSOR_TEST):Ot(o.SCISSOR_TEST)}function L(k){k===void 0&&(k=o.TEXTURE0+dt-1),Mt!==k&&(o.activeTexture(k),Mt=k)}function T(k,Lt,ot){ot===void 0&&(Mt===null?ot=o.TEXTURE0+dt-1:ot=Mt);let pt=U[ot];pt===void 0&&(pt={type:void 0,texture:void 0},U[ot]=pt),(pt.type!==k||pt.texture!==Lt)&&(Mt!==ot&&(o.activeTexture(ot),Mt=ot),o.bindTexture(k,Lt||xt[k]),pt.type=k,pt.texture=Lt)}function tt(){const k=U[Mt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _t(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(k){St.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Pt(k){K.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),K.copy(k))}function oe(k,Lt){let ot=p.get(Lt);ot===void 0&&(ot=new WeakMap,p.set(Lt,ot));let pt=ot.get(k);pt===void 0&&(pt=o.getUniformBlockIndex(Lt,k.name),ot.set(k,pt))}function te(k,Lt){const pt=p.get(Lt).get(k);m.get(Lt)!==pt&&(o.uniformBlockBinding(Lt,pt,k.__bindingPointIndex),m.set(Lt,pt))}function De(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Mt=null,U={},v={},x=new WeakMap,M=[],E=null,b=!1,y=null,_=null,B=null,O=null,D=null,G=null,V=null,z=new Re(0,0,0),j=0,w=!1,R=null,H=null,lt=null,st=null,gt=null,St.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:bt,disable:Ot,bindFramebuffer:re,drawBuffers:Zt,useProgram:Fe,setBlending:I,setMaterial:Dn,setFlipSided:pe,setCullFace:ee,setLineWidth:Xt,setPolygonOffset:we,setScissorTest:Gt,activeTexture:L,bindTexture:T,unbindTexture:tt,compressedTexImage2D:_t,compressedTexImage3D:yt,texImage2D:Ft,texImage3D:Yt,updateUBOMapping:oe,uniformBlockBinding:te,texStorage2D:me,texStorage3D:Tt,texSubImage2D:ut,texSubImage3D:It,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Rt,scissor:Qt,viewport:Pt,reset:De}}function LE(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ze,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return M?new OffscreenCanvas(L,T):Sc("canvas")}function b(L,T,tt){let _t=1;const yt=Gt(L);if((yt.width>tt||yt.height>tt)&&(_t=tt/Math.max(yt.width,yt.height)),_t<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(_t*yt.width),It=Math.floor(_t*yt.height);v===void 0&&(v=E(ut,It));const Ct=T?E(ut,It):v;return Ct.width=ut,Ct.height=It,Ct.getContext("2d").drawImage(L,0,0,ut,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ut+"x"+It+")."),Ct}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(L,T,tt,_t,yt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=T;if(T===o.RED&&(tt===o.FLOAT&&(ut=o.R32F),tt===o.HALF_FLOAT&&(ut=o.R16F),tt===o.UNSIGNED_BYTE&&(ut=o.R8)),T===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.R8UI),tt===o.UNSIGNED_SHORT&&(ut=o.R16UI),tt===o.UNSIGNED_INT&&(ut=o.R32UI),tt===o.BYTE&&(ut=o.R8I),tt===o.SHORT&&(ut=o.R16I),tt===o.INT&&(ut=o.R32I)),T===o.RG&&(tt===o.FLOAT&&(ut=o.RG32F),tt===o.HALF_FLOAT&&(ut=o.RG16F),tt===o.UNSIGNED_BYTE&&(ut=o.RG8)),T===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RG16UI),tt===o.UNSIGNED_INT&&(ut=o.RG32UI),tt===o.BYTE&&(ut=o.RG8I),tt===o.SHORT&&(ut=o.RG16I),tt===o.INT&&(ut=o.RG32I)),T===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),tt===o.UNSIGNED_INT&&(ut=o.RGB32UI),tt===o.BYTE&&(ut=o.RGB8I),tt===o.SHORT&&(ut=o.RGB16I),tt===o.INT&&(ut=o.RGB32I)),T===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ut=o.RGBA32UI),tt===o.BYTE&&(ut=o.RGBA8I),tt===o.SHORT&&(ut=o.RGBA16I),tt===o.INT&&(ut=o.RGBA32I)),T===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),T===o.RGBA){const It=yt?vc:Ae.getTransfer(_t);tt===o.FLOAT&&(ut=o.RGBA32F),tt===o.HALF_FLOAT&&(ut=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ut=It===Oe?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function D(L,T){let tt;return L?T===null||T===xr||T===To?tt=o.DEPTH24_STENCIL8:T===$i?tt=o.DEPTH32F_STENCIL8:T===Ao&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===xr||T===To?tt=o.DEPTH_COMPONENT24:T===$i?tt=o.DEPTH_COMPONENT32F:T===Ao&&(tt=o.DEPTH_COMPONENT16),tt}function G(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==pi&&L.minFilter!==Ei?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function V(L){const T=L.target;T.removeEventListener("dispose",V),j(T),T.isVideoTexture&&g.delete(T)}function z(L){const T=L.target;T.removeEventListener("dispose",z),R(T)}function j(L){const T=r.get(L);if(T.__webglInit===void 0)return;const tt=L.source,_t=x.get(tt);if(_t){const yt=_t[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&w(L),Object.keys(_t).length===0&&x.delete(tt)}r.remove(L)}function w(L){const T=r.get(L);o.deleteTexture(T.__webglTexture);const tt=L.source,_t=x.get(tt);delete _t[T.__cacheKey],d.memory.textures--}function R(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(T.__webglFramebuffer[_t]))for(let yt=0;yt<T.__webglFramebuffer[_t].length;yt++)o.deleteFramebuffer(T.__webglFramebuffer[_t][yt]);else o.deleteFramebuffer(T.__webglFramebuffer[_t]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[_t])}else{if(Array.isArray(T.__webglFramebuffer))for(let _t=0;_t<T.__webglFramebuffer.length;_t++)o.deleteFramebuffer(T.__webglFramebuffer[_t]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _t=0;_t<T.__webglColorRenderbuffer.length;_t++)T.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[_t]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=L.textures;for(let _t=0,yt=tt.length;_t<yt;_t++){const ut=r.get(tt[_t]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),d.memory.textures--),r.remove(tt[_t])}r.remove(L)}let H=0;function lt(){H=0}function st(){const L=H;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function gt(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function dt(L,T){const tt=r.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){const _t=L.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(tt,L,T);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+T)}function P(L,T){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){K(tt,L,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+T)}function Z(L,T){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){K(tt,L,T);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+T)}function q(L,T){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){ht(tt,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+T)}const Mt={[y0]:o.REPEAT,[_r]:o.CLAMP_TO_EDGE,[M0]:o.MIRRORED_REPEAT},U={[pi]:o.NEAREST,[l3]:o.NEAREST_MIPMAP_NEAREST,[kl]:o.NEAREST_MIPMAP_LINEAR,[Ei]:o.LINEAR,[Nf]:o.LINEAR_MIPMAP_NEAREST,[vr]:o.LINEAR_MIPMAP_LINEAR},$={[h3]:o.NEVER,[x3]:o.ALWAYS,[p3]:o.LESS,[rm]:o.LEQUAL,[m3]:o.EQUAL,[v3]:o.GEQUAL,[g3]:o.GREATER,[_3]:o.NOTEQUAL};function vt(L,T){if(T.type===$i&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ei||T.magFilter===Nf||T.magFilter===kl||T.magFilter===vr||T.minFilter===Ei||T.minFilter===Nf||T.minFilter===kl||T.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,Mt[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,Mt[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,Mt[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pi||T.minFilter!==kl&&T.minFilter!==vr||T.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function St(L,T){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",V));const _t=T.source;let yt=x.get(_t);yt===void 0&&(yt={},x.set(_t,yt));const ut=gt(T);if(ut!==L.__cacheKey){yt[ut]===void 0&&(yt[ut]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,tt=!0),yt[ut].usedTimes++;const It=yt[L.__cacheKey];It!==void 0&&(yt[L.__cacheKey].usedTimes--,It.usedTimes===0&&w(T)),L.__cacheKey=ut,L.__webglTexture=yt[ut].texture}return tt}function K(L,T,tt){let _t=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_t=o.TEXTURE_3D);const yt=St(L,T),ut=T.source;i.bindTexture(_t,L.__webglTexture,o.TEXTURE0+tt);const It=r.get(ut);if(ut.version!==It.__version||yt===!0){i.activeTexture(o.TEXTURE0+tt);const Ct=Ae.getPrimaries(Ae.workingColorSpace),Rt=T.colorSpace===Ba?null:Ae.getPrimaries(T.colorSpace),me=T.colorSpace===Ba||Ct===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Tt=b(T.image,!1,l.maxTextureSize);Tt=we(T,Tt);const Ft=u.convert(T.format,T.colorSpace),Yt=u.convert(T.type);let Qt=O(T.internalFormat,Ft,Yt,T.colorSpace,T.isVideoTexture);vt(_t,T);let Pt;const oe=T.mipmaps,te=T.isVideoTexture!==!0,De=It.__version===void 0||yt===!0,k=ut.dataReady,Lt=G(T,Tt);if(T.isDepthTexture)Qt=D(T.format===Co,T.type),De&&(te?i.texStorage2D(o.TEXTURE_2D,1,Qt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,Qt,Tt.width,Tt.height,0,Ft,Yt,null));else if(T.isDataTexture)if(oe.length>0){te&&De&&i.texStorage2D(o.TEXTURE_2D,Lt,Qt,oe[0].width,oe[0].height);for(let ot=0,pt=oe.length;ot<pt;ot++)Pt=oe[ot],te?k&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Ft,Yt,Pt.data):i.texImage2D(o.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,Ft,Yt,Pt.data);T.generateMipmaps=!1}else te?(De&&i.texStorage2D(o.TEXTURE_2D,Lt,Qt,Tt.width,Tt.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Ft,Yt,Tt.data)):i.texImage2D(o.TEXTURE_2D,0,Qt,Tt.width,Tt.height,0,Ft,Yt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){te&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Qt,oe[0].width,oe[0].height,Tt.depth);for(let ot=0,pt=oe.length;ot<pt;ot++)if(Pt=oe[ot],T.format!==hi)if(Ft!==null)if(te){if(k)if(T.layerUpdates.size>0){const Bt=g1(Pt.width,Pt.height,T.format,T.type);for(const Nt of T.layerUpdates){const ne=Pt.data.subarray(Nt*Bt/Pt.data.BYTES_PER_ELEMENT,(Nt+1)*Bt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,Nt,Pt.width,Pt.height,1,Ft,ne)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,Tt.depth,Ft,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,Qt,Pt.width,Pt.height,Tt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,Tt.depth,Ft,Yt,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ot,Qt,Pt.width,Pt.height,Tt.depth,0,Ft,Yt,Pt.data)}else{te&&De&&i.texStorage2D(o.TEXTURE_2D,Lt,Qt,oe[0].width,oe[0].height);for(let ot=0,pt=oe.length;ot<pt;ot++)Pt=oe[ot],T.format!==hi?Ft!==null?te?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Ft,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?k&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Ft,Yt,Pt.data):i.texImage2D(o.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,Ft,Yt,Pt.data)}else if(T.isDataArrayTexture)if(te){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Qt,Tt.width,Tt.height,Tt.depth),k)if(T.layerUpdates.size>0){const ot=g1(Tt.width,Tt.height,T.format,T.type);for(const pt of T.layerUpdates){const Bt=Tt.data.subarray(pt*ot/Tt.data.BYTES_PER_ELEMENT,(pt+1)*ot/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pt,Tt.width,Tt.height,1,Ft,Yt,Bt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ft,Yt,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Qt,Tt.width,Tt.height,Tt.depth,0,Ft,Yt,Tt.data);else if(T.isData3DTexture)te?(De&&i.texStorage3D(o.TEXTURE_3D,Lt,Qt,Tt.width,Tt.height,Tt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ft,Yt,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,Qt,Tt.width,Tt.height,Tt.depth,0,Ft,Yt,Tt.data);else if(T.isFramebufferTexture){if(De)if(te)i.texStorage2D(o.TEXTURE_2D,Lt,Qt,Tt.width,Tt.height);else{let ot=Tt.width,pt=Tt.height;for(let Bt=0;Bt<Lt;Bt++)i.texImage2D(o.TEXTURE_2D,Bt,Qt,ot,pt,0,Ft,Yt,null),ot>>=1,pt>>=1}}else if(oe.length>0){if(te&&De){const ot=Gt(oe[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Qt,ot.width,ot.height)}for(let ot=0,pt=oe.length;ot<pt;ot++)Pt=oe[ot],te?k&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ft,Yt,Pt):i.texImage2D(o.TEXTURE_2D,ot,Qt,Ft,Yt,Pt);T.generateMipmaps=!1}else if(te){if(De){const ot=Gt(Tt);i.texStorage2D(o.TEXTURE_2D,Lt,Qt,ot.width,ot.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,Yt,Tt)}else i.texImage2D(o.TEXTURE_2D,0,Qt,Ft,Yt,Tt);y(T)&&_(_t),It.__version=ut.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ht(L,T,tt){if(T.image.length!==6)return;const _t=St(L,T),yt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+tt);const ut=r.get(yt);if(yt.version!==ut.__version||_t===!0){i.activeTexture(o.TEXTURE0+tt);const It=Ae.getPrimaries(Ae.workingColorSpace),Ct=T.colorSpace===Ba?null:Ae.getPrimaries(T.colorSpace),Rt=T.colorSpace===Ba||It===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const me=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Ft=[];for(let pt=0;pt<6;pt++)!me&&!Tt?Ft[pt]=b(T.image[pt],!0,l.maxCubemapSize):Ft[pt]=Tt?T.image[pt].image:T.image[pt],Ft[pt]=we(T,Ft[pt]);const Yt=Ft[0],Qt=u.convert(T.format,T.colorSpace),Pt=u.convert(T.type),oe=O(T.internalFormat,Qt,Pt,T.colorSpace),te=T.isVideoTexture!==!0,De=ut.__version===void 0||_t===!0,k=yt.dataReady;let Lt=G(T,Yt);vt(o.TEXTURE_CUBE_MAP,T);let ot;if(me){te&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,oe,Yt.width,Yt.height);for(let pt=0;pt<6;pt++){ot=Ft[pt].mipmaps;for(let Bt=0;Bt<ot.length;Bt++){const Nt=ot[Bt];T.format!==hi?Qt!==null?te?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt,0,0,Nt.width,Nt.height,Qt,Nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt,oe,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt,0,0,Nt.width,Nt.height,Qt,Pt,Nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt,oe,Nt.width,Nt.height,0,Qt,Pt,Nt.data)}}}else{if(ot=T.mipmaps,te&&De){ot.length>0&&Lt++;const pt=Gt(Ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,oe,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Tt){te?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ft[pt].width,Ft[pt].height,Qt,Pt,Ft[pt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,oe,Ft[pt].width,Ft[pt].height,0,Qt,Pt,Ft[pt].data);for(let Bt=0;Bt<ot.length;Bt++){const ne=ot[Bt].image[pt].image;te?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt+1,0,0,ne.width,ne.height,Qt,Pt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt+1,oe,ne.width,ne.height,0,Qt,Pt,ne.data)}}else{te?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Qt,Pt,Ft[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,oe,Qt,Pt,Ft[pt]);for(let Bt=0;Bt<ot.length;Bt++){const Nt=ot[Bt];te?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt+1,0,0,Qt,Pt,Nt.image[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Bt+1,oe,Qt,Pt,Nt.image[pt])}}}y(T)&&_(o.TEXTURE_CUBE_MAP),ut.__version=yt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function xt(L,T,tt,_t,yt,ut){const It=u.convert(tt.format,tt.colorSpace),Ct=u.convert(tt.type),Rt=O(tt.internalFormat,It,Ct,tt.colorSpace),me=r.get(T),Tt=r.get(tt);if(Tt.__renderTarget=T,!me.__hasExternalTextures){const Ft=Math.max(1,T.width>>ut),Yt=Math.max(1,T.height>>ut);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,ut,Rt,Ft,Yt,T.depth,0,It,Ct,null):i.texImage2D(yt,ut,Rt,Ft,Yt,0,It,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),ee(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,yt,Tt.__webglTexture,0,pe(T)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,yt,Tt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function bt(L,T,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const _t=T.depthTexture,yt=_t&&_t.isDepthTexture?_t.type:null,ut=D(T.stencilBuffer,yt),It=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=pe(T);ee(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,ut,T.width,T.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,ut,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ut,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,It,o.RENDERBUFFER,L)}else{const _t=T.textures;for(let yt=0;yt<_t.length;yt++){const ut=_t[yt],It=u.convert(ut.format,ut.colorSpace),Ct=u.convert(ut.type),Rt=O(ut.internalFormat,It,Ct,ut.colorSpace),me=pe(T);tt&&ee(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,Rt,T.width,T.height):ee(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,Rt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Rt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ot(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=r.get(T.depthTexture);_t.__renderTarget=T,(!_t.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),dt(T.depthTexture,0);const yt=_t.__webglTexture,ut=pe(T);if(T.depthTexture.format===bo)ee(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(T.depthTexture.format===Co)ee(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function re(L){const T=r.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const _t=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_t){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_t.removeEventListener("dispose",yt)};_t.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=_t}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Ot(T.__webglFramebuffer,L)}else if(tt){T.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[_t]),T.__webglDepthbuffer[_t]===void 0)T.__webglDepthbuffer[_t]=o.createRenderbuffer(),bt(T.__webglDepthbuffer[_t],L,!1);else{const yt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ut)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),bt(T.__webglDepthbuffer,L,!1);else{const _t=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,yt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,yt),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,yt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(L,T,tt){const _t=r.get(L);T!==void 0&&xt(_t.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&re(L)}function Fe(L){const T=L.texture,tt=r.get(L),_t=r.get(T);L.addEventListener("dispose",z);const yt=L.textures,ut=L.isWebGLCubeRenderTarget===!0,It=yt.length>1;if(It||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=T.version,d.memory.textures++),ut){tt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Ct]=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)tt.__webglFramebuffer[Ct][Rt]=o.createFramebuffer()}else tt.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)tt.__webglFramebuffer[Ct]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(It)for(let Ct=0,Rt=yt.length;Ct<Rt;Ct++){const me=r.get(yt[Ct]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&ee(L)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<yt.length;Ct++){const Rt=yt[Ct];tt.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct]);const me=u.convert(Rt.format,Rt.colorSpace),Tt=u.convert(Rt.type),Ft=O(Rt.internalFormat,me,Tt,Rt.colorSpace,L.isXRRenderTarget===!0),Yt=pe(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Ft,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),bt(tt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),vt(o.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Rt=0;Rt<T.mipmaps.length;Rt++)xt(tt.__webglFramebuffer[Ct][Rt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Rt);else xt(tt.__webglFramebuffer[Ct],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let Ct=0,Rt=yt.length;Ct<Rt;Ct++){const me=yt[Ct],Tt=r.get(me);i.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),vt(o.TEXTURE_2D,me),xt(tt.__webglFramebuffer,L,me,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,0),y(me)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,_t.__webglTexture),vt(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Rt=0;Rt<T.mipmaps.length;Rt++)xt(tt.__webglFramebuffer[Rt],L,T,o.COLOR_ATTACHMENT0,Ct,Rt);else xt(tt.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,Ct,0);y(T)&&_(Ct),i.unbindTexture()}L.depthBuffer&&re(L)}function Pe(L){const T=L.textures;for(let tt=0,_t=T.length;tt<_t;tt++){const yt=T[tt];if(y(yt)){const ut=B(L),It=r.get(yt).__webglTexture;i.bindTexture(ut,It),_(ut),i.unbindTexture()}}}const ce=[],I=[];function Dn(L){if(L.samples>0){if(ee(L)===!1){const T=L.textures,tt=L.width,_t=L.height;let yt=o.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=r.get(L),Ct=T.length>1;if(Ct)for(let Rt=0;Rt<T.length;Rt++)i.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Rt=0;Rt<T.length;Rt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,It.__webglColorRenderbuffer[Rt]);const me=r.get(T[Rt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,tt,_t,0,0,tt,_t,yt,o.NEAREST),m===!0&&(ce.length=0,I.length=0,ce.push(o.COLOR_ATTACHMENT0+Rt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ce.push(ut),I.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,I)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ce))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Rt=0;Rt<T.length;Rt++){i.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,It.__webglColorRenderbuffer[Rt]);const me=r.get(T[Rt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function pe(L){return Math.min(l.maxSamples,L.samples)}function ee(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(L){const T=d.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function we(L,T){const tt=L.colorSpace,_t=L.format,yt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==xs&&tt!==Ba&&(Ae.getTransfer(tt)===Oe?(_t!==hi||yt!==na)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Gt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=lt,this.setTexture2D=dt,this.setTexture2DArray=P,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Zt,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Dn,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ee}function NE(o,e){function i(r,l=Ba){let u;const d=Ae.getTransfer(l);if(r===na)return o.UNSIGNED_BYTE;if(r===td)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ed)return o.UNSIGNED_SHORT_5_5_5_1;if(r===K1)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Z1)return o.BYTE;if(r===Q1)return o.SHORT;if(r===Ao)return o.UNSIGNED_SHORT;if(r===$0)return o.INT;if(r===xr)return o.UNSIGNED_INT;if(r===$i)return o.FLOAT;if(r===Ro)return o.HALF_FLOAT;if(r===J1)return o.ALPHA;if(r===$1)return o.RGB;if(r===hi)return o.RGBA;if(r===tm)return o.LUMINANCE;if(r===em)return o.LUMINANCE_ALPHA;if(r===bo)return o.DEPTH_COMPONENT;if(r===Co)return o.DEPTH_STENCIL;if(r===nm)return o.RED;if(r===nd)return o.RED_INTEGER;if(r===im)return o.RG;if(r===id)return o.RG_INTEGER;if(r===ad)return o.RGBA_INTEGER;if(r===fc||r===dc||r===hc||r===pc)if(d===Oe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===fc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===fc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===dc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===E0||r===A0||r===T0||r===b0)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===E0)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===A0)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===T0)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===b0)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===C0||r===R0||r===w0)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===C0||r===R0)return d===Oe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===w0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===D0||r===U0||r===L0||r===N0||r===O0||r===P0||r===B0||r===I0||r===z0||r===F0||r===H0||r===G0||r===V0||r===k0)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===D0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===U0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===L0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===N0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===O0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===P0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===B0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===I0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===z0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===F0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===H0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===G0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===V0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===k0)return d===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mc||r===X0||r===W0)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===mc)return d===Oe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===X0)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===W0)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===am||r===q0||r===Y0||r===j0)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===mc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===q0)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Y0)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===j0)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===To?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const OE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new zn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ha({vertexShader:OE,fragmentShader:PE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ai(new Ec(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IE extends ys{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,E=null;const b=new BE,y=i.getContextAttributes();let _=null,B=null;const O=[],D=[],G=new ze;let V=null;const z=new ri;z.viewport=new Ke;const j=new ri;j.viewport=new Ke;const w=[z,j],R=new ax;let H=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ht=O[K];return ht===void 0&&(ht=new e0,O[K]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(K){let ht=O[K];return ht===void 0&&(ht=new e0,O[K]=ht),ht.getGripSpace()},this.getHand=function(K){let ht=O[K];return ht===void 0&&(ht=new e0,O[K]=ht),ht.getHandSpace()};function st(K){const ht=D.indexOf(K.inputSource);if(ht===-1)return;const xt=O[ht];xt!==void 0&&(xt.update(K.inputSource,K.frame,p||d),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function gt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",dt);for(let K=0;K<O.length;K++){const ht=D[K];ht!==null&&(D[K]=null,O[K].disconnect(ht))}H=null,lt=null,b.reset(),e.setRenderTarget(_),M=null,x=null,v=null,l=null,B=null,St.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){h=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",dt),y.xrCompatible!==!0&&await i.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,bt=null,Ot=null;y.depth&&(Ot=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=y.stencil?Co:bo,bt=y.stencil?To:xr);const re={colorFormat:i.RGBA8,depthFormat:Ot,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(re),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),B=new Sr(x.textureWidth,x.textureHeight,{format:hi,type:na,depthTexture:new gm(x.textureWidth,x.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const xt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new Sr(M.framebufferWidth,M.framebufferHeight,{format:hi,type:na,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function dt(K){for(let ht=0;ht<K.removed.length;ht++){const xt=K.removed[ht],bt=D.indexOf(xt);bt>=0&&(D[bt]=null,O[bt].disconnect(xt))}for(let ht=0;ht<K.added.length;ht++){const xt=K.added[ht];let bt=D.indexOf(xt);if(bt===-1){for(let re=0;re<O.length;re++)if(re>=D.length){D.push(xt),bt=re;break}else if(D[re]===null){D[re]=xt,bt=re;break}if(bt===-1)break}const Ot=O[bt];Ot&&Ot.connect(xt)}}const P=new rt,Z=new rt;function q(K,ht,xt){P.setFromMatrixPosition(ht.matrixWorld),Z.setFromMatrixPosition(xt.matrixWorld);const bt=P.distanceTo(Z),Ot=ht.projectionMatrix.elements,re=xt.projectionMatrix.elements,Zt=Ot[14]/(Ot[10]-1),Fe=Ot[14]/(Ot[10]+1),Pe=(Ot[9]+1)/Ot[5],ce=(Ot[9]-1)/Ot[5],I=(Ot[8]-1)/Ot[0],Dn=(re[8]+1)/re[0],pe=Zt*I,ee=Zt*Dn,Xt=bt/(-I+Dn),we=Xt*-I;if(ht.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(we),K.translateZ(Xt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ot[10]===-1)K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Gt=Zt+Xt,L=Fe+Xt,T=pe-we,tt=ee+(bt-we),_t=Pe*Fe/L*Gt,yt=ce*Fe/L*Gt;K.projectionMatrix.makePerspective(T,tt,_t,yt,Gt,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Mt(K,ht){ht===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ht.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let ht=K.near,xt=K.far;b.texture!==null&&(b.depthNear>0&&(ht=b.depthNear),b.depthFar>0&&(xt=b.depthFar)),R.near=j.near=z.near=ht,R.far=j.far=z.far=xt,(H!==R.near||lt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,lt=R.far),z.layers.mask=K.layers.mask|2,j.layers.mask=K.layers.mask|4,R.layers.mask=z.layers.mask|j.layers.mask;const bt=K.parent,Ot=R.cameras;Mt(R,bt);for(let re=0;re<Ot.length;re++)Mt(Ot[re],bt);Ot.length===2?q(R,z,j):R.projectionMatrix.copy(z.projectionMatrix),U(K,R,bt)};function U(K,ht,xt){xt===null?K.matrix.copy(ht.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ht.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Z0*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(K){m=K,x!==null&&(x.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(R)};let $=null;function vt(K,ht){if(g=ht.getViewerPose(p||d),E=ht,g!==null){const xt=g.views;M!==null&&(e.setRenderTargetFramebuffer(B,M.framebuffer),e.setRenderTarget(B));let bt=!1;xt.length!==R.cameras.length&&(R.cameras.length=0,bt=!0);for(let Zt=0;Zt<xt.length;Zt++){const Fe=xt[Zt];let Pe=null;if(M!==null)Pe=M.getViewport(Fe);else{const I=v.getViewSubImage(x,Fe);Pe=I.viewport,Zt===0&&(e.setRenderTargetTextures(B,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(B))}let ce=w[Zt];ce===void 0&&(ce=new ri,ce.layers.enable(Zt),ce.viewport=new Ke,w[Zt]=ce),ce.matrix.fromArray(Fe.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Fe.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Zt===0&&(R.matrix.copy(ce.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),bt===!0&&R.cameras.push(ce)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Zt=v.getDepthInformation(xt[0]);Zt&&Zt.isValid&&Zt.texture&&b.init(e,Zt,l.renderState)}}for(let xt=0;xt<O.length;xt++){const bt=D[xt],Ot=O[xt];bt!==null&&Ot!==void 0&&Ot.update(bt,ht,p||d)}$&&$(K,ht),ht.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ht}),E=null}const St=new _m;St.setAnimationLoop(vt),this.setAnimationLoop=function(K){$=K},this.dispose=function(){}}}const dr=new ia,zE=new an;function FE(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,dm(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,B,O,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,D)):_.isMeshMatcapMaterial?(u(y,_),E(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),b(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?m(y,_,B,O):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===In&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===In&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const B=e.get(_),O=B.envMap,D=B.envMapRotation;O&&(y.envMap.value=O,dr.copy(D),dr.x*=-1,dr.y*=-1,dr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),y.envMapRotation.value.setFromMatrix4(zE.makeRotationFromEuler(dr)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,B,O){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*B,y.scale.value=O*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,B){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function b(y,_){const B=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function HE(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,O){const D=O.program;r.uniformBlockBinding(B,D)}function p(B,O){let D=l[B.id];D===void 0&&(E(B),D=g(B),l[B.id]=D,B.addEventListener("dispose",y));const G=O.program;r.updateUBOMapping(B,G);const V=e.render.frame;u[B.id]!==V&&(x(B),u[B.id]=V)}function g(B){const O=v();B.__bindingPointIndex=O;const D=o.createBuffer(),G=B.__size,V=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,G,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function v(){for(let B=0;B<h;B++)if(d.indexOf(B)===-1)return d.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const O=l[B.id],D=B.uniforms,G=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let V=0,z=D.length;V<z;V++){const j=Array.isArray(D[V])?D[V]:[D[V]];for(let w=0,R=j.length;w<R;w++){const H=j[w];if(M(H,V,w,G)===!0){const lt=H.__offset,st=Array.isArray(H.value)?H.value:[H.value];let gt=0;for(let dt=0;dt<st.length;dt++){const P=st[dt],Z=b(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,lt+gt,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,O,D,G){const V=B.value,z=O+"_"+D;if(G[z]===void 0)return typeof V=="number"||typeof V=="boolean"?G[z]=V:G[z]=V.clone(),!0;{const j=G[z];if(typeof V=="number"||typeof V=="boolean"){if(j!==V)return G[z]=V,!0}else if(j.equals(V)===!1)return j.copy(V),!0}return!1}function E(B){const O=B.uniforms;let D=0;const G=16;for(let z=0,j=O.length;z<j;z++){const w=Array.isArray(O[z])?O[z]:[O[z]];for(let R=0,H=w.length;R<H;R++){const lt=w[R],st=Array.isArray(lt.value)?lt.value:[lt.value];for(let gt=0,dt=st.length;gt<dt;gt++){const P=st[gt],Z=b(P),q=D%G,Mt=q%Z.boundary,U=q+Mt;D+=Mt,U!==0&&G-U<Z.storage&&(D+=G-U),lt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=D,D+=Z.storage}}}const V=D%G;return V>0&&(D+=G-V),B.__size=D,B.__cache={},this}function b(B){const O={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(O.boundary=4,O.storage=4):B.isVector2?(O.boundary=8,O.storage=8):B.isVector3||B.isColor?(O.boundary=16,O.storage=12):B.isVector4?(O.boundary=16,O.storage=16):B.isMatrix3?(O.boundary=48,O.storage=48):B.isMatrix4?(O.boundary=64,O.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),O}function y(B){const O=B.target;O.removeEventListener("dispose",y);const D=d.indexOf(O.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}class GE{constructor(e={}){const{canvas:i=y3(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const E=new Uint32Array(4),b=new Int32Array(4);let y=null,_=null;const B=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let G=!1;this._outputColorSpace=ai;let V=0,z=0,j=null,w=-1,R=null;const H=new Ke,lt=new Ke;let st=null;const gt=new Re(0);let dt=0,P=i.width,Z=i.height,q=1,Mt=null,U=null;const $=new Ke(0,0,P,Z),vt=new Ke(0,0,P,Z);let St=!1;const K=new mm;let ht=!1,xt=!1;const bt=new an,Ot=new an,re=new rt,Zt=new Ke,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function ce(){return j===null?q:1}let I=r;function Dn(C,W){return i.getContext(C,W)}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${J0}`),i.addEventListener("webglcontextlost",pt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),I===null){const W="webgl2";if(I=Dn(W,C),I===null)throw Dn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let pe,ee,Xt,we,Gt,L,T,tt,_t,yt,ut,It,Ct,Rt,me,Tt,Ft,Yt,Qt,Pt,oe,te,De,k;function Lt(){pe=new Ky(I),pe.init(),te=new NE(I,pe),ee=new Xy(I,pe,e,te),Xt=new UE(I,pe),ee.reverseDepthBuffer&&x&&Xt.buffers.depth.setReversed(!0),we=new tM(I),Gt=new vE,L=new LE(I,pe,Xt,Gt,ee,te,we),T=new qy(D),tt=new Qy(D),_t=new sx(I),De=new Vy(I,_t),yt=new Jy(I,_t,we,De),ut=new nM(I,yt,_t,we),Qt=new eM(I,ee,L),Tt=new Wy(Gt),It=new _E(D,T,tt,pe,ee,De,Tt),Ct=new FE(D,Gt),Rt=new SE,me=new bE(pe),Yt=new Gy(D,T,tt,Xt,ut,M,m),Ft=new wE(D,ut,ee),k=new HE(I,we,ee,Xt),Pt=new ky(I,pe,we),oe=new $y(I,pe,we),we.programs=It.programs,D.capabilities=ee,D.extensions=pe,D.properties=Gt,D.renderLists=Rt,D.shadowMap=Ft,D.state=Xt,D.info=we}Lt();const ot=new IE(D,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=pe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(P,Z,!1))},this.getSize=function(C){return C.set(P,Z)},this.setSize=function(C,W,it=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,Z=W,i.width=Math.floor(C*q),i.height=Math.floor(W*q),it===!0&&(i.style.width=C+"px",i.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(P*q,Z*q).floor()},this.setDrawingBufferSize=function(C,W,it){P=C,Z=W,q=it,i.width=Math.floor(C*it),i.height=Math.floor(W*it),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy($)},this.setViewport=function(C,W,it,at){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,W,it,at),Xt.viewport(H.copy($).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(vt)},this.setScissor=function(C,W,it,at){C.isVector4?vt.set(C.x,C.y,C.z,C.w):vt.set(C,W,it,at),Xt.scissor(lt.copy(vt).multiplyScalar(q).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(C){Xt.setScissorTest(St=C)},this.setOpaqueSort=function(C){Mt=C},this.setTransparentSort=function(C){U=C},this.getClearColor=function(C){return C.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,it=!0){let at=0;if(C){let Y=!1;if(j!==null){const Et=j.texture.format;Y=Et===ad||Et===id||Et===nd}if(Y){const Et=j.texture.type,wt=Et===na||Et===xr||Et===Ao||Et===To||Et===td||Et===ed,Dt=Yt.getClearColor(),zt=Yt.getClearAlpha(),Jt=Dt.r,Wt=Dt.g,kt=Dt.b;wt?(E[0]=Jt,E[1]=Wt,E[2]=kt,E[3]=zt,I.clearBufferuiv(I.COLOR,0,E)):(b[0]=Jt,b[1]=Wt,b[2]=kt,b[3]=zt,I.clearBufferiv(I.COLOR,0,b))}else at|=I.COLOR_BUFFER_BIT}W&&(at|=I.DEPTH_BUFFER_BIT),it&&(at|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",pt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),Yt.dispose(),Rt.dispose(),me.dispose(),Gt.dispose(),T.dispose(),tt.dispose(),ut.dispose(),De.dispose(),k.dispose(),It.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",rn),ot.removeEventListener("sessionend",_n),Un.stop()};function pt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const C=we.autoReset,W=Ft.enabled,it=Ft.autoUpdate,at=Ft.needsUpdate,Y=Ft.type;Lt(),we.autoReset=C,Ft.enabled=W,Ft.autoUpdate=it,Ft.needsUpdate=at,Ft.type=Y}function Nt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ne(C){const W=C.target;W.removeEventListener("dispose",ne),He(W)}function He(C){Je(C),Gt.remove(C)}function Je(C){const W=Gt.get(C).programs;W!==void 0&&(W.forEach(function(it){It.releaseProgram(it)}),C.isShaderMaterial&&It.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,it,at,Y,Et){W===null&&(W=Fe);const wt=Y.isMesh&&Y.matrixWorld.determinant()<0,Dt=Xa(C,W,it,at,Y);Xt.setMaterial(at,wt);let zt=it.index,Jt=1;if(at.wireframe===!0){if(zt=yt.getWireframeAttribute(it),zt===void 0)return;Jt=2}const Wt=it.drawRange,kt=it.attributes.position;let fe=Wt.start*Jt,Me=(Wt.start+Wt.count)*Jt;Et!==null&&(fe=Math.max(fe,Et.start*Jt),Me=Math.min(Me,(Et.start+Et.count)*Jt)),zt!==null?(fe=Math.max(fe,0),Me=Math.min(Me,zt.count)):kt!=null&&(fe=Math.max(fe,0),Me=Math.min(Me,kt.count));const Xe=Me-fe;if(Xe<0||Xe===1/0)return;De.setup(Y,at,Dt,it,zt);let ge,_e=Pt;if(zt!==null&&(ge=_t.get(zt),_e=oe,_e.setIndex(ge)),Y.isMesh)at.wireframe===!0?(Xt.setLineWidth(at.wireframeLinewidth*ce()),_e.setMode(I.LINES)):_e.setMode(I.TRIANGLES);else if(Y.isLine){let qt=at.linewidth;qt===void 0&&(qt=1),Xt.setLineWidth(qt*ce()),Y.isLineSegments?_e.setMode(I.LINES):Y.isLineLoop?_e.setMode(I.LINE_LOOP):_e.setMode(I.LINE_STRIP)}else Y.isPoints?_e.setMode(I.POINTS):Y.isSprite&&_e.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)gc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))_e.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qt=Y._multiDrawStarts,qe=Y._multiDrawCounts,Se=Y._multiDrawCount,Mn=zt?_t.get(zt).bytesPerElement:1,oa=Gt.get(at).currentProgram.getUniforms();for(let Ge=0;Ge<Se;Ge++)oa.setValue(I,"_gl_DrawID",Ge),_e.render(qt[Ge]/Mn,qe[Ge])}else if(Y.isInstancedMesh)_e.renderInstances(fe,Xe,Y.count);else if(it.isInstancedBufferGeometry){const qt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,qe=Math.min(it.instanceCount,qt);_e.renderInstances(fe,Xe,qe)}else _e.render(fe,Xe)};function ye(C,W,it){C.transparent===!0&&C.side===Ji&&C.forceSinglePass===!1?(C.side=In,C.needsUpdate=!0,ra(C,W,it),C.side=Fa,C.needsUpdate=!0,ra(C,W,it),C.side=Ji):ra(C,W,it)}this.compile=function(C,W,it=null){it===null&&(it=C),_=me.get(it),_.init(W),O.push(_),it.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),C!==it&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const at=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Et=Y.material;if(Et)if(Array.isArray(Et))for(let wt=0;wt<Et.length;wt++){const Dt=Et[wt];ye(Dt,it,Y),at.add(Dt)}else ye(Et,it,Y),at.add(Et)}),_=O.pop(),at},this.compileAsync=function(C,W,it=null){const at=this.compile(C,W,it);return new Promise(Y=>{function Et(){if(at.forEach(function(wt){Gt.get(wt).currentProgram.isReady()&&at.delete(wt)}),at.size===0){Y(C);return}setTimeout(Et,10)}pe.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Hn=null;function fn(C){Hn&&Hn(C)}function rn(){Un.stop()}function _n(){Un.start()}const Un=new _m;Un.setAnimationLoop(fn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(C){Hn=C,ot.setAnimationLoop(C),C===null?Un.stop():Un.start()},ot.addEventListener("sessionstart",rn),ot.addEventListener("sessionend",_n),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,W,j),_=me.get(C,O.length),_.init(W),O.push(_),Ot.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),K.setFromProjectionMatrix(Ot),xt=this.localClippingEnabled,ht=Tt.init(this.clippingPlanes,xt),y=Rt.get(C,B.length),y.init(),B.push(y),ot.enabled===!0&&ot.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&Va(Et,W,-1/0,D.sortObjects)}Va(C,W,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(Mt,U),Pe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Pe&&Yt.addToRenderList(y,C),this.info.render.frame++,ht===!0&&Tt.beginShadows();const it=_.state.shadowsArray;Ft.render(it,C,W),ht===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=y.opaque,Y=y.transmissive;if(_.setupLights(),W.isArrayCamera){const Et=W.cameras;if(Y.length>0)for(let wt=0,Dt=Et.length;wt<Dt;wt++){const zt=Et[wt];Oo(at,Y,C,zt)}Pe&&Yt.render(C);for(let wt=0,Dt=Et.length;wt<Dt;wt++){const zt=Et[wt];No(y,C,zt,zt.viewport)}}else Y.length>0&&Oo(at,Y,C,W),Pe&&Yt.render(C),No(y,C,W);j!==null&&z===0&&(L.updateMultisampleRenderTarget(j),L.updateRenderTargetMipmap(j)),C.isScene===!0&&C.onAfterRender(D,C,W),De.resetDefaultState(),w=-1,R=null,O.pop(),O.length>0?(_=O[O.length-1],ht===!0&&Tt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function Va(C,W,it,at){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)it=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){at&&Zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ot);const wt=ut.update(C),Dt=C.material;Dt.visible&&y.push(C,wt,Dt,it,Zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||K.intersectsObject(C))){const wt=ut.update(C),Dt=C.material;if(at&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Zt.copy(C.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Zt.copy(wt.boundingSphere.center)),Zt.applyMatrix4(C.matrixWorld).applyMatrix4(Ot)),Array.isArray(Dt)){const zt=wt.groups;for(let Jt=0,Wt=zt.length;Jt<Wt;Jt++){const kt=zt[Jt],fe=Dt[kt.materialIndex];fe&&fe.visible&&y.push(C,wt,fe,it,Zt.z,kt)}}else Dt.visible&&y.push(C,wt,Dt,it,Zt.z,null)}}const Et=C.children;for(let wt=0,Dt=Et.length;wt<Dt;wt++)Va(Et[wt],W,it,at)}function No(C,W,it,at){const Y=C.opaque,Et=C.transmissive,wt=C.transparent;_.setupLightsView(it),ht===!0&&Tt.setGlobalState(D.clippingPlanes,it),at&&Xt.viewport(H.copy(at)),Y.length>0&&ka(Y,W,it),Et.length>0&&ka(Et,W,it),wt.length>0&&ka(wt,W,it),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Oo(C,W,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[at.id]===void 0&&(_.state.transmissionRenderTarget[at.id]=new Sr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?Ro:na,minFilter:vr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Et=_.state.transmissionRenderTarget[at.id],wt=at.viewport||H;Et.setSize(wt.z*D.transmissionResolutionScale,wt.w*D.transmissionResolutionScale);const Dt=D.getRenderTarget();D.setRenderTarget(Et),D.getClearColor(gt),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),Pe&&Yt.render(it);const zt=D.toneMapping;D.toneMapping=za;const Jt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),_.setupLightsView(at),ht===!0&&Tt.setGlobalState(D.clippingPlanes,at),ka(C,it,at),L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let kt=0,fe=W.length;kt<fe;kt++){const Me=W[kt],Xe=Me.object,ge=Me.geometry,_e=Me.material,qt=Me.group;if(_e.side===Ji&&Xe.layers.test(at.layers)){const qe=_e.side;_e.side=In,_e.needsUpdate=!0,aa(Xe,it,at,ge,_e,qt),_e.side=qe,_e.needsUpdate=!0,Wt=!0}}Wt===!0&&(L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et))}D.setRenderTarget(Dt),D.setClearColor(gt,dt),Jt!==void 0&&(at.viewport=Jt),D.toneMapping=zt}function ka(C,W,it){const at=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Et=C.length;Y<Et;Y++){const wt=C[Y],Dt=wt.object,zt=wt.geometry,Jt=wt.group;let Wt=wt.material;Wt.allowOverride===!0&&at!==null&&(Wt=at),Dt.layers.test(it.layers)&&aa(Dt,W,it,zt,Wt,Jt)}}function aa(C,W,it,at,Y,Et){C.onBeforeRender(D,W,it,at,Y,Et),C.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(D,W,it,at,C,Et),Y.transparent===!0&&Y.side===Ji&&Y.forceSinglePass===!1?(Y.side=In,Y.needsUpdate=!0,D.renderBufferDirect(it,W,at,Y,C,Et),Y.side=Fa,Y.needsUpdate=!0,D.renderBufferDirect(it,W,at,Y,C,Et),Y.side=Ji):D.renderBufferDirect(it,W,at,Y,C,Et),C.onAfterRender(D,W,it,at,Y,Et)}function ra(C,W,it){W.isScene!==!0&&(W=Fe);const at=Gt.get(C),Y=_.state.lights,Et=_.state.shadowsArray,wt=Y.state.version,Dt=It.getParameters(C,Y.state,Et,W,it),zt=It.getProgramCacheKey(Dt);let Jt=at.programs;at.environment=C.isMeshStandardMaterial?W.environment:null,at.fog=W.fog,at.envMap=(C.isMeshStandardMaterial?tt:T).get(C.envMap||at.environment),at.envMapRotation=at.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Jt===void 0&&(C.addEventListener("dispose",ne),Jt=new Map,at.programs=Jt);let Wt=Jt.get(zt);if(Wt!==void 0){if(at.currentProgram===Wt&&at.lightsStateVersion===wt)return Ri(C,Dt),Wt}else Dt.uniforms=It.getUniforms(C),C.onBeforeCompile(Dt,D),Wt=It.acquireProgram(Dt,zt),Jt.set(zt,Wt),at.uniforms=Dt.uniforms;const kt=at.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(kt.clippingPlanes=Tt.uniform),Ri(C,Dt),at.needsLights=$e(C),at.lightsStateVersion=wt,at.needsLights&&(kt.ambientLightColor.value=Y.state.ambient,kt.lightProbe.value=Y.state.probe,kt.directionalLights.value=Y.state.directional,kt.directionalLightShadows.value=Y.state.directionalShadow,kt.spotLights.value=Y.state.spot,kt.spotLightShadows.value=Y.state.spotShadow,kt.rectAreaLights.value=Y.state.rectArea,kt.ltc_1.value=Y.state.rectAreaLTC1,kt.ltc_2.value=Y.state.rectAreaLTC2,kt.pointLights.value=Y.state.point,kt.pointLightShadows.value=Y.state.pointShadow,kt.hemisphereLights.value=Y.state.hemi,kt.directionalShadowMap.value=Y.state.directionalShadowMap,kt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,kt.spotShadowMap.value=Y.state.spotShadowMap,kt.spotLightMatrix.value=Y.state.spotLightMatrix,kt.spotLightMap.value=Y.state.spotLightMap,kt.pointShadowMap.value=Y.state.pointShadowMap,kt.pointShadowMatrix.value=Y.state.pointShadowMatrix),at.currentProgram=Wt,at.uniformsList=null,Wt}function Ci(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=_c.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Ri(C,W){const it=Gt.get(C);it.outputColorSpace=W.outputColorSpace,it.batching=W.batching,it.batchingColor=W.batchingColor,it.instancing=W.instancing,it.instancingColor=W.instancingColor,it.instancingMorph=W.instancingMorph,it.skinning=W.skinning,it.morphTargets=W.morphTargets,it.morphNormals=W.morphNormals,it.morphColors=W.morphColors,it.morphTargetsCount=W.morphTargetsCount,it.numClippingPlanes=W.numClippingPlanes,it.numIntersection=W.numClipIntersection,it.vertexAlphas=W.vertexAlphas,it.vertexTangents=W.vertexTangents,it.toneMapping=W.toneMapping}function Xa(C,W,it,at,Y){W.isScene!==!0&&(W=Fe),L.resetTextureUnits();const Et=W.fog,wt=at.isMeshStandardMaterial?W.environment:null,Dt=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:xs,zt=(at.isMeshStandardMaterial?tt:T).get(at.envMap||wt),Jt=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Wt=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),kt=!!it.morphAttributes.position,fe=!!it.morphAttributes.normal,Me=!!it.morphAttributes.color;let Xe=za;at.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xe=D.toneMapping);const ge=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,_e=ge!==void 0?ge.length:0,qt=Gt.get(at),qe=_.state.lights;if(ht===!0&&(xt===!0||C!==R)){const dn=C===R&&at.id===w;Tt.setState(at,C,dn)}let Se=!1;at.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==qe.state.version||qt.outputColorSpace!==Dt||Y.isBatchedMesh&&qt.batching===!1||!Y.isBatchedMesh&&qt.batching===!0||Y.isBatchedMesh&&qt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qt.instancing===!1||!Y.isInstancedMesh&&qt.instancing===!0||Y.isSkinnedMesh&&qt.skinning===!1||!Y.isSkinnedMesh&&qt.skinning===!0||Y.isInstancedMesh&&qt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qt.instancingMorph===!1&&Y.morphTexture!==null||qt.envMap!==zt||at.fog===!0&&qt.fog!==Et||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Tt.numPlanes||qt.numIntersection!==Tt.numIntersection)||qt.vertexAlphas!==Jt||qt.vertexTangents!==Wt||qt.morphTargets!==kt||qt.morphNormals!==fe||qt.morphColors!==Me||qt.toneMapping!==Xe||qt.morphTargetsCount!==_e)&&(Se=!0):(Se=!0,qt.__version=at.version);let Mn=qt.currentProgram;Se===!0&&(Mn=ra(at,W,Y));let oa=!1,Ge=!1,Di=!1;const Be=Mn.getUniforms(),En=qt.uniforms;if(Xt.useProgram(Mn.program)&&(oa=!0,Ge=!0,Di=!0),at.id!==w&&(w=at.id,Ge=!0),oa||R!==C){Xt.buffers.depth.getReversed()?(bt.copy(C.projectionMatrix),E3(bt),A3(bt),Be.setValue(I,"projectionMatrix",bt)):Be.setValue(I,"projectionMatrix",C.projectionMatrix),Be.setValue(I,"viewMatrix",C.matrixWorldInverse);const vn=Be.map.cameraPosition;vn!==void 0&&vn.setValue(I,re.setFromMatrixPosition(C.matrixWorld)),ee.logarithmicDepthBuffer&&Be.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Be.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Ge=!0,Di=!0)}if(Y.isSkinnedMesh){Be.setOptional(I,Y,"bindMatrix"),Be.setOptional(I,Y,"bindMatrixInverse");const dn=Y.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Be.setValue(I,"boneTexture",dn.boneTexture,L))}Y.isBatchedMesh&&(Be.setOptional(I,Y,"batchingTexture"),Be.setValue(I,"batchingTexture",Y._matricesTexture,L),Be.setOptional(I,Y,"batchingIdTexture"),Be.setValue(I,"batchingIdTexture",Y._indirectTexture,L),Be.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Be.setValue(I,"batchingColorTexture",Y._colorsTexture,L));const sn=it.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Qt.update(Y,it,Mn),(Ge||qt.receiveShadow!==Y.receiveShadow)&&(qt.receiveShadow=Y.receiveShadow,Be.setValue(I,"receiveShadow",Y.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(En.envMap.value=zt,En.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&W.environment!==null&&(En.envMapIntensity.value=W.environmentIntensity),Ge&&(Be.setValue(I,"toneMappingExposure",D.toneMappingExposure),qt.needsLights&&sa(En,Di),Et&&at.fog===!0&&Ct.refreshFogUniforms(En,Et),Ct.refreshMaterialUniforms(En,at,q,Z,_.state.transmissionRenderTarget[C.id]),_c.upload(I,Ci(qt),En,L)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(_c.upload(I,Ci(qt),En,L),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Be.setValue(I,"center",Y.center),Be.setValue(I,"modelViewMatrix",Y.modelViewMatrix),Be.setValue(I,"normalMatrix",Y.normalMatrix),Be.setValue(I,"modelMatrix",Y.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const dn=at.uniformsGroups;for(let vn=0,mi=dn.length;vn<mi;vn++){const Ui=dn[vn];k.update(Ui,Mn),k.bind(Ui,Mn)}}return Mn}function sa(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function $e(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,W,it){const at=Gt.get(C);at.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),Gt.get(C.texture).__webglTexture=W,Gt.get(C.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:it,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const it=Gt.get(C);it.__webglFramebuffer=W,it.__useDefaultFramebuffer=W===void 0};const Po=I.createFramebuffer();this.setRenderTarget=function(C,W=0,it=0){j=C,V=W,z=it;let at=!0,Y=null,Et=!1,wt=!1;if(C){const zt=Gt.get(C);if(zt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(I.FRAMEBUFFER,null),at=!1;else if(zt.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(zt.__hasExternalTextures)L.rebindTextures(C,Gt.get(C.texture).__webglTexture,Gt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const kt=C.depthTexture;if(zt.__boundDepthTexture!==kt){if(kt!==null&&Gt.has(kt)&&(C.width!==kt.image.width||C.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const Jt=C.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(wt=!0);const Wt=Gt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[W])?Y=Wt[W][it]:Y=Wt[W],Et=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?Y=Gt.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?Y=Wt[it]:Y=Wt,H.copy(C.viewport),lt.copy(C.scissor),st=C.scissorTest}else H.copy($).multiplyScalar(q).floor(),lt.copy(vt).multiplyScalar(q).floor(),st=St;if(it!==0&&(Y=Po),Xt.bindFramebuffer(I.FRAMEBUFFER,Y)&&at&&Xt.drawBuffers(C,Y),Xt.viewport(H),Xt.scissor(lt),Xt.setScissorTest(st),Et){const zt=Gt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,zt.__webglTexture,it)}else if(wt){const zt=Gt.get(C.texture),Jt=W;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,it,Jt)}else if(C!==null&&it!==0){const zt=Gt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,it)}w=-1},this.readRenderTargetPixels=function(C,W,it,at,Y,Et,wt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Gt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){Xt.bindFramebuffer(I.FRAMEBUFFER,Dt);try{const zt=C.texture,Jt=zt.format,Wt=zt.type;if(!ee.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-at&&it>=0&&it<=C.height-Y&&I.readPixels(W,it,at,Y,te.convert(Jt),te.convert(Wt),Et)}finally{const zt=j!==null?Gt.get(j).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(C,W,it,at,Y,Et,wt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Gt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt)if(W>=0&&W<=C.width-at&&it>=0&&it<=C.height-Y){Xt.bindFramebuffer(I.FRAMEBUFFER,Dt);const zt=C.texture,Jt=zt.format,Wt=zt.type;if(!ee.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.bufferData(I.PIXEL_PACK_BUFFER,Et.byteLength,I.STREAM_READ),I.readPixels(W,it,at,Y,te.convert(Jt),te.convert(Wt),0);const fe=j!==null?Gt.get(j).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,fe);const Me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await M3(I,Me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Et),I.deleteBuffer(kt),I.deleteSync(Me),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,it=0){const at=Math.pow(2,-it),Y=Math.floor(C.image.width*at),Et=Math.floor(C.image.height*at),wt=W!==null?W.x:0,Dt=W!==null?W.y:0;L.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,it,0,0,wt,Dt,Y,Et),Xt.unbindTexture()};const Bo=I.createFramebuffer(),wi=I.createFramebuffer();this.copyTextureToTexture=function(C,W,it=null,at=null,Y=0,Et=null){Et===null&&(Y!==0?(gc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Y,Y=0):Et=0);let wt,Dt,zt,Jt,Wt,kt,fe,Me,Xe;const ge=C.isCompressedTexture?C.mipmaps[Et]:C.image;if(it!==null)wt=it.max.x-it.min.x,Dt=it.max.y-it.min.y,zt=it.isBox3?it.max.z-it.min.z:1,Jt=it.min.x,Wt=it.min.y,kt=it.isBox3?it.min.z:0;else{const sn=Math.pow(2,-Y);wt=Math.floor(ge.width*sn),Dt=Math.floor(ge.height*sn),C.isDataArrayTexture?zt=ge.depth:C.isData3DTexture?zt=Math.floor(ge.depth*sn):zt=1,Jt=0,Wt=0,kt=0}at!==null?(fe=at.x,Me=at.y,Xe=at.z):(fe=0,Me=0,Xe=0);const _e=te.convert(W.format),qt=te.convert(W.type);let qe;W.isData3DTexture?(L.setTexture3D(W,0),qe=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),qe=I.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),qe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Se=I.getParameter(I.UNPACK_ROW_LENGTH),Mn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),oa=I.getParameter(I.UNPACK_SKIP_PIXELS),Ge=I.getParameter(I.UNPACK_SKIP_ROWS),Di=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kt);const Be=C.isDataArrayTexture||C.isData3DTexture,En=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const sn=Gt.get(C),dn=Gt.get(W),vn=Gt.get(sn.__renderTarget),mi=Gt.get(dn.__renderTarget);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,vn.__webglFramebuffer),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Ui=0;Ui<zt;Ui++)Be&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.get(C).__webglTexture,Y,kt+Ui),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.get(W).__webglTexture,Et,Xe+Ui)),I.blitFramebuffer(Jt,Wt,wt,Dt,fe,Me,wt,Dt,I.DEPTH_BUFFER_BIT,I.NEAREST);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||Gt.has(C)){const sn=Gt.get(C),dn=Gt.get(W);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,Bo),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,wi);for(let vn=0;vn<zt;vn++)Be?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,sn.__webglTexture,Y,kt+vn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,sn.__webglTexture,Y),En?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dn.__webglTexture,Et,Xe+vn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dn.__webglTexture,Et),Y!==0?I.blitFramebuffer(Jt,Wt,wt,Dt,fe,Me,wt,Dt,I.COLOR_BUFFER_BIT,I.NEAREST):En?I.copyTexSubImage3D(qe,Et,fe,Me,Xe+vn,Jt,Wt,wt,Dt):I.copyTexSubImage2D(qe,Et,fe,Me,Jt,Wt,wt,Dt);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else En?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(qe,Et,fe,Me,Xe,wt,Dt,zt,_e,qt,ge.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(qe,Et,fe,Me,Xe,wt,Dt,zt,_e,ge.data):I.texSubImage3D(qe,Et,fe,Me,Xe,wt,Dt,zt,_e,qt,ge):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Et,fe,Me,wt,Dt,_e,qt,ge.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Et,fe,Me,ge.width,ge.height,_e,ge.data):I.texSubImage2D(I.TEXTURE_2D,Et,fe,Me,wt,Dt,_e,qt,ge);I.pixelStorei(I.UNPACK_ROW_LENGTH,Se),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,oa),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Di),Et===0&&W.generateMipmaps&&I.generateMipmap(qe),Xt.unbindTexture()},this.copyTextureToTexture3D=function(C,W,it=null,at=null,Y=0){return gc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,it,at,Y)},this.initRenderTarget=function(C){Gt.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Xt.unbindTexture()},this.resetState=function(){V=0,z=0,j=null,Xt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const G1="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20fill='%23FFFFFF'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='48px'%20height='48px'%3e%3cpath%20d='M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1%20c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1%20c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6%20c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4%20c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3%20C22,6.1,16.9,1.4,10.9,2.1z'/%3e%3c/svg%3e",VE="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='48px'%20height='48px'%3e%3cpath%20d='M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1%20c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1%20c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6%20c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4%20c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3%20C22,6.1,16.9,1.4,10.9,2.1z'/%3e%3c/svg%3e",V1="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='48px'%20height='48px'%20fill-rule='nonzero'%3e%3cg%20fill='%23ffffff'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(8.53333,8.53333)'%3e%3cpath%20d='M24.707,8.793l-6.5,-6.5c-0.188,-0.188%20-0.442,-0.293%20-0.707,-0.293h-10.5c-1.105,0%20-2,0.895%20-2,2v22c0,1.105%200.895,2%202,2h16c1.105,0%202,-0.895%202,-2v-16.5c0,-0.265%20-0.105,-0.519%20-0.293,-0.707zM18,10c-0.552,0%20-1,-0.448%20-1,-1v-5.096l6.096,6.096z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",kE="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2030%2030'%20width='48px'%20height='48px'%3e%3cpath%20d='M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2%20V9.5C25,9.235,24.895,8.981,24.707,8.793z%20M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z'/%3e%3c/svg%3e",XE="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='48px'%20height='48px'%3e%3cpath%20d='M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z%20M7.738,17L7.738,17%20c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477%20C9,16.435,8.435,17,7.738,17z%20M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2%20S8.551,8.717,7.694,8.717z%20M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174%20s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517%20c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174%20v2.605C18,16.453,17.453,17,16.779,17z'/%3e%3c/svg%3e",k1="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20fill='%23FFFFFF'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='48px'%20height='48px'%3e%3cpath%20d='M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z%20M7.738,17L7.738,17%20c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477%20C9,16.435,8.435,17,7.738,17z%20M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2%20S8.551,8.717,7.694,8.717z%20M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174%20s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517%20c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174%20v2.605C18,16.453,17.453,17,16.779,17z'/%3e%3c/svg%3e",WE="/yanny-portfolio/assets/profilePic-jQ9UNtZg.png",qE="/yanny-portfolio/assets/TMU_logo-r5e6krRI.png",YE="/yanny-portfolio/assets/ibLogo-CJoh11rc.png",jE="/yanny-portfolio/assets/logicFusionLogo-C2X9slZu.png",ZE="/yanny-portfolio/assets/mhirj-CmTva11e.png",c0=1920,QE={arduino:"An open-source electronics platform based on simple hardware and flexible software, ideal for rapid prototyping of IoT devices and embedded systems. Arduino empowers developers to bring interactive physical computing projects to life using sensors, actuators, and microcontrollers",azure:"Microsoft Azure is a leading cloud computing platform offering a wide range of services including virtual machines, AI, DevOps, and serverless computing. It’s a go-to solution for scalable enterprise applications, hybrid cloud environments, and end-to-end digital transformation",c:"A foundational systems programming language known for speed, memory efficiency, and low-level hardware control. C underpins modern operating systems, embedded firmware, and performance-critical applications, making it essential for software engineers working close to the hardware",docker:"A powerful containerization platform that enables consistent software deployment across development, testing, and production. Docker is central to DevOps, microservices architecture, and cloud-native development, allowing developers to build once and run anywhere",electron:"A framework for building cross-platform desktop applications using web technologies like JavaScript, HTML, and CSS. Electron powers popular tools like VS Code and Figma, offering native capabilities with a web development experience for fast desktop app development",es:"A highly scalable open-source search and analytics engine designed for fast full-text search, log analysis, and real-time data visualization. Widely used in monitoring, business intelligence, and information retrieval systems, Elasticsearch excels at handling massive data volumes",express:"A minimal and flexible Node.js web application framework that streamlines API development and server-side logic. Express is widely adopted for its simplicity, scalability, and robust middleware ecosystem, making it a top choice for RESTful services and microservices",flask:"A lightweight Python web framework perfect for building APIs and web apps quickly. Flask offers simplicity and extensibility, making it ideal for data science dashboards, machine learning interfaces, and scalable backend services",git:"An essential distributed version control system that allows teams to collaborate efficiently on code. Git tracks changes, enables branching workflows, and integrates seamlessly with CI/CD pipelines, forming the backbone of modern software development practices",java:"A mature, object-oriented programming language known for its platform independence, security, and robustness. Java is widely used in enterprise-level applications, Android development, and high-performance systems in finance, healthcare, and telecom",javascript:"A dynamic, high-level language that drives interactivity and logic on the web. JavaScript is used across the stack—client-side with frameworks like React and server-side via Node.js—making it indispensable for full-stack development",kubernetes:"An open-source container orchestration platform that automates deployment, scaling, and management of containerized applications. Kubernetes is crucial for building resilient, scalable cloud-native apps and is a core technology in modern DevOps workflows",lua:"A lightweight, high-performance scripting language often embedded in games, real-time applications, and embedded systems. Lua is prized for its speed, simplicity, and ability to extend host applications with custom logic.",mui:"A React UI framework implementing Google’s Material Design system. MUI accelerates front-end development with ready-to-use components, consistent theming, and accessibility features, enabling polished and responsive user interfaces",mysql:"A widely adopted open-source relational database known for reliability, performance, and ease of use. MySQL supports complex queries and large-scale data storage, serving as a backbone for countless web and enterprise applications",nodejs:"A JavaScript runtime built on Chrome’s V8 engine, enabling fast, scalable server-side applications. Node.js powers real-time apps, APIs, and microservices with non-blocking I/O, making it a favorite for modern full-stack development",react:"A declarative, component-based JavaScript library for building fast, dynamic user interfaces. Developed by Meta, React simplifies state management and DOM rendering, enabling scalable front-end architectures and seamless user experiences",redux:"A predictable state container for JavaScript applications, often used with React to manage complex app state. Redux enhances maintainability and debugging by centralizing state logic and enabling time-travel debugging and consistent behavior",vite:"A lightning-fast build tool and development server that dramatically improves the front-end development experience. Designed with modern JavaScript frameworks in mind, Vite offers instant hot module replacement and optimized builds for production",threejs:"Three.js is a JavaScript 3D library used to create interactive, high-performance 3D content in the browser using WebGL. It enables the rendering of complex scenes with custom geometries, lighting, animations, and camera controls, making it ideal for building immersive visual experiences and modern web interfaces (aka floating green donut)"},cd=Object.assign({"../../assets/icons/arduino.svg":P_,"../../assets/icons/azure.svg":I_,"../../assets/icons/c.svg":F_,"../../assets/icons/docker.svg":G_,"../../assets/icons/electron.svg":k_,"../../assets/icons/es.svg":W_,"../../assets/icons/express.svg":Y_,"../../assets/icons/flask.svg":Z_,"../../assets/icons/git.svg":K_,"../../assets/icons/java.svg":$_,"../../assets/icons/javascript.svg":ev,"../../assets/icons/kubernetes.svg":iv,"../../assets/icons/lua.svg":rv,"../../assets/icons/mui.svg":ov,"../../assets/icons/mysql.svg":cv,"../../assets/icons/nodejs.svg":fv,"../../assets/icons/react.svg":hv,"../../assets/icons/redux.svg":mv,"../../assets/icons/threejs.svg":_v,"../../assets/icons/vite.svg":xv}),X1=Object.assign({"../../assets/projects/BatteryBrudda.png":yv,"../../assets/projects/Gooselator.png":Ev,"../../assets/projects/REC2022-World-Growth-Engine.png":Tv,"../../assets/projects/Simple-GPU.png":Cv,"../../assets/projects/pixel-draw.png":wv,"../../assets/projects/yanny-portfolio.png":Uv}),W1=Object.keys(cd).map(o=>{const e=o.split("/");return e[e.length-1].slice(0,-4)}),KE=Object.keys(X1).flatMap(o=>{const e=o.split("/");return{[e[e.length-1].slice(0,-4)]:X1[o].default}}),JE=Object.assign({},...KE),$E=Object.values(cd);function tA(){const[o,e]=yi.useState(),[i,r]=yi.useState(!1),[l,u]=yi.useState(window.innerWidth>c0*.5),d=yi.useRef(null),[h,m]=yi.useState(null),p=()=>r(!1),[g,v]=yi.useState(!0),x={width:l?"auto":"68px",borderRadius:l?"10px":"100px"},M=new IntersectionObserver(E=>{E.forEach(b=>{b.isIntersecting&&(b.target.classList.add("animate"),M.unobserve(b.target))})});return yi.useEffect(()=>{fetch("https://api.github.com/users/Yanny24211/repos").then(E=>E.json()).then(E=>{const b=E.filter(y=>y.topics[0]);m(b),console.log(b)})},[]),yi.useEffect(()=>{if(!d.current)return;const E=new Q3,b=new ri(75,document.documentElement.clientWidth/document.documentElement.clientHeight,.1,1e3),y=new GE({canvas:d.current}),_=new ix(16777215);E.add(_),y.setPixelRatio(window.devicePixelRatio),y.setSize(document.documentElement.clientWidth,document.documentElement.clientHeight),b.position.setZ(30),y.render(E,b);const B=l?new ds(12,3,16,100):new ds(8,3,10,70),O=new od({color:5025616,wireframe:!0}),D=new Ai(B,O);E.add(D);const G=window.scrollY;function V(){D.rotation.x+=.01,D.rotation.y+=.02,D.rotation.z+=.02,y.render(E,b)}function z(){const w=window.scrollY;w>G?(D.rotation.x+=.05,D.rotation.y+=.05,D.rotation.z+=.05,y.render(E,b)):w<G&&(D.rotation.x-=.05,D.rotation.y-=.05,D.rotation.z-=.05,y.render(E,b))}window.addEventListener("scroll",z),y.setAnimationLoop(V);const j=()=>{const w=window.innerWidth,R=window.innerHeight;b.aspect=w/R,b.updateProjectionMatrix();const H=l?new ds(12,3,16,100):new ds(8,3,10,70);D.geometry=H,y.setSize(w,R)};return window.addEventListener("resize",j),()=>{window.removeEventListener("resize",j),y.dispose()}},[]),yi.useEffect(()=>{window.addEventListener("scroll",()=>{const E=document.querySelectorAll(".background-graphics"),b=window.scrollY;E.forEach(y=>y.style.backgroundPosition=`0px ${-b/5}px`)}),document.querySelectorAll(".navbar-item").forEach(E=>{const b=E.querySelector("img");b.alt==="github-logo"?(E.addEventListener("mouseenter",()=>{b.style.opacity=0,setTimeout(()=>{b.src=VE,b.style.opacity=1},100)}),E.addEventListener("mouseleave",()=>{b.style.opacity=0,setTimeout(()=>{b.src=G1,b.style.opacity=1},100)})):b.alt==="linkedin-symbol"?(E.addEventListener("mouseenter",()=>{b.style.opacity=0,setTimeout(()=>{b.src=XE,b.style.opacity=1},100)}),E.addEventListener("mouseleave",()=>{b.style.opacity=0,setTimeout(()=>{b.src=k1,b.style.opacity=1},100)})):b.alt==="resume-symbol"&&(E.addEventListener("mouseenter",()=>{b.style.opacity=0,setTimeout(()=>{b.src=kE,b.style.opacity=1},100)}),E.addEventListener("mouseleave",()=>{b.style.opacity=0,setTimeout(()=>{b.src=V1,b.style.opacity=1},100)}))})},[]),yi.useEffect(()=>{const E=document.querySelector(".contact");M.observe(E);const b=()=>{window.scrollY===0?v(!0):v(!1)},y=()=>{const _=window.innerWidth>c0*.5;u(_)};return console.log(window.innerWidth>c0*.5),console.log(window.innerWidth),window.addEventListener("scroll",b),window.addEventListener("resize",y),y(),()=>{window.removeEventListener("scroll",b),window.removeEventListener("resize",y)}},[]),At.jsxs("div",{id:"homepage",className:"homepage",children:[At.jsxs("div",{className:"header-card",children:[At.jsxs("div",{style:{height:g?"110px":"100px",transition:"all 0.5s ease-in-out"},className:"navbar",children:[At.jsxs("div",{className:"title-card",children:[At.jsx("div",{style:{display:"flex",justifyContent:"center",width:"80px"},children:At.jsx("a",{href:"#homepage",children:At.jsx("img",{style:{width:g?"54px":"48px",height:g?"54px":"48px"},id:"profilePic",src:WE,alt:"profile-photo"})})}),l&&"Yanny Patel"]}),At.jsx("div",{className:"link-items",children:At.jsxs("ul",{className:"navbar-items",children:[At.jsx("li",{style:x,className:"navbar-item",children:At.jsxs("a",{href:"https://github.com/Yanny24211",target:"_blank",children:[At.jsx("img",{src:G1,alt:"github-logo"}),l&&"Github"]})}),At.jsx("li",{style:x,className:"navbar-item",children:At.jsxs("a",{href:"https://www.linkedin.com/in/yanny-patel/",target:"_blank",children:[At.jsx("img",{src:k1,alt:"linkedin-symbol"}),l&&"LinkedIn"]})}),At.jsx("li",{style:x,className:"navbar-item",children:At.jsxs("a",{href:"https://drive.google.com/file/d/1puWHTjAEJFg4j-FYNOFcIBdgTg3By_zj/view?usp=sharing",target:"_blank",children:[At.jsx("img",{src:V1,alt:"resume-symbol"}),l&&"Resume"]})})]})})]}),At.jsxs("div",{className:"canvas-container",children:[At.jsx("canvas",{className:"bg-canvas",ref:d}),At.jsxs("div",{className:"bg-container",children:[At.jsx("div",{className:"name",children:"Yanny Patel"}),At.jsx("div",{className:"current-occupation",children:At.jsx("a",{id:"about",href:"#aboutMe",children:"About Me"})})]})]})]}),At.jsx("div",{className:"background-graphics",id:"img1"}),At.jsx("div",{id:"aboutMe",className:"header-card",children:At.jsxs("div",{id:"mainBox",style:{width:l?"100%":"95%"},children:[At.jsxs("div",{className:"about-me-box",children:[At.jsx("div",{className:"wrapper-box",children:At.jsxs("div",{className:"description",children:[At.jsx("img",{style:{height:"5vh"},src:jE}),"Part-time STEM Course Instructor at Logic Fusion"]})}),At.jsx("div",{className:"wrapper-box",children:At.jsxs("div",{className:"description",children:[At.jsx("img",{style:{height:"100px"},src:ZE}),"Software Developer Intern at MHI RJ"]})})]}),At.jsx("div",{className:"about-me-box",children:i?At.jsx("div",{className:"overlay-container",children:At.jsxs("div",{className:"overlay",children:[At.jsx("div",{children:At.jsx("img",{className:"techs",src:cd[`../../assets/icons/${o}.svg`].default,onClick:p,alt:`Asset ${o}.svg`})}),At.jsx("div",{children:At.jsx("h2",{className:"skill-title",children:o.toUpperCase()})}),At.jsx("div",{children:At.jsx("div",{className:"skill-description",children:QE[o]})}),At.jsx("div",{style:{height:"65px"},children:At.jsx("button",{className:"skill-button",onClick:p,children:"Close"})})]})}):At.jsx("div",{className:"skills",children:$E.map((E,b)=>At.jsx("img",{onClick:()=>{e(W1[b]),r(!0)},className:"techs",src:E.default,alt:`Asset ${W1[b]}.svg`},b))})}),At.jsxs("div",{className:"about-me-box",children:[At.jsx("div",{className:"wrapper-box",children:At.jsxs("div",{className:"description",children:[At.jsx("img",{className:"image-items",src:YE}),"IB DP Graduate"," "]})}),At.jsx("div",{className:"wrapper-box",children:At.jsxs("div",{className:"description",children:[At.jsx("img",{className:"image-items",src:qE}),"4th Year Software Engineering"]})})]})]})}),At.jsx("div",{className:"background-graphics",id:"img2"}),At.jsxs("div",{id:"projects",className:"header-card",children:[At.jsx("h1",{style:{fontSize:l?"65px":"35px"},id:"projectsPage",className:"page-header",children:"Projects"}),At.jsx("div",{className:"project-container",children:h?h.map(E=>At.jsxs("div",{className:"project-item",children:[At.jsxs("div",{className:"project-description",children:[At.jsx("div",{className:"project-title",children:E.name}),At.jsx("div",{className:"project-txt",children:E.description})]}),At.jsx("div",{className:"project-img-container",children:At.jsx("a",{href:E.html_url,target:"_blank",children:At.jsx("img",{className:"project-img",src:JE[E.name],alt:E.name})})})]},E.name)):At.jsx("div",{children:"nun here lol mf"})})]}),At.jsx("div",{className:"background-graphics",id:"img3",children:At.jsxs("div",{className:"contact",children:[At.jsx("div",{id:"contactHeader",children:"Contact Me!"}),At.jsxs("form",{className:"contact-form",action:"https://api.web3forms.com/submit",method:"POST",children:[At.jsx("input",{type:"hidden",name:"apikey",value:"2fde2b53-9d34-47e9-b397-6dac7b92a617"}),At.jsx("input",{type:"hidden",name:"from_name",value:"Yanny's Portfolio"}),At.jsx("input",{type:"checkbox",name:"botcheck",class:"hidden",style:{display:"none"}}),At.jsxs("div",{className:"contact-input",children:[At.jsx("label",{children:"Email: "}),At.jsx("input",{type:"email",name:"email",placeholder:"jessewe@needtocook.ca",required:!0})]}),At.jsxs("div",{className:"contact-input",children:[At.jsx("label",{children:"Name: "}),At.jsx("input",{type:"text",name:"name",placeholder:"Walter ",required:!0})]}),At.jsxs("div",{className:"contact-input",children:[At.jsx("label",{children:"Subject: "}),At.jsx("input",{name:"subject",placeholder:"yello jello yo"})]}),At.jsx("textarea",{id:"contactText",name:"message",required:!0}),At.jsx("input",{type:"hidden",name:"redirect",value:"https://web3forms.com/success"}),At.jsx("button",{id:"contactSubmit",type:"submit",children:"Send"})]})]})})]})}function eA(){return At.jsx(At.Fragment,{children:At.jsx(tA,{})})}N_.createRoot(document.getElementById("root")).render(At.jsx(At.Fragment,{children:At.jsx(eA,{})}));
