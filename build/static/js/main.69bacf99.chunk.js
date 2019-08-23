(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=t(14),i=t(2),l=(t(20),t(3)),m=t.n(l),s="http://localhost:3001/api/persons",f=function(){return m.a.get(s).then(function(e){return e.data})},d=function(e){return m.a.post(s,e).then(function(e){return e.data})},h=function(e){return m.a.delete("".concat(s,"/").concat(e)).then(function(e){return e.data})},b=function(e){return m.a.put("".concat(s,"/").concat(e.id),e).then(function(e){return e.data})},p=function(e){var n=e.message;return null===n?null:n.success?r.a.createElement("div",{className:"successNotification"},n.text):r.a.createElement("div",{className:"failNotification"},n.text)},w=function(e){var n=e.newSearch,t=e.handleNewSearch;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},v=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,c=e.newNum,o=e.handleNumChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:c,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},O=function(e){var n=e.persons,t=e.newSearch,a=e.remove;return n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}).map(function(e){return r.a.createElement("div",{key:e.id},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return a(e)}},"delete"))})};function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}var g=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),m=l[0],s=l[1],g=Object(a.useState)(""),j=Object(i.a)(g,2),y=j[0],N=j[1],S=Object(a.useState)(""),P=Object(i.a)(S,2),C=P[0],k=P[1],x=Object(a.useState)(null),D=Object(i.a)(x,2),T=D[0],I=D[1];Object(a.useEffect)(function(){f().then(function(e){return c(e)})},[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{message:T}),r.a.createElement(w,{newSearch:C,handleNewSearch:function(e){return k(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(v,{addPerson:function(e){e.preventDefault();var n={name:m,number:y};if(t.some(function(e){return e.name===m})){if(window.confirm("".concat(m," is already added to phonebook, replace\n              the old number with a new one?"))){var a=t.find(function(e){return e.name===m}),r=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(t,!0).forEach(function(n){Object(u.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},a,{number:y});b(r).then(function(e){c(t.map(function(n){return n.id!==a.id?n:e})),I({text:"Number belonging to ".concat(r.name," changed"),success:!0}),setTimeout(function(){I(null)},4e3)}).catch(function(e){I({text:"Information of ".concat(r.name," has already been removed from server"),success:!1}),setTimeout(function(){I(null)},4e3),c(t.filter(function(e){return e.id!==r.id}))})}}else d(n).then(function(e){c(t.concat(e)),I({text:"Added ".concat(n.name),success:!0}),setTimeout(function(){I(null)},4e3)});s(""),N("")},newName:m,handleNameChange:function(e){return s(e.target.value)},newNum:y,handleNumChange:function(e){return N(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(O,{persons:t,newSearch:C,remove:function(e){window.confirm("Delete ".concat(e.name,"?"))&&h(e.id).then(function(n){c(t.filter(function(n){return e.id!==n.id})),I({text:"Deleted ".concat(e.name),success:!0}),setTimeout(function(){I(null)},4e3)})}}))};o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.69bacf99.chunk.js.map