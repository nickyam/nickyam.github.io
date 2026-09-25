---
title: "WordPress优化缓存插件WP Super Cache"
date: 2023-11-02
tags:
  - "建站"
  - "数码"
  - "工具"
categories: ["科技"]
slug: wordpress-cache-plugin-wp-super-cache


---
与 WP-Cache 相同，WP Super Cache 也是一款 WordPress “静态化”插件，可以通过缓存来提高大负载下 WP 的性能。

相比 WP-Cache 最大的改进，WP Super Cache 的优点在于加入了 Super Cache 这一环节。部分页面会根据一定的规则被缓存为 SuperCache，而这个 SuperCache 实质上就是页面本身。通过 Apache mod_rewrite 重定向直接访问这些静态文件，理论上可以获得更好的性能。

如果之前已经安装了 WP-Cache ，在安装 WP Super Cache 需要卸载原来的 WP-Cache 。你需要先在后台插件控制面板里面禁用 WP-Cache，再登入 FTP 空间删除文件 wp-content/wp-cache-config.php 和 wp-content/advanced-cache.php，编辑文件 wp-config.php，删除以下代码

```
define(’WP_CACHE’, ‘true’); //Added by WP-Cache Manager )
```

这里软件链接就不放了，大家直接在插件应用商店搜索下载即可。

效果如何呢？我这个网站（[https://limzero.com](https://limzero.com/) ）原来的访问速度有点卡顿，但现在已经比较流畅了。

大家不妨一试。
