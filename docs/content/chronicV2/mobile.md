# 慢病 V2.0 Mobile 端

## 演示地址

微信关注 “溪流健康” 公众号，点击底部 **慢病管理患者端** 进入。

## 代码管理

- 仓库：http://192.168.1.62:9999/dev/front.end2017/chronic.git
- 分支：master

## 开发工具安装

[linux 下安装微信开发者工具的方法](https://github.com/cytle/wechat_web_devtools)

## 本地开发

### 事先准备
首先需要开发者在开发人员列表内。博哥添加一下即可。

### 具体流程

1. 使用个人习惯的 IDE 加载本地项目。
2. 定位到项目根目录下。
3. 运行 `ionic serve` 指令，默认会在本地 8100 端口下启动服务。
4. 由于真实微信环境下要求我们先去验证，验证通过后会重定向回到我们的项目并自动在链接中增加 `?code=xxx` 参数。所以我们在本地开发的时候需要手动在 `localhost:8100` 后方添加一个假的 `code` 模拟验证以达到通过项目中的验证逻辑代码。综上，我们本地开发的场景就是在服务启动完毕后使用 `http://localhost:8100/?code=132` 进行开发调试。
5. 通过验证逻辑后，我们还需要启动一个 ××本地 mock 数据服务（前端开发手动开启）××。具体方法： 定位到项目的 `fe-api-server` 目录下 --> 运行 `nodemon app.js` 指令（如果没有安装 nodemon， 运行 `npm install nodemon -g` 进行安装）。一切准备就绪后我们就可以愉快的进行本地开发了。

## 线上发布

::: tip
本项目采用的是 Jenkins 线上自动构建的方式。
:::

我们只需要将将本地代码 push 至 gitLab 项目代码仓库的 master 分支上，再在线上点击构建即可完成发布。

查看真实效果可以通过登录微信开发者工具，访问 `http://wechat.infisa.com.cn/` 。

::: warning
第一遍构建完成后在微信开发者工具查看可能会出现更改未生效的情况。这时可以尝试清除开发者工具缓存的方式解决。如果实在无法解决问题就需要再次构建，这时 99% 的概率可以解决问题。具体原因不详...
:::

