"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[3902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,v=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Overview & Setup",description:"What it is, Where to obtain it, and wow to install it",sidebar_position:1},i="Node Spawner",l={unversionedId:"sentinelguides/node/node-spawner/overview",id:"sentinelguides/node/node-spawner/overview",title:"Overview & Setup",description:"What it is, Where to obtain it, and wow to install it",source:"@site/docs/sentinelguides/node/node-spawner/overview.md",sourceDirName:"sentinelguides/node/node-spawner",slug:"/sentinelguides/node/node-spawner/overview",permalink:"/docs/sentinelguides/node/node-spawner/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/node/node-spawner/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview & Setup",description:"What it is, Where to obtain it, and wow to install it",sidebar_position:1},sidebar:"nodeSidebar",previous:{title:"Node Spawner",permalink:"/docs/category/node-spawner"},next:{title:"Add Servers",permalink:"/docs/sentinelguides/node/node-spawner/add-servers"}},s={},p=[],d={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-spawner"},"Node Spawner"),(0,a.kt)("p",null,"Node Spawner is an intuitive web interface designed for hosting Sentinel dVPN nodes, whether local or remote, developed by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Tkd-Alex"},"TkdAlex"),", a dedicated community member and a core contributor to the Meile project."),(0,a.kt)("p",null,"You can find the latest release on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Tkd-Alex/dvpn-node-spawner"},"GitHub"),"."),(0,a.kt)("h1",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Python 3.10 or above")),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Clone the repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Tkd-Alex/dvpn-node-spawner.git\n")),(0,a.kt)("p",null,"Go into the folder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd dvpn-node-spawner\n")),(0,a.kt)("p",null,"Create and activate a virtual enviroinment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python -m venv venv\nsource venv/bin/activate\n")),(0,a.kt)("p",null,"Upgrade pip (if required) and install the requirements"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade pip\npip install -r requirements.txt\n")),(0,a.kt)("p",null,"Execute the script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py\n")),(0,a.kt)("p",null,"You will be guided through the process of setting up your local server:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Local sever fields"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[?] Listen address: 127.0.0.1\n[?] Listen port: 3845\n[?] Would do you like to configure a simple authentication? (Y/n) (True): y\n\n[?] Please provide a username: admin\n[?] Please provide a password: **********\n[?] Please type the password again: **********\n")))),(0,a.kt)("p",null,"You will receive the following output, confirming that your local server is now prepared."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," * Serving Flask app 'main'\n * Debug mode: on\nWARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.\n * Running on http://127.0.0.1:3845\nPress CTRL+C to quit\n * Restarting with stat\n * Debugger is active!\n * Debugger PIN: XXX-XXX-XXX\n")))),(0,a.kt)("p",null,"Sure, here's a corrected and improved version of your sentence:"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:3845")," and enter your chosen username and password."),(0,a.kt)("p",null,"You will be taken to Node Spawner dashboard"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7238).Z,width:"748",height:"371"})),(0,a.kt)("p",null,"You are now ready to proceed with the node installation!"))}c.isMDXComponent=!0},7238:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dashboard-1-9a75f9dc257898c309009182be4156fe.png"}}]);