import{d as K,k as J,o as Ae,f as t,r as Ee,w as Me,e as oe,ab as Nt,x as ct,q as Xe,s as Mt,F as _e,J as Bt,al as At,U as Z,V as ze,a8 as P,$ as c,E as O,a4 as j,u as r,W as se,_ as he,Y as zt}from"./vue-14860272.js";import{_ as jt,S as be,a as Ht,b as Ut}from"./hard-disk.vue_vue_type_script_setup_true_lang-4ef142e0.js";import"./dayjs-4778c158.js";import{_ as de,b as _,K as ue,ak as Te,d as U,u as dt,i as Vt,al as pt,c as ae,am as Re,w as ce,an as Kt,ao as Ft,o as le,ap as Gt,a3 as V,aq as qt,ar as Wt,as as Jt,V as je,aj as xe,at as ft,au as vt,ah as Ye,R as Xt,ai as Yt,a9 as W,ag as Qt,J as ee,av as Zt,aw as mt,D as en,ax as Qe,q as tn}from"./index-6c19eff1.js";import{S as Be}from"./index-10cac5b2.js";import{_ as nn}from"./index.vue_vue_type_script_setup_true_lang-cbe31c72.js";import{b as an,c as ln}from"./global-1c872f23.js";import{T as Ce}from"./index-7743fdb9.js";import{C as H}from"./Card-2e616ea4.js";import{u as rn}from"./index-79686afe.js";import{T as on,a as sn}from"./index-76e38462.js";import{D as Se}from"./index-91084da8.js";import{S as un}from"./index-f3bf2d11.js";import{T as Le,a as cn}from"./useFlexGapSupport-6710d548.js";import{D as dn}from"./DarkModeToggle-a7abe6b6.js";import{L as Ze,a as et,b as tt}from"./index-c6e096a3.js";import"./utils-69111216.js";import"./mockjs-890b569b.js";import"./eagerComputed-49254c56.js";import"./index-f566a6ba.js";import"./LeftOutlined-42ce2cd6.js";var pn=["noStyle","disabled"],fn={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},vn=K({compatConfig:{MODE:3},name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup:function(e,n){var l=n.slots,o=n.emit,u=n.attrs,p=n.expose,d=J(),b=function(S){var k=S.keyCode;k===ue.ENTER&&S.preventDefault()},i=function(S){var k=S.keyCode;k===ue.ENTER&&o("click",S)},v=function(S){o("click",S)},f=function(){d.value&&d.value.focus()},m=function(){d.value&&d.value.blur()};return Ae(function(){e.autofocus&&f()}),p({focus:f,blur:m}),function(){var g,S=e.noStyle,k=e.disabled,h=de(e,pn),E={};return S||(E=_({},fn)),k&&(E.pointerEvents="none"),t("div",_(_(_({role:"button",tabindex:0,ref:d},h),u),{},{onClick:v,onKeydown:b,onKeyup:i,style:_(_({},E),u.style||{})}),[(g=l.default)===null||g===void 0?void 0:g.call(l)])}}});const nt=vn;var mn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const yn=mn;function at(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),l.forEach(function(o){gn(a,o,n[o])})}return a}function gn(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}var He=function(e,n){var l=at({},e,n.attrs);return t(Te,at({},l,{icon:yn}),null)};He.displayName="EnterOutlined";He.inheritAttrs=!1;const bn=He;var hn=function(){return{prefixCls:String,value:String,maxlength:Number,autoSize:{type:[Boolean,Object]},onSave:Function,onCancel:Function,onEnd:Function,onChange:Function,originContent:String,direction:String}},_n=K({compatConfig:{MODE:3},name:"Editable",props:hn(),setup:function(e,n){var l=n.emit,o=n.slots,u=Ee({current:e.value||"",lastKeyCode:void 0,inComposition:!1,cancelFlag:!1});Me(function(){return e.value},function(h){u.current=h});var p=J();Ae(function(){if(p.value){var h,E=(h=p.value)===null||h===void 0?void 0:h.resizableTextArea,N=E==null?void 0:E.textArea;N.focus();var X=N.value.length;N.setSelectionRange(X,X)}});function d(h){p.value=h}function b(h){var E=h.target.value;u.current=E.replace(/[\r\n]/g,""),l("change",u.current)}function i(){u.inComposition=!0}function v(){u.inComposition=!1}function f(h){var E=h.keyCode;E===ue.ENTER&&h.preventDefault(),!u.inComposition&&(u.lastKeyCode=E)}function m(h){var E=h.keyCode,N=h.ctrlKey,X=h.altKey,x=h.metaKey,$=h.shiftKey;u.lastKeyCode===E&&!u.inComposition&&!N&&!X&&!x&&!$&&(E===ue.ENTER?(S(),l("end")):E===ue.ESC&&(u.current=e.originContent,l("cancel")))}function g(){S()}function S(){l("save",u.current.trim())}var k=oe(function(){var h;return h={},U(h,"".concat(e.prefixCls),!0),U(h,"".concat(e.prefixCls,"-edit-content"),!0),U(h,"".concat(e.prefixCls,"-rtl"),e.direction==="rtl"),h});return function(){return t("div",{class:k.value},[t(on,{ref:d,maxlength:e.maxlength,value:u.current,onChange:b,onKeydown:f,onKeyup:m,onCompositionstart:i,onCompositionend:v,onBlur:g,rows:1,autoSize:e.autoSize===void 0||e.autoSize},null),o.enterIcon?o.enterIcon({className:"".concat(e.prefixCls,"-edit-content-confirm")}):t(bn,{class:"".concat(e.prefixCls,"-edit-content-confirm")},null)])}}});const xn=_n;var Cn=3,Sn=8,L,Ne={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function En(a){var e=Array.prototype.slice.apply(a);return e.map(function(n){return"".concat(n,": ").concat(a.getPropertyValue(n),";")}).join("")}function yt(a,e){a.setAttribute("aria-hidden","true");var n=window.getComputedStyle(e),l=En(n);a.setAttribute("style",l),a.style.position="fixed",a.style.left="0",a.style.height="auto",a.style.minHeight="auto",a.style.maxHeight="auto",a.style.paddingTop="0",a.style.paddingBottom="0",a.style.borderTopWidth="0",a.style.borderBottomWidth="0",a.style.top="-999999px",a.style.zIndex="-1000",a.style.textOverflow="clip",a.style.whiteSpace="normal",a.style.webkitLineClamp="none"}function Tn(a){var e=document.createElement("div");yt(e,a),e.appendChild(document.createTextNode("text")),document.body.appendChild(e);var n=e.getBoundingClientRect().height;return document.body.removeChild(e),n}const wn=function(a,e,n,l,o){L||(L=document.createElement("div"),L.setAttribute("aria-hidden","true"),document.body.appendChild(L));var u=e.rows,p=e.suffix,d=p===void 0?"":p,b=Tn(a),i=Math.round(b*u*100)/100;yt(L,a);var v=Nt({render:function(){return t("div",{style:Ne},[t("span",{style:Ne},[n,d]),t("span",{style:Ne},[l])])}});v.mount(L);function f(){var x=Math.round(L.getBoundingClientRect().height*100)/100;return x-.1<=i}if(f())return v.unmount(),{content:n,text:L.innerHTML,ellipsis:!1};var m=Array.prototype.slice.apply(L.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(x){var $=x.nodeType,D=x.data;return $!==Sn&&D!==""}),g=Array.prototype.slice.apply(L.childNodes[0].childNodes[1].cloneNode(!0).childNodes);v.unmount();var S=[];L.innerHTML="";var k=document.createElement("span");L.appendChild(k);var h=document.createTextNode(o+d);k.appendChild(h),g.forEach(function(x){L.appendChild(x)});function E(x){k.insertBefore(x,h)}function N(x,$){var D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,M=arguments.length>3&&arguments[3]!==void 0?arguments[3]:$.length,$e=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,Y=Math.floor((D+M)/2),ve=$.slice(0,Y);if(x.textContent=ve,D>=M-1)for(var Q=M;Q>=D;Q-=1){var ie=$.slice(0,Q);if(x.textContent=ie,f()||!ie)return Q===$.length?{finished:!1,vNode:$}:{finished:!0,vNode:ie}}return f()?N(x,$,Y,M,Y):N(x,$,D,Y,$e)}function X(x){var $=x.nodeType;if($===Cn){var D=x.textContent||"",M=document.createTextNode(D);return E(M),N(M,D)}return{finished:!1,vNode:null}}return m.some(function(x){var $=X(x),D=$.finished,M=$.vNode;return M&&S.push(M),D}),{content:S,text:L.innerHTML,ellipsis:!0}};var On=["prefixCls","class","direction","component"],kn=function(){return{prefixCls:String,direction:String,component:String}},Pn=K({name:"ATypography",inheritAttrs:!1,props:kn(),setup:function(e,n){var l=n.slots,o=n.attrs,u=dt("typography",e),p=u.prefixCls,d=u.direction;return function(){var b,i=_(_({},e),o);i.prefixCls,i.class,i.direction;var v=i.component,f=v===void 0?"article":v,m=de(i,On);return t(f,_({class:Vt(p.value,U({},"".concat(p.value,"-rtl"),d.value==="rtl"),o.class)},m),{default:function(){return[(b=l.default)===null||b===void 0?void 0:b.call(l)]}})}}});const B=Pn;var $n=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,l=[],o=0;o<e.rangeCount;o++)l.push(e.getRangeAt(o));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||l.forEach(function(u){e.addRange(u)}),n&&n.focus()}};const In=$n;var lt={"text/plain":"Text","text/html":"Url",default:"Text"},Dn="Copy to clipboard: #{key}, Enter";function Rn(a){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return a.replace(/#{\s*key\s*}/g,e)}function Ln(a,e){var n,l,o,u,p,d=!1;e||(e={});var b=e.debug||!1;try{l=In(),o=document.createRange(),u=document.getSelection(),p=document.createElement("span"),p.textContent=a,p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(v){if(v.stopPropagation(),e.format)if(v.preventDefault(),typeof v.clipboardData>"u"){b&&console.warn("unable to use e.clipboardData"),b&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=lt[e.format]||lt.default;window.clipboardData.setData(f,a)}else v.clipboardData.clearData(),v.clipboardData.setData(e.format,a);e.onCopy&&(v.preventDefault(),e.onCopy(v.clipboardData))}),document.body.appendChild(p),o.selectNodeContents(p),u.addRange(o);var i=document.execCommand("copy");if(!i)throw new Error("copy command was unsuccessful");d=!0}catch(v){b&&console.error("unable to copy using execCommand: ",v),b&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",a),e.onCopy&&e.onCopy(window.clipboardData),d=!0}catch(f){b&&console.error("unable to copy using clipboardData: ",f),b&&console.error("falling back to prompt"),n=Rn("message"in e?e.message:Dn),window.prompt(n,a)}}finally{u&&(typeof u.removeRange=="function"?u.removeRange(o):u.removeAllRanges()),p&&document.body.removeChild(p),l()}return d}var Nn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const Mn=Nn;function it(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),l.forEach(function(o){Bn(a,o,n[o])})}return a}function Bn(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}var Ue=function(e,n){var l=it({},e,n.attrs);return t(Te,it({},l,{icon:Mn}),null)};Ue.displayName="CopyOutlined";Ue.inheritAttrs=!1;const An=Ue;var zn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};const jn=zn;function rt(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),l.forEach(function(o){Hn(a,o,n[o])})}return a}function Hn(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}var Ve=function(e,n){var l=rt({},e,n.attrs);return t(Te,rt({},l,{icon:jn}),null)};Ve.displayName="EditOutlined";Ve.inheritAttrs=!1;const Un=Ve;var Vn=["type","disabled","content","class","style"],Kn=pt("webkitLineClamp"),Fn=pt("textOverflow"),ot="...",pe=function(){return{editable:{type:[Boolean,Object],default:void 0},copyable:{type:[Boolean,Object],default:void 0},prefixCls:String,component:String,type:String,disabled:{type:Boolean,default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},code:{type:Boolean,default:void 0},mark:{type:Boolean,default:void 0},underline:{type:Boolean,default:void 0},delete:{type:Boolean,default:void 0},strong:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},content:String,"onUpdate:content":Function}},Gn=K({compatConfig:{MODE:3},name:"Base",inheritAttrs:!1,props:pe(),setup:function(e,n){var l=n.slots,o=n.attrs,u=n.emit,p=dt("typography",e),d=p.prefixCls,b=p.direction,i=Ee({copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1,expandStr:"",copyStr:"",copiedStr:"",editStr:"",copyId:void 0,rafId:void 0,prevProps:void 0,originContent:""}),v=J(),f=J(),m=oe(function(){var s=e.ellipsis;return s?_({rows:1,expandable:!1},ae(s)==="object"?s:null):{}});Ae(function(){i.clientRendered=!0}),ct(function(){clearTimeout(i.copyId),Re.cancel(i.rafId)}),Me([function(){return m.value.rows},function(){return e.content}],function(){Xe(function(){ve()})},{flush:"post",deep:!0,immediate:!0}),Mt(function(){e.content===void 0&&(ce(!e.editable,"Typography","When `editable` is enabled, please use `content` instead of children"),ce(!e.ellipsis,"Typography","When `ellipsis` is enabled, please use `content` instead of children"))});function g(){var s,y;return e.ellipsis||e.editable?e.content:(s=v.value)===null||s===void 0||(y=s.$el)===null||y===void 0?void 0:y.innerText}function S(s){var y=m.value.onExpand;i.expanded=!0,y==null||y(s)}function k(s){s.preventDefault(),i.originContent=e.content,Y(!0)}function h(s){E(s),Y(!1)}function E(s){var y=x.value.onChange;s!==e.content&&(u("update:content",s),y==null||y(s))}function N(){var s,y;(s=(y=x.value).onCancel)===null||s===void 0||s.call(y),Y(!1)}function X(s){s.preventDefault(),s.stopPropagation();var y=e.copyable,C=_({},ae(y)==="object"?y:null);C.text===void 0&&(C.text=g()),Ln(C.text||""),i.copied=!0,Xe(function(){C.onCopy&&C.onCopy(),i.copyId=setTimeout(function(){i.copied=!1},3e3)})}var x=oe(function(){var s=e.editable;return s?_({},ae(s)==="object"?s:null):{editing:!1}}),$=Kt(!1,{value:oe(function(){return x.value.editing})}),D=Ft($,2),M=D[0],$e=D[1];function Y(s){var y=x.value.onStart;s&&y&&y(),$e(s)}Me(M,function(s){if(!s){var y;(y=f.value)===null||y===void 0||y.focus()}},{flush:"post"});function ve(){Re.cancel(i.rafId),i.rafId=Re(function(){ie()})}var Q=oe(function(){var s=m.value,y=s.rows,C=s.expandable,T=s.suffix,R=s.onEllipsis,w=s.tooltip;return T||w||e.editable||e.copyable||C||R?!1:y===1?Fn:Kn}),ie=function(){var y,C,T=i.ellipsisText,R=i.isEllipsis,w=m.value,I=w.rows,A=w.suffix,F=w.onEllipsis;if(!(!I||I<0||!((y=v.value)!==null&&y!==void 0&&y.$el)||i.expanded||e.content===void 0)&&!Q.value){var z=wn((C=v.value)===null||C===void 0?void 0:C.$el,{rows:I,suffix:A},e.content,Ge(!0),ot),re=z.content,te=z.text,G=z.ellipsis;(T!==te||i.isEllipsis!==G)&&(i.ellipsisText=te,i.ellipsisContent=re,i.isEllipsis=G,R!==G&&F&&F(G))}};function xt(s,y){var C=s.mark,T=s.code,R=s.underline,w=s.delete,I=s.strong,A=s.keyboard,F=y;function z(re,te){if(re){var G=function(){return F}();F=t(te,null,{default:function(){return[G]}})}}return z(I,"strong"),z(R,"u"),z(w,"del"),z(T,"code"),z(C,"mark"),z(A,"kbd"),F}function Ct(s){var y=m.value,C=y.expandable,T=y.symbol;if(!C||!s&&(i.expanded||!i.isEllipsis))return null;var R=(l.ellipsisSymbol?l.ellipsisSymbol():T)||i.expandStr;return t("a",{key:"expand",class:"".concat(d.value,"-expand"),onClick:S,"aria-label":i.expandStr},[R])}function St(){if(e.editable){var s=e.editable,y=s.tooltip,C=s.triggerType,T=C===void 0?["icon"]:C,R=l.editableIcon?l.editableIcon():t(Un,{role:"button"},null),w=l.editableTooltip?l.editableTooltip():i.editStr,I=typeof w=="string"?w:"";return T.indexOf("icon")!==-1?t(V,{key:"edit",title:y===!1?"":w},{default:function(){return[t(nt,{ref:f,class:"".concat(d.value,"-edit"),onClick:k,"aria-label":I},{default:function(){return[R]}})]}}):null}}function Et(){if(e.copyable){var s=e.copyable.tooltip,y=i.copied?i.copiedStr:i.copyStr,C=l.copyableTooltip?l.copyableTooltip({copied:i.copied}):y,T=typeof C=="string"?C:"",R=i.copied?t(Wt,null,null):t(An,null,null),w=l.copyableIcon?l.copyableIcon({copied:!!i.copied}):R;return t(V,{key:"copy",title:s===!1?"":C},{default:function(){return[t(nt,{class:["".concat(d.value,"-copy"),U({},"".concat(d.value,"-copy-success"),i.copied)],onClick:X,"aria-label":T},{default:function(){return[w]}})]}})}}function Tt(){var s=o.class,y=o.style,C=x.value,T=C.maxlength,R=C.autoSize,w=C.onEnd;return t(xn,{class:s,style:y,prefixCls:d.value,value:e.content,originContent:i.originContent,maxlength:T,autoSize:R,onSave:h,onChange:E,onCancel:N,onEnd:w,direction:b.value},{enterIcon:l.editableEnterIcon})}function Ge(s){return[Ct(s),St(),Et()].filter(function(y){return y})}return function(){var s,y=x.value.triggerType,C=y===void 0?["icon"]:y,T=e.ellipsis||e.editable?e.content!==void 0?e.content:(s=l.default)===null||s===void 0?void 0:s.call(l):l.default?l.default():e.content;return M.value?Tt():t(qt,{componentName:"Text",children:function(w){var I,A=_(_({},e),o),F=A.type,z=A.disabled;A.content;var re=A.class,te=A.style,G=de(A,Vn),me=m.value,q=me.rows,qe=me.suffix,Ie=me.tooltip,wt=w.edit,Ot=w.copy,kt=w.copied,Pt=w.expand;i.editStr=wt,i.copyStr=Ot,i.copiedStr=kt,i.expandStr=Pt;var $t=le(G,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","onUpdate:content"]),ye=Q.value,It=q===1&&ye,We=q&&q>1&&ye,ne=T,Dt;if(q&&i.isEllipsis&&!i.expanded&&!ye){var De,Je=G.title,ge=Je||"";!Je&&(typeof T=="string"||typeof T=="number")&&(ge=String(T)),ge=(De=ge)===null||De===void 0?void 0:De.slice(String(i.ellipsisContent||"").length),ne=t(_e,null,[Bt(i.ellipsisContent),t("span",{title:ge,"aria-hidden":"true"},[ot]),qe])}else ne=t(_e,null,[T,qe]);ne=xt(e,ne);var Rt=Ie&&q&&i.isEllipsis&&!i.expanded&&!ye,Lt=l.ellipsisTooltip?l.ellipsisTooltip():Ie;return t(Gt,{onResize:ve,disabled:!q},{default:function(){return[t(B,_({ref:v,class:[(I={},U(I,"".concat(d.value,"-").concat(F),F),U(I,"".concat(d.value,"-disabled"),z),U(I,"".concat(d.value,"-ellipsis"),q),U(I,"".concat(d.value,"-single-line"),q===1&&!i.isEllipsis),U(I,"".concat(d.value,"-ellipsis-single-line"),It),U(I,"".concat(d.value,"-ellipsis-multiple-line"),We),I),re],style:_(_({},te),{},{WebkitLineClamp:We?q:void 0}),"aria-label":Dt,direction:b.value,onClick:C.indexOf("text")!==-1?k:function(){}},$t),{default:function(){return[Rt?t(V,{title:Ie===!0?T:Lt},{default:function(){return[t("span",null,[ne])]}}):ne,Ge()]}})]}})}},null)}}});const fe=Gn;var qn=["ellipsis","rel"],Wn=function(){return le(_(_({},pe()),{},{ellipsis:{type:Boolean,default:void 0}}),["component"])},we=function(e,n){var l=n.slots,o=n.attrs,u=_(_({},e),o),p=u.ellipsis,d=u.rel,b=de(u,qn);ce(ae(p)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var i=_(_({},b),{},{rel:d===void 0&&b.target==="_blank"?"noopener noreferrer":d,ellipsis:!!p,component:"a"});return delete i.navigate,t(fe,i,l)};we.displayName="ATypographyLink";we.inheritAttrs=!1;we.props=Wn();const gt=we;var Jn=function(){return le(pe(),["component"])},Oe=function(e,n){var l=n.slots,o=n.attrs,u=_(_({},e),{},{component:"div"},o);return t(fe,u,l)};Oe.displayName="ATypographyParagraph";Oe.inheritAttrs=!1;Oe.props=Jn();const Ke=Oe;var Xn=function(){return _(_({},le(pe(),["component"])),{},{ellipsis:{type:[Boolean,Object],default:void 0}})},ke=function(e,n){var l=n.slots,o=n.attrs,u=e.ellipsis;ce(ae(u)!=="object"||!u||!("expandable"in u)&&!("rows"in u),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props.");var p=_(_({},e),{},{ellipsis:u&&ae(u)==="object"?le(u,["expandable","rows"]):u,component:"span"},o);return t(fe,p,l)};ke.displayName="ATypographyText";ke.inheritAttrs=!1;ke.props=Xn();const bt=ke;var Yn=["level"],Qn=Jt(1,2,3,4,5),Zn=function(){return _(_({},le(pe(),["component","strong"])),{},{level:Number})},Pe=function(e,n){var l=n.slots,o=n.attrs,u=e.level,p=u===void 0?1:u,d=de(e,Yn),b;Qn.indexOf(p)!==-1?b="h".concat(p):(ce(!1,"Typography","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value."),b="h1");var i=_(_({},d),{},{component:b},o);return t(fe,i,l)};Pe.displayName="ATypographyTitle";Pe.inheritAttrs=!1;Pe.props=Zn();const ht=Pe;B.Text=bt;B.Title=ht;B.Paragraph=Ke;B.Link=gt;B.Base=fe;B.install=function(a){return a.component(B.name,B),a.component(B.Text.displayName,bt),a.component(B.Title.displayName,ht),a.component(B.Paragraph.displayName,Ke),a.component(B.Link.displayName,gt),a};var ea={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"};const ta=ea;function st(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),l.forEach(function(o){na(a,o,n[o])})}return a}function na(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}var Fe=function(e,n){var l=st({},e,n.attrs);return t(Te,st({},l,{icon:ta}),null)};Fe.displayName="RedoOutlined";Fe.inheritAttrs=!1;const aa=Fe,la={class:"flex flex-wrap"},ia={class:"flex-center"},ra={class:"flex-col flex-items-start"},oa=K({name:"Overview"}),sa=K({...oa,setup(a){const e=je();function n(){e({path:"/overview/detail"})}const l=J(),o=J(),u=J();let p;(()=>{p=ln(v=>{var f,m,g,S,k;l.value=v,(g=o.value)==null||g.handleUpdate(((m=(f=l.value)==null?void 0:f.memory)==null?void 0:m.usage)||0),(k=u.value)==null||k.handleUpdate(((S=l.value)==null?void 0:S.cpuUsage)||0)})})(),At(v=>{const{path:f}=v;f!=="/stream-push/list"&&(p==null||p())});const b=Ee({version:"",startTime:"",localIP:""});an().then(v=>{b.localIP=v.localIP,b.version=v.version,b.startTime=xe.toDateString(new Date(v.startTime),"yyyy-MM-dd HH:ss:mm")}).catch(v=>{console.error(`getSysInfo-err: ${v}`)});const i=`
  w-350px h-180px m-r-4 m-b-4
`;return(v,f)=>(Z(),ze(_e,null,[P("p",null,[t(r(Ce),null,{default:c(()=>[O("当前版本: "+j(b.version),1)]),_:1})]),P("div",la,[t(r(H),{class:se(i)},{default:c(()=>{var m;return[t(jt,{class:"flex-center",hardDisk:(m=l.value)==null?void 0:m.hardDisk},null,8,["hardDisk"])]}),_:1}),t(r(H),{class:se(["flex-center",i])},{default:c(()=>{var m;return[P("div",ia,[t(r(Be),{icon:"streams",size:"70",class:"text-#bb86fc"}),t(r(be),{title:"当前流数",value:(m=l.value)==null?void 0:m.streamCount},null,8,["value"])])]}),_:1}),t(r(H),{class:se(["flex-center",i])},{default:c(()=>[P("div",ra,[t(r(be),{title:"本地IP",value:b.localIP,valueStyle:{fontSize:"18px",textAlign:"left"}},null,8,["value"]),t(r(be),{title:"启动时间",value:b.startTime,valueStyle:{fontSize:"18px"}},{suffix:c(()=>[O(" ["),t(r(nn),{value:b.startTime,class:"text-primary"},null,8,["value"]),O("] ")]),_:1},8,["value"])])]),_:1}),t(r(H),{class:se([i,"flex-center"]),hoverable:"",onClick:f[0]||(f[0]=m=>n())},{default:c(()=>[t(r(be),{title:"实例详情",value:"点击进入当前实例 >>>",valueStyle:{fontSize:"24px",color:"#bb86fc"}})]),_:1})]),t(r(H),{class:"m-r-4 m-b-4"},{default:c(()=>[t(Ht,{ref_key:"memoryRef",ref:o,class:"!dark:bg-transparent"},null,512)]),_:1}),t(r(H),{class:"m-r-4 m-b-4"},{default:c(()=>[t(Ut,{ref_key:"cpuRef",ref:u,class:"!dark:bg-transparent"},null,512)]),_:1})],64))}}),_t=ft({requestOptions:{apiUrl:()=>vt("cascadeserver")}});function ua(a){return _t.get({url:"/list",params:a},{errorMessageMode:"message"})}function ut(a=null){return a?ft({requestOptions:{apiUrl:()=>vt("cascadeserver","api","http",a)}}).get({url:"/list"},{errorMessageMode:"message"}):_t.get({url:"/list"},{errorMessageMode:"message"})}const ca=K({__name:"list",setup(a){ct(()=>{});const e={padding:"4px"};Ye.renderer.add("LineStatus",{renderDefault(f,m){const{row:g}=m;return[g.Online?t(Ce,{color:"#87d068"},{default:()=>[O("在线")]}):t(Ce,{color:"#ff99a0"},{default:()=>[O("离线")]})]}}),Ye.renderer.add("secretCopy",{renderDefault(f,m){const{row:g}=m;return[t(Ke,{copyable:!0,ellipsis:!0,content:g.Secret},null)]}});const n=Ee({pageNum:1,pageSize:10,total:0}),l=rn(),o={height:"596px",pagerConfig:{pageSize:10},columns:[{field:"ID",title:"ID",width:"80px"},{field:"Name",title:"名称",showOverflow:"tooltip",width:"120px"},{field:"Secret",title:"秘钥",showOverflow:"tooltip",cellRender:{name:"secretCopy"}},{field:"Online",title:"状态",cellRender:{name:"LineStatus"},width:"80px"},{field:"CreatedAt",title:"创建时间",formatter:({cellValue:f})=>xe.toDateString(new Date(f),"yyyy-MM-dd HH:ss:mm")},{field:"UpdatedAt",title:"更新时间",formatter:({cellValue:f})=>xe.toDateString(new Date(f),"yyyy-MM-dd HH:ss:mm")},{field:"operate",title:"操作",width:"160px",slots:{default:"operate"},fixed:"right"}]},u={pageChange:({currentPage:f,pageSize:m})=>{n.pageNum=f,n.pageSize=m}},p=()=>{ua(n).then(f=>{n.total=f.total,l.tableRef.loadData(f.list)}).catch(f=>{console.error(`instance-getList-error: ${f}`)})};p();const{httpRefreshTime:d}=Xt({VITE_PORT:"3000",VITE_GLOB_APP_TITLE:"M7S_ADMIN",VITE_GLOB_APP_SHORT_NAME:"m7s_admin",VITE_USE_MOCK:"true",VITE_PUBLIC_PATH:"/admin",VITE_DROP_CONSOLE:"true",VITE_BUILD_COMPRESS:"none",VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE:"false",VITE_GLOB_HTTP_REFRESH_TIME:"5000",VITE_USE_IMAGEMIN:"true",VITE_LEGACY:"false",VITE_M7S_SERVER:"",BASE_URL:"/admin",MODE:"production",DEV:!1,PROD:!0,SSR:!1});Yt(()=>{p()},d);const b=je(),i=(f,m=!1)=>{if(m)b({path:"/overview/detail",query:{m7sId:f}},!0);else{const{href:g}=mt.resolve({name:"Overview",query:{m7sId:f}});window.open(g,"_blank")}};function v(){b({path:"/overview/detail"})}return(f,m)=>(Z(),he(r(H),{bordered:!1,class:"mb-4px",bodyStyle:e},{default:c(()=>[t(r(W),{type:"primary",onClick:m[0]||(m[0]=g=>v()),class:"mr-10px"},{default:c(()=>[O(" 👉🏻 进入当前实例 >>> ")]),_:1}),t(r(H),{bordered:!1,class:"mb-4px",bodyStyle:e},{default:c(()=>[t(r(Se),{orientation:"left",plain:""},{default:c(()=>[O("当前已配置成自动注册，下级m7s可以自动注册到当前实例")]),_:1})]),_:1}),t(r(Qt),{emptyText:"当前m7s实例下没有下级m7s实例",uid:r(l).uid,gridOptions:r(o),"grid-event":r(u),"show-line":""},{operate:c(({row:g})=>[t(r(un),null,{default:c(()=>[t(r(V),null,{title:c(()=>[O(j(g.Online?"当前窗口打开":"只有实例状态在线时才可以访问详情"),1)]),default:c(()=>[t(r(W),{size:"small",type:"link",onClick:S=>i(g.ID,!0),disabled:!g.Online},{default:c(()=>[O(" 详情 "),t(r(ee),{icon:"bx:current-location",class:"v-text-bottom"})]),_:2},1032,["onClick","disabled"])]),_:2},1024),t(r(V),null,{title:c(()=>[O(j(g.Online?"新窗口打开":"只有实例状态在线时才可以访问详情"),1)]),default:c(()=>[t(r(W),{size:"small",type:"link",onClick:S=>i(g.ID),disabled:!g.Online},{default:c(()=>[O(" 详情 "),t(r(ee),{class:"v-text-bottom",icon:"fluent:window-new-16-filled"})]),_:2},1032,["onClick","disabled"])]),_:2},1024)]),_:2},1024)]),pager:c(()=>[t(r(Zt),{layouts:["Sizes","PrevPage","Number","NextPage","Total"],"current-page":n.pageNum,"onUpdate:currentPage":m[1]||(m[1]=g=>n.pageNum=g),"page-size":n.pageSize,"onUpdate:pageSize":m[2]||(m[2]=g=>n.pageSize=g),total:n.total},null,8,["current-page","page-size","total"])]),_:1},8,["uid","gridOptions","grid-event"])]),_:1}))}});const da={class:"list-none p-2px"},pa=K({__name:"tree",setup(a){const e={padding:"4px"},n=i=>xe.toDateString(new Date(i),"yyyy-MM-dd HH:ss:mm"),l=J([]),o=i=>new Promise(v=>{var f;if((f=i==null?void 0:i.dataRef)!=null&&f.children){v();return}ut().then(m=>{i.dataRef.children=m,l.value=[...l.value],v()}).catch(m=>{v(),console.error(`instance-getAllList-error: ${m}`)})}),u=()=>{ut().then(i=>{l.value=i}).catch(i=>{console.error(`instance-getAllList-error: ${i}`)})};u();const p=je(),d=(i,v=!1)=>{if(v)p({path:"/overview/detail",query:{m7sId:i}},!0);else{const{href:f}=mt.resolve({name:"Overview",query:{m7sId:i}});window.open(f,"_blank")}};function b(){p({path:"/overview/detail"})}return(i,v)=>(Z(),he(r(H),{bordered:!1,class:"mb-4px",bodyStyle:e},{default:c(()=>{var f;return[t(r(W),{type:"primary",onClick:v[0]||(v[0]=m=>b()),class:"mr-10px"},{default:c(()=>[O(" 👉🏻 进入当前实例 >>> ")]),_:1}),t(r(W),{onClick:v[1]||(v[1]=()=>u()),class:"mr-10px"},{icon:c(()=>[t(r(aa))]),default:c(()=>[O(" 刷新实例树 ")]),_:1}),t(r(H),{bordered:!1,class:"mb-4px",bodyStyle:e},{default:c(()=>[t(r(Se),{orientation:"left",plain:""},{default:c(()=>[O("当前已配置成自动注册，下级m7s可以自动注册到当前实例")]),_:1})]),_:1}),(f=l.value)!=null&&f.length?(Z(),he(r(sn),{key:0,"load-data":o,"tree-data":l.value,fieldNames:{title:"Name"},selectable:!1},{switcherIcon:c(({switcherCls:m})=>[t(r(en),{class:se(m)},null,8,["class"])]),title:c(({Name:m,ID:g,IP:S,Online:k,CreatedAt:h,UpdatedAt:E})=>[t(r(V),null,{title:c(()=>[P("ul",da,[P("li",null,"Name: "+j(m),1),P("li",null,"ID: "+j(g),1),P("li",null,"IP: "+j(S),1),P("li",null,"Online: "+j(k),1),P("li",null,"CreatedAt: "+j(n(h)),1),P("li",null,"UpdatedAt: "+j(n(E)),1)])]),default:c(()=>[P("span",null,j(m),1)]),_:2},1024),t(r(V),{title:"当前窗口打开"},{default:c(()=>[t(r(W),{size:"small",type:"link",onClick:N=>d(g,!0)},{default:c(()=>[O(" 详情 "),t(r(ee),{icon:"bx:current-location",class:"v-text-bottom"})]),_:2},1032,["onClick"])]),_:2},1024),t(r(V),{title:"新窗口打开"},{default:c(()=>[t(r(W),{size:"small",type:"link",onClick:N=>d(g)},{default:c(()=>[O(" 详情 "),t(r(ee),{class:"v-text-bottom",icon:"fluent:window-new-16-filled"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["tree-data"])):(Z(),he(r(Qe),{key:1,class:"mt-200px",description:"当前m7s实例下没有下级m7s实例",image:r(Qe).PRESENTED_IMAGE_SIMPLE},null,8,["image"]))]}),_:1}))}});const fa={class:"text-text"},va=K({__name:"content",setup(a){const e=J("1");return(n,l)=>(Z(),ze(_e,null,[P("h2",fa,[O(" Monibuca Admin "),t(r(Ce),{color:"green",class:"text-10px v-text-bottom"},{default:c(()=>[O("For m7s Pro V5")]),_:1})]),t(r(cn),{class:"home-tabs",activeKey:e.value,"onUpdate:activeKey":l[0]||(l[0]=o=>e.value=o),destroyInactiveTabPane:!0},{default:c(()=>[t(r(Le),{key:"1",tab:"系统信息"},{default:c(()=>[t(sa)]),_:1}),t(r(Le),{key:"2",tab:"下级实例列表"},{default:c(()=>[t(ca)]),_:1}),t(r(Le),{key:"3",tab:"下级实例树"},{default:c(()=>[t(pa)]),_:1})]),_:1},8,["activeKey"])],64))}});const ma={class:"h-100vh w-100vw p-10px",style:{background:"var(--layout-background)"}},ya={class:"h-full w-full flex min-w-1200px"},ga={class:"h-full"},ba={class:"flex-center"},ha={class:"flex-center mt-24px"},_a=["href"],xa=["href"],Ca=K({name:"Instance"}),qa=K({...Ca,setup(a){const{getDarkMode:e}=zt(tn()),n=[{title:"Monibuca",description:"开源Go语言流媒体服务器框架",url:"https://monibuca.com",svg:"logo",size:40},{title:"Jessibuca",description:"纯H5音视频流播放器",url:"https://jessibuca.com",svg:"jb",size:40},{title:"Rebebuca",description:"Rust 桌面端 FFMPEG 管理器",url:"https://rebebuca.com",svg:"rb",size:34}],l=[{title:"官方文档",description:"包含详细介绍、配置、插件等",url:"https://monibuca.com/docs/guide/introduction.html",icon:"hugeicons:google-doc"},{title:"视频教程",description:"包含17个 m7s V4教程及架构",url:"https://monibuca.com/video",icon:"ri:bilibili-fill"},{title:"插件生态",description:"包含官方、第三方及付费插件",url:"https://monibuca.com/plugin",icon:"mdi:google-circles-extended"}],o=u=>{window.open(u)};return(u,p)=>(Z(),ze("div",ma,[P("div",ya,[t(r(H),{class:"w-300px shrink-0 rounded-l-lg",bodyStyle:{height:"100%"}},{default:c(()=>[P("div",ga,[P("div",ba,[t(r(Be),{icon:`logo-text-${r(e)}`,size:160,style:{height:"60px"}},null,8,["icon"])]),P("div",ha,[t(r(V),{title:"主题切换",placement:"right"},{default:c(()=>[t(r(dn))]),_:1})]),t(r(Se),{class:"!mt-50px",orientation:"left",plain:""},{default:c(()=>[O(" 不卡系列 ")]),_:1}),t(r(Ze),{"item-layout":"horizontal","data-source":n},{renderItem:c(({item:d})=>[t(r(et),null,{default:c(()=>[t(r(tt),{description:d.description},{title:c(()=>[P("a",{href:d.url,target:"_blank"},j(d.title),9,_a),t(r(V),{title:"点击查看",placement:"right"},{default:c(()=>[t(r(W),{size:"small",type:"link",onClick:()=>o(d.url)},{default:c(()=>[t(r(ee),{class:"v-text-bottom",icon:"fluent:window-new-16-filled"})]),_:2},1032,["onClick"])]),_:2},1024)]),avatar:c(()=>[t(r(Be),{class:"mt-6px",icon:`${d.svg}-${r(e)}`,size:d.size},null,8,["icon","size"])]),_:2},1032,["description"])]),_:2},1024)]),_:1}),t(r(Se),{orientation:"left",plain:""},{default:c(()=>[O(" 相关资料 ")]),_:1}),t(r(Ze),{"item-layout":"horizontal","data-source":l},{renderItem:c(({item:d})=>[t(r(et),null,{default:c(()=>[t(r(tt),{description:d.description},{title:c(()=>[P("a",{href:d.url,target:"_blank"},j(d.title),9,xa),t(r(V),{title:"点击查看",placement:"right"},{default:c(()=>[t(r(W),{size:"small",type:"link",onClick:()=>o(d.url)},{default:c(()=>[t(r(ee),{class:"v-text-bottom",icon:"fluent:window-new-16-filled"})]),_:2},1032,["onClick"])]),_:2},1024)]),avatar:c(()=>[t(r(ee),{icon:d.icon,size:30,class:"mt-10px"},null,8,["icon"])]),_:2},1032,["description"])]),_:2},1024)]),_:1})])]),_:1}),t(r(H),{class:"flex-1 rounded-r-lg",bodyStyle:{height:"100%"}},{default:c(()=>[t(va)]),_:1})])]))}});export{qa as default};
