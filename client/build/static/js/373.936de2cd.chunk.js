/*! For license information please see 373.936de2cd.chunk.js.LICENSE.txt */
(self.webpackChunksocial_media_app=self.webpackChunksocial_media_app||[]).push([[373],{1373:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var o=n(4942),r=n(7462),i=n(3366),a=n(2791),c=(n(8457),n(8182)),l=n(4419),u=n(277),s=n(5513),f=n(1217),d=n(5878);function v(e){return(0,f.Z)("MuiBottomNavigation",e)}(0,d.Z)("MuiBottomNavigation",["root"]);var m=n(184),p=["children","className","component","onChange","showLabels","value"],h=(0,u.ZP)("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t=e.theme;return{display:"flex",justifyContent:"center",height:56,backgroundColor:(t.vars||t).palette.background.paper}})),Z=a.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiBottomNavigation"}),o=n.children,u=n.className,f=n.component,d=void 0===f?"div":f,Z=n.onChange,b=n.showLabels,y=void 0!==b&&b,S=n.value,g=(0,i.Z)(n,p),x=(0,r.Z)({},n,{component:d,showLabels:y}),w=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},v,t)}(x);return(0,m.jsx)(h,(0,r.Z)({as:d,className:(0,c.Z)(w.root,u),ref:t,ownerState:x},g,{children:a.Children.map(o,(function(e,t){if(!a.isValidElement(e))return null;var n=void 0===e.props.value?t:e.props.value;return a.cloneElement(e,{selected:n===S,showLabel:void 0!==e.props.showLabel?e.props.showLabel:y,value:n,onChange:Z})}))}))})),b=n(9917);function y(e){return(0,f.Z)("MuiBottomNavigationAction",e)}var S=(0,d.Z)("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),g=["className","icon","label","onChange","onClick","selected","showLabel","value"],x=(0,u.ZP)(b.Z,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.showLabel&&!n.selected&&t.iconOnly]}})((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({transition:t.transitions.create(["color","padding-top"],{duration:t.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(t.vars||t).palette.text.secondary,flexDirection:"column",flex:"1"},!n.showLabel&&!n.selected&&{paddingTop:14},!n.showLabel&&!n.selected&&!n.label&&{paddingTop:0},(0,o.Z)({},"&.".concat(S.selected),{color:(t.vars||t).palette.primary.main}))})),w=(0,u.ZP)("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:function(e,t){return t.label}})((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s"},!n.showLabel&&!n.selected&&{opacity:0,transitionDelay:"0s"},(0,o.Z)({},"&.".concat(S.selected),{fontSize:t.typography.pxToRem(14)}))})),C=a.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiBottomNavigationAction"}),o=n.className,a=n.icon,u=n.label,f=n.onChange,d=n.onClick,v=n.value,p=(0,i.Z)(n,g),h=n,Z=function(e){var t=e.classes,n=e.showLabel,o=e.selected,r={root:["root",!n&&!o&&"iconOnly",o&&"selected"],label:["label",!n&&!o&&"iconOnly",o&&"selected"]};return(0,l.Z)(r,y,t)}(h);return(0,m.jsxs)(x,(0,r.Z)({ref:t,className:(0,c.Z)(Z.root,o),focusRipple:!0,onClick:function(e){f&&f(e,v),d&&d(e)},ownerState:h},p,{children:[a,(0,m.jsx)(w,{className:Z.label,ownerState:h,children:u})]}))})),z=n(6650),N=n(6871),j=n(7541),M=n(4094),k=n(2216),R=n(7122),L=n(9434),_=(0,u.ZP)(Z)((function(e){var t=e.theme;return(0,o.Z)({display:"none",width:"100vw"},t.breakpoints.down("sm"),{display:"block"})}));var B=function(){var e=(0,L.v9)((function(e){return e.user.currentUser})),t=(0,N.s0)();return e?(0,m.jsx)(z.Z,{sx:{position:"fixed",bottom:0,left:0,right:0,marginLeft:"0px"},elevation:3,children:(0,m.jsxs)(_,{sx:{pl:"16px"},onChange:function(){},children:[(0,m.jsx)(C,{label:"Home",value:"Feed",icon:(0,m.jsx)(j.Z,{}),onClick:function(){return t("/")}}),(0,m.jsx)(C,{label:"Discover",value:"Discover",icon:(0,m.jsx)(M.Z,{}),onClick:function(){return t("/discover")}}),(0,m.jsx)(C,{label:"Circle",value:"Circle",icon:(0,m.jsx)(k.Z,{}),onClick:function(){return t("/circle")}}),(0,m.jsx)(C,{label:"Settings",value:"Settings",icon:(0,m.jsx)(R.Z,{}),onClick:function(){return t("/settings")}})]})}):null}},4094:function(e,t,n){"use strict";var o=n(4836);t.Z=void 0;var r=o(n(5649)),i=n(184),a=(0,r.default)((0,i.jsx)("path",{d:"M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"}),"Explore");t.Z=a},7541:function(e,t,n){"use strict";var o=n(4836);t.Z=void 0;var r=o(n(5649)),i=n(184),a=(0,r.default)((0,i.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.Z=a},2216:function(e,t,n){"use strict";var o=n(4836);t.Z=void 0;var r=o(n(5649)),i=n(184),a=(0,r.default)((0,i.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),"People");t.Z=a},7122:function(e,t,n){"use strict";var o=n(4836);t.Z=void 0;var r=o(n(5649)),i=n(184),a=(0,r.default)((0,i.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.Z=a},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(1142)},1245:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var o=n(7462),r=n(2791),i=n(3366),a=n(8182),c=n(4419),l=n(9853),u=n(5513),s=n(277),f=n(1217);function d(e){return(0,f.Z)("MuiSvgIcon",e)}(0,n(5878).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=n(184),m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],p=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"inherit"!==n.color&&t["color".concat((0,l.Z)(n.color))],t["fontSize".concat((0,l.Z)(n.fontSize))]]}})((function(e){var t,n,o,r,i,a,c,l,u,s,f,d,v,m,p,h,Z,b=e.theme,y=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(t=b.transitions)||null==(n=t.create)?void 0:n.call(t,"fill",{duration:null==(o=b.transitions)||null==(r=o.duration)?void 0:r.shorter}),fontSize:{inherit:"inherit",small:(null==(i=b.typography)||null==(a=i.pxToRem)?void 0:a.call(i,20))||"1.25rem",medium:(null==(c=b.typography)||null==(l=c.pxToRem)?void 0:l.call(c,24))||"1.5rem",large:(null==(u=b.typography)||null==(s=u.pxToRem)?void 0:s.call(u,35))||"2.1875"}[y.fontSize],color:null!=(f=null==(d=(b.vars||b).palette)||null==(v=d[y.color])?void 0:v.main)?f:{action:null==(m=(b.vars||b).palette)||null==(p=m.action)?void 0:p.active,disabled:null==(h=(b.vars||b).palette)||null==(Z=h.action)?void 0:Z.disabled,inherit:void 0}[y.color]}})),h=r.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiSvgIcon"}),r=n.children,s=n.className,f=n.color,h=void 0===f?"inherit":f,Z=n.component,b=void 0===Z?"svg":Z,y=n.fontSize,S=void 0===y?"medium":y,g=n.htmlColor,x=n.inheritViewBox,w=void 0!==x&&x,C=n.titleAccess,z=n.viewBox,N=void 0===z?"0 0 24 24":z,j=(0,i.Z)(n,m),M=(0,o.Z)({},n,{color:h,component:b,fontSize:S,instanceFontSize:e.fontSize,inheritViewBox:w,viewBox:N}),k={};w||(k.viewBox=N);var R=function(e){var t=e.color,n=e.fontSize,o=e.classes,r={root:["root","inherit"!==t&&"color".concat((0,l.Z)(t)),"fontSize".concat((0,l.Z)(n))]};return(0,c.Z)(r,d,o)}(M);return(0,v.jsxs)(p,(0,o.Z)({as:b,className:(0,a.Z)(R.root,s),ownerState:M,focusable:"false",color:g,"aria-hidden":!C||void 0,role:C?"img":void 0,ref:t},k,j,{children:[r,C?(0,v.jsx)("title",{children:C}):null]}))}));h.muiName="SvgIcon";var Z=h;function b(e,t){var n=function(n,r){return(0,v.jsx)(Z,(0,o.Z)({"data-testid":"".concat(t,"Icon"),ref:r},n,{children:e}))};return n.muiName=Z.muiName,r.memo(r.forwardRef(n))}},2977:function(e,t,n){"use strict";var o=n(3981);t.Z=o.Z},1142:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return l},isMuiElement:function(){return u.Z},ownerDocument:function(){return s.Z},ownerWindow:function(){return f.Z},requirePropFactory:function(){return d},setRef:function(){return v},unstable_ClassNameGenerator:function(){return g},unstable_useEnhancedEffect:function(){return m.Z},unstable_useId:function(){return p.Z},unsupportedProp:function(){return h},useControlled:function(){return Z.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return y.Z},useIsFocusVisible:function(){return S.Z}});var o=n(5902),r=n(9853),i=n(8949).Z,a=n(1245),c=n(2977);var l=function(e,t){return function(){return null}},u=n(6258),s=n(5783),f=n(8195);n(7462);var d=function(e,t){return function(){return null}},v=n(2971).Z,m=n(3026),p=n(1853);var h=function(e,t,n,o,r){return null},Z=n(5382),b=n(9511),y=n(7933),S=n(2763),g={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),o.Z.configure(e)}}},5783:function(e,t,n){"use strict";var o=n(9723);t.Z=o.Z},8195:function(e,t,n){"use strict";var o=n(7979);t.Z=o.Z},5382:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(885),r=n(2791);var i=function(e){var t=e.controlled,n=e.default,i=(e.name,e.state,r.useRef(void 0!==t).current),a=r.useState(n),c=(0,o.Z)(a,2),l=c[0],u=c[1];return[i?t:l,r.useCallback((function(e){i||u(e)}),[])]}},1853:function(e,t,n){"use strict";var o=n(6248);t.Z=o.Z},6532:function(e,t){"use strict";var n,o=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen");function Z(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case i:case c:case a:case d:case v:return e;default:switch(e=e&&e.$$typeof){case s:case u:case f:case p:case m:case l:return e;default:return t}}case r:return t}}}n=Symbol.for("react.module.reference")},8457:function(e,t,n){"use strict";n(6532)},8949:function(e,t,n){"use strict";function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];e.apply(this,o),t.apply(this,o)}}),(function(){}))}n.d(t,{Z:function(){return o}})},3981:function(e,t,n){"use strict";function o(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var c=function(){e.apply(o,i)};clearTimeout(t),t=setTimeout(c,n)}return o.clear=function(){clearTimeout(t)},o}n.d(t,{Z:function(){return o}})},7979:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(9723);function r(e){return(0,o.Z)(e).defaultView||window}},6248:function(e,t,n){"use strict";var o;n.d(t,{Z:function(){return l}});var r=n(885),i=n(2791),a=0;var c=(o||(o=n.t(i,2))).useId;function l(e){if(void 0!==c){var t=c();return null!=e?e:t}return function(e){var t=i.useState(e),n=(0,r.Z)(t,2),o=n[0],c=n[1],l=e||o;return i.useEffect((function(){null==o&&c("mui-".concat(a+=1))}),[o]),l}(e)}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=373.936de2cd.chunk.js.map