!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/danmaku/airborne"]=t():e["video/danmaku/airborne"]=t()}(self,(function(){return function(){var e,t,n={16:function(e,t,n){var r=n(645)((function(e){return e[1]}));r.push([e.id,".bilibili-player-video-danmaku .b-danmaku.airborne {\n  text-decoration: underline;\n  cursor: pointer;\n  pointer-events: initial;\n}",""]),e.exports=r},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,r){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},978:function(e,t,n){var r=n(16);e.exports="string"==typeof r?r:r.toString()}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,exports:{}};return n[e](i,i.exports,o),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var i=Object.create(null);o.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&r&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){a[e]=function(){return n[e]}}));return a.default=function(){return n},o.d(i,a),i},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";o.d(i,{component:function(){return c}});var e=coreApis.componentApis.styledComponent,t=coreApis.componentApis.video.videoDanmaku,n=coreApis.observer,r=coreApis.spinQuery,a=coreApis.utils.urls;const c={displayName:"启用弹幕空降",author:{name:"kdxcxs",link:"https://github.com/kdxcxs"},description:{"zh-CN":"为可能含有时间点的弹幕添加下划线, 点击可以跳到视频对应时间."},tags:[componentsTags.video],urlInclude:a.playerUrls,...(0,e.toggleStyle)("danmakuAirborne",(()=>Promise.resolve().then(o.t.bind(o,978,23))),(async({settings:e})=>{const{enabled:o}=e,i=e=>{if(!e)return NaN;const t=e.match(/(\d+)[ ]*[:：时分][ ]*(\d+)([ ]*[:：分][ ]*(\d+))?/);if(!t)return NaN;if(t[3]){const[,n,r,,o]=t.map((e=>parseInt(e)));return[n,r,o].some((e=>Number.isNaN(e)))||e.includes("分")&&!e.includes("时")?NaN:3600*n+60*r+o}const[,n,r]=t.map((e=>parseInt(e)));return[n,r].some((e=>Number.isNaN(e)))?NaN:60*n+r},a=e=>{if(!o)return;const t=e.target;if(!t.classList.contains("b-danmaku"))return;const n=i(t.textContent);Number.isNaN(n)||unsafeWindow.player.seek(n,!1)};(0,t.forEachVideoDanmaku)({added:e=>{const t=!Number.isNaN(i(e.text));e.element.classList.toggle("airborne",t)}}),(0,n.videoChange)((async()=>{const e=await(0,r.select)(".bilibili-player-video-wrap");e.classList.contains("airborne-enabled")||(e.classList.add("airborne-enabled"),e.addEventListener("click",a))}))}))}}(),i=i.component}()}));