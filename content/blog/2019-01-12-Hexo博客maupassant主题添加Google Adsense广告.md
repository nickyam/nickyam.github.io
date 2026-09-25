---
title: "Hexo博客maupassant主题添加Google Adsense广告"
date: 2019-01-12
categories: ["科技"]
tags:
  - "建站"
  - "谷歌"
slug: hexo-maupassant-google-adsense


---
自从在 Github Page 落户以后，很长一段时间使用的是极简且有点艺术范儿的 fexo 主题，而不是大名鼎鼎的 next 主题。后来偶然发现了符合我审美的 Hexo 博客 [maupassant](https://www.haomwei.com/technology/maupassant-hexo.html) 主题，准备好好经营，但是更新博客的动力不足。新的一年开始，我终于决定引入 Google Adsense ，让自己的博客显得主流一点，如果能够顺便赚些零花钱当然更好了。本文默认读者已经注册了 Adsense 账号，下面仅仅分享一下具体的设置步骤，方便自己以后备查。

从 Adsense 中下载具体广告模块代码，需要注意的是你下载的是 JavaScript 代码，而我们的 maupassant 使用的是 Jade ，不需要自己写，使用在线转换器就好：[html2jade](https://www.html2jade.org/)。最新版的已经改用 pug 了，但是其实 pug 和 jade 是同一件事情。

打开主题目录下的 maupassant/_config.yml 文件,添加个广告控制开关：

```
show_ad_post: true  ##设置为 true
```

在 maupassant/layout/_partial/head.pug 里添加代码：

```
if theme.show_ad_post
  script(async='', src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
  script.
    (adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "ca-pub-XXXXX", enable_page_level_ads: true});
```

这段代码是从你申请的 Adsense 账户中复制下来的，其中 ca-pub-XXXXX 替换成自己的账号就行了。但是这样的设置完全让 Google 为我们决定广告的位置，有时候显得页面比较乱，博客的可读性比较差。可以考虑在 Adsense 中创建广告位，然后在特定位置加上代码就好了，我的选择是在文章结束，评论上方加上一条的广告。

本站就是用第一种方法部署了广告，还请大家多多关照！
