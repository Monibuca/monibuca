import{u as q,P as C,_ as se,f as ie,aF as ve,b as M,i as de,d as x,aG as fe,aH as me,j as ge,c as ee,e as te,ae as ye}from"./index-6c19eff1.js";import{d as J,f as a,c as pe,k as D,p as he,z as ae,e as $,w as _e}from"./vue-14860272.js";import{u as Se,P as xe}from"./index-f566a6ba.js";import{a as Ce,r as ne,R as Ie}from"./Card-2e616ea4.js";import{e as be}from"./eagerComputed-49254c56.js";var $e=function(){return{avatar:C.any,description:C.any,prefixCls:String,title:C.any}};const Pe=J({compatConfig:{MODE:3},name:"AListItemMeta",props:$e(),displayName:"AListItemMeta",__ANT_LIST_ITEM_META:!0,slots:["avatar","description","title"],setup:function(e,w){var n=w.slots,I=q("list",e),o=I.prefixCls;return function(){var b,y,i,L,j,c,d="".concat(o.value,"-item-meta"),r=(b=e.title)!==null&&b!==void 0?b:(y=n.title)===null||y===void 0?void 0:y.call(n),u=(i=e.description)!==null&&i!==void 0?i:(L=n.description)===null||L===void 0?void 0:L.call(n),s=(j=e.avatar)!==null&&j!==void 0?j:(c=n.avatar)===null||c===void 0?void 0:c.call(n),p=a("div",{class:"".concat(o.value,"-item-meta-content")},[r&&a("h4",{class:"".concat(o.value,"-item-meta-title")},[r]),u&&a("div",{class:"".concat(o.value,"-item-meta-description")},[u])]);return a("div",{class:d},[s&&a("div",{class:"".concat(o.value,"-item-meta-avatar")},[s]),(r||u)&&p])}}});var re=Symbol("ListContextKey"),Me=["class"],Le=function(){return{prefixCls:String,extra:C.any,actions:C.array,grid:Object,colStyle:{type:Object,default:void 0}}};const je=J({compatConfig:{MODE:3},name:"AListItem",inheritAttrs:!1,Meta:Pe,props:Le(),slots:["actions","extra"],setup:function(e,w){var n=w.slots,I=w.attrs,o=pe(re,{grid:D(),itemLayout:D()}),b=o.itemLayout,y=o.grid,i=q("list",e),L=i.prefixCls,j=function(){var r,u=((r=n.default)===null||r===void 0?void 0:r.call(n))||[],s;return u.forEach(function(p){fe(p)&&!me(p)&&(s=!0)}),s&&u.length>1},c=function(){var r,u,s=(r=e.extra)!==null&&r!==void 0?r:(u=n.extra)===null||u===void 0?void 0:u.call(n);return b.value==="vertical"?!!s:!j()};return function(){var d,r,u,s,p,R=I.class,H=se(I,Me),f=L.value,E=(d=e.extra)!==null&&d!==void 0?d:(r=n.extra)===null||r===void 0?void 0:r.call(n),k=(u=n.default)===null||u===void 0?void 0:u.call(n),m=(s=e.actions)!==null&&s!==void 0?s:ie((p=n.actions)===null||p===void 0?void 0:p.call(n));m=m&&!Array.isArray(m)?[m]:m;var h=m&&m.length>0&&a("ul",{class:"".concat(f,"-item-action"),key:"actions"},[m.map(function(z,F){return a("li",{key:"".concat(f,"-item-action-").concat(F)},[z,F!==m.length-1&&a("em",{class:"".concat(f,"-item-action-split")},null)])})]),T=y.value?"div":"li",K=a(T,M(M({},H),{},{class:de("".concat(f,"-item"),x({},"".concat(f,"-item-no-flex"),!c()),R)}),{default:function(){return[b.value==="vertical"&&E?[a("div",{class:"".concat(f,"-item-main"),key:"content"},[k,h]),a("div",{class:"".concat(f,"-item-extra"),key:"extra"},[E])]:[k,h,ve(E,{key:"extra"})]]}});return y.value?a(Ce,{flex:1,style:e.colStyle},{default:function(){return[K]}}):K}}});var Ee=function(){return{bordered:{type:Boolean,default:void 0},dataSource:C.array,extra:C.any,grid:{type:Object,default:void 0},itemLayout:String,loading:{type:[Boolean,Object],default:void 0},loadMore:C.any,pagination:{type:[Boolean,Object],default:void 0},prefixCls:String,rowKey:[String,Number,Function],renderItem:Function,size:String,split:{type:Boolean,default:void 0},header:C.any,footer:C.any,locale:{type:Object}}},P=J({compatConfig:{MODE:3},name:"AList",Item:je,props:ge(Ee(),{dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1}),slots:["extra","loadMore","renderItem","header","footer"],setup:function(e,w){var n,I,o=w.slots;he(re,{grid:ae(e,"grid"),itemLayout:ae(e,"itemLayout")});var b={current:1,total:0},y=q("list",e),i=y.prefixCls,L=y.direction,j=y.renderEmpty,c=$(function(){return e.pagination&&ee(e.pagination)==="object"?e.pagination:{}}),d=D((n=c.value.defaultCurrent)!==null&&n!==void 0?n:1),r=D((I=c.value.defaultPageSize)!==null&&I!==void 0?I:10);_e(c,function(){"current"in c.value&&(d.value=c.value.current),"pageSize"in c.value&&(r.value=c.value.pageSize)});var u=[],s=function(l){return function(v,_){d.value=v,r.value=_,c.value[l]&&c.value[l](v,_)}},p=s("onChange"),R=s("onShowSizeChange"),H=function(l){var v;return a("div",{class:"".concat(i.value,"-empty-text")},[((v=e.locale)===null||v===void 0?void 0:v.emptyText)||l("List")])},f=$(function(){return typeof e.loading=="boolean"?{spinning:e.loading}:e.loading}),E=$(function(){return f.value&&f.value.spinning}),k=$(function(){var t="";switch(e.size){case"large":t="lg";break;case"small":t="sm";break}return t}),m=$(function(){var t;return t={},x(t,"".concat(i.value),!0),x(t,"".concat(i.value,"-vertical"),e.itemLayout==="vertical"),x(t,"".concat(i.value,"-").concat(k.value),k.value),x(t,"".concat(i.value,"-split"),e.split),x(t,"".concat(i.value,"-bordered"),e.bordered),x(t,"".concat(i.value,"-loading"),E.value),x(t,"".concat(i.value,"-grid"),!!e.grid),x(t,"".concat(i.value,"-rtl"),L.value==="rtl"),t}),h=$(function(){var t=M(M({},b),{},{total:e.dataSource.length,current:d.value,pageSize:r.value},e.pagination||{}),l=Math.ceil(t.total/t.pageSize);return t.current>l&&(t.current=l),t}),T=$(function(){var t=te(e.dataSource);return e.pagination&&e.dataSource.length>(h.value.current-1)*h.value.pageSize&&(t=te(e.dataSource).splice((h.value.current-1)*h.value.pageSize,h.value.pageSize)),t}),K=Se(),z=be(function(){for(var t=0;t<ne.length;t+=1){var l=ne[t];if(K.value[l])return l}}),F=$(function(){if(e.grid){var t=z.value&&e.grid[z.value]?e.grid[z.value]:e.grid.column;if(t)return{width:"".concat(100/t,"%"),maxWidth:"".concat(100/t,"%")}}}),le=function(l,v){var _,O=(_=e.renderItem)!==null&&_!==void 0?_:o.renderItem;if(!O)return null;var S,A=ee(e.rowKey);return A==="function"?S=e.rowKey(l):A==="string"||A==="number"?S=l[e.rowKey]:S=l.key,S||(S="list-item-".concat(v)),u[v]=S,O({item:l,index:v})};return function(){var t,l,v,_,O,S,A,Q=(t=e.loadMore)!==null&&t!==void 0?t:(l=o.loadMore)===null||l===void 0?void 0:l.call(o),W=(v=e.footer)!==null&&v!==void 0?v:(_=o.footer)===null||_===void 0?void 0:_.call(o),U=(O=e.header)!==null&&O!==void 0?O:(S=o.header)===null||S===void 0?void 0:S.call(o),X=ie((A=o.default)===null||A===void 0?void 0:A.call(o)),oe=!!(Q||e.pagination||W),ue=M(M({},m.value),{},x({},"".concat(i.value,"-something-after-last-item"),oe)),Y=e.pagination?a("div",{class:"".concat(i.value,"-pagination")},[a(xe,M(M({},h.value),{},{onChange:p,onShowSizeChange:R}),null)]):null,G=E.value&&a("div",{style:{minHeight:"53px"}},null);if(T.value.length>0){u.length=0;var Z=T.value.map(function(N,V){return le(N,V)}),ce=Z.map(function(N,V){return a("div",{key:u[V],style:F.value},[N])});G=e.grid?a(Ie,{gutter:e.grid.gutter},{default:function(){return[ce]}}):a("ul",{class:"".concat(i.value,"-items")},[Z])}else!X.length&&!E.value&&(G=H(j.value));var B=h.value.position||"bottom";return a("div",{class:ue},[(B==="top"||B==="both")&&Y,U&&a("div",{class:"".concat(i.value,"-header")},[U]),a(ye,f.value,{default:function(){return[G,X]}}),W&&a("div",{class:"".concat(i.value,"-footer")},[W]),Q||(B==="bottom"||B==="both")&&Y])}}});P.install=function(g){return g.component(P.name,P),g.component(P.Item.name,P.Item),g.component(P.Item.Meta.name,P.Item.Meta),g};const Ne=P;export{Ne as L,je as a,Pe as b};
