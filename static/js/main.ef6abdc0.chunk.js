(this.webpackJsonppoke=this.webpackJsonppoke||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/pokeball.4b41f8bb.png"},20:function(e,a,t){e.exports=t(45)},25:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),i=(t(25),t(16)),o=t.n(i);var s=function(){return r.a.createElement("img",{className:"rotate",src:o.a,alt:"pokeball"})};var m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{id:"overlay"}),r.a.createElement("h1",{id:"title"},r.a.createElement(s,null),"Pokedex",r.a.createElement(s,null))))},d=t(2),u=t(5),p=t.n(u),v=t(19),f=t(17),g=t(18),E=t.n(g),b="https://pokeapi.co/api/v2/pokemon";var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150,t=Object(n.useState)([]),r=Object(d.a)(t,2),c=r[0],l=r[1],i=Object(n.useState)(null),o=Object(d.a)(i,2),s=o[0],m=o[1],u=Object(n.useState)(!0),g=Object(d.a)(u,2),h=g[0],y=g[1];return Object(n.useEffect)((function(){h&&function(){var t=Object(f.a)(p.a.mark((function t(){var n,r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,n=[],r=e;case 3:if(!(r<=a)){t.next=11;break}return t.next=6,E.a.get("".concat(b,"/").concat(r));case 6:c=t.sent,n.push(c.data);case 8:r++,t.next=3;break;case 11:n.map((function(e){l((function(a){return[].concat(Object(v.a)(a),[{name:e.name,id:e.id,image:e.sprites.front_default,shiny:e.sprites.front_shiny,type:e.types.map((function(e){return e.type.name})).join("/").toUpperCase(),abilities:e.abilities.map((function(e){return e.ability.name})).join(", "),stats:e.stats.map((function(e){return{name:e.stat.name,base:e.base_stat}}))}])}))})),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),m(t.t0);case 17:y(!1);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}()()}),[]),[c,s,h]};var y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{id:e.id,className:"card",onClick:e.toggleModal},r.a.createElement("img",{className:"card-image",src:e.image,alt:e.name}),r.a.createElement("h2",{className:"card-title"}," ",e.id,".",e.name," "),r.a.createElement("p",{className:"card-subtitle"},"Type: ",e.type)))};var N=function(e){var a;return e.stats&&(a=e.stats.map((function(e){return r.a.createElement("span",{className:"modal-stat"},e.name[0].toUpperCase()+e.name.slice(1),": ",e.base," ")}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:e.toggleModal,className:"modal-overlay"},r.a.createElement("div",{className:"modal-cycle-container"},r.a.createElement("div",{onClick:e.navigateModal,"data-nav":"prev",className:"modal-button modal-prev"},r.a.createElement("span",{"data-nav":"prev"}," < "))),r.a.createElement("div",{className:"modal-card"},r.a.createElement("div",{className:"modal-images"},r.a.createElement("img",{className:"card-image",src:e.image,alt:"{props.name}"}),r.a.createElement("img",{className:"card-image",src:e.shiny,alt:"{props.name}"})),r.a.createElement("div",{className:"modal-text"},r.a.createElement("h2",{className:"card-title modal-title"}," ",e.id,".",e.name," "),r.a.createElement("p",{className:"card-subtitle modal-text"},"Type: ",e.type),r.a.createElement("p",{className:"card-subtitle modal-text"},"Abilities: ",e.abilities),r.a.createElement("p",{className:"card-subtitle modal-text modal-stats"},a))),r.a.createElement("div",{className:"modal-cycle-container"},r.a.createElement("div",{onClick:e.navigateModal,"data-nav":"next",className:"modal-button modal-next"},r.a.createElement("span",{"data-nav":"next"}," > ")))))};var k=function(){var e=h(1,150),a=Object(d.a)(e,3),t=a[0],c=a[1],l=a[2],i=Object(n.useState)(!1),o=Object(d.a)(i,2),s=o[0],m=o[1],u=Object(n.useState)(null),p=Object(d.a)(u,2),v=p[0],f=p[1],g=Object(n.useState)(""),E=Object(d.a)(g,2),b=E[0],k=E[1],j=Object(n.useState)([]),O=Object(d.a)(j,2),x=O[0],w=O[1];Object(n.useEffect)((function(){var e=t.filter((function(e){return e.type.toLowerCase().includes(b)}));w(e)}),[b,k]);var S=function(e){if("modal-overlay"===e.target.className||!s)if(m((function(e){return!e})),s)f(null);else{var a=e.target.closest("li");f(a.id-1)}};if(c)return r.a.createElement("h3",{id:"Loading"},"Sorry, an error has occurred!");var C=(0!==x.length?x:t).map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,name:e.name,image:e.image,type:e.type,toggleModal:S})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"filter",type:"text",placeholder:"Pokemon Types...",value:b,onChange:function(e){k(e.target.value)}}),r.a.createElement("div",{id:"overlay",className:s?"show":"hide"},r.a.createElement(N,Object.assign({},t[v],{navigateModal:function(e){if("prev"===e.target.dataset.nav){var a=v-1===-1?t.length-1:v-1;f(a)}if("next"===e.target.dataset.nav){var n=v+1===t.length?0:v+1;f(n)}},toggleModal:S}))),r.a.createElement("div",{className:"Pokedex"},r.a.createElement("ol",{id:"pokedex"},l?r.a.createElement("h3",{id:"Loading"},"Loading..."):C)))};t(44);var j=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(m,null),r.a.createElement(k,null),r.a.createElement("a",{id:"scroll-to-top",href:"#top"},"TOP"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.ef6abdc0.chunk.js.map