const g={context:void 0,registry:void 0};function H(e){g.context=e}function St(){return{...g.context,id:`${g.context.id}${g.context.count++}-`,count:0}}const _t=(e,t)=>e===t,At=Symbol("solid-track"),pe={equals:_t};let ae=null,Qe=st;const B=1,fe=2,Ze={owned:null,cleanups:null,context:null,owner:null},_e={};var b=null;let f=null,$=null,O=null,N=null,xe=0;const[$r,Ie]=I(!1);function Q(e,t){const n=$,r=b,s=e.length===0,i=s?Ze:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},l=s?e:()=>e(()=>R(()=>z(i)));b=i,$=null;try{return q(l,!0)}finally{$=n,b=r}}function I(e,t){t=t?Object.assign({},pe,t):pe;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(f&&f.running&&f.sources.has(n)?s=s(n.tValue):s=s(n.value)),rt(n,s));return[nt.bind(n),r]}function Me(e,t,n){const r=ge(e,t,!0,B);re(r)}function j(e,t,n){const r=ge(e,t,!1,B);re(r)}function Et(e,t,n){Qe=Rt;const r=ge(e,t,!1,B),s=X&&ye(b,X.id);s&&(r.suspense=s),r.user=!0,N?N.push(r):re(r)}function P(e,t,n){n=n?Object.assign({},pe,n):pe;const r=ge(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,re(r),nt.bind(r)}function Ct(e,t,n){let r,s,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=e,i=t||{}):(r=e,s=t,i=n||{});let l=null,o=_e,a=null,u=!1,c=!1,h="initialValue"in i,d=typeof r=="function"&&P(r);const m=new Set,[v,p]=(i.storage||I)(i.initialValue),[A,k]=I(void 0),[_,E]=I(void 0,{equals:!1}),[L,T]=I(h?"ready":"unresolved");if(g.context){a=`${g.context.id}${g.context.count++}`;let y;i.ssrLoadFrom==="initial"?o=i.initialValue:g.load&&(y=g.load(a))&&(o=y[0])}function F(y,x,C,U){return l===y&&(l=null,h=!0,(y===o||x===o)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(U,{value:x})),o=_e,f&&y&&u?(f.promises.delete(y),u=!1,q(()=>{f.running=!0,ie(x,C)},!1)):ie(x,C)),x}function ie(y,x){q(()=>{x===void 0&&p(()=>y),T(x!==void 0?"errored":"ready"),k(x);for(const C of m.keys())C.decrement();m.clear()},!1)}function oe(){const y=X&&ye(b,X.id),x=v(),C=A();if(C!==void 0&&!l)throw C;return $&&!$.user&&y&&Me(()=>{_(),l&&(y.resolved&&f&&u?f.promises.add(l):m.has(y)||(y.increment(),m.add(y)))}),x}function S(y=!0){if(y!==!1&&c)return;c=!1;const x=d?d():r;if(u=f&&f.running,x==null||x===!1){F(l,R(v));return}f&&l&&f.promises.delete(l);const C=o!==_e?o:R(()=>s(x,{value:v(),refetching:y}));return typeof C!="object"||!(C&&"then"in C)?(F(l,C,void 0,x),C):(l=C,c=!0,queueMicrotask(()=>c=!1),q(()=>{T(h?"refreshing":"pending"),E()},!1),C.then(U=>F(C,U,void 0,x),U=>F(C,void 0,lt(U),x)))}return Object.defineProperties(oe,{state:{get:()=>L()},error:{get:()=>A()},loading:{get(){const y=L();return y==="pending"||y==="refreshing"}},latest:{get(){if(!h)return oe();const y=A();if(y&&!l)throw y;return v()}}}),d?Me(()=>S(!1)):S(!1),[oe,{refetch:S,mutate:p}]}function R(e){if($===null)return e();const t=$;$=null;try{return e()}finally{$=t}}function et(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return l=>{let o;if(r){o=Array(e.length);for(let u=0;u<e.length;u++)o[u]=e[u]()}else o=e();if(i){i=!1;return}const a=R(()=>t(o,s,l));return s=o,a}}function te(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function Pt(e,t){ae||(ae=Symbol("error")),b=ge(void 0,void 0,!0),b.context={[ae]:[t]};try{return e()}catch(n){$e(n)}finally{b=b.owner}}function tt(){return b}function kt(e,t){const n=b,r=$;b=e,$=null;try{return q(t,!0)}catch(s){$e(s)}finally{b=n,$=r}}function Lt(e){if(f&&f.running)return e(),f.done;const t=$,n=b;return Promise.resolve().then(()=>{$=t,b=n;let r;return X&&(r=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(s=>r.resolve=s)),r.running=!0),q(e,!1),$=b=null,r?r.done:void 0})}function Nt(e){N.push.apply(N,e),e.length=0}function ne(e,t){const n=Symbol("context");return{id:n,Provider:It(n),defaultValue:e}}function Y(e){let t;return(t=ye(b,e.id))!==void 0?t:e.defaultValue}function Le(e){const t=P(e),n=P(()=>Ce(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let X;function Tt(){return X||(X=ne({}))}function nt(){const e=f&&f.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===B)re(this);else{const t=O;O=null,q(()=>be(this),!1),O=t}if($){const t=this.observers?this.observers.length:0;$.sources?($.sources.push(this),$.sourceSlots.push(t)):($.sources=[this],$.sourceSlots=[t]),this.observers?(this.observers.push($),this.observerSlots.push($.sources.length-1)):(this.observers=[$],this.observerSlots=[$.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function rt(e,t,n){let r=f&&f.running&&f.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(f){const s=f.running;(s||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),s||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&q(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],l=f&&f.running;l&&f.disposed.has(i)||((l?!i.tState:!i.state)&&(i.pure?O.push(i):N.push(i),i.observers&&it(i)),l?i.tState=B:i.state=B)}if(O.length>1e6)throw O=[],new Error},!1)}return t}function re(e){if(!e.fn)return;z(e);const t=b,n=$,r=xe;$=b=e,je(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,r),f&&!f.running&&f.sources.has(e)&&queueMicrotask(()=>{q(()=>{f&&(f.running=!0),$=b=e,je(e,e.tValue,r),$=b=null},!1)}),$=n,b=t}function je(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(f&&f.running?(e.tState=B,e.tOwned&&e.tOwned.forEach(z),e.tOwned=void 0):(e.state=B,e.owned&&e.owned.forEach(z),e.owned=null)),e.updatedAt=n+1,$e(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?rt(e,r,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function ge(e,t,n,r=B,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:null,pure:n};return f&&f.running&&(i.state=0,i.tState=r),b===null||b!==Ze&&(f&&f.running&&b.pure?b.tOwned?b.tOwned.push(i):b.tOwned=[i]:b.owned?b.owned.push(i):b.owned=[i]),i}function we(e){const t=f&&f.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===fe)return be(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<xe);){if(t&&f.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let s=e,i=n[r+1];for(;(s=s.owner)&&s!==i;)if(f.disposed.has(s))return}if((t?e.tState:e.state)===B)re(e);else if((t?e.tState:e.state)===fe){const s=O;O=null,q(()=>be(e,n[0]),!1),O=s}}}function q(e,t){if(O)return e();let n=!1;t||(O=[]),N?n=!0:N=[],xe++;try{const r=e();return Ot(n),r}catch(r){n||(N=null),O=null,$e(r)}}function Ot(e){if(O&&(st(O),O=null),e)return;let t;if(f){if(!f.promises.size&&!f.queue.size){const r=f.sources,s=f.disposed;N.push.apply(N,f.effects),t=f.resolve;for(const i of N)"tState"in i&&(i.state=i.tState),delete i.tState;f=null,q(()=>{for(const i of s)z(i);for(const i of r){if(i.value=i.tValue,i.owned)for(let l=0,o=i.owned.length;l<o;l++)z(i.owned[l]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}Ie(!1)},!1)}else if(f.running){f.running=!1,f.effects.push.apply(f.effects,N),N=null,Ie(!0);return}}const n=N;N=null,n.length&&q(()=>Qe(n),!1),t&&t()}function st(e){for(let t=0;t<e.length;t++)we(e[t])}function Rt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:we(r)}for(g.context&&H(),t=0;t<n;t++)we(e[t])}function be(e,t){const n=f&&f.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];if(s.sources){const i=n?s.tState:s.state;i===B?s!==t&&(!s.updatedAt||s.updatedAt<xe)&&we(s):i===fe&&be(s,t)}}}function it(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=fe:r.state=fe,r.pure?O.push(r):N.push(r),r.observers&&it(r))}}function z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),l=n.observerSlots.pop();r<s.length&&(i.sourceSlots[l]=r,s[r]=i,n.observerSlots[r]=l)}}if(f&&f.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)z(e.tOwned[t]);delete e.tOwned}ot(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0,e.context=null}function ot(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)ot(e.owned[n])}function lt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function qe(e,t){for(const n of e)n(t)}function $e(e){const t=ae&&ye(b,ae);if(!t)throw e;const n=lt(e);N?N.push({fn(){qe(t,n)},state:B}):qe(t,n)}function ye(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ye(e.owner,t):void 0}function Ce(e){if(typeof e=="function"&&!e.length)return Ce(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Ce(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function It(e,t){return function(r){let s;return j(()=>s=R(()=>(b.context={[e]:r.value},Le(()=>r.children))),void 0),s}}const Mt=Symbol("fallback");function Be(e){for(let t=0;t<e.length;t++)e[t]()}function jt(e,t,n={}){let r=[],s=[],i=[],l=0,o=t.length>1?[]:null;return te(()=>Be(i)),()=>{let a=e()||[],u,c;return a[At],R(()=>{let d=a.length,m,v,p,A,k,_,E,L,T;if(d===0)l!==0&&(Be(i),i=[],r=[],s=[],l=0,o&&(o=[])),n.fallback&&(r=[Mt],s[0]=Q(F=>(i[0]=F,n.fallback())),l=1);else if(l===0){for(s=new Array(d),c=0;c<d;c++)r[c]=a[c],s[c]=Q(h);l=d}else{for(p=new Array(d),A=new Array(d),o&&(k=new Array(d)),_=0,E=Math.min(l,d);_<E&&r[_]===a[_];_++);for(E=l-1,L=d-1;E>=_&&L>=_&&r[E]===a[L];E--,L--)p[L]=s[E],A[L]=i[E],o&&(k[L]=o[E]);for(m=new Map,v=new Array(L+1),c=L;c>=_;c--)T=a[c],u=m.get(T),v[c]=u===void 0?-1:u,m.set(T,c);for(u=_;u<=E;u++)T=r[u],c=m.get(T),c!==void 0&&c!==-1?(p[c]=s[u],A[c]=i[u],o&&(k[c]=o[u]),c=v[c],m.set(T,c)):i[u]();for(c=_;c<d;c++)c in p?(s[c]=p[c],i[c]=A[c],o&&(o[c]=k[c],o[c](c))):s[c]=Q(h);s=s.slice(0,l=d),r=a.slice(0)}return s});function h(d){if(i[c]=d,o){const[m,v]=I(c);return o[c]=v,t(a[c],m)}return t(a[c])}}}let ct=!1;function qt(){ct=!0}function w(e,t){if(ct&&g.context){const n=g.context;H(St());const r=R(()=>e(t||{}));return H(n),r}return R(()=>e(t||{}))}function He(e){let t,n;const r=s=>{const i=g.context;if(i){const[o,a]=I();(n||(n=e())).then(u=>{H(i),a(()=>u.default),H()}),t=o}else if(!t){const[o]=Ct(()=>(n||(n=e())).then(a=>a.default));t=o}let l;return P(()=>(l=t())&&R(()=>{if(!i)return l(s);const o=g.context;H(i);const a=l(s);return H(o),a}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}let Bt=0;function Ht(){const e=g.context;return e?`${e.id}${e.count++}`:`cl-${Bt++}`}const Ut=e=>`Stale read from <${e}>.`;function Vt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(jt(()=>e.each,e.children,t||void 0))}function Ne(e){const t=e.keyed,n=P(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return P(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?R(()=>s(t?r:()=>{if(!R(n))throw Ut("Show");return e.when})):s}return e.fallback},void 0,void 0)}let J;function at(){J&&[...J].forEach(e=>e())}function Ft(e){let t,n;g.context&&g.load&&(n=g.load(g.context.id+g.context.count))&&(t=n[0]);const[r,s]=I(t,void 0);return J||(J=new Set),J.add(s),te(()=>J.delete(s)),P(()=>{let i;if(i=r()){const l=e.fallback;return typeof l=="function"&&l.length?R(()=>l(i,()=>s())):l}return Pt(()=>e.children,s)},void 0,void 0)}const Dt=ne();function Kt(e){let t=0,n,r,s,i,l;const[o,a]=I(!1),u=Tt(),c={increment:()=>{++t===1&&a(!0)},decrement:()=>{--t===0&&a(!1)},inFallback:o,effects:[],resolved:!1},h=tt();if(g.context&&g.load){const v=g.context.id+g.context.count;let p=g.load(v);if(p&&(s=p[0])&&s!=="$$f"){(typeof s!="object"||!("then"in s))&&(s=Promise.resolve(s));const[A,k]=I(void 0,{equals:!1});i=A,s.then(_=>{if(_||g.done)return _&&(l=_),k();g.gather(v),H(r),k(),H()})}}const d=Y(Dt);d&&(n=d.register(c.inFallback));let m;return te(()=>m&&m()),w(u.Provider,{value:c,get children(){return P(()=>{if(l)throw l;if(r=g.context,i)return i(),i=void 0;r&&s==="$$f"&&H();const v=P(()=>e.children);return P(p=>{const A=c.inFallback(),{showContent:k=!0,showFallback:_=!0}=n?n():{};if((!A||s&&s!=="$$f")&&k)return c.resolved=!0,m&&m(),m=r=s=void 0,Nt(c.effects),v();if(_)return m?p:Q(E=>(m=E,r&&(H({id:r.id+"f",count:0}),r=void 0),e.fallback),h)})})}})}const Wt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],zt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Wt]),Xt=new Set(["innerHTML","textContent","innerText","children"]),Yt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Gt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Jt(e,t){const n=Gt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Qt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Zt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function en(e,t,n){let r=n.length,s=t.length,i=r,l=0,o=0,a=t[s-1].nextSibling,u=null;for(;l<s||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===l){const c=i<r?o?n[o-1].nextSibling:n[i-o]:a;for(;o<i;)e.insertBefore(n[o++],c)}else if(i===o)for(;l<s;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],c),t[s]=n[i]}else{if(!u){u=new Map;let h=o;for(;h<i;)u.set(n[h],h++)}const c=u.get(t[l]);if(c!=null)if(o<c&&c<i){let h=l,d=1,m;for(;++h<s&&h<i&&!((m=u.get(t[h]))==null||m!==c+d);)d++;if(d>c-o){const v=t[l];for(;o<c;)e.insertBefore(n[o++],v)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Ue="_$DX_DELEGATE";function tn(e,t,n,r={}){let s;return Q(i=>{s=i,t===document?e():D(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function se(e,t,n){let r;const s=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},i=t?()=>(r||(r=s())).cloneNode(!0):()=>R(()=>document.importNode(r||(r=s()),!0));return i.cloneNode=i,i}function Te(e,t=window.document){const n=t[Ue]||(t[Ue]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,ft))}}function ve(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function nn(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function M(e,t){t==null?e.removeAttribute("class"):e.className=t}function ut(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function rn(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,l;for(i=0,l=s.length;i<l;i++){const o=s[i];!o||o==="undefined"||t[o]||(Fe(e,o,!1),delete n[o])}for(i=0,l=r.length;i<l;i++){const o=r[i],a=!!t[o];!o||o==="undefined"||n[o]===a||!a||(Fe(e,o,!0),n[o]=a)}return n}function sn(e,t,n){if(!t)return n?ve(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)s=t[i],s!==n[i]&&(r.setProperty(i,s),n[i]=s);return n}function de(e,t={},n,r){const s={};return r||j(()=>s.children=ee(e,t.children,s.children)),j(()=>t.ref&&t.ref(e)),j(()=>on(e,t,n,!0,s,!0)),s}function D(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return ee(e,t,r,n);j(s=>ee(e,t(),s,n),r)}function on(e,t,n,r,s={},i=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;s[l]=De(e,l,null,s[l],n,i)}for(const l in t){if(l==="children"){r||ee(e,t.children);continue}const o=t[l];s[l]=De(e,l,o,s[l],n,i)}}function ln(e,t,n={}){g.completed=globalThis._$HY.completed,g.events=globalThis._$HY.events,g.load=globalThis._$HY.load,g.gather=s=>We(t,s),g.registry=new Map,g.context={id:n.renderId||"",count:0},We(t,n.renderId);const r=tn(e,t,[...t.childNodes],n);return g.context=null,r}function Z(e){let t,n;if(!g.context||!(t=g.registry.get(n=un()))){if(g.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e()}return g.completed&&g.completed.add(t),g.registry.delete(n),t}function Ve(e){let t=e,n=0,r=[];if(g.context)for(;t;){if(t.nodeType===8){const s=t.nodeValue;if(s==="#")n++;else if(s==="/"){if(n===0)return[t,r];n--}}r.push(t),t=t.nextSibling}return[t,r]}function cn(){g.events&&!g.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=g;for(t.queued=!1;t.length;){const[n,r]=t[0];if(!e.has(n))return;ft(r),t.shift()}}),g.events.queued=!0)}function an(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Fe(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function De(e,t,n,r,s,i){let l,o,a,u,c;if(t==="style")return sn(e,n,r);if(t==="classList")return rn(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);r&&e.removeEventListener(h,r),n&&e.addEventListener(h,n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);r&&e.removeEventListener(h,r,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),d=Qt.has(h);if(!d&&r){const m=Array.isArray(r)?r[0]:r;e.removeEventListener(h,m)}(d||n)&&(ut(e,h,n,d),d&&Te([h]))}else if(t.slice(0,5)==="attr:")ve(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(a=Xt.has(t))||!s&&((u=Jt(t,e.tagName))||(o=zt.has(t)))||(l=e.nodeName.includes("-")))c&&(t=t.slice(5),o=!0),t==="class"||t==="className"?M(e,n):l&&!o&&!a?e[an(t)]=n:e[u||t]=n;else{const h=s&&t.indexOf(":")>-1&&Zt[t.split(":")[0]];h?nn(e,h,t,n):ve(e,Yt[t]||t,n)}return n}function ft(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),g.registry&&!g.done&&(g.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function ee(e,t,n,r,s){if(g.context){!n&&(n=[...e.childNodes]);let o=[];for(let a=0;a<n.length;a++){const u=n[a];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():o.push(u)}n=o}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(g.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=G(e,n,r,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(g.context)return n;n=G(e,n,r)}else{if(i==="function")return j(()=>{let o=t();for(;typeof o=="function";)o=o();n=ee(e,o,n,r)}),()=>n;if(Array.isArray(t)){const o=[],a=n&&Array.isArray(n);if(Pe(o,t,n,s))return j(()=>n=ee(e,o,n,r,!0)),()=>n;if(g.context){if(!o.length)return n;for(let u=0;u<o.length;u++)if(o[u].parentNode)return n=o}if(o.length===0){if(n=G(e,n,r),l)return n}else a?n.length===0?Ke(e,o,r):en(e,n,o):(n&&G(e),Ke(e,o));n=o}else if(t instanceof Node){if(g.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=G(e,n,r,t);G(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Pe(e,t,n,r){let s=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],a=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=Pe(e,o,a)||s;else if(typeof o=="function")if(r){for(;typeof o=="function";)o=o();s=Pe(e,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||s}else e.push(o),s=!0;else{const u=String(o);a&&a.nodeType===3?(a.data=u,e.push(a)):e.push(document.createTextNode(u))}}return s}function Ke(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function G(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(s!==o){const a=o.parentNode===e;!i&&!l?a?e.replaceChild(s,o):e.insertBefore(s,n):a&&o.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}function We(e,t){const n=e.querySelectorAll("*[data-hk]");for(let r=0;r<n.length;r++){const s=n[r],i=s.getAttribute("data-hk");(!t||i.startsWith(t))&&!g.registry.has(i)&&g.registry.set(i,s)}}function un(){const e=g.context;return`${e.id}${e.count++}`}function fn(e){return g.context?void 0:e.children}function dn(){}const dt=!1,hn=(...e)=>(qt(),ln(...e)),gn="modulepreload",yn=function(e){return"/escadron-website/"+e},ze={},Xe=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=yn(i),i in ze)return;ze[i]=!0;const l=i.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(!!r)for(let c=s.length-1;c>=0;c--){const h=s[c];if(h.href===i&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":gn,l||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),l)return new Promise((c,h)=>{u.addEventListener("load",c),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function mn(e,t){e&&t&&hn(e,t)}const Oe=ne(),pn=["title","meta"],Ye=e=>e.tag+(e.name?`.${e.name}"`:""),wn=e=>{if(!g.context){const s=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(s,i=>i.parentNode.removeChild(i))}const t=new Map;function n(s){if(s.ref)return s.ref;let i=document.querySelector(`[data-sm="${s.id}"]`);return i?(i.tagName.toLowerCase()!==s.tag&&(i.parentNode&&i.parentNode.removeChild(i),i=document.createElement(s.tag)),i.removeAttribute("data-sm")):i=document.createElement(s.tag),i}const r={addClientTag:s=>{let i=Ye(s);if(pn.indexOf(s.tag)!==-1){t.has(i)||t.set(i,[]);let o=t.get(i),a=o.length;o=[...o,s],t.set(i,o);{let u=n(s);s.ref=u,de(u,s.props);let c=null;for(var l=a-1;l>=0;l--)if(o[l]!=null){c=o[l];break}u.parentNode!=document.head&&document.head.appendChild(u),c&&c.ref&&document.head.removeChild(c.ref)}return a}{let o=n(s);s.ref=o,de(o,s.props),o.parentNode!=document.head&&document.head.appendChild(o)}return-1},removeClientTag:(s,i)=>{const l=Ye(s);if(s.ref){const o=t.get(l);if(o){if(s.ref.parentNode){s.ref.parentNode.removeChild(s.ref);for(let a=i-1;a>=0;a--)o[a]!=null&&document.head.appendChild(o[a].ref)}o[i]=null,t.set(l,o)}else s.ref.parentNode&&s.ref.parentNode.removeChild(s.ref)}}};return w(Oe.Provider,{value:r,get children(){return e.children}})},Re=(e,t)=>{const n=Ht();if(!Y(Oe))throw new Error("<MetaProvider /> should be in the tree");return bn({tag:e,props:t,id:n,get name(){return t.name||t.property}}),null};function bn(e){const{addClientTag:t,removeClientTag:n,addServerTag:r}=Y(Oe);j(()=>{{let s=t(e);te(()=>n(e,s))}})}const vn=e=>Re("title",e),Ae=e=>Re("meta",e),Ge=e=>Re("link",e);function xn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function $n([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function Sn(e){try{return document.querySelector(e)}catch{return null}}function _n(e,t){const n=Sn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function An(e,t,n,r){let s=!1;const i=o=>typeof o=="string"?{value:o}:o,l=$n(I(i(e()),{equals:(o,a)=>o.value===a.value}),void 0,o=>(!s&&t(o),o));return n&&te(n((o=e())=>{s=!0,l[1](i(o)),s=!1})),{signal:l,utils:r}}function En(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:I({value:""})};return e}function Cn(){return An(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),_n(window.location.hash.slice(1),n)},e=>xn(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Pn(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,i){if(n)return!(n=!1);const l={to:s,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const o of e)o.listener({...l,from:o.location,retry:a=>{a&&(n=!0),o.navigate(s,i)}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}const kn=/^(?:[a-z0-9]+:)?\/\//i,Ln=/^\/+|(\/)\/+$/g;function ue(e,t=!1){const n=e.replace(Ln,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function me(e,t,n){if(kn.test(t))return;const r=ue(e),s=n&&ue(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+ue(t,!i)}function Nn(e,t){if(e==null)throw new Error(t);return e}function ht(e,t){return ue(e).replace(/\/*(\*.*)?$/g,"")+ue(t)}function Tn(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function On(e,t,n){const[r,s]=e.split("/*",2),i=r.split("/").filter(Boolean),l=i.length;return o=>{const a=o.split("/").filter(Boolean),u=a.length-l;if(u<0||u>0&&s===void 0&&!t)return null;const c={path:l?"":"/",params:{}},h=d=>n===void 0?void 0:n[d];for(let d=0;d<l;d++){const m=i[d],v=a[d],p=m[0]===":",A=p?m.slice(1):m;if(p&&Ee(v,h(A)))c.params[A]=v;else if(p||!Ee(v,m))return null;c.path+=`/${v}`}if(s){const d=u?a.slice(-u).join("/"):"";if(Ee(d,h(s)))c.params[s]=d;else return null}return c}}function Ee(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Rn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function gt(e){const t=new Map,n=tt();return new Proxy({},{get(r,s){return t.has(s)||kt(n,()=>t.set(s,P(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function yt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return yt(r).reduce((i,l)=>[...i,...s.map(o=>o+l)],[])}const In=100,mt=ne(),Se=ne(),pt=()=>Nn(Y(mt),"Make sure your app is wrapped in a <Router />");let he;const wt=()=>he||Y(Se)||pt().base;function Mn(e,t="",n){const{component:r,data:s,children:i}=e,l=!i||Array.isArray(i)&&!i.length,o={key:e,element:r?()=>w(r,{}):()=>{const{element:a}=e;return a===void 0&&n?w(n,{}):a},preload:e.component?r.preload:e.preload,data:s};return bt(e.path).reduce((a,u)=>{for(const c of yt(u)){const h=ht(t,c),d=l?h:h.split("/*",1)[0];a.push({...o,originalPath:c,pattern:d,matcher:On(d,!l,e.matchFilters)})}return a},[])}function jn(e,t=0){return{routes:e,score:Rn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],l=i.matcher(n);if(!l)return null;r.unshift({...l,route:i})}return r}}}function bt(e){return Array.isArray(e)?e:[e]}function vt(e,t="",n,r=[],s=[]){const i=bt(e);for(let l=0,o=i.length;l<o;l++){const a=i[l];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const u=Mn(a,t,n);for(const c of u){r.push(c);const h=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!h)vt(a.children,c.pattern,n,r,s);else{const d=jn([...r],s.length);s.push(d)}r.pop()}}}return r.length?s:s.sort((l,o)=>o.score-l.score)}function qn(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Bn(e,t){const n=new URL("http://sar"),r=P(a=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),a}},n,{equals:(a,u)=>a.href===u.href}),s=P(()=>r().pathname),i=P(()=>r().search,!0),l=P(()=>r().hash),o=P(()=>"");return{get pathname(){return s()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:gt(et(i,()=>Tn(r())))}}function Hn(e,t="",n,r){const{signal:[s,i],utils:l={}}=En(e),o=l.parsePath||(S=>S),a=l.renderPath||(S=>S),u=l.beforeLeave||Pn(),c=me("",t),h=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&i({value:c,replace:!0,scroll:!1});const[d,m]=I(!1),v=async S=>{m(!0);try{await Lt(S)}finally{m(!1)}},[p,A]=I(s().value),[k,_]=I(s().state),E=Bn(p,k),L=[],T={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(S){return me(c,S)}};if(n)try{he=T,T.data=n({data:void 0,params:{},location:E,navigate:ie(T)})}finally{he=void 0}function F(S,y,x){R(()=>{if(typeof y=="number"){y&&(l.go?u.confirm(y,x)&&l.go(y):console.warn("Router integration does not support relative routing"));return}const{replace:C,resolve:U,scroll:K,state:le}={replace:!1,resolve:!0,scroll:!0,...x},W=U?S.resolvePath(y):me("",y);if(W===void 0)throw new Error(`Path '${y}' is not a routable path`);if(L.length>=In)throw new Error("Too many redirects");const ce=p();if((W!==ce||le!==k())&&!dt){if(u.confirm(W,x)){const $t=L.push({value:ce,replace:C,scroll:K,state:k()});v(()=>{A(W),_(le),at()}).then(()=>{L.length===$t&&oe({value:W,state:le})})}}})}function ie(S){return S=S||Y(Se)||T,(y,x)=>F(S,y,x)}function oe(S){const y=L[0];y&&((S.value!==y.value||S.state!==y.state)&&i({...S,replace:y.replace,scroll:y.scroll}),L.length=0)}j(()=>{const{value:S,state:y}=s();R(()=>{S!==p()&&v(()=>{A(S),_(y)})})});{let S=function(y){if(y.defaultPrevented||y.button!==0||y.metaKey||y.altKey||y.ctrlKey||y.shiftKey)return;const x=y.composedPath().find(ce=>ce instanceof Node&&ce.nodeName.toUpperCase()==="A");if(!x||!x.hasAttribute("link"))return;const C=x.href;if(x.target||!C&&!x.hasAttribute("state"))return;const U=(x.getAttribute("rel")||"").split(/\s+/);if(x.hasAttribute("download")||U&&U.includes("external"))return;const K=new URL(C);if(K.origin!==window.location.origin||c&&K.pathname&&!K.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const le=o(K.pathname+K.search+K.hash),W=x.getAttribute("state");y.preventDefault(),F(T,le,{resolve:!1,replace:x.hasAttribute("replace"),scroll:!x.hasAttribute("noscroll"),state:W&&JSON.parse(W)})};Te(["click"]),document.addEventListener("click",S),te(()=>document.removeEventListener("click",S))}return{base:T,out:h,location:E,isRouting:d,renderPath:a,parsePath:o,navigatorFactory:ie,beforeLeave:u}}function Un(e,t,n,r,s){const{base:i,location:l,navigatorFactory:o}=e,{pattern:a,element:u,preload:c,data:h}=r().route,d=P(()=>r().path);c&&c();const m={parent:t,pattern:a,get child(){return n()},path:d,params:s,data:t.data,outlet:u,resolvePath(v){return me(i.path(),v,d())}};if(h)try{he=m,m.data=h({data:t.data,params:s,location:l,navigate:o(m)})}finally{he=void 0}return m}const Vn=e=>{const{source:t,url:n,base:r,data:s,out:i}=e,l=t||Cn(),o=Hn(l,r,s);return w(mt.Provider,{value:o,get children(){return e.children}})},Fn=e=>{const t=pt(),n=wt(),r=Le(()=>e.children),s=P(()=>vt(r(),ht(n.pattern,e.base||""),Dn)),i=P(()=>qn(s(),t.location.pathname)),l=gt(()=>{const c=i(),h={};for(let d=0;d<c.length;d++)Object.assign(h,c[d].params);return h});t.out&&t.out.matches.push(i().map(({route:c,path:h,params:d})=>({originalPath:c.originalPath,pattern:c.pattern,path:h,params:d})));const o=[];let a;const u=P(et(i,(c,h,d)=>{let m=h&&c.length===h.length;const v=[];for(let p=0,A=c.length;p<A;p++){const k=h&&h[p],_=c[p];d&&k&&_.route.key===k.route.key?v[p]=d[p]:(m=!1,o[p]&&o[p](),Q(E=>{o[p]=E,v[p]=Un(t,v[p-1]||n,()=>u()[p+1],()=>i()[p],l)}))}return o.splice(c.length).forEach(p=>p()),d&&m?d:(a=v[0],v)}));return w(Ne,{get when(){return u()&&a},keyed:!0,children:c=>w(Se.Provider,{value:c,get children(){return c.outlet()}})})},Dn=()=>{const e=wt();return w(Ne,{get when(){return e.child},keyed:!0,children:t=>w(Se.Provider,{value:t,get children(){return t.outlet()}})})},Kn=[{component:He(()=>Xe(()=>import("./index-4ce2947f.js"),["assets/index-4ce2947f.js","assets/index-47fb5314.css"])),path:"/"},{component:He(()=>Xe(()=>import("./(Inscription)-84dd34e5.js"),[])),path:"/inscription"}],Wn=()=>Kn,xt=ne({}),zn=Fn,Xn="$FETCH",Yn=se('<div><div><p id="error-message"></p><button id="reset-errors">Clear errors and retry</button><pre>');function Gn(e){return w(Ft,{fallback:(t,n)=>w(Ne,{get when(){return!e.fallback},get fallback(){return P(()=>!!e.fallback)()&&e.fallback(t,n)},get children(){return w(Jn,{error:t})}}),get children(){return e.children}})}function Jn(e){return Et(()=>console.error(e.error)),(()=>{const t=Z(Yn),n=t.firstChild,r=n.firstChild,s=r.nextSibling,i=s.nextSibling;return t.style.setProperty("padding","16px"),n.style.setProperty("background-color","rgba(252, 165, 165)"),n.style.setProperty("color","rgb(153, 27, 27)"),n.style.setProperty("border-radius","5px"),n.style.setProperty("overflow","scroll"),n.style.setProperty("padding","16px"),n.style.setProperty("margin-bottom","8px"),r.style.setProperty("font-weight","bold"),D(r,()=>e.error.message),ut(s,"click",at,!0),s.style.setProperty("color","rgba(252, 165, 165)"),s.style.setProperty("background-color","rgb(153, 27, 27)"),s.style.setProperty("border-radius","5px"),s.style.setProperty("padding","4px 8px"),i.style.setProperty("margin-top","8px"),i.style.setProperty("width","100%"),D(i,()=>e.error.stack),cn(),t})()}Te(["click"]);const Qn=!1,Zn=!1;function er(){return Y(xt),[w(dn,{}),Zn,w(fn,{get children(){return dt}}),Qn]}function tr(e){return de(document.documentElement,e,!1,!0),e.children}function nr(e){return de(document.head,e,!1,!0),e.children}function rr(e){{let t=Le(()=>e.children);return de(document.body,e,!1,!0),D(document.body,()=>{let n=t();if(n){if(Array.isArray(n)){let r=n.filter(s=>Boolean(s));return r.length?r:null}return n}return null},null,[...document.body.childNodes]),document.body}}const sr="_header_16432_1",ir="_logo_16432_8",or="_navbar_16432_51",V={header:sr,logo:ir,"logo-container":"_logo-container_16432_14","logo-text-container":"_logo-text-container_16432_20","logo-text-title":"_logo-text-title_16432_27","logo-text-description":"_logo-text-description_16432_33","right-side-container":"_right-side-container_16432_39","cadets-description":"_cadets-description_16432_45",navbar:or,"nav-element":"_nav-element_16432_60"},lr=se(`<header><div><div><img src="/logo.png" alt=""></div><div><div>Escadron 811 La Prairie</div><div>Les cadets de l'Aviation royale du Canada</div></div></div><div><p>Le programme des cadets s'adresse aux jeunes de 12 à 18 ans. Il n'y a aucun frais d'inscription.</p><nav>`),cr=se("<div>Loading..."),ar=se('<a tabindex="0">');function ur(){const e=["accueil","inscription","activités","cadets","nous rejoindre"];return(()=>{const t=Z(lr),n=t.firstChild,r=n.firstChild,s=r.nextSibling,i=s.firstChild,l=i.nextSibling,o=n.nextSibling,a=o.firstChild,u=a.nextSibling;return D(u,w(Vt,{each:e,get fallback(){return Z(cr)},children:c=>w(fr,{name:c})})),j(c=>{const h=`bg-clouds ${V.header}`,d=`${V["logo-container"]}`,m=`${V.logo} not-selectable`,v=V["logo-text-container"],p=`${V["logo-text-title"]} not-selectable`,A=`${V["logo-text-description"]} not-selectable`,k=V["right-side-container"],_=V["cadets-description"],E=V.navbar;return h!==c._v$&&M(t,c._v$=h),d!==c._v$2&&M(n,c._v$2=d),m!==c._v$3&&M(r,c._v$3=m),v!==c._v$4&&M(s,c._v$4=v),p!==c._v$5&&M(i,c._v$5=p),A!==c._v$6&&M(l,c._v$6=A),k!==c._v$7&&M(o,c._v$7=k),_!==c._v$8&&M(a,c._v$8=_),E!==c._v$9&&M(u,c._v$9=E),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})()}function fr({name:e}){return(()=>{const t=Z(ar);return ve(t,"href",e=="accueil"?"":e),D(t,()=>e.toUpperCase()),j(()=>M(t,`${V["nav-element"]}`)),t})()}const dr="_Layout_19se6_1",hr="_main_19se6_5",gr="_page_19se6_11",ke={Layout:dr,main:hr,page:gr},yr=se("<div><!#><!/><!#><!/>"),mr=se("<main><div>");function pr({children:e}){return(()=>{const t=Z(yr),n=t.firstChild,[r,s]=Ve(n.nextSibling),i=r.nextSibling,[l,o]=Ve(i.nextSibling);return D(t,w(ur,{}),r,s),D(t,w(wr,{children:e}),l,o),j(()=>M(t,ke.Layout)),t})()}function wr({children:e}){return(()=>{const t=Z(mr),n=t.firstChild;return D(n,e),j(r=>{const s=`${ke.main}`,i=ke.page;return s!==r._v$&&M(t,r._v$=s),i!==r._v$2&&M(n,r._v$2=i),r},{_v$:void 0,_v$2:void 0}),t})()}function br(){const e=["var(--white)","aliceblue"];return w(tr,{lang:"en",get children(){return[w(nr,{get children(){return[w(vn,{children:"SolidStart - Bare"}),w(Ae,{charset:"utf-8"}),w(Ae,{name:"viewport",content:"width=device-width, initial-scale=1"}),w(Ae,{name:"theme-color",content:"#000000"}),w(Ge,{rel:"shortcut icon",type:"image/ico",href:"/tabIcon.png"}),w(Ge,{rel:"stylesheet",type:"text/css",href:"//fonts.googleapis.com/css?family=Francois+One"})]}}),w(rr,{class:"bg-pattern",get style(){return`--c1: ${e[0]}; --c2: ${e[1]}`},get children(){return[w(Kt,{get children(){return w(Gn,{get children(){return w(pr,{get children(){return w(zn,{get children(){return w(Wn,{})}})}})}})}}),w(er,{})]}})]}})}const Je=Object.values(Object.assign({}))[0],vr=Je?Je.default:void 0,xr=()=>{let e={get request(){},get clientAddress(){},get locals(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(n){},getStatusCode(){},$type:Xn,fetch};function t(n){return w(Vn,n)}return w(xt.Provider,{value:e,get children(){return w(wn,{get children(){return w(t,{get base(){return"/escadron-website/"},data:vr,get children(){return w(br,{})}})}})}})};mn(()=>w(xr,{}),document);export{Vt as F,w as a,j as b,I as c,M as d,Te as e,Ve as f,Z as g,D as i,cn as r,se as t};
