"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[4684],{9627:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=a(5893),n=a(1151);const o={title:"Add a Validator Image",description:"How to have your validator image displayed",sidebar_position:13},r="Add a Validator Image",s={id:"validator/image",title:"Add a Validator Image",description:"How to have your validator image displayed",source:"@site/docs/validator/image.md",sourceDirName:"validator",slug:"/validator/image",permalink:"/docs/validator/image",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Add a Validator Image",description:"How to have your validator image displayed",sidebar_position:13},sidebar:"validatorSidebar",previous:{title:"Add RPC to Chain Registry",permalink:"/docs/validator/rpc/chain-registry"},next:{title:"SentinelHub - 2",permalink:"/docs/validator/upgrades/sentinelhub-2"}},l={},d=[{value:"First procedure",id:"first-procedure",level:2},{value:"Second procedure",id:"second-procedure",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"add-a-validator-image",children:"Add a Validator Image"}),"\n",(0,t.jsx)(i.p,{children:"In order to have your validator profile image displayed on the most commonly used Cosmos blockchain explorers, you need to follow two different procedures"}),"\n",(0,t.jsx)(i.h2,{id:"first-procedure",children:"First procedure"}),"\n",(0,t.jsxs)(i.p,{children:["By following this procedure, your validator image will be visible on ",(0,t.jsx)(i.a,{href:"https://wallet.keplr.app/chains/sentinel",children:"Keplr"}),", ",(0,t.jsx)(i.a,{href:"https://ping.pub/sentinel/staking",children:"Ping.pub"}),", ",(0,t.jsx)(i.a,{href:"https://cosmos.directory/sentinel/validators",children:"Cosmos.directory"})," and ",(0,t.jsx)(i.a,{href:"https://atomscan.com/sentinel/validators",children:"ATOMScan"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Firstly, register on ",(0,t.jsx)(i.a,{href:"https://keybase.io/",children:"keybase.io"}),", and create your profile by adding a profile image, which will be used as your validator image. Once your profile is created, access it and you will be prompted to create a PGP key."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://keybase.io/download",children:"Download"})," Keybase onto your machine and follow the installation guide for your operating system."]}),"\n",(0,t.jsxs)(i.p,{children:["Create a PGP key and add it to your keybase profile. Once that is complete, you need to perform what is called an ",(0,t.jsx)(i.code,{children:"Edit Validator Transaction"})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"sentinelhub tx staking edit-validator \\\n    --identity=<your_pgp_key_with_no_spaces> \\\n    --chain-id=sentinelhub-2 \\\n    --gas=500000 \\\n    --gas-prices=0.2udvpn \\\n    --from=<your_key_name>\n"})}),"\n",(0,t.jsx)(i.p,{children:"If you'd like to link your website and add a description of your validator, you have the option to fill out the following two fields"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:'    --website="https://yourwebsite.com" \\\n    --details="These are my validator details"\n'})}),"\n",(0,t.jsx)(i.p,{children:"If the transaction is successful, you will see the edits immediately"}),"\n",(0,t.jsx)(i.h2,{id:"second-procedure",children:"Second procedure"}),"\n",(0,t.jsxs)(i.p,{children:["By following this procedure, your validator image will be visible on ",(0,t.jsx)(i.a,{href:"https://www.mintscan.io/sentinel/validators",children:"Mintscan"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Here's what you'll need:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["A GitHub account with a ",(0,t.jsx)(i.a,{href:"https://github.com/settings/tokens",children:"PAT"})," (Personal Access Token) enabled with all repo scopes"]}),"\n",(0,t.jsxs)(i.li,{children:["Your validator image in the format ",(0,t.jsx)(i.code,{children:"<your_sentval_address>.png"}),"\nGo to ",(0,t.jsx)(i.a,{href:"https://github.com/cosmostation/chainlist",children:"https://github.com/cosmostation/chainlist"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Fork the project"}),"\n",(0,t.jsx)(i.p,{children:"Clone the forked project to your computer"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"git clone https://github.com/cosmostation/chainlist\n"})}),"\n",(0,t.jsx)(i.p,{children:"Navigate to the directory from which you will execute the next commands"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"cd chainlist\n"})}),"\n",(0,t.jsx)(i.p,{children:"Create a new branch named after your validator"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"git branch <your_validator_name>\n"})}),"\n",(0,t.jsx)(i.p,{children:"Checkout to that branch"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"git checkout <your_validator_name>\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Copy your validator image to the folder ",(0,t.jsx)(i.code,{children:"/chainlist/chain/sentinel/moniker/"})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"cp /path/to/your/<your_sentval_address>.png ~/chainlist/chain/sentinel/moniker/\n"})}),"\n",(0,t.jsx)(i.p,{children:"Set the necessary configuration parameters"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:'git config --global user.name "Your Username"\ngit config --global user.email "your.email@example.com"\n'})}),"\n",(0,t.jsx)(i.p,{children:"Set access via your Personal Access Token (PAT)"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"git remote set-url origin https://<your_github_user>:<your_token>@github.com/<your_github_user>chainlist.git\n"})}),"\n",(0,t.jsx)(i.p,{children:"Push your branch to your forked repository"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:'git add .\ngit commit -m "Add <your_validator_name> logo for Sentinel"\ngit push origin <your_validator_name>\n'})}),"\n",(0,t.jsxs)(i.p,{children:["If the command is successful go to ",(0,t.jsx)(i.a,{href:"https://github.com/cosmostation/chainlist",children:"https://github.com/cosmostation/chainlist"})," and create a pull request. Once the pull request is created, wait for some time until your validator image is updated. When the update is complete, the pull request will be closed."]})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,i,a)=>{a.d(i,{Z:()=>s,a:()=>r});var t=a(7294);const n={},o=t.createContext(n);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);