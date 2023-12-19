"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[7182],{4297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(5893),r=t(1151);const o={title:"Tendermint Internal Metrics",sidebar_position:2},s="Tendermint Internal Metrics",a={id:"sentinelguides/monitoring/exporters/tendermint-internal-metrics",title:"Tendermint Internal Metrics",description:"Validator Machine",source:"@site/docs/sentinelguides/monitoring/exporters/tendermint-internal-metrics.md",sourceDirName:"sentinelguides/monitoring/exporters",slug:"/sentinelguides/monitoring/exporters/tendermint-internal-metrics",permalink:"/docs/sentinelguides/monitoring/exporters/tendermint-internal-metrics",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Tendermint Internal Metrics",sidebar_position:2},sidebar:"monitoringSidebar",previous:{title:"Node Exporter",permalink:"/docs/sentinelguides/monitoring/exporters/node-exporter"},next:{title:"Cosmos Validator Exporter",permalink:"/docs/sentinelguides/monitoring/exporters/cosmos-validator-exporter"}},l={},c=[{value:"Validator Machine",id:"validator-machine",level:2},{value:"Monitoring Machine",id:"monitoring-machine",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tendermint-internal-metrics",children:"Tendermint Internal Metrics"}),"\n",(0,i.jsx)(n.h2,{id:"validator-machine",children:"Validator Machine"}),"\n",(0,i.jsx)(n.p,{children:"Execute the following operations on your validator machine"}),"\n",(0,i.jsxs)(n.p,{children:["Tendermint Internal Metrics can be enabled by simply editing your validator ",(0,i.jsx)(n.code,{children:"config.toml"})," file."]}),"\n",(0,i.jsx)(n.p,{children:"Open your config file"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo nano /home/<your-user>/.sentinelhub/config/config.toml\n"})}),"\n",(0,i.jsx)(n.p,{children:"Edit the followinf fields like below"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"prometheus = true\nprometheus_listen_addr = :26660\n"})}),"\n",(0,i.jsx)(n.p,{children:"Save the file and restart your validator"}),"\n",(0,i.jsxs)(n.p,{children:["You can verify that ",(0,i.jsx)(n.code,{children:"metrics"})," are being exported by cURLing the /metrics endpoint:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:26660/metrics\n"})}),"\n",(0,i.jsx)(n.p,{children:"Success! Tendermint Internal Metrics is now exposing metrics that Prometheus can scrape, including a wide variety of system metrics further down in the output."}),"\n",(0,i.jsxs)(n.admonition,{title:"Important",type:"danger",children:[(0,i.jsx)(n.p,{children:"After successfully enabling Tendermint Internal Metrics, the next step is to open port 26660 on your Validator's firewall. This port should be accessible exclusively from your monitoring machine. This action is essential to enable Prometheus to collect data from Tendermint Internal Metrics."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow from monitor_ip to validator_ip port 26660\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"monitoring-machine",children:"Monitoring Machine"}),"\n",(0,i.jsxs)(n.p,{children:["On your monitoring machine, go to your prometheus directory and open your ",(0,i.jsx)(n.code,{children:"prometheus.yml"})," file"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo nano prometheus.yml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add the validator internel metrics job into it, under ",(0,i.jsx)(n.code,{children:"scrape_configs"})," block"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Validator Internal Metrics\n  - job_name: "validator-internal-metrics"\n\u200b\n    # validator ip and port\n    static_configs:\n      - targets: ["validator_ip:26660"]\n'})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);