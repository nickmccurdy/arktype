"use strict";(self.webpackChunkredo_dev=self.webpackChunkredo_dev||[]).push([[62],{8044:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(9231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},244:(e,n,t)=>{t.d(n,{g:()=>v});var r=t(5712),o=t(9231);const a={user:'import { define } from "./declaration"\n\nexport const userDef = define.user({\n    name: "string",\n    bestFriend: "user?",\n    groups: "group[]"\n})\n',group:'import { define } from "./declaration"\n\nexport const groupDef = define.group({\n    title: "string",\n    members: "user[]"\n})\n'},i={type:"import { type } from \"@re-/type\"\n\n// Define a type...\nexport const user = type({\n    name: \"string\",\n    browser: {\n        kind: \"'chrome'|'firefox'|'safari'\",\n        version: \"number?\"\n    }\n})\n\n// Infer it...\nexport type User = typeof user.infer\n\n// Models can validate your data anytime, anywhere, with the same clarity and precision you expect from TypeScript.\nexport const { errors, data } = user.check({\n    name: \"Dan Abramov\",\n    browser: {\n        kind: \"Internet Explorer\" // R.I.P.\n    }\n})\n\nif (errors) {\n    // \"At path browser, 'Internet Explorer' is not assignable to any of 'chrome'|'firefox'|'other'|null.\"\n    console.log(errors.summary)\n}\n",space:'import { space } from "@re-/type"\n\n// Spaces are collections of models that can reference each other.\nexport const models = space({\n    package: {\n        name: "string",\n        dependencies: "package[]",\n        contributors: "contributor[]"\n    },\n    contributor: {\n        // Subtypes like \'email\' are inferred like \'string\' but provide additional validation at runtime.\n        email: "email",\n        packages: "package[]?"\n    }\n})\n\n// Cyclic models are inferred to arbitrary depth...\nexport type Package = typeof models.package.infer\n\n// And can validate cyclic data.\nexport const readPackageData = () => ({\n    name: "@re-/type",\n    dependencies: [{ name: "@re-/tools", dependencies: [] }],\n    contributors: [{ email: "david@redodev" }]\n})\n\n// `Encountered errors at the following paths:\n//   dependencies/0/contributors: Required value of type contributor[] was missing.\n//   contributors/0/email: "david@redodev" is not assignable to email.`\nexport const { errors } = models.package.check(readPackageData())\n',constraints:"import { type } from \"@re-/type\"\n\nconst employee = type({\n    // Not a fan of regex? Don't worry, 'email' is a builtin type :)\n    email: `/[a-z]*@redo.dev/`,\n    about: {\n        // Single or double bound numeric types\n        age: \"18<=integer<125\",\n        // Or string lengths\n        bio: \"string<=80\"\n    }\n})\n\n// Subtypes like 'email' and 'integer' become 'string' and 'number'\ntype Employee = typeof employee.infer\n\nexport const fetchEmployee = () => {\n    return {\n        email: \"david@redo.biz\",\n        about: {\n            age: 17,\n            bio: \"I am very interesting.\".repeat(5)\n        }\n    }\n}\n// The error messages are so nice you might be tempted to break your code more often ;)\nexport const { errors } = employee.check(fetchEmployee())\n\n// Output: \"Encountered errors at the following paths:\n// {\n//   email: ''david@redo.biz' is not assignable to /[a-z]*@redo.dev/.',\n//   about/age: '17 was less than 18.',\n//   about/bio: ''I am very interesting.I am very interesting.I am... was greater than 80 characters.'\n// }\"\nconsole.log(errors?.summary ?? \"Flawless. Obviously.\")\n",declaration:'import { declare } from "@re-/type"\n\n// Declare the models you will define\nexport const { define, compile } = declare("user", "group")\n\nimport { groupDef } from "./group"\nimport { userDef } from "./user"\n\n// Creates your space (or tells you which definition you forgot to include)\nexport const mySpace = compile({ ...userDef, ...groupDef })\n\n// Mouse over "Group" to see the inferred type...\nexport type Group = typeof mySpace.group.infer\n\nexport const fetchGroupData = () => {\n    return {\n        title: "Type Enjoyers",\n        members: [\n            {\n                name: "Devin Aldai",\n                grapes: []\n            }\n        ]\n    }\n}\n\n// Try changing the definitions in "group.ts"/"user.ts" or the data in "fetchGroupData"!\nexport const { errors: error } = mySpace.group.check(fetchGroupData())\n'},p={"index.html":'<head>\n    <link href="http://fonts.cdnfonts.com/css/cascadia-code" rel="stylesheet" />\n</head>\n<div id="demo">\n    <div id="input">\n        <div class="section">\n            <h3>Definition</h3>\n            <div class="card">\n                <pre><code id="definition"></code></pre>\n            </div>\n        </div>\n        <div class="section">\n            <h3>Data</h3>\n            <div class="card">\n                <pre id="data"></pre>\n            </div>\n        </div>\n    </div>\n    <div class="section">\n        <h3>Result</h3>\n        <div class="card">\n            <p id="result"></p>\n        </div>\n    </div>\n</div>\n',"demo.css":'body {\n    font-family: "Cascadia Code", sans-serif;\n    background-color: hsl(220 18% 10%);\n}\n\n#demo {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    margin: -8px;\n    padding: 8px;\n}\n\n#input {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 8px;\n}\n\n.section {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    gap: 8px;\n}\n\n.card {\n    padding: 8px;\n    background-color: rgb(18, 18, 18);\n    color: rgb(255, 255, 255);\n    /* transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */\n    border-radius: 4px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,\n        rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;\n    background-image: linear-gradient(\n        rgba(255, 255, 255, 0.05),\n        rgba(255, 255, 255, 0.05)\n    );\n    height: 100%;\n}\n\np {\n    white-space: pre-wrap;\n}\n\npre {\n    white-space: pre-wrap;\n}\n\nh3 {\n    margin: 0px;\n    color: #fff;\n}\n\n.key {\n    color: #264bcf;\n}\n.val {\n    color: #ffc40c;\n}\n',"populateDemo.ts":'import "./demo.css";\nexport const populateDemo = ({ data, definition, error }) => {\n  const defElement = document.querySelector("#definition");\n  defElement.textContent = JSON.stringify(definition, null, 2);\n  defElement.innerHTML = recolor(defElement.innerHTML);\n  const dataElement = document.querySelector("#data");\n  dataElement.textContent = JSON.stringify(data, null, 2);\n  dataElement.innerHTML = recolor(dataElement.innerHTML);\n  document.querySelector("#result").textContent = error != null ? error : "Looks good!";\n};\nfunction recolor(input) {\n  const lines = input.split("\\n");\n  const fixedInput = [];\n  for (const line of lines) {\n    if (line.includes(":")) {\n      const parts = line.split(":");\n      fixedInput.push(`${buildKey(parts[0])}: ${buildVal(parts[1])}`);\n    } else {\n      fixedInput.push(line);\n    }\n  }\n  return fixedInput.join("\\n");\n}\nfunction buildKey(key) {\n  return `<span class=\'key\'>${key}</span>`;\n}\nfunction buildVal(val) {\n  const formatted = val.trim();\n  if (formatted.at(-1) === ",") {\n    return `<span class=\'val\'>${formatted.replace(",", "")}</span>,`;\n  } else if (formatted.at(-1) === "{") {\n    return "{";\n  }\n  return `<span class=\'val\'>${formatted}</span>`;\n}\n',"tsconfig.json":JSON.stringify({compilerOptions:{module:"esnext",target:"esnext",strict:!0}},null,4)};var s=t(9672);const l="re-type-demo",c=e=>{const n=d[e];return`import {populateDemo} from "./populateDemo"\n${n[0]}\npopulateDemo(${n[1]})`},d={type:['import {fetchUser, error, user} from "./type"',"{data: fetchUser(), error, definition: user.definition}"],space:['import {readPackageData, getValidatedPackageData, redo} from "./space"\nlet error\ntry{\n    getValidatedPackageData()\n}catch(e){\n    error = e\n}',"{data: readPackageData(), definition: redo.inputs.dictionary, error }"],constraints:['import {employee, fetchEmployee, error} from "./constraints"',"{data: fetchEmployee(), definition: employee.definition, error }"],declaration:['import {mySpace, fetchGroupData, error } from "./declaration"',"{data: fetchGroupData(), definition: mySpace.inputs.dictionary, error}"]};var u=Object.defineProperty,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?u(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&g(e,t,n[t]);if(f)for(var t of f(n))y.call(n,t)&&g(e,t,n[t]);return e};const h=e=>{const n={};for(const t of e)n[`${t}.ts`]=a[t];return n},v=({embedId:e,addonFiles:n})=>((0,o.useEffect)((()=>{(({files:e,title:n,description:t,embedId:r})=>{s.Z.embedProject(l,{files:e,title:n,description:t,template:"typescript",dependencies:{"@re-/type":"2.0.6-alpha","@re-/tools":"2.2.1"},settings:{compile:{clearConsole:!1}}},{height:"100%",openFile:`${r}.ts`})})({files:b(b({[`${e}.ts`]:i[e],"index.ts":c(e)},p),h(null!=n?n:[])),title:`${e}`,description:`Demo for ${e}`,embedId:e})}),[]),o.createElement(r.Z,{style:{width:"100%",height:"660px",border:0,marginLeft:-8,marginRight:-8,padding:16,overflow:"hidden",borderRadius:"8px"}},o.createElement("div",{id:l})))},1788:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>m,default:()=>v,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var r=t(8044),o=t(244),a=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&d(e,t,n[t]);if(s)for(var t of s(n))c.call(n,t)&&d(e,t,n[t]);return e};const f={id:"intro",hide_table_of_contents:!0},m="@re-/type",y={unversionedId:"intro",id:"version-2.0.6-alpha/intro",title:"@re-/type",description:"Type-first validation from editor to runtime\ud83e\uddec",source:"@site/type_versioned_docs/version-2.0.6-alpha/index.mdx",sourceDirName:".",slug:"/",permalink:"/type/",draft:!1,tags:[],version:"2.0.6-alpha",frontMatter:{id:"intro",hide_table_of_contents:!0},sidebar:"sidebar",next:{title:"Spaces",permalink:"/type/spaces"}},g={},b=[{value:"Installation \ud83d\udce6",id:"installation-",level:2},{value:"Start quick \u23f1\ufe0f",id:"start-quick-\ufe0f",level:2}],h={toc:b};function v(e){var n,t=e,{components:a}=t,d=((e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=u(u({},h),d),i(n,p({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"re-type"}),"@re-/type"),(0,r.kt)("h4",null,(0,r.kt)("i",null,"Type-first validation from editor to runtime\ud83e\uddec")),(0,r.kt)("p",null,"A model is a way to create universal types for your JS/TS values. From one definition, you get all the benefits of ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/microsoft/TypeScript"}),"TypeScript")," in your editor and build and a validator like ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/jquense/yup"}),"Yup")," or ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/sideway/joi"}),"JOI")," at runtime."),(0,r.kt)("h2",u({},{id:"installation-"}),"Installation \ud83d\udce6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install @re-/type")),(0,r.kt)("p",null,"(feel free to substitute ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", et al.)"),(0,r.kt)("p",null,"If you're using TypeScript, you'll need at least ",(0,r.kt)("inlineCode",{parentName:"p"},"4.4"),"."),(0,r.kt)("h2",u({},{id:"start-quick-\ufe0f"}),"Start quick \u23f1\ufe0f"),(0,r.kt)("p",null,"This snippet will give you an idea of ",(0,r.kt)("inlineCode",{parentName:"p"},"@re-/type")," syntax. Try messing around with the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," definition below and see how the type hints help guide you in the right direction."),(0,r.kt)(o.g,{embedId:"type",mdxType:"StackBlitzDemo"}))}v.isMDXComponent=!0}}]);