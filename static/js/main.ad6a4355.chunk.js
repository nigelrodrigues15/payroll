(this.webpackJsonpPayRollz=this.webpackJsonpPayRollz||[]).push([[0],{174:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),o=a.n(r),c=a(27),i=a(37),s=a(90),m=a(15),u=a(51),E=a.n(u),p=a(91),d=0,b={employees:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;Object.freeze(e);var a=E()({},e);switch(t.type){case"FETCH_EMPLOYEES":return console.log("fetching employees"),console.log(a),t.payload;case"CREATE_EMPLOYEE":return[].concat(Object(m.a)(e),[{id:t.id,info:t.employeeInfo}]);case"SHOW_EMPLOYEE":case"REMOVE_EMPLOYEE":return t.payload;default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;Object.freeze(e);var a=E()({},e);switch(console.log(e),t.type){case"FETCH_EMPLOYEES":return console.log("fetching employees"),console.log(a),t.payload;case"CREATE_EMPLOYEE":return[].concat(Object(m.a)(e),[{id:t.id,info:t.employeeInfo}]);case"SHOW_EMPLOYEE":case"REMOVE_EMPLOYEE":return t.payload;default:return e}},f=Object(i.c)({employees:y,months:h}),O=function(e,t){return"SET_DATABASE"===t.type?t.database:f(e,t)};var v=a(21),g=(a(174),a(18)),j=a(12),L=a(25),M=a(26),N=a(28),S=a(31),P=a(222),k=a(93),C=a.n(k),w=a(92),D=a.n(w),T=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(L.a)(this,Object(M.a)(t).call(this,e))).fileReader=new FileReader,a.fileReader.onload=function(e){a.props.setDatabase(JSON.parse(e.target.result)),a.props.history.push("/dashboard")},a}return Object(N.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"landing"},l.a.createElement("div",{className:"landing-image"}),l.a.createElement("div",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"oldData"},l.a.createElement(P.a,{id:"UIbutton",variant:"outlined",component:"label",color:"default",startIcon:l.a.createElement(C.a,null)},l.a.createElement(D.a,{className:"files-dropzone",onChange:function(t){e.fileReader.readAsText(t[0])},onError:function(e){return console.log(e)},accepts:[".json"],multiple:!0,maxFiles:3,maxFileSize:1e7,minFileSize:0,clickable:!0},l.a.createElement("p",null,"Upload Database")))))}}]),t}(l.a.Component),Y=Object(S.f)(T),x=Object(c.b)((function(e,t){return console.log("mapstate2props"),console.log(e),{}}),(function(e){return{setDatabase:function(t){return e(function(e){return function(t){t({type:"SET_DATABASE",database:e})}}(t))}}}))(Y),A=a(65),R=a.n(A),_=(a(190),a(231)),I=a(230),B=a(227),F=a(226),H=a(228),V=function(e){function t(e){return Object(g.a)(this,t),Object(L.a)(this,Object(M.a)(t).call(this,e))}return Object(N.a)(t,e),Object(j.a)(t,[{key:"componentWillMount",value:function(){console.log("component will mount")}},{key:"employeeList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.employees,t=e.map((function(e,t){return l.a.createElement("div",{key:t,className:"carouselList"},l.a.createElement(v.b,{className:"Link",to:"/employee/".concat(e)},l.a.createElement("div",{className:"listContent"},e)))}));return t}},{key:"monthList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.months,t=e.map((function(e,t){return l.a.createElement("div",{key:t,className:"carouselList"},l.a.createElement(v.b,{className:"Link",to:"/".concat(e)},l.a.createElement("div",{className:"listContent"}," ",e," ")))}));return t}},{key:"render",value:function(){var e={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5,partialVisibilityGutter:40},desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:30}},t=0;return l.a.createElement("div",{className:"dashboard"},l.a.createElement("div",{className:"dashboard-image"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",{style:{letterSpacing:"15px"}},"DASHBOARD"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"carousel"},l.a.createElement("h1",null,"EMPLOYEES"),l.a.createElement(R.a,{responsive:e,additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,centerMode:!1,className:"",containerClass:"container",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,partialVisible:!0,renderButtonGroupOutside:!1,renderDotsOutside:!1,showDots:!1,sliderClass:"",slidesToSlide:1,swipeable:!0},l.a.createElement("div",{className:"carouselList"},l.a.createElement(v.b,{className:"Link",to:"/employee"},l.a.createElement("div",{className:"listContent"}," + New Employee"))),this.employeeList())),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"carousel"},l.a.createElement("h1",null,"MONTHLY SUMMARY"),l.a.createElement(R.a,{responsive:e,additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,centerMode:!1,className:"",containerClass:"container",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,partialVisible:!0,renderButtonGroupOutside:!1,renderDotsOutside:!1,showDots:!1,sliderClass:"",slidesToSlide:1,swipeable:!0},this.monthList())),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"payperiod"},l.a.createElement(F.a,{id:"paypperiodMonth"},l.a.createElement(_.a,{id:"monthLabel"},"PayPeriod Month"),l.a.createElement(H.a,{labelId:"monthLabel",id:"monthSelect",value:t,onChange:function(e){t=e.target.value}},l.a.createElement(I.a,{value:"month"},l.a.createElement("em",null,"Month")),l.a.createElement(I.a,{value:1},"January"),l.a.createElement(I.a,{value:2},"Feburary"),l.a.createElement(I.a,{value:3},"March")),l.a.createElement(B.a,null,"Select PayPeriod Month"))))}}]),t}(l.a.Component),W=Object(S.f)(V),z=Object(c.b)((function(e,t){return console.log("mapstate2props"),console.log(e),{employees:e.employees,months:e.months}}),(function(e){return{fetchEmployees:function(){return e((function(e){return e({type:"FETCH_EMPLOYEES"})}))},createEmployee:function(t){return e(function(e){return function(t){t({type:"CREATE_EMPLOYEE",id:(Object(p.a)("nextEmployeeId"),d++),employeeInfo:e})}}(t))},showEmployee:function(){return e({type:"SHOW_EMPLOYEE",employeeId:t});var t},removeEmployee:function(t){return e(function(e){return function(t){t({type:"REMOVE_EMPLOYEE",employeeId:e})}}(t))}}}))(W),G=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(L.a)(this,Object(M.a)(t).call(this,e))).state={name:"hello"},a}return Object(N.a)(t,e),Object(j.a)(t,[{key:"componentWillMount",value:function(){this.state.name=this.props.match.params.employeeName}},{key:"render",value:function(){return l.a.createElement("div",{className:"employee"},l.a.createElement("div",{className:"employee-image"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",{style:{letterSpacing:"15px"}},"EMPOLYEE"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"employee-info"},l.a.createElement("h1",null,"Form Style Employee Info"),l.a.createElement("p",null,"Employee Name"),l.a.createElement("p",null,"Employee Sex"),l.a.createElement("p",null,"Employee DOB"),l.a.createElement("p",null,"Employee Province"),l.a.createElement("p",null,"Employee Hourly Wage"),l.a.createElement("p",null,"Employee Start Date"),l.a.createElement("p",null,"Employee End Date"),l.a.createElement("p",null,"Employee End Date"),l.a.createElement("p",null,this.state.name)))}}]),t}(l.a.Component),J=Object(S.f)(G),U=(a(191),function(e){function t(){return Object(g.a)(this,t),Object(L.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(S.c,null,l.a.createElement(S.a,{exact:!0,path:"/dashboard",component:z}),l.a.createElement(S.a,{exact:!0,path:"/employee/:employeeName",component:J}),l.a.createElement(S.a,{exact:!0,path:"/",component:x})))}}]),t}(n.Component)),$=Object(c.b)()(U);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.d(t,"preloadedState",(function(){return K}));var q,K={employees:["Person 1","Person 2","Person 3","Person 4"],months:["January","Feburary","March","April"]};console.log(K),o.a.render(l.a.createElement(c.a,{store:(q=K,Object(i.d)(O,q,Object(i.a)(s.a)))},l.a.createElement(v.a,null,l.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},99:function(e,t,a){e.exports=a(192)}},[[99,1,2]]]);
//# sourceMappingURL=main.ad6a4355.chunk.js.map