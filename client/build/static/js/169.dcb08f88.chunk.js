(self.webpackChunksocial_media_app=self.webpackChunksocial_media_app||[]).push([[169],{7964:function(e,t,n){"use strict";n.d(t,{Jq:function(){return a},TJ:function(){return f},fR:function(){return m},fX:function(){return p},n9:function(){return d},qb:function(){return u},tf:function(){return i},ud:function(){return s},xV:function(){return l},xl:function(){return c}});var r=n(4569),o=n.n(r)().create({baseURL:"http://ec2-54-175-11-135.compute-1.amazonaws.com:8000/api/post"});o.interceptors.request.use((function(e){if(Boolean(localStorage.getItem("persist:root"))){var t=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token;e.headers.authorization="Bearer ".concat(t)}return e}));var a=function(){return o.get("/")},i=function(){return o.get("/feed")},c=function(e){return o.get("/".concat(e))},u=function(e){return o.post("/",e)},s=function(){return o.post("/saved")},l=function(e){return o.post("/postsby/".concat(e))},d=function(e){return o.patch("/".concat(e,"/like"))},f=function(e){return o.post("/".concat(e,"/save"))},p=function(e,t){return o.patch("/".concat(e,"/comment"),t)},m=function(e){return o.delete("/".concat(e))}},2194:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(1413),o=n(8214),a=n(5861),i=n(885),c=n(5152),u=n(5590),s=n(228),l=n(4565),d=n(3978),f=n(1868),p=n(1091),m=n(6582),h=n(2419),v=n(2791),g=n(4891),Z=n(5980),x=n(7655),b=n(2834),j=n(3992),y=n(277),k=n(6110),w=(0,y.ZP)(k.Z)({display:"flex",alignItems:"center",justifyContent:"center"}),S=(0,y.ZP)(s.Z)((function(e){e.theme;return{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"}})),C=n(9434),P=n(7964),N=n(6871),R=n(295),I=n(184),M=function(){var e=(0,N.s0)(),t=(0,C.I0)(),n=(0,v.useState)(!1),y=(0,i.Z)(n,2),k=y[0],M=y[1],A=(0,v.useState)(null),_=(0,i.Z)(A,2),D=_[0],z=_[1],F=(0,C.v9)((function(e){return e.user.currentUser})),T=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(r){var a,i;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),(a=new FormData).append("postImg",D.img),a.append("caption",D.caption),a.append("tags",D.tags),n.next=7,(0,P.qb)(a);case 7:i=n.sent,t((0,R.b)(i.data.message)),e("/"),M(!1);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),O=(0,N.TH)();return"/login"!==O.pathname&&"/signup"!==O.pathname&&F?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(c.Z,{title:"Add",sx:{position:"fixed",bottom:42,left:{xs:"calc(50% - 30px)",md:30}},children:(0,I.jsx)(u.Z,{color:"primary","aria-label":"Add",onClick:function(){return M(!0)},children:(0,I.jsx)(h.Z,{})})}),(0,I.jsx)(w,{open:k,onClose:function(){return M(!1)},children:(0,I.jsxs)(s.Z,{height:500,width:320,borderRadius:5,p:3,bgcolor:"background.default",color:"text.primary",children:[(0,I.jsx)(l.Z,{variant:"h6",color:"gray",textAlign:"center",children:"Create a Post"}),(0,I.jsxs)(S,{children:[F.avatar?(0,I.jsx)(d.Z,{sx:{width:30,height:30},src:F.avatar,alt:F.displayName}):(0,I.jsx)(d.Z,{sx:{width:30,height:30},alt:F.displayName,children:F.displayName.charAt(0)}),(0,I.jsx)(l.Z,{variant:"span",fontWeight:500,children:F.displayName})]}),(0,I.jsxs)(s.Z,{component:"form",children:[(0,I.jsx)(f.Z,{sx:{width:"100%"},variant:"standard",rows:3,multiline:!0,placeholder:"What's on Your Mind?",onChange:function(e){return z((0,r.Z)((0,r.Z)({},D),{},{caption:e.target.value}))}}),(0,I.jsxs)(g.Z,{direction:"row",gap:1,mt:2,mb:3,children:[(0,I.jsx)(Z.Z,{color:"primary"}),(0,I.jsx)(x.Z,{color:"secondary"}),(0,I.jsx)(b.Z,{color:"success"}),(0,I.jsx)(j.Z,{color:"error"})]}),(0,I.jsx)(l.Z,{children:"Please Choose an Image"}),(0,I.jsxs)(p.Z,{variant:"contained",component:"label",children:["Upload",(0,I.jsx)("input",{onChange:function(e){return z((0,r.Z)((0,r.Z)({},D),{},{img:e.target.files[0]}))},hidden:!0,accept:"image/*",type:"file"})]}),(0,I.jsx)(l.Z,{children:"OR"}),(0,I.jsx)(f.Z,{size:"small",placeholder:"Image link",onChange:function(e){return z((0,r.Z)((0,r.Z)({},D),{},{img:e.target.value}))},sx:{width:"100%",mb:2}}),(0,I.jsx)(l.Z,{children:"Add Tags!"}),(0,I.jsx)(f.Z,{sx:{width:"100%"},variant:"standard",rows:2,multiline:!0,placeholder:"Separated by commas",onChange:function(e){return z((0,r.Z)((0,r.Z)({},D),{},{tags:e.target.value}))}}),(0,I.jsx)(m.Z,{sx:{mt:4},fullWidth:!0,variant:"contained",children:(0,I.jsx)(p.Z,{sx:{width:"90%"},onClick:T,children:"Post"})})]})]})})]}):null}},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(1142)},3978:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(885),o=n(3366),a=n(7462),i=n(2791),c=n(8182),u=n(4419),s=n(277),l=n(5513),d=n(1245),f=n(184),p=(0,d.Z)((0,f.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=n(1217);function h(e){return(0,m.Z)("MuiAvatar",e)}(0,n(5878).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var v=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===n.variant&&{borderRadius:0},n.colorDefault&&(0,a.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),Z=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),x=(0,s.ZP)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var b=i.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiAvatar"}),s=n.alt,d=n.children,p=n.className,m=n.component,b=void 0===m?"div":m,j=n.imgProps,y=n.sizes,k=n.src,w=n.srcSet,S=n.variant,C=void 0===S?"circular":S,P=(0,o.Z)(n,v),N=null,R=function(e){var t=e.crossOrigin,n=e.referrerPolicy,o=e.src,a=e.srcSet,c=i.useState(!1),u=(0,r.Z)(c,2),s=u[0],l=u[1];return i.useEffect((function(){if(o||a){l(!1);var e=!0,r=new Image;return r.onload=function(){e&&l("loaded")},r.onerror=function(){e&&l("error")},r.crossOrigin=t,r.referrerPolicy=n,r.src=o,a&&(r.srcset=a),function(){e=!1}}}),[t,n,o,a]),s}((0,a.Z)({},j,{src:k,srcSet:w})),I=k||w,M=I&&"error"!==R,A=(0,a.Z)({},n,{colorDefault:!M,component:b,variant:C}),_=function(e){var t=e.classes,n={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,u.Z)(n,h,t)}(A);return N=M?(0,f.jsx)(Z,(0,a.Z)({alt:s,src:k,srcSet:w,sizes:y,ownerState:A,className:_.img},j)):null!=d?d:I&&s?s[0]:(0,f.jsx)(x,{className:_.fallback}),(0,f.jsx)(g,(0,a.Z)({as:b,ownerState:A,className:(0,c.Z)(_.root,p),ref:t},P,{children:N}))}))},1142:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return u},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return p},unstable_ClassNameGenerator:function(){return j},unstable_useEnhancedEffect:function(){return m.Z},unstable_useId:function(){return h.Z},unsupportedProp:function(){return v},useControlled:function(){return g.Z},useEventCallback:function(){return Z.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return b.Z}});var r=n(5902),o=n(9853),a=n(8949).Z,i=n(1245),c=n(2977);var u=function(e,t){return function(){return null}},s=n(6258),l=n(5783),d=n(8195);n(7462);var f=function(e,t){return function(){return null}},p=n(2971).Z,m=n(3026),h=n(1853);var v=function(e,t,n,r,o){return null},g=n(5382),Z=n(9511),x=n(7933),b=n(2763),j={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}},1853:function(e,t,n){"use strict";var r=n(6248);t.Z=r.Z},4891:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(4942),o=n(3366),a=n(7462),i=n(2791),c=n(8182),u=n(2466),s=n(4419),l=n(1217),d=n(7661),f=n(6083),p=n(8519),m=n(5080),h=n(1184),v=n(5982),g=n(184),Z=["component","direction","spacing","divider","children","className"],x=(0,m.Z)(),b=(0,d.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}});function j(e){return(0,f.Z)({props:e,name:"MuiStack",defaultTheme:x})}function y(e,t){var n=i.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,o){return e.push(r),o<n.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(o)})),e}),[])}var k=function(e){var t=e.ownerState,n=e.theme,o=(0,a.Z)({display:"flex",flexDirection:"column"},(0,h.k9)({theme:n},(0,h.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=(0,v.hB)(n),c=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),s=(0,h.P$)({values:t.direction,base:c}),l=(0,h.P$)({values:t.spacing,base:c});"object"===typeof s&&Object.keys(s).forEach((function(e,t,n){if(!s[e]){var r=t>0?s[n[t-1]]:"column";s[e]=r}}));o=(0,u.Z)(o,(0,h.k9)({theme:n},l,(function(e,n){return{"& > :not(style) + :not(style)":(0,r.Z)({margin:0},"margin".concat((o=n?s[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,v.NA)(i,e))};var o})))}return o=(0,h.dt)(n.breakpoints,o)};var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?b:t,r=e.useThemeProps,u=void 0===r?j:r,d=e.componentName,f=void 0===d?"MuiStack":d,m=function(){return(0,s.Z)({root:["root"]},(function(e){return(0,l.Z)(f,e)}),{})},h=n(k),v=i.forwardRef((function(e,t){var n=u(e),r=(0,p.Z)(n),i=r.component,s=void 0===i?"div":i,l=r.direction,d=void 0===l?"column":l,f=r.spacing,v=void 0===f?0:f,x=r.divider,b=r.children,j=r.className,k=(0,o.Z)(r,Z),w={direction:d,spacing:v},S=m();return(0,g.jsx)(h,(0,a.Z)({as:s,ownerState:w,ref:t,className:(0,c.Z)(S.root,j)},k,{children:x?y(b,x):b}))}));return v}(),S=w},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=169.dcb08f88.chunk.js.map