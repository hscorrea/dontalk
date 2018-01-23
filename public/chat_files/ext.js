(function(){var e=this,f=function(a){return"string"==typeof a},h=function(a){return"boolean"==typeof a},k=function(a){return"number"==typeof a},aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},l=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},n=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n=ba:n=ca;return n.apply(null,arguments)},da=Date.now||function(){return+new Date},p=function(a,b){a=a.split(".");var c=e;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b},q=function(a,b){function c(){}c.prototype=b.prototype;a.P=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.O=function(a,c,m){for(var d=Array(arguments.length-2),g=2;g<arguments.length;g++)d[g-2]=arguments[g];return b.prototype[c].apply(a,d)}};var ea=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(f(a))return f(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=f(a)?a.split(""):a,g=0;g<c;g++)g in d&&b.call(void 0,d[g],g,a)};var r=function(){this.A=this.A;this.G=this.G};r.prototype.A=!1;var t=function(){var a=document.body.offsetHeight;this.width=document.body.offsetWidth;this.height=a};t.prototype.aspectRatio=function(){return this.width/this.height};t.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};t.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};t.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var ha=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))},ia=function(a){a=String(a);if(ha(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},u=function(a){return(new ja).o(a)},ja=function(){};ja.prototype.o=function(a){var b=[];v(this,a,b);return b.join("")};var v=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==aa(b)){var d=b;b=d.length;c.push("[");for(var g="",m=0;m<b;m++)c.push(g),v(a,d[m],c),g=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");g="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(m=b[d],"function"!=typeof m&&(c.push(g),ka(d,c),c.push(":"),v(a,m,c),g=","));c.push("}");return}}switch(typeof b){case "string":ka(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},la={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ma=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g,ka=function(a,b){b.push('"',a.replace(ma,function(a){var b=la[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),la[a]=b);return b}),'"')};var w=function(a,b,c,d){this.j=a;this.g=b;this.a=c;this.f=d},x=function(a){return new w(a.j,a.g,a.a,a.f)};w.prototype.ceil=function(){this.j=Math.ceil(this.j);this.g=Math.ceil(this.g);this.a=Math.ceil(this.a);this.f=Math.ceil(this.f);return this};w.prototype.floor=function(){this.j=Math.floor(this.j);this.g=Math.floor(this.g);this.a=Math.floor(this.a);this.f=Math.floor(this.f);return this};w.prototype.round=function(){this.j=Math.round(this.j);this.g=Math.round(this.g);this.a=Math.round(this.a);this.f=Math.round(this.f);return this};var y=!1,z=function(a){if(a=a.match(/[\d]+/g))a.length=3};(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(y=!0,a.description)){z(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){y=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],y=!(!a||!a.enabledPlugin))){z(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");y=!0;z(b.GetVariable("$version"));return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");y=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),y=!0,z(b.GetVariable("$version"))}catch(c){}})();var na=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};var A=function(a,b){var c=window;c.addEventListener?c.addEventListener(a,b,void 0):c.attachEvent&&c.attachEvent("on"+a,b)};var oa=function(a,b){this.a=a;this.f=b||Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^da()).toString(36)},pa=function(a){var b={};fa(a,function(a){b[a.a]=a.f});return b},qa=function(){var a=B.goog_safeframe_hlt,b=[];a&&na(a,function(a,d){b.push(new oa(parseInt(d,10),a))});return b};var C=function(a,b,c,d,g,m){r.call(this);this.m=a;this.status=1;this.g=b;this.u=c;this.I=d;this.F=!!g;this.j=Math.random();this.a={};this.f=null;this.D=n(this.H,this);this.B=m};q(C,r);C.prototype.H=function(a){if(a.origin===this.u&&(this.F||a.source==this.g)){var b=null;try{b=JSON.parse(a.data)}catch(c){}if(l(b)&&(a=b.i,b.c===this.m&&a!=this.j&&(2!==this.status&&(this.status=2,ra(this),this.f&&(this.f(),this.f=null)),a=b.s,b=b.p,f(a)&&(f(b)||l(b))&&this.a.hasOwnProperty(a))))this.a[a](b)}};var ra=function(a){var b={};b.c=a.m;b.i=a.j;a.B&&(b.e=a.B);a.g.postMessage(u(b),a.u)};C.prototype.C=function(){if(1===this.status){try{this.g.postMessage&&ra(this)}catch(a){}window.setTimeout(n(this.C,this),50)}};C.prototype.connect=function(a){a&&(this.f=a);A("message",this.D);this.I&&this.C()};var sa=function(a,b,c){var d={};d.c=a.m;d.i=a.j;d.s=b;d.p=c;a.g.postMessage(u(d),a.u)};var ua=function(a,b,c,d,g,m){this.f=x(a);this.a=x(b);this.u=c;this.g=x(d);this.j=g;this.m=m},D=function(a){a=ia(a);if(!(l(a)&&k(a.windowCoords_t)&&k(a.windowCoords_r)&&k(a.windowCoords_b)&&k(a.windowCoords_l)&&k(a.frameCoords_t)&&k(a.frameCoords_r)&&k(a.frameCoords_b)&&k(a.frameCoords_l)&&f(a.styleZIndex)&&k(a.allowedExpansion_t)&&k(a.allowedExpansion_r)&&k(a.allowedExpansion_b)&&k(a.allowedExpansion_l)&&k(a.xInView)&&0<=a.xInView&&1>=a.xInView&&k(a.yInView)&&0<=a.yInView&&1>=a.yInView))throw Error("Cannot parse JSON geometry");return new ua(new w(a.windowCoords_t,a.windowCoords_r,a.windowCoords_b,a.windowCoords_l),new w(a.frameCoords_t,a.frameCoords_r,a.frameCoords_b,a.frameCoords_l),a.styleZIndex,new w(a.allowedExpansion_t,a.allowedExpansion_r,a.allowedExpansion_b,a.allowedExpansion_l),a.xInView,a.yInView)};ua.prototype.o=function(){return u({windowCoords_t:this.f.j,windowCoords_r:this.f.g,windowCoords_b:this.f.a,windowCoords_l:this.f.f,frameCoords_t:this.a.j,frameCoords_r:this.a.g,frameCoords_b:this.a.a,frameCoords_l:this.a.f,styleZIndex:this.u,allowedExpansion_t:this.g.j,allowedExpansion_r:this.g.g,allowedExpansion_b:this.g.a,allowedExpansion_l:this.g.f,xInView:this.j,yInView:this.m})};var va=function(a){this.f=a;this.j=null;this.a=this.status=0;this.g=null;this.K="sfchannel"+a},E=function(a){return 1==a.status||2==a.status};var wa=function(){this.a={shared:{sf_ver:F.shared.sf_ver,ck_on:F.shared.ck_on,flash_ver:F.shared.flash_ver}}};wa.prototype.o=function(){return u(this.a)};var xa=function(){var a=G.expandByPush,b=G.readCookie,c=G.writeCookie;this.a=G.expandByOverlay;this.f=a;this.g=b;this.j=c};xa.prototype.o=function(){return u({expandByOverlay:this.a,expandByPush:this.f,readCookie:this.g,writeCookie:this.j})};var Ca=function(){var a=B.uid,b=B.hostPeerName,c=ya,d=za,g=Aa,m=B.reportCreativeGeometry,Ea=B.isDifferentSourceWindow,H=Ba,ta=B.sentinel;H=void 0===H?[]:H;this.A=a;this.f=b;this.g=c;this.u=d;this.j=g;this.B=m;this.m=Ea;this.C=H;this.a=void 0===ta?"":ta};Ca.prototype.o=function(){var a={};a=(a.uid=this.A,a.hostPeerName=this.f,a.initialGeometry=this.g.o(),a.permissions=this.u.o(),a.metadata=this.j.o(),a.reportCreativeGeometry=this.B,a.isDifferentSourceWindow=this.m,a.goog_safeframe_hlt=pa(this.C),a);this.a&&(a.sentinel=this.a);return u(a)};var Da=/^([^;]+);(\d+);([\s\S]*)$/;var I=function(a){this.a=a},J=function(a,b){this.a=a;this.version=b};q(J,I);J.prototype.o=function(){return u({uid:this.a,version:this.version})};var K=function(a,b,c){this.a=a;this.g=b;this.f=c};q(K,I);K.prototype.o=function(){return u({uid:this.a,initialWidth:this.g,initialHeight:this.f})};var L=function(a,b){this.a=a;this.f=b};q(L,I);L.prototype.o=function(){return u({uid:this.a,description:this.f})};var M=function(a,b,c){this.a=a;this.f=b;this.g=c};q(M,I);M.prototype.o=function(){return u({uid:this.a,expand_t:this.f.j,expand_r:this.f.g,expand_b:this.f.a,expand_l:this.f.f,push:this.g})};var N=function(a){this.a=a};q(N,I);N.prototype.o=function(){return u({uid:this.a})};var O=function(a,b){this.a=a;this.g=b};q(O,I);var Fa=function(a){a=JSON.parse(a);if(!(l(a)&&k(a.uid)&&f(a.newGeometry)))throw Error("Cannot parse JSON message");var b=D(a.newGeometry);return new O(a.uid,b)};O.prototype.o=function(){var a={uid:this.a,newGeometry:this.g.o()};return u(a)};var P=function(a,b,c,d,g){O.call(this,a,c);this.m=b;this.f=d;this.j=g};q(P,O);P.prototype.o=function(){var a={uid:this.a,success:this.m,newGeometry:this.g.o(),expand_t:this.f.j,expand_r:this.f.g,expand_b:this.f.a,expand_l:this.f.f,push:this.j};return u(a)};var Q=function(a,b,c,d){this.a=a;this.width=b;this.height=c;this.f=void 0===d?"":d};q(Q,I);Q.prototype.o=function(){var a={uid:this.a,width:this.width,height:this.height};this.f&&(a.sentinel=this.f);return u(a)};var S=function(a){va.call(this,a.A);this.A=a.u;this.J=a.j;this.B=null;this.u=[];this.m=0;this.j=a.g;this.C=a.a;this.g=new C(this.K,window.parent,a.f,!0,a.m,this.C);var b=n(this.H,this);this.g.a.expand_response=b;b=n(this.D,this);this.g.a.collapse_response=b;b=n(this.I,this);this.g.a.geometry_update=b;this.g.connect(n(this.L,this));this.status=1;R(this,"init_done",new J(this.f,"1-0-15"));a.B&&(a=n(S.prototype.G,this),A("load",a),A("resize",a))};q(S,va);var T=function(a,b){R(a,"report_error",new L(a.f,b))};S.prototype.L=function(){for(var a=0;a<this.u.length;a++)sa(this.g,this.u[a].type,this.u[a].message.o())};S.prototype.H=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(3!=this.a)throw Error("Container is not expanding");if(!f(a))throw Error("Could not parse serialized message");var b=JSON.parse(a);if(!(l(b)&&k(b.uid)&&h(b.success)&&f(b.newGeometry)&&k(b.expand_t)&&k(b.expand_r)&&k(b.expand_b)&&k(b.expand_l)&&h(b.push)))throw Error("Cannot parse JSON message");var c=D(b.newGeometry);var d=new P(b.uid,b.success,c,new w(b.expand_t,b.expand_r,b.expand_b,b.expand_l),b.push);if(this.f!=d.a)throw Error("Wrong source container");this.a=d.m?2:0;this.j=d.g;U(this,d.m?"expanded":"failed",d.j?"exp-push":"exp-ovr","",{t:d.f.j,r:d.f.g,b:d.f.a,l:d.f.f,push:d.j})}catch(g){}};S.prototype.D=function(a){try{if(2!=this.status)throw Error("Container is not registered");if(1!=this.a)throw Error("Container is not collapsing");if(!f(a))throw Error("Could not parse serialized message");var b=Fa(a);if(this.f!=b.a)throw Error("Wrong source container");this.a=0;this.j=b.g;U(this,"collapsed","collapse","",void 0)}catch(c){}};S.prototype.I=function(a){try{if(!E(this))throw Error("Container is not initialized or registered");if(!f(a))throw Error("Could not parse serialized message");var b=Fa(a);if(this.f!=b.a)throw Error("Wrong source container");this.j=b.g;U(this,"geom-update","","",void 0)}catch(c){}};var U=function(a,b,c,d,g){if(null!==a.B)try{a.B(b,{cmd:c,reason:d,info:g})}catch(m){T(a,"Could not manage to call user-supplied callback")}},W=function(a,b,c,d){setTimeout(n(function(){U(this,a,b,c,d)},V),0)},R=function(a,b,c){2===a.g.status?sa(a.g,b,c.o()):a.u.push({type:b,message:c})},Ga=function(a){var b=new t;R(a,"creative_geometry_update",new Q(a.f,b.width,b.height,a.C))};S.prototype.F=function(){2==this.m&&Ga(this);this.m=0};S.prototype.G=function(){switch(this.m){case 0:Ga(this);setTimeout(n(this.F,this),200);this.m=1;break;case 1:this.m=2}};var Ha=function(a,b,c){if(2==V.status)T(V,"Called register multiple times");else if(!k(a)||0>=a)T(V,"Invalid initial width");else if(!k(b)||0>=b)T(V,"Invalid initial height");else{var d=null;if(null!=c){if("function"!=aa(c)){T(V,"Invalid callback function");return}d=c}c=V;c.status=2;c.B=d;R(c,"register_done",new K(c.f,a,b))}},Ia=function(){return E(V)?{"exp-ovr":V.A.a,"exp-push":V.A.f,"read-cookie":V.A.g,"write-cookie":V.A.j}:(T(V,"Called supports on bad container"),null)},Ja=function(){if(!E(V))return T(V,"Called geom on bad container"),null;var a=V.j;return{win:{t:a.f.j,r:a.f.g,b:a.f.a,l:a.f.f,w:a.f.g-a.f.f,h:a.f.a-a.f.j},self:{t:a.a.j,r:a.a.g,b:a.a.a,l:a.a.f,w:a.a.g-a.a.f,h:a.a.a-a.a.j,z:parseInt(a.u,10),xiv:a.j,yiv:a.m,iv:a.j*a.m},exp:{t:a.g.j,r:a.g.g,b:a.g.a,l:a.g.f,xs:!1,yx:!1}}},Ka=function(){if(!E(V))return T(V,"Called inViewPercentage on bad container"),null;var a=V.j;return a.j*a.m*100},La=function(){if(!E(V))return T(V,"Called status on bad container"),null;switch(V.a){case 0:return"collapsed";case 1:return"collapsing";case 2:return"expanded";case 3:return"expanding";default:return null}},Ma=function(a,b){if(!E(V))return T(V,"Called meta on bad container"),null;if(!f(a)||/^[\s\xa0]*$/.test(null==a?"":String(a)))return T(V,"Invalid property name"),null;var c="shared";if(null!=b){if(!f(b)||/^[\s\xa0]*$/.test(null==b?"":String(b)))return T(V,"Invalid owner key"),null;c=b}b=V.J;return null!=b.a[c]&&null!=b.a[c][a]?b.a[c][a]:null},Na=function(a,b){2==V.status?!f(a)||/^[\s\xa0]*$/.test(a)?T(V,"Invalid cookie name"):((a=null==b)||!(a=l(b)&&f(b.info))||(a=null==b.expires)||(a=b.expires,a=l(a)&&"function"==typeof a.getFullYear),a?(W("unsupported",null!=b?"write-cookie":"read-cookie","$sf.ext.cookie is not supported",b),T(V,"Used unsupported cookie operations")):(W("failed","write-cookie","Invalid $sf.ext.cookie arguments",b),T(V,"Invalid cookie data"))):T(V,"Called cookie on unregistered container")},Oa=function(a){if(2==V.status)if(0==V.a)if(l(a)&&(null!=a.t||null!=a.r||null!=a.b||null!=a.l)&&(null==a.t||k(a.t)&&0<=a.t)&&(null==a.r||k(a.r)&&0<=a.r)&&(null==a.b||k(a.b)&&0<=a.b)&&(null==a.l||k(a.l)&&0<=a.l)&&(null==a.push||h(a.push))){var b=new w(a.t||0,a.r||0,a.b||0,a.l||0);a=a.push||!1;var c=V;c.a=3;R(c,"expand_request",new M(c.f,b,a))}else W("failed",l(a)&&h(a.push)&&1==a.push?"exp-push":"exp-ovr","Invalid $sf.ext.expand arguments",a),T(V,"Invalid expand data");else T(V,"Called expand on uncollapsed container");else T(V,"Called expand on unregistered container")},Pa=function(){if(2==V.status)if(2==V.a){var a=V;a.a=1;R(a,"collapse_request",new N(a.f))}else T(V,"Called collapse on unexpanded container");else T(V,"Called collapse on unregistered container")},Qa;var Ra=null,X;if(e.sf_&&e.sf_.exp)X=e.sf_.exp;else{var Sa=window.location.hash;if(Sa){var Ta=Sa.match(/[&#]eid=([\d,]+)/);X=Ta?Ta[1].split(","):[]}else X=[]}var Ua=0<=ea(X,"21060375"),Y=window,Va=!(Y!=Y.parent&&Y.parent==Y.top);if(Va&&!Ua)Qa=null;else{try{var Wa,Xa;if(e.sf_)Wa=f(e.sf_.cfg)?JSON.parse(e.sf_.cfg):e.sf_.cfg,Xa=e.sf_.v;else{var Ya,Z=Da.exec(window.name);if(null===Z)throw Error("Cannot parse serialized data");var Za=+Z[2],$a=Z[3];if(Za>$a.length)throw Error("Cannot parse serialized data");Ya={N:Z[1],content:$a.substr(0,Za),M:$a.substr(Za)};Wa=JSON.parse(Ya.M);Xa=Ya.N}var B=Wa;if("1-0-15"!=Xa)throw Error("Host has different version from ext container");if(!(k(B.uid)&&f(B.hostPeerName)&&f(B.initialGeometry)&&f(B.permissions)&&f(B.metadata)&&h(B.reportCreativeGeometry)&&h(B.isDifferentSourceWindow))||void 0!==B.sentinel&&!f(B.sentinel)||B.goog_safeframe_hlt&&!l(B.goog_safeframe_hlt))throw Error("Cannot parse config");var ya=D(B.initialGeometry),za,G=JSON.parse(B.permissions);if(!(l(G)&&h(G.expandByOverlay)&&h(G.expandByPush)&&h(G.readCookie)&&h(G.writeCookie)))throw Error("Cannot parse JSON permissions");za=new xa;var Aa,F=JSON.parse(B.metadata);if(!(l(F)&&l(F.shared)&&f(F.shared.sf_ver)&&k(F.shared.ck_on)&&f(F.shared.flash_ver)))throw Error("Cannot parse JSON metadata");Aa=new wa;var Ba=qa();Ra=new S(new Ca);Va||(p("$sf.ext.register",Ha),p("$sf.ext.supports",Ia),p("$sf.ext.geom",Ja),p("$sf.ext.inViewPercentage",Ka),p("$sf.ext.status",La),p("$sf.ext.meta",Ma),p("$sf.ext.cookie",Na),p("$sf.ext.expand",Oa),p("$sf.ext.collapse",Pa))}catch(a){}e.sf_=void 0;window.name="";Qa=Ra}var V=Qa;}).call(this);
