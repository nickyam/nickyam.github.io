---
title: "如何在苹果电脑上安装 Anaconda 和 Python"
date: 2024-03-28
tags:
  - "教程"
categories: ["科技"]
slug: install-anaconda-python-on-mac



---
[Anaconda](/blog/install-anaconda-python-on-mac/)是一个开源的 Python 和 R 语言的发行版本，用于计算科学（数据科学、机器学习、大数据处理和预测分析），Anaconda 致力于简化软件包管理系统和部署。

Anaconda 的包使用软件包管理系统 Conda 进行管理。Anaconda 拥有超过 1400 个适用于 Windows、Linux 和 MacOS 的数据科学软件包。

Ananconda 官网给我们提供了安装包，网上也有很多安装教程。而今天我们要用 Homebrew 安装 Anaconda，并配置 Python 环境。

因为涯木君用的是 m2 芯片的 mac，所以在这里介绍 mac 下 anaconda 的安装方式，并且重点介绍如何使用 homebrew 进行安装和配置。

## 安装方式 I - GUI 安装

官网下载：[www.anaconda.com](http://www.anaconda.com/)

直接下载解压安装即可。

## 安装方式 II - Homebrew 安装

Homebrew 就相当于命令行版本的 Appstore 了，是 mac 中非常流行的包管理软件。

安装方式详见：[如何在苹果电脑上安装 Homebrew](/blog/install-homebrew-mac/)。

如果你的 mac 已经安装了 Homebrew，可以直接使用 brew 安装 anaconda，只需要一行命令：

```bash
brew install --cask anaconda
```

## Anaconda 环境变量配置

anaconda 安装后，依然无法使用 conda 命令。这就需要配置环境变量，也就是在命令解释器的配置文件中写入 anaconda 的地址。

我电脑上 anaconda 安装的位置是`/opt/homebrew/anaconda3`。

### 命令行

#### bash 解释器

```bash
echo 'export PATH="/opt/homebrew/anaconda3/bin:$PATH"' >> ~/.bash_profile
```

这句命令含义是把这个句子写入配置文件（.bash_profile）。

再运行下面的命令更新一下：

```bash
source ~/.bash_profile
```

#### zsh

如果你用的是 zsh，对应的文件就是(.zshrc)而不是(.bash_profile)，分别需要运行以下两个命令。

```bash
echo 'export PATH="/opt/homebrew/anaconda3/bin:$PATH"' >> ~/.zshrc
```

```bash
source ~/.zshrc
```

### 直接改配置文件

1. 使用 nano 或者 vim 打开配置文件:

如果是 bash：

```bash
nano ~/.bash_profile
```

如果是 zsh：

```bash
nano ~/.zshrc
```

把以下部分保存到文件里：

```bash
export PATH="/opt/homebrew/anaconda3/bin:$PATH
```

2. 刷新一下

如果是 bash：

```bash
source ~/.bash_profile
```

如果是 zsh：

```bash
source ~/.zshrc
```

## 使用 Anaconda 创建环境并激活使用

Anaconda 类似于一个沙盒，可以帮你构建一个个互相隔离的环境，在每个环境下面你可以安装不同版本的各种包，以满足程序要求。

### 创建环境

```bash
conda create -n <env_name>
```

是你给环境起的名字。

如果你想要安装最新版的 python，那么可以直接用这条命令：

```bash
conda create my_env python=3.12.2
```

### 激活创建的环境

```bash
source activate
```

```bash
conda activate <env_name>
```

## Anaconda 常用命令

### 环境管理命令

- 创建新的 python 环境：`$ conda create --name myenv`
- 并且还可以指定 python 的版本：`$ conda create -n myenv python=3.8`
- 创建新环境并指定包含的库：`$ conda create -n myenv scipy`
- 并且还可以指定库的版本：`$ conda create -n myenv scipy=0.15.0`
- 复制环境：`$ conda create --name myclone --clone myenv`
- 查看所有环境：`$ conda info --envs`
- 激活、进入某个环境：`$ source activate myenv`
- 退出环境：`$ conda deactivate / $ source deactivate`
- 删除环境：`$ conda remove --name myenv --all`
- 查看当前的环境列表：`$ conda info --envs / $ conda env list`
- 克隆一个环境：`$ conda create --name clone_env --clone envname`

### 包/库管理命令

- 查看 conda 版本：`$ conda --version`
- 更新 conda 版本：`$ conda update conda / anaconda`
- 查看都安装了哪些依赖库：`$ conda list` 或 `$ conda list -n env`
- 更新所有库 `$ conda update --all`
- 查看某个环境下安装的库：`$ conda list -n myenv`
- 查找包：`$ conda search <package>`
- 安装包：`$ conda install <package>`
- 安装到指定环境：`$ conda install -n myenv <package>`
- 更新包：`$ conda update <package>`
- 删除包：`$ conda remove <package>`

### 高级命令

1. 导出当前环境中的包并按照该文件创建新环境：

   ```bash
   conda list --explicit > requirements.txt
   conda create --name newenv --requirements.txt
   ```

   向一个已存在的环境里安装包

   ```bash
   conda install --name newenv --file requirements.txt
   ```
2. 分享环境

   ```bash
   conda env export > environment.yml
   ```

   将该文件放在工作目录下，可以通过以下命令从该文件创建环境

   ```bash
   conda env create -f environment.yml
   ```
3. 更新 conda 至最新版本

   ```bash
   conda update conda
   ```
4. 查看 conda 环境管理命令帮助信息

   ```bash
   conda create --help
   conda -h  #查看帮助信息
   ```

另外，我们也可以在 Anaconda-Navigator 中利用图形界面，创建、删除环境。
