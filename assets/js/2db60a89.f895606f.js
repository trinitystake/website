"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[9964],{6588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(5893),i=n(1151);const r={title:"Overview",sidebar_position:1},s="Node Monitoring",a={id:"monitoring/README",title:"Overview",description:"Running a node or a validator requires a reliable monitoring system to prevent downtime, missed blocks, and reputation damage. Alerting is also essential to notify you of issues.",source:"@site/docs/monitoring/README.md",sourceDirName:"monitoring",slug:"/monitoring/",permalink:"/docs/monitoring/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"monitoringSidebar",next:{title:"Node Exporter",permalink:"/docs/monitoring/metrics/exporters/node-exporter"}},l={},c=[{value:"Metrics Collection",id:"metrics-collection",level:2},{value:"Node Machine",id:"node-machine",level:3},{value:"Monitoring Machine",id:"monitoring-machine",level:3},{value:"Logs Collection",id:"logs-collection",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"node-monitoring",children:"Node Monitoring"}),"\n",(0,o.jsxs)(t.p,{children:["Running a node or a validator requires a reliable monitoring system to prevent downtime, missed blocks, and reputation damage. Alerting is also essential to notify you of issues.\nWe'll use established monitoring and visualization tools as part of a ",(0,o.jsx)(t.strong,{children:"stack"})," or ",(0,o.jsx)(t.strong,{children:"standalone"})," solutions."]}),"\n",(0,o.jsx)(t.p,{children:"A monitoring stack comprises a set of tools that require installation on both your local node machine and a dedicated monitoring machine. The data collection process involves two main types: metrics collection and logs collection."}),"\n",(0,o.jsx)(t.h2,{id:"metrics-collection",children:"Metrics Collection"}),"\n",(0,o.jsx)(t.p,{children:"Metrics collection involves gathering and monitoring various quantitative data points that provide insights into the performance and health of a system."}),"\n",(0,o.jsx)(t.h3,{id:"node-machine",children:"Node Machine"}),"\n",(0,o.jsxs)(t.p,{children:["The first monitoring tools are called ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"Exporters"})})," and are agents that run on your node machine. They collect various system-level metrics and expose them in a format that can be understood by Prometheus."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/monitoring/metrics/exporters/node-exporter",children:(0,o.jsx)(t.strong,{children:"Node Exporter"})}),": it collects various system-level metrics, such as CPU usage, memory usage, disk usage, network activity, and others."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/monitoring/metrics/exporters/tendermint",children:(0,o.jsx)(t.strong,{children:"Tendermint Metrics"})}),": it collects various system-level metrics of your validator, and can be easily enabled from your validator configuration file."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/monitoring/metrics/exporters/cosmos-validator-exporter",children:(0,o.jsx)(t.strong,{children:"Cosmos Validator Exporter"})}),": a Prometheus scraper designed to retrieve validator statistics from an LCD server exposed by a full node. It was created by Quokkastake, a very active community member."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/monitoring/metrics/exporters/cosmos-node-exporter",children:(0,o.jsx)(t.strong,{children:"Cosmos Node Exporter"})}),": another Prometheus scraper created by Quokkastake, designed to collect other essential data for monitoring your node."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"monitoring-machine",children:"Monitoring Machine"}),"\n",(0,o.jsx)(t.p,{children:"The next three monitoring tools must be installed on a separated machine which is used just to monitor your node."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/monitoring/metrics/alertmanager",children:(0,o.jsx)(t.strong,{children:"Alert Manager"})}),": a component of the Prometheus monitoring and alerting toolkit responsible. for handling alerts sent by client applications such as Prometheus server and then managing the routing and notification of these alerts to different receivers"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/monitoring/metrics/prometheus",children:(0,o.jsx)(t.strong,{children:"Prometheus"})}),": a monitoring system that collects metrics from the Exporters. It stores the metrics in a time-series database and provides a powerful query language to extract and aggregate the data. Prometheus also has an alerting system that can be used to send notifications when certain thresholds are breached."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"How does this stack of tools work?"}),"\n",(0,o.jsx)(t.p,{children:"In terms of communication, the Exporters send metrics to Prometheus over HTTP. Prometheus scrapes the metrics from the Exporters on a regular interval, typically every few seconds. Once the data is collected, Prometheus stores it in its time-series database. Grafana, in turn, connects to Prometheus as a data source and queries the data using the powerful Prometheus query language. Grafana then uses this data to create beautiful visualizations that can be shared with others."}),"\n",(0,o.jsx)(t.h2,{id:"logs-collection",children:"Logs Collection"}),"\n",(0,o.jsx)(t.p,{children:"Logs collection involves gathering and storing textual records or entries generated by various components within a system or application. These logs provide detailed information about events, actions, errors, and status changes that occur during the operation of the system. Unlike metrics, which are numeric and quantitative, logs are often qualitative and provide a more detailed narrative of what transpires within a system."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Node Machine"}),": ",(0,o.jsx)(t.a,{href:"/docs/monitoring/logs/promtail",children:"Promtail"}),", an agent used for scraping and forwarding logs to Loki"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Monitor Machine"}),": ",(0,o.jsx)(t.a,{href:"/docs/monitoring/logs/loki",children:"Loki"}),", a central log aggregation system that stores and indexes logs"]}),"\n"]}),"\n",(0,o.jsx)(t.h1,{id:"grafana",children:"Grafana"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/monitoring/grafana",children:"Grafana"})," serves as a powerful visualization tool, enabling the creation of interactive dashboards and charts that present data collected by Prometheus and logs gathered by Loki in a visually appealing and comprehensible manner."]}),"\n",(0,o.jsx)(t.h1,{id:"uptime-kuma",children:"Uptime Kuma"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/monitoring/uptime-kuma",children:"Uptime Kuma"})," consists of a single tool that only needs to be installed on a dedicated machine, specifically designed to monitor the uptime of your nodes."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(7294);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);