(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,n){},,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(11),c=n.n(i),r=(n(17),n(8)),o=n(7),l=n(3),s=n(4),u=n(2),d=n(6),b=n(5),j=n(9),h=(n(22),n(0)),m=function(t){var e=t.liked,n=t.allPosts,a=t.importants;return Object(h.jsxs)("div",{className:"app-header",children:[Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"69",height:"69",viewBox:"0 0 69 69",fill:"none",children:[Object(h.jsx)("path",{d:"M37.3284 66.1716C35.7663 67.7337 33.2337 67.7337 31.6716 66.1716L2.82843 37.3284C1.26634 35.7663 1.26634 33.2337 2.82844 31.6716L31.6716 2.82843C33.2337 1.26633 35.7663 1.26633 37.3284 2.82843L66.1716 31.6716C67.7337 33.2337 67.7337 35.7663 66.1716 37.3284L37.3284 66.1716Z",fill:"url(#paint0_linear)"}),Object(h.jsx)("path",{d:"M22.77 30.05L33.81 41.09L55.2 19.7",stroke:"#BCE2F9","stroke-width":"6","stroke-linecap":"round","stroke-linejoin":"round"}),Object(h.jsx)("defs",{children:Object(h.jsxs)("linearGradient",{id:"paint0_linear",x1:"11.04",y1:"61.41",x2:"59.34",y2:"13.11",gradientUnits:"userSpaceOnUse",children:[Object(h.jsx)("stop",{"stop-color":"#474A5C"}),Object(h.jsx)("stop",{offset:"1","stop-color":"#4AA3BA"})]})})]}),Object(h.jsx)("h1",{children:"My plans"}),Object(h.jsxs)("div",{className:"statusfilter",children:[Object(h.jsxs)("h2",{children:["\u0412\u0441\u0435 | ",n]}),Object(h.jsxs)("h2",{children:["\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 | ",a]}),Object(h.jsxs)("h2",{children:["\u0413\u043e\u0442\u043e\u0432\u044b | ",e]})]})]})},p=(n(24),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={term:""},a.onUpdateSearch=a.onUpdateSearch.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"onUpdateSearch",value:function(t){var e=t.target.value;this.setState({term:e}),this.props.onUpdateSearch(e)}},{key:"render",value:function(){return Object(h.jsx)("input",{className:"search-input",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u0437\u0430\u043f\u0438\u0441\u0435\u0439",onChange:this.onUpdateSearch})}}]),n}(a.Component)),f=(n(25),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).buttons=[{name:"all",label:"\u0412\u0441\u0435"},{name:"important",label:"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435"},{name:"like",label:"\u0413\u043e\u0442\u043e\u0432\u044b"}],a}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.buttons.map((function(e){var n=e.name,a=e.label,i=t.props,c=i.filter,r=i.onFilterSelect,o=c===n?"active__btn":"btn";return Object(h.jsx)("button",{type:"button",className:"btn ".concat(o),onClick:function(){return r(n)},children:a},n)}));return Object(h.jsx)("div",{className:"btns",children:e})}}]),n}(a.Component)),O=n(12),g=(n(26),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDelete,a=t.onToggleImportant,i=t.onToggleLiked,c="app-list-item d-flex justify-content-between";return t.important&&(c+=" important"),t.like&&(c+=" like"),Object(h.jsxs)("div",{className:c,children:[Object(h.jsx)("span",{className:"app-list-item-label",onClick:i,children:e}),Object(h.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(h.jsx)("button",{type:"button",className:"btn-star btn-sm",onClick:a,children:Object(h.jsx)("i",{className:"fa fa-rocket"})}),Object(h.jsx)("button",{type:"button",className:"btn-trash btn-sm",onClick:n,children:Object(h.jsx)("i",{className:"fa fa-trash-o"})}),Object(h.jsx)("i",{className:"fa fa-check",onClick:i})]})]})}}]),n}(a.Component)),x=(n(27),function(t){var e=t.posts,n=t.onDelete,a=t.onToggleImportant,i=t.onToggleLiked,c=e.map((function(t){var e=t.id,c=Object(O.a)(t,["id"]);return Object(h.jsx)("li",{className:"list-group-item",children:Object(h.jsx)(g,{label:c.label,important:c.important,like:c.like,onDelete:function(){return n(e)},onToggleImportant:function(){return a(e)},onToggleLiked:function(){return i(e)}})},e)}));return Object(h.jsx)("ul",{className:"app-list list-group",children:c})}),v=(n(28),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={text:""},a.onValueChange=a.onValueChange.bind(Object(u.a)(a)),a.onSubmit=a.onSubmit.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"onValueChange",value:function(t){this.setState({text:t.target.value})}},{key:"onSubmit",value:function(t){t.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return Object(h.jsxs)("form",{className:"post-add-form",onSubmit:this.onSubmit,children:[Object(h.jsx)("input",{className:"add__form",type:"text",placeholder:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c",onChange:this.onValueChange,value:this.state.text}),Object(h.jsx)("button",{type:"submit",className:"add__btn",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}}]),n}(a.Component)),k=(n(29),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={data:localStorage.getItem("myData")?JSON.parse(localStorage.getItem("myData")):[{label:"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0438!",like:!1,important:!1,id:Object(j.uuid)()},{label:"\u0421\u0442\u0430\u0432\u044c\u0442\u0435 \u043c\u0435\u0442\u043a\u0438!",like:!1,important:!1,id:Object(j.uuid)()},{label:"\u0424\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0439\u0442\u0435 \u043f\u043e\u0438\u0441\u043a!",like:!1,important:!1,id:3}],term:"",filter:"all"},a.deleteItem=a.deleteItem.bind(Object(u.a)(a)),a.addItem=a.addItem.bind(Object(u.a)(a)),a.onToggleImportant=a.onToggleImportant.bind(Object(u.a)(a)),a.onToggleLiked=a.onToggleLiked.bind(Object(u.a)(a)),a.onUpdateSearch=a.onUpdateSearch.bind(Object(u.a)(a)),a.onFilterSelect=a.onFilterSelect.bind(Object(u.a)(a)),a.maxId=4,a}return Object(s.a)(n,[{key:"deleteItem",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n.slice(0,a),c=n.slice(a+1),r=[].concat(Object(o.a)(i),Object(o.a)(c));return window.localStorage.setItem("myData",JSON.stringify(r)),{data:r}}))}},{key:"addItem",value:function(t){this.setState((function(e){var n=e.data,a=[{label:t,important:!1,id:Object(j.uuid)()}].concat(Object(o.a)(n));return window.localStorage.setItem("myData",JSON.stringify(a)),{data:a}}))}},{key:"onToggleImportant",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n[a],c=Object(r.a)(Object(r.a)({},i),{},{important:!i.important}),l=[].concat(Object(o.a)(n.slice(0,a)),[c],Object(o.a)(n.slice(a+1)));return window.localStorage.setItem("myData",JSON.stringify(l)),{data:l}}))}},{key:"onToggleLiked",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n[a],c=Object(r.a)(Object(r.a)({},i),{},{like:!i.like}),l=[].concat(Object(o.a)(n.slice(0,a)),[c],Object(o.a)(n.slice(a+1)));return window.localStorage.setItem("myData",JSON.stringify(l)),{data:l}}))}},{key:"searchPost",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.indexOf(e)>-1}))}},{key:"filterPost",value:function(t,e){return"like"===e?t.filter((function(t){return t.like})):"important"===e?t.filter((function(t){return t.important})):t}},{key:"onUpdateSearch",value:function(t){this.setState({term:t})}},{key:"onFilterSelect",value:function(t){this.setState({filter:t})}},{key:"render",value:function(){var t=this.state,e=t.data,n=t.term,a=t.filter,i=e.filter((function(t){return t.like})).length,c=e.filter((function(t){return t.important})).length,r=e.length,o=this.filterPost(this.searchPost(e,n),a);return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsxs)("div",{className:"headersearch",children:[Object(h.jsx)(m,{liked:i,allPosts:r,importants:c}),Object(h.jsxs)("div",{className:"search-panel",children:[Object(h.jsx)(p,{onUpdateSearch:this.onUpdateSearch}),Object(h.jsx)(f,{onFilterSelect:this.onFilterSelect,filter:a})]})]}),Object(h.jsx)(v,{onAdd:this.addItem}),Object(h.jsx)(x,{posts:o,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked})]})}}]),n}(a.Component));c.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.1c3d32e6.chunk.js.map