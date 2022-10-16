"use strict";(self.webpackChunksocial_media_app=self.webpackChunksocial_media_app||[]).push([[746],{1514:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(885),a=n(228),o=n(4565),i=n(4162),c=n(5953),s=n(6598),l=n(1573),h=n(184),p=function(t){var e=t.title,n=t.subtitle_1,r=t.subtitle_2,a=t.checked;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(c.ZP,{item:!0,children:[(0,h.jsx)(o.Z,{variant:"h6",children:e}),(0,h.jsxs)(o.Z,{variant:"p",children:[n,(0,h.jsx)("br",{})," ",r]})]}),(0,h.jsx)(c.ZP,{item:!0,children:(0,h.jsx)(l.Z,{checked:a})})]})},u=n(9434),d=n(2791),v=function(){var t=(0,d.useState)({discoveryMode:!0,relevantContent:!0,privateAccount:!1,shyMode:!1}),e=(0,r.Z)(t,2),n=e[0],l=e[1],v=(0,u.v9)((function(t){return t.user.currentUser.settings})),g=v.discoveryMode,f=v.relevantContent,m=v.privateAccount,y=v.shyMode;return(0,d.useEffect)((function(){l({discoveryMode:g,relevantContent:f,privateAccount:m,shyMode:y})}),[]),(0,h.jsx)(a.Z,{flex:4,p:2,sx:{mb:"50px"},children:(0,h.jsxs)(s.Z,{sx:{padding:"3%"},maxWidth:"sm",children:[(0,h.jsx)(o.Z,{mb:2,variant:"h3",children:"Settings"}),(0,h.jsxs)(i.Z,{spacing:5,children:[(0,h.jsxs)(a.Z,{children:[(0,h.jsx)(o.Z,{variant:"h6",fontWeight:100,children:"App Mode"}),(0,h.jsx)(c.ZP,{container:!0,spacing:4,children:(0,h.jsx)(p,{title:"Theme",subtitle_1:"Set the theme light/dark for the app"})})]}),(0,h.jsxs)(a.Z,{children:[(0,h.jsx)(o.Z,{variant:"h6",fontWeight:100,children:"Preferences"}),(0,h.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,h.jsx)(p,{title:"Discovery Mode",subtitle_1:"Allows your posts to appear in the discovery section",subtitle_2:"Globally",checked:n.discoveryMode}),(0,h.jsx)(p,{title:"Relevant Content Only",subtitle_1:"Shows content in accordance to your preferences",subtitle_2:"(no forced recommendation)",checked:n.relevantContent})]})]}),(0,h.jsxs)(a.Z,{children:[(0,h.jsx)(o.Z,{variant:"h6",fontWeight:100,children:"Privacy"}),(0,h.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,h.jsx)(p,{title:"Private Account",subtitle_1:"Hide your posts from people who don't follow you",checked:n.privateAccount}),(0,h.jsx)(p,{title:"Shy Mode",subtitle_1:"Does not recommend your profile to stranger",checked:n.shyMode})]})]})]})]})})}},1211:function(t,e,n){var r=n(2791).createContext();e.Z=r},529:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(2791),a=n(1211);function o(){return r.useContext(a.Z)}},4565:function(t,e,n){n.d(e,{Z:function(){return Z}});var r=n(3366),a=n(7462),o=n(2791),i=n(8182),c=n(8519),s=n(4419),l=n(277),h=n(5513),p=n(9853),u=n(1217);function d(t){return(0,u.Z)("MuiTypography",t)}(0,n(5878).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=n(184),g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e["align".concat((0,p.Z)(n.align))],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})((function(t){var e=t.theme,n=t.ownerState;return(0,a.Z)({margin:0},n.variant&&e.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=o.forwardRef((function(t,e){var n=(0,h.Z)({props:t,name:"MuiTypography"}),o=function(t){return y[t]||t}(n.color),l=(0,c.Z)((0,a.Z)({},n,{color:o})),u=l.align,Z=void 0===u?"inherit":u,x=l.className,b=l.component,j=l.gutterBottom,M=void 0!==j&&j,w=l.noWrap,W=void 0!==w&&w,_=l.paragraph,k=void 0!==_&&_,B=l.variant,C=void 0===B?"body1":B,P=l.variantMapping,S=void 0===P?m:P,A=(0,r.Z)(l,g),R=(0,a.Z)({},l,{align:Z,color:o,className:x,component:b,gutterBottom:M,noWrap:W,paragraph:k,variant:C,variantMapping:S}),T=b||(k?"p":S[C]||m[C])||"span",N=function(t){var e=t.align,n=t.gutterBottom,r=t.noWrap,a=t.paragraph,o=t.variant,i=t.classes,c={root:["root",o,"inherit"!==t.align&&"align".concat((0,p.Z)(e)),n&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return(0,s.Z)(c,d,i)}(R);return(0,v.jsx)(f,(0,a.Z)({as:T,ref:e,ownerState:R,className:(0,i.Z)(N.root,x)},A))}))},4938:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(885),a=n(2791);var o=function(t){var e=t.controlled,n=t.default,o=(t.name,t.state,a.useRef(void 0!==e).current),i=a.useState(n),c=(0,r.Z)(i,2),s=c[0],l=c[1];return[o?e:s,a.useCallback((function(t){o||l(t)}),[])]}},6598:function(t,e,n){var r=(0,n(5950).Z)();e.Z=r},3457:function(t,e,n){var r=(0,n(4046).ZP)();e.Z=r}}]);
//# sourceMappingURL=746.683306a5.chunk.js.map