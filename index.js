// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dapx=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;var l=t,c=function(e,r,t){var l,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,t.get),_&&a&&a.call(e,r,t.set),e},p=r()?l:c;var _=function(e,r,t,n){var o,i,a;if(e<=0||0===r)return t;if(1===n){if((a=e%5)>0)for(i=0;i<a;i++)t[i]+=r;if(e<5)return t;for(i=a;i<e;i+=5)t[i]+=r,t[i+1]+=r,t[i+2]+=r,t[i+3]+=r,t[i+4]+=r;return t}for(o=n<0?(1-e)*n:0,i=0;i<e;i++)t[o]+=r,o+=n;return t};return function(e,r,t){p(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(_,"ndarray",(function(e,r,t,n,o){var i,a,u;if(e<=0||0===r)return t;if(i=o,1===n){if((a=e%5)>0)for(u=0;u<a;u++)t[i]+=r,i+=n;if(e<5)return t;for(u=a;u<e;u+=5)t[i]+=r,t[i+1]+=r,t[i+2]+=r,t[i+3]+=r,t[i+4]+=r,i+=5;return t}for(u=0;u<e;u++)t[i]+=r,i+=n;return t})),_}));
//# sourceMappingURL=index.js.map
