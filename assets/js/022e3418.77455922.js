"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[3611],{8346:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var t=s(5893),i=s(1151);const r={title:"Software upgrade - 5",sidebar_position:6},l="Software upgrade - 5",a={id:"sentinelguides/validator/upgrades/upgrade-5",title:"Software upgrade - 5",description:"At block height 12310005 the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!",source:"@site/docs/sentinelguides/validator/upgrades/upgrade-5.md",sourceDirName:"sentinelguides/validator/upgrades",slug:"/sentinelguides/validator/upgrades/upgrade-5",permalink:"/docs/sentinelguides/validator/upgrades/upgrade-5",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Software upgrade - 5",sidebar_position:6},sidebar:"validatorSidebar",previous:{title:"Software upgrade - 4",permalink:"/docs/sentinelguides/validator/upgrades/upgrade-4"}},d={},o=[{value:"Stop the node",id:"stop-the-node",level:2},{value:"Install the new version",id:"install-the-new-version",level:2},{value:"Start the node",id:"start-the-node",level:2},{value:"In case the upgrade fails",id:"in-case-the-upgrade-fails",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"software-upgrade---5",children:"Software upgrade - 5"}),"\n",(0,t.jsx)(n.admonition,{title:"Warning",type:"danger",children:(0,t.jsxs)(n.p,{children:["At block height ",(0,t.jsx)(n.code,{children:"12310005"})," the Blockchain will stop producing the blocks. Follow the next steps only after the blockchain halt!"]})}),"\n",(0,t.jsx)(n.h2,{id:"stop-the-node",children:"Stop the node"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check the latest block height. It must match with the upgrade height"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl -fsLS http://127.0.0.1:26657/status | jq -r '.result.sync_info.latest_block_height'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Stop the ",(0,t.jsx)(n.code,{children:"sentinelhub"})," process"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install-the-new-version",children:"Install the new version"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make sure you are using Go verion 1.19+"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"go version\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clone the source code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"VERSION=v0.11.2\r\nBASE_DIRECTORY=${GOPATH}/src/github.com/sentinel-official\r\n\r\nrm -rf ${BASE_DIRECTORY}/hub/ && mkdir -p ${BASE_DIRECTORY} && cd ${BASE_DIRECTORY}/ && \\\r\ngit clone https://github.com/sentinel-official/hub.git && cd ${BASE_DIRECTORY}/hub/ && \\\r\ngit checkout ${VERSION}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Build and install the software"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"rm -rf ./vendor && \\\r\nmake install\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"start-the-node",children:"Start the node"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Verify the software version"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sentinelhub version --long\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Commit hash must be ",(0,t.jsx)(n.code,{children:"54c28ae02786b62b25303759da761e5ce1226029"})]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start the ",(0,t.jsx)(n.code,{children:"sentinelhub"})," process"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"in-case-the-upgrade-fails",children:"In case the upgrade fails"}),"\n",(0,t.jsx)(n.admonition,{title:"Warning",type:"danger",children:(0,t.jsx)(n.p,{children:"Follow the next steps in case the upgrade fails!"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install the Sentinel Hub software ",(0,t.jsx)(n.code,{children:"v0.10.1"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Verfiy the software version commit is ",(0,t.jsx)(n.code,{children:"bbe6fab51c81863551a69aeb4977ec4c19fcd60a"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start the ",(0,t.jsx)(n.code,{children:"sentinelhub"})," process with flag ",(0,t.jsx)(n.code,{children:"unsafe-skip-upgrades"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sentinelhub start --unsafe-skip-upgrades 12310005\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>l});var t=s(7294);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);