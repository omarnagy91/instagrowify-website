/*! For license information please see chunk.903.a4812e0667be63b71c89.js.LICENSE.txt */
"use strict";(self.webpackChunkultimate_jekyll=self.webpackChunkultimate_jekyll||[]).push([[903],{903:function(e,t,n){n.d(t,{Z:function(){return w}});var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};Object.create;Object.create;var i,o,a=n(455),s=n(639),c=n(561),u=((i={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",i["bad-app-name"]="Illegal App name: '{$appName}",i["duplicate-app"]="Firebase App named '{$appName}' already exists",i["app-deleted"]="Firebase App named '{$appName}' already deleted",i["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",i["invalid-log-argument"]="First argument to `onLog` must be null or a function.",i),l=new a.LL("app","Firebase",u),f="@firebase/app",h="[DEFAULT]",p=((o={})[f]="fire-core",o["@firebase/analytics"]="fire-analytics",o["@firebase/app-check"]="fire-app-check",o["@firebase/auth"]="fire-auth",o["@firebase/database"]="fire-rtdb",o["@firebase/functions"]="fire-fn",o["@firebase/installations"]="fire-iid",o["@firebase/messaging"]="fire-fcm",o["@firebase/performance"]="fire-perf",o["@firebase/remote-config"]="fire-rc",o["@firebase/storage"]="fire-gcs",o["@firebase/firestore"]="fire-fst",o["fire-js"]="fire-js",o["firebase-wrapper"]="fire-js-all",o),d=new c.Yd("@firebase/app"),v=function(){function e(e,t,n){var r=this;this.firebase_=n,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=(0,a.p$)(e),this.container=new s.H0(t.name),this._addComponent(new s.wA("app",(function(){return r}),"PUBLIC")),this.firebase_.INTERNAL.components.forEach((function(e){return r._addComponent(e)}))}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){var n;void 0===t&&(t=h),this.checkDestroyed_();var r=this.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=h),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){d.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},e.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw l.create("app-deleted",{appName:this.name_})},e}();v.prototype.name&&v.prototype.options||v.prototype.delete||console.log("dc");var y="8.10.0";var b=function e(){var t=function(e){var t={},n=new Map,r={__esModule:!0,initializeApp:function(n,i){void 0===i&&(i={}),"object"==typeof i&&null!==i||(i={name:i});var o=i;void 0===o.name&&(o.name=h);var s=o.name;if("string"!=typeof s||!s)throw l.create("bad-app-name",{appName:String(s)});if((0,a.r3)(t,s))throw l.create("duplicate-app",{appName:s});var c=new e(n,o,r);return t[s]=c,c},app:i,registerVersion:function(e,t,n){var r,i=null!==(r=p[e])&&void 0!==r?r:e;n&&(i+="-"+n);var a=i.match(/\s|\//),c=t.match(/\s|\//);if(a||c){var u=['Unable to register library "'+i+'" with version "'+t+'":'];return a&&u.push('library name "'+i+'" contains illegal characters (whitespace or "/")'),a&&c&&u.push("and"),c&&u.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void d.warn(u.join(" "))}o(new s.wA(i+"-version",(function(){return{library:i,version:t}}),"VERSION"))},setLogLevel:c.Ub,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw l.create("invalid-log-argument");(0,c.Am)(e,t)},apps:null,SDK_VERSION:y,INTERNAL:{registerComponent:o,removeApp:function(e){delete t[e]},components:n,useAsService:function(e,t){return"serverAuth"===t?null:t}}};function i(e){if(e=e||h,!(0,a.r3)(t,e))throw l.create("no-app",{appName:e});return t[e]}function o(o){var s=o.name;if(n.has(s))return d.debug("There were multiple attempts to register component "+s+"."),"PUBLIC"===o.type?r[s]:null;if(n.set(s,o),"PUBLIC"===o.type){var c=function(e){if(void 0===e&&(e=i()),"function"!=typeof e[s])throw l.create("invalid-app-argument",{appName:s});return e[s]()};void 0!==o.serviceProps&&(0,a.ZB)(c,o.serviceProps),r[s]=c,e.prototype[s]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._getService.bind(this,s).apply(this,o.multipleInstances?e:[])}}for(var u=0,f=Object.keys(t);u<f.length;u++){var h=f[u];t[h]._addComponent(o)}return"PUBLIC"===o.type?r[s]:null}return r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),i.App=e,r}(v);return t.INTERNAL=r(r({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,a.ZB)(t,e)},createSubscribe:a.ne,ErrorFactory:a.LL,deepExtend:a.ZB}),t}(),g=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();if((0,a.jU)()&&void 0!==self.firebase){d.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var m=self.firebase.SDK_VERSION;m&&m.indexOf("LITE")>=0&&d.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var _=b.initializeApp;b.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,a.UG)()&&d.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '),_.apply(void 0,e)};var E=b;!function(e,t){e.INTERNAL.registerComponent(new s.wA("platform-logger",(function(e){return new g(e)}),"PRIVATE")),e.registerVersion(f,"0.6.30",t),e.registerVersion("fire-js","")}(E);var w=E},639:function(e,t,n){n.d(t,{wA:function(){return u},H0:function(){return h}});function r(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}Object.create;function o(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function s(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;var c=n(455),u=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),l="[DEFAULT]",f=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new c.BH;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:l})}catch(e){}try{for(var r=o(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=a(i.value,2),c=s[0],u=s[1],f=this.normalizeInstanceIdentifier(c);try{var h=this.getOrInitializeService({instanceIdentifier:f});u.resolve(h)}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=l),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(s(s([],a(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),a(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=l),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=l),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var u=o(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var f=a(l.value,2),h=f[0],p=f[1];s===this.normalizeInstanceIdentifier(h)&&p.resolve(c)}}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}return c},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var a=o(i),s=a.next();!s.done;s=a.next()){var c=s.value;try{c(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===l?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=l),this.component?this.component.multipleInstances?e:l:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();var h=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new f(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()},561:function(e,t,n){function r(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}var i;n.d(t,{Am:function(){return p},Ub:function(){return h},Yd:function(){return f},in:function(){return o}});var o,a=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(o||(o={}));var s={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},c=o.INFO,u=((i={})[o.DEBUG]="log",i[o.VERBOSE]="log",i[o.INFO]="info",i[o.WARN]="warn",i[o.ERROR]="error",i),l=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(t<e.logLevel)){var o=(new Date).toISOString(),a=u[t];if(!a)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[a].apply(console,r(["["+o+"]  "+e.name+":"],n))}},f=function(){function e(e){this.name=e,this._logLevel=c,this._logHandler=l,this._userLogHandler=null,a.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in o))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?s[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.DEBUG],e)),this._logHandler.apply(this,r([this,o.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.VERBOSE],e)),this._logHandler.apply(this,r([this,o.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.INFO],e)),this._logHandler.apply(this,r([this,o.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.WARN],e)),this._logHandler.apply(this,r([this,o.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.ERROR],e)),this._logHandler.apply(this,r([this,o.ERROR],e))},e}();function h(e){a.forEach((function(t){t.setLogLevel(e)}))}function p(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var i=[],a=2;a<arguments.length;a++)i[a-2]=arguments[a];var s=i.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:o[n].toLowerCase(),message:s,args:i,type:t.name})}},r=0,i=a;r<i.length;r++){n(i[r])}}},455:function(e,t,n){n.d(t,{BH:function(){return l},LL:function(){return O},ZR:function(){return w},r3:function(){return A},Sg:function(){return f},ne:function(){return I},p$:function(){return c},ZB:function(){return u},m9:function(){return L},z$:function(){return h},jU:function(){return v},ru:function(){return y},d:function(){return g},w1:function(){return m},uI:function(){return p},UG:function(){return d},b$:function(){return b},G6:function(){return E},Mn:function(){return _}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};Object.create;Object.create;var o=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=o>>2,f=(3&o)<<4|s>>4,h=(15&s)<<2|u>>6,p=63&u;c||(p=64,a||(h=64)),r.push(n[l],n[f],n[h],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&(o=e[n++]))<<12|(63&(s=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{o=e[n++];var s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,c=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==c)throw Error();var u=o<<2|a>>4;if(r.push(u),64!==s){var l=a<<4&240|s>>2;if(r.push(l),64!==c){var f=s<<6&192|c;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){return function(e){var t=o(e);return a.encodeByteArray(t,!0)}(e).replace(/\./g,"")};function c(e){return u(void 0,e)}function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=u(e[n],t[n]));return e}var l=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();function f(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=i({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[s(JSON.stringify({alg:"none",type:"JWT"})),s(JSON.stringify(a)),""].join(".")}function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function p(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function d(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function v(){return"object"==typeof self&&self.self===self}function y(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function b(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function g(){return h().indexOf("Electron/")>=0}function m(){var e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return h().indexOf("MSAppHost/")>=0}function E(){return!d()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}var w=function(e){function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,O.prototype.create),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),O=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],a=o?function(e,t){return e.replace(S,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}(o,r):"Error",s=this.serviceName+": "+a+" ("+i+").";return new w(i,s,r)},e}();var S=/\{\$([^}]+)}/g;function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)}!function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,a,s=this.chain_[0],c=this.chain_[1],u=this.chain_[2],l=this.chain_[3],f=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=l^c&(u^l),a=1518500249):(o=c^u^l,a=1859775393):r<60?(o=c&u|l&(c|u),a=2400959708):(o=c^u^l,a=3395469782);i=(s<<5|s>>>27)+o+f+a+n[r]&4294967295;f=l,l=u,u=4294967295&(c<<30|c>>>2),c=s,s=i}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e}}();function I(e,t){var n=new C(e,t);return n.subscribe.bind(n)}var C=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=N),void 0===r.error&&(r.error=N),void 0===r.complete&&(r.complete=N);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function N(){}function L(e){return e&&e._delegate?e._delegate:e}}}]);