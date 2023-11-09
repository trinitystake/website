"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[3836],{5871:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(5893),n=s(1151);const r={title:"Cosmos Node Exporter",sidebar_position:4},i="Cosmos Node Exporter",a={id:"sentinelguides/monitoring/exporters/cosmos-node-exporter",title:"Cosmos Node Exporter",description:"Cosmos Node Exporter is a Prometheus scraping tool designed to monitor your node. It enables you to set up alerting for various critical conditions, such as:",source:"@site/docs/sentinelguides/monitoring/exporters/cosmos-node-exporter.md",sourceDirName:"sentinelguides/monitoring/exporters",slug:"/sentinelguides/monitoring/exporters/cosmos-node-exporter",permalink:"/docs/sentinelguides/monitoring/exporters/cosmos-node-exporter",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Cosmos Node Exporter",sidebar_position:4},sidebar:"monitoringSidebar",previous:{title:"Cosmos Validator Exporter",permalink:"/docs/sentinelguides/monitoring/exporters/cosmos-validator-exporter"},next:{title:"Prometheus",permalink:"/docs/sentinelguides/monitoring/prometheus"}},d={},l=[{value:"Download &amp; Installation",id:"download--installation",level:2},{value:"Add a system unit file",id:"add-a-system-unit-file",level:2},{value:"Start Cosmos Node Exporter service",id:"start-cosmos-node-exporter-service",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"cosmos-node-exporter",children:"Cosmos Node Exporter"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://github.com/QuokkaStake/cosmos-node-exporter",children:"Cosmos Node Exporter"})," is a Prometheus scraping tool designed to monitor your node. It enables you to set up alerting for various critical conditions, such as:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Notification for new releases: Receive alerts when your application version doesn't match the latest release on GitHub, keeping you informed about important updates."}),"\n",(0,t.jsx)(o.li,{children:"Voting Power Monitoring: Get alerted if the voting power of your validator node drops to zero, helping you quickly address any issues affecting your node's participation in the network."}),"\n",(0,t.jsx)(o.li,{children:"Node Synchronization: Stay informed about the progress of your node's synchronization, ensuring that it doesn't fall behind and remains up-to-date with the network."}),"\n",(0,t.jsx)(o.li,{children:"Chain Upgrade Readiness: Receive notifications when chain upgrades are available, but your node lacks the necessary binary files, ensuring that your node is always prepared for network upgrades."}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"download--installation",children:"Download & Installation"}),"\n",(0,t.jsxs)(o.p,{children:["To get started, begin by downloading the most recent ",(0,t.jsx)(o.a,{href:"https://github.com/QuokkaStake/cosmos-node-exporter/releases",children:"release"}),". Once the download is complete, proceed to unzip the file, and you'll be all set to proceed."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"mkdir cosmos-node-exporter\ncd cosmos-node-exporter\nwget https://github.com/QuokkaStake/cosmos-node-exporter/releases/download/v2.4.0/cosmos-node-exporter_2.4.0_linux_amd64.tar.gz\ntar xvfz cosmos-node-exporter_2.4.0_linux_amd64.tar.gz\nsudo rm -f cosmos-node-exporter_2.4.0_linux_amd64.tar.gz\n"})}),"\n",(0,t.jsx)(o.h2,{id:"add-a-system-unit-file",children:"Add a system unit file"}),"\n",(0,t.jsx)(o.p,{children:"Create the .service file with a text editor"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/cosmos-node-exporter.service\n"})}),"\n",(0,t.jsx)(o.p,{children:"Paste the below text"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",metastring:"title=/etc/systemd/system/cosmos-node-exporter.service",children:"[Unit]\nDescription=Cosmos Node Exporter\nAfter=network-online.target\n\u200b\n[Service]\nUser=youruser #modify this field with your user\nTimeoutStartSec=0\nCPUWeight=95\nIOWeight=95\nExecStart=/home/<your-user>cosmos-node-exporter/cosmos-node-exporter --config /home/<your-user>cosmos-node-exporter/config.toml\nRestart=always\nRestartSec=2\nLimitNOFILE=800000\nKillSignal=SIGTERM\n\u200b\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,t.jsx)(o.p,{children:"Reload the systemd Daemon"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,t.jsx)(o.p,{children:"Enable autostart of Cosmos Node Exporter service"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo systemctl enable cosmos-node-exporter.service\n"})}),"\n",(0,t.jsx)(o.h2,{id:"start-cosmos-node-exporter-service",children:"Start Cosmos Node Exporter service"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo systemctl start cosmos-node-exporter.service\n"})}),"\n",(0,t.jsx)(o.p,{children:"Use this command to check logs in real time"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo journalctl -u cosmos-node-exporter.service -f --output cat\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Once the Cosmos Node Exporter is installed and running, you can verify that ",(0,t.jsx)(o.code,{children:"metrics"})," are being exported by cURLing the /metrics endpoint:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"curl http://localhost:9500/metrics\n"})}),"\n",(0,t.jsx)(o.p,{children:"Success! Cosmos Node Exporter is now exposing metrics that Prometheus can scrape, including a wide variety of system metrics further down in the output."}),"\n",(0,t.jsxs)(o.admonition,{title:"Important",type:"danger",children:[(0,t.jsx)(o.p,{children:"After successfully installing and launching Cosmos Node Exporter, the next step is to open port 9500 on your Validator's firewall. This port should be accessible exclusively from your monitoring machine. This action is essential to enable Prometheus to collect data from Cosmos Node Exporter."}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"sudo ufw allow from monitor_ip to validator_ip port 9500\n"})})]})]})}function u(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,o,s)=>{s.d(o,{Z:()=>a,a:()=>i});var t=s(7294);const n={},r=t.createContext(n);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);