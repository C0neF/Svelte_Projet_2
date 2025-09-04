import"../chunks/DsnmJJEf.js";import"../chunks/BVikqVVq.js";import{d as $r,w as Er,o as Sr,b as Mr,s as U}from"../chunks/BCvJcmQI.js";import{U as vt,F as Rt,aW as Ut,S as Ie,G as V,O as Ct,H as He,g as e,aa as Pr,P as Lr,Q as Ir,R as St,T as Te,N as ce,al as Tr,ap as Rr,L as Be,X as Ur,aX as Ge,aY as Oe,V as xe,aZ as Mt,a2 as N,a4 as Pt,at as Nt,C as Cr,Y as ft,Z as Wt,a_ as Nr,a$ as lt,x as Wr,M as mt,b0 as Ar,an as Dr,b1 as Fr,as as qr,b2 as Hr,E as At,b3 as Br,K as Gr,b4 as Or,J as Vr,b5 as jr,aK as Qr,b as P,a0 as Yr,b6 as Xr,p as Dt,b7 as Jr,j as C,o as Ft,e as Me,q as b,v as z,s as m,l as oe,m as re,aI as Kr,b8 as Zr,b9 as ea,ba as ta,h as Z,i as ra,t as K,$ as aa,a3 as p,bb as nt,bc as sa,aJ as Lt}from"../chunks/6XM65UVr.js";import{l as we,p as _e,s as Ve,i as ee,a as la,c as na,b as It}from"../chunks/RSu4ILSA.js";import{a as Tt,b as oa,c as ot,r as Pe,s as te,d as ia}from"../chunks/Bmh0CJYE.js";import{g as da,j as he}from"../chunks/CuvJM-eC.js";import{i as qt}from"../chunks/NN4q36hV.js";function Ht(r,t){return t}function ua(r,t,s){for(var i=r.items,a=[],o=t.length,n=0;n<o;n++)Fr(t[n].e,a,!0);var v=o>0&&a.length===0&&s!==null;if(v){var S=s.parentNode;qr(S),S.append(s),i.clear(),se(r,t[0].prev,t[o-1].next)}Hr(a,()=>{for(var _=0;_<o;_++){var y=t[_];v||(i.delete(y.k),se(r,y.prev,y.next)),mt(y.e,!v)}})}function Bt(r,t,s,i,a,o=null){var n=r,v={flags:t,items:new Map,first:null},S=(t&Ut)!==0;if(S){var _=r;n=V?Ie(Ct(_)):_.appendChild(vt())}V&&He();var y=null,c=!1,f=new Map,W=Pr(()=>{var x=s();return Cr(x)?x:x==null?[]:Nt(x)}),d,$;function k(){ca($,d,v,f,n,a,t,i,s),o!==null&&(d.length===0?y?ft(y):y=Be(()=>o(n)):y!==null&&Wt(y,()=>{y=null}))}Rt(()=>{$??=At,d=e(W);var x=d.length;if(c&&x===0)return;c=x===0;let A=!1;if(V){var F=Lr(n)===Ir;F!==(x===0)&&(n=St(),Ie(n),Te(!1),A=!0)}if(V){for(var q=null,R,u=0;u<x;u++){if(ce.nodeType===Tr&&ce.data===Rr){n=ce,A=!0,Te(!1);break}var E=d[u],B=i(E,u);R=ct(ce,v,q,null,E,B,u,a,t,s),v.items.set(B,R),q=R}x>0&&Ie(St())}if(V)x===0&&o&&(y=Be(()=>o(n)));else if(Ur()){var le=new Set,ve=xe;for(u=0;u<x;u+=1){E=d[u],B=i(E,u);var G=v.items.get(B)??f.get(B);G?(t&(Ge|Oe))!==0&&Gt(G,E,u,t):(R=ct(null,v,null,null,E,B,u,a,t,s,!0),f.set(B,R)),le.add(B)}for(const[T,ie]of v.items)le.has(T)||ve.skipped_effects.add(ie.e);ve.add_callback(k)}else k();A&&Te(!0),e(W)}),V&&(n=ce)}function ca(r,t,s,i,a,o,n,v,S){var _=(n&Ar)!==0,y=(n&(Ge|Oe))!==0,c=t.length,f=s.items,W=s.first,d=W,$,k=null,x,A=[],F=[],q,R,u,E;if(_)for(E=0;E<c;E+=1)q=t[E],R=v(q,E),u=f.get(R),u!==void 0&&(u.a?.measure(),(x??=new Set).add(u));for(E=0;E<c;E+=1){if(q=t[E],R=v(q,E),u=f.get(R),u===void 0){var B=i.get(R);if(B!==void 0){i.delete(R),f.set(R,B);var le=k?k.next:d;se(s,k,B),se(s,B,le),it(B,le,a),k=B}else{var ve=d?d.e.nodes_start:a;k=ct(ve,s,k,k===null?s.first:k.next,q,R,E,o,n,S)}f.set(R,k),A=[],F=[],d=k.next;continue}if(y&&Gt(u,q,E,n),(u.e.f&lt)!==0&&(ft(u.e),_&&(u.a?.unfix(),(x??=new Set).delete(u))),u!==d){if($!==void 0&&$.has(u)){if(A.length<F.length){var G=F[0],T;k=G.prev;var ie=A[0],de=A[A.length-1];for(T=0;T<A.length;T+=1)it(A[T],G,a);for(T=0;T<F.length;T+=1)$.delete(F[T]);se(s,ie.prev,de.next),se(s,k,ie),se(s,de,G),d=G,k=de,E-=1,A=[],F=[]}else $.delete(u),it(u,d,a),se(s,u.prev,u.next),se(s,u,k===null?s.first:k.next),se(s,k,u),k=u;continue}for(A=[],F=[];d!==null&&d.k!==R;)(d.e.f&lt)===0&&($??=new Set).add(d),F.push(d),d=d.next;if(d===null)continue;u=d}A.push(u),k=u,d=u.next}if(d!==null||$!==void 0){for(var Y=$===void 0?[]:Nt($);d!==null;)(d.e.f&lt)===0&&Y.push(d),d=d.next;var ne=Y.length;if(ne>0){var ae=(n&Ut)!==0&&c===0?a:null;if(_){for(E=0;E<ne;E+=1)Y[E].a?.measure();for(E=0;E<ne;E+=1)Y[E].a?.fix()}ua(s,Y,ae)}}_&&Wr(()=>{if(x!==void 0)for(u of x)u.a?.apply()}),r.first=s.first&&s.first.e,r.last=k&&k.e;for(var ke of i.values())mt(ke.e);i.clear()}function Gt(r,t,s,i){(i&Ge)!==0&&Mt(r.v,t),(i&Oe)!==0?Mt(r.i,s):r.i=s}function ct(r,t,s,i,a,o,n,v,S,_,y){var c=(S&Ge)!==0,f=(S&Nr)===0,W=c?f?N(a,!1,!1):Pt(a):a,d=(S&Oe)===0?n:Pt(n),$={i:d,v:W,k:o,a:null,e:null,prev:s,next:i};try{if(r===null){var k=document.createDocumentFragment();k.append(r=vt())}return $.e=Be(()=>v(r,W,d,_),V),$.e.prev=s&&s.e,$.e.next=i&&i.e,s===null?y||(t.first=$):(s.next=$,s.e.next=$.e),i!==null&&(i.prev=$,i.e.prev=$.e),$}finally{}}function it(r,t,s){for(var i=r.next?r.next.e.nodes_start:s,a=t?t.e.nodes_start:s,o=r.e.nodes_start;o!==null&&o!==i;){var n=Dr(o);a.before(o),o=n}}function se(r,t,s){t===null?r.first=s:(t.next=s,t.e.next=s&&s.e),s!==null&&(s.prev=t,s.e.prev=t&&t.e)}function Re(r,t,s,i,a){V&&He();var o=t.$$slots?.[s],n=!1;o===!0&&(o=t.children,n=!0),o===void 0||o(r,n?()=>i:i)}function va(r,t,s,i,a,o){let n=V;V&&He();var v,S,_=null;V&&ce.nodeType===Br&&(_=ce,He());var y=V?ce:r,c;Rt(()=>{const f=t()||null;var W=Or;f!==v&&(c&&(f===null?Wt(c,()=>{c=null,S=null}):f===S?ft(c):mt(c)),f&&f!==S&&(c=Be(()=>{if(_=V?_:document.createElementNS(W,f),Vr(_,_),i){V&&da(f)&&_.append(document.createComment(""));var d=V?Ct(_):_.appendChild(vt());V&&(d===null?Te(!1):Ie(d)),i(_,d)}At.nodes_end=_,y.before(_)})),v=f,v&&(S=v))},Gr),n&&(Te(!0),Ie(y))}function Le(r,t,s=t){var i=jr(),a=new WeakSet;Qr(r,"input",o=>{var n=o?r.defaultValue:r.value;if(n=dt(r)?ut(n):n,s(n),xe!==null&&a.add(xe),i&&n!==(n=t())){var v=r.selectionStart,S=r.selectionEnd;r.value=n??"",S!==null&&(r.selectionStart=v,r.selectionEnd=Math.min(S,r.value.length))}}),(V&&r.defaultValue!==r.value||P(t)==null&&r.value)&&(s(dt(r)?ut(r.value):r.value),xe!==null&&a.add(xe)),Yr(()=>{var o=t();if(r===document.activeElement){var n=Xr??xe;if(a.has(n))return}dt(r)&&o===ut(r.value)||r.type==="date"&&!o&&!r.value||o!==r.value&&(r.value=o??"")})}function dt(r){var t=r.type;return t==="number"||t==="range"}function ut(r){return r===""?null:+r}const fa=r=>{let t,s=!1,i=!1;const a=async(v,S)=>{if(!v)throw new Error("Payload is required");return new Promise((_,y)=>{if(!r.worker&&!r.workerURL)throw new Error("Either worker or workerURL is required");if(s){_();return}try{let c;if(S?.onProgress!=null&&(c=S?.onProgress,delete S?.onProgress),!i&&!s&&!t){if(r.worker)t=r.worker;else{let f;if(r.workerURL instanceof URL?f=new URL(r.workerURL).searchParams.get("worker-url"):f=r.workerURL??null,!f)throw new Error("Worker URL is required");t=new Worker(f,{type:"module"})}if(!t)throw new Error("Worker not initialized");t.postMessage(v),t.addEventListener("message",f=>{switch(f.data.type){case"error":i=!1,y(f.data.data.error);break;case"progress":c!=null&&typeof c=="function"&&c(f.data.data.progress);break}})}t.addEventListener("message",f=>{f.data.type!=="status"||f.data.data.status!=="ready"||(s=!0,i=!1,_())})}catch(c){i=!1,y(c)}})},o=async v=>{v!=null&&!v?.loadOptions&&await a(v?.loadOptions?.payload,v?.loadOptions?.options)};return{dispose:()=>{t&&(t.terminate(),s=!1,i=!1,t=void 0)},load:a,process:(v,S,_)=>new Promise((y,c)=>{o(_).then(()=>{if(!t||!s){c(new Error("Model not loaded"));return}t.addEventListener("error",d=>{c(d)});let f=!1,W=!1;t.addEventListener("message",d=>{switch(d.data.type){case"error":f=!0,c(d.data.data?.error);break;case S:W=!0,y(d.data.data);break}}),!f&&!W&&t?.postMessage(v)})})}};function ma(r){if(!r.baseURL)throw new Error("baseURL is required");const t=fa({workerURL:r.baseURL});return{load:(a,o)=>{let n;return o&&"onProgress"in o&&typeof o.onProgress=="function"&&(n=o.onProgress,delete o.onProgress),t.load({data:{modelId:a,options:o},type:"load"},{onProgress:n})},process:async a=>(await t.process({data:a,type:"process"},"processResult")).data,dispose:()=>t?.dispose()}}const ba=""+new URL("../workers/worker-CTNU7hz0.js",import.meta.url).href,ga="Ask",pa="Scale",_a="Max Size",ha="Interval",xa="Start",wa="Stop",ka="Not Supported",za="Browser does not support video camera. Please use a supported browser.",ya="Browser does not support WebGPU. Please use a supported browser.",$a="Warning",Ea="Permission not granted. Please grant permission first.",Sa="Capture failed",Ma="UForm-Gen2-Qwen model loading failed, please refresh the page and try again",Pa="Describe what you see in the image",La="Load From",Ia="Network",Ta="Local",Ra="Local Path",Ua="C:\\models or /models/unum-cloud/uform-gen2-qwen-500m",Ca={ask:ga,scale:pa,max_size:_a,interval:ha,start:xa,stop:wa,not_supported:ka,not_supported_camera:za,not_supported_webgpu:ya,warning:$a,permission_not_granted:Ea,capture_failed:Sa,model_loading_failed:Ma,instruction_placeholder:Pa,load_from:La,network:Ia,local:Ta,local_path:Ra,local_path_placeholder:Ua},Na="询问",Wa="缩放",Aa="最大尺寸",Da="间隔",Fa="开始",qa="停止",Ha="不支持",Ba="浏览器不支持视频摄像头。请使用支持的浏览器。",Ga="浏览器不支持 WebGPU。请使用支持的浏览器。",Oa="警告",Va="未授予权限。请先授予权限。",ja="捕获失败",Qa="UForm-Gen2-Qwen 模型加载失败，请刷新页面重试",Ya="描述你在图像中看到的内容",Xa="加载来源",Ja="网络",Ka="本地",Za="本地路径",es="C:\\models 或 /models/unum-cloud/uform-gen2-qwen-500m",ts={ask:Na,scale:Wa,max_size:Aa,interval:Da,start:Fa,stop:qa,not_supported:Ha,not_supported_camera:Ba,not_supported_webgpu:Ga,warning:Oa,permission_not_granted:Va,capture_failed:ja,model_loading_failed:Qa,instruction_placeholder:Ya,load_from:Xa,network:Ja,local:Ka,local_path:Za,local_path_placeholder:es},rs={en:Ca,zh:ts},Ot=Er("en");function as(r,t,s){if(!t)throw new Error("no key provided to $t()");if(!r)throw new Error(`no translation for key "${t}"`);let i=rs[r][t];if(!i)throw new Error(`no translation found for ${r}.${t}`);return s&&Object.keys(s).length>0&&Object.keys(s).forEach(a=>{const o=new RegExp(`{{${a}}}`,"g");i=i.replace(o,s[a])}),i}const ss=$r(Ot,r=>(t,s={})=>as(r,t,s));/**
 * @license lucide-svelte v0.540.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ls={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ns=Jr("<svg><!><!></svg>");function je(r,t){const s=we(t,["children","$$slots","$$events","$$legacy"]),i=we(s,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Dt(t,!1);let a=_e(t,"name",8,void 0),o=_e(t,"color",8,"currentColor"),n=_e(t,"size",8,24),v=_e(t,"strokeWidth",8,2),S=_e(t,"absoluteStrokeWidth",8,!1),_=_e(t,"iconNode",24,()=>[]);const y=(...d)=>d.filter(($,k,x)=>!!$&&x.indexOf($)===k).join(" ");qt();var c=ns();Tt(c,(d,$)=>({...ls,...i,width:n(),height:n(),stroke:o(),"stroke-width":d,class:$}),[()=>(Me(S()),Me(v()),Me(n()),P(()=>S()?Number(v())*24/Number(n()):v())),()=>(Me(a()),Me(s),P(()=>y("lucide-icon","lucide",a()?`lucide-${a()}`:"",s.class)))]);var f=b(c);Bt(f,1,_,Ht,(d,$)=>{var k=Kr(()=>Zr(e($),2));let x=()=>e(k)[0],A=()=>e(k)[1];var F=oe(),q=re(F);va(q,x,!0,(R,u)=>{Tt(R,()=>({...A()}))}),C(d,F)});var W=z(f);Re(W,t,"default",{}),m(c),C(r,c),Ft()}function os(r,t){const s=we(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const i=[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]];je(r,Ve({name:"languages"},()=>s,{get iconNode(){return i},children:(a,o)=>{var n=oe(),v=re(n);Re(v,t,"default",{}),C(a,n)},$$slots:{default:!0}}))}function is(r,t){const s=we(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const i=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];je(r,Ve({name:"moon"},()=>s,{get iconNode(){return i},children:(a,o)=>{var n=oe(),v=re(n);Re(v,t,"default",{}),C(a,n)},$$slots:{default:!0}}))}function ds(r,t){const s=we(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const i=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];je(r,Ve({name:"settings"},()=>s,{get iconNode(){return i},children:(a,o)=>{var n=oe(),v=re(n);Re(v,t,"default",{}),C(a,n)},$$slots:{default:!0}}))}function us(r,t){const s=we(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.540.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const i=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];je(r,Ve({name:"sun"},()=>s,{get iconNode(){return i},children:(a,o)=>{var n=oe(),v=re(n);Re(v,t,"default",{}),C(a,n)},$$slots:{default:!0}}))}var cs=Z('<div class="min-w-20 svelte-8bzr5i"> </div> <label for="local-path" class="col-span-2 w-full flex items-center gap-2 svelte-8bzr5i"><input type="text" class="w-full flex-1 rounded-lg px-2 py-1 text-nowrap text-sm outline-none bg-neutral-700/50 dark:bg-neutral-950 focus:bg-neutral-700/50 dark:focus:bg-neutral-900 border-2 border-solid border-neutral-500/50 dark:border-neutral-900 focus:border-neutral-400 dark:focus:border-neutral-500 transition-all duration-200 ease-in-out disabled:cursor-not-allowed text-white disabled:text-neutral-400 dark:disabled:text-neutral-600 shadow-sm svelte-8bzr5i"/></label>',1),vs=Z('<div class="grid-cols-[0.2fr_0.4fr_1fr] absolute bottom-16 right-4 z-10 grid items-center gap-x-2 gap-y-1 text-sm min-w-[280px] bg-neutral-500/40 dark:bg-neutral-900/70 text-white/98 dark:text-neutral-100/90 border border-neutral-400/40 dark:border-neutral-500/50 rounded-xl p-2 sm:rounded-2xl sm:px-3 sm:pb-1 sm:pt-2 transition-all duration-300 ease-in-out backdrop-blur-lg svelte-8bzr5i"><div class="svelte-8bzr5i"> </div> <label for="scale" class="w-[90px] flex items-center gap-2 svelte-8bzr5i"><input type="range" class="flex-1 svelte-8bzr5i"/></label> <div class="text-right font-mono svelte-8bzr5i"> </div> <div class="svelte-8bzr5i"> </div> <label for="max-size" class="w-[90px] flex items-center gap-2 svelte-8bzr5i"><input type="range" class="flex-1 svelte-8bzr5i"/></label> <div class="text-right font-mono svelte-8bzr5i"> </div> <div class="svelte-8bzr5i"> </div> <label for="interval" class="w-[90px] flex items-center gap-2 svelte-8bzr5i"><input type="range" class="flex-1 svelte-8bzr5i"/></label> <div class="text-right font-mono svelte-8bzr5i"> </div> <div class="min-w-20 svelte-8bzr5i"> </div> <label for="instruction" class="col-span-2 w-full flex items-center gap-2 svelte-8bzr5i"><input type="text" class="w-full flex-1 rounded-lg px-2 py-1 text-nowrap text-sm outline-none bg-neutral-700/50 dark:bg-neutral-950 focus:bg-neutral-700/50 dark:focus:bg-neutral-900 border-2 border-solid border-neutral-500/50 dark:border-neutral-900 focus:border-neutral-400 dark:focus:border-neutral-500 transition-all duration-200 ease-in-out disabled:cursor-not-allowed text-white disabled:text-neutral-400 dark:disabled:text-neutral-600 shadow-sm svelte-8bzr5i"/></label> <div class="svelte-8bzr5i"> </div> <div class="col-span-2 flex items-center gap-2 svelte-8bzr5i"><button> </button> <button> </button></div> <!></div>'),fs=Z('<div class="i-svg-spinners:6-dots-rotate size-4 svelte-8bzr5i"></div>'),ms=Z('<div class="flex items-center gap-3 svelte-8bzr5i"><div class="flex-1 bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden relative svelte-8bzr5i"><div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer svelte-8bzr5i"></div> <div class="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 h-2.5 rounded-full transition-all duration-700 ease-out svelte-8bzr5i"></div></div> <p class="text-white/95 dark:text-neutral-100/95 text-sm font-mono min-w-[3.5rem] text-right svelte-8bzr5i"> </p></div>'),bs=Z('<p class="text-white/98 dark:text-neutral-100/90 text-xs sm:text-xl text-center svelte-8bzr5i"> </p>'),gs=Z('<div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-full max-w-lg px-3 py-2 bg-neutral-500/40 dark:bg-neutral-900/70 border border-neutral-400/40 dark:border-neutral-500/50 rounded-2xl backdrop-blur-lg transition-all duration-300 ease-in-out svelte-8bzr5i"><!></div>'),ps=Z('<div class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-neutral-50/20 svelte-8bzr5i"><div class="text-neutral-700 dark:text-neutral-300 text-4xl font-semibold svelte-8bzr5i"> </div> <div class="max-w-[50%] text-neutral-800 dark:text-neutral-200 text-2xl text-center svelte-8bzr5i"> </div></div>'),_s=Z('<div class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-neutral-50/20 svelte-8bzr5i"><div class="text-neutral-700 dark:text-neutral-300 text-4xl font-semibold svelte-8bzr5i"> </div> <div class="max-w-[50%] text-neutral-800 dark:text-neutral-200 text-2xl text-center svelte-8bzr5i"> </div></div>'),hs=Z('<div class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-orange-50/20 dark:bg-orange-900/10 svelte-8bzr5i"><div class="text-orange-700 text-4xl font-semibold svelte-8bzr5i"> </div> <div class="max-w-[50%] text-orange-600 dark:text-orange-400 text-2xl text-center svelte-8bzr5i"> </div></div>'),xs=Z('<div class="relative h-5/6 w-5/6 overflow-hidden rounded-2xl shadow-lg svelte-8bzr5i"><video autoplay playsinline="" class="h-full w-full object-cover svelte-8bzr5i"></video></div> <canvas class="hidden svelte-8bzr5i"></canvas>',3),ws=Z('<option class="text-xs sm:text-sm svelte-8bzr5i"> </option>'),ks=Z('<div class="p-0 sm:p-4 max-h-dvh max-w-dvw relative h-full w-full svelte-8bzr5i"><div class="relative z-0 h-full w-full overflow-hidden rounded-none sm:rounded-3xl shadow-md flex items-center justify-center svelte-8bzr5i"><div class="absolute left-0 top-0 z-10 p-2 sm:p-4 flex items-center gap-2 svelte-8bzr5i"><div class="bg-white dark:bg-neutral-900 text-black dark:text-white text-xs sm:text-base border border-neutral-400/40 dark:border-neutral-500/50 rounded-xl p-2 sm:rounded-2xl sm:px-3 sm:py-2 transition-all duration-300 ease-in-out svelte-8bzr5i">UForm-Gen2-Qwen-500M ↹ Florence-2</div></div> <div class="absolute right-4 top-4 z-10 bg-white/80 dark:bg-neutral-900/80 text-black dark:text-white text-xs sm:text-base border border-neutral-400/40 dark:border-neutral-500/50 rounded-xl p-2 sm:rounded-2xl sm:px-3 sm:py-2 transition-all duration-300 ease-in-out flex gap-2 svelte-8bzr5i"><span class="svelte-8bzr5i">FPS: <span class="font-mono svelte-8bzr5i"> </span></span> <span class="svelte-8bzr5i">Time: <span class="font-mono svelte-8bzr5i"> </span></span></div> <!> <button><!></button> <!> <!> <div class="absolute bottom-0 right-0 z-10 h-full max-h-12 sm:max-h-18 p-2 sm:p-4 flex items-center gap-1 sm:gap-2 svelte-8bzr5i"><button class="h-full aspect-square flex items-center justify-center rounded-full cursor-pointer bg-neutral-500/40 hover:bg-neutral-600/40 dark:bg-neutral-900/70 hover:dark:bg-neutral-900/60 text-white/98 dark:text-neutral-100/90 border border-neutral-400/40 dark:border-neutral-500/50 outline-none shadow-none hover:shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out svelte-8bzr5i"><!></button> <button class="h-full aspect-square flex items-center justify-center rounded-full cursor-pointer bg-neutral-500/40 hover:bg-neutral-600/40 dark:bg-neutral-900/70 hover:dark:bg-neutral-900/60 text-white/98 dark:text-neutral-100/90 border border-neutral-400/40 dark:border-neutral-500/50 outline-none shadow-none hover:shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out svelte-8bzr5i"><!></button> <select class="h-full px-2 sm:px-3 cursor-pointer rounded-full bg-neutral-500/40 hover:bg-neutral-600/40 dark:bg-neutral-900/70 hover:dark:bg-neutral-900/60 text-white/98 dark:text-neutral-100/90 text-xs sm:text-base border border-neutral-400/40 dark:border-neutral-500/50 outline-none shadow-none hover:shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out svelte-8bzr5i"></select> <button class="h-full aspect-square flex items-center justify-center rounded-full cursor-pointer bg-neutral-500/40 hover:bg-neutral-600/40 dark:bg-neutral-900/70 hover:dark:bg-neutral-900/60 text-white/98 dark:text-neutral-100/90 border border-neutral-400/40 dark:border-neutral-500/50 outline-none shadow-none hover:shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out svelte-8bzr5i"><!></button></div></div></div>');function Is(r,t){Dt(t,!1);const[s,i]=la(),a=()=>na(ss,"$t",s);let o=N(),n=N(),v=N(!0),S=N(!0),_=N(!1),y=!1,c=N(!1),f=N(!1),W=N(!1),d=N(!1),$=N(!1),k=N(""),x=N(""),A=null,F=N(.3),q=N(224),R=N(2e3),u=N("network"),E=N("https://model.conef.dpdns.org/models/unum-cloud/uform-gen2-qwen-500m"),B=N(0),le=0,ve=N(0),G=N(0),T=[];const ie=new Set;let de=!1,Y=null,ne=N([]),ae=N(void 0);Sr(async()=>{p(S,!!navigator.gpu),p(v,!!navigator.mediaDevices),!(!e(S)||!e(v))&&(await Vt(),A=ma({baseURL:ba}))}),Mr(()=>{Y&&Y.getTracks().forEach(l=>l.stop()),A?.dispose(),ke()});function ke(){console.log("[Reset] Clearing all progress states"),p(G,0),T=[],ie.clear(),de=!1}async function Vt(){try{const l=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});p(_,!0),l.getTracks().forEach(h=>h.stop());const g=await navigator.mediaDevices.enumerateDevices();p(ne,g.filter(h=>h.kind==="videoinput")),e(ne).length>0&&(p(ae,e(ne)[0].deviceId),await bt())}catch(l){console.error("Error accessing media devices.",l),p(_,!1)}}async function bt(){Y&&Y.getTracks().forEach(l=>l.stop());try{const l={video:{deviceId:e(ae)?{exact:e(ae)}:void 0},audio:!1};Y=await navigator.mediaDevices.getUserMedia(l),e(o)&&nt(o,e(o).srcObject=Y)}catch(l){console.error("Error starting camera:",l)}}const jt=async l=>{if(!e(f)||y){console.log("[Progress] Skipping - isModelLoading:",e(f),"loaded:",y);return}if(l.status==="initiate"){if(ie.has(l.file))return;ie.add(l.file),T=[...T,l],console.log("[Progress] File initiated:",l.file)}else if(l.status==="progress"){const g=T.findIndex(I=>I.file===l.file);g>=0?(T[g]=l,T=[...T]):T=[...T,l];let h=0,L=0;for(const I of T)"total"in I&&I.total&&(h+=I.total,"loaded"in I&&I.loaded&&(L+=I.loaded));h>0&&(p(G,L/h*100),console.log("[Progress] Overall progress:",e(G).toFixed(2)+"%"))}else if(l.status==="done"){const g=T.findIndex(L=>L.file===l.file);g>=0&&(T[g]=l,T=[...T]),T.every(L=>L.status==="done"||L.status==="ready")&&(p(G,100),console.log("[Progress] All files completed, progress: 100%"))}else l.status==="ready"&&(p(G,100),console.log("[Progress] Model ready, progress: 100%"))};function Qt(){if(!Y||!e(o)?.videoWidth||!e(n))return null;const l=e(o).videoWidth,g=e(o).videoHeight,h=Math.round(l*e(F)),L=Math.round(g*e(F)),I=l/g;let w=h,M=L;Math.max(h,L)>e(q)&&(h>L?(w=e(q),M=Math.round(e(q)/I)):(M=e(q),w=Math.round(e(q)*I))),nt(n,e(n).width=w),nt(n,e(n).height=M);const D=e(n).getContext("2d",{willReadFrequently:!0});if(!D)return null;D.drawImage(e(o),0,0,w,M);const j=D.getImageData(0,0,w,M);return{imageBuffer:j.data,imageWidth:j.width,imageHeight:j.height,channels:4}}async function Yt(){if(!e(c)||!A)return;const l=Qt();if(!l){p(x,a()("capture_failed"));return}try{const g=performance.now(),h=await A.process({instruction:e(k),imageBuffer:l.imageBuffer,imageWidth:l.imageWidth,imageHeight:l.imageHeight,channels:l.channels}),L=performance.now();p(ve,Math.round(L-g)),le&&p(B,Math.round(1e3/(L-le)*100)/100),le=L,p(x,h??"")}catch(g){console.error(g),p(x,`Error: ${g instanceof Error?g.message:"Unknown error"}`)}}let Ue=null,gt=0;function Ce(){if(!e(c)){Ue!==null&&cancelAnimationFrame(Ue);return}const l=performance.now();l-gt>=e(R)?(gt=l,Yt().finally(()=>{e(c)&&(Ue=requestAnimationFrame(Ce))})):e(c)&&(Ue=requestAnimationFrame(Ce))}async function Xt(){if(e(f)||e(W)){console.log("[Start] Blocked - already loading");return}if(!Y){p(x,"Camera not available. Cannot start."),console.warn("Camera not available. Please grant permission first.");return}if(!y&&!de){console.log("[Start] First time loading - resetting all states"),ke(),p(x,""),p(f,!0),p(W,!0),de=!0;try{console.log("[Start] Beginning model load");const l=e(u)==="local"?e(E):"unum-cloud/uform-gen2-qwen-500m";console.log(`[Start] Using model: ${l} (mode: ${e(u)})`),await A?.load(l,{onProgress:jt}),p(G,100),await new Promise(g=>setTimeout(g,500)),console.log("[Start] Model loaded successfully"),p(f,!1),p(W,!1),y=!0,p(c,!0),p(x,"..."),Ce()}catch(l){console.error("[Start] Model loading failed:",l),p(f,!1),p(W,!1),p(c,!1),p(x,a()("model_loading_failed")),ke();return}}else y?(console.log("[Start] Model already loaded - starting processing"),p(c,!0),p(x,"..."),Ce()):console.warn("[Start] Unexpected state - loaded:",y,"hasStartedLoading:",de)}function Jt(){p(c,!1),e(x)==="..."&&p(x,""),console.log("[Stop] Processing stopped")}function Kt(){if(e(f)||e(W)){console.log("[Click] Blocked - model is loading");return}e(c)?Jt():Xt()}function Zt(){Ot.update(l=>l==="en"?"zh":"en")}ea(()=>e(ae),()=>{e(ae)&&bt()}),ta(),qt();var Qe=ks();ra(l=>{aa.title="UForm-Gen2-Qwen-500M with Florence-2 Fallback (Svelte)"});var pt=b(Qe),Ye=z(b(pt),2),Xe=b(Ye),_t=z(b(Xe)),er=b(_t,!0);m(_t),m(Xe);var ht=z(Xe,2),xt=z(b(ht)),tr=b(xt);m(xt),m(ht),m(Ye);var wt=z(Ye,2);{var rr=l=>{var g=vs(),h=b(g),L=b(h);m(h);var I=z(h,2),w=b(I);Pe(w),te(w,"min",.1),te(w,"max",1),te(w,"step",.1),m(I);var M=z(I,2),D=b(M,!0);m(M);var j=z(M,2),X=b(j);m(j);var O=z(j,2),H=b(O);Pe(H),te(H,"min",128),te(H,"max",512),te(H,"step",32),m(O);var Q=z(O,2),be=b(Q,!0);m(Q);var ue=z(Q,2),fe=b(ue);m(ue);var ye=z(ue,2),me=b(ye);Pe(me),te(me,"min",500),te(me,"max",5e3),te(me,"step",250),m(ye);var Ke=z(ye,2),mr=b(Ke);m(Ke);var Ze=z(Ke,2),br=b(Ze);m(Ze);var et=z(Ze,2),De=b(et);Pe(De),m(et);var tt=z(et,2),gr=b(tt);m(tt);var rt=z(tt,2),ge=b(rt);let $t;var pr=b(ge,!0);m(ge);var $e=z(ge,2);let Et;var _r=b($e,!0);m($e),m(rt);var hr=z(rt,2);{var xr=J=>{var Fe=cs(),Ee=re(Fe),at=b(Ee);m(Ee);var qe=z(Ee,2),pe=b(qe);Pe(pe),m(qe),K((Se,st)=>{U(at,`${Se??""}:`),te(pe,"placeholder",st),pe.disabled=e(c)},[()=>(a(),P(()=>a()("local_path"))),()=>(a(),P(()=>a()("local_path_placeholder")))]),Le(pe,()=>e(E),Se=>p(E,Se)),C(J,Fe)};ee(hr,J=>{e(u)==="local"&&J(xr)})}m(g),K((J,Fe,Ee,at,qe,pe,Se,st,wr,kr,zr,yr)=>{U(L,`${J??""}:`),w.disabled=e(c),U(D,Fe),U(X,`${Ee??""}:`),H.disabled=e(c),U(be,e(q)),U(fe,`${at??""}:`),U(mr,`${qe??""}s`),U(br,`${pe??""}:`),te(De,"placeholder",Se),De.disabled=e(c),U(gr,`${st??""}:`),ge.disabled=e(c),$t=ot(ge,1,`flex-1 rounded-md px-2 py-1 text-xs transition-colors ${e(u)==="network"?"bg-blue-600 text-white":"bg-neutral-600/50 hover:bg-neutral-500/50"}`,"svelte-8bzr5i",$t,wr),U(pr,kr),$e.disabled=e(c),Et=ot($e,1,`flex-1 rounded-md px-2 py-1 text-xs transition-colors ${e(u)==="local"?"bg-blue-600 text-white":"bg-neutral-600/50 hover:bg-neutral-500/50"}`,"svelte-8bzr5i",Et,zr),U(_r,yr)},[()=>(a(),P(()=>a()("scale"))),()=>(e(F),P(()=>e(F).toFixed(1))),()=>(a(),P(()=>a()("max_size"))),()=>(a(),P(()=>a()("interval"))),()=>(e(R),P(()=>(e(R)/1e3).toFixed(1))),()=>(a(),P(()=>a()("ask"))),()=>(a(),P(()=>a()("instruction_placeholder"))),()=>(a(),P(()=>a()("load_from"))),()=>({active:e(u)==="network"}),()=>(a(),P(()=>a()("network"))),()=>({active:e(u)==="local"}),()=>(a(),P(()=>a()("local")))]),Le(w,()=>e(F),J=>p(F,J)),Le(H,()=>e(q),J=>p(q,J)),Le(me,()=>e(R),J=>p(R,J)),Le(De,()=>e(k),J=>p(k,J)),he("click",ge,()=>p(u,"network")),he("click",$e,()=>p(u,"local")),C(l,g)};ee(wt,l=>{e($)&&l(rr)})}var ze=z(wt,2),ar=b(ze);{var sr=l=>{var g=Lt();K(h=>U(g,h),[()=>(a(),P(()=>a()("stop")))]),C(l,g)},lr=l=>{var g=oe(),h=re(g);{var L=w=>{var M=fs();C(w,M)},I=w=>{var M=Lt();K(D=>U(M,D),[()=>(a(),P(()=>a()("start")))]),C(w,M)};ee(h,w=>{e(W)||e(f)?w(L):w(I,!1)},!0)}C(l,g)};ee(ar,l=>{e(c)?l(sr):l(lr,!1)})}m(ze);var kt=z(ze,2);{var nr=l=>{var g=gs(),h=b(g);{var L=w=>{var M=ms(),D=b(M),j=z(b(D),2);m(D);var X=z(D,2),O=b(X);m(X),m(M),K((H,Q)=>{ia(j,`width: ${H??""}%`),U(O,`${Q??""}%`)},[()=>(e(G),P(()=>Math.min(Math.max(e(G),0),100))),()=>(e(G),P(()=>Math.floor(Math.min(Math.max(e(G),0),100))))]),C(w,M)},I=w=>{var M=oe(),D=re(M);{var j=X=>{var O=bs(),H=b(O,!0);m(O),K(()=>U(H,e(x))),C(X,O)};ee(D,X=>{e(x)&&X(j)},!0)}C(w,M)};ee(h,w=>{e(f)?w(L):w(I,!1)})}m(g),C(l,g)};ee(kt,l=>{(e(f)||e(x))&&l(nr)})}var zt=z(kt,2);{var or=l=>{var g=ps(),h=b(g),L=b(h,!0);m(h);var I=z(h,2),w=b(I,!0);m(I),m(g),K((M,D)=>{U(L,M),U(w,D)},[()=>(a(),P(()=>a()("not_supported"))),()=>(a(),P(()=>a()("not_supported_camera")))]),C(l,g)},ir=l=>{var g=oe(),h=re(g);{var L=w=>{var M=_s(),D=b(M),j=b(D,!0);m(D);var X=z(D,2),O=b(X,!0);m(X),m(M),K((H,Q)=>{U(j,H),U(O,Q)},[()=>(a(),P(()=>a()("not_supported"))),()=>(a(),P(()=>a()("not_supported_webgpu")))]),C(w,M)},I=w=>{var M=oe(),D=re(M);{var j=O=>{var H=hs(),Q=b(H),be=b(Q,!0);m(Q);var ue=z(Q,2),fe=b(ue,!0);m(ue),m(H),K((ye,me)=>{U(be,ye),U(fe,me)},[()=>(a(),P(()=>a()("warning"))),()=>(a(),P(()=>a()("permission_not_granted")))]),C(O,H)},X=O=>{var H=xs(),Q=re(H),be=b(Q);be.muted=!0,It(be,fe=>p(o,fe),()=>e(o)),m(Q);var ue=z(Q,2);It(ue,fe=>p(n,fe),()=>e(n)),C(O,H)};ee(D,O=>{e(_)?O(X,!1):O(j)},!0)}C(w,M)};ee(h,w=>{e(S)?w(I,!1):w(L)},!0)}C(l,g)};ee(zt,l=>{e(v)?l(ir,!1):l(or)})}var yt=z(zt,2),Ne=b(yt),dr=b(Ne);ds(dr,{class:"w-4 h-4"}),m(Ne);var We=z(Ne,2),ur=b(We);os(ur,{class:"w-4 h-4"}),m(We);var Ae=z(We,2);K(()=>{e(ae),sa(()=>{e(ne)})}),Bt(Ae,5,()=>e(ne),Ht,(l,g)=>{var h=ws(),L=b(h,!0);m(h);var I={};K(()=>{U(L,(e(g),P(()=>e(g).label))),I!==(I=(e(g),P(()=>e(g).deviceId)))&&(h.value=(h.__value=(e(g),P(()=>e(g).deviceId)))??"")}),C(l,h)}),m(Ae);var Je=z(Ae,2),cr=b(Je);{var vr=l=>{us(l,{class:"w-4 h-4"})},fr=l=>{is(l,{class:"w-4 h-4"})};ee(cr,l=>{e(d)?l(vr):l(fr,!1)})}m(Je),m(yt),m(pt),m(Qe),K(()=>{U(er,e(B)),U(tr,`${e(ve)??""} ms`),ot(ze,1,`absolute bottom-2 left-2 sm:bottom-4 sm:left-4 z-10 h-full max-h-8 sm:max-h-10 px-2 sm:px-3 sm:py-2 flex items-center rounded-full backdrop-blur-lg text-white/98 dark:text-neutral-100/90 border border-neutral-400/40 dark:border-neutral-500/50 transition-all duration-300 ease-in-out ${e(c)?"bg-red-700/60 dark:bg-red-900/90 hover:bg-red-800/60 dark:hover:bg-red-900/90":"bg-green-700/60 dark:bg-green-900/90 hover:bg-green-800/60 dark:hover:bg-green-900/90"}`,"svelte-8bzr5i")}),he("click",ze,Kt),he("click",Ne,()=>p($,!e($))),he("click",We,Zt),oa(Ae,()=>e(ae),l=>p(ae,l)),he("click",Je,()=>p(d,!e(d))),C(r,Qe),Ft(),i()}export{Is as component};
