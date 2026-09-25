---
title: "Hexo 博客 Maupassant 主题下归档页显示的高级设置"
date: 2019-01-18
tags:
  - "建站"
categories: ["科技"]
slug: hexo-maupassant-archive-settings


---
最近发现，随着文章的增加，Hexo 下的归档页、分类页和标签页等的条目数和首页的显示条目数一致，没到满屏就开始分页，就像兔子的尾巴长不了，看起来非常不专业。但是在其他同主题的网站看到的这些页面条目数却很正常，基本都到和侧边栏相齐平才分页，有的网站因为文章数目较少，甚至没有分页，看上去一目了然。所以我也需要在原主题上进行二次设置。

## 方法一

如果仅仅控制归档页的分页，在 Hexo 配置中新增以下配置：

```
archive:  1
```

为了配置好管理，一般跟相关功能放一块

```yaml
# Pagination
## Set per_page to 0 to disable pagination
per_page: 7
pagination_dir: page
archive:  1
```

这样就是前文所说的不分页的设置。但是如果网站的文章超过一定数量以后还是需要分页，那么就需要用到第二种方法。

## 方法二

该方法对首页，归档及标签分别控制，因此首先需要安装以下插件：

```bash
$ npm install hexo-generator-index --save
$ npm install hexo-generator-archive --save
$ npm install hexo-generator-tag --save
```

Hexo 的配置文件_config.yml 中新增以下内容：

```yaml
# 设置首页分页之前默认就有，这里就不额外加了
# index_generator:
#   per_page: 7

archive_generator:
  per_page: 30  #值为0表示不分页，按需填写
  yearly: true  #是否按年生成归档
  monthly: false  #为了加快生成速度，按月归档就不要了
```

依葫芦画瓢，我们也可以对分类展示页、标签页等进行改造，以期与首页独立控制分页条数。

```yaml
tag_generator:
  per_page: 40  #值为0表示不分页，按需填写
category_generator:
  per_page: 40  #值为0表示不分页，按需填写
```
