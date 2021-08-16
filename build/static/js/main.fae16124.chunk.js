(this["webpackJsonpreact-app-init"]=this["webpackJsonpreact-app-init"]||[]).push([[2],{24:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return a}));var c=function(t){return t.auth.userAuth.idToken},r=function(t){return t.auth.errorAuth},a=function(t){return t.user.displayName}},5:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"g",(function(){return b}));var c=n(3),r=Object(c.b)("auth/registerUserRequest"),a=Object(c.b)("auth/registerUserSuccess"),i=Object(c.b)("auth/registerUserError"),u=Object(c.b)("auth/loginUserRequest"),o=Object(c.b)("auth/loginUserSuccess"),s=Object(c.b)("auth/loginUserError"),b=Object(c.b)("auth/signOutUser")},78:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var c,r,a,i,u,o,s,b,j,l,O,d=n(0),f=n(25),h=n.n(f),p=n(37),m=n(38),g=n(40),v=n(39),x=n(17),k=n(16),y=n(24),N=[{name:"Home",path:"/",component:Object(d.lazy)((function(){return n.e(6).then(n.bind(null,114))})),exact:!0,isPrivate:!1,restricted:!1},{name:"Contacts",path:"/contacts",component:Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,112))})),exact:!0,isPrivate:!0,restricted:!1},{name:"Registration",path:"/register",component:Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,113))})),exact:!0,isPrivate:!1,restricted:!0},{name:"Login",path:"/login",component:Object(d.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,113))})),exact:!0,isPrivate:!1,restricted:!0}],L=n(15),A=n(1),C=function(t){var e=t.path,n=t.exact,c=t.name,r=t.isPrivate,a=t.restricted,i=t.isAuth;return Object(A.jsxs)(A.Fragment,{children:[!r&&!a&&Object(A.jsx)("li",{className:"navListItem",children:Object(A.jsx)(L.b,{to:e,exact:n,className:"navLink",activeClassName:"navLinkActive",children:c.toUpperCase()})}),r&&!a&&i&&Object(A.jsx)("li",{className:"navListItem",children:Object(A.jsx)(L.b,{to:e,exact:n,className:"navLink",activeClassName:"navLinkActive",children:c.toUpperCase()})}),!r&&a&&!i&&Object(A.jsx)("li",{className:"navListItem",children:Object(A.jsx)(L.b,{to:e,exact:n,className:"navLink",activeClassName:"navLinkActive",children:c.toUpperCase()})})]})},T=n(22),I=n(23),U=I.a.nav(c||(c=Object(T.a)(["\n  .navList {\n    display: flex;\n  }\n\n  .auth {\n    margin-left: 80px;\n  }\n  .navListItem:not(:last-child) {\n    margin-right: 20px;\n  }\n\n  .navLink {\n    text-decoration: none;\n    font-weight: 700;\n    color: darkblue;\n  }\n\n  .navLinkActive {\n    color: #eb4629;\n  }\n"]))),P=n(5),E=Object(k.b)((function(t){return{displayName:Object(y.b)(t)}}),{signOutUser:P.g})((function(t){var e=t.signOutUser,n=t.displayName;return Object(A.jsxs)("ul",{className:"navList auth",children:[Object(A.jsxs)("li",{className:"navListItem navLink",children:["Welcome, ",n]}),Object(A.jsx)("li",{className:"navListItem",children:Object(A.jsx)(L.b,{to:"/login",exact:"true",className:"navLink",activeClassName:"navLinkActive",onClick:function(){return e()},children:"LOGOUT"})})]})})),w=Object(k.b)((function(t){return{isAuth:Object(y.a)(t)}}))((function(t){var e=t.isAuth;return Object(A.jsx)(U,{children:Object(A.jsxs)("ul",{className:"navList",children:[N.map((function(t){return Object(d.createElement)(C,Object(x.a)(Object(x.a)({},t),{},{key:t.path,isAuth:e}))})),e&&Object(A.jsx)(E,{})]})})})),R=I.a.header(r||(r=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 0 40px;\n  align-items: center;\n  height: 60px;\n  background-color: lightgrey;\n"]))),S=function(){return Object(A.jsx)(R,{children:Object(A.jsx)(w,{})})},q=n(8),z=function(t){var e=t.path,n=t.component,c=t.exact;return t.isAuth?Object(A.jsx)(q.b,{path:e,exact:c,component:n}):Object(A.jsx)(q.a,{to:"/login"})},F=function(t){var e=t.path,n=t.component,c=t.exact,r=t.restricted;return t.isAuth&&r?Object(A.jsx)(q.a,{to:"/contacts"}):Object(A.jsx)(q.b,{path:e,exact:c,component:n})},G=I.a.main(a||(a=Object(T.a)(["\n  display: block;\n  color: darkblue;\n  padding: 10px;\n  margin: 0 auto;\n"]))),J=n(41),B=n.n(J),D=Object(k.b)((function(t){return{isAuth:Object(y.a)(t)}}))((function(t){var e=t.isAuth;return Object(A.jsx)(G,{children:Object(A.jsx)(d.Suspense,{fallback:Object(A.jsx)("div",{className:"loader",children:Object(A.jsx)(B.a,{type:"ThreeDots",color:"darkblue",height:80,width:80})}),children:Object(A.jsx)(q.d,{children:N.map((function(t){return t.isPrivate?Object(d.createElement)(z,Object(x.a)(Object(x.a)({},t),{},{key:t.path,isAuth:e})):Object(d.createElement)(F,Object(x.a)(Object(x.a)({},t),{},{key:t.path,isAuth:e}))}))})})})})),H=function(t){Object(g.a)(n,t);var e=Object(v.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(S,{}),Object(A.jsx)(D,{})]})}}]),n}(d.Component),W=n(3),K=n(21),M=n(30),Q=n(10),V=n(2),X=n(18),Y=n(31),Z=n.n(Y),$={key:"auth",storage:Z.a,whitelist:["idToken","refreshToken"]},_=Object(W.c)({idToken:"",refreshToken:""},(i={},Object(V.a)(i,P.f,(function(t,e){var n=e.payload;return{idToken:n.idToken,refreshToken:n.refreshToken}})),Object(V.a)(i,P.c,(function(t,e){var n=e.payload;return{idToken:n.idToken,refreshToken:n.refreshToken}})),Object(V.a)(i,P.g,(function(){return{idToken:"",refreshToken:""}})),i)),tt=Object(W.c)(!1,(u={},Object(V.a)(u,P.e,(function(){return!0})),Object(V.a)(u,P.f,(function(){return!1})),Object(V.a)(u,P.d,(function(){return!1})),Object(V.a)(u,P.b,(function(){return!0})),Object(V.a)(u,P.c,(function(){return!1})),Object(V.a)(u,P.a,(function(){return!1})),Object(V.a)(u,P.g,(function(){return!1})),u)),et=Object(W.c)("",(o={},Object(V.a)(o,P.e,(function(){return""})),Object(V.a)(o,P.d,(function(t,e){return e.payload})),Object(V.a)(o,P.b,(function(){return""})),Object(V.a)(o,P.a,(function(t,e){return e.payload})),Object(V.a)(o,P.g,(function(){return""})),o)),nt=Object(Q.b)({userAuth:Object(X.a)($,_),isLoadingAuth:tt,errorAuth:et}),ct=n(46),rt=n(9),at=Object(W.c)([],(s={},Object(V.a)(s,rt.i,(function(t,e){return e.payload})),Object(V.a)(s,rt.c,(function(t,e){return[].concat(Object(ct.a)(t),[e.payload])})),Object(V.a)(s,rt.f,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),Object(V.a)(s,P.g,(function(){return[]})),s)),it=Object(W.c)(!1,(b={},Object(V.a)(b,rt.h,(function(){return!0})),Object(V.a)(b,rt.i,(function(){return!1})),Object(V.a)(b,rt.g,(function(){return!1})),Object(V.a)(b,rt.b,(function(){return!0})),Object(V.a)(b,rt.c,(function(){return!1})),Object(V.a)(b,rt.a,(function(){return!1})),Object(V.a)(b,rt.e,(function(){return!0})),Object(V.a)(b,rt.f,(function(){return!1})),Object(V.a)(b,rt.d,(function(){return!1})),Object(V.a)(b,P.g,(function(){return!1})),b)),ut=Object(W.c)("",(j={},Object(V.a)(j,rt.h,(function(){return""})),Object(V.a)(j,rt.g,(function(t,e){return e.payload})),Object(V.a)(j,rt.b,(function(){return""})),Object(V.a)(j,rt.a,(function(t,e){return e.payload})),Object(V.a)(j,rt.e,(function(){return""})),Object(V.a)(j,rt.d,(function(t,e){return e.payload})),Object(V.a)(j,P.g,(function(){return""})),j)),ot=Object(W.c)("",(l={},Object(V.a)(l,rt.j,(function(t,e){return e.payload})),Object(V.a)(l,P.g,(function(){return""})),l)),st=Object(Q.b)({items:at,filter:ot,isLoading:it,error:ut}),bt={key:"userInfo",storage:Z.a,whitelist:["email","displayName","localId"]},jt=Object(W.c)({email:"",displayName:"",localId:""},(O={},Object(V.a)(O,P.f,(function(t,e){var n=e.payload;return{email:n.email,displayName:n.displayName,localId:n.localId}})),Object(V.a)(O,P.c,(function(t,e){var n=e.payload;return{email:n.email,displayName:n.displayName,localId:n.localId}})),Object(V.a)(O,P.g,(function(){return{email:"",displayName:"",localId:""}})),O)),lt=Object(X.a)(bt,jt),Ot=Object(Q.b)({contacts:st,auth:nt,user:lt}),dt=Object(W.a)({reducer:Ot,middleware:function(t){return t({serializableCheck:{ignoredActions:[K.a,K.f,K.b,K.c,K.d,K.e]}})}}),ft=Object(M.a)(dt),ht=dt,pt=(n(78),n(45));h.a.render(Object(A.jsx)(k.a,{store:ht,children:Object(A.jsx)(pt.PersistGate,{loading:null,persistor:ft,children:Object(A.jsx)(L.a,{children:Object(A.jsx)(H,{})})})}),document.getElementById("root"))},9:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return l})),n.d(e,"j",(function(){return O}));var c=n(3),r=Object(c.b)("contacts/getContactsRequest"),a=Object(c.b)("contacts/getContactsSuccess"),i=Object(c.b)("contacts/getContactsError"),u=Object(c.b)("contacts/addContactsRequest"),o=Object(c.b)("contacts/addContactsSuccess"),s=Object(c.b)("contacts/addContactsError"),b=Object(c.b)("contacts/deleteContactsRequest"),j=Object(c.b)("contacts/deleteContactsSuccess"),l=Object(c.b)("contacts/deleteContactsError"),O=Object(c.b)("contacts/setFilter")}},[[79,3,4]]]);
//# sourceMappingURL=main.fae16124.chunk.js.map