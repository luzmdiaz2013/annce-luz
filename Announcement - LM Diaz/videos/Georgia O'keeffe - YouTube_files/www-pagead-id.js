(function(){var aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var ba={s:!0},n={};try{n.__proto__=ba;m=n.s;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var p=l;
function r(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(p)p(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.C=b.prototype}
var t=this;function u(a){return"string"==typeof a}
function v(a,b){var c=a.split("."),d=t;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function w(a){a=a.split(".");for(var b=t,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function x(){}
function y(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function z(a){var b=y(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function A(a){return"function"==y(a)}
function B(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ca(a,b,c){return a.call.apply(a.bind,arguments)}
function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=ca:C=da;return C.apply(null,arguments)}
var ea=Date.now||function(){return+new Date};
function fa(a,b){function c(){}
c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.H=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function D(a){if(Error.captureStackTrace)Error.captureStackTrace(this,D);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
fa(D,Error);D.prototype.name="CustomError";var ha=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ia=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function ja(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(z(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function E(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null}
E.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};
function ka(a,b){a.g(b);a.b<a.f&&(a.b++,b.next=a.a,a.a=b)}
;var F;a:{var la=t.navigator;if(la){var ma=la.userAgent;if(ma){F=ma;break a}}F=""};function na(a,b){var c=z(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function oa(a){for(var b in a)return!1;return!0}
function pa(){var a=qa,b={},c;for(c in a)b[c]=a[c];return b}
var ra="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ra.length;f++)c=ra[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function ta(a){t.setTimeout(function(){throw a;},0)}
var G;
function ua(){var a=t.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==F.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=C(function(a){if(("*"==d||a.origin==d)&&
a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&-1==F.indexOf("Trident")&&-1==F.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.i;c.i=null;a()}};
return function(a){d.next={i:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){t.setTimeout(a,0)}}
;function va(){this.b=this.a=null}
var wa=new E(function(){return new H},function(a){a.reset()},100);
va.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function H(){this.next=this.b=this.a=null}
H.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
H.prototype.reset=function(){this.next=this.b=this.a=null};function I(a,b){J||xa();K||(J(),K=!0);var c=ya,d=wa.get();d.set(a,b);c.b?c.b.next=d:c.a=d;c.b=d}
var J;function xa(){if(-1!=String(t.Promise).indexOf("[native code]")){var a=t.Promise.resolve(void 0);J=function(){a.then(za)}}else J=function(){var a=za,c;
!(c=!A(t.setImmediate))&&(c=t.Window&&t.Window.prototype)&&(c=-1==F.indexOf("Edge")&&t.Window.prototype.setImmediate==t.setImmediate);c?(G||(G=ua()),G(a)):t.setImmediate(a)}}
var K=!1,ya=new va;function za(){for(var a;a=ya.remove();){try{a.a.call(a.b)}catch(b){ta(b)}ka(wa,a)}K=!1}
;function Aa(){}
;function Ba(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function L(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function M(a,b){this.a=0;this.j=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=x)try{var c=this;a.call(b,function(a){N(c,2,a)},function(a){N(c,3,a)})}catch(d){N(this,3,d)}}
function Ca(){this.next=this.context=this.b=this.c=this.a=null;this.f=!1}
Ca.prototype.reset=function(){this.context=this.b=this.c=this.a=null;this.f=!1};
var Da=new E(function(){return new Ca},function(a){a.reset()},100);
function Ea(a,b,c){var d=Da.get();d.c=a;d.b=b;d.context=c;return d}
function Fa(a){return new M(function(b,c){c(a)})}
M.prototype.then=function(a,b,c){return Ga(this,A(a)?a:null,A(b)?b:null,c)};
Ba(M);function O(a,b){return Ga(a,null,b,void 0)}
M.prototype.cancel=function(a){0==this.a&&I(function(){var b=new P(a);Ha(this,b)},this)};
function Ha(a,b){if(0==a.a)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.f||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.a&&1==d?Ha(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):Ia(c),Ja(c,e,3,b)))}a.c=null}else N(a,3,b)}
function Ka(a,b){a.b||2!=a.a&&3!=a.a||La(a);a.f?a.f.next=b:a.b=b;a.f=b}
function Ga(a,b,c,d){var e=Ea(null,null,null);e.a=new M(function(a,g){e.c=b?function(c){try{var e=b.call(d,c);a(e)}catch(q){g(q)}}:a;
e.b=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof P?g(b):a(e)}catch(q){g(q)}}:g});
e.a.c=a;Ka(a,e);return e.a}
M.prototype.v=function(a){this.a=0;N(this,2,a)};
M.prototype.w=function(a){this.a=0;N(this,3,a)};
function N(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;a:{var d=c,e=a.v,f=a.w;if(d instanceof M){Ka(d,Ea(e||x,f||null,a));var g=!0}else if(L(d))d.then(e,f,a),g=!0;else{if(B(d))try{var k=d.then;if(A(k)){Ma(d,k,e,f,a);g=!0;break a}}catch(h){f.call(a,h);g=!0;break a}g=!1}}g||(a.j=c,a.a=b,a.c=null,La(a),3!=b||c instanceof P||Na(a,c))}}
function Ma(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(h){f(h)}}
function La(a){a.h||(a.h=!0,I(a.u,a))}
function Ia(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}
M.prototype.u=function(){for(var a;a=Ia(this);)Ja(this,a,this.a,this.j);this.h=!1};
function Ja(a,b,c,d){if(3==c&&b.b&&!b.f)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Oa(b,c,d);else try{b.f?b.c.call(b.context):Oa(b,c,d)}catch(e){Pa.call(null,e)}ka(Da,b)}
function Oa(a,b,c){2==b?a.c.call(a.context,c):a.b&&a.b.call(a.context,c)}
function Na(a,b){a.g=!0;I(function(){a.g&&Pa.call(null,b)})}
var Pa=ta;function P(a){D.call(this,a)}
fa(P,D);P.prototype.name="cancel";var Q=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function R(a){return a?decodeURI(a):a}
function Qa(a,b,c){if("array"==y(b))for(var d=0;d<b.length;d++)Qa(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ra(a){var b=[],c;for(c in a)Qa(c,a[c],b);return b.join("&")}
;var S=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",S);function Sa(a){var b=arguments;if(1<b.length)S[b[0]]=b[1];else{b=b[0];for(var c in b)S[c]=b[c]}}
function T(a,b){return a in S?S[a]:b}
;ea();function Ta(a){var b=w("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),Sa("ERRORS",b))}
function Ua(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ta(b)}}:a}
;var Va=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Wa(){if(!Va)return null;var a=Va();return"open"in a?a:null}
function Xa(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Ya(a,b){A(a)&&(a=Ua(a));return window.setTimeout(a,b)}
;function Za(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==y(b[f])?ja(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function $a(a,b){var c=a.split("#",2);a=c[0];c=1<c.length?"#"+c[1]:"";var d=a.split("?",2);a=d[0];var e=Za(d[1]||"");for(f in b)e[f]=b[f];d=a;var f=Ra(e);if(f){e=d.indexOf("#");0>e&&(e=d.length);var g=d.indexOf("?");if(0>g||g>e){g=e;var k=""}else k=d.substring(g+1,e);d=[d.substr(0,g),k,d.substr(e)];e=d[1];d[1]=f?e?e+"&"+f:f:e;f=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else f=d;return f+c}
;var ab={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},bb=!1;
function cb(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=a.match(Q)[1]||null,e=R(a.match(Q)[3]||null);d&&e?(d=c,c=a.match(Q),d=d.match(Q),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?R(c.match(Q)[3]||null)==e&&(Number(c.match(Q)[4]||null)||null)==(Number(a.match(Q)[4]||null)||null):!0;for(var f in ab){if((e=d=T(ab[f]))&&!(e=c)){var g=a;e=f;var k=T("CORS_HEADER_WHITELIST")||{};e=(g=R(g.match(Q)[3]||null))?(k=k[g])?0<=ha(k,e):!1:!0}e&&(b[f]=d)}return b}
function db(a,b){var c=T("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.J&&(!R(a.match(Q)[3]||null)||b.withCredentials||R(a.match(Q)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.o&&b.o[c])}
function eb(a,b){var c=b.format||"JSON";b.K&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=T("XSRF_FIELD_NAME",void 0),e=T("XSRF_TOKEN",void 0),f=b.M;f&&(f[d]&&delete f[d],a=$a(a,f||{}));f=b.L||"";var g=b.o;db(a,b)&&(g||(g={}),g[d]=e);g&&u(f)&&(d=Za(f),sa(d,g),f=b.B&&"JSON"==b.B?JSON.stringify(d):Ra(d));d=f||g&&!oa(g);!bb&&d&&"POST"!=b.method&&(bb=!0,Ta(Error("AJAX request with postData should use POST")));var k=!1,h,
q=fb(a,function(a){if(!k){k=!0;h&&window.clearTimeout(h);var d=Xa(a),e=null;if(d||400<=a.status&&500>a.status)e=gb(c,a,b.I);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||t;d?b.l&&b.l.call(f,a):b.onError&&b.onError.call(f,a,e);b.A&&b.A.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.m&&0<b.timeout&&(h=Ya(function(){k||(k=!0,q.abort(),window.clearTimeout(h),b.m.call(b.context||t))},b.timeout))}
function gb(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?hb(b):null)d={},ia(b.getElementsByTagName("*"),function(a){d[a.tagName]=ib(a)})}c&&jb(d);
return d}
function jb(a){if(B(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=new Aa:jb(a[b])}}
function hb(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ib(a){var b="";ia(a.childNodes,function(a){b+=a.nodeValue});
return b}
function fb(a,b,c,d,e,f,g){function k(){4==(h&&"readyState"in h?h.readyState:0)&&b&&Ua(b)(h)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var h=Wa();if(!h)return null;"onloadend"in h?h.addEventListener("loadend",k,!1):h.onreadystatechange=k;h.open(c,a,!0);f&&(h.responseType=f);g&&(h.withCredentials=!0);c="POST"==c;if(e=cb(a,e))for(var q in e)h.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);return h}
;function kb(){var a=na(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie")||T("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1)||T("EXPERIMENT_FLAGS",{}).html5_serverside_pagead_id_sets_cookie?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id",b=pa();return new M(function(c,d){b.l=function(a){Xa(a)?c(a):d(new U("Request failed, status="+a.status,"net.badstatus"))};
b.onError=function(){d(new U("Unknown request error","net.unknown"))};
b.m=function(){d(new U("Request timed out","net.timeout"))};
eb(a,b)})}
var lb={D:"net.badstatus",F:"net.retryexhausted",TIMEOUT:"net.timeout",G:"net.unknown"};function U(a,b){D.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
r(U,D);var mb=U;function V(a){this.c=void 0===a?null:a;this.a=0;this.b=null}
V.prototype.then=function(a,b,c){return this.c?this.c.then(a,b,c):1===this.a&&a?(a=a.call(c,this.b),L(a)?a:nb(a)):2===this.a&&b?(a=b.call(c,this.b),L(a)?a:ob(a)):this};
Ba(V);function ob(a){var b=new V;a=void 0===a?null:a;b.a=2;b.b=void 0===a?null:a;return b}
function nb(a){var b=new V;a=void 0===a?null:a;b.a=1;b.b=void 0===a?null:a;return b}
;function W(a){D.call(this,a.message||a.description||a.name);this.isMissing=a instanceof X;this.isTimeout=a instanceof mb&&a.errorCode==lb.TIMEOUT;this.isCanceled=a instanceof P}
r(W,D);W.prototype.name="BiscottiError";function X(){D.call(this,"Biscotti ID is missing from server")}
r(X,D);X.prototype.name="BiscottiMissingError";var qa={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Y=null;function pb(){if("1"===na(T("PLAYER_CONFIG",{}),"args","privembed"))return Fa(Error("Biscotti ID is not available in private embed mode"));Y||(Y=O(kb().then(qb),function(a){return rb(2,a)}));
return Y}
function qb(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new X;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new X;a=a.id;sb(a);Y=nb(a);tb(18E5,2);return a}
function rb(a,b){var c=new W(b);sb("");Y=ob(c);0<a&&tb(12E4,a-1);throw c;}
function tb(a,b){Ya(function(){O(kb().then(qb,function(a){return rb(b,a)}),x)},a)}
function sb(a){v("yt.ads.biscotti.lastId_",a)}
;w("yt.ads.biscotti.getId_")||v("yt.ads.biscotti.getId_",pb);var Z;try{var ub=w("yt.ads.biscotti.getId_");Z=ub?ub():pb()}catch(a){Z=Fa(a)}O(Z,x);}).call(this);
