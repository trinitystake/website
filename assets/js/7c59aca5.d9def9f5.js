"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[8222],{5875:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=t(5893),n=t(1151);const a={title:"Create New User",sidebar_position:2},i="Create New User",o={id:"validator/server-setup/create-user",title:"Create New User",description:"Creating a new user is crucial because you should avoid managing your validator under the root user account.",source:"@site/docs/validator/server-setup/create-user.md",sourceDirName:"validator/server-setup",slug:"/validator/server-setup/create-user",permalink:"/docs/validator/server-setup/create-user",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Create New User",sidebar_position:2},sidebar:"validatorSidebar",previous:{title:"Requirements",permalink:"/docs/validator/server-setup/requirements"},next:{title:"SSH",permalink:"/docs/validator/server-setup/ssh"}},c={},d=[];function l(e){const r={code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"create-new-user",children:"Create New User"}),"\n",(0,s.jsxs)(r.p,{children:["Creating a new user is crucial because you should avoid managing your validator under the root user account.\nOur user will be named ",(0,s.jsx)(r.code,{children:"sentinel"}),", and you will be asked to create a new password for this user."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"adduser sentinel\n"})}),"\n",(0,s.jsx)(r.p,{children:"Grant sudo access to sentinel user. Open the sudoers file"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"nano /etc/sudoers\n"})}),"\n",(0,s.jsx)(r.p,{children:"Add the following line"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:'title="/etc/sudoers"',children:"sentinel ALL=(ALL:ALL) ALL\n"})}),"\n",(0,s.jsx)(r.p,{children:"Switch to the newly created user"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"su - sentinel\n"})})]})}function u(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>i});var s=t(7294);const n={},a=s.createContext(n);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);