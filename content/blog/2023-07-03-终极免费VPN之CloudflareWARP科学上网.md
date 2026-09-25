---
title: "终极免费VPN之CloudflareWARP科学上网"
date: 2023-07-03
tags:
  - "科学上网"
  - "云计算"
categories: ["科技"]
slug: cloudflare-warp-free-vpn


---
**提示： 想了解更多 VPN 相关资讯，请点击</tags/vpn/>，持续更新 ing。**

大名鼎鼎的 Cloudflare 成立于 2009 年，专注于提供各种网络服务，以增强网站的性能和安全性，现在已经是全球领先的内容分发网络（CDN）、云服务和网站安全解决方案提供商之一。

而本文的主角 WARP 是 Cloudflare 公司推出的可以用来保护使用者隐私的一款服务。WARP 基于 wireguard 协议，使用 UDP 来传输数据，这也就意味着在公网中的高 QOS，但是 WARP 的 IP 相对比较干净，对外访问网络的出口 IP 被很多网站视为真实用户，可以用来解锁流媒体、谷歌学术等。

Zero Trust，俗称 team，是由 Cloudflare 推出的面向团队的 VPN 服务，由于其登录 1.1.1.1 可以获得无限流量，不需要再通过刷邀请流量的方式来获得 WARP+流量。  
![](/images/remote/img_d019bfb9_775afbdfab71aac304654.png)

**优势**

- 免费 且 无限流量
- WARP 协议更加底层，兼容性强

**劣势**

- 无法选择节点（免费版）
- 速度不稳定

## 初级篇：安装 1.1.1.1

进入官网: <https://1.1.1.1/>，即可下载对应系统下的版本。

![](/images/remote/img_5685e731_3bcb27cbf44f3e20dcaed.png)

苹果用户建议使用美区 AppStore 账号进行下载，直接搜索 1.1.1.1。  
![](/images/remote/img_ad6851ab_b797fbf8fb3dc92d5e7e9.jpg)

如果没有美区账号，请查看[苹果美区账号注册教程](/blog/us-apple-id-registration-tutorial/)花几分钟自己申请一个即可。

安卓、windows 直接在官网下载。

**提示：1.1.1.1 免费用户只有 1GB 流量。你可以先尝个鲜。**

## 中级篇：升级为 WARP+

**一、如果你有 Telegram 账户，可通过电报机器人获取 warp+ 的 key，立马拥有 24PB+流量。**

WARP+BOT: <https://t.me/generatewarpplusbot>

根据机器人指令即可达成。

在获取到 key 后，打开 1.1.1.1，右上角设置->账户->按键，再点击“更改密钥”，将 key 填入保存即可。

**二、如果你没有 Telegram 账户，也可以在网上搜寻 key，填入密钥即可。**  
本文提供密钥如下：  
fZJ70D89-a0J895Bi-9WYP1h20  
253hu6CP-Wf0g4H73-30c1v6qa  
4709JFxY-r2is09Y1-9kRQ054r  
678q5laO-b7g0e5I1-0372yeml  
4i8Q0V7x-O2M910me-4hj0XB28  
5I7KRs14-21c9s7eG-02pZHd64  
7lgXj613-p503UsY1-gE75U6V3  
0omQX694-h4b863Pd-6Yu2yk09  
3j0M45wA-uo0B2t69-7aT3gA04  
d27T1D6o-p9ML34r7-t3092Dla

## 高级篇：升级为 Zero Trust

### 方案一：直接使用

若只是想使用,可以直接跳过申请,安装软件后在设置中找到 Zero Truth ，按以下配置登录即可。  
某公开 team 团队名称为 ajiajs，邮箱验证的后缀为@163.com。(ps：团队人数最多允许 50 人)  
![](/images/remote/img_b44a2891_977de96841c2fec3b7c8d.png)

### 方案二：自己创建

1、登录 Cloudflare 账号  
官网：<https://dash.cloudflare.com/>  
 登陆后看到主页如下：  
![](/images/remote/img_62e3ec00_21c9b7bc3fa4d6129e249.png)

2、打开 Zero Trust  
设置一个自己能记住的团队名称、点击 Next  
![](/images/remote/img_004a1eb0_c09344ad43a73d1a27bd7.png)

跳转到下一界面之后，选择 Free plan。  
![](/images/remote/img_e54f63bf_a4831244e51090f2ba214.png)

free 计划最多支持 50 人同时使用，接下来会让你绑定付款方式，**这里不需要绑定付款方式，弹出绑定付款方式时，团队已经创建成功**，我们直接回到官网首页，访问 Zero Trust 即可。

3、设置认证方式  
(1)依次点击 My Team—Devices—connect a device  
![](/images/remote/img_3425fe37_957030e21f9888d216a01.png)  
(2)设置一个你常用邮箱的后缀，例如@163.com

(3)设置成功后即可在你们需要登录 Team 的设备上进行登录  
![](/images/remote/img_edc3e74a_440da321a896469065596.jpg)

4、如果你增加或者变更邮箱后缀  
(1)点击设置和 WARP client：  
![](/images/remote/img_79f76e09_ab8b0833593b73777c8c1.jpg)  
(2)点击蓝色的“Manage”按钮  
![](/images/remote/img_71390e1c_563a157313e16a8710b62.jpg)  
(3)点击“Add a rule”按钮  
![](/images/remote/img_fbf6f8e3_ee68da2f57e3c1a4b4c15.jpg)  
(4)按照下图配置，Value 处请填写你的邮箱后缀（例：[hi@gmail.com](mailto:hi@gmail.com)，后缀为@gmail.com）。点击“Save”保存规则。  
![](/images/remote/img_21d6bc32_e4d6b476bef82490c9a86.jpg)  
(5)继续 save 即可。

**最后惯例，在“外面”请不要随意评论以及乱浏览。**


## 相关文章

- [VPN就和吃喝拉撒一样重要](/blog/vpn-essential-as-eating/)
- [适用于Mac的最佳免费VPN推荐](/blog/best-free-vpn-for-mac/)
- [适用于iOS的最佳免费加速器推荐](/blog/best-free-ios-accelerator/)
- [超好用的安卓加速器，免费速度还快！](/blog/best-free-android-accelerator/)
