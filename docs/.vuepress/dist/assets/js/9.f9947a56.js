(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{218:function(t,a,e){"use strict";e.r(a);var r=e(2),v=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"慢病-v2-0-mobile-端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#慢病-v2-0-mobile-端","aria-hidden":"true"}},[t._v("#")]),t._v(" 慢病 V2.0 Mobile 端")]),t._v(" "),e("h2",{attrs:{id:"演示地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#演示地址","aria-hidden":"true"}},[t._v("#")]),t._v(" 演示地址")]),t._v(" "),e("p",[t._v("微信关注 “溪流健康” 公众号，点击底部 "),e("strong",[t._v("慢病管理患者端")]),t._v(" 进入。")]),t._v(" "),e("h2",{attrs:{id:"代码管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码管理")]),t._v(" "),e("ul",[e("li",[t._v("仓库：http://192.168.1.62:9999/dev/front.end2017/chronic.git")]),t._v(" "),e("li",[t._v("分支：master")])]),t._v(" "),e("h2",{attrs:{id:"开发工具安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发工具安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发工具安装")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/cytle/wechat_web_devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("linux 下安装微信开发者工具的方法"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"本地开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地开发","aria-hidden":"true"}},[t._v("#")]),t._v(" 本地开发")]),t._v(" "),e("h3",{attrs:{id:"事先准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事先准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 事先准备")]),t._v(" "),e("p",[t._v("首先需要开发者在开发人员列表内。博哥添加一下即可。")]),t._v(" "),e("h3",{attrs:{id:"具体流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具体流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 具体流程")]),t._v(" "),e("ol",[e("li",[t._v("使用个人习惯的 IDE 加载本地项目。")]),t._v(" "),e("li",[t._v("定位到项目根目录下。")]),t._v(" "),e("li",[t._v("运行 "),e("code",[t._v("ionic serve")]),t._v(" 指令，默认会在本地 8100 端口下启动服务。")]),t._v(" "),e("li",[t._v("由于真实微信环境下要求我们先去验证，验证通过后会重定向回到我们的项目并自动在链接中增加 "),e("code",[t._v("?code=xxx")]),t._v(" 参数。所以我们在本地开发的时候需要手动在 "),e("code",[t._v("localhost:8100")]),t._v(" 后方添加一个假的 "),e("code",[t._v("code")]),t._v(" 模拟验证以达到通过项目中的验证逻辑代码。综上，我们本地开发的场景就是在服务启动完毕后使用 "),e("code",[t._v("http://localhost:8100/?code=132")]),t._v(" 进行开发调试。")]),t._v(" "),e("li",[t._v("通过验证逻辑后，我们还需要启动一个 ××本地 mock 数据服务（前端开发手动开启）××。具体方法： 定位到项目的 "),e("code",[t._v("fe-api-server")]),t._v(" 目录下 --\x3e 运行 "),e("code",[t._v("nodemon app.js")]),t._v(" 指令（如果没有安装 nodemon， 运行 "),e("code",[t._v("npm install nodemon -g")]),t._v(" 进行安装）。一切准备就绪后我们就可以愉快的进行本地开发了。")])]),t._v(" "),e("h2",{attrs:{id:"线上发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线上发布","aria-hidden":"true"}},[t._v("#")]),t._v(" 线上发布")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("本项目采用的是 Jenkins 线上自动构建的方式。")])]),t._v(" "),e("p",[t._v("我们只需要将将本地代码 push 至 gitLab 项目代码仓库的 master 分支上，再在线上点击构建即可完成发布。")]),t._v(" "),e("p",[t._v("查看真实效果可以通过登录微信开发者工具，访问 "),e("code",[t._v("http://wechat.infisa.com.cn/")]),t._v(" 。")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",[t._v("第一遍构建完成后在微信开发者工具查看可能会出现更改未生效的情况。这时可以尝试清除开发者工具缓存的方式解决。如果实在无法解决问题就需要再次构建，这时 99% 的概率可以解决问题。具体原因不详...")])])])},[],!1,null,null,null);a.default=v.exports}}]);