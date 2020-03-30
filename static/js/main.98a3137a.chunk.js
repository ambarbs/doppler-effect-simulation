(this["webpackJsonpdoppler-effect-simulation"]=this["webpackJsonpdoppler-effect-simulation"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/night.184eb6ce.jpg"},26:function(e,t,n){e.exports=n.p+"static/media/star-small.eba6df9e.png"},29:function(e,t,n){e.exports=n(43)},39:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),c=n(9);n(39),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(27),l=n(7),s=n(19),p=n(20),d="VELOCITY",v=[s.a],f=Object(l.createStore)(Object(l.combineReducers)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{velocity:"0"},t=arguments.length>1?arguments[1]:void 0,n=d;switch(t.type){default:break;case n:e=Object(u.a)({},e,{velocity:t.payload})}return e}}),{},Object(p.composeWithDevTools)(l.applyMiddleware.apply(void 0,v))),h=n(1),b=n(2),m=n(3),g=n(4),y=n(5),j=n(6),x=n(21),O=n.n(x);function w(){var e=Object(y.a)(["\n  //background-color: #38423f;\n  background-image: url(",");\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100vh;\n  @media (max-width: 576px) {\n    flex-direction: column;\n  }\n"]);return w=function(){return e},e}var k=j.a.div(w(),O.a),S=n(8),E=n(14),C=n.n(E);function V(){var e=Object(y.a)(["\n  width: 50%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 1rem;\n  font-weight: bold;\n"]);return V=function(){return e},e}function R(){var e=Object(y.a)(["\n  font-size: 1.2rem;\n  color: white;\n  font-weight: bold;\n  padding-right: 0.5rem;\n   @media (max-width: 576px) {\n    padding-right: unset;\n   }\n"]);return R=function(){return e},e}function I(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: transparent;\n  min-width: ",";\n  @media (max-width: 576px) {\n      flex-direction: column;\n      min-height: ",";\n      min-width: unset;\n      padding-bottom: 1rem;\n  }\n"]);return I=function(){return e},e}var A=j.a.div(I(),(function(e){return e.minWidth||"250px"}),(function(e){return e.minHeight})),M=j.a.label(R()),W=j.a.input(V()),z=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){var t=C.a.get(e,"target.value",null);a.setState({value:t}),a.validateAndSetVelocity(t)},a.state={value:""},a.validateAndSetVelocity=C.a.debounce(a.validateAndSetVelocity,200),a.validateAndSetVelocity=a.validateAndSetVelocity.bind(Object(S.a)(a)),a}return Object(b.a)(n,[{key:"validateAndSetVelocity",value:function(e){var t=e;/^-?\d*\.?\d{0,6}$/.test(e)&&(e>100?(t=100,this.setState({value:100})):e<-100&&(t=-100,this.setState({value:-100})),this.props.setVelocity(t))}},{key:"render",value:function(){var e=this.props.velocity;return(r.a.createElement(A,null,r.a.createElement(M,null,"Velocity (km/s)"),r.a.createElement(W,{type:"text",value:e,onChange:this.handleInputChange})))}}]),n}(a.Component);z.defaultProps={velocity:""};var H=n(15),P=n.n(H),B=n(25),F=function(e){return function(){var t=Object(B.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n({type:d,payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};function J(){var e=Object(y.a)(["\n  -webkit-appearance: none;\n  width: 300px;\n  height: 2px;\n  border-radius: 25px;  \n  background: #e7f0fa;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n  cursor: pointer;\n \n\n  &::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%; \n  background: #c0c5cc;\n}\n"]);return J=function(){return e},e}var T=j.a.input(J()),$=function(e){var t=e.onSliderChange,n=e.value,a=e.min,i=e.max;return(r.a.createElement(T,{type:"range",min:a,max:i,value:n,onChange:function(e){return t(e.target.value)}}))},D=$;$.defaultProps={value:0,min:0,max:100};var L=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onSliderChange=a.onSliderChange.bind(Object(S.a)(a)),a}return Object(b.a)(n,[{key:"onSliderChange",value:function(e){var t=e;e<0&&(t=-1*parseInt(Math.pow(-1*e,1/1.3),10)),this.props.actions.setVelocity(t)}},{key:"render",value:function(){var e=this.props,t=e.velocity,n=e.actions,a=t<0?-1*Math.pow(-1*t,1.3).toFixed(0):t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{minWidth:"800px"},r.a.createElement(z,{velocity:t,setVelocity:n.setVelocity}),r.a.createElement(D,{value:a,min:"-399",max:"100",onSliderChange:this.onSliderChange})))}}]),n}(a.Component),Y=Object(c.b)((function(e){return{velocity:e.appReducer.velocity}}),(function(e){return{actions:{setVelocity:function(t){return e(F(t))}}}}))(L),q=n(26),G=n.n(q);function K(){var e=Object(y.a)(["\n  padding: 20px;\n  filter: sepia(","%) hue-rotate(","deg) saturate(","0%);\n\n  //blue\n  //filter: sepia(1%) hue-rotate(190deg) saturate(5000%);\n  //red\n  //filter: sepia(4%) hue-rotate(1deg) saturate(10000%);\n  transition: 2s ease;\n"]);return K=function(){return e},e}var N=j.a.img(K(),(function(e){return e.sepia}),(function(e){return e.hueRotate}),(function(e){return e.saturate})),Q=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.velocity,t=e;e<0&&(t=-1*parseInt(Math.pow(-1*e,1.3),10));var a=n.getSepia(e),i=n.getHueRotate(e),o=n.getSaturate(e,t);return r.a.createElement(N,{src:G.a,sepia:a,hueRotate:i,saturate:o})}}],[{key:"getSepia",value:function(e){return e>=0&&e<=100?4:0}},{key:"getHueRotate",value:function(e){return e>=0&&e<=100?340:e<0&&e>=-100?170:0}},{key:"getSaturate",value:function(e,t){return e>=0&&e<=100?2*t:e<0&&e>=-100?parseInt(-.1*t):0}}]),n}(a.Component);Q.defaultProps={};var U=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.velocity;return(r.a.createElement(k,null,r.a.createElement(Q,{velocity:e}),r.a.createElement(Y,null)))}}]),n}(a.Component),X=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(U,{velocity:this.props.velocity})}}]),n}(a.Component),Z=Object(c.b)((function(e){return{velocity:e.appReducer.velocity}}),(function(e){return{actions:{setVelocity:function(t){return e(F(t))}}}}))(X);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:f},r.a.createElement(Z,{store:f}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.98a3137a.chunk.js.map