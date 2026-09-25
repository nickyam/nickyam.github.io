---
title: "Hexo博客安装rss插件生成atom.xml文件"
date: 2019-01-13
tags:
  - "建站"
  - "互联网"
categories: ["科技"]
slug: hexo-blog-install-rss-plugin-atom


---
闲来无事，继续优化博客功能，就像对待自己的孩子。之前觉得现在这个时代 rss 订阅就是一个鸡肋。但是自从搞了站点地图以后，还是觉得少了这一个功能不太好，就依葫芦画瓢也安装一下。具体步骤如下所示。因为我用的主题已经集成了 rss 功能，所以就是加一个插件的事情。

- 进入本地 hexo 目录，输入以下命令:

```bash
npm install hexo-generator-feed
```

- 在博客目录的_config.yml 中添加如下代码:

```yaml
#RSS订阅
plugin:
  - hexo-generator-feed
#Feed Atom
feed:
  type: atom
  path: atom.xml
  limit: 20
```

因为我使用的是 Maupassant 主题，已经集成了 rss 功能，所以设置到这一步就可以了。如果你的主题里面没有 rss 相关设置，也可以添加如下代码：

```
rss： /atom.xml
```
