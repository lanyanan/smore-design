(function(b,d){typeof exports=="object"&&typeof module<"u"?d(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],d):(b=typeof globalThis<"u"?globalThis:b||self,d(b["smore-design"]={},b.Vue))})(this,function(b,d){"use strict";const ye={fontColor1:"#fff",boderColor1:"#000"},E=d.shallowRef(ye),N=()=>({theme:E,changeTheme:t=>{E.value=t}});function ve(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){if(this instanceof n){var o=[null];o.push.apply(o,arguments);var u=Function.bind.apply(t,o);return new u}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),r}var O={},V={},ge={get exports(){return V},set exports(e){V=e}};(function(e){function t(r){return r&&r.__esModule?r:{default:r}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(ge);var j={};function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t,r){return t&&A(e.prototype,t),r&&A(e,r),e}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function F(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function R(e,t){if(e==null)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t.indexOf(r=u[n])>=0||(o[r]=e[r]);return o}function L(e){return((t=e)!=null&&typeof t=="object"&&Array.isArray(t)===!1)==1&&Object.prototype.toString.call(e)==="[object Object]";var t}var $=Object.prototype,z=$.toString,he=$.hasOwnProperty,Y=/^\s*function (\w+)/;function I(e){var t,r=(t=e==null?void 0:e.type)!==null&&t!==void 0?t:e;if(r){var n=r.toString().match(Y);return n?n[1]:""}return""}var _=function(e){var t,r;return L(e)!==!1&&typeof(t=e.constructor)=="function"&&L(r=t.prototype)!==!1&&r.hasOwnProperty("isPrototypeOf")!==!1},J=function(e){return e},s=J;if(process.env.NODE_ENV!=="production"){var be=typeof console<"u";s=be?function(e){console.warn("[VueTypes warn]: "+e)}:J}var w=function(e,t){return he.call(e,t)},me=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},T=Array.isArray||function(e){return z.call(e)==="[object Array]"},P=function(e){return z.call(e)==="[object Function]"},S=function(e){return _(e)&&w(e,"_vueTypes_name")},U=function(e){return _(e)&&(w(e,"type")||["_vueTypes_name","validator","default","required"].some(function(t){return w(e,t)}))};function M(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function m(e,t,r){var n;r===void 0&&(r=!1);var o=!0,u="";n=_(e)?e:{type:e};var f=S(n)?n._vueTypes_name+" - ":"";if(U(n)&&n.type!==null){if(n.type===void 0||n.type===!0||!n.required&&t===void 0)return o;T(n.type)?(o=n.type.some(function(a){return m(a,t,!0)===!0}),u=n.type.map(function(a){return I(a)}).join(" or ")):o=(u=I(n))==="Array"?T(t):u==="Object"?_(t):u==="String"||u==="Number"||u==="Boolean"||u==="Function"?function(a){if(a==null)return"";var g=a.constructor.toString().match(Y);return g?g[1]:""}(t)===u:t instanceof n.type}if(!o){var l=f+'value "'+t+'" should be of type "'+u+'"';return r===!1?(s(l),!1):l}if(w(n,"validator")&&P(n.validator)){var i=s,c=[];if(s=function(a){c.push(a)},o=n.validator(t),s=i,!o){var y=(c.length>1?"* ":"")+c.join(`
* `);return c.length=0,r===!1?(s(y),o):y}}return o}function p(e,t){var r=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(o){return o!==void 0||this.default?P(o)||m(this,o,!0)===!0?(this.default=T(o)?function(){return[].concat(o)}:_(o)?function(){return Object.assign({},o)}:o,this):(s(this._vueTypes_name+' - invalid default value: "'+o+'"'),this):this}}}),n=r.validator;return P(n)&&(r.validator=M(n,r)),r}function v(e,t){var r=p(e,t);return Object.defineProperty(r,"validate",{value:function(n){return P(this.validator)&&s(this._vueTypes_name+` - calling .validate() will overwrite the current custom validator function. Validator info:
`+JSON.stringify(this)),this.validator=M(n,this),this}})}function C(e,t,r){var n,o,u=(n=t,o={},Object.getOwnPropertyNames(n).forEach(function(a){o[a]=Object.getOwnPropertyDescriptor(n,a)}),Object.defineProperties({},o));if(u._vueTypes_name=e,!_(r))return u;var f,l,i=r.validator,c=R(r,["validator"]);if(P(i)){var y=u.validator;y&&(y=(l=(f=y).__original)!==null&&l!==void 0?l:f),u.validator=M(y?function(a){return y.call(this,a)&&i.call(this,a)}:i,u)}return Object.assign(u,c)}function k(e){return e.replace(/^(?!\s*$)/gm,"  ")}var G=function(){return v("any",{})},H=function(){return v("function",{type:Function})},K=function(){return v("boolean",{type:Boolean})},Q=function(){return v("string",{type:String})},W=function(){return v("number",{type:Number})},X=function(){return v("array",{type:Array})},Z=function(){return v("object",{type:Object})},ee=function(){return p("integer",{type:Number,validator:function(e){return me(e)}})},te=function(){return p("symbol",{validator:function(e){return typeof e=="symbol"}})};function ne(e,t){if(t===void 0&&(t="custom validation failed"),typeof e!="function")throw new TypeError("[VueTypes error]: You must provide a function as argument");return p(e.name||"<<anonymous function>>",{validator:function(r){var n=e(r);return n||s(this._vueTypes_name+" - "+t),n}})}function re(e){if(!T(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var t='oneOf - value should be one of "'+e.join('", "')+'".',r=e.reduce(function(n,o){if(o!=null){var u=o.constructor;n.indexOf(u)===-1&&n.push(u)}return n},[]);return p("oneOf",{type:r.length>0?r:void 0,validator:function(n){var o=e.indexOf(n)!==-1;return o||s(t),o}})}function oe(e){if(!T(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var t=!1,r=[],n=0;n<e.length;n+=1){var o=e[n];if(U(o)){if(S(o)&&o._vueTypes_name==="oneOf"){r=r.concat(o.type);continue}if(P(o.validator)&&(t=!0),o.type!==!0&&o.type){r=r.concat(o.type);continue}}r.push(o)}return r=r.filter(function(u,f){return r.indexOf(u)===f}),p("oneOfType",t?{type:r,validator:function(u){var f=[],l=e.some(function(i){var c=m(S(i)&&i._vueTypes_name==="oneOf"?i.type||null:i,u,!0);return typeof c=="string"&&f.push(c),c===!0});return l||s("oneOfType - provided value does not match any of the "+f.length+` passed-in validators:
`+k(f.join(`
`))),l}}:{type:r})}function ue(e){return p("arrayOf",{type:Array,validator:function(t){var r,n=t.every(function(o){return(r=m(e,o,!0))===!0});return n||s(`arrayOf - value validation error:
`+k(r)),n}})}function ie(e){return p("instanceOf",{type:e})}function ae(e){return p("objectOf",{type:Object,validator:function(t){var r,n=Object.keys(t).every(function(o){return(r=m(e,t[o],!0))===!0});return n||s(`objectOf - value validation error:
`+k(r)),n}})}function fe(e){var t=Object.keys(e),r=t.filter(function(o){var u;return!!(!((u=e[o])===null||u===void 0)&&u.required)}),n=p("shape",{type:Object,validator:function(o){var u=this;if(!_(o))return!1;var f=Object.keys(o);if(r.length>0&&r.some(function(i){return f.indexOf(i)===-1})){var l=r.filter(function(i){return f.indexOf(i)===-1});return s(l.length===1?'shape - required property "'+l[0]+'" is not defined.':'shape - required properties "'+l.join('", "')+'" are not defined.'),!1}return f.every(function(i){if(t.indexOf(i)===-1)return u._vueTypes_isLoose===!0||(s('shape - shape definition does not include a "'+i+'" property. Allowed keys: "'+t.join('", "')+'".'),!1);var c=m(e[i],o[i],!0);return typeof c=="string"&&s('shape - "'+i+`" property validation error:
 `+k(c)),c===!0})}});return Object.defineProperty(n,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(n,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),n}var h=function(){function e(){}return e.extend=function(t){var r=this;if(T(t))return t.forEach(function(a){return r.extend(a)}),this;var n=t.name,o=t.validate,u=o!==void 0&&o,f=t.getter,l=f!==void 0&&f,i=R(t,["name","validate","getter"]);if(w(this,n))throw new TypeError('[VueTypes error]: Type "'+n+'" already defined');var c,y=i.type;return S(y)?(delete i.type,Object.defineProperty(this,n,l?{get:function(){return C(n,y,i)}}:{value:function(){var a,g=C(n,y,i);return g.validator&&(g.validator=(a=g.validator).bind.apply(a,[g].concat([].slice.call(arguments)))),g}})):(c=l?{get:function(){var a=Object.assign({},i);return u?v(n,a):p(n,a)},enumerable:!0}:{value:function(){var a,g,B=Object.assign({},i);return a=u?v(n,B):p(n,B),B.validator&&(a.validator=(g=B.validator).bind.apply(g,[a].concat([].slice.call(arguments)))),a},enumerable:!0},Object.defineProperty(this,n,c))},D(e,null,[{key:"any",get:function(){return G()}},{key:"func",get:function(){return H().def(this.defaults.func)}},{key:"bool",get:function(){return K().def(this.defaults.bool)}},{key:"string",get:function(){return Q().def(this.defaults.string)}},{key:"number",get:function(){return W().def(this.defaults.number)}},{key:"array",get:function(){return X().def(this.defaults.array)}},{key:"object",get:function(){return Z().def(this.defaults.object)}},{key:"integer",get:function(){return ee().def(this.defaults.integer)}},{key:"symbol",get:function(){return te()}}]),e}();function ce(e){var t;return e===void 0&&(e={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),(t=function(r){function n(){return r.apply(this,arguments)||this}return F(n,r),D(n,null,[{key:"sensibleDefaults",get:function(){return x({},this.defaults)},set:function(o){this.defaults=o!==!1?x({},o!==!0?o:e):{}}}]),n}(h)).defaults=x({},e),t}h.defaults={},h.custom=ne,h.oneOf=re,h.instanceOf=ie,h.oneOfType=oe,h.arrayOf=ue,h.objectOf=ae,h.shape=fe,h.utils={validate:function(e,t){return m(t,e,!0)===!0},toType:function(e,t,r){return r===void 0&&(r=!1),r?v(e,t):p(e,t)}};var _e=function(e){function t(){return e.apply(this,arguments)||this}return F(t,e),t}(ce());const Oe=ve(Object.freeze(Object.defineProperty({__proto__:null,any:G,array:X,arrayOf:ue,bool:K,createTypes:ce,custom:ne,default:_e,fromType:C,func:H,instanceOf:ie,integer:ee,number:W,object:Z,objectOf:ae,oneOf:re,oneOfType:oe,shape:fe,string:Q,symbol:te,toType:p,toValidableType:v,validateType:m},Symbol.toStringTag,{value:"Module"})));var se;function je(){if(se)return j;se=1,Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0,j.withUndefined=r;var e=Oe,t=(0,e.createTypes)({func:void 0,bool:void 0,string:void 0,number:void 0,array:void 0,object:void 0,integer:void 0});t.extend([{name:"looseBool",getter:!0,type:Boolean,default:void 0},{name:"style",getter:!0,type:[String,Object],default:void 0},{name:"VueNode",getter:!0,type:null}]);function r(o){return o.default=void 0,o}var n=t;return j.default=n,j}var Te=V;Object.defineProperty(O,"__esModule",{value:!0}),O.buttonProps=void 0,O.convertLegacyProps=we;var le=O.default=void 0,Pe=Te(je());function we(e){return e==="danger"?{danger:!0}:{type:e}}var de=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:Pe.default.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}};O.buttonProps=de;var xe=de;le=O.default=xe;const Se=d.defineComponent({__name:"index",props:{...le()},setup(e){const t=e;d.useCssVars(o=>({f8981730:d.unref(r).fontColor1}));const{theme:r}=N(),n=()=>{switch(t.type){case"primary":return"s-primary";default:return""}};return(o,u)=>{const f=d.resolveComponent("a-button");return d.openBlock(),d.createBlock(f,d.mergeProps(o.$props,{class:n()}),{default:d.withCtx(()=>[d.renderSlot(o.$slots,"default",{},void 0,!0)]),_:3},16,["class"])}}}),Ce="",q=((e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r})(Se,[["__scopeId","data-v-585d9c1e"]]);q.install=e=>(e.component("s-button",q),e);const pe=Object.freeze(Object.defineProperty({__proto__:null,Button:q},Symbol.toStringTag,{value:"Module"})),ke=e=>(Object.keys(pe).forEach(t=>{const r=pe[t];r.install&&e.use(r)}),e),{changeTheme:qe}=N(),Be=e=>{qe(e)},Ve={install:ke};b.Button=q,b.default=Ve,b.updateTheme=Be,Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
