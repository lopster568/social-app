"use strict";(self.webpackChunksocial_media_app=self.webpackChunksocial_media_app||[]).push([[52],{7964:function(t,n,e){e.d(n,{Jq:function(){return a},TJ:function(){return f},fR:function(){return v},fX:function(){return m},n9:function(){return d},qb:function(){return u},tf:function(){return i},ud:function(){return s},xV:function(){return l},xl:function(){return c}});var r=e(4569),o=e.n(r)().create({baseURL:"http://ec2-54-175-11-135.compute-1.amazonaws.com:8000/api/post"});o.interceptors.request.use((function(t){if(Boolean(localStorage.getItem("persist:root"))){var n=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token;t.headers.authorization="Bearer ".concat(n)}return t}));var a=function(){return o.get("/")},i=function(){return o.get("/feed")},c=function(t){return o.get("/".concat(t))},u=function(t){return o.post("/",t)},s=function(){return o.post("/saved")},l=function(t){return o.post("/postsby/".concat(t))},d=function(t){return o.patch("/".concat(t,"/like"))},f=function(t){return o.post("/".concat(t,"/save"))},m=function(t,n){return o.patch("/".concat(t,"/comment"),n)},v=function(t){return o.delete("/".concat(t))}},331:function(t,n,e){var r=e(6217),o=e(7083),a=e(184);n.Z=function(t){var n=t.posts;return(0,a.jsx)(r.Z,{sx:{width:"100%",height:"100%",overflowY:"hidden"},gap:5,cols:3,rowHeight:200,children:null===n||void 0===n?void 0:n.map((function(t){return(0,a.jsx)(o.Z,{children:(0,a.jsx)("img",{src:t.img,srcSet:t.img,alt:t.title,loading:"lazy"})},t._id)}))})}},7052:function(t,n,e){e.r(n);var r=e(885),o=e(6650),a=e(4565),i=e(9276),c=e(2791),u=e(7964),s=e(331),l=e(184);n.default=function(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],d=n[1];return(0,c.useEffect)((function(){(0,u.ud)().then((function(t){return d(t.data)}))}),[]),(0,l.jsx)(i.Z,{flex:4,p:2,sx:{width:"100%",height:"95vh"},children:(0,l.jsxs)(o.Z,{sx:{padding:"3%",maxWidth:"sm"},elevation:3,children:[(0,l.jsx)(a.Z,{variant:"h4",children:"Your Saved Posts"}),(0,l.jsx)(s.Z,{posts:e})]})})}},6217:function(t,n,e){e.d(n,{Z:function(){return g}});var r=e(3366),o=e(7462),a=e(4419),i=e(8182),c=e(2791),u=e(277),s=e(5513),l=e(1217);function d(t){return(0,l.Z)("MuiImageList",t)}(0,e(5878).Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);var f=e(1517),m=e(184),v=["children","className","cols","component","rowHeight","gap","style","variant"],p=(0,u.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[n.root,n[e.variant]]}})((function(t){var n=t.ownerState;return(0,o.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===n.variant&&{display:"block"})})),g=c.forwardRef((function(t,n){var e=(0,s.Z)({props:t,name:"MuiImageList"}),u=e.children,l=e.className,g=e.cols,h=void 0===g?2:g,Z=e.component,w=void 0===Z?"ul":Z,y=e.rowHeight,x=void 0===y?"auto":y,S=e.gap,I=void 0===S?4:S,j=e.style,N=e.variant,b=void 0===N?"standard":N,k=(0,r.Z)(e,v),L=c.useMemo((function(){return{rowHeight:x,gap:I,variant:b}}),[x,I,b]);c.useEffect((function(){0}),[]);var M="masonry"===b?(0,o.Z)({columnCount:h,columnGap:I},j):(0,o.Z)({gridTemplateColumns:"repeat(".concat(h,", 1fr)"),gap:I},j),R=(0,o.Z)({},e,{component:w,gap:I,rowHeight:x,variant:b}),C=function(t){var n=t.classes,e={root:["root",t.variant]};return(0,a.Z)(e,d,n)}(R);return(0,m.jsx)(p,(0,o.Z)({as:w,className:(0,i.Z)(C.root,C[b],l),ref:n,style:M,ownerState:R},k,{children:(0,m.jsx)(f.Z.Provider,{value:L,children:u})}))}))},1517:function(t,n,e){var r=e(2791).createContext({});n.Z=r},7083:function(t,n,e){e.d(n,{Z:function(){return w}});var r=e(4942),o=e(3366),a=e(7462),i=e(4419),c=e(8182),u=e(2791),s=(e(8457),e(1517)),l=e(277),d=e(5513),f=e(6258),m=e(1217);function v(t){return(0,m.Z)("MuiImageListItem",t)}var p=(0,e(5878).Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),g=e(184),h=["children","className","cols","component","rows","style"],Z=(0,l.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[(0,r.Z)({},"& .".concat(p.img),n.img),n.root,n[e.variant]]}})((function(t){var n=t.ownerState;return(0,a.Z)({display:"block",position:"relative"},"standard"===n.variant&&{display:"flex",flexDirection:"column"},"woven"===n.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},(0,r.Z)({},"& .".concat(p.img),(0,a.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===n.variant&&{height:"auto",flexGrow:1})))})),w=u.forwardRef((function(t,n){var e=(0,d.Z)({props:t,name:"MuiImageListItem"}),r=e.children,l=e.className,m=e.cols,p=void 0===m?1:m,w=e.component,y=void 0===w?"li":w,x=e.rows,S=void 0===x?1:x,I=e.style,j=(0,o.Z)(e,h),N=u.useContext(s.Z),b=N.rowHeight,k=void 0===b?"auto":b,L=N.gap,M=N.variant,R="auto";"woven"===M?R=void 0:"auto"!==k&&(R=k*S+L*(S-1));var C=(0,a.Z)({},e,{cols:p,component:y,gap:L,rowHeight:k,rows:S,variant:M}),E=function(t){var n=t.classes,e={root:["root",t.variant],img:["img"]};return(0,i.Z)(e,v,n)}(C);return(0,g.jsx)(Z,(0,a.Z)({as:y,className:(0,c.Z)(E.root,E[M],l),ref:n,style:(0,a.Z)({height:R,gridColumnEnd:"masonry"!==M?"span ".concat(p):void 0,gridRowEnd:"masonry"!==M?"span ".concat(S):void 0,marginBottom:"masonry"===M?L:void 0},I),ownerState:C},j,{children:u.Children.map(r,(function(t){return u.isValidElement(t)?"img"===t.type||(0,f.Z)(t,["Image"])?u.cloneElement(t,{className:(0,c.Z)(E.img,t.props.className)}):t:null}))}))}))},6258:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(2791);var o=function(t,n){return r.isValidElement(t)&&-1!==n.indexOf(t.type.muiName)}},9276:function(t,n,e){var r=(0,e(3814).Z)();n.Z=r}}]);
//# sourceMappingURL=52.6b42ae91.chunk.js.map