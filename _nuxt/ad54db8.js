(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5],{280:function(t,n,e){var content=e(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("189a17f7",content,!0,{sourceMap:!1})},281:function(t,n,e){t.exports=e.p+"img/t4.11f8ccb.png"},282:function(t,n,e){t.exports=e.p+"img/t1.0e690b5.png"},283:function(t,n,e){t.exports=e.p+"img/t6.c6da562.png"},284:function(t,n,e){t.exports=e.p+"img/t8.ef1fbc5.png"},285:function(t,n,e){t.exports=e.p+"img/t3.4a4b836.png"},286:function(t,n,e){t.exports=e.p+"img/t7.1dca34d.png"},287:function(t,n,e){t.exports=e.p+"img/t2.2648042.png"},288:function(t,n,e){t.exports=e.p+"img/t5.0fa5663.png"},289:function(t,n,e){t.exports=e.p+"img/t9.bdcc160.png"},293:function(t,n,e){var content=e(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("7d3fc81c",content,!0,{sourceMap:!1})},294:function(t,n,e){var map={"./css/main.css":193,"./t1.png":282,"./t2.png":287,"./t3.png":285,"./t4.png":281,"./t5.png":288,"./t6.png":283,"./t7.png":286,"./t8.png":284,"./t9.png":289};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=294},295:function(t,n,e){"use strict";e(280)},296:function(t,n,e){var o=e(38)(!1);o.push([t.i,".topicCont[data-v-55b3919e]{position:relative;z-index:2;background:#fff}.imgLink[data-v-55b3919e]{width:100%;background-color:#fff;position:relative;overflow:hidden}img[data-v-55b3919e]{transition:all .2s ease-out;width:100%;height:auto;border-radius:5px}img[data-v-55b3919e]:focus,img[data-v-55b3919e]:hover{transform:scale(1.2)}p[data-v-55b3919e]{font-weight:400;font-size:.75rem;line-height:27px}",""]),t.exports=o},299:function(t,n,e){"use strict";e.r(n);var o={props:["topic"]},r=(e(295),e(25)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"topicCont"},[o("NuxtLink",{attrs:{to:t.topic.link}},[o("div",{staticClass:"imgLink"},[o("img",{attrs:{src:e(294)("./"+t.topic.img)}})])]),t._v(" "),o("h4",[t._v(t._s(t.topic.title))]),t._v(" "),o("p",[t._v(t._s(t.topic.sub))])],1)}),[],!1,null,"55b3919e",null);n.default=component.exports},304:function(t,n,e){"use strict";e(293)},305:function(t,n,e){var o=e(38)(!1);o.push([t.i,"h1[data-v-6cf899c0]{font-weight:600;font-size:2rem}section[data-v-6cf899c0]{grid-template-columns:1fr;margin:10vh 0;padding:0 10vw;grid-gap:30px;align-items:center;justify-items:center}.topicsGrid[data-v-6cf899c0],section[data-v-6cf899c0]{display:grid;gap:30px}.topicsGrid[data-v-6cf899c0]{grid-template-columns:1fr 1fr 1fr;grid-gap:30px}@media only screen and (max-width:472px){section[data-v-6cf899c0]{padding:0}.topicsGrid[data-v-6cf899c0]{grid-template-columns:1fr 1fr}}",""]),t.exports=o},321:function(t,n,e){"use strict";e.r(n);var o={mixins:[e(136).a],data:function(){return{topics:[{id:1,title:"Basics of Counting",sub:"Week 1",img:"t1.png",link:"/basics-of-counting"},{id:2,title:"Pigeonhole Principle",sub:"Week 2",img:"t2.png",link:"/pigeonhole-principle"},{id:3,title:"Generating Permutations and Combinations",sub:"Week 3",img:"t3.png",link:"/generating-permutations-and-combinations"},{id:4,title:"Algebraic Structure and Groups",sub:"Week 6",img:"t4.png",link:"/algebraic-structure-and-groups"},{id:5,title:"Probability Theory",sub:"Week 7",img:"t5.png",link:"/probability-theory"},{id:6,title:"Bayes Theorem",sub:"Week 8",img:"t6.png",link:"/bayes-theorem"},{id:7,title:"Graphs and Graph Models",sub:"Week 10",img:"t7.png",link:"/graphs-and-graph-models"},{id:8,title:"Euler and Hamiltonian Paths",sub:"Week 12",img:"t8.png",link:"/euler-and-hamiltonian-paths"},{id:9,title:"Shortest-Path Problem",sub:"Week 12",img:"t9.png",link:"/shortest-path-problem"}]}}},r=(e(304),e(25)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("h1",{attrs:{"data-aos":"fade-down"}},[t._v("Topics")]),t._v(" "),e("div",{staticClass:"topicsGrid"},t._l(t.topics,(function(t){return e("Topic",{key:t.id,attrs:{topic:t,"data-aos":"fade-down"}})})),1)])}),[],!1,null,"6cf899c0",null);n.default=component.exports;installComponents(component,{Topic:e(299).default})}}]);