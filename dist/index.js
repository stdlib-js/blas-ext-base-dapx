"use strict";var s=function(u,i){return function(){return i||u((i={exports:{}}).exports,i),i.exports}};var y=s(function(C,m){
var q=5;function E(u,i,e,f){var v,r,t;if(u<=0||i===0)return e;if(f===1){if(t=u%q,t>0)for(r=0;r<t;r++)e[r]+=i;if(u<q)return e;for(r=t;r<u;r+=q)e[r]+=i,e[r+1]+=i,e[r+2]+=i,e[r+3]+=i,e[r+4]+=i;return e}for(f<0?v=(1-u)*f:v=0,r=0;r<u;r++)e[v]+=i,v+=f;return e}m.exports=E
});var j=s(function(D,d){
var o=5;function O(u,i,e,f,v){var r,t,n;if(u<=0||i===0)return e;if(r=v,f===1){if(t=u%o,t>0)for(n=0;n<t;n++)e[r]+=i,r+=f;if(u<o)return e;for(n=t;n<u;n+=o)e[r]+=i,e[r+1]+=i,e[r+2]+=i,e[r+3]+=i,e[r+4]+=i,r+=o;return e}for(n=0;n<u;n++)e[r]+=i,r+=f;return e}d.exports=O
});var _=s(function(F,R){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=y(),g=j();b(M,"ndarray",g);R.exports=M
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=_(),c,a=w(k(__dirname,"./native.js"));z(a)?c=A:c=a;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
