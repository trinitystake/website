"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[4869],{2636:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=l(5893),t=l(1151);const s={title:"Install Golang",description:"Needed for interacting with and utilizing Sentinel Hub services",sidebar_position:3},i="Install Golang",o={id:"sentinelguides/validator/golang",title:"Install Golang",description:"Needed for interacting with and utilizing Sentinel Hub services",source:"@site/docs/sentinelguides/validator/golang.md",sourceDirName:"sentinelguides/validator",slug:"/sentinelguides/validator/golang",permalink:"/docs/sentinelguides/validator/golang",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Install Golang",description:"Needed for interacting with and utilizing Sentinel Hub services",sidebar_position:3},sidebar:"validatorSidebar",previous:{title:"SSH",permalink:"/docs/sentinelguides/validator/server-setup/ssh"},next:{title:"Install and Configure Full Node",permalink:"/docs/sentinelguides/validator/node-setup"}},r={},d=[{value:"Ubuntu",id:"ubuntu",level:2},{value:"Manually",id:"manually",level:2},{value:"Export Golang environment variables",id:"export-golang-environment-variables",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"install-golang",children:"Install Golang"}),"\n",(0,a.jsx)(n.p,{children:"First of all install some required packages"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install -y curl git jq make unzip\n"})}),"\n",(0,a.jsx)(n.p,{children:"You now have two methods for installing Golang."}),"\n",(0,a.jsx)(n.h2,{id:"ubuntu",children:"Ubuntu"}),"\n",(0,a.jsx)(n.p,{children:"To install Go on Ubuntu, you can easily follow the steps provided."}),"\n",(0,a.jsx)(n.p,{children:"Add the repository"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo add-apt-repository ppa:longsleep/golang-backports\n"})}),"\n",(0,a.jsx)(n.p,{children:"Install Golang"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install -y golang-go\n"})}),"\n",(0,a.jsx)(n.h2,{id:"manually",children:"Manually"}),"\n",(0,a.jsx)(n.p,{children:"This method should work on all Linux systems, although it is intended for more experienced users."}),"\n",(0,a.jsxs)(n.p,{children:["Get a copy of the ",(0,a.jsx)(n.a,{href:"https://go.dev/dl/",children:"last"})," Golang version and unpack it"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd ~ && \\\ncurl -OL https://golang.org/dl/goX.X.X.linux-amd64.tar.gz && \\\ntar -C ${HOME} -xvf goX.X.X.linux-amd64.tar.gz\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Move the extracted go into ",(0,a.jsx)(n.code,{children:"/usr/local/lib/go"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo mv ${HOME}/go /usr/local/lib/go\n"})}),"\n",(0,a.jsx)(n.h2,{id:"export-golang-environment-variables",children:"Export Golang environment variables"}),"\n",(0,a.jsx)(n.p,{children:"Now that you've successfully installed Golang, it's essential to configure its environmental variables."}),"\n",(0,a.jsx)(n.p,{children:"Open the .bashrc file"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nano ${HOME}/.bashrc\n"})}),"\n",(0,a.jsx)(n.p,{children:"Based on your installation type, set the GOROOT environment variable by choosing one of the following lines"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# For Ubuntu installation\nexport GOROOT=/usr/lib/go\n\n# For Manual installation\nexport GOROOT=/usr/local/lib/go\n"})}),"\n",(0,a.jsx)(n.p,{children:"After setting the appropriate GOROOT environment variable, you can add the following lines"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="${HOME}/.bashrc"',children:"export GOPATH=${HOME}/go\nexport GOBIN=${GOPATH}/bin\nexport PATH=${PATH}:${GOROOT}/bin:${GOBIN}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Source the file to reflect changes in the current Terminal session."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"source ${HOME}/.bashrc\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>i});var a=l(7294);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);