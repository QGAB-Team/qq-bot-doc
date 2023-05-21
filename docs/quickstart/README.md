# 准备1-下载MCL
## [一键安装版](https://github.com/iTXTech/mcl-installer)(建议)
你直接安装[iTXTech/mcl-installer](https://github.com/iTXTech/mcl-installer)即可，按照他们的[README](https://github.com/iTXTech/mcl-installer/blob/master/README.md)来操作
## [无JDK版](https://github.com/iTXTech/mirai-console-loader)
首先，把[OpenJDK安装](https://haoming9245.top/2023/05/18/OpenJDK%E5%A4%9A%E7%B3%BB%E7%BB%9F%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B/)好  

Windows  
下载[release](https://github.com/iTXTech/mirai-console-loader/releases)，之后运行mcl.cmd即可  

Linux(抄的README，但小改了一点)
```
mkdir mcl && cd mcl
wget https://github.com/iTXTech/mirai-console-loader/releases/download/v2.1.2/mcl-2.1.2.zip    #这里wget你想要的release
unzip mcl-2.1.2.zip     #在mcl文件夹解压下载的release
mcl
chmod +x mcl
./mcl
```