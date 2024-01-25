"use strict";(self.webpackChunktrinity_validator=self.webpackChunktrinity_validator||[]).push([[6605],{6870:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=s(5893),t=s(1151);const i={title:"SSH",sidebar_position:3},o=void 0,a={id:"validator/server-setup/ssh",title:"SSH",description:"To securely access your server, you will use an SSH connection.",source:"@site/docs/validator/server-setup/ssh.md",sourceDirName:"validator/server-setup",slug:"/validator/server-setup/ssh",permalink:"/docs/validator/server-setup/ssh",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"SSH",sidebar_position:3},sidebar:"validatorSidebar",previous:{title:"Create New User",permalink:"/docs/validator/server-setup/create-user"},next:{title:"Install Golang",permalink:"/docs/validator/golang"}},l={},c=[{value:"Client Side",id:"client-side",level:3},{value:"Server Side",id:"server-side",level:3}];function d(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"To securely access your server, you will use an SSH connection."}),"\n",(0,r.jsx)(n.h3,{id:"client-side",children:"Client Side"}),"\n",(0,r.jsx)(n.p,{children:"If you don't already have one, generate an SSH key pair on your client"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh-keygen -t ed25519\n"})}),"\n",(0,r.jsx)(n.p,{children:"Navigate to the SSH directory, and you should see both the public and private SSH keys"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ls -l .ssh/\n\ntotal 2\n-rw-------. 1 user user  size Mar 12 18:08 id_ed25519\n-rw-r--r--. 1 user user  size Mar 12 18:08 id_ed25519.pub\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"Important",type:"danger",children:[(0,r.jsxs)(n.p,{children:["Add your ",(0,r.jsx)(n.strong,{children:"public"})," SSH key to the ",(0,r.jsx)(n.code,{children:"authorized_keys"})," file on your VPS to enable secure SSH connections. If you do not perform this step you will be locked out and unable to connect to your VPS as it will be refused!"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh-copy-id -i ~/.ssh/id_ed25519.pub username@server_ip\n"})})]}),"\n",(0,r.jsxs)(n.p,{children:["If the import fails, ensure that the ",(0,r.jsx)(n.code,{children:".ssh/"})," folder exists on your server under the newly created user. If it does not exist, create it by doing ",(0,r.jsx)(n.code,{children:"mkdir ~/.ssh"})]}),"\n",(0,r.jsx)(n.h3,{id:"server-side",children:"Server Side"}),"\n",(0,r.jsx)(n.p,{children:"Your public key will be now visible on your server by typing"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cat ~.ssh/authorized_keys\n"})}),"\n",(0,r.jsx)(n.p,{children:"For security purposes it is recommended to change the default port 22 to another one; let's say 2222.\nCheck if the port is not already being used by another service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"grep 2222 /etc/services\n"})}),"\n",(0,r.jsx)(n.p,{children:"On your server machine, install the firewall"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install ufw\n"})}),"\n",(0,r.jsx)(n.p,{children:"If the port is not already being used by another service, you can add it to your firewall"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow 2222/tcp\n"})}),"\n",(0,r.jsx)(n.p,{children:"Enable the firewall"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ufw enable\n"})}),"\n",(0,r.jsx)(n.p,{children:"Check firewall status to see if the port has been enabled"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ufw status\n"})}),"\n",(0,r.jsx)(n.p,{children:"Open the SSH config file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/ssh/sshd_config\n"})}),"\n",(0,r.jsx)(n.p,{children:"Set the following fields"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="/etc/ssh/sshd_config"',children:"# For security purposes we want to use a port number which is not the default one 22\nPort 2222\n\n# Better disable root login via SSH. If needed better to switch to root once\n# connected with a normal user\nPermitRootLogin  no\n\n# Authentication with public key is preferred\nPubkeyAuthentication  yes\n\n# Better not to use password authentication\nPasswordAuthentication  no\n"})}),"\n",(0,r.jsx)(n.p,{children:"Restart the service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo service sshd restart\n"})}),"\n",(0,r.jsx)(n.p,{children:"Connect to your machine via SSH using the new port"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh sentinel@machine_ip -p 2222\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var r=s(7294);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);