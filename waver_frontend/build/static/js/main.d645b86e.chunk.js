(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),l=(a(22),a(5)),i=(a(23),a(2)),s=a.n(i);var u=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold, underline"}},e.todo.title," : ")," ",e.todo.description,r.a.createElement("button",{onClick:function(){return t=e.todo.title,void s.a.delete("https://waver--backend.herokuapp.com/api/todo/".concat(t)).then((function(e){return console.log(e.data)}));var t},className:"btn btn-outline-danger my-2 mx-2",style:{borderRadius:"50px"}},"X"),r.a.createElement("hr",null)))};function m(e){return console.log(e),r.a.createElement("div",null,r.a.createElement("ul",null,e.todoList.map((function(e){return r.a.createElement(u,{todo:e})}))))}a(15);var d=function(){var e=Object(n.useState)([{}]),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),i=Object(l.a)(c,2),u=i[0],d=i[1],p=Object(n.useState)(""),b=Object(l.a)(p,2),h=b[0],g=b[1];return Object(n.useEffect)((function(){s.a.get("https://waver--backend.herokuapp.com/api/todo").then((function(e){o(e.data)}))})),r.a.createElement("div",{className:"App list-group-item  justify-content-center align-items-center mx-auto",style:{width:"400px",backgroundColor:"white",marginTop:"15px"}},r.a.createElement("h1",{className:"card text-white bg-primary mb-1",styleName:"max-width: 20rem;"},"Task Manager"),r.a.createElement("h6",{className:"card text-white bg-primary mb-3"},"FASTAPI - React - MongoDB"),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card text-white bg-dark mb-3"},"Add Your Task"),r.a.createElement("span",{className:"card-text"},r.a.createElement("input",{className:"mb-2 form-control titleIn",onChange:function(e){return d(e.target.value)},placeholder:"Title"}),r.a.createElement("input",{className:"mb-2 form-control desIn",onChange:function(e){return g(e.target.value)},placeholder:"Description"}),r.a.createElement("button",{className:"btn btn-outline-primary mx-2 mb-3",style:{borderRadius:"50px","font-weight":"bold"},onClick:function(){s.a.post("https://waver--backend.herokuapp.com/api/todo/",{title:u,description:h}).then((function(e){return console.log(e)}))}},"Add Task")),r.a.createElement("h5",{className:"card text-white bg-dark mb-3"},"Your Tasks"),r.a.createElement("div",null,r.a.createElement(m,{todoList:a}))),r.a.createElement("h6",{className:"card text-dark bg-warning py-1 mb-0"},"Copyright 2021, All rights reserved \xa9"))},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.d645b86e.chunk.js.map