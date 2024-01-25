"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[5353],{1429:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(5893),n=t(1151);const i={title:"Submit Operator",description:"How to submit your operatir to the validator registry",sidebar_position:3},a="Submit Operator",s={id:"sentinelguides/validator/restake/submit-operator",title:"Submit Operator",description:"How to submit your operatir to the validator registry",source:"@site/docs/sentinelguides/validator/restake/submit-operator.md",sourceDirName:"sentinelguides/validator/restake",slug:"/sentinelguides/validator/restake/submit-operator",permalink:"/docs/sentinelguides/validator/restake/submit-operator",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Submit Operator",description:"How to submit your operatir to the validator registry",sidebar_position:3},sidebar:"validatorSidebar",previous:{title:"Setup & Configuration",permalink:"/docs/sentinelguides/validator/restake/setup-config"},next:{title:"Cosmovisor",permalink:"/docs/category/cosmovisor-1"}},d={},l=[{value:"Fork and clone the Validator Registry",id:"fork-and-clone-the-validator-registry",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"submit-operator",children:"Submit Operator"}),"\n",(0,o.jsxs)(r.p,{children:["The REStake bot will automatically re-stake your rewards. To do this, you need to submit your operator address to the ",(0,o.jsx)(r.a,{href:"https://github.com/eco-stake/validator-registry",children:"Validator Registry"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"fork-and-clone-the-validator-registry",children:"Fork and clone the Validator Registry"}),"\n",(0,o.jsx)(r.p,{children:"Update the Validator Registry to include your operator data for auto-compounding on any desired networks."}),"\n",(0,o.jsxs)(r.p,{children:["Fork the ",(0,o.jsx)(r.a,{href:"https://github.com/eco-stake/validator-registry",children:"Validator Registry"})," repository."]}),"\n",(0,o.jsx)(r.p,{children:"Clone the Validator Registry repository fork."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"git clone https://github.com/<your-github-user-name>/\nrestake-validator-registry\n"})}),"\n",(0,o.jsx)(r.p,{children:"Create a new directory for your validator:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"mkdir <your-validator-name>\ncd <your-validator-name>\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Create the file ",(0,o.jsx)(r.code,{children:"chain.json"})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"sudo nano chains.json\n"})}),"\n",(0,o.jsx)(r.p,{children:"Add the following block"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"chains.json"}),(0,o.jsx)("p",{children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:'{\n  "$schema": "../chains.schema.json",\n  "name": "<your_validator_name>",\n  "chains": [\n    {\n      "name": "sentinel",\n      "address": "<your_validator_sentvaloper_address>",\n      "restake": {\n        "address": "<your_restake_operator_address>",\n        "run_time": "every 1 hour",\n        "minimum_reward": 1000000\n      }\n    }\n  ]\n}\n'})})})]}),"\n",(0,o.jsxs)(r.p,{children:["Create the file ",(0,o.jsx)(r.code,{children:"profile.json"})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"sudo nano profile.json\n"})}),"\n",(0,o.jsx)(r.p,{children:"Add the following block"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"profile.json"}),(0,o.jsx)("p",{children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:'{\n  "$schema": "../profile.schema.json",\n  "name": "<your_validator_name>",\n  "identity": "<your_16_digit_keybase_identity>"\n}\n'})})})]}),"\n",(0,o.jsx)(r.p,{children:"Push to the origin and create a pull request adding a commit message"})]})}function u(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>a});var o=t(7294);const n={},i=o.createContext(n);function a(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);