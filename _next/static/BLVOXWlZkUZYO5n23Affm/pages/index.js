(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Dtc0:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),l=t.n(r),a=t("8Kt/"),o=t.n(a),i=t("YFqc"),s=t.n(i),u=t("q4uG"),c=t("occm"),f=t("ZEdX"),p=l.a.createElement;n.default=function(){return p("div",{className:"HomePage"},p(o.a,null,p("title",null,c.c),p("meta",{name:"description",content:c.b})),p("div",{className:"PageBlock"},p("h1",null,"ThinkRx \u2014 Instant marble diagrams for ",p(s.a,{href:"/[libId]/",as:"/rxjs/"},p("a",null,"RxJS")),", ",p(s.a,{href:"/[libId]/",as:"/baconjs/"},p("a",null,"Bacon.js")),", ",p(s.a,{href:"/[libId]/",as:"/kefir/"},p("a",null,"Kefir.js"))," reactive programming libraries with a bunch of examples"),p("blockquote",null,"Know your Observables before deploying to production!"),p("br",null),p(u.a,{code:"const { rxObserver } = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { take, map } = require('rxjs/operators');\n\nconst msg = 'awesome';\n\ntimer(0, 5)\n  .pipe(\n    take(msg.length),\n    map(index=>msg[index])\n  )\n  .subscribe(rxObserver());"}),p("h2",null,"\ud83d\udd0d Start exploring with these examples"),p("ul",null,p("li",null,p("b",null,p(s.a,{href:"/[libId]/",as:"/rxjs/"},p("a",null,"RxJS"))),p("ul",null,p("li",null,"creating Observable ",p("b",null,p(s.a,{href:"/rxjs/fromPromise/"},p("a",null,"from")))," Promise"),p("li",null,p("b",null,p(s.a,{href:"/rxjs/filter/"},p("a",null,"filter"))),"-ing emissions"),p("li",null,"handling errors with ",p("b",null,p(s.a,{href:"/rxjs/catch/"},p("a",null,"catch")))),p("li",null,"switching to other Observable using ",p("b",null,p(s.a,{href:"/rxjs/switchMap/"},p("a",null,"switchMap")))," operator")),p("br",null)),p("li",null,p("b",null,p(s.a,{href:"/[libId]/",as:"/baconjs/"},p("a",null,"Bacon"))),p("ul",null,p("li",null,p("b",null,p(s.a,{href:"/[libId]/[fileId]/",as:"/baconjs/interval/"},p("a",null,"interval")))," operator")),p("br",null)),p("li",null,p("b",null,p(s.a,{href:"/[libId]/",as:"/kefir/"},p("a",null,"Kefir"))),p("ul",null,p("li",null,p("b",null,p(s.a,{href:"/[libId]/[fileId]/",as:"/kefir/sequentially/"},p("a",null,"sequentially")))," operator")),p("br",null))),p("p",null,"Try comparing ",p("b",null,p(s.a,{href:"/[libId]/[fileId]/",as:"/rxjs/interval/"},p("a",null,"RxJS interval"))),", ",p("b",null,p(s.a,{href:"/[libId]/[fileId]/",as:"/kefir/interval/"},p("a",null,"Kefir.js interval"))),", and ",p("b",null,p(s.a,{href:"/[libId]/[fileId]/",as:"/baconjs/interval/"},p("a",null,"Bacon.js interval"))),"!"),p("h2",null,"\u2699\ufe0f Playground"),p("p",null,"This tool is aimed at assisting you in understanding observables by playing with them. There are some code examples prebuilt for you in the left menu. Further, you can modify any of them to see how it changes output. Once a snippet has changed \u2014 resulting output would be recalculated ",p("b",null,"instantly"),"."),p("p",null,p("b",null,"NOTE:")," currently this tool execution time is cut to 1000ms and 1024 operations per tick And async browser APIs, like fetching, are not supported"),p("h2",null,"\ud83d\udcac Feedback"),p("p",null,"Your feedback and help are very welcomed at ",p(f.a,{text:"github issues",href:"https://github.com/observable-playground/observable-playground/issues"},"github issues"),"!"),p("h2",null,"\ud83d\ude4f Inspired by"),p("p",null,p(f.a,{href:"http://rxmarbles.com/",text:"rxmarbles.com"}),", ",p(f.a,{href:"https://www.learnrxjs.io",text:"learnrxjs.io"})," and great talks by ",p(f.a,{href:"http://worrydream.com/",text:"Bret Victor"}))))}},H0SL:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("Dtc0")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("lwsE"),l=t("W8MJ"),a=t("7W2i"),o=t("a1gu"),i=t("Nsbk");function s(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=i(e);if(n){var l=i(this).constructor;t=Reflect.construct(r,arguments,l)}else t=r.apply(this,arguments);return o(this,t)}}var u=t("TqRt"),c=t("284h");n.__esModule=!0,n.default=void 0;var f,p=c(t("q1tI")),h=t("QmWs"),d=t("g/15"),b=u(t("nOHt")),v=t("elyg");function m(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var g=new Map,y=window.IntersectionObserver,w={};function x(){return f||(y?f=new y((function(e){e.forEach((function(e){if(g.has(e.target)){var n=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){a(o,e);var n=s(o);function o(e){var t;return r(this,o),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,r=null;return function(l,a){if(r&&l===n&&a===t)return r;var o=e(l,a);return n=l,t=a,r=o,o}}((function(e,n){return{href:(0,v.addBasePath)(m(e)),as:n?(0,v.addBasePath)(m(n)):n}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,l=n.target;if("A"!==r||!(l&&"_self"!==l||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=t.formatUrls(t.props.href,t.props.as),o=a.href,i=a.as;if(function(e){var n=(0,h.parse)(e,!1,!0),t=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(o)){var s=window.location.pathname;o=(0,h.resolve)(s,o),i=i?(0,h.resolve)(s,i):o,e.preventDefault();var u=t.props.scroll;null==u&&(u=i.indexOf("#")<0),b.default[t.props.replace?"replace":"push"](o,i,{shallow:t.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return l(o,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),t=n.href,r=n.as,l=(0,h.resolve)(e,t);return[l,r?(0,h.resolve)(e,r):l]}},{key:"handleRef",value:function(e){var n=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,n){var t=x();return t?(t.observe(e),g.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}g.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var n=this.getPaths();b.default.prefetch(n[0],n[1],e).catch((function(e){0})),w[n.join("%")]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,r=this.formatUrls(this.props.href,this.props.as),l=r.href,a=r.as;"string"===typeof n&&(n=p.default.createElement("a",null,n));var o=p.Children.only(n),i={ref:function(n){e.handleRef(n),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(n):"object"===typeof o.ref&&(o.ref.current=n))},onMouseEnter:function(n){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(n),e.prefetch({priority:!0})},onClick:function(n){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||l);var s=t("P5f7").rewriteUrlForNextExport;return i.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=s(i.href)),p.default.cloneElement(o,i)}}]),o}(p.Component);n.default=k}},[["H0SL",0,2,6,4,7,8,3,1,5]]]);