"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[16],{2653:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var o=s(5893),r=s(1151);const t={title:"Add Servers",description:"How to add servers to the dashboard",sidebar_position:2},i="Add your Servers",d={id:"monitoring/node/methods/node-spawner/add-servers",title:"Add Servers",description:"How to add servers to the dashboard",source:"@site/docs/monitoring/node/methods/node-spawner/add-servers.md",sourceDirName:"monitoring/node/methods/node-spawner",slug:"/monitoring/node/methods/node-spawner/add-servers",permalink:"/docs/monitoring/node/methods/node-spawner/add-servers",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Add Servers",description:"How to add servers to the dashboard",sidebar_position:2},sidebar:"monitoringSidebar",previous:{title:"Overview & Setup",permalink:"/docs/monitoring/node/methods/node-spawner/overview"},next:{title:"Node Setup",permalink:"/docs/monitoring/node/methods/node-spawner/node-setup"}},a={},c=[{value:"Local",id:"local",level:2},{value:"Remote",id:"remote",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"add-your-servers",children:"Add your Servers"}),"\n",(0,o.jsx)(n.p,{children:"You can utilize Node Spawner to integrate both local and remote servers, including those hosted on Virtual Private Servers (VPS), to enhance your convenience."}),"\n",(0,o.jsx)(n.h2,{id:"local",children:"Local"}),"\n",(0,o.jsx)(n.p,{children:"To begin, we should verify whether the SSH service is enabled."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status sshd.service\n"})}),"\n",(0,o.jsx)(n.p,{children:"If it is not enabled, we'll proceed to enable it."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable sshd.service\n"})}),"\n",(0,o.jsx)(n.p,{children:"From the dashboard insert:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Host: 127.0.0.1"}),"\n",(0,o.jsxs)(n.li,{children:["Username: ",(0,o.jsx)(n.code,{children:"your-username"})]}),"\n",(0,o.jsxs)(n.li,{children:["Password: ",(0,o.jsx)(n.code,{children:"your-password"})]}),"\n",(0,o.jsx)(n.li,{children:"Port: 22"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(3668).Z+"",width:"792",height:"362"})}),"\n",(0,o.jsx)(n.p,{children:"Your node has been added to the node list. To access it, simply click on the icon to the right, which features a square box with an upward arrow. This action will open the installation and configuration screen for your convenience."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(639).Z+"",width:"739",height:"299"})}),"\n",(0,o.jsx)(n.h2,{id:"remote",children:"Remote"}),"\n",(0,o.jsx)(n.p,{children:"The process remains identical; the only distinction is that you need to input the IP address of your remote machine and establish an SSH connection, which, of course, must be enabled."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},3668:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/dashboard-2-312a752a749be16559afcda05eabe118.png"},639:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/dashboard-3-6ce0c20e03be646de7fe2351aad90105.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>i});var o=s(7294);const r={},t=o.createContext(r);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);