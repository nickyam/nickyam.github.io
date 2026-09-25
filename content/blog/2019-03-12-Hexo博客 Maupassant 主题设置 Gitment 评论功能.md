---
title: "Hexo博客 Maupassant 主题设置 Gitment 评论功能"
date: 2019-03-12
tags:
  - "建站"
  - "评论"
categories: ["科技"]
slug: hexo-maupassant-gitment-comments


---
因为博客的评论系统不太完善，第三方系统不是被 Q 就是容易关停，所以很长一段时间，我都没有加载评论模块。当然也因为博客访客较少的缘故。今天心血来潮，还是把博客搞得完整一些，选来选去看中了 Gitment 这一 GitHub 生态的东西，应该稍微靠谱一些。

Gitment 是基于 GitHub Issues 的评论系统。支持在前端直接引入，不需要任何后端代码。可以在页面进行登录、查看、评论、点赞等操作，同时有完整的 Markdown / GFM 和代码高亮支持。尤为适合各种基于 GitHub Pages 的静态博客或项目页面。

## 安装 Gitment

### 安装模块

- 在 blog 的根目录安装

  ```bash
  npm i --save gitment
  ```

### 申请应用

首先去[New OAuth App](https://github.com/settings/applications/new) 为你的博客申请密钥。

```
Application name: 自行确定
Homepage URL: 你的博客地址 #如 https://www.nickyam.com
Application description: 应用描述
Authorization callback URL: 这个必须写你的博客地址 #如 https://www.nickyam.com
```

申请完成点注册,生成 ClientID 和 Client Secret，设置的时候需要填写。

### 博客配置

```yaml
# Gitment
# Introduction: https://imsun.net/posts/gitment-introduction/
gitment:
  enable: true
  github_user: {你的 GitHub ID} #可以是你的GitHub用户名，也可以是github id，建议直接用GitHub用户名就可以。
  github_repo: {存储评论的 github repo} #这个是你要存储评论内容的仓库名，可以与博客下的仓库，也可以新建一个仓库专门存储评论内容的。
  client_id: {刚才申请的ClientID}
  client_secret: {刚才申请的Client Secret}
```

### 开通评论

将配置上传到 GitHub 后，刷新博客已经能够显示评论模块。博主需要登陆 GitHub 账号，手动初始化每篇博客的评论功能。

## 问题汇总

在折腾的过程中，可能碰到的一些问题，在这里记录和大家分享。

### Error: Not Found 问题

- owner 或者 repo 配置错误了，注意名字和仓库名字的大小写。

### Error: Comments Not Initialized

- 在注册 OAuth Application 步骤中，给 Authorization callback URL 指定的地址错误。
- 未在网页的 Gitment 评论区登陆 GitHub 账号

### Error：validation failed

因为 issue 的标签 label 有长度限制，最大长度限制是 50 个字符。因为 id 太长，导致初始化失败，用文章的时间，这样长度是保证在 50 个字符内，完美解决！

如果你使用的是 Maupassant 主题，则在 comments.pug 文件中找到，

并添加`id: '#{ page.date }',`字段，最终如下：

```js
var gitment = new Gitment({
  id: '#{ page.date }',  #新增部分
  owner: '#{theme.gitment.owner}',
  repo: '#{theme.gitment.repo}',
  oauth: {
    client_id: '#{theme.gitment.client_id}',
    client_secret: '#{theme.gitment.client_secret}',
  },
})
gitment.render('container')
```

### Error：[object ProgressEvent]

在母版中调用的 js 文件中，有访问 gitment 作者的服务器代码，而作者的服务器不好使了。需要自己搭建一个服务器或采用网上现成的服务。所以需要修改 `comments.pug` 的另一段，最终如下（下面的服务暂时可用）。如需了解最新情况，可访问 [issue](https://github.com/imsun/gitment/issues/170)。

```
if theme.gitment.enable == true
  #container
  link(rel='stylesheet', href='https://jjeejj.github.io/css/gitment.css')
  script(src='https://jjeejj.github.io/js/gitment.js')
  script.
    var gitment = new Gitment({
      id: '#{ page.date }',
      owner: '#{theme.gitment.owner}',
      repo: '#{theme.gitment.repo}',
      oauth: {
        client_id: '#{theme.gitment.client_id}',
        client_secret: '#{theme.gitment.client_secret}',
      },
    })
    gitment.render('container')
```

以上设置后，博客的评论系统就正式上线了。
