(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7127],{79742:function(t,e){"use strict";e.byteLength=function(t){var e=a(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,i=a(t),s=i[0],u=i[1],h=new o(function(t,e,r){return 3*(e+r)/4-r}(0,s,u)),f=0,l=u>0?s-4:s;for(r=0;r<l;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],h[f++]=e>>16&255,h[f++]=e>>8&255,h[f++]=255&e;2===u&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,h[f++]=255&e);1===u&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,h[f++]=e>>8&255,h[f++]=255&e);return h},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],s=16383,u=0,a=n-o;u<a;u+=s)i.push(h(t,u,u+s>a?a:u+s));1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return i.join("")};for(var r=[],n=[],o="undefined"!==typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,u=i.length;s<u;++s)r[s]=i[s],n[i.charCodeAt(s)]=s;function a(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function h(t,e,n){for(var o,i,s=[],u=e;u<n;u+=3)o=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),s.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return s.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},48764:function(t,e,r){"use strict";var n=r(79742),o=r(80645),i=r(5826);function s(){return a.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function u(t,e){if(s()<e)throw new RangeError("Invalid typed array length");return a.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=a.prototype:(null===t&&(t=new a(e)),t.length=e),t}function a(t,e,r){if(!a.TYPED_ARRAY_SUPPORT&&!(this instanceof a))return new a(t,e,r);if("number"===typeof t){if("string"===typeof e)throw new Error("If encoding is specified then the first argument must be a string");return l(this,t)}return h(this,t,e,r)}function h(t,e,r,n){if("number"===typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);a.TYPED_ARRAY_SUPPORT?(t=e).__proto__=a.prototype:t=p(t,e);return t}(t,e,r,n):"string"===typeof e?function(t,e,r){"string"===typeof r&&""!==r||(r="utf8");if(!a.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|d(e,r),o=(t=u(t,n)).write(e,r);o!==n&&(t=t.slice(0,o));return t}(t,e,r):function(t,e){if(a.isBuffer(e)){var r=0|c(e.length);return 0===(t=u(t,r)).length||e.copy(t,0,0,r),t}if(e){if("undefined"!==typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!==typeof e.length||(n=e.length)!==n?u(t,0):p(t,e);if("Buffer"===e.type&&i(e.data))return p(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function f(t){if("number"!==typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function l(t,e){if(f(e),t=u(t,e<0?0:0|c(e)),!a.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function p(t,e){var r=e.length<0?0:0|c(e.length);t=u(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function c(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function d(t,e){if(a.isBuffer(t))return t.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!==typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return z(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return F(t).length;default:if(n)return z(t).length;e=(""+e).toLowerCase(),n=!0}}function g(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return U(this,e,r);case"utf8":case"utf-8":return C(this,e,r);case"ascii":return S(this,e,r);case"latin1":case"binary":return B(this,e,r);case"base64":return P(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function y(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function v(t,e,r,n,o){if(0===t.length)return-1;if("string"===typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"===typeof e&&(e=a.from(e,n)),a.isBuffer(e))return 0===e.length?-1:w(t,e,r,n,o);if("number"===typeof e)return e&=255,a.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):w(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function w(t,e,r,n,o){var i,s=1,u=t.length,a=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,u/=2,a/=2,r/=2}function h(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var f=-1;for(i=r;i<u;i++)if(h(t,i)===h(e,-1===f?0:i-f)){if(-1===f&&(f=i),i-f+1===a)return f*s}else-1!==f&&(i-=i-f),f=-1}else for(r+a>u&&(r=u-a),i=r;i>=0;i--){for(var l=!0,p=0;p<a;p++)if(h(t,i+p)!==h(e,p)){l=!1;break}if(l)return i}return-1}function E(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;if(i%2!==0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var s=0;s<n;++s){var u=parseInt(e.substr(2*s,2),16);if(isNaN(u))return s;t[r+s]=u}return s}function m(t,e,r,n){return K(z(e,t.length-r),t,r,n)}function b(t,e,r,n){return K(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function A(t,e,r,n){return b(t,e,r,n)}function _(t,e,r,n){return K(F(e),t,r,n)}function R(t,e,r,n){return K(function(t,e){for(var r,n,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)n=(r=t.charCodeAt(s))>>8,o=r%256,i.push(o),i.push(n);return i}(e,t.length-r),t,r,n)}function P(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function C(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,s,u,a,h=t[o],f=null,l=h>239?4:h>223?3:h>191?2:1;if(o+l<=r)switch(l){case 1:h<128&&(f=h);break;case 2:128===(192&(i=t[o+1]))&&(a=(31&h)<<6|63&i)>127&&(f=a);break;case 3:i=t[o+1],s=t[o+2],128===(192&i)&&128===(192&s)&&(a=(15&h)<<12|(63&i)<<6|63&s)>2047&&(a<55296||a>57343)&&(f=a);break;case 4:i=t[o+1],s=t[o+2],u=t[o+3],128===(192&i)&&128===(192&s)&&128===(192&u)&&(a=(15&h)<<18|(63&i)<<12|(63&s)<<6|63&u)>65535&&a<1114112&&(f=a)}null===f?(f=65533,l=1):f>65535&&(f-=65536,n.push(f>>>10&1023|55296),f=56320|1023&f),n.push(f),o+=l}return function(t){var e=t.length;if(e<=T)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=T));return r}(n)}e.Buffer=a,e.SlowBuffer=function(t){+t!=t&&(t=0);return a.alloc(+t)},e.INSPECT_MAX_BYTES=50,a.TYPED_ARRAY_SUPPORT=void 0!==r.g.TYPED_ARRAY_SUPPORT?r.g.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"===typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(e){return!1}}(),e.kMaxLength=s(),a.poolSize=8192,a._augment=function(t){return t.__proto__=a.prototype,t},a.from=function(t,e,r){return h(null,t,e,r)},a.TYPED_ARRAY_SUPPORT&&(a.prototype.__proto__=Uint8Array.prototype,a.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&a[Symbol.species]===a&&Object.defineProperty(a,Symbol.species,{value:null,configurable:!0})),a.alloc=function(t,e,r){return function(t,e,r,n){return f(e),e<=0?u(t,e):void 0!==r?"string"===typeof n?u(t,e).fill(r,n):u(t,e).fill(r):u(t,e)}(null,t,e,r)},a.allocUnsafe=function(t){return l(null,t)},a.allocUnsafeSlow=function(t){return l(null,t)},a.isBuffer=function(t){return!(null==t||!t._isBuffer)},a.compare=function(t,e){if(!a.isBuffer(t)||!a.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},a.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(t,e){if(!i(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return a.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=a.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var s=t[r];if(!a.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,o),o+=s.length}return n},a.byteLength=d,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)y(this,e,e+1);return this},a.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)y(this,e,e+3),y(this,e+1,e+2);return this},a.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)y(this,e,e+7),y(this,e+1,e+6),y(this,e+2,e+5),y(this,e+3,e+4);return this},a.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?C(this,0,t):g.apply(this,arguments)},a.prototype.equals=function(t){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===a.compare(this,t)},a.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},a.prototype.compare=function(t,e,r,n,o){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0),u=Math.min(i,s),h=this.slice(n,o),f=t.slice(e,r),l=0;l<u;++l)if(h[l]!==f[l]){i=h[l],s=f[l];break}return i<s?-1:s<i?1:0},a.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},a.prototype.indexOf=function(t,e,r){return v(this,t,e,r,!0)},a.prototype.lastIndexOf=function(t,e,r){return v(this,t,e,r,!1)},a.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"===typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return E(this,t,e,r);case"utf8":case"utf-8":return m(this,t,e,r);case"ascii":return b(this,t,e,r);case"latin1":case"binary":return A(this,t,e,r);case"base64":return _(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var T=4096;function S(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function B(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function U(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=j(t[i]);return o}function I(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function O(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function Y(t,e,r,n,o,i){if(!a.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function x(t,e,r,n){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-r,2);o<i;++o)t[r+o]=(e&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function M(t,e,r,n){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-r,4);o<i;++o)t[r+o]=e>>>8*(n?o:3-o)&255}function D(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function L(t,e,r,n,i){return i||D(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function k(t,e,r,n,i){return i||D(t,0,r,8),o.write(t,e,r,n,52,8),r+8}a.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),a.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=a.prototype;else{var o=e-t;r=new a(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+t]}return r},a.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},a.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},a.prototype.readUInt8=function(t,e){return e||O(t,1,this.length),this[t]},a.prototype.readUInt16LE=function(t,e){return e||O(t,2,this.length),this[t]|this[t+1]<<8},a.prototype.readUInt16BE=function(t,e){return e||O(t,2,this.length),this[t]<<8|this[t+1]},a.prototype.readUInt32LE=function(t,e){return e||O(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},a.prototype.readUInt32BE=function(t,e){return e||O(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},a.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},a.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||O(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},a.prototype.readInt8=function(t,e){return e||O(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},a.prototype.readInt16LE=function(t,e){e||O(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt16BE=function(t,e){e||O(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt32LE=function(t,e){return e||O(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},a.prototype.readInt32BE=function(t,e){return e||O(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},a.prototype.readFloatLE=function(t,e){return e||O(t,4,this.length),o.read(this,t,!0,23,4)},a.prototype.readFloatBE=function(t,e){return e||O(t,4,this.length),o.read(this,t,!1,23,4)},a.prototype.readDoubleLE=function(t,e){return e||O(t,8,this.length),o.read(this,t,!0,52,8)},a.prototype.readDoubleBE=function(t,e){return e||O(t,8,this.length),o.read(this,t,!1,52,8)},a.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||Y(this,t,e,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},a.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||Y(this,t,e,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},a.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,1,255,0),a.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},a.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):x(this,t,e,!0),e+2},a.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):x(this,t,e,!1),e+2},a.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):M(this,t,e,!0),e+4},a.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):M(this,t,e,!1),e+4},a.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);Y(this,t,e,r,o-1,-o)}var i=0,s=1,u=0;for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===u&&0!==this[e+i-1]&&(u=1),this[e+i]=(t/s>>0)-u&255;return e+r},a.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);Y(this,t,e,r,o-1,-o)}var i=r-1,s=1,u=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===u&&0!==this[e+i+1]&&(u=1),this[e+i]=(t/s>>0)-u&255;return e+r},a.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,1,127,-128),a.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},a.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):x(this,t,e,!0),e+2},a.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):x(this,t,e,!1),e+2},a.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,4,2147483647,-2147483648),a.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):M(this,t,e,!0),e+4},a.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||Y(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),a.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):M(this,t,e,!1),e+4},a.prototype.writeFloatLE=function(t,e,r){return L(this,t,e,!0,r)},a.prototype.writeFloatBE=function(t,e,r){return L(this,t,e,!1,r)},a.prototype.writeDoubleLE=function(t,e,r){return k(this,t,e,!0,r)},a.prototype.writeDoubleBE=function(t,e,r){return k(this,t,e,!1,r)},a.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,i=n-r;if(this===t&&r<e&&e<n)for(o=i-1;o>=0;--o)t[o+e]=this[o+r];else if(i<1e3||!a.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),e);return i},a.prototype.fill=function(t,e,r,n){if("string"===typeof t){if("string"===typeof e?(n=e,e=0,r=this.length):"string"===typeof r&&(n=r,r=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"===typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"===typeof t)for(i=e;i<r;++i)this[i]=t;else{var s=a.isBuffer(t)?t:z(new a(t,n).toString()),u=s.length;for(i=0;i<r-e;++i)this[i+e]=s[i%u]}return this};var N=/[^+\/0-9A-Za-z-_]/g;function j(t){return t<16?"0"+t.toString(16):t.toString(16)}function z(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function F(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(N,"")).length<2)return"";for(;t.length%4!==0;)t+="=";return t}(t))}function K(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}},80645:function(t,e){e.read=function(t,e,r,n,o){var i,s,u=8*o-n-1,a=(1<<u)-1,h=a>>1,f=-7,l=r?o-1:0,p=r?-1:1,c=t[e+l];for(l+=p,i=c&(1<<-f)-1,c>>=-f,f+=u;f>0;i=256*i+t[e+l],l+=p,f-=8);for(s=i&(1<<-f)-1,i>>=-f,f+=n;f>0;s=256*s+t[e+l],l+=p,f-=8);if(0===i)i=1-h;else{if(i===a)return s?NaN:1/0*(c?-1:1);s+=Math.pow(2,n),i-=h}return(c?-1:1)*s*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var s,u,a,h=8*i-o-1,f=(1<<h)-1,l=f>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,c=n?0:i-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,s=f):(s=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-s))<1&&(s--,a*=2),(e+=s+l>=1?p/a:p*Math.pow(2,1-l))*a>=2&&(s++,a/=2),s+l>=f?(u=0,s=f):s+l>=1?(u=(e*a-1)*Math.pow(2,o),s+=l):(u=e*Math.pow(2,l-1)*Math.pow(2,o),s=0));o>=8;t[r+c]=255&u,c+=d,u/=256,o-=8);for(s=s<<o|u,h+=o;h>0;t[r+c]=255&s,c+=d,s/=256,h-=8);t[r+c-d]|=128*g}},5826:function(t){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},18446:function(t,e,r){var n=r(90939);t.exports=function(t,e){return n(t,e)}},71167:function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)},i=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],s=0,u=i.length;s<u;s++,o++)n[o]=i[s];return n},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},u=s(r(67294)),a=s(r(73935)),h=s(r(18446)),f=s(r(76095)),l=function(t){function e(e){var r=t.call(this,e)||this;r.dirtyProps=["modules","formats","bounds","theme","children"],r.cleanProps=["id","className","style","placeholder","tabIndex","onChange","onChangeSelection","onFocus","onBlur","onKeyPress","onKeyDown","onKeyUp"],r.state={generation:0},r.selection=null,r.onEditorChange=function(t,e,n,o){var i,s,u,a;"text-change"===t?null===(s=(i=r).onEditorChangeText)||void 0===s||s.call(i,r.editor.root.innerHTML,e,o,r.unprivilegedEditor):"selection-change"===t&&(null===(a=(u=r).onEditorChangeSelection)||void 0===a||a.call(u,e,o,r.unprivilegedEditor))};var n=r.isControlled()?e.value:e.defaultValue;return r.value=null!==n&&void 0!==n?n:"",r}return n(e,t),e.prototype.validateProps=function(t){var e;if(u.default.Children.count(t.children)>1)throw new Error("The Quill editing area can only be composed of a single React element.");if(u.default.Children.count(t.children)&&"textarea"===(null===(e=u.default.Children.only(t.children))||void 0===e?void 0:e.type))throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.");if(this.lastDeltaChangeSet&&t.value===this.lastDeltaChangeSet)throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas")},e.prototype.shouldComponentUpdate=function(t,e){var r,n=this;if(this.validateProps(t),!this.editor||this.state.generation!==e.generation)return!0;if("value"in t){var o=this.getEditorContents(),s=null!==(r=t.value)&&void 0!==r?r:"";this.isEqualValue(s,o)||this.setEditorContents(this.editor,s)}return t.readOnly!==this.props.readOnly&&this.setEditorReadOnly(this.editor,t.readOnly),i(this.cleanProps,this.dirtyProps).some((function(e){return!h.default(t[e],n.props[e])}))},e.prototype.shouldComponentRegenerate=function(t){var e=this;return this.dirtyProps.some((function(r){return!h.default(t[r],e.props[r])}))},e.prototype.componentDidMount=function(){this.instantiateEditor(),this.setEditorContents(this.editor,this.getEditorContents())},e.prototype.componentWillUnmount=function(){this.destroyEditor()},e.prototype.componentDidUpdate=function(t,e){var r=this;if(this.editor&&this.shouldComponentRegenerate(t)){var n=this.editor.getContents(),o=this.editor.getSelection();this.regenerationSnapshot={delta:n,selection:o},this.setState({generation:this.state.generation+1}),this.destroyEditor()}if(this.state.generation!==e.generation){var i=this.regenerationSnapshot,s=(n=i.delta,i.selection);delete this.regenerationSnapshot,this.instantiateEditor();var u=this.editor;u.setContents(n),p((function(){return r.setEditorSelection(u,s)}))}},e.prototype.instantiateEditor=function(){this.editor||(this.editor=this.createEditor(this.getEditingArea(),this.getEditorConfig()))},e.prototype.destroyEditor=function(){this.editor&&(this.unhookEditor(this.editor),delete this.editor)},e.prototype.isControlled=function(){return"value"in this.props},e.prototype.getEditorConfig=function(){return{bounds:this.props.bounds,formats:this.props.formats,modules:this.props.modules,placeholder:this.props.placeholder,readOnly:this.props.readOnly,scrollingContainer:this.props.scrollingContainer,tabIndex:this.props.tabIndex,theme:this.props.theme}},e.prototype.getEditor=function(){if(!this.editor)throw new Error("Accessing non-instantiated editor");return this.editor},e.prototype.createEditor=function(t,e){var r=new f.default(t,e);return null!=e.tabIndex&&this.setEditorTabIndex(r,e.tabIndex),this.hookEditor(r),r},e.prototype.hookEditor=function(t){this.unprivilegedEditor=this.makeUnprivilegedEditor(t),t.on("editor-change",this.onEditorChange)},e.prototype.unhookEditor=function(t){t.off("editor-change",this.onEditorChange)},e.prototype.getEditorContents=function(){return this.value},e.prototype.getEditorSelection=function(){return this.selection},e.prototype.isDelta=function(t){return t&&t.ops},e.prototype.isEqualValue=function(t,e){return this.isDelta(t)&&this.isDelta(e)?h.default(t.ops,e.ops):h.default(t,e)},e.prototype.setEditorContents=function(t,e){var r=this;this.value=e;var n=this.getEditorSelection();"string"===typeof e?t.setContents(t.clipboard.convert(e)):t.setContents(e),p((function(){return r.setEditorSelection(t,n)}))},e.prototype.setEditorSelection=function(t,e){if(this.selection=e,e){var r=t.getLength();e.index=Math.max(0,Math.min(e.index,r-1)),e.length=Math.max(0,Math.min(e.length,r-1-e.index)),t.setSelection(e)}},e.prototype.setEditorTabIndex=function(t,e){var r,n;(null===(n=null===(r=t)||void 0===r?void 0:r.scroll)||void 0===n?void 0:n.domNode)&&(t.scroll.domNode.tabIndex=e)},e.prototype.setEditorReadOnly=function(t,e){e?t.disable():t.enable()},e.prototype.makeUnprivilegedEditor=function(t){var e=t;return{getHTML:function(){return e.root.innerHTML},getLength:e.getLength.bind(e),getText:e.getText.bind(e),getContents:e.getContents.bind(e),getSelection:e.getSelection.bind(e),getBounds:e.getBounds.bind(e)}},e.prototype.getEditingArea=function(){if(!this.editingArea)throw new Error("Instantiating on missing editing area");var t=a.default.findDOMNode(this.editingArea);if(!t)throw new Error("Cannot find element for editing area");if(3===t.nodeType)throw new Error("Editing area cannot be a text node");return t},e.prototype.renderEditingArea=function(){var t=this,e=this.props,r=e.children,n=e.preserveWhitespace,i={key:this.state.generation,ref:function(e){t.editingArea=e}};return u.default.Children.count(r)?u.default.cloneElement(u.default.Children.only(r),i):n?u.default.createElement("pre",o({},i)):u.default.createElement("div",o({},i))},e.prototype.render=function(){var t;return u.default.createElement("div",{id:this.props.id,style:this.props.style,key:this.state.generation,className:"quill "+(t=this.props.className,null!==t&&void 0!==t?t:""),onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp},this.renderEditingArea())},e.prototype.onEditorChangeText=function(t,e,r,n){var o,i;if(this.editor){var s=this.isDelta(this.value)?n.getContents():n.getHTML();s!==this.getEditorContents()&&(this.lastDeltaChangeSet=e,this.value=s,null===(i=(o=this.props).onChange)||void 0===i||i.call(o,t,e,r,n))}},e.prototype.onEditorChangeSelection=function(t,e,r){var n,o,i,s,u,a;if(this.editor){var f=this.getEditorSelection(),l=!f&&t,p=f&&!t;h.default(t,f)||(this.selection=t,null===(o=(n=this.props).onChangeSelection)||void 0===o||o.call(n,t,e,r),l?null===(s=(i=this.props).onFocus)||void 0===s||s.call(i,t,e,r):p&&(null===(a=(u=this.props).onBlur)||void 0===a||a.call(u,f,e,r)))}},e.prototype.focus=function(){this.editor&&this.editor.focus()},e.prototype.blur=function(){this.editor&&(this.selection=null,this.editor.blur())},e.displayName="React Quill",e.Quill=f.default,e.defaultProps={theme:"snow",modules:{},readOnly:!1},e}(u.default.Component);function p(t){Promise.resolve().then(t)}t.exports=l}}]);