import{r as J,C as Me,h as Ne,j as s}from"./index-133b2080.js";import{G as de,T as O,r as Ce,b as Oe,c as Se,d as ke,s as je,a as Pe,e as Z}from"./ToolTip-2c050ae6.js";import{u as K,M as Ue}from"./useApi-a429cb3b.js";function ee(r){return de({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M18 18v-6a3 3 0 0 0 -3 -3h-10l4 -4m0 8l-4 -4"}}]})(r)}function We(r){return de({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M6 18v-6a3 3 0 0 1 3 -3h10l-4 -4m0 8l4 -4"}}]})(r)}function L(r){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(r)}function D(r){if(r===null||r===!0||r===!1)return NaN;var e=Number(r);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function v(r,e){if(e.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+e.length+" present")}function g(r){v(1,arguments);var e=Object.prototype.toString.call(r);return r instanceof Date||L(r)==="object"&&e==="[object Date]"?new Date(r.getTime()):typeof r=="number"||e==="[object Number]"?new Date(r):((typeof r=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function _e(r,e){v(2,arguments);var t=g(r).getTime(),a=D(e);return new Date(t+a)}var Ye={};function E(){return Ye}function V(r){var e=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return e.setUTCFullYear(r.getFullYear()),r.getTime()-e.getTime()}function te(r){v(1,arguments);var e=g(r);return e.setHours(0,0,0,0),e}function R(r,e){v(2,arguments);var t=g(r),a=g(e),n=t.getTime()-a.getTime();return n<0?-1:n>0?1:n}var ce=6e4,fe=36e5;function Ee(r,e){v(2,arguments);var t=te(r),a=te(e);return t.getTime()===a.getTime()}function $e(r){return v(1,arguments),r instanceof Date||L(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Fe(r){if(v(1,arguments),!$e(r)&&typeof r!="number")return!1;var e=g(r);return!isNaN(Number(e))}function Ie(r,e){v(2,arguments);var t=g(r),a=g(e),n=t.getFullYear()-a.getFullYear(),i=t.getMonth()-a.getMonth();return n*12+i}function Re(r,e){return v(2,arguments),g(r).getTime()-g(e).getTime()}var re={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},Le="trunc";function He(r){return r?re[r]:re[Le]}function qe(r){v(1,arguments);var e=g(r);return e.setHours(23,59,59,999),e}function Xe(r){v(1,arguments);var e=g(r),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function Ae(r){v(1,arguments);var e=g(r);return qe(e).getTime()===Xe(e).getTime()}function Be(r,e){v(2,arguments);var t=g(r),a=g(e),n=R(t,a),i=Math.abs(Ie(t,a)),o;if(i<1)o=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-n*i);var d=R(t,a)===-n;Ae(g(r))&&i===1&&R(r,a)===1&&(d=!1),o=n*(i-Number(d))}return o===0?0:o}function Qe(r,e,t){v(2,arguments);var a=Re(r,e)/1e3;return He(t==null?void 0:t.roundingMethod)(a)}function ze(r,e){v(2,arguments);var t=D(e);return _e(r,-t)}var Ge=864e5;function Ve(r){v(1,arguments);var e=g(r),t=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),n=t-a;return Math.floor(n/Ge)+1}function H(r){v(1,arguments);var e=1,t=g(r),a=t.getUTCDay(),n=(a<e?7:0)+a-e;return t.setUTCDate(t.getUTCDate()-n),t.setUTCHours(0,0,0,0),t}function me(r){v(1,arguments);var e=g(r),t=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(t+1,0,4),a.setUTCHours(0,0,0,0);var n=H(a),i=new Date(0);i.setUTCFullYear(t,0,4),i.setUTCHours(0,0,0,0);var o=H(i);return e.getTime()>=n.getTime()?t+1:e.getTime()>=o.getTime()?t:t-1}function Je(r){v(1,arguments);var e=me(r),t=new Date(0);t.setUTCFullYear(e,0,4),t.setUTCHours(0,0,0,0);var a=H(t);return a}var Ze=6048e5;function Ke(r){v(1,arguments);var e=g(r),t=H(e).getTime()-Je(e).getTime();return Math.round(t/Ze)+1}function q(r,e){var t,a,n,i,o,d,l,c;v(1,arguments);var m=E(),u=D((t=(a=(n=(i=e==null?void 0:e.weekStartsOn)!==null&&i!==void 0?i:e==null||(o=e.locale)===null||o===void 0||(d=o.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:m.weekStartsOn)!==null&&a!==void 0?a:(l=m.locale)===null||l===void 0||(c=l.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&t!==void 0?t:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=g(r),f=w.getUTCDay(),p=(f<u?7:0)+f-u;return w.setUTCDate(w.getUTCDate()-p),w.setUTCHours(0,0,0,0),w}function he(r,e){var t,a,n,i,o,d,l,c;v(1,arguments);var m=g(r),u=m.getUTCFullYear(),w=E(),f=D((t=(a=(n=(i=e==null?void 0:e.firstWeekContainsDate)!==null&&i!==void 0?i:e==null||(o=e.locale)===null||o===void 0||(d=o.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:w.firstWeekContainsDate)!==null&&a!==void 0?a:(l=w.locale)===null||l===void 0||(c=l.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setUTCFullYear(u+1,0,f),p.setUTCHours(0,0,0,0);var M=q(p,e),b=new Date(0);b.setUTCFullYear(u,0,f),b.setUTCHours(0,0,0,0);var N=q(b,e);return m.getTime()>=M.getTime()?u+1:m.getTime()>=N.getTime()?u:u-1}function et(r,e){var t,a,n,i,o,d,l,c;v(1,arguments);var m=E(),u=D((t=(a=(n=(i=e==null?void 0:e.firstWeekContainsDate)!==null&&i!==void 0?i:e==null||(o=e.locale)===null||o===void 0||(d=o.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:m.firstWeekContainsDate)!==null&&a!==void 0?a:(l=m.locale)===null||l===void 0||(c=l.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&t!==void 0?t:1),w=he(r,e),f=new Date(0);f.setUTCFullYear(w,0,u),f.setUTCHours(0,0,0,0);var p=q(f,e);return p}var tt=6048e5;function rt(r,e){v(1,arguments);var t=g(r),a=q(t,e).getTime()-et(t,e).getTime();return Math.round(a/tt)+1}function h(r,e){for(var t=r<0?"-":"",a=Math.abs(r).toString();a.length<e;)a="0"+a;return t+a}var at={y:function(e,t){var a=e.getUTCFullYear(),n=a>0?a:1-a;return h(t==="yy"?n%100:n,t.length)},M:function(e,t){var a=e.getUTCMonth();return t==="M"?String(a+1):h(a+1,2)},d:function(e,t){return h(e.getUTCDate(),t.length)},a:function(e,t){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h:function(e,t){return h(e.getUTCHours()%12||12,t.length)},H:function(e,t){return h(e.getUTCHours(),t.length)},m:function(e,t){return h(e.getUTCMinutes(),t.length)},s:function(e,t){return h(e.getUTCSeconds(),t.length)},S:function(e,t){var a=t.length,n=e.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,a-3));return h(i,t.length)}};const T=at;var j={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},nt={G:function(e,t,a){var n=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(e,t,a){if(t==="yo"){var n=e.getUTCFullYear(),i=n>0?n:1-n;return a.ordinalNumber(i,{unit:"year"})}return T.y(e,t)},Y:function(e,t,a,n){var i=he(e,n),o=i>0?i:1-i;if(t==="YY"){var d=o%100;return h(d,2)}return t==="Yo"?a.ordinalNumber(o,{unit:"year"}):h(o,t.length)},R:function(e,t){var a=me(e);return h(a,t.length)},u:function(e,t){var a=e.getUTCFullYear();return h(a,t.length)},Q:function(e,t,a){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return h(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,a){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return h(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,a){var n=e.getUTCMonth();switch(t){case"M":case"MM":return T.M(e,t);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,a){var n=e.getUTCMonth();switch(t){case"L":return String(n+1);case"LL":return h(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,a,n){var i=rt(e,n);return t==="wo"?a.ordinalNumber(i,{unit:"week"}):h(i,t.length)},I:function(e,t,a){var n=Ke(e);return t==="Io"?a.ordinalNumber(n,{unit:"week"}):h(n,t.length)},d:function(e,t,a){return t==="do"?a.ordinalNumber(e.getUTCDate(),{unit:"date"}):T.d(e,t)},D:function(e,t,a){var n=Ve(e);return t==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):h(n,t.length)},E:function(e,t,a){var n=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,a,n){var i=e.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return h(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"});case"eeee":default:return a.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,a,n){var i=e.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return h(o,t.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"});case"cccc":default:return a.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,a){var n=e.getUTCDay(),i=n===0?7:n;switch(t){case"i":return String(i);case"ii":return h(i,t.length);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,a){var n=e.getUTCHours(),i=n/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,a){var n=e.getUTCHours(),i;switch(n===12?i=j.noon:n===0?i=j.midnight:i=n/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,a){var n=e.getUTCHours(),i;switch(n>=17?i=j.evening:n>=12?i=j.afternoon:n>=4?i=j.morning:i=j.night,t){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,a){if(t==="ho"){var n=e.getUTCHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return T.h(e,t)},H:function(e,t,a){return t==="Ho"?a.ordinalNumber(e.getUTCHours(),{unit:"hour"}):T.H(e,t)},K:function(e,t,a){var n=e.getUTCHours()%12;return t==="Ko"?a.ordinalNumber(n,{unit:"hour"}):h(n,t.length)},k:function(e,t,a){var n=e.getUTCHours();return n===0&&(n=24),t==="ko"?a.ordinalNumber(n,{unit:"hour"}):h(n,t.length)},m:function(e,t,a){return t==="mo"?a.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):T.m(e,t)},s:function(e,t,a){return t==="so"?a.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):T.s(e,t)},S:function(e,t){return T.S(e,t)},X:function(e,t,a,n){var i=n._originalDate||e,o=i.getTimezoneOffset();if(o===0)return"Z";switch(t){case"X":return ne(o);case"XXXX":case"XX":return S(o);case"XXXXX":case"XXX":default:return S(o,":")}},x:function(e,t,a,n){var i=n._originalDate||e,o=i.getTimezoneOffset();switch(t){case"x":return ne(o);case"xxxx":case"xx":return S(o);case"xxxxx":case"xxx":default:return S(o,":")}},O:function(e,t,a,n){var i=n._originalDate||e,o=i.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ae(o,":");case"OOOO":default:return"GMT"+S(o,":")}},z:function(e,t,a,n){var i=n._originalDate||e,o=i.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ae(o,":");case"zzzz":default:return"GMT"+S(o,":")}},t:function(e,t,a,n){var i=n._originalDate||e,o=Math.floor(i.getTime()/1e3);return h(o,t.length)},T:function(e,t,a,n){var i=n._originalDate||e,o=i.getTime();return h(o,t.length)}};function ae(r,e){var t=r>0?"-":"+",a=Math.abs(r),n=Math.floor(a/60),i=a%60;if(i===0)return t+String(n);var o=e||"";return t+String(n)+o+h(i,2)}function ne(r,e){if(r%60===0){var t=r>0?"-":"+";return t+h(Math.abs(r)/60,2)}return S(r,e)}function S(r,e){var t=e||"",a=r>0?"-":"+",n=Math.abs(r),i=h(Math.floor(n/60),2),o=h(n%60,2);return a+i+t+o}const it=nt;var ie=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},ve=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},ot=function(e,t){var a=e.match(/(P+)(p+)?/)||[],n=a[1],i=a[2];if(!i)return ie(e,t);var o;switch(n){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",ie(n,t)).replace("{{time}}",ve(i,t))},st={p:ve,P:ot};const lt=st;var ut=["D","DD"],dt=["YY","YYYY"];function ct(r){return ut.indexOf(r)!==-1}function ft(r){return dt.indexOf(r)!==-1}function oe(r,e,t){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var mt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ht=function(e,t,a){var n,i=mt[e];return typeof i=="string"?n=i:t===1?n=i.one:n=i.other.replace("{{count}}",t.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};const vt=ht;function Q(r){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):r.defaultWidth,a=r.formats[t]||r.formats[r.defaultWidth];return a}}var gt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},wt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},pt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},xt={date:Q({formats:gt,defaultWidth:"full"}),time:Q({formats:wt,defaultWidth:"full"}),dateTime:Q({formats:pt,defaultWidth:"full"})};const bt=xt;var yt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Tt=function(e,t,a,n){return yt[e]};const Dt=Tt;function W(r){return function(e,t){var a=t!=null&&t.context?String(t.context):"standalone",n;if(a==="formatting"&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):i;n=r.formattingValues[o]||r.formattingValues[i]}else{var d=r.defaultWidth,l=t!=null&&t.width?String(t.width):r.defaultWidth;n=r.values[l]||r.values[d]}var c=r.argumentCallback?r.argumentCallback(e):e;return n[c]}}var Mt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Nt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ct={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ot={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},St={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},kt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},jt=function(e,t){var a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},Pt={ordinalNumber:jt,era:W({values:Mt,defaultWidth:"wide"}),quarter:W({values:Nt,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:W({values:Ct,defaultWidth:"wide"}),day:W({values:Ot,defaultWidth:"wide"}),dayPeriod:W({values:St,defaultWidth:"wide",formattingValues:kt,defaultFormattingWidth:"wide"})};const Ut=Pt;function _(r){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.width,n=a&&r.matchPatterns[a]||r.matchPatterns[r.defaultMatchWidth],i=e.match(n);if(!i)return null;var o=i[0],d=a&&r.parsePatterns[a]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(d)?_t(d,function(u){return u.test(o)}):Wt(d,function(u){return u.test(o)}),c;c=r.valueCallback?r.valueCallback(l):l,c=t.valueCallback?t.valueCallback(c):c;var m=e.slice(o.length);return{value:c,rest:m}}}function Wt(r,e){for(var t in r)if(r.hasOwnProperty(t)&&e(r[t]))return t}function _t(r,e){for(var t=0;t<r.length;t++)if(e(r[t]))return t}function Yt(r){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.match(r.matchPattern);if(!a)return null;var n=a[0],i=e.match(r.parsePattern);if(!i)return null;var o=r.valueCallback?r.valueCallback(i[0]):i[0];o=t.valueCallback?t.valueCallback(o):o;var d=e.slice(n.length);return{value:o,rest:d}}}var Et=/^(\d+)(th|st|nd|rd)?/i,$t=/\d+/i,Ft={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},It={any:[/^b/i,/^(a|c)/i]},Rt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Lt={any:[/1/i,/2/i,/3/i,/4/i]},Ht={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},qt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Xt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},At={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Bt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Qt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},zt={ordinalNumber:Yt({matchPattern:Et,parsePattern:$t,valueCallback:function(e){return parseInt(e,10)}}),era:_({matchPatterns:Ft,defaultMatchWidth:"wide",parsePatterns:It,defaultParseWidth:"any"}),quarter:_({matchPatterns:Rt,defaultMatchWidth:"wide",parsePatterns:Lt,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:_({matchPatterns:Ht,defaultMatchWidth:"wide",parsePatterns:qt,defaultParseWidth:"any"}),day:_({matchPatterns:Xt,defaultMatchWidth:"wide",parsePatterns:At,defaultParseWidth:"any"}),dayPeriod:_({matchPatterns:Bt,defaultMatchWidth:"any",parsePatterns:Qt,defaultParseWidth:"any"})};const Gt=zt;var Vt={code:"en-US",formatDistance:vt,formatLong:bt,formatRelative:Dt,localize:Ut,match:Gt,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ge=Vt;var Jt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Zt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Kt=/^'([^]*?)'?$/,er=/''/g,tr=/[a-zA-Z]/;function se(r,e,t){var a,n,i,o,d,l,c,m,u,w,f,p,M,b,N,k,C,X;v(2,arguments);var xe=String(e),P=E(),U=(a=(n=t==null?void 0:t.locale)!==null&&n!==void 0?n:P.locale)!==null&&a!==void 0?a:ge,A=D((i=(o=(d=(l=t==null?void 0:t.firstWeekContainsDate)!==null&&l!==void 0?l:t==null||(c=t.locale)===null||c===void 0||(m=c.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&d!==void 0?d:P.firstWeekContainsDate)!==null&&o!==void 0?o:(u=P.locale)===null||u===void 0||(w=u.options)===null||w===void 0?void 0:w.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(A>=1&&A<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var B=D((f=(p=(M=(b=t==null?void 0:t.weekStartsOn)!==null&&b!==void 0?b:t==null||(N=t.locale)===null||N===void 0||(k=N.options)===null||k===void 0?void 0:k.weekStartsOn)!==null&&M!==void 0?M:P.weekStartsOn)!==null&&p!==void 0?p:(C=P.locale)===null||C===void 0||(X=C.options)===null||X===void 0?void 0:X.weekStartsOn)!==null&&f!==void 0?f:0);if(!(B>=0&&B<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var $=g(r);if(!Fe($))throw new RangeError("Invalid time value");var be=V($),ye=ze($,be),Te={firstWeekContainsDate:A,weekStartsOn:B,locale:U,_originalDate:$},De=xe.match(Zt).map(function(x){var y=x[0];if(y==="p"||y==="P"){var F=lt[y];return F(x,U.formatLong)}return x}).join("").match(Jt).map(function(x){if(x==="''")return"'";var y=x[0];if(y==="'")return rr(x);var F=it[y];if(F)return!(t!=null&&t.useAdditionalWeekYearTokens)&&ft(x)&&oe(x,e,String(r)),!(t!=null&&t.useAdditionalDayOfYearTokens)&&ct(x)&&oe(x,e,String(r)),F(ye,x,U.localize,Te);if(y.match(tr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return x}).join("");return De}function rr(r){var e=r.match(Kt);return e?e[1].replace(er,"'"):r}function we(r,e){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r}function ar(r){return we({},r)}var le=1440,nr=2520,z=43200,ir=86400;function or(r,e,t){var a,n;v(2,arguments);var i=E(),o=(a=(n=t==null?void 0:t.locale)!==null&&n!==void 0?n:i.locale)!==null&&a!==void 0?a:ge;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var d=R(r,e);if(isNaN(d))throw new RangeError("Invalid time value");var l=we(ar(t),{addSuffix:!!(t!=null&&t.addSuffix),comparison:d}),c,m;d>0?(c=g(e),m=g(r)):(c=g(r),m=g(e));var u=Qe(m,c),w=(V(m)-V(c))/1e3,f=Math.round((u-w)/60),p;if(f<2)return t!=null&&t.includeSeconds?u<5?o.formatDistance("lessThanXSeconds",5,l):u<10?o.formatDistance("lessThanXSeconds",10,l):u<20?o.formatDistance("lessThanXSeconds",20,l):u<40?o.formatDistance("halfAMinute",0,l):u<60?o.formatDistance("lessThanXMinutes",1,l):o.formatDistance("xMinutes",1,l):f===0?o.formatDistance("lessThanXMinutes",1,l):o.formatDistance("xMinutes",f,l);if(f<45)return o.formatDistance("xMinutes",f,l);if(f<90)return o.formatDistance("aboutXHours",1,l);if(f<le){var M=Math.round(f/60);return o.formatDistance("aboutXHours",M,l)}else{if(f<nr)return o.formatDistance("xDays",1,l);if(f<z){var b=Math.round(f/le);return o.formatDistance("xDays",b,l)}else if(f<ir)return p=Math.round(f/z),o.formatDistance("aboutXMonths",p,l)}if(p=Be(m,c),p<12){var N=Math.round(f/z);return o.formatDistance("xMonths",N,l)}else{var k=p%12,C=Math.floor(p/12);return k<3?o.formatDistance("aboutXYears",C,l):k<9?o.formatDistance("overXYears",C,l):o.formatDistance("almostXYears",C+1,l)}}function ue(r,e){return v(1,arguments),or(r,Date.now(),e)}function sr(r){return v(1,arguments),Ee(r,Date.now())}function lr(r,e){var t;v(1,arguments);var a=D((t=e==null?void 0:e.additionalDigits)!==null&&t!==void 0?t:2);if(a!==2&&a!==1&&a!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof r=="string"||Object.prototype.toString.call(r)==="[object String]"))return new Date(NaN);var n=fr(r),i;if(n.date){var o=mr(n.date,a);i=hr(o.restDateString,o.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var d=i.getTime(),l=0,c;if(n.time&&(l=vr(n.time),isNaN(l)))return new Date(NaN);if(n.timezone){if(c=gr(n.timezone),isNaN(c))return new Date(NaN)}else{var m=new Date(d+l),u=new Date(0);return u.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),u.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),u}return new Date(d+l+c)}var I={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},ur=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,dr=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,cr=/^([+-])(\d{2})(?::?(\d{2}))?$/;function fr(r){var e={},t=r.split(I.dateTimeDelimiter),a;if(t.length>2)return e;if(/:/.test(t[0])?a=t[0]:(e.date=t[0],a=t[1],I.timeZoneDelimiter.test(e.date)&&(e.date=r.split(I.timeZoneDelimiter)[0],a=r.substr(e.date.length,r.length))),a){var n=I.timezone.exec(a);n?(e.time=a.replace(n[1],""),e.timezone=n[1]):e.time=a}return e}function mr(r,e){var t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),a=r.match(t);if(!a)return{year:NaN,restDateString:""};var n=a[1]?parseInt(a[1]):null,i=a[2]?parseInt(a[2]):null;return{year:i===null?n:i*100,restDateString:r.slice((a[1]||a[2]).length)}}function hr(r,e){if(e===null)return new Date(NaN);var t=r.match(ur);if(!t)return new Date(NaN);var a=!!t[4],n=Y(t[1]),i=Y(t[2])-1,o=Y(t[3]),d=Y(t[4]),l=Y(t[5])-1;if(a)return yr(e,d,l)?wr(e,d,l):new Date(NaN);var c=new Date(0);return!xr(e,i,o)||!br(e,n)?new Date(NaN):(c.setUTCFullYear(e,i,Math.max(n,o)),c)}function Y(r){return r?parseInt(r):1}function vr(r){var e=r.match(dr);if(!e)return NaN;var t=G(e[1]),a=G(e[2]),n=G(e[3]);return Tr(t,a,n)?t*fe+a*ce+n*1e3:NaN}function G(r){return r&&parseFloat(r.replace(",","."))||0}function gr(r){if(r==="Z")return 0;var e=r.match(cr);if(!e)return 0;var t=e[1]==="+"?-1:1,a=parseInt(e[2]),n=e[3]&&parseInt(e[3])||0;return Dr(a,n)?t*(a*fe+n*ce):NaN}function wr(r,e,t){var a=new Date(0);a.setUTCFullYear(r,0,4);var n=a.getUTCDay()||7,i=(e-1)*7+t+1-n;return a.setUTCDate(a.getUTCDate()+i),a}var pr=[31,null,31,30,31,30,31,31,30,31,30,31];function pe(r){return r%400===0||r%4===0&&r%100!==0}function xr(r,e,t){return e>=0&&e<=11&&t>=1&&t<=(pr[e]||(pe(r)?29:28))}function br(r,e){return e>=1&&e<=(pe(r)?366:365)}function yr(r,e,t){return e>=1&&e<=53&&t>=0&&t<=6}function Tr(r,e,t){return r===24?e===0&&t===0:t>=0&&t<60&&e>=0&&e<60&&r>=0&&r<25}function Dr(r,e){return e>=0&&e<=59}const Or=()=>{const{isSideBarOpen:r,setIsSideBarOpen:e,setRefreshScreen:t}=J.useContext(Me),[a,n]=J.useState(!1),{state:{email:i}}=Ne();function o(u){const w=lr(u);if(sr(w))return se(w,"h:mm a")+" ("+ue(w,{addSuffix:!0})+")";{const f=se(w,"EEE, MMM d, h:mm aa"),p=ue(w,{addSuffix:!0});return`${f} (${p})`}}const d=K(Z.moveEmailsToBin),l=K(Z.toggleStarredEmail),c=()=>{try{l.call({id:i==null?void 0:i._id,value:!(i!=null&&i.starred)}),t(u=>!u)}catch(u){console.log(u)}},m=async()=>{try{await d.call([i==null?void 0:i._id]),window.history.back()}catch(u){console.log(u)}};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:`${r?"ml-[260px] w-[calc(100%-260px)]":"md:ml-[80px]  md:w-[calc(100%-80px)]"} z-100 overflow-hidden bg-white`,children:[s.jsx("div",{className:"relative mr-4 flex  w-full items-center justify-between whitespace-nowrap border-none    bg-none pb-3 pl-4  pr-6 pt-6",children:s.jsxs("ul",{className:" flex",id:":2g",role:"toolbar",children:[s.jsx("li",{onClick:()=>window.history.back(),className:"  group relative flex cursor-pointer items-center  justify-center        whitespace-nowrap  border-none  align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]",children:s.jsx(O,{text:"Back",className:"bottom-[calc(100%-50px)] translate-x-[-25%]",children:s.jsx(Ce,{className:"text-lg"})})}),s.jsx("li",{className:"  group relative flex cursor-pointer items-center  justify-center        whitespace-nowrap  border-none pl-6 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]","data-tooltip":"Archive",children:s.jsx(O,{text:"Archive",className:"bottom-[calc(100%-50px)] translate-x-[-25%]",children:s.jsx(Ue,{className:"text-lg"})})}),s.jsx("li",{onClick:()=>m(),className:"  group relative flex cursor-pointer items-center  justify-center        whitespace-nowrap  border-none pl-6 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]","data-tooltip":"Trash",children:s.jsx(O,{text:"Trash",className:"bottom-[calc(100%-50px)] translate-x-[-25%]",children:s.jsx(Oe,{className:"text-lg"})})}),s.jsx("li",{className:"  group relative flex cursor-pointer items-center  justify-center        whitespace-nowrap  border-none pl-6 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]","data-tooltip":"Mark as read",children:s.jsx(O,{text:"Mark as Read",className:"bottom-[calc(100%-50px)] translate-x-[-25%]",children:s.jsx(Se,{className:"text-lg"})})}),s.jsx("li",{className:"  group  relative flex cursor-pointer items-center  justify-center        whitespace-nowrap  border-none pl-6 align-middle text-sm leading-5 outline-none  before:absolute before:z-[-10] before:h-10 before:w-10 before:rounded-full  before:content-['']  hover:before:bg-[rgba(32,33,36,0.059)]","data-tooltip":"",children:s.jsx(O,{text:"Snooze",className:"bottom-[calc(100%-50px)] translate-x-[-25%]",children:s.jsx(ke,{className:"text-lg"})})})]})}),s.jsxs("div",{className:"  h-[calc(100vh-132px)]   w-full   items-start overflow-y-auto ",children:[s.jsxs("div",{className:"flex items-center pb-2 pl-4 pr-0 pt-5 md:pl-[72px] ",children:[s.jsx("h2",{className:"m-0 inline break-words p-0 pr-[10px] text-[1.375rem] font-normal text-[#1f1f1f] outline-none",children:i==null?void 0:i.subject}),s.jsx("span",{className:"   rounded bg-[#ddd] px-1 align-top text-xs text-[#666]",children:"Inbox"})]}),s.jsxs("div",{className:"py-3 pl-4  pr-6",children:[s.jsxs("div",{className:"flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between lg:gap-0 ",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"h-10 w-10  ",children:s.jsx("img",{src:"https://lh3.googleusercontent.com/a/default-user=s40-p",alt:"",className:"h-full w-full rounded-full object-cover"})}),s.jsxs("div",{className:"relative flex flex-col justify-between ",children:[s.jsxs("h3",{children:[s.jsx("span",{className:"whitespace-nowrap text-sm font-bold leading-5 text-[#1f1f1f]",children:i==null?void 0:i.name}),s.jsx("span",{className:" whitespace-nowrap text-xs font-normal leading-5 text-[#5e5e5e]",children:`<${i==null?void 0:i.from}>`})]}),s.jsxs("div",{className:"flex items-center gap-[3px] whitespace-nowrap text-xs font-normal leading-5 text-[#5e5e5e]",children:["To me",s.jsx("span",{onClick:()=>n(u=>!u),className:" cursor-pointer  active:rounded-full active:bg-[#ccc] active:p-[2px]",children:s.jsx(je,{})})]}),a&&s.jsx("div",{className:"absolute left-6 top-[44px] z-[1000] max-w-max rounded-md border border-gray-300 bg-white p-4  shadow-md",children:s.jsx("table",{children:s.jsxs("tbody",{children:[s.jsxs("tr",{className:" ",children:[s.jsx("td",{className:"text-end align-top",children:s.jsx("span",{className:" whitespace-nowrap text-sm font-normal leading-5 text-[#5e5e5e]",children:"from:"})}),s.jsx("td",{className:"pl-3 align-top",children:s.jsxs("span",{className:" whitespace-normal text-sm font-normal leading-5 text-[#333]",children:[s.jsx("span",{className:"whitespace-nowrap text-sm font-bold leading-5 text-[#1f1f1f]",children:i==null?void 0:i.name}),`<${i==null?void 0:i.from}>`]})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"text-end align-top",children:s.jsx("span",{className:"whitespace-normal text-sm font-normal leading-5 text-[#5e5e5e]",children:"to:"})}),s.jsx("td",{className:"pl-3 align-top",children:s.jsx("span",{className:" whitespace-normal text-sm font-normal leading-5 text-[#333]",children:i==null?void 0:i.to})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"text-end align-top",children:s.jsx("span",{className:" whitespace-normal text-sm font-normal leading-5 text-[#5e5e5e]",children:"date:"})}),s.jsx("td",{className:"pl-3 align-top",children:s.jsx("span",{className:" whitespace-normal text-sm font-normal leading-5 text-[#333]",children:o(i==null?void 0:i.date)})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"text-end align-top",children:s.jsx("span",{className:" whitespace-normal text-sm font-normal leading-5 text-[#5e5e5e]",children:"subject:"})}),s.jsx("td",{className:"pl-3 align-top",children:s.jsx("span",{className:" whitespace-normal text-sm font-normal leading-5 text-[#333]",children:(i==null?void 0:i.subject)||"(No Subject)"})})]})]})})})]})]}),s.jsxs("div",{className:"flex items-center gap-5",children:[s.jsx("span",{className:" whitespace-nowrap text-xs font-normal leading-5 text-[#5e5e5e]",children:o(i==null?void 0:i.date)}),s.jsx("span",{onClick:()=>c(),className:"cursor-pointer",children:s.jsx(O,{text:"Not Starred",className:"bottom-[calc(100%-64px)] translate-x-[-25%]",children:s.jsx(Pe,{className:"text-xl "})})}),s.jsx("span",{className:"cursor-pointer",children:s.jsx(O,{text:"Reply",className:"bottom-[calc(100%-50px)] translate-x-[-50%]",children:s.jsx(ee,{className:"text-xl "})})})]})]}),s.jsx("div",{className:"ml-[50px] mt-3 whitespace-pre-wrap text-sm text-[#222]",children:i==null?void 0:i.body}),s.jsxs("div",{className:"p=0 ml-[50px] mt-10 flex h-auto items-center gap-2 leading-5",children:[s.jsxs("span",{className:"mr-2 inline-flex h-8 min-w-[104px] cursor-pointer select-none items-center justify-center gap-1 rounded-[18px]  border border-[#747775] px-4 pl-3 text-sm font-medium text-[#444746]  shadow-none outline-none  hover:bg-[#2021240f]",children:[s.jsx(ee,{className:"text-xl "}),"Reply"]}),s.jsxs("span",{className:"mr-2 inline-flex h-8 min-w-[104px] cursor-pointer select-none items-center justify-center gap-1 rounded-[18px]  border border-[#747775] px-4 pl-3 text-sm font-medium text-[#444746]  shadow-none outline-none  hover:bg-[#2021240f]",children:[s.jsx(We,{className:"text-xl "}),"Forward"]})]})]})]})]}),s.jsx("div",{onClick:()=>e(!1),className:`overlay fixed  bottom-0 left-0 top-0 ml-[260px] w-[calc(100%-260px)]  overflow-hidden bg-black md:hidden     ${r?"visible cursor-pointer opacity-50":"invisible opacity-100"}`})]})};export{Or as default};