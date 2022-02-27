var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s,r;function a(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function c(t,e,n){return t.set(n),e}function u(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}function w(t){r=t}function x(){if(!r)throw new Error("Function called outside component initialization");return r}function b(t){x().$$.on_mount.push(t)}function S(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const T=[],k=[],E=[],I=[],P=Promise.resolve();let _=!1;function M(){_||(_=!0,P.then(W))}function K(t){E.push(t)}const N=new Set;let j=0;function W(){const t=r;do{for(;j<T.length;){const t=T[j];j++,w(t),U(t.$$)}for(w(null),T.length=0,j=0;k.length;)k.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];N.has(e)||(N.add(e),e())}E.length=0}while(T.length);for(;I.length;)I.pop()();_=!1,N.clear(),w(t)}function U(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}const L=new Set;function A(t,e){t&&t.i&&(L.delete(t),t.i(e))}function F(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),undefined.c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function C(t){t&&t.c()}function G(t,n,l,s){const{fragment:r,on_mount:a,on_destroy:c,after_update:u}=t.$$;r&&r.m(n,l),s||K((()=>{const n=a.map(e).filter(i);c?c.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(K)}function R(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(e,i,l,s,a,c,u,d=[-1]){const h=r;w(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(h?h.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:i.target||h.$$.root};u&&u(f.root);let p=!1;if(f.ctx=l?l(e,i.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=i)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](i),p&&function(t,e){-1===t.$$.dirty[0]&&(T.push(t),M(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);f.fragment&&f.fragment.l(t),t.forEach(g)}else f.fragment&&f.fragment.c();i.intro&&A(e.$$.fragment),G(e,i.target,i.anchor,i.customElement),W()}w(h)}class D{$destroy(){R(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(e){let n,o,i,l,s,r,a,c,$,w;return{c(){n=h("span"),o=f(e[0]),i=f(":"),l=p(),s=h("label"),r=h("input"),a=p(),c=h("span"),v(r,"type","checkbox"),v(r,"class","svelte-1j727hj"),v(c,"class","slider svelte-1j727hj"),v(s,"class","switch svelte-1j727hj")},m(t,g){d(t,n,g),u(n,o),u(n,i),d(t,l,g),d(t,s,g),u(s,r),e[4](r),u(s,a),u(s,c),$||(w=m(r,"click",e[3]),$=!0)},p(t,[e]){1&e&&y(o,t[0])},i:t,o:t,d(t){t&&g(n),t&&g(l),t&&g(s),e[4](null),$=!1,w()}}}function O(t,e,n){let o,{label:i}=e;return t.$$set=t=>{"label"in t&&n(0,i=t.label)},[i,o,function(){o.click()},function(e){S.call(this,t,e)},function(t){k[t?"unshift":"push"]((()=>{o=t,n(1,o)}))}]}class B extends D{constructor(t){super(),z(this,t,O,q,l,{label:0,click:2})}get click(){return this.$$.ctx[2]}}const H=[];function Y(e,n=t){let o;const i=new Set;function s(t){if(l(e,t)&&(e=t,o)){const t=!H.length;for(const t of i)t[1](),H.push(t,e);if(t){for(let t=0;t<H.length;t+=2)H[t][0](H[t+1]);H.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(l,r=t){const a=[l,r];return i.add(a),1===i.size&&(o=n(s)||t),l(e),()=>{i.delete(a),0===i.size&&(o(),o=null)}}}}const Z=Y(!1),J=Y(!1);function Q(t){let e,n,o,i,l,r,a,c,f,m,y,$,w,x;c=new B({props:{label:"Skills Mode"}}),t[4](c),c.$on("click",t[2]);return w=new B({props:{label:"Imperial Mode"}}),t[5](w),w.$on("click",t[3]),{c(){var t,u;e=h("div"),n=h("img"),i=p(),l=h("input"),r=p(),a=h("div"),C(c.$$.fragment),f=p(),m=h("br"),y=h("br"),$=p(),C(w.$$.fragment),t=n.src,u=o="./media/GrayGearIcon.png",s||(s=document.createElement("a")),s.href=u,t!==s.href&&v(n,"src","./media/GrayGearIcon.png"),v(n,"alt","Toggle Settings"),v(n,"class","gear-icon svelte-t0nrcw"),v(l,"class","settings-button svelte-t0nrcw"),v(l,"type","checkbox"),v(a,"class","settings-wrapper svelte-t0nrcw"),v(e,"class","settings-panel svelte-t0nrcw")},m(t,o){d(t,e,o),u(e,n),u(e,i),u(e,l),u(e,r),u(e,a),G(c,a,null),u(a,f),u(a,m),u(a,y),u(a,$),G(w,a,null),x=!0},p(t,[e]){c.$set({});w.$set({})},i(t){x||(A(c.$$.fragment,t),A(w.$$.fragment,t),x=!0)},o(t){F(c.$$.fragment,t),F(w.$$.fragment,t),x=!1},d(n){n&&g(e),t[4](null),R(c),t[5](null),R(w)}}}function V(t,e,n){let o,i,l,s;a(t,J,(t=>n(6,o=t))),a(t,Z,(t=>n(7,i=t)));function r(){localStorage.setItem("settings",`skills=${i}/imperial=${o}`)}return b((()=>{localStorage.getItem("settings")||r(),function(){const t=/skills=((?:false)|(?:true))\/imperial=((?:false)|(?:true))/,e=localStorage.getItem("settings");t.test(e)||r();const n=t.exec(e);"true"==n[1]&&l.click(),"true"==n[2]&&s.click()}()})),[l,s,()=>{c(Z,i=!i,i),r()},()=>{c(J,o=!o,o),r()},function(t){k[t?"unshift":"push"]((()=>{l=t,n(0,l)}))},function(t){k[t?"unshift":"push"]((()=>{s=t,n(1,s)}))}]}class X extends D{constructor(t){super(),z(this,t,V,Q,l,{})}}function tt(e){let n,o,l,s;return{c(){n=h("button"),o=f(e[0]),v(n,"class","svelte-miff50")},m(t,r){d(t,n,r),u(n,o),l||(s=m(n,"click",(function(){i(e[1])&&e[1].apply(this,arguments)})),l=!0)},p(t,[n]){e=t,1&n&&y(o,e[0])},i:t,o:t,d(t){t&&g(n),l=!1,s()}}}function et(t,e,n){let{label:o}=e,{onclick:i}=e;return t.$$set=t=>{"label"in t&&n(0,o=t.label),"onclick"in t&&n(1,i=t.onclick)},[o,i]}class nt extends D{constructor(t){super(),z(this,t,et,tt,l,{label:0,onclick:1})}}const ot=713.74;class it{constructor(t,e,n,o=1){this.toUnfinished=()=>new it(this.r+40,this.g+40,this.b+40,this.a),this.toTransparent=()=>new it(this.r,this.g,this.b,.1),this.toString=()=>`rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`,this.r=t,this.g=e,this.b=n,this.a=o}}const lt=new it(255,255,0),st=new it(255,0,0),rt=new it(0,0,255),at=new it(255,0,255),ct="rgba(155, 155, 155, 0.5)";function ut(t,e,n,o,i,l){l.beginPath(),l.arc(t,e,n,0,2*Math.PI,!1),l.fillStyle=o,o&&l.fill(),l.lineWidth=5,l.strokeStyle=i,i&&l.stroke(),l.closePath()}function dt(t,e,n,o){o.lineWidth=1,ut(t,e,13,null,n,o),ut(t,e,5,n,null,o)}function gt(t,e,n,o){const i=ot/3,l=ot/6;o.strokeStyle=n,o.lineCap="butt",o.lineWidth=10,o.beginPath(),o.moveTo(t+l/10,e+i/8),o.lineTo(t+l-l/10,e+i/8),o.lineTo(t+l-l/10,e+i/8*7),o.lineTo(t+l/10,e+i/8*7),o.lineTo(t+l/10,e+i/8-5),o.stroke(),o.closePath(),o.fillStyle="rgba(255, 255, 255, 0.12)",o.fillRect(t,e,l,i),o.strokeStyle="rgb(0, 0, 0)",o.lineWidth=2,o.beginPath(),o.moveTo(t+l+1,e),o.lineTo(t+l+1,e+i),o.moveTo(t-1,e),o.lineTo(t-1,e+i),o.stroke(),o.closePath()}var ht,ft;let pt=!1;Z.subscribe((t=>pt=t));class mt{constructor(t,e,n,o){this.x=t,this.y=e,this.rotation=n,this.variation=o}moveTo(t,e){this.x=t,this.y=e}rotateTo(t){this.rotation=t}render(t){throw new Error("Unimplemented")}pointInside(t,e){throw new Error("Unimplemented")}encode(){throw new Error("Unimplemented")}static decode(t){throw new Error("Unimplemented")}static isEncode(t){throw new Error("Unimplemented")}}class vt extends mt{constructor(){super(...arguments),this.pointInside=(t,e)=>(t-this.x)**2+(e-this.y)**2<=25.94**2}render(t){if(pt)switch(this.variation){case 0:t.fillStyle=lt.toString();break;case 1:t.fillStyle=rt.toString();break;case 2:t.fillStyle=st.toString()}else switch(this.variation){case 0:t.fillStyle=lt.toString();break;case 1:t.fillStyle=st.toString();break;case 2:t.fillStyle=rt.toString()}let e=this.rotation+14;t.strokeStyle="rgb(50, 50, 50)",t.lineWidth=3,function(t,e,n,o,i,l){const s=2*Math.PI/o,r=Math.PI+i/360*(2*Math.PI);l.beginPath();for(let i=0;i<=o;i++){const o=i*s+r;l.lineTo(t+n*Math.cos(o),e+n*Math.sin(o))}l.fill(),l.stroke(),l.closePath()}(this.x,this.y,25.94,7,e,t)}encode(){return`mogo-${this.x.toFixed(2)}-${this.y.toFixed(2)}-${this.rotation.toFixed(0)}-${this.variation}`}static decode(t){const e=this.regex.exec(t).groups;return new vt(+e.x,+e.y,+e.rotation,+e.variation)}}ht=vt,vt.regex=/mogo-(?<x>(?:\d|\.)+)-(?<y>(?:\d|\.)+)-(?<rotation>(?:\d|\.)+)-(?<variation>\d)/,vt.isEncode=t=>ht.regex.test(t);class yt extends mt{constructor(t,e){super(t,e,0,0),this.pointInside=(t,e)=>(t-this.x)**2+(e-this.y)**2<=196}render(t){t.lineWidth=2,ut(this.x,this.y,6,"rgba(0, 0, 0, 0)",at.toString(),t)}encode(){return`ring-${this.x.toFixed(2)}-${this.y.toFixed(2)}`}static decode(t){const e=this.regex.exec(t).groups;return new yt(+e.x,+e.y)}}ft=yt,yt.regex=/ring-(?<x>(?:\d|\.)+)-(?<y>(?:\d|\.)+)/,yt.isEncode=t=>ft.regex.test(t);const $t=713.74,wt=Y(new Array),xt=Y([new vt(356.87,178.435,180,0),new vt(356.87,356.87,0,0),new vt(356.87,178.435*3,0,0),new vt(178.435,$t/12*11,270,1),new vt($t/12*1,$t/6*2,0,1),new vt(535.305,$t/12*1,90,2),new vt($t/12*11,$t/3*2,180,2),new yt(356.87,29.708333333333332),new yt(356.87,59.416666666666664),new yt(356.87,89.125),new yt(356.87,$t/6),new yt(386.2083333333333,$t/6),new yt(415.91666666666663,$t/6),new yt(445.625,$t/6),new yt(475.3333333333333,$t/6),new yt(356.87,237.66666666666666),new yt(356.87,267.375),new yt(356.87,297.0833333333333),new yt(356.87,475.3333333333333),new yt(356.87,445.625),new yt(356.87,445.625),new yt(356.87,415.91666666666663),new yt(356.87,594.1666666666666),new yt(356.87,623.875),new yt(356.87,653.5833333333333),new yt(356.87,683.2916666666666),new yt(326.79166666666663,594.1666666666666),new yt(297.0833333333333,594.1666666666666),new yt(267.375,594.1666666666666),new yt(237.66666666666666,594.1666666666666),new yt(475.3333333333333,356.87),new yt(490.1875,356.87),new yt(475.3333333333333,341.6458333333333),new yt(460.47916666666663,356.87),new yt(475.3333333333333,371.35416666666663),new yt(475.3333333333333,475.3333333333333),new yt(490.1875,475.3333333333333),new yt(475.3333333333333,460.47916666666663),new yt(460.47916666666663,475.3333333333333),new yt(475.3333333333333,490.1875),new yt(237.66666666666666,356.87),new yt(252.52083333333331,356.87),new yt(222.8125,356.87),new yt(237.66666666666666,341.6458333333333),new yt(237.66666666666666,371.35416666666663),new yt(237.66666666666666,237.66666666666666),new yt(237.66666666666666,222.8125),new yt(252.52083333333331,237.66666666666666),new yt(237.66666666666666,252.52083333333331),new yt(222.8125,237.66666666666666)]);function bt(t,e,n){var o;t=`slot-${t}`;let i="";e.forEach((t=>{i+=t.x.toFixed(2)+"-",i+=t.y.toFixed(2)+"-",i+=t.step.toFixed(0),i+="/"})),i+="|",n.forEach((t=>{i+=t.encode()+"/"})),window.localStorage.setItem(t,i);const l=null===(o=localStorage.getItem("all-slots-list"))||void 0===o?void 0:o.split("|");l?l.includes(t)||(l.push(t),localStorage.setItem("all-slots-list",l.join("|"))):localStorage.setItem("all-slots-list",t)}async function St(t){localStorage.getItem("all-slots-list")||localStorage.setItem("all-slots-list","slot-slot1");const e=window.localStorage.getItem(`slot-${t}`);let n=null==e?void 0:e.split("|");const o=new Array,i=new Array;null==e&&(n="|mogo-356.50-178.25-180-0/mogo-356.50-356.50-0-0/mogo-356.50-534.75-0-0/mogo-178.25-653.58-270-1/mogo-59.42-237.67-0-1/mogo-534.75-59.42-90-2/mogo-653.58-475.33-180-2/ring-356.50-29.71/ring-356.50-59.42/ring-356.50-89.13/ring-356.50-118.83/ring-386.21-118.83/ring-415.92-118.83/ring-445.63-118.83/ring-475.33-118.83/ring-356.50-237.67/ring-356.50-267.38/ring-356.50-297.08/ring-356.50-475.33/ring-356.50-445.63/ring-356.50-445.63/ring-356.50-415.92/ring-356.50-594.17/ring-356.50-623.88/ring-356.50-653.58/ring-356.50-683.29/ring-326.79-594.17/ring-297.08-594.17/ring-267.38-594.17/ring-237.67-594.17/ring-475.33-356.50/ring-490.19-356.50/ring-475.33-341.65/ring-460.48-356.50/ring-475.33-371.35/ring-475.33-475.33/ring-490.19-475.33/ring-475.33-460.48/ring-460.48-475.33/ring-475.33-490.19/ring-237.67-356.50/ring-252.52-356.50/ring-222.81-356.50/ring-237.67-341.65/ring-237.67-371.35/ring-237.67-237.67/ring-237.67-222.81/ring-252.52-237.67/ring-237.67-252.52/ring-222.81-237.67/".split("|"));let l=n[0].split("/"),s=n[1].split("/");""==l[l.length-1]&&l.pop(),""==s[s.length-1]&&s.pop(),l.forEach((t=>{let e=t.split("-"),n=+e[0],i=+e[1],l=+e[2];isNaN(n)||isNaN(i)||o.push({x:n,y:i,step:l})})),s.forEach((t=>{if(!t)return;let e;yt.isEncode(t)&&(e=yt.decode(t)),vt.isEncode(t)&&(e=vt.decode(t)),e&&i.push(e)})),wt.set(o),xt.set(i)}let Tt=Y("slot1");function kt(e){let n;return{c(){n=h("canvas"),v(n,"width","863.74"),v(n,"height","713.74"),v(n,"tabindex","0"),v(n,"class","svelte-pj4gtz")},m(t,o){d(t,n,o),e[1](n)},p:t,i:t,o:t,d(t){t&&g(n),e[1](null)}}}function Et(t,e,n){let o,i,l,s,r;return a(t,Tt,(t=>n(2,o=t))),a(t,wt,(t=>n(3,i=t))),a(t,J,(t=>n(4,l=t))),a(t,xt,(t=>n(5,s=t))),b((()=>{const t=713.74,e=[new it(210,10,10),new it(210,110,10),new it(210,210,10),new it(10,210,10),new it(10,210,110),new it(10,210,210),new it(10,110,210),new it(10,10,210),new it(110,10,210),new it(210,10,210),new it(210,10,110)];const n=document.getElementById("slots-list");r.focus();const a=t/48,u=r.getContext("2d");let d=new Array,g={array:"none",index:NaN},h=0,f=0,p=!1,m=0,v=0,y=!1,$=!1,w=!1,x=0;r.addEventListener("mousedown",(t=>{0==t.button&&(p=!0)})),r.addEventListener("mouseup",(e=>{0==e.button&&(p=!1,$||(i.push({x:m,y:v,step:x}),d=[]),"gameobjects"==g.array&&m>t&&v<=160&&s.splice(g.index,1),"points"==g.array&&m>t&&v<=160&&i.splice(g.index,1),i.length>0&&i[i.length-1].x>t&&i[i.length-1].y<=160&&i.splice(i.length-1,1),g={array:"none",index:NaN}),bt(o,i,s)})),r.addEventListener("contextmenu",(e=>{e.preventDefault(),m<t&&s.push(new yt(m,v)),bt(o,i,s)})),r.addEventListener("mousemove",(e=>{const n=(e.x-r.offsetLeft)/r.clientWidth*r.width,o=(e.y-r.offsetTop)/r.clientHeight*r.height;switch(m=e.ctrlKey?n:e.altKey?h%a:0+Math.round((n-(e.altKey?h%a:0))/a)*a,v=e.ctrlKey?o:e.altKey?f%a:0+Math.round((o-(e.altKey?f%a:0))/a)*a,m=m<=t||v<160?m:Math.min(m,t),e.shiftKey&&p&&"none"==g.array?(s.forEach(((t,e)=>{t.pointInside(n,o)&&(g={array:"gameobjects",index:e})})),i.forEach(((t,e)=>{(n-t.x)**2+(o-t.y)**2<=256&&(g={array:"points",index:e})}))):e.shiftKey||(g={array:"none",index:NaN}),g.array){case"gameobjects":c(xt,s[g.index].x=m,s),c(xt,s[g.index].y=v,s);break;case"points":c(wt,i[g.index].x=m,i),c(wt,i[g.index].y=v,i)}})),r.addEventListener("keydown",(t=>{if(t.ctrlKey&&"KeyZ"==t.code){const t=i.pop();t&&d.push(t)}if(t.ctrlKey&&"KeyY"==t.code){const t=d.pop();t&&i.push(t)}y=t.ctrlKey,$=t.shiftKey,w=t.altKey,/\d/.test(t.key)&&0!=+t.key?x=+t.key-1:0==+t.key&&(x=10),(y||$||w)&&t.preventDefault()})),r.addEventListener("keyup",(t=>{y=t.ctrlKey,$=t.shiftKey,w=t.altKey})),St(o),async function o(){var r,c,d,b,S,T,k,E,I,_,K,N,j,W,U,L,A,F,C,G,R,z,D,q,O;if(h=null!==(c=null===(r=i[i.length-1])||void 0===r?void 0:r.x)&&void 0!==c?c:0,f=null!==(b=null===(d=i[i.length-1])||void 0===d?void 0:d.y)&&void 0!==b?b:0,u.fillStyle="rgb(255, 50, 50)",u.fillRect(t,0,150,150),u.fillStyle="rgb(50, 50, 50)",u.fillRect(t,150,150,563.74),function(t,e,n){n.strokeStyle="rgb(255, 255, 255)",n.lineCap="round",n.lineWidth=5,n.beginPath(),n.moveTo(t+37.5,e+37.5),n.lineTo(t+112.5,e+37.5),n.moveTo(t+50,e+37.5),n.lineTo(t+50,e+112.5),n.moveTo(t+62.5,e+37.5),n.lineTo(t+62.5,e+112.5),n.moveTo(t+75,e+37.5),n.lineTo(t+75,e+112.5),n.moveTo(t+87.5,e+37.5),n.lineTo(t+87.5,e+112.5),n.moveTo(t+100,e+37.5),n.lineTo(t+100,e+112.5),n.moveTo(t+50,e+112.5),n.lineTo(t+100,e+112.5),n.moveTo(t+62.5,e+37.5),n.lineTo(t+62.5,e+37.5-10),n.lineTo(t+87.5,e+37.5-10),n.lineTo(t+87.5,e+37.5),n.stroke(),n.closePath()}(t,0,u),function(t){t.fillStyle="rgb(125, 125, 125)",t.lineWidth=5,t.fillRect(0,0,ot,ot);let e=ot/6;t.lineWidth=3,t.strokeStyle=ct,t.beginPath();for(let n=0;n<6;n++)t.moveTo(e*n,0),t.lineTo(e*n,ot);for(let n=0;n<6;n++)t.moveTo(0,e*n),t.lineTo(ot,e*n);t.stroke(),t.strokeStyle="rgb(255, 255, 255)",t.beginPath(),t.moveTo(ot/3,0),t.lineTo(ot/3,ot),t.moveTo(354.87,0),t.lineTo(354.87,ot),t.moveTo(358.87,0),t.lineTo(358.87,ot),t.moveTo(ot/3*2,0),t.lineTo(ot/3*2,ot),t.moveTo(ot/6*4,ot/6),t.lineTo(ot/6*5,0),t.moveTo(ot/6*2,ot/6*5),t.lineTo(ot/6*1,ot),t.stroke(),t.closePath(),gt(0,ot/6*2,st.toString(),t),gt(ot/6*5,ot/6*2,rt.toString(),t)}(u),s.forEach((t=>t.render(u))),!y){u.lineWidth=1,u.strokeStyle=ct.toString(),u.beginPath();for(let e=0;e<48;e++)u.moveTo(a*e+(w?h%a:0),0),u.lineTo(a*e+(w?h%a:0),t);for(let e=0;e<48;e++)u.moveTo(0,a*e+(w?f%a:0)),u.lineTo(t,a*e+(w?f%a:0));u.stroke(),u.closePath()}for(let t=0;t<i.length;t++){g.index==t&&"points"==g.array?dt(i[t].x,i[t].y,e[i[t].step].toUnfinished().toString(),u):dt(i[t].x,i[t].y,e[i[t].step].toString(),u),u.strokeStyle=g.index!=t&&g.index+1!=t||"points"!=g.array?e[i[t].step].toString():e[i[t].step].toUnfinished().toString(),u.lineWidth=3,u.beginPath(),u.moveTo(null!==(T=null===(S=i[t-1])||void 0===S?void 0:S.x)&&void 0!==T?T:i[t].x,null!==(E=null===(k=i[t-1])||void 0===k?void 0:k.y)&&void 0!==E?E:i[t].y),u.lineTo(i[t].x,i[t].y),u.stroke(),u.closePath();let n=180*Math.atan2(i[t].y-(null===(I=i[t+1])||void 0===I?void 0:I.y),i[t].x-(null===(_=i[t+1])||void 0===_?void 0:_.x))/Math.PI-180*Math.atan2((null===(K=i[t-1])||void 0===K?void 0:K.y)-(null===(N=i[t])||void 0===N?void 0:N.y),(null===(j=i[t-1])||void 0===j?void 0:j.x)-i[t].x)/Math.PI;0==t&&(n=180*Math.atan2(i[0].y-(null===(W=i[1])||void 0===W?void 0:W.y),i[0].x-(null===(U=i[1])||void 0===U?void 0:U.x))/Math.PI),isNaN(n)||u.fillText(`${Math.round(n)}°`,i[t].x+20,i[t].y+20),u.fillStyle=g.index!=t&&g.index-1!=t||"points"!=g.array?e[null!==(C=null===(F=i[t+1])||void 0===F?void 0:F.step)&&void 0!==C?C:i[t].step].toString():e[null!==(A=null===(L=i[t+1])||void 0===L?void 0:L.step)&&void 0!==A?A:i[t].step].toUnfinished().toString();const o=Math.sqrt((i[t].x-(null===(G=i[t+1])||void 0===G?void 0:G.x))**2+(i[t].y-(null===(R=i[t+1])||void 0===R?void 0:R.y))**2)/2;isNaN(o)||u.fillText(`${Math.round(100*(l?(O=o,.393701*O):o))/100}${l?"in":"cm"}`,i[t].x-(i[t].x-(null===(z=i[t+1])||void 0===z?void 0:z.x))/2,i[t].y-(i[t].y-(null===(D=i[t+1])||void 0===D?void 0:D.y))/2-20)}p&&!$&&"none"==g.array&&(u.lineWidth=3,u.strokeStyle=e[x].toUnfinished().toString(),u.beginPath(),0==i.length?u.moveTo(m,v):u.moveTo(h,f),u.lineTo(m,v),u.stroke(),u.closePath(),dt(m,v,e[x].toUnfinished().toString(),u));const B=null===(q=localStorage.getItem("all-slots-list"))||void 0===q?void 0:q.split("|").map((t=>t.substring(5)));B&&(n.textContent="Save Slots: "+B.join(", ")),await(M(),P),setTimeout(o,0)}()})),[r,function(t){k[t?"unshift":"push"]((()=>{r=t,n(0,r)}))}]}class It extends D{constructor(t){super(),z(this,t,Et,kt,l,{})}}function Pt(e){let n,i,l;return{c(){n=h("input"),v(n,"class","svelte-14eqe3k")},m(t,o){d(t,n,o),$(n,e[0]),i||(l=[m(n,"input",e[2]),m(n,"input",e[1])],i=!0)},p(t,[e]){1&e&&n.value!==t[0]&&$(n,t[0])},i:t,o:t,d(t){t&&g(n),i=!1,o(l)}}}function _t(t,e,n){let{value:o}=e;return t.$$set=t=>{"value"in t&&n(0,o=t.value)},[o,function(e){S.call(this,t,e)},function(){o=this.value,n(0,o)}]}class Mt extends D{constructor(t){super(),z(this,t,_t,Pt,l,{value:0})}}function Kt(t){let e,n,o,i,l,s,r,a,c,f,m,y,$,w,x,b,S,T;function E(e){t[3](e)}s=new nt({props:{label:"Delete Save",onclick:t[1]}}),a=new nt({props:{label:"Delete All Saves",onclick:t[2]}});let P={};return void 0!==t[0]&&(P.value=t[0]),f=new Mt({props:P}),k.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(f,"value",E))),x=new It({}),S=new X({}),{c(){e=h("div"),e.innerHTML='<a href="https://github.com/iseau395/vrc-map" target="_blank" rel="noopener noreferrer" class="svelte-s290ti">Github Repository</a>',n=p(),o=h("div"),i=h("div"),l=h("form"),C(s.$$.fragment),r=p(),C(a.$$.fragment),c=p(),C(f.$$.fragment),y=p(),$=h("p"),w=p(),C(x.$$.fragment),b=p(),C(S.$$.fragment),v(e,"class","left-panel svelte-s290ti"),v($,"id","slots-list"),v(o,"class","map-panel svelte-s290ti")},m(t,g){d(t,e,g),d(t,n,g),d(t,o,g),u(o,i),u(i,l),G(s,l,null),u(l,r),G(a,l,null),u(l,c),G(f,l,null),u(i,y),u(i,$),u(i,w),G(x,i,null),d(t,b,g),G(S,t,g),T=!0},p(t,[e]){const n={};var o;!m&&1&e&&(m=!0,n.value=t[0],o=()=>m=!1,I.push(o)),f.$set(n)},i(t){T||(A(s.$$.fragment,t),A(a.$$.fragment,t),A(f.$$.fragment,t),A(x.$$.fragment,t),A(S.$$.fragment,t),T=!0)},o(t){F(s.$$.fragment,t),F(a.$$.fragment,t),F(f.$$.fragment,t),F(x.$$.fragment,t),F(S.$$.fragment,t),T=!1},d(t){t&&g(e),t&&g(n),t&&g(o),R(s),R(a),R(f),R(x),t&&g(b),R(S,t)}}}function Nt(t,e,n){let o,i,l;a(t,Tt,(t=>n(0,o=t))),a(t,xt,(t=>n(5,i=t))),a(t,wt,(t=>n(6,l=t)));let s=o;const r=Tt.subscribe((()=>{var t;(null===(t=localStorage.getItem("all-slots-list"))||void 0===t?void 0:t.split("|")).includes(s)&&bt(s,l,i),s=o,St(o)}));var u;return u=()=>r(),x().$$.on_destroy.push(u),[o,function(){var t,e;localStorage.removeItem(`slot-${o}`);const n=null===(t=localStorage.getItem("all-slots-list"))||void 0===t?void 0:t.split("|");n&&localStorage.setItem("all-slots-list",n.filter((t=>t!=`slot-${o}`)).join("|")),c(Tt,o=null!==(e=n[0])&&void 0!==e?e:"slot1",o),St(o)},function(){const t=localStorage.getItem("settings");localStorage.clear(),localStorage.setItem("settings",t),c(Tt,o="slot1",o),St(o)},function(t){o=t,Tt.set(o)}]}return new class extends D{constructor(t){super(),z(this,t,Nt,Kt,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
