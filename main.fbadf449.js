!function(e){function t(t){for(var r,o,l=t[0],c=t[1],s=t[2],m=0,d=[];m<l.length;m++)o=l[m],a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);d.length;)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={1:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=function(e){return o.p+"templates/"+({2:"src/Example/Example.page",3:"src/Library/baconjs/index",4:"src/Library/kefir/index",5:"src/Library/rxjs/index",6:"src/pages/404",7:"src/pages/gist",8:"src/pages/index",10:"vendors~src/Example/Example.page"}[e]||e)+"."+{2:"fb0d05e6",3:"0fd9099a",4:"0bc227b7",5:"419075a1",6:"5bba29cf",7:"de1a25d8",8:"e2581d93",10:"82a77b34"}[e]+".js"}(e),i=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,n[1](o)}a[e]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;i.push([221,0,9]),n()}({137:function(e,t,n){"use strict";var r=n(19),a=n.n(r),i=n(22),o=n.n(i),l=n(20),c=n.n(l),s=n(17),u=n.n(s),m=n(49),d=n.n(m),f=n(21),p=n.n(f),h=n(1),v=n.n(h),g=n(51),b=n(39),y=n(63),E=n(135),_=n(97),k=(n(291),n(119)),x=n.n(k),w=n(157),j=(n(632),function(e){function t(){return a()(this,t),c()(this,u()(t).apply(this,arguments))}return p()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.file,t=/.*\.js/.test(e.filename);return v.a.createElement("div",{className:"GistFile"},v.a.createElement("div",{className:"GistFile__Name"},e.filename),t?v.a.createElement(w.a,{key:e.filename,code:e.content}):v.a.createElement("div",{className:"PageBlock"},v.a.createElement("div",{className:"GistFile__Content DangerousContentWidth"},v.a.createElement("pre",null,e.content))))}}]),t}(h.Component)),N=(n(633),function(e){function t(){return a()(this,t),c()(this,u()(t).apply(this,arguments))}return p()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.data,t=e.owner,n=Object.values(e.files),r=n[0].filename,a=n.sort(function(e,t){return e.filename.localeCompare(t.filename)});return v.a.createElement(v.a.Fragment,null,v.a.createElement(g.Head,null,v.a.createElement("title",null,"Gist ",e.description)),v.a.createElement("div",{key:"Gist",className:"Gist"},v.a.createElement("div",{className:"Gist__Header"},v.a.createElement("a",{className:"Gist__Avatar",href:"https://gist.github.com/"+t.login,target:"_blank"},v.a.createElement("img",{src:t.avatar_url,alt:"Owner avatar"})),v.a.createElement("div",{className:"Gist__Header__Main DangerousContentWidth"},v.a.createElement("div",{className:"Gist__Path"},v.a.createElement("a",{className:"Gist__UserName",href:"https://gist.github.com/"+t.login,target:"_blank"},t.login)," / ",v.a.createElement("a",{className:"Gist__GistName",href:"https://gist.github.com/"+e.id,target:"_blank"},r)),v.a.createElement("div",{className:"Gist__Description"},e.description))),v.a.createElement(v.a.Fragment,null,a.map(function(e){return v.a.createElement(j,{key:"GistFile__"+e.filename,file:e})}))))}}]),t}(h.Component)),M=n(69),P=function(e){function t(e){var n;return a()(this,t),(n=c()(this,u()(t).call(this,e))).state={loading:!0,data:void 0},n}return p()(t,e),o()(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.gistId;x.a.get("https://api.github.com/gists/".concat(t)).then(function(t){e.setState({loading:!1,data:t.data})})}},{key:"render",value:function(){if(!this.state.loading)return v.a.createElement(N,{data:this.state.data});var e="https://gist.github.com/"+this.props.gistId;return v.a.createElement("div",null,v.a.createElement("div",{className:"PageBlock"},v.a.createElement("h3",null,"Your playground is loading...")),v.a.createElement("p",null,v.a.createElement(M.a,null)),v.a.createElement("div",{className:"PageBlock"},v.a.createElement("p",null,v.a.createElement("span",{className:"DangerousContentWidth"},"Fetching Gist from ",v.a.createElement("a",{href:e,target:"_blank"},e),"..."))))}}]),t}(h.Component),A=n(154),C=n.n(A),L=(n(634),function(e){function t(e){var n;return a()(this,t),n=c()(this,u()(t).call(this,e)),C()(d()(n),"isLinkActive",function(e){return e.isPartiallyCurrent?{className:"Menu__Link active"}:{className:"Menu__Link"}}),n.RXJS_MENU_ROOT=e.examplesMenu.find(function(e){return"rxjs"===e.handle}),n}return p()(t,e),o()(t,[{key:"renderLibraryMenu",value:function(e){var t=this;return v.a.createElement("ul",{className:"Menu__library-contents"},e.library.groups.map(function(n){return v.a.createElement("li",{key:n.name,className:"Menu__group"},v.a.createElement("span",{className:"Menu__group-name"},n.name),v.a.createElement("ul",{className:"Menu__group-contents"},n.items.map(function(n){return v.a.createElement("li",{key:n,className:"Menu__item"},v.a.createElement(b.Link,{to:"/".concat(e.handle,"/").concat(n,"/"),getProps:t.isLinkActive,key:n},n))})))}))}},{key:"render",value:function(){var e=this,t=this.props.examplesMenu,n=this.RXJS_MENU_ROOT;return v.a.createElement("nav",{className:"Menu"},t.map(function(t){return v.a.createElement("div",{key:t.handle,className:"Menu__library-name"},v.a.createElement(b.Link,{getProps:e.isLinkActive,to:"/"+t.handle+"/"},t.library.name),v.a.createElement("span",{className:"Menu__library-version"},"v",t.library.version))}),v.a.createElement("div",{className:"Menu__Gist"},v.a.createElement(b.Link,{getProps:this.isLinkActive,to:"/gist/"},"Load a gist")),v.a.createElement("hr",null),v.a.createElement("ul",{className:"Menu__examples"},t.map(function(t){return v.a.createElement("li",{key:t.handle,className:"Menu__library"},v.a.createElement(b.Match,{path:"/"+t.handle+"/*"},function(n){return n.match?e.renderLibraryMenu(t):null}))}),v.a.createElement("li",{key:root.handle,className:"Menu__library"},v.a.createElement(b.Match,{path:"/gist/*"},function(t){return t.match?e.renderLibraryMenu(n):null}),v.a.createElement(b.Match,{path:"/"},function(t){return t.match?e.renderLibraryMenu(n):null}))))}}]),t}(h.Component)),O=function(){var e=Object(g.useSiteData)().examplesMenu;return v.a.createElement(L,{examplesMenu:e})},S=(n(635),function(e){function t(){return a()(this,t),c()(this,u()(t).apply(this,arguments))}return p()(t,e),o()(t,[{key:"render",value:function(){return v.a.createElement(b.Link,{to:"/",className:"Logo"},v.a.createElement("span",{className:"Logo__Main"},"Observable")," Playground")}}]),t}(v.a.Component)),D=(n(636),function(e){function t(){return a()(this,t),c()(this,u()(t).apply(this,arguments))}return p()(t,e),o()(t,[{key:"render",value:function(){return v.a.createElement("section",null,v.a.createElement("div",{className:"Sidebar__DesktopSideMenuHeader"},v.a.createElement(S,null),v.a.createElement("div",{className:"Sidebar__Social"},v.a.createElement("a",{target:"_blank",className:"Sidebar__twitter-link",title:"Follow me on twitter",href:"https://twitter.com/kddsky"},v.a.createElement(y.a,{icon:_.b,style:{width:"1em"}})," follow"),v.a.createElement("a",{target:"_blank",className:"Sidebar__github-link",title:"Check the source code on GitHub",href:"https://github.com/observable-playground/observable-playground"},v.a.createElement(y.a,{icon:_.a,style:{width:"1em"}})," fork"))),v.a.createElement(O,null))}}]),t}(v.a.Component));Object(g.addPrefetchExcludes)(["gist/"]);var F=function(e){function t(e){var n;return a()(this,t),(n=c()(this,u()(t).call(this,e))).state={mobileMenuVisible:!1},n.toggleMobileMenu=n.toggleMobileMenu.bind(d()(n)),n.hideMobileMenu=n.hideMobileMenu.bind(d()(n)),n}return p()(t,e),o()(t,[{key:"hideMobileMenu",value:function(){this.state.mobileMenuVisible&&this.setState({mobileMenuVisible:!1})}},{key:"toggleMobileMenu",value:function(){this.setState({mobileMenuVisible:!this.state.mobileMenuVisible})}},{key:"isLinkHeaderActive",value:function(e){return e.isCurrent?{className:"App__logo active"}:{className:"App__logo"}}},{key:"render",value:function(){return v.a.createElement(g.Root,null,v.a.createElement("div",{className:"App"},v.a.createElement("div",{className:"App__MobileHeader"},v.a.createElement("button",{className:"App__MobileMenuSwitch "+(this.state.mobileMenuVisible?" active":""),onClick:this.toggleMobileMenu},v.a.createElement(y.a,{icon:E.a})),v.a.createElement(b.Link,{to:"/",onClick:this.hideMobileMenu,getProps:this.isLinkHeaderActive},v.a.createElement("span",{className:"App__logo_main"},"Observable")," Playground"),v.a.createElement("span",{className:"App__header-spring"}),v.a.createElement("a",{target:"_blank",className:"App__twitter-link",title:"Follow me on twitter",href:"https://twitter.com/kddsky"},v.a.createElement(y.a,{icon:_.b,style:{width:"1em"}})),v.a.createElement("a",{target:"_blank",className:"App__github-link",title:"Check the source code on GitHub",href:"https://github.com/observable-playground/observable-playground"},v.a.createElement(y.a,{icon:_.a,style:{width:"1em"}}))),v.a.createElement("div",{className:"App__body"},v.a.createElement("div",{className:"App__contents"+(this.state.mobileMenuVisible?" hidden":"")},v.a.createElement(v.a.Suspense,{fallback:v.a.createElement(M.a,null)},v.a.createElement(b.Router,{basepath:"/"},v.a.createElement(g.Routes,{path:"/gist"}),v.a.createElement(P,{path:"/gist/:gistId"}),v.a.createElement(g.Routes,{default:!0})))),v.a.createElement(v.a.Suspense,{fallback:v.a.createElement(M.a,null)},v.a.createElement("div",{className:"App__menu"+(this.state.mobileMenuVisible?" visible":""),onClick:this.hideMobileMenu},v.a.createElement(D,null))))))}}]),t}(v.a.Component);t.a=F},157:function(e,t,n){"use strict";var r=n(1),a=n.n(r),i=n(69),o=(n(293),function(e){return a.a.createElement("div",{className:"Playground"},a.a.createElement("div",{className:"Playground__editor"},a.a.createElement("pre",{className:"SSRPlayground__Pre"},a.a.createElement("code",{className:"SSRPlayground__Code"},e.code))),a.a.createElement("div",{className:"Playground__chart"},a.a.createElement("span",{className:"SSRPlayground__Loader"},a.a.createElement(i.a,null))))});n.d(t,"a",function(){return l});var l=function(e){if("undefined"!=typeof document){var t=n(637).Playground;return a.a.createElement(t,e)}return a.a.createElement(o,e)}},158:function(e,t,n){"use strict";n.r(t);var r=n(200),a=[{location:"../node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"../node_modules/react-static-plugin-reach-router",plugins:[],hooks:n.n(r)()({})},{location:"../node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"..",plugins:[],hooks:{}}];t.default=a},173:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",function(){return y});var r=n(34),a=n.n(r),i=n(36),o=n.n(i),l=n(1),c=n.n(l),s=n(47),u=n.n(s);Object(s.setHasBabelPlugin)();var m={loading:function(){return null},error:function(e){return console.error(e.error),c.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},d=u()(o()({id:"../src/pages/404.js",load:function(){return Promise.all([n.e(6).then(n.bind(null,214))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/pages/404.js")},resolve:function(){return 214},chunkName:function(){return"src/pages/404"}}),m);d.template="../src/pages/404.js";var f=u()(o()({id:"../src/pages/gist.js",load:function(){return Promise.all([n.e(7).then(n.bind(null,218))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/pages/gist.js")},resolve:function(){return 218},chunkName:function(){return"src/pages/gist"}}),m);f.template="../src/pages/gist.js";var p=u()(o()({id:"../src/pages/index.js",load:function(){return Promise.all([Promise.all([n.e(0),n.e(8)]).then(n.bind(null,215))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/pages/index.js")},resolve:function(){return 215},chunkName:function(){return"src/pages/index"}}),m);p.template="../src/pages/index.js";var h=u()(o()({id:"../src/Example/Example.page.js",load:function(){return Promise.all([Promise.all([n.e(0),n.e(10),n.e(2)]).then(n.bind(null,219))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/Example/Example.page.js")},resolve:function(){return 219},chunkName:function(){return"src/Example/Example.page"}}),m);h.template="../src/Example/Example.page.js";var v=u()(o()({id:"../src/Library/rxjs/index.js",load:function(){return Promise.all([n.e(5).then(n.bind(null,216))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/Library/rxjs/index.js")},resolve:function(){return 216},chunkName:function(){return"src/Library/rxjs/index"}}),m);v.template="../src/Library/rxjs/index.js";var g=u()(o()({id:"../src/Library/baconjs/index.js",load:function(){return Promise.all([n.e(3).then(n.bind(null,217))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/Library/baconjs/index.js")},resolve:function(){return 217},chunkName:function(){return"src/Library/baconjs/index"}}),m);g.template="../src/Library/baconjs/index.js";var b=u()(o()({id:"../src/Library/kefir/index.js",load:function(){return Promise.all([n.e(4).then(n.bind(null,220))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/Library/kefir/index.js")},resolve:function(){return 220},chunkName:function(){return"src/Library/kefir/index"}}),m);b.template="../src/Library/kefir/index.js",t.default={"../src/pages/404.js":d,"../src/pages/gist.js":f,"../src/pages/index.js":p,"../src/Example/Example.page.js":h,"../src/Library/rxjs/index.js":v,"../src/Library/baconjs/index.js":g,"../src/Library/kefir/index.js":b};var y="../src/pages/404.js"}.call(this,"/")},198:function(e,t,n){"use strict";(function(e,r){n.d(t,"a",function(){return p});var a=n(136),i=n.n(a),o="undefined"!=typeof window&&window||void 0!==e&&e,l=6e4,c=1024,s=Object.create(null),u=Object.create(null),m=!1,d=!1,f=["Date","setTimeout","clearTimeout","setInterval","clearInterval","setImmediate","clearImmediate","requestAnimationFrame","cancelAnimationFrame"];function p(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;n=n>0?+n:l,u.Date=function e(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return this instanceof e?0===r.length?new s.Date(t):i()(s.Date,r):s.Date.apply(s,r)},u.Date.now=function(){return t};var r,a=[],o=(r=1,function(){return r++}),p=function(e,n){return{id:o(),time:t,registeredAt:t,timeout:Math.max(0,e),type:n}},h=function(e){d&&console.log("[+]",e.id,e),a.push(e)},v=function(e){d&&console.log("[-]",e),a=a.filter(function(t){return t.id!==e})};u.setInterval=function(e,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];var o=p(n,"interval");return o.fn=function(){o.time=t,e.apply(void 0,a)},h(o),o.id},u.clearInterval=v,u.setImmediate=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=p(0,"timeout");return a.fn=function(){clearTimeout(a.id),e.apply(void 0,n)},h(a),a.id},u.clearImmediate=v,u.setTimeout=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=p(t,"timeout");return i.fn=function(){clearTimeout(i.id),e.apply(void 0,r)},h(i),i.id},u.clearTimeout=v,u.requestAnimationFrame=function(){throw new Error("Sorry, `requestAnimationFrame` is not implemented yet")},u.cancelAnimationFrame=function(){throw new Error("Sorry, `cancelAnimationFrame` is not implemented yet")};var g,b=new Date(Date.now()).toLocaleTimeString("en-GB"),y="⚡️ @".concat(b);try{t=0,m=!0,console&&console.group&&console.group(y),e(),0!==(g=function(){for(;a.length;){if(t>=n)return"Execution terminated: maximum execution time is ".concat(n,"ms");for(var e=0,r=void 0;r=a.filter(function(e){return t-e.time>=e.timeout}).sort(function(e,t){return e.registeredAt-t.registeredAt||e.time-t.time||e.id-t.id}).shift();)if(d&&console.log("[>]",r.id),r.fn(),++e>c)return"Execution terminated: over ".concat(c," tasks were scheduled for a single tick at ").concat(t);e=0,t++}return t--,0}())&&console&&console.warn&&console.warn(g)}finally{m=!1,f.forEach(function(e){u[e]=null}),console&&console.groupEnd&&console.groupEnd(y)}return{time:t,status:g}}f.filter(function(e){return void 0!==o[e]}).forEach(function(e){s[e]=o[e],o[e]=function t(){for(var n=u[e],r=s[e],a=m?n:r,o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return this instanceof t?i()(a,l):a.apply(void 0,l)}}),s.Date&&s.Date.now&&(o.Date.now=function(){return(m?u.Date.now:s.Date.now)()}),"undefined"!=typeof window&&(o.Promise=n(398).default,o.Promise._immediateFn=function(e){return m?setTimeout(e,0):"function"==typeof r?r(e):setTimeout(e,0)})}).call(this,n(38),n(145).setImmediate)},221:function(e,t,n){n(222),n(275),e.exports=n(282)},277:function(e,t,n){var r={".":100,"./":100,"./index":100,"./index.js":100};function a(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=277},285:function(e,t,n){"use strict";n.r(t),function(e){var r=n(1),a=n.n(r),i=n(155),o=n.n(i),l=n(137);if(t.default=l.a,"undefined"!=typeof document){var c=document.getElementById("root"),s=c.hasChildNodes()?o.a.hydrate:o.a.render,u=function(e){s(a.a.createElement(e,null),c)};u(l.a),e&&e.hot&&e.hot.accept("./App",function(){u(l.a)})}}.call(this,n(286)(e))},52:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return i});var r="Observable Playground | Learn, test and play with RxJS, Bacon.js and Kefir",a=["#03a9f4","#ffeb3b","#8bc34a","#00bcd4","#ff9800","#ff5073","#4caf50","#2196f3","#33cf89","#4e86ff","#009688","#cddc39","#ffc107"],i=1e3},637:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"palette",function(){return A.c});var a=n(19),i=n.n(a),o=n(22),l=n.n(o),c=n(20),s=n.n(c),u=n(17),m=n.n(u),d=n(49),f=n.n(d),p=n(21),h=n.n(p),v=n(1),g=n.n(v),b=(n(294),n(202)),y=n.n(b),E=(n(300),n(302),function(e){function t(){return i()(this,t),s()(this,m()(t).apply(this,arguments))}return h()(t,e),l()(t,[{key:"render",value:function(){return g.a.createElement(y.a,{className:"EditorComponent",name:"AceEditor_EditorComponent",mode:"javascript",theme:"monokai",defaultValue:this.props.defaultValue,value:this.props.value,width:"100%",maxLines:1/0,showGutter:!0,tabSize:2,wrapEnabled:!1,showPrintMargin:!1,setOptions:{showFoldWidgets:!1},editorProps:{$blockScrolling:!0},debounceChangePeriod:500,onChange:this.props.onChange})}}]),t}(v.Component)),_=(n(303),function(e){function t(){return i()(this,t),s()(this,m()(t).apply(this,arguments))}return h()(t,e),l()(t,[{key:"render",value:function(){var e=this.props.error;return g.a.createElement("div",{className:"ErrorComponent"},e.toString())}}]),t}(v.Component)),k=n(106),x=n(203),w=n.n(x),j=n(204),N=n.n(j),M=n(205),P=n.n(M),A=n(52),C=n(9),L=n.n(C);function O(e){return"object"==L()(e)?S(function(e){if(!e)return e;if("[object Array]"==Object.prototype.toString.call(e)&&"function"==typeof e.join)return"[".concat(e.join(),"]");if("function"==typeof e.valueOf)return e.valueOf();if("function"==typeof e.toString)return e.toString();return Object.prototype.toString.call(e)}(e)):S(e)}function S(e){return null===e?"null":void 0===e?"undefined":e}var D=n(135),F=n(206),G=n(63),T=(n(396),function(e){function t(e){var n;return i()(this,t),(n=s()(this,m()(t).call(this,e))).createChart=n.createChart.bind(f()(n)),n.downloadAsSvg=n.downloadAsSvg.bind(f()(n)),n}return h()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.createChart()}},{key:"componentDidUpdate",value:function(){this.createChart()}},{key:"createChart",value:function(){var e=this.svgNode,t=this.wrapperNode.clientWidth,n={top:0,right:19,bottom:0,left:19},r=t-n.left-n.right,a=this.props.lines,i=Math.max(this.props.time,10);k.c(e).selectAll("g.root").remove();var o=k.c(e),l=o.append("g").attr("class","root").attr("transform","translate( ".concat(n.left,", ").concat(n.top,")")),c=k.b().domain([0,i]).range([0,r]).nice(),s=l.append("g").attr("class","axis axis--x").call(k.a(c).tickFormat(function(e){return e+"ms"}).ticks(t<500?7:void 0));s.selectAll("line, path").attr("stroke","#c5c5c5"),s.selectAll("text").attr("fill","#c5c5c5");var u=l.append("g").attr("transform","translate(0, ".concat(35,")"));if(a){var m=0;a.forEach(function(e){var t=e.start,a=void 0===e.end?A.a:e.end,i=w()(e.events||[],function(e){return e.time}),l=e.errors||[],s=e.stops||[],d=null!=e.lineName?O(e.lineName):"",f=m,p=d?22:0,h=N()(i).reduce(function(e,t){return Math.max(t.length,e)},1),v=Math.max(28*(h-1)+34,50);m+=p+v+14;var g=u.append("g").attr("class","thread").attr("transform",function(){return"translate(0, ".concat(f,")")});d&&g.append("text").attr("class","lineTitle").attr("font-family","sans-serif").attr("font-size",12).attr("fill","#757575").attr("y",12).text(d);var b=g.append("g").attr("class","line").attr("transform",function(){return"translate(0, ".concat(p,")")}).attr("stroke","#333").attr("stroke-width","2").append("g").attr("transform",function(){return"translate(0, ".concat(v/2,")")});b.append("line").attr("class","baseline").attr("x1",function(){return c(t)}).attr("y1",0).attr("x2",function(){return c(a)}).attr("y2",0),b.append("line").attr("class","startmark").attr("x1",function(){return c(t)}).attr("y1",-25).attr("x2",function(){return c(t)}).attr("y2",0).append("title").text("start"),b.selectAll("g.end").data(s).enter().append("g").attr("class","end").attr("transform",function(e){return"translate(".concat(c(e.time),", 0)")}).append("line").attr("class","endmark").attr("x1",0).attr("y1",-25).attr("x2",0).attr("y2",25).append("title").text("complete"),P()(i).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){var t=e[1],n=b.selectAll("g.event".concat(e[0])).data(t).enter().append("g").attr("class","event".concat(e[0]," event")).attr("transform",function(e,n){return"translate(".concat(c(e.time),", ").concat(28*(n-(t.length-1)/2),")")});n.append("circle").attr("r",17).style("fill",function(e){return e.value&&e.value.color?e.value.color:A.c[e.index%A.c.length]}),n.append("text").attr("font-family","sans-serif").attr("font-size","14px").attr("text-anchor","middle").attr("stroke-width",0).attr("y",5).text(function(e){return O(e.value)}),n.append("title").text(function(e){return O(e.value)})});var y=b.selectAll("g.error").data(l).enter().append("g").attr("class","error").attr("transform",function(e){return"translate(".concat(c(e.time),", 0)")});y.append("title").text(function(e){return O(e.value)}),y.append("line").attr("x1",-17).attr("y1",-17).attr("x2",17).attr("y2",17),y.append("line").attr("x1",17).attr("y1",-17).attr("x2",-17).attr("y2",17),y.append("path").attr("d","M0,-13.872638167626057L12.01405707067377,6.936319083813029L-12.01405707067377,6.936319083813029Z").attr("class","errorTriangle").attr("stroke","#ff9900").attr("fill","#ff9900").attr("stroke-linejoin","round").attr("stroke-width",4),y.append("text").attr("font-family","monospace").attr("text-anchor","middle").attr("stroke-width",0).attr("y",4).text("!"),o.attr("height",m+35+n.top+n.bottom).attr("width",r+n.left+n.right)})}}},{key:"downloadAsSvg",value:function(){var e=window.document.title.replace(/[^a-z0-9]/gi,"-").toLowerCase();Object(F.saveSvgAsPng)(this.svgNode,e,{encoderOptions:1,scale:2})}},{key:"render",value:function(){var e=this;return g.a.createElement("div",{className:"TimeLineChart",ref:function(t){return e.wrapperNode=t}},g.a.createElement("svg",{ref:function(t){return e.svgNode=t},width:"0",height:"0"}),g.a.createElement("button",{className:"TimeLineChart__Download",onClick:this.downloadAsSvg,title:"Download as .png"},g.a.createElement(G.a,{icon:D.b})))}}]),t}(v.Component)),R=(n(397),n(198)),I=Object.create(null),V=function(){return I},B=n(208),H=n(209),W=n.n(H),U=n(212),q=n(2),J=n(4),z=n(210),K=n(211),X=n(153),Y=n.n(X),Z=function(e){var t,n=V().lines||[];t={lines:[].concat(Y()(n),[e])},I=Object.assign(Object.create(null),I,t)},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=function(e){return{lineName:e,start:Date.now(),end:void 0,events:[],errors:[],stops:[]}}(e),n=0;return Z(t),{next:function(e){t.events.push({index:n++,time:Date.now(),value:e})},error:function(e){t.errors.push({time:Date.now(),value:e}),t.end=Date.now()},complete:function(){t.stops.push({time:Date.now()}),t.end=Date.now()}}},Q={createObserver:$,createRxObserver:function(e){var t=$(e);return{next:t.next,error:t.error,complete:t.complete}},createKefirObserver:function(e){var t=$(e);return{value:t.next,error:t.error,end:t.complete}},createBaconObserver:function(e){var t=$(e),n=t.next,r=t.error,a=t.complete;return function(e){return e.isNext?n(e.value):e.isError?r(e.value):e.isEnd?a():void 0}}},ee={chart:Q},te={rxObserver:Q.createRxObserver,kefirObserver:Q.createKefirObserver,baconObserver:Q.createBaconObserver,palette:A.c},ne=[{name:"rxjs",load:function(){return q}},{name:"rxjs/Rx",load:function(){return U}},{name:"rxjs/operators",load:function(){return J}},{name:"baconjs",load:function(){return z}},{name:"kefir",load:function(){return K.a}},{name:"rp-api",load:function(){return ee}},{name:"api/v0.3",load:function(){return te}},{name:"rp-api/colors",load:function(){return r}}],re=function(e){function t(e){i()(this,t);var n=ne.map(function(e){return e.name}),r='Currently package "'.concat(e,'" is not supported. Please, use one of these: ').concat(n);return s()(this,m()(t).call(this,r))}return h()(t,e),t}(W()(Error)),ae=function(e){var t=ne.find(function(t){return t.name===e});if(void 0===t)throw new re(e);return t.load()},ie=function(e){var t,n;I=Object.create(null);try{var r=function(e){var t=B.transform(e,{presets:["es2017"]}).code;return function(){Function("require",t)(ae)}}(e),a=Object(R.a)(r,A.a);t=a.status,n=a.time}catch(i){console.error(i),t=i instanceof Error?i:new Error(i),n=0}return{time:n,status:t,lines:V().lines}};n.d(t,"Playground",function(){return oe});var oe=function(e){function t(e){var n;i()(this,t),(n=s()(this,m()(t).call(this,e))).onChange=n.onChange.bind(f()(n));var r=e.code,a=ie(r),o=a.status,l=a.time,c=a.lines;return n.state={value:r,defaultValue:r,status:o,time:l,lines:c},n}return h()(t,e),l()(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.code;this.onChange(t)}},{key:"onChange",value:function(e){if(e!=this.state.value){window&&window.ga&&window.ga("send","event","Editor","change");var t=ie(e),n=t.status,r=t.time,a=t.lines;this.setState({value:e,status:n,time:r,lines:a})}}},{key:"render",value:function(){var e=this.state,t=e.status,n=e.time,r=e.lines,a=e.value,i=e.defaultValue,o=t instanceof Error;return g.a.createElement("div",{className:"Playground"},g.a.createElement("div",{className:"Playground__editor"},g.a.createElement(E,{value:a,defaultValue:i,onChange:this.onChange})),g.a.createElement("div",{className:"Playground__chart"},o&&g.a.createElement(_,{error:t}),g.a.createElement(T,{time:n,lines:r})))}}]),t}(v.Component)},69:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(1),a=n.n(r),i=(n(292),function(){return a.a.createElement("span",{className:"lds-ellipsis"},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null))})}});