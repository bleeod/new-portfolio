import{n as c,s as _}from"./scheduler.bdaa4df1.js";const t=[];function q(o,l=c){let n;const i=new Set;function r(e){if(_(o,e)&&(o=e,n)){const b=!t.length;for(const s of i)s[1](),t.push(s,o);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(o))}function p(e,b=c){const s=[e,b];return i.add(s),i.size===1&&(n=l(r,f)||c),e(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:p}}var u;const h=((u=globalThis.__sveltekit_1p6q0ev)==null?void 0:u.base)??"/new-portfolio";var a;const d=((a=globalThis.__sveltekit_1p6q0ev)==null?void 0:a.assets)??h;export{d as a,h as b,q as w};
