if(!self.define){let e,s={};const o=(o,c)=>(o=new URL(o+".js",c).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(c,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const i=e=>o(e,r),l={module:{uri:r},exports:t,require:i};s[r]=Promise.all(c.map((e=>l[e]||i(e)))).then((e=>(n(...e),t)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eco-safety"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/eco-safety/css/app.0ba3ba44.css",revision:null},{url:"/eco-safety/css/chunk-vendors.11d395a7.css",revision:null},{url:"/eco-safety/index.html",revision:"8cbc974e3b4718de50b775a4d912a35c"},{url:"/eco-safety/js/app.3a511767.js",revision:null},{url:"/eco-safety/js/chunk-vendors.5e9baa3f.js",revision:null},{url:"/eco-safety/manifest.json",revision:"c8eaf346183ea9d235c752c9e967455b"},{url:"/eco-safety/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
