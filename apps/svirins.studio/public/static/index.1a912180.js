import{ag as se,ah as re,ai as ae,aj as oe,k as U,ak as ie,al as H,am as ce,ab as ue,r as d,B as a,R as w,an as $,P as v,ao as le,ap as de,U as D,T as E,a7 as G,aq as me,O as pe,ar as fe,V as he,as as ye,Q as N,at as ge,Y as Ie,a5 as Te,a8 as Le,a9 as Re,a6 as xe,au as Pe,av as k,aw as Se,ax as ve,ay as _e,az as Ce,aA as be,aB as De,aC as Ee,aD as M,aE as A,aF as Oe,aG as je,aH as we,aI as Ae,aJ as Fe,aK as $e,aL as Ne,aM as ke,aN as Me,aO as qe,aP as Be,aQ as We,z as Ue,aR as q,_ as He,a3 as Ge,ad as Ve,aS as Ye,aT as ze}from"./sanity.075eb9ca.js";import{P as Ke}from"./PaneItem.ba4fbc15.js";const B=100,F=2e3,V={by:[{field:"_createdAt",direction:"desc"}]},Qe={};function Xe(e,t){return e._id?U(e._id):"item-".concat(t)}function Je(e){return ie(e).map(t=>({...t.draft||t.published,hasPublished:!!t.published,hasDraft:!!t.draft}))}const Ze=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=e.match(Ze);if(!n)return null;const s=(n[1]||n[2]).trim().replace(/^["']|["']$/g,"");if(s[0]==="$"){const o=s.slice(1),l=t[o];return typeof l=="string"?l:null}return s}function tt(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function nt(e){return e.map(t=>[st(t),(t.direction||"").toLowerCase()].map(n=>n.trim()).filter(Boolean).join(" ")).join(",")}function st(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function rt(e,t){const n=e.by.map(s=>{if(s.mapWith)return s;const o=at(t,s.field);return o?it(o,"datetime")?{...s,mapWith:"dateTime"}:o.jsonType==="string"?{...s,mapWith:"lower"}:s:s});return n.every((s,o)=>s===e.by[o])?e:{...e,by:n}}function at(e,t){const n=se(t);let s=e;for(const o of n){if(!s)return;if(typeof o=="string"){s=ot(s,o);continue}if(!(re(o)||ae(o))||s.jsonType!=="array")return;const[r,i]=s.of||[];if(i||!r)return;if(!oe(r)){s=r;continue}const[m,h]=r.to||[];if(h||!m)return;s=m}return s}function ot(e,t){if(!("fields"in e))return;const n=e.fields.find(s=>s.name===t);return n?n.type:void 0}function it(e,t){let n=e.type;for(;n;){if(n.name===t||!n.type&&n.jsonType===t)return!0;n=n.type}return!1}function ct(e){const{childItemId:t,error:n,filterIsSimpleTypeContraint:s,fullList:o,isActive:l,isLoading:r,items:i,layout:m,onListChange:h,onRetry:p,showIcons:c}=e,T=H(),{collapsed:_}=ce(),{collapsed:y,index:x}=ue(),[L,C]=d.exports.useState(!1);d.exports.useEffect(()=>{if(y)return;const u=setTimeout(()=>{C(!0)},0);return()=>{clearTimeout(u)}},[y]);const P=d.exports.useCallback(u=>{const g=U(u._id),f=t===g;return a(Ke,{icon:c===!1?!1:void 0,id:g,pressed:!l&&f,selected:l&&f,layout:m,schemaType:T.get(u._type),value:u})},[t,l,m,T,c]),R=d.exports.useMemo(()=>{if(!L)return null;if(n)return a(w,{align:"center",direction:"column",height:"fill",justify:"center",children:a($,{width:1,children:v(le,{paddingX:4,paddingY:5,space:4,children:[a(de,{as:"h3",children:"Could not fetch list items"}),v(D,{as:"p",children:["Error: ",a("code",{children:n.message})]}),p&&a(E,{children:a(G,{icon:me,onClick:p,text:"Retry",tone:"primary"})})]})})});if(i===null)return a(w,{align:"center",direction:"column",height:"fill",justify:"center",children:a(pe,{ms:300,children:v(fe,{children:[a(he,{muted:!0}),a(E,{marginTop:3,children:a(D,{align:"center",muted:!0,size:1,children:"Loading documents\u2026"})})]})})});if(!r&&i.length===0)return a(w,{align:"center",direction:"column",height:"fill",justify:"center",children:a($,{width:1,children:a(E,{paddingX:4,paddingY:5,children:a(D,{align:"center",muted:!0,size:2,children:s?"No documents of this type":"No matching documents"})})})});const u=o&&i.length===F;return v(E,{padding:2,children:[i.length>0&&a(ye,{gap:1,getItemKey:Xe,items:i,renderItem:P,onChange:h},"".concat(x,"-").concat(y)),r&&a(N,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:a(D,{align:"center",muted:!0,size:1,children:"Loading\u2026"})}),u&&a(N,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:v(D,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",F," documents"]})})]})},[n,s,o,h,r,i,p,P,L,y,x]);return a(ge,{overflow:_?void 0:"auto",children:R})}const Y=d.exports.memo(e=>{let{index:t,initialValueTemplates:n=[],menuItems:s=[],menuItemGroups:o=[],setLayout:l,setSortOrder:r,title:i}=e;const{features:m}=Ie(),h=d.exports.useMemo(()=>({setLayout:p=>{let{layout:c}=p;l(c)},setSortOrder:p=>{r(p)}}),[l,r]);return a(Te,{backButton:m.backButton&&t>0&&a(G,{as:Le,"data-as":"a",icon:Re,mode:"bleed"}),title:i,actions:a(xe,{initialValueTemplateItems:n,actionHandlers:h,menuItemGroups:o,menuItems:s})})});Y.displayName="DocumentListPaneHeader";const ut={result:null,error:!1},lt=e=>({result:{documents:e},loading:!1,error:!1}),dt=e=>({result:null,loading:!1,error:e}),mt=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=new Pe,s=n.next.bind(n);return e.pipe(k(r=>({client:r.client,query:r.query,params:r.params})),Se(ve),_e(1),Ce()).pipe(be(r=>{const i=De(r.client,r.query,r.params,t).pipe(k(lt),Ee());return M(A({loading:!0}).pipe(Oe(400),je(i)),i)})).pipe(we(ut),Ae((r,i)=>Fe(A(dt(r)),M($e(window,"online"),n).pipe(Ne(1),ke(i)))),Me((r,i)=>({...r,...i,onRetry:s})))};function pt(e){var t;const{apiVersion:n,defaultOrdering:s,filter:o,params:l,sortOrder:r}=e,i=qe(Be),[m,h]=d.exports.useState(!1),p=d.exports.useRef(m),[c,T]=d.exports.useState(null),_=(c==null?void 0:c.error)||null,y=(c==null?void 0:c.loading)||c===null,x=c==null?void 0:c.onRetry,L=c==null||(t=c.result)===null||t===void 0?void 0:t.documents,C=d.exports.useMemo(()=>L?Je(L):null,[L]),P=d.exports.useMemo(()=>{const u=r==null?void 0:r.extendedProjection,g=["_id","_type"],f=g.join(","),I=s||(r==null?void 0:r.by)||[],b=m?F:B,O=I.length>0?I:V.by,S=nt(O);if(u){const j=g.concat(u).join(",");return["*[".concat(o,"] {").concat(j,"}"),"order(".concat(S,") [0...").concat(b,"]"),"{".concat(f,"}")].join("|")}return"*[".concat(o,"]|order(").concat(S,")[0...").concat(b,"]{").concat(f,"}")},[s,o,m,r]),R=d.exports.useCallback(u=>{let{toIndex:g}=u;y||p.current||g>=B/2&&(h(!0),p.current=!0)},[y]);return d.exports.useEffect(()=>{const u=m?I=>Boolean(I.result):()=>!0;T(I=>I?{...I,loading:!0}:null);const f=mt(A({client:i,query:P,params:l}),{apiVersion:n,tag:"desk.document-list"}).pipe(We(u)).subscribe(T);return()=>f.unsubscribe()},[n,i,m,P,l]),d.exports.useEffect(()=>{T(null),h(!1),p.current=!1},[o,l,r,n]),{error:_,fullList:m,handleListChange:R,isLoading:y,items:C,onRetry:x}}const W=[];function ft(e){const t=d.exports.useRef(e);return ze(t.current,e)||(t.current=e),t.current}const gt=d.exports.memo(function(t){const{childItemId:n,index:s,isActive:o,isSelected:l,pane:r,paneKey:i}=t,m=H(),{name:h}=Ue(),{defaultLayout:p="default",displayOptions:c,initialValueTemplates:T=W,menuItems:_,menuItemGroups:y,options:x,title:L}=r,{apiVersion:C,defaultOrdering:P=W,filter:R}=x,u=ft(x.params||Qe),g=r.source,f=d.exports.useMemo(()=>et(R,u),[R,u]),I=(c==null?void 0:c.showIcons)!==!1,[b,O]=q(f,"layout",p),[S,j]=q(f,"sortOrder",V),z=f&&S?rt(S,m.get(f)):S,K=He(z),Q=tt(R),{error:X,fullList:J,handleListChange:Z,isLoading:ee,items:te,onRetry:ne}=pt({defaultOrdering:P,filter:R,params:u,sortOrder:K,apiVersion:C});return a(Ge,{name:g||h,children:v(Ve,{currentMaxWidth:350,id:i,maxWidth:640,minWidth:320,selected:l,children:[Ye,a(Y,{index:s,initialValueTemplates:T,menuItems:_,menuItemGroups:y,setLayout:O,setSortOrder:j,title:L}),a(ct,{childItemId:n,error:X,filterIsSimpleTypeContraint:Q,fullList:J,isActive:o,isLoading:ee,items:te,layout:b,onListChange:Z,onRetry:ne,showIcons:I})]})})});export{gt as default};
