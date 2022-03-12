var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let r,l;function c(t,e){return t!=t?e==e:t!==e}function a(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function u(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function d(t,e,n){return t.set(n),e}function f(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function y(){return m(" ")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function w(t){l=t}function k(){if(!l)throw new Error("Function called outside component initialization");return l}function S(t){k().$$.on_mount.push(t)}function T(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const _=[],j=[],E=[],I=[],P=Promise.resolve();let M=!1;function A(){M||(M=!0,P.then(U))}function K(t){E.push(t)}function N(t){I.push(t)}const R=new Set;let W=0;function U(){const t=l;do{for(;W<_.length;){const t=_[W];W++,w(t),F(t.$$)}for(w(null),_.length=0,W=0;j.length;)j.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];R.has(e)||(R.add(e),e())}E.length=0}while(_.length);for(;I.length;)I.pop()();M=!1,R.clear(),w(t)}function F(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}const L=new Set;let O;function B(){O={r:0,c:[],p:O}}function D(){O.r||o(O.c),O=O.p}function q(t,e){t&&t.i&&(L.delete(t),t.i(e))}function C(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),O.c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function z(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function H(t){t&&t.c()}function G(t,n,s,r){const{fragment:l,on_mount:c,on_destroy:a,after_update:u}=t.$$;l&&l.m(n,s),r||K((()=>{const n=c.map(e).filter(i);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(K)}function V(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,i,s,r,c,a,u,d=[-1]){const f=l;w(e);const h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:i.target||f.$$.root};u&&u(h.root);let p=!1;if(h.ctx=s?s(e,i.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=i)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](i),p&&function(t,e){-1===t.$$.dirty[0]&&(_.push(t),A(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!r&&r(h.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);h.fragment&&h.fragment.l(t),t.forEach(g)}else h.fragment&&h.fragment.c();i.intro&&q(e.$$.fragment),G(e,i.target,i.anchor,i.customElement),U()}w(f)}class Z{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const J=1427.48;class Q{constructor(t,e,n,o=1){this.toUnfinished=()=>new Q(this.r+40,this.g+40,this.b+40,this.a),this.toTransparent=()=>new Q(this.r,this.g,this.b,.1),this.toString=()=>`rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`,this.r=t,this.g=e,this.b=n,this.a=o}}const X=new Q(255,255,0),tt=new Q(255,0,0),et=new Q(0,0,255),nt=new Q(255,0,255),ot="rgba(155, 155, 155, 0.5)";function it(t,e,n,o,i,s){s.beginPath(),s.arc(t,e,n,0,2*Math.PI,!1),s.fillStyle=o,o&&s.fill(),s.strokeStyle=i,i&&s.stroke(),s.closePath()}function st(t,e,n,o){o.lineWidth=1,it(t,e,13,null,n,o),it(t,e,5,n,null,o)}function rt(t,e,n,o){const i=J/3,s=J/6;o.strokeStyle=n,o.lineCap="butt",o.lineWidth=20,o.beginPath(),o.moveTo(t+s/10,e+i/8),o.lineTo(t+s-s/10,e+i/8),o.lineTo(t+s-s/10,e+i/8*7),o.lineTo(t+s/10,e+i/8*7),o.lineTo(t+s/10,e+i/8-10),o.stroke(),o.closePath(),o.fillStyle="rgba(255, 255, 255, 0.12)",o.fillRect(t,e,s,i),o.strokeStyle="rgb(0, 0, 0)",o.lineWidth=2,o.beginPath(),o.moveTo(t+s+1,e),o.lineTo(t+s+1,e+i),o.moveTo(t-1,e),o.lineTo(t-1,e+i),o.stroke(),o.closePath()}const lt=[];function ct(e,n=t){let o;const i=new Set;function r(t){if(s(e,t)&&(e=t,o)){const t=!lt.length;for(const t of i)t[1](),lt.push(t,e);if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(s,l=t){const c=[s,l];return i.add(c),1===i.size&&(o=n(r)||t),s(e),()=>{i.delete(c),0===i.size&&(o(),o=null)}}}}const at=ct(!1),ut=ct(!1);var dt,ft;let ht=!1;at.subscribe((t=>ht=t));class gt{constructor(t,e,n,o){this.x=t,this.y=e,this.rotation=n,this.variation=o}moveTo(t,e){this.x=t,this.y=e}rotateTo(t){this.rotation=t}render(t){throw new Error("Unimplemented")}pointInside(t,e){throw new Error("Unimplemented")}encode(){throw new Error("Unimplemented")}static decode(t){throw new Error("Unimplemented")}static isEncode(t){throw new Error("Unimplemented")}}class pt extends gt{constructor(){super(...arguments),this.pointInside=(t,e)=>(t-this.x)**2+(e-this.y)**2<=51.88**2}render(t){if(ht)switch(this.variation){case 0:t.fillStyle=X.toString();break;case 1:t.fillStyle=et.toString();break;case 2:t.fillStyle=tt.toString()}else switch(this.variation){case 0:t.fillStyle=X.toString();break;case 1:t.fillStyle=tt.toString();break;case 2:t.fillStyle=et.toString()}let e=this.rotation+14;t.strokeStyle="rgb(50, 50, 50)",t.lineWidth=3,function(t,e,n,o,i,s){const r=2*Math.PI/o,l=Math.PI+i/360*(2*Math.PI);s.beginPath();for(let i=0;i<=o;i++){const o=i*r+l;s.lineTo(t+n*Math.cos(o),e+n*Math.sin(o))}s.fill(),s.stroke(),s.closePath()}(this.x,this.y,65.8876,7,e,t)}encode(){return`mogo-${this.x.toFixed(2)}-${this.y.toFixed(2)}-${this.rotation.toFixed(0)}-${this.variation}`}static decode(t){const e=this.regex.exec(t).groups;return new pt(+e.x,+e.y,+e.rotation,+e.variation)}}dt=pt,pt.regex=/mogo-(?<x>(?:\d|\.)+)-(?<y>(?:\d|\.)+)-(?<rotation>(?:\d|\.)+)-(?<variation>\d)/,pt.isEncode=t=>dt.regex.test(t);class mt extends gt{constructor(t,e){super(t,e,0,0),this.pointInside=(t,e)=>(t-this.x)**2+(e-this.y)**2<=412.9024}render(t){t.lineWidth=10.16,it(this.x,this.y,10.16,"rgba(0, 0, 0, 0)",nt.toString(),t)}encode(){return`ring-${this.x.toFixed(2)}-${this.y.toFixed(2)}`}static decode(t){const e=this.regex.exec(t).groups;return new mt(+e.x,+e.y)}}ft=mt,mt.regex=/ring-(?<x>(?:\d|\.)+)-(?<y>(?:\d|\.)+)/,mt.isEncode=t=>ft.regex.test(t);const yt=713.74,$t=ct(new Array),vt=ct([new pt(356.87,178.435,180,0),new pt(356.87,356.87,0,0),new pt(356.87,178.435*3,0,0),new pt(178.435,yt/12*11,270,1),new pt(yt/12*1,yt/6*2,0,1),new pt(535.305,yt/12*1,90,2),new pt(yt/12*11,yt/3*2,180,2),new mt(356.87,29.708333333333332),new mt(356.87,59.416666666666664),new mt(356.87,89.125),new mt(356.87,yt/6),new mt(386.2083333333333,yt/6),new mt(415.91666666666663,yt/6),new mt(445.625,yt/6),new mt(475.3333333333333,yt/6),new mt(356.87,237.66666666666666),new mt(356.87,267.375),new mt(356.87,297.0833333333333),new mt(356.87,475.3333333333333),new mt(356.87,445.625),new mt(356.87,445.625),new mt(356.87,415.91666666666663),new mt(356.87,594.1666666666666),new mt(356.87,623.875),new mt(356.87,653.5833333333333),new mt(356.87,683.2916666666666),new mt(326.79166666666663,594.1666666666666),new mt(297.0833333333333,594.1666666666666),new mt(267.375,594.1666666666666),new mt(237.66666666666666,594.1666666666666),new mt(475.3333333333333,356.87),new mt(490.1875,356.87),new mt(475.3333333333333,341.6458333333333),new mt(460.47916666666663,356.87),new mt(475.3333333333333,371.35416666666663),new mt(475.3333333333333,475.3333333333333),new mt(490.1875,475.3333333333333),new mt(475.3333333333333,460.47916666666663),new mt(460.47916666666663,475.3333333333333),new mt(475.3333333333333,490.1875),new mt(237.66666666666666,356.87),new mt(252.52083333333331,356.87),new mt(222.8125,356.87),new mt(237.66666666666666,341.6458333333333),new mt(237.66666666666666,371.35416666666663),new mt(237.66666666666666,237.66666666666666),new mt(237.66666666666666,222.8125),new mt(252.52083333333331,237.66666666666666),new mt(237.66666666666666,252.52083333333331),new mt(222.8125,237.66666666666666)]);function xt(t,e,n){var o;let i="";e.forEach((t=>{i+=t.x.toFixed(2)+"-",i+=t.y.toFixed(2)+"-",i+=t.step.toFixed(0),i+="/"})),i+="|",n.forEach((t=>{i+=t.encode()+"/"})),localStorage.setItem(`slot-${t}`,i);const s=null===(o=localStorage.getItem("all-slots-list"))||void 0===o?void 0:o.split("|");s?s.includes(t)||(s.push(t),localStorage.setItem("all-slots-list",s.join("|"))):localStorage.setItem("all-slots-list",t)}async function bt(t){localStorage.getItem("all-slots-list")||localStorage.setItem("all-slots-list",t);const e=localStorage.getItem(`slot-${t}`);let n=null==e?void 0:e.split("|");const o=new Array,i=new Array;e||(n="|mogo-713.74-356.87-180-0/mogo-713.74-713.74-0-0/mogo-713.74-1070.61-0-0/mogo-356.87-1308.52-270-1/mogo-118.96-475.83-0-1/mogo-1070.61-118.96-90-2/mogo-1308.52-951.65-180-2/ring-713.74-59.48/ring-713.74-118.96/ring-713.74-178.44/ring-713.74-237.91/ring-773.22-237.91/ring-832.70-237.91/ring-892.17-237.91/ring-951.65-237.91/ring-713.74-475.83/ring-713.74-535.30/ring-713.74-594.78/ring-713.74-832.70/ring-713.74-892.17/ring-713.74-951.65/ring-713.74-1189.57/ring-713.74-1249.05/ring-713.74-1308.52/ring-713.74-1368.00/ring-654.26-1189.57/ring-594.78-1189.57/ring-535.30-1189.57/ring-475.83-1189.57/ring-951.65-713.74/ring-981.39-713.74/ring-921.91-713.74/ring-951.65-684.00/ring-951.65-743.48/ring-951.65-951.65/ring-981.39-951.65/ring-951.65-921.91/ring-921.91-951.65/ring-951.65-981.39/ring-475.83-713.74/ring-505.57-713.74/ring-475.83-684.00/ring-446.09-713.74/ring-475.83-743.48/ring-475.83-475.83/ring-475.83-505.57/ring-505.57-475.83/ring-475.83-446.09/ring-446.09-475.83/".split("|"));let s=n[0].split("/"),r=n[1].split("/");""==s[s.length-1]&&s.pop(),""==r[r.length-1]&&r.pop(),s.forEach((t=>{let e=t.split("-"),n=+e[0],i=+e[1],s=+e[2];isNaN(n)||isNaN(i)||o.push({x:n,y:i,step:s})})),r.forEach((t=>{if(!t)return;let e;mt.isEncode(t)&&(e=mt.decode(t)),pt.isEncode(t)&&(e=pt.decode(t)),e&&i.push(e)})),$t.set(o),vt.set(i)}let wt,kt,St=ct("slot1");var Tt;vt.subscribe((t=>wt=t)),$t.subscribe((t=>kt=t)),function(t){t[t.Add=0]="Add",t[t.Remove=1]="Remove",t[t.Move=2]="Move"}(Tt||(Tt={}));class _t{constructor(t,e){this.type=t,this.options=e}}function jt(t){const e="undos"==t?It.pop():Pt.pop();if(e)switch(e.type){case Tt.Add:switch(e.options.array){case"gameobjects":("undos"==t?Pt:It).push(new _t(Tt.Remove,{array:"gameobjects",key:e.options.key,object:wt[e.options.key]})),wt.splice(e.options.key,1),vt.set(wt);break;case"points":("undos"==t?Pt:It).push(new _t(Tt.Remove,{array:"points",key:e.options.key,object:kt[e.options.key]})),kt.splice(e.options.key,1),$t.set(kt)}break;case Tt.Remove:switch(e.options.array){case"gameobjects":("undos"==t?Pt:It).push(new _t(Tt.Add,{array:"gameobjects",key:e.options.key})),wt.splice(e.options.key,0,e.options.object),vt.set(wt);break;case"points":("undos"==t?Pt:It).push(new _t(Tt.Add,{array:"points",key:e.options.key})),kt.splice(e.options.key,0,e.options.object),$t.set(kt)}break;case Tt.Move:switch(e.options.array){case"gameobjects":{("undos"==t?Pt:It).push(new _t(Tt.Move,Object.assign(Object.assign({},e.options),{array:"gameobjects"})));const n=wt[e.options.key];n.x=e.options.old_x,n.y=e.options.old_y,wt[e.options.key]=n,vt.set(wt);break}case"points":{("undos"==t?Pt:It).push(new _t(Tt.Move,Object.assign(Object.assign({},e.options),{array:"points"})));const n=kt[e.options.key];n.x=e.options.old_x,n.y=e.options.old_y,kt[e.options.key]=n,$t.set(kt);break}}}}function Et(t,e){It.push(new _t(t,e)),Pt.length=0}const It=new Array,Pt=new Array;function Mt(e){let n;return{c(){n=p("canvas"),v(n,"width","1577.48"),v(n,"height","1427.48"),v(n,"tabindex","0"),v(n,"class","svelte-1of9l24")},m(t,o){h(t,n,o),e[1](n)},p:t,i:t,o:t,d(t){t&&g(n),e[1](null)}}}function At(t,e,n){let o,i,s,r,l;return a(t,$t,(t=>n(2,o=t))),a(t,ut,(t=>n(3,i=t))),a(t,vt,(t=>n(4,s=t))),a(t,St,(t=>n(5,r=t))),S((()=>{const t=1427.48,e=[new Q(210,10,10),new Q(210,110,10),new Q(210,210,10),new Q(10,210,10),new Q(10,210,110),new Q(10,210,210),new Q(10,110,210),new Q(10,10,210),new Q(110,10,210),new Q(210,10,210),new Q(210,10,110)];document.getElementById("slots-list"),l.focus();const n=t/48,c=l.getContext("2d");let a={array:"none",index:NaN,start_x:null,start_y:null},u=0,f=0,h=!1,g=0,p=0,m=!1,y=!1,$=!1,v=0;l.addEventListener("mousedown",(t=>{0==t.button&&(h=!0)})),l.addEventListener("mouseup",(e=>{if(0==e.button){if(h=!1,!y)return o.push({x:g,y:p,step:v}),void(g<t&&Et(Tt.Add,{array:"points",key:o.length-1}));"gameobjects"==a.array&&g>t&&p<=160&&(d(vt,s[a.index].x=a.start_x,s),d(vt,s[a.index].y=a.start_y,s),Et(Tt.Remove,{array:"gameobjects",key:a.index,object:s[a.index]}),s.splice(a.index,1)),"points"==a.array&&g>t&&p<=160&&(d($t,o[a.index].x=a.start_x,o),d($t,o[a.index].y=a.start_y,o),Et(Tt.Remove,{array:"points",key:a.index,object:o[a.index]}),o.splice(a.index,1)),g>t||Et(Tt.Move,{array:a.array,key:a.index,old_x:a.start_x,old_y:a.start_y}),a={array:"none",index:NaN,start_x:null,start_y:null}}xt(r,o,s)})),l.addEventListener("contextmenu",(e=>{e.preventDefault(),g<t&&(s.push(new mt(g,p)),Et(Tt.Add,{array:"gameobjects",key:s.length-1})),xt(r,o,s)})),l.addEventListener("mousemove",(e=>{const i=(e.x-l.offsetLeft)/l.clientWidth*l.width,r=(e.y-l.offsetTop)/l.clientHeight*l.height;switch(g=e.ctrlKey?i:e.altKey?u%n:0+Math.round((i-(e.altKey?u%n:0))/n)*n,p=e.ctrlKey?r:e.altKey?f%n:0+Math.round((r-(e.altKey?f%n:0))/n)*n,g=g<=t||p<160?g:Math.min(g,t),e.shiftKey&&h&&"none"==a.array?(s.forEach(((t,e)=>{t.pointInside(i,r)&&(a={array:"gameobjects",index:e,start_x:t.x,start_y:t.y})})),o.forEach(((t,e)=>{(i-t.x)**2+(r-t.y)**2<=256&&(a={array:"points",index:e,start_x:t.x,start_y:t.y})}))):e.shiftKey||(a={array:"none",index:NaN,start_x:null,start_y:null}),a.array){case"gameobjects":d(vt,s[a.index].x=g,s),d(vt,s[a.index].y=p,s);break;case"points":d($t,o[a.index].x=g,o),d($t,o[a.index].y=p,o)}})),l.addEventListener("keydown",(t=>{t.ctrlKey&&"KeyZ"==t.code&&jt("undos"),t.ctrlKey&&"KeyY"==t.code&&jt("redos"),m=t.ctrlKey,y=t.shiftKey,$=t.altKey,/\d/.test(t.key)&&0!=+t.key?v=+t.key-1:0==+t.key&&(v=10),(m||y||$)&&t.preventDefault()})),l.addEventListener("keyup",(t=>{m=t.ctrlKey,y=t.shiftKey,$=t.altKey})),bt("slot1"),async function r(){var l,d,x,b,w,k,S,T,_,j,E,I,M,K,N,R,W,U,F,L,O,B,D,q,C;if(u=null!==(d=null===(l=o[o.length-1])||void 0===l?void 0:l.x)&&void 0!==d?d:0,f=null!==(b=null===(x=o[o.length-1])||void 0===x?void 0:x.y)&&void 0!==b?b:0,c.fillStyle="rgb(255, 50, 50)",c.fillRect(t,0,150,150),c.fillStyle="rgb(50, 50, 50)",c.fillRect(t,150,150,1277.48),function(t,e,n){n.strokeStyle="rgb(255, 255, 255)",n.lineCap="round",n.lineWidth=5,n.beginPath(),n.moveTo(t+37.5,e+37.5),n.lineTo(t+112.5,e+37.5),n.moveTo(t+50,e+37.5),n.lineTo(t+50,e+112.5),n.moveTo(t+62.5,e+37.5),n.lineTo(t+62.5,e+112.5),n.moveTo(t+75,e+37.5),n.lineTo(t+75,e+112.5),n.moveTo(t+87.5,e+37.5),n.lineTo(t+87.5,e+112.5),n.moveTo(t+100,e+37.5),n.lineTo(t+100,e+112.5),n.moveTo(t+50,e+112.5),n.lineTo(t+100,e+112.5),n.moveTo(t+62.5,e+37.5),n.lineTo(t+62.5,e+37.5-10),n.lineTo(t+87.5,e+37.5-10),n.lineTo(t+87.5,e+37.5),n.stroke(),n.closePath()}(t,0,c),function(t){t.fillStyle="rgb(125, 125, 125)",t.lineWidth=5,t.fillRect(0,0,J,J);let e=J/6;t.lineWidth=3,t.strokeStyle=ot,t.beginPath();for(let n=0;n<6;n++)t.moveTo(e*n,0),t.lineTo(e*n,J);for(let n=0;n<6;n++)t.moveTo(0,e*n),t.lineTo(J,e*n);t.stroke(),t.strokeStyle="rgb(255, 255, 255)",t.beginPath(),t.moveTo(J/3,0),t.lineTo(J/3,J),t.moveTo(711.74,0),t.lineTo(711.74,J),t.moveTo(715.74,0),t.lineTo(715.74,J),t.moveTo(J/3*2,0),t.lineTo(J/3*2,J),t.moveTo(J/6*4,J/6),t.lineTo(J/6*5,0),t.moveTo(J/6*2,J/6*5),t.lineTo(J/6*1,J),t.stroke(),t.closePath(),rt(0,J/6*2,tt.toString(),t),rt(J/6*5,J/6*2,et.toString(),t)}(c),s.forEach((t=>t.render(c))),!m){c.lineWidth=1,c.strokeStyle=ot.toString(),c.beginPath();for(let e=0;e<48;e++)c.moveTo(n*e+($?u%n:0),0),c.lineTo(n*e+($?u%n:0),t);for(let e=0;e<48;e++)c.moveTo(0,n*e+($?f%n:0)),c.lineTo(t,n*e+($?f%n:0));c.stroke(),c.closePath()}for(let t=0;t<o.length;t++){a.index==t&&"points"==a.array?st(o[t].x,o[t].y,e[o[t].step].toUnfinished().toString(),c):st(o[t].x,o[t].y,e[o[t].step].toString(),c),c.strokeStyle=a.index!=t&&a.index+1!=t||"points"!=a.array?e[o[t].step].toString():e[o[t].step].toUnfinished().toString(),c.lineWidth=3,c.beginPath(),c.moveTo(null!==(k=null===(w=o[t-1])||void 0===w?void 0:w.x)&&void 0!==k?k:o[t].x,null!==(T=null===(S=o[t-1])||void 0===S?void 0:S.y)&&void 0!==T?T:o[t].y),c.lineTo(o[t].x,o[t].y),c.stroke(),c.closePath();let n=180*Math.atan2(o[t].y-(null===(_=o[t+1])||void 0===_?void 0:_.y),o[t].x-(null===(j=o[t+1])||void 0===j?void 0:j.x))/Math.PI-180*Math.atan2((null===(E=o[t-1])||void 0===E?void 0:E.y)-(null===(I=o[t])||void 0===I?void 0:I.y),(null===(M=o[t-1])||void 0===M?void 0:M.x)-o[t].x)/Math.PI;0==t&&(n=180*Math.atan2(o[0].y-(null===(K=o[1])||void 0===K?void 0:K.y),o[0].x-(null===(N=o[1])||void 0===N?void 0:N.x))/Math.PI),isNaN(n)||c.fillText(`${Math.round(n)}°`,o[t].x+20,o[t].y+20),c.fillStyle=a.index!=t&&a.index-1!=t||"points"!=a.array?e[null!==(F=null===(U=o[t+1])||void 0===U?void 0:U.step)&&void 0!==F?F:o[t].step].toString():e[null!==(W=null===(R=o[t+1])||void 0===R?void 0:R.step)&&void 0!==W?W:o[t].step].toUnfinished().toString();const s=Math.sqrt((o[t].x-(null===(L=o[t+1])||void 0===L?void 0:L.x))**2+(o[t].y-(null===(O=o[t+1])||void 0===O?void 0:O.y))**2)/2;isNaN(s)||c.fillText(`${Math.round(100*(i?(C=s,.393701*C):s))/100}${i?"in":"cm"}`,o[t].x-(o[t].x-(null===(B=o[t+1])||void 0===B?void 0:B.x))/2,o[t].y-(o[t].y-(null===(D=o[t+1])||void 0===D?void 0:D.y))/2-20)}h&&!y&&"none"==a.array&&(c.lineWidth=3,c.strokeStyle=e[v].toUnfinished().toString(),c.beginPath(),0==o.length?c.moveTo(g,p):c.moveTo(u,f),c.lineTo(g,p),c.stroke(),c.closePath(),st(g,p,e[v].toUnfinished().toString(),c)),null===(q=localStorage.getItem("all-slots-list"))||void 0===q||q.split("|"),await(A(),P),setTimeout(r,0)}()})),[l,function(t){j[t?"unshift":"push"]((()=>{l=t,n(0,l)}))}]}class Kt extends Z{constructor(t){super(),Y(this,t,At,Mt,s,{})}}function Nt(t){let e,n;const o=t[1].default,i=function(t,e,n,o){if(t){const i=u(t,e,n,o);return t[0](i)}}(o,t,t[0],null);return{c(){e=p("div"),i&&i.c(),v(e,"class","svelte-sf86v0")},m(t,o){h(t,e,o),i&&i.m(e,null),n=!0},p(t,[e]){i&&i.p&&(!n||1&e)&&function(t,e,n,o,i,s){if(i){const r=u(e,n,o,s);t.p(r,i)}}(i,o,t,t[0],n?function(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}(o,t[0],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[0]),null)},i(t){n||(q(i,t),n=!0)},o(t){C(i,t),n=!1},d(t){t&&g(e),i&&i.d(t)}}}function Rt(t,e,n){let{$$slots:o={},$$scope:i}=e;return t.$$set=t=>{"$$scope"in t&&n(0,i=t.$$scope)},[i,o]}class Wt extends Z{constructor(t){super(),Y(this,t,Rt,Nt,s,{})}}function Ut(t){let e,n,o,i,s,r;return{c(){e=p("input"),n=y(),o=p("p"),i=m(t[0]),v(e,"type","button"),v(e,"class","svelte-1od2vf2"),v(o,"class","svelte-1od2vf2")},m(l,c){h(l,e,c),h(l,n,c),h(l,o,c),f(o,i),s||(r=$(e,"click",t[1]),s=!0)},p(t,e){1&e&&x(i,t[0])},d(t){t&&g(e),t&&g(n),t&&g(o),s=!1,r()}}}function Ft(t){let e,n;return e=new Wt({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment)},m(t,o){G(e,t,o),n=!0},p(t,[n]){const o={};5&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(q(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Lt(t,e,n){let{label:o}=e;return t.$$set=t=>{"label"in t&&n(0,o=t.label)},[o,function(e){T.call(this,t,e)}]}class Ot extends Z{constructor(t){super(),Y(this,t,Lt,Ft,s,{label:0})}}function Bt(e){let n,o,i,s,r,l;return n=new Ot({props:{label:"Delete Slot"}}),n.$on("click",e[0]),i=new Ot({props:{label:"Delete All Slots"}}),i.$on("click",e[1]),r=new Ot({props:{label:"Switch Slot..."}}),r.$on("click",e[2]),{c(){H(n.$$.fragment),o=y(),H(i.$$.fragment),s=y(),H(r.$$.fragment)},m(t,e){G(n,t,e),h(t,o,e),G(i,t,e),h(t,s,e),G(r,t,e),l=!0},p:t,i(t){l||(q(n.$$.fragment,t),q(i.$$.fragment,t),q(r.$$.fragment,t),l=!0)},o(t){C(n.$$.fragment,t),C(i.$$.fragment,t),C(r.$$.fragment,t),l=!1},d(t){V(n,t),t&&g(o),V(i,t),t&&g(s),V(r,t)}}}function Dt(t,e,n){let o,i,s;a(t,St,(t=>n(4,o=t))),a(t,vt,(t=>n(5,i=t))),a(t,$t,(t=>n(6,s=t)));let r=null;const l=St.subscribe((t=>{var e,n;const l=null!==(n=null===(e=localStorage.getItem("all-slots-list"))||void 0===e?void 0:e.split("|"))&&void 0!==n?n:[];r&&l.includes(r)&&xt(r,s,i),r=t,bt(o)}));var c;return c=l,k().$$.on_destroy.push(c),[function(){var t,e;if(!confirm("Are you sure you want to delete your save?"))return;localStorage.removeItem(`slot-${o}`);const n=null===(t=localStorage.getItem("all-slots-list"))||void 0===t?void 0:t.split("|");n&&localStorage.setItem("all-slots-list",n.filter((t=>t!=o)).join("|")),d(St,o=null!==(e=n[0])&&void 0!==e?e:"slot1",o),bt(o),alert("Success!")},function(){if(!confirm("Are you sure you want to delete all of your saves?"))return;const t=localStorage.getItem("settings");localStorage.clear(),localStorage.setItem("settings",t),d(St,o="slot1",o),bt(o),alert("Success!")},function(){const t=localStorage.getItem("all-slots-list").split("|"),e=prompt(`Which slot to switch to?\nSlots: ${t.join(", ")}`);St.set(e),t.includes(e)||localStorage.setItem("all-slots-list",`${t}|${e}`)}]}class qt extends Z{constructor(t){super(),Y(this,t,Dt,Bt,s,{})}}function Ct(t){let e,n,i,s,r,l,c,a,u;return{c(){e=p("input"),n=y(),i=p("div"),s=p("input"),r=y(),l=p("p"),c=m(t[1]),v(e,"type","checkbox"),v(e,"class","svelte-1sijhex"),v(s,"type","checkbox"),b(s,"opacity","1"),b(s,"width","17px"),v(s,"class","svelte-1sijhex"),v(l,"class","svelte-1sijhex"),v(i,"class","svelte-1sijhex")},m(o,d){h(o,e,d),e.checked=t[0],h(o,n,d),h(o,i,d),f(i,s),s.checked=t[0],f(i,r),f(i,l),f(l,c),a||(u=[$(e,"change",t[3]),$(e,"click",t[2]),$(s,"change",t[4])],a=!0)},p(t,n){1&n&&(e.checked=t[0]),1&n&&(s.checked=t[0]),2&n&&x(c,t[1])},d(t){t&&g(e),t&&g(n),t&&g(i),a=!1,o(u)}}}function zt(t){let e,n;return e=new Wt({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment)},m(t,o){G(e,t,o),n=!0},p(t,[n]){const o={};35&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(q(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Ht(t,e,n){let{label:o}=e,{checked:i=!1}=e;return t.$$set=t=>{"label"in t&&n(1,o=t.label),"checked"in t&&n(0,i=t.checked)},[i,o,function(e){T.call(this,t,e)},function(){i=this.checked,n(0,i)},function(){i=this.checked,n(0,i)}]}class Gt extends Z{constructor(t){super(),Y(this,t,Ht,zt,s,{label:1,checked:0})}}function Vt(t){let e,n,o,i,s,r;function l(e){t[4](e)}let c={label:"Skills Mode"};function a(e){t[5](e)}void 0!==t[1]&&(c.checked=t[1]),e=new Gt({props:c}),j.push((()=>z(e,"checked",l))),e.$on("click",t[2]);let u={label:"Imperial Units"};return void 0!==t[0]&&(u.checked=t[0]),i=new Gt({props:u}),j.push((()=>z(i,"checked",a))),i.$on("click",t[3]),{c(){H(e.$$.fragment),o=y(),H(i.$$.fragment)},m(t,n){G(e,t,n),h(t,o,n),G(i,t,n),r=!0},p(t,[o]){const r={};!n&&2&o&&(n=!0,r.checked=t[1],N((()=>n=!1))),e.$set(r);const l={};!s&&1&o&&(s=!0,l.checked=t[0],N((()=>s=!1))),i.$set(l)},i(t){r||(q(e.$$.fragment,t),q(i.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),C(i.$$.fragment,t),r=!1},d(t){V(e,t),t&&g(o),V(i,t)}}}function Yt(t,e,n){let o,i;a(t,ut,(t=>n(0,o=t))),a(t,at,(t=>n(1,i=t)));const s=()=>{d(at,i=!i,i),l()},r=()=>{d(ut,o=!o,o),l()};function l(){localStorage.setItem("settings",`skills=${i}/imperial=${o}`)}return S((()=>{localStorage.getItem("settings")||l(),function(){const t=/skills=((?:false)|(?:true))\/imperial=((?:false)|(?:true))/,e=localStorage.getItem("settings");t.test(e)||l();const n=t.exec(e);"true"==n[1]&&s(),"true"==n[2]&&r()}()})),[o,i,s,r,function(t){i=t,at.set(i)},function(t){o=t,ut.set(o)}]}class Zt extends Z{constructor(t){super(),Y(this,t,Yt,Vt,s,{})}}function Jt(t){let e,n,o,i,s;return{c(){var l,c;e=p("a"),n=m(t[1]),o=y(),i=p("img"),v(e,"href",t[0]),v(e,"target","_blank"),v(e,"rel","noopener noreferrer"),v(e,"class","svelte-hjjv0l"),l=i.src,c=s="./media/external-link.png",r||(r=document.createElement("a")),r.href=c,l!==r.href&&v(i,"src","./media/external-link.png"),v(i,"alt","External Link"),v(i,"class","svelte-hjjv0l")},m(t,s){h(t,e,s),f(e,n),h(t,o,s),h(t,i,s)},p(t,o){2&o&&x(n,t[1]),1&o&&v(e,"href",t[0])},d(t){t&&g(e),t&&g(o),t&&g(i)}}}function Qt(t){let e,n;return e=new Wt({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment)},m(t,o){G(e,t,o),n=!0},p(t,[n]){const o={};7&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(q(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Xt(t,e,n){let{link:o}=e,{label:i}=e;return t.$$set=t=>{"link"in t&&n(0,o=t.link),"label"in t&&n(1,i=t.label)},[o,i]}class te extends Z{constructor(t){super(),Y(this,t,Xt,Qt,c,{link:0,label:1})}}function ee(e){let n,o,i,s,r,l;return n=new te({props:{label:"Github Repository",link:"https://github.com/iseau395/vrc-map/"}}),i=new te({props:{label:"Report a bug",link:"https://github.com/iseau395/vrc-map/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBug%5D+blah+blah+blah"}}),r=new te({props:{label:"Request a Feature",link:"https://github.com/iseau395/vrc-map/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=%5BFeature+Request%5D+blah+blah+blah"}}),{c(){H(n.$$.fragment),o=y(),H(i.$$.fragment),s=y(),H(r.$$.fragment)},m(t,e){G(n,t,e),h(t,o,e),G(i,t,e),h(t,s,e),G(r,t,e),l=!0},p:t,i(t){l||(q(n.$$.fragment,t),q(i.$$.fragment,t),q(r.$$.fragment,t),l=!0)},o(t){C(n.$$.fragment,t),C(i.$$.fragment,t),C(r.$$.fragment,t),l=!1},d(t){V(n,t),t&&g(o),V(i,t),t&&g(s),V(r,t)}}}class ne extends Z{constructor(t){super(),Y(this,t,null,ee,s,{})}}function oe(t,e,n){const o=t.slice();return o[1]=e[n],o}function ie(t){let e,n,o,i,s,r,l,c,a,u=t[1].label+"";var d=t[1].component;return d&&(r=new d({})),{c(){e=p("div"),n=p("span"),o=m(u),i=y(),s=p("div"),r&&H(r.$$.fragment),l=y(),c=p("div"),v(n,"class","svelte-5otyt4"),v(s,"class","dropdown-content svelte-5otyt4"),b(e,"height","24px"),b(e,"display","flex"),b(e,"align-items","center"),v(c,"class","seperator-line svelte-5otyt4")},m(t,u){h(t,e,u),f(e,n),f(n,o),f(e,i),f(e,s),r&&G(r,s,null),h(t,l,u),h(t,c,u),a=!0},p(t,e){if(d!==(d=t[1].component)){if(r){B();const t=r;C(t.$$.fragment,1,0,(()=>{V(t,1)})),D()}d?(r=new d({}),H(r.$$.fragment),q(r.$$.fragment,1),G(r,s,null)):r=null}},i(t){a||(r&&q(r.$$.fragment,t),a=!0)},o(t){r&&C(r.$$.fragment,t),a=!1},d(t){t&&g(e),r&&V(r),t&&g(l),t&&g(c)}}}function se(t){let e,n,o=t[0],i=[];for(let e=0;e<o.length;e+=1)i[e]=ie(oe(t,o,e));const s=t=>C(i[t],1,1,(()=>{i[t]=null}));return{c(){e=p("div");for(let t=0;t<i.length;t+=1)i[t].c();v(e,"class","bar svelte-5otyt4")},m(t,o){h(t,e,o);for(let t=0;t<i.length;t+=1)i[t].m(e,null);n=!0},p(t,[n]){if(1&n){let r;for(o=t[0],r=0;r<o.length;r+=1){const s=oe(t,o,r);i[r]?(i[r].p(s,n),q(i[r],1)):(i[r]=ie(s),i[r].c(),q(i[r],1),i[r].m(e,null))}for(B(),r=o.length;r<i.length;r+=1)s(r);D()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)q(i[t]);n=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)C(i[t]);n=!1},d(t){t&&g(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(i,t)}}}function re(t){return[[{label:"Slot",component:qt},{label:"View",component:Zt},{label:"Help",component:ne}]]}class le extends Z{constructor(t){super(),Y(this,t,re,se,s,{})}}function ce(e){let n,o,i,s,r;return n=new le({}),s=new Kt({}),{c(){H(n.$$.fragment),o=y(),i=p("div"),H(s.$$.fragment),v(i,"class","body svelte-1dbxjoj")},m(t,e){G(n,t,e),h(t,o,e),h(t,i,e),G(s,i,null),r=!0},p:t,i(t){r||(q(n.$$.fragment,t),q(s.$$.fragment,t),r=!0)},o(t){C(n.$$.fragment,t),C(s.$$.fragment,t),r=!1},d(t){V(n,t),t&&g(o),t&&g(i),V(s)}}}return new class extends Z{constructor(t){super(),Y(this,t,null,ce,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
