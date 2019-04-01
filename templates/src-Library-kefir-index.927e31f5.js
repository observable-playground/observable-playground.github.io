(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(e,a,t){"use strict";t.r(a);var r=t(1),l=t.n(r),n=t(147),i=t(62),c=t(42);a.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.Head,null,l.a.createElement("title",null,"Kefir.js playground and examples")),l.a.createElement("div",{key:"Kefir"},l.a.createElement("div",{className:"PageBlock"},l.a.createElement("h1",null,"Kefir.js Playground"),l.a.createElement("blockquote",null,"Kefir — is a Reactive Programming library for JavaScript inspired by Bacon.js and RxJS, with focus on high performance and low memory usage."),l.a.createElement("p",null,"To visualize the observables we developed a small API. Provided ",l.a.createElement("code",null,"api/v0.3")," package has a function ",l.a.createElement("code",null,"kefirObserver(title: string): observer"),", that you can call to create a ",l.a.createElement("a",{href:"https://kefirjs.github.io/kefir/#observe",target:"_blank"},"kefir observer"),", which will display its state on the time chart in the right part of the screen."),l.a.createElement("p",null,"If you are looking for a place to start — take a look at ",l.a.createElement(c.Link,{to:"/kefir/interval/"},l.a.createElement("b",null,"interval"))," example.")),l.a.createElement("br",null),l.a.createElement(n.a,{code:"const { kefirObserver } = require('api/v0.3');\nconst Kefir = require('kefir');\n\nKefir\n  .sequentially(10, [1, 2, 3])\n  .observe(kefirObserver());\n"}),l.a.createElement("br",null),l.a.createElement("div",{className:"PageBlock"},l.a.createElement("div",null,l.a.createElement("h2",null,"External links"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("b",null,l.a.createElement("a",{href:"https://github.com/kefirjs/kefir",target:"_blank"},"kefirjs/kefir"))," — Kefir repo"),l.a.createElement("li",null,l.a.createElement("b",null,l.a.createElement("a",{href:"https://kefirjs.github.io/kefir/",target:"_blank"},"kefirjs.github.io/kefir"))," — official docs"))))))}}}]);
//# sourceMappingURL=src-Library-kefir-index.927e31f5.js.map