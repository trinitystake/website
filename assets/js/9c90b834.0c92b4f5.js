"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[3063],{4274:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=i(5893),t=i(1151);const s={title:"Loki",description:"A central log aggregation system that stores and indexes logs",sidebar_position:2},l="Loki",r={id:"monitoring/logs/loki",title:"Loki",description:"A central log aggregation system that stores and indexes logs",source:"@site/docs/monitoring/logs/loki.md",sourceDirName:"monitoring/logs",slug:"/monitoring/logs/loki",permalink:"/docs/monitoring/logs/loki",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Loki",description:"A central log aggregation system that stores and indexes logs",sidebar_position:2},sidebar:"monitoringSidebar",previous:{title:"Promtail",permalink:"/docs/monitoring/logs/promtail"},next:{title:"Node Setup",permalink:"/docs/category/node-setup"}},a={},c=[{value:"Download &amp; Installation",id:"download--installation",level:2},{value:"Create a Config file",id:"create-a-config-file",level:2},{value:"Add a system unit file",id:"add-a-system-unit-file",level:2},{value:"Start Loki service",id:"start-loki-service",level:2},{value:"Open Firewall Port",id:"open-firewall-port",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"loki",children:"Loki"}),"\n",(0,o.jsx)(n.p,{children:"Loki serves as the core log aggregation system responsible for storing and indexing logs received by Promtail."}),"\n",(0,o.jsx)(n.h2,{id:"download--installation",children:"Download & Installation"}),"\n",(0,o.jsxs)(n.p,{children:["To get started, begin by downloading the most recent ",(0,o.jsx)(n.a,{href:"https://github.com/grafana/loki/releases",children:"release"}),". Make sure to download the file ",(0,o.jsx)(n.code,{children:"loki-linux-amd64.zip"})," Once the download is complete, proceed to unzip the file, and you'll be all set to proceed."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"mkdir loki\ncd loki\nwget https://github.com/grafana/loki/releases/download/vX.X.X/loki-linux-amd64.zip\nunzip loki-linux-amd64.zip\nsudo rm -f loki-linux-amd64.zip\nmv loki-linux-amd64.zip loki\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Add a symbolic link to the ",(0,o.jsx)(n.code,{children:"/usr/local/bin/"})," directory for system-wide access to Loki:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo ln -s /home/<your_user>/loki/loki /usr/local/bin/\n"})}),"\n",(0,o.jsx)(n.h2,{id:"create-a-config-file",children:"Create a Config file"}),"\n",(0,o.jsxs)(n.p,{children:["Inside your ",(0,o.jsx)(n.code,{children:"loki"})," directory create the ",(0,o.jsx)(n.code,{children:"config.yaml"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo nano config.yml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Follow the official Loki configuration documentation available ",(0,o.jsx)(n.a,{href:"https://grafana.com/docs/loki/latest/configure/",children:"here"})," to fill in the config.yaml file. The documentation provides comprehensive guidance on configuring Loki based on your specific requirements. Ensure to review and incorporate the recommended settings to tailor Loki to your desired log aggregation setup."]}),"\n",(0,o.jsx)(n.h2,{id:"add-a-system-unit-file",children:"Add a system unit file"}),"\n",(0,o.jsx)(n.p,{children:"Open the .service with a text editor"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/loki.service\n"})}),"\n",(0,o.jsx)(n.p,{children:"Paste the below text"}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"loki.service"}),(0,o.jsx)("p",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="/etc/systemd/system/loki.service"',children:"[Unit]\nDescription=Loki\nAfter=network-online.target\n\n[Service]\nUser=<your_user>\nTimeoutStartSec=0\nCPUWeight=95\nIOWeight=95\nExecStart=loki -config.file /home/sentinel/loki/config.yaml\nRestart=always\nRestartSec=2\nLimitNOFILE=800000\nKillSignal=SIGTERM\n\n[Install]\nWantedBy=multi-user.target\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Reload the systemd Daemon"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,o.jsx)(n.p,{children:"Enable autostart of Loki service"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable loki.service\n"})}),"\n",(0,o.jsx)(n.h2,{id:"start-loki-service",children:"Start Loki service"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start loki.service\n"})}),"\n",(0,o.jsx)(n.p,{children:"Use this command to check logs in real time"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo journalctl -u loki.service -f --output cat\n"})}),"\n",(0,o.jsx)(n.p,{children:"After installing and running Loki, you can verify whether logs are being sent to Loki."}),"\n",(0,o.jsx)(n.h3,{id:"open-firewall-port",children:"Open Firewall Port"}),"\n",(0,o.jsxs)(n.admonition,{title:"Important",type:"danger",children:[(0,o.jsx)(n.p,{children:"After successfully installing and launching Loki, the next step is to open port 3100. This port should be accessible exclusively from your Validator machine. This action is essential to enable Loki to collect data from Promtail."}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow from validator_ip to monitor_ip port 3100\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var o=i(7294);const t={},s=o.createContext(t);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);