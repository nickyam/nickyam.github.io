---
title: "Hexo生成sitemap步骤及duplicated mapping key 问题解决"
date: 2018-12-31
tags:
  - "建站"
  - "SEO"
categories: ["科技"]
slug: hexo-sitemap-duplicated-mapping-key


---
GitHub Page 已经和百度决裂，如果还不做一些 SEO 的话，网站的流量真的太少了。所以我准备做一个站点地图讨好下各大搜索引擎。站点地图是一种文件，您可以通过该文件列出您网站上的网页，从而将您网站内容的组织架构告知 Google 和其他搜索引擎。搜索引擎网页抓取工具会读取此文件，以便更加智能地抓取您的网站。

- 首先打开 hexo 博客根目录，分别用下面两个命令来安装针对谷歌和百度的插件：

```bash
npm install hexo-generator-sitemap --save
npm install hexo-generator-baidu-sitemap --save
```

- 在博客目录的_config.yml 中添加如下代码:

```yaml
Plugins:
  - hexo-generator-baidu-sitemap
  - hexo-generator-sitemap

baidusitemap:
    path: baidusitemap.xml
sitemap:
    path: sitemap.xml
```

hexo-g 后，在博客根目录的 public 下生成了 sitemap.xml 以及 baidusitemap.xml 就表示操作成功。

但是我在在 hexo-g 后出现了 bug：

```
FATAL duplicated mapping key at line 70, column 18:
    path: sitemap.xml
```

后来了解到，如果你的 hexo 版本是 2.x.x

```yaml
sitemap:
    path: sitemap.xml
baidusitemap:
    path: baidusitemap.xml
```

如果你的 hexo 版本是 3.x.x

```yaml
sitemap:
  path: sitemap.xml
baidusitemap:
  path: baidusitemap.xml
```

上面这段配置来源于官方说明，我查看 hexo –version 我本地的版本是 3.2.2，但是却需要使用第一种写法。所以你出现类似的错误，两种方法可以试一试，不一定局限于版本号。
