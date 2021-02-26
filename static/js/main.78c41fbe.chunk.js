(this["webpackJsonpcart-redux"]=this["webpackJsonpcart-redux"]||[]).push([[0],{50:function(e,t,n){e.exports=n(78)},78:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),o=n.n(c),l=n(20),u=n.n(l),i=n(17),d=n(22),p=n(11),s=n(12),m=Object(s.a)(a||(a=Object(p.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    outline: 0;\n  }\n  body {\n    background: #ffffff;\n    color: #000000;\n    -webkit-font-smoothing: antialiased;\n  }\n  body, input, button {\n    font-family: 'Poppins', serif;\n    font-size: 1rem;\n  }\n  h1, h2, h3, h4, h5, h6, strong {\n    font-weight: 500;\n  }\n  button {\n    cursor: pointer;\n  }\n"]))),b=n(13),x=n(43),f=n(48),g=n(44);!function(e){e.addProductToCartRequest="ADD_PRODUCT_TO_CART_REQUEST",e.addProductToCartSuccess="ADD_PRODUCT_TO_CART_SUCCESS",e.addProductToCartFailure="ADD_PRODUCT_TO_CART_FAILURE"}(r||(r={}));var h={items:[],failedStockCheck:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;return Object(g.a)(e,(function(e){switch(t.type){case r.addProductToCartSuccess:var n=t.payload.product,a=e.items.findIndex((function(e){return e.product.id===n.id}));a>=0?e.items[a].quantity+=1:e.items.push({product:n,quantity:1});break;case r.addProductToCartFailure:e.failedStockCheck.push(t.payload.productId)}}))},y=Object(b.combineReducers)({cart:E}),O=n(19),j=n.n(O),v=n(14);function w(e){return{type:r.addProductToCartSuccess,payload:{product:e}}}var k=n(45),C=n.n(k).a.create({baseURL:"http://localhost:3333"}),R=j.a.mark(T);function T(e){var t,n,a;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.product,c.next=4,Object(v.d)((function(e){var t,a;return null!==(t=null===(a=e.cart.items.find((function(e){return e.product.id===n.id})))||void 0===a?void 0:a.quantity)&&void 0!==t?t:0}));case 4:return a=c.sent,c.next=7,Object(v.b)(C.get,"stock/".concat(n.id));case 7:if(!(c.sent.data.quantity>a)){c.next=13;break}return c.next=11,Object(v.c)(w(n));case 11:c.next=15;break;case 13:return c.next=15,Object(v.c)((o=n.id,{type:r.addProductToCartFailure,payload:{productId:o}}));case 15:case"end":return c.stop()}var o}),R)}var P=Object(v.a)([Object(v.e)(r.addProductToCartRequest,T)]),S=j.a.mark(_);function _(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([P]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),S)}var D=Object(f.a)(),q=[D],I=Object(b.createStore)(y,Object(x.composeWithDevTools)(b.applyMiddleware.apply(void 0,q)));D.run(_);var A,B,F,U,N,L=I,z=n(5),J=n(49),M=function(e){var t=e.component,n=Object(J.a)(e,["component"]);return o.a.createElement(z.a,Object.assign({},n,{render:function(){return o.a.createElement(t,null)}}))},Q=n(47),$=s.b.article(A||(A=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n  box-shadow: 2px 2px 11px 1px rgba(0, 0, 0, 0.2);\n\n  img {\n    width: 150px;\n    height: 150px;\n  }\n\n  strong {\n    margin-top: 10px;\n  }\n\n  button {\n    background-color: rgba(0, 0, 0, 0.1);\n    border: none;\n    padding: 5px 10px;\n    margin-top: 10px;\n  }\n\n  .out-of-stock {\n    color: grey;\n    font-style: italic;\n  }\n"]))),V=function(e){var t=e.product,n=Object(i.b)(),a=Object(i.c)((function(e){return e.cart.failedStockCheck.includes(t.id)})),l=Object(c.useCallback)((function(){n(function(e){return{type:r.addProductToCartRequest,payload:{product:e}}}(t))}),[n,t]);return o.a.createElement($,null,o.a.createElement("img",{src:t.image_url,alt:"product"}),o.a.createElement("strong",{className:"title"},t.title),a?o.a.createElement("strong",{className:"out-of-stock"},"Out of stock"):o.a.createElement("strong",{className:"price"},Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t.price)),o.a.createElement("button",{type:"button",onClick:l},"Comprar"))},W=s.b.main(B||(B=Object(p.a)(["\n  display: grid;\n  grid-template-columns: 150px 150px;\n  grid-gap: 15px;\n\n  @media screen and (min-width: 768px) {\n    display: grid;\n    grid-template-columns: 175px 175px 175px;\n    grid-gap: 15px;\n  }\n\n  @media screen and (min-width: 992px) {\n    display: grid;\n    grid-template-columns: 220px 220px 220px;\n    grid-gap: 15px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    display: grid;\n    grid-template-columns: 250px 250px 250px;\n    grid-gap: 15px;\n  }\n"]))),G=function(){var e=Object(c.useState)([]),t=Object(Q.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){C.get("products").then((function(e){a(e.data)}))}),[]),o.a.createElement(W,null,n.map((function(e){return o.a.createElement(V,{key:e.id,product:e})})))},H=s.b.div(F||(F=Object(p.a)(["\n  box-shadow: 2px 2px 11px 1px rgba(0, 0, 0, 0.2);\n  width: 315px;\n  overflow-x: scroll;\n\n  @media screen and (min-width: 768px) {\n    width: 570px;\n    grid-template-columns: 175px 175px 175px;\n    grid-gap: 15px;\n  }\n\n  @media screen and (min-width: 992px) {\n    width: 705px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: 795px;\n    overflow-x: unset;\n  }\n\n  table {\n    border-spacing: 0;\n    width: 100%;\n  }\n\n  th,\n  td {\n    padding: 8px;\n    text-align: start;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n  }\n"]))),K=function(){var e=Object(i.c)((function(e){return e.cart.items}));return o.a.createElement(H,null,o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Produto"),o.a.createElement("th",null,"Pre\xe7o"),o.a.createElement("th",null,"Quantidade"),o.a.createElement("th",null,"Subtotal"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"TV 4k"),o.a.createElement("td",null,"R$ 900,00"),o.a.createElement("td",null,"1"),o.a.createElement("td",null,"R$ 900,00")),e.map((function(e){return o.a.createElement("tr",{key:e.product.id},o.a.createElement("td",null,e.product.title),o.a.createElement("td",null,Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.product.price)),o.a.createElement("td",null,e.quantity),o.a.createElement("td",null,Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.quantity*e.product.price)))})))))},X=s.b.div(U||(U=Object(p.a)(["\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Y=s.b.h2(N||(N=Object(p.a)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),Z=function(){return o.a.createElement(X,null,o.a.createElement(Y,null,"Catalogo de produtos"),o.a.createElement(G,null),o.a.createElement(Y,null,"Carrinho"),o.a.createElement(K,null))},ee=function(){return o.a.createElement(z.c,null,o.a.createElement(M,{path:"/",component:Z}))},te=function(){return o.a.createElement(i.a,{store:L},o.a.createElement(d.a,null,o.a.createElement(ee,null),o.a.createElement(m,null)))};u.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(te,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.78c41fbe.chunk.js.map