---
title: "wordpress安装时Warning: Cannot modify header information - headers already sent by解决方案"
date: 2011-04-28
categories: ["科技"]
tags:
  - "建站"
slug: wordpress-headers-already-sent-fix



---

最近发现了一个不错的德国主机 kilu.de。正巧想用 wordpress 做一个 sns，就是启用 buddypress.这个实验当然不能在辍耕录（[http://rene1989.web-126.com](http://rene1989.web-126.com))本站做啦。因为本站是笔者用心维护的。

好不容易在极慢的教育网中把文件传到服务器上，在安装的时候就出现了 Cannot modify header information - headers already sent by……的错误。笔者在网上搜索了各种解决方法，然后总结： **1**.php.ini 配置问题，解决办法：打开 php.ini 然后把 output\_buffering 设为 on ,重启 appache 即可。 **2.**使用 windows 记事本编辑的 wp-config 文件造成(UTF8 编码和 BOM 冲突)，解决办法：使用 Notepad++、UltraEdit、EditPlus 等编辑器编辑文件，一般的主机管理系统自带的编辑功能也不错。（本人安装出现就是出现的就是这个问题）

如果是安装 PHP 其他程序或者自己写的程序出现以上问题，除了以上两种可能，还有可能是 setcookie 的问题，解决办法是在输出内容之前，产生 cookie，可以在程序的最上方加入函数 ob\_start(); 格式如下： ob\_start ：打开输出缓冲区 函数格式：void ob\_start(void)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

最后，笔者用 ultraeditor 把 wp-config 另存为了一下，编码采用的是 ASCI 之后，一切 OK！这种方法适合菜鸟们实现自己的理想。但是笔者不明白，为什么以前就没有碰到过呢？难道这是一个概率事件？

文章原创，转载请注明辍耕录[http://rene1989.web-126.com/](http://rene1989.web-126.com/)
