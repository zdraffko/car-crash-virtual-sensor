(this["webpackJsonpcar-crash-virtual-sensor"]=this["webpackJsonpcar-crash-virtual-sensor"]||[]).push([[0],{12:function(e,t,n){e.exports={selectSection:"SelectSection_selectSection__1boLr",inputLabel:"SelectSection_inputLabel__3Vb3D",labelContent:"SelectSection_labelContent__YwOm_",errorContent:"SelectSection_errorContent__10MwX",errorLabel:"SelectSection_errorLabel__1iZXD"}},13:function(e,t,n){e.exports={inputSection:"InputSection_inputSection__2Yio8",inputLabel:"InputSection_inputLabel__2KJHT",labelContent:"InputSection_labelContent__tmXLi",errorContent:"InputSection_errorContent__1aLcB",errorLabel:"InputSection_errorLabel__292tc"}},19:function(e,t,n){e.exports={Button:"Button_Button__3gFiX"}},20:function(e,t,n){e.exports={Form:"CarCrashForm_Form__3pGI1"}},21:function(e,t,n){e.exports={Results:"CarCrashResults_Results__3VLnC"}},24:function(e,t,n){e.exports=n(36)},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),o=n.n(c),i=n(11),l=n(5),u=a.a.memo((function(e){var t=e.validationErrors,n=e.labelContent,r=e.styles;return a.a.createElement("label",{className:t?"".concat(r.inputLabel," ").concat(r.errorLabel):r.inputLabel},a.a.createElement("span",{className:t?"".concat(r.labelContent," ").concat(r.errorContent):r.labelContent},t||n))})),s=n(12),d=n.n(s),b=a.a.memo((function(e){var t=e.selectSectionName,n=e.selectSectionValue,r=e.handleOnChange,c=e.handleOnBlur,o=e.isRequired,i=e.validationErrors,l=e.selectSectionOptions,s=e.labelContent;return a.a.createElement("div",{className:d.a.selectSection},a.a.createElement("select",{name:t,value:n,onChange:r,onBlur:c,required:o},a.a.createElement("option",{value:"",disabled:!0}),Object.keys(l).map((function(e){return a.a.createElement("option",{value:l[e],key:e},e)}))),a.a.createElement(u,{validationErrors:i,labelContent:s,styles:d.a}))})),m=n(13),p=n.n(m),h=a.a.memo((function(e){var t=e.inputSectionName,n=e.inputSectionType,r=e.inputSectionValue,c=e.handleOnChange,o=e.handleOnBlur,i=e.inputSectionMinValue,l=e.inputSectionStep,s=e.isRequired,d=e.validationErrors,b=e.labelContent;return a.a.createElement("div",{className:p.a.inputSection},a.a.createElement("input",{name:t,type:n,value:r,onChange:c,onBlur:o,min:i,required:s,step:l}),a.a.createElement(u,{validationErrors:d,labelContent:b,styles:p.a}))})),S=n(19),O=n.n(S),f=function(e){var t=e.buttonType,n=e.onClick,r=e.isSubmitting,c=e.children;return a.a.createElement("button",{type:t,className:O.a.Button,onClick:n,disabled:r},c)},v=n(20),E=n.n(v),g=function(e){var t=e.formValues,n=e.validationErrors,r=e.isSubmitting,c=e.handleValueChange,o=e.handleBlur,i=e.handleFormSubmit,l=e.history;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Car Crash Virtual Sensor"),a.a.createElement("form",{className:E.a.Form,onSubmit:function(e){return i(e,l)}},a.a.createElement(b,{selectSectionName:"hasSeatbelt",selectSectionValue:t.hasSeatbelt,handleOnChange:c,handleOnBlur:o,isRequired:!0,validationErrors:n.hasSeatbelt,selectSectionOptions:{"\u0421 \u043a\u043e\u043b\u0430\u043d":.2,"\u0411\u0435\u0437 \u043a\u043e\u043b\u0430\u043d":.04},labelContent:"\u0418\u043c\u0430\u0448 \u043b\u0438 \u043a\u043e\u043b\u0430\u043d?"}),a.a.createElement(h,{inputSectionName:"driverWeight",inputSectionType:"number",inputSectionValue:t.driverWeight,handleOnChange:c,handleOnBlur:o,inputSectionMinValue:1,inputSectionStep:.1,isRequired:!0,validationErrors:n.driverWeight,labelContent:"\u041a\u0430\u043a\u0432\u043e \u0435 \u0442\u0435\u0433\u043b\u043e\u0442\u043e \u0442\u0438?"}),a.a.createElement(b,{selectSectionName:"reactionTime",selectSectionValue:t.reactionTime,handleOnChange:c,handleOnBlur:o,isRequired:!0,validationErrors:n.reactionTime,selectSectionOptions:{"\u043c\u043d\u043e\u0433\u043e \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u0435\u043d":1,"\u043e\u0431\u0438\u043a\u043d\u043e\u0432\u0435\u043d":1.5,"\u0438\u0437\u043c\u043e\u0440\u0435\u043d / \u0432\u044a\u0437\u0440\u0430\u0441\u0442\u0435\u043d":2,"\u043d\u0435\u0442\u0440\u0435\u0437\u0432\u0435\u043d":2.5},labelContent:"\u041a\u0430\u043a\u044a\u0432 \u0432\u0438\u0434 \u0448\u043e\u0444\u044c\u043e\u0440 \u0441\u0438?"}),a.a.createElement(h,{inputSectionName:"carSpeed",inputSectionType:"number",inputSectionValue:t.carSpeed,handleOnChange:c,handleOnBlur:o,inputSectionMinValue:1,inputSectionStep:.1,isRequired:!0,validationErrors:n.carSpeed,labelContent:"\u041a\u0430\u043a\u0432\u0430 \u0435 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 \u043a\u043e\u043b\u0430\u0442\u0430?"}),a.a.createElement(b,{selectSectionName:"roadConditions",selectSectionValue:t.roadConditions,handleOnChange:c,handleOnBlur:o,isRequired:!0,validationErrors:n.roadConditions,selectSectionOptions:{"\u0441\u0443\u0445 \u0430\u0441\u0444\u0430\u043b\u0442":.92,"\u043c\u043e\u043a\u044a\u0440 \u0430\u0441\u0444\u0430\u043b\u0442":.7,"\u0437\u0430\u0441\u043d\u0435\u0436\u0435\u043d \u0430\u0441\u0444\u0430\u043b\u0442":.2,"\u0437\u0430\u043b\u0435\u0434\u0435\u043d \u0430\u0441\u0444\u0430\u043b\u0442":.1},labelContent:"\u041a\u0430\u043a\u0432\u0430 \u0435 \u043f\u044a\u0442\u043d\u0430\u0442\u0430 \u043e\u0431\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430?"}),a.a.createElement(h,{inputSectionName:"distanceToObstacle",inputSectionType:"number",inputSectionValue:t.distanceToObstacle,handleOnChange:c,handleOnBlur:o,inputSectionMinValue:1,inputSectionStep:.1,isRequired:!0,validationErrors:n.distanceToObstacle,labelContent:"\u041a\u043e\u043b\u043a\u043e \u043c\u0435\u0442\u0440\u0430 \u0438\u043c\u0430 \u0434\u043e \u0441\u0431\u043b\u044a\u0441\u044a\u043a\u0430?"}),a.a.createElement(b,{selectSectionName:"roadGradient",selectSectionValue:t.roadGradient,handleOnChange:c,handleOnBlur:o,isRequired:!0,validationErrors:n.roadGradient,selectSectionOptions:{"\u0431\u0435\u0437 \u043d\u0430\u043a\u043b\u043e\u043d":0,"\u043b\u0435\u043a \u043d\u0430\u043a\u043b\u043e\u043d \u043d\u0430\u0433\u043e\u0440\u0435":.1,"\u0441\u0442\u0440\u044a\u043c\u0435\u043d \u043d\u0430\u043a\u043b\u043e\u043d \u043d\u0430\u0433\u043e\u0440\u0435":.3,"\u043b\u0435\u043a \u043d\u0430\u043a\u043b\u043e\u043d \u043d\u0430\u0434\u043e\u043b\u0443":-.1,"\u0441\u0442\u0440\u044a\u043c\u0435\u043d \u043d\u0430\u043a\u043b\u043e\u043d \u043d\u0430\u0434\u043e\u043b\u0443":-.3},labelContent:"\u041a\u0430\u043a\u044a\u0432 \u0435 \u043d\u0430\u043a\u043b\u043e\u043d\u0430 \u043d\u0430 \u043f\u044a\u0442\u044f?"}),a.a.createElement(f,{buttonType:"submit",isSubmitting:r},"\u0418\u0437\u0447\u0438\u0441\u043b\u0438")))},C=function(e,t,n,r){var a=e/3.6,c=a*t;console.log("reaction distance ".concat(c));var o=Math.abs(Math.pow(a,2)/(19.6*(r+n)));return console.log("breaking distance ".concat(o)),c+o},_=function(e,t,n,r){var a=e/3.6,c=9.8*r,o=a*t;if(n-o>0){var i=n-o;return Math.sqrt(Math.abs(Math.pow(a,2)-2*c*i))}return a},N=function(e,t,n){return t/(t*e/(e*Math.pow(t,2)/(2*n)))*.101972},j=function(e){switch(!0){case e<10&&e>=0:return 0;case e<15:return 5;case e<20:return 10;case e<25:return 35;case e<30:return 42;case e<35:return 62;case e<40:return 80;case e<45:return 87;case e<50:return 95;case e<55:return 98;case e>=55:return 100;default:return 0}},y=n(21),T=n.n(y),V=function(e){var t=e.carSpeed,n=e.reactionTime,c=e.roadGradient,o=e.roadConditions,i=e.distanceToObstacle,l=e.driverWeight,u=e.hasSeatbelt,s=e.resetForm,d=e.history,b=Object(r.useRef)(null),m=Object(r.useRef)(0),p=Object(r.useRef)(0),h=Object(r.useRef)(!1);return Object(r.useEffect)((function(){if(b.current=Math.abs(C(Number(t),Number(n),Number(c),Number(o))),console.log("stopping distance ".concat(b.current)),b.current>i){h.current=!0,m.current=_(Number(t),Number(n),Number(i),Number(o)),console.log("car crash speed ".concat(m.current));var e=N(Number(l),m.current,Number(u));console.log("deceleration ".concat(e)),p.current=j(e),console.log("death probability ".concat(p.current))}}),[t,i,l,u,n,o,c]),a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"\u0420\u0435\u0437\u0443\u043b\u0442\u0430\u0442\u0438"),a.a.createElement("div",{className:T.a.Results},h.current?a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"\u0429\u0435 \u0438\u043c\u0430 \u043a\u0430\u0442\u0430\u0441\u0442\u0440\u043e\u0444\u0430"),a.a.createElement("p",null,"\u041a\u043e\u043b\u0430\u0442\u0430 \u043d\u044f\u043c\u0430 \u0434\u0430 \u0443\u0441\u043f\u0435\u0435 \u0434\u0430 \u0441\u043f\u0440\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0440\u0435\u0434\u0438 \u043c\u044f\u0441\u0442\u043e\u0442\u043e \u043d\u0430 \u0441\u0431\u043b\u044a\u0441\u044a\u043a."),a.a.createElement("p",null,"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 \u043a\u043e\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u0441\u0431\u043b\u044a\u0441\u044a\u043a\u0430 \u0449\u0435 \u0435 ",m.current.toFixed(2)," \u043c\u0435\u0442\u0440\u0430 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430 (",(3.6*m.current).toFixed(2)," \u043a\u0438\u043b\u043e\u043c\u0435\u0442\u0440\u0430 \u0432 \u0447\u0430\u0441)."),a.a.createElement("p",null,"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0442\u0430 \u0437\u0430 \u0441\u043c\u044a\u0440\u0442 \u0435 ",p.current," %.")):a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"\u041d\u044f\u043c\u0430 \u0434\u0430 \u0438\u043c\u0430 \u043a\u0430\u0442\u0430\u0441\u0442\u0440\u043e\u0444\u0430 !"),a.a.createElement("p",null,"\u041a\u043e\u043b\u0430\u0442\u0430 \u0449\u0435 \u0443\u0441\u043f\u0435\u0435 \u0434\u0430 \u0441\u043f\u0440\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043d\u0430 ",b.current?(Number(i)-b.current).toFixed(2):0," \u043c\u0435\u0442\u0440\u0430 \u043e\u0442 \u043c\u044f\u0441\u0442\u043e\u0442\u043e \u043d\u0430 \u0441\u0431\u043b\u044a\u0441\u044a\u043a."))),a.a.createElement(f,{buttonType:"button",onClick:function(){s(),d.push("/car-crash-virtual-sensor")}},"\u041d\u043e\u0432\u043e \u0438\u0437\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435"),a.a.createElement(f,{buttonType:"button",onClick:function(){d.push("/car-crash-virtual-sensor")}},"\u041f\u0440\u043e\u043c\u0435\u043d\u0438 \u0438\u0437\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435\u0442\u043e"))},B=n(8),R=n(9);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach((function(t){Object(B.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e,t){var n=Object(r.useState)(e),a=Object(R.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)({}),l=Object(R.a)(i,2),u=l[0],s=l[1],d=Object(r.useState)(!1),b=Object(R.a)(d,2),m=b[0],p=b[1];Object(r.useEffect)((function(){m&&(Object.keys(u).length,p(!1))}),[u,m,c]);var h=Object(r.useCallback)((function(e){return o(k({},c,Object(B.a)({},e.target.name,e.target.value)))}),[c]),S=Object(r.useCallback)((function(e){for(var n=t(c),r="",a=0,o=Object.keys(n);a<o.length;a++){var i=o[a];e.target.name===i&&(r=n[i])}s(k({},u,Object(B.a)({},e.target.name,r)))}),[c,t,u]),O=Object(r.useCallback)((function(e,n){e.preventDefault(),p(!0),s(t(c)),n.push("/car-crash-results")}),[c,t]),f=Object(r.useCallback)((function(){o(e)}),[e]);return{formValues:c,validationErrors:u,isSubmitting:m,handleValueChange:h,handleBlur:S,handleFormSubmit:O,handleFormReset:f}},w=function(e){return Math.floor(e)!==e&&e.toString().split(".")[1].length||0},M=function(e){var t={};return e.driverWeight?Number(e.driverWeight)<0?t.driverWeight="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0438 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u043d\u0438 \u043a\u0438\u043b\u043e\u0433\u0440\u0430\u043c\u0438 !":0===Number(e.driverWeight)?t.driverWeight="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0438 \u043f\u043e\u0432\u0435\u0447\u0435 \u043e\u0442 0 \u043a\u0438\u043b\u043e\u0433\u0440\u0430\u043c\u0430 !":w(Number(e.driverWeight))>2&&(t.driverWeight="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0438 \u0447\u0438\u0441\u043b\u043e \u0434\u043e \u0432\u0442\u043e\u0440\u0438\u044f \u0437\u043d\u0430\u043a !"):t.driverWeight="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0438 \u043a\u0438\u043b\u043e\u0433\u0440\u0430\u043c\u0438 !",e.carSpeed?Number(e.carSpeed)<0?t.carSpeed="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0438 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u043d\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442 !":0===Number(e.carSpeed)?t.carSpeed="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0438 \u0441\u043a\u043e\u0440\u043e\u0441\u0442 \u043f\u043e-\u0433\u043e\u043b\u044f\u043c\u0430 \u043e\u0442 0 !":w(Number(e.carSpeed))>2&&(t.carSpeed="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0438 \u0447\u0438\u0441\u043b\u043e \u0434\u043e \u0432\u0442\u043e\u0440\u0438\u044f \u0437\u043d\u0430\u043a !"):t.carSpeed="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0438 \u0441\u043a\u043e\u0440\u043e\u0441\u0442 !",e.distanceToObstacle?Number(e.distanceToObstacle)<0?t.distanceToObstacle="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0438 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u043d \u0440\u0430\u0437\u0441\u0442\u043e\u044f\u043d\u0438\u0435 !":0===Number(e.distanceToObstacle)?t.distanceToObstacle="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0438 \u0440\u0430\u0437\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043f\u043e-\u0433\u043e\u043b\u044f\u043c\u043e \u043e\u0442 0 !":w(Number(e.distanceToObstacle))>2&&(t.distanceToObstacle="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0438 \u0447\u0438\u0441\u043b\u043e \u0434\u043e \u0432\u0442\u043e\u0440\u0438\u044f \u0437\u043d\u0430\u043a !"):t.distanceToObstacle="\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0438 \u0440\u0430\u0437\u0441\u0442\u043e\u044f\u043d\u0438\u0435 !",e.hasSeatbelt||(t.hasSeatbelt="\u041c\u043e\u043b\u044f \u0438\u0437\u0431\u0435\u0440\u0438 \u0435\u0434\u043d\u0430 \u043e\u0442 \u043e\u043f\u0446\u0438\u0438\u0442\u0435 !"),e.reactionTime||(t.reactionTime="\u041c\u043e\u043b\u044f \u0438\u0437\u0431\u0435\u0440\u0438 \u0435\u0434\u043d\u0430 \u043e\u0442 \u043e\u043f\u0446\u0438\u0438\u0442\u0435 !"),e.roadConditions||(t.roadConditions="\u041c\u043e\u043b\u044f \u0438\u0437\u0431\u0435\u0440\u0438 \u0435\u0434\u043d\u0430 \u043e\u0442 \u043e\u043f\u0446\u0438\u0438\u0442\u0435 !"),e.roadGradient||(t.roadGradient="\u041c\u043e\u043b\u044f \u0438\u0437\u0431\u0435\u0440\u0438 \u0435\u0434\u043d\u0430 \u043e\u0442 \u043e\u043f\u0446\u0438\u0438\u0442\u0435 !"),t},W=(n(29),{hasSeatbelt:"",driverWeight:"",reactionTime:"",carSpeed:"",roadConditions:"",roadGradient:"",distanceToObstacle:""}),q=function(){var e=L(W,M);return a.a.createElement("div",{className:"App"},a.a.createElement(l.d,null,a.a.createElement(l.b,{path:"/car-crash-virtual-sensor",render:function(t){return a.a.createElement(g,Object.assign({},e,t))}}),a.a.createElement(l.b,{path:"/car-crash-results",render:function(t){return a.a.createElement(V,Object.assign({},e.formValues,t,{resetForm:e.handleFormReset}))}}),a.a.createElement(l.a,{exact:!0,path:"/",to:"/car-crash-virtual-sensor"}),a.a.createElement(l.b,{render:function(){return a.a.createElement("h1",null,"404")}})))};n(35);o.a.render(a.a.createElement(i.a,null,a.a.createElement(q,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.4db7086c.chunk.js.map