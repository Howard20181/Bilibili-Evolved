!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/full-description"]=e():n["video/full-description"]=e()}(self,(function(){return function(){var n={356:function(n,e,t){var o=t(645)((function(n){return n[1]}));o.push([n.id,".video-desc .info,\n.video-desc .desc-info,\n.play-up-info .play-up-self {\n  height: auto !important;\n}\n\n.video-desc .btn,\n.video-desc .toggle-btn,\n.play-up-info .play-up-self-btn {\n  display: none !important;\n}",""]),n.exports=o},645:function(n){"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
e.i=function(n,t,o){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var s=0;s<n.length;s++){var u=[].concat(n[s]);o&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},85:function(n,e,t){var o=t(356);n.exports="string"==typeof o?o:o.toString()}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)};var o={};return function(){"use strict";t.d(o,{component:function(){return d}});var n=coreApis.utils.urls,e=coreApis.observer,r=coreApis.spinQuery,i=coreApis.style,c=t(85),s=t.n(c);const u="fullVideoDescription",a=()=>{(0,i.addStyle)(s(),u),(0,e.videoChange)((async()=>{if(!await(0,r.select)(".video-desc"))return;(await(0,r.select)('.video-desc .btn[report-id="abstract_spread"], .video-desc .toggle-btn'))?.click()}))},d={name:u,entry:a,reload:a,unload:()=>{(0,i.removeStyle)(u)},displayName:"展开视频简介",tags:[componentsTags.video,componentsTags.style],description:{"zh-CN":"总是展开完整的视频简介."},urlInclude:n.videoAndBangumiUrls}}(),o=o.component}()}));