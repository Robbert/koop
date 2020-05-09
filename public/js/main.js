/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*! jQuery UI - v1.12.1 - 2018-06-13
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/resizable.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/mouse.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}function i(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=n(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function n(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,o)}function o(){t.datepicker._isDisabledDatepicker(u.inline?u.dpDiv.parent()[0]:u.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function a(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.ui=t.ui||{},t.ui.version="1.12.1";var r=0,l=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,s,n=l.call(arguments,1),o=0,a=n.length;a>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o="string"==typeof n,a=l.call(arguments,1),r=this;return o?this.length||"instance"!==n?this.each(function(){var i,o=t.data(this,s);return"instance"===n?(r=o,!1):o?t.isFunction(o[n])&&"_"!==n.charAt(0)?(i=o[n].apply(o,a),i!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+n+"'")}):r=void 0:(a.length&&(n=t.widget.extend.apply(null,[n].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))})),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=r++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,l=t(this),h=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=h+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),T=e(k.my,l.outerWidth(),l.outerHeight());"right"===n.my[0]?D.left-=h:"center"===n.my[0]&&(D.left-=h/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=T[0],D.top+=T[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+T[0],u[1]+T[1]],my:n.my,at:n.at,within:b,elem:l})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-h,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:l,left:D.left,top:D.top,width:h,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};h>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),l.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.ui.focusable=function(i,s){var n,o,a,r,l,h=i.nodeName.toLowerCase();return"area"===h?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(h)?(r=!i.disabled,r&&(l=t(i).closest("fieldset")[0],l&&(r=!l.disabled))):r="a"===h?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var h=!1;t(document).on("mouseup",function(){h=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!h){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),h=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,h=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),l=t.pageX,h=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,h=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,l=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(l=this.originalPageX),"x"===a.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,l,h,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)l=s.snapElements[d].left-s.margins.left,h=l+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,l-g>_||m>h+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(l-_),r=g>=Math.abs(h-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(l-m),r=g>=Math.abs(h-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())}).on("mouseleave",function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;default:}},_setupHandles:function(){var e,i,s,n,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;s.length>i;i++)e=t.trim(s[i]),n="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+n),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se")}),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,l=this._change[o];return this._updatePrevProperties(),l?(i=l.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,l,h=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,l=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,h.animate||this.element.css(t.extend(a,{top:l,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!h.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>n&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,h=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&h&&(t.left=r-e.minWidth),s&&h&&(t.left=r-e.maxWidth),a&&c&&(t.top=l-e.minHeight),n&&c&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,l={width:i.size.width-r,height:i.size.height-a},h=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,c&&h?{top:c,left:h}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,l=t(this).resizable("instance"),h=l.options,c=l.element,u=h.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(l.containerElement=t(d),/document/.test(u)||u===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=l._num(e.css("padding"+s))}),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=l.containerOffset,n=l.containerSize.height,o=l.containerSize.width,a=l._hasScroll(d,"left")?d.scrollWidth:o,r=l._hasScroll(d)?d.scrollHeight:n,l.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,l=a.containerOffset,h=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=l),h.left<(a._helper?l.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-l.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?l.left:0),h.top<(a._helper?l.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-l.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?l.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-l.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-l.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),l=a.outerWidth()-e.sizeDiff.width,h=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:l,height:h}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:l,height:h})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0};t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null)}),e.css(n)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,l="number"==typeof s.grid?[s.grid,s.grid]:s.grid,h=l[0]||1,c=l[1]||1,u=Math.round((n.width-o.width)/h)*h,d=Math.round((n.height-o.height)/c)*c,p=o.width+u,f=o.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=l,_&&(p+=h),v&&(f+=c),g&&(p-=h),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-c||0>=p-h)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-h>0?(i.size.width=p,i.position.left=a.left-u):(p=h-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable;var c=/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(s,n){var o,a={};return n?"controlgroupLabel"===s?(o=e.element.find(n),o.each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(o,null,"ui-widget ui-widget-content ui-state-default"),i=i.concat(o.get()),void 0):(t.fn[s]&&(a=e["_"+s+"Options"]?e["_"+s+"Options"]("middle"):{classes:{}},e.element.find(n).each(function(){var n=t(this),o=n[s]("instance"),r=t.widget.extend({},a);if("button"!==s||!n.parent(".ui-spinner").length){o||(o=n[s]()[s]("instance")),o&&(r.classes=e._resolveClassesValues(r.classes,o)),n[s](r);var l=n[s]("widget");t.data(l[0],"ui-controlgroup-data",o?o:n[s]("instance")),i.push(l[0])}})),void 0):void 0}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),s=i.data("ui-controlgroup-data");s&&s[e]&&s[e]()})},_updateCornerClass:function(t,e){var i="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",s=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,i),this._addClass(t,null,s)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}};return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var s={};return t.each(e,function(n){var o=i.options.classes[n]||"";o=t.trim(o.replace(c,"")),s[n]=(o+" "+e[n]).replace(/\s+/g," ")}),s},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?(this._callChildMethod(e?"disable":"enable"),void 0):(this.refresh(),void 0)},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,s){var n=e[s]().data("ui-controlgroup-data");if(n&&i["_"+n.widgetName+"Options"]){var o=i["_"+n.widgetName+"Options"](1===e.length?"only":s);o.classes=i._resolveClassesValues(o.classes,n),n.element[n.widgetName](o)}else i._updateCornerClass(e[s](),s)}),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,s=this,n=this._super()||{};
return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){s.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(n.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(n.disabled=e),n},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,s="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(s):t(s).filter(function(){return 0===t(this).form().length}),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),this.element[0].disabled=e,void 0):(this.refresh(),void 0)):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var s="iconPosition"!==e,n=s?this.options.iconPosition:i,o="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,i),this._attachIcon(n),o?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),t.uiBackCompat!==!1&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?(this._super("showLabel",e),void 0):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var u;t.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return a(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var s=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?n(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,o){var r,l,h,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(l=document.documentElement.clientWidth,h=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+c,h/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),u===n&&(u=null))},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,o,r,l,h=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):h?"all"===i?t.extend({},h.settings):this._get(h,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),h&&(this._curInst===h&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(h,"min"),l=this._getMinMaxDate(h,"max"),a(h.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(h.settings.minDate=this._formatDate(h,r)),null!==l&&void 0!==n.dateFormat&&void 0===n.maxDate&&(h.settings.maxDate=this._formatDate(h,l)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),h),this._autoSize(h),this._setDate(h,o),this._updateAlternate(h),this._updateDatepicker(h)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var s,n,o,r,l,h,c;s=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),o=n?n.apply(e,[e,s]):{},o!==!1&&(a(s.settings,o),s.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),l={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),l=t.datepicker._checkOffset(s,l,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:l.left+"px",top:l.top+"px"}),s.inline||(h=t.datepicker._get(s,"showAnim"),c=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?s.dpDiv.show(h,t.datepicker._get(s,"showOptions"),c):s.dpDiv[h||"show"](h?c:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))}},_updateDatepicker:function(e){this.maxRows=4,u=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),n=s[1],a=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),h=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>l&&l>n?Math.abs(i.left+n-l):0),i.top-=Math.min(i.top,i.top+o>h&&h>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,o,a,r,l=0,h=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=RegExp("^\\d{"+n+","+s+"}"),a=i.substring(l).match(o);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},k=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=e[1];return i.substr(l,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],l+=s.length,!1):void 0}),-1!==o)return o+1;throw"Unknown name at position "+l},x=function(){if(i.charAt(l)!==e.charAt(n))throw"Unexpected literal at position "+l;l++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?x():b=!1;else switch(e.charAt(n)){case"d":_=w("d");break;case"D":k("D",u,d);break;case"o":v=w("o");break;case"m":m=w("m");break;case"M":m=k("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?x():b=!0;break;default:x()}if(i.length>l&&(a=i.substr(l),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),v>-1)for(m=1,_=v;;){if(o=this._getDaysInMonth(g,m-1),o>=_)break;m++,_-=o}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,l=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},h=function(t,e,i){var s=""+e;if(l(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return l(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||l("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=h("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=h("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=h("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=l("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":l("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),l=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,h=l.exec(i);h;){switch(h[2]||"d"){case"d":case"D":r+=parseInt(h[1],10);break;case"w":case"W":r+=7*parseInt(h[1],10);break;case"m":case"M":a+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}h=l.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1
},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,l,h,c,u,d,p,f,g,m,_,v,b,y,w,k,x,C,D,T,I,M,P,S,N,H,A,z,O,E,W,F,L,R=new Date,Y=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),B=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),X=this._get(t,"stepMonths"),$=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),J=this._getMinMaxDate(t,"min"),Q=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),Q)for(e=this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth()-U[0]*U[1]+1,Q.getDate())),e=J&&J>e?J:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-X,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+X,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:Y,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",h=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(B?l:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(B?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,C=0;U[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),T=" ui-corner-all",I="",$){if(I+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:I+=" ui-datepicker-group-first",T=" ui-corner-"+(B?"right":"left");break;case U[1]-1:I+=" ui-datepicker-group-last",T=" ui-corner-"+(B?"left":"right");break;default:I+=" ui-datepicker-group-middle",T=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&0===k?B?o:s:"")+(/all|right/.test(T)&&0===k?B?s:o:"")+this._generateMonthYearHeader(t,Z,te,J,Q,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)P=(w+c)%7,M+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[P]+"'>"+p[P]+"</span></th>";for(I+=M+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),N=(this._getFirstDayOfMonth(te,Z)-c+7)%7,H=Math.ceil((N+S)/7),A=$?this.maxRows>H?this.maxRows:H:H,this.maxRows=A,z=this._daylightSavingAdjust(new Date(te,Z,1-N)),O=0;A>O;O++){for(I+="<tr>",E=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(z)+"</td>":"",w=0;7>w;w++)W=m?m.apply(t.input?t.input[0]:null,[z]):[!0,""],F=z.getMonth()!==Z,L=F&&!v||!W[0]||J&&J>z||Q&&z>Q,E+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+W[1]+(z.getTime()===G.getTime()?" "+this._currentClass:"")+(z.getTime()===Y.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":L?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===Y.getTime()?" ui-state-highlight":"")+(z.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);I+=E+"</tr>"}Z++,Z>11&&(Z=0,te++),I+="</tbody></table>"+($?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=I}y+=x}return y+=h,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var l,h,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(l=s&&s.getFullYear()===i,h=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!l||c>=s.getMonth())&&(!h||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new s,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),o=Math.max.apply(null,n);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),s=!0),s&&!i&&this._trigger("focus",e),s},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]),i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),void 0;if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.trigger("focus")}),e.preventDefault()):(this._delay(function(){s.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,o={icon:s.icon,iconPosition:s.iconPosition,showLabel:s.showLabel,icons:s.icons,text:s.text},delete s.click,delete s.icon,delete s.iconPosition,delete s.showLabel,delete s.icons,"boolean"==typeof s.text&&delete s.text,t("<button></button>",s).button(o).appendTo(e.uiButtonSet).on("click",function(){n.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" "+"top"+(r>=0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),l=a.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(l>=0?"+":"")+l,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,i){var s,n,o=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(s=o.is(":data(ui-draggable)"),s&&!i&&o.draggable("destroy"),!s&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(n=o.is(":data(ui-resizable)"),n&&!i&&o.resizable("destroy"),n&&"string"==typeof i&&o.resizable("option","handles",i),n||i===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog});
/*
The MIT License (MIT)

Copyright (c) 2014 Damir Brekalo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

(function(factory) {

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {

    var $document = $(window.document),
        instanceNum = 0,
        eventStringRE = /\w\b/g,
        keyMap = {
            13: 'enter',
            27: 'escape',
            40: 'downArrow',
            38: 'upArrow'
        };

    function Fastsearch(inputElement, options) {

        this.init.apply(this, arguments);

    }

    $.extend(Fastsearch.prototype, {

        init: function(inputElement, options) {

            options = this.options = $.extend(true, {}, Fastsearch.defaults, options);

            this.$input = $(inputElement);
            this.$el = options.wrapSelector instanceof $ ? options.wrapSelector : this.$input.closest(options.wrapSelector);

            Fastsearch.pickTo(options, this.$el.data(), [
                'url', 'onItemSelect', 'noResultsText', 'inputIdName', 'apiInputName'
            ]);

            options.url = options.url || this.$el.attr('action');

            this.ens = '.fastsearch' + (++instanceNum);
            this.itemSelector = Fastsearch.selectorFromClass(options.itemClass);
            this.focusedItemSelector = Fastsearch.selectorFromClass(options.focusedItemClass);

            this.events();

        },

        namespaceEvents: function(events) {

            var eventNamespace = this.ens;

            return events.replace(eventStringRE, function(match) {
                return match + eventNamespace;
            });

        },

        events: function() {

            var self = this,
                options = this.options;

            this.$input.on(this.namespaceEvents('keyup focus click'), function(e) {

                keyMap[e.keyCode] !== 'enter' && self.handleTyping();

            }).on(this.namespaceEvents('keydown'), function(e) {

                keyMap[e.keyCode] === 'enter' && options.preventSubmit && e.preventDefault();

                if (self.hasResults && self.resultsOpened) {

                    switch (keyMap[e.keyCode]) {
                        case 'downArrow': e.preventDefault(); self.navigateItem('down'); break;
                        case 'upArrow': e.preventDefault(); self.navigateItem('up'); break;
                        case 'enter': self.onEnter(e); break;
                    }

                }

            });

            this.$el.on(this.namespaceEvents('click'), this.itemSelector, function(e) {

                e.preventDefault();
                self.handleItemSelect($(this));

            });

            options.mouseEvents && this.$el.on(this.namespaceEvents('mouseleave'), this.itemSelector, function(e) {

                $(this).removeClass(options.focusedItemClass);

            }).on(this.namespaceEvents('mouseenter'), this.itemSelector, function(e) {

                self.$resultItems.removeClass(options.focusedItemClass);
                $(this).addClass(options.focusedItemClass);

            });

        },

        handleTyping: function() {

            var inputValue = $.trim(this.$input.val()),
                self = this;

            if (inputValue.length < this.options.minQueryLength) {

                this.hideResults();

            } else if (inputValue === this.query) {

                this.showResults();

            } else {

                clearTimeout(this.keyupTimeout);

                this.keyupTimeout = setTimeout(function() {

                    self.$el.addClass(self.options.loadingClass);

                    self.query = inputValue;

                    self.getResults(function(data) {

                        self.showResults(self.storeResponse(data).generateResults(data));

                    });

                }, this.options.typeTimeout);

            }

        },

        getResults: function(callback) {

            var self = this,
                options = this.options,
                formValues = this.$el.find('input, textarea, select').serializeArray();

            if (options.apiInputName) {
                formValues.push({'name': options.apiInputName, 'value': this.$input.val()});
            }

            $.get(options.url, formValues, function(data) {

                callback(options.parseResponse ? options.parseResponse.call(self, data, self) : data);

            });

        },

        storeResponse: function(data) {

            this.responseData = data;
            this.hasResults = data.length !== 0;

            return this;

        },

        generateResults: function(data) {

            var $allResults = $('<div>'),
                options = this.options;

            if (options.template) {
                return $(options.template(data, this));
            }

            if (data.length === 0) {

                $allResults.html(
                    '<p class="' + options.noResultsClass + '">' +
                        (typeof options.noResultsText === 'function' ? options.noResultsText.call(this) : options.noResultsText) +
                    '</p>'
                );

            } else {

                if (this.options.responseType === 'html') {

                    $allResults.html(data);

                } else {

                    this['generate' + (data[0][options.responseFormat.groupItems] ? 'GroupedResults' : 'SimpleResults')](data, $allResults);

                }

            }

            return $allResults.children();

        },

        generateSimpleResults: function(data, $cont) {

            var self = this;

            this.itemModels = data;

            $.each(data, function(i, item) {
                $cont.append(self.generateItem(item));
            });

        },

        generateGroupedResults: function(data, $cont) {

            var self = this,
                options = this.options,
                format = options.responseFormat;

            this.itemModels = [];

            $.each(data, function(i, groupData) {

                var $group = $('<div class="' + options.groupClass + '">').appendTo($cont);

                groupData[format.groupCaption] && $group.append(
                    '<h3 class="' + options.groupTitleClass + '">' + groupData[format.groupCaption] + '</h3>'
                );

                $.each(groupData.items, function(i, item) {

                    self.itemModels.push(item);
                    $group.append(self.generateItem(item));

                });

                options.onGroupCreate && options.onGroupCreate.call(self, $group, groupData, self);

            });

        },

        generateItem: function(item) {
          var self = this;
            var options = this.options,
                format = options.responseFormat,
                url = item[format.url],
                html = item[format.html] || item[format.label],
                // $tag = $('<' + (url ? 'a' : 'span') + '>').html(html).addClass(options.itemClass);
                $tag = $('<span tabindex="0">').html(html).addClass(options.itemClass);
                $tag.on('keydown', function(event) {
                  if (event.keyCode === 13 /* ENTER */ ) {
                    self.onEnter(event);
                  }
                  if (event.keyCode === 40) /* arrow down */ {
                      self.navigateItem('down');
                  }
                  if (event.keyCode === 38) /* arrow up */ {
                    self.navigateItem('up');
                  }
                  // if (event.keyCode === 27 /* ESC */ ) {
                  //     autocomplete.close(input, true);
                  // }
              });

            url && $tag.attr('href', url);

            options.onItemCreate && options.onItemCreate.call(this, $tag, item, this);

            return $tag;

        },

        showResults: function($content) {

            if (!$content && this.resultsOpened) {
                return;
            }
            this.$el.removeClass(this.options.loadingClass).addClass(this.options.resultsOpenedClass);

            if (this.options.flipOnBottom) {
                this.checkDropdownPosition();
            }

          this.$resultsCont = this.$resultsCont || $('<div>').attr('id', 'fstResults-'+this.options.elementId).addClass(this.options.resultsContClass).attr('aria-live', 'polite').appendTo(this.$el);

            if ($content) {

                this.$resultsCont.html($content);
                this.$resultItems = this.$resultsCont.find(this.itemSelector);
                this.options.onResultsCreate && this.options.onResultsCreate.call(this, this.$resultsCont, this.responseData, this);

            }

            if (!this.resultsOpened) {

                this.documentCancelEvents('on');
                this.$input.trigger('openingResults');

            }

            if (this.options.focusFirstItem && this.$resultItems && this.$resultItems.length) {
                this.navigateItem('down');
            }

            this.resultsOpened = true;

        },

        checkDropdownPosition: function() {

            var flipOnBottom = this.options.flipOnBottom;
            var offset = typeof flipOnBottom === 'boolean' && flipOnBottom ? 400 : flipOnBottom;
            var isFlipped = this.$input.offset().top + offset > $document.height();

            this.$el.toggleClass(this.options.resultsFlippedClass, isFlipped);

        },

        documentCancelEvents: function(setup, onCancel) {

            var self = this;

            if (setup === 'off' && this.closeEventsSetuped) {

                $document.off(this.ens);
                this.closeEventsSetuped = false;
                return;

            } else if (setup === 'on' && !this.closeEventsSetuped) {

              $document.on(this.namespaceEvents('touchstart click keyup'), function(e) {

                    if (keyMap[e.keyCode] === 'escape' || (!$(e.target).is(self.$el) && !$.contains(self.$el.get(0), e.target) && $.contains(document.documentElement, e.target))) {

                        onCancel ? onCancel.call(self) : self.hideResults();

                    }

                });

                this.closeEventsSetuped = true;

            }

        },

        navigateItem: function(direction) {

            var $currentItem = this.$resultItems.filter(':focus'),
                maxPosition = this.$resultItems.length - 1;


            if ($currentItem.length === 0) {
                // this.$resultItems.eq(direction === 'up' ? maxPosition : 0).addClass(this.options.focusedItemClass);
                this.$resultItems.eq(direction === 'up' ? maxPosition : 0).focus();
                return;

            }

            var currentPosition = this.$resultItems.index($currentItem),
                nextPosition = direction === 'up' ? currentPosition - 1 : currentPosition + 1;

            nextPosition > maxPosition && (nextPosition = 0);
            nextPosition < 0 && (nextPosition = maxPosition);

            $currentItem.removeClass(this.options.focusedItemClass);

          // this.$resultItems.eq(nextPosition).addClass(this.options.focusedItemClass);
          this.$resultItems.eq(nextPosition).focus();

            this.$input.attr('aria-activedescendant', $currentItem.text());

        },

        navigateDown: function() {

            this.navigateItem('down');

        },

        navigateUp: function() {

            this.navigateItem('up');

        },

        onEnter: function(e) {

            var $currentItem = this.$resultItems.filter(':focus');

            if ($currentItem.length) {
                e.preventDefault();
                this.handleItemSelect($currentItem);
            }

        },

        handleItemSelect: function($item) {
            var selectOption = this.options.onItemSelect,
                model = this.itemModels.length ? this.itemModels[this.$resultItems.index($item)] : {};

            this.$input.trigger('itemSelected');

            if (selectOption === 'fillInput') {

                this.fillInput(model);


            } else if (selectOption === 'follow') {

                window.location.href = $item.attr('href');

            } else if (typeof selectOption === 'function') {
              selectOption.call(this, $item, model, this);
              this.$input.focus();
            }

        },

        fillInput: function(model) {

            var options = this.options,
                format = options.responseFormat;

            this.query = model[format.label];
            this.$input.val(model[format.label]).trigger('change');

            if (options.fillInputId && model.id) {

                if (!this.$inputId) {

                    var inputIdName = options.inputIdName || this.$input.attr('name') + '_id';

                    this.$inputId = this.$el.find('input[name="' + inputIdName + '"]');

                    if (!this.$inputId.length) {
                        this.$inputId = $('<input type="hidden" name="' + inputIdName + '" />').appendTo(this.$el);
                    }

                }

                this.$inputId.val(model.id).trigger('change');

            }

            this.hideResults();

        },

        hideResults: function() {

            if (this.resultsOpened) {

                this.resultsOpened = false;
                this.$el.removeClass(this.options.resultsOpenedClass);
                // this.$el.removeClass(this.options.activeClass);
                this.$input.trigger('closingResults');
                this.documentCancelEvents('off');

            }

            return this;

        },

        clear: function() {

            this.hideResults();
            this.$input.val('').trigger('change');

            return this;

        },

        destroy: function() {

            $document.off(this.ens);

            this.$input.off(this.ens);

            this.$el.off(this.ens)
                .removeClass(this.options.resultsOpenedClass)
                .removeClass(this.options.loadingClass);

            if (this.$resultsCont) {

                this.$resultsCont.remove();
                delete this.$resultsCont;

            }

            delete this.$el.data().fastsearch;

        }

    });

    $.extend(Fastsearch, {

        pickTo: function(dest, src, keys) {

            $.each(keys, function(i, key) {
                dest[key] = (src && src[key]) || dest[key];
            });

            return dest;

        },

        selectorFromClass: function(classes) {

            return '.' + classes.replace(/\s/g, '.');

        }

    });

    Fastsearch.defaults = {
        wrapSelector: 'form', // fastsearch container defaults to closest form. Provide selector for something other
        url: null, // plugin will get data from data-url propery, url option or container action attribute
        responseType: 'JSON', // default expected server response type - can be set to html if that is what server returns
        preventSubmit: false, // prevent submit of form with enter keypress

        resultsContClass: 'fs_results', // html classes
        resultsOpenedClass: 'fsr_opened',
        resultsFlippedClass: 'fsr_flipped',
        groupClass: 'fs_group',
        itemClass: 'fs_result_item',
        groupTitleClass: 'fs_group_title',
        loadingClass: 'loading',
        noResultsClass: 'fs_no_results',
        focusedItemClass: 'focused',

        typeTimeout: 140, // try not to hammer server with request for each keystroke if possible
        minQueryLength: 2, // minimal number of characters needed for plugin to send request to server

        template: null, // provide your template function if you need one - function(data, fastsearchApi)
        mouseEvents: !('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), // detect if client is touch enabled so plugin can decide if mouse specific events should be set.
        focusFirstItem: false,
        flipOnBottom: false,

        elementId: null,

        responseFormat: { // Adjust where plugin looks for data in your JSON server response
            url: 'url',
            html: 'html',
            label: 'label',
            groupCaption: 'caption',
            groupItems: 'items'
        },

        fillInputId: true, // on item select plugin will try to write selected id from item data model to input
        inputIdName: null, // on item select plugin will try to write selected id from item data model to input with this name

        apiInputName: null, // by default plugin will post input name as query parameter - you can provide custom one here

        noResultsText: 'No results found',
        onItemSelect: 'follow', // by default plugin follows selected link - other options available are "fillInput" and custom callback - function($item, model, fastsearchApi)

        parseResponse: null, // parse server response with your handler and return processed data - function(response, fastsearchApi)
        onResultsCreate: null, // adjust results element - function($allResults, data, fastsearchApi)
        onGroupCreate: null, // adjust group element when created - function($group, groupModel, fastsearchApi)
        onItemCreate: null // adjust item element when created - function($item, model, fastsearchApi)
    };

    $.fastsearch = Fastsearch;

    $.fn.fastsearch = function(options) {
        return this.each(function() {
            if (!$.data(this, 'fastsearch')) {
                $.data(this, 'fastsearch', new Fastsearch(this, options));
            }
        });
    };

    return $;

}));

/*
The MIT License (MIT)

Copyright (c) 2015 Damir Brekalo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'fastsearch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('jquery'), require('fastsearch'));
  } else {
    factory(root.jQuery);
  }

}(this, function ($) {

  var $document = $(document),
    instanceNum = 0,
    Fastsearch = $.fastsearch,
    pickTo = Fastsearch.pickTo,
    selectorFromClass = Fastsearch.selectorFromClass;

  function Fastselect(inputElement, options) {

    this.init.apply(this, arguments);

  }

  $.extend(Fastselect.prototype, {

    init: function (inputElement, options) {

      this.inputElement = inputElement;
      this.ens = '.fastselect' + (++instanceNum);
      this.$input = $(inputElement);
      this.id = instanceNum;
      this.helptextText = this.$input.data('multiselect-helptext');

      this.options = pickTo($.extend(true, {}, Fastselect.defaults, options, {
        placeholder: this.$input.attr('placeholder')
      }), this.$input.data(), [
          'url', 'loadOnce', 'apiParam', 'initialValue', 'userOptionAllowed'
        ]);


      this.hasCustomLoader = this.$input.is('input');
      this.isMultiple = !!this.$input.attr('multiple');
      this.userOptionAllowed = this.hasCustomLoader && this.isMultiple && this.options.userOptionAllowed;

      this.optionsCollection = new OptionsCollection(pickTo({ multipleValues: this.isMultiple }, this.options, [
        'url', 'loadOnce', 'parseData', 'matcher'
      ]));

      this.setupDomElements();
      this.setupFastsearch();
      this.setupEvents();

    },

    setupDomElements: function () {

      this.$el = $('<div>').addClass(this.options.elementClass);

      this[this.isMultiple ? 'setupMultipleElement' : 'setupSingleElement'](function () {

        this.updateDomElements();
        this.$controls.appendTo(this.$el);
        this.$el.insertAfter(this.$input);
        this.$input.detach().appendTo(this.$el);
        // var self = this;
        // this.$toggleBtn.on('click', function(){
        //   self.$input.focus();
        //   $(this).hide();
        // });

      });

    },

    setupSingleElement: function (onDone) {

      var initialOptions = this.processInitialOptions(),
        toggleBtnText = initialOptions && initialOptions.length ? initialOptions[0].text : this.options.placeholder;

      this.$el.addClass(this.options.singleModeClass);
      this.$controls = $('<div>').addClass(this.options.controlsClass);
      this.$toggleBtn = $('<div>').addClass(this.options.toggleButtonClass).text(toggleBtnText).appendTo(this.$el);
      this.$queryInput = $('<input>').attr('aria-describedby', this.id).attr('placeholder', this.options.searchPlaceholder).addClass(this.options.queryInputClass).appendTo(this.$controls);
      this.$inputHelptext = $('<p>').attr('id', this.id).addClass(this.options.inputHelptextClass).addClass('visually-hidden').text(this.helptextText).insertBefore(this.$controls);

      onDone.call(this);

    },

    setupMultipleElement: function (onDone) {

      var self = this,
        options = self.options,
        toggleBtnText = initialOptions && initialOptions.length ? initialOptions[0].text : this.options.placeholder,
        initialOptions = this.processInitialOptions();

      this.$el.addClass(options.multipleModeClass);
      this.$controls = $('<div>').addClass(options.controlsClass);
      this.$queryInput = $('<input>').attr({ 'aria-expanded': false, 'aria-activedescendant': '', 'aria-autocomplete': 'both', 'aria-describedby': 'fstHelptext-' + this.id }).attr('aria-owns', 'fstResults-' + this.id).addClass(options.queryInputClass).appendTo(this.$controls);
      this.$inputHelptext = $('<p>').attr('id', 'fstHelptext-' + this.id).addClass(this.options.inputHelptextClass).addClass('visually-hidden').text(this.helptextText).appendTo(this.$el);
      // this.$toggleBtn = $('<div>').addClass(this.options.toggleButtonClass).text(toggleBtnText).appendTo(this.$el);

      initialOptions && $.each(initialOptions, function (i, option) {

        self.addChoiceItem(option);

      });

      onDone.call(this);

    },

    updateDomElements: function () {

      this.$el.toggleClass(this.options.noneSelectedClass, !this.optionsCollection.hasSelectedValues());
      this.adjustQueryInputLayout();

    },

    processInitialOptions: function () {

      var self = this, options;

      if (this.hasCustomLoader) {

        options = this.options.initialValue;

        $.isPlainObject(options) && (options = [options]);

      } else {

        options = $.map(this.$input.find('option:selected').get(), function (option) {

          var $option = $(option);

          return {
            text: $option.text(),
            value: $option.attr('value')
          };

        });

      }

      options && $.each(options, function (i, option) {
        self.optionsCollection.setSelected(option);
      });

      return options;

    },

    addChoiceItem: function (optionModel) {

      $(
        '<div data-text="' + optionModel.text + '" data-value="' + optionModel.value + '" class="' + this.options.choiceItemClass + '">' +
        $('<div>').html(optionModel.text).text() +
        '<button class="' + this.options.choiceRemoveClass + '" type="button" aria-label="Item verwijderen: ' + optionModel.text+'">×</button>' +
        '</div>'
      ).insertBefore(this.$queryInput);
      this.setSelectChoiceToSelected(optionModel.value);

    },

    setSelectChoiceToSelected: function(value) {
      this.$input.find('option').each(function () {
        if( $(this).val() === value ) {
          $(this).attr('selected', true);
        }
      });
    },

    removeSelectChoiceToSelected: function (value) {
      this.$input.find('option').each(function () {
        if ($(this).val() === value) {
          $(this).attr('selected', false);
        }
      });
    },

    setupFastsearch: function () {

      var self = this,
        options = this.options,
        fastSearchParams = {};

      pickTo(fastSearchParams, options, [
        'resultsContClass', 'resultsOpenedClass', 'resultsFlippedClass', 'groupClass', 'itemClass', 'focusFirstItem',
        'groupTitleClass', 'loadingClass', 'noResultsClass', 'noResultsText', 'focusedItemClass', 'flipOnBottom'
      ]);

      this.fastsearch = new Fastsearch(this.$queryInput.get(0), $.extend(fastSearchParams, {

        wrapSelector: this.isMultiple ? this.$el : this.$controls,

        minQueryLength: 0,
        typeTimeout: this.hasCustomLoader ? options.typeTimeout : 0,
        preventSubmit: true,
        fillInputId: false,

        elementId: this.id,

        activeClass: this.options.activeClass,

        responseFormat: {
          label: 'text',
          groupCaption: 'label'
        },

        onItemSelect: function ($item, model, fastsearch) {

          var maxItems = options.maxItems;

          if (self.isMultiple && maxItems && (self.optionsCollection.getValues().length > (maxItems - 1))) {

            options.onMaxItemsReached && options.onMaxItemsReached(this);

          } else {

            self.setSelectedOption(model);
            self.writeToInput();
            !self.isMultiple && self.hide();
            options.clearQueryOnSelect && fastsearch.clear();

            if (self.userOptionAllowed && model.isUserOption) {
              fastsearch.$resultsCont.remove();
              delete fastsearch.$resultsCont;
              self.hide();
            }

            options.onItemSelect && options.onItemSelect.call(self, $item, model, self, fastsearch);

          }

        },

        onItemCreate: function ($item, model) {

          model.$item = $item;
          model.selected && $item.addClass(options.itemSelectedClass);

          if (self.userOptionAllowed && model.isUserOption) {
            $item.text(self.options.userOptionPrefix + $item.text()).addClass(self.options.userOptionClass);
          }

          options.onItemCreate && options.onItemCreate.call(self, $item, model, self);

        }

      }));

      this.fastsearch.getResults = function () {

        if (self.userOptionAllowed && self.$queryInput.val().length > 1) {
          self.renderOptions();
        }

        self.getOptions(function () {
          self.renderOptions(true);
        });

      };

    },

    getOptions: function (onDone) {

      var options = this.options,
        self = this,
        params = {};

      if (this.hasCustomLoader) {

        var query = $.trim(this.$queryInput.val());

        if (query && options.apiParam) {
          params[options.apiParam] = query;
        }

        this.optionsCollection.fetch(params, onDone);

      } else {

        !this.optionsCollection.models && this.optionsCollection.reset(this.gleanSelectData(this.$input));
        onDone();

      }

    },

    namespaceEvents: function (events) {

      return Fastsearch.prototype.namespaceEvents.call(this, events);

    },

    setupEvents: function () {

      var self = this,
        options = this.options;

      if (this.isMultiple) {

        this.$el.on(this.namespaceEvents('click'), function (e) {

          $(e.target).is(selectorFromClass(options.controlsClass)) && self.$queryInput.focus();

        });

        this.$queryInput.on(this.namespaceEvents('keyup'), function (e) {

          // if (self.$queryInput.val().length === 0 && e.keyCode === 8) {
          //     console.log('TODO implement delete');
          // }

          self.adjustQueryInputLayout();
          self.show();

        }).on(this.namespaceEvents('focus'), function () {

          self.show();

        });

        this.$el.on(this.namespaceEvents('click'), selectorFromClass(options.choiceRemoveClass), function (e) {

          var $choice = $(e.currentTarget).closest(selectorFromClass(options.choiceItemClass));

          self.removeSelectedOption({
            value: $choice.attr('data-value'),
            text: $choice.attr('data-text')
          }, $choice);

          // set focus on inputfield;
          $(selectorFromClass(options.queryInputClass)).focus();

        });

      } else {

        this.$el.on(this.namespaceEvents('click'), selectorFromClass(options.toggleButtonClass), function () {

          self.$el.hasClass(options.activeClass) ? self.hide() : self.show(true);

        });

      }

    },

    adjustQueryInputLayout: function () {

      if (this.isMultiple && this.$queryInput) {

        var noneSelected = this.$el.hasClass(this.options.noneSelectedClass);

        this.$queryInput.toggleClass(this.options.queryInputExpandedClass, noneSelected);

        if (noneSelected) {

          this.$queryInput.attr({
            style: '',
            placeholder: this.options.placeholder
          });

        } else {

          this.$fakeInput = this.$fakeInput || $('<span>').addClass(this.options.fakeInputClass);
          this.$fakeInput.text(this.$queryInput.val().replace(/\s/g, '&nbsp;'));
          this.$queryInput.removeAttr('placeholder').css('width', this.$fakeInput.insertAfter(this.$queryInput).width() + 20);
          this.$fakeInput.detach();

        }

      }

    },

    show: function (focus) {

      this.$el.addClass(this.options.activeClass);
      focus ? this.$queryInput.focus() : this.fastsearch.handleTyping();

      this.$queryInput.attr('aria-expanded', true);

      this.documentCancelEvents('on');

    },

    hide: function () {

      this.$queryInput.attr('aria-expanded', false);
      this.$queryInput.attr('aria-activedescendant', '');

      this.$el.removeClass(this.options.activeClass);

      this.documentCancelEvents('off');

    },

    documentCancelEvents: function (setup) {

      Fastsearch.prototype.documentCancelEvents.call(this, setup, this.hide);

    },

    setSelectedOption: function (option) {

      if (this.optionsCollection.isSelected(option.value)) {
        return;
      }

      this.optionsCollection.setSelected(option);

      var selectedModel = this.optionsCollection.findWhere(function (model) {
        return model.value === option.value;
      });

      if (this.isMultiple) {

        this.$controls && this.addChoiceItem(option);

      } else {

        this.fastsearch && this.fastsearch.$resultItems.removeClass(this.options.itemSelectedClass);
        this.$toggleBtn && this.$toggleBtn.text(option.text);

      }

      selectedModel && selectedModel.$item.addClass(this.options.itemSelectedClass);

      this.updateDomElements();

    },

    removeSelectedOption: function (option, $choiceItem) {

      var removedModel = this.optionsCollection.removeSelected(option);

      if (removedModel && removedModel.$item) {

        removedModel.$item.removeClass(this.options.itemSelectedClass);

      }

      if ($choiceItem) {
        $choiceItem.remove();
      } else {
        this.$el.find(selectorFromClass(this.options.choiceItemClass) + '[data-value="' + option.value + '"]').remove();
      }

      this.updateDomElements();
      this.writeToInput();
      this.removeSelectChoiceToSelected(option.value);

    },

    writeToInput: function () {

      var values = this.optionsCollection.getValues(),
        delimiter = this.options.valueDelimiter,
        formattedValue = this.isMultiple ? (this.hasCustomLoader ? values.join(delimiter) : values) : values[0];

      this.$input.val(formattedValue).trigger('change');

    },

    renderOptions: function (filter) {

      var query = this.$queryInput.val();
      var data;

      if (this.optionsCollection.models) {
        data = (filter ? this.optionsCollection.filter(query) : this.optionsCollection.models).slice(0);
      } else {
        data = [];
      }

      if (this.userOptionAllowed) {

        var queryInList = this.optionsCollection.models && this.optionsCollection.findWhere(function (model) {
          return model.value === query;
        });

        query && !queryInList && data.unshift({
          text: query,
          value: query,
          isUserOption: true
        });

      }

      this.fastsearch.showResults(this.fastsearch.storeResponse(data).generateResults(data));

    },

    gleanSelectData: function ($select) {

      var self = this,
        $elements = $select.children();

      if ($elements.eq(0).is('optgroup')) {

        return $.map($elements.get(), function (optgroup) {

          var $optgroup = $(optgroup);

          return {
            label: $optgroup.attr('label'),
            items: self.gleanOptionsData($optgroup.children())
          };

        });

      } else {

        return this.gleanOptionsData($elements);

      }

    },

    gleanOptionsData: function ($options) {

      return $.map($options.get(), function (option) {
        var $option = $(option);
        return {
          text: $option.text(),
          value: $option.attr('value'),
          selected: $option.is(':selected')
        };
      });

    },

    destroy: function () {

      $document.off(this.ens);
      this.fastsearch.destroy();
      this.$input.off(this.ens).detach().insertAfter(this.$el);
      this.$el.off(this.ens).remove();

      this.$input.data() && delete this.$input.data().fastselect;

    }

  });

  function OptionsCollection(options) {

    this.init(options);

  }

  $.extend(OptionsCollection.prototype, {

    defaults: {
      loadOnce: false,
      url: null,
      parseData: null,
      multipleValues: false,
      matcher: function (text, query) {

        return text.toLowerCase().indexOf(query.toLowerCase()) > -1;

      }
    },

    init: function (options) {

      this.options = $.extend({}, this.defaults, options);
      this.selectedValues = {};

    },

    fetch: function (fetchParams, onDone) {

      var self = this,
        afterFetch = function () {
          self.applySelectedValues(onDone);
        };

      if (this.options.loadOnce) {

        this.fetchDeferred = this.fetchDeferred || this.load(fetchParams);
        this.fetchDeferred.done(afterFetch);

      } else {
        this.load(fetchParams, afterFetch);
      }

    },

    reset: function (models) {

      this.models = this.options.parseData ? this.options.parseData(models) : models;
      this.applySelectedValues();

    },

    applySelectedValues: function (onDone) {

      this.each(function (option) {

        if (this.options.multipleValues && option.selected) {

          this.selectedValues[option.value] = true;

        } else {

          option.selected = !!this.selectedValues[option.value];

        }

      });

      onDone && onDone.call(this);

    },

    load: function (params, onDone) {

      var self = this,
        options = this.options;

      return $.get(options.url, params, function (data) {

        self.models = options.parseData ? options.parseData(data) : data;

        onDone && onDone.call(self);

      });

    },

    setSelected: function (option) {

      if (!this.options.multipleValues) {
        this.selectedValues = {};
      }

      this.selectedValues[option.value] = true;
      this.applySelectedValues();

    },

    removeSelected: function (option) {

      var model = this.findWhere(function (model) {
        return option.value === model.value;
      });

      model && (model.selected = false);

      delete this.selectedValues[option.value];

      return model;

    },

    isSelected: function (value) {

      return !!this.selectedValues[value];

    },

    hasSelectedValues: function () {

      return this.getValues().length > 0;

    },

    each: function (iterator) {

      var self = this;

      this.models && $.each(this.models, function (i, option) {

        option.items ? $.each(option.items, function (i, nestedOption) {
          iterator.call(self, nestedOption);
        }) : iterator.call(self, option);

      });

    },

    where: function (predicate) {

      var temp = [];

      this.each(function (option) {
        predicate(option) && temp.push(option);
      });

      return temp;

    },

    findWhere: function (predicate) {

      var models = this.where(predicate);

      return models.length ? models[0] : undefined;

    },

    filter: function (query) {

      var self = this;

      function checkItem(item) {
        return self.options.matcher(item.text, query) ? item : null;
      }

      if (!query || query.length === 0) {
        return this.models;
      }

      return $.map(this.models, function (item) {

        if (item.items) {

          var filteredItems = $.map(item.items, checkItem);

          return filteredItems.length ? {
            label: item.label,
            items: filteredItems
          } : null;

        } else {
          return checkItem(item);
        }

      });

    },

    getValues: function () {

      return $.map(this.selectedValues, function (prop, key) {
        return prop ? key : null;
      });

    }

  });

  Fastselect.defaults = {

    elementClass: 'fstElement',
    singleModeClass: 'fstSingleMode',
    noneSelectedClass: 'fstNoneSelected',
    multipleModeClass: 'fstMultipleMode',
    queryInputClass: 'fstQueryInput',
    inputHelptextClass: 'fstInputHelptext',
    queryInputExpandedClass: 'fstQueryInputExpanded',
    fakeInputClass: 'fstFakeInput',
    controlsClass: 'fstControls',
    toggleButtonClass: 'fstToggleBtn',
    activeClass: 'fstActive',
    itemSelectedClass: 'fstSelected',
    choiceItemClass: 'fstChoiceItem',
    choiceRemoveClass: 'fstChoiceRemove',
    userOptionClass: 'fstUserOption',

    resultsContClass: 'fstResults',
    resultsOpenedClass: 'fstResultsOpened',
    resultsFlippedClass: 'fstResultsFilpped',
    groupClass: 'fstGroup',
    itemClass: 'fstResultItem',
    groupTitleClass: 'fstGroupTitle',
    loadingClass: 'fstLoading',
    noResultsClass: 'fstNoResults',
    focusedItemClass: 'fstFocused',

    matcher: null,

    url: null,
    loadOnce: false,
    apiParam: 'query',
    initialValue: null,
    clearQueryOnSelect: true,
    minQueryLength: 1,
    focusFirstItem: false,
    flipOnBottom: true,
    typeTimeout: 150,
    userOptionAllowed: false,
    valueDelimiter: ',',
    maxItems: null,

    parseData: null,
    onItemSelect: null,
    onItemCreate: null,
    onMaxItemsReached: null,

    placeholder: 'Kies een optie',
    searchPlaceholder: 'Zoek opties',
    noResultsText: 'Geen resultaten',
    userOptionPrefix: 'Toevoegen '

  };

  $.Fastselect = Fastselect;
  $.Fastselect.OptionsCollection = OptionsCollection;

  $.fn.fastselect = function (options) {
    return this.each(function () {
      if (!$.data(this, 'fastselect')) {
        $.data(this, 'fastselect', new Fastselect(this, options));
      }
    });
  };

  return $;

}));

//! moment.js
//! version : 2.10.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Dc.apply(null,arguments)}function b(a){Dc=a}function c(a){return"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return za(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a);a._isValid=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(0/0);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=j(b)),"undefined"!=typeof b._locale&&(a._locale=b._locale),Fc.length>0)for(c in Fc)d=Fc[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function n(b){m(this,b),this._d=new Date(+b._d),Gc===!1&&(Gc=!0,a.updateOffset(this),Gc=!1)}function o(a){return a instanceof n||null!=a&&null!=a._isAMomentObject}function p(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function q(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&p(a[d])!==p(b[d]))&&g++;return g+f}function r(){}function s(a){return a?a.toLowerCase().replace("_","-"):a}function t(a){for(var b,c,d,e,f=0;f<a.length;){for(e=s(a[f]).split("-"),b=e.length,c=s(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=u(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&q(e,c,!0)>=b-1)break;b--}f++}return null}function u(a){var b=null;if(!Hc[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Ec._abbr,require("./locale/"+a),v(b)}catch(c){}return Hc[a]}function v(a,b){var c;return a&&(c="undefined"==typeof b?x(a):w(a,b),c&&(Ec=c)),Ec._abbr}function w(a,b){return null!==b?(b.abbr=a,Hc[a]||(Hc[a]=new r),Hc[a].set(b),v(a),Hc[a]):(delete Hc[a],null)}function x(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Ec;if(!c(a)){if(b=u(a))return b;a=[a]}return t(a)}function y(a,b){var c=a.toLowerCase();Ic[c]=Ic[c+"s"]=Ic[b]=a}function z(a){return"string"==typeof a?Ic[a]||Ic[a.toLowerCase()]:void 0}function A(a){var b,c,d={};for(c in a)f(a,c)&&(b=z(c),b&&(d[b]=a[c]));return d}function B(b,c){return function(d){return null!=d?(D(this,b,d),a.updateOffset(this,c),this):C(this,b)}}function C(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function D(a,b,c){return a._d["set"+(a._isUTC?"UTC":"")+b](c)}function E(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=z(a),"function"==typeof this[a])return this[a](b);return this}function F(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function G(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Mc[a]=e),b&&(Mc[b[0]]=function(){return F(e.apply(this,arguments),b[1],b[2])}),c&&(Mc[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function H(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function I(a){var b,c,d=a.match(Jc);for(b=0,c=d.length;c>b;b++)Mc[d[b]]?d[b]=Mc[d[b]]:d[b]=H(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function J(a,b){return a.isValid()?(b=K(b,a.localeData()),Lc[b]||(Lc[b]=I(b)),Lc[b](a)):a.localeData().invalidDate()}function K(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Kc.lastIndex=0;d>=0&&Kc.test(a);)a=a.replace(Kc,c),Kc.lastIndex=0,d-=1;return a}function L(a,b,c){_c[a]="function"==typeof b?b:function(a){return a&&c?c:b}}function M(a,b){return f(_c,a)?_c[a](b._strict,b._locale):new RegExp(N(a))}function N(a){return a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function O(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=p(a)}),c=0;c<a.length;c++)ad[a[c]]=d}function P(a,b){O(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function Q(a,b,c){null!=b&&f(ad,a)&&ad[a](b,c._a,c,a)}function R(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function S(a){return this._months[a.month()]}function T(a){return this._monthsShort[a.month()]}function U(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function V(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),R(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function W(b){return null!=b?(V(this,b),a.updateOffset(this,!0),this):C(this,"Month")}function X(){return R(this.year(),this.month())}function Y(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[cd]<0||c[cd]>11?cd:c[dd]<1||c[dd]>R(c[bd],c[cd])?dd:c[ed]<0||c[ed]>24||24===c[ed]&&(0!==c[fd]||0!==c[gd]||0!==c[hd])?ed:c[fd]<0||c[fd]>59?fd:c[gd]<0||c[gd]>59?gd:c[hd]<0||c[hd]>999?hd:-1,j(a)._overflowDayOfYear&&(bd>b||b>dd)&&(b=dd),j(a).overflow=b),a}function Z(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function $(a,b){var c=!0,d=a+"\n"+(new Error).stack;return g(function(){return c&&(Z(d),c=!1),b.apply(this,arguments)},b)}function _(a,b){kd[a]||(Z(b),kd[a]=!0)}function aa(a){var b,c,d=a._i,e=ld.exec(d);if(e){for(j(a).iso=!0,b=0,c=md.length;c>b;b++)if(md[b][1].exec(d)){a._f=md[b][0]+(e[6]||" ");break}for(b=0,c=nd.length;c>b;b++)if(nd[b][1].exec(d)){a._f+=nd[b][0];break}d.match(Yc)&&(a._f+="Z"),ta(a)}else a._isValid=!1}function ba(b){var c=od.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(aa(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function ca(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function da(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function ea(a){return fa(a)?366:365}function fa(a){return a%4===0&&a%100!==0||a%400===0}function ga(){return fa(this.year())}function ha(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=Aa(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ia(a){return ha(a,this._week.dow,this._week.doy).week}function ja(){return this._week.dow}function ka(){return this._week.doy}function la(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function ma(a){var b=ha(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function na(a,b,c,d,e){var f,g,h=da(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:ea(a-1)+g}}function oa(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function pa(a,b,c){return null!=a?a:null!=b?b:c}function qa(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function ra(a){var b,c,d,e,f=[];if(!a._d){for(d=qa(a),a._w&&null==a._a[dd]&&null==a._a[cd]&&sa(a),a._dayOfYear&&(e=pa(a._a[bd],d[bd]),a._dayOfYear>ea(e)&&(j(a)._overflowDayOfYear=!0),c=da(e,0,a._dayOfYear),a._a[cd]=c.getUTCMonth(),a._a[dd]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[ed]&&0===a._a[fd]&&0===a._a[gd]&&0===a._a[hd]&&(a._nextDay=!0,a._a[ed]=0),a._d=(a._useUTC?da:ca).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[ed]=24)}}function sa(a){var b,c,d,e,f,g,h;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=pa(b.GG,a._a[bd],ha(Aa(),1,4).year),d=pa(b.W,1),e=pa(b.E,1)):(f=a._locale._week.dow,g=a._locale._week.doy,c=pa(b.gg,a._a[bd],ha(Aa(),f,g).year),d=pa(b.w,1),null!=b.d?(e=b.d,f>e&&++d):e=null!=b.e?b.e+f:f),h=na(c,d,e,g,f),a._a[bd]=h.year,a._dayOfYear=h.dayOfYear}function ta(b){if(b._f===a.ISO_8601)return void aa(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=K(b._f,b._locale).match(Jc)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(M(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),Mc[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),Q(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[ed]<=12&&b._a[ed]>0&&(j(b).bigHour=void 0),b._a[ed]=ua(b._locale,b._a[ed],b._meridiem),ra(b),Y(b)}function ua(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function va(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(0/0));for(e=0;e<a._f.length;e++)f=0,b=m({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],ta(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function wa(a){if(!a._d){var b=A(a._i);a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],ra(a)}}function xa(a){var b,e=a._i,f=a._f;return a._locale=a._locale||x(a._l),null===e||void 0===f&&""===e?l({nullInput:!0}):("string"==typeof e&&(a._i=e=a._locale.preparse(e)),o(e)?new n(Y(e)):(c(f)?va(a):f?ta(a):d(e)?a._d=e:ya(a),b=new n(Y(a)),b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b))}function ya(b){var f=b._i;void 0===f?b._d=new Date:d(f)?b._d=new Date(+f):"string"==typeof f?ba(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),ra(b)):"object"==typeof f?wa(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function za(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,xa(f)}function Aa(a,b,c,d){return za(a,b,c,d,!1)}function Ba(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Aa();for(d=b[0],e=1;e<b.length;++e)b[e][a](d)&&(d=b[e]);return d}function Ca(){var a=[].slice.call(arguments,0);return Ba("isBefore",a)}function Da(){var a=[].slice.call(arguments,0);return Ba("isAfter",a)}function Ea(a){var b=A(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=x(),this._bubble()}function Fa(a){return a instanceof Ea}function Ga(a,b){G(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+F(~~(a/60),2)+b+F(~~a%60,2)})}function Ha(a){var b=(a||"").match(Yc)||[],c=b[b.length-1]||[],d=(c+"").match(td)||["-",0,0],e=+(60*d[1])+p(d[2]);return"+"===d[0]?e:-e}function Ia(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(o(b)||d(b)?+b:+Aa(b))-+e,e._d.setTime(+e._d+f),a.updateOffset(e,!1),e):Aa(b).local();return c._isUTC?Aa(b).zone(c._offset||0):Aa(b).local()}function Ja(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Ka(b,c){var d,e=this._offset||0;return null!=b?("string"==typeof b&&(b=Ha(b)),Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ja(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?$a(this,Va(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ja(this)}function La(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Ma(a){return this.utcOffset(0,a)}function Na(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ja(this),"m")),this}function Oa(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ha(this._i)),this}function Pa(a){return a=a?Aa(a).utcOffset():0,(this.utcOffset()-a)%60===0}function Qa(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ra(){if(this._a){var a=this._isUTC?h(this._a):Aa(this._a);return this.isValid()&&q(this._a,a.toArray())>0}return!1}function Sa(){return!this._isUTC}function Ta(){return this._isUTC}function Ua(){return this._isUTC&&0===this._offset}function Va(a,b){var c,d,e,g=a,h=null;return Fa(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=ud.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:p(h[dd])*c,h:p(h[ed])*c,m:p(h[fd])*c,s:p(h[gd])*c,ms:p(h[hd])*c}):(h=vd.exec(a))?(c="-"===h[1]?-1:1,g={y:Wa(h[2],c),M:Wa(h[3],c),d:Wa(h[4],c),h:Wa(h[5],c),m:Wa(h[6],c),s:Wa(h[7],c),w:Wa(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=Ya(Aa(g.from),Aa(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Ea(g),Fa(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function Wa(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Xa(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Ya(a,b){var c;return b=Ia(b,a),a.isBefore(b)?c=Xa(a,b):(c=Xa(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function Za(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(_(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Va(c,d),$a(this,e,a),this}}function $a(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&D(b,"Date",C(b,"Date")+g*d),h&&V(b,C(b,"Month")+h*d),e&&a.updateOffset(b,g||h)}function _a(a){var b=a||Aa(),c=Ia(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,Aa(b)))}function ab(){return new n(this)}function bb(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Aa(a),+this>+a):(c=o(a)?+a:+Aa(a),c<+this.clone().startOf(b))}function cb(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Aa(a),+a>+this):(c=o(a)?+a:+Aa(a),+this.clone().endOf(b)<c)}function db(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function eb(a,b){var c;return b=z(b||"millisecond"),"millisecond"===b?(a=o(a)?a:Aa(a),+this===+a):(c=+Aa(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))}function fb(a){return 0>a?Math.ceil(a):Math.floor(a)}function gb(a,b,c){var d,e,f=Ia(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=z(b),"year"===b||"month"===b||"quarter"===b?(e=hb(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:fb(e)}function hb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function ib(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function jb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():J(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):J(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function kb(b){var c=J(this,b||a.defaultFormat);return this.localeData().postformat(c)}function lb(a,b){return this.isValid()?Va({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function mb(a){return this.from(Aa(),a)}function nb(a,b){return this.isValid()?Va({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ob(a){return this.to(Aa(),a)}function pb(a){var b;return void 0===a?this._locale._abbr:(b=x(a),null!=b&&(this._locale=b),this)}function qb(){return this._locale}function rb(a){switch(a=z(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function sb(a){return a=z(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function tb(){return+this._d-6e4*(this._offset||0)}function ub(){return Math.floor(+this/1e3)}function vb(){return this._offset?new Date(+this):this._d}function wb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function xb(){return k(this)}function yb(){return g({},j(this))}function zb(){return j(this).overflow}function Ab(a,b){G(0,[a,a.length],0,b)}function Bb(a,b,c){return ha(Aa([a,11,31+b-c]),b,c).week}function Cb(a){var b=ha(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")}function Db(a){var b=ha(this,1,4).year;return null==a?b:this.add(a-b,"y")}function Eb(){return Bb(this.year(),1,4)}function Fb(){var a=this.localeData()._week;return Bb(this.year(),a.dow,a.doy)}function Gb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Hb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function Ib(a){return this._weekdays[a.day()]}function Jb(a){return this._weekdaysShort[a.day()]}function Kb(a){return this._weekdaysMin[a.day()]}function Lb(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=Aa([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b}function Mb(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Hb(a,this.localeData()),this.add(a-b,"d")):b}function Nb(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ob(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)}function Pb(a,b){G(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Qb(a,b){return b._meridiemParse}function Rb(a){return"p"===(a+"").toLowerCase().charAt(0)}function Sb(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Tb(a){G(0,[a,3],0,"millisecond")}function Ub(){return this._isUTC?"UTC":""}function Vb(){return this._isUTC?"Coordinated Universal Time":""}function Wb(a){return Aa(1e3*a)}function Xb(){return Aa.apply(null,arguments).parseZone()}function Yb(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.call(b,c):d}function Zb(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b}function $b(){return this._invalidDate}function _b(a){return this._ordinal.replace("%d",a)}function ac(a){return a}function bc(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)}function cc(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)}function dc(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function ec(a,b,c,d){var e=x(),f=h().set(d,b);return e[c](f,a)}function fc(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return ec(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=ec(a,f,c,e);return g}function gc(a,b){return fc(a,b,"months",12,"month")}function hc(a,b){return fc(a,b,"monthsShort",12,"month")}function ic(a,b){return fc(a,b,"weekdays",7,"day")}function jc(a,b){return fc(a,b,"weekdaysShort",7,"day")}function kc(a,b){return fc(a,b,"weekdaysMin",7,"day")}function lc(){var a=this._data;return this._milliseconds=Rd(this._milliseconds),this._days=Rd(this._days),this._months=Rd(this._months),a.milliseconds=Rd(a.milliseconds),a.seconds=Rd(a.seconds),a.minutes=Rd(a.minutes),a.hours=Rd(a.hours),a.months=Rd(a.months),a.years=Rd(a.years),this}function mc(a,b,c,d){var e=Va(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function nc(a,b){return mc(this,a,b,1)}function oc(a,b){return mc(this,a,b,-1)}function pc(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;return g.milliseconds=d%1e3,a=fb(d/1e3),g.seconds=a%60,b=fb(a/60),g.minutes=b%60,c=fb(b/60),g.hours=c%24,e+=fb(c/24),h=fb(qc(e)),e-=fb(rc(h)),f+=fb(e/30),e%=30,h+=fb(f/12),f%=12,g.days=e,g.months=f,g.years=h,this}function qc(a){return 400*a/146097}function rc(a){return 146097*a/400}function sc(a){var b,c,d=this._milliseconds;if(a=z(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+12*qc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(rc(this._months/12)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function tc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*p(this._months/12)}function uc(a){return function(){return this.as(a)}}function vc(a){return a=z(a),this[a+"s"]()}function wc(a){return function(){return this._data[a]}}function xc(){return fb(this.days()/7)}function yc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function zc(a,b,c){var d=Va(a).abs(),e=fe(d.as("s")),f=fe(d.as("m")),g=fe(d.as("h")),h=fe(d.as("d")),i=fe(d.as("M")),j=fe(d.as("y")),k=e<ge.s&&["s",e]||1===f&&["m"]||f<ge.m&&["mm",f]||1===g&&["h"]||g<ge.h&&["hh",g]||1===h&&["d"]||h<ge.d&&["dd",h]||1===i&&["M"]||i<ge.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,yc.apply(null,k)}function Ac(a,b){return void 0===ge[a]?!1:void 0===b?ge[a]:(ge[a]=b,!0)}function Bc(a){var b=this.localeData(),c=zc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function Cc(){var a=he(this.years()),b=he(this.months()),c=he(this.days()),d=he(this.hours()),e=he(this.minutes()),f=he(this.seconds()+this.milliseconds()/1e3),g=this.asSeconds();return g?(0>g?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}var Dc,Ec,Fc=a.momentProperties=[],Gc=!1,Hc={},Ic={},Jc=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Kc=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Lc={},Mc={},Nc=/\d/,Oc=/\d\d/,Pc=/\d{3}/,Qc=/\d{4}/,Rc=/[+-]?\d{6}/,Sc=/\d\d?/,Tc=/\d{1,3}/,Uc=/\d{1,4}/,Vc=/[+-]?\d{1,6}/,Wc=/\d+/,Xc=/[+-]?\d+/,Yc=/Z|[+-]\d\d:?\d\d/gi,Zc=/[+-]?\d+(\.\d{1,3})?/,$c=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,_c={},ad={},bd=0,cd=1,dd=2,ed=3,fd=4,gd=5,hd=6;G("M",["MM",2],"Mo",function(){return this.month()+1}),G("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),G("MMMM",0,0,function(a){return this.localeData().months(this,a)}),y("month","M"),L("M",Sc),L("MM",Sc,Oc),L("MMM",$c),L("MMMM",$c),O(["M","MM"],function(a,b){b[cd]=p(a)-1}),O(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[cd]=e:j(c).invalidMonth=a});var id="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),jd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),kd={};a.suppressDeprecationWarnings=!1;var ld=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,md=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],nd=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],od=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=$("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),G(0,["YY",2],0,function(){return this.year()%100}),G(0,["YYYY",4],0,"year"),G(0,["YYYYY",5],0,"year"),G(0,["YYYYYY",6,!0],0,"year"),y("year","y"),L("Y",Xc),L("YY",Sc,Oc),L("YYYY",Uc,Qc),L("YYYYY",Vc,Rc),L("YYYYYY",Vc,Rc),O(["YYYY","YYYYY","YYYYYY"],bd),O("YY",function(b,c){c[bd]=a.parseTwoDigitYear(b)}),a.parseTwoDigitYear=function(a){return p(a)+(p(a)>68?1900:2e3)};var pd=B("FullYear",!1);G("w",["ww",2],"wo","week"),G("W",["WW",2],"Wo","isoWeek"),y("week","w"),y("isoWeek","W"),L("w",Sc),L("ww",Sc,Oc),L("W",Sc),L("WW",Sc,Oc),P(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=p(a)});var qd={dow:0,doy:6};G("DDD",["DDDD",3],"DDDo","dayOfYear"),y("dayOfYear","DDD"),L("DDD",Tc),L("DDDD",Pc),O(["DDD","DDDD"],function(a,b,c){c._dayOfYear=p(a)}),a.ISO_8601=function(){};var rd=$("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Aa.apply(null,arguments);return this>a?this:a}),sd=$("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Aa.apply(null,arguments);return a>this?this:a});Ga("Z",":"),Ga("ZZ",""),L("Z",Yc),L("ZZ",Yc),O(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ha(a)});var td=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var ud=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,vd=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Va.fn=Ea.prototype;var wd=Za(1,"add"),xd=Za(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var yd=$("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});G(0,["gg",2],0,function(){return this.weekYear()%100}),G(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ab("gggg","weekYear"),Ab("ggggg","weekYear"),Ab("GGGG","isoWeekYear"),Ab("GGGGG","isoWeekYear"),y("weekYear","gg"),y("isoWeekYear","GG"),L("G",Xc),L("g",Xc),L("GG",Sc,Oc),L("gg",Sc,Oc),L("GGGG",Uc,Qc),L("gggg",Uc,Qc),L("GGGGG",Vc,Rc),L("ggggg",Vc,Rc),P(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=p(a)}),P(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),G("Q",0,0,"quarter"),y("quarter","Q"),L("Q",Nc),O("Q",function(a,b){b[cd]=3*(p(a)-1)}),G("D",["DD",2],"Do","date"),y("date","D"),L("D",Sc),L("DD",Sc,Oc),L("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),O(["D","DD"],dd),O("Do",function(a,b){b[dd]=p(a.match(Sc)[0],10)});var zd=B("Date",!0);G("d",0,"do","day"),G("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),G("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),G("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),G("e",0,0,"weekday"),G("E",0,0,"isoWeekday"),y("day","d"),y("weekday","e"),y("isoWeekday","E"),L("d",Sc),L("e",Sc),L("E",Sc),L("dd",$c),L("ddd",$c),L("dddd",$c),P(["dd","ddd","dddd"],function(a,b,c){var d=c._locale.weekdaysParse(a);null!=d?b.d=d:j(c).invalidWeekday=a}),P(["d","e","E"],function(a,b,c,d){b[d]=p(a)});var Ad="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Bd="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Cd="Su_Mo_Tu_We_Th_Fr_Sa".split("_");G("H",["HH",2],0,"hour"),G("h",["hh",2],0,function(){return this.hours()%12||12}),Pb("a",!0),Pb("A",!1),y("hour","h"),L("a",Qb),L("A",Qb),L("H",Sc),L("h",Sc),L("HH",Sc,Oc),L("hh",Sc,Oc),O(["H","HH"],ed),O(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),O(["h","hh"],function(a,b,c){b[ed]=p(a),j(c).bigHour=!0});var Dd=/[ap]\.?m?\.?/i,Ed=B("Hours",!0);G("m",["mm",2],0,"minute"),y("minute","m"),L("m",Sc),L("mm",Sc,Oc),O(["m","mm"],fd);var Fd=B("Minutes",!1);G("s",["ss",2],0,"second"),y("second","s"),L("s",Sc),L("ss",Sc,Oc),O(["s","ss"],gd);var Gd=B("Seconds",!1);G("S",0,0,function(){return~~(this.millisecond()/100)}),G(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),Tb("SSS"),Tb("SSSS"),y("millisecond","ms"),L("S",Tc,Nc),L("SS",Tc,Oc),L("SSS",Tc,Pc),L("SSSS",Wc),O(["S","SS","SSS","SSSS"],function(a,b){b[hd]=p(1e3*("0."+a))});var Hd=B("Milliseconds",!1);G("z",0,0,"zoneAbbr"),G("zz",0,0,"zoneName");var Id=n.prototype;Id.add=wd,Id.calendar=_a,Id.clone=ab,Id.diff=gb,Id.endOf=sb,Id.format=kb,Id.from=lb,Id.fromNow=mb,Id.to=nb,Id.toNow=ob,Id.get=E,Id.invalidAt=zb,Id.isAfter=bb,Id.isBefore=cb,Id.isBetween=db,Id.isSame=eb,Id.isValid=xb,Id.lang=yd,Id.locale=pb,Id.localeData=qb,Id.max=sd,Id.min=rd,Id.parsingFlags=yb,Id.set=E,Id.startOf=rb,Id.subtract=xd,Id.toArray=wb,Id.toDate=vb,Id.toISOString=jb,Id.toJSON=jb,Id.toString=ib,Id.unix=ub,Id.valueOf=tb,Id.year=pd,Id.isLeapYear=ga,Id.weekYear=Cb,Id.isoWeekYear=Db,Id.quarter=Id.quarters=Gb,Id.month=W,Id.daysInMonth=X,Id.week=Id.weeks=la,Id.isoWeek=Id.isoWeeks=ma,Id.weeksInYear=Fb,Id.isoWeeksInYear=Eb,Id.date=zd,Id.day=Id.days=Mb,Id.weekday=Nb,Id.isoWeekday=Ob,Id.dayOfYear=oa,Id.hour=Id.hours=Ed,Id.minute=Id.minutes=Fd,Id.second=Id.seconds=Gd,Id.millisecond=Id.milliseconds=Hd,Id.utcOffset=Ka,Id.utc=Ma,Id.local=Na,Id.parseZone=Oa,Id.hasAlignedHourOffset=Pa,Id.isDST=Qa,Id.isDSTShifted=Ra,Id.isLocal=Sa,Id.isUtcOffset=Ta,Id.isUtc=Ua,Id.isUTC=Ua,Id.zoneAbbr=Ub,Id.zoneName=Vb,Id.dates=$("dates accessor is deprecated. Use date instead.",zd),Id.months=$("months accessor is deprecated. Use month instead",W),Id.years=$("years accessor is deprecated. Use year instead",pd),Id.zone=$("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",La);var Jd=Id,Kd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ld={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},Md="Invalid date",Nd="%d",Od=/\d{1,2}/,Pd={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",
hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Qd=r.prototype;Qd._calendar=Kd,Qd.calendar=Yb,Qd._longDateFormat=Ld,Qd.longDateFormat=Zb,Qd._invalidDate=Md,Qd.invalidDate=$b,Qd._ordinal=Nd,Qd.ordinal=_b,Qd._ordinalParse=Od,Qd.preparse=ac,Qd.postformat=ac,Qd._relativeTime=Pd,Qd.relativeTime=bc,Qd.pastFuture=cc,Qd.set=dc,Qd.months=S,Qd._months=id,Qd.monthsShort=T,Qd._monthsShort=jd,Qd.monthsParse=U,Qd.week=ia,Qd._week=qd,Qd.firstDayOfYear=ka,Qd.firstDayOfWeek=ja,Qd.weekdays=Ib,Qd._weekdays=Ad,Qd.weekdaysMin=Kb,Qd._weekdaysMin=Cd,Qd.weekdaysShort=Jb,Qd._weekdaysShort=Bd,Qd.weekdaysParse=Lb,Qd.isPM=Rb,Qd._meridiemParse=Dd,Qd.meridiem=Sb,v("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===p(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=$("moment.lang is deprecated. Use moment.locale instead.",v),a.langData=$("moment.langData is deprecated. Use moment.localeData instead.",x);var Rd=Math.abs,Sd=uc("ms"),Td=uc("s"),Ud=uc("m"),Vd=uc("h"),Wd=uc("d"),Xd=uc("w"),Yd=uc("M"),Zd=uc("y"),$d=wc("milliseconds"),_d=wc("seconds"),ae=wc("minutes"),be=wc("hours"),ce=wc("days"),de=wc("months"),ee=wc("years"),fe=Math.round,ge={s:45,m:45,h:22,d:26,M:11},he=Math.abs,ie=Ea.prototype;ie.abs=lc,ie.add=nc,ie.subtract=oc,ie.as=sc,ie.asMilliseconds=Sd,ie.asSeconds=Td,ie.asMinutes=Ud,ie.asHours=Vd,ie.asDays=Wd,ie.asWeeks=Xd,ie.asMonths=Yd,ie.asYears=Zd,ie.valueOf=tc,ie._bubble=pc,ie.get=vc,ie.milliseconds=$d,ie.seconds=_d,ie.minutes=ae,ie.hours=be,ie.days=ce,ie.weeks=xc,ie.months=de,ie.years=ee,ie.humanize=Bc,ie.toISOString=Cc,ie.toString=Cc,ie.toJSON=Cc,ie.locale=pb,ie.localeData=qb,ie.toIsoString=$("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Cc),ie.lang=yd,G("X",0,0,"unix"),G("x",0,0,"valueOf"),L("x",Xc),L("X",Zc),O("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),O("x",function(a,b,c){c._d=new Date(p(a))}),a.version="2.10.3",b(Aa),a.fn=Jd,a.min=Ca,a.max=Da,a.utc=h,a.unix=Wb,a.months=gc,a.isDate=d,a.locale=v,a.invalid=l,a.duration=Va,a.isMoment=o,a.weekdays=ic,a.parseZone=Xb,a.localeData=x,a.isDuration=Fa,a.monthsShort=hc,a.weekdaysMin=kc,a.defineLocale=w,a.weekdaysShort=jc,a.normalizeUnits=z,a.relativeTimeThreshold=Ac;var je=a;return je});

/* MIT License

Copyright (c) 2016 Dollar Shave Club, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

stickybits
@version v3.6.2
**/
!function (t, s) { "object" == typeof exports && "undefined" != typeof module ? module.exports = s() : "function" == typeof define && define.amd ? define(s) : (t = t || self).stickybits = s() }(this, function () { "use strict"; var e = function () { function t(t, s) { var e = void 0 !== s ? s : {}; this.version = "3.6.2", this.userAgent = window.navigator.userAgent || "no `userAgent` provided by the browser", this.props = { customStickyChangeNumber: e.customStickyChangeNumber || null, noStyles: e.noStyles || !1, stickyBitStickyOffset: e.stickyBitStickyOffset || 0, parentClass: e.parentClass || "js-stickybit-parent", scrollEl: "string" == typeof e.scrollEl ? document.querySelector(e.scrollEl) : e.scrollEl || window, stickyClass: e.stickyClass || "js-is-sticky", stuckClass: e.stuckClass || "js-is-stuck", stickyChangeClass: e.stickyChangeClass || "js-is-sticky--change", useStickyClasses: e.useStickyClasses || !1, useFixed: e.useFixed || !1, useGetBoundingClientRect: e.useGetBoundingClientRect || !1, verticalPosition: e.verticalPosition || "top" }, this.props.positionVal = this.definePosition() || "fixed", this.instances = []; var i = this.props, n = i.positionVal, o = i.verticalPosition, r = i.noStyles, a = i.stickyBitStickyOffset, l = i.useStickyClasses, c = "top" !== o || r ? "" : a + "px", u = "fixed" !== n ? n : ""; this.els = "string" == typeof t ? document.querySelectorAll(t) : t, "length" in this.els || (this.els = [this.els]); for (var f = 0; f < this.els.length; f++) { var p = this.els[f]; if (p.style[o] = c, p.style.position = u, "fixed" === n || l) { var h = this.addInstance(p, this.props); this.instances.push(h) } } } var s = t.prototype; return s.definePosition = function () { var t; if (this.props.useFixed) t = "fixed"; else { for (var s = ["", "-o-", "-webkit-", "-moz-", "-ms-"], e = document.head.style, i = 0; i < s.length; i += 1)e.position = s[i] + "sticky"; t = e.position ? e.position : "fixed", e.position = "" } return t }, s.addInstance = function (t, s) { var e = this, i = { el: t, parent: t.parentNode, props: s }; this.isWin = this.props.scrollEl === window; var n = this.isWin ? window : this.getClosestParent(i.el, i.props.scrollEl); return this.computeScrollOffsets(i), i.parent.className += " " + s.parentClass, i.state = "default", i.stateContainer = function () { return e.manageState(i) }, n.addEventListener("scroll", i.stateContainer), i }, s.getClosestParent = function (t, s) { var e = s, i = t; if (i.parentElement === e) return e; for (; i.parentElement !== e;)i = i.parentElement; return e }, s.getTopPosition = function (t) { if (this.props.useGetBoundingClientRect) return t.getBoundingClientRect().top + (this.props.scrollEl.pageYOffset || document.documentElement.scrollTop); for (var s = 0; s = t.offsetTop + s, t = t.offsetParent;); return s }, s.computeScrollOffsets = function (t) { var s = t, e = s.props, i = s.el, n = s.parent, o = !this.isWin && "fixed" === e.positionVal, r = "bottom" !== e.verticalPosition, a = o ? this.getTopPosition(e.scrollEl) : 0, l = o ? this.getTopPosition(n) - a : this.getTopPosition(n), c = null !== e.customStickyChangeNumber ? e.customStickyChangeNumber : i.offsetHeight, u = l + n.offsetHeight; return s.offset = a + e.stickyBitStickyOffset, s.stickyStart = r ? l - s.offset : 0, s.stickyChange = s.stickyStart + c, s.stickyStop = r ? u - (i.offsetHeight + s.offset) : u - window.innerHeight, s }, s.toggleClasses = function (t, s, e) { var i = t, n = i.className.split(" "); e && -1 === n.indexOf(e) && n.push(e); var o = n.indexOf(s); -1 !== o && n.splice(o, 1), i.className = n.join(" ") }, s.manageState = function (t) { var s = t, e = s.el, i = s.props, n = s.state, o = s.stickyStart, r = s.stickyChange, a = s.stickyStop, l = e.style, c = i.noStyles, u = i.positionVal, f = i.scrollEl, p = i.stickyClass, h = i.stickyChangeClass, d = i.stuckClass, y = i.verticalPosition, k = "bottom" !== y, m = function (t) { t() }, g = this.isWin && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame) || m, v = this.toggleClasses, C = this.isWin ? window.scrollY || window.pageYOffset : f.scrollTop, S = k && C <= o && ("sticky" === n || "stuck" === n), w = a <= C && "sticky" === n; o < C && C < a && ("default" === n || "stuck" === n) ? (s.state = "sticky", g(function () { v(e, d, p), l.position = u, c || (l.bottom = "", l[y] = i.stickyBitStickyOffset + "px") })) : S ? (s.state = "default", g(function () { v(e, p), v(e, d), "fixed" === u && (l.position = "") })) : w && (s.state = "stuck", g(function () { v(e, p, d), "fixed" !== u || c || (l.top = "", l.bottom = "0", l.position = "absolute") })); var b = r <= C && C <= a; return C < r / 2 || a < C ? g(function () { v(e, h) }) : b && g(function () { v(e, "stub", h) }), s }, s.update = function (t) { void 0 === t && (t = null); for (var s = 0; s < this.instances.length; s += 1) { var e = this.instances[s]; if (this.computeScrollOffsets(e), t) for (var i in t) e.props[i] = t[i] } return this }, s.removeInstance = function (t) { var s = t.el, e = t.props, i = this.toggleClasses; s.style.position = "", s.style[e.verticalPosition] = "", i(s, e.stickyClass), i(s, e.stuckClass), i(s.parentNode, e.parentClass) }, s.cleanup = function () { for (var t = 0; t < this.instances.length; t += 1) { var s = this.instances[t]; s.props.scrollEl.removeEventListener("scroll", s.stateContainer), this.removeInstance(s) } this.manageState = !1, this.instances = [] }, t }(); return function (t, s) { return new e(t, s) } });

$(document).ready(function () {

  /*
   * jQuery accessible and keyboard-enhanced autocomplete list
   * @version v1.6.1
   * Website: https://a11y.nicolas-hoffmann.net/autocomplet-list/
   * License MIT: https://github.com/nico3333fr/jquery-accessible-autocomplete-list-aria/blob/master/LICENSE
   */
  // loading combobox ------------------------------------------------------------------------------------------------------------
  // init
  var $js_combobox = $('.js-combobox'),
    $body = $('body'),
    default_text_help = 'Use tabulation (or down) key to access and browse suggestions after input. Confirm your choice with enter key, or esc key to close suggestions box.',
    default_class_for_invisible_text = 'visually-hidden',
    suggestion_single = 'There is ',
    suggestion_plural = 'There are ',
    suggestion_word = 'suggestion',
    prefix_class = 'combobox-',
    suggestion_word_plural = 'suggestions',
    button_clear_title = 'clear this field',
    button_clear_text = 'X',
    case_sensitive = 'no',
    min_length = 0,
    limit_number_suggestions = 666,
    search_option = 'containing', // or 'containing'
    see_more_text = 'See more results…',
    tablo_suggestions = [];
    tablo_suggestions_label = [];


  function do_see_more_option() {
    var $output_content = $('#js-codeit');
    $output_content.html('You have to code a function or a redirection to display more results ;)');
  }
  function fill_hidden_field(field, val){
    $body.find('.' + field).val(val);
  }
  function clear_hidden_field(field){
    $body.find('.' + field).val('');
  }

  if ($js_combobox.length) { // if there are at least one :)

    // init
    $js_combobox.each(function (index_combo) {
      var $this = $(this),
        $this_id = $this.attr('id'),
        $label_this = $('label[for="' + $this_id + '"]'),
        index_lisible = index_combo + 1,
        options = $this.data(),
        $combobox_prefix_class = typeof options.comboboxPrefixClass !== 'undefined' ? options.comboboxPrefixClass + '-' : prefix_class,
        $combobox_help_text = typeof options.comboboxHelpText !== 'undefined' ? options.comboboxHelpText : default_text_help,
        $list_suggestions = $('#' + $this.attr('list')),
        $combobox_button_title = typeof options.comboboxButtonTitle !== 'undefined' ? options.comboboxButtonTitle : button_clear_title,
        $combobox_button_text = typeof options.comboboxButtonText !== 'undefined' ? options.comboboxButtonText : button_clear_text,
        $combobox_case_sensitive = typeof options.comboboxCaseSensitive !== 'undefined' ? options.comboboxCaseSensitive : case_sensitive,
        tablo_temp_suggestions = [],
        tablo_temp_suggestions_label = [];

      // input
      $this.attr({
        'data-number': index_lisible,
        'autocorrect': 'off',
        'autocapitalize': 'off',
        'spellcheck': 'false',
        'autocomplete': 'off',
        'aria-describedby': $combobox_prefix_class + 'help-text' + index_lisible,
        'aria-autocomplete': 'list',
        'data-lastval': '',
        'aria-owns': $combobox_prefix_class + 'suggest_' + index_lisible
      });
      // stock into tables
      $list_suggestions.find('option').each(function (index_option, index_element) {
        tablo_temp_suggestions.push(index_element.value);
        tablo_temp_suggestions_label.push($(index_element).html());
      });
      if ($combobox_case_sensitive === 'no') {
        // order case tablo_temp_suggestions
        // tablo_suggestions[index_lisible] = tablo_temp_suggestions.sort(function (a, b) {
        //   a = a.toLowerCase();
        //   b = b.toLowerCase();
        //   if (a == b) {
        //     return 0;
        //   }
        //   if (a > b) {
        //     return 1;
        //   }
        //   return -1;
        // });
        tablo_suggestions[index_lisible] = tablo_temp_suggestions;
        tablo_suggestions_label[index_lisible] = tablo_temp_suggestions_label;
      } else {
        // tablo_suggestions[index_lisible] = tablo_temp_suggestions.sort();
        tablo_suggestions[index_lisible] = tablo_temp_suggestions;
        tablo_suggestions_label[index_lisible] = tablo_temp_suggestions_label;
      }


      // wrap into a container
      $this.wrap('<div class="' + $combobox_prefix_class + 'container js-container" data-combobox-prefix-class="' + $combobox_prefix_class + '"></div>');

      var $combobox_container = $this.parent();

      // custom datalist/listbox linked to input
      $combobox_container.append('<div id="' + $combobox_prefix_class + 'suggest_' + index_lisible + '" class="js-suggest ' + $combobox_prefix_class + 'suggestions"><div role="listbox"></div></div>');
      $list_suggestions.remove();

      // status zone
      $combobox_container.prepend('<div id="' + $combobox_prefix_class + 'suggestion-text' + index_lisible + '" class="js-suggestion-text ' + $combobox_prefix_class + 'suggestion-text ' + default_class_for_invisible_text + '" aria-live="assertive"></div>');

      // help text
      $combobox_container.prepend('<span id="' + $combobox_prefix_class + 'help-text' + index_lisible + '" class="' + $combobox_prefix_class + 'help-text ' + default_class_for_invisible_text + '">' + $combobox_help_text + '</span>');

      // label id
      $label_this.attr('id', 'label-id-' + $this_id);

      // button clear
      $this.after('<button class="js-clear-button visually-hidden ' + $combobox_prefix_class + 'clear-button" aria-label="' + $combobox_button_title + '" title="' + $combobox_button_title + '" aria-describedby="label-id-' + $this_id + '" type="button"><span>' + $combobox_button_text + '</span></button>');

    });


    // listeners
    // keydown on field
    $body.on('keyup', '.js-combobox', function (event) {
      var $this = $(this),
        options_combo = $this.data(),
        $container = $this.parent(),
        $form = $container.parents('form'),
        options = $container.data(),
        $combobox_prefix_class = typeof options.comboboxPrefixClass !== 'undefined' ? options.comboboxPrefixClass : '', // no "-"" because already generated
        $suggestions = $container.find('.js-suggest div'),
        //$suggestion_list = $suggestions.find('.js-suggestion'),
        $suggestions_text = $container.find('.js-suggestion-text'),
        $combobox_suggestion_single = typeof options_combo.suggestionSingle !== 'undefined' ? options_combo.suggestionSingle : suggestion_single,
        $combobox_suggestion_plural = typeof options_combo.suggestionPlural !== 'undefined' ? options_combo.suggestionPlural : suggestion_plural,
        $combobox_suggestion_word = typeof options_combo.suggestionWord !== 'undefined' ? options_combo.suggestionWord : suggestion_word,
        $combobox_suggestion_word_plural = typeof options_combo.suggestionWord !== 'undefined' ? options_combo.suggestionWordPlural : suggestion_word_plural,
        combobox_min_length = typeof options_combo.comboboxMinLength !== 'undefined' ? Math.abs(options_combo.comboboxMinLength) : min_length,
        $combobox_case_sensitive = typeof options_combo.comboboxCaseSensitive !== 'undefined' ? options_combo.comboboxCaseSensitive : case_sensitive,
        combobox_limit_number_suggestions = typeof options_combo.comboboxLimitNumberSuggestions !== 'undefined' ? Math.abs(options_combo.comboboxLimitNumberSuggestions) : limit_number_suggestions,
        $combobox_search_option = typeof options_combo.comboboxSearchOption !== 'undefined' ? options_combo.comboboxSearchOption : search_option,
        $combobox_see_more_text = typeof options_combo.comboboxSeeMoreText !== 'undefined' ? options_combo.comboboxSeeMoreText : see_more_text,
        index_table = $this.attr('data-number'),
        value_to_search = $this.val(),
        text_number_suggestions = '';

        if($this.val() === '') {
          $this.next('.js-clear-button').addClass('visually-hidden');
        } else {
          $this.next('.js-clear-button').removeClass('visually-hidden');
        }

      fill_hidden_field(options_combo.comboboxHiddenField, value_to_search);

      if (event.keyCode === 13) {
        $form.submit();
      } else {

        if (event.keyCode !== 27) { // No Escape

          $this.attr('data-lastval', value_to_search);
          // search for text suggestion in the array tablo_suggestions[index_table]
          var size_tablo = tablo_suggestions[index_table].length,
            i = 0,
            counter = 0;

          $suggestions.empty();

          if (value_to_search != '' && value_to_search.length >= combobox_min_length) {
            while (i < size_tablo) {
              if (counter < combobox_limit_number_suggestions) {
                if (
                  (
                    $combobox_search_option === 'containing' &&
                    (
                      ($combobox_case_sensitive === 'yes' && (tablo_suggestions[index_table][i].indexOf(value_to_search) >= 0)) ||
                      ($combobox_case_sensitive === 'no' && (tablo_suggestions[index_table][i].toUpperCase().indexOf(value_to_search.toUpperCase()) >= 0))
                    )
                  ) ||
                  (
                    $combobox_search_option === 'beginning' &&
                    (
                      ($combobox_case_sensitive === 'yes' && tablo_suggestions[index_table][i].substring(0, value_to_search.length) === value_to_search) ||
                      ($combobox_case_sensitive === 'no' && tablo_suggestions[index_table][i].substring(0, value_to_search.length).toUpperCase() === value_to_search.toUpperCase())
                    )
                  )
                ) {
                  $suggestions.append('<div id="suggestion-' + index_table + '-' + counter + '" class="js-suggestion ' + $combobox_prefix_class + 'suggestion" tabindex="-1" role="option" data-value="' + tablo_suggestions_label[index_table][i] + '">' + tablo_suggestions[index_table][i] + '</div>');
                  counter++;
                }
              }
              i++;
            }
            if (counter >= combobox_limit_number_suggestions) {
              $suggestions.append('<div id="suggestion-' + index_table + '-' + counter + '" class="js-suggestion js-seemore ' + $combobox_prefix_class + 'suggestion" tabindex="-1" role="option">' + $combobox_see_more_text + '</div>');
              counter++;
            }
            // update number of suggestions
            if (counter > 1) {
              text_number_suggestions = $combobox_suggestion_plural + counter + ' ' + $combobox_suggestion_word_plural + '.';
            }
            if (counter === 1) {
              text_number_suggestions = $combobox_suggestion_single + counter + ' ' + $combobox_suggestion_word + '.';
            }
            if (counter === 0) {
              text_number_suggestions = $combobox_suggestion_single + counter + ' ' + $combobox_suggestion_word + '.';
            }
            if (counter >= 0) {
              var text_number_suggestions_default = $suggestions_text.text();
              if (text_number_suggestions != text_number_suggestions_default) { // @Goestu trick to make it work on all AT
                var suggestions_to_add = $("<p>").text(text_number_suggestions);
                $suggestions_text.attr('aria-live', 'polite');
                $suggestions_text.empty();
                $suggestions_text.append(suggestions_to_add);
              }
            }

          }

        }
      }

    })
      .on('click', function (event) {
        var $target = $(event.target),
          $suggestions_text = $('.js-suggestion-text:not(:empty)'), // if a suggestion text is not empty => suggestion opened somewhere
          $container = $suggestions_text.parents('.js-container'),
          $input_text = $container.find('.js-combobox'),
          $suggestions = $container.find('.js-suggest div');

        // if click outside => close opened suggestions
        if (!$target.is('.js-suggestion') && !$target.is('.js-combobox') && $suggestions_text.length) {
          $input_text.val($input_text.attr('data-lastval'));
          $suggestions.empty();
          $suggestions_text.empty();
        }
      })
      // tab + down management for autocomplete (when list of suggestion)
      .on('keydown', '.js-combobox', function (event) {
        var $this = $(this),
          $container = $this.parent(),
          $input_text = $container.find('.js-combobox'),
          $suggestions = $container.find('.js-suggest div'),
          $suggestion_list = $suggestions.find('.js-suggestion'),
          $suggestions_text = $container.find('.js-suggestion-text'),
          $autorise_tab_options = typeof $this.attr('data-combobox-notab-options') !== 'undefined' ? false : true,
          $first_suggestion = $suggestion_list.first();

        if ((!event.shiftKey && event.keyCode == 9 && $autorise_tab_options) || event.keyCode == 40) { // tab (if authorised) or bottom
          // See if there are suggestions, and yes => focus on first one
          if ($suggestion_list.length) {
            $input_text.val($first_suggestion.html());
            $suggestion_list.first().focus();
            event.preventDefault();
          }
        }
        if (event.keyCode == 27 || ($autorise_tab_options === false && event.keyCode == 9)) { // esc or (tab/shift tab + notab option) = close
          $input_text.val($input_text.attr('data-lastval'));
          $suggestions.empty();
          $suggestions_text.empty();
          if (event.keyCode == 27) { // Esc prevented only, tab can go :)
            event.preventDefault();
            setTimeout(function () {
              $input_text.focus();
            }, 300); // timeout to avoid problem in suggestions display
          }
        }

      })
      // tab + down management in list of suggestions
      .on('keydown', '.js-suggestion', function (event) {
        var $this = $(this),

          $container = $this.parents('.js-container'),

          $input_text = $container.find('.js-combobox'),
          options_combo = $input_text.data(),
          $autorise_tab_options = typeof $input_text.attr('data-combobox-notab-options') !== 'undefined' ? false : true,
          $suggestions = $container.find('.js-suggest div'),
          $suggestions_text = $container.find('.js-suggestion-text'),
          $next_suggestion = $this.next(),
          $previous_suggestion = $this.prev();

        if (event.keyCode == 27 || ($autorise_tab_options === false && event.keyCode == 9)) { // esc or (tab/shift tab + notab option) = close
          if (event.keyCode == 27) { // Esc prevented only, tab can go :)
            $input_text.val($input_text.attr('data-lastval'));
            $suggestions.empty();
            $suggestions_text.empty();
            setTimeout(function () {
              $input_text.focus();
            }, 300); // timeout to avoid problem in suggestions display
            event.preventDefault();
          }
          if ($autorise_tab_options === false && event.keyCode == 9) {
            $suggestions.empty();
            $suggestions_text.empty();
            $input_text.focus();
          }
        }
        if (event.keyCode == 13 || event.keyCode == 32) { // Enter or space
          if ($this.hasClass('js-seemore')) {
            $input_text.val($input_text.attr('data-lastval'));
            $suggestions.empty();
            $suggestions_text.empty();
            setTimeout(function () {
              $input_text.focus();
            }, 300); // timeout to avoid problem in suggestions display
            // go define the function you need when we click the see_more option
            setTimeout(function () {
              do_see_more_option();
            }, 301); // timeout to avoid problem in suggestions display
            event.preventDefault();
          } else {
            $input_text.val($this.html());
            $input_text.attr('data-lastval', $this.html());
            fill_hidden_field(options_combo.comboboxHiddenField, $this.data('value'));
            $suggestions.empty();
            $suggestions_text.empty();
            setTimeout(function () {
              $input_text.focus();
            }, 300); // timeout to avoid problem in suggestions display
            event.preventDefault();
          }

        }
        if ((!event.shiftKey && event.keyCode == 9 && $autorise_tab_options) || event.keyCode == 40) { // tab (if authorised) or bottom
          if ($next_suggestion.length) {
            $input_text.val($next_suggestion.html());
            // fill_hidden_field($next_suggestion.html());
            $next_suggestion.focus();
          } else {
            $input_text.val($input_text.attr('data-lastval'));
            // fill_hidden_field($input_text.attr('data-lastval'));
            if (!event.shiftKey && event.keyCode == 9) { // tab closes the list
              var e = jQuery.Event("keydown");
              e.which = 27; // # Some key code value
              e.keyCode = 27;
              $this.trigger(e);
            } else {
              setTimeout(function () {
                $input_text.focus();
              }, 300);
            } // timeout to avoid problem in suggestions display

          }
          event.preventDefault();
        }

        if ((event.shiftKey && event.keyCode == 9 && $autorise_tab_options) || event.keyCode == 38) { // top or Maj+tab (if authorised)
          if ($previous_suggestion.length) {
            $input_text.val($previous_suggestion.html());
            // fill_hidden_field($previous_suggestion.html());
            $previous_suggestion.focus();
          } else {
            $input_text.val($input_text.attr('data-lastval')).focus();
            // fill_hidden_field($input_text.attr('data-lastval'));
          }
          event.preventDefault();
        }
      })
      // clear button
      .on('click', '.js-clear-button', function () {
        var $this = $(this),
          $container = $this.parent(),
          $input_text = $container.find('.js-combobox'),
          options_combo = $input_text.data(),
          $suggestions = $container.find('.js-suggest div'),
          $suggestions_text = $container.find('.js-suggestion-text');

        $suggestions.empty();
        $suggestions_text.empty();
        $input_text.val('');
        $input_text.attr('data-lastval', '');
        $this.addClass('visually-hidden');
        clear_hidden_field(options_combo.comboboxHiddenField);

      })
      .on('click', '.js-suggestion', function () {

        var $this = $(this),
          value = $this.html(),
          $container = $this.parents('.js-container'),
          $input_text = $container.find('.js-combobox'),
          options_combo = $input_text.data(),
          $suggestions = $container.find('.js-suggest div'),
          $suggestions_text = $container.find('.js-suggestion-text');

        fill_hidden_field(options_combo.comboboxHiddenField, $this.data('value'));

        if ($this.hasClass('js-seemore')) {
          $suggestions.empty();
          $suggestions_text.empty();
          $input_text.focus();
          // go define the function you need when we click the see_more option
          do_see_more_option();
        } else {
          $input_text.val(value).focus();
          $suggestions.empty();
          $suggestions_text.empty();
        }


      });


  }

});

/*
# The MIT License (MIT)

Copyright (c) Go Make Things, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

; (function (window, document, undefined) {

  'use strict';

  // Make sure that ValidityState is supported in full (all features)
  var supported = function () {
    var input = document.createElement('input');
    return ('validity' in input && 'badInput' in input.validity && 'patternMismatch' in input.validity && 'rangeOverflow' in input.validity && 'rangeUnderflow' in input.validity && 'stepMismatch' in input.validity && 'tooLong' in input.validity && 'tooShort' in input.validity && 'typeMismatch' in input.validity && 'valid' in input.validity && 'valueMissing' in input.validity);
  };

  // Save browser's own implementation if available
  var browserValidityFunctions = (function () {
    var inputValidity = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'validity');
    var buttonValidity = Object.getOwnPropertyDescriptor(HTMLButtonElement.prototype, 'validity');
    var selectValidity = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'validity');
    var textareaValidity = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'validity');

    var functions = {};
    if (inputValidity) {
      functions.input = inputValidity.get;
    }
    if (buttonValidity) {
      functions.button = buttonValidity.get;
    }
    if (selectValidity) {
      functions.select = selectValidity.get;
    }
    if (textareaValidity) {
      functions.textarea = textareaValidity.get;
    }

    return functions;
  })();

	/**
	 * Generate the field validity object
	 * @param  {Node]} field The field to validate
	 * @return {Object}      The validity object
	 */
  var getValidityState = function (field) {

    // Variables
    var type = field.getAttribute('type') || field.nodeName.toLowerCase();
    var isNum = type === 'number' || type === 'range';
    var length = field.value.length;
    var valid = true;

    // If radio group, get selected field
    if (field.type === 'radio' && field.name) {
      var group = document.getElementsByName(field.name);
      if (group.length > 0) {
        for (var i = 0; i < group.length; i++) {
          if (group[i].form === field.form && field.checked) {
            field = group[i];
            break;
          }
        }
      }
    }

    // Run validity checks
    var checkValidity = {
      badInput: (isNum && length > 0 && !/^[-+]?(?:\d+|\d*[.,]\d+)$/.test(field.value)), // value of a number field is not a number
      patternMismatch: (field.hasAttribute('pattern') && length > 0 && new RegExp(field.getAttribute('pattern')).test(field.value) === false), // value does not conform to the pattern
      rangeOverflow: (field.hasAttribute('max') && isNum && field.value > 0 && Number(field.value) > Number(field.getAttribute('max'))), // value of a number field is higher than the max attribute
      rangeUnderflow: (field.hasAttribute('min') && isNum && field.value > 0 && Number(field.value) < Number(field.getAttribute('min'))), // value of a number field is lower than the min attribute
      stepMismatch: (isNum && ((field.hasAttribute('step') && field.getAttribute('step') !== 'any' && Number(field.value) % Number(field.getAttribute('step')) !== 0) || (!field.hasAttribute('step') && Number(field.value) % 1 !== 0))), // value of a number field does not conform to the stepattribute
      tooLong: (field.hasAttribute('maxLength') && field.getAttribute('maxLength') > 0 && length > parseInt(field.getAttribute('maxLength'), 10)), // the user has edited a too-long value in a field with maxlength
      tooShort: (field.hasAttribute('minLength') && field.getAttribute('minLength') > 0 && length > 0 && length < parseInt(field.getAttribute('minLength'), 10)), // the user has edited a too-short value in a field with minlength
      typeMismatch: (length > 0 && ((type === 'email' && !/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(field.value)) || (type === 'url' && !/^(?:(?:https?|HTTPS?|ftp|FTP):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*)(?::\d{2,5})?(?:[\/?#]\S*)?$/.test(field.value)))), // value of a email or URL field is not an email address or URL
      valueMissing: (field.hasAttribute('required') && (((type === 'checkbox' || type === 'radio') && !field.hasAttribute('checked')) || (type === 'select' && (field.selectedIndex === -1 || field.options[field.selectedIndex].value.length < 1)) || (type !== 'checkbox' && type !== 'radio' && type !== 'select' && length < 1))) // required field without a value
    };

    // Run browser's own validation if available
    var fieldTagName = field.tagName.toLowerCase();
    var browserValidity = fieldTagName in browserValidityFunctions ? browserValidityFunctions[fieldTagName].call(field) : {};

    // Check if any errors
    for (var key in checkValidity) {
      if (checkValidity.hasOwnProperty(key)) {
        // If browser has detected an error, adopt it to our validity object
        if (key in browserValidity && browserValidity[key]) {
          checkValidity[key] = true;
        }

        // If there's an error, change valid value
        if (checkValidity[key]) {
          valid = false;
        }
      }
    }

    // Add valid property to validity object
    checkValidity.valid = valid;

    // Return object
    return checkValidity;

  };

  // If the full set of ValidityState features aren't supported, polyfill
  if (!supported()) {
    Object.defineProperty(HTMLInputElement.prototype, 'validity', {
      get: function ValidityState() {
        return getValidityState(this);
      },
      configurable: true,
    });
    Object.defineProperty(HTMLButtonElement.prototype, 'validity', {
      get: function ValidityState() {
        return getValidityState(this);
      },
      configurable: true,
    });
    Object.defineProperty(HTMLSelectElement.prototype, 'validity', {
      get: function ValidityState() {
        return getValidityState(this);
      },
      configurable: true,
    });
    Object.defineProperty(HTMLTextAreaElement.prototype, 'validity', {
      get: function ValidityState() {
        return getValidityState(this);
      },
      configurable: true,
    });
  }

})(window, document);

var isVisible = function (ele) {
  return ele.clientWidth !== 0 &&
    ele.clientHeight !== 0 &&
    ele.style.opacity !== 0 &&
    ele.style.visibility !== 'hidden';
}

var getClosest = function (elem, selector) {

  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) { }
        return i > -1;
      };
  }

  // Get the closest matching element
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }
  return null;

};

( function() {

  // String.prototype.trim
  if ( !String.prototype.trim ) {
    String.prototype.trim = function() {
      return this.replace( /^\s+|\s+$/g, '' );
    };
  }



  // Oject.assign support for IE
  if (typeof Object.assign != 'function') {
    Object.assign = function (target) {
      'use strict';
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      target = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source != null) {
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };
  }

  // Array.prototype.indexOf
  if ( !Array.prototype.indexOf ) {
    Array.prototype.indexOf = function( item ) {
      var i = 0;
      var len = this.length;

      for ( ; i < len; i++ ) {
        if ( i in this && this[i] === item ) {
          return i;
        }
      }
      return -1;
    };
  }

  // Array.prototype.forEach
  if ( !Array.prototype.forEach ) {
    Array.prototype.forEach = function( callback, thisArg ) {
      var arrayObject = Object( this );
      var len = arrayObject.length >>> 0;
      var i = 0;

      if ( typeof callback !== 'function' ) {
        throw new TypeError();
      }
      for ( ; i < len; i++ ) {
        if ( arrayObject.hasOwnProperty( i ) ) {
          callback.call( thisArg || undefined, arrayObject[i], i, arrayObject );
        }
      }
      return undefined;
    };
  }

  // Element.matches
  if ( !Element.prototype.matches ) {
    Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector || function( selector ) {
      var matches = ( this.document || this.ownerDocument ).querySelectorAll( selector );
      var i = matches.length;

      while ( --i >= 0 && matches.item( i ) !== this ) {
        // nop
      }
      return i > -1;
    };
  }

  // Element.closest
  if ( !Element.prototype.closest ) {
    Element.prototype.closest = function( selector ) {
      var element = this;

      // document has no .matches
      while ( element.matches && !element.matches( selector ) ) {
        element = element.parentNode;
      }
      return element.matches ? element : null;
    };
  }


  // Full polyfill for browsers with no classList support
  // Including IE < Edge missing SVGElement.classList
  // adapted from https://github.com/eligrey/classList.js/
  if ( !( 'classList' in document.createElement( '_' ) )
    || document.createElementNS && !( 'classList' in document.createElementNS( 'http://www.w3.org/2000/svg', 'g' ) ) ) {

    ( function( view ) {
      'use strict';
      var DOMEx;
      var checkTokenAndGetIndex;
      var ClassList;
      var classListGetter;
      var classListPropertyDescriptor;

      if ( !( 'Element' in view ) ) {
        return;
      }

      // Vendors: please allow content code to instantiate DOMExceptions
      DOMEx = function( type, message ) {
        this.name = type;
        this.code = DOMException[type];
        this.message = message;
      };

      // Most DOMException implementations don't allow calling DOMException's toString()
      // on non-DOMExceptions. Error's toString() is sufficient here.
      DOMEx.prototype = Error.prototype;

      checkTokenAndGetIndex = function( classList, token ) {
        if ( token === '' ) {
          throw new DOMEx( 'SYNTAX_ERR', 'An invalid or illegal string was specified' );
        }
        if ( /\s/.test( token ) ) {
          throw new DOMEx( 'INVALID_CHARACTER_ERR', 'String contains an invalid character' );
        }
        return [].indexOf.call( classList, token );
      };

      ClassList = function( elem ) {
        var trimmedClasses = String.prototype.trim.call( elem.getAttribute( 'class' ) || '' );
        var classes = trimmedClasses ? trimmedClasses.split( /\s+/ ) : [];
        var len = classes.length;
        var i = 0;

        for ( ; i < len; i++ ) {
          this.push( classes[i]);
        }
        this._updateClassName = function() {
          elem.setAttribute( 'class', this.toString() );
        };
      };

      ClassList.prototype = [];

      classListGetter = function() {
        return new ClassList( this );
      };

      ClassList.prototype.item = function( i ) {
        return this[i] || null;
      };

      ClassList.prototype.contains = function( token ) {
        token += '';
        return checkTokenAndGetIndex( this, token ) !== -1;
      };

      ClassList.prototype.add = function() {
        var tokens = arguments;
        var i = 0;
        var l = tokens.length;
        var token;
        var updated = false;

        do {
          token = tokens[i] + '';
          if ( checkTokenAndGetIndex( this, token ) === -1 ) {
            this.push( token );
            updated = true;
          }
        } while ( ++i < l );

        if ( updated ) {
          this._updateClassName();
        }
      };

      ClassList.prototype.remove = function() {
        var tokens = arguments;
        var i = 0;
        var l = tokens.length;
        var token;
        var updated = false;
        var index;

        do {
          token = tokens[i] + '';
          index = checkTokenAndGetIndex( this, token );
          while ( index !== -1 ) {
            this.splice( index, 1 );
            updated = true;
            index = checkTokenAndGetIndex( this, token );
          }
        } while ( ++i < l );

        if ( updated ) {
          this._updateClassName();
        }
      };

      ClassList.prototype.toggle = function( token, force ) {
        var result;
        var method;

        token += '';
        result = this.contains( token );
        method = result ? force !== true && 'remove' : force !== false && 'add';

        if ( method ) {
          this[method]( token );
        }

        if ( force === true || force === false ) {
          return force;
        }
        else {
          return !result;
        }
      };

      ClassList.prototype.toString = function() {
        return this.join( ' ' );
      };

      if ( Object.defineProperty ) {
        classListPropertyDescriptor = {
          get: classListGetter,
          enumerable: true,
          configurable: true
        };
        try {
          Object.defineProperty( view.Element.prototype, 'classList', classListPropertyDescriptor );
        }
        catch ( exception ) { // IE 8 doesn't support enumerable:true
          if ( exception.number === -0x7FF5EC54 ) {
            classListPropertyDescriptor.enumerable = false;
            Object.defineProperty( view.Element.prototype, 'classList', classListPropertyDescriptor );
          }
        }
      }
      else if ( Object.prototype.__defineGetter__ ) {
        view.Element.prototype.__defineGetter__( 'classList', classListGetter );
      }

    }( self ) );

  }
  else {
    // There is full or partial native classList support, so just check if we need
    // to normalize the add/remove and toggle APIs.

    ( function() {
      'use strict';
      var testElement = document.createElement( '_' );
      var createMethod;
      var original;

      testElement.classList.add( 'c1', 'c2' );

      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
      // classList.remove exist but support only one argument at a time.
      if ( !testElement.classList.contains( 'c2' ) ) {
        createMethod = function( method ) {
          var original = DOMTokenList.prototype[method];

          DOMTokenList.prototype[method] = function( token ) {
            var i;
            var len = arguments.length;

            for ( i = 0; i < len; i++ ) {
              token = arguments[i];
              original.call( this, token );
            }
          };
        };
        createMethod( 'add' );
        createMethod( 'remove' );
      }

      testElement.classList.toggle( 'c3', false );

      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
      // support the second argument.
      if ( testElement.classList.contains( 'c3' ) ) {
        original = DOMTokenList.prototype.toggle;

        DOMTokenList.prototype.toggle = function( token, force ) {
          if ( 1 in arguments && !this.contains( token ) === !force ) {
            return force;
          }
          else {
            return original.call( this, token );
          }
        };
      }

      testElement = null;
    }() );

  }

  //ChildNode.before()

  ( function( arr ) {
    arr.forEach( function( item ) {
      if ( item.hasOwnProperty( 'before' ) ) {
        return;
      }
      Object.defineProperty( item, 'before', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          var argArr = Array.prototype.slice.call( arguments );
          var docFrag = document.createDocumentFragment();

          argArr.forEach( function( argItem ) {
            var isNode = argItem instanceof Node;

            docFrag.appendChild( isNode ? argItem : document.createTextNode( String( argItem ) ) );
          });

          this.parentNode.insertBefore( docFrag, this );
        }
      });
    });
  })([ Element.prototype, CharacterData.prototype, DocumentType.prototype ]);

}() );

'use strict';

window.onl = {

  ui: {
    // detect IE version
    ieversion: function () {
      var rv = -1; // Return value assumes failure.

      if (navigator.appName == 'Microsoft Internet Explorer'){

        var ua = navigator.userAgent,
            re  = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");

        if (re.exec(ua) !== null){
          rv = parseFloat( RegExp.$1 );
        }
      }
      else if(navigator.appName == "Netscape"){
        /// in IE 11 the navigator.appVersion says 'trident'
        /// in Edge the navigator.appVersion does not say trident
        if(navigator.appVersion.indexOf('Trident') === -1) rv = 12;
        else rv = 11;
      }

      return rv;
    },
    // toggle visibility of `element`
    toggle: function( element ) {
      if ( !onl.ui.isHidden( element ) ) {
        element.setAttribute( 'hidden', true );
      }
      else {
        element.removeAttribute( 'hidden' );
      }
    },
    // hide `element`
    hide: function( element, focusElement ) {
      if ( !onl.ui.isHidden( element ) ) {
        element.setAttribute( 'hidden', true );
      }
      onl.ui.focus( focusElement );
    },
    // show `element`
    show: function( element, focusElement ) {
      if ( onl.ui.isHidden( element ) ) {
        element.removeAttribute( 'hidden' );
      }
      if (focusElement) {
        onl.ui.focus( focusElement );
      }
    },
    // check if `element` is hidden
    isHidden: function( element, checkForHiddenParents ) {
      var hasHiddenParents = false;

      if ( checkForHiddenParents ) {
        hasHiddenParents = !!element.closest( '[hidden]' );
      }
      return element.hasAttribute( 'hidden' ) || checkForHiddenParents && hasHiddenParents;
    },
    // focus `element`
    focus: function( element ) {
      if ( element ) {
        if ( !element.hasAttribute( 'tabindex' ) ) {
          element.setAttribute( 'tabindex', '0' );
        }
        if ( typeof element.focus === 'function' ) {
          if ( window.requestAnimationFrame ) {
            window.requestAnimationFrame( function() {
              element.focus();
            });
          }
          else {
            element.focus();
          }
        }
      }
    },
    isTouch: function() {
      return 'ontouchstart' in window;
    },
    hasDragDrop: function() {
      var div = document.createElement( 'div' );
      return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    },
    debounce: function( originalFunction, delay ) {
      var timer = null;

      return function() {
        var context = this;
        var args = arguments;

        clearTimeout( timer );

        timer = setTimeout( function() {
          originalFunction.apply( context, args );
        }, delay );
      };
    },
    // disable enabled `element`
    // prefer native `element.disabled`, for `<a>` use the aria-disabled attribute
    // also set tabindex to -1 to take the element out of tab order
    disable: function( element ) {
      // already disabled
      if ( element._tabIndex !== undefined ) {
        return;
      }
      element._tabIndex = element.tabIndex;
      element.tabIndex = -1;
      if ( onl.dom.isDisableable( element ) ) {
        element.disabled = true;
      }
      // if we're not dealing with an element that can be disabled
      // use aria-disabled, but only on <a> elements.
      else if ( element.nodeName === 'A' ) {
        element.setAttribute( 'aria-disabled', true );
      }
    },
    // enable disabled `element`, see `onl.ui.disable` above
    // also restore tabindex
    enable: function( element ) {
      // already enabled
      if ( element._tabIndex === undefined ) {
        return;
      }
      element.tabIndex = element._tabIndex;
      delete element._tabIndex;
      if ( onl.dom.isDisableable( element ) ) {
        element.disabled = false;
      }
      // if we're not dealing with an element that can be disabled
      // use aria-disabled, but only on <a> elements.
      else if ( element.nodeName === 'A' ) {
        element.setAttribute( 'aria-disabled', false );
      }
    },
    // basic way of getting focusable elements in `baseElement`
    getFocusableElements: function( baseElement ) {
      return onl.dom.$( 'a[href], button, input[type="text"], input[type="radio"], input[type="checkbox"], select', baseElement )
      .filter( onl.dom.isVisibleElement );
    },
    // set up a focus trap within a specific element
    bindFocusTrap: function( element ) {
      element.addEventListener( 'keydown', onl.ui.trapFocus );
    },
    // undo a focus trap within a specifc element
    unbindFocusTrap: function( element ) {
      element.removeEventListener( 'keydown', onl.ui.trapFocus );
    },
    uniqBy: function(a, key) {
      var seen = {};
      return a.filter(function (item) {
        var k = key(item);
        return seen.hasOwnProperty(k) ? false : (seen[k] = true);
      })
    },
    // prevent (shift) tabbing away from an element
    trapFocus: function( event ) {
      var element = event.currentTarget;
      var focusableEls = onl.ui.getFocusableElements( element );
      var firstFocusableEl = focusableEls[0];
      var lastFocusableEl = focusableEls[focusableEls.length - 1];
      var isTabPressed = ( event.key === 'Tab' || event.keyCode === 9 );

      if ( !isTabPressed ) {
        return;
      }

      if ( event.shiftKey ) /* shift + tab */ {
        if ( document.activeElement === firstFocusableEl ) {
          lastFocusableEl.focus();
          event.preventDefault();
        }
      }
      else /* tab */ {
        if ( document.activeElement === lastFocusableEl ) {
          firstFocusableEl.focus();
          event.preventDefault();
        }
      }
    }
  },

  dom: {
    // convenience function that returns an Array of elements that matches selectors
    $: function( selectors, baseElement ) {
      var elements = ( baseElement || document ).querySelectorAll( selectors );

      return Array.prototype.slice.call( elements );
    },
    // find a DOM element based on a href
    getElementFromHref: function( href ) {
      var id = href.match( /#(.+)/ )[1];

      return document.getElementById( id );
    },
    // return an array of existing elements from an array of ids.
    getExistingElementsByIds: function( ids ) {
      return ids
      .map( function( id ) {
        return document.getElementById( id );
      })
      .filter( function( element ) {
        // only return existing elements
        return element;
      });
    },
    // check if an element can natively be disabled
    isDisableable: function( element ) {
      return Object.getPrototypeOf( element ).hasOwnProperty( 'disabled' );
    },
    // find out if an element is visible, uses ui#isHidden
    isVisibleElement: function( element ) {
      var CHECK_FOR_HIDDEN_PARENTS = true;

      // only return elements that are not hidden and not inside a hidden parent
      return !onl.ui.isHidden( element, CHECK_FOR_HIDDEN_PARENTS );
    },
    // get all *visible* elements that have a required or data-custom-required attribute
    getRequiredElements: function( element ) {
      return onl.dom.$( '[required]', element )
      .filter( onl.dom.isVisibleElement );
    },
    // return either the custom required element or the actual required element
    getRequiredElement: function( element ) {
      return element.querySelector( element.querySelector( '[required]' ) );
    },
    offset: function( element ) {
      var rect = element.getBoundingClientRect();
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    }
  },

  handlers: {
  },

  decorators: {
  },

  handle: function( handlers ) {
    var handler;

    for ( handler in handlers ) {
      if ( !onl.handlers[handler] ) {
        onl.handlers[handler] = handlers[handler];
      }
      else {
        console.log( 'Conflicting handler: ' + handler );
      }
    }
  },

  decorate: function( decorators ) {
    var decorator;

    for ( decorator in decorators ) {
      if ( !onl.decorators[decorator] ) {
        onl.decorators[decorator] = decorators[decorator];
      }
      else {
        console.log( 'Conflicting decorator: ' + decorator );
      }
    }
  },

  run: function( scope ) {
    var WHITESPACE = /\s+/;

    onl.dom.$( '[data-decorator]', scope || document ).forEach( function( element ) {
      var decoratorArr = element.getAttribute( 'data-decorator' )
      .toLowerCase()
      .split( WHITESPACE );

      decoratorArr.forEach( function( decorator ) {
        if ( typeof onl.decorators[ decorator ] === 'function' ) {
          onl.decorators[ decorator ]( element );
        }
      });
    });
  }

};

var pubsub = (function () {
  var topics = {};
  var hOP = topics.hasOwnProperty;

  return {
    subscribe: function (topic, listener) {
      // Create the topic's object if not yet created
      if (!hOP.call(topics, topic)) topics[topic] = [];

      // Add the listener to queue
      var index = topics[topic].push(listener) - 1;

      // Provide handle back for removal of topic
      return {
        remove: function () {
          delete topics[topic][index];
        }
      };
    },
    publish: function (topic, info) {
      // If the topic doesn't exist, or there's no listeners in queue, just leave
      if (!hOP.call(topics, topic)) return;

      // Cycle through topics queue, fire!
      topics[topic].forEach(function (item) {
        item(info != undefined ? info : {});
      });
    }
  };
})();

( function() {

  'use strict';

  onl.handle({

    'select-today': function( element, event ) {
      var input = element.getAttribute( 'data-for' );
      var now = new Date();
      var pad = function( num ) {
        if (num < 10) {
          return '0' + num;
        }
        return num;
      };
      event.preventDefault();
      if (!input) {
        return;
      }
      input = document.getElementById(input);
      if (!input) {
        return;
      }
      if (input.type == 'date') {
        input.value = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());
      } else {
        input.value = pad(now.getDate()) + '-' + pad(now.getMonth() + 1) + '-' + now.getFullYear();
      }
    },

    'toggle-option': function ( element ) {
      var option = element.getAttribute('data-for');
      if (!option) {
        return;
      }
      option = document.getElementById(option);
      if (!option) {
        return;
      }
      if (element.checked) {
        option.disabled = false;
      } else {
        option.checked = false;
        option.disabled = true;
      }
    },

    'toggle-extra-options': function( element ) {
      var options = element.getAttribute('data-options');
      var checked = element.checked;
      var otherElements = onl.dom.$( '[data-options="' + options + '"]' );
      if (!options) {
        return;
      }
      options = document.getElementById(options);
      if (!options) {
        return;
      }

      if ( otherElements ) {
        otherElements.forEach( function( input ) {
          if ( input.checked ) {
            checked = true;
          }
        });
      }

      if ( checked && onl.ui.isHidden( options ) ) {
        onl.ui.show( options );
      }
      else if ( !checked ) {
        onl.ui.hide( options );
      }
    },

    'show-extra-options': function( element ) {
      var options = element.getAttribute('data-options');
      if (!options) {
        return;
      }
      options = document.getElementById(options);
      if (!options) {
        return;
      }

      onl.ui.show( options );
    },

    'hide-extra-options': function( element ) {
      var options = element.getAttribute('data-options');
      if (!options) {
        return;
      }
      options = document.getElementById(options);
      if (!options) {
        return;
      }

      onl.ui.hide( options );
    }
  })

  onl.decorate({

    'submitlistener': function( element ) {

      function addLoadingStateClassToForm(){
        element.classList.add( 'is-submitted' );
      }
      if ( element.addEventListener ) {
        element.addEventListener( 'submit', function( evt ) {
          addLoadingStateClassToForm();
        }, true );
      } else if ( element.attachEvent ) {
        element.attachEvent( 'onsubmit', function( evt ) {
          addLoadingStateClassToForm();
        });
      }

    },

    'check-all': function( element ) {
      var elements = element.getAttribute('data-for');

      if ( elements ) {
        elements = onl.dom.$( '[data-set="' + elements + '"]' );
        if ( elements ) {
          elements.forEach( function( input ) {
            input.addEventListener( 'click', function() {
              var checkedAll = true;
              elements.forEach( function( input ) {
                if ( !input.checked ) {
                  checkedAll = false;
                }
              });
              element.checked = checkedAll;
            });
          });
          element.addEventListener( 'click', function() {
            var el = this;

            elements.forEach( function( input ) {
              input.checked = el.checked;
            });
          });
        }
      }
    }
  });

})();

(function () {
  'use strict';

  onl.decorate({
    'init-selectall': function (element) {
      new selectall(element);
    }
  });

  var selectall = function (element) {
    this.element = element;
    this.mastercheckbox = this.element.querySelector('.js-checkbox-master');
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];
    this.checkboxes = this.element.querySelectorAll('input[type="checkbox"]');

    this.amountLabel = this.element.querySelector('.js-amount-checkboxes');
    if(this.amountLabel){
      this.amountLabel.innerHTML = this.checkboxes.length - 1;
    }

    this.initEventListeners();
  };

  selectall.prototype.initEventListeners = function (e) {
    var i;

    // master checkbox (select all)
    this.mastercheckbox.addEventListener('change', function (e) {
      var i;
      var checkboxes = this.checkboxes;

      for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== e.target) {
          checkboxes[i].checked = e.target.checked;

          // onchange event needs manual triggering on checkboxes
          if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            checkboxes[i].dispatchEvent(evt);
          } else {
            checkboxes[i].fireEvent("onchange");
          }
        }

      }
    }.bind(this), false);

    // uncheck the 'select all'-checkbox when any of the checkboxes is not checked anymore;
    for (i = 0; i < this.checkboxes.length; i++) {
      this.checkboxes[i].addEventListener('change', function (e) {
        if (!e.target.classList.contains('js-checkbox-master')) {
          this.regularCheckboxListener(e);
        }
      }.bind(this), false);
    }

  };

  selectall.prototype.regularCheckboxListener = function (e) {
    var checkbox = e.target;

    if (checkbox.checked === false && this.mastercheckbox.checked) {
      this.mastercheckbox.checked = false;
    }

  };

})();


(function () {

  'use strict';

  onl.decorate({

    'init-filter-results': function (element) {
      new filterResults(element);
    }

  });

  var filterResults = function( element ) {
    this.element = element;
    this.config = JSON.parse( this.element.getAttribute( 'data-config' ) ) || [];
    this.init();
  };

  filterResults.prototype.init = function() {
    this.input = onl.dom.$( '.js-filterresults__input', this.element )[0];
    this.results = onl.dom.$( '.js-filterresults__result', this.element );

    this.addEventListeners();
  };

  filterResults.prototype.addEventListeners = function() {
    this.input.addEventListener('keyup', function() { this.doFilter(); }.bind(this), false);
  };
  filterResults.prototype.doFilter = function() {
    var i;
    var a;
    var txtValue;
    var filter = this.input.value.toUpperCase();

    for (i = 0; i < this.results.length; i++) {
      a = this.results[i];
      txtValue = a.textContent || a.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        this.results[i].style.display = '';
      } else {
        this.results[i].style.display = 'none';
      }
    }
  };


})();

(function () {
  'use strict';

  onl.decorate({
    'init-form-conditionals': function (element) {
      new formConditionals(element);
    }
  });

  var formConditionals = function (element) {
    this.element = element;
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];

    this.questionIdTag = this.config.questionIdTag || '#citem-';
    this.questionContainer = this.config.questionContainer || '.js-form-conditionals__citem';
    this.submitContainer = this.config.submitContainer || this.element.querySelector('.js-form-conditionals__submitcontainer');
    this.respondsContainer = this.config.respondsContainer || this.element.querySelector('.js-form-conditionals__responds');
    this.buttonNextSelector = '.js-button-next';

    this.questions = this.element.querySelectorAll(this.questionContainer);
    this.inputs = this.element.querySelectorAll('input,select');
    this.buttonNexts = this.element.querySelectorAll(this.buttonNextSelector);

    this.initEventListeners();
    this.setInitialState();

  };

  formConditionals.prototype.setInitialState = function() {
    var y;
    var i;
    var firstInput;
    var evt;

    for (y = 0; y < this.questions.length; y++) {
      if (y !== 0) {
        this.questions[y].setAttribute('hidden', 'hidden');
      }
      if (y === 0) {
        firstInput = true;
      }
    }
    if (firstInput) {
      firstInput = this.questions[0].querySelectorAll('input,select');
      if (firstInput[0]) {

        if (firstInput[0].tagName === 'SELECT') {
          if ('createEvent' in document) {
            evt = document.createEvent('HTMLEvents');
            evt.initEvent('change', false, true);
            firstInput[0].dispatchEvent(evt);
          }
          else {
            firstInput[0].fireEvent('onchange');
          }
        }
        if (firstInput[0].tagName === 'INPUT') {

          for (i = 0; i < firstInput.length; i++) {
            if (firstInput[i].checked) {
              this.actOnChange(firstInput[i]);
            }
          }
        }
      }
    }
  };

  formConditionals.prototype.initEventListeners = function(e) {
    var y;
    var i;

    for (y = 0; y < this.inputs.length; y++) {
      this.inputs[y].addEventListener('change', function(e) { this.actOnChange(e); }.bind(this), false);
    }
    for (i = 0; i < this.buttonNexts.length; i++) {
      this.buttonNexts[i].addEventListener('click', function(e) { this.actOnChange(e); }.bind(this), false);
    }

  };

  formConditionals.prototype.actOnChange = function(e) {
    var obj;
    var inputType;
    var linkedToQuestionId;
    var currentQuestionContainer;
    var automaticProceed;
    var showLast;
    var showResponds;
    var hideself;

    if (e.target !== undefined) {
      obj = e.target;
    } else {
      obj = e;
    }

    inputType = obj.type;
    linkedToQuestionId;
    currentQuestionContainer = obj.closest(this.questionContainer);
    automaticProceed = true;
    showLast = obj.getAttribute('data-triggerlaststep');
    showResponds = obj.getAttribute('data-triggeresponds');
    hideself = obj.getAttribute('data-hideself');

    switch (inputType) {
    case 'radio':
      linkedToQuestionId = obj.getAttribute('data-linkedto');
      break;
    case 'submit':
      linkedToQuestionId = obj.getAttribute('data-linkedto');
      break;
    case 'button':
      linkedToQuestionId = obj.getAttribute('data-linkedto');
      break;
    case 'input':
      linkedToQuestionId = obj.getAttribute('data-linkedto');
      break;
    case 'select-one':
      linkedToQuestionId = obj[obj.selectedIndex].getAttribute('data-linkedto');
      break;
    case 'checkbox':
      if (this.amountCheckedInFamily(obj, currentQuestionContainer) > 0) {
        currentQuestionContainer.querySelector(this.buttonNextSelector).removeAttribute('hidden');
      } else {
        currentQuestionContainer.querySelector(this.buttonNextSelector).setAttribute('hidden', 'hidden');
        this.resetFutureQuestions(currentQuestionContainer);
      }
      automaticProceed = false;
      break;
    }

    if (automaticProceed) {
      this.resetFutureQuestions(currentQuestionContainer);

      if (linkedToQuestionId) {
        this.activateLinkedQuestion(linkedToQuestionId);
        this.hideFormSubmit();
      } else {
        this.showFormSubmit();
      }
    }

    if (showResponds) {
      this.showResponds();
      this.hideForm();
    } else {
      if (showLast) {
        this.showFormSubmit();
      }
    }

    if (hideself) {
      this.hideCurrentQuestion(currentQuestionContainer);
    }
  };

  formConditionals.prototype.hideCurrentQuestion = function (currentQuestionContainer) {
    currentQuestionContainer.setAttribute('hidden', 'hidden');
  }


  formConditionals.prototype.amountCheckedInFamily = function(obj, parent) {
    var list, index, item, checkedCount;

    checkedCount = 0;
    list = parent.getElementsByTagName('input');
    for (index = 0; index < list.length; ++index) {
      item = list[index];
      if (item.getAttribute('type') === "checkbox"
        && item.checked
        && item.name === obj.name) {
        ++checkedCount;
      }
    }
    return checkedCount;
  };

  formConditionals.prototype.resetFutureQuestions = function(currentQuestionContainer) {
    var i;
    var y;
    var allInputsInQuestion;

    // strips #question-{{id}} to {{id}}
    currentQuestionContainer = currentQuestionContainer.getAttribute('id');
    currentQuestionContainer = currentQuestionContainer.substr(this.questionIdTag.length - 1, 5);

    for (i = 0; i < this.questions.length; i++) {

      if (this.questions[i].getAttribute('id').substr(this.questionIdTag.length - 1, 5) > currentQuestionContainer) {
        allInputsInQuestion = this.questions[i].querySelectorAll('input');

        // reset answers
        for (y = 0; y < allInputsInQuestion.length; y++) {
          var type = allInputsInQuestion[y].getAttribute('type');

          if (type === 'radio') {
            allInputsInQuestion[y].checked = false;
          }
        }

        // hide question;
        this.questions[i].setAttribute('hidden', 'hidden');
        this.questions[i].removeAttribute('role');
      }
    }

  };

  formConditionals.prototype.activateLinkedQuestion = function(questionId) {
    var self = this;
    var nextQuestion = this.element.querySelector(self.questionIdTag + questionId);

    if (nextQuestion){
      nextQuestion.removeAttribute('hidden');
      nextQuestion.setAttribute('role', 'alert');
    }

  };

  formConditionals.prototype.showFormSubmit = function() {
    if (this.submitContainer){
      this.submitContainer.removeAttribute('hidden');
      this.submitContainer.querySelector('button').setAttribute('role', 'alert');
    }
  };
  formConditionals.prototype.hideFormSubmit = function() {
    if (this.submitContainer){
      this.submitContainer.setAttribute('hidden', 'hidden');
      this.submitContainer.querySelector('button').removeAttribute('role');
    }
  };

  formConditionals.prototype.showResponds = function() {
    this.respondsContainer.removeAttribute('hidden');
  };

  formConditionals.prototype.hideForm = function() {
    var y;

    for (y = 0; y < this.questions.length; y++) {
      this.questions[y].setAttribute('hidden', 'hidden');
    }
    this.submitContainer.setAttribute('hidden', 'hidden');
  };

})();

// script in subselection.js

(function () {
  'use strict';

  onl.decorate({
    'init-formredirecter': function (element) {
      new formredirecter(element);
    }
  });

  var formredirecter = function (element) {
    this.element = element;
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];

    this.element.field = this.config.field || '.js-form-redirecter__field';
    this.root = location.protocol + '//' + location.host;

    this.element.addEventListener('submit', function (e) {
      e.preventDefault();
      this.formValue = this.element.querySelector(this.element.field).value;
      if ( this.formValue.charAt(0) !== '/') {
        this.formValue = '/' + this.formValue;
      }
      window.location = this.root + this.formValue;
    }.bind(this), false);
  };

})();

(function () {
  'use strict';

  onl.decorate({
    'init-formreset': function (element) {
      new formReset(element);
    }
  });

  var formReset = function (element) {
    this.element = element;
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];
    this.resetElementClass = this.config.resetElementClass || 'formreset-resetlink';

    this.resetLink = this.element.querySelector('.' + this.resetElementClass);
    if (this.resetLink) {
      this.initEventListeners();
    }
  };

  formReset.prototype.initEventListeners = function() {
    this.resetLink.addEventListener('click', function (e) { this.resetForm(e); }.bind(this), false);
  };

  formReset.prototype.resetForm = function() {
    var y;

    this.inputs = this.element.querySelectorAll('input,select');

    for (y = 0; y < this.inputs.length; y++) {

      switch (this.inputs[y].getAttribute('type')) {
      case 'radio':
        if (this.inputs[y].checked) {
          this.inputs[y].checked = false;
        }
      }
    }
  };



})();

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

/**
 * Feature test
 * @return {Boolean} Returns true if required methods and APIs are supported by the browser
 */
var supports = function () {
  if (!document.addEventListener && !document.querySelector('body')) {
    return false;
  }
  return true;
};

(function () {
  'use strict';

  onl.decorate({
    'init-form-validation': function (element) {
      // new formvalidation(element);
    }
  });

  var formvalidation = function (element) {
    this.element = element;
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];

    // Classes and Selectors
    this.config.classErrorField = this.config.classErrorField || 'has-error';
    this.config.classValidField = this.config.classValidField || 'is-valid';
    this.config.classErrorContainer = this.config.classErrorContainer || 'form__error';
    this.config.classValidContainer = this.config.classValidContainer || 'form__success';
    this.config.classErrorsContainer = this.config.classErrorsContainer || 'form__errors';

    this.errors = [];

    this.config.txtIntroErrorsContainer = this.config.txtIntroErrorsContainer || 'Er zijn één of meerdere velden niet of niet juist ingevuld. Controleer uw gegevens en verstuur het formulier opnieuw.';
    this.config.messageLabelValid = this.config.messageLabelValid || "Correct ingevuld";

    // Messages
    this.config.messageValueMissing = this.config.messageValueMissing || "Het veld '{label}' mag niet leeg zijn.";
    this.config.messageValueMissingCheckbox = this.config.messageValueMissingCheckbox || "Het veld '{label}' is verplicht.";
    this.config.messageValueMissingRadio = this.config.messageValueMissingRadio || "Kies van veld '{label}' een waarde.";
    this.config.messageValueMissingSelect = this.config.messageValueMissingSelect || "Selecteer van veld '{label}' een waarde.";
    this.config.messageValueMissingSelectMulti = this.config.messageValueMissingSelectMulti || "Selecteer van veld '{label}' minstens één waarde.";
    this.config.messageTypeMismatchEmail = this.config.messageTypeMismatchEmail || "Vul in veld '{label}' een correct e-mailadres in.";
    this.config.messageTypeMismatchURL = this.config.messageTypeMismatchURL || "Vul in veld '{label}' een correct website-adres in.";
    this.config.messageTooShort = this.config.messageTooShort || "Gebruik in veld '{ label }' minimaal {minLength} karakters. Op dit moment gebruik je {length} karakter(s).";
    this.config.messageTooLong = this.config.messageTooLong || "Het is in veld '{label}' niet toegestaan meer dan {maxLength} karakters te gebruiken. Op dit moment gebruik je {length} karakter(s).";
    this.config.messagePatternMismatch = this.config.messagePatternMismatch || "Het veld '{label}' voldoet niet aan de eisen.";
    this.config.messageBadInput = this.config.messageBadInput || "Vul in veld '{label}' een nummer in.";
    this.config.messageStepMismatch = this.config.messageStepMismatch || "Vul in veld '{label}' een correcte waarde in.";
    this.config.messageRangeOverflow = this.config.messageRangeOverflow || "Vul in veld '{label}' een waarde in dat lager is dan {max}.";
    this.config.messageRangeUnderflow = this.config.messageRangeUnderflow || "Vul in veld '{label}' een waarde in dat hoger is dan {min}.";
    this.config.passwordMismatch = this.config.passwordMismatch || "Het veld '{label}' voldoet niet aan de beveiligingseisen.";
    this.config.passwordRepeatMismatch = this.config.passwordRepeatMismatch || "Het wachtwoord in veld '{label}' is niet gelijk aan het nieuwe wachtwoord.";
    this.config.messageGeneric = this.config.messageGeneric || "Het veld '{label}' is niet correct ingevuld.";

    this.init();
  };

  formvalidation.prototype.init = function() {
    // feature test
    if (!supports()) return;

    // Add the `novalidate` attribute to all forms
    this.addNoValidate();

    // Event listeners
    this.element.addEventListener('blur', function (e) { this.blurHandler(e) }.bind(this), true);
    this.element.addEventListener('click', function (e) { this.clickHandler(e) }.bind(this), false);
    this.element.addEventListener('submit', function (e) { this.submitHandler(e) }.bind(this), false);

  };

  formvalidation.prototype.addNoValidate = function () {
    this.element.setAttribute('novalidate', true);
  };

  formvalidation.prototype.getClosest = function (elem, selector) {
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  formvalidation.prototype.hasErrorInSubselection = function (subselection, options) {
    var subselectionSummary = subselection.querySelector('.subselection__summary');

    // check if it's required;
    if (subselectionSummary.classList.contains('required')){

      // check if it has active filters;
      var subselectionSummaryItems = subselectionSummary.childNodes;
      if (subselectionSummaryItems.length > 0) {
        return false;
      } else {
        return this.config.messageValueMissing;
      }
    }
    return false;
  }

  formvalidation.prototype.hasError = function (field, options) {
    // Don't validate submits, buttons, file and reset inputs, and disabled fields
    if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button' || field.type === undefined || field.type === 'fieldset' || field.type === 'a' || field.type === '') return;

    // Get validity
    var validity = field.validity;

    var label = this.element.querySelector('[for="' + field.getAttribute('id') + '"]');
    if(label){
      label = label.innerHTML;
    } else {
      label = '';
    }

    // If field is invalid by extern validation (ie. password validator)
    if (field.classList.contains('pw-invalid')) return this.config.passwordMismatch.replace("{label}", label);
    if (field.classList.contains('pw-invalid-repeat')) return this.config.passwordRepeatMismatch.replace("{label}", label);


    // in case of use of default patterns (number, email, dutch zipcode)
    if (field.getAttribute('data-pattern-type')) {
      if (field.getAttribute('data-pattern-type') === 'number') {
        var pattern = /^\d+$/;
      }
      if (field.getAttribute('data-pattern-type') === 'email') {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      }
      if (field.getAttribute('data-pattern-type') === 'zipcode') {
        var pattern = /^\d{4} ?[a-z]{2}$/i;
      }
      if (pattern.test(field.value)) {
        return;
      } else {
        if (field.value === '') {
          return this.config.messageValueMissing.replace('{label}', label);
        }
        if (field.hasAttribute('title')) return field.getAttribute('title');
        return this.config.messagePatternMismatch.replace('{label}', label);;
      }
    }

    // If valid, return null
    if (validity.valid) return;

    // If field is required and empty
    if (validity.valueMissing) {
      if (field.type === 'checkbox') return this.config.messageValueMissingCheckbox.replace('{label}', label);
      if (field.type === 'radio') return this.config.messageValueMissingRadio.replace('{label}', label);
      if (field.type === 'select-multiple') return this.config.messageValueMissingSelectMulti.replace('{label}', label);
      if (field.type === 'select-one') return this.config.messageValueMissingSelect.replace('{label}', label);

      return this.config.messageValueMissing.replace('{label}', label);
    }

    // If not the right type
    if (validity.typeMismatch) {
      if (field.type === 'email') return this.config.messageTypeMismatchEmail.replace('{label}', label);;
      if (field.type === 'url') return this.config.messageTypeMismatchURL.replace('{label}', label);;
    }

    // If too short
    if (validity.tooShort) return this.config.messageTooShort.replace('{minLength}', field.getAttribute('minLength')).replace('{length}', field.value.length).replace('{label}', label);;

    // If too long
    if (validity.tooLong) return this.config.messageTooLong.replace('{minLength}', field.getAttribute('maxLength')).replace('{length}', field.value.length).replace('{label}', label);;

    // If number input isn't a number
    if (validity.badInput) return this.config.messageBadInput.replace('{label}', label);;

    // If a number value doesn't match the step interval
    if (validity.stepMismatch) return this.config.messageStepMismatch.replace('{label}', label);;

    // If a number field is over the max
    if (validity.rangeOverflow) return this.config.messageRangeOverflow.replace('{max}', field.getAttribute('max')).replace('{label}', label);;

    // If a number field is below the min
    if (validity.rangeUnderflow) return this.config.messageRangeUnderflow.replace('{min}', field.getAttribute('min')).replace('{label}', label);;

    // If pattern doesn't match
    if (validity.patternMismatch) {

      // If pattern info is included, return custom error
      if (field.hasAttribute('title')) return field.getAttribute('title').replace('{label}', label);;

      // Otherwise, generic error
      return this.config.messagePatternMismatch.replace('{label}', label);;

    }

    // If all else fails, return a generic catchall error
    return this.config.messageGeneric.replace('{label}', label);;

  };

  formvalidation.prototype.showErrorSubselection = function (subselection) {
    var subselectionTrigger = subselection.querySelector('.subselection__trigger');
    var label = subselection.parentNode.querySelector('.form__sublegend');
    if(label){
      label = label.innerHTML;
    } else {
      label = '';
    }
    this.showMessage("error", subselectionTrigger, this.config.messageValueMissingCheckbox.replace('{label}', label), 'subselection');
  }

  formvalidation.prototype.showMessage = function (messageType, field, error, options) {
    /*
      Available values:
      messageType: "error", "success".
    */
    var firstOptionId = false;
    var labelText;
    var motherLabel;
    var message;
    var label;

    var subselection = this.getClosest(field, '.subselection');
    if (subselection) {
      this.removeMessage(field, subselection);
    } else {
      this.removeMessage(field);
    }

    var classStateOldField = this.config.classValidField;
    var classStateNewField = this.config.classErrorField;
    var classMessageContainer = this.config.classErrorContainer;
    var prefixId = 'message';
    if(messageType === "success") {
      classStateOldField = this.config.classErrorField;
      classStateNewField = this.config.classValidField;
      classMessageContainer = this.config.classValidContainer;
      prefixId = 'message';
    }

    // Add/remove state class to field
    if (field.type === 'select-one'){
      field.parentNode.classList.add(classStateNewField);
      field.parentNode.classList.remove(classStateOldField);
    } else {
      field.classList.add(classStateNewField);
      field.classList.remove(classStateOldField);
    }

    // If the field is a radio button and part of a group, error all and get the last item in the group
    if (field.type === 'radio' && field.name) {
      var group = document.getElementsByName(field.name);
      if (group.length > 0) {
        for (var i = 0; i < group.length; i++) {
          if (group[i].form !== field.form) continue; // Only check fields in current form

          if (messageType !== "success") {
            group[i].classList.add(this.config.classErrorField);
            group[i].classList.remove(this.config.classValidField);
          }

          // if type = radio, get id of first radio
          if(i === 0){
            firstOptionId = group[i].getAttribute('id');
          }
        }
        field = group[group.length - 1];
      }
    }

    // Get field id or name
    var id;
    if (subselection) {
      var trigger = subselection.querySelector('.subselection__trigger');
      id = trigger.getAttribute('id');
    } else {
      id = field.id || field.name;
    }

    if (!id) return;

    // create message container;
    message = document.createElement('div');
    message.classList.add('form__message');
    message.classList.add(classMessageContainer);
    message.id = prefixId + '-for-' + id;

    // If the field is a radio button or checkbox, insert error after the label
    if (field.type === 'radio' || field.type === 'checkbox') {
      if (subselection) {
        label = subselection.querySelector('.subselection__trigger');
        firstOptionId = label.getAttribute('id');
      } else {
        label = field.form.querySelector('label[for="' + id + '"]') || this.getClosest(field, 'label');
      }

      if (label) {
        label.parentNode.insertBefore(message, label.nextSibling);
        motherLabel = this.getClosest(field, '[data-radiogroup-title]');
        if (motherLabel) {
          labelText = motherLabel.getAttribute('data-radiogroup-title');
        } else {
          labelText = label.textContent;
        }
      }
    }

    // if custom-select; insert one level higher.
    if (field.type === 'select-one') {
      label = field.form.querySelector('label[for="' + id + '"]') || this.getClosest(field, 'label');
      if (label) {
        var parent = field.parentNode;
        parent.parentNode.insertBefore(message, parent.nextSibling);
        labelText = label.textContent;
      }
    }

    // Otherwise, insert it after the field
    if (!label) {
      field.parentNode.insertBefore(message, field.nextSibling);

      // options = given in function;
      if(options === 'subselection'){
        labelText = field.textContent;
      } else {
        var parent = field.parentNode;
        if(field.parentNode.classList.contains('datepicker')){
          parent = parent.parentNode;
        }
        labelText = parent.querySelector('label').textContent;
      }
    }

    // if subselection, use different ID;
    if (firstOptionId){
      this.errors.push({ "id": firstOptionId, "label": labelText });
    } else {
      // all others;
      this.errors.push({ "id": field.getAttribute('id'), "label": labelText });
    }

    // Add ARIA role to the field
    field.setAttribute('aria-describedby', prefixId + '-for-' + id);

    // Fill state container
    message.innerHTML = error;

  };

  formvalidation.prototype.markFieldValidInSummary = function (field, options) {
    var fieldId;

    var sub = this.getClosest(field, '.subselection');
    if(sub){
      // is subselection
      var subTrigger = sub.querySelector('.subselection__trigger');
      fieldId = subTrigger.getAttribute('id');
    } else {
      if (field.type === 'radio' && field.name) {
        var group = document.getElementsByName(field.name);
        if (group.length > 0) {
          for (var i = 0; i < group.length; i++) {
            if (group[i].form !== field.form) continue; // Only check fields in current form
            group[i].classList.remove(this.config.classErrorField);
          }
          field = group[0];
        }
      }
      fieldId = field.getAttribute('id')
    }
    var errorsContainerListItems = this.element.querySelectorAll('.' + this.config.classErrorsContainer + '> ul li');
    for (var i = 0; i < errorsContainerListItems.length; i++){
      if (errorsContainerListItems[i].getAttribute('data-id') === fieldId) {
        errorsContainerListItems[i].childNodes[0].classList.add('line-through');
      }
    }
  }

  // formvalidation.prototype.markFieldValid = function (field, options) {
    // field.classList.add('is-valid');
  // }


  formvalidation.prototype.removeFieldValid = function(field) {
    var id = field.getAttribute('id');
    var message = this.element.querySelector("#message-for-" + id);
    message.parentNode.removeChild(message);
  }

  formvalidation.prototype.removeMessage = function (field, subselection, options) {

    // Remove ARIA role from the field
    field.removeAttribute('aria-describedby');

    // Remove error class to field
    if (field.type === 'select-one') {
      field.parentNode.classList.remove(this.config.classErrorField);
      field.parentNode.classList.remove(this.config.classValidField);
    } else {
      field.classList.remove(this.config.classErrorField);
      field.classList.remove(this.config.classValidField);
    }


    // If the field is a radio button and part of a group, remove error from all and get the last item in the group
    if (field.type === 'radio' && field.name) {
      var group = document.getElementsByName(field.name);
      if (group.length > 0) {
        for (var i = 0; i < group.length; i++) {
          if (group[i].form !== field.form) continue; // Only check fields in current form
          group[i].classList.remove(this.config.classErrorField);
        }
        field = group[group.length - 1];
      }
    }

    // Get field id or name
    // var id = field.id || field.name;
    // if (!id) return;

    // Check if an error message is in the DOM
    var message;
    if (subselection) {
      message = subselection.querySelector('.form__message');
    } else {
      message = this.element.querySelector('#message-for-' + field.id);
    }

    if (!message) return;

    // remove error div from DOM;
    message.parentNode.removeChild(message);
  };

  formvalidation.prototype.removeErrorFromErrors = function (id) {
    var id = id;

    this.errors = this.errors.filter(function (obj) {
      return obj.id !== id;
    });
  }
  formvalidation.prototype.pushErrorToErrors = function (el, error) {
    var id = el.getAttribute('id');
    this.errors = this.errors.filter(function (obj) {
      return obj.id !== id;
    });

    var label = el.parentNode.querySelector('label').innerHTML || 'label';
    this.errors.push({ "id": el.getAttribute('id'), "label": label, "error": error });
  }

  formvalidation.prototype.addErrorToErrors = function (el, error) {
    var id = id;

    this.pushErrorToErrors(el, error);
    this.showErrorSummary();
  }

  formvalidation.prototype.showErrorSummary = function () {
    var errorsContainer = this.element.querySelector('.' + this.config.classErrorsContainer);

    if (!errorsContainer) {
      errorsContainer = document.createElement('div');
      errorsContainer.setAttribute('tabindex', '0')
      errorsContainer.classList.add(this.config.classErrorsContainer);
      this.element.insertBefore(errorsContainer, this.element.childNodes[0]);

      var errorsContainerIntro = document.createElement('p');
      errorsContainerIntro.classList.add('form__errors__heading');
      errorsContainerIntro.innerHTML = this.config.txtIntroErrorsContainer;
      errorsContainer.appendChild(errorsContainerIntro);

      var errorsContainerList = document.createElement('ul');
      errorsContainer.appendChild(errorsContainerList);
    } else {
      var errorsContainerList = this.element.querySelector('.' + this.config.classErrorsContainer + '> ul');
    }

    errorsContainerList.innerHTML = '';

    // clean up errors; remove duplicates.
    this.errors = onl.ui.uniqBy(this.errors, JSON.stringify);
    for (var i = 0; i < this.errors.length; i++) {
      this.appendErrorToErrorsList(this.errors[i]);
    }
  }

  formvalidation.prototype.isRequired = function (field) {
    // regular fields;
    if (field.hasAttribute('required')) {
      return true;
    }

    // subselection;
    var subselection = self.getClosest(field, '.subselection');
    if (subselection) {
      var subselectionRequiredState = subselection.querySelector('.subselection__summary.required');
      if (subselectionRequiredState) {
        return true;
      }
    }

    return false;
  }

  formvalidation.prototype.blurHandler = function (event) {
    var type = event.target.nodeName;

    if (event.target.type === 'submit' || type === 'DIV') return;

    if (type === 'BUTTON') {

    } else  if (type === 'A'){
    } else {
      // Validate the field
      var error = this.hasError(event.target);

      // If there's an error, show it
      if (error) {
        this.showMessage("error", event.target, error);
        return;
      }

      if (this.isRequired(event.target)) {
        this.showMessage("success", event.target, this.config.messageLabelValid);
        this.markFieldValidInSummary(event.target);
      }

    }
  };

  formvalidation.prototype.clickHandler = function (event) {

    // Only run if the field is a checkbox or radio
    var self = this;
    var type = event.target.getAttribute('type');
    if (type == null) {
      type = event.target.tagName;
    }
    if (type === 'A') {
      // if event.target is the remove-trigger for the subselection component (removes selected filter)
      if (event.target.classList.contains('subselection__summaryitem__remove')) {
        var subselectionId = event.target.getAttribute('data-subselection-id');
        var subselection = this.element.querySelector('[data-id="'+subselectionId+'"');
        var error = self.hasErrorInSubselection(subselection);

        if (error) {
          self.showErrorSubselection(subselection);
        } else {
          self.showMessage("success", event.target, subselection);
        }
      }
      return;
    }
    if (!(type === 'checkbox' || type === 'radio')) return;

    // Validate the field
    var error = this.hasError(event.target);

    // If there's an error, show it
    if (error) {
      this.showMessage("error", event.target, error);
      return;
    }

    // Otherwise, remove any errors that exist
    if(this.isRequired(event.target)){
      this.showMessage("success", event.target, this.config.messageLabelValid);
      this.markFieldValidInSummary(event.target);
    }

  };



  formvalidation.prototype.appendErrorToErrorsList = function (error) {
    var errorsContainerList = this.element.querySelector('.' + this.config.classErrorsContainer + '> ul');
    var errorMsg = error.label;

    errorMsg = errorMsg.replace("Verplicht", '');

    if (errorsContainerList){
      var item = document.createElement('li');
      var id = error.id || error.getAttribute('id');
      item.setAttribute('data-id', id);

      var link = document.createElement('a');
      link.setAttribute('href', '#'+id);
      link.innerHTML = '<span class="visually-hidden">Spring naar veld: </span>' + errorMsg;

      item.appendChild(link);
      errorsContainerList.appendChild(item);
    }

    //todo: check if empty; <- why?
  }


  formvalidation.prototype.submitHandler = function (event) {
    //reset form;
    this.errors = [];

    // Get all of the form elements
    var fields = event.target.elements;
    var subselections = this.element.querySelectorAll('.subselection__summary.required');

    // Validate each subselection field
    var hasErrors;
    for (var y = 0; y < subselections.length; y++) {
      if (subselections[y].innerHTML === ''){
        this.showErrorSubselection(subselections[y].parentNode);
        if (!hasErrors) {
          hasErrors = subselections[y];
        }
      }
    }

    // Validate each field
    // Store the first field with an error to a variable so we can bring it into focus later
    for (var i = 0; i < fields.length; i++) {

      var error = this.hasError(fields[i]);
      if (error) {
        // console.log('in submitHandler');
        this.showMessage("error", fields[i], error);
        if (!hasErrors) {
          hasErrors = fields[i];
        }
      }
    }
    if(hasErrors){
      this.showErrorSummary(this.errors);
    }

    // Prevent form from submitting if there are errors or submission is disabled
    if (hasErrors) {
      event.preventDefault();
    }

    // If there are errrors, focus on first element with error
    if (hasErrors) {
      var errorsContainer = this.element.querySelector('.' + this.config.classErrorsContainer);
      errorsContainer.focus();
      return;
    }

    // Otherwise, submit the form
    if (this.config.debug){
      // event.preventDefault();
      console.log('debug: Form submit');
    } else {
      // event.preventDefault();
      // console.log('prod: Form submit');
      this.element.submit();
    }

  };

})();
/*
Inspired by Go Make Things, LLC's project "validate", MIT, https://github.com/cferdinandi/validate
*/

(function () {

  'use strict';

  onl.decorate({

    'init-kpm': function (element) {
      new kpmService(element, 'push');
    }
  });

  var kpmService = function (element, action) {
    this.element = element;
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];
    this.dataFromJSON = document.querySelector(this.config.config).innerHTML;
    this.rangeSelectors = document.querySelectorAll(this.config.rangeselector);
    var self = this;
    var isModalVisible = true;
    this.id = this.element.getAttribute('id');

    var insideModal = getClosest(this.element, '.modal');
    if (insideModal) {
      isModalVisible = isVisible(insideModal);
    }

    if (!isModalVisible) {
      var subscription = pubsub.subscribe('/modal/open', function (obj) {
        var kpmMap = obj.modal.querySelector('.map__kpm');
        if (!kpmMap) { return; }
        if (self.id === kpmMap.getAttribute('id')) {
          self.setupMap();
        }
      });
      return;
    }

    if (this.rangeSelectors) {
      this.setRangeListener();
    }

    if ( action === 'push') {
      this.setupMap();
    }
  };

  kpmService.prototype.setRangeListener = function(  ) {
    var y;

    for (y = 0; y < this.rangeSelectors.length; y++) {
      this.rangeSelectors[y].addEventListener('change', function (e) { this.setupMap(e, "editRange"); }.bind(this), false);
    }
  };

  kpmService.prototype.setupMap = function(e, action ) {

    window.kaartprikmodule = window.kaartprikmodule || [];

    // create default object;
    this.data = {
      debug: false,
      on_cancel: function () {
        // console.log("The user has closed the map without saving");
      },
      on_submit: function (result) {
        // console.log("The following result was returned:", result);
      }
    };
    this.data.mount_element = document.getElementById(this.element.getAttribute('id'));


    // extend object with component config;
    Object.assign(this.data, JSON.parse(this.dataFromJSON));

    if(action === "editRange") {
      var parent = getClosest(this.element, '.map');

      if (e.target.value === "hideMap"){
        parent.setAttribute('hidden','hidden');
      } else {
        this.data.options.center.circle.radius = parseInt(e.target.value, 10);
        parent.removeAttribute('hidden');
      }
    }

    // start KPM;
    this.renderMap();

  };

  kpmService.prototype.renderMap = function () {
    kaartprikmodule.bootstrapKpm(this.data);
  };

})();

(function () {
  'use strict';

  onl.decorate({
    'init-passwordstrength': function (element) {
      new passwordstrength(element);
    }
  });

  var passwordstrength = function (element) {
    this.element = element;
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];
    this.fieldPassword = this.config.fieldPassword || '.js-passwordstrength__input';
    this.fieldPassword = this.element.querySelector(this.fieldPassword);
    this.fieldPasswordRepeat = this.config.fieldPasswordRepeat || '.js-passwordstrength__inputrepeat';
    this.fieldPasswordRepeat = document.querySelector(this.fieldPasswordRepeat);
    this.regexContainer = this.element.querySelector('.js-passwordstrength__regexcontainer > div');
    this.regexs = this.regexContainer.querySelectorAll('[data-regex]');

    this.duplicateRegexContainer = document.querySelector('.js-passwordstrength__duplicateregexcontainer');
    if (this.duplicateRegexContainer){
      this.makeDuplicateRegexContainer();
    }
    this.initEventListeners();
  };

  passwordstrength.prototype.initEventListeners = function() {
    if (this.fieldPassword){
      this.fieldPassword.addEventListener('keyup', function (e) { this.validateField(e); }.bind(this), false);
    }
    if (this.fieldPasswordRepeat){
      this.fieldPasswordRepeat.addEventListener('keyup', function(e) { this.validateFieldRepeat(e); }.bind(this), false);
    }
  };

  passwordstrength.prototype.makeDuplicateRegexContainer = function() {
    this.duplicateRegexContainer.innerHTML = '';
    var duplicate = this.regexContainer.cloneNode(true);
    this.duplicateRegexContainer.appendChild(duplicate);
  }

  passwordstrength.prototype.validateField = function() {
    var i;
    var regexFormula;
    var totalCorrect = 0;
    var self = this;

    // reset actives;
    for (i = 0; i < this.regexs.length; i++) {
      this.regexs[i].classList.remove('is-active');
      this.regexContainer.setAttribute('role', '');
    }

    for (i = 0; i < this.regexs.length; i++) {
      regexFormula = new RegExp(this.regexs[i].dataset.regex);

      if (regexFormula.test(this.fieldPassword.value)){
        this.regexs[i].classList.add('is-active');
        totalCorrect++;
        this.regexContainer.setAttribute('role', 'alert');
      }
    }

    if (totalCorrect === this.regexs.length) {
      this.fieldPassword.classList.add('is-valid');
      this.fieldPassword.classList.remove('pw-invalid');
    } else {
      this.fieldPassword.classList.remove('is-valid');
      this.fieldPassword.classList.add('pw-invalid');
    }

    if (this.fieldPasswordRepeat) {
      if (this.fieldPasswordRepeat.value !== ''){
        this.validateFieldRepeat();
      }
    }

    this.makeDuplicateRegexContainer();

  };

  passwordstrength.prototype.validateFieldRepeat = function() {
    var fieldRepeat = this.fieldPasswordRepeat.value;
    var field = this.fieldPassword.value;

    if (field !== fieldRepeat) {
      this.showError(this.fieldPasswordRepeat);
      this.fieldPasswordRepeat.classList.remove('is-valid');
      this.fieldPasswordRepeat.classList.add('pw-invalid-repeat', 'has-error');
    } else {
      this.removeError(this.fieldPasswordRepeat);
      // if (this.fieldPassword.classList.contains('is-valid')){
        this.fieldPasswordRepeat.classList.add('is-valid');
        this.fieldPasswordRepeat.classList.remove('pw-invalid-repeat');
      this.fieldPasswordRepeat.classList.remove('has-error');
      // }
    }
  };

  passwordstrength.prototype.showError = function (field) {
    if (field.nextElementSibling){
      field.nextElementSibling.removeAttribute('hidden');
    }
  }
  passwordstrength.prototype.removeError = function (field) {
    if (field.nextElementSibling) {
      field.nextElementSibling.setAttribute('hidden', 'hidden');
    }
  }


})();


(function () {
  'use strict';

  onl.decorate({
    'init-scroll-chapter': function (element) {
      new scrollChapter(element);
    }
  });

  var scrollChapter = function (element) {
    this.element = element;
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];

    this.chapterLinks = this.config.chapterLinks || document.querySelectorAll('.nav-sub a');
    this.chapters = this.config.chapters || document.querySelectorAll('.js-scrollSection');
    this.lastId;
    this.cur = [];

    this.initEventListeners();

  };

  scrollChapter.prototype.initEventListeners = function() {

    window.addEventListener('scroll', function(e) {
      var self = this;
      var timer;

      if (timer) {
        window.clearTimeout(timer);
      }

      timer = window.setTimeout(function() {
        self.onScroll(e);
      }, 10);
     }.bind(this), false);

  };

  scrollChapter.prototype.offset = function(el){
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  scrollChapter.prototype.onScroll = function() {
    var section;
    var fromTop = window.pageYOffset + 2;
    var offset;
    var i;
    var link;

    for (i = 0; i < this.chapterLinks.length; i++) {
      link = this.chapterLinks[i];
      if (link.hash !== '') {
        section = document.querySelector(link.hash);
        offset = this.offset(section);
        if (
          offset.top <= fromTop &&
          offset.top + section.offsetHeight > fromTop
        ) {
          link.classList.add('is-currentchapter');
        } else {
          link.classList.remove('is-currentchapter');
        }
      }
    }

  };

})();


// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.



onl.handle({
  /**
   * Close an alert that is fixed to the top of the screen.
   * @param element 
   * @param event 
   */
  'close-alert': function(element, event) {
    event.preventDefault();

    var alerts = findAncestorWithClass(element, 'alert');

    // Prevention of classList.replace as IE9 does not support it.
    alerts.classList.remove('show');
    alerts.classList.add('hide');

    setTimeout(function() {
      alerts.classList.remove('hide');
    }, 500);
  }
});

/**
 * Finds and returns the first ancestor with a given class.
 * @param el element to start looking from
 * @param className class name to look for
 */
function findAncestorWithClass(el, className) {
  while((el = el.parentElement) && !el.classList.contains(className));
  return el;
}

(function () {

  'use strict';

  var collapsibles = {
    show: function ( collapsible ) {
      onl.dom.$( '.collapsible__header a', collapsible )[0].setAttribute( 'aria-expanded', 'true' );
      if(onl.dom.$( '.collapsible__header a', collapsible )[0].getAttribute( 'data-text') == 'show/hide'){
        onl.dom.$( '.collapsible__header a', collapsible )[0].innerHTML='Toon minder informatie';
      }
      onl.ui.show( onl.dom.$( '.collapsible__content', collapsible )[0] );
    },
    hide: function ( collapsible ) {
      onl.dom.$( '.collapsible__header a', collapsible )[0].setAttribute( 'aria-expanded', 'false' );
      if(onl.dom.$( '.collapsible__header a', collapsible )[0].getAttribute( 'data-text') == 'show/hide'){
        onl.dom.$( '.collapsible__header a', collapsible )[0].innerHTML='Toon meer informatie';
      }
      onl.ui.hide( onl.dom.$( '.collapsible__content', collapsible )[0] );
    },
    isCollapsed: function ( collapsible ) {
      return onl.ui.isHidden( onl.dom.$( '.collapsible__content', collapsible )[0] );
    }
  };

  onl.handle({
    'toggle-collapsible': function( element, event ) {
      var collapsibleElement = element.closest( '.collapsible' );
      var collapsiblesParentContainer = collapsibleElement.parentElement;
      var collapsibleSiblings = onl.dom.$( '.collapsible', collapsiblesParentContainer ).filter( function( element ) {
        return element.id === collapsibleElement.id;
      });

      event.preventDefault();

      if ( collapsibles.isCollapsed( collapsibleElement ) ) {
        collapsibleSiblings.forEach( function ( sibling ) {
          if ( !collapsibles.isCollapsed( sibling ) )
            collapsibles.hide( sibling );
        } );
        collapsibles.show( collapsibleElement );
      }
      else {
        collapsibles.hide( collapsibleElement );
      }
    }
  });

  onl.decorate({
    'init-collapsible': function( element ) {
      var showInitially = onl.dom.$('.collapsible--initially-visible', element ).length > 0;

      if ( showInitially === true ){
        collapsibles.show( element );
      }
      else {
        collapsibles.hide( element );
      }
    }
  });

})();
(function () {

  'use strict';

  onl.decorate({
    'init-copydata': function( element ) {
      new copydata( element );
    }
  });

  var copydata = function( element ) {
    this.element = element;
    this.datafield = element.querySelector( '.js-copydata__datafield' );
    this.config = JSON.parse( this.element.getAttribute( 'data-config' ) ) || [];
    this.init();
  };

  copydata.prototype.init = function( ) {
    this.createAndPlaceTrigger();
    this.addEventListeners();
  };

  copydata.prototype.addEventListeners = function() {
    this.trigger.addEventListener( 'click', function( e ) { this.triggerCopy( e ); }.bind( this ), false );
  };

  copydata.prototype.triggerCopy = function(e) {
    e.preventDefault();
    this.putValueInClipboard();
  };

  copydata.prototype.createAndPlaceTrigger = function() {
    this.trigger = document.createElement( 'span' );
    this.triggerSpan = document.createElement( 'span' );
    this.trigger.classList.add( this.config.triggerClass );
    this.trigger.setAttribute('tabindex', '0');
    this.trigger.setAttribute('aria-label', this.config.triggerLabel + ':' + this.datafield.innerHTML);
    this.triggerSpan.innerText = this.config.triggerLabel;
    this.trigger.appendChild(this.triggerSpan);
    this.element.appendChild( this.trigger );
  };

  copydata.prototype.giveFeedbackToUser = function() {
    var self = this;
    var originalLabel = this.trigger.innerText;
    var tempLabel = this.config.triggerCopiedlabel || 'Gekopiëerd';

    this.trigger.classList.add("is-active");
    this.triggerSpan.innerHTML = tempLabel;

    setTimeout( function(){
      self.triggerSpan.innerHTML = originalLabel;
      self.trigger.classList.remove("is-active");
    }, 5000 );

  };

  copydata.prototype.putValueInClipboard = function() {
    if ( document.selection ) {
      var range = document.body.createTextRange( this.datafield );
      range.moveToElementText();
      range.select().createTextRange();
      document.execCommand( "copy" );
    } else if ( window.getSelection ) {
      var range = document.createRange();
      range.selectNode( this.datafield );
      window.getSelection().removeAllRanges( range );
      window.getSelection().addRange( range );
      document.execCommand( "copy" );
    }
    this.giveFeedbackToUser();
  };

})();

(function () {

  'use strict';

  onl.decorate({
    'init-footnote': function (element) {
      new footnote(element);
    }
  });

  var footnote = function (element) {
    this.element = element;
    this.footnote = document.querySelector(this.element.getAttribute('href'));
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];
    this.referenceClass = this.config.referenceClass || '.reference';
    this.init();
  };

  footnote.prototype.init = function () {
    this.element.setAttribute('id', 'footnumber' + Math.floor(Math.random() * (+10000 - +0)) + +0 );
    this.addEventListeners();
  };

  footnote.prototype.addEventListeners = function () {
    this.element.addEventListener('click', function (e) { this.setReferenceAnker(e); }.bind(this), false);
  };

  footnote.prototype.setReferenceAnker = function () {
    this.footnote.querySelector('.reference').setAttribute('href', '#' + this.element.getAttribute('id'));
  };

})();

(function () {

  'use strict';

  var modalInvisibleClass = 'modal--off-screen'; /* we use this so that we can animate visibility */
  var previouslyFocused = null;
  var SHOW_DELAY = 400;

  var modal = {
    open: function (modal, element ) {

      previouslyFocused = document.activeElement;

      // To facilitate animation, this show(), while it toggles the `hidden` attribute,
      // does not actually make it visible just yet
      onl.ui.show( modal );
      modal.classList.add('is-open');

      window.setTimeout( function() {
        // This makes the element actually visible on screen
        modal.classList.remove( modalInvisibleClass );
      }, SHOW_DELAY );

      onl.ui.focus( modal );
      onl.ui.bindFocusTrap( modal );

      var config = JSON.parse(element.getAttribute('data-config')) || [];
      if (typeof window[config.function] === 'function') {
        var functionToCall = window[config.function];
        new functionToCall(config.action, JSON.parse(document.getElementById(config.data).innerHTML));
      }

      // if ( config.function === 'kpm' ) {
      //   if ( config.action === 'push' ) {
      //     kpmService.push( JSON.parse(document.getElementById(config.data).innerHTML ) );
      //   }
      // }

      pubsub.publish('/modal/open', {
        modal: modal
      });

    },
    close: function( modal ) {
      onl.ui.hide( modal );
      modal.classList.add( modalInvisibleClass );
      modal.classList.remove('is-open');

      onl.ui.unbindFocusTrap( modal );

      if ( previouslyFocused ) {
        onl.ui.focus( previouslyFocused );
      }
    },
    recalculateAndSetBounds: function( modalElement ) {
      var modal = modalElement;
      var height = window.innerHeight;
      var dialogContent = modal.querySelector( '.modal__content' );

      // reset height, before calculating
      dialogContent.style.height = 'auto';

      if ( ( dialogContent.offsetHeight + 100 ) >= height ) {
        dialogContent.style.height = height - 100 + 'px';
      } else {
        dialogContent.style.height = 'auto';
      }
    },
    setHeight: function( modalElement ) {
      var resizeTimeout;

      modal.recalculateAndSetBounds( modalElement );

      window.addEventListener( 'resize', function() {
        if ( resizeTimeout ) {
          clearTimeout( resizeTimeout );
        }
        resizeTimeout = window.setTimeout( function() {
          modal.recalculateAndSetBounds( modalElement );
        }, 50 );
      });
    }
  };

  onl.decorate({
    'init-modal': function( element ) {

    }
  });

  onl.handle({
    'open-modal': function( element, event ) {
      event.preventDefault();
      var modalElement = document.getElementById( element.getAttribute( 'data-modal' ) );
      var body = document.getElementsByTagName('body');
      body[0].classList.add('no-scroll');
      body[0].classList.add('is-modal-open');

      modal.open(modalElement, element );
      modal.setHeight ( modalElement );
    },
    'close-modal': function( element ) {
      var modalElement;
      var body = document.getElementsByTagName('body');
      body[0].classList.remove('no-scroll');
      body[0].classList.remove('is-modal-open');

      if ( element.getAttribute( 'data-modal' ) ) {
        modalElement = document.getElementById( element.getAttribute( 'data-modal' ) );
      }
      else {
        modalElement = element.closest( '.modal' );
      }

      modal.close( modalElement );
    }
  });


})();

(function () {

  'use strict';

  var previouslyFocused = null;


  var modalsidebar = {
    open: function( modal ) {
      previouslyFocused = document.activeElement;

      modal.classList.add('is-open');

      onl.ui.focus( modal );
      onl.ui.bindFocusTrap( modal );
    },
    close: function( modal ) {

      modal.classList.remove('is-open');

      onl.ui.unbindFocusTrap( modal );

      if ( previouslyFocused ) {
        onl.ui.focus( previouslyFocused );
      }
    }
  };

  onl.decorate({
    'init-modalsidebar': function() {
    },
    'init-fixedbottom-button': function(element) {
      new fixedbottomButton(element);
    }
  });

  var fixedbottomButton = function (element) {
    this.element = element;
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];
    this.allInputs = onl.dom.$( 'input, select', element );
    this.button = onl.dom.$( '.js-fixedbottom-button__button', element )[0] || false;

    if(this.button){
      // this.button.setAttribute('hidden', 'hidden');
      this.init();
    }
  };

  fixedbottomButton.prototype.init = function () {
    this.attachListerners();
  };
  fixedbottomButton.prototype.attachListerners = function () {
    var i;

    for (i = 0; i < this.allInputs.length; i++) {
      this.allInputs[i].addEventListener('change', function (e) { this.doChangeAction(e); }.bind(this), false);
    }
  };
  fixedbottomButton.prototype.doChangeAction = function () {
    this.button.removeAttribute('hidden');
  };

  onl.handle({
    'open-modalsidebar': function( element ) {
      var modalElement = document.getElementById( element.getAttribute( 'data-modal' ) );
      var body = document.getElementsByTagName('body');

      body[0].classList.add('no-scroll');
      body[0].classList.add('has-modal-open');

      modalsidebar.open( modalElement );
    },
    'close-modalsidebar': function( element ) {
      var modalElement;
      var body = document.getElementsByTagName('body');

      body[0].classList.remove('no-scroll');
      body[0].classList.remove('has-modal-open');

      if ( element.getAttribute( 'data-modal' ) ) {
        modalElement = document.getElementById( element.getAttribute( 'data-modal' ) );
      }
      else {
        modalElement = element.closest( '.modal-sidebar' );
      }

      modalsidebar.close( modalElement );
    }
  });
})();

(function () {

  'use strict';

  var toggle = function( element ) {
    var toggledElement = document.getElementById( element.getAttribute( 'aria-controls' ) );
    var isExpanded = element.getAttribute( 'aria-expanded' ) === 'true';

    if ( isExpanded ) {
      onl.ui.hide( toggledElement );
      element.setAttribute( 'aria-expanded', 'false' );
    } else {
      onl.ui.show( toggledElement );
      element.setAttribute( 'aria-expanded', 'true' );
    }
  };

  onl.decorate({
    'init-profile-toggle': function( element ) {
      var togglerHolder = onl.dom.$( '[data-toggler]', element )[0];
      var toggled = onl.dom.$( '[data-toggled]', element )[0];
      var toggler = document.createElement( 'button' );

      toggler.type = 'button';
      toggler.textContent = 'Opties';
      toggler.setAttribute( 'aria-controls', toggled.id );
      toggler.setAttribute( 'aria-expanded', 'true' ); // this gets set to false when toggle( toggler ) is called
      toggler.setAttribute( 'data-handler', 'toggle-profile-options' );

      togglerHolder.appendChild( toggler );
      toggle( toggler );
    }
  });

  onl.handle({
    'toggle-profile-options': function( element ) {
      toggle(element);
    }
  });

})();
(function () {
  'use strict';

  onl.decorate({
    'init-sourceslist': function (element) {
      new sourceslist(element);
    }
  });

  var sourceslist = function (element) {
    this.element = element;
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];

    this.triggerClass = this.config.triggerClass || '.js-sourceslist-statetrigger';
    this.triggerConfig = JSON.parse(this.element.getAttribute('data-config')) || [];

    this.stateTriggers = document.querySelectorAll(this.triggerClass);

    this.initEventListeners();

  };



  sourceslist.prototype.initEventListeners = function () {
    var y;
    for (y = 0; y < this.stateTriggers.length; y++) {
      this.stateTriggers[y].addEventListener('click', function (e) { this.getTriggerConfig(e); }.bind(this), false);
    }
  };

  sourceslist.prototype.getTriggerConfig = function (e) {
    e.preventDefault();
    var trigger = e.target;
    var triggerDataset = JSON.parse(trigger.dataset.config);
    var state = triggerDataset.state;
    var id = triggerDataset.id;

    this.sourceslist = document.querySelector('#' + id);

    if (this.sourceslist) {
      this.sourceslist.classList.add('is-state-' + state);
      this.sourceslist.setAttribute('role', 'alert');
      this.sourceslist.setAttribute('tabindex', '0');
      this.sourceslist.focus();
      trigger.setAttribute('hidden', 'hidden');
      this.createDiscardLink(trigger);
    }

  };

  sourceslist.prototype.createDiscardLink = function (trigger) {
    var newNode = document.createElement('a');
    var text = document.createTextNode("Annuleren");
    newNode.appendChild(text);
    newNode.href = "#";

    var referenceNode = trigger;
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

    newNode.addEventListener('click', function (e) { this.reset(e, trigger); }.bind(this), false);
  }

  sourceslist.prototype.reset = function (e, trigger) {
    e.preventDefault();
    e.target.parentNode.removeChild(e.target);
    trigger.removeAttribute('hidden');
    this.sourceslist.classList.remove('is-state-actions');
  }

})();

(function () {

  'use strict';

  onl.decorate({
    'init-table': function( element ) {
      var div = document.createElement( 'div' );
      var container = div.cloneNode( false );

      element.parentNode.insertBefore( container, element );
      container.classList.add( 'table__container' );
      container.appendChild( element );
    }
  });

})();

( function() {

  'use strict';

  var tabs = {
    openPanel: function( element ) {
      var tabsHolder = element.closest( '[data-decorator="init-tabs"]' );
      var tabs = onl.dom.$( '[role="tab"]', tabsHolder );
      var currentTab = onl.dom.$( '[aria-selected="true"]', tabsHolder )[0];
      // var currentPanel = document.getElementById( currentTab.getAttribute( 'aria-controls' ) );
      var currentPanel = onl.dom.$( '#' + currentTab.getAttribute( 'aria-controls' ), tabsHolder )[0];
      var panelToShow = onl.dom.$( '#' + element.getAttribute( 'aria-controls' ), tabsHolder )[0];

      // set tab-hash in url;
      window.location.hash = element.getAttribute( 'aria-controls' );

      // hide current panel
      onl.ui.hide( currentPanel );

      // show panel to show
      onl.ui.show( panelToShow );

      // update aria-selected attributes
      tabs.forEach( function( tab ) {
        tab.setAttribute( 'aria-selected', 'false' );
      });

      element.setAttribute( 'aria-selected', 'true' );
    },
    // get next panel element based on current tab element
    getNextPanel: function( currentPanel ) {
      if ( currentPanel.parentElement.nextElementSibling ) {
        return currentPanel.parentElement.nextElementSibling.firstElementChild;
      }
      else {
        return currentPanel.parentElement.parentElement.firstElementChild.firstElementChild;
      }
    },
    // get previous panel element based on current tab element
    getPreviousPanel: function( currentPanel ) {
      if ( currentPanel.parentElement.previousElementSibling ) {
        return currentPanel.parentElement.previousElementSibling.firstElementChild;
      }
      else {
        return currentPanel.parentElement.parentElement.lastElementChild.lastElementChild;
      }
    },
    // get current panel element from any element inside tabs element
    getCurrentPanel: function( element ) {
      var tabsHolder = element.closest( '[data-decorator="init-tabs]' );

      return onl.dom.$( '[aria-selected="true"]', tabsHolder )[0];
    },
    switch: function( event ) {
      var currentPanel = event.target;
      var nextPanel = tabs.getNextPanel( currentPanel );
      var previousPanel = tabs.getPreviousPanel( currentPanel );

      if ( event.which === 39 ) {
        nextPanel.focus();
        tabs.openPanel( nextPanel );
      }

      if ( event.which === 37 ) {
        previousPanel.focus();
        tabs.openPanel( previousPanel );
      }
    }
  };

  onl.decorate({
    'init-tabs': function( element ) {
      var theseTabs = onl.dom.$( '[role="tab"]', element );
      var panels = onl.dom.$( '[role="tabpanel"]', element );
      var totalPanels = 0;
      var hasHashTab;

      // set all selected states
      // fire switchTab function when keys are pressed
      theseTabs.forEach( function( tab ) {
        tab.setAttribute( 'aria-selected', 'false' );
        tab.addEventListener( 'keyup', tabs.switch );
      });

      // hide all panels
      panels.forEach( function( panel ) {
        onl.ui.hide( panel );
      });

      var hash = window.location.hash;
      if ( window.location.hash !== '' ) {
        hash = hash.substr ( 1, 500 );

        panels.forEach( function( panel ) {
          if ( hash !== '' && hash === panel.getAttribute( 'id' ) ) {
            onl.ui.show( panel );
            theseTabs[totalPanels].setAttribute( 'aria-selected', 'true' );
            hasHashTab = true;
          }
          totalPanels++;
        });
        if ( !hasHashTab ) {
          onl.ui.show(panels[0]);
          theseTabs[0].setAttribute('aria-selected', 'true');
        }
      } else {
        // show first panel
        onl.ui.show( panels[0] );
        theseTabs[0].setAttribute( 'aria-selected', 'true' );
      }
    }
  });

  onl.handle({
    'open-panel': function( element, event ) {
      event.preventDefault();
      tabs.openPanel( element );
    },
    'open-next-panel': function( element ) {
      var currentPanel = tabs.getCurrentPanel( element );
      var nextPanel = tabs.getNextPanel( currentPanel );
      tabs.openPanel( nextPanel );
    },
    'open-previous-panel': function( element ) {
      var currentPanel = tabs.getCurrentPanel( element );
      var prevPanel = tabs.getPreviousPanel( currentPanel );
      tabs.openPanel( prevPanel );
    }
  });

})();

( function() {

  'use strict';

  onl.decorate({
    'to-top': function( element ) {
      var el = element;
      el.classList.add('irrelevant');
      window.addEventListener('scroll', function () {
        var footer = document.querySelector('.footer');
        var footerTop = footer.offsetTop;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 500 && (scrollTop + window.innerHeight <= footerTop ) ) {
          el.classList.remove('irrelevant');
        } else {
          el.classList.add('irrelevant');
        }
      });
    }

  });

})();

( function() {

  'use strict';

  var openText = 'Toon onderliggende';
  var closeText = 'Verberg onderliggende';

  var treeview = {
    getFoldableChildren: function( element ) {
      // note: element is <a> element that contains button ;
      // this returns an array of all the elements except the
      return Array.prototype.slice.call( element.parentNode.children, 1 );
    },
    getFoldableChildrenIDRef: function( foldableChildren ) {
      var string = '';
      var i;

      for ( i = 0; i < foldableChildren.length; i++ ) {
        if ( i > 0 ) {
          string += ' ' + foldableChildren[i].id;
        }
        else {
          string += foldableChildren[i].id;
        }
      }

      return string;
    }
  };

  onl.handle({
    'toggle-fold': function( element, event ) {

      var containingLink = element.parentNode;
      var subLists = treeview.getFoldableChildren( containingLink );

      event.preventDefault();

      subLists.forEach( function( toggleable ) {
        if ( onl.ui.isHidden( toggleable ) ) {
          onl.ui.show( toggleable );
          element.textContent = closeText;
          element.setAttribute( 'aria-expanded', 'true' );
        }
        else {
          onl.ui.hide( toggleable );
          element.textContent = openText;
          element.setAttribute( 'aria-expanded', 'false' );
        }
      });
    }
  });

  onl.decorate({
    'add-foldability': function( element ) {

      var foldableChildren = treeview.getFoldableChildren( element );
      var foldableChildrenIDRef = treeview.getFoldableChildrenIDRef( foldableChildren );
      var needsFoldability = foldableChildren.length > 0;
      var toggleButton;

      if ( needsFoldability ) {
        toggleButton = document.createElement( 'button' );
        toggleButton.type = 'button';
        toggleButton.textContent = closeText;
        toggleButton.setAttribute( 'data-handler', 'toggle-fold' );
        toggleButton.setAttribute( 'aria-expanded', 'false' );

        if ( foldableChildrenIDRef ) {
          toggleButton.setAttribute( 'aria-controls', foldableChildrenIDRef );
        }

        element.appendChild( toggleButton );
      }
    }
  });

})();

(function () {
  'use strict';

  onl.decorate({
    'init-video': function (element) {
      new video(element);
    }
  });

  var video = function (element) {
    this.element = element;
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];
    this.placeholderContainer = this.element.querySelector('.video__placeholder');
    this.trigger = this.element.querySelector('.video__placeholder button');
    this.initEventListeners();
  };

  video.prototype.initEventListeners = function (e) {
    this.trigger.addEventListener('click', function (e) { this.showVideo(e); }.bind(this), false);
  };

  video.prototype.showVideo = function () {
    this.element.classList.add('is-video');
    this.element.setAttribute('role', 'alert');
  };

})();

(function() {
  onl.decorate({
    'active-item-toggle': function(element, event) {
      var contentItems = element.querySelectorAll('.content-item');

      contentItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
          // Prevent the flow from executing if the user clicks on one of the modal buttons.
          if(e.target.type === 'button') {
            return;
          }

          var activeItem = document.getElementsByClassName('content-item active');

          if(activeItem.length > 0) {
            // If the current item clicked is the active item, remove class and return early.
            if(activeItem[0] === item) {
              activeItem[0].classList.remove('active');
              return;
            }

            activeItem[0].classList.remove('active');
          }

          item.classList.add('active');
        });
      });
    }
  });
})();

onl.handle({
  'toggle-other-sites': function( element, event ) {
    var otherSites = onl.dom.getElementFromHref( element.href );
    var toggleState = element.getAttribute( 'aria-expanded' );
    var openEvent = document.createEvent( 'Event' );
    var closeEvent = document.createEvent( 'Event' );

    event.preventDefault();

    openEvent.initEvent( 'othersites:open', true, true );
    closeEvent.initEvent( 'othersites:close', true, true );

    if ( toggleState === 'true' ) {
      onl.ui.hide( otherSites );
      element.setAttribute( 'aria-expanded', 'false' );
      window.dispatchEvent( closeEvent );
    }

    else {
      onl.ui.show( otherSites );

      if ( onl.ui.getFocusableElements( otherSites ).length > 0 ) {
        onl.ui.focus( onl.ui.getFocusableElements( otherSites )[0] );
      }
      else {
        onl.ui.focus ( otherSites );
      }

      element.setAttribute( 'aria-expanded', 'true' );
      window.dispatchEvent( openEvent );
    }
  },
  'toggle-nav': function( element ) {
    var nav = document.getElementById( element.getAttribute( 'aria-controls' ) );
    var closedClass = 'header__nav--closed';

    if ( element.getAttribute( 'aria-expanded' ) === 'false' ) {
      nav.classList.remove( closedClass );
      element.setAttribute( 'aria-expanded', 'true' );
      onl.ui.focus( nav );
    }
    else {
      nav.classList.add( closedClass );
      element.setAttribute( 'aria-expanded', 'false' );
    }
  }
});

onl.decorate({
  'init-toggle-other-sites': function( element ) {
    var otherSites = onl.dom.getElementFromHref( element.href );

    element.setAttribute( 'aria-controls', otherSites.id );
    element.setAttribute( 'aria-expanded', 'false' );

    otherSites.classList.add( 'header__more--closed' );

    onl.ui.hide( otherSites );
  }
});

( function() {

  'use strict';

  var searchToggle = {
    context: {
      searchTermHiddenClass : 'search__term--hidden',
      searchTermAnimateClass : 'search__term--animating',
      open : 'Open zoekveld',
      close : 'Sluit zoekveld',
      submit : 'Zoek'
    },
    handleInputChange: function( event ) {
      var input = event.target;
      var button = input.form.querySelector( 'button' );

      if ( input.value.length > 0 ) {
        button.textContent = searchToggle.context.submit;
      }
      else {
        button.textContent = searchToggle.context.close;
      }
    }
  };

  onl.handle({
    'toggle-search': function toggleSearch( submitButton, event ) {
      var form = submitButton.closest( 'form' );
      var searchTerm = form.querySelector( '.search__term' );
      var searchButton = form.querySelector( 'button' );
      var searchTermHiddenClass = searchToggle.context.searchTermHiddenClass;

      event.preventDefault();

      if ( searchTerm.value.length > 0 ) {
        form.submit();
      }
      else {
        if ( searchTerm.classList.contains( searchTermHiddenClass ) ) {
          // open
          searchTerm.classList.remove( searchTermHiddenClass );
          searchTerm.focus();
          searchButton.textContent = searchToggle.context.close;
        }
        else {
          // close
          searchTerm.classList.add( searchTermHiddenClass );
          searchButton.textContent = searchToggle.context.open;
          searchTerm.value = ''; // reset so we don't submit while term is hidden
        }
      }
    }
  });

  onl.decorate({
    'init-search-toggle': function( element ) {
      var searchTerm = element.querySelector( '.search__term' );
      var searchButton = element.querySelector( 'button' );

      var searchTermHiddenClass = searchToggle.context.searchTermHiddenClass;
      var searchTermAnimateClass = searchToggle.context.searchTermAnimateClass;

      searchTerm.classList.add( searchTermHiddenClass );
      searchTerm.addEventListener( 'keyup', searchToggle.handleInputChange );
      searchButton.textContent = searchToggle.context.open;
      searchButton.setAttribute( 'data-handler', 'toggle-search' );

      setTimeout( function(){
        searchTerm.classList.add( searchTermAnimateClass );
      }, 500 );
    }
  });

})();

(function() {

  onl.decorate({
    'init-datepicker': function(element) {
      new datepicker(element);
    }
  });

  var datepicker = function(element) {
    var self = this;

    this.element = element;
    this.elementId = this.element.getAttribute('id');
    this.config = JSON.parse( this.element.getAttribute( 'data-config' ) ) || [];
    // todo: make config extendable on component level.
    this.config.isTouch = onl.ui.isTouch();
    this.config.months = [ 'januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december' ];
    this.round = 0;



    this.createHiddenField();

    if ( !this.config.isTouch ) {
      this.initDatepicker( element );

      $(element).on('change', function () {
        this.setAttribute('data-date', moment(this.value, 'YYYY-MM-DD').format(this.getAttribute('data-date-format')));
        self.hiddenfield.setAttribute('value', this.value);
        if ( self.round > 0 ) {
          if ($('.js-fixedbottom-button__button')){
            $('.js-fixedbottom-button__button').removeAttr('hidden');
          }
        }
        self.round++;
      }).trigger('change');
    } else {
      $(element).on('change', function () {
        this.setAttribute('data-date', moment(this.value, 'YYYY-MM-DD').format(this.getAttribute('data-date-format')));
        self.hiddenfield.setAttribute('value', moment(this.value, 'YYYY-MM-DD').format(this.getAttribute('data-date-format')));
        if (self.round > 0) {
          if ($('.js-fixedbottom-button__button')) {
            $('.js-fixedbottom-button__button').removeAttr('hidden');
          }
        }
        self.round++;
      }).trigger('change');
    }
  };

  datepicker.prototype.initDatepicker = function(element) {
    var self = this;

    // datepicker config
    $(element).attr('type', 'text').datepicker({
      dateFormat: this.config.dateFormat || 'dd-mm-yy',
      showOn: 'button',
      changeYear: true,
      yearRange: this.config.yearrange || 'c-10:c+10',
      buttonImageOnly: false,
      buttonText: 'Toon kalender',
      monthNames: this.config.months,
      dayNamesMin: ['M', 'D', 'W', 'D', 'V', 'Z', 'Z'],
      dayNamesShort: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
      showButtonPanel: true,
      closeText: 'Sluiten',
      onClose: this.removeAria.bind(this),
      beforeShow: function(input, inst) {
        inst.dpDiv.css({ marginTop: input.offsetHeight / 2 + 'px' });
      },
      onSelect: function(dateText) {
        var date = dateText;

        if (self.config.range) {
          if (self.config.rangePosition === 'from') {
            $(self.config.rangeRelation).datepicker('option', 'minDate', date);
          } else {
            $(self.config.rangeRelation).datepicker('option', 'maxDate', date);
          }
        }
        if ($('.js-fixedbottom-button__button')) {
          $('.js-fixedbottom-button__button').removeAttr('hidden');
        }
      }
    });
    $(element).val($(element).data('date'));

    $('.ui-datepicker-trigger').attr('aria-describedby', 'datepickerLabel');

    // let's go.
    this.activateTrigger();
  },
  datepicker.prototype.createHiddenField = function() {
    this.hiddenfield = document.createElement("input");
    this.hiddenfield.setAttribute('type', 'hidden');
    this.hiddenfield.setAttribute('name', 'datepicker-hidden__' + this.elementId);
    this.hiddenfield.setAttribute('value', '');
    this.hiddenfield.setAttribute('class', 'datepicker__hiddenfield');
    this.element.parentNode.appendChild(this.hiddenfield);
  },
  datepicker.prototype.activateTrigger = function() {
    var _this = this;

    // Unbinding the keyup event is required to work around the issue where the
    // datepicker automatically opens after the last number has been entered. Eg. when
    // entering 10-10-1965, as soon as the '5' is inserted, the datepicker opens without
    // appropriate styling. This change does not prevent the datepicker from updating
    // when typing inside the input box and thus remains accessible.
    $('.datepicker__input').unbind('keyup');

    $('.ui-datepicker-trigger').click(function() {
      setTimeout(function() {
        var today = $( '.ui-datepicker-today a' )[0];
        // var prevMonth = $( '.ui-datepicker-prev' )[0];
        var prevMonth = document.querySelector('.ui-datepicker-prev');

        if ( !today ) {
          today = $( '.ui-state-active' )[0] || $( '.ui-state-default' )[0];
        }

        window.setTimeout(function () {
          prevMonth.focus();
        }, 0);


        // today.focus();

        // Hide the entire page (except the date picker)
        // from screen readers to prevent document navigation
        // (by headings, etc.) while the popup is open
        $( 'main' ).attr( 'id', 'dp-container' );
        $( '#dp-container' ).attr( 'aria-hidden', 'true' );
        $( '#skipnav' ).attr( 'aria-hidden', 'true' );

        // Hide the "today" button because it doesn't do what
        // you think it supposed to do
        $( '.ui-datepicker-current' ).hide();

        _this.initiatePicker();

        $(document).on( 'click', '#ui-datepicker-div .ui-datepicker-close', function() {
          _this.closeCalendar();
        });

      }, 100 );
    });
  },
  datepicker.prototype.createHeaderSummary = function() {
    // Fallback to ensure only one datepicker summary is created.
    var headerSummary = $('.ui-datepicker-summary');
    if(headerSummary.length > 0) {
      return;
    }

    var container = document.getElementById('ui-datepicker-div');
    $(container).prepend('<div class="ui-datepicker-summary"><div class="ui-datepicker-summary__year"></div><div class="ui-datepicker-summary__date"></div></div>');

    this.containerSummaryYear = $('.ui-datepicker-summary__year');
    this.containerSummaryYear.text(this.currentDate.getFullYear());
    this.containerSummaryDate = $('.ui-datepicker-summary__date');

    var formattedDate = this.currentDate.getDate() + ' ' + this.config.months[this.currentDate.getMonth()];
    this.containerSummaryDate.text(formattedDate );
  },
  datepicker.prototype.initiatePicker = function() {
    var _this = this;
    var activeDate;
    var container = document.getElementById('ui-datepicker-div');

    if (!container || !this.element) {
      return;
    }

    this.currentDate = $(this.element).datepicker( 'getDate' );

    if (this.currentDate) {
      this.createHeaderSummary();
    }

    container.setAttribute( 'role', 'application' );
    container.setAttribute( 'aria-label', 'Calendar view date-picker' );

    // The top controls
    var prev = $( '.ui-datepicker-prev', container )[0];
    var next = $( '.ui-datepicker-next', container )[0];
    var year = $( '.ui-datepicker-year', container )[0];

    // This is the line that needs to be fixed for use on pages with base URL set in head
    next.href = 'javascript:void(0)';
    prev.href = 'javascript:void(0)';
    year.href = 'javascript:void(0)';

    next.setAttribute( 'role', 'button' );
    next.removeAttribute( 'title' );
    prev.setAttribute( 'role', 'button' );
    prev.removeAttribute( 'title' );

    this.appendOffscreenMonthText( next );
    this.appendOffscreenMonthText( prev );

    // delegation won't work here for whatever reason, so we are
    // forced to attach individual click listeners to the prev /
    // next month buttons each time they are added to the DOM
    next.addEventListener( 'click', function( e ) {
      _this.handleNextClicks(e);
    }.bind( _this ), false );
    prev.addEventListener( 'click', function( e ) {
      _this.handlePrevClicks(e);
    }.bind( _this ), false );
    year.addEventListener( 'change', function( e ) {
      _this.handleYearChange(e);
    }.bind( _this ), false );

    // rewrite the text label from a 'day'.
    this.monthDayYearText();

    // Prevent keydown event listeners from being applied multiple times
    // on initialization.
    $(container).off('keydown');
    $(container).on('keydown', function(keyVent) {
      var which = keyVent.which;
      var target = keyVent.target;
      var dateCurrent = _this.getCurrentDate( container );

      if (!dateCurrent) {
        dateCurrent = $('a.ui-state-default')[0];
        _this.setHighlightState(dateCurrent, container);
      }

      switch(which) {
        // TAB
        case 9:
          keyVent.preventDefault();

          // If the shift key is pressed follow a different flow.
          if (keyVent.shiftKey) {
            if ($(target).hasClass('ui-datepicker-close')) { // Close button
              activeDate = $('.ui-state-highlight') || $('.ui-state-active')[0];
              if (activeDate) {
                activeDate.focus();
              }
            } else if ($(target).hasClass('ui-state-default')) { // Date link
              $('.ui-datepicker-next')[0].focus();
            } else if ($(target).hasClass('ui-datepicker-prev')) { // Previous month button
              $('.ui-datepicker-close')[0].focus();
            } else if ($(target).hasClass('ui-datepicker-year')) { // Year button
              $('.ui-datepicker-prev')[0].focus();
            } else if ($(target).hasClass('ui-datepicker-next')) { // Next month button
              $('.ui-datepicker-year')[0].focus();
            }
          } else {
            if ($(target).hasClass('ui-datepicker-close')) { // close button
              $('.ui-datepicker-prev')[0].focus();
            } else if ($(target).hasClass('ui-state-default')) {
              $('.ui-datepicker-close')[0].focus();
            } else if ($( target).hasClass('ui-datepicker-next')) {
              activeDate = $('.ui-state-highlight') || $('.ui-state-active')[0];
              if (activeDate) {
                activeDate.focus();
              }
            } else if ($(target).hasClass('ui-datepicker-year')) {
              $('.ui-datepicker-next')[0].focus();
            } else if ($(target).hasClass( 'ui-datepicker-prev' ) ) {
              $('.ui-datepicker-year')[0].focus();
            }
          }
          break;

        // ENTER
        case 13:
          if ($(target).hasClass('ui-state-default')) {
            setTimeout(function() {
              _this.closeCalendar();
            }, 100 );
          } else if ($(target).hasClass('ui-datepicker-year')) {
            _this.handleYearChange(target);
          } else if ($(target).hasClass('ui-datepicker-prev')) {
            _this.handlePrevClicks();
          } else if ($(target).hasClass('ui-datepicker-next')) {
            _this.handleNextClicks();
          }
          break;

        // ESCAPE
        case 27:
          keyVent.stopPropagation();
          return _this.closeCalendar();

        // SPACEBAR
        case 32:
          if ($(target).hasClass( 'ui-datepicker-prev' )) {
            _this.handlePrevClicks();
          } else if ($(target).hasClass( 'ui-datepicker-next')) {
            _this.handleNextClicks();
          }
          break;

        // PAGE UP
        case 33:
          _this.moveOneMonth( target, 'prev' );
          break;

        // PAGE DOWN
        case 34:
          _this.moveOneMonth( target, 'next' );
          break;

        // END
        case 35:
          var $daysOfMonth = $(target).closest('tbody').find('.ui-state-default');
          var lastDay = $daysOfMonth[$daysOfMonth.length - 1];
          if (lastDay) {
            lastDay.focus();
            _this.setHighlightState(lastDay, $('#ui-datepicker-div')[0]);
          }
          break;

        // LEFT ARROW
        case 37:
          if ( !$(target).hasClass( 'ui-datepicker-close' ) && $(target).hasClass( 'ui-state-default' ) ) {
            keyVent.preventDefault();
            _this.previousDay(target);
          }
          break;

        // UP ARROW
        case 38:
          if ( !$(target).hasClass( 'ui-datepicker-close' ) && $(target).hasClass( 'ui-state-default' ) ) {
            keyVent.preventDefault();
            _this.upHandler( target, container, prev );
          }
          break;

        // RIGHT ARROW
        case 39:
          if ( !$(target).hasClass( 'ui-datepicker-close' ) && $(target).hasClass( 'ui-state-default' ) ) {
            keyVent.preventDefault();
            _this.nextDay(target);
          }
          break;

        // DOWN ARROW
        case 40:
          if ( !$(target).hasClass( 'ui-datepicker-close' ) && $(target).hasClass( 'ui-state-default' ) ) {
            keyVent.preventDefault();
            _this.downHandler( target, container, next );
          }
          break;

        default:
          return;
      }

      $('.ui-datepicker-current').hide();
    });
  },
  datepicker.prototype.closeCalendar = function() {
    var container = $('#ui-datepicker-div');
    var input = this.element;

    $(container).off('keydown');
    $(input).datepicker('hide');

    input.focus();
  },
  datepicker.prototype.isOdd = function( num ) {
    return num % 2;
  },
  datepicker.prototype.moveOneMonth = function( currentDate, dir ) {
    var button = (dir === 'next')
      ? $('.ui-datepicker-next')[0]
      : $('.ui-datepicker-prev')[0];

    if (!button) {
      return;
    }

    var ENABLED_SELECTOR = '#ui-datepicker-div tbody td:not(.ui-state-disabled)';
    var $currentCells = $(ENABLED_SELECTOR);
    var currentIdx = $.inArray(currentDate.parentNode, $currentCells);

    button.click();
    var _this = this;
    setTimeout(function() {
      _this.updateHeaderElements();

      var $newCells = $(ENABLED_SELECTOR);
      var newTd = $newCells[currentIdx];
      var newAnchor = newTd && $(newTd).find('a')[0];

      while (!newAnchor) {
        currentIdx--;
        newTd = $newCells[currentIdx];
        newAnchor = newTd && $(newTd).find('a')[0];
      }

      _this.setHighlightState(newAnchor, $('#ui-datepicker-div')[0]);
      newAnchor.focus();

    }, 0);
  },
  datepicker.prototype.handleYearChange = function() {
    var _this = this;

    setTimeout(function() {
      _this.updateHeaderElements();
      _this.prepHighlightState();
      $('.ui-datepicker-next').focus();
      $(".ui-datepicker-current").hide();
    }, 0);
  },
  datepicker.prototype.handleNextClicks = function() {
    var _this = this;

    setTimeout(function() {
      _this.updateHeaderElements();
      _this.prepHighlightState();
      $('.ui-datepicker-next').focus();
      $(".ui-datepicker-current").hide();
    }, 0);
  },
  datepicker.prototype.handlePrevClicks = function() {
    var _this = this;

    setTimeout(function() {
      _this.updateHeaderElements();
      _this.prepHighlightState();
      $('.ui-datepicker-prev').focus();
      $(".ui-datepicker-current").hide();
    }, 0);
  },
  datepicker.prototype.previousDay = function(dateLink) {
    if (!dateLink) {
      return;
    }

    var td = $(dateLink).closest('td');
    if (!td) {
      return;
    }

    var prevTd = $(td).prev(),
      prevDateLink = $('a.ui-state-default', prevTd)[0];

    var container = document.getElementById('ui-datepicker-div');

    if (prevTd && prevDateLink) {
      this.setHighlightState(prevDateLink, container);
      prevDateLink.focus();
    } else {
      this.handlePrevious(dateLink);
    }
  },
  datepicker.prototype.handlePrevious = function(target) {
    if (!target) {
      return;
    }

    var currentRow = $(target).closest('tr');
    if (!currentRow) {
      return;
    }

    var container = document.getElementById('ui-datepicker-div');
    var previousRow = $(currentRow).prev();

    // There are no previous rows, so we go to the previous month.
    if (!previousRow || previousRow.length === 0) {
      this.previousMonth();
    } else {
      var prevRowDates = $('td a.ui-state-default', previousRow);
      var prevRowDate = prevRowDates[prevRowDates.length - 1];

      if (prevRowDate) {
        var _this = this;
        setTimeout(function() {
          _this.setHighlightState(prevRowDate, container);
          prevRowDate.focus();
        }, 0);
      }
    }
  },
  datepicker.prototype.previousMonth = function() {
    var _this = this;
    var prevLink = $('.ui-datepicker-prev')[0];
    var container = document.getElementById('ui-datepicker-div');

    prevLink.click();
    // Focus last day of new month.
    setTimeout(function() {
      var trs = $('tr', container);
      var lastRowTdLinks = $('td a.ui-state-default', trs[trs.length - 1]);
      var lastDate = lastRowTdLinks[lastRowTdLinks.length - 1];

      // Update the cached header elements.
      _this.updateHeaderElements();

      _this.setHighlightState(lastDate, container);
      lastDate.focus();
    }, 0);
  },
  datepicker.prototype.nextDay = function(dateLink) {
    var container = document.getElementById('ui-datepicker-div');
    if (!dateLink) {
      return;
    }

    var td = $(dateLink).closest('td');
    if (!td) {
      return;
    }

    var nextTd = $(td).next(),
      nextDateLink = $('a.ui-state-default', nextTd)[0];

    if (nextTd && nextDateLink) {
      this.setHighlightState(nextDateLink, container);
      nextDateLink.focus(); // the next day (same row)
    } else {
      this.handleNext(dateLink);
    }
  },
  datepicker.prototype.handleNext = function(target) {
    if (!target) {
      return;
    }

    var container = document.getElementById('ui-datepicker-div');
    var currentRow = $(target).closest('tr');
    var nextRow = $(currentRow).next();

    if (!nextRow || nextRow.length === 0) {
      this.nextMonth();
    } else {
      var nextRowFirstDate = $('a.ui-state-default', nextRow)[0];

      if (nextRowFirstDate) {
        this.setHighlightState(nextRowFirstDate, container);
        nextRowFirstDate.focus();
      }
    }
  },
  datepicker.prototype.nextMonth = function() {
    var _this = this;
    var container = document.getElementById('ui-datepicker-div');
    var nextMon = $('.ui-datepicker-next')[0];
    nextMon.click();
    // Focus the first day of the new month.
    setTimeout(function() {
      // Update the cached header elements
      _this.updateHeaderElements();

      var firstDate = $('a.ui-state-default', container)[0];
      _this.setHighlightState(firstDate, container);
      firstDate.focus();
    }, 0);
  },
  datepicker.prototype.upHandler = function(target, cont, prevLink) {
    prevLink = $('.ui-datepicker-prev')[0];
    var rowContext = $(target).closest('tr');
    if (!rowContext) {
      return;
    }

    var _this = this;
    var rowTds = $('td', rowContext);
    var rowLinks = $('a.ui-state-default', rowContext);
    var targetIndex = $.inArray(target, rowLinks);
    var prevRow = $(rowContext).prev();
    var prevRowTds = $('td', prevRow);
    var parallel = prevRowTds[targetIndex];
    var linkCheck = $('a.ui-state-default', parallel)[0];

    if (prevRow && parallel && linkCheck) {
      // There is a previous row, a td at the same index
      // of the target AND theres a link in that td
      _this.setHighlightState(linkCheck, cont);
      linkCheck.focus();
    } else {
      // We're either on the first row of a month, or we're on the
      // second and there is not a date link directly above the target
      prevLink.click();
      var _this = this;
      setTimeout(function() {
        // Update the cached header elements
        _this.updateHeaderElements();

        var newRows = $('tr', cont);
        var lastRow = newRows[newRows.length - 1];
        var lastRowTds = $('td', lastRow);
        var tdParallelIndex = $.inArray(target.parentNode, rowTds);
        var newParallel = lastRowTds[tdParallelIndex];
        var newCheck = $('a.ui-state-default', newParallel)[0];

        if (lastRow && newParallel && newCheck) {
          _this.setHighlightState(newCheck, cont);
          newCheck.focus();
        } else {
          // There's no date link on the last week (row) of the new month
          // meaning its an empty cell, so we'll try the 2nd to last week
          var secondLastRow = newRows[newRows.length - 2];
          var secondTds = $('td', secondLastRow);
          var targetTd = secondTds[tdParallelIndex];
          var linkCheck = $('a.ui-state-default', targetTd)[0];

          if (linkCheck) {
            _this.setHighlightState(linkCheck, cont);
            linkCheck.focus();
          }
        }
      }, 0);
    }
  },
  datepicker.prototype.downHandler = function(target, cont, nextLink) {
    nextLink = $('.ui-datepicker-next')[0];

    var targetRow = $(target).closest('tr');
    if (!targetRow) {
      return;
    }

    var _this = this;
    var targetCells = $('td', targetRow);
    var cellIndex = $.inArray(target.parentNode, targetCells); // the td (parent of target) index
    var nextRow = $(targetRow).next();
    var nextRowCells = $('td', nextRow);
    var nextWeekTd = nextRowCells[cellIndex];
    var nextWeekCheck = $('a.ui-state-default', nextWeekTd)[0];

    if (nextRow && nextWeekTd && nextWeekCheck) {
      // theres a next row, a TD at the same index of `target`,
      // and theres an anchor within that td
      _this.setHighlightState(nextWeekCheck, cont);
      nextWeekCheck.focus();
    } else {
      nextLink.click();

      setTimeout(function() {
        // Update the cached header elements.
        _this.updateHeaderElements();

        var nextMonthTrs = $('tbody tr', cont),
          firstTds = $('td', nextMonthTrs[0]),
          firstParallel = firstTds[cellIndex],
          firstCheck = $('a.ui-state-default', firstParallel)[0];

        if (firstParallel && firstCheck) {
          _this.setHighlightState(firstCheck, cont);
          firstCheck.focus();
        } else {
          // If no date link was found in the first row, retry in the second row.
          var secondRow = nextMonthTrs[1];
          var secondTds = $('td', secondRow);
          var secondRowTd = secondTds[cellIndex];
          var secondCheck = $('a.ui-state-default', secondRowTd)[0];

          if (secondRow && secondCheck) {
            _this.setHighlightState(secondCheck, cont);
            secondCheck.focus();
          }
        }
      }, 0);
    }
  },
  datepicker.prototype.onCalendarHide = function() {
    this.closeCalendar();
  },
  datepicker.prototype.monthDayYearText = function() {
    var _this = this;
    var cleanUps = $('.amaze-date');

    $(cleanUps).each(function(clean) {
      clean.parentNode.removeChild(clean);
    });

    var datePickDiv = document.getElementById('ui-datepicker-div');
    if (!datePickDiv) {
      return;
    }

    var dates = $('a.ui-state-default', datePickDiv);
    $(dates).attr('role', 'button').on('keydown', function(e) {
      if (e.which=== 32) {
        e.preventDefault();
        e.target.click();
        setTimeout(function() {
          _this.closeCalendar();
        }, 100);
      }
    });
    $(dates).each(function(index, date) {
      var datePickDiv = document.getElementById('ui-datepicker-div');
      var currentRow = $(date).closest('tr');
      var currentTds = $('td', currentRow);
      var currentIndex = $.inArray(date.parentNode, currentTds);
      var headThs = $('thead tr th', datePickDiv);
      var dayIndex = headThs[currentIndex];
      var daySpan = $('span', dayIndex)[0];
      var monthName = $('.ui-datepicker-month', datePickDiv)[0].innerHTML;
      var year = $('.ui-datepicker-year', datePickDiv).val();
      var number = date.innerHTML;

      if (!daySpan || !monthName || !number || !year) {
        return;
      }

      // AT Reads: {month} {date} {year} {day}
      // "December 18 2014 Thursday"
      var dateText = date.innerHTML + ' ' + monthName + ' ' + year; // + ' ' + daySpan.title;
      // AT Reads: {date(number)} {name of day} {name of month} {year(number)}
      // var dateText = date.innerHTML + ' ' + daySpan.title + ' ' + monthName + ' ' + year;
      // add an aria-label to the date link reading out the currently focused date
      date.setAttribute('aria-label', dateText);
    });
  },
  datepicker.prototype.updateHeaderElements = function() {
    var context = document.getElementById('ui-datepicker-div');
    if (!context) {
      return;
    }

    var currentDate = $(this.element).datepicker('getDate');
    if (currentDate) {
      this.createHeaderSummary();
    }

    var prev = $('.ui-datepicker-prev', context)[0];
    var next = $('.ui-datepicker-next', context)[0];
    var year = $('.ui-datepicker-year', context)[0];

    // Make them click/focus - able
    next.href = 'javascript:void(0)';
    prev.href = 'javascript:void(0)';

    next.setAttribute('role', 'button');
    prev.setAttribute('role', 'button');
    this.appendOffscreenMonthText(next);
    this.appendOffscreenMonthText(prev);

    next.addEventListener( 'click', function(e) { this.handleNextClicks(e); }.bind( this ), false );
    prev.addEventListener( 'click', function(e) { this.handlePrevClicks(e); }.bind( this ), false );
    year.addEventListener( 'change', function(e) { this.handleYearChange(e); }.bind( this ), false );

    // Add month day year text
    this.monthDayYearText();
  },
  datepicker.prototype.prepHighlightState = function() {
    var highlight;
    var cage = document.getElementById('ui-datepicker-div');

    highlight = $('.ui-state-highlight', cage)[0] || $('.ui-state-default', cage)[0];
    if (highlight && cage) {
      this.setHighlightState(highlight, cage);
    }
  },
  datepicker.prototype.setHighlightState = function(newHighlight, container) {
    var prevHighlight = this.getCurrentDate(container);
    // Remove the highlight state from previously
    // highlighted date and add it to our newly active date
    $(prevHighlight).removeClass('ui-state-highlight');
    $(newHighlight).addClass('ui-state-highlight');
  },
  datepicker.prototype.getCurrentDate = function(container) {
    return $('.ui-state-highlight', container)[0];
  },
  datepicker.prototype.appendOffscreenMonthText = function(button) {
    var buttonText;
    var isNext = $(button).hasClass('ui-datepicker-next');
    var months = this.config.months;

    var currentMonth = $('.ui-datepicker-title .ui-datepicker-month').text().toLowerCase();
    var monthIndex = $.inArray(currentMonth.toLowerCase(), months);
    var currentYear = $('.ui-datepicker-title .ui-datepicker-year').val().toLowerCase();
    var adjacentIndex = (isNext) ? monthIndex + 1 : monthIndex - 1;

    if (isNext && currentMonth === 'december') {
      currentYear = parseInt(currentYear, 10) + 1;
      adjacentIndex = 0;
    } else if (!isNext && currentMonth === 'januari') {
      currentYear = parseInt(currentYear, 10) - 1;
      adjacentIndex = months.length - 1;
    }

    buttonText = (isNext)
      ? 'Volgende maand, ' + this.firstToCap(months[adjacentIndex]) + ' ' + currentYear
      : 'Vorige maand, ' + this.firstToCap(months[adjacentIndex]) + ' ' + currentYear;

    $(button).find('.ui-icon').html(buttonText);
  },
  datepicker.prototype.firstToCap = function(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  },
  datepicker.prototype.removeAria = function() {
    var _this = this;

    _this.closeCalendar();
    // Make the rest of the page accessible again:
    $('#dp-container').removeAttr('aria-hidden');
    $('#skipnav').removeAttr('aria-hidden');
  };
})();

/* Progress polyfill < IE10 */
(function(){if(!("position"in document.createElement("progress"))){var h;h=Object.defineProperty?function(a,c,b){b.enumerable=!0;b.configurable=!0;try{Object.defineProperty(a,c,b)}catch(e){if(e.number===-2146823252)b.enumerable=!1,Object.defineProperty(a,c,b)}}:"__defineSetter__"in document.body?function(a,b,d){a.__defineGetter__(b,d.get);d.set&&a.__defineSetter__(b,d.set)}:function(a,b,d){a[b]=d.get.call(a)};try{[].slice.apply(document.images);var i=function(a){return[].slice.apply(a)}}catch(j){i=
function(a){for(var b=[],d=a.length,e=0;e<d;e++)b[e]=a[e];return b}}for(var f=function(){var a=document.createElement("div");a.foo="bar";return a.getAttribute("foo")==="bar"}(),b=window.ProgressPolyfill={DOMInterface:{max:{get:function(){return parseFloat(this.getAttribute("aria-valuemax"))||1},set:function(a){this.setAttribute("aria-valuemax",a);f||this.setAttribute("max",a);b.redraw(this)}},value:{get:function(){return parseFloat(this.getAttribute("aria-valuenow"))||0},set:function(a){this.setAttribute("aria-valuenow",
a);f||this.setAttribute("value",a);b.redraw(this)}},position:{get:function(){return this.hasAttribute("aria-valuenow")?this.value/this.max:-1}},labels:{get:function(){for(var a=this.parentNode;a&&a.nodeName!=="LABEL";)a=a.parentNode;a=a?[a]:[];if(this.id&&document.querySelectorAll){var b=i(document.querySelectorAll('label[for="'+this.id+'"]'));b.length&&(a=a.concat(b))}return a}}},redraw:function(a){b.isInited(a)?b.init(a):f||(a.setAttribute("aria-valuemax",parseFloat(a.getAttribute("max"))||1),a.hasAttribute("value")?
a.setAttribute("aria-valuenow",parseFloat(a.getAttribute("value"))||0):a.removeAttribute("aria-valuenow"));if(a.position!==-1)a.style.paddingRight=a.offsetWidth*(1-a.position)+"px"},isInited:function(a){return a.getAttribute("role")==="progressbar"},init:function(a){if(!b.isInited(a)){a.setAttribute("role","progressbar");a.setAttribute("aria-valuemin","0");a.setAttribute("aria-valuemax",parseFloat(a.getAttribute("max"))||1);a.hasAttribute("value")&&a.setAttribute("aria-valuenow",parseFloat(a.getAttribute("value"))||
0);for(var c in b.DOMInterface)h(a,c,{get:b.DOMInterface[c].get,set:b.DOMInterface[c].set});b.redraw(a)}},progresses:document.getElementsByTagName("progress")},g=b.progresses.length-1;g>=0;g--)b.init(b.progresses[g]);document.addEventListener&&(document.addEventListener("DOMAttrModified",function(a){var c=a.target,a=a.attrName;c.nodeName==="PROGRESS"&&(a==="max"||a==="value")&&b.redraw(c)},!1),document.addEventListener("DOMNodeInserted",function(a){a=a.target;a.nodeName==="PROGRESS"&&b.init(a)},!1))}})();

(function () {

  onl.decorate({

    // component works without AJAX support;
    // AJAX functionality is WIP and needs to be tested properly first!
    'init-inputfile': function( element ) {
      new inputfile( element );
    }
  });

  var inputfile = function( element ) {
    this.element = element;
    this.area = this.element.querySelector( '.js-input-dragbox' );
    this.label = this.element.querySelector( '.js-input-dragbox__label' );
    this.prelabel = this.element.querySelector( '.js-input-dragbox__prelabel' );
    this.orginalLabelValue = this.label.innerHTML;
    this.orginalPreLabelValue = this.prelabel.innerHTML;
    this.input = this.element.querySelector( 'input[type="file"]' );
    this.submitbuttonClass = '.js-input-dragbox__button';
    this.config = JSON.parse( this.element.getAttribute( 'data-config' ) ) || [];
    this.droppedFiles = false;
    this.debug = this.config.debug;
    this.responseMsg = this.element.querySelector( '.js-input-dragbox__msg' );
    this.isAjaxHandling = this.config.ajax || false;
    this.init();
  };
  inputfile.prototype.init = function( ) {
    var self = this;

    if (onl.ui.hasDragDrop()) {
      this.element.classList.add('has-dragdrop');
    }

    function addListenerMulti(element, eventNames, listener) {
      var events = eventNames.split(' ');
      for (var i = 0, iLen = events.length; i < iLen; i++) {
        element.addEventListener(events[i], listener, false);
      }
    }

    // addListenerMulti( this.area, 'drag dragstart dragend dragover dragenter dragleave drop', function ( e ) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // });

    // addListenerMulti( this.area, 'dragover dragenter', function () {
    //   self.area.classList.add( 'is-dragover' );
    // });

    // addListenerMulti( this.area, 'dragleave dragend drop', function () {
    //   self.area.classList.remove('is-dragover');
    // });

    // this.area.addEventListener( 'drop', function( e ) {
    //   self.droppedFiles = e.dataTransfer.files;
    //   console.log('DROP e.target.files', e.dataTransfer.files);
    //   this.input.prop("files", e.dataTransfer.files);
    //   self.setAttributes(e.dataTransfer.files);
    // });

    this.area.addEventListener( 'change', function( e ) {
      self.droppedFiles = e.target.files;
      self.setAttributes(e.target.files);

    });

    this.eventListers();

  };

  inputfile.prototype.setAttributes = function(e) {
    var fileName = '';

    if (e[0] && e.length > 1) {
      // fileName = (this.input.getAttribute('data-multiple-caption') || '').replace('{count}', e.length);
    }
    else if (e[0] && e.length === 1) {
      fileName = e[0].name;
    } else {
      fileName = false;
    }

    if (fileName) {
      this.label.innerHTML = 'Selecteer ander document';
      this.prelabel.innerHTML = fileName;
      this.prelabel.setAttribute('tabindex','0');
      this.prelabel.focus();
      this.area.classList.add('has-file');
      if (this.config.showbuttonAfterChange) {
        this.showbuttonAfterChange();
      }
    }
    else {
      this.resetElement();
    }
  };

  inputfile.prototype.showbuttonAfterChange = function() {
    this.element.querySelector( this.submitbuttonClass ).removeAttribute('hidden');
  };
  inputfile.prototype.hidebuttonAfterChange = function() {
    this.element.querySelector( this.submitbuttonClass ).setAttribute('hidden', 'hidden');
  };

  inputfile.prototype.resetElement = function(e) {

    this.label.innerHTML = this.orginalLabelValue;
    this.prelabel.innerHTML = this.orginalPreLabelValue;
    this.prelabel.setAttribute('tabindex', '-1');
    this.area.classList.remove('has-file');
    if (this.config.showbuttonAfterChange) {
      this.hidebuttonAfterChange();
    }
    this.element.classList.remove('is-success', 'is-uploading', 'is-failed');
    this.area.classList.remove('has-file');
  };

  inputfile.prototype.eventListers = function() {

    this.label.addEventListener( 'keyup', function( event ) {
      event.preventDefault();
      if ( event.keyCode === 13 ) {
        this.click();
      }
    });

    this.element.querySelector('.js-reset').addEventListener('click', function (e) { e.preventDefault(); this.resetElement(e); }.bind( this ), false );

    // Firefox bug fix
    this.area.addEventListener('focus', function ( e ) { this.area.classList.add('has-focus'); }.bind( this ), false );
    this.area.addEventListener('blur', function ( e ) { this.area.classList.remove('has-focus'); }.bind( this ), false );

    if ( this.isAjaxHandling ) {
      this.element.addEventListener('submit', function (e) {
        this.ajax = new XMLHttpRequest();
        var errorMsg;
        var ajaxData = new FormData( this.element );

        if (this.area.classList.contains('is-uploading')) return false;

        this.element.classList.add('is-uploading');
        this.element.classList.remove('is-error');

        if ( onl.ui.hasDragDrop() ) {
          e.preventDefault();

          // gathering the form data
          if( this.droppedFiles ) {
            Array.prototype.forEach.call( this.droppedFiles, function( file ) {
              ajaxData.append( this.input.getAttribute( 'name' ), file );
            }.bind(this));
          }

          if (!this.debug) {
            this.ajax.upload.addEventListener( 'progress', function (e) { this.progressHandler(e); }.bind(this), false );
            this.ajax.upload.addEventListener( 'load', function (e) { this.loadHandler(e); }.bind(this), false );
            this.ajax.upload.addEventListener( 'error', function (e) { this.errorHandler(e); }.bind(this), false );
            // this.ajax.open( this.element.getAttribute( 'method' ), this.element.getAttribute( 'action' ), true );
            this.ajax.open( this.config.ajax, this.element.getAttribute( 'action' ), true );
            this.ajax.send( ajaxData );
          } else {
            this.ajax = new Array({
              status: 300,
              responseText: {
                success: true,
                message: 'Bestand is succesvol geupload'
              }
            });
            this.ajax = this.ajax[0];
            // this.ajax.status = 300;
            // this.ajax.responseText.success = true;
            this.loadHandler();
          }

        }

      }.bind(this), false);
    }

  };

  inputfile.prototype.loadHandler = function (e) {
    this.element.classList.remove( 'is-uploading' );
    var isSuccess;
    if ( this.debug && this.ajax.responseText.success ) {
      isSuccess = this.ajax.responseText.success;
    } else {
      var data = JSON.parse( this.ajax.responseText );
      isSuccess = data.success;
    }
    if (this.ajax.status >= 200 && this.ajax.status < 400 )
    {
      this.element.classList.add( isSuccess == true ? 'is-success' : 'is-error' );
      this.responseMsg.innerHTML = this.ajax.message;
      if( isSuccess == true && this.config.messageModal ) {
        // show modal;
        document.querySelector(this.config.messageModal).click();
      }
    }

  };

  inputfile.prototype.errorHandler = function (e) {
    this.element.classList.remove( 'is-uploading' );
    this.element.classList.remove( 'is-failed' );
    this.responseMsg.innerHTML = 'Document kan niet worden geupload';
  };

  inputfile.prototype.progressHandler = function(event) {
    var percent = (event.loaded / event.total) * 100;

    this.element.querySelector('.input-dragbox__uploading__msg span').innerHTML = Math.round(percent);
    this.element.querySelector('.input-dragbox__uploading__progress').value = Math.round(percent);
  };

})();

onl.handle({
  /**
   * Empty input text if the remove text button is clicked.
   * @param element
   * @param event
   */
  'empty-input': function(element, event) {
    event.preventDefault();
    element.previousElementSibling.value = '';
    element.classList.add('invisible');
    element.previousElementSibling.focus();
  }
});

onl.decorate({
  /**
   * Toggle visibility of the remove button based on text input.
   * @param element
   * @param event
   */
  'toggle-remove-visibility': function(element, event) {
    var removeButton = element.nextElementSibling;

    element.addEventListener('keyup', function(e) {

      // Check if remove button is currently invisible and there is text.
      if(removeButton.classList.contains('invisible') && element.value.length > 0) {
        // If button is invisible and input contains text, make button visible.
        removeButton.classList.remove('invisible');
      } else if(!removeButton.classList.contains('invisible') && element.value.length > 0) {
        // If button is invisible and input contains text, make button visible.
        removeButton.classList.remove('invisible');
      } else if(!removeButton.classList.contains('invisible') && element.value.length === 0) {
        // If button is visible and input does not contain text, make button invisible.
        removeButton.classList.add('invisible');
      }
    }, false);
  }
});

onl.handle({
  'toggle-explanation': function (element, event) {
    var explanation = onl.dom.getElementFromHref(element.href);
    var tooltips = document.querySelectorAll('.question-explanation__content .question-explanation__close');
    var i;

    // close all open tooltips;
    for (i = 0; i < tooltips.length; i++) {
      tooltips[i].click();
    }

    event.preventDefault();

    if (!explanation.hasAttribute('data-explanation-opener')) {
      explanation.setAttribute('data-explanation-opener', element.id);
    }
    if (onl.ui.isHidden(explanation)) {
      var windowWidth = window.innerWidth;

      onl.ui.show(explanation, explanation);

      var targetRect = explanation.getBoundingClientRect();
      var targetWidth = targetRect.width || (targetRect.left - targetRect.right);

      // IF tooltip position too big for placement on the right;
      if (windowWidth <= targetRect.left + targetWidth) {
        explanation.classList.add('question-explanation__content--left');
        // recalculate its bounds;
        targetRect = explanation.getBoundingClientRect();
        if (window.pageXOffset > targetRect.left) {
          explanation.classList.remove('question-explanation__content--left');
          explanation.classList.add('question-explanation__content--fixed');
        }
      }

    }
    else {
      onl.ui.hide(explanation);
      explanation.classList.remove('question-explanation__content--left');
      explanation.classList.remove('question-explanation__content--fixed');
    }
  },
  'close-explanation': function (element, event) {
    var explanation = element.closest('.question-explanation__content');
    var explanationOpener = document.getElementById(explanation.getAttribute('data-explanation-opener'));

    if (explanationOpener) {
      onl.ui.hide(explanation, explanationOpener);
      explanation.classList.remove('question-explanation__content--left');
      explanation.classList.remove('question-explanation__content--fixed');
    }
    event.preventDefault();
  }
});

onl.decorate({
  'hide-self': function (element) {
    onl.ui.hide(element);
  }
});

onl.decorate({
  'explanation': function( element ) {
    element.classList.add('is-hidden');
  }
});

function findObjectByKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i];
    }
  }
  return null;
}

(function () {

  'use strict';

  onl.decorate({

    'init-form-subselection': function (element) {
      new formSubselection(element);
      new disregardchanges(element);
    },
    'init-form-disregardchanges': function (element) {
      new disregardchanges(element);
    }

  });

  var formSubselection = function( element ) {
    this.element = element;
    this.config = JSON.parse( this.element.getAttribute( 'data-config' ) ) || [];

    // config
      // available summary item types: 'span', 'abbr'.
      this.config.type = this.config.type || 'div';
      // amount of items to show;
      this.config.maxShow = this.config.maxShow || false;
      // trigger a form submit after removing an summary item?
      this.config.triggerSubmit = this.config.triggerSubmit || false;
      // label of the trigger, when there are summary items
      this.config.triggerOnChangeText = this.config.triggerOnChangeText || 'Aanpassen';

    if (onl.dom.$('.selection_popup', this.element)[0]) {
      this.triggerClassDefault = 'icon--';
      this.triggerClassActive = 'icon--';
    } else {
      this.triggerClassDefault = 'icon--list';
      this.triggerClassActive = 'icon--edit';
    }
    this.init();
  };

  formSubselection.prototype.init = function() {
    var self = this;
    this.trigger = onl.dom.$('.subselection__trigger', this.element)[0] || onl.dom.$('.selection_popup', this.element)[0];
    if (!onl.dom.$('.selection_popup', this.element)[0]) {
      this.trigger.classList.add('icon');
    }
    this.trigger.classList.add(this.triggerClassDefault);
    this.triggerOnLoadText = this.trigger.innerText;
    this.containerSummary = onl.dom.$( '.subselection__summary', this.element )[0];
    this.buttonClose = onl.dom.$( '[data-handler="close-modal"]', this.element );
    this.options = onl.dom.$( 'input[type=checkbox], input[type=radio]', this.element );
    this.resetLinkClass = this.config.resetLink || 'formreset-resetlink';

    var uniqueId = Math.floor(Math.random() * 1000000);
    this.element.setAttribute('data-id', uniqueId);
    this.elementId = uniqueId;

    // TODO: improve
    setTimeout(function(){
      self.resetLink = self.element.querySelector('.' + self.resetLinkClass);
      if (self.resetLink) {
        self.resetLink.addEventListener('click', function (e) { self.collectValues(e); }.bind(self), false);
      }
    }, 1000);

    this.items = [];

    this.collectValues();
    this.parseSelectedOptions();

    this.attachListeners();
  };

  formSubselection.prototype.attachListeners = function() {
    var y;

    for ( y = 0; y < this.options.length; y++ ) {
      this.options[y].addEventListener( 'change', function (e) { this.collectValues(e); }.bind(this), false);
    }
  };

  formSubselection.prototype.attachRemoveListeners = function() {
    var i;

    this.summaryItemRemovers = this.containerSummary.querySelectorAll('.subselection__summaryitem__remove');

    for (i = 0; i < this.summaryItemRemovers.length; i++ ) {
      this.summaryItemRemovers[i].addEventListener( 'click', function (e) { e.preventDefault(); this.removeSummaryItem(e); }.bind(this), false);
    }
  };

  formSubselection.prototype.collectValues = function() {
    var y;
    var option;
    var value;
    var id;

    // reset items;
    this.items = [];

    // loop through all checkbox's and add to array;
    for ( y = 0; y < this.options.length; y++ ) {
      option = [];
      if ( this.options[y].checked ) {
        value = this.options[y].getAttribute( 'data-value' ) || this.options[y].value;
        id = this.options[y].getAttribute( 'id' );
        if (this.options[y].closest('label') !== null) {
          option.push(value, this.options[y].closest('label').innerText, id);
        } else {
          if (this.options[y].closest('.input-checkbox')) {
            option.push(value, this.options[y].closest('.input-checkbox').querySelector('label').innerText, id);
          } else {
            option.push(value, this.options[y].closest('.input-radio').querySelector('label').innerText, id);
          }

        }
        if (!this.options[y].classList.contains('js-checkbox-master')) {
          this.items.push(option);
        }
      }
    }
    this.parseSelectedOptions();
  };

  formSubselection.prototype.parseSelectedOptions = function() {
    var y;
    var summary = '';
    var value;
    var title;
    var id;

    for ( y = 0; y < this.items.length; y++ ) {
      value = this.items[y][0];
      title = this.items[y][1];
      id = this.items[y][2];
      if (this.config.type !== 'abbr') {
        summary += '<' + this.config.type + ' class="subselection__summaryitem" title="' + title + '" data-linkedid="' + id + '">' + value + '<a href="#" class="subselection__summaryitem__remove" data-subselection-id="' + this.elementId +'"><span class="visually-hidden">Verwijder filter: ' + value + '</a></' + this.config.type +'> ';
      } else {
        summary += '<' + this.config.type + ' class="subselection__summaryitem" title="' + title + '" data-linkedid="' + id + '">' + value + '</' + this.config.type + '> ';
      }
    }
    this.containerSummary.innerHTML = summary;
    this.containerSummary.setAttribute('aria-live', 'polite');

    this.updateTriggerLabel(this.items.length);
    if (this.config.maxShow) {
      this.initHideUnwantedResults();
    }
    this.attachRemoveListeners();
  };

  formSubselection.prototype.initHideUnwantedResults = function () {
    var subselectionSummaryContainer = this.element.querySelector('.subselection__summary');
    this.resultItems = [].slice.call(subselectionSummaryContainer.querySelectorAll('.subselection__summaryitem'));
    // console.log('this.resultItems', this.resultItems);
    this.config.labelMore = this.config.labelmore || 'Toon meer';
    this.config.labelLess = this.config.labelless || 'Toon minder';
    this.allvisible = false;
    this.hideUnwantedResults(true);
  };

  formSubselection.prototype.hideUnwantedResults = function (createTrigger) {
    var i;
    var y = 0;

    for (i = 0; i < this.resultItems.length; i++ ) {
      if ( i > this.config.maxShow - 1 ) {
        this.resultItems[i].setAttribute('hidden', 'true');
        this.resultItems[i].setAttribute('aria-hidden', 'true');
        y++;
      }
    }
    this.totalHidden = y;
    if ( createTrigger && i > this.config.maxShow) {
      this.addShowMoreTrigger();
    }
  };

  formSubselection.prototype.addShowMoreTrigger = function () {
    this.trigger = document.createElement('div');
    this.trigger.classList.add('link');
    this.trigger.classList.add('link--down');

    this.triggerA = document.createElement('a');
    this.triggerA.setAttribute('href', '#');
    this.triggerA.setAttribute('tabindex', '0');
    this.triggerA.setAttribute('aria-expanded', false);
    this.triggerA.innerHTML = 'Toon meer' + ' (' + this.totalHidden + ')';

    this.trigger.appendChild(this.triggerA);


    this.containerSummary.appendChild(this.trigger);

    this.triggerA.addEventListener('click', function (e) { e.preventDefault(); this.showHide(e); }.bind(this), false);
  };

  formSubselection.prototype.showHide = function () {
    var i;
    if (this.allvisible) {
      this.hideUnwantedResults();
      this.allvisible = false;
      this.trigger.classList.remove('link--up');
      this.trigger.classList.add('link--down');
      this.triggerA.innerHTML = this.config.labelMore + ' (' + this.totalHidden + ')';
      this.triggerA.setAttribute('aria-expanded', false);
    } else {
      for (i = 0; i < this.resultItems.length; i++) {
        this.resultItems[i].removeAttribute('hidden', 'true');
        this.resultItems[i].removeAttribute('aria-hidden', 'true');
      }
      this.allvisible = true;
      this.trigger.classList.add('link--up');
      this.trigger.classList.remove('link--down');
      this.triggerA.innerHTML = this.config.labelLess;
      this.triggerA.setAttribute('aria-expanded', true);
    }
  };

  formSubselection.prototype.updateTriggerLabel = function (length) {
    // no idea why, but re-init is needed for this var;
    this.trigger = onl.dom.$('.subselection__trigger', this.element)[0] || onl.dom.$('.selection_popup', this.element)[0];

    if ( length > 0 ) {
      this.trigger.innerText = this.config.triggerOnChangeText;
      this.trigger.classList.remove(this.triggerClassDefault);
      this.trigger.classList.add(this.triggerClassActive);
    } else {
      this.trigger.innerText = this.triggerOnLoadText;
      this.trigger.classList.remove(this.triggerClassActive);
      this.trigger.classList.add(this.triggerClassDefault);
    }
  };

  formSubselection.prototype.removeSummaryItem = function (e) {
    console.log('removeSummaryItem');
    var item = e.target.parentNode;
    var itemLinkedId = item.getAttribute('data-linkedid');
    var target = document.getElementById(itemLinkedId);

    // uncheck the correspondig input (radio/checkbox)
    target.checked = false;

    if (this.config.triggerSubmit) {
      var form = getClosest(item, 'form');
      var buttonSubmit = form.querySelector('[type="submit"]');
      // console.log('form', form);
      // console.log('form buttonSubmit', buttonSubmit);
      if (buttonSubmit){
        setTimeout(function(){
          buttonSubmit.click();
        }, 100);
      }
      // if ("createEvent" in document) {
      //   var evt = document.createEvent("HTMLEvents");
      //   evt.initEvent("click", false, true);
      //   buttonSubmit.dispatchEvent(evt);
      // } else {
      //   buttonSubmit.fireEvent("click");
      // }
    }

    // onchange event needs manual triggering on checkboxes
    if ("createEvent" in document) {
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent("change", false, true);
      target.dispatchEvent(evt);
    } else {
      target.fireEvent("onchange");
    }

    // used in: "form-disregardchanges.js";
    pubsub.publish('/subselection/removeSummaryItem', {
      element: this.element
    });

    this.collectValues();
  };


  // ======


  var disregardchanges = function (element) {
    this.element = element;
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];

    this.triggerDisregard = this.element.querySelector(this.config.triggerDisregard) || this.element.querySelector('.modal__close');
    this.triggerApplySelection = this.element.querySelector(this.config.triggerApplySelection) || this.element.querySelector('[data-handler="close-modal"]');

    this.options = onl.dom.$('input[type=checkbox], input[type=radio]', this.element);

    this.init();
  };

  disregardchanges.prototype.init = function () {
    var self = this;
    this.createState();
    this.setEventListeners();


    var subscription = pubsub.subscribe('/subselection/removeSummaryItem', function (obj) {
      var subselection = self.element;

      // if clicked remove-trigger from subselection is in the same subselection component.
      if (obj.element === subselection) {
        self.createState();
      }
    });

  };



  disregardchanges.prototype.setEventListeners = function () {

    // Event listeners
    if (this.triggerDisregard) {
      this.triggerDisregard.addEventListener('click', function (e) { this.disregardAll(e) }.bind(this), false);
    }
    if (this.triggerApplySelection) {
      this.triggerApplySelection.addEventListener('click', function (e) { this.rebuildState(e) }.bind(this), false);
    }

  }

  disregardchanges.prototype.rebuildState = function () {
    this.createState();
  }

  disregardchanges.prototype.createState = function () {
    this.state = [];

    var elements = onl.dom.$('input[type=checkbox], input[type=radio]', this.element);

    for (var i = 0; i < elements.length; i++) {

      // only accept radio and checkbox;
      if (!(elements[i].type === 'radio' || elements[i].type === 'checkbox')) return;

      var id = elements[i].getAttribute('id');
      var type = elements[i].type;
      var state = elements[i].checked;
      this.state.push({ "ID": id, "type": type, "state": state });
    }
  }

  disregardchanges.prototype.disregardAll = function () {
    var state = this.state;

    for (var i = 0; i < state.length; i++) {
      // create relation between state and input;
      var item = findObjectByKey(state, 'ID', state[i].ID);
      // set state;
      var input = document.getElementById(item.ID);
      input.checked = state[i].state;

      // onchange event needs manual triggering on checkboxes
      if ("createEvent" in document) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        input.dispatchEvent(evt);
      } else {
        input.fireEvent("onchange");
      }
    }
  }



})();

(function () {

  'use strict';

  var tooltip = function( element ) {
    this.element = element;
    this.config = JSON.parse( this.element.getAttribute( 'data-config' ) ) || [];
    this.trigger = this.element.querySelector(this.config.trigger) || this.element.querySelector( '.tooltip__trigger' );
    this.content = document.getElementById(this.trigger.getAttribute('aria-describedby'));
    this.init();
  };

  tooltip.prototype.init = function( ) {
    this.trigger.addEventListener('mouseover', function (e) { this.showTooltip(e); }.bind(this), false);
    this.trigger.addEventListener('focus', function (e) { this.showTooltip(e); }.bind(this), false);
    this.trigger.addEventListener('keyup', function (e) { this.hideTooltipKeyboard(e); }.bind(this), false);
    this.trigger.addEventListener('mouseout', function (e) { this.hideTooltip(e); }.bind(this), false);
    this.trigger.addEventListener('blur', function (e) { this.hideTooltip(e); }.bind(this), false);
  };

  tooltip.prototype.showTooltip = function () {
    var all = document.querySelectorAll('.tooltip__content');
    var i;

    for (i = 0; i < all.length; i++) {
      all[i].setAttribute('aria-hidden', 'true');
      all[i].classList.add('is-hidden');
    }
    this.trigger.setAttribute('aria-expanded', 'true');
    this.trigger.classList.add('is-active');
    this.content.setAttribute('aria-hidden', 'false');
    this.content.classList.remove('is-hidden');
    this.positionTooltip();
  };

  tooltip.prototype.positionTooltip = function () {
    var targetRect = this.content.getBoundingClientRect();
    var targetWidth = targetRect.width || (targetRect.left - targetRect.right);
    var windowWidth = window.innerWidth;

    // IF tooltip position too big for placement on the right;
    if (windowWidth <= targetRect.left + targetWidth) {
      this.content.classList.add('has-position--left');
      // recalculate its bounds;
      targetRect = this.content.getBoundingClientRect();
      if (window.pageXOffset > targetRect.left) {
        this.content.classList.remove('has-position--left');
        this.content.classList.add('has-position--fixed');
      }
    }
  };

  tooltip.prototype.hideTooltip = function () {
    this.element.setAttribute('aria-expanded', 'false');
    this.element.classList.remove('is-active');
    this.element.classList.remove('has-position--left');
    this.element.classList.remove('has-position--fixed');

    this.content.classList.add('is-hidden');
    this.content.setAttribute('aria-hidden', 'true');
  };

  tooltip.prototype.hideTooltipKeyboard = function (e) {
    if (e.keyCode === '27') {
      this.hideTooltip(e);
    }
  };

  onl.decorate({
    tooltip: function( element ) {
      new tooltip ( element );
    }
  });

})();




(function () {

  'use strict';

  onl.decorate({
    'init-multiselect': function (element) {
      new multiselect(element);
    }
  });

  var multiselect = function (element) {
    this.element = element;
    this.config = [];

    this.config.placeholder = this.element.getAttribute( 'data-decorator-placeholder' );
    this.config.searchPlaceholder = 'Zoek opties';
    this.config.noResultsText = 'Geen resultaten';
    this.config.userOptionPrefix = 'Toevoegen ';

    this.init();
  };


  multiselect.prototype.init = function() {
    $( this.element ).fastselect({
      placeholder: this.config.placeholder,
      searchPlaceholder: this.config.searchPlaceholder,
      noResultsText: this.config.noResultsText,
      userOptionPrefix: this.config.userOptionPrefix,
      clearQueryOnSelect: true,

      elementClass: 'multiselect__container',
      singleModeClass: 'multiselect--singlemode',
      noneSelectedClass: 'has-noneSelected',
      multipleModeClass: 'multiselect--multiplemode',
      queryInputClass: 'multiselect__input',
      inputHelptextClass: 'multiselect__helptext',
      queryInputExpandedClass: 'is-expanded',
      fakeInputClass: 'multiselect__fakeinput',
      controlsClass: 'multiselect__controls',
      toggleButtonClass: 'multiselect__togglebutton',
      activeClass: 'is-active',
      itemSelectedClass: 'is-selected',
      choiceItemClass: 'multiselect__choice',
      choiceRemoveClass: 'multiselect__choiceremove',

      resultsContClass: 'multiselect__resultscontainer',
      resultsOpenedClass: 'is-open',
      resultsFlippedClass: 'is-flipped',
      groupClass: 'multiselect__group',
      groupTitleClass: 'multiselect__group-title',
      itemClass: 'multiselect__result',
      loadingClass: 'is-loading',
      noResultsClass: 'has-noresults',
      focusedItemClass: 'has-focus'
    });
  };

})();



(function () {

  'use strict';

  onl.decorate({
    showmoreless: function(element) {
      new showmoreless(element);
    }
  });

  var showmoreless = function(element) {
    this.element = element;
    this.listitems = [].slice.call(this.element.querySelectorAll('li'));
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];
    this.config.amountVisible = this.config.amount || '5';
    this.config.labelMore = this.config.labelmore || 'Toon meer';
    this.config.labelLess = this.config.labelless || 'Toon minder';
    this.allvisible = false;
    this.init();
  };

  showmoreless.prototype.init = function() {
    this.hideItems(true);
  };

  showmoreless.prototype.hideItems = function(createTrigger) {
    var i;
    var y = 0;

    for ( i = 0; i < this.listitems.length; i++ ) {
      if ( i > this.config.amountVisible - 1 ) {
        this.listitems[i].setAttribute('hidden', 'true');
        this.listitems[i].setAttribute('aria-hidden', 'true');
        y++;
      }
    }
    this.totalHidden = y;
    if ( createTrigger && i > this.config.amountVisible) {
      this.addTrigger();
    }
  };

  showmoreless.prototype.addTrigger = function() {
    this.trigger = document.createElement('li');
    this.trigger.classList.add('link');
    this.trigger.classList.add('link--down');

    this.triggerA = document.createElement('a');
    this.triggerA.setAttribute('href', '#');
    this.triggerA.setAttribute('tabindex', '0');
    this.triggerA.setAttribute('aria-expanded', false);
    this.triggerA.innerHTML = this.config.labelMore + ' (' + this.totalHidden + ')';

    this.trigger.appendChild(this.triggerA);


    this.element.querySelector('ul').appendChild(this.trigger);

    this.triggerA.addEventListener('click', function(e) { e.preventDefault(); this.showHide(e); }.bind(this), false);
  };

  showmoreless.prototype.showHide = function() {
    var i;
    if ( this.allvisible ) {
      this.hideItems();
      this.allvisible = false;
      this.trigger.classList.remove('link--up');
      this.trigger.classList.add('link--down');
      this.triggerA.innerHTML = this.config.labelMore + ' (' + this.totalHidden + ')';
      this.triggerA.setAttribute('aria-expanded', false);
    } else {
      for (i = 0; i < this.listitems.length; i++) {
        this.listitems[i].removeAttribute('hidden', 'true');
        this.listitems[i].removeAttribute('aria-hidden', 'true');
      }
      this.allvisible = true;
      this.trigger.classList.add('link--up');
      this.trigger.classList.remove('link--down');
      this.triggerA.innerHTML = this.config.labelLess;
      this.triggerA.setAttribute('aria-expanded', true);
    }
  };

  showmoreless.prototype.removeTrigger = function() {
    this.trigger.parentNode.removeChild(this.trigger);
  };

})();

(function() {
  'use strict';

  var collapse = function(element) {
    this.element = element;
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];
    this.init();
  };

  /**
   * Initialize a new collapse object. Has the possibility to provide a custom trigger in case
   * any (or more) of the collapsible are nested.
   */
  collapse.prototype.init = function() {
    // Only apply add event listener logic if a custom trigger was provided.
    if(typeof this.config.trigger !== 'undefined') {
      this.addEventListeners(document.querySelector('.trigger-collapse.' + this.config.trigger));
    } else {
      this.addEventListeners(document.querySelector('.trigger-collapse'));
    }
  };

  /**
   * Add event listeners.
   * @param trigger element used as trigger in the DOM.
   */
  collapse.prototype.addEventListeners = function(trigger) {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      this.toggleCollapse();
    }.bind(this), false);
  };

  /**
   * Toggle the collapse by applying or removing the `collapsed` class.
   */
  collapse.prototype.toggleCollapse = function() {
    if(this.element.classList.contains('collapsed')) {
      this.element.classList.remove('collapsed');
    } else {
      this.element.classList.add('collapsed');
    }
  };

  onl.decorate({
    'handle-collapse': function(element) {
      new collapse(element);
    }
  });
})();

( function() {

  'use strict';

  var referenceTop;
  var h1ReferenceTop;
  var element;
  var footer;
  var resizeTimeout;
  var left;
  var detailsInSidebar = false;
  var getScrollY = function() {
    return window.pageYOffset || document.documentElement.scrollTop;
  };

  var toggle = function( button ) {
    var labelOpen = button.getAttribute( 'data-toggle-open' ) || 'Open';
    var labelClose = button.getAttribute( 'data-toggle-close' ) || 'Sluit';
    var isOpen = button.getAttribute( 'aria-expanded' ) === 'true';

    if ( isOpen ) {
      button.textContent = labelOpen;
      button.setAttribute( 'aria-expanded', 'false' );
      document.body.classList.remove( 'has-stickysidebar-open' );
      onl.ui.unbindFocusTrap( button.parentNode );
    }
    else {
      button.textContent = labelClose;
      button.setAttribute( 'aria-expanded', 'true' );
      document.body.classList.add( 'has-stickysidebar-open' );
      onl.ui.bindFocusTrap( button.parentNode );
    }
  };

  var updateStickability = function (scrollContentElement) {
    var footerOffset = footer.getBoundingClientRect();
    var scrollY = getScrollY();
    var howMuchOfFooterIsVisible = Math.max( ( window.innerHeight - footerOffset.top ), 0 );
    var sidebarHeight = ( window.innerHeight - howMuchOfFooterIsVisible - 32 );
    var onDesktop = window.matchMedia && window.matchMedia( '(min-width: 50em)' ).matches;
    var elements;
    var i;

    if ( scrollY > referenceTop && onDesktop ) {
      element.classList.add('is-sticky');
      element.style.position = 'fixed';
      element.style.top = '1em';
      element.style.left = left + 'px';
      element.style.height = sidebarHeight + 'px';
    }
    else {
      element.removeAttribute( 'style' );
      element.classList.remove('is-sticky');
    }

    if (onl.dom.$('.scrollContentReceiver')[0]){
      elements = document.querySelector(scrollContentElement).childNodes;

      onl.dom.$('.scrollContentReceiver')[0].innerHTML = '';

      if ((scrollY > h1ReferenceTop && onDesktop)) {
        for (i = 0; i < elements.length; i++){
          var cln = elements[i].cloneNode(true);
          document.querySelector('.scrollContentReceiver').appendChild(cln);
        }
      } else {
        onl.dom.$('.scrollContentReceiver')[0].innerHTML = '';
      }
    }
  };

  onl.decorate({
    'add-mobile-foldability': function( el ) {
      var button = document.createElement( 'button' );
      var labels = {
        open: 'Open sidebar',
        close: 'Sluit sidebar'
      };

      // set data to button
      // button.classList.add( 'hidden-desktop' );
      button.type = 'button';
      button.setAttribute( 'data-handler', 'toggle-sidebar' );
      button.setAttribute( 'aria-controls', el.id );
      button.setAttribute( 'data-toggle-open', labels.open );
      button.setAttribute( 'data-toggle-close', labels.close );


      // set initial state
      button.setAttribute( 'aria-expanded', 'false' );
      button.textContent = labels.close;

      el.before( button );

      // apply first time
      // if ( !( window.matchMedia( '(min-width: 50em)' ).matches ) ) {
      //   toggle( button );
      // }
    },
    'stick-sidebar': function( el ) {
      var timer;
      var config;
      var scrollContentElement;

      config = JSON.parse(el.getAttribute('data-config')) || [];
      scrollContentElement = config.scrollContentElement || '.js-scrollContentElement';

      // console.log('config', config);

      footer = onl.dom.$( '.footer' )[0];
      element = el;
      var calculate = function() {
        referenceTop = element.closest( '.columns--sticky-sidebar' ).getBoundingClientRect().top + getScrollY() + 16;
        left = onl.dom.$( '.breadcrumb' )[0].getBoundingClientRect().left;
        h1ReferenceTop = onl.dom.$('h1')[0].getBoundingClientRect().bottom;
      };

      var sidebarHeight = document.querySelector('.columns--sticky-sidebar__sidebar > div').offsetHeight;
      var columns = document.querySelectorAll('.columns--sticky-sidebar > div');
      for (var i = 0; i < columns.length; i++) {
        if (!columns[i].classList.contains('columns--sticky-sidebar__sidebar')) {
          columns[i].style.minHeight = sidebarHeight + 80 + "px";
        }
      }

      calculate();

      // window.requestAnimationFrame(updateStickability);
      // updateStickability();

      window.addEventListener( 'othersites:open', function() {
        window.setTimeout( function() {
          calculate();
        }, 500 );
      });

      window.addEventListener( 'othersites:close', function() {
        calculate();
      });

      window.addEventListener( 'scroll', function() {
        if (timer) {
          window.clearTimeout(timer);
        }

        timer = window.setTimeout(function () {
          // window.requestAnimationFrame(updateStickability);
          updateStickability(config.scrollContentElement);
        }, 10);
      });

      window.addEventListener( 'resize', function() {
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }
        resizeTimeout = window.setTimeout( function() {
          calculate();
          updateStickability(config.scrollContentElement);
        }, 50);
      });
    }

  });

  onl.handle({
    'toggle-sidebar': function( el ) {
      toggle( el );
    }
  });
})();

(function() {
  'use strict';

  var sticky = function(element) {
    this.element = element;
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];
    this.position = this.config.position || 'top';
    this.init();
  };

  sticky.prototype.init = function() {
    stickybits(this.element, { useStickyClasses: true, verticalPosition: this.position });
  };

  onl.decorate({
    'init-sticky': function(element) {
      new sticky(element);
    }
  });
})();

document.documentElement.className = 'has-js';

// run all decorators on page load
onl.run();

// bind click handler so that handlers run on click
// of elements with data-handler="handler"
document.addEventListener( 'click', function handleClick( event ) {
  var element = event.target;
  var handler = ( element.getAttribute( 'data-handler' ) || '' ).toLowerCase();
  var isDisabled = element.getAttribute( 'aria-disabled' ) === 'true';

  // no handler, bail early
  if ( !handler ) {
    return;
  }

  // honor clicks with modifier keys
  if ( element.nodeName === 'A' && ( event.shiftKey || event.metaKey || event.ctrlKey ) ) {
    return true;
  }

  // dismiss clicks on aria-disabled="true" elements
  if ( isDisabled ) {
    event.preventDefault();
    return;
  }

  handler.split( /\s+/ ).forEach( function( handlerName ) {
    if ( onl.handlers[handlerName] instanceof Function ) {
      onl.handlers[handlerName]( element, event );
    }
  });

});

// Fastselect: Copyright(c) 2015 Damir Brekalo
