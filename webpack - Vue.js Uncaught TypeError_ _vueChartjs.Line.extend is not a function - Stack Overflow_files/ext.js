(function(){var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={P:!0},ea={};try{ea.__proto__=da;ca=ea.P;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba,ha=function(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.C=b.prototype},f=this,g=function(a){return"string"==typeof a},l=function(a){return"boolean"==typeof a},m=function(a){return"number"==typeof a},ja=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},p=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ka=function(a,b,c){return a.call.apply(a.bind,arguments)},la=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?q=ka:q=la;return q.apply(null,arguments)},ma=Date.now||function(){return+new Date},r=function(a,b){a=a.split(".");var c=f;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b},t=function(a,b){function c(){}c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.T=function(a,c,h){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var na=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g(a))return g(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},oa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=g(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};var pa=function(){};var qa=function(a){qa[" "](a);return a};qa[" "]=function(){};var u=function(){var a=document.body.offsetHeight;this.width=document.body.offsetWidth;this.height=a};u.prototype.aspectRatio=function(){return this.width/this.height};u.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};u.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};u.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var v=function(a){return(new ra).m(a)},ra=function(){};ra.prototype.m=function(a){var b=[];sa(this,a,b);return b.join("")};var sa=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==ja(b)){var d=b;b=d.length;c.push("[");for(var e="",h=0;h<b;h++)c.push(e),sa(a,d[h],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=b[d],"function"!=typeof h&&(c.push(e),ta(d,c),c.push(":"),sa(a,h,c),e=","));c.push("}");return}}switch(typeof b){case "string":ta(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},ua={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},va=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g,ta=function(a,b){b.push('"',a.replace(va,function(a){var b=ua[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),ua[a]=b);return b}),'"')};var w=function(a,b,c,d){this.j=a;this.g=b;this.a=c;this.f=d},x=function(a){return new w(a.j,a.g,a.a,a.f)};w.prototype.ceil=function(){this.j=Math.ceil(this.j);this.g=Math.ceil(this.g);this.a=Math.ceil(this.a);this.f=Math.ceil(this.f);return this};w.prototype.floor=function(){this.j=Math.floor(this.j);this.g=Math.floor(this.g);this.a=Math.floor(this.a);this.f=Math.floor(this.f);return this};w.prototype.round=function(){this.j=Math.round(this.j);this.g=Math.round(this.g);this.a=Math.round(this.a);this.f=Math.round(this.f);return this};var y=!1,B=function(a){if(a=a.match(/[\d]+/g))a.length=3};(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(y=!0,a.description)){B(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){y=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],y=!(!a||!a.enabledPlugin))){B(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");y=!0;B(b.GetVariable("$version"));return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");y=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),y=!0,B(b.GetVariable("$version"))}catch(c){}})();var ya=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};var za=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var C=function(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)},Aa=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,void 0):a.detachEvent&&a.detachEvent("on"+b,c)};var Ba=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,Ca=function(a,b){this.a=a;this.f=b},Da=function(a,b){this.url=a;this.I=!!b;this.depth=m(void 0)?void 0:null};var Ea=function(a){var b=!1,c=!1;c=void 0===c?!1:c;b=void 0===b?!1:b;f.google_image_requests||(f.google_image_requests=[]);var d=f.document.createElement("img");if(b){var e=function(){if(b){var a=f.google_image_requests,c=na(a,d);0<=c&&Array.prototype.splice.call(a,c,1)}Aa(d,"load",e);Aa(d,"error",e)};C(d,"load",e);C(d,"error",e)}c&&(d.referrerPolicy="no-referrer");d.src=a;f.google_image_requests.push(d)};var Fa=function(){this.g="&";this.j=!1;this.f={};this.o=0;this.a=[]},Ga=function(a,b){var c={};c[a]=b;return[c]},Ia=function(a,b,c,d,e){var h=[];ya(a,function(a,k){(a=Ha(a,b,c,d,e))&&h.push(k+"="+a)});return h.join(b)},Ha=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var h=[],n=0;n<a.length;n++)h.push(Ha(a[n],b,c,d+1,e));return h.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Ia(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},D=function(a,b,c,d){a.a.push(b);a.f[b]=Ga(c,d)},Ka=function(a){var b="https://pagead2.googlesyndication.com/pagead/gen_204?id=jserror&",c=Ja(a)-27;if(0>c)return"";a.a.sort(function(a,b){return a-b});for(var d=null,e="",h=0;h<a.a.length;h++)for(var n=a.a[h],k=a.f[n],z=0;z<k.length;z++){if(!c){d=null==d?n:d;break}var A=Ia(k[z],a.g,",$");if(A){A=e+A;if(c>=A.length){c-=A.length;b+=A;e=a.g;break}else a.j&&(e=c,A[e-1]==a.g&&--e,b+=A.substr(0,e),e=a.g,c=0);d=null==d?n:d}}a="";null!=d&&(a=e+"trn="+d);return b+a+""},Ja=function(a){var b=1,c;for(c in a.f)b=c.length>b?c.length:b;return 3997-b-a.g.length-1};var La=function(a){if(.01>Math.random())try{if(a instanceof Fa)var b=a;else b=new Fa,ya(a,function(a,c){var d=b,e=d.o++;a=Ga(c,a);d.a.push(e);d.f[e]=a});var c=Ka(b);c&&Ea(c)}catch(d){}};var Ma=function(){var a=void 0===a?f:a;return(a=a.performance)&&a.now?a.now():null};var Na=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b},Oa=function(a,b,c){za.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};ha(Oa,za);var Pa=function(a,b){this.a=a;this.f=b||Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ma()).toString(36)},Qa=function(a){var b={};oa(a,function(a){b[a.a]=a.f});return b},Ra=function(){var a=E.goog_safeframe_hlt,b=[];a&&ya(a,function(a,d){b.push(new Pa(parseInt(d,10),a))});return b};var F=function(a,b,c,d,e,h){this.o=a;this.status=1;this.g=b;this.u=c;this.H=d;this.F=!!e;this.j=Math.random();this.a={};this.f=null;this.D=q(this.G,this);this.A=h};ha(F,pa);F.prototype.G=function(a){if(a.origin===this.u&&(this.F||a.source==this.g)){var b=null;try{b=JSON.parse(a.data)}catch(c){}if(p(b)&&(a=b.i,b.c===this.o&&a!=this.j)){if(2!==this.status)try{this.status=2,Sa(this),this.f&&(this.f(),this.f=null)}catch(c){}a=b.s;b=b.p;if(g(a)&&(g(b)||p(b))&&this.a.hasOwnProperty(a))this.a[a](b)}}};var Sa=function(a){var b={};b.c=a.o;b.i=a.j;a.A&&(b.e=a.A);a.g.postMessage(v(b),a.u)};F.prototype.B=function(){if(1===this.status){try{this.g.postMessage&&Sa(this)}catch(a){}window.setTimeout(q(this.B,this),50)}};F.prototype.connect=function(a){a&&(this.f=a);C(window,"message",this.D);this.H&&this.B()};var Ta=function(a,b,c){var d={};d.c=a.o;d.i=a.j;d.s=b;d.p=c;try{a.g.postMessage(v(d),a.u)}catch(e){}};var Ua=function(a,b,c,d,e,h,n){this.g=x(a);this.f=x(b);this.a=n?x(n):null;this.A=c;this.j=x(d);this.o=e;this.u=h};Ua.prototype.m=function(){var a={windowCoords_t:this.g.j,windowCoords_r:this.g.g,windowCoords_b:this.g.a,windowCoords_l:this.g.f,frameCoords_t:this.f.j,frameCoords_r:this.f.g,frameCoords_b:this.f.a,frameCoords_l:this.f.f,styleZIndex:this.A,allowedExpansion_t:this.j.j,allowedExpansion_r:this.j.g,allowedExpansion_b:this.j.a,allowedExpansion_l:this.j.f,xInView:this.o,yInView:this.u};this.a&&(a.posCoords_t=this.a.j,a.posCoords_b=this.a.a,a.posCoords_l=this.a.f,a.posCoords_r=this.a.g);return v(a)};var G=function(a){a=JSON.parse(a);if(!(p(a)&&m(a.windowCoords_t)&&m(a.windowCoords_r)&&m(a.windowCoords_b)&&m(a.windowCoords_l)&&m(a.frameCoords_t)&&m(a.frameCoords_r)&&m(a.frameCoords_b)&&m(a.frameCoords_l)&&g(a.styleZIndex)&&m(a.allowedExpansion_t)&&m(a.allowedExpansion_r)&&m(a.allowedExpansion_b)&&m(a.allowedExpansion_l)&&m(a.xInView)&&0<=a.xInView&&1>=a.xInView&&m(a.yInView)&&0<=a.yInView&&1>=a.yInView)||a.posCoords_t&&!m(a.posCoords_t)||a.posCoords_b&&!m(a.posCoords_b)||a.posCoords_r&&!m(a.posCoords_r)||a.posCoords_l&&!m(a.posCoords_l)||a.posCoords_t&&!(a.posCoords_b&&a.posCoords_l&&a.posCoords_r))throw Error("Cannot parse JSON geometry");var b=new w(a.windowCoords_t,a.windowCoords_r,a.windowCoords_b,a.windowCoords_l),c=new w(a.frameCoords_t,a.frameCoords_r,a.frameCoords_b,a.frameCoords_l),d=new w(a.allowedExpansion_t,a.allowedExpansion_r,a.allowedExpansion_b,a.allowedExpansion_l),e;a.posCoords_t&&(e=new w(a.posCoords_t,a.posCoords_r,a.posCoords_b,a.posCoords_l));return new Ua(b,c,a.styleZIndex,d,a.xInView,a.yInView,e)};var Va=function(a){this.f=a;this.o=null;this.a=this.status=0;this.j=null;this.N="sfchannel"+a},H=function(a){return 1==a.status||2==a.status};var Wa=function(){this.a=M};Wa.prototype.m=function(){return v(this.a)};var Xa=function(){var a=N.expandByPush,b=N.readCookie,c=N.writeCookie;this.a=N.expandByOverlay;this.f=a;this.g=b;this.j=c};Xa.prototype.m=function(){return v({expandByOverlay:this.a,expandByPush:this.f,readCookie:this.g,writeCookie:this.j})};var bb=function(){var a=E.uid,b=E.hostPeerName,c=Ya,d=Za,e=$a,h=E.reportCreativeGeometry,n=E.isDifferentSourceWindow,k=ab,z=E.sentinel;k=void 0===k?[]:k;this.A=a;this.f=b;this.g=c;this.u=d;this.j=e;this.B=h;this.o=n;this.D=k;this.a=void 0===z?"":z};bb.prototype.m=function(){var a={};a=(a.uid=this.A,a.hostPeerName=this.f,a.initialGeometry=this.g.m(),a.permissions=this.u.m(),a.metadata=this.j.m(),a.reportCreativeGeometry=this.B,a.isDifferentSourceWindow=this.o,a.goog_safeframe_hlt=Qa(this.D),a);this.a&&(a.sentinel=this.a);return v(a)};var cb=/^([^;]+);(\d+);([\s\S]*)$/;var O=function(a,b){this.a=a;this.g=b};O.prototype.m=function(a){this.g&&(a.sentinel=this.g);return v(a)};var P=function(a,b,c){O.call(this,a,void 0===c?"":c);this.version=b};t(P,O);P.prototype.m=function(){return P.C.m.call(this,{uid:this.a,version:this.version})};var db=function(a,b,c,d){O.call(this,a,void 0===d?"":d);this.j=b;this.f=c};t(db,O);db.prototype.m=function(){return db.C.m.call(this,{uid:this.a,initialWidth:this.j,initialHeight:this.f})};var eb=function(a,b,c){O.call(this,a,void 0===c?"":c);this.f=b};t(eb,O);eb.prototype.m=function(){return eb.C.m.call(this,{uid:this.a,description:this.f})};var Q=function(a,b,c,d){O.call(this,a,void 0===d?"":d);this.f=b;this.push=c};t(Q,O);Q.prototype.m=function(){return Q.C.m.call(this,{uid:this.a,expand_t:this.f.j,expand_r:this.f.g,expand_b:this.f.a,expand_l:this.f.f,push:this.push})};var fb=function(a,b){O.call(this,a,void 0===b?"":b)};t(fb,O);fb.prototype.m=function(){return fb.C.m.call(this,{uid:this.a})};var gb=function(a,b,c){O.call(this,a,void 0===c?"":c);this.f=b};t(gb,O);gb.prototype.m=function(){return gb.C.m.call(this,{uid:this.a,shrink_t:this.f.j,shrink_r:this.f.g,shrink_b:this.f.a,shrink_l:this.f.f})};var hb=function(a,b,c,d){O.call(this,a,void 0===d?"":d);this.f=b;this.push=c};t(hb,O);hb.prototype.m=function(){return hb.C.m.call(this,{uid:this.a,resize_t:this.f.j,resize_r:this.f.g,resize_b:this.f.a,resize_l:this.f.f,push:this.push})};var R=function(a,b,c){O.call(this,a,void 0===c?"":c);this.j=b};t(R,O);var ib=function(a){a=JSON.parse(a);if(!(p(a)&&m(a.uid)&&g(a.newGeometry)))throw Error("Cannot parse JSON message");var b=G(a.newGeometry);return new R(a.uid,b,a.sentinel)};R.prototype.m=function(){var a={uid:this.a,newGeometry:this.j.m()};return R.C.m.call(this,a)};var jb=function(a,b,c,d,e,h){R.call(this,a,c,void 0===h?"":h);this.o=b;this.f=d;this.push=e};t(jb,R);jb.prototype.m=function(){var a={uid:this.a,success:this.o,newGeometry:this.j.m(),expand_t:this.f.j,expand_r:this.f.g,expand_b:this.f.a,expand_l:this.f.f,push:this.push};this.g&&(a.sentinel=this.g);return v(a)};var kb=function(a,b,c,d){R.call(this,a,c,void 0===d?"":d);this.f=b};t(kb,R);kb.prototype.m=function(){var a={uid:this.a,success:this.f,newGeometry:this.j.m()};this.g&&(a.sentinel=this.g);return v(a)};var lb=function(a,b,c,d,e){R.call(this,a,c,void 0===e?"":e);this.f=b;this.o=d};t(lb,R);lb.prototype.m=function(){var a={uid:this.a,success:this.f,newGeometry:this.j.m(),expand_t:this.o.j,expand_r:this.o.g,expand_b:this.o.a,expand_l:this.o.f};this.g&&(a.sentinel=this.g);return v(a)};var mb=function(a,b,c,d){O.call(this,a,void 0===d?"":d);this.width=b;this.height=c};t(mb,O);mb.prototype.m=function(){return mb.C.m.call(this,{uid:this.a,width:this.width,height:this.height})};var T=function(a){Va.call(this,a.A);this.B=a.u;this.M=a.j;this.D=null;this.A=[];this.u=0;this.o=a.g;this.g=a.a;this.j=new F(this.N,window.parent,a.f,!0,a.o,this.g);var b=q(this.K,this);this.j.a.expand_response=b;b=q(this.G,this);this.j.a.collapse_response=b;b=q(this.F,this);this.j.a.resize_response=b;b=q(this.F,this);this.j.a.shrink_response=b;b=q(this.L,this);this.j.a.geometry_update=b;this.j.connect(q(this.O,this));this.status=1;S(this,"init_done",new P(this.f,"1-0-27",this.g));a.B&&(a=q(T.prototype.J,this),C(window,"load",a),C(window,"resize",a))};ha(T,Va);T.prototype.register=function(a,b,c){this.status=2;this.D=c;S(this,"register_done",new db(this.f,a,b,this.g))};var U=function(a,b){S(a,"report_error",new eb(a.f,b,a.g))};T.prototype.O=function(){for(var a=0;a<this.A.length;a++)Ta(this.j,this.A[a].type,this.A[a].message.m())};T.prototype.K=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(3!=this.a)throw Error("Container is not expanding");if(!g(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(p(b)&&m(b.uid)&&l(b.success)&&g(b.newGeometry)&&m(b.expand_t)&&m(b.expand_r)&&m(b.expand_b)&&m(b.expand_l)&&l(b.push)))throw Error("Cannot parse JSON message");var c=G(b.newGeometry);var d=new jb(b.uid,b.success,c,new w(b.expand_t,b.expand_r,b.expand_b,b.expand_l),b.push,b.sentinel);if(this.f!=d.a)throw Error("Wrong source container");this.a=d.o?2:0;this.o=d.j;W(this,d.o?"expanded":"failed",d.push?"exp-push":"exp-ovr","",{t:d.f.j,r:d.f.g,b:d.f.a,l:d.f.f,push:d.push})}catch(e){}};T.prototype.F=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(5!=this.a)throw Error("Container is not resizing");if(!g(a))throw Error("Could not parse serialized message");try{var b=JSON.parse(a);if(!(p(b)&&m(b.uid)&&l(b.success)&&g(b.newGeometry)))throw Error("Cannot parse JSON message");var c=G(b.newGeometry);var d=new kb(b.uid,b.success,c,b.sentinel)}catch(n){var e=JSON.parse(a);if(!(p(e)&&m(e.uid)&&l(e.success)&&g(e.newGeometry)&&m(e.expand_t)&&m(e.expand_r)&&m(e.expand_b)&&m(e.expand_l)))throw Error("Cannot parse JSON message");var h=G(e.newGeometry);d=new lb(e.uid,e.success,h,new w(e.expand_t,e.expand_r,e.expand_b,e.expand_l),e.sentinel)}if(this.f!=d.a)throw Error("Wrong source container");this.a=d.f?4:0;this.o=d.j;W(this,d.f?"resized":"failed","resize","",{})}catch(n){}};T.prototype.G=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(1!=this.a)throw Error("Container is not collapsing");if(!g(a))throw Error("Could not parse serialized message");var b=ib(a);if(this.f!=b.a)throw Error("Wrong source container");this.a=0;this.o=b.j;W(this,"collapsed","collapse","",void 0)}catch(c){}};T.prototype.L=function(a){try{if(!H(this))throw Error("Container is not initialized or registered");if(!g(a))throw Error("Could not parse serialized message");var b=ib(a);if(this.f!=b.a)throw Error("Wrong source container");this.o=b.j;W(this,"geom-update","","",void 0)}catch(c){}};var W=function(a,b,c,d,e){if(null!==a.D)try{a.D(b,{cmd:c,reason:d,info:e})}catch(h){U(a,"Could not manage to call user-supplied callback")}},nb=function(a,b,c,d){setTimeout(q(function(){W(this,a,b,c,d)},X),0)},S=function(a,b,c){2===a.j.status?Ta(a.j,b,c.m()):a.A.push({type:b,message:c})},ob=function(a){var b=new u;S(a,"creative_geometry_update",new mb(a.f,b.width,b.height,a.g))};T.prototype.H=function(){2==this.u&&ob(this);this.u=0};T.prototype.J=function(){switch(this.u){case 0:ob(this);setTimeout(q(this.H,this),200);this.u=1;break;case 1:this.u=2}};var Y=function(a,b,c){var d=window;return function(){var e=Ma();try{var h=b.apply(this,arguments)}catch(k){if(c)return c(a,k),h;throw k;}if(d.google_measure_js_timing&&e){e={label:a.toString(),value:e,duration:Ma()-e,type:3};var n=d.google_js_reporting_queue=d.google_js_reporting_queue||[];1024>n.length&&n.push(e)}return h}};var pb=function(a,b,c){if(2==X.status)U(X,"Called register multiple times");else if(!m(a)||0>=a)U(X,"Invalid initial width");else if(!m(b)||0>=b)U(X,"Invalid initial height");else{var d=null;if(null!=c){if("function"!=ja(c)){U(X,"Invalid callback function");return}d=c}X.register(a,b,d)}},qb=function(){return H(X)?{"exp-ovr":X.B.a,"exp-push":X.B.f,"read-cookie":X.B.g,"write-cookie":X.B.j}:(U(X,"Called supports on bad container"),null)},rb=function(){if(!H(X))return U(X,"Called geom on bad container"),null;var a=X.o,b={win:{t:a.g.j,r:a.g.g,b:a.g.a,l:a.g.f,w:a.g.g-a.g.f,h:a.g.a-a.g.j},self:{t:a.f.j,r:a.f.g,b:a.f.a,l:a.f.f,w:a.f.g-a.f.f,h:a.f.a-a.f.j,z:parseInt(a.A,10),xiv:a.o,yiv:a.u,iv:a.o*a.u},exp:{t:a.j.j,r:a.j.g,b:a.j.a,l:a.j.f,xs:!1,yx:!1}};a.a&&(b.pos={t:a.a.j,r:a.a.g,b:a.a.a,l:a.a.f,w:a.a.g-a.a.f,h:a.a.a-a.a.j});return b},sb=function(){if(!H(X))return U(X,"Called inViewPercentage on bad container"),null;var a=X.o;return a.o*a.u*100},tb=function(){if(!H(X))return U(X,"Called status on bad container"),null;switch(X.a){case 0:return"collapsed";case 1:return"collapsing";case 2:return"expanded";case 3:return"expanding";case 4:return"resized";case 5:return"resizing";default:return null}},ub=function(a,b){if(!H(X))return U(X,"Called meta on bad container"),null;if(!g(a)||/^[\s\xa0]*$/.test(null==a?"":String(a)))return U(X,"Invalid property name"),null;var c="shared";if(null!=b){if(!g(b)||/^[\s\xa0]*$/.test(null==b?"":String(b)))return U(X,"Invalid owner key"),null;c=b}b=X.M;return null!=b.a[c]&&null!=b.a[c][a]?b.a[c][a]:null},vb=function(a,b){2==X.status?!g(a)||/^[\s\xa0]*$/.test(a)?U(X,"Invalid cookie name"):((a=null==b)||!(a=p(b)&&g(b.info))||(a=null==b.expires)||(a=b.expires,a=p(a)&&"function"==typeof a.getFullYear),a?(nb("unsupported",null!=b?"write-cookie":"read-cookie","$sf.ext.cookie is not supported",b),U(X,"Used unsupported cookie operations")):(nb("failed","write-cookie","Invalid $sf.ext.cookie arguments",b),U(X,"Invalid cookie data"))):U(X,"Called cookie on unregistered container")},wb=function(a){if(2==X.status)if(0==X.a)if(p(a)&&(null!=a.t||null!=a.r||null!=a.b||null!=a.l)&&(null==a.t||m(a.t)&&0<=a.t)&&(null==a.r||m(a.r)&&0<=a.r)&&(null==a.b||m(a.b)&&0<=a.b)&&(null==a.l||m(a.l)&&0<=a.l)&&(null==a.push||l(a.push))){var b=new w(a.t||0,a.r||0,a.b||0,a.l||0);a=a.push||!1;var c=X;c.a=3;S(c,"expand_request",new Q(c.f,b,a,c.g))}else nb("failed",p(a)&&l(a.push)&&1==a.push?"exp-push":"exp-ovr","Invalid $sf.ext.expand arguments",a),U(X,"Invalid expand data");else U(X,"Called expand on uncollapsed container");else U(X,"Called expand on unregistered container")},xb=function(a){if(2==X.status)if(1==X.a||3==X.a||5==X.a)U(X,"Called resize on container in incorrect state.");else{var b=!p(a)||null==a.t&&null==a.r&&null==a.b&&null==a.l||null!=a.t&&!m(a.t)||null!=a.r&&!m(a.r)||null!=a.b&&!m(a.b)||null!=a.l&&!m(a.l)?null:a;if(b){a=new w(b.t||0,b.r||0,b.b||0,b.l||0);b=b.push||!1;var c=X;0<a.j||0<a.a||0<a.g||0<a.f?(c.a=3,S(c,"expand_request",new Q(c.f,a,b,c.g))):(c.a=5,S(c,"shrink_request",new gb(c.f,new w(-a.j,-a.g,-a.a,-a.f),c.g)));S(c,"resize_request",new hb(c.f,a,b,c.g))}else nb("failed","resize","Invalid $sf.ext.resize arguments",a),U(X,"Invalid resize data")}else U(X,"Called resize on unregistered container")},yb=function(){if(2==X.status){var a;(a=2==X.a)||(a=4==X.a);a?(a=X,a.a=1,S(a,"collapse_request",new fb(a.f,a.g))):U(X,"Called collapse on collapsed container")}else U(X,"Called collapse on unregistered container")},zb=function(){var a=function(a,c){var b=c;try{var e=new Fa;e.j=!0;D(e,1,"context",a);if(!(b.error&&b.meta&&b.id)){var h=b;b=new Oa(Na(h),h.fileName,h.lineNumber)}b.msg&&D(e,2,"msg",b.msg.substring(0,512));b.file&&D(e,3,"file",b.file);0<b.line&&D(e,4,"line",b.line);var n=[b.meta||{}];e.a.push(5);e.f[5]=n;h=f;b=[];n=null;do{var k=h;try{var z;if(z=!!k&&null!=k.location.href)b:{try{qa(k.foo);z=!0;break b}catch(ia){}z=!1}var A=z}catch(ia){A=!1}if(A){var J=k.location.href;n=k.document&&k.document.referrer||null}else J=n,n=null;b.push(new Da(J||""));try{h=k.parent}catch(ia){h=null}}while(h&&k!=h);J=0;for(var K=b.length-1;J<=K;++J)b[J].depth=K-J;k=f;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==b.length-1)for(K=1;K<b.length;++K){var L=b[K];L.url||(L.url=k.location.ancestorOrigins[K-1]||"",L.I=!0)}var wa=new Da(f.location.href,!1);k=null;var xa=b.length-1;for(L=xa;0<=L;--L){var I=b[L];!k&&Ba.test(I.url)&&(k=I);if(I.url&&!I.I){wa=I;break}}I=null;var Pb=b.length&&b[xa].url;0!=wa.depth&&Pb&&(I=b[xa]);var V=new Ca(wa,I);V.f&&D(e,6,"top",V.f.url||"");D(e,7,"url",V.a.url||"");La(e)}catch(ia){try{La({context:"ecmserr",rctx:a,msg:Na(ia),url:V&&V.a.url})}catch(Ub){}}throw c;};r("$sf.ext.register",Y(441,pb,a));r("$sf.ext.supports",Y(443,qb,a));r("$sf.ext.geom",Y(438,rb,a));r("$sf.ext.inViewPercentage",Y(439,sb,a));r("$sf.ext.status",Y(442,tb,a));r("$sf.ext.meta",Y(440,ub,a));r("$sf.ext.cookie",Y(436,vb,a));r("$sf.ext.expand",Y(437,wb,a));r("$sf.ext.collapse",Y(435,yb,a))},Ab;var Bb=null,Cb;if(f.sf_&&f.sf_.exp)Cb=f.sf_.exp;else{var Db=window.location.hash;if(Db){var Eb=Db.match(/[&#]eid=([\d,]+)/);Cb=Eb?Eb[1].split(","):[]}else Cb=[]}var Fb=Cb,Gb=!1;try{Gb=!!f.sf_.cfg._context.ampcontextVersion}catch(a){}var Hb=0<=na(Fb,"21060375"),Ib=window,Jb=!(Ib!=Ib.parent&&Ib.parent==Ib.top);if(Gb||!Jb||Hb){try{var Kb,Lb;if(f.sf_)Kb=f.sf_.cfg,Lb=f.sf_.v;else{var Mb,Nb=cb.exec(window.name);if(null===Nb)throw Error("Cannot parse serialized data");var Ob=+Nb[2],Qb=Nb[3];if(Ob>Qb.length)throw Error("Cannot parse serialized data");Mb={S:Nb[1],content:Qb.substr(0,Ob),R:Qb.substr(Ob)};Kb=JSON.parse(Mb.R);Lb=Mb.S}var Rb=Lb,Sb,E=Kb;if(!(m(E.uid)&&g(E.hostPeerName)&&g(E.initialGeometry)&&g(E.permissions)&&g(E.metadata)&&l(E.reportCreativeGeometry)&&l(E.isDifferentSourceWindow))||null!=E.sentinel&&!g(E.sentinel)||E.goog_safeframe_hlt&&!p(E.goog_safeframe_hlt))throw Error("Cannot parse config");var Ya=G(E.initialGeometry),N=JSON.parse(E.permissions);if(!(p(N)&&l(N.expandByOverlay)&&l(N.expandByPush)&&l(N.readCookie)&&l(N.writeCookie)))throw Error("Cannot parse JSON permissions");var Za=new Xa,Z=JSON.parse(E.metadata),Tb;(Tb=!p(Z))||(Tb=!(p(Z.shared)&&g(Z.shared.sf_ver)&&m(Z.shared.ck_on)&&g(Z.shared.flash_ver)&&(!Z.shared.canonical_url||g(Z.shared.canonical_url))&&(!Z.shared.amp||p(Z.shared.amp)&&(!Z.shared.amp.canonical_url||g(Z.shared.amp.canonical_url)))));if(Tb)throw Error("Cannot parse JSON metadata");var M={shared:{sf_ver:Z.shared.sf_ver,ck_on:Z.shared.ck_on,flash_ver:Z.shared.flash_ver}};Z.shared.canonical_url&&(M.shared.canonical_url=Z.shared.canonical_url);Z.shared.amp&&(M.shared.is_amp=!0,M.shared.canonical_url=Z.shared.amp.canonical_url);var $a=new Wa,ab=Ra();Sb=new bb;if(!Sb.a&&"1-0-27"!=Rb)throw Error("Host has different version from ext container");Bb=new T(Sb);if(Gb||!Jb)zb(),Bb.g&&r("$sf.ext.resize",xb)}catch(a){}f.sf_=void 0;window.name="";Ab=Bb}else Ab=null;var X=Ab;}).call(this);
