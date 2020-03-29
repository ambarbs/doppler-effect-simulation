(this["webpackJsonpdoppler-effect-simulation"]=this["webpackJsonpdoppler-effect-simulation"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/night.184eb6ce.jpg"},26:function(e,t,n){e.exports=n.p+"static/media/star-small.eba6df9e.png"},29:function(e,t,n){e.exports=n(43)},39:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),o=n.n(i),c=n(8);n(39),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(27),l=n(7),s=n(19),p=n(20),d="VELOCITY",f=[s.a],v=Object(l.createStore)(Object(l.combineReducers)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{velocity:"0"},t=arguments.length>1?arguments[1]:void 0,n=d;switch(t.type){default:break;case n:e=Object(u.a)({},e,{velocity:t.payload})}return e}}),{},Object(p.composeWithDevTools)(l.applyMiddleware.apply(void 0,f))),h=n(3),b=n(4),y=n(5),m=n(6),g=n(1),j=n(2),O=n(21),x=n.n(O);function k(){var e=Object(g.a)(["\n  padding: 20px;\n    filter: sepia(","%) hue-rotate(","deg) saturate(","0%);\n\n  //blue\n  //filter: sepia(1%) hue-rotate(190deg) saturate(5000%);\n  //red\n  //filter: sepia(4%) hue-rotate(1deg) saturate(10000%);\n  transition: 2s ease;\n"]);return k=function(){return e},e}function w(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: ",";\n  justify-content: center;\n  align-items: center;\n  height: ",";\n"]);return w=function(){return e},e}function E(){var e=Object(g.a)(["\n  //background-color: #38423f;\n  background-image: url(",");\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100vh;\n  @media (max-width: 576px) {\n    flex-direction: column;\n  }\n"]);return E=function(){return e},e}var S=j.a.div(E(),x.a),V=(j.a.div(w(),(function(e){return e.flexDirection||"row"}),(function(e){return e.height||"auto"})),j.a.img(k(),(function(e){return e.sepia}),(function(e){return e.hueRotate}),(function(e){return e.saturate}))),C=n(12),R=n(14),A=n.n(R);function W(){var e=Object(g.a)(["\n  -webkit-appearance: none;\n  width: 300px;\n  height: 2px;\n  border-radius: 25px;  \n  background: #e7f0fa;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n  \n  &::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%; \n  background: #c0c5cc;\n  cursor: pointer;\n}\n"]);return W=function(){return e},e}function z(){var e=Object(g.a)(["\n  width: 50%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 1rem;\n  font-weight: bold;\n"]);return z=function(){return e},e}function I(){var e=Object(g.a)(["\n  font-size: 1.2rem;\n  color: white;\n  font-weight: bold;\n  padding-right: 0.5rem;\n"]);return I=function(){return e},e}function B(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: transparent;\n  min-width: ",";\n"]);return B=function(){return e},e}var D=j.a.div(B(),(function(e){return e.minWidth||"250px"})),H=j.a.label(I()),J=j.a.input(z()),M=j.a.input(W()),T=function(e){Object(m.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){var t=A.a.get(e,"target.value",null);a.setState({value:t}),a.validateAndSetVelocity(t)},a.state={value:""},a.validateAndSetVelocity=A.a.debounce(a.validateAndSetVelocity,200),a.validateAndSetVelocity=a.validateAndSetVelocity.bind(Object(C.a)(a)),a}return Object(b.a)(n,[{key:"validateAndSetVelocity",value:function(e){var t=e;/^-?\d*\.?\d{0,6}$/.test(e)&&(e>100?(t=100,this.setState({value:100})):e<-100&&(t=-100,this.setState({value:-100})),this.props.setVelocity(t))}},{key:"render",value:function(){var e=this.props.velocity;return(r.a.createElement(D,null,r.a.createElement(H,null,"Velocity (km/s)"),r.a.createElement(J,{type:"text",value:e,onChange:this.handleInputChange})))}}]),n}(a.Component);T.defaultProps={velocity:""};var $=n(15),F=n.n($),L=n(25),P=function(e){return function(){var t=Object(L.a)(F.a.mark((function t(n){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n({type:d,payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Y=function(e){Object(m.a)(n,e);var t=Object(y.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.velocity,n=e.actions;return(r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{minWidth:"800px"},r.a.createElement(T,{velocity:t,setVelocity:n.setVelocity}),r.a.createElement(M,{type:"range",min:"-100",max:"100",value:t,onChange:function(e){return n.setVelocity(e.target.value)}}))))}}]),n}(a.Component),q=Object(c.b)((function(e){return{velocity:e.appReducer.velocity}}),(function(e){return{actions:{setVelocity:function(t){return e(P(t))}}}}))(Y),G=n(26),K=n.n(G),N=function(e){Object(m.a)(n,e);var t=Object(y.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.velocity,t=n.getSepia(e),a=n.getHueRotate(e),i=n.getSaturate(e);return r.a.createElement(S,null,r.a.createElement(V,{src:K.a,sepia:t,hueRotate:a,saturate:i}),r.a.createElement(q,null))}}],[{key:"getSepia",value:function(e){return e>=0&&e<=100?4:0}},{key:"getHueRotate",value:function(e){return e>=0&&e<=100?340:e<0&&e>=-100?170:0}},{key:"getSaturate",value:function(e){return e>=0&&e<=100?2*e:e<0&&e>=-100?-1*e:0}}]),n}(a.Component),Q=function(e){Object(m.a)(n,e);var t=Object(y.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(N,{velocity:this.props.velocity})}}]),n}(a.Component),U=Object(c.b)((function(e){return{velocity:e.appReducer.velocity}}),(function(e){return{actions:{setVelocity:function(t){return e(P(t))}}}}))(Q);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:v},r.a.createElement(U,{store:v}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.b389e7f0.chunk.js.map