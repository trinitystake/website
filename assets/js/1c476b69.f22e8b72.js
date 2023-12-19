"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[1518],{2344:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(5893),o=t(1151);const i={title:"Node Exporter",sidebar_position:1},s="Node Exporter",a={id:"sentinelguides/monitoring/exporters/node-exporter",title:"Node Exporter",description:"Node Exporter is an agent that runs on the machine that is to be monitored. It collects various system-level metrics, such as CPU usage, memory usage, disk usage, network activity, and others.",source:"@site/docs/sentinelguides/monitoring/exporters/node-exporter.md",sourceDirName:"sentinelguides/monitoring/exporters",slug:"/sentinelguides/monitoring/exporters/node-exporter",permalink:"/docs/sentinelguides/monitoring/exporters/node-exporter",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Node Exporter",sidebar_position:1},sidebar:"monitoringSidebar",previous:{title:"Overview",permalink:"/docs/sentinelguides/monitoring/"},next:{title:"Tendermint Internal Metrics",permalink:"/docs/sentinelguides/monitoring/exporters/tendermint-internal-metrics"}},d={},l=[{value:"Validator Machine",id:"validator-machine",level:2},{value:"Download &amp; Installation",id:"download--installation",level:3},{value:"Add a system unit file",id:"add-a-system-unit-file",level:3},{value:"Start Node Exporter service",id:"start-node-exporter-service",level:3},{value:"Open Firewall Port",id:"open-firewall-port",level:3},{value:"Monitoring Machine",id:"monitoring-machine",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"node-exporter",children:"Node Exporter"}),"\n",(0,r.jsx)(n.p,{children:"Node Exporter is an agent that runs on the machine that is to be monitored. It collects various system-level metrics, such as CPU usage, memory usage, disk usage, network activity, and others."}),"\n",(0,r.jsx)(n.h2,{id:"validator-machine",children:"Validator Machine"}),"\n",(0,r.jsx)(n.p,{children:"Execute the following operations on your validator machine"}),"\n",(0,r.jsx)(n.h3,{id:"download--installation",children:"Download & Installation"}),"\n",(0,r.jsxs)(n.p,{children:["On both your validator and monitoring machines, download and unpack Node Exporter (check the last version ",(0,r.jsx)(n.a,{href:"https://github.com/prometheus/node_exporter",children:"here"}),")"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/prometheus/node_exporter/releases/download/v1.7.0/node_exporter-1.7.0.linux-amd64.tar.gz\ntar xvfz node_exporter-1.7.0.linux-amd64.tar.gz\nsudo rm -f node_exporter-1.7.0.linux-amd64.tar.gz\nmv node_exporter-1.7.0.linux-amd64/ node-exporter/\ncd node-exporter/\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Add a symbolic link to the ",(0,r.jsx)(n.code,{children:"/usr/local/bin/"})," directory for system-wide access to Node Exporter:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ln -s /home/<your_user>/node-exporter/node-exporter /usr/local/bin/\n"})}),"\n",(0,r.jsx)(n.h3,{id:"add-a-system-unit-file",children:"Add a system unit file"}),"\n",(0,r.jsx)(n.p,{children:"Create the .service file with a text editor"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/node-exporter.service\n"})}),"\n",(0,r.jsx)(n.p,{children:"Paste the below text"}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"cosmos-node-exporter.service"}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="/etc/systemd/system/node-exporter.service"',children:"[Unit]\nDescription=Node Exporter\nAfter=network-online.target\n\u200b\n[Service]\nUser=youruser #modify this field with your user\nTimeoutStartSec=0\nCPUWeight=95\nIOWeight=95\nExecStart=node_exporter\nRestart=always\nRestartSec=2\nLimitNOFILE=800000\nKillSignal=SIGTERM\n\u200b\n[Install]\nWantedBy=multi-user.target\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Reload the systemd Daemon"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,r.jsx)(n.p,{children:"Enable autostart of Node Exporter service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable node-exporter.service\n"})}),"\n",(0,r.jsx)(n.h3,{id:"start-node-exporter-service",children:"Start Node Exporter service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start node-exporter.service\n"})}),"\n",(0,r.jsx)(n.p,{children:"Use this command to check logs in real time"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo journalctl -u node-exporter.service -f --output cat\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Once the Node Exporter is installed and running, you can verify that ",(0,r.jsx)(n.code,{children:"metrics"})," are being exported by cURLing the /metrics endpoint:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:9100/metrics\n"})}),"\n",(0,r.jsx)(n.p,{children:"Success! Node Exporter is now exposing metrics that Prometheus can scrape, including a wide variety of system metrics further down in the output (prefixed with node_). To view those metrics (along with help and type information):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl http://localhost:9100/metrics | grep "node_"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"open-firewall-port",children:"Open Firewall Port"}),"\n",(0,r.jsxs)(n.admonition,{title:"Important",type:"danger",children:[(0,r.jsx)(n.p,{children:"After successfully installing and launching Node Exporter, the next step is to open port 9100 on your Validator's firewall. This port should be accessible exclusively from your monitoring machine. This action is essential to enable Prometheus to collect data from Node Exporter."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow from monitor_ip to validator_ip port 9100\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"monitoring-machine",children:"Monitoring Machine"}),"\n",(0,r.jsxs)(n.p,{children:["On your monitoring machine, go to your prometheus directory and open your ",(0,r.jsx)(n.code,{children:"prometheus.yml"})," file"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo nano prometheus.yml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Add the cosmos node exporter job into it, under ",(0,r.jsx)(n.code,{children:"scrape_configs"})," block"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:' # Validator Host Hardware Metrics\n  - job_name: "validator-hardware-metrics"\n\u200b\n    # validator ip and port\n    static_configs:\n      - targets: ["validator_ip:9100"]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(7294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);