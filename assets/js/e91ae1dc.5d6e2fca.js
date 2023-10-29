"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[5093],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=t(7462),r=(t(7294),t(3905));const a={title:"Node Configuration",description:"config.toml, wireguard.toml, and v2ray.toml",sidebar_position:5},i="Node Configuration",l={unversionedId:"sentinelguides/node/manual/node-config",id:"sentinelguides/node/manual/node-config",title:"Node Configuration",description:"config.toml, wireguard.toml, and v2ray.toml",source:"@site/docs/sentinelguides/node/manual/node-config.md",sourceDirName:"sentinelguides/node/manual",slug:"/sentinelguides/node/manual/node-config",permalink:"/docs/sentinelguides/node/manual/node-config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sentinelguides/node/manual/node-config.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Node Configuration",description:"config.toml, wireguard.toml, and v2ray.toml",sidebar_position:5},sidebar:"nodeSidebar",previous:{title:"Preparing Sentinel Docker image",permalink:"/docs/sentinelguides/node/manual/docker-image"},next:{title:"Run the Node",permalink:"/docs/sentinelguides/node/manual/node-run"}},s={},d=[{value:"Configuration File",id:"configuration-file",level:2},{value:"Node Type",id:"node-type",level:2},{value:"Wireguard",id:"wireguard",level:3},{value:"V2Ray",id:"v2ray",level:3},{value:"Add a Mnemonic",id:"add-a-mnemonic",level:2},{value:"Move created TLS keys",id:"move-created-tls-keys",level:2},{value:"Enable Firewall Ports",id:"enable-firewall-ports",level:2},{value:"Enable Port Forwarding (for Residential Nodes)",id:"enable-port-forwarding-for-residential-nodes",level:2}],p={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-configuration"},"Node Configuration"),(0,r.kt)("p",null,"During the procedure, when you are asked to fill some fields as country or e-mail, you can leave them blank."),(0,r.kt)("h2",{id:"configuration-file"},"Configuration File"),(0,r.kt)("p",null,"Initialize the application configuration (the below command creates and populate ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," file)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run --rm \\\n    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \\\n    sentinel-dvpn-node process config init\n")),(0,r.kt)("p",null,"Open the configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano ${HOME}/.sentinelnode/config.toml\n")),(0,r.kt)("p",null,"Edit the required fields"),(0,r.kt)("p",null,"(DO NOT COPY AND PASTE THE ENTIRE BLOCK AS IT MAY DISRUPT THE CONFIGURATION FILE!!! ONLY COPY THE NECESSARY FIELDS OR ADD THEM MANUALLY!)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=${HOME}/.sentinelnode/config.toml",title:"${HOME}/.sentinelnode/config.toml"},'[chain]\n# Gas limit to set per transaction\ngas = 200000\n\n# Gas adjustment factor\ngas_adjustment = 1.05\n\n# Gas prices to determine the transaction fee\ngas_prices = "0.1udvpn"\n\n# The network chain ID\nid = "sentinelhub-2"\n\n# Comma separated Tendermint RPC addresses for the chain\nrpc_addresses = "https://rpc.sentinel.co:443,https://rpc.sentinel.quokkastake.io:443"\n# Find below some alternative ones\n# https://rpc.mathnodes.com:443\n# https://sentinel-rpc.badgerbite.io:443\n# https://sentinel-rpc2.badgerbite.io:443\n\n# Timeout seconds for querying the data from the RPC server\nrpc_query_timeout = 10\n\n# Timeout seconds for broadcasting the transaction through RPC server\nrpc_tx_timeout = 30\n\n# Calculate the transaction fee by simulating it\nsimulate_and_execute = true\n\n[handshake]\n# Enable Handshake DNS resolver (if you use v2ray set enable = false)\nenable = true\n\n# Number of peers\npeers = 8\n\n[keyring]\n# Underlying storage mechanism for keys\nbackend = "file"\n# To run the node with autorestart function, write the word "test". Alternatively, you can use the word "file"\n\n# Name of the key with which to sign\nfrom = "operator"\n# replace "operator" with your preferred name, but ensure that the value is NOT left empty\n\n[node]\n# Time interval between each set_sessions operation\ninterval_set_sessions = "10s"\n\n# Time interval between each update_sessions transaction\ninterval_update_sessions = "1h55m0s"\n\n# Time interval between each set_status transaction\ninterval_update_status = "55m0s"\n\n# IPv4 address to replace the public IPv4 address with\nipv4_address = ""\n\n# API listen-address (tcp port)\nlisten_on = "0.0.0.0:<tcp_port>" #for example 0.0.0.0:7777\n# this is the TCP port. You can change and ensure to write it down as needed for later use\n\n# Name of the node (replace "your_node_name" with your desired name)\nmoniker = "your_node_name"\n\n# Prices for one gigabyte of bandwidth provided\ngigabyte_prices = "45780ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,8016ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1068800ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,106880ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,14696000udvpn"\n\n# Prices for one hour\nhourly_prices = "198000ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8,700ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477,1630000ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783,15000ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518,13000000udvpn"\n\n# Public URL of the node\nremote_url = "https://<ip_node>:<tcp_port>"\n# replace ip_node with your host ip and tcp_port with 7777\n# example: https://123.456.78.90:7777\n\n# Type of node (you can choose between wireguard and v2ray)\ntype = "wireguard"\n\n# Limit max number of concurrent peers\n[qos]\nmax_peers = 250\n')),(0,r.kt)("p",null,"The fields ",(0,r.kt)("inlineCode",{parentName:"p"},"gigabyte_prices")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hourly_prices")," ",(0,r.kt)("strong",{parentName:"p"},"must")," encompass the entire string, including the IBC tokens as well separated by commas. Merely incorporating the udvpn price will not suffice. Please refer to the list below for the supported IBC tokens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ATOM\n8016ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477\n\nOSMOSIS\n106880ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518\n\nSECRET\n105000ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8\n\nDECENTR\n1068800ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783\n")),(0,r.kt)("h2",{id:"node-type"},"Node Type"),(0,r.kt)("p",null,"Depending on the node type you specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," file, use the corresponding configuration settings."),(0,r.kt)("h3",{id:"wireguard"},"Wireguard"),(0,r.kt)("p",null,"Initialize the WireGuard configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run --rm \\\n    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \\\n    sentinel-dvpn-node process wireguard config init\n")),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"wireguard.toml")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano ${HOME}/.sentinelnode/wireguard.toml\n")),(0,r.kt)("p",null,"Take note of the WireGuard port"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=${HOME}/.sentinelnode/wireguard.toml",title:"${HOME}/.sentinelnode/wireguard.toml"},'# Name of the network interface\ninterface = "wg0"\n\n# Port number to accept the incoming connections\nlisten_port = <wireguard_udp_port> #for example listen_port = 8888\n# this is the WireGuard UDP port, you can change it and write it down as you need it later\n\n# Server private key\nprivate_key = "TwkdSO6cax3Sbo06mvmMyd2X452usVeVDTK/hdkfOmI="\n')),(0,r.kt)("h3",{id:"v2ray"},"V2Ray"),(0,r.kt)("p",null,"Initialize the V2Ray configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run --rm \\\n    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \\\n    sentinel-dvpn-node process v2ray config init\n")),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"v2ray.toml")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano ${HOME}/.sentinelnode/v2ray.toml\n")),(0,r.kt)("p",null,"Take note of the V2Ray port"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=${HOME}/.sentinelnode/v2ray.toml",title:"${HOME}/.sentinelnode/v2ray.toml"},'[vmess]\n# Port number to accept the incoming connections\nlisten_port = <v2ray_tcp_port> #for example 9999\n# this is the V2Ray TCP port, you can change it and write it down as you need it later\n\n# Name of the transport protocol\ntransport = "grpc"\n')),(0,r.kt)("h2",{id:"add-a-mnemonic"},"Add a Mnemonic"),(0,r.kt)("p",null,"Add an account key (the one in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," file)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm \\\n    --interactive \\\n    --tty \\\n    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \\\n    sentinel-dvpn-node process keys add\n")),(0,r.kt)("p",null,"if you already have a mnemonic and simply want to recover your account, type this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm \\\n    --interactive \\\n    --tty \\\n    --volume ${HOME}/.sentinelnode:/root/.sentinelnode \\\n    sentinel-dvpn-node process keys add --recover\n")),(0,r.kt)("p",null,"You will be prompet to select a passphrase"),(0,r.kt)("p",null,"You will be provided with an operator address (sent1), a node address (sentnode1), and a mnemonic phrase that you should write down and store in a secure location. Additionally, before starting, remember to send some DVPN tokens (50 DVPNs should suffice) to the operator address."),(0,r.kt)("h2",{id:"move-created-tls-keys"},"Move created TLS keys"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mv ${HOME}/tls.crt ${HOME}/.sentinelnode/tls.crt && \\\nsudo mv ${HOME}/tls.key ${HOME}/.sentinelnode/tls.key\n\nsudo chown root:root ${HOME}/.sentinelnode/tls.crt && \\\nsudo chown root:root ${HOME}/.sentinelnode/tls.key\n")),(0,r.kt)("h2",{id:"enable-firewall-ports"},"Enable Firewall Ports"),(0,r.kt)("p",null,"Enable TCP port on Firewall (check file ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow <tcp_port>/tcp #for example sudo ufw allow 7777/tcp\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"(Wireguard)")," Enable UDP port on Firewall (check file ",(0,r.kt)("inlineCode",{parentName:"p"},"wireguard.toml"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow <udp_port>/udp #for example sudo ufw allow 8888/tcp\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"(V2RAY)")," Enable TCP port on Firewall (check file ",(0,r.kt)("inlineCode",{parentName:"p"},"v2ray.toml"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow <tcp_port>/tcp #for example sudo ufw allow 9999/tcp\n")),(0,r.kt)("h2",{id:"enable-port-forwarding-for-residential-nodes"},"Enable Port Forwarding (for Residential Nodes)"),(0,r.kt)("p",null,"If you're hosting your node from home, make sure to enable port forwarding on your router to allow external access. To do this, access your router settings and navigate to WAN services, then add the following two IPv4 Port forwarding table entries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Name            ProtocolWAN     Port    LAN port    Destination IP\nTCP_PORT        TCP             7777    7777        your_local_ip\nWIREGUARD_PORT  UDP             8888    8888        your_local_ip\nV2RAY_PORT      TCP             9999    9999        your_local_ip\n")))}u.isMDXComponent=!0}}]);