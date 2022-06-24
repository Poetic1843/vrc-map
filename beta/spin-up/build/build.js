!function(){"use strict";function t(){}const e=t=>t;function i(t){return t()}function s(){return Object.create(null)}function n(t){t.forEach(i)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e,i,s){return t[1]&&s?function(t,e){for(const i in e)t[i]=e[i];return t}(i.ctx.slice(),t[1](s(e))):i.ctx}const h="undefined"!=typeof window;let a=h?()=>window.performance.now():()=>Date.now(),l=h?t=>requestAnimationFrame(t):t;const d=new Set;function u(t){d.forEach((e=>{e.c(t)||(d.delete(e),e.f())})),0!==d.size&&l(u)}function f(t,e){t.appendChild(e)}function _(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function m(t){const e=w("style");return function(t,e){f(t.head||t,e)}(_(t),e),e.sheet}function g(t,e,i){t.insertBefore(e,i||null)}function x(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function y(){return p(" ")}function v(){return p("")}function $(t,e,i){null==i?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function b(t,e,i,s){null===i?t.style.removeProperty(e):t.style.setProperty(e,i,s?"important":"")}const T=new Map;let k,P=0;function E(t,e,i,s,n,o,c,r=0){const h=16.666/s;let a="{\n";for(let t=0;t<=1;t+=h){const s=e+(i-e)*o(t);a+=100*t+`%{${c(s,1-s)}}\n`}const l=a+`100% {${c(i,1-i)}}\n}`,d=`__svelte_${function(t){let e=5381,i=t.length;for(;i--;)e=(e<<5)-e^t.charCodeAt(i);return e>>>0}(l)}_${r}`,u=_(t),{stylesheet:f,rules:g}=T.get(u)||function(t,e){const i={stylesheet:m(e),rules:{}};return T.set(t,i),i}(u,t);g[d]||(g[d]=!0,f.insertRule(`@keyframes ${d} ${l}`,f.cssRules.length));const x=t.style.animation||"";return t.style.animation=`${x?`${x}, `:""}${d} ${s}ms linear ${n}ms 1 both`,P+=1,d}function S(t,e){const i=(t.style.animation||"").split(", "),s=i.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),n=i.length-s.length;n&&(t.style.animation=s.join(", "),P-=n,P||l((()=>{P||(T.forEach((t=>{const{stylesheet:e}=t;let i=e.cssRules.length;for(;i--;)e.deleteRule(i);t.rules={}})),T.clear())})))}function I(t){k=t}function M(){if(!k)throw new Error("Function called outside component initialization");return k}function z(t,e){const i=t.$$.callbacks[e.type];i&&i.slice().forEach((t=>t.call(this,e)))}const K=[],L=[],C=[],Y=[],N=Promise.resolve();let A=!1;function X(t){C.push(t)}const R=new Set;let W,Z=0;function F(){const t=k;do{for(;Z<K.length;){const t=K[Z];Z++,I(t),O(t.$$)}for(I(null),K.length=0,Z=0;L.length;)L.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];R.has(e)||(R.add(e),e())}C.length=0}while(K.length);for(;Y.length;)Y.pop()();A=!1,R.clear(),I(t)}function O(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function B(t,e,i){t.dispatchEvent(function(t,e,i=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,i,!1,e),s}(`${e?"intro":"outro"}${i}`))}const U=new Set;let D;function j(t,e){t&&t.i&&(U.delete(t),t.i(e))}function q(t,e,i,s){if(t&&t.o){if(U.has(t))return;U.add(t),D.c.push((()=>{U.delete(t),s&&(i&&t.d(1),s())})),t.o(e)}}const H={duration:0};function G(i,s,c,r){let h=s(i,c),f=r?0:1,_=null,m=null,g=null;function x(){g&&S(i,g)}function w(t,e){const i=t.b-f;return e*=Math.abs(i),{a:f,b:t.b,d:i,duration:e,start:t.start,end:t.start+e,group:t.group}}function p(s){const{delay:o=0,duration:c=300,easing:r=e,tick:p=t,css:y}=h||H,v={start:a()+o,b:s};s||(v.group=D,D.r+=1),_||m?m=v:(y&&(x(),g=E(i,f,s,c,o,r,y)),s&&p(0,1),_=w(v,c),X((()=>B(i,s,"start"))),function(t){let e;0===d.size&&l(u),new Promise((i=>{d.add(e={c:t,f:i})}))}((t=>{if(m&&t>m.start&&(_=w(m,c),m=null,B(i,_.b,"start"),y&&(x(),g=E(i,f,_.b,_.duration,0,r,h.css))),_)if(t>=_.end)p(f=_.b,1-f),B(i,_.b,"end"),m||(_.b?x():--_.group.r||n(_.group.c)),_=null;else if(t>=_.start){const e=t-_.start;f=_.a+_.d*r(e/_.duration),p(f,1-f)}return!(!_&&!m)})))}return{run(t){o(h)?(W||(W=Promise.resolve(),W.then((()=>{W=null}))),W).then((()=>{h=h(),p(t)})):p(t)},end(){x(),_=m=null}}}function V(t){t&&t.c()}function J(t,e,s,c){const{fragment:r,on_mount:h,on_destroy:a,after_update:l}=t.$$;r&&r.m(e,s),c||X((()=>{const e=h.map(i).filter(o);a?a.push(...e):n(e),t.$$.on_mount=[]})),l.forEach(X)}function Q(t,e){const i=t.$$;null!==i.fragment&&(n(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(K.push(t),A||(A=!0,N.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,i,o,c,r,h,a,l=[-1]){const d=k;I(e);const u=e.$$={fragment:null,ctx:null,props:h,update:t,not_equal:r,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:s(),dirty:l,skip_bound:!1,root:i.target||d.$$.root};a&&a(u.root);let f=!1;if(u.ctx=o?o(e,i.props||{},((t,i,...s)=>{const n=s.length?s[0]:i;return u.ctx&&r(u.ctx[t],u.ctx[t]=n)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](n),f&&tt(e,t)),i})):[],u.update(),f=!0,n(u.before_update),u.fragment=!!c&&c(u.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);u.fragment&&u.fragment.l(t),t.forEach(x)}else u.fragment&&u.fragment.c();i.intro&&j(e.$$.fragment),J(e,i.target,i.anchor,i.customElement),F()}I(d)}class it{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const t=i.indexOf(e);-1!==t&&i.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function st(t){let e,i,s,n;const o=t[1].default,c=function(t,e,i,s){if(t){const n=r(t,e,i,s);return t[0](n)}}(o,t,t[0],null);return{c(){e=w("div"),c&&c.c(),$(e,"class","svelte-1vayqny")},m(o,r){var h,a,l,d;g(o,e,r),c&&c.m(e,null),i=!0,s||(h=e,a="click",l=t[2],h.addEventListener(a,l,d),n=()=>h.removeEventListener(a,l,d),s=!0)},p(t,[e]){c&&c.p&&(!i||1&e)&&function(t,e,i,s,n,o){if(n){const c=r(e,i,s,o);t.p(c,n)}}(c,o,t,t[0],i?function(t,e,i,s){if(t[2]&&s){const n=t[2](s(i));if(void 0===e.dirty)return n;if("object"==typeof n){const t=[],i=Math.max(e.dirty.length,n.length);for(let s=0;s<i;s+=1)t[s]=e.dirty[s]|n[s];return t}return e.dirty|n}return e.dirty}(o,t[0],e,null):function(t){if(t.ctx.length>32){const e=[],i=t.ctx.length/32;for(let t=0;t<i;t++)e[t]=-1;return e}return-1}(t[0]),null)},i(t){i||(j(c,t),i=!0)},o(t){q(c,t),i=!1},d(t){t&&x(e),c&&c.d(t),s=!1,n()}}}function nt(t,e,i){let{$$slots:s={},$$scope:n}=e;return t.$$set=t=>{"$$scope"in t&&i(0,n=t.$$scope)},[n,s,function(e){z.call(this,t,e)}]}class ot extends it{constructor(t){super(),et(this,t,nt,st,c,{})}}function ct(t){const e=t-1;return e*e*e+1}function rt(t,{delay:e=0,duration:i=400,easing:s=ct,x:n=0,y:o=0,opacity:c=0}={}){const r=getComputedStyle(t),h=+r.opacity,a="none"===r.transform?"":r.transform,l=h*(1-c);return{delay:e,duration:i,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*n}px, ${(1-t)*o}px);\n\t\t\topacity: ${h-l*e}`}}function ht(e){let i,s,n;return{c(){i=w("div"),$(i,"class","svelte-1ihgyp3")},m(t,e){g(t,i,e),n=!0},p:t,i(t){n||(X((()=>{s||(s=G(i,rt,{x:200,duration:100},!0)),s.run(1)})),n=!0)},o(t){s||(s=G(i,rt,{x:200,duration:100},!1)),s.run(0),n=!1},d(t){t&&x(i),t&&s&&s.end()}}}class at extends it{constructor(t){super(),et(this,t,null,ht,c,{})}}function lt(t){let e;return{c(){e=p("≡")},m(t,i){g(t,e,i)},d(t){t&&x(e)}}}function dt(t){let e,i;return e=new at({}),{c(){V(e.$$.fragment)},m(t,s){J(e,t,s),i=!0},i(t){i||(j(e.$$.fragment,t),i=!0)},o(t){q(e.$$.fragment,t),i=!1},d(t){Q(e,t)}}}function ut(t){let e,i,s,o,c,r,h,a;c=new ot({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),c.$on("click",t[1]);let l=t[0]&&dt();return{c(){e=w("div"),i=w("span"),i.innerHTML='<p class="svelte-1uts12u">VRC Field Map</p>',s=y(),o=w("div"),V(c.$$.fragment),r=y(),l&&l.c(),h=v(),$(i,"class","svelte-1uts12u"),$(o,"class","hamburger-button svelte-1uts12u"),$(e,"class","svelte-1uts12u")},m(t,n){g(t,e,n),f(e,i),f(e,s),f(e,o),J(c,o,null),g(t,r,n),l&&l.m(t,n),g(t,h,n),a=!0},p(t,[e]){const i={};4&e&&(i.$$scope={dirty:e,ctx:t}),c.$set(i),t[0]?l?1&e&&j(l,1):(l=dt(),l.c(),j(l,1),l.m(h.parentNode,h)):l&&(D={r:0,c:[],p:D},q(l,1,1,(()=>{l=null})),D.r||n(D.c),D=D.p)},i(t){a||(j(c.$$.fragment,t),j(l),a=!0)},o(t){q(c.$$.fragment,t),q(l),a=!1},d(t){t&&x(e),Q(c),t&&x(r),l&&l.d(t),t&&x(h)}}}function ft(t,e,i){let s=!1;return[s,()=>i(0,s=!s)]}class _t extends it{constructor(t){super(),et(this,t,ft,ut,c,{})}}const mt=1785;var gt;async function xt(t){switch(t){case gt.TIPPING_POINT:return async function(){return new((await Promise.resolve().then((function(){return At}))).default)}();case gt.SPIN_UP:return async function(){return new((await Promise.resolve().then((function(){return Wt}))).default)}();default:throw new Error(`Unknown game type: ${t}`)}}!function(t){t[t.TIPPING_POINT=0]="TIPPING_POINT",t[t.SPIN_UP=1]="SPIN_UP"}(gt||(gt={}));class wt{constructor(t){this._dragX=0,this._dragY=0,this._mouseButton=-1,this._zoom=1,this._deltaScroll=0,this._mouseX=0,this._mouseY=0,this._altKey=!1,this._ctrlKey=!1,this._shiftKey=!1,t.addEventListener("mousemove",(t=>this.mousemove(t))),t.addEventListener("mousedown",(t=>this.mousedown(t))),t.addEventListener("mouseup",(t=>this.mouseup(t))),t.addEventListener("contextmenu",(t=>this.contextmenu(t))),t.addEventListener("wheel",(t=>this.wheel(t))),t.addEventListener("scroll",(t=>this.scroll(t))),window.addEventListener("keydown",(t=>this.keydown(t))),window.addEventListener("keyup",(t=>this.keyup(t)))}mousemove(t){(1==this._mouseButton||0==this._mouseButton&&this._altKey)&&(this._dragX+=t.movementX,this._dragY+=t.movementY),this._mouseX=t.x,this._mouseY=t.y-50}mousedown(t){this._mouseButton=t.button}mouseup(t){this._mouseButton=-1}contextmenu(t){t.preventDefault()}wheel(t){t.preventDefault(),this._shiftKey||(this._zoom+=-.002*t.deltaY,this._zoom=Math.min(Math.max(.125,this._zoom),4)),this._deltaScroll+=t.deltaY}scroll(t){t.preventDefault()}keydown(t){this._altKey=t.altKey,this._ctrlKey=t.ctrlKey,this._shiftKey=t.shiftKey}keyup(t){this._altKey=t.altKey,this._ctrlKey=t.ctrlKey,this._shiftKey=t.shiftKey}get dragX(){const t=this._dragX;return this._dragX=0,t}get dragY(){const t=this._dragY;return this._dragY=0,t}get zoom(){const t=this._zoom;return this._zoom=1,t}get deltaScroll(){const t=this._deltaScroll;return this._deltaScroll=0,t}get mouseButton(){return this._mouseButton}get mouseX(){return this._mouseX}get mouseY(){return this._mouseY}get altKey(){return this._altKey}get ctrlKey(){return this._ctrlKey}get shiftKey(){return this._shiftKey}}class pt{constructor(t,e){this.fieldZoom=.065,this.prevFieldZoom=this.fieldZoom,this.fieldX=t/2-mt*this.fieldZoom*3.05,this.fieldY=e/2-mt*this.fieldZoom*3.05,this.prevFieldX=this.fieldX,this.prevFieldY=this.fieldY}tick(t,e,i){this.fieldX+=t,this.fieldY+=e,this.fieldX=Math.floor(this.fieldX),this.fieldY=Math.floor(this.fieldY),this.fieldZoom*=i,this.fieldZoom=Math.min(Math.max(.4,this.fieldZoom),1.5)}translate(t){t.translate(this.fieldX,this.fieldY),t.scale(this.fieldZoom,this.fieldZoom)}render(t){this.cache_ctx||this.cache(),t.drawImage(this.cache_ctx.canvas,0,0)}changed(){const t=this.fieldX!=this.prevFieldX||this.fieldY!=this.prevFieldY||this.fieldZoom!=this.prevFieldZoom;return this.prevFieldX=this.fieldX,this.prevFieldY=this.fieldY,this.prevFieldZoom=this.fieldZoom,t}cache(){this.cache_ctx=document.createElement("canvas").getContext("2d"),this.cache_ctx.canvas.width=mt,this.cache_ctx.canvas.height=mt,this.cache_ctx.fillStyle="rgb(159, 159, 159)",this.cache_ctx.fillRect(0,0,mt,mt),this.cache_ctx.beginPath();for(let t=0;t<6;t++)this.cache_ctx.moveTo(297.5*(t+1),0),this.cache_ctx.lineTo(297.5*(t+1),mt);for(let t=0;t<6;t++)this.cache_ctx.moveTo(0,297.5*(t+1)),this.cache_ctx.lineTo(mt,297.5*(t+1));this.cache_ctx.strokeStyle="rgba(100, 100, 100, 0.2)",this.cache_ctx.lineWidth=5,this.cache_ctx.stroke()}zoom(){return this.fieldZoom}x(){return this.fieldX}y(){return this.fieldY}}class yt{constructor(){this.gridSize=48}snap(t,e){return[Math.round(t/(mt/this.gridSize))*(mt/this.gridSize),Math.round(e/(mt/this.gridSize))*(mt/this.gridSize)]}render(t,e,i,s){const n=mt/this.gridSize*s;let o=e%n,c=i%n;for(t.beginPath();o<t.canvas.width;)t.moveTo(o,Math.min(-i/s,0)),t.lineTo(o,t.canvas.height),o+=n;for(;c<t.canvas.height;)t.moveTo(Math.min(-e/s,0),c),t.lineTo(t.canvas.width,c),c+=n;t.strokeStyle="rgba(100, 100, 100, 0.5)",t.lineWidth=1,t.stroke()}}class vt extends class{constructor(t,e,i){this.x=t,this.y=e,this.r=i}pointInside(t,e){throw new Error("Unimplimented")}update(t,e,i){if(this.x=t,this.y=e,i/=1.25,!this.rotate_step)throw new Error("Missing rotate_step!");this.r+=Math.floor(i/this.rotate_step)*this.rotate_step}render(t){throw new Error("Unimplimented")}}{pointInside(t,e){if(!this.diameter)throw new Error("Missing diameter!");return(t-this.x)**2+(e-this.y)**2<=(this.diameter/2*5+5)**2}}class $t extends vt{constructor(){super(...arguments),this.diameter=8.5,this.rotate_step=1}render(t){t.lineWidth=0,t.beginPath(),t.arc(this.x,this.y,this.diameter/2*5-7.5,0,2*Math.PI),t.closePath(),t.fill(),t.lineWidth=5,t.beginPath(),t.arc(this.x,this.y,this.diameter/2*5,0,2*Math.PI),t.closePath(),t.stroke()}get_x(){return this.x}get_y(){return this.y}}class bt{constructor(){this.selection=-1,this.added_point=!1,this.points=[]}tick(t,e,i,s,n,o,c,r){if(o&&0==n){if(!this.has_selection())for(const i of this.points)if(i.pointInside(t,e)){this.selection=this.points.indexOf(i);break}this.has_selection()&&this.points[this.selection].update(i,s,r)}else 2==n&&0==this.added_point?(this.points.push(new $t(i,s,0)),this.added_point=!0):2!=n&&(this.added_point=!1),this.selection=-1}render(t){t.fillStyle="rgb(255, 0, 0)",t.strokeStyle="rgb(255, 0, 0)",t.lineWidth=5,t.beginPath(),this.points.forEach(((e,i)=>0==i?t.moveTo(e.get_x(),e.get_y()):t.lineTo(e.get_x(),e.get_y()))),t.stroke(),this.points.forEach((e=>e.render(t)))}has_selection(){return this.selection>=0}}function Tt(e){let i,s,n;return{c(){i=w("canvas"),s=y(),n=w("canvas"),b(i,"z-index","-1"),$(i,"class","svelte-19dzfsr"),b(n,"z-index","0"),$(n,"class","svelte-19dzfsr")},m(t,o){g(t,i,o),e[2](i),g(t,s,o),g(t,n,o),e[3](n)},p:t,i:t,o:t,d(t){t&&x(i),e[2](null),t&&x(s),t&&x(n),e[3](null)}}}function kt(t,e,i){let s,n;const o=(c=Symbol.for("game"),M().$$.context.get(c));var c;let r,h,a=!0;var l;return window.onbeforeunload=function(){return!0},l=async()=>{const t=s.getContext("2d",{alpha:!1}),e=n.getContext("2d",{alpha:!0}),c=new wt(n),l=new pt(window.innerWidth,window.innerHeight-50),d=new yt,u=new bt,f=await xt(o),_=()=>{i(0,s.width=window.innerWidth,s),i(0,s.height=window.innerHeight-50,s),i(1,n.width=window.innerWidth,n),i(1,n.height=window.innerHeight-50,n),a=!0,m()};function m(){(l.changed()||a)&&(t.fillStyle="rgb(80, 80, 80)",t.fillRect(0,0,s.width,s.height),t.save(),l.translate(t),l.render(t),f.render_static(t),t.restore(),a=!1),e.clearRect(0,0,n.width,n.height),e.save(),l.translate(e),f.render(e),u.render(e),e.restore(),c.ctrlKey&&d.render(e,l.x(),l.y(),l.zoom()),h=requestAnimationFrame(m)}function g(){const t=(c.mouseX-l.x())/l.zoom(),e=(c.mouseY-l.y())/l.zoom(),[i,s]=c.ctrlKey?d.snap(t,e):[t,e];l.tick(c.dragX,c.dragY,c.zoom),f.has_selection()||u.tick(t,e,i,s,c.mouseButton,c.shiftKey,c.ctrlKey,c.deltaScroll),c.altKey||u.has_selection()||f.tick(t,e,i,s,c.mouseButton,c.shiftKey,c.ctrlKey,c.deltaScroll)}window.addEventListener("resize",_),r=setInterval(g,20),g(),_()},M().$$.on_mount.push(l),function(t){M().$$.on_destroy.push(t)}((()=>{clearInterval(r),cancelAnimationFrame(h)})),[s,n,function(t){L[t?"unshift":"push"]((()=>{s=t,i(0,s)}))},function(t){L[t?"unshift":"push"]((()=>{n=t,i(1,n)}))}]}class Pt extends it{constructor(t){super(),et(this,t,kt,Tt,c,{})}}function Et(e){let i;return{c(){i=w("p"),i.textContent="It looks like you are on a touchscreen only device like a phone or tablet.\r\n    As this field map doesn't work on touchscreen devices (yet), so try to instead use a computer.",$(i,"class","svelte-48ahf8")},m(t,e){g(t,i,e)},i:t,o:t,d(t){t&&x(i)}}}function St(t){let e,i;return e=new Pt({}),{c(){V(e.$$.fragment)},m(t,s){J(e,t,s),i=!0},i(t){i||(j(e.$$.fragment,t),i=!0)},o(t){q(e.$$.fragment,t),i=!1},d(t){Q(e,t)}}}function It(e){let i,s,n,o,c,r;i=new _t({});const h=[St,Et],a=[];return n=function(t,e){return t[0]?0:1}(e),o=a[n]=h[n](e),{c(){V(i.$$.fragment),s=y(),o.c(),c=v()},m(t,e){J(i,t,e),g(t,s,e),a[n].m(t,e),g(t,c,e),r=!0},p:t,i(t){r||(j(i.$$.fragment,t),j(o),r=!0)},o(t){q(i.$$.fragment,t),q(o),r=!1},d(t){Q(i,t),t&&x(s),a[n].d(t),t&&x(c)}}}function Mt(t){return["onmousemove"in window]}new class extends it{constructor(t){super(),et(this,t,Mt,It,c,{})}}({target:document.body,context:new Map([[Symbol.for("game"),gt.SPIN_UP]])});const zt="rgb(255, 0, 0)",Kt="rgb(0, 0, 255)",Lt="rgb(255, 255, 255)";var Ct;!function(t){t[t.RED_ALLIANCE=0]="RED_ALLIANCE",t[t.BLUE_ALLIANCE=1]="BLUE_ALLIANCE",t[t.NEUTRAL=2]="NEUTRAL"}(Ct||(Ct={}));class Yt extends vt{constructor(t,e,i,s){super(t,e,i),this.diameter=33,this.rotate_step=90,this.variation=s}drawMogo(t){switch(this.variation){case 0:t.fillStyle=zt;break;case 1:t.fillStyle=Kt;break;case 2:t.fillStyle="rgb(255, 255, 0)"}t.strokeStyle="rgb(50, 50, 50)",t.lineWidth=2.5,function(t,e,i,s,n,o){const c=2*Math.PI/s,r=Math.PI+n/360*(2*Math.PI);o.beginPath();for(let n=0;n<=s;n++){const s=n*c+r;o.lineTo(t+i*Math.cos(s),e+i*Math.sin(s))}o.fill(),o.stroke(),o.closePath()}(this.diameter/2*5,this.diameter/2*5,this.diameter/2*5,7,4*Math.PI,t)}render(t){switch(this.variation){case Ct.RED_ALLIANCE:Yt.red_cache||(Yt.red_cache=document.createElement("canvas").getContext("2d"),Yt.red_cache.canvas.width=5*this.diameter,Yt.red_cache.canvas.height=5*this.diameter,this.drawMogo(Yt.red_cache)),t.save(),t.translate(this.x,this.y),t.rotate(this.r),t.drawImage(Yt.red_cache.canvas,-this.diameter/2*5,-this.diameter/2*5),t.restore();break;case Ct.BLUE_ALLIANCE:Yt.blue_cache||(Yt.blue_cache=document.createElement("canvas").getContext("2d"),Yt.blue_cache.canvas.width=5*this.diameter,Yt.blue_cache.canvas.height=5*this.diameter,this.drawMogo(Yt.blue_cache)),t.save(),t.translate(this.x,this.y),t.rotate(this.r),t.drawImage(Yt.blue_cache.canvas,-this.diameter/2*5,-this.diameter/2*5),t.restore();break;case Ct.NEUTRAL:Yt.neutral_cache||(Yt.neutral_cache=document.createElement("canvas").getContext("2d"),Yt.neutral_cache.canvas.width=5*this.diameter,Yt.neutral_cache.canvas.height=5*this.diameter,this.drawMogo(Yt.neutral_cache)),t.save(),t.translate(this.x,this.y),t.rotate(this.r),t.drawImage(Yt.neutral_cache.canvas,-this.diameter/2*5,-this.diameter/2*5),t.restore()}}}class Nt extends vt{constructor(){super(...arguments),this.diameter=5.23875,this.rotate_step=1}render(t){t.strokeStyle="rgb(200, 100, 200)",t.lineWidth=13.4925,t.beginPath(),t.arc(this.x,this.y,this.diameter/2*5,0,2*Math.PI),t.stroke(),t.fill}}var At=Object.freeze({__proto__:null,default:class{constructor(){this.selection={arr:-1,index:-1},this.mogos=[new Yt(446.25,1636.25,90,0),new Yt(148.75,557.8125,0,0),new Yt(1338.75,148.75,270,1),new Yt(1636.25,1227.1875,180,1),new Yt(892.5,446.25,180,2),new Yt(892.5,892.5,180,2),new Yt(892.5,1338.75,0,2)],this.rings=[new Nt(50,50,0)]}drawPlatform(t,e,i,s){const n=673.1,o=254;t+=27.625000000000014,e-=40,s.strokeStyle=i,s.lineCap="butt",s.lineWidth=20,s.beginPath(),s.moveTo(t+o/9,e+84.1375),s.lineTo(t+o-o/9,e+84.1375),s.lineTo(t+o-o/9,e+588.9625),s.lineTo(t+o/9,e+588.9625),s.lineTo(t+o/9,e+84.1375-s.lineWidth/2),s.stroke(),s.fillStyle="rgba(255, 255, 255, 0.12)",s.fillRect(t,e,o,n),s.strokeStyle="rgb(0, 0, 0)",s.lineWidth=1.5,s.beginPath(),s.moveTo(t+o+1,e),s.lineTo(t+o+1,e+n),s.moveTo(t-1,e),s.lineTo(t-1,e+n),s.stroke()}cache(){this.cache_ctx=document.createElement("canvas").getContext("2d"),this.cache_ctx.canvas.width=mt,this.cache_ctx.canvas.height=mt,this.cache_ctx.strokeStyle=Lt,this.cache_ctx.lineWidth=5.5,this.cache_ctx.beginPath(),this.cache_ctx.moveTo(595,0),this.cache_ctx.lineTo(595,mt),this.cache_ctx.moveTo(887.5,0),this.cache_ctx.lineTo(887.5,mt),this.cache_ctx.moveTo(897.5,0),this.cache_ctx.lineTo(897.5,mt),this.cache_ctx.moveTo(1190,0),this.cache_ctx.lineTo(1190,mt),this.cache_ctx.moveTo(1190,297.5),this.cache_ctx.lineTo(1487.5,0),this.cache_ctx.moveTo(595,1487.5),this.cache_ctx.lineTo(297.5,mt),this.cache_ctx.stroke(),this.drawPlatform(0,595,zt,this.cache_ctx),this.drawPlatform(1487.5,595,Kt,this.cache_ctx)}tick(t,e,i,s,n,o,c,r){if(o&&0==n){if(-1==this.selection.arr){for(const i of this.mogos)if(i.pointInside(t,e)){this.selection.arr=0,this.selection.index=this.mogos.indexOf(i);break}for(const i of this.rings)if(i.pointInside(t,e)){this.selection.arr=1,this.selection.index=this.rings.indexOf(i);break}}0==this.selection.arr&&this.mogos[this.selection.index].update(i,s,r),1==this.selection.arr&&this.rings[this.selection.index].update(i,s,r)}else this.selection.arr=-1,this.selection.index=-1}render(t){this.mogos.forEach((e=>e.render(t))),this.rings.forEach((e=>e.render(t)))}render_static(t){this.cache_ctx||this.cache(),t.drawImage(this.cache_ctx.canvas,0,0)}has_selection(){return this.selection.arr>=0}}});class Xt extends vt{constructor(t,e){super(t,e,0),this.diameter=14,this.rotate_step=1}render(t){t.fillStyle="rgb(232, 212, 33)",t.lineWidth=13.4925,t.beginPath(),t.arc(this.x,this.y,this.diameter/2*5,0,2*Math.PI),t.closePath(),t.fill(),t.fillStyle="rgb(220, 200, 21)",t.beginPath(),t.arc(this.x,this.y,this.diameter/2*5-12.7,0,2*Math.PI),t.closePath(),t.fill()}}class Rt{constructor(t,e,i,s=0){this.was_pressed=!1,this.x=t,this.y=e,this.horrizontal=i,this.state=s}render(t){t.strokeStyle="rgba(0, 0, 0, 0)",0!=this.state?(-1==this.state&&(t.fillStyle=Kt),1==this.state&&(t.fillStyle=zt),t.fillRect(this.x,this.y,this.horrizontal?Rt.long_side:Rt.short_side,this.horrizontal?Rt.short_side:Rt.long_side)):this.horrizontal?(t.fillStyle=Kt,t.fillRect(this.x,this.y,Rt.long_side,Rt.short_side/2),t.fillStyle=zt,t.fillRect(this.x,this.y+Rt.short_side/2,Rt.long_side,Rt.short_side/2)):(t.fillStyle=Kt,t.fillRect(this.x,this.y,Rt.short_side/2,Rt.long_side),t.fillStyle=zt,t.fillRect(this.x+Rt.short_side/2,this.y,Rt.short_side/2,Rt.long_side))}update(t,e,i){this.pointInside(t,e)&&0==i&&!this.was_pressed?(this.state++,this.state>1&&(this.state=-1),this.was_pressed=!0):0!=i&&(this.was_pressed=!1)}pointInside(t,e){return t>this.x&&e>this.y&&t<this.x+(this.horrizontal?Rt.long_side:Rt.short_side)&&e<this.y+(this.horrizontal?Rt.short_side:Rt.long_side)}}Rt.long_side=124.46,Rt.short_side=30.48;var Wt=Object.freeze({__proto__:null,default:class{constructor(){this.selected_disk=-1,this.disks=[new Xt(148.75,148.75),new Xt(297.5,297.5),new Xt(446.25,441.25),new Xt(446.25,436.25),new Xt(446.25,431.25),new Xt(595,595),new Xt(743.75,743.75),new Xt(1041.25,1041.25),new Xt(1190,1190),new Xt(1338.75,1333.75),new Xt(1338.75,1328.75),new Xt(1338.75,1323.75),new Xt(1487.5,1487.5),new Xt(1636.25,1636.25),new Xt(743.75,446.25),new Xt(892.5,595),new Xt(1041.25,743.75),new Xt(1338.75,1036.25),new Xt(1338.75,1031.25),new Xt(1338.75,1026.25),new Xt(743.75,1041.25),new Xt(892.5,1190),new Xt(1041.25,1338.75),new Xt(446.25,738.75),new Xt(446.25,733.75),new Xt(446.25,728.75),new Xt(1152.8125,334.6875),new Xt(1152.8125,446.25),new Xt(1152.8125,557.8125),new Xt(1227.1875,632.1875),new Xt(1338.75,632.1875),new Xt(1450.3125,632.1875),new Xt(334.6875,1152.8125),new Xt(446.25,1152.8125),new Xt(557.8125,1152.8125),new Xt(632.1875,1227.1875),new Xt(632.1875,1338.75),new Xt(632.1875,1450.3125),new Xt(-148.75,624.75),new Xt(-148.75,714),new Xt(-148.75,1160.25),new Xt(-148.75,1071),new Xt(1933.75,624.75),new Xt(1933.75,714),new Xt(1933.75,1160.25),new Xt(1933.75,1071),new Xt(-297.5,624.75),new Xt(-297.5,714),new Xt(-297.5,803.25),new Xt(-297.5,892.5),new Xt(-297.5,981.75),new Xt(-297.5,1071),new Xt(-297.5,1160.25),new Xt(2082.5,624.75),new Xt(2082.5,714),new Xt(2082.5,803.25),new Xt(2082.5,892.5),new Xt(2082.5,981.75),new Xt(2082.5,1071),new Xt(2082.5,1160.25)],this.rollers=[new Rt(0,297.5,!1),new Rt(297.5,0,!0),new Rt(mt-Rt.short_side,1487.5-Rt.long_side,!1),new Rt(1487.5-Rt.long_side,mt-Rt.short_side,!0)]}cache(){this.cache_ctx=document.createElement("canvas").getContext("2d"),this.cache_ctx.canvas.width=mt,this.cache_ctx.canvas.height=mt,this.cache_ctx.strokeStyle=Lt,this.cache_ctx.lineWidth=5.5,this.cache_ctx.lineCap="square",this.cache_ctx.beginPath(),this.cache_ctx.moveTo(25,0),this.cache_ctx.lineTo(mt,1760),this.cache_ctx.moveTo(0,25),this.cache_ctx.lineTo(1760,mt),this.cache_ctx.moveTo(0,297.5),this.cache_ctx.lineTo(148.75,297.5),this.cache_ctx.moveTo(595,0),this.cache_ctx.lineTo(595,148.75),this.cache_ctx.moveTo(mt,1487.5),this.cache_ctx.lineTo(1636.25,1487.5),this.cache_ctx.moveTo(1190,mt),this.cache_ctx.lineTo(1190,1636.25),this.cache_ctx.moveTo(1190,0),this.cache_ctx.lineTo(1190,297.5),this.cache_ctx.moveTo(mt,595),this.cache_ctx.lineTo(1487.5,595),this.cache_ctx.moveTo(0,1190),this.cache_ctx.lineTo(297.5,1190),this.cache_ctx.moveTo(595,mt),this.cache_ctx.lineTo(595,1487.5),this.cache_ctx.stroke(),this.cache_ctx.strokeStyle=zt,this.cache_ctx.lineWidth=12.7,this.cache_ctx.lineCap="round",this.cache_ctx.beginPath(),this.cache_ctx.moveTo(297.5,1190),this.cache_ctx.lineTo(595,1190),this.cache_ctx.lineTo(595,1487.5),this.cache_ctx.stroke(),this.cache_ctx.strokeStyle=Kt,this.cache_ctx.beginPath(),this.cache_ctx.moveTo(1190,297.5),this.cache_ctx.lineTo(1190,595),this.cache_ctx.lineTo(1487.5,595),this.cache_ctx.stroke(),this.cache_ctx.strokeStyle="rgb(200, 200, 200)",this.cache_ctx.lineWidth=25.4,this.cache_ctx.lineCap="square",this.cache_ctx.beginPath(),this.cache_ctx.moveTo(1190,0),this.cache_ctx.lineTo(mt,595),this.cache_ctx.moveTo(0,1190),this.cache_ctx.lineTo(595,mt),this.cache_ctx.stroke();this.cache_ctx.fillStyle=zt,this.cache_ctx.beginPath(),this.cache_ctx.arc(1487.5,297.5,19.9771*5,0,2*Math.PI),this.cache_ctx.closePath(),this.cache_ctx.fill(),this.cache_ctx.fillStyle=Kt,this.cache_ctx.beginPath(),this.cache_ctx.arc(297.5,1487.5,19.9771*5,0,2*Math.PI),this.cache_ctx.closePath(),this.cache_ctx.fill()}tick(t,e,i,s,n,o,c,r){if(o&&0==n){if(!this.has_selection())for(const i of this.disks)if(i.pointInside(t,e)){this.selected_disk=this.disks.indexOf(i);break}this.selected_disk>=0&&this.disks[this.selected_disk].update(i,s,r)}else this.selected_disk=-1;if(!this.has_selection())for(const i of this.rollers)i.update(t,e,n)}render(t){t.strokeStyle=zt,t.lineWidth=15,t.lineCap="square",t.beginPath(),t.moveTo(-446.25,148.75),t.lineTo(-74.375,148.75),t.lineTo(-74.375,1636.25),t.lineTo(-446.25,1636.25),t.stroke(),t.strokeStyle=Kt,t.beginPath(),t.moveTo(2231.25,148.75),t.lineTo(1859.375,148.75),t.lineTo(1859.375,1636.25),t.lineTo(2231.25,1636.25),t.stroke(),this.rollers.forEach((e=>{e.render(t)})),this.disks.forEach((e=>{e.render(t)}))}render_static(t){this.cache_ctx||this.cache(),t.drawImage(this.cache_ctx.canvas,0,0)}has_selection(){return this.selected_disk>=0}}})}();
