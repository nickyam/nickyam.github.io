---
title: "Mac劫持插件any search（TotalSearchToolbox）删除的处理方法"
date: 2019-12-16
tags:
  - "数码"
categories: ["科技"]
slug: mac-any-search-plugin-removal



---
前段时间，我的 chrome 被劫持到了`any search`搜索页面，使用体验非常不好。我在 设置 > 扩展程序 里找到了一个叫做`TotalSearchToolbox`的插件，禁用删除以后，世界就清静了。但是没过几天，这个恶意插件重出江湖，并且同时感染了 Chrome、Firefox 和 Safari。

这次我上网求助，发现这是一个臭名昭著的插件，而且比较难缠，只能手动删除相关文件。

1.到路径： `/Library/LaunchDaemons` 删除： `com.SearchFunctionDaemon.plist`

2.删除 `/Library/Application support/com.SearchFunctionDaemon`文件夹

3.到路径：`~/Library/LaunchAgents`，删除 `anysearch` 相关的文件

4.上述步骤可能并不完全适用每一个人，但是原理是相通的，就是到`/Library`和`～/Library`删除近期一切可疑的文件及带着`TotalSearchToolbox`和`any search`字样等文件。

5.同步去重新设置几大浏览器，删除相应的恶意插件。至此，我的 Chrome 和 Firefox 恢复正常了，但是 Safari 的主页设置部分是灰色的，无法修改，依然被劫持。

6.后来才发现，这个插件最恶心的是将自己伪装成了描述文件，因此还有最关键的一步，需要进入`系统偏好设置` 的`描述文件`里，删除相应文件。我这里显示的就是三条`TotalSearchToolbox`！！！

删除描述文件以后，我重新打开了 Safari，在 偏好设置 > 通用 里重新设置了主页，世界一下子安静了～

与这个插件斗智斗勇的过程，我意识到两点：

一是苹果电脑也并不是万能的，在越来越受欢迎的当下，病毒也会越来越多，不能随便下载安装来路不明的软件，不能随便输密码同意。

二是 CleanMyMac 等传统的清理和维护软件都无法识别和一键清理，再香的东西都有局限性。
