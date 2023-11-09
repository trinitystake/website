"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[5353],{1429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(5893),o=r(1151);const a={title:"Submit Operator",description:"How to submit your operatir to the validator registry",sidebar_position:3},i="Submit Operator",s={id:"sentinelguides/validator/restake/submit-operator",title:"Submit Operator",description:"How to submit your operatir to the validator registry",source:"@site/docs/sentinelguides/validator/restake/submit-operator.md",sourceDirName:"sentinelguides/validator/restake",slug:"/sentinelguides/validator/restake/submit-operator",permalink:"/docs/sentinelguides/validator/restake/submit-operator",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Submit Operator",description:"How to submit your operatir to the validator registry",sidebar_position:3},sidebar:"validatorSidebar",previous:{title:"Setup & Configuration",permalink:"/docs/sentinelguides/validator/restake/setup-config"},next:{title:"Cosmovisor",permalink:"/docs/category/cosmovisor"}},d={},l=[{value:"Fork and clone the Validator Registry",id:"fork-and-clone-the-validator-registry",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"submit-operator",children:"Submit Operator"}),"\n",(0,n.jsxs)(t.p,{children:["The REStake bot will automatically re-stake your rewards. To do this, you need to submit your operator address to the ",(0,n.jsx)(t.a,{href:"https://github.com/eco-stake/validator-registry",children:"Validator Registry"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"fork-and-clone-the-validator-registry",children:"Fork and clone the Validator Registry"}),"\n",(0,n.jsx)(t.p,{children:"Update the Validator Registry to include your operator data for auto-compounding on any desired networks."}),"\n",(0,n.jsxs)(t.p,{children:["Fork the ",(0,n.jsx)(t.a,{href:"https://github.com/eco-stake/validator-registry",children:"Validator Registry"})," repository."]}),"\n",(0,n.jsx)(t.p,{children:"Clone the Validator Registry repository fork."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/<your-github-user-name>/\nrestake-validator-registry\n"})}),"\n",(0,n.jsx)(t.p,{children:"Create a new directory for your validator:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"mkdir <your-validator-name>\ncd <your-validator-name>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Create the file ",(0,n.jsx)(t.code,{children:"chain.json"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo nano chains.json\n"})}),"\n",(0,n.jsx)(t.p,{children:"Add the following block"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:"title=chains.json",children:'{\n  "$schema": "../chains.schema.json",\n  "name": "<your_validator_name>",\n  "chains": [\n    {\n      "name": "sentinel",\n      "address": "<your_validator_sentvaloper_address>",\n      "restake": {\n        "address": "<your_restake_operator_address>",\n        "run_time": "every 1 hour",\n        "minimum_reward": 1000000\n      }\n    }\n  ]\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Create the file ",(0,n.jsx)(t.code,{children:"profile.json"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo nano profile.json\n"})}),"\n",(0,n.jsx)(t.p,{children:"Add the following block"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:"title=profile.json",children:'{\n  "$schema": "../profile.schema.json",\n  "name": "<your_validator_name>",\n  "identity": "<your_16_digit_keybase_identity>"\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Push to the origin and create a pull request adding a commit message"})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>i});var n=r(7294);const o={},a=n.createContext(o);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);