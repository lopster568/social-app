"use strict";(self.webpackChunksocial_media_app=self.webpackChunksocial_media_app||[]).push([[801],{7735:function(n,e,t){t.d(e,{Ec:function(){return o},Nq:function(){return s},PR:function(){return c},P_:function(){return l},SA:function(){return i},pH:function(){return u}});var r=t(4569),a=t.n(r)().create({baseURL:"http://ec2-34-207-157-116.compute-1.amazonaws.com:8000/api/user/"});a.interceptors.request.use((function(n){if(Boolean(localStorage.getItem("persist:root"))){var e=localStorage.getItem("persist:root"),t=JSON.parse(JSON.parse(e).user).token;n.headers.authorization="Bearer ".concat(t)}return n}));var u=function(n){return a.post("/login",n)},i=function(n){return a.post("/signup",n)},o=function(){return a.post("/refresh")},c=function(n){return a.get("/".concat(n))},s=function(n){return a.patch("/update",n)},l=function(n){return a.post("/follow/".concat(n))}},9801:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r=t(1413),a=t(8214),u=t(5861),i=t(885),o=t(228),c=t(4565),s=t(4162),l=t(1091),f=t(1868),p=t(1577),d=t(5702),h=t(6598),x=t(9434),v=t(277),m=t(3978),Z=(0,v.ZP)(m.Z)({height:250,width:250,fontSize:"12vh"}),g=t(9403),b=t.n(g),j=t(2791),S=t(7735),E=t(5308),y=t(184),w=function(){var n=(0,x.I0)(),e=(0,x.v9)((function(n){return n.user.currentUser})),t=e.displayName,v=e.username,m=e.email,g=e.avatar,w=(0,j.useState)(null),C=(0,i.Z)(w,2),R=C[0],U=C[1],_=(0,j.useState)(null),N=(0,i.Z)(_,2),k=N[0],P=N[1],T=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,(0,S.Nq)(k);case 3:r=e.sent,n((0,E.SF)(r.data));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o.Z,{flex:4,p:2,sx:{width:"100vh",mb:20},component:"form",onSubmit:T,children:(0,y.jsxs)(h.Z,{sx:{padding:"3%"},maxWidth:"sm",children:[(0,y.jsx)(c.Z,{mb:2,variant:"h3",children:"Your Profile"}),(0,y.jsxs)(s.Z,{spacing:5,children:[g?(0,y.jsx)(Z,{sx:{bgcolor:"red"},"aria-label":"recipe",src:g}):(0,y.jsx)(Z,{sx:{bgcolor:"red"},"aria-label":"recipe",children:t.charAt(0)}),(0,y.jsx)(l.Z,{variant:"contained",sx:{maxWidth:"20vh"},onClick:function(n){return U(n.currentTarget)},children:"Change Pic"}),(0,y.jsx)(f.Z,{onChange:function(n){return P((0,r.Z)((0,r.Z)({},k),{},{displayName:n.target.value}))},label:"Name",variant:"outlined",sx:{maxWidth:"30vh"},defaultValue:t,name:"name"}),(0,y.jsx)(f.Z,{onChange:function(n){return P((0,r.Z)((0,r.Z)({},k),{},{username:n.target.value}))},label:"Username",variant:"outlined",sx:{maxWidth:"30vh"},defaultValue:v}),(0,y.jsx)(f.Z,{onChange:function(n){return P((0,r.Z)((0,r.Z)({},k),{},{email:n.target.value}))},label:"Email",variant:"outlined",sx:{maxWidth:"30vh"},defaultValue:m}),(0,y.jsx)(f.Z,{label:"Password",variant:"outlined",sx:{maxWidth:"30vh"},placeholder:"**********"}),(0,y.jsx)(l.Z,{type:"submit",variant:"outlined",sx:{maxWidth:"30vh"},children:"Save"})]})]})}),(0,y.jsx)(p.Z,{anchorEl:R,onClose:function(){return U(null)},open:Boolean(R),children:(0,y.jsx)(d.Z,{children:(0,y.jsx)(b(),{type:"file",multiple:!1,onDone:function(n){var e=n.base64;P((0,r.Z)((0,r.Z)({},k),{},{avatar:e}))}})})})]})}},5308:function(n,e,t){t.d(e,{Ec:function(){return s},SF:function(){return c},lx:function(){return o}});var r=t(8214),a=t(5861),u=t(4148),i=t(7735),o=function(n){return{type:u.Z.SET_CURRENT_USER,payload:n}},c=function(n){return{type:u.Z.UPDATE_CURRENT_USER,payload:n}},s=function(){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Ec();case 3:t=n.sent,a=t.data,e({type:u.Z.UPDATE_CURRENT_USER,payload:a}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=801.4f3ecaaa.chunk.js.map