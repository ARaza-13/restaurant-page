(()=>{var t={28:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(537),o=n.n(r),c=n(645),a=n.n(c)()(o());a.push([t.id,"img {\n    display: block;\n    width: 100%;\n}\n\n.home img {\n    width: 20%;\n}\n\n.menu-item img {\n    width: 15%;\n}\n\n.contact img {\n    width: 50%;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd",sourcesContent:["img {\n    display: block;\n    width: 100%;\n}\n\n.home img {\n    width: 20%;\n}\n\n.menu-item img {\n    width: 15%;\n}\n\n.contact img {\n    width: 50%;\n}"],sourceRoot:""}]);const i=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,c){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);r&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),c="/*# ".concat(o," */");return[e].concat([c]).join("\n")}return[e].join("\n")}},699:(t,e,n)=>{t.exports=n.p+"imgs/krabby-patty.9187a961f61c61854318ba68a953efd4.png"},847:(t,e,n)=>{t.exports=n.p+"imgs/krusty-krab-logo.eb40e1320e407f5945cb6b2d68f6c6bc.png"},442:(t,e,n)=>{t.exports=n.p+"imgs/krusty-krab.3c00128f7707b663de97a13778548036.png"},172:(t,e,n)=>{t.exports=n.p+"imgs/no-this-is-patrick.ac2f37098f6bd67c3e5953b7731cf91f.gif"},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var c={},a=[],i=0;i<t.length;i++){var s=t[i],d=r.base?s[0]+r.base:s[0],u=c[d]||0,l="".concat(d," ").concat(u);c[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=i,e.splice(i,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var c=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<c.length;a++){var i=n(c[a]);e[i].references--}for(var s=r(t,o),d=0;d<c.length;d++){var u=n(c[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}c=s}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var c=e[r]={id:r,exports:{}};return t[r](c,c.exports,n),c.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!t;)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{"use strict";var t=n(847),e=n.n(t);const r=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home");const n=document.createElement("h1");n.textContent="Krusty Krab";const r=document.createElement("img");r.src=e(),r.alt="Krusty Krab Logo";const o=document.createElement("p");return o.textContent="Welcome to the Krusty Krab! How may we take your order?",t.appendChild(n),t.appendChild(r),t.appendChild(o),t}())};var o=n(699),c=n.n(o);const a=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu"),t.appendChild(function(t,e){const n=document.createElement("div");n.classList.add("menu-item");const r=document.createElement("h2");r.textContent=t;const o=document.createElement("p");o.textContent="$1.25";const a=document.createElement("img");return a.src=`${c()}`,a.alt=`${t}`,n.appendChild(a),n.appendChild(r),n.appendChild(o),n}("Krabby Patty")),t}())};var i=n(172),s=n.n(i),d=n(442),u=n.n(d);function l(t){document.querySelectorAll(".button-nav").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}var p=n(379),m=n.n(p),f=n(795),h=n.n(f),v=n(569),g=n.n(v),b=n(565),y=n.n(b),C=n(216),A=n.n(C),E=n(589),x=n.n(E),w=n(28),I={};I.styleTagTransform=x(),I.setAttributes=y(),I.insert=g().bind(null,"head"),I.domAPI=h(),I.insertStyleElement=A(),m()(w.Z,I),w.Z&&w.Z.locals&&w.Z.locals,function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("nav"),e=document.createElement("button");e.classList.add("button-nav"),e.textContent="Home",e.addEventListener("click",(t=>{t.target.classList.contains("active")||(l(e),r())}));const n=document.createElement("button");n.classList.add("button-nav"),n.textContent="Menu",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(l(n),a())}));const o=document.createElement("button");return o.classList.add("button-nav"),o.textContent="Contact",o.addEventListener("click",(t=>{t.target.classList.contains("active")||(l(o),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contact");const e=document.createElement("div"),n=document.createElement("p");n.textContent="Feel free to contact us! But please be sure to ask for Patrick...",e.appendChild(n);const r=document.createElement("img");r.src=`${s()}`,r.alt="THIS IS PATRICK!",e.appendChild(r);const o=document.createElement("p");o.textContent="⚓ 831 Bottom Feeder Lane, Downtown Bikini Bottom";const c=document.createElement("img");return c.src=`${u()}`,c.alt="Krusty Krab",t.appendChild(e),t.appendChild(o),t.appendChild(c),t}())}())})),t.appendChild(e),t.appendChild(n),t.appendChild(o),t}()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),l(document.querySelector(".button-nav")),r()}()})()})();
//# sourceMappingURL=main.23267eef68baa6dcb0dc.js.map