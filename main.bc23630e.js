!function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],f=0,m=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);m.length;)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={8:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(t){return i.p+"templates/"+({1:"__react_static_root__/src/Example/Example.page",2:"__react_static_root__/src/Library/baconjs/index",3:"__react_static_root__/src/Library/kefir/index",4:"__react_static_root__/src/Library/rxjs/index",5:"__react_static_root__/src/pages/404",6:"__react_static_root__/src/pages/gist",7:"__react_static_root__/src/pages/index",9:"vendors~__react_static_root__/src/Example/Example.page"}[t]||t)+"."+{1:"c0d68e10",2:"c0621839",3:"6e4c0c63",4:"a274c0cb",5:"bf96fce8",6:"824546d4",7:"d50af5e2",9:"f91df135"}[t]+".js"}(t);var s=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://thinkrx.io/",i.oe=function(t){throw console.error(t),t};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([248,0,10]),n()}({145:function(t,e,n){"use strict";var r=n(17),a=n.n(r),o=n(22),i=n.n(o),c=n(48),s=n.n(c),u=n(19),l=n.n(u),f=n(18),m=n.n(f),d=n(12),p=n.n(d),_=n(0),h=n.n(_),v=n(57),g=n(43),y=n(50),b=n(74),E=n(102),x=(n(314),n(127)),k=n.n(x),w=n(169);n(655);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p()(t);if(e){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var N=function(t){l()(n,t);var e=j(n);function n(){return a()(this,n),e.apply(this,arguments)}return i()(n,[{key:"render",value:function(){var t=this.props.file,e=/.*\.js/.test(t.filename);return h.a.createElement("div",{className:"GistFile"},h.a.createElement("div",{className:"GistFile__Name"},t.filename),e?h.a.createElement(w.a,{key:t.filename,code:t.content}):h.a.createElement("div",{className:"PageBlock"},h.a.createElement("div",{className:"GistFile__Content DangerousContentWidth"},h.a.createElement("pre",null,t.content))))}}]),n}(_.Component);n(656);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p()(t);if(e){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var M=function(t){l()(n,t);var e=R(n);function n(){return a()(this,n),e.apply(this,arguments)}return i()(n,[{key:"render",value:function(){var t=this.props.data,e=t.owner,n=Object.values(t.files),r=n[0].filename,a=n.sort((function(t,e){return t.filename.localeCompare(e.filename)}));return h.a.createElement(h.a.Fragment,null,h.a.createElement(v.Head,null,h.a.createElement("title",null,"Gist ",t.description)),h.a.createElement("div",{key:"Gist",className:"Gist"},h.a.createElement("div",{className:"Gist__Header"},h.a.createElement("a",{className:"Gist__Avatar",href:"https://gist.github.com/"+e.login,target:"_blank"},h.a.createElement("img",{src:e.avatar_url,alt:"Owner avatar"})),h.a.createElement("div",{className:"Gist__Header__Main DangerousContentWidth"},h.a.createElement("div",{className:"Gist__Path"},h.a.createElement("a",{className:"Gist__UserName",href:"https://gist.github.com/"+e.login,target:"_blank"},e.login)," / ",h.a.createElement("a",{className:"Gist__GistName",href:"https://gist.github.com/"+t.id,target:"_blank"},r)),h.a.createElement("div",{className:"Gist__Description"},t.description))),h.a.createElement(h.a.Fragment,null,a.map((function(t){return h.a.createElement(N,{key:"GistFile__"+t.filename,file:t})})))))}}]),n}(_.Component),S=n(76);function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p()(t);if(e){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var D=function(t){l()(n,t);var e=P(n);function n(t){var r;return a()(this,n),(r=e.call(this,t)).state={loading:!0,data:void 0},r}return i()(n,[{key:"componentWillMount",value:function(){var t=this,e=this.props.gistId;k.a.get("https://api.github.com/gists/".concat(e)).then((function(e){t.setState({loading:!1,data:e.data})}))}},{key:"render",value:function(){if(!this.state.loading)return h.a.createElement(M,{data:this.state.data});var t="https://gist.github.com/"+this.props.gistId;return h.a.createElement("div",null,h.a.createElement("div",{className:"PageBlock"},h.a.createElement("h3",null,"Your playground is loading...")),h.a.createElement("p",null,h.a.createElement(S.a,null)),h.a.createElement("div",{className:"PageBlock"},h.a.createElement("p",null,h.a.createElement("span",{className:"DangerousContentWidth"},"Fetching Gist from ",h.a.createElement("a",{href:t,target:"_blank"},t),"..."))))}}]),n}(_.Component),C=n(165),A=n.n(C);n(657);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p()(t);if(e){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var L=function(t){l()(n,t);var e=O(n);function n(t){var r;return a()(this,n),r=e.call(this,t),A()(s()(r),"isLinkActive",(function(t){return t.isPartiallyCurrent?{className:"Menu__Link active"}:{className:"Menu__Link"}})),r.RXJS_MENU_ROOT=t.examplesMenu.find((function(t){return"rxjs"===t.handle})),r}return i()(n,[{key:"renderLibraryMenu",value:function(t){var e=this;return h.a.createElement("ul",{className:"Menu__library-contents"},t.library.groups.map((function(n){return h.a.createElement("li",{key:n.name,className:"Menu__group"},h.a.createElement("span",{className:"Menu__group-name"},n.name),h.a.createElement("ul",{className:"Menu__group-contents"},n.items.map((function(n){return h.a.createElement("li",{key:n,className:"Menu__item"},h.a.createElement(g.Link,{to:"/".concat(t.handle,"/").concat(n,"/"),getProps:e.isLinkActive,key:n},n))}))))})))}},{key:"render",value:function(){var t=this,e=this.props.examplesMenu,n=this.RXJS_MENU_ROOT;return h.a.createElement("nav",{className:"Menu"},e.map((function(e){return h.a.createElement("div",{key:e.handle,className:"Menu__library-name"},h.a.createElement(g.Link,{getProps:t.isLinkActive,to:"/"+e.handle+"/"},e.library.name),h.a.createElement("span",{className:"Menu__library-version"},"v",e.library.version))})),h.a.createElement("div",{className:"Menu__Gist"},h.a.createElement(g.Link,{getProps:this.isLinkActive,to:"/gist/"},"Share a gist")),h.a.createElement("hr",null),h.a.createElement("ul",{className:"Menu__examples"},e.map((function(e){return h.a.createElement("li",{key:e.handle,className:"Menu__library"},h.a.createElement(g.Match,{path:"/"+e.handle+"/*"},(function(n){return n.match?t.renderLibraryMenu(e):null})))})),h.a.createElement("li",{className:"Menu__library"},h.a.createElement(g.Match,{path:"/gist/*"},(function(e){return e.match?t.renderLibraryMenu(n):null})),h.a.createElement(g.Match,{path:"/"},(function(e){return e.match?t.renderLibraryMenu(n):null})))))}}]),n}(_.Component),G=function(){var t=Object(v.useSiteData)().examplesMenu;return h.a.createElement(L,{examplesMenu:t})};n(658);function F(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p()(t);if(e){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var T=function(t){l()(n,t);var e=F(n);function n(){return a()(this,n),e.apply(this,arguments)}return i()(n,[{key:"render",value:function(){return h.a.createElement(g.Link,{to:"/",className:"Logo"},h.a.createElement("span",{className:"Logo__Main"},"think"),"rx")}}]),n}(h.a.Component);n(659);function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p()(t);if(e){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var V=function(t){l()(n,t);var e=I(n);function n(){return a()(this,n),e.apply(this,arguments)}return i()(n,[{key:"render",value:function(){return h.a.createElement("section",null,h.a.createElement("div",{className:"Sidebar__DesktopSideMenuHeader"},h.a.createElement(T,null),h.a.createElement("div",{className:"Sidebar__Social"},h.a.createElement("a",{target:"_blank",className:"Sidebar__twitter-link",title:"Follow me on twitter",href:"https://twitter.com/kddsky"},"follow updates ",h.a.createElement(y.a,{icon:E.b,style:{width:"1em",float:"right"}})),h.a.createElement("a",{target:"_blank",className:"Sidebar__github-link",title:"Check the source code on GitHub",href:"https://github.com/observable-playground/observable-playground"},"star this ",h.a.createElement(y.a,{icon:b.e,style:{width:"1em",float:"right"}})),h.a.createElement("a",{target:"_blank",className:"Sidebar__github-link",title:"Check the source code on GitHub",href:"https://github.com/observable-playground/observable-playground/issues"},"report a bug ",h.a.createElement(y.a,{icon:E.a,style:{width:"1em",float:"right"}})))),h.a.createElement(G,null))}}]),n}(h.a.Component);function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p()(t);if(e){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var B=function(t){l()(n,t);var e=W(n);function n(t){var r;return a()(this,n),(r=e.call(this,t)).state={mobileMenuVisible:!1},r.toggleMobileMenu=r.toggleMobileMenu.bind(s()(r)),r.hideMobileMenu=r.hideMobileMenu.bind(s()(r)),r}return i()(n,[{key:"hideMobileMenu",value:function(){this.state.mobileMenuVisible&&this.setState({mobileMenuVisible:!1})}},{key:"toggleMobileMenu",value:function(){this.setState({mobileMenuVisible:!this.state.mobileMenuVisible})}},{key:"isLinkHeaderActive",value:function(t){return t.isCurrent?{className:"App__logo active"}:{className:"App__logo"}}},{key:"render",value:function(){return h.a.createElement(v.Root,null,h.a.createElement("div",{className:"App"},h.a.createElement("div",{className:"App__MobileHeader"},h.a.createElement("button",{className:"App__MobileMenuSwitch "+(this.state.mobileMenuVisible?" active":""),onClick:this.toggleMobileMenu},h.a.createElement(y.a,{icon:b.a})),h.a.createElement("span",{onClick:this.hideMobileMenu},h.a.createElement(T,null)),h.a.createElement("span",{className:"App__header-spring"}),h.a.createElement("a",{target:"_blank",className:"App__twitter-link",title:"Follow me on twitter",href:"https://twitter.com/kddsky"},h.a.createElement(y.a,{icon:E.b,style:{width:"1em"}})),h.a.createElement("a",{target:"_blank",className:"App__github-link",title:"Star the project",href:"https://github.com/observable-playground/observable-playground"},h.a.createElement(y.a,{icon:b.e,style:{width:"1em"}})),h.a.createElement("a",{target:"_blank",className:"App__github-link",title:"See the source code on GitHub",href:"https://github.com/observable-playground/observable-playground/issues"},h.a.createElement(y.a,{icon:E.a,style:{width:"1em"}}))),h.a.createElement("div",{className:"App__body"},h.a.createElement("div",{className:"App__contents"+(this.state.mobileMenuVisible?" hidden":"")},h.a.createElement(h.a.Suspense,{fallback:h.a.createElement(S.a,null)},h.a.createElement(g.Router,{basepath:"/"},h.a.createElement(v.Routes,{path:"/gist"}),h.a.createElement(D,{path:"/gist/:gistId"}),h.a.createElement(v.Routes,{default:!0})))),h.a.createElement(h.a.Suspense,{fallback:h.a.createElement(S.a,null)},h.a.createElement("div",{className:"App__menu"+(this.state.mobileMenuVisible?" visible":""),onClick:this.hideMobileMenu},h.a.createElement(V,null))))))}}]),n}(h.a.Component);e.a=B},166:function(t,e,n){"use strict";var r=n(192);n.d(e,"a",(function(){return r.a}))},169:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r,a,o=n(0),i=n.n(o),c=function(t){return"undefined"!=typeof document?(r||(r=n(660).Playground),i.a.createElement(r,t)):(a||(a=n(652).SSRPlayground),i.a.createElement(a,t))}},192:function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return f}));var a=n(142),o=n.n(a),i="undefined"!=typeof window&&window||void 0!==t&&t,c=Object.create(null),s=Object.create(null),u=!1,l=["Date","setTimeout","clearTimeout","setInterval","clearInterval","setImmediate","clearImmediate","requestAnimationFrame","cancelAnimationFrame"];function f(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e4;n=n>0?+n:6e4,s.Date=function t(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return this instanceof t?0===r.length?new c.Date(e):o()(c.Date,r):c.Date.apply(c,r)},s.Date.now=function(){return e};var r,a=[],i=(r=1,function(){return r++}),u=function(t,n){return{id:i(),time:e,registeredAt:e,timeout:Math.max(0,t),type:n}},l=function(t){a.push(t)},f=function(t){a=a.filter((function(e){return e.id!==t}))};s.setInterval=function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];var i=u(n,"interval");return i.fn=function(){i.time=e,t.apply(void 0,a)},l(i),i.id},s.clearInterval=f,s.setImmediate=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=u(0,"timeout");return a.fn=function(){clearTimeout(a.id),t.apply(void 0,n)},l(a),a.id},s.clearImmediate=f,s.setTimeout=function(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var o=u(e,"timeout");return o.fn=function(){clearTimeout(o.id),t.apply(void 0,r)},l(o),o.id},s.clearTimeout=f,s.requestAnimationFrame=function(){throw new Error("Sorry, `requestAnimationFrame` is not implemented yet")},s.cancelAnimationFrame=function(){throw new Error("Sorry, `cancelAnimationFrame` is not implemented yet")};var p,_=function(){return a.filter((function(t){return e-t.time>=t.timeout})).sort((function(t,e){return t.registeredAt-e.registeredAt||t.time-e.time||t.id-e.id})).shift()},h=function(){for(;a.length;){for(var t=0,r=void 0;r=_();)if(r.fn(),++t>1024)return"Execution terminated: over ".concat(1024," tasks were scheduled for a single tick at ").concat(e,"ms");if(t=0,e>=n)return"Maximum execution time is limited to ".concat(n,"ms");e++}return e--,0},v=new Date(Date.now()).toLocaleTimeString("en-GB"),g="⚡️ @".concat(v);try{e=0,m(),console&&console.group&&console.group(g),t(),0!==(p=h())&&console&&console.warn&&console.warn(p)}finally{d(),console&&console.groupEnd&&console.groupEnd(g)}return{time:e,status:p}}function m(){u=!0}function d(){u=!1,l.forEach((function(t){s[t]=null}))}l.filter((function(t){return void 0!==i[t]})).forEach((function(t){c[t]=i[t],i[t]=function e(){for(var n=s[t],r=c[t],a=u?n:r,i=arguments.length,l=new Array(i),f=0;f<i;f++)l[f]=arguments[f];return this instanceof e?o()(a,l):a.apply(void 0,l)}})),c.Date&&c.Date.now&&(i.Date.now=function(){return(u?s.Date.now:c.Date.now)()}),"undefined"!=typeof window&&(i.Promise=n(310).default,i.Promise._immediateFn=function(t){return u?setTimeout(t,0):"function"==typeof r?r(t):setTimeout(t,0)})}).call(this,n(38),n(155).setImmediate)},248:function(t,e,n){n(249),n(296),t.exports=n(304)},250:function(t,e,n){"use strict";n.r(e);var r=n(216),a=[{location:"__react_static_root__/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-reach-router",plugins:[],hooks:n.n(r)()({})},{location:"__react_static_root__/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"__react_static_root__/",plugins:[],hooks:{}}];e.default=a},297:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"notFoundTemplate",(function(){return y}));var r=n(33),a=n.n(r),o=n(35),i=n.n(o),c=n(0),s=n.n(c),u=n(51),l=n.n(u);Object(u.setHasBabelPlugin)();var f={loading:function(){return null},error:function(t){return console.error(t.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},m=l()(i()({id:"__react_static_root__/src/pages/404.js",load:function(){return Promise.all([n.e(5).then(n.bind(null,230))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/pages/404.js")},resolve:function(){return 230},chunkName:function(){return"__react_static_root__/src/pages/404"}}),f);m.template="__react_static_root__/src/pages/404.js";var d=l()(i()({id:"__react_static_root__/src/pages/gist.js",load:function(){return Promise.all([n.e(6).then(n.bind(null,232))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/pages/gist.js")},resolve:function(){return 232},chunkName:function(){return"__react_static_root__/src/pages/gist"}}),f);d.template="__react_static_root__/src/pages/gist.js";var p=l()(i()({id:"__react_static_root__/src/pages/index.js",load:function(){return Promise.all([Promise.all([n.e(0),n.e(7)]).then(n.bind(null,231))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/pages/index.js")},resolve:function(){return 231},chunkName:function(){return"__react_static_root__/src/pages/index"}}),f);p.template="__react_static_root__/src/pages/index.js";var _=l()(i()({id:"__react_static_root__/src/Example/Example.page.js",load:function(){return Promise.all([Promise.all([n.e(0),n.e(9),n.e(1)]).then(n.bind(null,236))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/Example/Example.page.js")},resolve:function(){return 236},chunkName:function(){return"__react_static_root__/src/Example/Example.page"}}),f);_.template="__react_static_root__/src/Example/Example.page.js";var h=l()(i()({id:"__react_static_root__/src/Library/rxjs/index.js",load:function(){return Promise.all([n.e(4).then(n.bind(null,235))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/Library/rxjs/index.js")},resolve:function(){return 235},chunkName:function(){return"__react_static_root__/src/Library/rxjs/index"}}),f);h.template="__react_static_root__/src/Library/rxjs/index.js";var v=l()(i()({id:"__react_static_root__/src/Library/baconjs/index.js",load:function(){return Promise.all([n.e(2).then(n.bind(null,233))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/Library/baconjs/index.js")},resolve:function(){return 233},chunkName:function(){return"__react_static_root__/src/Library/baconjs/index"}}),f);v.template="__react_static_root__/src/Library/baconjs/index.js";var g=l()(i()({id:"__react_static_root__/src/Library/kefir/index.js",load:function(){return Promise.all([n.e(3).then(n.bind(null,234))]).then((function(t){return t[0]}))},path:function(){return a.a.join(t,"__react_static_root__/src/Library/kefir/index.js")},resolve:function(){return 234},chunkName:function(){return"__react_static_root__/src/Library/kefir/index"}}),f);g.template="__react_static_root__/src/Library/kefir/index.js",e.default={"__react_static_root__/src/pages/404.js":m,"__react_static_root__/src/pages/gist.js":d,"__react_static_root__/src/pages/index.js":p,"__react_static_root__/src/Example/Example.page.js":_,"__react_static_root__/src/Library/rxjs/index.js":h,"__react_static_root__/src/Library/baconjs/index.js":v,"__react_static_root__/src/Library/kefir/index.js":g};var y="__react_static_root__/src/pages/404.js"}.call(this,"/")},299:function(t,e,n){var r={".":104,"./":104,"./index":104,"./index.js":104};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=299},307:function(t,e,n){"use strict";n.r(e),function(t){n(166);var r=n(0),a=n.n(r),o=n(167),i=n.n(o),c=n(145);if(e.default=c.a,"undefined"!=typeof document){var s=document.getElementById("root"),u=s.hasChildNodes()?i.a.hydrate:i.a.render,l=function(t){u(a.a.createElement(t,null),s)};l(c.a),t&&t.hot&&t.hot.accept("./App",(function(){l(c.a)}))}}.call(this,n(191)(t))},52:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var r="Learn, test and play with streams in RxJS, Bacon.js, Kefir",a=["#03a9f4","#ffeb3b","#8bc34a","#00bcd4","#ff9800","#ff5073","#4caf50","#2196f3","#33cf89","#4e86ff","#009688","#cddc39","#ffc107","#5899da","#e8743b","#19a979","#ed4a7b","#945ecf","#13a4b4","#525df4","#bf399e","#6c8893","#ee6868","#2f6497"],o=1e3},652:function(t,e,n){"use strict";n.r(e),n.d(e,"SSRPlayground",(function(){return i}));var r=n(0),a=n.n(r),o=n(76),i=(n(654),function(t){return a.a.createElement("div",{className:"Playground"},a.a.createElement("div",{className:"Playground__editor"},a.a.createElement("pre",{className:"SSRPlayground__Pre"},a.a.createElement("code",{className:"SSRPlayground__Code"},t.code))),a.a.createElement("div",{className:"Playground__chart"},a.a.createElement("span",{className:"SSRPlayground__Loader"},a.a.createElement(o.a,null))))})},660:function(t,e,n){"use strict";n.r(e),n.d(e,"Playground",(function(){return dt}));var r={};n.r(r),n.d(r,"palette",(function(){return P.c}));var a=n(17),o=n.n(a),i=n(22),c=n.n(i),s=n(48),u=n.n(s),l=n(19),f=n.n(l),m=n(18),d=n.n(m),p=n(12),_=n.n(p),h=n(0),v=n.n(h),g=(n(315),n(219)),y=n.n(g);n(321),n(322);function b(t){var e=t.value,n=t.defaultValue,r=t.onChange;return v.a.createElement(y.a,{className:"EditorComponent",name:"AceEditor_EditorComponent",mode:"javascript",theme:"monokai",defaultValue:n,value:e,width:"100%",maxLines:1/0,showGutter:!0,tabSize:2,wrapEnabled:!1,showPrintMargin:!1,setOptions:{useWorker:!1,showFoldWidgets:!1},editorProps:{$blockScrolling:!0},debounceChangePeriod:500,onChange:r})}n(323);function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_()(t);if(e){var a=_()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var x=function(t){f()(n,t);var e=E(n);function n(){return o()(this,n),e.apply(this,arguments)}return c()(n,[{key:"render",value:function(){var t=this.props.error;return v.a.createElement("div",{className:"ErrorComponent",title:"Error"},"❌ ",t.toString())}}]),n}(h.Component),k=n(110),w=n(220),j=n.n(w),N=n(221),R=n.n(N),M=n(222),S=n.n(M),P=n(52),D=n(9),C=n.n(D);function A(t){return"object"==C()(t)?O(function(t){if(!t)return t;if("[object Array]"==Object.prototype.toString.call(t)&&"function"==typeof t.join)return"[".concat(t.join(),"]");if("function"==typeof t.valueOf)return t.valueOf();if("function"==typeof t.toString)return t.toString();return Object.prototype.toString.call(t)}(t)):O(t)}function O(t){return null===t?"null":void 0===t?"undefined":t}var L=n(74),G=n(223),F=n(50);n(416);function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_()(t);if(e){var a=_()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var I=function(t){f()(n,t);var e=T(n);function n(t){var r;return o()(this,n),(r=e.call(this,t)).createChart=r.createChart.bind(u()(r)),r.downloadAsSvg=r.downloadAsSvg.bind(u()(r)),r}return c()(n,[{key:"componentDidMount",value:function(){this.createChart()}},{key:"componentDidUpdate",value:function(){this.createChart()}},{key:"createChart",value:function(){var t=this.svgNode,e=this.wrapperNode.clientWidth,n={top:0,right:19,bottom:0,left:19},r=e-n.left-n.right,a=this.props.lines,o=Math.max(this.props.time,10);k.c(t).selectAll("g.root").remove();var i=k.c(t),c=i.append("g").attr("class","root").attr("transform","translate( ".concat(n.left,", ").concat(n.top,")")),s=k.b().domain([0,o]).range([0,r]).nice(),u=c.append("g").attr("class","axis axis--x").call(k.a(s).tickFormat((function(t){return t+"ms"})).ticks(e<500?7:void 0));u.selectAll("line, path").attr("stroke","#c5c5c5"),u.selectAll("text").attr("fill","#c5c5c5");var l=c.append("g").attr("transform","translate(0, ".concat(35,")"));if(a){var f=0;a.forEach((function(t){var e=t.start,a=void 0===t.end?P.a:t.end,o=j()(t.events||[],(function(t){return t.time})),c=t.errors||[],u=t.stops||[],m=null!=t.lineName?A(t.lineName):"",d=f,p=m?22:0,_=R()(o).reduce((function(t,e){return Math.max(e.length,t)}),1),h=Math.max(28*(_-1)+34,50);f+=p+h+14;var v=l.append("g").attr("class","thread").attr("transform",(function(){return"translate(0, ".concat(d,")")}));m&&v.append("text").attr("class","lineTitle").attr("font-family","sans-serif").attr("font-size",12).attr("fill","#757575").attr("y",12).text(m);var g=v.append("g").attr("class","line").attr("transform",(function(){return"translate(0, ".concat(p,")")})).attr("stroke","#333").attr("stroke-width","2").append("g").attr("transform",(function(){return"translate(0, ".concat(h/2,")")}));g.append("line").attr("class","baseline").attr("x1",(function(){return s(e)})).attr("y1",0).attr("x2",(function(){return s(a)})).attr("y2",0),g.append("line").attr("class","startmark").attr("x1",(function(){return s(e)})).attr("y1",-25).attr("x2",(function(){return s(e)})).attr("y2",0).append("title").text("start"),g.selectAll("g.end").data(u).enter().append("g").attr("class","end").attr("transform",(function(t){return"translate(".concat(s(t.time),", 0)")})).append("line").attr("class","endmark").attr("x1",0).attr("y1",-25).attr("x2",0).attr("y2",25).append("title").text("complete"),S()(o).sort((function(t,e){return t[0]-e[0]})).forEach((function(t){var e=t[1],n=g.selectAll("g.event".concat(t[0])).data(e).enter().append("g").attr("class","event".concat(t[0]," event")).attr("transform",(function(t,n){return"translate(".concat(s(t.time),", ").concat(28*(n-(e.length-1)/2),")")}));n.append("circle").attr("r",17).style("fill",(function(t){return t.value&&t.value.color?t.value.color:P.c[t.index%P.c.length]})),n.append("text").attr("font-family","sans-serif").attr("font-size","14px").attr("text-anchor","middle").attr("stroke-width",0).attr("y",5).text((function(t){return A(t.value)})),n.append("title").text((function(t){return A(t.value)}))}));var y=g.selectAll("g.error").data(c).enter().append("g").attr("class","error").attr("transform",(function(t){return"translate(".concat(s(t.time),", 0)")}));y.append("title").text((function(t){return A(t.value)})),y.append("line").attr("x1",-17).attr("y1",-17).attr("x2",17).attr("y2",17),y.append("line").attr("x1",17).attr("y1",-17).attr("x2",-17).attr("y2",17),y.append("path").attr("d","M0,-13.872638167626057L12.01405707067377,6.936319083813029L-12.01405707067377,6.936319083813029Z").attr("class","errorTriangle").attr("stroke","#ff9900").attr("fill","#ff9900").attr("stroke-linejoin","round").attr("stroke-width",4),y.append("text").attr("font-family","monospace").attr("text-anchor","middle").attr("stroke-width",0).attr("y",4).text("!"),i.attr("height",f+35+n.top+n.bottom).attr("width",r+n.left+n.right)}))}}},{key:"downloadAsSvg",value:function(){var t=window.document.title.replace(/[^a-z0-9]/gi,"-").toLowerCase();Object(G.saveSvgAsPng)(this.svgNode,t,{encoderOptions:1,scale:2})}},{key:"render",value:function(){var t=this;return v.a.createElement("div",{className:"TimeLineChart",ref:function(e){return t.wrapperNode=e}},v.a.createElement("svg",{ref:function(e){return t.svgNode=e},width:"0",height:"0"}),v.a.createElement("button",{className:"TimeLineChart__Download",onClick:this.downloadAsSvg,title:"Download as .png"},v.a.createElement(F.a,{icon:L.c})))}}]),n}(h.Component),V=(n(417),n(166)),W=Object.create(null),B=function(){return W},H=n(224),U=n(225),q=n.n(U),J=n(228),z=n(2),K=n(4),X=n(226),Y=n(227),Z=n(164),$=n.n(Z),Q=function(t){var e,n=B().lines||[];e={lines:[].concat($()(n),[t])},W=Object.assign(Object.create(null),W,e)},tt=function(t){return{lineName:t,start:Date.now(),end:void 0,events:[],errors:[],stops:[]}},et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=tt(t),n=0;var r=function(t){e.events.push({index:n++,time:Date.now(),value:t})},a=function(t){e.errors.push({time:Date.now(),value:t}),e.end=Date.now()},o=function(){e.stops.push({time:Date.now()}),e.end=Date.now()};return Q(e),{next:r,error:a,complete:o}},nt={createObserver:et,createRxObserver:function(t){var e=et(t);return{next:e.next,error:e.error,complete:e.complete}},createKefirObserver:function(t){var e=et(t);return{value:e.next,error:e.error,end:e.complete}},createBaconObserver:function(t){var e=et(t),n=e.next,r=e.error,a=e.complete;return function(t){return t.isNext?n(t.value):t.isError?r(t.value):t.isEnd?a():void 0}}},rt={chart:nt},at={rxObserver:nt.createRxObserver,kefirObserver:nt.createKefirObserver,baconObserver:nt.createBaconObserver,palette:P.c};function ot(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_()(t);if(e){var a=_()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var it=[{name:"rxjs",load:function(){return z}},{name:"rxjs/Rx",load:function(){return J}},{name:"rxjs/operators",load:function(){return K}},{name:"baconjs",load:function(){return X}},{name:"kefir",load:function(){return Y.a}},{name:"rp-api",load:function(){return rt}},{name:"api/v0.3",load:function(){return at}},{name:"rp-api/colors",load:function(){return r}}],ct=function(t){f()(n,t);var e=ot(n);function n(t){o()(this,n);var r=it.map((function(t){return t.name})),a='Currently package "'.concat(t,'" is not supported. Please, use one of these: ').concat(r);return e.call(this,a)}return n}(q()(Error)),st=function(t){var e=it.find((function(e){return e.name===t}));if(void 0===e)throw new ct(t);return e.load()},ut=function(t){W=Object.create(null);var e,n={};try{var r=function(t){var e=H.transform(t,{presets:["es2017"]}).code;return function(){Function("require",e)(st)}}(t),a=Object(V.a)(r,P.a);e=a.time,a.status?(n.isWarning=!0,n.warning=a.status):n.isOk=!0}catch(o){console.error(o),e=0,n.isError=!0,n.error=o instanceof Error?o:new Error(o)}return{time:e,status:n,lines:B().lines}};n(651);function lt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_()(t);if(e){var a=_()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var ft=function(t){f()(n,t);var e=lt(n);function n(){return o()(this,n),e.apply(this,arguments)}return c()(n,[{key:"render",value:function(){var t=this.props.warning;return v.a.createElement("div",{className:"WarningComponent",title:"Warning"},"⚠️ ",t.toString())}}]),n}(h.Component);function mt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_()(t);if(e){var a=_()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var dt=function(t){f()(n,t);var e=mt(n);function n(t){var r;o()(this,n),(r=e.call(this,t)).onChange=r.onChange.bind(u()(r));var a=t.code,i=ut(a),c=i.status,s=i.time,l=i.lines;return r.state={value:a,defaultValue:a,status:c,time:s,lines:l},r}return c()(n,[{key:"componentWillReceiveProps",value:function(t){var e=t.code;this.onChange(e)}},{key:"onChange",value:function(t){if(t!=this.state.value){window&&window.ga&&window.ga("send","event","Editor","change");var e=ut(t),n=e.status,r=e.time,a=e.lines;this.setState({value:t,status:n,time:r,lines:a})}}},{key:"render",value:function(){var t=this.state,e=t.status,n=t.time,r=t.lines,a=t.value,o=t.defaultValue;return v.a.createElement("div",{className:"Playground"},v.a.createElement("div",{className:"Playground__editor"},v.a.createElement(b,{value:a,defaultValue:o,onChange:this.onChange})),v.a.createElement("div",{className:"Playground__chart"},e.isError&&v.a.createElement(x,{error:e.error}),e.isWarning&&v.a.createElement(ft,{warning:e.warning}),v.a.createElement(I,{time:n,lines:r})))}}]),n}(h.Component)},76:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0),a=n.n(r),o=(n(653),function(){return a.a.createElement("span",{className:"lds-ellipsis"},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null))})}});