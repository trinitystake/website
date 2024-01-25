"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[7015],{6100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(5893),r=t(1151);const i={title:"Node Configuration",description:"config.toml, wireguard.toml, and v2ray.toml",sidebar_position:4},s="Node Configuration",a={id:"sentinelguides/node/methods/manual/node-config",title:"Node Configuration",description:"config.toml, wireguard.toml, and v2ray.toml",source:"@site/docs/sentinelguides/node/methods/manual/node-config.md",sourceDirName:"sentinelguides/node/methods/manual",slug:"/sentinelguides/node/methods/manual/node-config",permalink:"/docs/sentinelguides/node/methods/manual/node-config",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Node Configuration",description:"config.toml, wireguard.toml, and v2ray.toml",sidebar_position:4},sidebar:"nodeSidebar",previous:{title:"Preparing Sentinel Docker image",permalink:"/docs/sentinelguides/node/methods/manual/docker-image"},next:{title:"Run the Node",permalink:"/docs/sentinelguides/node/methods/manual/node-run"}},d={},l=[{value:"Configuration File",id:"configuration-file",level:2},{value:"Node Type",id:"node-type",level:2},{value:"Wireguard",id:"wireguard",level:3},{value:"V2Ray",id:"v2ray",level:3},{value:"Add a Mnemonic",id:"add-a-mnemonic",level:2},{value:"Move created TLS keys",id:"move-created-tls-keys",level:2},{value:"Enable Firewall Ports",id:"enable-firewall-ports",level:2},{value:"Enable Port Forwarding (for Residential Nodes)",id:"enable-port-forwarding-for-residential-nodes",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"node-configuration",children:"Node Configuration"}),"\n",(0,o.jsx)(n.p,{children:"During the procedure, when you are asked to fill some fields as country or e-mail, you can leave them blank."}),"\n",(0,o.jsx)(n.h2,{id:"configuration-file",children:"Configuration File"}),"\n",(0,o.jsxs)(n.p,{children:["Initialize the application configuration (the below command creates and populate ",(0,o.jsx)(n.code,{children:"config.toml"})," file)"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo docker run --rm \\\n    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \\\n    sentinel-dvpn-node process config init\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Open the configuration ",(0,o.jsx)(n.code,{children:"config.toml"})," file"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo nano ${HOME}/.sentinelnode/config.toml\n"})}),"\n",(0,o.jsx)(n.p,{children:"Edit the required fields"}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"danger",children:(0,o.jsx)(n.p,{children:"Do not copy and paste the entire code block as it may disrupt the configuration file!!! Only copy the necessary fields or add them manually!"})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"config.toml for datacenter IPs"}),(0,o.jsx)("p",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'[chain]\n# Gas limit to set per transaction\ngas = 200000\n\n# Gas adjustment factor\ngas_adjustment = 1.05\n\n# Gas prices to determine the transaction fee\ngas_prices = "0.1udvpn"\n\n# The network chain ID\nid = "sentinelhub-2"\n\n# Comma separated Tendermint RPC addresses for the chain\nrpc_addresses = "https://rpc.sentinel.co:443,https://rpc.sentinel.quokkastake.io:443,https://rpc.trinityvalidator.com:443"\n# Find below some alternative ones\n# https://rpc.mathnodes.com:443\n# https://rpc-sentinel.whispernode.com:443\n# https://rpc.sentinel.chaintools.tech:443\n# https://sentinel-rpc.publicnode.com:443\n\n# Timeout seconds for querying the data from the RPC server\nrpc_query_timeout = 10\n\n# Timeout seconds for broadcasting the transaction through RPC server\nrpc_tx_timeout = 30\n\n# Calculate the transaction fee by simulating it\nsimulate_and_execute = true\n\n[handshake]\n# Enable Handshake DNS resolver (if you use v2ray set enable = false)\nenable = true\n\n# Number of peers\npeers = 8\n\n[keyring]\n# Underlying storage mechanism for keys\nbackend = "file"\n# To run the node with autorestart function, write the word "test". Alternatively, you can use the word "file"\n\n# Name of the key with which to sign\nfrom = "operator"\n# replace "operator" with your preferred name, but ensure that the value is NOT left empty\n\n[node]\n# Time interval between each set_sessions operation\ninterval_set_sessions = "10s"\n\n# Time interval between each update_sessions transaction\ninterval_update_sessions = "1h55m0s"\n\n# Time interval between each set_status transaction\ninterval_update_status = "55m0s"\n\n# IPv4 address to replace the public IPv4 address with\nipv4_address = ""\n\n# API listen-address (tcp port)\nlisten_on = "0.0.0.0:<tcp_port>" #for example 0.0.0.0:7777\n# this is the TCP port. You can change and ensure to write it down as needed for later use\n\n# Name of the node (replace "your_node_name" with your desired name)\nmoniker = "your_node_name"\n\n# Prices for one gigabyte of bandwidth provided\ngigabyte_prices = "52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn"\n\n# Prices per hour\nhourly_prices = "18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,4160000udvpn"\n\n# Public URL of the node\nremote_url = "https://<ip_node>:<tcp_port>"\n# replace ip_node with your host ip and tcp_port with 7777\n# example: https://123.456.78.90:7777\n\n# Type of node (you can choose between wireguard and v2ray)\ntype = "wireguard"\n\n# Limit max number of concurrent peers\n[qos]\nmax_peers = 250\n'})})})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"config.toml for residential IPs"}),(0,o.jsx)("p",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'[chain]\n# Gas limit to set per transaction\ngas = 200000\n\n# Gas adjustment factor\ngas_adjustment = 1.05\n\n# Gas prices to determine the transaction fee\ngas_prices = "0.1udvpn"\n\n# The network chain ID\nid = "sentinelhub-2"\n\n# Comma separated Tendermint RPC addresses for the chain\nrpc_addresses = "https://rpc.sentinel.co:443,https://rpc.sentinel.quokkastake.io:443,https://rpc.trinityvalidator.com:443"\n# Find below some alternative ones\n# https://rpc.mathnodes.com:443\n# https://rpc-sentinel.whispernode.com:443\n# https://rpc.sentinel.chaintools.tech:443\n# https://sentinel-rpc.publicnode.com:443\n\n# Timeout seconds for querying the data from the RPC server\nrpc_query_timeout = 10\n\n# Timeout seconds for broadcasting the transaction through RPC server\nrpc_tx_timeout = 30\n\n# Calculate the transaction fee by simulating it\nsimulate_and_execute = true\n\n[handshake]\n# Enable Handshake DNS resolver (if you use v2ray set enable = false)\nenable = true\n\n# Number of peers\npeers = 8\n\n[keyring]\n# Underlying storage mechanism for keys\nbackend = "file"\n# To run the node with autorestart function, write the word "test". Alternatively, you can use the word "file"\n\n# Name of the key with which to sign\nfrom = "operator"\n# replace "operator" with your preferred name, but ensure that the value is NOT left empty\n\n[node]\n# Time interval between each set_sessions operation\ninterval_set_sessions = "10s"\n\n# Time interval between each update_sessions transaction\ninterval_update_sessions = "1h55m0s"\n\n# Time interval between each set_status transaction\ninterval_update_status = "55m0s"\n\n# IPv4 address to replace the public IPv4 address with\nipv4_address = ""\n\n# API listen-address (tcp port)\nlisten_on = "0.0.0.0:<tcp_port>" #for example 0.0.0.0:7777\n# this is the TCP port. You can change and ensure to write it down as needed for later use\n\n# Name of the node (replace "your_node_name" with your desired name)\nmoniker = "your_node_name"\n\n# Prices for one gigabyte of bandwidth provided\ngigabyte_prices = "52573ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,9204ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1180852ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,122740ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,15342624udvpn"\n\n# Prices per hour\nhourly_prices = "18480ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,770ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1871892ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,18897ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,13700000udvpn"\n\n# Public URL of the node\nremote_url = "https://<ip_node>:<tcp_port>"\n# replace ip_node with your host ip and tcp_port with 7777\n# example: https://123.456.78.90:7777\n\n# Type of node (you can choose between wireguard and v2ray)\ntype = "wireguard"\n\n# Limit max number of concurrent peers\n[qos]\nmax_peers = 250\n'})})})]}),"\n",(0,o.jsxs)(n.p,{children:["The fields ",(0,o.jsx)(n.code,{children:"gigabyte_prices"})," and ",(0,o.jsx)(n.code,{children:"hourly_prices"})," ",(0,o.jsx)(n.strong,{children:"must"})," encompass the entire string, including the IBC coins as well separated by commas. Merely incorporating the udvpn price will not suffice."]}),"\n",(0,o.jsx)(n.p,{children:"Please find below the list of supported IBC coins from Sentinel along with their corresponding denom variables:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ATOM\nibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477\n\nOSMOSIS\nibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518\n\nSECRET\nibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8\n\nDECENTR\nibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783\n"})}),"\n",(0,o.jsx)(n.h2,{id:"node-type",children:"Node Type"}),"\n",(0,o.jsxs)(n.p,{children:["Depending on the node type you specified in the ",(0,o.jsx)(n.code,{children:"config.toml"})," file, use the corresponding configuration settings."]}),"\n",(0,o.jsx)(n.h3,{id:"wireguard",children:"Wireguard"}),"\n",(0,o.jsx)(n.p,{children:"Initialize the WireGuard configuration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo docker run --rm \\\n    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \\\n    sentinel-dvpn-node process wireguard config init\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Open the ",(0,o.jsx)(n.code,{children:"wireguard.toml"})," file"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo nano ${HOME}/.sentinelnode/wireguard.toml\n"})}),"\n",(0,o.jsx)(n.p,{children:"Take note of the WireGuard port"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"wireguard.toml"}),(0,o.jsx)("p",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'# Name of the network interface\ninterface = "wg0"\n\n# Port number to accept the incoming connections\nlisten_port = <wireguard_udp_port> #for example listen_port = 8888\n# this is the WireGuard UDP port, you can change it and write it down as you need it later\n\n# Server private key\nprivate_key = "TwkdSO6cax3Sbo06mvmMyd2X452usVeVDTK/hdkfOmI="\n'})})})]}),"\n",(0,o.jsx)(n.h3,{id:"v2ray",children:"V2Ray"}),"\n",(0,o.jsx)(n.p,{children:"Initialize the V2Ray configuration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo docker run --rm \\\n    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \\\n    sentinel-dvpn-node process v2ray config init\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Open the ",(0,o.jsx)(n.code,{children:"v2ray.toml"})," file"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo nano ${HOME}/.sentinelnode/v2ray.toml\n"})}),"\n",(0,o.jsx)(n.p,{children:"Take note of the V2Ray port"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"v2ray.toml"}),(0,o.jsx)("p",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'[vmess]\n# Port number to accept the incoming connections\nlisten_port = <v2ray_tcp_port> #for example 9999\n# this is the V2Ray TCP port, you can change it and write it down as you need it later\n\n# Name of the transport protocol\ntransport = "grpc"\n'})})})]}),"\n",(0,o.jsx)(n.h2,{id:"add-a-mnemonic",children:"Add a Mnemonic"}),"\n",(0,o.jsxs)(n.p,{children:["Add an account key (the one in ",(0,o.jsx)(n.code,{children:"config.toml"})," file)"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run --rm \\\n    --interactive \\\n    --tty \\\n    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \\\n    sentinel-dvpn-node process keys add\n"})}),"\n",(0,o.jsx)(n.p,{children:"if you already have a mnemonic and simply want to recover your account, type this"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run --rm \\\n    --interactive \\\n    --tty \\\n    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \\\n    sentinel-dvpn-node process keys add --recover\n"})}),"\n",(0,o.jsx)(n.p,{children:"You will be prompet to select a passphrase"}),"\n",(0,o.jsx)(n.p,{children:"You will be provided with an operator address (sent1), a node address (sentnode1), and a mnemonic phrase that you should write down and store in a secure location."}),"\n",(0,o.jsx)(n.h2,{id:"move-created-tls-keys",children:"Move created TLS keys"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo mv ${HOME}/tls.crt ${HOME}/.sentinelnode/tls.crt && \\\nsudo mv ${HOME}/tls.key ${HOME}/.sentinelnode/tls.key\n\nsudo chown root:root ${HOME}/.sentinelnode/tls.crt && \\\nsudo chown root:root ${HOME}/.sentinelnode/tls.key\n"})}),"\n",(0,o.jsx)(n.h2,{id:"enable-firewall-ports",children:"Enable Firewall Ports"}),"\n",(0,o.jsxs)(n.p,{children:["Enable TCP port on Firewall (check file ",(0,o.jsx)(n.code,{children:"config.toml"}),")"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow <tcp_port>/tcp #for example sudo ufw allow 7777/tcp\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"(Wireguard)"})," Enable UDP port on Firewall (check file ",(0,o.jsx)(n.code,{children:"wireguard.toml"}),")"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow <udp_port>/udp #for example sudo ufw allow 8888/tcp\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"(V2RAY)"})," Enable TCP port on Firewall (check file ",(0,o.jsx)(n.code,{children:"v2ray.toml"}),")"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow <tcp_port>/tcp #for example sudo ufw allow 9999/tcp\n"})}),"\n",(0,o.jsx)(n.h2,{id:"enable-port-forwarding-for-residential-nodes",children:"Enable Port Forwarding (for Residential Nodes)"}),"\n",(0,o.jsx)(n.p,{children:"If you're hosting your node from home, make sure to enable port forwarding on your router to allow external access. To do this, access your router settings and navigate to WAN services, then add the following two IPv4 Port forwarding table entries:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Name            ProtocolWAN     Port                    LAN port                Destination IP\nTCP_PORT        TCP             <tcp_port>              <tcp_port>              your_local_ip\nWIREGUARD_PORT  UDP             <wireguard_udp_port>    <wireguard_udp_port>    your_local_ip\nV2RAY_PORT      TCP             <v2ray_tcp_port>        <v2ray_tcp_port>        your_local_ip\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(7294);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);