"use strict";(self.webpackChunkredo_dev=self.webpackChunkredo_dev||[]).push([[310],{8044:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>d});var r=n(9231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,y=u["".concat(c,".").concat(d)]||u[d]||l[d]||a;return n?r.createElement(y,i(i({ref:t},f),{},{components:n})):r.createElement(y,i({ref:t},f))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>y,toc:()=>D});var r=n(8044),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&f(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&f(e,n,t[n]);return e};const u={},d="Root",y={unversionedId:"api/Root",id:"version-2.0.10-alpha/api/Root",title:"Root",description:"tags",source:"@site/type_versioned_docs/version-2.0.10-alpha/api/Root.md",sourceDirName:"api",slug:"/api/Root",permalink:"/type/api/Root",draft:!1,tags:[],version:"2.0.10-alpha",frontMatter:{}},b={},D=[{value:"tags",id:"tags",level:2},{value:"text",id:"text",level:2}],m={toc:D};function g(e){var t,n=e,{components:o}=n,f=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=l(l({},m),f),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",l({},{id:"root"}),"Root"),(0,r.kt)("h2",l({},{id:"tags"}),"tags"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-ts"}),"undefined\n")),(0,r.kt)("h2",l({},{id:"text"}),"text"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-ts"}),'export declare namespace Root {\n    export type Validate<Def, Dict> = Def extends []\n        ? Def\n        : Def extends string\n        ? Str.Validate<Def, Dict>\n        : Def extends BadDefinitionType\n        ? BadDefinitionTypeMessage\n        : Obj.Validate<Def, Dict>\n    export type Parse<Def, Dict> = unknown extends Def\n        ? Def\n        : Def extends string\n        ? Str.Parse<Def, Dict>\n        : Obj.Parse<Def, Dict>\n    export type Infer<\n        Def,\n        Ctx extends Base.InferenceContext\n    > = unknown extends Def\n        ? Def\n        : Def extends string\n        ? Str.Infer<Def, Ctx>\n        : Obj.Infer<Def, Ctx>\n    export type References<\n        Def,\n        Dict,\n        PreserveStructure extends boolean\n    > = Def extends string\n        ? Str.References<Def, Dict>\n        : Obj.References<Def, Dict, PreserveStructure>\n    export type BadDefinitionType =\n        | undefined\n        | null\n        | boolean\n        | number\n        | bigint\n        | Function\n        | symbol\n    const badDefinitionTypeMessage =\n        "Type definitions must be strings or objects."\n    type BadDefinitionTypeMessage = typeof badDefinitionTypeMessage\n    export const parse: Base.parseFn<unknown>\n    export {}\n}\n')))}g.isMDXComponent=!0}}]);