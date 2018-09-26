(function(t){function e(e){for(var o,a,s=e[0],l=e[1],r=e[2],u=0,p=[];u<s.length;u++)a=s[u],n[a]&&p.push(n[a][0]),n[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return c.push.apply(c,r||[]),i()}function i(){for(var t,e=0;e<c.length;e++){for(var i=c[e],o=!0,s=1;s<i.length;s++){var l=i[s];0!==n[l]&&(o=!1)}o&&(c.splice(e--,1),t=a(a.s=i[0]))}return t}var o={},n={app:0},c=[];function a(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=o,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(i,o,function(e){return t[e]}.bind(null,o));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var r=0;r<s.length;r++)e(s[r]);var d=l;c.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("d9c2")},"04d5":function(t,e,i){},"1b7c":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"input-group mb-3"},[t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"準備要做的任務"},domProps:{value:t.newTodo},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addTodo}},[t._v("新增")])])]),i("div",{staticClass:"card text-center"},[i("div",{staticClass:"card-header"},[i("ul",{staticClass:"nav nav-tabs card-header-tabs"},[i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",class:{active:"all"==t.visibility},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.visibility="all"}}},[t._v("全部")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link ",class:{active:"active"==t.visibility},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.visibility="active"}}},[t._v("進行中")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",class:{active:"completed"==t.visibility},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.visibility="completed"}}},[t._v("已完成")])])])]),i("ul",{staticClass:"list-group list-group-flush text-left"},t._l(t.filteredTodos,function(e,o){return i("li",{staticClass:"list-group-item",on:{dblclick:function(i){t.editTodo(e)}}},[e.id!==t.cacheTodo.id?i("div",{staticClass:"d-flex"},[i("div",{staticClass:"form-check"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"item.completed"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:e.id},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(i){var o=e.completed,n=i.target,c=!!n.checked;if(Array.isArray(o)){var a=null,s=t._i(o,a);n.checked?s<0&&t.$set(e,"completed",o.concat([a])):s>-1&&t.$set(e,"completed",o.slice(0,s).concat(o.slice(s+1)))}else t.$set(e,"completed",c)}}}),i("label",{staticClass:"form-check-label",class:{completed:e.completed},attrs:{for:e.id}},[t._v("\n              "+t._s(e.title)+"\n            ")])]),i("button",{staticClass:"close ml-auto",attrs:{type:"button","aria-label":"Close"},on:{click:function(i){t.removeTodo(e)}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e(),e.id==t.cacheTodo.id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.cacheTitle,expression:"cacheTitle"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.cacheTitle},on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.cancelEdit(e):null},function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key,"Enter"))return null;t.doneEdit(e)}],input:function(e){e.target.composing||(t.cacheTitle=e.target.value)}}}):t._e()])})),i("div",{staticClass:"card-footer d-flex justify-content-between"},[i("span",[t._v("還有 "+t._s(t.activeTodosLength)+" 筆任務未完成")]),i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearAll(e)}}},[t._v("清除所有任務")])])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-group-prepend"},[i("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("待辦事項")])])}],c=(i("e453"),i("de94"),i("111b"),i("7b62"),i("da78"),i("e0b7"),i("c206"),i("4fc4"),i("d791"),{data:function(){return{newTodo:"",todos:[{id:"12",title:"妳好",completed:!1}],todosLn:0,cacheTodo:{},cacheTitle:"",visibility:"all"}},methods:{addTodo:function(){var t=this.newTodo.trim(),e=Math.floor(Date.now());t&&(console.log(t,e),this.todos.push({id:e,title:t,completed:!1}),this.newTodo="")},removeTodo:function(t){var e=this,i=e.todos.findIndex(function(e,i){return t.id===e.id});this.todos.splice(i,1)},editTodo:function(t){console.log(t),this.cacheTodo=t,this.cacheTitle=t.title},cancelEdit:function(){this.cacheTodo={}},doneEdit:function(t){t.title=this.cacheTitle,this.cacheTitle="",this.cacheTodo={}},clearAll:function(){this.todos=[]}},computed:{filteredTodos:function(){if("all"==this.visibility)return this.todos;if("active"==this.visibility){var t=[];return this.todos.forEach(function(e){e.completed||t.push(e)}),console.log(t.length),t}if("completed"==this.visibility){t=[];return this.todos.forEach(function(e){e.completed&&t.push(e)}),t}},activeTodosLength:function(){return this.filteredTodos.filter(function(t){return 0==t.completed}).length}}}),a=c,s=(i("ce36"),i("2bcb")),l=Object(s["a"])(a,o,n,!1,null,null,null);l.options.__file="index.vue";e["a"]=l.exports},ce36:function(t,e,i){"use strict";var o=i("04d5"),n=i.n(o);n.a}});
//# sourceMappingURL=app.57dc4393.js.map