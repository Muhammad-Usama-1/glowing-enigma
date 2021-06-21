(this["webpackJsonpc-management"]=this["webpackJsonpc-management"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(12),s=n.n(o),i=n(2),r=(n(15),n(16),n(0)),l=Object(c.createContext)(),d=function(e){var t=e.reducer,n=e.initialState,a=e.children;return Object(r.jsx)(l.Provider,{value:Object(c.useReducer)(t,n),children:a})},j=function(){return Object(c.useContext)(l)},b=function(e){var t=e.closeModal,n=e.operation,a=e.oldname,o=e.contact,s=Object(c.useState)(""),l=Object(i.a)(s,2),d=l[0],b=l[1],u=Object(c.useState)(""),h=Object(i.a)(u,2),O=h[0],m=h[1],p=Object(c.useState)(""),x=Object(i.a)(p,2),f=x[0],g=x[1],v=j(),C=Object(i.a)(v,2),N=C[0].contacts,k=C[1];return Object(r.jsx)("div",{className:"modalBackground",children:Object(r.jsxs)("div",{className:"modalContainer",children:[Object(r.jsx)("div",{className:"titleCloseBtn",children:Object(r.jsx)("button",{onClick:function(){t(!1)},children:"X"})}),Object(r.jsx)("div",{className:"title",children:Object(r.jsxs)("h1",{children:[n," contact in your contact Management system"]})}),Object(r.jsxs)("div",{className:"body",children:[Object(r.jsxs)("div",{className:"input-box",children:[Object(r.jsx)("label",{htmlFor:"name",children:"Name : "}),Object(r.jsx)("input",{type:"text",id:"name",placeholder:a,onChange:function(e){b(e.target.value)}})]}),Object(r.jsxs)("div",{className:"input-box",children:[Object(r.jsx)("label",{htmlFor:"phonenumber",children:"Phone Number : "}),Object(r.jsx)("input",{type:"text",id:"phonenumber",onChange:function(e){m(e.target.value)}})]}),Object(r.jsxs)("div",{className:"input-box",children:[Object(r.jsx)("label",{htmlFor:"pkg",children:"PKG : "}),Object(r.jsx)("input",{type:"text",id:"pkg",onChange:function(e){g(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsx)("button",{onClick:function(){t(!1)},id:"cancelBtn",children:"Cancel"}),Object(r.jsx)("button",{onClick:function(){return function(){if("Add new"===n){if(!d||!O||!f)return void alert("Checked All feild correctly");t(!1),console.log("Contact Added");var e={name:d,phone:O,pkg:f,id:(new Date).getTime()};N.unshift(e),k({type:"ADD_CONTACT",payload:N})}if("Update"===n){if(!d||!O||!f)return void alert("Checked All feild correctly");var c=N.findIndex((function(e){return e.name===a}));N.splice(c,1);var s={name:d||o.name,phone:O||o.phone,pkg:f||o.pkg,id:o.id};N.unshift(s),t(!1),k({type:"ADD_CONTACT",payload:N})}}()},children:n||""})]})]})})},u=n(19),h=n.n(u),O=n(17),m=n.n(O),p=n(21),x=n.n(p),f=n(20),g=n.n(f),v=function(e){var t=e.contact,n=Object(c.useState)(!1),a=Object(i.a)(n,2),o=a[0],s=a[1],l=t.phone,d=t.pkg,u=j(),O=Object(i.a)(u,2),p=O[0].contacts,f=O[1],v=Object(c.useRef)("");return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"btn-box",children:[o&&Object(r.jsx)(b,{closeModal:s,operation:"Update",contact:t,oldname:t.name}),Object(r.jsx)(m.a,{}),Object(r.jsx)("button",{className:"contact-info",onClick:function(){console.log(v.current),v.current.classList.toggle("hidden")},children:t.name}),Object(r.jsx)(h.a,{}),Object(r.jsx)(g.a,{className:"edit-icon",onClick:function(){console.log("Edit contact"),s(!0)}}),Object(r.jsx)(x.a,{className:"dlt-icon",onClick:function(){return function(e){var t=p.filter((function(t){return t.id!==e}));console.log(t),console.log("Contact deleted"),f({type:"DELETE_CONTACT",payload:t})}(t.id)}})]}),Object(r.jsxs)("div",{ref:v,className:"hidden contact-detail",children:[Object(r.jsx)("p",{children:l}),Object(r.jsx)("p",{children:d})]})]})},C=n(23),N=n.n(C),k=n(22),T=n.n(k),A=function(){var e=(new Date).getTime();console.log(e);var t=Object(c.useState)(!1),n=Object(i.a)(t,2),a=n[0],o=n[1],s=j(),l=Object(i.a)(s,2),d=l[0].contacts;l[1];return Object(r.jsxs)("div",{className:"header",children:[a&&Object(r.jsx)(b,{closeModal:o,operation:"Add new"}),Object(r.jsxs)("div",{children:["Total contacts : ",d.length]}),Object(r.jsx)("div",{children:Object(r.jsxs)("button",{className:"add-btn",onClick:function(){return o(!0)},children:[Object(r.jsx)(T.a,{}),"Add new Contacts"]})})]})},y=function(){var e=j(),t=Object(i.a)(e,2),n=t[0].contacts,a=t[1],o=Object(c.useState)(""),s=Object(i.a)(o,2),l=s[0],d=s[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Contact Management System"}),Object(r.jsxs)("div",{className:"search-box",children:[Object(r.jsx)(N.a,{className:"search-icon"}),Object(r.jsx)("input",{placeholder:"Search In Contacts",type:"text",className:"input-box",onChange:function(e){d(e.target.value)}})]}),Object(r.jsx)(A,{}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"contact-card",children:n.filter((function(e){return""===l||e.name.toLowerCase().includes(l.toLowerCase())?e:""})).map((function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{children:Object(r.jsx)(v,{contact:e})})})}))}),Object(r.jsx)("div",{className:"refresh-btn-box",children:Object(r.jsx)("button",{onClick:function(){console.log("List will refresh"),a({type:"REFRESH"})},className:"refresh-btn",children:"Refresh List"})})]})]})};n(35);var S=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(y,{})})},w=n(9),E=n(4),D={contacts:[{name:"Muahammad Usama",id:1,phone:"03402306855",pkg:"Telenor"},{name:"Obaid Ali",id:644,phone:"0349204754",pkg:"Prepaid"},{name:"Ali UBIT",id:21,phone:"03402306855",pkg:"Telenor"},{name:"Ante",id:23,phone:"03402306855",pkg:"Telenor"},{name:"Aqib Massod",id:24,phone:"03402306855",pkg:"Telenor"},{name:"Areeb",id:34,phone:"03402306855",pkg:"Telenor"},{name:"Arif Rahat",id:45,phone:"03402306855",pkg:"Telenor"},{name:"Muahammad Asim",id:56,phone:"03402306855",pkg:"Telenor"},{name:"Ashar Imam",id:57,phone:"03402306855",pkg:"Telenor"},{name:"Mamo Rahat",id:50,phone:"03402306855",pkg:"Telenor"},{name:"Rizwan workshop",id:101,phone:"03483016164",pkg:"Zong"},{name:"Saif Kamal",id:111,phone:"03230934956",pkg:"U-fone"}]},M=function(e,t){switch(console.log(t),t.type){case"REFRESH":return Object(E.a)(Object(E.a)({},e),{},{contacts:D.contacts});case"ADD_CONTACT":return Object(E.a)(Object(E.a)({},e),{},{contacts:t.payload});case"DELETE_CONTACT":return Object(E.a)(Object(E.a)({},e),{},{contacts:Object(w.a)(t.payload)});case"UPDATE_CONTACT":default:return Object(E.a)({},e)}};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(d,{initialState:D,reducer:M,children:Object(r.jsx)(S,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.17b9e123.chunk.js.map