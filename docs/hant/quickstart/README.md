# 準備步驟1-下載mcl
## [一鍵安裝版](https://github.com/iTXTech/mcl-installer)(建議)
直接安裝[iTXTech/mcl-installer](https://github.com/iTXTech/mcl-installer)即可，按照他們的[README](https://github.com/iTXTech/mcl-installer/blob/master/README.md)來操作
## [無JDK版](https://github.com/iTXTech/mirai-console-loader)
首先，把[OpenJDK安裝](https://haoming9245.top/2023/05/18/OpenJDK%E5%A4%9A%E7%B3%BB%E7%BB%9F%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B/)好  

Windows  
下載[release](https://github.com/iTXTech/mirai-console-loader/releases)，之後運行mcl.cmd即可  

Linux(摘抄的README，但是改了一點點)
```
mkdir mcl && cd mcl
wget https://github.com/iTXTech/mirai-console-loader/releases/download/v2.1.2/mcl-2.1.2.zip    #這裏wget你想要的release
unzip mcl-2.1.2.zip     #在mcl文件夾解壓縮下載好的release
mcl
chmod +x mcl
./mcl
```