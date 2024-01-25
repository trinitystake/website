"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[620],{1249:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=a(5893),i=a(1151);const o={title:"Become a Validator",description:"How to create the tx to become validator",sidebar_position:6},s="Become a Validator",r={id:"validator/become-validator",title:"Become a Validator",description:"How to create the tx to become validator",source:"@site/docs/validator/become-validator.md",sourceDirName:"validator",slug:"/validator/become-validator",permalink:"/docs/validator/become-validator",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Become a Validator",description:"How to create the tx to become validator",sidebar_position:6},sidebar:"validatorSidebar",previous:{title:"Run the Full Node",permalink:"/docs/validator/node-run"},next:{title:"Other Commands",permalink:"/docs/validator/other-cmd"}},c={},l=[{value:"The <code>--commission</code> flag explained",id:"the---commission-flag-explained",level:3}];function d(e){const t={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"become-a-validator",children:"Become a Validator"}),"\n",(0,n.jsx)(t.p,{children:"A create-validator transaction is a type of transaction used to create a new validator. In this type of transaction, the validator stakes a certain amount of coins as collateral."}),"\n",(0,n.jsx)(t.p,{children:"Add an operator key and take note of the mnemonic key"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'KEY_NAME="validator"\n\u200b\nsentinelhub keys add "${KEY_NAME}"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Make the create-validator transaction"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'CONSENSUS_PUBLIC_KEY=$(sentinelhub tendermint show-validator)\nDELEGATION_AMOUNT="5000000000udvpn"\nMONIKER="Your Validator Name"\n\u200b\nsentinelhub tx staking create-validator \\\n    --broadcast-mode=block \\\n    --min-self-delegation=1 \\\n    --chain-id=sentinelhub-2 \\\n    --commission-max-change-rate=0.01 \\\n    --commission-max-rate=0.2 \\\n    --commission-rate=0.05 \\\n    --gas=500000 \\\n    --gas-prices=0.1udvpn \\\n    --amount=${DELEGATION_AMOUNT} \\\n    --from="${KEY_NAME}" \\\n    --moniker="${MONIKER}" \\\n    --pubkey="${CONSENSUS_PUBLIC_KEY}"\n'})}),"\n",(0,n.jsxs)(t.h3,{id:"the---commission-flag-explained",children:["The ",(0,n.jsx)(t.code,{children:"--commission"})," flag explained"]}),"\n",(0,n.jsx)(t.p,{children:"The commission rate plays a crucial role in the decision-making process when executing the create-validator transaction."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"--commission-rate=0.05"}),": the current commission rate that the validator receives from delegators. In this example it is ",(0,n.jsx)(t.strong,{children:"5%"}),". This value is adjustable in the future."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"--commission-max-change-rate=0.01"}),": the max commission rate a validator can change. In this example it will be ",(0,n.jsx)(t.strong,{children:"1%"})," and it is ",(0,n.jsx)(t.strong,{children:"cannot be changed"})," once set. This means that if a Validator wishes to raise its commissions from 5% to 8% in the future, it can achieve this by making adjustments three times, with a 24-hour interval between each transaction."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"--commission-max-rate=0.2"}),": the max commission rate a validator can set. In this example it will be ",(0,n.jsx)(t.strong,{children:"20%"})," and it ",(0,n.jsx)(t.strong,{children:"cannot be changed"})," once set"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>s});var n=a(7294);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);