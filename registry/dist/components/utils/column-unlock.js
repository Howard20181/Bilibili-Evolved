!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/column-unlock"]=t():e["utils/column-unlock"]=t()}(self,(function(){return function(){"use strict";var e,t,o={163:function(e){e.exports=coreApis.style}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var u=n[e]={exports:{}};return o[e](u,u.exports,r),u.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var u=Object.create(null);r.r(u);var c={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&o;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){c[e]=function(){return o[e]}}));return c.default=function(){return o},r.d(u,c),u},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};return function(){r.d(u,{component:function(){return c}});let e=!1,t=!0;const o="column-unlock",n=async()=>{t=!0;const{addStyle:n}=await Promise.resolve().then(r.t.bind(r,163,23));n(".article-holder { user-select: text !important }",o),e||(e=!0,document.addEventListener("copy",(e=>{t&&e.stopImmediatePropagation()}),{capture:!0}))},c={name:"columnUnlock",displayName:"专栏文字选择",entry:n,reload:n,unload:async()=>{document.getElementById(o)?.remove(),t=!1},tags:[componentsTags.utils],description:{"zh-CN":"使专栏的文字可以选择."},urlInclude:["//www.bilibili.com/read/"]}}(),u=u.component}()}));