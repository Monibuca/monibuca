import{d as x,k as V,e as U,Y as L,r as H,w as R,x as M,u as e,U as l,V as _,f as t,$ as o,E as r,_ as m,a3 as z,F as N,a7 as O,W as Q,a8 as C,a4 as g,X as Z}from"./vue-14860272.js";import{_ as ee}from"./index.vue_vue_type_script_setup_true_lang-fe275800.js";import"./dayjs-4778c158.js";import{a2 as te,J as f,a9 as F,a3 as A,N as se,af as B}from"./index-6c19eff1.js";import{u as w,a as ae}from"./usePlay-1a1d55fb.js";import{i as oe,a as T}from"./gb28281-bff8df35.js";import{V as P}from"./jb4-8326f710.js";import{R as le}from"./Group-8793f768.js";import{c as ce,b as ne,C as S}from"./Card-2e616ea4.js";import{D as E}from"./index-91084da8.js";import{D as k,a as re}from"./index-4b48195f.js";import{D as ie,p as ue}from"./index-a7137e60.js";import"./device-0496f41d.js";import"./index-e5fa243b.js";import"./index-76e38462.js";import"./eagerComputed-49254c56.js";import"./mockjs-890b569b.js";import"./useFlexGapSupport-6710d548.js";import"./index-10cac5b2.js";import"./index-1874b7a6.js";import"./index-f3bf2d11.js";const pe={class:"text-center"},de={key:1,class:"video-player-placeholder"},fe=x({__name:"content",setup($){const a=V(1),v=[{label:"单屏",value:1},{label:"四分屏",value:4},{label:"九分屏",value:9},{label:"十六分屏",value:16}],i=U(()=>{switch(a.value){case 1:return 24;case 4:return 12;case 9:return 8;case 16:return 6;default:return 24}}),n=()=>document.querySelector(".screen-list"),u=V(null),{toggle:p,isFullscreen:h}=te(u),D=w(),{getActiveInfo:I}=L(D),{updateItem:K,streamList:q,changeStreamList:G,closeAll:J,webrtc:W}=ae(),b=H({selectNum:1});R(a,async()=>{b.selectNum=0,D.setActiveInfo({ID:"",DeviceID:"",DeviceName:"",Name:"",LiveStatus:0});const s=new Array(a.value).fill({}).map(()=>({path:""}));G(s)},{immediate:!0}),M(()=>J()),R(()=>e(I),(s,d)=>{const{ID:c,DeviceID:y}=I.value,Y=`${s.ID}/${s.DeviceID}`,j=`${d.ID}/${d.DeviceID}`;s.DeviceID&&Y!==j&&oe({id:c,channel:y}).finally(()=>{K(I.value,b.selectNum)})});const X=({item:s},d)=>{b.selectNum=d,I.value.DeviceID!==(s==null?void 0:s.DeviceID)&&D.setActiveInfo({ID:(s==null?void 0:s.ID)??"",DeviceID:(s==null?void 0:s.DeviceID)??"",DeviceName:(s==null?void 0:s.DeviceName)??"",Name:(s==null?void 0:s.Name)??"",LiveStatus:(s==null?void 0:s.LiveStatus)??0})};return(s,d)=>(l(),_("div",pe,[t(e(le),{value:a.value,"onUpdate:value":d[0]||(d[0]=c=>a.value=c),buttonStyle:"solid",options:v,optionType:"button"},null,8,["value"]),t(e(F),{onClick:e(p)},{default:o(()=>[t(e(f),{icon:"ant-design:fullscreen-outlined",class:"v-text-bottom"}),r("全屏 ")]),_:1},8,["onClick"]),t(e(ne),{gutter:4,class:"screen-list mt-10px",ref_key:"screenRef",ref:u},{default:o(()=>[e(h)?(l(),m(e(F),{key:0,onClick:e(p),type:"link",class:"absolute right-2 top-2 z-10 text-white"},{default:o(()=>[t(e(f),{icon:"ant-design:fullscreen-exit-outlined",class:"v-text-bottom"}),r(" 退出全屏 ")]),_:1},8,["onClick"])):z("",!0),(l(!0),_(N,null,O(e(q),(c,y)=>(l(),m(e(ce),{span:e(i),key:y,class:Q(["mt-4px flex-center",{active:a.value>1&&b.selectNum===y&&!e(h),isFullscreen:e(h)}]),onClick:()=>X(c,y)},{default:o(()=>[c.path?(l(),_(N,{key:0},[e(W)?(l(),m(P,{key:0,webrtcStream:c.stream},{default:o(()=>[c.path?(l(),m(e(A),{key:0,class:"position-absolute bottom-0 left-50% cursor-pointer",title:c.path,getPopupContainer:n},{default:o(()=>[t(e(f),{icon:"octicon:ellipsis-16",size:20,color:"#dedede",hoverColor:"#a275d9"})]),_:2},1032,["title"])):z("",!0)]),_:2},1032,["webrtcStream"])):(l(),m(P,{key:1,format:"ws-flv","stream-path":c.path},{default:o(()=>[c.path?(l(),m(e(A),{key:0,class:"position-absolute bottom-0 left-50% cursor-pointer",title:c.path,getPopupContainer:n},{default:o(()=>[t(e(f),{icon:"octicon:ellipsis-16",size:20,color:"#dedede",hoverColor:"#a275d9"})]),_:2},1032,["title"])):z("",!0)]),_:2},1032,["stream-path"]))],64)):(l(),_("div",de,[t(e(A),{title:"当前无信号，请先选择通道",class:"no-stream-tip cursor-pointer",getPopupContainer:n,placement:"top"},{default:o(()=>[t(e(f),{icon:"pepicons-pop:television-play-off",size:a.value===1?50:24},null,8,["size"])]),_:1})]))]),_:2},1032,["span","class","onClick"]))),128))]),_:1},512)]))}});const _e=se(fe,[["__scopeId","data-v-5fb8fd98"]]),ve={class:"p-16px m0 text-text"},me=x({__name:"deviceInfo",setup($){const{getActiveInfo:a}=L(w());return(v,i)=>(l(),_(N,null,[C("h4",ve,[t(e(f),{icon:"icon-park-solid:view-grid-detail",class:"v-text-bottom"}),r(" 设备信息 ")]),t(e(E),{class:"m0"}),t(e(re),{class:"p-16px p-b-0",column:1},{default:o(()=>[t(e(k),{label:"设备名称"},{default:o(()=>[r(g(e(a).DeviceName||"--"),1)]),_:1}),t(e(k),{label:"设备编号"},{default:o(()=>[r(g(e(a).ID||"--"),1)]),_:1}),t(e(k),{label:"通道名称"},{default:o(()=>[r(g(e(a).Name||"--"),1)]),_:1}),t(e(k),{label:"通道编号"},{default:o(()=>[r(g(e(a).DeviceID||"--"),1)]),_:1})]),_:1})],64))}}),he={class:"p-16px m0 text-text"},De={class:"pt-30px"},ye=x({__name:"operate",setup($){const{getActiveInfo:a}=L(w()),v=U(()=>!!a.value.ID),i=async u=>{B.destroy(),await T({id:a.value.ID,channel:a.value.DeviceID,ptzcmd:u}).then(async p=>{B.success("指令发送成功"),n()}).catch(p=>{B.success("指令发送失败")})},n=()=>{setTimeout(async()=>{await T({id:a.value.ID,channel:a.value.DeviceID,ptzcmd:ue()})})};return(u,p)=>(l(),_(N,null,[C("h4",he,[t(e(f),{icon:"icon-park-solid:scan-setting",class:"v-text-bottom"}),r(" 设备操作 ")]),t(e(E),{class:"m0"}),C("div",De,[t(ie,{hanldeClick:i,allowed:e(v)},null,8,["allowed"])])],64))}}),xe={class:"w-300px m-l-8px h-full flex-shrink-0"},Ie=x({name:"Screen"}),Ge=x({...Ie,setup($){const a=w(),v=i=>{const{ID:n,DeviceID:u,DeviceName:p,Name:h,LiveStatus:D}=i;a.setActiveInfo({ID:n,DeviceID:u,DeviceName:p,Name:h,LiveStatus:D})};return(i,n)=>(l(),_("div",{class:"flex",style:Z({height:"calc(100% - 8px)"})},[t(e(S),{class:"w-342px m-r-8px flex-shrink-0",bordered:!1,bodyStyle:{height:"100%",padding:0}},{default:o(()=>[t(ee,{onSelect:v})]),_:1}),t(e(S),{class:"flex-1",bordered:!1,bodyStyle:{height:"100%",padding:"16px"}},{default:o(()=>[t(_e)]),_:1}),C("div",xe,[t(e(S),{class:"m-b-8px",bordered:!1,bodyStyle:{height:"230px",padding:0}},{default:o(()=>[t(me)]),_:1}),t(e(S),{style:{height:"calc(100% - 238px)"},bordered:!1,bodyStyle:{height:"100%",padding:0}},{default:o(()=>[t(ye)]),_:1})])],4))}});export{Ge as default};
