(self["webpackChunke_commerce"]=self["webpackChunke_commerce"]||[]).push([[998],{9662:function(e,t,c){var s=c(614),n=c(6330),r=TypeError;e.exports=function(e){if(s(e))return e;throw r(n(e)+" is not a function")}},6077:function(e,t,c){var s=c(614),n=String,r=TypeError;e.exports=function(e){if("object"==typeof e||s(e))return e;throw r("Can't set "+n(e)+" as a prototype")}},5787:function(e,t,c){var s=c(7976),n=TypeError;e.exports=function(e,t){if(s(t,e))return e;throw n("Incorrect invocation")}},9670:function(e,t,c){var s=c(111),n=String,r=TypeError;e.exports=function(e){if(s(e))return e;throw r(n(e)+" is not an object")}},1318:function(e,t,c){var s=c(5656),n=c(1400),r=c(6244),i=function(e){return function(t,c,i){var a,o=s(t),l=r(o),u=n(i,l);if(e&&c!=c){while(l>u)if(a=o[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in o)&&o[u]===c)return e||u||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},3658:function(e,t,c){"use strict";var s=c(9781),n=c(3157),r=TypeError,i=Object.getOwnPropertyDescriptor,a=s&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(n(e)&&!i(e,"length").writable)throw r("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,c){var s=c(1702),n=s({}.toString),r=s("".slice);e.exports=function(e){return r(n(e),8,-1)}},648:function(e,t,c){var s=c(1694),n=c(614),r=c(4326),i=c(5112),a=i("toStringTag"),o=Object,l="Arguments"==r(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(c){}};e.exports=s?r:function(e){var t,c,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(c=u(t=o(e),a))?c:l?r(t):"Object"==(s=r(t))&&n(t.callee)?"Arguments":s}},9920:function(e,t,c){var s=c(2597),n=c(3887),r=c(1236),i=c(3070);e.exports=function(e,t,c){for(var a=n(t),o=i.f,l=r.f,u=0;u<a.length;u++){var h=a[u];s(e,h)||c&&s(c,h)||o(e,h,l(t,h))}}},8880:function(e,t,c){var s=c(9781),n=c(3070),r=c(9114);e.exports=s?function(e,t,c){return n.f(e,t,r(1,c))}:function(e,t,c){return e[t]=c,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,c){var s=c(6339),n=c(3070);e.exports=function(e,t,c){return c.get&&s(c.get,t,{getter:!0}),c.set&&s(c.set,t,{setter:!0}),n.f(e,t,c)}},8052:function(e,t,c){var s=c(614),n=c(3070),r=c(6339),i=c(3072);e.exports=function(e,t,c,a){a||(a={});var o=a.enumerable,l=void 0!==a.name?a.name:t;if(s(c)&&r(c,l,a),a.global)o?e[t]=c:i(t,c);else{try{a.unsafe?e[t]&&(o=!0):delete e[t]}catch(u){}o?e[t]=c:n.f(e,t,{value:c,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,c){var s=c(7854),n=Object.defineProperty;e.exports=function(e,t){try{n(s,e,{value:t,configurable:!0,writable:!0})}catch(c){s[e]=t}return t}},5117:function(e,t,c){"use strict";var s=c(6330),n=TypeError;e.exports=function(e,t){if(!delete e[t])throw n("Cannot delete property "+s(t)+" of "+s(e))}},9781:function(e,t,c){var s=c(7293);e.exports=!s((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,c="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:c}},317:function(e,t,c){var s=c(7854),n=c(111),r=s.document,i=n(r)&&n(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},7207:function(e){var t=TypeError,c=9007199254740991;e.exports=function(e){if(e>c)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,c){var s=c(5005);e.exports=s("navigator","userAgent")||""},7392:function(e,t,c){var s,n,r=c(7854),i=c(8113),a=r.process,o=r.Deno,l=a&&a.versions||o&&o.version,u=l&&l.v8;u&&(s=u.split("."),n=s[0]>0&&s[0]<4?1:+(s[0]+s[1])),!n&&i&&(s=i.match(/Edge\/(\d+)/),(!s||s[1]>=74)&&(s=i.match(/Chrome\/(\d+)/),s&&(n=+s[1]))),e.exports=n},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,c){var s=c(1702),n=Error,r=s("".replace),i=function(e){return String(n(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,o=a.test(i);e.exports=function(e,t){if(o&&"string"==typeof e&&!n.prepareStackTrace)while(t--)e=r(e,a,"");return e}},2109:function(e,t,c){var s=c(7854),n=c(1236).f,r=c(8880),i=c(8052),a=c(3072),o=c(9920),l=c(4705);e.exports=function(e,t){var c,u,h,f,d,m,p=e.target,v=e.global,C=e.stat;if(u=v?s:C?s[p]||a(p,{}):(s[p]||{}).prototype,u)for(h in t){if(d=t[h],e.dontCallGetSet?(m=n(u,h),f=m&&m.value):f=u[h],c=l(v?h:p+(C?".":"#")+h,e.forced),!c&&void 0!==f){if(typeof d==typeof f)continue;o(d,f)}(e.sham||f&&f.sham)&&r(d,"sham",!0),i(u,h,d,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,c){var s=c(7293);e.exports=!s((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,c){var s=c(4374),n=Function.prototype.call;e.exports=s?n.bind(n):function(){return n.apply(n,arguments)}},6530:function(e,t,c){var s=c(9781),n=c(2597),r=Function.prototype,i=s&&Object.getOwnPropertyDescriptor,a=n(r,"name"),o=a&&"something"===function(){}.name,l=a&&(!s||s&&i(r,"name").configurable);e.exports={EXISTS:a,PROPER:o,CONFIGURABLE:l}},1702:function(e,t,c){var s=c(4374),n=Function.prototype,r=n.call,i=s&&n.bind.bind(r,r);e.exports=s?i:function(e){return function(){return r.apply(e,arguments)}}},5005:function(e,t,c){var s=c(7854),n=c(614),r=function(e){return n(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?r(s[e]):s[e]&&s[e][t]}},8173:function(e,t,c){var s=c(9662),n=c(8554);e.exports=function(e,t){var c=e[t];return n(c)?void 0:s(c)}},7854:function(e,t,c){var s=function(e){return e&&e.Math==Math&&e};e.exports=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof c.g&&c.g)||function(){return this}()||Function("return this")()},2597:function(e,t,c){var s=c(1702),n=c(7908),r=s({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return r(n(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,c){var s=c(9781),n=c(7293),r=c(317);e.exports=!s&&!n((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,c){var s=c(1702),n=c(7293),r=c(4326),i=Object,a=s("".split);e.exports=n((function(){return!i("z").propertyIsEnumerable(0)}))?function(e){return"String"==r(e)?a(e,""):i(e)}:i},9587:function(e,t,c){var s=c(614),n=c(111),r=c(7674);e.exports=function(e,t,c){var i,a;return r&&s(i=t.constructor)&&i!==c&&n(a=i.prototype)&&a!==c.prototype&&r(e,a),e}},2788:function(e,t,c){var s=c(1702),n=c(614),r=c(5465),i=s(Function.toString);n(r.inspectSource)||(r.inspectSource=function(e){return i(e)}),e.exports=r.inspectSource},9909:function(e,t,c){var s,n,r,i=c(4811),a=c(7854),o=c(111),l=c(8880),u=c(2597),h=c(5465),f=c(6200),d=c(3501),m="Object already initialized",p=a.TypeError,v=a.WeakMap,C=function(e){return r(e)?n(e):s(e,{})},z=function(e){return function(t){var c;if(!o(t)||(c=n(t)).type!==e)throw p("Incompatible receiver, "+e+" required");return c}};if(i||h.state){var g=h.state||(h.state=new v);g.get=g.get,g.has=g.has,g.set=g.set,s=function(e,t){if(g.has(e))throw p(m);return t.facade=e,g.set(e,t),t},n=function(e){return g.get(e)||{}},r=function(e){return g.has(e)}}else{var H=f("state");d[H]=!0,s=function(e,t){if(u(e,H))throw p(m);return t.facade=e,l(e,H,t),t},n=function(e){return u(e,H)?e[H]:{}},r=function(e){return u(e,H)}}e.exports={set:s,get:n,has:r,enforce:C,getterFor:z}},3157:function(e,t,c){var s=c(4326);e.exports=Array.isArray||function(e){return"Array"==s(e)}},614:function(e,t,c){var s=c(4154),n=s.all;e.exports=s.IS_HTMLDDA?function(e){return"function"==typeof e||e===n}:function(e){return"function"==typeof e}},4705:function(e,t,c){var s=c(7293),n=c(614),r=/#|\.prototype\./,i=function(e,t){var c=o[a(e)];return c==u||c!=l&&(n(t)?s(t):!!t)},a=i.normalize=function(e){return String(e).replace(r,".").toLowerCase()},o=i.data={},l=i.NATIVE="N",u=i.POLYFILL="P";e.exports=i},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,c){var s=c(614),n=c(4154),r=n.all;e.exports=n.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:s(e)||e===r}:function(e){return"object"==typeof e?null!==e:s(e)}},1913:function(e){e.exports=!1},2190:function(e,t,c){var s=c(5005),n=c(614),r=c(7976),i=c(3307),a=Object;e.exports=i?function(e){return"symbol"==typeof e}:function(e){var t=s("Symbol");return n(t)&&r(t.prototype,a(e))}},6244:function(e,t,c){var s=c(7466);e.exports=function(e){return s(e.length)}},6339:function(e,t,c){var s=c(7293),n=c(614),r=c(2597),i=c(9781),a=c(6530).CONFIGURABLE,o=c(2788),l=c(9909),u=l.enforce,h=l.get,f=Object.defineProperty,d=i&&!s((function(){return 8!==f((function(){}),"length",{value:8}).length})),m=String(String).split("String"),p=e.exports=function(e,t,c){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),c&&c.getter&&(t="get "+t),c&&c.setter&&(t="set "+t),(!r(e,"name")||a&&e.name!==t)&&(i?f(e,"name",{value:t,configurable:!0}):e.name=t),d&&c&&r(c,"arity")&&e.length!==c.arity&&f(e,"length",{value:c.arity});try{c&&r(c,"constructor")&&c.constructor?i&&f(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(n){}var s=u(e);return r(s,"source")||(s.source=m.join("string"==typeof t?t:"")),e};Function.prototype.toString=p((function(){return n(this)&&h(this).source||o(this)}),"toString")},4758:function(e){var t=Math.ceil,c=Math.floor;e.exports=Math.trunc||function(e){var s=+e;return(s>0?c:t)(s)}},6277:function(e,t,c){var s=c(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:s(e)}},3070:function(e,t,c){var s=c(9781),n=c(4664),r=c(3353),i=c(9670),a=c(4948),o=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";t.f=s?r?function(e,t,c){if(i(e),t=a(t),i(c),"function"===typeof e&&"prototype"===t&&"value"in c&&d in c&&!c[d]){var s=u(e,t);s&&s[d]&&(e[t]=c.value,c={configurable:f in c?c[f]:s[f],enumerable:h in c?c[h]:s[h],writable:!1})}return l(e,t,c)}:l:function(e,t,c){if(i(e),t=a(t),i(c),n)try{return l(e,t,c)}catch(s){}if("get"in c||"set"in c)throw o("Accessors not supported");return"value"in c&&(e[t]=c.value),e}},1236:function(e,t,c){var s=c(9781),n=c(6916),r=c(5296),i=c(9114),a=c(5656),o=c(4948),l=c(2597),u=c(4664),h=Object.getOwnPropertyDescriptor;t.f=s?h:function(e,t){if(e=a(e),t=o(t),u)try{return h(e,t)}catch(c){}if(l(e,t))return i(!n(r.f,e,t),e[t])}},8006:function(e,t,c){var s=c(6324),n=c(748),r=n.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return s(e,r)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,c){var s=c(1702);e.exports=s({}.isPrototypeOf)},6324:function(e,t,c){var s=c(1702),n=c(2597),r=c(5656),i=c(1318).indexOf,a=c(3501),o=s([].push);e.exports=function(e,t){var c,s=r(e),l=0,u=[];for(c in s)!n(a,c)&&n(s,c)&&o(u,c);while(t.length>l)n(s,c=t[l++])&&(~i(u,c)||o(u,c));return u}},5296:function(e,t){"use strict";var c={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,n=s&&!c.call({1:2},1);t.f=n?function(e){var t=s(this,e);return!!t&&t.enumerable}:c},7674:function(e,t,c){var s=c(1702),n=c(9670),r=c(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,c={};try{e=s(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(c,[]),t=c instanceof Array}catch(i){}return function(c,s){return n(c),r(s),t?e(c,s):c.__proto__=s,c}}():void 0)},2140:function(e,t,c){var s=c(6916),n=c(614),r=c(111),i=TypeError;e.exports=function(e,t){var c,a;if("string"===t&&n(c=e.toString)&&!r(a=s(c,e)))return a;if(n(c=e.valueOf)&&!r(a=s(c,e)))return a;if("string"!==t&&n(c=e.toString)&&!r(a=s(c,e)))return a;throw i("Can't convert object to primitive value")}},3887:function(e,t,c){var s=c(5005),n=c(1702),r=c(8006),i=c(5181),a=c(9670),o=n([].concat);e.exports=s("Reflect","ownKeys")||function(e){var t=r.f(a(e)),c=i.f;return c?o(t,c(e)):t}},7066:function(e,t,c){"use strict";var s=c(9670);e.exports=function(){var e=s(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},4488:function(e,t,c){var s=c(8554),n=TypeError;e.exports=function(e){if(s(e))throw n("Can't call method on "+e);return e}},6200:function(e,t,c){var s=c(2309),n=c(9711),r=s("keys");e.exports=function(e){return r[e]||(r[e]=n(e))}},5465:function(e,t,c){var s=c(7854),n=c(3072),r="__core-js_shared__",i=s[r]||n(r,{});e.exports=i},2309:function(e,t,c){var s=c(1913),n=c(5465);(e.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.1",mode:s?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,c){var s=c(7392),n=c(7293);e.exports=!!Object.getOwnPropertySymbols&&!n((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&s&&s<41}))},1400:function(e,t,c){var s=c(9303),n=Math.max,r=Math.min;e.exports=function(e,t){var c=s(e);return c<0?n(c+t,0):r(c,t)}},5656:function(e,t,c){var s=c(8361),n=c(4488);e.exports=function(e){return s(n(e))}},9303:function(e,t,c){var s=c(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:s(t)}},7466:function(e,t,c){var s=c(9303),n=Math.min;e.exports=function(e){return e>0?n(s(e),9007199254740991):0}},7908:function(e,t,c){var s=c(4488),n=Object;e.exports=function(e){return n(s(e))}},7593:function(e,t,c){var s=c(6916),n=c(111),r=c(2190),i=c(8173),a=c(2140),o=c(5112),l=TypeError,u=o("toPrimitive");e.exports=function(e,t){if(!n(e)||r(e))return e;var c,o=i(e,u);if(o){if(void 0===t&&(t="default"),c=s(o,e,t),!n(c)||r(c))return c;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,c){var s=c(7593),n=c(2190);e.exports=function(e){var t=s(e,"string");return n(t)?t:t+""}},1694:function(e,t,c){var s=c(5112),n=s("toStringTag"),r={};r[n]="z",e.exports="[object z]"===String(r)},1340:function(e,t,c){var s=c(648),n=String;e.exports=function(e){if("Symbol"===s(e))throw TypeError("Cannot convert a Symbol value to a string");return n(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(c){return"Object"}}},9711:function(e,t,c){var s=c(1702),n=0,r=Math.random(),i=s(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+i(++n+r,36)}},3307:function(e,t,c){var s=c(6293);e.exports=s&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,c){var s=c(9781),n=c(7293);e.exports=s&&n((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,c){var s=c(7854),n=c(614),r=s.WeakMap;e.exports=n(r)&&/native code/.test(String(r))},5112:function(e,t,c){var s=c(7854),n=c(2309),r=c(2597),i=c(9711),a=c(6293),o=c(3307),l=n("wks"),u=s.Symbol,h=u&&u["for"],f=o?u:u&&u.withoutSetter||i;e.exports=function(e){if(!r(l,e)||!a&&"string"!=typeof l[e]){var t="Symbol."+e;a&&r(u,e)?l[e]=u[e]:l[e]=o&&h?h(t):f(t)}return l[e]}},7658:function(e,t,c){"use strict";var s=c(2109),n=c(7908),r=c(6244),i=c(3658),a=c(7207),o=c(7293),l=o((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();s({target:"Array",proto:!0,arity:1,forced:l||u},{push:function(e){var t=n(this),c=r(t),s=arguments.length;a(c+s);for(var o=0;o<s;o++)t[c]=arguments[o],c++;return i(t,c),c}})},541:function(e,t,c){"use strict";var s=c(2109),n=c(7908),r=c(6244),i=c(3658),a=c(5117),o=c(7207),l=1!==[].unshift(0),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();s({target:"Array",proto:!0,arity:1,forced:l||u},{unshift:function(e){var t=n(this),c=r(t),s=arguments.length;if(s){o(c+s);var l=c;while(l--){var u=l+s;l in t?t[u]=t[l]:a(t,u)}for(var h=0;h<s;h++)t[h]=arguments[h]}return i(t,c+s)}})},2087:function(e,t,c){var s=c(7854),n=c(9781),r=c(7045),i=c(7066),a=c(7293),o=s.RegExp,l=o.prototype,u=n&&a((function(){var e=!0;try{o(".","d")}catch(u){e=!1}var t={},c="",s=e?"dgimsy":"gimsy",n=function(e,s){Object.defineProperty(t,e,{get:function(){return c+=s,!0}})},r={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var i in e&&(r.hasIndices="d"),r)n(i,r[i]);var a=Object.getOwnPropertyDescriptor(l,"flags").get.call(t);return a!==s||c!==s}));u&&r(l,"flags",{configurable:!0,get:i})},2801:function(e,t,c){"use strict";var s=c(2109),n=c(7854),r=c(5005),i=c(9114),a=c(3070).f,o=c(2597),l=c(5787),u=c(9587),h=c(6277),f=c(3678),d=c(1060),m=c(9781),p=c(1913),v="DOMException",C=r("Error"),z=r(v),g=function(){l(this,H);var e=arguments.length,t=h(e<1?void 0:arguments[0]),c=h(e<2?void 0:arguments[1],"Error"),s=new z(t,c),n=C(t);return n.name=v,a(s,"stack",i(1,d(n.stack,1))),u(s,this,g),s},H=g.prototype=z.prototype,M="stack"in C(v),V="stack"in new z(1,2),L=z&&m&&Object.getOwnPropertyDescriptor(n,v),y=!!L&&!(L.writable&&L.configurable),b=M&&!y&&!V;s({global:!0,constructor:!0,forced:p||b},{DOMException:b?g:z});var w=r(v),S=w.prototype;if(S.constructor!==w)for(var k in p||a(S,"constructor",i(1,w)),f)if(o(f,k)){var _=f[k],E=_.s;o(w,E)||a(w,E,i(6,_.c))}},223:function(e,t,c){"use strict";c.d(t,{BH:function(){return w},L:function(){return a},LL:function(){return E},P0:function(){return L},Pz:function(){return b},Sg:function(){return S},UG:function(){return h},ZR:function(){return _},aH:function(){return y},b$:function(){return d},eu:function(){return v},hl:function(){return p},m9:function(){return q},ne:function(){return D},pd:function(){return R},q4:function(){return V},ru:function(){return f},tV:function(){return o},uI:function(){return u},vZ:function(){return A},w1:function(){return m},xO:function(){return P},xb:function(){return I},z$:function(){return l},zd:function(){return N}});c(2801),c(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=function(e){const t=[];let c=0;for(let s=0;s<e.length;s++){let n=e.charCodeAt(s);n<128?t[c++]=n:n<2048?(t[c++]=n>>6|192,t[c++]=63&n|128):55296===(64512&n)&&s+1<e.length&&56320===(64512&e.charCodeAt(s+1))?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++s)),t[c++]=n>>18|240,t[c++]=n>>12&63|128,t[c++]=n>>6&63|128,t[c++]=63&n|128):(t[c++]=n>>12|224,t[c++]=n>>6&63|128,t[c++]=63&n|128)}return t},n=function(e){const t=[];let c=0,s=0;while(c<e.length){const n=e[c++];if(n<128)t[s++]=String.fromCharCode(n);else if(n>191&&n<224){const r=e[c++];t[s++]=String.fromCharCode((31&n)<<6|63&r)}else if(n>239&&n<365){const r=e[c++],i=e[c++],a=e[c++],o=((7&n)<<18|(63&r)<<12|(63&i)<<6|63&a)-65536;t[s++]=String.fromCharCode(55296+(o>>10)),t[s++]=String.fromCharCode(56320+(1023&o))}else{const r=e[c++],i=e[c++];t[s++]=String.fromCharCode((15&n)<<12|(63&r)<<6|63&i)}}return t.join("")},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const c=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let n=0;n<e.length;n+=3){const t=e[n],r=n+1<e.length,i=r?e[n+1]:0,a=n+2<e.length,o=a?e[n+2]:0,l=t>>2,u=(3&t)<<4|i>>4;let h=(15&i)<<2|o>>6,f=63&o;a||(f=64,r||(h=64)),s.push(c[l],c[u],c[h],c[f])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):n(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const c=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let n=0;n<e.length;){const t=c[e.charAt(n++)],r=n<e.length,i=r?c[e.charAt(n)]:0;++n;const a=n<e.length,o=a?c[e.charAt(n)]:64;++n;const l=n<e.length,u=l?c[e.charAt(n)]:64;if(++n,null==t||null==i||null==o||null==u)throw Error();const h=t<<2|i>>4;if(s.push(h),64!==o){const e=i<<4&240|o>>2;if(s.push(e),64!==u){const e=o<<6&192|u;s.push(e)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},i=function(e){const t=s(e);return r.encodeByteArray(t,!0)},a=function(e){return i(e).replace(/\./g,"")},o=function(e){try{return r.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function h(){try{return"[object process]"===Object.prototype.toString.call(c.g.process)}catch(e){return!1}}function f(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function p(){try{return"object"===typeof indexedDB}catch(e){return!1}}function v(){return new Promise(((e,t)=>{try{let c=!0;const s="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(s);n.onsuccess=()=>{n.result.close(),c||self.indexedDB.deleteDatabase(s),e(!0)},n.onupgradeneeded=()=>{c=!1},n.onerror=()=>{var e;t((null===(e=n.error)||void 0===e?void 0:e.message)||"")}}catch(c){t(c)}}))}function C(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof c.g)return c.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=()=>C().__FIREBASE_DEFAULTS__,g=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},H=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(c){return}const t=e&&o(e[1]);return t&&JSON.parse(t)},M=()=>{try{return z()||g()||H()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},V=e=>{var t,c;return null===(c=null===(t=M())||void 0===t?void 0:t.emulatorHosts)||void 0===c?void 0:c[e]},L=e=>{const t=V(e);if(!t)return;const c=t.lastIndexOf(":");if(c<=0||c+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(c+1),10);return"["===t[0]?[t.substring(1,c-1),s]:[t.substring(0,c),s]},y=()=>{var e;return null===(e=M())||void 0===e?void 0:e.config},b=e=>{var t;return null===(t=M())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,c)=>{t?this.reject(t):this.resolve(c),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,c))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const c={alg:"none",type:"JWT"},s=t||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),o="";return[a(JSON.stringify(c)),a(JSON.stringify(i)),o].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k="FirebaseError";class _ extends Error{constructor(e,t,c){super(t),this.code=e,this.customData=c,this.name=k,Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(e,t,c){this.service=e,this.serviceName=t,this.errors=c}create(e,...t){const c=t[0]||{},s=`${this.service}/${e}`,n=this.errors[e],r=n?T(n,c):"Error",i=`${this.serviceName}: ${r} (${s}).`,a=new _(s,i,c);return a}}function T(e,t){return e.replace(x,((e,c)=>{const s=t[c];return null!=s?String(s):`<${c}?>`}))}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function A(e,t){if(e===t)return!0;const c=Object.keys(e),s=Object.keys(t);for(const n of c){if(!s.includes(n))return!1;const c=e[n],r=t[n];if(O(c)&&O(r)){if(!A(c,r))return!1}else if(c!==r)return!1}for(const n of s)if(!c.includes(n))return!1;return!0}function O(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){const t=[];for(const[c,s]of Object.entries(e))Array.isArray(s)?s.forEach((e=>{t.push(encodeURIComponent(c)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(c)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function N(e){const t={},c=e.replace(/^\?/,"").split("&");return c.forEach((e=>{if(e){const[c,s]=e.split("=");t[decodeURIComponent(c)]=decodeURIComponent(s)}})),t}function R(e){const t=e.indexOf("?");if(!t)return"";const c=e.indexOf("#",t);return e.substring(t,c>0?c:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){const c=new j(e,t);return c.subscribe.bind(c)}class j{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,c){let s;if(void 0===e&&void 0===t&&void 0===c)throw new Error("Missing Observer.");s=F(e,["next","error","complete"])?e:{next:e,error:t,complete:c},void 0===s.next&&(s.next=U),void 0===s.error&&(s.error=U),void 0===s.complete&&(s.complete=U);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(e){}})),this.observers.push(s),n}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(c){"undefined"!==typeof console&&console.error&&console.error(c)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function F(e,t){if("object"!==typeof e||null===e)return!1;for(const c of t)if(c in e&&"function"===typeof e[c])return!0;return!1}function U(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e){return e&&e._delegate?e._delegate:e}},1129:function(e,t,c){c(7658),
/*!
 * Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var v="store";function C(e){return void 0===e&&(e=null),(0,s.f3)(null!==e?e:v)}function z(e,t){Object.keys(e).forEach((function(c){return t(e[c],c)}))}function g(e){return null!==e&&"object"===typeof e}function H(e){return e&&"function"===typeof e.then}function M(e,t){return function(){return e(t)}}function V(e,t,c){return t.indexOf(e)<0&&(c&&c.prepend?t.unshift(e):t.push(e)),function(){var c=t.indexOf(e);c>-1&&t.splice(c,1)}}function L(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var c=e.state;b(e,c,[],e._modules.root,!0),y(e,c,t)}function y(e,t,c){var r=e._state,i=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var a=e._wrappedGetters,o={},l={},u=(0,n.B)(!0);u.run((function(){z(a,(function(t,c){o[c]=M(t,e),l[c]=(0,s.Fl)((function(){return o[c]()})),Object.defineProperty(e.getters,c,{get:function(){return l[c].value},enumerable:!0})}))})),e._state=(0,n.qj)({data:t}),e._scope=u,e.strict&&T(e),r&&c&&e._withCommit((function(){r.data=null})),i&&i.stop()}function b(e,t,c,s,n){var r=!c.length,i=e._modules.getNamespace(c);if(s.namespaced&&(e._modulesNamespaceMap[i],e._modulesNamespaceMap[i]=s),!r&&!n){var a=x(t,c.slice(0,-1)),o=c[c.length-1];e._withCommit((function(){a[o]=s.state}))}var l=s.context=w(e,i,c);s.forEachMutation((function(t,c){var s=i+c;k(e,s,t,l)})),s.forEachAction((function(t,c){var s=t.root?c:i+c,n=t.handler||t;_(e,s,n,l)})),s.forEachGetter((function(t,c){var s=i+c;E(e,s,t,l)})),s.forEachChild((function(s,r){b(e,t,c.concat(r),s,n)}))}function w(e,t,c){var s=""===t,n={dispatch:s?e.dispatch:function(c,s,n){var r=I(c,s,n),i=r.payload,a=r.options,o=r.type;return a&&a.root||(o=t+o),e.dispatch(o,i)},commit:s?e.commit:function(c,s,n){var r=I(c,s,n),i=r.payload,a=r.options,o=r.type;a&&a.root||(o=t+o),e.commit(o,i,a)}};return Object.defineProperties(n,{getters:{get:s?function(){return e.getters}:function(){return S(e,t)}},state:{get:function(){return x(e.state,c)}}}),n}function S(e,t){if(!e._makeLocalGettersCache[t]){var c={},s=t.length;Object.keys(e.getters).forEach((function(n){if(n.slice(0,s)===t){var r=n.slice(s);Object.defineProperty(c,r,{get:function(){return e.getters[n]},enumerable:!0})}})),e._makeLocalGettersCache[t]=c}return e._makeLocalGettersCache[t]}function k(e,t,c,s){var n=e._mutations[t]||(e._mutations[t]=[]);n.push((function(t){c.call(e,s.state,t)}))}function _(e,t,c,s){var n=e._actions[t]||(e._actions[t]=[]);n.push((function(t){var n=c.call(e,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:e.getters,rootState:e.state},t);return H(n)||(n=Promise.resolve(n)),e._devtoolHook?n.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):n}))}function E(e,t,c,s){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return c(s.state,s.getters,e.state,e.getters)})}function T(e){(0,s.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function x(e,t){return t.reduce((function(e,t){return e[t]}),e)}function I(e,t,c){return g(e)&&e.type&&(c=t,t=e,e=e.type),{type:e,payload:t,options:c}}var A="vuex bindings",O="vuex:mutations",P="vuex:actions",N="vuex",R=0;function D(e,t){p({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[A]},(function(c){c.addTimelineLayer({id:O,label:"Vuex Mutations",color:j}),c.addTimelineLayer({id:P,label:"Vuex Actions",color:j}),c.addInspector({id:N,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),c.on.getInspectorTree((function(c){if(c.app===e&&c.inspectorId===N)if(c.filter){var s=[];G(s,t._modules.root,c.filter,""),c.rootNodes=s}else c.rootNodes=[B(t._modules.root,"")]})),c.on.getInspectorState((function(c){if(c.app===e&&c.inspectorId===N){var s=c.nodeId;S(t,s),c.state=W(Z(t._modules,s),"root"===s?t.getters:t._makeLocalGettersCache,s)}})),c.on.editInspectorState((function(c){if(c.app===e&&c.inspectorId===N){var s=c.nodeId,n=c.path;"root"!==s&&(n=s.split("/").filter(Boolean).concat(n)),t._withCommit((function(){c.set(t._state.data,n,c.state.value)}))}})),t.subscribe((function(e,t){var s={};e.payload&&(s.payload=e.payload),s.state=t,c.notifyComponentUpdate(),c.sendInspectorTree(N),c.sendInspectorState(N),c.addTimelineEvent({layerId:O,event:{time:Date.now(),title:e.type,data:s}})})),t.subscribeAction({before:function(e,t){var s={};e.payload&&(s.payload=e.payload),e._id=R++,e._time=Date.now(),s.state=t,c.addTimelineEvent({layerId:P,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:s}})},after:function(e,t){var s={},n=Date.now()-e._time;s.duration={_custom:{type:"duration",display:n+"ms",tooltip:"Action duration",value:n}},e.payload&&(s.payload=e.payload),s.state=t,c.addTimelineEvent({layerId:P,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:s}})}})}))}var j=8702998,F=6710886,U=16777215,q={label:"namespaced",textColor:U,backgroundColor:F};function $(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function B(e,t){return{id:t||"root",label:$(t),tags:e.namespaced?[q]:[],children:Object.keys(e._children).map((function(c){return B(e._children[c],t+c+"/")}))}}function G(e,t,c,s){s.includes(c)&&e.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:t.namespaced?[q]:[]}),Object.keys(t._children).forEach((function(n){G(e,t._children[n],c,s+n+"/")}))}function W(e,t,c){t="root"===c?t:t[c];var s=Object.keys(t),n={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(s.length){var r=K(t);n.getters=Object.keys(r).map((function(e){return{key:e.endsWith("/")?$(e):e,editable:!1,value:Y((function(){return r[e]}))}}))}return n}function K(e){var t={};return Object.keys(e).forEach((function(c){var s=c.split("/");if(s.length>1){var n=t,r=s.pop();s.forEach((function(e){n[e]||(n[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),n=n[e]._custom.value})),n[r]=Y((function(){return e[c]}))}else t[c]=Y((function(){return e[c]}))})),t}function Z(e,t){var c=t.split("/").filter((function(e){return e}));return c.reduce((function(e,s,n){var r=e[s];if(!r)throw new Error('Missing module "'+s+'" for path "'+t+'".');return n===c.length-1?r:r._children}),"root"===t?e:e.root._children)}function Y(e){try{return e()}catch(t){return t}}var X=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var c=e.state;this.state=("function"===typeof c?c():c)||{}},J={namespaced:{configurable:!0}};J.namespaced.get=function(){return!!this._rawModule.namespaced},X.prototype.addChild=function(e,t){this._children[e]=t},X.prototype.removeChild=function(e){delete this._children[e]},X.prototype.getChild=function(e){return this._children[e]},X.prototype.hasChild=function(e){return e in this._children},X.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},X.prototype.forEachChild=function(e){z(this._children,e)},X.prototype.forEachGetter=function(e){this._rawModule.getters&&z(this._rawModule.getters,e)},X.prototype.forEachAction=function(e){this._rawModule.actions&&z(this._rawModule.actions,e)},X.prototype.forEachMutation=function(e){this._rawModule.mutations&&z(this._rawModule.mutations,e)},Object.defineProperties(X.prototype,J);var Q=function(e){this.register([],e,!1)};function ee(e,t,c){if(t.update(c),c.modules)for(var s in c.modules){if(!t.getChild(s))return void 0;ee(e.concat(s),t.getChild(s),c.modules[s])}}Q.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Q.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,c){return t=t.getChild(c),e+(t.namespaced?c+"/":"")}),"")},Q.prototype.update=function(e){ee([],this.root,e)},Q.prototype.register=function(e,t,c){var s=this;void 0===c&&(c=!0);var n=new X(t,c);if(0===e.length)this.root=n;else{var r=this.get(e.slice(0,-1));r.addChild(e[e.length-1],n)}t.modules&&z(t.modules,(function(t,n){s.register(e.concat(n),t,c)}))},Q.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),c=e[e.length-1],s=t.getChild(c);s&&s.runtime&&t.removeChild(c)},Q.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),c=e[e.length-1];return!!t&&t.hasChild(c)};function te(e){return new ce(e)}var ce=function(e){var t=this;void 0===e&&(e={});var c=e.plugins;void 0===c&&(c=[]);var s=e.strict;void 0===s&&(s=!1);var n=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Q(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=n;var r=this,i=this,a=i.dispatch,o=i.commit;this.dispatch=function(e,t){return a.call(r,e,t)},this.commit=function(e,t,c){return o.call(r,e,t,c)},this.strict=s;var l=this._modules.root.state;b(this,l,[],this._modules.root),y(this,l),c.forEach((function(e){return e(t)}))},se={state:{configurable:!0}};ce.prototype.install=function(e,t){e.provide(t||v,this),e.config.globalProperties.$store=this;var c=void 0!==this._devtools&&this._devtools;c&&D(e,this)},se.state.get=function(){return this._state.data},se.state.set=function(e){0},ce.prototype.commit=function(e,t,c){var s=this,n=I(e,t,c),r=n.type,i=n.payload,a=(n.options,{type:r,payload:i}),o=this._mutations[r];o&&(this._withCommit((function(){o.forEach((function(e){e(i)}))})),this._subscribers.slice().forEach((function(e){return e(a,s.state)})))},ce.prototype.dispatch=function(e,t){var c=this,s=I(e,t),n=s.type,r=s.payload,i={type:n,payload:r},a=this._actions[n];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(i,c.state)}))}catch(l){0}var o=a.length>1?Promise.all(a.map((function(e){return e(r)}))):a[0](r);return new Promise((function(e,t){o.then((function(t){try{c._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(i,c.state)}))}catch(l){0}e(t)}),(function(e){try{c._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(i,c.state,e)}))}catch(l){0}t(e)}))}))}},ce.prototype.subscribe=function(e,t){return V(e,this._subscribers,t)},ce.prototype.subscribeAction=function(e,t){var c="function"===typeof e?{before:e}:e;return V(c,this._actionSubscribers,t)},ce.prototype.watch=function(e,t,c){var n=this;return(0,s.YP)((function(){return e(n.state,n.getters)}),t,Object.assign({},c))},ce.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},ce.prototype.registerModule=function(e,t,c){void 0===c&&(c={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),b(this,this.state,e,this._modules.get(e),c.preserveState),y(this,this.state)},ce.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var c=x(t.state,e.slice(0,-1));delete c[e[e.length-1]]})),L(this)},ce.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},ce.prototype.hotUpdate=function(e){this._modules.update(e),L(this,!0)},ce.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(ce.prototype,se);ie((function(e,t){var c={};return ne(t).forEach((function(t){var s=t.key,n=t.val;c[s]=function(){var t=this.$store.state,c=this.$store.getters;if(e){var s=ae(this.$store,"mapState",e);if(!s)return;t=s.context.state,c=s.context.getters}return"function"===typeof n?n.call(this,t,c):t[n]},c[s].vuex=!0})),c})),ie((function(e,t){var c={};return ne(t).forEach((function(t){var s=t.key,n=t.val;c[s]=function(){var t=[],c=arguments.length;while(c--)t[c]=arguments[c];var s=this.$store.commit;if(e){var r=ae(this.$store,"mapMutations",e);if(!r)return;s=r.context.commit}return"function"===typeof n?n.apply(this,[s].concat(t)):s.apply(this.$store,[n].concat(t))}})),c})),ie((function(e,t){var c={};return ne(t).forEach((function(t){var s=t.key,n=t.val;n=e+n,c[s]=function(){if(!e||ae(this.$store,"mapGetters",e))return this.$store.getters[n]},c[s].vuex=!0})),c})),ie((function(e,t){var c={};return ne(t).forEach((function(t){var s=t.key,n=t.val;c[s]=function(){var t=[],c=arguments.length;while(c--)t[c]=arguments[c];var s=this.$store.dispatch;if(e){var r=ae(this.$store,"mapActions",e);if(!r)return;s=r.context.dispatch}return"function"===typeof n?n.apply(this,[s].concat(t)):s.apply(this.$store,[n].concat(t))}})),c}));function ne(e){return re(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function re(e){return Array.isArray(e)||g(e)}function ie(e){return function(t,c){return"string"!==typeof t?(c=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,c)}}function ae(e,t,c){var s=e._modulesNamespaceMap[c];return s}},7077:function(e,t,c){"use strict";c.d(t,{Jn:function(){return pe},qX:function(){return he},Xd:function(){return ue},Mq:function(){return Ce},ZF:function(){return ve},KN:function(){return ze}});c(7658);var s=c(7142),n=c(5168),r=c(223);c(2801);const i=(e,t)=>t.some((t=>e instanceof t));let a,o;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,m=new WeakMap,p=new WeakMap;function v(e){const t=new Promise(((t,c)=>{const s=()=>{e.removeEventListener("success",n),e.removeEventListener("error",r)},n=()=>{t(V(e.result)),s()},r=()=>{c(e.error),s()};e.addEventListener("success",n),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),p.set(t,e),t}function C(e){if(f.has(e))return;const t=new Promise(((t,c)=>{const s=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",r),e.removeEventListener("abort",r)},n=()=>{t(),s()},r=()=>{c(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",n),e.addEventListener("error",r),e.addEventListener("abort",r)}));f.set(e,t)}let z={get(e,t,c){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return V(e[t])},set(e,t,c){return e[t]=c,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function g(e){z=e(z)}function H(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(L(this),t),V(h.get(this))}:function(...t){return V(e.apply(L(this),t))}:function(t,...c){const s=e.call(L(this),t,...c);return d.set(s,t.sort?t.sort():[t]),V(s)}}function M(e){return"function"===typeof e?H(e):(e instanceof IDBTransaction&&C(e),i(e,l())?new Proxy(e,z):e)}function V(e){if(e instanceof IDBRequest)return v(e);if(m.has(e))return m.get(e);const t=M(e);return t!==e&&(m.set(e,t),p.set(t,e)),t}const L=e=>p.get(e);function y(e,t,{blocked:c,upgrade:s,blocking:n,terminated:r}={}){const i=indexedDB.open(e,t),a=V(i);return s&&i.addEventListener("upgradeneeded",(e=>{s(V(i.result),e.oldVersion,e.newVersion,V(i.transaction))})),c&&i.addEventListener("blocked",(()=>c())),a.then((e=>{r&&e.addEventListener("close",(()=>r())),n&&e.addEventListener("versionchange",(()=>n()))})).catch((()=>{})),a}const b=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],S=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const c=t.replace(/FromIndex$/,""),s=t!==c,n=w.includes(c);if(!(c in(s?IDBIndex:IDBObjectStore).prototype)||!n&&!b.includes(c))return;const r=async function(e,...t){const r=this.transaction(e,n?"readwrite":"readonly");let i=r.store;return s&&(i=i.index(t.shift())),(await Promise.all([i[c](...t),n&&r.done]))[0]};return S.set(t,r),r}g((e=>({...e,get:(t,c,s)=>k(t,c)||e.get(t,c,s),has:(t,c)=>!!k(t,c)||e.has(t,c)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(E(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function E(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const T="@firebase/app",x="0.9.0",I=new n.Yd("@firebase/app"),A="@firebase/app-compat",O="@firebase/analytics-compat",P="@firebase/analytics",N="@firebase/app-check-compat",R="@firebase/app-check",D="@firebase/auth",j="@firebase/auth-compat",F="@firebase/database",U="@firebase/database-compat",q="@firebase/functions",$="@firebase/functions-compat",B="@firebase/installations",G="@firebase/installations-compat",W="@firebase/messaging",K="@firebase/messaging-compat",Z="@firebase/performance",Y="@firebase/performance-compat",X="@firebase/remote-config",J="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ce="@firebase/firestore-compat",se="firebase",ne="9.15.0",re="[DEFAULT]",ie={[T]:"fire-core",[A]:"fire-core-compat",[P]:"fire-analytics",[O]:"fire-analytics-compat",[R]:"fire-app-check",[N]:"fire-app-check-compat",[D]:"fire-auth",[j]:"fire-auth-compat",[F]:"fire-rtdb",[U]:"fire-rtdb-compat",[q]:"fire-fn",[$]:"fire-fn-compat",[B]:"fire-iid",[G]:"fire-iid-compat",[W]:"fire-fcm",[K]:"fire-fcm-compat",[Z]:"fire-perf",[Y]:"fire-perf-compat",[X]:"fire-rc",[J]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ce]:"fire-fst-compat","fire-js":"fire-js",[se]:"fire-js-all"},ae=new Map,oe=new Map;function le(e,t){try{e.container.addComponent(t)}catch(c){I.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,c)}}function ue(e){const t=e.name;if(oe.has(t))return I.debug(`There were multiple attempts to register component ${t}.`),!1;oe.set(t,e);for(const c of ae.values())le(c,e);return!0}function he(e,t){const c=e.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fe={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},de=new r.LL("app","Firebase",fe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(e,t,c){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new s.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw de.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=ne;function ve(e,t={}){let c=e;if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:re,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw de.create("bad-app-name",{appName:String(i)});if(c||(c=(0,r.aH)()),!c)throw de.create("no-options");const a=ae.get(i);if(a){if((0,r.vZ)(c,a.options)&&(0,r.vZ)(n,a.config))return a;throw de.create("duplicate-app",{appName:i})}const o=new s.H0(i);for(const s of oe.values())o.addComponent(s);const l=new me(c,n,o);return ae.set(i,l),l}function Ce(e=re){const t=ae.get(e);if(!t&&e===re)return ve();if(!t)throw de.create("no-app",{appName:e});return t}function ze(e,t,c){var n;let r=null!==(n=ie[e])&&void 0!==n?n:e;c&&(r+=`-${c}`);const i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void I.warn(e.join(" "))}ue(new s.wA(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ge="firebase-heartbeat-database",He=1,Me="firebase-heartbeat-store";let Ve=null;function Le(){return Ve||(Ve=y(ge,He,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Me)}}}).catch((e=>{throw de.create("idb-open",{originalErrorMessage:e.message})}))),Ve}async function ye(e){try{const t=await Le();return t.transaction(Me).objectStore(Me).get(we(e))}catch(t){if(t instanceof r.ZR)I.warn(t.message);else{const e=de.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});I.warn(e.message)}}}async function be(e,t){try{const c=await Le(),s=c.transaction(Me,"readwrite"),n=s.objectStore(Me);return await n.put(t,we(e)),s.done}catch(c){if(c instanceof r.ZR)I.warn(c.message);else{const e=de.create("idb-set",{originalErrorMessage:null===c||void 0===c?void 0:c.message});I.warn(e.message)}}}function we(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=1024,ke=2592e6;class _e{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),c=Ee();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==c&&!this._heartbeatsCache.heartbeats.some((e=>e.date===c)))return this._heartbeatsCache.heartbeats.push({date:c,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),c=Date.now();return c-t<=ke})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ee(),{heartbeatsToSend:t,unsentEntries:c}=Te(this._heartbeatsCache.heartbeats),s=(0,r.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ee(){const e=new Date;return e.toISOString().substring(0,10)}function Te(e,t=Se){const c=[];let s=e.slice();for(const n of e){const e=c.find((e=>e.agent===n.agent));if(e){if(e.dates.push(n.date),Ie(c)>t){e.dates.pop();break}}else if(c.push({agent:n.agent,dates:[n.date]}),Ie(c)>t){c.pop();break}s=s.slice(1)}return{heartbeatsToSend:c,unsentEntries:s}}class xe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,r.hl)()&&(0,r.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ye(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const c=await this._canUseIndexedDBPromise;if(c){const c=await this.read();return be(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:c.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const c=await this._canUseIndexedDBPromise;if(c){const c=await this.read();return be(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...e.heartbeats]})}}}function Ie(e){return(0,r.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e){ue(new s.wA("platform-logger",(e=>new _(e)),"PRIVATE")),ue(new s.wA("heartbeat",(e=>new _e(e)),"PRIVATE")),ze(T,x,e),ze(T,x,"esm2017"),ze("fire-js","")}Ae("")},7142:function(e,t,c){"use strict";c.d(t,{H0:function(){return l},wA:function(){return n}});var s=c(223);class n{constructor(e,t,c){this.name=e,this.instanceFactory=t,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new s.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:t});c&&e.resolve(c)}catch(c){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const c=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),s=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(c)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:c})}catch(n){if(s)return null;throw n}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(o(e))try{this.getOrInitializeService({instanceIdentifier:r})}catch(t){}for(const[e,c]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:s});c.resolve(e)}catch(t){}}}}clearInstance(e=r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=r){return this.instances.has(e)}getOptions(e=r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,c=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:c,options:t});for(const[n,r]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(n);c===e&&r.resolve(s)}return s}onInit(e,t){var c;const s=this.normalizeInstanceIdentifier(t),n=null!==(c=this.onInitCallbacks.get(s))&&void 0!==c?c:new Set;n.add(e),this.onInitCallbacks.set(s,n);const r=this.instances.get(s);return r&&e(r,s),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){const c=this.onInitCallbacks.get(t);if(c)for(const n of c)try{n(e,t)}catch(s){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let c=this.instances.get(e);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,c),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(c,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,c)}catch(s){}return c||null}normalizeInstanceIdentifier(e=r){return this.component?this.component.multipleInstances?e:r:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===r?void 0:e}function o(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new i(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,c){"use strict";c.d(t,{Yd:function(){return l},in:function(){return n}});c(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s=[];var n;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(n||(n={}));const r={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},i=n.INFO,a={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},o=(e,t,...c)=>{if(t<e.logLevel)return;const s=(new Date).toISOString(),n=a[t];if(!n)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[n](`[${s}]  ${e.name}:`,...c)};class l{constructor(e){this.name=e,this._logLevel=i,this._logHandler=o,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?r[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}},7795:function(e,t,c){"use strict";c.d(t,{ZF:function(){return s.ZF}});var s=c(7077),n="firebase",r="9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.KN)(n,r,"app")},9125:function(e,t,c){"use strict";c.d(t,{Xb:function(){return dt},v0:function(){return Hs},Aj:function(){return Ct},e5:function(){return mt},w7:function(){return zt}});c(7658);var s=c(223),n=c(7077),r=c(5168);function i(e,t){var c={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(c[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(c[s[n]]=e[s[n]])}return c}Object.create;Object.create;var a=c(7142);function o(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=o,u=new s.LL("auth","Firebase",o()),h=new r.Yd("@firebase/auth");function f(e,...t){h.logLevel<=r["in"].ERROR&&h.error(`Auth (${n.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,...t){throw v(e,...t)}function m(e,...t){return v(e,...t)}function p(e,t,c){const n=Object.assign(Object.assign({},l()),{[t]:c}),r=new s.LL("auth","Firebase",n);return r.create(t,{appName:e.name})}function v(e,...t){if("string"!==typeof e){const c=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(c,...s)}return u.create(e,...t)}function C(e,t,...c){if(!e)throw v(t,...c)}function z(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function g(e,t){e||z(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=new Map;function M(e){g(e instanceof Function,"Expected a class definition");let t=H.get(e);return t?(g(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,H.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){const c=(0,n.qX)(e,"auth");if(c.isInitialized()){const e=c.getImmediate(),n=c.getOptions();if((0,s.vZ)(n,null!==t&&void 0!==t?t:{}))return e;d(e,"already-initialized")}const r=c.initialize({options:t});return r}function L(e,t){const c=(null===t||void 0===t?void 0:t.persistence)||[],s=(Array.isArray(c)?c:[c]).map(M);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function b(){return"http:"===w()||"https:"===w()}function w(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(b()||(0,s.ru)()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t){this.shortDelay=e,this.longDelay=t,g(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,s.uI)()||(0,s.b$)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){g(e.emulator,"Emulator should always be set here");const{url:c}=e.emulator;return t?`${c}${t.startsWith("/")?t.slice(1):t}`:c}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static initialize(e,t,c){this.fetchImpl=e,t&&(this.headersImpl=t),c&&(this.responseImpl=c)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void z("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void z("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void z("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},I=new _(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function O(e,t,c,n,r={}){return P(e,r,(async()=>{let r={},i={};n&&("GET"===t?i=n:r={body:JSON.stringify(n)});const a=(0,s.xO)(Object.assign({key:e.config.apiKey},i)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),T.fetch()(R(e,e.config.apiHost,c,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},r))}))}async function P(e,t,c){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},x),t);try{const t=new D(e),s=await Promise.race([c(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw j(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[c,i]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===c)throw j(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===c)throw j(e,"email-already-in-use",r);if("USER_DISABLED"===c)throw j(e,"user-disabled",r);const a=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(i)throw p(e,a,i);d(e,a)}}catch(r){if(r instanceof s.ZR)throw r;d(e,"network-request-failed")}}async function N(e,t,c,s,n={}){const r=await O(e,t,c,s,n);return"mfaPendingCredential"in r&&d(e,"multi-factor-auth-required",{_serverResponse:r}),r}function R(e,t,c,s){const n=`${t}${c}?${s}`;return e.config.emulator?E(e.config,n):`${e.config.apiScheme}://${n}`}class D{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),I.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,c){const s={appName:e.name};c.email&&(s.email=c.email),c.phoneNumber&&(s.phoneNumber=c.phoneNumber);const n=m(e,t,s);return n.customData._tokenResponse=c,n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F(e,t){return O(e,"POST","/v1/accounts:delete",t)}async function U(e,t){return O(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t=!1){const c=(0,s.m9)(e),n=await c.getIdToken(t),r=G(n);C(r&&r.exp&&r.auth_time&&r.iat,c.auth,"internal-error");const i="object"===typeof r.firebase?r.firebase:void 0,a=null===i||void 0===i?void 0:i["sign_in_provider"];return{claims:r,token:n,authTime:q(B(r.auth_time)),issuedAtTime:q(B(r.iat)),expirationTime:q(B(r.exp)),signInProvider:a||null,signInSecondFactor:(null===i||void 0===i?void 0:i["sign_in_second_factor"])||null}}function B(e){return 1e3*Number(e)}function G(e){const[t,c,n]=e.split(".");if(void 0===t||void 0===c||void 0===n)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,s.tV)(c);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(r){return f("Caught error parsing JWT payload as JSON",null===r||void 0===r?void 0:r.toString()),null}}function W(e){const t=G(e);return C(t,"internal-error"),C("undefined"!==typeof t.exp,"internal-error"),C("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,c=!1){if(c)return t;try{return await t}catch(n){throw n instanceof s.ZR&&Z(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}function Z({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,c=e-Date.now()-3e5;return Math.max(0,c)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e){var t;const c=e.auth,s=await e.getIdToken(),n=await K(e,U(c,{idToken:s}));C(null===n||void 0===n?void 0:n.users.length,c,"internal-error");const r=n.users[0];e._notifyReloadListener(r);const i=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?te(r.providerUserInfo):[],a=ee(e.providerData,i),o=e.isAnonymous,l=!(e.email&&r.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!o&&l,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new X(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Q(e){const t=(0,s.m9)(e);await J(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const c=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...c,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,c=i(e,["providerId"]);return{providerId:t,uid:c.rawId||"",displayName:c.displayName||null,email:c.email||null,phoneNumber:c.phoneNumber||null,photoURL:c.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const c=await P(e,{},(async()=>{const c=(0,s.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,i=R(e,n,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",T.fetch()(i,{method:"POST",headers:a,body:c})}));return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C("undefined"!==typeof e.idToken,"internal-error"),C("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):W(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:c,refreshToken:s,expiresIn:n}=await ce(e,t);this.updateTokensAndExpiration(c,s,Number(n))}updateTokensAndExpiration(e,t,c){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*c}static fromJSON(e,t){const{refreshToken:c,accessToken:s,expirationTime:n}=t,r=new se;return c&&(C("string"===typeof c,"internal-error",{appName:e}),r.refreshToken=c),s&&(C("string"===typeof s,"internal-error",{appName:e}),r.accessToken=s),n&&(C("number"===typeof n,"internal-error",{appName:e}),r.expirationTime=n),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new se,this.toJSON())}_performRefresh(){return z("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e,t){C("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class re{constructor(e){var{uid:t,auth:c,stsTokenManager:s}=e,n=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=c,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new X(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let c=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),c=!0),t&&await J(this),await this.auth._persistUserIfCurrent(this),c&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,F(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var c,s,n,r,i,a,o,l;const u=null!==(c=t.displayName)&&void 0!==c?c:void 0,h=null!==(s=t.email)&&void 0!==s?s:void 0,f=null!==(n=t.phoneNumber)&&void 0!==n?n:void 0,d=null!==(r=t.photoURL)&&void 0!==r?r:void 0,m=null!==(i=t.tenantId)&&void 0!==i?i:void 0,p=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(o=t.createdAt)&&void 0!==o?o:void 0,z=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:g,emailVerified:H,isAnonymous:M,providerData:V,stsTokenManager:L}=t;C(g&&L,e,"internal-error");const y=se.fromJSON(this.name,L);C("string"===typeof g,e,"internal-error"),ne(u,e.name),ne(h,e.name),C("boolean"===typeof H,e,"internal-error"),C("boolean"===typeof M,e,"internal-error"),ne(f,e.name),ne(d,e.name),ne(m,e.name),ne(p,e.name),ne(v,e.name),ne(z,e.name);const b=new re({uid:g,auth:e,email:h,emailVerified:H,displayName:u,isAnonymous:M,photoURL:d,phoneNumber:f,tenantId:m,stsTokenManager:y,createdAt:v,lastLoginAt:z});return V&&Array.isArray(V)&&(b.providerData=V.map((e=>Object.assign({},e)))),p&&(b._redirectEventId=p),b}static async _fromIdTokenResponse(e,t,c=!1){const s=new se;s.updateFromServerResponse(t);const n=new re({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:c});return await J(n),n}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ie.type="NONE";const ae=ie;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t,c){return`firebase:${e}:${t}:${c}`}class le{constructor(e,t,c){this.persistence=e,this.auth=t,this.userKey=c;const{config:s,name:n}=this.auth;this.fullUserKey=oe(this.userKey,s.apiKey,n),this.fullPersistenceKey=oe("persistence",s.apiKey,n),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?re._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,c="authUser"){if(!t.length)return new le(M(ae),e,c);const s=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let n=s[0]||M(ae);const r=oe(c,e.config.apiKey,e.name);let i=null;for(const l of t)try{const t=await l._get(r);if(t){const c=re._fromJSON(e,t);l!==n&&(i=c),n=l;break}}catch(o){}const a=s.filter((e=>e._shouldAllowMigration));return n._shouldAllowMigration&&a.length?(n=a[0],i&&await n._set(r,i.toJSON()),await Promise.all(t.map((async e=>{if(e!==n)try{await e._remove(r)}catch(o){}}))),new le(n,e,c)):new le(n,e,c)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(me(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ve(t))return"Blackberry";if(Ce(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||de(t))&&!t.includes("edge/"))return"Chrome";if(pe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,c=e.match(t);if(2===(null===c||void 0===c?void 0:c.length))return c[1]}return"Other"}function he(e=(0,s.z$)()){return/firefox\//i.test(e)}function fe(e=(0,s.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function de(e=(0,s.z$)()){return/crios\//i.test(e)}function me(e=(0,s.z$)()){return/iemobile/i.test(e)}function pe(e=(0,s.z$)()){return/android/i.test(e)}function ve(e=(0,s.z$)()){return/blackberry/i.test(e)}function Ce(e=(0,s.z$)()){return/webos/i.test(e)}function ze(e=(0,s.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ge(e=(0,s.z$)()){var t;return ze(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function He(){return(0,s.w1)()&&10===document.documentMode}function Me(e=(0,s.z$)()){return ze(e)||pe(e)||Ce(e)||ve(e)||/windows phone/i.test(e)||me(e)}function Ve(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e,t=[]){let c;switch(e){case"Browser":c=ue((0,s.z$)());break;case"Worker":c=`${ue((0,s.z$)())}-${e}`;break;default:c=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${c}/JsCore/${n.Jn}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const c=t=>new Promise(((c,s)=>{try{const s=e(t);c(s)}catch(n){s(n)}}));c.onAbort=t,this.queue.push(c);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const c of this.queue)await c(e),c.onAbort&&t.push(c.onAbort)}catch(c){t.reverse();for(const e of t)try{e()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===c||void 0===c?void 0:c.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t,c){this.app=e,this.heartbeatServiceProvider=t,this.config=c,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Se(this),this.idTokenSubscription=new Se(this),this.beforeStateQueue=new ye(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=c.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=M(t)),this._initializationPromise=this.queue((async()=>{var c,s;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),!this._deleted)){if(null===(c=this._popupRedirectResolver)||void 0===c?void 0:c._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(n){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(s=this.currentUser)||void 0===s?void 0:s.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const c=await this.assertedPersistence.getCurrentUser();let s=c,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===s||void 0===s?void 0:s._redirectEventId,i=await this.tryRedirectSignIn(e);c&&c!==r||!(null===i||void 0===i?void 0:i.user)||(s=i.user,n=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(s)}catch(r){s=c,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(r)))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(c){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await J(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,s.m9)(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(M(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new s.LL("auth","Firebase",e())}onAuthStateChanged(e,t,c){return this.registerStateListener(this.authStateSubscription,e,t,c)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,c){return this.registerStateListener(this.idTokenSubscription,e,t,c)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const c=await this.getOrInitRedirectPersistenceManager(t);return null===e?c.removeCurrentUser():c.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&M(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[M(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,c;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(c=this.redirectUser)||void 0===c?void 0:c._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const c=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==c&&(this.lastNotifiedUid=c,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,c,s){if(this._deleted)return()=>{};const n="function"===typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return C(r,this,"internal-error"),r.then((()=>n(this.currentUser))),"function"===typeof t?e.addObserver(t,c,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Le(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const c=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return c&&(t["X-Firebase-Client"]=c),t}}function we(e){return(0,s.m9)(e)}class Se{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,s.ne)((e=>this.observer=e))}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ke(e,t,c){const s=we(e);C(s._canInitEmulator,s,"emulator-config-failed"),C(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const n=!!(null===c||void 0===c?void 0:c.disableWarnings),r=_e(t),{host:i,port:a}=Ee(t),o=null===a?"":`:${a}`;s.config.emulator={url:`${r}//${i}${o}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:i,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:n})}),n||xe()}function _e(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ee(e){const t=_e(e),c=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!c)return{host:"",port:null};const s=c[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(s);if(n){const e=n[1];return{host:e,port:Te(s.substr(e.length+1))}}{const[e,t]=s.split(":");return{host:e,port:Te(t)}}}function Te(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function xe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return z("not implemented")}_getIdTokenResponse(e){return z("not implemented")}_linkToIdToken(e,t){return z("not implemented")}_getReauthenticationResolver(e){return z("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t){return O(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Oe(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pe(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function Ne(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Ie{constructor(e,t,c,s=null){super("password",c),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Re(e,t,"password")}static _fromEmailAndCode(e,t,c=null){return new Re(e,t,"emailLink",c)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Oe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pe(e,{email:this._email,oobCode:this._password});default:d(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ae(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ne(e,{idToken:t,email:this._email,oobCode:this._password});default:d(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="http://localhost";class Fe extends Ie{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Fe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):d("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:c,signInMethod:s}=t,n=i(t,["providerId","signInMethod"]);if(!c||!s)return null;const r=new Fe(c,s);return r.idToken=n.idToken||void 0,r.accessToken=n.accessToken||void 0,r.secret=n.secret,r.nonce=n.nonce,r.pendingToken=n.pendingToken||null,r}_getIdTokenResponse(e){const t=this.buildRequest();return De(e,t)}_linkToIdToken(e,t){const c=this.buildRequest();return c.idToken=t,De(e,c)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,De(e,t)}buildRequest(){const e={requestUri:je,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,s.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(e,t){return O(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function qe(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function $e(e,t){const c=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(c.temporaryProof)throw j(e,"account-exists-with-different-credential",c);return c}const Be={["USER_NOT_FOUND"]:"user-not-found"};async function Ge(e,t){const c=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,c),Be)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends Ie{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new We({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new We({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return qe(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return $e(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ge(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:c,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:c,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:c,phoneNumber:s,temporaryProof:n}=e;return c||t||s||n?new We({verificationId:t,verificationCode:c,phoneNumber:s,temporaryProof:n}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ze(e){const t=(0,s.zd)((0,s.pd)(e))["link"],c=t?(0,s.zd)((0,s.pd)(t))["deep_link_id"]:null,n=(0,s.zd)((0,s.pd)(e))["deep_link_id"],r=n?(0,s.zd)((0,s.pd)(n))["link"]:null;return r||n||c||t||e}class Ye{constructor(e){var t,c,n,r,i,a;const o=(0,s.zd)((0,s.pd)(e)),l=null!==(t=o["apiKey"])&&void 0!==t?t:null,u=null!==(c=o["oobCode"])&&void 0!==c?c:null,h=Ke(null!==(n=o["mode"])&&void 0!==n?n:null);C(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(r=o["continueUrl"])&&void 0!==r?r:null,this.languageCode=null!==(i=o["languageCode"])&&void 0!==i?i:null,this.tenantId=null!==(a=o["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Ze(e);try{return new Ye(t)}catch(c){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(){this.providerId=Xe.PROVIDER_ID}static credential(e,t){return Re._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const c=Ye.parseLink(t);return C(c,"argument-error"),Re._fromEmailAndCode(e,c.code,c.tenantId)}}Xe.PROVIDER_ID="password",Xe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Je{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends Qe{constructor(){super("facebook.com")}static credential(e){return Fe._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch(t){return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com",et.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends Qe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Fe._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:c}=e;if(!t&&!c)return null;try{return tt.credential(t,c)}catch(s){return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com",tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct extends Qe{constructor(){super("github.com")}static credential(e){return Fe._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch(t){return null}}}ct.GITHUB_SIGN_IN_METHOD="github.com",ct.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st extends Qe{constructor(){super("twitter.com")}static credential(e,t){return Fe._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:c}=e;if(!t||!c)return null;try{return st.credential(t,c)}catch(s){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nt(e,t){return N(e,"POST","/v1/accounts:signUp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st.TWITTER_SIGN_IN_METHOD="twitter.com",st.PROVIDER_ID="twitter.com";class rt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,c,s=!1){const n=await re._fromIdTokenResponse(e,c,s),r=it(c),i=new rt({user:n,providerId:r,_tokenResponse:c,operationType:t});return i}static async _forOperation(e,t,c){await e._updateTokensIfNecessary(c,!0);const s=it(c);return new rt({user:e,providerId:s,_tokenResponse:c,operationType:t})}}function it(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at extends s.ZR{constructor(e,t,c,s){var n;super(t.code,t.message),this.operationType=c,this.user=s,Object.setPrototypeOf(this,at.prototype),this.customData={appName:e.name,tenantId:null!==(n=e.tenantId)&&void 0!==n?n:void 0,_serverResponse:t.customData._serverResponse,operationType:c}}static _fromErrorAndOperation(e,t,c,s){return new at(e,t,c,s)}}function ot(e,t,c,s){const n="reauthenticate"===t?c._getReauthenticationResolver(e):c._getIdTokenResponse(e);return n.catch((c=>{if("auth/multi-factor-auth-required"===c.code)throw at._fromErrorAndOperation(e,c,t,s);throw c}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t,c=!1){const s=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),c);return rt._forOperation(e,"link",s)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ut(e,t,c=!1){const{auth:s}=e,n="reauthenticate";try{const r=await K(e,ot(s,n,t,e),c);C(r.idToken,s,"internal-error");const i=G(r.idToken);C(i,s,"internal-error");const{sub:a}=i;return C(e.uid===a,s,"user-mismatch"),rt._forOperation(e,n,r)}catch(r){throw"auth/user-not-found"===(null===r||void 0===r?void 0:r.code)&&d(s,"user-mismatch"),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t,c=!1){const s="signIn",n=await ot(e,s,t),r=await rt._fromIdTokenResponse(e,s,n);return c||await e._updateCurrentUser(r.user),r}async function ft(e,t){return ht(we(e),t)}async function dt(e,t,c){const s=we(e),n=await nt(s,{returnSecureToken:!0,email:t,password:c}),r=await rt._fromIdTokenResponse(s,"signIn",n);return await s._updateCurrentUser(r.user),r}function mt(e,t,c){return ft((0,s.m9)(e),Xe.credential(t,c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e,t,c,n){return(0,s.m9)(e).onIdTokenChanged(t,c,n)}function vt(e,t,c){return(0,s.m9)(e).beforeAuthStateChanged(t,c)}function Ct(e,t,c,n){return(0,s.m9)(e).onAuthStateChanged(t,c,n)}function zt(e){return(0,s.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gt(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,t))}function Ht(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,t))}new WeakMap;const Mt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mt,"1"),this.storage.removeItem(Mt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){const e=(0,s.z$)();return fe(e)||ze(e)}const yt=1e3,bt=10;class wt extends Vt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lt()&&Ve(),this.fallbackToPolling=Me(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const c=this.storage.getItem(t),s=this.localCache[t];c!==s&&e(t,s,c)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,c)=>{this.notifyListeners(e,c)}));const c=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(c);if(e.newValue!==s)null!==e.newValue?this.storage.setItem(c,e.newValue):this.storage.removeItem(c);else if(this.localCache[c]===e.newValue&&!t)return}const s=()=>{const e=this.storage.getItem(c);(t||this.localCache[c]!==e)&&this.notifyListeners(c,e)},n=this.storage.getItem(c);He()&&n!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bt):s()}notifyListeners(e,t){this.localCache[e]=t;const c=this.listeners[e];if(c)for(const s of Array.from(c))s(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:c}),!0)}))}),yt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wt.type="LOCAL";const St=wt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Vt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kt.type="SESSION";const _t=kt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const c=new Tt(e);return this.receivers.push(c),c}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:c,eventType:s,data:n}=t.data,r=this.handlersMap[s];if(!(null===r||void 0===r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:c,eventType:s});const i=Array.from(r).map((async e=>e(t.origin,n))),a=await Et(i);t.ports[0].postMessage({status:"done",eventId:c,eventType:s,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xt(e="",t=10){let c="";for(let s=0;s<t;s++)c+=Math.floor(10*Math.random());return e+c}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.receivers=[];class It{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,c=50){const s="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let n,r;return new Promise(((i,a)=>{const o=xt("",20);s.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),c);r={messageChannel:s,onMessage(e){const t=e;if(t.data.eventId===o)switch(t.data.status){case"ack":clearTimeout(l),n=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(n),i(t.data.response);break;default:clearTimeout(l),clearTimeout(n),a(new Error("invalid_response"));break}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:o,data:t},[s.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return window}function Ot(e){At().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return"undefined"!==typeof At()["WorkerGlobalScope"]&&"function"===typeof At()["importScripts"]}async function Nt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Rt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Dt(){return Pt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="firebaseLocalStorageDb",Ft=1,Ut="firebaseLocalStorage",qt="fbase_key";class $t{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Bt(e,t){return e.transaction([Ut],t?"readwrite":"readonly").objectStore(Ut)}function Gt(){const e=indexedDB.deleteDatabase(jt);return new $t(e).toPromise()}function Wt(){const e=indexedDB.open(jt,Ft);return new Promise(((t,c)=>{e.addEventListener("error",(()=>{c(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ut,{keyPath:qt})}catch(s){c(s)}})),e.addEventListener("success",(async()=>{const c=e.result;c.objectStoreNames.contains(Ut)?t(c):(c.close(),await Gt(),t(await Wt()))}))}))}async function Kt(e,t,c){const s=Bt(e,!0).put({[qt]:t,value:c});return new $t(s).toPromise()}async function Zt(e,t){const c=Bt(e,!1).get(t),s=await new $t(c).toPromise();return void 0===s?null:s.value}function Yt(e,t){const c=Bt(e,!0).delete(t);return new $t(c).toPromise()}const Xt=800,Jt=3;class Qt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Wt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(c){if(t++>Jt)throw c;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tt._getInstance(Dt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const c=await this._poll();return{keyProcessed:c.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Nt(),!this.activeServiceWorker)return;this.sender=new It(this.activeServiceWorker);const c=await this.sender._send("ping",{},800);c&&(null===(e=c[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=c[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Rt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wt();return await Kt(e,Mt,"1"),await Yt(e,Mt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((c=>Kt(c,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Zt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Yt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Bt(e,!1).getAll();return new $t(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],c=new Set;for(const{fbase_key:s,value:n}of e)c.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(n)&&(this.notifyListeners(s,n),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!c.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const c=this.listeners[e];if(c)for(const s of Array.from(c))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Xt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Qt.type="LOCAL";const ec=Qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:start",A(e,t))}function cc(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sc(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function nc(e){return new Promise(((t,c)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{const t=m("internal-error");t.customData=e,c(t)},s.type="text/javascript",s.charset="UTF-8",sc().appendChild(s)}))}function rc(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
rc("rcb"),new _(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ic="recaptcha";async function ac(e,t,c){var s;const n=await c.verify();try{let r;if(C("string"===typeof n,e,"argument-error"),C(c.type===ic,e,"argument-error"),r="string"===typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){C("enroll"===t.type,e,"internal-error");const c=await gt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:n}});return c.phoneSessionInfo.sessionInfo}{C("signin"===t.type,e,"internal-error");const c=(null===(s=r.multiFactorHint)||void 0===s?void 0:s.uid)||r.multiFactorUid;C(c,e,"missing-multi-factor-info");const i=await tc(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:n}});return i.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Ue(e,{phoneNumber:r.phoneNumber,recaptchaToken:n});return t}}finally{c._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oc{constructor(e){this.providerId=oc.PROVIDER_ID,this.auth=we(e)}verifyPhoneNumber(e,t){return ac(this.auth,e,(0,s.m9)(t))}static credential(e,t){return We._fromVerification(e,t)}static credentialFromResult(e){const t=e;return oc.credentialFromTaggedObject(t)}static credentialFromError(e){return oc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:c}=e;return t&&c?We._fromTokenResponse(t,c):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lc(e,t){return t?M(t):(C(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oc.PROVIDER_ID="phone",oc.PHONE_SIGN_IN_METHOD="phone";class uc extends Ie{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return De(e,this._buildIdpRequest())}_linkToIdToken(e,t){return De(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return De(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hc(e){return ht(e.auth,new uc(e),e.bypassAuthState)}function fc(e){const{auth:t,user:c}=e;return C(c,t,"internal-error"),ut(c,new uc(e),e.bypassAuthState)}async function dc(e){const{auth:t,user:c}=e;return C(c,t,"internal-error"),lt(c,new uc(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t,c,s,n=!1){this.auth=e,this.resolver=c,this.user=s,this.bypassAuthState=n,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:c,postBody:s,tenantId:n,error:r,type:i}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:c,tenantId:n||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(i)(a))}catch(o){this.reject(o)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hc;case"linkViaPopup":case"linkViaRedirect":return dc;case"reauthViaPopup":case"reauthViaRedirect":return fc;default:d(this.auth,"internal-error")}}resolve(e){g(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){g(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=new _(2e3,1e4);class vc extends mc{constructor(e,t,c,s,n){super(e,t,s,n),this.provider=c,this.authWindow=null,this.pollId=null,vc.currentPopupAction&&vc.currentPopupAction.cancel(),vc.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){g(1===this.filter.length,"Popup operations only handle one event");const e=xt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vc.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,c;(null===(c=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===c?void 0:c.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,pc.get())};e()}}vc.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cc="pendingRedirect",zc=new Map;class gc extends mc{constructor(e,t,c=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,c),this.eventId=null}async execute(){let e=zc.get(this.auth._key());if(!e){try{const t=await Hc(this.resolver,this.auth),c=t?await super.execute():null;e=()=>Promise.resolve(c)}catch(t){e=()=>Promise.reject(t)}zc.set(this.auth._key(),e)}return this.bypassAuthState||zc.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Hc(e,t){const c=Lc(t),s=Vc(e);if(!await s._isAvailable())return!1;const n="true"===await s._get(c);return await s._remove(c),n}function Mc(e,t){zc.set(e._key(),t)}function Vc(e){return M(e._redirectPersistence)}function Lc(e){return oe(Cc,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(e,t,c=!1){const s=we(e),n=lc(s,t),r=new gc(s,n,c),i=await r.execute();return i&&!c&&(delete i.user._redirectEventId,await s._persistUserIfCurrent(i.user),await s._setRedirectUser(null,t)),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bc=6e5;class wc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((c=>{this.isEventForConsumer(e,c)&&(t=!0,this.sendToConsumer(e,c),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!_c(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var c;if(e.error&&!kc(e)){const s=(null===(c=e.error.code)||void 0===c?void 0:c.split("auth/")[1])||"internal-error";t.onError(m(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const c=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&c}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sc(e))}saveEventToCache(e){this.cachedEventUids.add(Sc(e)),this.lastProcessedEventTime=Date.now()}}function Sc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function kc({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function _c(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kc(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(e,t={}){return O(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xc=/^https?/;async function Ic(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ec(e);for(const s of t)try{if(Ac(s))return}catch(c){}d(e,"unauthorized-domain")}function Ac(e){const t=y(),{protocol:c,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const n=new URL(e);return""===n.hostname&&""===s?"chrome-extension:"===c&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===c&&n.hostname===s}if(!xc.test(c))return!1;if(Tc.test(e))return s===e;const n=e.replace(/\./g,"\\."),r=new RegExp("^(.+\\."+n+"|"+n+")$","i");return r.test(s)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new _(3e4,6e4);function Pc(){const e=At().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let c=0;c<e.CP.length;c++)e.CP[c]=null}function Nc(e){return new Promise(((t,c)=>{var s,n,r;function i(){Pc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pc(),c(m(e,"network-request-failed"))},timeout:Oc.get()})}if(null===(n=null===(s=At().gapi)||void 0===s?void 0:s.iframes)||void 0===n?void 0:n.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=At().gapi)||void 0===r?void 0:r.load)){const t=rc("iframefcb");return At()[t]=()=>{gapi.load?i():c(m(e,"network-request-failed"))},nc(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>c(e)))}i()}})).catch((e=>{throw Rc=null,e}))}let Rc=null;function Dc(e){return Rc=Rc||Nc(e),Rc}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=new _(5e3,15e3),Fc="__/auth/iframe",Uc="emulator/auth/iframe",qc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$c=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bc(e){const t=e.config;C(t.authDomain,e,"auth-domain-config-required");const c=t.emulator?E(t,Uc):`https://${e.config.authDomain}/${Fc}`,r={apiKey:t.apiKey,appName:e.name,v:n.Jn},i=$c.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${c}?${(0,s.xO)(r).slice(1)}`}async function Gc(e){const t=await Dc(e),c=At().gapi;return C(c,e,"internal-error"),t.open({where:document.body,url:Bc(e),messageHandlersFilter:c.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qc,dontclear:!0},(t=>new Promise((async(c,s)=>{await t.restyle({setHideOnLeave:!1});const n=m(e,"network-request-failed"),r=At().setTimeout((()=>{s(n)}),jc.get());function i(){At().clearTimeout(r),c(t)}t.ping(i).then(i,(()=>{s(n)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kc=500,Zc=600,Yc="_blank",Xc="http://localhost";class Jc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Qc(e,t,c,n=Kc,r=Zc){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const l=Object.assign(Object.assign({},Wc),{width:n.toString(),height:r.toString(),top:i,left:a}),u=(0,s.z$)().toLowerCase();c&&(o=de(u)?Yc:c),he(u)&&(t=t||Xc,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,c])=>`${e}${t}=${c},`),"");if(ge(u)&&"_self"!==o)return es(t||"",o),new Jc(null);const f=window.open(t||"",o,h);C(f,e,"popup-blocked");try{f.focus()}catch(d){}return new Jc(f)}function es(e,t){const c=document.createElement("a");c.href=e,c.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),c.dispatchEvent(s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="__/auth/handler",cs="emulator/auth/handler";function ss(e,t,c,r,i,a){C(e.config.authDomain,e,"auth-domain-config-required"),C(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:c,redirectUrl:r,v:n.Jn,eventId:i};if(t instanceof Je){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",(0,s.xb)(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))o[e]=t}if(t instanceof Qe){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const s of Object.keys(l))void 0===l[s]&&delete l[s];return`${ns(e)}?${(0,s.xO)(l).slice(1)}`}function ns({config:e}){return e.emulator?E(e,cs):`https://${e.authDomain}/${ts}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="webStorageSupport";class is{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_t,this._completeRedirectFn=yc,this._overrideRedirectResult=Mc}async _openPopup(e,t,c,s){var n;g(null===(n=this.eventManagers[e._key()])||void 0===n?void 0:n.manager,"_initialize() not called before _openPopup()");const r=ss(e,t,c,y(),s);return Qc(e,r,xt())}async _openRedirect(e,t,c,s){return await this._originValidation(e),Ot(ss(e,t,c,y(),s)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:c}=this.eventManagers[t];return e?Promise.resolve(e):(g(c,"If manager is not set, promise should be"),c)}const c=this.initAndGetManager(e);return this.eventManagers[t]={promise:c},c.catch((()=>{delete this.eventManagers[t]})),c}async initAndGetManager(e){const t=await Gc(e),c=new wc(e);return t.register("authEvent",(t=>{C(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const s=c.onEvent(t.authEvent);return{status:s?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:c},this.iframes[e._key()]=t,c}_isIframeWebStorageSupported(e,t){const c=this.iframes[e._key()];c.send(rs,{type:rs},(c=>{var s;const n=null===(s=null===c||void 0===c?void 0:c[0])||void 0===s?void 0:s[rs];void 0!==n&&t(!!n),d(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ic(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Me()||fe()||ze()}}const as=is;class os{constructor(e){this.factorId=e}_process(e,t,c){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,c);case"signin":return this._finalizeSignIn(e,t.credential);default:return z("unexpected MultiFactorSessionType")}}}class ls extends os{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ls(e)}_finalizeEnroll(e,t,c){return Ht(e,{idToken:t,displayName:c,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return cc(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class us{constructor(){}static assertion(e){return ls._fromCredential(e)}}us.FACTOR_ID="phone";var hs="@firebase/auth",fs="0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ps(e){(0,n.Xd)(new a.wA("auth",((t,{options:c})=>{const s=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat"),{apiKey:r,authDomain:i}=s.options;return((t,s)=>{C(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),C(!(null===i||void 0===i?void 0:i.includes(":")),"argument-error",{appName:t.name});const n={apiKey:r,authDomain:i,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Le(e)},a=new be(t,s,n);return L(a,c),a})(s,n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,c)=>{const s=e.getProvider("auth-internal");s.initialize()}))),(0,n.Xd)(new a.wA("auth-internal",(e=>{const t=we(e.getProvider("auth").getImmediate());return(e=>new ds(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,n.KN)(hs,fs,ms(e)),(0,n.KN)(hs,fs,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=300,Cs=(0,s.Pz)("authIdTokenMaxAge")||vs;let zs=null;const gs=e=>async t=>{const c=t&&await t.getIdTokenResult(),s=c&&((new Date).getTime()-Date.parse(c.issuedAtTime))/1e3;if(s&&s>Cs)return;const n=null===c||void 0===c?void 0:c.token;zs!==n&&(zs=n,await fetch(e,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function Hs(e=(0,n.Mq)()){const t=(0,n.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const c=V(e,{popupRedirectResolver:as,persistence:[ec,St,_t]}),r=(0,s.Pz)("authTokenSyncURL");if(r){const e=gs(r);vt(c,e,(()=>e(c.currentUser))),pt(c,(t=>e(t)))}const i=(0,s.q4)("auth");return i&&ke(c,`http://${i}`),c}ps("Browser")},36:function(e,t,c){"use strict";c.d(t,{ET:function(){return vh},hJ:function(){return du},oe:function(){return ph},JU:function(){return mu},QT:function(){return hh},ad:function(){return Su},cf:function(){return Ch},pl:function(){return dh},r7:function(){return mh}});c(7658),c(2801);var s,n=c(7077),r=c(7142),i=c(5168),a=c(223),o=(c(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof c.g?c.g:"undefined"!==typeof self?self:{}),l={},u=u||{},h=o||self;function f(){}function d(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function m(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function p(e){return Object.prototype.hasOwnProperty.call(e,v)&&e[v]||(e[v]=++C)}var v="closure_uid_"+(1e9*Math.random()>>>0),C=0;function z(e,t,c){return e.call.apply(e.bind,arguments)}function g(e,t,c){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,s),e.apply(t,c)}}return function(){return e.apply(t,arguments)}}function H(e,t,c){return H=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?z:g,H.apply(null,arguments)}function M(e,t){var c=Array.prototype.slice.call(arguments,1);return function(){var t=c.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function V(e,t){function c(){}c.prototype=t.prototype,e.X=t.prototype,e.prototype=new c,e.prototype.constructor=e,e.Wb=function(e,c,s){for(var n=Array(arguments.length-2),r=2;r<arguments.length;r++)n[r-2]=arguments[r];return t.prototype[c].apply(e,n)}}function L(){this.s=this.s,this.o=this.o}var y=0;L.prototype.s=!1,L.prototype.na=function(){this.s||(this.s=!0,this.M(),0==y)||p(this)},L.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let c=0;c<e.length;c++)if(c in e&&e[c]===t)return c;return-1};function w(e){const t=e.length;if(0<t){const c=Array(t);for(let s=0;s<t;s++)c[s]=e[s];return c}return[]}function S(e,t){for(let c=1;c<arguments.length;c++){const t=arguments[c];if(d(t)){const c=e.length||0,s=t.length||0;e.length=c+s;for(let n=0;n<s;n++)e[c+n]=t[n]}else e.push(t)}}function k(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var _=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",f,t),h.removeEventListener("test",f,t)}catch(c){}return e}();function E(e){return/^[\s\xa0]*$/.test(e)}var T=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function x(e,t){return e<t?-1:e>t?1:0}function I(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function A(e){return-1!=I().indexOf(e)}function O(e){return O[" "](e),e}function P(e){var t=Z;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}O[" "]=f;var N,R=A("Opera"),D=A("Trident")||A("MSIE"),j=A("Edge"),F=j||D,U=A("Gecko")&&!(-1!=I().toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),q=-1!=I().toLowerCase().indexOf("webkit")&&!A("Edge");function $(){var e=h.document;return e?e.documentMode:void 0}e:{var B="",G=function(){var e=I();return U?/rv:([^\);]+)(\)|;)/.exec(e):j?/Edge\/([\d\.]+)/.exec(e):D?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):q?/WebKit\/(\S+)/.exec(e):R?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(G&&(B=G?G[1]:""),D){var W=$();if(null!=W&&W>parseFloat(B)){N=String(W);break e}}N=B}var K,Z={};function Y(){return P((function(){let e=0;const t=T(String(N)).split("."),c=T("9").split("."),s=Math.max(t.length,c.length);for(let i=0;0==e&&i<s;i++){var n=t[i]||"",r=c[i]||"";do{if(n=/(\d*)(\D*)(.*)/.exec(n)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==n[0].length&&0==r[0].length)break;e=x(0==n[1].length?0:parseInt(n[1],10),0==r[1].length?0:parseInt(r[1],10))||x(0==n[2].length,0==r[2].length)||x(n[2],r[2]),n=n[3],r=r[3]}while(0==e)}return 0<=e}))}if(h.document&&D){var X=$();K=X||(parseInt(N,10)||void 0)}else K=void 0;var J=K;function Q(e,t){if(k.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var c=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(U){e:{try{O(t.nodeName);var n=!0;break e}catch(r){}n=!1}n||(t=null)}}else"mouseover"==c?t=e.fromElement:"mouseout"==c&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Q.X.h.call(this)}}V(Q,k);var ee={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ce=0;function se(e,t,c,s,n){this.listener=e,this.proxy=null,this.src=t,this.type=c,this.capture=!!s,this.ha=n,this.key=++ce,this.ba=this.ea=!1}function ne(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function re(e,t,c){for(const s in e)t.call(c,e[s],s,e)}function ie(e){const t={};for(const c in e)t[c]=e[c];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oe(e,t){let c,s;for(let n=1;n<arguments.length;n++){for(c in s=arguments[n],s)e[c]=s[c];for(let t=0;t<ae.length;t++)c=ae[t],Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c])}}function le(e){this.src=e,this.g={},this.h=0}function ue(e,t){var c=t.type;if(c in e.g){var s,n=e.g[c],r=b(n,t);(s=0<=r)&&Array.prototype.splice.call(n,r,1),s&&(ne(t),0==e.g[c].length&&(delete e.g[c],e.h--))}}function he(e,t,c,s){for(var n=0;n<e.length;++n){var r=e[n];if(!r.ba&&r.listener==t&&r.capture==!!c&&r.ha==s)return n}return-1}le.prototype.add=function(e,t,c,s,n){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var i=he(e,t,s,n);return-1<i?(t=e[i],c||(t.ea=!1)):(t=new se(t,this.src,r,!!s,n),t.ea=c,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),de={};function me(e,t,c,s,n){if(s&&s.once)return Ce(e,t,c,s,n);if(Array.isArray(t)){for(var r=0;r<t.length;r++)me(e,t[r],c,s,n);return null}return c=ye(c),e&&e[te]?e.N(t,c,m(s)?!!s.capture:!!s,n):pe(e,t,c,!1,s,n)}function pe(e,t,c,s,n,r){if(!t)throw Error("Invalid event type");var i=m(n)?!!n.capture:!!n,a=Ve(e);if(a||(e[fe]=a=new le(e)),c=a.add(t,c,s,i,r),c.proxy)return c;if(s=ve(),c.proxy=s,s.src=e,s.listener=c,e.addEventListener)_||(n=i),void 0===n&&(n=!1),e.addEventListener(t.toString(),s,n);else if(e.attachEvent)e.attachEvent(He(t.toString()),s);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(s)}return c}function ve(){function e(c){return t.call(e.src,e.listener,c)}const t=Me;return e}function Ce(e,t,c,s,n){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Ce(e,t[r],c,s,n);return null}return c=ye(c),e&&e[te]?e.O(t,c,m(s)?!!s.capture:!!s,n):pe(e,t,c,!0,s,n)}function ze(e,t,c,s,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)ze(e,t[r],c,s,n);else s=m(s)?!!s.capture:!!s,c=ye(c),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],c=he(r,c,s,n),-1<c&&(ne(r[c]),Array.prototype.splice.call(r,c,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=Ve(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,c,s,n)),(c=-1<e?t[e]:null)&&ge(c))}function ge(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])ue(t.i,e);else{var c=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(c,s,e.capture):t.detachEvent?t.detachEvent(He(c),s):t.addListener&&t.removeListener&&t.removeListener(s),(c=Ve(t))?(ue(c,e),0==c.h&&(c.src=null,t[fe]=null)):ne(e)}}}function He(e){return e in de?de[e]:de[e]="on"+e}function Me(e,t){if(e.ba)e=!0;else{t=new Q(t,this);var c=e.listener,s=e.ha||e.src;e.ea&&ge(e),e=c.call(s,t)}return e}function Ve(e){return e=e[fe],e instanceof le?e:null}var Le="__closure_events_fn_"+(1e9*Math.random()>>>0);function ye(e){return"function"===typeof e?e:(e[Le]||(e[Le]=function(t){return e.handleEvent(t)}),e[Le])}function be(){L.call(this),this.i=new le(this),this.P=this,this.I=null}function we(e,t){var c,s=e.I;if(s)for(c=[];s;s=s.I)c.push(s);if(e=e.P,s=t.type||t,"string"===typeof t)t=new k(t,e);else if(t instanceof k)t.target=t.target||e;else{var n=t;t=new k(s,e),oe(t,n)}if(n=!0,c)for(var r=c.length-1;0<=r;r--){var i=t.g=c[r];n=Se(i,s,!0,t)&&n}if(i=t.g=e,n=Se(i,s,!0,t)&&n,n=Se(i,s,!1,t)&&n,c)for(r=0;r<c.length;r++)i=t.g=c[r],n=Se(i,s,!1,t)&&n}function Se(e,t,c,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var n=!0,r=0;r<t.length;++r){var i=t[r];if(i&&!i.ba&&i.capture==c){var a=i.listener,o=i.ha||i.src;i.ea&&ue(e.i,i),n=!1!==a.call(o,s)&&n}}return n&&!s.defaultPrevented}V(be,L),be.prototype[te]=!0,be.prototype.removeEventListener=function(e,t,c,s){ze(this,e,t,c,s)},be.prototype.M=function(){if(be.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var c=t.g[e],s=0;s<c.length;s++)ne(c[s]);delete t.g[e],t.h--}}this.I=null},be.prototype.N=function(e,t,c,s){return this.i.add(String(e),t,!1,c,s)},be.prototype.O=function(e,t,c,s){return this.i.add(String(e),t,!0,c,s)};var ke=h.JSON.stringify;function _e(){var e=Re;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ee{constructor(){this.h=this.g=null}add(e,t){const c=xe.get();c.set(e,t),this.h?this.h.next=c:this.g=c,this.h=c}}var Te,xe=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ie),(e=>e.reset()));class Ie{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ae(e){h.setTimeout((()=>{throw e}),0)}function Oe(e,t){Te||Pe(),Ne||(Te(),Ne=!0),Re.add(e,t)}function Pe(){var e=h.Promise.resolve(void 0);Te=function(){e.then(De)}}var Ne=!1,Re=new Ee;function De(){for(var e;e=_e();){try{e.h.call(e.g)}catch(c){Ae(c)}var t=xe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ne=!1}function je(e,t){be.call(this),this.h=e||1,this.g=t||h,this.j=H(this.lb,this),this.l=Date.now()}function Fe(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Ue(e,t,c){if("function"===typeof e)c&&(e=H(e,c));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=H(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function qe(e){e.g=Ue((()=>{e.g=null,e.i&&(e.i=!1,qe(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}V(je,be),s=je.prototype,s.ca=!1,s.R=null,s.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),we(this,"tick"),this.ca&&(Fe(this),this.start()))}},s.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){je.X.M.call(this),Fe(this),delete this.g};class $e extends L{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qe(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(e){L.call(this),this.h=e,this.g={}}V(Be,L);var Ge=[];function We(e,t,c,s){Array.isArray(c)||(c&&(Ge[0]=c.toString()),c=Ge);for(var n=0;n<c.length;n++){var r=me(t,c[n],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Ke(e){re(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}function Ze(){this.g=!0}function Ye(e,t,c,s,n,r){e.info((function(){if(e.g)if(r)for(var i="",a=r.split("&"),o=0;o<a.length;o++){var l=a[o].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");i=2<=h.length&&"type"==h[1]?i+(u+"=")+l+"&":i+(u+"=redacted&")}}else i=null;else i=r;return"XMLHTTP REQ ("+s+") [attempt "+n+"]: "+t+"\n"+c+"\n"+i}))}function Xe(e,t,c,s,n,r,i){e.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+n+"]: "+t+"\n"+c+"\n"+r+" "+i}))}function Je(e,t,c,s){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,c)+(s?" "+s:"")}))}function Qe(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var c=JSON.parse(t);if(c)for(e=0;e<c.length;e++)if(Array.isArray(c[e])){var s=c[e];if(!(2>s.length)){var n=s[1];if(Array.isArray(n)&&!(1>n.length)){var r=n[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var i=1;i<n.length;i++)n[i]=""}}}return ke(c)}catch(a){return t}}Be.prototype.M=function(){Be.X.M.call(this),Ke(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ze.prototype.Aa=function(){this.g=!1},Ze.prototype.info=function(){};var tt={},ct=null;function st(){return ct=ct||new be}function nt(e){k.call(this,tt.Pa,e)}function rt(e){const t=st();we(t,new nt(t))}function it(e,t){k.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=st();we(t,new it(t,e))}function ot(e,t){k.call(this,tt.Qa,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",V(nt,k),tt.STAT_EVENT="statevent",V(it,k),tt.Qa="timingevent",V(ot,k);var ut={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ht={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ft(){}function dt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var pt,vt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ct(){k.call(this,"d")}function zt(){k.call(this,"c")}function gt(){}function Ht(e,t,c,s){this.l=e,this.j=t,this.m=c,this.U=s||1,this.S=new Be(this),this.O=Vt,e=F?125:void 0,this.T=new je(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Mt}function Mt(){this.i=null,this.g="",this.h=!1}V(Ct,k),V(zt,k),V(gt,ft),gt.prototype.g=function(){return new XMLHttpRequest},gt.prototype.i=function(){return{}},pt=new gt;var Vt=45e3,Lt={},yt={};function bt(e,t,c){e.K=1,e.v=Wt(Ut(t)),e.s=c,e.P=!0,wt(e,null)}function wt(e,t){e.F=Date.now(),Et(e),e.A=Ut(e.v);var c=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),ic(c.i,"t",s),e.C=0,c=e.l.H,e.h=new Mt,e.g=us(e.l,c?t:null,!e.s),0<e.N&&(e.L=new $e(H(e.La,e,e.g),e.N)),We(e.S,e.g,"readystatechange",e.ib),t=e.H?ie(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),rt(),Ye(e.j,e.u,e.A,e.m,e.U,e.s)}function St(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function kt(e,t,c){let s,n=!0;for(;!e.I&&e.C<c.length;){if(s=_t(e,c),s==yt){4==t&&(e.o=4,at(14),n=!1),Je(e.j,e.m,null,"[Incomplete Response]");break}if(s==Lt){e.o=4,at(15),Je(e.j,e.m,c,"[Invalid Chunk]"),n=!1;break}Je(e.j,e.m,s,null),Ot(e,s)}St(e)&&s!=yt&&s!=Lt&&(e.h.g="",e.C=0),4!=t||0!=c.length||e.h.h||(e.o=1,at(16),n=!1),e.i=e.i&&n,n?0<c.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),cs(t),t.K=!0,at(11))):(Je(e.j,e.m,c,"[Invalid Chunked Response]"),At(e),It(e))}function _t(e,t){var c=e.C,s=t.indexOf("\n",c);return-1==s?yt:(c=Number(t.substring(c,s)),isNaN(c)?Lt:(s+=1,s+c>t.length?yt:(t=t.substr(s,c),e.C=s+c,t)))}function Et(e){e.V=Date.now()+e.O,Tt(e,e.O)}function Tt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(H(e.gb,e),t)}function xt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function It(e){0==e.l.G||e.I||rs(e.l,e)}function At(e){xt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Fe(e.T),Ke(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ot(e,t){try{var c=e.l;if(0!=c.G&&(c.g==e||mc(c.h,e)))if(!e.J&&mc(c.h,e)&&3==c.G){try{var s=c.Fa.g.parse(t)}catch(l){s=null}if(Array.isArray(s)&&3==s.length){var n=s;if(0==n[0]){e:if(!c.u){if(c.g){if(!(c.g.F+3e3<e.F))break e;ns(c),Wc(c)}ts(c),at(18)}}else c.Ba=n[1],0<c.Ba-c.T&&37500>n[2]&&c.L&&0==c.A&&!c.v&&(c.v=lt(H(c.cb,c),6e3));if(1>=dc(c.h)&&c.ja){try{c.ja()}catch(l){}c.ja=void 0}}else as(c,11)}else if((e.J||c.g==e)&&ns(c),!E(t))for(n=c.Fa.g.parse(t),t=0;t<n.length;t++){let l=n[t];if(c.T=l[0],l=l[1],2==c.G)if("c"==l[0]){c.I=l[1],c.ka=l[2];const t=l[3];null!=t&&(c.ma=t,c.j.info("VER="+c.ma));const n=l[4];null!=n&&(c.Ca=n,c.j.info("SVER="+c.Ca));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(s=1.5*u,c.J=s,c.j.info("backChannelRequestTimeoutMs_="+s)),s=c;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=s.h;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(pc(r,r.h),r.h=null))}if(s.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(s.za=e,Gt(s.F,s.D,e))}}c.G=3,c.l&&c.l.xa(),c.$&&(c.P=Date.now()-e.F,c.j.info("Handshake RTT: "+c.P+"ms")),s=c;var i=e;if(s.sa=ls(s,s.H?s.ka:null,s.V),i.J){vc(s.h,i);var a=i,o=s.J;o&&a.setTimeout(o),a.B&&(xt(a),Et(a)),s.g=i}else es(s);0<c.i.length&&Zc(c)}else"stop"!=l[0]&&"close"!=l[0]||as(c,7);else 3==c.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?as(c,7):Gc(c):"noop"!=l[0]&&c.l&&c.l.wa(l),c.A=0)}rt(4)}catch(l){}}function Pt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(d(e)){for(var t=[],c=e.length,s=0;s<c;s++)t.push(e[s]);return t}for(s in t=[],c=0,e)t[c++]=e[s];return t}function Nt(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(d(e)||"string"===typeof e){var t=[];e=e.length;for(var c=0;c<e;c++)t.push(c);return t}t=[],c=0;for(const s in e)t[c++]=s;return t}}}function Rt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(d(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var c=Nt(e),s=Pt(e),n=s.length,r=0;r<n;r++)t.call(void 0,s[r],c&&c[r],e)}s=Ht.prototype,s.setTimeout=function(e){this.O=e},s.ib=function(e){e=e.target;const t=this.L;t&&3==jc(e)?t.l():this.La(e)},s.La=function(e){try{if(e==this.g)e:{const u=jc(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(3!=u||F||this.g&&(this.h.h||this.g.fa()||Fc(this.g)))){this.I||4!=u||7==t||rt(8==t||0>=f?3:2),xt(this);var c=this.g.aa();this.Y=c;t:if(St(this)){var s=Fc(this.g);e="";var n=s.length,r=4==jc(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){At(this),It(this);var i="";break t}this.h.i=new h.TextDecoder}for(t=0;t<n;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==n-1});s.splice(0,n),this.h.g+=e,this.C=0,i=this.h.g}else i=this.g.fa();if(this.i=200==c,Xe(this.j,this.u,this.A,this.m,this.U,u,c),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,o=this.g;if((a=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(a)){var l=a;break t}}l=null}if(!(c=l)){this.i=!1,this.o=3,at(12),At(this),It(this);break e}Je(this.j,this.m,c,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ot(this,c)}this.P?(kt(this,u,i),F&&this.i&&3==u&&(We(this.S,this.T,"tick",this.hb),this.T.start())):(Je(this.j,this.m,i,null),Ot(this,i)),4==u&&At(this),this.i&&!this.I&&(4==u?rs(this.l,this):(this.i=!1,Et(this)))}else 400==c&&0<i.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),At(this),It(this)}}}catch(u){}},s.hb=function(){if(this.g){var e=jc(this.g),t=this.g.fa();this.C<t.length&&(xt(this),kt(this,e,t),this.i&&4!=e&&Et(this))}},s.cancel=function(){this.I=!0,At(this)},s.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Qe(this.j,this.A),2!=this.K&&(rt(),at(17)),At(this),this.o=2,It(this)):Tt(this,this.V-e)};var Dt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jt(e,t){if(e){e=e.split("&");for(var c=0;c<e.length;c++){var s=e[c].indexOf("="),n=null;if(0<=s){var r=e[c].substring(0,s);n=e[c].substring(s+1)}else r=e[c];t(r,n?decodeURIComponent(n.replace(/\+/g," ")):"")}}}function Ft(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ft){this.h=void 0!==t?t:e.h,qt(this,e.j),this.s=e.s,this.g=e.g,$t(this,e.m),this.l=e.l,t=e.i;var c=new cc;c.i=t.i,t.g&&(c.g=new Map(t.g),c.h=t.h),Bt(this,c),this.o=e.o}else e&&(c=String(e).match(Dt))?(this.h=!!t,qt(this,c[1]||"",!0),this.s=Kt(c[2]||""),this.g=Kt(c[3]||"",!0),$t(this,c[4]),this.l=Kt(c[5]||"",!0),Bt(this,c[6]||"",!0),this.o=Kt(c[7]||"")):(this.h=!!t,this.i=new cc(null,this.h))}function Ut(e){return new Ft(e)}function qt(e,t,c){e.j=c?Kt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function $t(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Bt(e,t,c){t instanceof cc?(e.i=t,oc(e.i,e.h)):(c||(t=Zt(t,ec)),e.i=new cc(t,e.h))}function Gt(e,t,c){e.i.set(t,c)}function Wt(e){return Gt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Zt(e,t,c){return"string"===typeof e?(e=encodeURI(e).replace(t,Yt),c&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Yt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ft.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Zt(t,Xt,!0),":");var c=this.g;return(c||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Zt(t,Xt,!0),"@"),e.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.m,null!=c&&e.push(":",String(c))),(c=this.l)&&(this.g&&"/"!=c.charAt(0)&&e.push("/"),e.push(Zt(c,"/"==c.charAt(0)?Qt:Jt,!0))),(c=this.i.toString())&&e.push("?",c),(c=this.o)&&e.push("#",Zt(c,tc)),e.join("")};var Xt=/[#\/\?@]/g,Jt=/[#\?:]/g,Qt=/[#\?]/g,ec=/[#\?@]/g,tc=/#/g;function cc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function sc(e){e.g||(e.g=new Map,e.h=0,e.i&&jt(e.i,(function(t,c){e.add(decodeURIComponent(t.replace(/\+/g," ")),c)})))}function nc(e,t){sc(e),t=ac(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function rc(e,t){return sc(e),t=ac(e,t),e.g.has(t)}function ic(e,t,c){nc(e,t),0<c.length&&(e.i=null,e.g.set(ac(e,t),w(c)),e.h+=c.length)}function ac(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function oc(e,t){t&&!e.j&&(sc(e),e.i=null,e.g.forEach((function(e,t){var c=t.toLowerCase();t!=c&&(nc(this,t),ic(this,c,e))}),e)),e.j=t}s=cc.prototype,s.add=function(e,t){sc(this),this.i=null,e=ac(this,e);var c=this.g.get(e);return c||this.g.set(e,c=[]),c.push(t),this.h+=1,this},s.forEach=function(e,t){sc(this),this.g.forEach((function(c,s){c.forEach((function(c){e.call(t,c,s,this)}),this)}),this)},s.oa=function(){sc(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),c=[];for(let s=0;s<t.length;s++){const n=e[s];for(let e=0;e<n.length;e++)c.push(t[s])}return c},s.W=function(e){sc(this);let t=[];if("string"===typeof e)rc(this,e)&&(t=t.concat(this.g.get(ac(this,e))));else{e=Array.from(this.g.values());for(let c=0;c<e.length;c++)t=t.concat(e[c])}return t},s.set=function(e,t){return sc(this),this.i=null,e=ac(this,e),rc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},s.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var c=0;c<t.length;c++){var s=t[c];const r=encodeURIComponent(String(s)),i=this.W(s);for(s=0;s<i.length;s++){var n=r;""!==i[s]&&(n+="="+encodeURIComponent(String(i[s]))),e.push(n)}}return this.i=e.join("&")};var lc=class{constructor(e,t){this.h=e,this.g=t}};function uc(e){this.l=e||hc,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hc=10;function fc(e){return!!e.h||!!e.g&&e.g.size>=e.j}function dc(e){return e.h?1:e.g?e.g.size:0}function mc(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function pc(e,t){e.g?e.g.add(t):e.h=t}function vc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Cc(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const c of e.g.values())t=t.concat(c.D);return t}return w(e.i)}function zc(){}function gc(){this.g=new zc}function Hc(e,t,c){const s=c||"";try{Rt(e,(function(e,c){let n=e;m(e)&&(n=ke(e)),t.push(s+c+"="+encodeURIComponent(n))}))}catch(n){throw t.push(s+"type="+encodeURIComponent("_badmap")),n}}function Mc(e,t){const c=new Ze;if(h.Image){const s=new Image;s.onload=M(Vc,c,s,"TestLoadImage: loaded",!0,t),s.onerror=M(Vc,c,s,"TestLoadImage: error",!1,t),s.onabort=M(Vc,c,s,"TestLoadImage: abort",!1,t),s.ontimeout=M(Vc,c,s,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=e}else t(!1)}function Vc(e,t,c,s,n){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,n(s)}catch(r){}}function Lc(e){this.l=e.ac||null,this.j=e.jb||!1}function yc(e,t){be.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=bc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}uc.prototype.cancel=function(){if(this.i=Cc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},zc.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},zc.prototype.parse=function(e){return h.JSON.parse(e,void 0)},V(Lc,ft),Lc.prototype.g=function(){return new yc(this.l,this.j)},Lc.prototype.i=function(e){return function(){return e}}({}),V(yc,be);var bc=0;function wc(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Sc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,kc(e)}function kc(e){e.onreadystatechange&&e.onreadystatechange.call(e)}s=yc.prototype,s.open=function(e,t){if(this.readyState!=bc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,kc(this)},s.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Sc(this)),this.readyState=bc},s.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,kc(this)),this.g&&(this.readyState=3,kc(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wc(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},s.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Sc(this):kc(this),3==this.readyState&&wc(this)}},s.Va=function(e){this.g&&(this.response=this.responseText=e,Sc(this))},s.Ua=function(e){this.g&&(this.response=e,Sc(this))},s.ga=function(){this.g&&Sc(this)},s.setRequestHeader=function(e,t){this.v.append(e,t)},s.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var c=t.next();!c.done;)c=c.value,e.push(c[0]+": "+c[1]),c=t.next();return e.join("\r\n")},Object.defineProperty(yc.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var _c=h.JSON.parse;function Ec(e){be.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Tc,this.K=this.L=!1}V(Ec,be);var Tc="",xc=/^https?$/i,Ic=["POST","PUT"];function Ac(e){return D&&Y()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Oc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Pc(e),Rc(e)}function Pc(e){e.D||(e.D=!0,we(e,"complete"),we(e,"error"))}function Nc(e){if(e.h&&"undefined"!=typeof u&&(!e.C[1]||4!=jc(e)||2!=e.aa()))if(e.v&&4==jc(e))Ue(e.Ha,0,e);else if(we(e,"readystatechange"),4==jc(e)){e.h=!1;try{const o=e.aa();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var c;if(!(c=t)){var s;if(s=0===o){var n=String(e.H).match(Dt)[1]||null;if(!n&&h.self&&h.self.location){var r=h.self.location.protocol;n=r.substr(0,r.length-1)}s=!xc.test(n?n.toLowerCase():"")}c=s}if(c)we(e,"complete"),we(e,"success");else{e.m=6;try{var i=2<jc(e)?e.g.statusText:""}catch(a){i=""}e.j=i+" ["+e.aa()+"]",Pc(e)}}finally{Rc(e)}}}function Rc(e,t){if(e.g){Dc(e);const s=e.g,n=e.C[0]?f:null;e.g=null,e.C=null,t||we(e,"ready");try{s.onreadystatechange=n}catch(c){}}}function Dc(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function jc(e){return e.g?e.g.readyState:0}function Fc(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Tc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(ws){return null}}function Uc(e){let t="";return re(e,(function(e,c){t+=c,t+=":",t+=e,t+="\r\n"})),t}function qc(e,t,c){e:{for(s in c){var s=!1;break e}s=!0}s||(c=Uc(c),"string"===typeof e?null!=c&&encodeURIComponent(String(c)):Gt(e,t,c))}function $c(e,t,c){return c&&c.internalChannelParams&&c.internalChannelParams[e]||t}function Bc(e){this.Ca=0,this.i=[],this.j=new Ze,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=$c("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=$c("baseRetryDelayMs",5e3,e),this.bb=$c("retryDelaySeedMs",1e4,e),this.$a=$c("forwardChannelMaxRetries",2,e),this.ta=$c("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new uc(e&&e.concurrentRequestLimit),this.Fa=new gc,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Gc(e){if(Kc(e),3==e.G){var t=e.U++,c=Ut(e.F);Gt(c,"SID",e.I),Gt(c,"RID",t),Gt(c,"TYPE","terminate"),Jc(e,c),t=new Ht(e,e.j,t,void 0),t.K=2,t.v=Wt(Ut(c)),c=!1,h.navigator&&h.navigator.sendBeacon&&(c=h.navigator.sendBeacon(t.v.toString(),"")),!c&&h.Image&&((new Image).src=t.v,c=!0),c||(t.g=us(t.l,null),t.g.da(t.v)),t.F=Date.now(),Et(t)}os(e)}function Wc(e){e.g&&(cs(e),e.g.cancel(),e.g=null)}function Kc(e){Wc(e),e.u&&(h.clearTimeout(e.u),e.u=null),ns(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Zc(e){fc(e.h)||e.m||(e.m=!0,Oe(e.Ja,e),e.C=0)}function Yc(e,t){return!(dc(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=lt(H(e.Ja,e,t),is(e,e.C)),e.C++,!0))}function Xc(e,t){var c;c=t?t.m:e.U++;const s=Ut(e.F);Gt(s,"SID",e.I),Gt(s,"RID",c),Gt(s,"AID",e.T),Jc(e,s),e.o&&e.s&&qc(s,e.o,e.s),c=new Ht(e,e.j,c,e.C+1),null===e.o&&(c.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Qc(e,c,1e3),c.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),pc(e.h,c),bt(c,s,t)}function Jc(e,t){e.ia&&re(e.ia,(function(e,c){Gt(t,c,e)})),e.l&&Rt({},(function(e,c){Gt(t,c,e)}))}function Qc(e,t,c){c=Math.min(e.i.length,c);var s=e.l?H(e.l.Ra,e.l,e):null;e:{var n=e.i;let t=-1;for(;;){const e=["count="+c];-1==t?0<c?(t=n[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let a=0;a<c;a++){let c=n[a].h;const o=n[a].g;if(c-=t,0>c)t=Math.max(0,n[a].h-100),i=!1;else try{Hc(o,e,"req"+c+"_")}catch(r){s&&s(o)}}if(i){s=e.join("&");break e}}}return e=e.i.splice(0,c),t.D=e,s}function es(e){e.g||e.u||(e.Z=1,Oe(e.Ia,e),e.A=0)}function ts(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=lt(H(e.Ia,e),is(e,e.A)),e.A++,!0)}function cs(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function ss(e){e.g=new Ht(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Ut(e.sa);Gt(t,"RID","rpc"),Gt(t,"SID",e.I),Gt(t,"CI",e.L?"0":"1"),Gt(t,"AID",e.T),Gt(t,"TYPE","xmlhttp"),Jc(e,t),e.o&&e.s&&qc(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var c=e.g;e=e.ka,c.K=1,c.v=Wt(Ut(t)),c.s=null,c.P=!0,wt(c,e)}function ns(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function rs(e,t){var c=null;if(e.g==t){ns(e),cs(e),e.g=null;var s=2}else{if(!mc(e.h,t))return;c=t.D,vc(e.h,t),s=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==s){c=t.s?t.s.length:0,t=Date.now()-t.F;var n=e.C;s=st(),we(s,new ot(s,c)),Zc(e)}else es(e);else if(n=t.o,3==n||0==n&&0<e.pa||!(1==s&&Yc(e,t)||2==s&&ts(e)))switch(c&&0<c.length&&(t=e.h,t.i=t.i.concat(c)),n){case 1:as(e,5);break;case 4:as(e,10);break;case 3:as(e,6);break;default:as(e,2)}}function is(e,t){let c=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(c*=2),c*t}function as(e,t){if(e.j.info("Error code "+t),2==t){var c=null;e.l&&(c=null);var s=H(e.kb,e);c||(c=new Ft("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||qt(c,"https"),Wt(c)),Mc(c.toString(),s)}else at(2);e.G=0,e.l&&e.l.va(t),os(e),Kc(e)}function os(e){if(e.G=0,e.la=[],e.l){const t=Cc(e.h);0==t.length&&0==e.i.length||(S(e.la,t),S(e.la,e.i),e.h.i.length=0,w(e.i),e.i.length=0),e.l.ua()}}function ls(e,t,c){var s=c instanceof Ft?Ut(c):new Ft(c,void 0);if(""!=s.g)t&&(s.g=t+"."+s.g),$t(s,s.m);else{var n=h.location;s=n.protocol,t=t?t+"."+n.hostname:n.hostname,n=+n.port;var r=new Ft(null,void 0);s&&qt(r,s),t&&(r.g=t),n&&$t(r,n),c&&(r.l=c),s=r}return c=e.D,t=e.za,c&&t&&Gt(s,c,t),Gt(s,"VER",e.ma),Jc(e,s),s}function us(e,t,c){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=c&&e.Da&&!e.ra?new Ec(new Lc({jb:!0})):new Ec(e.ra),t.Ka(e.H),t}function hs(){}function fs(){if(D&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function ds(e,t){be.call(this),this.g=new Bc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!E(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!E(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new vs(this)}function ms(e){Ct.call(this);var t=e.__sm__;if(t){e:{for(const c in t){e=c;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ps(){zt.call(this),this.status=1}function vs(e){this.g=e}s=Ec.prototype,s.Ka=function(e){this.L=e},s.da=function(e,t,c,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():pt.g(),this.C=this.u?dt(this.u):dt(pt),this.g.onreadystatechange=H(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){return void Oc(this,r)}if(e=c||"",c=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var n in s)c.set(n,s[n]);else{if("function"!==typeof s.keys||"function"!==typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const e of s.keys())c.set(e,s.get(e))}s=Array.from(c.keys()).find((e=>"content-type"==e.toLowerCase())),n=h.FormData&&e instanceof h.FormData,!(0<=b(Ic,t))||s||n||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of c)this.g.setRequestHeader(i,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Dc(this),0<this.B&&((this.K=Ac(this.g))?(this.g.timeout=this.B,this.g.ontimeout=H(this.qa,this)):this.A=Ue(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Oc(this,r)}},s.qa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,we(this,"timeout"),this.abort(8))},s.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,we(this,"complete"),we(this,"abort"),Rc(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rc(this,!0)),Ec.X.M.call(this)},s.Ha=function(){this.s||(this.F||this.v||this.l?Nc(this):this.fb())},s.fb=function(){Nc(this)},s.aa=function(){try{return 2<jc(this)?this.g.status:-1}catch(e){return-1}},s.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},s.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),_c(t)}},s.Ea=function(){return this.m},s.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},s=Bc.prototype,s.ma=8,s.G=1,s.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const n=new Ht(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=ie(r),oe(r,this.S)):r=this.S),null!==this.o||this.N||(n.H=r,r=null),this.O)e:{for(var t=0,c=0;c<this.i.length;c++){var s=this.i[c];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(t+=s,4096<t){t=c;break e}if(4096===t||c===this.i.length-1){t=c+1;break e}}t=1e3}else t=1e3;t=Qc(this,n,t),c=Ut(this.F),Gt(c,"RID",e),Gt(c,"CVER",22),this.D&&Gt(c,"X-HTTP-Session-Id",this.D),Jc(this,c),r&&(this.N?t="headers="+encodeURIComponent(String(Uc(r)))+"&"+t:this.o&&qc(c,this.o,r)),pc(this.h,n),this.Ya&&Gt(c,"TYPE","init"),this.O?(Gt(c,"$req",t),Gt(c,"SID","null"),n.Z=!0,bt(n,c,null)):bt(n,c,t),this.G=2}}else 3==this.G&&(e?Xc(this,e):0==this.i.length||fc(this.h)||Xc(this))},s.Ia=function(){if(this.u=null,ss(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=lt(H(this.eb,this),e)}},s.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Wc(this),ss(this))},s.cb=function(){null!=this.v&&(this.v=null,Wc(this),ts(this),at(19))},s.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},s=hs.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Ra=function(){},fs.prototype.g=function(e,t){return new ds(e,t)},V(ds,be),ds.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,c=this.h||void 0;at(0),e.V=t,e.ia=c||{},e.L=e.Y,e.F=ls(e,null,e.V),Zc(e)},ds.prototype.close=function(){Gc(this.g)},ds.prototype.u=function(e){var t=this.g;if("string"===typeof e){var c={};c.__data__=e,e=c}else this.v&&(c={},c.__data__=ke(e),e=c);t.i.push(new lc(t.ab++,e)),3==t.G&&Zc(t)},ds.prototype.M=function(){this.g.l=null,delete this.j,Gc(this.g),delete this.g,ds.X.M.call(this)},V(ms,Ct),V(ps,zt),V(vs,hs),vs.prototype.xa=function(){we(this.g,"a")},vs.prototype.wa=function(e){we(this.g,new ms(e))},vs.prototype.va=function(e){we(this.g,new ps)},vs.prototype.ua=function(){we(this.g,"b")},fs.prototype.createWebChannel=fs.prototype.g,ds.prototype.send=ds.prototype.u,ds.prototype.open=ds.prototype.m,ds.prototype.close=ds.prototype.close,ut.NO_ERROR=0,ut.TIMEOUT=8,ut.HTTP_ERROR=6,ht.COMPLETE="complete",mt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",be.prototype.listen=be.prototype.N,Ec.prototype.listenOnce=Ec.prototype.O,Ec.prototype.getLastError=Ec.prototype.Oa,Ec.prototype.getLastErrorCode=Ec.prototype.Ea,Ec.prototype.getStatus=Ec.prototype.aa,Ec.prototype.getResponseJson=Ec.prototype.Sa,Ec.prototype.getResponseText=Ec.prototype.fa,Ec.prototype.send=Ec.prototype.da,Ec.prototype.setWithCredentials=Ec.prototype.Ka;var Cs=l.createWebChannelTransport=function(){return new fs},zs=l.getStatEventTarget=function(){return st()},gs=l.ErrorCode=ut,Hs=l.EventType=ht,Ms=l.Event=tt,Vs=l.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ls=l.FetchXmlHttpFactory=Lc,ys=l.WebChannel=mt,bs=l.XhrIo=Ec;const ws="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ss.UNAUTHENTICATED=new Ss(null),Ss.GOOGLE_CREDENTIALS=new Ss("google-credentials-uid"),Ss.FIRST_PARTY=new Ss("first-party-uid"),Ss.MOCK_USER=new Ss("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ks="9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new i.Yd("@firebase/firestore");function Es(){return _s.logLevel}function Ts(e,...t){if(_s.logLevel<=i["in"].DEBUG){const c=t.map(As);_s.debug(`Firestore (${ks}): ${e}`,...c)}}function xs(e,...t){if(_s.logLevel<=i["in"].ERROR){const c=t.map(As);_s.error(`Firestore (${ks}): ${e}`,...c)}}function Is(e,...t){if(_s.logLevel<=i["in"].WARN){const c=t.map(As);_s.warn(`Firestore (${ks}): ${e}`,...c)}}function As(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(e="Unexpected state"){const t=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+e;throw xs(t),new Error(t)}function Ps(e,t){e||Os()}function Ns(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ds extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Us{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ss.UNAUTHENTICATED)))}shutdown(){}}class qs{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class $s{constructor(e){this.t=e,this.currentUser=Ss.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let c=this.i;const s=e=>this.i!==c?(c=this.i,t(e)):Promise.resolve();let n=new js;this.o=()=>{this.i++,this.currentUser=this.u(),n.resolve(),n=new js,e.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const t=n;e.enqueueRetryable((async()=>{await t.promise,await s(this.currentUser)}))},i=e=>{Ts("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>i(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?i(e):(Ts("FirebaseAuthCredentialsProvider","Auth not yet detected"),n.resolve(),n=new js)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Ts("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Ps("string"==typeof t.accessToken),new Fs(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ps(null===e||"string"==typeof e),new Ss(e)}}class Bs{constructor(e,t,c,s){this.h=e,this.l=t,this.m=c,this.g=s,this.type="FirstParty",this.user=Ss.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ps(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Gs{constructor(e,t,c,s){this.h=e,this.l=t,this.m=c,this.g=s}getToken(){return Promise.resolve(new Bs(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Ss.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ws{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ks{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const c=e=>{null!=e.error&&Ts("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const c=e.token!==this.A;return this.A=e.token,Ts("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>c(t)))};const s=e=>{Ts("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>s(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?s(e):Ts("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Ps("string"==typeof e.token),this.A=e.token,new Ws(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zs(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),c=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(c);else for(let s=0;s<e;s++)c[s]=Math.floor(256*Math.random());return c}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let c="";for(;c.length<20;){const s=Zs(40);for(let n=0;n<s.length;++n)c.length<20&&s[n]<t&&(c+=e.charAt(s[n]%e.length))}return c}}function Xs(e,t){return e<t?-1:e>t?1:0}function Js(e,t,c){return e.length===t.length&&e.every(((e,s)=>c(e,t[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ds(Rs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ds(Rs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Ds(Rs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ds(Rs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qs.fromMillis(Date.now())}static fromDate(e){return Qs.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),c=Math.floor(1e6*(e-1e3*t));return new Qs(t,c)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Xs(this.nanoseconds,e.nanoseconds):Xs(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.timestamp=e}static fromTimestamp(e){return new en(e)}static min(){return new en(new Qs(0,0))}static max(){return new en(new Qs(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t,c){void 0===t?t=0:t>e.length&&Os(),void 0===c?c=e.length-t:c>e.length-t&&Os(),this.segments=e,this.offset=t,this.len=c}get length(){return this.len}isEqual(e){return 0===tn.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tn?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,c=this.limit();t<c;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const c=Math.min(e.length,t.length);for(let s=0;s<c;s++){const c=e.get(s),n=t.get(s);if(c<n)return-1;if(c>n)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class cn extends tn{construct(e,t,c){return new cn(e,t,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const c of e){if(c.indexOf("//")>=0)throw new Ds(Rs.INVALID_ARGUMENT,`Invalid segment (${c}). Paths must not contain // in them.`);t.push(...c.split("/").filter((e=>e.length>0)))}return new cn(t)}static emptyPath(){return new cn([])}}const sn=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nn extends tn{construct(e,t,c){return new nn(e,t,c)}static isValidIdentifier(e){return sn.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new nn(["__name__"])}static fromServerFormat(e){const t=[];let c="",s=0;const n=()=>{if(0===c.length)throw new Ds(Rs.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(c),c=""};let r=!1;for(;s<e.length;){const t=e[s];if("\\"===t){if(s+1===e.length)throw new Ds(Rs.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[s+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ds(Rs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);c+=t,s+=2}else"`"===t?(r=!r,s++):"."!==t||r?(c+=t,s++):(n(),s++)}if(n(),r)throw new Ds(Rs.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nn(t)}static emptyPath(){return new nn([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.path=e}static fromPath(e){return new rn(cn.fromString(e))}static fromName(e){return new rn(cn.fromString(e).popFirst(5))}static empty(){return new rn(cn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===cn.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return cn.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new rn(new cn(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,c,s){this.indexId=e,this.collectionGroup=t,this.fields=c,this.indexState=s}}an.UNKNOWN_ID=-1;function on(e,t){const c=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,n=en.fromTimestamp(1e9===s?new Qs(c+1,0):new Qs(c,s));return new un(n,rn.empty(),t)}function ln(e){return new un(e.readTime,e.key,-1)}class un{constructor(e,t,c){this.readTime=e,this.documentKey=t,this.largestBatchId=c}static min(){return new un(en.min(),rn.empty(),-1)}static max(){return new un(en.max(),rn.empty(),-1)}}function hn(e,t){let c=e.readTime.compareTo(t.readTime);return 0!==c?c:(c=rn.comparator(e.documentKey,t.documentKey),0!==c?c:Xs(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dn{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e){if(e.code!==Rs.FAILED_PRECONDITION||e.message!==fn)throw e;Ts("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Os(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new pn(((c,s)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(c,s)},this.catchCallback=e=>{this.wrapFailure(t,e).next(c,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof pn?t:pn.resolve(t)}catch(e){return pn.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):pn.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):pn.reject(t)}static resolve(e){return new pn(((t,c)=>{t(e)}))}static reject(e){return new pn(((t,c)=>{c(e)}))}static waitFor(e){return new pn(((t,c)=>{let s=0,n=0,r=!1;e.forEach((e=>{++s,e.next((()=>{++n,r&&n===s&&t()}),(e=>c(e)))})),r=!0,n===s&&t()}))}static or(e){let t=pn.resolve(!1);for(const c of e)t=t.next((e=>e?pn.resolve(e):c()));return t}static forEach(e,t){const c=[];return e.forEach(((e,s)=>{c.push(t.call(this,e,s))})),this.waitFor(c)}static mapArray(e,t){return new pn(((c,s)=>{const n=e.length,r=new Array(n);let i=0;for(let a=0;a<n;a++){const o=a;t(e[o]).next((e=>{r[o]=e,++i,i===n&&c(r)}),(e=>s(e)))}}))}static doWhile(e,t){return new pn(((c,s)=>{const n=()=>{!0===e()?t().next((()=>{n()}),s):c()};n()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Cn.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zn{constructor(e,t,c,s,n,r,i,a){this.databaseId=e,this.appId=t,this.persistenceKey=c,this.host=s,this.ssl=n,this.forceLongPolling=r,this.autoDetectLongPolling=i,this.useFetchStreams=a}}class gn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new gn("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof gn&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e){let t=0;for(const c in e)Object.prototype.hasOwnProperty.call(e,c)&&t++;return t}function Mn(e,t){for(const c in e)Object.prototype.hasOwnProperty.call(e,c)&&t(c,e[c])}function Vn(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return null==e}function yn(e){return 0===e&&1/e==-1/0}function bn(e){return"number"==typeof e&&Number.isInteger(e)&&!yn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new wn(t)}static fromUint8Array(e){const t=function(e){let t="";for(let c=0;c<e.length;++c)t+=String.fromCharCode(e[c]);return t}(e);return new wn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let c=0;c<e.length;c++)t[c]=e.charCodeAt(c);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Xs(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wn.EMPTY_BYTE_STRING=new wn("");const Sn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(e){if(Ps(!!e),"string"==typeof e){let t=0;const c=Sn.exec(e);if(Ps(!!c),c[1]){let e=c[1];e=(e+"000000000").substr(0,9),t=Number(e)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:_n(e.seconds),nanos:_n(e.nanos)}}function _n(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function En(e){return"string"==typeof e?wn.fromBase64String(e):wn.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e){var t,c;return"server_timestamp"===(null===(c=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===c?void 0:c.stringValue)}function xn(e){const t=e.mapValue.fields.__previous_value__;return Tn(t)?xn(t):t}function In(e){const t=kn(e.mapValue.fields.__local_write_time__.timestampValue);return new Qs(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function On(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Tn(e)?4:Kn(e)?9007199254740991:10:Os()}function Pn(e,t){if(e===t)return!0;const c=On(e);if(c!==On(t))return!1;switch(c){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return In(e).isEqual(In(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const c=kn(e.timestampValue),s=kn(t.timestampValue);return c.seconds===s.seconds&&c.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return En(e.bytesValue).isEqual(En(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return _n(e.geoPointValue.latitude)===_n(t.geoPointValue.latitude)&&_n(e.geoPointValue.longitude)===_n(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return _n(e.integerValue)===_n(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const c=_n(e.doubleValue),s=_n(t.doubleValue);return c===s?yn(c)===yn(s):isNaN(c)&&isNaN(s)}return!1}(e,t);case 9:return Js(e.arrayValue.values||[],t.arrayValue.values||[],Pn);case 10:return function(e,t){const c=e.mapValue.fields||{},s=t.mapValue.fields||{};if(Hn(c)!==Hn(s))return!1;for(const n in c)if(c.hasOwnProperty(n)&&(void 0===s[n]||!Pn(c[n],s[n])))return!1;return!0}(e,t);default:return Os()}}function Nn(e,t){return void 0!==(e.values||[]).find((e=>Pn(e,t)))}function Rn(e,t){if(e===t)return 0;const c=On(e),s=On(t);if(c!==s)return Xs(c,s);switch(c){case 0:case 9007199254740991:return 0;case 1:return Xs(e.booleanValue,t.booleanValue);case 2:return function(e,t){const c=_n(e.integerValue||e.doubleValue),s=_n(t.integerValue||t.doubleValue);return c<s?-1:c>s?1:c===s?0:isNaN(c)?isNaN(s)?0:-1:1}(e,t);case 3:return Dn(e.timestampValue,t.timestampValue);case 4:return Dn(In(e),In(t));case 5:return Xs(e.stringValue,t.stringValue);case 6:return function(e,t){const c=En(e),s=En(t);return c.compareTo(s)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const c=e.split("/"),s=t.split("/");for(let n=0;n<c.length&&n<s.length;n++){const e=Xs(c[n],s[n]);if(0!==e)return e}return Xs(c.length,s.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const c=Xs(_n(e.latitude),_n(t.latitude));return 0!==c?c:Xs(_n(e.longitude),_n(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const c=e.values||[],s=t.values||[];for(let n=0;n<c.length&&n<s.length;++n){const e=Rn(c[n],s[n]);if(e)return e}return Xs(c.length,s.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===An.mapValue&&t===An.mapValue)return 0;if(e===An.mapValue)return 1;if(t===An.mapValue)return-1;const c=e.fields||{},s=Object.keys(c),n=t.fields||{},r=Object.keys(n);s.sort(),r.sort();for(let i=0;i<s.length&&i<r.length;++i){const e=Xs(s[i],r[i]);if(0!==e)return e;const t=Rn(c[s[i]],n[r[i]]);if(0!==t)return t}return Xs(s.length,r.length)}(e.mapValue,t.mapValue);default:throw Os()}}function Dn(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Xs(e,t);const c=kn(e),s=kn(t),n=Xs(c.seconds,s.seconds);return 0!==n?n:Xs(c.nanos,s.nanos)}function jn(e){return Fn(e)}function Fn(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=kn(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?En(e.bytesValue).toBase64():"referenceValue"in e?(c=e.referenceValue,rn.fromName(c).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",c=!0;for(const s of e.values||[])c?c=!1:t+=",",t+=Fn(s);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let c="{",s=!0;for(const n of t)s?s=!1:c+=",",c+=`${n}:${Fn(e.fields[n])}`;return c+"}"}(e.mapValue):Os();var t,c}function Un(e){return!!e&&"integerValue"in e}function qn(e){return!!e&&"arrayValue"in e}function $n(e){return!!e&&"nullValue"in e}function Bn(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Gn(e){return!!e&&"mapValue"in e}function Wn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Mn(e.mapValue.fields,((e,c)=>t.mapValue.fields[e]=Wn(c))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let c=0;c<(e.arrayValue.values||[]).length;++c)t.arrayValue.values[c]=Wn(e.arrayValue.values[c]);return t}return Object.assign({},e)}function Kn(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn{constructor(e,t){this.position=e,this.inclusive=t}}function Yn(e,t,c){let s=0;for(let n=0;n<e.position.length;n++){const r=t[n],i=e.position[n];if(s=r.field.isKeyField()?rn.comparator(rn.fromName(i.referenceValue),c.key):Rn(i,c.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function Xn(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let c=0;c<e.position.length;c++)if(!Pn(e.position[c],t.position[c]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{}class Qn extends Jn{constructor(e,t,c){super(),this.field=e,this.op=t,this.value=c}static create(e,t,c){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,c):new ar(e,t,c):"array-contains"===t?new hr(e,c):"in"===t?new fr(e,c):"not-in"===t?new dr(e,c):"array-contains-any"===t?new mr(e,c):new Qn(e,t,c)}static createKeyFieldInFilter(e,t,c){return"in"===t?new or(e,c):new lr(e,c)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Rn(t,this.value)):null!==t&&On(this.value)===On(t)&&this.matchesComparison(Rn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Os()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class er extends Jn{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new er(e,t)}matches(e){return tr(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function tr(e){return"and"===e.op}function cr(e){return sr(e)&&tr(e)}function sr(e){for(const t of e.filters)if(t instanceof er)return!1;return!0}function nr(e){if(e instanceof Qn)return e.field.canonicalString()+e.op.toString()+jn(e.value);{const t=e.filters.map((e=>nr(e))).join(",");return`${e.op}(${t})`}}function rr(e,t){return e instanceof Qn?function(e,t){return t instanceof Qn&&e.op===t.op&&e.field.isEqual(t.field)&&Pn(e.value,t.value)}(e,t):e instanceof er?function(e,t){return t instanceof er&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,c,s)=>e&&rr(c,t.filters[s])),!0)}(e,t):void Os()}function ir(e){return e instanceof Qn?function(e){return`${e.field.canonicalString()} ${e.op} ${jn(e.value)}`}(e):e instanceof er?function(e){return e.op.toString()+" {"+e.getFilters().map(ir).join(" ,")+"}"}(e):"Filter"}class ar extends Qn{constructor(e,t,c){super(e,t,c),this.key=rn.fromName(c.referenceValue)}matches(e){const t=rn.comparator(e.key,this.key);return this.matchesComparison(t)}}class or extends Qn{constructor(e,t){super(e,"in",t),this.keys=ur("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class lr extends Qn{constructor(e,t){super(e,"not-in",t),this.keys=ur("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ur(e,t){var c;return((null===(c=t.arrayValue)||void 0===c?void 0:c.values)||[]).map((e=>rn.fromName(e.referenceValue)))}class hr extends Qn{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qn(t)&&Nn(t.arrayValue,this.value)}}class fr extends Qn{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Nn(this.value.arrayValue,t)}}class dr extends Qn{constructor(e,t){super(e,"not-in",t)}matches(e){if(Nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Nn(this.value.arrayValue,t)}}class mr extends Qn{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qn(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Nn(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t="asc"){this.field=e,this.dir=t}}function vr(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){this.comparator=e,this.root=t||gr.EMPTY}insert(e,t){return new Cr(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gr.BLACK,null,null))}remove(e){return new Cr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const c=this.comparator(e,t.key);if(0===c)return t.value;c<0?t=t.left:c>0&&(t=t.right)}return null}indexOf(e){let t=0,c=this.root;for(;!c.isEmpty();){const s=this.comparator(e,c.key);if(0===s)return t+c.left.size;s<0?c=c.left:(t+=c.left.size+1,c=c.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,c)=>(e(t,c),!1)))}toString(){const e=[];return this.inorderTraversal(((t,c)=>(e.push(`${t}:${c}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zr(this.root,e,this.comparator,!1)}getReverseIterator(){return new zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zr(this.root,e,this.comparator,!0)}}class zr{constructor(e,t,c,s){this.isReverse=s,this.nodeStack=[];let n=1;for(;!e.isEmpty();)if(n=t?c(e.key,t):1,t&&s&&(n*=-1),n<0)e=this.isReverse?e.left:e.right;else{if(0===n){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gr{constructor(e,t,c,s,n){this.key=e,this.value=t,this.color=null!=c?c:gr.RED,this.left=null!=s?s:gr.EMPTY,this.right=null!=n?n:gr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,c,s,n){return new gr(null!=e?e:this.key,null!=t?t:this.value,null!=c?c:this.color,null!=s?s:this.left,null!=n?n:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,c){let s=this;const n=c(e,s.key);return s=n<0?s.copy(null,null,null,s.left.insert(e,t,c),null):0===n?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,c)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let c,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===t(e,s.key)){if(s.right.isEmpty())return gr.EMPTY;c=s.right.min(),s=s.copy(c.key,c.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Os();if(this.right.isRed())throw Os();const e=this.left.check();if(e!==this.right.check())throw Os();return e+(this.isRed()?0:1)}}gr.EMPTY=null,gr.RED=!0,gr.BLACK=!1,gr.EMPTY=new class{constructor(){this.size=0}get key(){throw Os()}get value(){throw Os()}get color(){throw Os()}get left(){throw Os()}get right(){throw Os()}copy(e,t,c,s,n){return this}insert(e,t,c){return new gr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr{constructor(e){this.comparator=e,this.data=new Cr(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,c)=>(e(t),!1)))}forEachInRange(e,t){const c=this.data.getIteratorFrom(e[0]);for(;c.hasNext();){const s=c.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let c;for(c=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();c.hasNext();)if(!e(c.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Mr(this.data.getIterator())}getIteratorFrom(e){return new Mr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Hr))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),c=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=c.getNext().key;if(0!==this.comparator(e,s))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Hr(this.comparator);return t.data=e,t}}class Mr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{constructor(e){this.fields=e,e.sort(nn.comparator)}static empty(){return new Vr([])}unionWith(e){let t=new Hr(nn.comparator);for(const c of this.fields)t=t.add(c);for(const c of e)t=t.add(c);return new Vr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Js(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.value=e}static empty(){return new Lr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let c=0;c<e.length-1;++c)if(t=(t.mapValue.fields||{})[e.get(c)],!Gn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wn(t)}setAll(e){let t=nn.emptyPath(),c={},s=[];e.forEach(((e,n)=>{if(!t.isImmediateParentOf(n)){const e=this.getFieldsMap(t);this.applyChanges(e,c,s),c={},s=[],t=n.popLast()}e?c[n.lastSegment()]=Wn(e):s.push(n.lastSegment())}));const n=this.getFieldsMap(t);this.applyChanges(n,c,s)}delete(e){const t=this.field(e.popLast());Gn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let c=0;c<e.length;++c){let s=t.mapValue.fields[e.get(c)];Gn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(c)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,c){Mn(t,((t,c)=>e[t]=c));for(const s of c)delete e[s]}clone(){return new Lr(Wn(this.value))}}function yr(e){const t=[];return Mn(e.fields,((e,c)=>{const s=new nn([e]);if(Gn(c)){const e=yr(c.mapValue).fields;if(0===e.length)t.push(s);else for(const c of e)t.push(s.child(c))}else t.push(s)})),new Vr(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class br{constructor(e,t,c,s,n,r,i){this.key=e,this.documentType=t,this.version=c,this.readTime=s,this.createTime=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new br(e,0,en.min(),en.min(),en.min(),Lr.empty(),0)}static newFoundDocument(e,t,c,s){return new br(e,1,t,en.min(),c,s,0)}static newNoDocument(e,t){return new br(e,2,t,en.min(),en.min(),Lr.empty(),0)}static newUnknownDocument(e,t){return new br(e,3,t,en.min(),en.min(),Lr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(en.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=en.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof br&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new br(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t=null,c=[],s=[],n=null,r=null,i=null){this.path=e,this.collectionGroup=t,this.orderBy=c,this.filters=s,this.limit=n,this.startAt=r,this.endAt=i,this.ft=null}}function Sr(e,t=null,c=[],s=[],n=null,r=null,i=null){return new wr(e,t,c,s,n,r,i)}function kr(e){const t=Ns(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>nr(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ln(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>jn(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>jn(e))).join(",")),t.ft=e}return t.ft}function _r(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let c=0;c<e.orderBy.length;c++)if(!vr(e.orderBy[c],t.orderBy[c]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let c=0;c<e.filters.length;c++)if(!rr(e.filters[c],t.filters[c]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Xn(e.startAt,t.startAt)&&Xn(e.endAt,t.endAt)}function Er(e){return rn.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{constructor(e,t=null,c=[],s=[],n=null,r="F",i=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=c,this.filters=s,this.limit=n,this.limitType=r,this.startAt=i,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function xr(e,t,c,s,n,r,i,a){return new Tr(e,t,c,s,n,r,i,a)}function Ir(e){return new Tr(e)}function Ar(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Or(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Pr(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Nr(e){return null!==e.collectionGroup}function Rr(e){const t=Ns(e);if(null===t.dt){t.dt=[];const e=Pr(t),c=Or(t);if(null!==e&&null===c)e.isKeyField()||t.dt.push(new pr(e)),t.dt.push(new pr(nn.keyField(),"asc"));else{let e=!1;for(const c of t.explicitOrderBy)t.dt.push(c),c.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new pr(nn.keyField(),e))}}}return t.dt}function Dr(e){const t=Ns(e);if(!t._t)if("F"===t.limitType)t._t=Sr(t.path,t.collectionGroup,Rr(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Rr(t)){const t="desc"===n.dir?"asc":"desc";e.push(new pr(n.field,t))}const c=t.endAt?new Zn(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Zn(t.startAt.position,t.startAt.inclusive):null;t._t=Sr(t.path,t.collectionGroup,e,t.filters,t.limit,c,s)}return t._t}function jr(e,t,c){return new Tr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,c,e.startAt,e.endAt)}function Fr(e,t){return _r(Dr(e),Dr(t))&&e.limitType===t.limitType}function Ur(e){return`${kr(Dr(e))}|lt:${e.limitType}`}function qr(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>ir(e))).join(", ")}]`),Ln(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>jn(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>jn(e))).join(",")),`Target(${t})`}(Dr(e))}; limitType=${e.limitType})`}function $r(e,t){return t.isFoundDocument()&&function(e,t){const c=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(c):rn.isDocumentKey(e.path)?e.path.isEqual(c):e.path.isImmediateParentOf(c)}(e,t)&&function(e,t){for(const c of Rr(e))if(!c.field.isKeyField()&&null===t.data.field(c.field))return!1;return!0}(e,t)&&function(e,t){for(const c of e.filters)if(!c.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,c){const s=Yn(e,t,c);return e.inclusive?s<=0:s<0}(e.startAt,Rr(e),t))&&!(e.endAt&&!function(e,t,c){const s=Yn(e,t,c);return e.inclusive?s>=0:s>0}(e.endAt,Rr(e),t))}(e,t)}function Br(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Gr(e){return(t,c)=>{let s=!1;for(const n of Rr(e)){const e=Wr(n,t,c);if(0!==e)return e;s=s||n.field.isKeyField()}return 0}}function Wr(e,t,c){const s=e.field.isKeyField()?rn.comparator(t.key,c.key):function(e,t,c){const s=t.data.field(e),n=c.data.field(e);return null!==s&&null!==n?Rn(s,n):Os()}(e.field,t,c);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return Os()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yn(t)?"-0":t}}function Zr(e){return{integerValue:""+e}}function Yr(e,t){return bn(t)?Zr(t):Kr(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this._=void 0}}function Jr(e,t,c){return e instanceof ti?function(e,t){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(c.fields.__previous_value__=t),{mapValue:c}}(c,t):e instanceof ci?si(e,t):e instanceof ni?ri(e,t):function(e,t){const c=ei(e,t),s=ai(c)+ai(e.gt);return Un(c)&&Un(e.gt)?Zr(s):Kr(e.yt,s)}(e,t)}function Qr(e,t,c){return e instanceof ci?si(e,t):e instanceof ni?ri(e,t):c}function ei(e,t){return e instanceof ii?Un(c=t)||function(e){return!!e&&"doubleValue"in e}(c)?t:{integerValue:0}:null;var c}class ti extends Xr{}class ci extends Xr{constructor(e){super(),this.elements=e}}function si(e,t){const c=oi(t);for(const s of e.elements)c.some((e=>Pn(e,s)))||c.push(s);return{arrayValue:{values:c}}}class ni extends Xr{constructor(e){super(),this.elements=e}}function ri(e,t){let c=oi(t);for(const s of e.elements)c=c.filter((e=>!Pn(e,s)));return{arrayValue:{values:c}}}class ii extends Xr{constructor(e,t){super(),this.yt=e,this.gt=t}}function ai(e){return _n(e.integerValue||e.doubleValue)}function oi(e){return qn(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof ci&&t instanceof ci||e instanceof ni&&t instanceof ni?Js(e.elements,t.elements,Pn):e instanceof ii&&t instanceof ii?Pn(e.gt,t.gt):e instanceof ti&&t instanceof ti}(e.transform,t.transform)}class ui{constructor(e,t){this.version=e,this.transformResults=t}}class hi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new hi}static exists(e){return new hi(void 0,e)}static updateTime(e){return new hi(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fi(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class di{}function mi(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new yi(e.key,hi.none()):new gi(e.key,e.data,hi.none());{const c=e.data,s=Lr.empty();let n=new Hr(nn.comparator);for(let e of t.fields)if(!n.has(e)){let t=c.field(e);null===t&&e.length>1&&(e=e.popLast(),t=c.field(e)),null===t?s.delete(e):s.set(e,t),n=n.add(e)}return new Hi(e.key,s,new Vr(n.toArray()),hi.none())}}function pi(e,t,c){e instanceof gi?function(e,t,c){const s=e.value.clone(),n=Vi(e.fieldTransforms,t,c.transformResults);s.setAll(n),t.convertToFoundDocument(c.version,s).setHasCommittedMutations()}(e,t,c):e instanceof Hi?function(e,t,c){if(!fi(e.precondition,t))return void t.convertToUnknownDocument(c.version);const s=Vi(e.fieldTransforms,t,c.transformResults),n=t.data;n.setAll(Mi(e)),n.setAll(s),t.convertToFoundDocument(c.version,n).setHasCommittedMutations()}(e,t,c):function(e,t,c){t.convertToNoDocument(c.version).setHasCommittedMutations()}(0,t,c)}function vi(e,t,c,s){return e instanceof gi?function(e,t,c,s){if(!fi(e.precondition,t))return c;const n=e.value.clone(),r=Li(e.fieldTransforms,s,t);return n.setAll(r),t.convertToFoundDocument(t.version,n).setHasLocalMutations(),null}(e,t,c,s):e instanceof Hi?function(e,t,c,s){if(!fi(e.precondition,t))return c;const n=Li(e.fieldTransforms,s,t),r=t.data;return r.setAll(Mi(e)),r.setAll(n),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===c?null:c.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,c,s):function(e,t,c){return fi(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):c}(e,t,c)}function Ci(e,t){let c=null;for(const s of e.fieldTransforms){const e=t.data.field(s.field),n=ei(s.transform,e||null);null!=n&&(null===c&&(c=Lr.empty()),c.set(s.field,n))}return c||null}function zi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Js(e,t,((e,t)=>li(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class gi extends di{constructor(e,t,c,s=[]){super(),this.key=e,this.value=t,this.precondition=c,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Hi extends di{constructor(e,t,c,s,n=[]){super(),this.key=e,this.data=t,this.fieldMask=c,this.precondition=s,this.fieldTransforms=n,this.type=1}getFieldMask(){return this.fieldMask}}function Mi(e){const t=new Map;return e.fieldMask.fields.forEach((c=>{if(!c.isEmpty()){const s=e.data.field(c);t.set(c,s)}})),t}function Vi(e,t,c){const s=new Map;Ps(e.length===c.length);for(let n=0;n<c.length;n++){const r=e[n],i=r.transform,a=t.data.field(r.field);s.set(r.field,Qr(i,a,c[n]))}return s}function Li(e,t,c){const s=new Map;for(const n of e){const e=n.transform,r=c.data.field(n.field);s.set(n.field,Jr(e,r,t))}return s}class yi extends di{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bi extends di{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Si,ki;function _i(e){switch(e){default:return Os();case Rs.CANCELLED:case Rs.UNKNOWN:case Rs.DEADLINE_EXCEEDED:case Rs.RESOURCE_EXHAUSTED:case Rs.INTERNAL:case Rs.UNAVAILABLE:case Rs.UNAUTHENTICATED:return!1;case Rs.INVALID_ARGUMENT:case Rs.NOT_FOUND:case Rs.ALREADY_EXISTS:case Rs.PERMISSION_DENIED:case Rs.FAILED_PRECONDITION:case Rs.ABORTED:case Rs.OUT_OF_RANGE:case Rs.UNIMPLEMENTED:case Rs.DATA_LOSS:return!0}}function Ei(e){if(void 0===e)return xs("GRPC error has no .code"),Rs.UNKNOWN;switch(e){case Si.OK:return Rs.OK;case Si.CANCELLED:return Rs.CANCELLED;case Si.UNKNOWN:return Rs.UNKNOWN;case Si.DEADLINE_EXCEEDED:return Rs.DEADLINE_EXCEEDED;case Si.RESOURCE_EXHAUSTED:return Rs.RESOURCE_EXHAUSTED;case Si.INTERNAL:return Rs.INTERNAL;case Si.UNAVAILABLE:return Rs.UNAVAILABLE;case Si.UNAUTHENTICATED:return Rs.UNAUTHENTICATED;case Si.INVALID_ARGUMENT:return Rs.INVALID_ARGUMENT;case Si.NOT_FOUND:return Rs.NOT_FOUND;case Si.ALREADY_EXISTS:return Rs.ALREADY_EXISTS;case Si.PERMISSION_DENIED:return Rs.PERMISSION_DENIED;case Si.FAILED_PRECONDITION:return Rs.FAILED_PRECONDITION;case Si.ABORTED:return Rs.ABORTED;case Si.OUT_OF_RANGE:return Rs.OUT_OF_RANGE;case Si.UNIMPLEMENTED:return Rs.UNIMPLEMENTED;case Si.DATA_LOSS:return Rs.DATA_LOSS;default:return Os()}}(ki=Si||(Si={}))[ki.OK=0]="OK",ki[ki.CANCELLED=1]="CANCELLED",ki[ki.UNKNOWN=2]="UNKNOWN",ki[ki.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ki[ki.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ki[ki.NOT_FOUND=5]="NOT_FOUND",ki[ki.ALREADY_EXISTS=6]="ALREADY_EXISTS",ki[ki.PERMISSION_DENIED=7]="PERMISSION_DENIED",ki[ki.UNAUTHENTICATED=16]="UNAUTHENTICATED",ki[ki.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ki[ki.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ki[ki.ABORTED=10]="ABORTED",ki[ki.OUT_OF_RANGE=11]="OUT_OF_RANGE",ki[ki.UNIMPLEMENTED=12]="UNIMPLEMENTED",ki[ki.INTERNAL=13]="INTERNAL",ki[ki.UNAVAILABLE=14]="UNAVAILABLE",ki[ki.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ti{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),c=this.inner[t];if(void 0!==c)for(const[s,n]of c)if(this.equalsFn(s,e))return n}has(e){return void 0!==this.get(e)}set(e,t){const c=this.mapKeyFn(e),s=this.inner[c];if(void 0===s)return this.inner[c]=[[e,t]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],e))return void(s[n]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),c=this.inner[t];if(void 0===c)return!1;for(let s=0;s<c.length;s++)if(this.equalsFn(c[s][0],e))return 1===c.length?delete this.inner[t]:c.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mn(this.inner,((t,c)=>{for(const[s,n]of c)e(s,n)}))}isEmpty(){return Vn(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Cr(rn.comparator);function Ii(){return xi}const Ai=new Cr(rn.comparator);function Oi(...e){let t=Ai;for(const c of e)t=t.insert(c.key,c);return t}function Pi(e){let t=Ai;return e.forEach(((e,c)=>t=t.insert(e,c.overlayedDocument))),t}function Ni(){return Di()}function Ri(){return Di()}function Di(){return new Ti((e=>e.toString()),((e,t)=>e.isEqual(t)))}const ji=new Cr(rn.comparator),Fi=new Hr(rn.comparator);function Ui(...e){let t=Fi;for(const c of e)t=t.add(c);return t}const qi=new Hr(Xs);function $i(){return qi}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,c,s,n){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=c,this.documentUpdates=s,this.resolvedLimboDocuments=n}static createSynthesizedRemoteEventForCurrentChange(e,t,c){const s=new Map;return s.set(e,Gi.createSynthesizedTargetChangeForCurrentChange(e,t,c)),new Bi(en.min(),s,$i(),Ii(),Ui())}}class Gi{constructor(e,t,c,s,n){this.resumeToken=e,this.current=t,this.addedDocuments=c,this.modifiedDocuments=s,this.removedDocuments=n}static createSynthesizedTargetChangeForCurrentChange(e,t,c){return new Gi(c,t,Ui(),Ui(),Ui())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,c,s){this.It=e,this.removedTargetIds=t,this.key=c,this.Tt=s}}class Ki{constructor(e,t){this.targetId=e,this.Et=t}}class Zi{constructor(e,t,c=wn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=c,this.cause=s}}class Yi{constructor(){this.At=0,this.Rt=Qi(),this.bt=wn.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Ui(),t=Ui(),c=Ui();return this.Rt.forEach(((s,n)=>{switch(n){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:c=c.add(s);break;default:Os()}})),new Gi(this.bt,this.Pt,e,t,c)}xt(){this.vt=!1,this.Rt=Qi()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Xi{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Ii(),this.qt=Ji(),this.Ut=new Hr(Xs)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,(t=>{const c=this.Wt(t);switch(e.state){case 0:this.zt(t)&&c.Dt(e.resumeToken);break;case 1:c.Mt(),c.Vt||c.xt(),c.Dt(e.resumeToken);break;case 2:c.Mt(),c.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(c.Ft(),c.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),c.Dt(e.resumeToken));break;default:Os()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,c)=>{this.zt(c)&&t(c)}))}Jt(e){const t=e.targetId,c=e.Et.count,s=this.Yt(t);if(s){const e=s.target;if(Er(e))if(0===c){const c=new rn(e.path);this.Qt(t,c,br.newNoDocument(c,en.min()))}else Ps(1===c);else this.Xt(t)!==c&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach(((c,s)=>{const n=this.Yt(s);if(n){if(c.current&&Er(n.target)){const t=new rn(n.target.path);null!==this.Lt.get(t)||this.te(s,t)||this.Qt(s,t,br.newNoDocument(t,e))}c.St&&(t.set(s,c.Ct()),c.xt())}}));let c=Ui();this.qt.forEach(((e,t)=>{let s=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(s=!1,!1)})),s&&(c=c.add(e))})),this.Lt.forEach(((t,c)=>c.setReadTime(e)));const s=new Bi(e,t,this.Ut,this.Lt,c);return this.Lt=Ii(),this.qt=Ji(),this.Ut=new Hr(Xs),s}Gt(e,t){if(!this.zt(e))return;const c=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,c),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,c){if(!this.zt(e))return;const s=this.Wt(e);this.te(e,t)?s.Nt(t,1):s.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),c&&(this.Lt=this.Lt.insert(t,c))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Yi,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Hr(Xs),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||Ts("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Yi),this.$t.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function Ji(){return new Cr(rn.comparator)}function Qi(){return new Cr(rn.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),ta=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),ca=(()=>{const e={and:"AND",or:"OR"};return e})();class sa{constructor(e,t){this.databaseId=e,this.wt=t}}function na(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ra(e,t){return e.wt?t.toBase64():t.toUint8Array()}function ia(e,t){return na(e,t.toTimestamp())}function aa(e){return Ps(!!e),en.fromTimestamp(function(e){const t=kn(e);return new Qs(t.seconds,t.nanos)}(e))}function oa(e,t){return function(e){return new cn(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function la(e){const t=cn.fromString(e);return Ps(xa(t)),t}function ua(e,t){return oa(e.databaseId,t.path)}function ha(e,t){const c=la(t);if(c.get(1)!==e.databaseId.projectId)throw new Ds(Rs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+e.databaseId.projectId);if(c.get(3)!==e.databaseId.database)throw new Ds(Rs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+e.databaseId.database);return new rn(pa(c))}function fa(e,t){return oa(e.databaseId,t)}function da(e){const t=la(e);return 4===t.length?cn.emptyPath():pa(t)}function ma(e){return new cn(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function pa(e){return Ps(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function va(e,t,c){return{name:ua(e,t),fields:c.value.mapValue.fields}}function Ca(e,t){let c;if("targetChange"in t){t.targetChange;const s=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Os()}(t.targetChange.targetChangeType||"NO_CHANGE"),n=t.targetChange.targetIds||[],r=function(e,t){return e.wt?(Ps(void 0===t||"string"==typeof t),wn.fromBase64String(t||"")):(Ps(void 0===t||t instanceof Uint8Array),wn.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),i=t.targetChange.cause,a=i&&function(e){const t=void 0===e.code?Rs.UNKNOWN:Ei(e.code);return new Ds(t,e.message||"")}(i);c=new Zi(s,n,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const n=ha(e,s.document.name),r=aa(s.document.updateTime),i=s.document.createTime?aa(s.document.createTime):en.min(),a=new Lr({mapValue:{fields:s.document.fields}}),o=br.newFoundDocument(n,r,i,a),l=s.targetIds||[],u=s.removedTargetIds||[];c=new Wi(l,u,o.key,o)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const n=ha(e,s.document),r=s.readTime?aa(s.readTime):en.min(),i=br.newNoDocument(n,r),a=s.removedTargetIds||[];c=new Wi([],a,i.key,i)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const n=ha(e,s.document),r=s.removedTargetIds||[];c=new Wi([],r,n,null)}else{if(!("filter"in t))return Os();{t.filter;const e=t.filter;e.targetId;const s=e.count||0,n=new wi(s),r=e.targetId;c=new Ki(r,n)}}return c}function za(e,t){let c;if(t instanceof gi)c={update:va(e,t.key,t.value)};else if(t instanceof yi)c={delete:ua(e,t.key)};else if(t instanceof Hi)c={update:va(e,t.key,t.data),updateMask:Ta(t.fieldMask)};else{if(!(t instanceof bi))return Os();c={verify:ua(e,t.key)}}return t.fieldTransforms.length>0&&(c.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const c=t.transform;if(c instanceof ti)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ci)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ni)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ii)return{fieldPath:t.field.canonicalString(),increment:c.gt};throw Os()}(0,e)))),t.precondition.isNone||(c.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ia(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Os()}(e,t.precondition)),c}function ga(e,t){return e&&e.length>0?(Ps(void 0!==t),e.map((e=>function(e,t){let c=e.updateTime?aa(e.updateTime):aa(t);return c.isEqual(en.min())&&(c=aa(t)),new ui(c,e.transformResults||[])}(e,t)))):[]}function Ha(e,t){return{documents:[fa(e,t.path)]}}function Ma(e,t){const c={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(c.parent=fa(e,s),c.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(c.parent=fa(e,s.popLast()),c.structuredQuery.from=[{collectionId:s.lastSegment()}]);const n=function(e){if(0!==e.length)return Ea(er.create(e,"and"))}(t.filters);n&&(c.structuredQuery.where=n);const r=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:ka(e.field),direction:ba(e.dir)}}(e)))}(t.orderBy);r&&(c.structuredQuery.orderBy=r);const i=function(e,t){return e.wt||Ln(t)?t:{value:t}}(e,t.limit);var a;return null!==i&&(c.structuredQuery.limit=i),t.startAt&&(c.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(c.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),c}function Va(e){let t=da(e.parent);const c=e.structuredQuery,s=c.from?c.from.length:0;let n=null;if(s>0){Ps(1===s);const e=c.from[0];e.allDescendants?n=e.collectionId:t=t.child(e.collectionId)}let r=[];c.where&&(r=function(e){const t=ya(e);return t instanceof er&&cr(t)?t.getFilters():[t]}(c.where));let i=[];c.orderBy&&(i=c.orderBy.map((e=>function(e){return new pr(_a(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;c.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ln(t)?null:t}(c.limit));let o=null;c.startAt&&(o=function(e){const t=!!e.before,c=e.values||[];return new Zn(c,t)}(c.startAt));let l=null;return c.endAt&&(l=function(e){const t=!e.before,c=e.values||[];return new Zn(c,t)}(c.endAt)),xr(t,n,i,r,a,"F",o,l)}function La(e,t){const c=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Os()}}(0,t.purpose);return null==c?null:{"goog-listen-tags":c}}function ya(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=_a(e.unaryFilter.field);return Qn.create(t,"==",{doubleValue:NaN});case"IS_NULL":const c=_a(e.unaryFilter.field);return Qn.create(c,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_a(e.unaryFilter.field);return Qn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const n=_a(e.unaryFilter.field);return Qn.create(n,"!=",{nullValue:"NULL_VALUE"});default:return Os()}}(e):void 0!==e.fieldFilter?function(e){return Qn.create(_a(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Os()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return er.create(e.compositeFilter.filters.map((e=>ya(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Os()}}(e.compositeFilter.op))}(e):Os()}function ba(e){return ea[e]}function wa(e){return ta[e]}function Sa(e){return ca[e]}function ka(e){return{fieldPath:e.canonicalString()}}function _a(e){return nn.fromServerFormat(e.fieldPath)}function Ea(e){return e instanceof Qn?function(e){if("=="===e.op){if(Bn(e.value))return{unaryFilter:{field:ka(e.field),op:"IS_NAN"}};if($n(e.value))return{unaryFilter:{field:ka(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Bn(e.value))return{unaryFilter:{field:ka(e.field),op:"IS_NOT_NAN"}};if($n(e.value))return{unaryFilter:{field:ka(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ka(e.field),op:wa(e.op),value:e.value}}}(e):e instanceof er?function(e){const t=e.getFilters().map((e=>Ea(e)));return 1===t.length?t[0]:{compositeFilter:{op:Sa(e.op),filters:t}}}(e):Os()}function Ta(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function xa(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Aa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Oa=Aa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pa{constructor(e,t,c,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=c,this.mutations=s}applyToRemoteDocument(e,t){const c=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const t=this.mutations[s];t.key.isEqual(e.key)&&pi(t,e,c[s])}}applyToLocalView(e,t){for(const c of this.baseMutations)c.key.isEqual(e.key)&&(t=vi(c,e,t,this.localWriteTime));for(const c of this.mutations)c.key.isEqual(e.key)&&(t=vi(c,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const c=Ri();return this.mutations.forEach((s=>{const n=e.get(s.key),r=n.overlayedDocument;let i=this.applyToLocalView(r,n.mutatedFields);i=t.has(s.key)?null:i;const a=mi(r,i);null!==a&&c.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(en.min())})),c}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ui())}isEqual(e){return this.batchId===e.batchId&&Js(this.mutations,e.mutations,((e,t)=>zi(e,t)))&&Js(this.baseMutations,e.baseMutations,((e,t)=>zi(e,t)))}}class Na{constructor(e,t,c,s){this.batch=e,this.commitVersion=t,this.mutationResults=c,this.docVersions=s}static from(e,t,c){Ps(e.mutations.length===c.length);let s=ji;const n=e.mutations;for(let r=0;r<n.length;r++)s=s.insert(n[r].key,c[r].version);return new Na(e,t,c,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t,c,s,n=en.min(),r=en.min(),i=wn.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=c,this.sequenceNumber=s,this.snapshotVersion=n,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=i}withSequenceNumber(e){return new Da(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Da(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Da(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.ie=e}}function Fa(e){const t=Va({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?jr(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(_n(e.integerValue));else if("doubleValue"in e){const c=_n(e.doubleValue);isNaN(c)?this.he(t,13):(this.he(t,15),yn(c)?t.le(0):t.le(c))}else if("timestampValue"in e){const c=e.timestampValue;this.he(t,20),"string"==typeof c?t.fe(c):(t.fe(`${c.seconds||""}`),t.le(c.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(En(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const c=e.geoPointValue;this.he(t,45),t.le(c.latitude||0),t.le(c.longitude||0)}else"mapValue"in e?Kn(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):Os()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const c=e.fields||{};this.he(t,55);for(const s of Object.keys(c))this.de(s,t),this.ce(c[s],t)}ye(e,t){const c=e.values||[];this.he(t,50);for(const s of c)this.ce(s,t)}me(e,t){this.he(t,37),rn.fromName(e).path.forEach((e=>{this.he(t,60),this.pe(e,t)}))}he(e,t){e.le(t)}_e(e){e.le(2)}}Ua.Ie=new Ua;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{constructor(){this.Je=new $a}addToCollectionParentIndex(e,t){return this.Je.add(t),pn.resolve()}getCollectionParents(e,t){return pn.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return pn.resolve()}deleteFieldIndex(e,t){return pn.resolve()}getDocumentsMatchingTarget(e,t){return pn.resolve(null)}getIndexType(e,t){return pn.resolve(0)}getFieldIndexes(e,t){return pn.resolve([])}getNextCollectionGroupToUpdate(e){return pn.resolve(null)}getMinOffset(e,t){return pn.resolve(un.min())}getMinOffsetFromCollectionGroup(e,t){return pn.resolve(un.min())}updateCollectionGroup(e,t,c){return pn.resolve()}updateIndexEntries(e,t){return pn.resolve()}}class $a{constructor(){this.index={}}add(e){const t=e.lastSegment(),c=e.popLast(),s=this.index[t]||new Hr(cn.comparator),n=!s.has(c);return this.index[t]=s.add(c),n}has(e){const t=e.lastSegment(),c=e.popLast(),s=this.index[t];return s&&s.has(c)}getEntries(e){return(this.index[e]||new Hr(cn.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ba{constructor(e,t,c){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=c}static withCacheSize(e){return new Ba(e,Ba.DEFAULT_COLLECTION_PERCENTILE,Ba.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ba.DEFAULT_COLLECTION_PERCENTILE=10,Ba.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ba.DEFAULT=new Ba(41943040,Ba.DEFAULT_COLLECTION_PERCENTILE,Ba.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ba.DISABLED=new Ba(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ga(0)}static vn(){return new Ga(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa{constructor(){this.changes=new Ti((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,br.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const c=this.changes.get(t);return void 0!==c?pn.resolve(c):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t,c,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=c,this.indexManager=s}getDocument(e,t){let c=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(c=s,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==c&&vi(c.mutation,e,Vr.empty(),Qs.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ui()).next((()=>t))))}getLocalViewOfDocuments(e,t,c=Ui()){const s=Ni();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,c).next((e=>{let t=Oi();return e.forEach(((e,c)=>{t=t.insert(e,c.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const c=Ni();return this.populateOverlays(e,c,t).next((()=>this.computeViews(e,t,c,Ui())))}populateOverlays(e,t,c){const s=[];return c.forEach((e=>{t.has(e)||s.push(e)})),this.documentOverlayCache.getOverlays(e,s).next((e=>{e.forEach(((e,c)=>{t.set(e,c)}))}))}computeViews(e,t,c,s){let n=Ii();const r=Di(),i=Di();return t.forEach(((e,t)=>{const i=c.get(t.key);s.has(t.key)&&(void 0===i||i.mutation instanceof Hi)?n=n.insert(t.key,t):void 0!==i&&(r.set(t.key,i.mutation.getFieldMask()),vi(i.mutation,t,i.mutation.getFieldMask(),Qs.now()))})),this.recalculateAndSaveOverlays(e,n).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var c;return i.set(e,new Ka(t,null!==(c=r.get(e))&&void 0!==c?c:null))})),i)))}recalculateAndSaveOverlays(e,t){const c=Di();let s=new Cr(((e,t)=>e-t)),n=Ui();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const n of e)n.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let i=c.get(e)||Vr.empty();i=n.applyToLocalView(r,i),c.set(e,i);const a=(s.get(n.batchId)||Ui()).add(e);s=s.insert(n.batchId,a)}))})).next((()=>{const r=[],i=s.getReverseIterator();for(;i.hasNext();){const s=i.getNext(),a=s.key,o=s.value,l=Ri();o.forEach((e=>{if(!n.has(e)){const s=mi(t.get(e),c.get(e));null!==s&&l.set(e,s),n=n.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,a,l))}return pn.waitFor(r)})).next((()=>c))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,c){return function(e){return rn.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Nr(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,c):this.getDocumentsMatchingCollectionQuery(e,t,c)}getNextDocuments(e,t,c,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,c,s).next((n=>{const r=s-n.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,c.largestBatchId,s-n.size):pn.resolve(Ni());let i=-1,a=n;return r.next((t=>pn.forEach(t,((t,c)=>(i<c.largestBatchId&&(i=c.largestBatchId),n.get(t)?pn.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,n))).next((()=>this.computeViews(e,a,t,Ui()))).next((e=>({batchId:i,changes:Pi(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new rn(t)).next((e=>{let t=Oi();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,c){const s=t.collectionGroup;let n=Oi();return this.indexManager.getCollectionParents(e,s).next((r=>pn.forEach(r,(r=>{const i=function(e,t){return new Tr(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,r.child(s));return this.getDocumentsMatchingCollectionQuery(e,i,c).next((e=>{e.forEach(((e,t)=>{n=n.insert(e,t)}))}))})).next((()=>n))))}getDocumentsMatchingCollectionQuery(e,t,c){let s;return this.remoteDocumentCache.getAllFromCollection(e,t.path,c).next((n=>(s=n,this.documentOverlayCache.getOverlaysForCollection(e,t.path,c.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const c=t.getKey();null===s.get(c)&&(s=s.insert(c,br.newInvalidDocument(c)))}));let c=Oi();return s.forEach(((s,n)=>{const r=e.get(s);void 0!==r&&vi(r.mutation,n,Vr.empty(),Qs.now()),$r(t,n)&&(c=c.insert(s,n))})),c}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return pn.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var c;return this.Zn.set(t.id,{id:(c=t).id,version:c.version,createTime:aa(c.createTime)}),pn.resolve()}getNamedQuery(e,t){return pn.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:Fa(e.bundledQuery),readTime:aa(e.readTime)}}(t)),pn.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){this.overlays=new Cr(rn.comparator),this.es=new Map}getOverlay(e,t){return pn.resolve(this.overlays.get(t))}getOverlays(e,t){const c=Ni();return pn.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&c.set(t,e)})))).next((()=>c))}saveOverlays(e,t,c){return c.forEach(((c,s)=>{this.oe(e,t,s)})),pn.resolve()}removeOverlaysForBatchId(e,t,c){const s=this.es.get(c);return void 0!==s&&(s.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(c)),pn.resolve()}getOverlaysForCollection(e,t,c){const s=Ni(),n=t.length+1,r=new rn(t.child("")),i=this.overlays.getIteratorFrom(r);for(;i.hasNext();){const e=i.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===n&&e.largestBatchId>c&&s.set(e.getKey(),e)}return pn.resolve(s)}getOverlaysForCollectionGroup(e,t,c,s){let n=new Cr(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>c){let t=n.get(e.largestBatchId);null===t&&(t=Ni(),n=n.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const i=Ni(),a=n.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>i.set(e,t))),i.size()>=s)break;return pn.resolve(i)}oe(e,t,c){const s=this.overlays.get(c.key);if(null!==s){const e=this.es.get(s.largestBatchId).delete(c.key);this.es.set(s.largestBatchId,e)}this.overlays=this.overlays.insert(c.key,new Ra(t,c));let n=this.es.get(t);void 0===n&&(n=Ui(),this.es.set(t,n)),this.es.set(t,n.add(c.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.ns=new Hr(Qa.ss),this.rs=new Hr(Qa.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const c=new Qa(e,t);this.ns=this.ns.add(c),this.rs=this.rs.add(c)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new Qa(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new rn(new cn([])),c=new Qa(t,e),s=new Qa(t,e+1),n=[];return this.rs.forEachInRange([c,s],(e=>{this.cs(e),n.push(e.key)})),n}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new rn(new cn([])),c=new Qa(t,e),s=new Qa(t,e+1);let n=Ui();return this.rs.forEachInRange([c,s],(e=>{n=n.add(e.key)})),n}containsKey(e){const t=new Qa(e,0),c=this.ns.firstAfterOrEqual(t);return null!==c&&e.isEqual(c.key)}}class Qa{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return rn.comparator(e.key,t.key)||Xs(e._s,t._s)}static os(e,t){return Xs(e._s,t._s)||rn.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Hr(Qa.ss)}checkEmpty(e){return pn.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,c,s){const n=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Pa(n,t,c,s);this.mutationQueue.push(r);for(const i of s)this.gs=this.gs.add(new Qa(i.key,n)),this.indexManager.addToCollectionParentIndex(e,i.key.path.popLast());return pn.resolve(r)}lookupMutationBatch(e,t){return pn.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const c=t+1,s=this.ps(c),n=s<0?0:s;return pn.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return pn.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return pn.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const c=new Qa(t,0),s=new Qa(t,Number.POSITIVE_INFINITY),n=[];return this.gs.forEachInRange([c,s],(e=>{const t=this.ys(e._s);n.push(t)})),pn.resolve(n)}getAllMutationBatchesAffectingDocumentKeys(e,t){let c=new Hr(Xs);return t.forEach((e=>{const t=new Qa(e,0),s=new Qa(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,s],(e=>{c=c.add(e._s)}))})),pn.resolve(this.Is(c))}getAllMutationBatchesAffectingQuery(e,t){const c=t.path,s=c.length+1;let n=c;rn.isDocumentKey(n)||(n=n.child(""));const r=new Qa(new rn(n),0);let i=new Hr(Xs);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!c.isPrefixOf(t)&&(t.length===s&&(i=i.add(e._s)),!0)}),r),pn.resolve(this.Is(i))}Is(e){const t=[];return e.forEach((e=>{const c=this.ys(e);null!==c&&t.push(c)})),t}removeMutationBatch(e,t){Ps(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let c=this.gs;return pn.forEach(t.mutations,(s=>{const n=new Qa(s.key,t.batchId);return c=c.delete(n),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.gs=c}))}An(e){}containsKey(e,t){const c=new Qa(t,0),s=this.gs.firstAfterOrEqual(c);return pn.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,pn.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.Es=e,this.docs=new Cr(rn.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const c=t.key,s=this.docs.get(c),n=s?s.size:0,r=this.Es(t);return this.docs=this.docs.insert(c,{document:t.mutableCopy(),size:r}),this.size+=r-n,this.indexManager.addToCollectionParentIndex(e,c.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const c=this.docs.get(t);return pn.resolve(c?c.document.mutableCopy():br.newInvalidDocument(t))}getEntries(e,t){let c=Ii();return t.forEach((e=>{const t=this.docs.get(e);c=c.insert(e,t?t.document.mutableCopy():br.newInvalidDocument(e))})),pn.resolve(c)}getAllFromCollection(e,t,c){let s=Ii();const n=new rn(t.child("")),r=this.docs.getIteratorFrom(n);for(;r.hasNext();){const{key:e,value:{document:n}}=r.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||hn(ln(n),c)<=0||(s=s.insert(n.key,n.mutableCopy()))}return pn.resolve(s)}getAllFromCollectionGroup(e,t,c,s){Os()}As(e,t){return pn.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new co(this)}getSize(e){return pn.resolve(this.size)}}class co extends Wa{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((c,s)=>{s.isValidDocument()?t.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(c)})),pn.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.persistence=e,this.Rs=new Ti((e=>kr(e)),_r),this.lastRemoteSnapshotVersion=en.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ja,this.targetCount=0,this.vs=Ga.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,c)=>t(c))),pn.resolve()}getLastRemoteSnapshotVersion(e){return pn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return pn.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),pn.resolve(this.highestTargetId)}setTargetsMetadata(e,t,c){return c&&(this.lastRemoteSnapshotVersion=c),t>this.bs&&(this.bs=t),pn.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Ga(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,pn.resolve()}updateTargetData(e,t){return this.Dn(t),pn.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,pn.resolve()}removeTargets(e,t,c){let s=0;const n=[];return this.Rs.forEach(((r,i)=>{i.sequenceNumber<=t&&null===c.get(i.targetId)&&(this.Rs.delete(r),n.push(this.removeMatchingKeysForTargetId(e,i.targetId)),s++)})),pn.waitFor(n).next((()=>s))}getTargetCount(e){return pn.resolve(this.targetCount)}getTargetData(e,t){const c=this.Rs.get(t)||null;return pn.resolve(c)}addMatchingKeys(e,t,c){return this.Ps.us(t,c),pn.resolve()}removeMatchingKeys(e,t,c){this.Ps.hs(t,c);const s=this.persistence.referenceDelegate,n=[];return s&&t.forEach((t=>{n.push(s.markPotentiallyOrphaned(e,t))})),pn.waitFor(n)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),pn.resolve()}getMatchingKeysForTargetId(e,t){const c=this.Ps.ds(t);return pn.resolve(c)}containsKey(e,t){return pn.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Cn(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new so(this),this.indexManager=new qa,this.remoteDocumentCache=function(e){return new to(e)}((e=>this.referenceDelegate.xs(e))),this.yt=new ja(t),this.Ns=new Ya(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xa,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let c=this.Vs[e.toKey()];return c||(c=new eo(t,this.referenceDelegate),this.Vs[e.toKey()]=c),c}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,c){Ts("MemoryPersistence","Starting transaction:",e);const s=new ro(this.Ss.next());return this.referenceDelegate.ks(),c(s).next((e=>this.referenceDelegate.Os(s).next((()=>e)))).toPromise().then((e=>(s.raiseOnCommittedEvent(),e)))}Ms(e,t){return pn.or(Object.values(this.Vs).map((c=>()=>c.containsKey(e,t))))}}class ro extends dn{constructor(e){super(),this.currentSequenceNumber=e}}class io{constructor(e){this.persistence=e,this.Fs=new Ja,this.$s=null}static Bs(e){return new io(e)}get Ls(){if(this.$s)return this.$s;throw Os()}addReference(e,t,c){return this.Fs.addReference(c,t),this.Ls.delete(c.toString()),pn.resolve()}removeReference(e,t,c){return this.Fs.removeReference(c,t),this.Ls.add(c.toString()),pn.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),pn.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>c.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return pn.forEach(this.Ls,(c=>{const s=rn.fromPath(c);return this.qs(e,s).next((e=>{e||t.removeEntry(s,en.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.qs(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}qs(e,t){return pn.or([()=>pn.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ao{constructor(e,t,c,s){this.targetId=e,this.fromCache=t,this.Si=c,this.Di=s}static Ci(e,t){let c=Ui(),s=Ui();for(const n of t.docChanges)switch(n.type){case 0:c=c.add(n.doc.key);break;case 1:s=s.add(n.doc.key)}return new ao(e,t.fromCache,c,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,c,s){return this.ki(e,t).next((n=>n||this.Oi(e,t,s,c))).next((c=>c||this.Mi(e,t)))}ki(e,t){if(Ar(t))return pn.resolve(null);let c=Dr(t);return this.indexManager.getIndexType(e,c).next((s=>0===s?null:(null!==t.limit&&1===s&&(t=jr(t,null,"F"),c=Dr(t)),this.indexManager.getDocumentsMatchingTarget(e,c).next((s=>{const n=Ui(...s);return this.Ni.getDocuments(e,n).next((s=>this.indexManager.getMinOffset(e,c).next((c=>{const r=this.Fi(t,s);return this.$i(t,r,n,c.readTime)?this.ki(e,jr(t,null,"F")):this.Bi(e,r,t,c)}))))})))))}Oi(e,t,c,s){return Ar(t)||s.isEqual(en.min())?this.Mi(e,t):this.Ni.getDocuments(e,c).next((n=>{const r=this.Fi(t,n);return this.$i(t,r,c,s)?this.Mi(e,t):(Es()<=i["in"].DEBUG&&Ts("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qr(t)),this.Bi(e,r,t,on(s,-1)))}))}Fi(e,t){let c=new Hr(Gr(e));return t.forEach(((t,s)=>{$r(e,s)&&(c=c.add(s))})),c}$i(e,t,c,s){if(null===e.limit)return!1;if(c.size!==t.size)return!0;const n="F"===e.limitType?t.last():t.first();return!!n&&(n.hasPendingWrites||n.version.compareTo(s)>0)}Mi(e,t){return Es()<=i["in"].DEBUG&&Ts("QueryEngine","Using full collection scan to execute query:",qr(t)),this.Ni.getDocumentsMatchingQuery(e,t,un.min())}Bi(e,t,c,s){return this.Ni.getDocumentsMatchingQuery(e,c,s).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t,c,s){this.persistence=e,this.Li=t,this.yt=s,this.qi=new Cr(Xs),this.Ui=new Ti((e=>kr(e)),_r),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(c)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Za(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qi)))}}function uo(e,t,c,s){return new lo(e,t,c,s)}async function ho(e,t){const c=Ns(e);return await c.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return c.mutationQueue.getAllMutationBatches(e).next((n=>(s=n,c.Qi(t),c.mutationQueue.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let i=Ui();for(const e of s){n.push(e.batchId);for(const t of e.mutations)i=i.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)i=i.add(t.key)}return c.localDocuments.getDocuments(e,i).next((e=>({ji:e,removedBatchIds:n,addedBatchIds:r})))}))}))}function fo(e,t){const c=Ns(e);return c.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const s=t.batch.keys(),n=c.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,c,s){const n=c.batch,r=n.keys();let i=pn.resolve();return r.forEach((e=>{i=i.next((()=>s.getEntry(t,e))).next((t=>{const r=c.docVersions.get(e);Ps(null!==r),t.version.compareTo(r)<0&&(n.applyToRemoteDocument(t,c),t.isValidDocument()&&(t.setReadTime(c.commitVersion),s.addEntry(t)))}))})),i.next((()=>e.mutationQueue.removeMutationBatch(t,n)))}(c,e,t,n).next((()=>n.apply(e))).next((()=>c.mutationQueue.performConsistencyCheck(e))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(e,s,t.batch.batchId))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ui();for(let c=0;c<e.mutationResults.length;++c)e.mutationResults[c].transformResults.length>0&&(t=t.add(e.batch.mutations[c].key));return t}(t)))).next((()=>c.localDocuments.getDocuments(e,s)))}))}function mo(e){const t=Ns(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function po(e,t){const c=Ns(e),s=t.snapshotVersion;let n=c.qi;return c.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=c.Gi.newChangeBuffer({trackRemovals:!0});n=c.qi;const i=[];t.targetChanges.forEach(((r,a)=>{const o=n.get(a);if(!o)return;i.push(c.Cs.removeMatchingKeys(e,r.removedDocuments,a).next((()=>c.Cs.addMatchingKeys(e,r.addedDocuments,a))));let l=o.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?l=l.withResumeToken(wn.EMPTY_BYTE_STRING,en.min()).withLastLimboFreeSnapshotVersion(en.min()):r.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(r.resumeToken,s)),n=n.insert(a,l),function(e,t,c){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||c.addedDocuments.size+c.modifiedDocuments.size+c.removedDocuments.size>0)}(o,l,r)&&i.push(c.Cs.updateTargetData(e,l))}));let a=Ii(),o=Ui();if(t.documentUpdates.forEach((s=>{t.resolvedLimboDocuments.has(s)&&i.push(c.persistence.referenceDelegate.updateLimboDocument(e,s))})),i.push(vo(e,r,t.documentUpdates).next((e=>{a=e.Wi,o=e.zi}))),!s.isEqual(en.min())){const t=c.Cs.getLastRemoteSnapshotVersion(e).next((t=>c.Cs.setTargetsMetadata(e,e.currentSequenceNumber,s)));i.push(t)}return pn.waitFor(i).next((()=>r.apply(e))).next((()=>c.localDocuments.getLocalViewOfDocuments(e,a,o))).next((()=>a))})).then((e=>(c.qi=n,e)))}function vo(e,t,c){let s=Ui(),n=Ui();return c.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=Ii();return c.forEach(((c,r)=>{const i=e.get(c);r.isFoundDocument()!==i.isFoundDocument()&&(n=n.add(c)),r.isNoDocument()&&r.version.isEqual(en.min())?(t.removeEntry(c,r.readTime),s=s.insert(c,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(t.addEntry(r),s=s.insert(c,r)):Ts("LocalStore","Ignoring outdated watch update for ",c,". Current version:",i.version," Watch version:",r.version)})),{Wi:s,zi:n}}))}function Co(e,t){const c=Ns(e);return c.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),c.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function zo(e,t){const c=Ns(e);return c.persistence.runTransaction("Allocate target","readwrite",(e=>{let s;return c.Cs.getTargetData(e,t).next((n=>n?(s=n,pn.resolve(s)):c.Cs.allocateTargetId(e).next((n=>(s=new Da(t,n,0,e.currentSequenceNumber),c.Cs.addTargetData(e,s).next((()=>s)))))))})).then((e=>{const s=c.qi.get(e.targetId);return(null===s||e.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(c.qi=c.qi.insert(e.targetId,e),c.Ui.set(t,e.targetId)),e}))}async function go(e,t,c){const s=Ns(e),n=s.qi.get(t),r=c?"readwrite":"readwrite-primary";try{c||await s.persistence.runTransaction("Release target",r,(e=>s.persistence.referenceDelegate.removeTarget(e,n)))}catch(e){if(!vn(e))throw e;Ts("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}s.qi=s.qi.remove(t),s.Ui.delete(n.target)}function Ho(e,t,c){const s=Ns(e);let n=en.min(),r=Ui();return s.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,c){const s=Ns(e),n=s.Ui.get(c);return void 0!==n?pn.resolve(s.qi.get(n)):s.Cs.getTargetData(t,c)}(s,e,Dr(t)).next((t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>s.Li.getDocumentsMatchingQuery(e,t,c?n:en.min(),c?r:Ui()))).next((e=>(Mo(s,Br(t),e),{documents:e,Hi:r})))))}function Mo(e,t,c){let s=e.Ki.get(t)||en.min();c.forEach(((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)})),e.Ki.set(t,s)}class Vo{constructor(){this.activeTargetIds=$i()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lo{constructor(){this.Lr=new Vo,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,c){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,c){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Vo,Promise.resolve()}handleUserChange(e,t,c){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{Ur(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Ts("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Ts("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,c,s,n){const r=this.ho(e,t);Ts("RestConnection","Sending: ",r,c);const i={};return this.lo(i,s,n),this.fo(e,r,i,c).then((e=>(Ts("RestConnection","Received: ",e),e)),(t=>{throw Is("RestConnection",`${e} failed with error: `,t,"url: ",r,"request:",c),t}))}_o(e,t,c,s,n,r){return this.ao(e,t,c,s,n)}lo(e,t,c){e["X-Goog-Api-Client"]="gl-js/ fire/"+ks,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,c)=>e[c]=t)),c&&c.headers.forEach(((t,c)=>e[c]=t))}ho(e,t){const c=wo[e];return`${this.oo}/v1/${t}:${c}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,c,s){return new Promise(((n,r)=>{const i=new bs;i.setWithCredentials(!0),i.listenOnce(Hs.COMPLETE,(()=>{try{switch(i.getLastErrorCode()){case gs.NO_ERROR:const t=i.getResponseJson();Ts("Connection","XHR received:",JSON.stringify(t)),n(t);break;case gs.TIMEOUT:Ts("Connection",'RPC "'+e+'" timed out'),r(new Ds(Rs.DEADLINE_EXCEEDED,"Request time out"));break;case gs.HTTP_ERROR:const c=i.getStatus();if(Ts("Connection",'RPC "'+e+'" failed with status:',c,"response text:",i.getResponseText()),c>0){let e=i.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Rs).indexOf(t)>=0?t:Rs.UNKNOWN}(t.status);r(new Ds(e,t.message))}else r(new Ds(Rs.UNKNOWN,"Server responded with status "+i.getStatus()))}else r(new Ds(Rs.UNAVAILABLE,"Connection failed."));break;default:Os()}}finally{Ts("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(s);i.send(t,"POST",a,c,15)}))}wo(e,t,c){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],n=Cs(),r=zs(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new Ls({})),this.lo(i.initMessageHeaders,t,c),i.encodeInitMessageHeaders=!0;const a=s.join("");Ts("Connection","Creating WebChannel: "+a,i);const o=n.createWebChannel(a,i);let l=!1,u=!1;const h=new So({Hr:e=>{u?Ts("Connection","Not sending because WebChannel is closed:",e):(l||(Ts("Connection","Opening WebChannel transport."),o.open(),l=!0),Ts("Connection","WebChannel sending:",e),o.send(e))},Jr:()=>o.close()}),f=(e,t,c)=>{e.listen(t,(e=>{try{c(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(o,ys.EventType.OPEN,(()=>{u||Ts("Connection","WebChannel transport opened.")})),f(o,ys.EventType.CLOSE,(()=>{u||(u=!0,Ts("Connection","WebChannel transport closed"),h.io())})),f(o,ys.EventType.ERROR,(e=>{u||(u=!0,Is("Connection","WebChannel transport errored:",e),h.io(new Ds(Rs.UNAVAILABLE,"The operation could not be completed")))})),f(o,ys.EventType.MESSAGE,(e=>{var t;if(!u){const c=e.data[0];Ps(!!c);const s=c,n=s.error||(null===(t=s[0])||void 0===t?void 0:t.error);if(n){Ts("Connection","WebChannel received error:",n);const e=n.status;let t=function(e){const t=Si[e];if(void 0!==t)return Ei(t)}(e),c=n.message;void 0===t&&(t=Rs.INTERNAL,c="Unknown error status: "+e+" with message "+n.message),u=!0,h.io(new Ds(t,c)),o.close()}else Ts("Connection","WebChannel received:",c),h.ro(c)}})),f(r,Ms.STAT_EVENT,(e=>{e.stat===Vs.PROXY?Ts("Connection","Detected buffering proxy"):e.stat===Vs.NOPROXY&&Ts("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(e){return new sa(e,!0)}class To{constructor(e,t,c=1e3,s=1.5,n=6e4){this.Hs=e,this.timerId=t,this.mo=c,this.yo=s,this.po=n,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),c=Math.max(0,Date.now()-this.Eo),s=Math.max(0,t-c);s>0&&Ts("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${c} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,c,s,n,r,i,a){this.Hs=e,this.vo=c,this.Vo=s,this.connection=n,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=i,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new To(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===Rs.RESOURCE_EXHAUSTED?(xs(t.toString()),xs("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===Rs.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,c])=>{this.So===t&&this.Go(e,c)}),(t=>{e((()=>{const e=new Ds(Rs.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const c=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{c((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{c((()=>this.Qo(e)))})),this.stream.onMessage((e=>{c((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return Ts("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Ts("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Io extends xo{constructor(e,t,c,s,n,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,c,s,r),this.yt=n}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=Ca(this.yt,e),c=function(e){if(!("targetChange"in e))return en.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?en.min():t.readTime?aa(t.readTime):en.min()}(e);return this.listener.Wo(t,c)}zo(e){const t={};t.database=ma(this.yt),t.addTarget=function(e,t){let c;const s=t.target;return c=Er(s)?{documents:Ha(e,s)}:{query:Ma(e,s)},c.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?c.resumeToken=ra(e,t.resumeToken):t.snapshotVersion.compareTo(en.min())>0&&(c.readTime=na(e,t.snapshotVersion.toTimestamp())),c}(this.yt,e);const c=La(this.yt,e);c&&(t.labels=c),this.Bo(t)}Ho(e){const t={};t.database=ma(this.yt),t.removeTarget=e,this.Bo(t)}}class Ao extends xo{constructor(e,t,c,s,n,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,c,s,r),this.yt=n,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Ps(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=ga(e.writeResults,e.commitTime),c=aa(e.commitTime);return this.listener.Zo(c,t)}return Ps(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ma(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>za(this.yt,e)))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends class{}{constructor(e,t,c,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=c,this.yt=s,this.nu=!1}su(){if(this.nu)throw new Ds(Rs.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,c){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,n])=>this.connection.ao(e,t,c,s,n))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Rs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ds(Rs.UNKNOWN,e.toString())}))}_o(e,t,c,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([n,r])=>this.connection._o(e,t,c,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Rs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ds(Rs.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class Po{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(xs(t),this.ou=!1):Ts("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t,c,s,n){this.localStore=e,this.datastore=t,this.asyncQueue=c,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=n,this.mu.Ur((e=>{c.enqueueAndForget((async()=>{Go(this)&&(Ts("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Ns(e);t._u.add(4),await Do(t),t.gu.set("Unknown"),t._u.delete(4),await Ro(t)}(this))}))})),this.gu=new Po(c,s)}}async function Ro(e){if(Go(e))for(const t of e.wu)await t(!0)}async function Do(e){for(const t of e.wu)await t(!1)}function jo(e,t){const c=Ns(e);c.du.has(t.targetId)||(c.du.set(t.targetId,t),Bo(c)?$o(c):ul(c).ko()&&Uo(c,t))}function Fo(e,t){const c=Ns(e),s=ul(c);c.du.delete(t),s.ko()&&qo(c,t),0===c.du.size&&(s.ko()?s.Fo():Go(c)&&c.gu.set("Unknown"))}function Uo(e,t){e.yu.Ot(t.targetId),ul(e).zo(t)}function qo(e,t){e.yu.Ot(t),ul(e).Ho(t)}function $o(e){e.yu=new Xi({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),ul(e).start(),e.gu.uu()}function Bo(e){return Go(e)&&!ul(e).No()&&e.du.size>0}function Go(e){return 0===Ns(e)._u.size}function Wo(e){e.yu=void 0}async function Ko(e){e.du.forEach(((t,c)=>{Uo(e,t)}))}async function Zo(e,t){Wo(e),Bo(e)?(e.gu.hu(t),$o(e)):e.gu.set("Unknown")}async function Yo(e,t,c){if(e.gu.set("Online"),t instanceof Zi&&2===t.state&&t.cause)try{await async function(e,t){const c=t.cause;for(const s of t.targetIds)e.du.has(s)&&(await e.remoteSyncer.rejectListen(s,c),e.du.delete(s),e.yu.removeTarget(s))}(e,t)}catch(c){Ts("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),c),await Xo(e,c)}else if(t instanceof Wi?e.yu.Kt(t):t instanceof Ki?e.yu.Jt(t):e.yu.jt(t),!c.isEqual(en.min()))try{const t=await mo(e.localStore);c.compareTo(t)>=0&&await function(e,t){const c=e.yu.Zt(t);return c.targetChanges.forEach(((c,s)=>{if(c.resumeToken.approximateByteSize()>0){const n=e.du.get(s);n&&e.du.set(s,n.withResumeToken(c.resumeToken,t))}})),c.targetMismatches.forEach((t=>{const c=e.du.get(t);if(!c)return;e.du.set(t,c.withResumeToken(wn.EMPTY_BYTE_STRING,c.snapshotVersion)),qo(e,t);const s=new Da(c.target,t,1,c.sequenceNumber);Uo(e,s)})),e.remoteSyncer.applyRemoteEvent(c)}(e,c)}catch(t){Ts("RemoteStore","Failed to raise snapshot:",t),await Xo(e,t)}}async function Xo(e,t,c){if(!vn(t))throw t;e._u.add(1),await Do(e),e.gu.set("Offline"),c||(c=()=>mo(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Ts("RemoteStore","Retrying IndexedDB access"),await c(),e._u.delete(1),await Ro(e)}))}function Jo(e,t){return t().catch((c=>Xo(e,c,t)))}async function Qo(e){const t=Ns(e),c=hl(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;el(t);)try{const e=await Co(t.localStore,s);if(null===e){0===t.fu.length&&c.Fo();break}s=e.batchId,tl(t,e)}catch(e){await Xo(t,e)}cl(t)&&sl(t)}function el(e){return Go(e)&&e.fu.length<10}function tl(e,t){e.fu.push(t);const c=hl(e);c.ko()&&c.Yo&&c.Xo(t.mutations)}function cl(e){return Go(e)&&!hl(e).No()&&e.fu.length>0}function sl(e){hl(e).start()}async function nl(e){hl(e).eu()}async function rl(e){const t=hl(e);for(const c of e.fu)t.Xo(c.mutations)}async function il(e,t,c){const s=e.fu.shift(),n=Na.from(s,t,c);await Jo(e,(()=>e.remoteSyncer.applySuccessfulWrite(n))),await Qo(e)}async function al(e,t){t&&hl(e).Yo&&await async function(e,t){if(c=t.code,_i(c)&&c!==Rs.ABORTED){const c=e.fu.shift();hl(e).Mo(),await Jo(e,(()=>e.remoteSyncer.rejectFailedWrite(c.batchId,t))),await Qo(e)}var c}(e,t),cl(e)&&sl(e)}async function ol(e,t){const c=Ns(e);c.asyncQueue.verifyOperationInProgress(),Ts("RemoteStore","RemoteStore received new credentials");const s=Go(c);c._u.add(3),await Do(c),s&&c.gu.set("Unknown"),await c.remoteSyncer.handleCredentialChange(t),c._u.delete(3),await Ro(c)}async function ll(e,t){const c=Ns(e);t?(c._u.delete(2),await Ro(c)):t||(c._u.add(2),await Do(c),c.gu.set("Unknown"))}function ul(e){return e.pu||(e.pu=function(e,t,c){const s=Ns(e);return s.su(),new Io(t,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,c)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:Ko.bind(null,e),Zr:Zo.bind(null,e),Wo:Yo.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),Bo(e)?$o(e):e.gu.set("Unknown")):(await e.pu.stop(),Wo(e))}))),e.pu}function hl(e){return e.Iu||(e.Iu=function(e,t,c){const s=Ns(e);return s.su(),new Ao(t,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,c)}(e.datastore,e.asyncQueue,{Yr:nl.bind(null,e),Zr:al.bind(null,e),tu:rl.bind(null,e),Zo:il.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await Qo(e)):(await e.Iu.stop(),e.fu.length>0&&(Ts("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class fl{constructor(e,t,c,s,n){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=c,this.op=s,this.removalCallback=n,this.deferred=new js,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,c,s,n){const r=Date.now()+c,i=new fl(e,t,r,s,n);return i.start(c),i}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ds(Rs.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dl(e,t){if(xs("AsyncQueue",`${t}: ${e}`),vn(e))return new Ds(Rs.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e){this.comparator=e?(t,c)=>e(t,c)||rn.comparator(t.key,c.key):(e,t)=>rn.comparator(e.key,t.key),this.keyedMap=Oi(),this.sortedSet=new Cr(this.comparator)}static emptySet(e){return new ml(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,c)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ml))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),c=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=c.getNext().key;if(!e.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const c=new ml;return c.comparator=this.comparator,c.keyedMap=e,c.sortedSet=t,c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.Tu=new Cr(rn.comparator)}track(e){const t=e.doc.key,c=this.Tu.get(t);c?0!==e.type&&3===c.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==c.type?this.Tu=this.Tu.insert(t,{type:c.type,doc:e.doc}):2===e.type&&2===c.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===c.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===c.type?this.Tu=this.Tu.remove(t):1===e.type&&2===c.type?this.Tu=this.Tu.insert(t,{type:1,doc:c.doc}):0===e.type&&1===c.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Os():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,c)=>{e.push(c)})),e}}class vl{constructor(e,t,c,s,n,r,i,a,o){this.query=e,this.docs=t,this.oldDocs=c,this.docChanges=s,this.mutatedKeys=n,this.fromCache=r,this.syncStateChanged=i,this.excludesMetadataChanges=a,this.hasCachedResults=o}static fromInitialDocuments(e,t,c,s,n){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new vl(e,t,ml.emptySet(t),r,c,s,!0,!1,n)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,c=e.docChanges;if(t.length!==c.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==c[s].type||!t[s].doc.isEqual(c[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.Au=void 0,this.listeners=[]}}class zl{constructor(){this.queries=new Ti((e=>Ur(e)),Fr),this.onlineState="Unknown",this.Ru=new Set}}async function gl(e,t){const c=Ns(e),s=t.query;let n=!1,r=c.queries.get(s);if(r||(n=!0,r=new Cl),n)try{r.Au=await c.onListen(s)}catch(e){const c=dl(e,`Initialization of query '${qr(t.query)}' failed`);return void t.onError(c)}c.queries.set(s,r),r.listeners.push(t),t.bu(c.onlineState),r.Au&&t.Pu(r.Au)&&Ll(c)}async function Hl(e,t){const c=Ns(e),s=t.query;let n=!1;const r=c.queries.get(s);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),n=0===r.listeners.length)}if(n)return c.queries.delete(s),c.onUnlisten(s)}function Ml(e,t){const c=Ns(e);let s=!1;for(const n of t){const e=n.query,t=c.queries.get(e);if(t){for(const e of t.listeners)e.Pu(n)&&(s=!0);t.Au=n}}s&&Ll(c)}function Vl(e,t,c){const s=Ns(e),n=s.queries.get(t);if(n)for(const r of n.listeners)r.onError(c);s.queries.delete(t)}function Ll(e){e.Ru.forEach((e=>{e.next()}))}class yl{constructor(e,t,c){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=c||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const c of e.docChanges)3!==c.type&&t.push(c);e=new vl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const c="Offline"!==t;return(!this.options.Nu||!c)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=vl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bl{constructor(e){this.key=e}}class wl{constructor(e){this.key=e}}class Sl{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Ui(),this.mutatedKeys=Ui(),this.Gu=Gr(e),this.Qu=new ml(this.Gu)}get ju(){return this.qu}Wu(e,t){const c=t?t.zu:new pl,s=t?t.Qu:this.Qu;let n=t?t.mutatedKeys:this.mutatedKeys,r=s,i=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,o="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((e,t)=>{const l=s.get(e),u=$r(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),f=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let d=!1;l&&u?l.data.isEqual(u.data)?h!==f&&(c.track({type:3,doc:u}),d=!0):this.Hu(l,u)||(c.track({type:2,doc:u}),d=!0,(a&&this.Gu(u,a)>0||o&&this.Gu(u,o)<0)&&(i=!0)):!l&&u?(c.track({type:0,doc:u}),d=!0):l&&!u&&(c.track({type:1,doc:l}),d=!0,(a||o)&&(i=!0)),d&&(u?(r=r.add(u),n=f?n.add(e):n.delete(e)):(r=r.delete(e),n=n.delete(e)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),n=n.delete(e.key),c.track({type:1,doc:e})}return{Qu:r,zu:c,$i:i,mutatedKeys:n}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,c){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const n=e.zu.Eu();n.sort(((e,t)=>function(e,t){const c=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Os()}};return c(e)-c(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(c);const r=t?this.Yu():[],i=0===this.Ku.size&&this.current?1:0,a=i!==this.Uu;return this.Uu=i,0!==n.length||a?{snapshot:new vl(this.query,e.Qu,s,n,e.mutatedKeys,0===i,a,!1,!!c&&c.resumeToken.approximateByteSize()>0),Xu:r}:{Xu:r}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new pl,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.qu=this.qu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.qu=this.qu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Ui(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new wl(e))})),this.Ku.forEach((c=>{e.has(c)||t.push(new bl(c))})),t}tc(e){this.qu=e.Hi,this.Ku=Ui();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return vl.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class kl{constructor(e,t,c){this.query=e,this.targetId=t,this.view=c}}class _l{constructor(e){this.key=e,this.nc=!1}}class El{constructor(e,t,c,s,n,r){this.localStore=e,this.remoteStore=t,this.eventManager=c,this.sharedClientState=s,this.currentUser=n,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new Ti((e=>Ur(e)),Fr),this.rc=new Map,this.oc=new Set,this.uc=new Cr(rn.comparator),this.cc=new Map,this.ac=new Ja,this.hc={},this.lc=new Map,this.fc=Ga.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Tl(e,t){const c=Yl(e);let s,n;const r=c.ic.get(t);if(r)s=r.targetId,c.sharedClientState.addLocalQueryTarget(s),n=r.view.ec();else{const e=await zo(c.localStore,Dr(t));c.isPrimaryClient&&jo(c.remoteStore,e);const r=c.sharedClientState.addLocalQueryTarget(e.targetId);s=e.targetId,n=await xl(c,t,s,"current"===r,e.resumeToken)}return n}async function xl(e,t,c,s,n){e._c=(t,c,s)=>async function(e,t,c,s){let n=t.view.Wu(c);n.$i&&(n=await Ho(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,n))));const r=s&&s.targetChanges.get(t.targetId),i=t.view.applyChanges(n,e.isPrimaryClient,r);return $l(e,t.targetId,i.Xu),i.snapshot}(e,t,c,s);const r=await Ho(e.localStore,t,!0),i=new Sl(t,r.Hi),a=i.Wu(r.documents),o=Gi.createSynthesizedTargetChangeForCurrentChange(c,s&&"Offline"!==e.onlineState,n),l=i.applyChanges(a,e.isPrimaryClient,o);$l(e,c,l.Xu);const u=new kl(t,c,i);return e.ic.set(t,u),e.rc.has(c)?e.rc.get(c).push(t):e.rc.set(c,[t]),l.snapshot}async function Il(e,t){const c=Ns(e),s=c.ic.get(t),n=c.rc.get(s.targetId);if(n.length>1)return c.rc.set(s.targetId,n.filter((e=>!Fr(e,t)))),void c.ic.delete(t);c.isPrimaryClient?(c.sharedClientState.removeLocalQueryTarget(s.targetId),c.sharedClientState.isActiveQueryTarget(s.targetId)||await go(c.localStore,s.targetId,!1).then((()=>{c.sharedClientState.clearQueryState(s.targetId),Fo(c.remoteStore,s.targetId),Ul(c,s.targetId)})).catch(mn)):(Ul(c,s.targetId),await go(c.localStore,s.targetId,!0))}async function Al(e,t,c){const s=Xl(e);try{const e=await function(e,t){const c=Ns(e),s=Qs.now(),n=t.reduce(((e,t)=>e.add(t.key)),Ui());let r,i;return c.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Ii(),o=Ui();return c.Gi.getEntries(e,n).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(o=o.add(e))}))})).next((()=>c.localDocuments.getOverlayedDocuments(e,a))).next((n=>{r=n;const i=[];for(const e of t){const t=Ci(e,r.get(e.key).overlayedDocument);null!=t&&i.push(new Hi(e.key,t,yr(t.value.mapValue),hi.exists(!0)))}return c.mutationQueue.addMutationBatch(e,s,i,t)})).next((t=>{i=t;const s=t.applyToLocalDocumentSet(r,o);return c.documentOverlayCache.saveOverlays(e,t.batchId,s)}))})).then((()=>({batchId:i.batchId,changes:Pi(r)})))}(s.localStore,t);s.sharedClientState.addPendingMutation(e.batchId),function(e,t,c){let s=e.hc[e.currentUser.toKey()];s||(s=new Cr(Xs)),s=s.insert(t,c),e.hc[e.currentUser.toKey()]=s}(s,e.batchId,c),await Wl(s,e.changes),await Qo(s.remoteStore)}catch(e){const t=dl(e,"Failed to persist write");c.reject(t)}}async function Ol(e,t){const c=Ns(e);try{const e=await po(c.localStore,t);t.targetChanges.forEach(((e,t)=>{const s=c.cc.get(t);s&&(Ps(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?s.nc=!0:e.modifiedDocuments.size>0?Ps(s.nc):e.removedDocuments.size>0&&(Ps(s.nc),s.nc=!1))})),await Wl(c,e,t)}catch(e){await mn(e)}}function Pl(e,t,c){const s=Ns(e);if(s.isPrimaryClient&&0===c||!s.isPrimaryClient&&1===c){const e=[];s.ic.forEach(((c,s)=>{const n=s.view.bu(t);n.snapshot&&e.push(n.snapshot)})),function(e,t){const c=Ns(e);c.onlineState=t;let s=!1;c.queries.forEach(((e,c)=>{for(const n of c.listeners)n.bu(t)&&(s=!0)})),s&&Ll(c)}(s.eventManager,t),e.length&&s.sc.Wo(e),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Nl(e,t,c){const s=Ns(e);s.sharedClientState.updateQueryState(t,"rejected",c);const n=s.cc.get(t),r=n&&n.key;if(r){let e=new Cr(rn.comparator);e=e.insert(r,br.newNoDocument(r,en.min()));const c=Ui().add(r),n=new Bi(en.min(),new Map,new Hr(Xs),e,c);await Ol(s,n),s.uc=s.uc.remove(r),s.cc.delete(t),Gl(s)}else await go(s.localStore,t,!1).then((()=>Ul(s,t,c))).catch(mn)}async function Rl(e,t){const c=Ns(e),s=t.batch.batchId;try{const e=await fo(c.localStore,t);Fl(c,s,null),jl(c,s),c.sharedClientState.updateMutationState(s,"acknowledged"),await Wl(c,e)}catch(e){await mn(e)}}async function Dl(e,t,c){const s=Ns(e);try{const e=await function(e,t){const c=Ns(e);return c.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let s;return c.mutationQueue.lookupMutationBatch(e,t).next((t=>(Ps(null!==t),s=t.keys(),c.mutationQueue.removeMutationBatch(e,t)))).next((()=>c.mutationQueue.performConsistencyCheck(e))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(e,s,t))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,s))).next((()=>c.localDocuments.getDocuments(e,s)))}))}(s.localStore,t);Fl(s,t,c),jl(s,t),s.sharedClientState.updateMutationState(t,"rejected",c),await Wl(s,e)}catch(c){await mn(c)}}function jl(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function Fl(e,t,c){const s=Ns(e);let n=s.hc[s.currentUser.toKey()];if(n){const e=n.get(t);e&&(c?e.reject(c):e.resolve(),n=n.remove(t)),s.hc[s.currentUser.toKey()]=n}}function Ul(e,t,c=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),c&&e.sc.wc(s,c);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||ql(e,t)}))}function ql(e,t){e.oc.delete(t.path.canonicalString());const c=e.uc.get(t);null!==c&&(Fo(e.remoteStore,c),e.uc=e.uc.remove(t),e.cc.delete(c),Gl(e))}function $l(e,t,c){for(const s of c)s instanceof bl?(e.ac.addReference(s.key,t),Bl(e,s)):s instanceof wl?(Ts("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||ql(e,s.key)):Os()}function Bl(e,t){const c=t.key,s=c.path.canonicalString();e.uc.get(c)||e.oc.has(s)||(Ts("SyncEngine","New document in limbo: "+c),e.oc.add(s),Gl(e))}function Gl(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const c=new rn(cn.fromString(t)),s=e.fc.next();e.cc.set(s,new _l(c)),e.uc=e.uc.insert(c,s),jo(e.remoteStore,new Da(Dr(Ir(c.path)),s,2,Cn.at))}}async function Wl(e,t,c){const s=Ns(e),n=[],r=[],i=[];s.ic.isEmpty()||(s.ic.forEach(((e,a)=>{i.push(s._c(a,t,c).then((e=>{if((e||c)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){n.push(e);const t=ao.Ci(a.targetId,e);r.push(t)}})))})),await Promise.all(i),s.sc.Wo(n),await async function(e,t){const c=Ns(e);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>pn.forEach(t,(t=>pn.forEach(t.Si,(s=>c.persistence.referenceDelegate.addReference(e,t.targetId,s))).next((()=>pn.forEach(t.Di,(s=>c.persistence.referenceDelegate.removeReference(e,t.targetId,s)))))))))}catch(e){if(!vn(e))throw e;Ts("LocalStore","Failed to update sequence numbers: "+e)}for(const s of t){const e=s.targetId;if(!s.fromCache){const t=c.qi.get(e),s=t.snapshotVersion,n=t.withLastLimboFreeSnapshotVersion(s);c.qi=c.qi.insert(e,n)}}}(s.localStore,r))}async function Kl(e,t){const c=Ns(e);if(!c.currentUser.isEqual(t)){Ts("SyncEngine","User change. New user:",t.toKey());const e=await ho(c.localStore,t);c.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new Ds(Rs.CANCELLED,t))}))})),e.lc.clear()}(c,"'waitForPendingWrites' promise is rejected due to a user change."),c.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Wl(c,e.ji)}}function Zl(e,t){const c=Ns(e),s=c.cc.get(t);if(s&&s.nc)return Ui().add(s.key);{let e=Ui();const s=c.rc.get(t);if(!s)return e;for(const t of s){const s=c.ic.get(t);e=e.unionWith(s.view.ju)}return e}}function Yl(e){const t=Ns(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ol.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Nl.bind(null,t),t.sc.Wo=Ml.bind(null,t.eventManager),t.sc.wc=Vl.bind(null,t.eventManager),t}function Xl(e){const t=Ns(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Rl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Dl.bind(null,t),t}class Jl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Eo(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return uo(this.persistence,new oo,e.initialUser,this.yt)}yc(e){return new no(io.Bs,this.yt)}gc(e){return new Lo}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ql{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Pl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kl.bind(null,this.syncEngine),await ll(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new zl}createDatastore(e){const t=Eo(e.databaseInfo.databaseId),c=(s=e.databaseInfo,new ko(s));var s;return function(e,t,c,s){return new Oo(e,t,c,s)}(e.authCredentials,e.appCheckCredentials,c,t)}createRemoteStore(e){return t=this.localStore,c=this.datastore,s=e.asyncQueue,n=e=>Pl(this.syncEngine,e,0),r=bo.C()?new bo:new yo,new No(t,c,s,n,r);var t,c,s,n,r}createSyncEngine(e,t){return function(e,t,c,s,n,r,i){const a=new El(e,t,c,s,n,r);return i&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Ns(e);Ts("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Do(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e,t,c){if(!c)throw new Ds(Rs.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function tu(e,t,c,s){if(!0===t&&!0===s)throw new Ds(Rs.INVALID_ARGUMENT,`${e} and ${c} cannot be used together.`)}function cu(e){if(!rn.isDocumentKey(e))throw new Ds(Rs.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function su(e){if(rn.isDocumentKey(e))throw new Ds(Rs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function nu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Os()}function ru(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ds(Rs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const c=nu(e);throw new Ds(Rs.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${c}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const iu=new Map;class au{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Ds(Rs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ds(Rs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,tu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,t,c,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=c,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new au({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ds(Rs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ds(Rs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new au(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Us;switch(e.type){case"gapi":const t=e.client;return new Gs(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Ds(Rs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=iu.get(e);t&&(Ts("ComponentProvider","Removing Datastore"),iu.delete(e),t.terminate())}(this),Promise.resolve()}}function lu(e,t,c,s={}){var n;const r=(e=ru(e,ou))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==t&&Is("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${c}`,ssl:!1})),s.mockUserToken){let t,c;if("string"==typeof s.mockUserToken)t=s.mockUserToken,c=Ss.MOCK_USER;else{t=(0,a.Sg)(s.mockUserToken,null===(n=e._app)||void 0===n?void 0:n.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new Ds(Rs.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ss(r)}e._authCredentials=new qs(new Fs(t,c))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t,c){this.converter=t,this._key=c,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new uu(this.firestore,e,this._key)}}class hu{constructor(e,t,c){this.converter=t,this._query=c,this.type="query",this.firestore=e}withConverter(e){return new hu(this.firestore,e,this._query)}}class fu extends hu{constructor(e,t,c){super(e,t,Ir(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new uu(this.firestore,null,new rn(e))}withConverter(e){return new fu(this.firestore,e,this._path)}}function du(e,t,...c){if(e=(0,a.m9)(e),eu("collection","path",t),e instanceof ou){const s=cn.fromString(t,...c);return su(s),new fu(e,null,s)}{if(!(e instanceof uu||e instanceof fu))throw new Ds(Rs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(cn.fromString(t,...c));return su(s),new fu(e.firestore,null,s)}}function mu(e,t,...c){if(e=(0,a.m9)(e),1===arguments.length&&(t=Ys.R()),eu("doc","path",t),e instanceof ou){const s=cn.fromString(t,...c);return cu(s),new uu(e,null,new rn(s))}{if(!(e instanceof uu||e instanceof fu))throw new Ds(Rs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(cn.fromString(t,...c));return cu(s),new uu(e.firestore,e instanceof fu?e.converter:null,new rn(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):xs("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw xs("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,c){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const s=fl.createAndSchedule(this,e,t,c,(e=>this.Yc(e)));return this.Uc.push(s),s}zc(){this.Kc&&Os()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function bu(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const c=e;for(const s of t)if(s in c&&"function"==typeof c[s])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class wu extends ou{constructor(e,t,c,s){super(e,t,c,s),this.type="firestore",this._queue=new yu,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_u(this),this._firestoreClient.terminate()}}function Su(e,t){const c="object"==typeof e?e:(0,n.Mq)(),s="string"==typeof e?e:t||"(default)",r=(0,n.qX)(c,"firestore").getImmediate({identifier:s});if(!r._initialized){const e=(0,a.P0)("firestore");e&&lu(r,...e)}return r}function ku(e){return e._firestoreClient||_u(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function _u(e){var t;const c=e._freezeSettings(),s=function(e,t,c,s){return new zn(e,t,c,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,c);e._firestoreClient=new vu(e._authCredentials,e._appCheckCredentials,e._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *