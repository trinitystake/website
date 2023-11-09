"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[4361],{527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(5893),o=t(1151);const s={title:"Monitoring with Uptime Kuma",description:"How to monitor your running node",sidebar_position:7},a="Monitoring with Uptime Kuma",r={id:"sentinelguides/node/manual/uptime-kuma",title:"Monitoring with Uptime Kuma",description:"How to monitor your running node",source:"@site/docs/sentinelguides/node/manual/uptime-kuma.md",sourceDirName:"sentinelguides/node/manual",slug:"/sentinelguides/node/manual/uptime-kuma",permalink:"/docs/sentinelguides/node/manual/uptime-kuma",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Monitoring with Uptime Kuma",description:"How to monitor your running node",sidebar_position:7},sidebar:"nodeSidebar",previous:{title:"Run the Node",permalink:"/docs/sentinelguides/node/manual/node-run"},next:{title:"Cloudmos on Akash",permalink:"/docs/category/cloudmos-on-akash"}},c={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"monitoring-with-uptime-kuma",children:"Monitoring with Uptime Kuma"}),"\n",(0,i.jsxs)(n.p,{children:["Uptime Kuma (",(0,i.jsx)(n.a,{href:"https://uptime.kuma.pet/",children:"website"}),") is a tool specifically designed for monitoring the availability and uptime of services and websites. It checks if services are running and responds as expected by sending HTTP requests at regular intervals. In contrast to the Node Exporter/Prometheus/Grafana stack, Uptime Kuma places a greater emphasis on ensuring the accessibility and responsiveness of your services rather than collecting in-depth system metrics."]}),"\n",(0,i.jsx)(n.p,{children:"This is a easy and ideal solution to ensure constant monitoring of your node to prevent any downtime.\nTo get started, you can self-host this tool in a Docker container by executing the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once the container has started and appears healthy, you can access Uptime Kuma through HTTP"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"http://localhost:3001\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now, you can click on ",(0,i.jsx)(n.code,{children:"Add new monitor"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["on Monitor type select ",(0,i.jsx)(n.code,{children:"TCP Port"})]}),"\n",(0,i.jsx)(n.li,{children:"in the Hostname field, add your node's IP address"}),"\n",(0,i.jsxs)(n.li,{children:["in the Port field, add the TCP port (on this guide, the port is ",(0,i.jsx)(n.code,{children:"12345"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In Notifications, you can select your favorite notification type. Let's cover an example using Telegram."}),"\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://t.me/BotFather.",children:"BotFather"}),", create your alert bot and take note of the generated token"]}),"\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://t.me/chatIDrobot",children:"ChatIDrobot"})," and get your chat_id"]}),"\n",(0,i.jsx)(n.p,{children:'Write a "test message on your bot"'}),"\n",(0,i.jsx)(n.p,{children:"Click on the link to check the api"}),"\n",(0,i.jsx)(n.p,{children:"Finally click on Test to check if the Telegram alert system works"}),"\n",(0,i.jsx)(n.p,{children:"Then save."}),"\n",(0,i.jsx)(n.p,{children:"Contratulations, your bot is now active!"})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);