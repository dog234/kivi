# 发布插件
***
:::tip 推荐(云端)
如果你的插件有**实用的功能**，<br>建议发布到[npmjs平台](https://www.npmjs.com/)，
以供他人更方便的下载！
:::
**按照下面步骤依次操作:**
## 注册账号
在[npmjs平台](https://www.npmjs.com/)，**注册你自己的账号**。<br>
>请记住你的名称，密码，以及邮箱。
## cd 文件夹
接下来有两种操作:
- **方法一:** 终端 `cd` 到 框架 > plugins > `插件所在文件夹`!<br> 文件夹下应有index.js文件
```cmd
cd /plugins/myplugin 
```
- **方法二:** 新建文件夹，将index.js拖入

## 执行指令
1.**初始化** 模块/包
```cmd
npm init 
```
根据提示设置参数:
>name：kivibot-plugin-xxxx<br>
version：Enter<br>
description： 简单介绍模块内容<br>
main： Enter/入口文件<br>
test command： Enter<br>
git repository： Enter/若在github发布可有<br>
keywords： 关键词(kivibot)<br>
author： 作者<br>
license（ISC）：Enter/代码授权许可

2.**检测报错**
***
```cmd
npm install -g
```

3.**连接账号**
***
输入名称，密码，邮箱
```cmd
npm link
npm login
```
4.**上传代码**
```cmd
npm publish
```
## 更新插件
```cmd
npm version patch
//更新版本号
```
```cmd
npm publish
```

## 更改信息
可以到[npmjs平台](https://www.npmjs.com/)更改你的packages信息。


