---
title: "如何让 Hexo 不渲染部分 Markdown 文件"
date: 2024-03-25
tags:
  - "建站"
  - "教程"
categories: ["科技"]
slug: hexo-skip-rendering-markdown


---
默认情况下，Hexo 会渲染所有的 HTML 和[Markdown](https://info.nickyam.com/tags/markdown/)文件。在`source`文件夹下的所有开头不是下划线的文件，在`hexo generate`的时候，都会被拷贝到`public`文件夹下。

如果在 Hexo 建站过程中，如何让 Hexo 不渲染部分 markdown 文件呢？

这时候需要使用 skip_render 配置。

根据 Hexo 文档中的说明，通过在`_config.yml`配置文件中使用`skip_render`参数，可以跳过指定文件的渲染。路径匹配可以使用正则表达式。

使用方式如下：

`skip_render: [file/**, img/**]`

注意：`skip_render`参数设置的路径是相对于`source`目录的路径。例如，需要跳过渲染`source/README.md`，只需要设置 `skip_render:README.md`。

在设置了跳过渲染之后，最好使用`hexo clean`清除以前的编译结果，保证配置生效。

如果本来有一个 HTML 文件的话，可以简单地在文件开头加上 layout: false 一行。

```
layout: false
---

<html>
...
```
