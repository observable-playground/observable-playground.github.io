(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{PwGo:function(e,r,n){"use strict";n.d(r,"a",(function(){return I}));var t={};n.r(t),n.d(t,"Page",(function(){return m})),n.d(t,"library",(function(){return g}));var a={};n.r(a),n.d(a,"Page",(function(){return y})),n.d(a,"library",(function(){return k}));var l={};n.r(l),n.d(l,"Page",(function(){return w})),n.d(l,"library",(function(){return P}));var i=n("kiQV"),s=n("8Kt/"),o=n.n(s),u=n("YFqc"),c=n.n(u),f=n("q1tI"),p=n.n(f),d=n("q4uG"),h=n("occm"),b=n("ZEdX"),v=p.a.createElement,m=function(){return v(p.a.Fragment,null,v(o.a,null,v("title",null,"RxJS playground and examples"),v("meta",{name:"description",content:Object(h.d)("RxJS")})),v("div",{key:"RxJS"},v("div",{className:"PageBlock"},v("h1",null,"RxJS Playground"),v("blockquote",null,v("p",null,"RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code")),v("br",null),v(d.a,{code:"const { rxObserver } = require('api/v0.3');\nconst { timer } = require('rxjs');\nconst { take } = require('rxjs/operators');\n\ntimer(0, 5)\n  .pipe(\n    take(10)\n  )\n  .subscribe(rxObserver());"}),v("br",null),v("p",null,"If you're just starting your RxJS journey \u2014 we'd advise you to start with these examples first:"),v("ul",null,v("li",null,v("b",null,v(c.a,{href:"/[libId]/[fileId]/",as:"/rxjs/timer/"},v("a",null,"timer")))," \u2014 starts emitting values after given timeout with set interval"),v("li",null,v("b",null,v(c.a,{href:"/[libId]/[fileId]/",as:"/rxjs/map/"},v("a",null,"map")))," \u2014 apply a function to each value on the stream"),v("li",null,v("b",null,v(c.a,{href:"/[libId]/[fileId]/",as:"/rxjs/filter/"},v("a",null,"filter")))," \u2014 filter only values matching predicate function"),v("li",null,v("b",null,v(c.a,{href:"/[libId]/[fileId]/",as:"/rxjs/subscribe/"},v("a",null,"subscribe")))," \u2014 basically tells the Observable that we're ready to receive values")),v("p",null,"If you are a seasoned Observer \u2014 do checkout these examples:"),v("ul",null,v("li",null,v("b",null,v(c.a,{href:"/[libId]/[fileId]/",as:"/rxjs/expand/"},v("a",null,"expand")))," \u2014 recursively turns each emission into another stream"),v("li",null,v("b",null,v(c.a,{href:"/[libId]/[fileId]/",as:"/rxjs/share/"},v("a",null,"share")))," \u2014 share subscription among multiple observers"),v("li",null,v("b",null,v(c.a,{href:"/[libId]/[fileId]/",as:"/rxjs/catch/"},v("a",null,"catch")))," \u2014 handle errors gracefully"),v("li",null,v("b",null,v(c.a,{href:"/[libId]/[fileId]/",as:"/rxjs/dematerialize/"},v("a",null,"dematerialize")))," \u2014 pure magic")),v("p",null,"Also, be sure to know these differences:"),v("ul",null,v("li",null,v(c.a,{href:"/[libId]/[fileId]/",as:"/rxjs/debounceTime-vs-throttleTime-vs-auditTime-vs-sampleTime/"},v("a",null,v("b",null,"debounceTime")," vs ",v("b",null,"throttleTime")," vs ",v("b",null,"auditTime")," vs ",v("b",null,"sampleTime")))),v("li",null,v(c.a,{href:"/[libId]/[fileId]/",as:"/rxjs/mergeMap-vs-exhaustMap-vs-switchMap-vs-concatMap/"},v("a",null,v("b",null,"mergeMap")," vs ",v("b",null,"exhaustMap")," vs ",v("b",null,"switchMap")," vs ",v("b",null,"concatMap")))),v("li",null,v(c.a,{href:"/[libId]/[fileId]/",as:"/rxjs/first-vs-take-vs-single/"},v("a",null,v("b",null,"first")," vs ",v("b",null,"take")," vs ",v("b",null,"single")))))),v("div",{className:"PageBlock"},v("h2",null,"My articles"),v("p",null,v("b",null,v(b.a,{href:"https://medium.com/@kddsky/error-handling-in-rxjs-bac0f96a7def"},'"Error handling in RxJS"')),v("br",null),v("span",null,"Learn how to deal with errors and retry failed requests")),v("p",null,v("b",null,v(b.a,{href:"https://medium.com/@kddsky/pauseable-observables-in-rxjs-58ce2b8c7dfd"},'"Pausable Observables in RxJS"')),v("br",null),v("span",null,"Create a push back force in your streams")),v("p",null,v("b",null,v(b.a,{href:"https://dev.to/kosich/recks-rxjs-based-framework-23h5"},'"Rx+JSX experiment: Recks \ud83d\udc36"')),v("br",null),v("span",null,v("code",null,"<div>{ timer(0, 100) }</div>")," \u2014 Observables inside JSX")),v("p",null,v("b",null,v(b.a,{href:"https://dev.to/kosich/regexp-for-reactive-streams-143g"},'"RegExp syntax for Observables: Never Been Easier!"')),v("br",null),v("span",null,"Use regexp-like syntax to query observables. EXPERIMENT")),v("p",null,v("b",null,v(b.a,{href:"https://dev.to/rxjs/debounce-vs-throttle-vs-audit-vs-sample-difference-you-should-know-1f21"},'"RxJS debounce vs throttle vs audit vs sample"')),v("br",null),v("span",null,"Difference You Should Know"))),v("div",{className:"PageBlock"},v("h2",null,"API notes"),v("p",null,"In this playground we added both ",v(b.a,{href:"https://github.com/ReactiveX/rxjs"},"RxJS 6")," and a compatibility  ",v(b.a,{href:"https://github.com/ReactiveX/rxjs/tree/master/compat"},"rxjs-compat")," package, that allows you to write code in RxJS 6 or in RxJS 5 style",v("br",null),"You can use them via ",v("code",null,"require('rxjs')")," and ",v("code",null,"require('rxjs/operators')")," or just ",v("code",null,"require('rxjs/Rx')")," for rxjs-compat version."),v("p",null,"To visualize observables we developed a small API:",v("br",null),"Provided ",v("code",null,"api/v0.3")," package has a function ",v("code",null,"rxObserver(title?: string): Observer"),", that creates an ",v(b.a,{href:"https://rxjs.dev/api/index/interface/Observer"},"Rx Observer")," to display marbles on the diagram")),v("br",null),v(d.a,{code:"const { rxObserver } = require('api/v0.3');\n\nconst observer = rxObserver('Thread name');\n\nobserver.next(0);\n\nsetTimeout(() => observer.next(1), 100);\n\nsetTimeout(() => observer.next(2), 200);\n\nsetTimeout(() => observer.complete(), 200);"}),v("br",null),v("div",{className:"PageBlock"},v("div",null,v("h2",null,"External links"),v("ul",null,v("li",null,v("b",null,v(b.a,{href:"https://rxjs.dev/"},"rxjs.dev"))," \u2014 official website for RxJS 6"),v("li",null,v(b.a,{href:"https://www.learnrxjs.io/"},"learnrxjs.io")," \u2014 clear examples, explanations, and resources for rxjs"),v("li",null,v(b.a,{href:"https://rxviz.com/"},"rxviz.com")," \u2014 animated playground for rx observables"))))))},g={name:"RxJS",version:i.a.rxjs,description:"Reactive Extensions For JavaScript",groups:[{name:"Observable",items:["pipe","forEach","toPromise","subscribe"]},{name:"Creation",items:["of","from","fromPromise","interval","timer","defer","range","iif","constructor"]},{name:"Filtering",items:["filter","find","first","auditTime","debounceTime","throttleTime","sampleTime","windowToggle"]},{name:"Combination",items:["zip","forkJoin","race","combineLatest","withLatestFrom","startWith"]},{name:"Error handling",items:["throwError","catch","retry","retryWhen","onErrorResumeNext"]},{name:"Transformation",items:["map","pluck","buffer","mergeMap","switchMap","exhaustMap","concatMap","expand","toArray","windowWhen"]},{name:"Multicasting",items:["share","shareReplay"]},{name:"Utility",items:["tap","finalize","timeInterval","delay","delayWhen","dematerialize","repeat","timeout"]}]},x=p.a.createElement,y=function(){return x(p.a.Fragment,null,x(o.a,null,x("title",null,"Kefir.js playground and examples"),x("meta",{name:"description",content:Object(h.d)("Kefir.js")})),x("div",{key:"Kefir"},x("div",{className:"PageBlock"},x("h1",null,"Kefir.js Playground"),x("blockquote",null,x("p",null,"Kefir \u2014 is a Reactive Programming library for JavaScript inspired by Bacon.js and RxJS, with focus on high performance and low memory usage.")),x("p",null,"To visualize the observables we developed a small API. Provided ",x("code",null,"api/v0.3")," package has a function ",x("code",null,"kefirObserver(title: string): observer"),", that you can call to create a ",x(b.a,{href:"https://kefirjs.github.io/kefir/#observe"},"kefir observer"),", which will display its state on the time chart in the right part of the screen."),x("p",null,"If you are looking for a place to start \u2014 take a look at ",x(c.a,{href:"/kefir/interval/"},x("b",null,"interval"))," example.")),x("br",null),x(d.a,{code:"const { kefirObserver } = require('api/v0.3');\nconst Kefir = require('kefir');\n\nKefir\n  .sequentially(10, [1, 2, 3])\n  .observe(kefirObserver());\n"}),x("br",null),x("div",{className:"PageBlock"},x("div",null,x("h2",null,"External links"),x("ul",null,x("li",null,x("b",null,x(b.a,{href:"https://github.com/kefirjs/kefir"},"kefirjs/kefir"))," \u2014 Kefir repo"),x("li",null,x("b",null,x(b.a,{href:"https://kefirjs.github.io/kefir/"},"kefirjs.github.io/kefir"))," \u2014 official docs"))))))},k={name:"Kefir.js",version:i.a.kefir,description:"Kefir \u2014 is a Reactive Programming library for JavaScript inspired by Bacon.js and RxJS, with focus on high performance and low memory usage.",groups:[{name:"Creation",items:["sequentially","interval"]},{name:"Combination",items:["pool"]}]},j=p.a.createElement,w=function(){return j(p.a.Fragment,null,j(o.a,null,j("title",null,"Bacon.js playground and examples"),j("meta",{name:"description",content:Object(h.d)("Bacon.js")})),j("div",{key:"Bacon"},j("div",{className:"PageBlock"},j("h1",null,"Bacon.js Playground"),j("blockquote",null,j("p",null,"A small functional reactive programming lib for JavaScript. Turns your event spaghetti into clean and declarative feng shui bacon, by switching from imperative to functional.")),j("p",null,"To visualize the observables we developed a small API. Provided ",j("code",null,"api/v0.3")," package has a function ",j("code",null,"baconObserver(title: string): f(Event)"),", that you can call to create a ",j(b.a,{href:"https://baconjs.github.io/api2.html#observable-subscribe"},"subscribe function"),", which will display its state on the time chart in the right part of the screen.")),j("br",null),j(d.a,{code:"const { baconObserver } = require('api/v0.3');\nconst Bacon = require('baconjs');\n\nBacon\n  .interval(5, '+')\n  .take(5)\n  .subscribe(baconObserver());\n"}),j("br",null),j("div",{className:"PageBlock"},j("div",null,j("h2",null,"External links"),j("ul",null,j("li",null,j("b",null,j(b.a,{href:"https://baconjs.github.io/"},"baconjs.github.io"))," \u2014 Official Bacon.Js page"))))))},P={name:"Bacon.js",version:i.a.baconjs,description:"A small functional reactive programming lib for JavaScript.",groups:[{name:"Creation",items:["interval"]}]},R={rxjs:t,baconjs:l,kefir:a},I=Object.keys(R).map((function(e){return{handle:e,Page:R[e].Page,library:R[e].library}}))},YFqc:function(e,r,n){e.exports=n("cTJO")},cTJO:function(e,r,n){"use strict";var t=n("lwsE"),a=n("W8MJ"),l=n("7W2i"),i=n("a1gu"),s=n("Nsbk");function o(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=s(e);if(r){var a=s(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return i(this,n)}}var u=n("TqRt"),c=n("284h");r.__esModule=!0,r.default=void 0;var f,p=c(n("q1tI")),d=n("QmWs"),h=n("g/15"),b=u(n("nOHt")),v=n("elyg");function m(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var g=new Map,x=window.IntersectionObserver,y={};function k(){return f||(x?f=new x((function(e){e.forEach((function(e){if(g.has(e.target)){var r=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),r())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){l(i,e);var r=o(i);function i(e){var n;return t(this,i),(n=r.call(this,e)).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var r=null,n=null,t=null;return function(a,l){if(t&&a===r&&l===n)return t;var i=e(a,l);return r=a,n=l,t=i,i}}((function(e,r){return{href:(0,v.addBasePath)(m(e)),as:r?(0,v.addBasePath)(m(r)):r}})),n.linkClicked=function(e){var r=e.currentTarget,t=r.nodeName,a=r.target;if("A"!==t||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var l=n.formatUrls(n.props.href,n.props.as),i=l.href,s=l.as;if(function(e){var r=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!r.host||r.protocol===n.protocol&&r.host===n.host}(i)){var o=window.location.pathname;i=(0,d.resolve)(o,i),s=s?(0,d.resolve)(o,s):i,e.preventDefault();var u=n.props.scroll;null==u&&(u=s.indexOf("#")<0),b.default[n.props.replace?"replace":"push"](i,s,{shallow:n.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return a(i,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,r=this.formatUrls(this.props.href,this.props.as),n=r.href,t=r.as,a=(0,d.resolve)(e,n);return[a,t?(0,d.resolve)(e,t):a]}},{key:"handleRef",value:function(e){var r=this;this.p&&x&&e&&e.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,r){var n=k();return n?(n.observe(e),g.set(e,r),function(){try{n.unobserve(e)}catch(r){console.error(r)}g.delete(e)}):function(){}}(e,(function(){r.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var r=this.getPaths();b.default.prefetch(r[0],r[1],e).catch((function(e){0})),y[r.join("%")]=!0}}},{key:"render",value:function(){var e=this,r=this.props.children,t=this.formatUrls(this.props.href,this.props.as),a=t.href,l=t.as;"string"===typeof r&&(r=p.default.createElement("a",null,r));var i=p.Children.only(r),s={ref:function(r){e.handleRef(r),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(r):"object"===typeof i.ref&&(i.ref.current=r))},onMouseEnter:function(r){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(r),e.prefetch({priority:!0})},onClick:function(r){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(r),r.defaultPrevented||e.linkClicked(r)}};!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=l||a);var o=n("P5f7").rewriteUrlForNextExport;return s.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=o(s.href)),p.default.cloneElement(i,s)}}]),i}(p.Component);r.default=j},kiQV:function(e){e.exports=JSON.parse('{"a":{"@babel/plugin-proposal-pipeline-operator":"^7.10.4","@babel/standalone":"7.10.4","@fortawesome/fontawesome-svg-core":"1.2.29","@fortawesome/free-brands-svg-icons":"5.13.1","@fortawesome/free-solid-svg-icons":"5.13.1","@fortawesome/react-fontawesome":"0.1.11","ace-builds":"1.4.12","axios":"0.19.2","baconjs":"3.0.13","d3":"5.16.0","kefir":"3.8.7","lodash":"4.17.19","next":"9.4.4","normalize.css":"8.0.1","nprogress":"^0.2.0","promise-polyfill":"8.1.3","react":"16.13.1","react-ace":"9.1.1","react-dom":"16.13.1","react-markdown":"4.3.1","rxjs":"6.6.0","rxjs-compat":"6.6.0","sass":"1.26.10","save-svg-as-png":"1.4.17"}}')}}]);