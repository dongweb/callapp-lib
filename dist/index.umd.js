!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.CallApp=e()}(this,function(){"use strict";function n(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function e(n,e){return n(e={exports:{}},e.exports),e.exports}var v=e(function(n){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),y=e(function(n){var e=n.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)}),b=(y.version,function(r,o,n){if(function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!")}(r),void 0===o)return r;switch(n){case 1:return function(n){return r.call(o,n)};case 2:return function(n,e){return r.call(o,n,e)};case 3:return function(n,e,t){return r.call(o,n,e,t)}}return function(){return r.apply(o,arguments)}}),o=function(n){return"object"==typeof n?null!==n:"function"==typeof n},r=function(n){if(!o(n))throw TypeError(n+" is not an object!");return n},t=function(n){try{return!!n()}catch(n){return!0}},i=!t(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),u=v.document,a=o(u)&&o(u.createElement),c=!i&&!t(function(){return 7!=Object.defineProperty((n="div",a?u.createElement(n):{}),"a",{get:function(){return 7}}).a;var n}),f=Object.defineProperty,s={f:i?Object.defineProperty:function(n,e,t){if(r(n),e=function(n,e){if(!o(n))return n;var t,r;if(e&&"function"==typeof(t=n.toString)&&!o(r=t.call(n)))return r;if("function"==typeof(t=n.valueOf)&&!o(r=t.call(n)))return r;if(!e&&"function"==typeof(t=n.toString)&&!o(r=t.call(n)))return r;throw TypeError("Can't convert object to primitive value")}(e,!0),r(t),c)try{return f(n,e,t)}catch(n){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(n[e]=t.value),n}},m=i?function(n,e,t){return s.f(n,e,{enumerable:!((r=1)&r),configurable:!(2&r),writable:!(4&r),value:t});var r}:function(n,e,t){return n[e]=t,n},l={}.hasOwnProperty,g=function(n,e){return l.call(n,e)},O="prototype",w=function(n,e,t){var r,o,i,u=n&w.F,a=n&w.G,c=n&w.S,f=n&w.P,s=n&w.B,l=n&w.W,p=a?y:y[e]||(y[e]={}),d=p[O],h=a?v:c?v[e]:(v[e]||{})[O];for(r in a&&(t=e),t)(o=!u&&h&&void 0!==h[r])&&g(p,r)||(i=o?h[r]:t[r],p[r]=a&&"function"!=typeof h[r]?t[r]:s&&o?b(i,v):l&&h[r]==i?function(r){var n=function(n,e,t){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(n);case 2:return new r(n,e)}return new r(n,e,t)}return r.apply(this,arguments)};return n[O]=r[O],n}(i):f&&"function"==typeof i?b(Function.call,i):i,f&&((p.virtual||(p.virtual={}))[r]=i,n&w.R&&d&&!d[r]&&m(d,r,i)))};w.F=1,w.G=2,w.S=4,w.P=8,w.B=16,w.W=32,w.U=64,w.R=128;var p,d,h,_=w,k={}.toString,j=Object("z").propertyIsEnumerable(0)?Object:function(n){return"String"==(e=n,k.call(e).slice(8,-1))?n.split(""):Object(n);var e},S=function(n){if(null==n)throw TypeError("Can't call method on  "+n);return n},C=function(n){return j(S(n))},E=Math.ceil,M=Math.floor,x=function(n){return isNaN(n=+n)?0:(0<n?M:E)(n)},T=Math.min,I=Math.max,P=Math.min,F=e(function(n){var e="__core-js_shared__",t=v[e]||(v[e]={});(n.exports=function(n,e){return t[n]||(t[n]=void 0!==e?e:{})})("versions",[]).push({version:y.version,mode:"pure",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),U=0,A=Math.random(),R=F("keys"),z=(p=!1,function(n,e,t){var r,o,i,u,a=C(n),c=0<(r=a.length)?T(x(r),9007199254740991):0,f=(i=c,(o=x(o=t))<0?I(o+i,0):P(o,i));if(p&&e!=e){for(;f<c;)if((u=a[f++])!=u)return!0}else for(;f<c;f++)if((p||f in a)&&a[f]===e)return p||f||0;return!p&&-1}),W=R[d="IE_PROTO"]||(R[d]="Symbol(".concat(void 0===(h=d)?"":h,")_",(++U+A).toString(36))),q="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),B=Object.keys||function(n){return function(n,e){var t,r=C(n),o=0,i=[];for(t in r)t!=W&&g(r,t)&&i.push(t);for(;e.length>o;)g(r,t=e[o++])&&(~z(i,t)||i.push(t));return i}(n,q)},L={f:Object.getOwnPropertySymbols},Y={f:{}.propertyIsEnumerable},Q=function(n){return Object(S(n))},G=Object.assign,H=!G||t(function(){var n={},e={},t=Symbol(),r="abcdefghijklmnopqrst";return n[t]=7,r.split("").forEach(function(n){e[n]=n}),7!=G({},n)[t]||Object.keys(G({},e)).join("")!=r})?function(n,e){for(var t=Q(n),r=arguments.length,o=1,i=L.f,u=Y.f;o<r;)for(var a,c=j(arguments[o++]),f=i?B(c).concat(i(c)):B(c),s=f.length,l=0;l<s;)u.call(c,a=f[l++])&&(t[a]=c[a]);return t}:G;_(_.S+_.F,"Object",{assign:H});var N=y.Object.assign,V=n(e(function(n){n.exports={default:N,__esModule:!0}})),D=n(e(function(n,e){e.__esModule=!0,e.default=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}}));_(_.S+_.F*!i,"Object",{defineProperty:s.f});var K=y.Object,$=function(n,e,t){return K.defineProperty(n,e,t)},J=e(function(n){n.exports={default:$,__esModule:!0}});n(J);var X=n(e(function(n,e){e.__esModule=!0;var t,o=(t=J)&&t.__esModule?t:{default:t};e.default=function(){function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(n,r.key,r)}}return function(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}}()}));var Z,nn,en,tn;Z="keys",nn=function(){return function(n){return B(Q(n))}},en=(y.Object||{})[Z]||Object[Z],(tn={})[Z]=nn(en),_(_.S+_.F*t(function(){en(1)}),"Object",tn);var rn=y.Object.keys,on=n(e(function(n){n.exports={default:rn,__esModule:!0}}));function un(n,e){var t=n.path,r=n.param,o=void 0!==r?on(r).map(function(n){return n+"="+r[n]}).join("&"):"";return e.protocol+"://"+t+"?"+o}function an(n,e){var t=e.outChain,r=un(n,e);void 0!==t&&t&&(r=t.protocal+"://"+t.path+"?"+t.key+"="+encodeURIComponent(r));return r}var cn=null;function fn(n){var e,t=document.createElement("a"),r=(e=void 0,window.CustomEvent?e=new window.CustomEvent("click",{canBubble:!0,cancelable:!0}):(e=document.createEvent("HTMLEvents")).initEvent("click",!1,!1),e);t.setAttribute("href",n),t.style.display="none",document.body.appendChild(t),t.dispatchEvent(r)}function sn(n){window.top.location.href=n}function ln(n){cn||((cn=document.createElement("iframe")).frameborder="0",cn.style.cssText="display:none;border:0;width:0;height:0;",document.body.appendChild(cn)),cn.src=n}return function(){function e(n){D(this,e);this.options=V({timeout:2e3},n)}return X(e,[{key:"generateScheme",value:function(n){return an(n,this.options)}},{key:"generateIntent",value:function(n){return function(n,e){var t=n.outChain,r=e.intent,o=e.fallback,i=on(r).map(function(n){return n+"="+r[n]+";"}).join(""),u=un(n,e);if(void 0!==t&&!t){var a=n.outChain;return"intent://"+a.path+"?"+a.key+"="+encodeURIComponent(u)+"/\n      #Intent;"+i+";S.browser_fallback_url="+encodeURIComponent(o)+";end;"}return"intent://"+(u=u.slice(u.indexOf("//")+2))+"/#Intent;"+i+";end;"}(n,this.options)}},{key:"generateUniversalLink",value:function(n){return function(n,e){var t=e.universal;if(!t)return"";var r=t.host,o=t.pathKey,i=n.path,u=n.param,a=void 0!==u?on(u).map(function(n){return n+"="+u[n]}).join("&"):"";return"//"+r+"?"+o+"="+i+(a?"&":"")+a}(n,this.options)}},{key:"generateYingYongBao",value:function(n){return e=n,t=this.options,r=an(e,t),t.yingyongbao+"&android_schema="+encodeURIComponent(r);var e,t,r}},{key:"checkOpen",value:function(n){setTimeout(function(){document.hidden||document.webkitHidden||n()},this.options.timeout)}},{key:"fallToAppStore",value:function(){var n=this;this.checkOpen(function(){sn(n.options.appstore)})}},{key:"fallToFbUrl",value:function(){var n=this;this.checkOpen(function(){sn(n.options.fallback)})}},{key:"fallToCustomCb",value:function(n){this.checkOpen(function(){n()})}},{key:"open",value:function(n){var e,t,r,o,i=(e=window.navigator.userAgent||"",t=/android/i.test(e),r=/iphone|ipad|ipod/i.test(e),{isAndroid:t,isIos:r,isWechat:/micromessenger\/([\d.]+)/i.test(e),isWeibo:/(weibo).*weibo__([\d.]+)/i.test(e),isQQ:/qq\/([\d.]+)/i.test(e),isQzone:/qzone\/.*_qz_([\d.]+)/i.test(e),isOriginalChrome:/chrome\/[\d.]+ Mobile Safari\/[\d.]+/i.test(e)&&t&&e.indexOf("Version")<0,isSafari:/safari\/([\d.]+)$/i.test(e)&&r&&e.indexOf("Crios")<0&&0===e.indexOf("Mozilla")}),u=this.options,a=u.universal,c=u.appstore,f=u.logFunc,s=n.callback,l=void 0!==a,p=this.generateScheme(n),d=this.generateIntent(n),h=this.generateUniversalLink(n),v=this.generateYingYongBao(n),y=null;void 0!==f&&f(),i.isIos?i.isWechat?sn(c):(o=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),parseInt(o[1],10)<9?(ln(p),y=this.fallToAppStore):l?sn(h):(sn(p),y=this.fallToAppStore)):i.isWechat?sn(v):i.isOriginalChrome?fn(d):(ln(p),y=this.fallToFbUrl),void 0===s?y&&y.call(this):this.fallToCustomCb(s)}}]),e}()});
