(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(5),c=n.n(r),i=n(2),s=n(0),u=function(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],u=r[1];return Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c]})),u(""))},children:Object(s.jsx)("input",{type:"text",value:c,onChange:function(e){u(e.target.value)},placeholder:"Find..."})})},o=n(7),j=function(e){e.id;var t=e.title,n=e.url;return Object(s.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(s.jsx)("img",{src:n,alt:t}),Object(s.jsxs)("p",{children:[" ",t," "]})]})},d=n(4),l=n.n(d),p=n(6),f=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,a,r,c,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI(t),"50","HBKIsujKGU1waGBrlRXpzC9aSqsJvc9C",a="https://api.giphy.com/v1/gifs/search?q=".concat(n,"&limit=").concat("50","&api_key=").concat("HBKIsujKGU1waGBrlRXpzC9aSqsJvc9C"),e.next=6,fetch(a);case 6:return r=e.sent,e.next=9,r.json();case 9:return c=e.sent,i=c.data,s=i.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",t," "]}),c&&Object(s.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(s.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(s.jsx)(j,Object(o.a)({},e),e.id)}))})]})},m=function(){var e=Object(a.useState)(["Funny"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(u,{setCategories:r}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(e){return Object(s.jsx)(b,{category:e},e)}))})]})};n(14);c.a.render(Object(s.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9c1d0db2.chunk.js.map