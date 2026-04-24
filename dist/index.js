"use strict";var s=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var o=s(function(C,q){
var a=5;function _(t,r,e,n,R){var i,v,u;if(t<=0||r===0)return e;if(i=R,n===1){if(v=t%a,v>0)for(u=0;u<v;u++)e[i]+=r,i+=n;if(t<a)return e;for(u=v;u<t;u+=a)e[i]+=r,e[i+1]+=r,e[i+2]+=r,e[i+3]+=r,e[i+4]+=r,i+=a;return e}for(u=0;u<t;u++)e[i]+=r,i+=n;return e}q.exports=_
});var c=s(function(D,d){
var E=require('@stdlib/strided-base-stride2offset/dist'),M=o();function O(t,r,e,n){return M(t,r,e,n,E(t,n))}d.exports=O
});var j=s(function(F,m){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),g=o();b(y,"ndarray",g);m.exports=y
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=j(),f,p=w(k(__dirname,"./native.js"));z(p)?f=A:f=p;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
