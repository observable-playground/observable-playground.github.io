(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Dtc0:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),l=n.n(r),o=n("8Kt/"),a=n.n(o),i=n("YFqc"),s=n.n(i),u=n("q4uG"),c=n("occm"),f=n("ZEdX"),p=l.a.createElement;t.default=function(){return p("div",{className:"HomePage"},p(a.a,null,p("title",null,c.c),p("meta",{name:"description",content:c.b})),p("div",{className:"PageBlock"},p("h1",null,"ThinkRx \u2014 Instant marble diagrams for ",p(s.a,{href:"/[libId]/",as:"/rxjs/"},p("a",null,"RxJS")),", ",p(s.a,{href:"/[libId]/",as:"/baconjs/"},p("a",null,"Bacon.js")),", ",p(s.a,{href:"/[libId]/",as:"/kefir/"},p("a",null,"Kefir.js"))," reactive programming libraries with a bunch of examples"),p("blockquote",null,"Know your Observables before deploying to production!"),p("br",null),p(u.a,{code:"const { rxObserver } = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { take, map } = require('rxjs/operators');\n\nconst msg = 'awesome';\n\ntimer(0, 5)\n  .pipe(\n    take(msg.length),\n    map(index=>msg[index])\n  )\n  .subscribe(rxObserver());"}),p("p",null,"This tool is aimed at assisting you in understanding observables by playing with them. There are some code examples prebuilt for you in the left menu. Further, you can modify any of them to see how it changes output. Once a snippet has changed \u2014 resulting output would be recalculated ",p("b",null,"immediately"),"."),p("h2",null,"Start exploring with these examples:"),p("h3",null,"RxJS"),p("ul",null,p("li",null,p("b",null,p(s.a,{href:"/[libId]/[fileId]/",as:"/rxjs/of/"},p("a",null,"of")))," operator"),p("li",null,"creating Observable ",p("b",null,p(s.a,{href:"/rxjs/fromPromise/"},p("a",null,"from")))," Promise"),p("li",null,"switching to other Observable using ",p("b",null,p(s.a,{href:"/rxjs/switchMap/"},p("a",null,"switchMap")))," operator")),p("h3",null,"Bacon"),p("ul",null,p("li",null,p("b",null,p(s.a,{href:"/[libId]/[fileId]/",as:"/baconjs/interval/"},p("a",null,"interval")))," operator")),p("h3",null,"Kefir"),p("ul",null,p("li",null,p("b",null,p(s.a,{href:"/[libId]/[fileId]/",as:"/kefir/sequentially/"},p("a",null,"sequentially")))," operator")),p("blockquote",null,"Try comparing ",p("b",null,p(s.a,{href:"/[libId]/[fileId]/",as:"/rxjs/interval/"},p("a",null,"RxJS interval"))),", ",p("b",null,p(s.a,{href:"/[libId]/[fileId]/",as:"/kefir/interval/"},p("a",null,"Kefir.js interval"))),", and ",p("b",null,p(s.a,{href:"/[libId]/[fileId]/",as:"/baconjs/interval/"},p("a",null,"Bacon.js interval"))),"!"),p("p",null,p("b",null,"NOTE:")," currently this tool has following limitations:"),p("ul",null,p("li",null,"timeline is cut to 1000ms"),p("li",null,"async browser api is not supported")),p("p",null,"Your feedback is always welcome at ",p(f.a,{text:"github issues section",href:"https://github.com/observable-playground/observable-playground/issues"}),"!"),p("br",null),p("p",null,"Inspired by ",p(f.a,{href:"http://rxmarbles.com/",text:"rxmarbles.com"}),", ",p(f.a,{href:"https://www.learnrxjs.io",text:"learnrxjs.io"})," and great talks by ",p(f.a,{href:"http://worrydream.com/",text:"Bret Victor"}))))}},H0SL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("Dtc0")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),l=n("W8MJ"),o=n("7W2i"),a=n("a1gu"),i=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var l=i(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return a(this,n)}}var u=n("TqRt"),c=n("284h");t.__esModule=!0,t.default=void 0;var f,p=c(n("q1tI")),h=n("QmWs"),d=n("g/15"),b=u(n("nOHt")),v=n("elyg");function m(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,g=window.IntersectionObserver,w={};function x(){return f||(g?f=new g((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){o(a,e);var t=s(a);function a(e){var n;return r(this,a),(n=t.call(this,e)).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(l,o){if(r&&l===t&&o===n)return r;var a=e(l,o);return t=l,n=o,r=a,a}}((function(e,t){return{href:(0,v.addBasePath)(m(e)),as:t?(0,v.addBasePath)(m(t)):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,l=t.target;if("A"!==r||!(l&&"_self"!==l||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),a=o.href,i=o.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var s=window.location.pathname;a=(0,h.resolve)(s,a),i=i?(0,h.resolve)(s,i):a,e.preventDefault();var u=n.props.scroll;null==u&&(u=i.indexOf("#")<0),b.default[n.props.replace?"replace":"push"](a,i,{shallow:n.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return l(a,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,l=(0,h.resolve)(e,n);return[l,r?(0,h.resolve)(e,r):l]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=x();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();b.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),l=r.href,o=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||l);var s=n("P5f7").rewriteUrlForNextExport;return i.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=s(i.href)),p.default.cloneElement(a,i)}}]),a}(p.Component);t.default=k}},[["H0SL",0,2,6,5,7,4,1,3]]]);