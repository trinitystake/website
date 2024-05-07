---
title: RPC Exposure
sidebar_position: 12
---

# RPC Exposure

:::danger Warning
It's not a good idea to make your Validator Node's RPC accessible to everyone because it could lead to security issues, like a DDOS attack. Instead, it's better to set up a separate [Full Node](/full-node-setup) just for RPC/API access.
:::

If you want to proceed, you should follow these steps in the order, as explained in the [Full Node guide](/docs/full-node):
- [Register a Domain name](/docs/full-node/domain)
- [Install NGINX](/docs/full-node/nginx) to be used as reverse proxy server
- [Install Certbot](/docs/full-node/certbot)
- [Add RPC to ChainRegistry](/docs/full-node/chain-registry)