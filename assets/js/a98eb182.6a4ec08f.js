"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[2923],{1934:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var t=s(5893),i=s(1151);const l={title:"Install Dependencies",description:"Everything you need before installing TMKMS",sidebar_position:2},a="Install Dependencies",d={id:"sentinelguides/validator/tmkms/install-dependencies",title:"Install Dependencies",description:"Everything you need before installing TMKMS",source:"@site/docs/sentinelguides/validator/tmkms/install-dependencies.md",sourceDirName:"sentinelguides/validator/tmkms",slug:"/sentinelguides/validator/tmkms/install-dependencies",permalink:"/docs/sentinelguides/validator/tmkms/install-dependencies",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Install Dependencies",description:"Everything you need before installing TMKMS",sidebar_position:2},sidebar:"validatorSidebar",previous:{title:"Overview",permalink:"/docs/sentinelguides/validator/tmkms/overview"},next:{title:"Setup & Config",permalink:"/docs/sentinelguides/validator/tmkms/setup-config"}},r={},o=[{value:"Install Rust",id:"install-rust",level:3},{value:"Install dependencies",id:"install-dependencies-1",level:3},{value:"Install Libusb",id:"install-libusb",level:3}];function c(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,t.jsx)(n.p,{children:"Start by opening the node you intend to run TMKMS (not the node you validate on) and install the following dependencies"}),"\n",(0,t.jsx)(n.h3,{id:"install-rust",children:"Install Rust"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Source the ",(0,t.jsx)(n.code,{children:"env"})," file"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"source $HOME/.cargo/env\n"})}),"\n",(0,t.jsx)(n.h3,{id:"install-dependencies-1",children:"Install dependencies"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update && \\\nsudo apt install git build-essential ufw curl jq snapd --yes\n"})}),"\n",(0,t.jsx)(n.h3,{id:"install-libusb",children:"Install Libusb"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apt install libusb-1.0-0-dev\n"})}),"\n",(0,t.jsx)(n.p,{children:"If on x86_64 architecture:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export RUSTFLAGS=-Ctarget-feature=+aes,+ssse3\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>a});var t=s(7294);const i={},l=t.createContext(i);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);