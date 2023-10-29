"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[4456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={title:"Deploy the Node",description:"The steps to deploy your node",sidebar_position:2},a="Deploy the Node",p={unversionedId:"sentinelguides/node/akash/deploy",id:"sentinelguides/node/akash/deploy",title:"Deploy the Node",description:"The steps to deploy your node",source:"@site/docs/sentinelguides/node/akash/deploy.md",sourceDirName:"sentinelguides/node/akash",slug:"/sentinelguides/node/akash/deploy",permalink:"/docs/sentinelguides/node/akash/deploy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/node/akash/deploy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Deploy the Node",description:"The steps to deploy your node",sidebar_position:2},sidebar:"nodeSidebar",previous:{title:"Overview & Requirements",permalink:"/docs/sentinelguides/node/akash/overview"},next:{title:"SSH into the Container",permalink:"/docs/sentinelguides/node/akash/ssh"}},s={},l=[],d={toc:l},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-the-node"},"Deploy the Node"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://deploy.cloudmos.io/"},"https://deploy.cloudmos.io/")),(0,r.kt)("p",null,"On the top-left click on ",(0,r.kt)("inlineCode",{parentName:"p"},"DEPLOY")),(0,r.kt)("p",null,"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Empty")," template"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Empty Template",src:n(791).Z,width:"1192",height:"231"})),(0,r.kt)("p",null,"Edit the content of the following code (make sure you write within the double quotes)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'---\nversion: "2.0"\nendpoints:\n  unique_name_endpoint: # it must be a unique name\n    kind: ip\nservices:\n  app:\n    image:  declab/sentinel_dvpn_ssh:0.7.2\n    \n    env:\n      - "SSH_PASS=" # Your SSH password\n      - "MNEMONIC_BASE64=" # Mnemonic encrypted with BASE64.\n      - "MONIKER=" # Your dVPN node name.\n      - "REMOTE_PORT=8585" # TCP listen port.\n      - "LISTEN_PORT=3333" # V2RAY listen port\n      - "IPV4_ADDRESS=" # Node leased IP address (you will add it later)\n      - "RPC_ADDRESS=https://rpc.sentinel.co:443"\n      - "GIGABYTE_PRICES=29000000udvpn,390000ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,5250000ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,7000000ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,525000000ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783"\n      - "HOURLY_PRICES=4900000udvpn"\n        \n    expose:\n      - port: 8585 # TCP listen port\n        to:\n          - global: true\n            ip: unique_name_endpoint  # Name used in line 3\n      - port: 3333 # V2RAY port\n        to:\n          - global: true\n            ip: unique_name_endpoint  # Name usen in line 3\n      - port: 22 # SSH port\n        to:\n          - global: true\nprofiles:\n  compute:\n    app:\n      resources:\n        cpu:\n          units: 1\n        memory:\n          size: 1Gi\n        storage:\n          size: 10Gi         \n  placement:\n    akash: \n      pricing:\n        app:\n          denom: uakt\n          amount: 100000\ndeployment:\n  app:\n    akash:\n      profile: app\n      count: 1\n')),(0,r.kt)("p",null,"Then paste it into the template board and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE DEPLOYMENT")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Deployment",src:n(5160).Z,width:"1166",height:"510"})),(0,r.kt)("p",null,"You will need to make a ",(0,r.kt)("strong",{parentName:"p"},"5 AKT")," deployment deposit, which will be refunded to you upon closing the deployment."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deposit",src:n(5422).Z,width:"446",height:"359"})),(0,r.kt)("p",null,"Now, wait for bids, select your preferred provider and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCEPT BID")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bids",src:n(2469).Z,width:"1185",height:"326"})),(0,r.kt)("p",null,"Wait for deployment and check the tab EVENTS to see the ",(0,r.kt)("strong",{parentName:"p"},"IP")," that has been ",(0,r.kt)("strong",{parentName:"p"},"assigned!")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Assigned IP",src:n(744).Z,width:"982",height:"489"})),(0,r.kt)("p",null,"Now go on tab ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),", insert your IP into the field ",(0,r.kt)("inlineCode",{parentName:"p"},"IPV4_ADDRESS")," and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE DEPLOYMENT")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Update Deployment",src:n(6305).Z,width:"1163",height:"497"})),(0,r.kt)("p",null,"The node will be redeployed. You can check the LOGS tab as you normally do when installing it manually to verify if it goes online without errors. Alternatively, you can SSH into the container, which is the next step."))}u.isMDXComponent=!0},744:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/assigned-ip-d318b9a2cb281fa048dc3761796b5946.png"},2469:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bids-09478cb228e97a8340821ef416d6c2f6.png"},5160:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/create-deployment-d009674d87d70fb931b301224e8c356e.png"},5422:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/deposit-c485f1443572d989a9df9e04e4bd5f56.png"},791:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/template-72f518247ffd8efe313aa6e84f2c3cf8.png"},6305:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/update-f331489b2162f285c3ee657f269d8abe.png"}}]);