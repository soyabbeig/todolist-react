(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),o=(a(12),a(2)),s=a(6);a(13);function m(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active",href:"#"},"About"))),e.searchBar?l.a.createElement("form",{className:"d-flex"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")):""))))}m.defaultProps={title:"My Todo List",searchBar:!0};var i=m;function u(e){var t=e.todo,a=e.onDelete;return l.a.createElement("div",null,l.a.createElement("h4",null,t.title),l.a.createElement("p",null,t.desc),l.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){return a(t)}},"Delete"))}function d(e){return l.a.createElement("div",{className:"container my-3",style:{minHeight:"70vh"}},l.a.createElement("h3",{className:"text-center"},"Todo List "),0===e.todos.length?"No Todos To Display":e.todos.map(function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{todo:t,key:t.sno,onDelete:e.onDelete})," ",l.a.createElement("hr",null))}))}var b=function(){return l.a.createElement("div",{className:"bg-dark text-light",style:{height:"7vh"}},l.a.createElement("p",{className:"text-center"},"copyright \xa9 MyTodosList.com"))};function v(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),m=Object(o.a)(s,2),i=m[0],u=m[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"text-center"},"Add a Todo"),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),r&&i||alert("title or description can not be empty"),e.addTodo(r,i)}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"title",className:"form-label"},"Todo Title"),l.a.createElement("input",{type:"text",value:r,onChange:function(e){c(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"desc",className:"form-label"},"Todo Descreption"),l.a.createElement("input",{type:"text",value:i,onChange:function(e){u(e.target.value)},className:"form-control",id:"desc"})),l.a.createElement("button",{type:"submit",className:"btn btn-success btn-sm"},"Add Todo")))}var E=function(){var e=Object(n.useState)([{sno:1,title:"web framework",desc:"framework"},{sno:2,title:"software architecture",desc:"architecture"},{sno:3,title:"machine learning",desc:"ml"}]),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{title:"Todo List"}),l.a.createElement(v,{addTodo:function(e,t){var n={sno:0===a.length?1:a[a.length-1].sno+1,title:e,desc:t};r([].concat(Object(s.a)(a),[n])),console.log(n)}}),l.a.createElement(d,{todos:a,onDelete:function(e){console.log("delete",e),r(a.filter(function(t){return t!==e}))}}),l.a.createElement(b,null))},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),f()},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.59c1d669.chunk.js.map