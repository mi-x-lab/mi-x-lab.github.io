"use strict";(self.webpackChunkmodern_styled_web=self.webpackChunkmodern_styled_web||[]).push([[576],{1547:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=s;var r=m(n(6540)),a=n(4794),c=m(n(5556)),o=n(5642);function m(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){var t=e.to,n=e.title,c=e.children,m=e.className,u=e.stripHash,i=void 0!==u&&u,s=e.gatsbyLinkProps,d=void 0===s?{}:s,f=e.onAnchorLinkClick,b=i?o.handleStrippedLinkClick:o.handleLinkClick,p=l(l({},d),{},{to:i?(0,o.stripHashedLocation)(t):t,onClick:function(e){return b(t,e,f)}});return n&&(p.title=n),m&&(p.className=m),r.default.createElement(a.Link,p,c||n)}s.propTypes={to:c.default.string.isRequired,title:c.default.string,className:c.default.string,stripHash:c.default.bool,gatsbyLinkProps:c.default.object,onAnchorLinkClick:c.default.func,children:c.default.node}},1087:function(e,t,n){Object.defineProperty(t,"M",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n(1547)},3453:function(e,t,n){n.r(t),n.d(t,{Head:function(){return N},default:function(){return j}});var r=n(8453),a=n(6540);function c(e){const t=Object.assign({h1:"h1"},(0,r.R)(),e.components);return a.createElement(t.h1,null,"hello")}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.R)(),e.components);return t?a.createElement(t,e,a.createElement(c,e)):c(e)},m=n(1087),u=n(5760),l=n(158),i=n(4126),s=n(9224),d=n(7528),f=n(4369),b=n(6337);const p={p:f.P,h1:f.H1,strong:f.O,code:f.C},E={p:b.P,h1:b.H1,h2:b.H2,h3:b.H3,h4:b.H4,h5:b.H5,h6:b.H6,thematicBreak:b.xQ,blockquote:b.Cv,ul:b.Ul,ol:b.Ol,li:b.Li,table:b.XI,tr:b.Tr,td:b.Td,th:b.Th,pre:b.AC,code:b.Cy,em:b.Em,strong:b.OH,delete:b.ep,hr:b.Hr,a:b.A,img:b.E9};function x(){return a.createElement("div",{className:l.N_},a.createElement("div",{className:l.E0},a.createElement("a",{href:"/about"},"About")),a.createElement("div",{className:l.E0},a.createElement("a",{href:"/blog"},"Blogs")),a.createElement("div",{className:l.E0},a.createElement("a",{href:"/paper"},"Papers")),a.createElement("div",{className:l.E0},a.createElement("a",{href:"/about"},"Tags")))}function g(e){let{data:t,children:n}=e;return"blog"===t.mdx.frontmatter.type?a.createElement("div",{className:i.zz},a.createElement("div",{className:i.aP},a.createElement("div",{className:i.F6},a.createElement("h1",null,t.mdx.frontmatter.title),a.createElement("p",null,t.mdx.frontmatter.date),a.createElement("hr",{className:i.Yj})),a.createElement(r.x,{components:p},n))):a.createElement("div",{className:s.zz},a.createElement("div",{className:s.aP},a.createElement("div",{className:s.F6},a.createElement("h1",null,t.mdx.frontmatter.title),a.createElement("p",null,t.mdx.frontmatter.date),a.createElement("hr",{className:i.Yj})),a.createElement(r.x,{components:E},n)))}function h(e){let{data:t}=e;const n=t.mdx.tableOfContents.items;return"blog"===t.mdx.frontmatter.type?a.createElement("div",{className:i.sF}):a.createElement("div",{className:s.sF},a.createElement("h1",null,"Contents"),a.createElement("ul",null,n.map(((e,t)=>a.createElement("li",{key:t},a.createElement(m.M,{to:e.url},e.title))))))}const O=e=>{let{data:t,children:n}=e;return a.createElement("div",{className:u.Z},a.createElement(x),a.createElement(g,{data:t,children:n}),a.createElement(h,{data:t}))};function j(e){return a.createElement(O,e,a.createElement(o,e))}const N=e=>{let{data:t}=e;return a.createElement(d.A,{title:t.mdx.frontmatter.title})}},4369:function(e,t,n){n.d(t,{C:function(){return u},H1:function(){return o},O:function(){return m},P:function(){return c}});var r=n(6540),a=n(4126);const c=e=>r.createElement("p",Object.assign({className:a.Q3},e)),o=e=>r.createElement("h1",Object.assign({className:a.LC},e)),m=e=>r.createElement("strong",Object.assign({className:a.Lk},e)),u=e=>r.createElement("code",Object.assign({className:a.Jy},e))},6337:function(e,t,n){n.d(t,{A:function(){return k},AC:function(){return j},Cv:function(){return f},Cy:function(){return N},E9:function(){return C},Em:function(){return P},H1:function(){return o},H2:function(){return m},H3:function(){return u},H4:function(){return l},H5:function(){return i},H6:function(){return s},Hr:function(){return y},Li:function(){return E},OH:function(){return F},Ol:function(){return p},P:function(){return c},Td:function(){return h},Th:function(){return O},Tr:function(){return g},Ul:function(){return b},XI:function(){return x},ep:function(){return v},xQ:function(){return d}});var r=n(6540),a=n(9224);const c=e=>r.createElement("p",Object.assign({className:a.Q3},e)),o=e=>r.createElement("h1",Object.assign({className:a.LC},e)),m=e=>r.createElement("h1",Object.assign({className:a.eB},e)),u=e=>r.createElement("h1",Object.assign({className:a.ZY},e)),l=e=>r.createElement("h1",Object.assign({className:a.eQ},e)),i=e=>r.createElement("h1",Object.assign({className:a.Zb},e)),s=e=>r.createElement("h1",Object.assign({className:a.Sz},e)),d=e=>r.createElement("br",Object.assign({className:a.YE},e)),f=e=>r.createElement("blockquote",Object.assign({className:a.j2},e)),b=e=>r.createElement("ul",Object.assign({className:a.Fu},e)),p=e=>r.createElement("ol",Object.assign({className:a.pP},e)),E=e=>r.createElement("li",Object.assign({className:a.bS},e)),x=e=>r.createElement("table",Object.assign({className:a.Ir},e)),g=e=>r.createElement("tr",Object.assign({className:a.Cj},e)),h=e=>r.createElement("td",Object.assign({className:a.mdxtb},e)),O=e=>r.createElement("th",Object.assign({className:a.oN},e)),j=e=>r.createElement("pre",Object.assign({className:a.vt},e)),N=e=>r.createElement("code",Object.assign({className:a.Jy},e)),P=e=>r.createElement("em",Object.assign({className:a.iH},e)),F=e=>r.createElement("strong",Object.assign({className:a.Lk},e)),v=e=>r.createElement("del",Object.assign({className:a.mdxdel},e)),y=e=>r.createElement("hr",Object.assign({className:a.S$},e)),k=e=>r.createElement("a",Object.assign({className:a.JN},e)),C=e=>r.createElement("img",Object.assign({className:a.pR},e))},7528:function(e,t,n){var r=n(6540),a=n(4794);t.A=e=>{let{title:t}=e;const n=(0,a.useStaticQuery)("3159585216");return r.createElement("title",null,t," | ",n.site.siteMetadata.title)}},5760:function(e,t,n){n.d(t,{Z:function(){return r}});var r="basic-module--layout--8555c"},158:function(e,t,n){n.d(t,{E0:function(){return o},N_:function(){return c},_:function(){return r},qr:function(){return a}});var r="leftSide-module--footContainer--70905",a="leftSide-module--footer--ecaee",c="leftSide-module--leftArea--92bab",o="leftSide-module--leftAreaItem--b87f7"},4126:function(e,t,n){n.d(t,{F6:function(){return r},Jy:function(){return m},LC:function(){return u},Lk:function(){return i},Q3:function(){return l},Yj:function(){return a},aP:function(){return o},sF:function(){return s},zz:function(){return c}});var r="mdxBlogFormat-module--blogInfo--e6cd1",a="mdxBlogFormat-module--boldHr--30dae",c="mdxBlogFormat-module--centerArea--46649",o="mdxBlogFormat-module--centerAreaContent--f6a7c",m="mdxBlogFormat-module--mdxcode--71d8f",u="mdxBlogFormat-module--mdxh1--b3923",l="mdxBlogFormat-module--mdxp--41d2c",i="mdxBlogFormat-module--mdxstrong--abe81",s="mdxBlogFormat-module--rightArea--064cf"},9224:function(e,t,n){n.d(t,{Cj:function(){return k},F6:function(){return r},Fu:function(){return C},Ir:function(){return F},JN:function(){return m},Jy:function(){return l},LC:function(){return s},Lk:function(){return P},Q3:function(){return j},S$:function(){return x},Sz:function(){return E},YE:function(){return y},ZY:function(){return f},Zb:function(){return p},aP:function(){return c},bS:function(){return h},eB:function(){return d},eQ:function(){return b},hj:function(){return o},iH:function(){return i},j2:function(){return u},oN:function(){return v},pP:function(){return O},pR:function(){return g},sF:function(){return H},vt:function(){return N},zz:function(){return a}});var r="mdxPaperFormat-module--blogInfo--5c8b9",a="mdxPaperFormat-module--centerArea--49998",c="mdxPaperFormat-module--centerAreaContent--cb578",o="mdxPaperFormat-module--imageStyle--8ac24",m="mdxPaperFormat-module--mdxa--2b481",u="mdxPaperFormat-module--mdxblockquote--492c8",l="mdxPaperFormat-module--mdxcode--2ba70",i="mdxPaperFormat-module--mdxem--483d5",s="mdxPaperFormat-module--mdxh1--599f9",d="mdxPaperFormat-module--mdxh2--5b96d",f="mdxPaperFormat-module--mdxh3--8ede9",b="mdxPaperFormat-module--mdxh4--ff3c8",p="mdxPaperFormat-module--mdxh5--70484",E="mdxPaperFormat-module--mdxh6--88388",x="mdxPaperFormat-module--mdxhr--149a8",g="mdxPaperFormat-module--mdximg--2cf7e",h="mdxPaperFormat-module--mdxli--f356a",O="mdxPaperFormat-module--mdxol--16550",j="mdxPaperFormat-module--mdxp--b4664",N="mdxPaperFormat-module--mdxpre--4c18b",P="mdxPaperFormat-module--mdxstrong--b0f82",F="mdxPaperFormat-module--mdxtable--2e247",v="mdxPaperFormat-module--mdxth--076bf",y="mdxPaperFormat-module--mdxthematicBreak--eb429",k="mdxPaperFormat-module--mdxtr--f38a7",C="mdxPaperFormat-module--mdxul--367f8",H="mdxPaperFormat-module--rightArea--9ce8a"},8453:function(e,t,n){n.d(t,{R:function(){return o},x:function(){return m}});var r=n(6540);const a={},c=r.createContext(a);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function m(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-posts-blog-hello-mdx-88a66f804c50759d2c83.js.map