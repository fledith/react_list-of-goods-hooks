(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var s,c=n(6),o=n.n(c),r=n(7),a=n(4),u=n(1),i=(n(12),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var b=function(){var t=Object(u.useState)(!1),e=Object(a.a)(t,2),n=e[0],c=e[1],o=Object(u.useState)(!1),b=Object(a.a)(o,2),j=b[0],d=b[1],O=Object(u.useState)(s.NONE),h=Object(a.a)(O,2),N=h[0],m=h[1],p=Object(u.useMemo)((function(){return function(t,e,n){var c=Object(r.a)(t);return c.sort((function(t,n){switch(e){case s.ALPHABET:return t.localeCompare(n);case s.LENGTH:return t.length-n.length;default:return 0}})),n?c.reverse():c}(l,N,j)}),[N,j]);return Object(i.jsxs)("div",{className:"App is-light",children:[!n&&Object(i.jsx)("button",{type:"button",className:"button is-success button-start",onClick:function(){return c(!0)},children:"Start"}),n&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)("button",{type:"button",className:"button is-dark",onClick:function(){return m(s.ALPHABET)},children:"Sort alphabetically"}),Object(i.jsx)("button",{type:"button",className:"button is-dark",onClick:function(){m(s.LENGTH)},children:"Sort by length"}),Object(i.jsx)("button",{type:"button",className:"button is-dark",onClick:function(){return d(!j)},children:"Reverse"}),Object(i.jsx)("button",{type:"button",className:"button is-danger button-reset",onClick:function(){m(s.NONE),d(!1)},children:"Reset"})]}),Object(i.jsx)("ul",{className:"Goods",children:p.map((function(t){return Object(i.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})};o.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ef9f2ebb.chunk.js.map