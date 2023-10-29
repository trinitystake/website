"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[2227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,g=u["".concat(d,".").concat(f)]||u[f]||p[f]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={title:"Node Setup",description:"The node installation procedure",sidebar_position:3},a="Node Setup",s={unversionedId:"sentinelguides/node/node-spawner/node-setup",id:"sentinelguides/node/node-spawner/node-setup",title:"Node Setup",description:"The node installation procedure",source:"@site/docs/sentinelguides/node/node-spawner/node-setup.md",sourceDirName:"sentinelguides/node/node-spawner",slug:"/sentinelguides/node/node-spawner/node-setup",permalink:"/docs/sentinelguides/node/node-spawner/node-setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/node/node-spawner/node-setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Node Setup",description:"The node installation procedure",sidebar_position:3},sidebar:"nodeSidebar",previous:{title:"Add Servers",permalink:"/docs/sentinelguides/node/node-spawner/add-servers"}},d={},l=[],c={toc:l},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-setup"},"Node Setup"),(0,r.kt)("p",null,"Here, you can complete the following steps to set up your dvpn node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install dVPN Node Requirements: Begin by installing the necessary requirements for dVPN Node."),(0,r.kt)("li",{parentName:"ul"},"Download the Docker Image: Next, download the Docker image required for dVPN Node."),(0,r.kt)("li",{parentName:"ul"},"Customize dVPN Node Configuration: Tailor the DVPN node software to your specific preferences by configuring it to suit your needs."),(0,r.kt)("li",{parentName:"ul"},"Launch Your dVPN Node: Finally, start your DVPN node and enjoy secure and private networking.")),(0,r.kt)("p",null,"Non-clickable buttons indicate that you have met the required criteria."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3119).Z,width:"815",height:"354"})),(0,r.kt)("p",null,"Now, let's retrieve the image from Docker Hub. You should see this output once the process is complete."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9542).Z,width:"815",height:"354"})),(0,r.kt)("p",null,"In the image below, you will find the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," configuration file, which you can edit to your liking.\nPlease refer to manual ",(0,r.kt)("a",{parentName:"p",href:"/docs/sentinelguides/node/manual/node-config"},"node configuration")," to edit the fields."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4492).Z,width:"679",height:"883"})),(0,r.kt)("p",null,"If you have not added your wallet for recovery, a new one will be created and displayed to you. Please make sure to take note of your mnemonic, operator address, and node address, and don't forget to add a sufficient amount of DVPN to initiate the node."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7382).Z,width:"1145",height:"599"})),(0,r.kt)("p",null,'You are now prepared to launch your node. Once you click the "Spawn new node" button, your node will promptly appear in the list of containers.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3701).Z,width:"1278",height:"92"})),(0,r.kt)("p",null,"You will receive the following response."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1990).Z,width:"488",height:"174"})),(0,r.kt)("p",null,"After refreshing, you can verify that your node has started correctly and is functioning properly by inspecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node status")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Node logs")," tabs."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4177).Z,width:"994",height:"636"}),"\n",(0,r.kt)("img",{src:n(9181).Z,width:"994",height:"600"})),(0,r.kt)("p",null,"Enjoy your Sentinel dVPN Node!"))}p.isMDXComponent=!0},3119:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-setup-1-a18bb02fb3421e994fd474ecc05d4e5c.png"},9542:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-setup-2-893a65f5cdb5747ef2f1cb5c027c2c14.png"},4492:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-setup-3-fcbc58fe0800187294b01bf057180e1c.png"},7382:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-setup-4-2c627bcfec80b7295a67f3c7d29e5617.png"},3701:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-setup-5-59d00052166498009faf3fd1d1d304d2.png"},1990:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-setup-6-ee1d0b6e7b0130a7b2fdc8a55624913a.png"},4177:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-setup-7-6d18751bb6636cb27d7cc99400ac9f49.png"},9181:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-setup-8-1b10bc27f1090dcd7fec3b8eed9d1bf7.png"}}]);