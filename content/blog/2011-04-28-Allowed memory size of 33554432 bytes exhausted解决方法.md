---
title: "Allowed memory size of 33554432 bytes exhausted解决方法"
date: 2011-04-28
categories: ["科技"]
tags:
  - "建站"
slug: php-allowed-memory-size-exhausted-fix



---

前面那篇文章说了我安装 buddypress 时候的一个问题。那个 wordpress 安装时 Warning: Cannot modify header information - headers already sent by 解决了以后，依然无法完成 SNS 的安装。为什么？因为 Allowed memory size of 33554432 bytes exhausted。于是我又开始研究这个问题。因为大家基本上都升级到 3.0 以上了，所以我不再说那些 2.x 版本的事情。

先说一说这个问题的原因——虚拟内存一般为 32M，但是由于 wordpress 的功能的增加，内存的需求也就增加了。这一点在我没做 buddypress 的时候根本没有意识到。那么我们就是需要修改内存。

**1、修改 php.ini** 到你的网站根目录下，建立一个 php.ini 文件，写入下面这句： memory\_limit = 64MB 然后再到网站根目录下修改.htaccess 这个文件，写入下面这句： SetEnv PHPRC /home/host1/public\_html/usr1/ (unix path to the directory where php.ini is) (keep the slashes)

**2、修改 php.ini**

在/wp-includes/default-constants.php 你可以找到 1 // set memory limits 2 if ( !defined('WP\_MEMORY\_LIMIT') ) { 3 if( is\_multisite() ) { 4 define('WP\_MEMORY\_LIMIT', '64M'); 5 } else { 6 define('WP\_MEMORY\_LIMIT', '32M'); 7 } 8 }

然后修改自己想要的数值就可以了。

笔者就觉得这两种比较靠谱。其他的什么在 wp-setting 或者 wp-config 里修改都已经不靠谱了！ 但是笔者最后解决了问题么，没有！因为 kilu.de 只支持 32M 内存。那么我在这里怎么改还是没有用的。所以在进行上述操作之前请先确认自己的空间服务提供商给你提供的内存是多少！

文章原创，转载请注明辍耕录[http://rene1989.web-126.com/](http://rene1989.web-126.com/)
