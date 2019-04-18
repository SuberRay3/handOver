# PC 端打包

## 代码解析

```js
// server175
fis.media('server175')
  .match('/*-src*/**.js', {
      // fis-optimizer-uglify-js 插件进行压缩，已内置
      optimizer: fis.plugin('uglify-js', {
          compress: {
              drop_console: true
          }
      }),
      parser: fis.plugin('babel-5.x', {   // es6 语法转义
          blacklist: ["useStrict"],
          compact: false
      })
  })
  .match('::package', {
      packager: fis.plugin('map', {
          'env/env.js': [                     // 将 env 文件下的 env.server175.js 达成 env.js
              'env/env.server175.js'
          ],
          'system-management/all.js': [
              'system-management/js/app.module.js',
              'system-management/*/*.js',
              '!system-management/*/intranet-constant.jss',
              '!system-management/*/online-constant.jss'
          ],
          'pathology-src/all.js': [           // 对项目 js 代码进行 optimizer 和 parser 中定义的操作，并将多个文件合并为一个 all.js
              'pathology-src/js/app.module.js',
              'pathology-src/js/*.js',
              '!pathology-src/fe-api-server/*.js',
          ],
      })
  });
```

上述打包出来的 `all.js` `env.js` 会在各自项目中的 `index.html` 中引用。

```html
<!-- /index.html -->

<!-- env.js -->
<script src="../env/env.js"></script>

<!-- all.js -->
<script type="text/javascript" src="all.js"></script>
```

## 常见问题

#### **1. 项目如何启动？**

定位到项目的 `extract/extract` 目录下，输入 `./restart.sh` 然后回车。默认会启动在 localhost:2000 下。

```sh
# ./restart.sh

echo "release"
# 清除原有服务
fis3 server stop
fis3 server clean

# 本地开启服务，端口号自己指定即可
fis3 server start -p 2000


# 匹配 fis-config.js 中 fis.media('develop') 对应的规则并启动。 
fis3 release develop -wL
```

#### **2. 医院内网要部署该怎么办？**

**情景模拟**

“肾内科需要更新部署了，给我重新打个包吧！”

*方法一 :*

1. 选择一个不是 `develop` 的打包配置，例如 `server175`。fis-config.js 中对应的 env 走的是 `env.server175.js`。

```js
// env.server175.js
var backApi = {
    'system-management': {
        'url': 'http://192.168.1.175:35118/security-server/'
        // 'url': 'http://192.168.1.174:21026/security-server/'
    },
    'navi': {
        'url': 'http://192.168.1.175:35118/security-server/menu/platform/tree'
    },
    'admission-regist-src': {
        'url': 'http://192.168.1.175:35112/admission_regist'
    },
    'pathology-src': {
        'url': 'http://192.168.1.175:35112/admission_regist/pathology/',
    },
    'daily-shift-src': {
        'url': 'http://192.168.1.175:35112/admission_regist/',
    }
};
```
2. 将上一步中的项目地址改为医院内网的地址，如果随意挑选的 env.***.js 中没有本次部署的项目，可以手动添加。

3. 运行打包命令

```sh
fis3 release server175 -d ~/Document
```

4. 将 env.***.js 还原。

*方法二 :*

1. 选择一个不是 `develop` 的打包配置，例如 `server175`。fis-config.js 中对应的 env 走的是 `env.server175.js`。

2. 运行打包命令

```sh
fis3 release server175 -d ~/Document
```

3. 手动更改打出的包下 env/env.js 中项目对应的地址。


#### **3. 公司内网要部署该怎么办？**

如果采取打包的方式，过程可以完全参照医院部署的方式。

如果采用 JenKins 的方式，需要明确以下要点：

- JenKins 读取的是哪个分支下的代码
- Jenkins 读取的 env 文件名称是什么

第一点决定了我们修改后的代码提交到哪个分支才能看见修改效果。

第二点则需要协商好 env 读取的文件。

如果是读取目前项目中已有的 env 配置，例如 env.server175.js，我们只需要确保 env.server175.js 中有需要的项目的连接地址即可。

如果是读取目前项目中没有的 env 配置，例如部署在从未部署过的服务器（例：176） 上，我们则需要新建一个 env.server176.js (名字自定义，但为了规范，尽量保持统一风格)。文件内部填写本次部署的所有的项目连接。

**不要忘了在 fis-config.js 中增加一套 `fis.media('server176')` 的打包规则。内容可参照其他服务器的配置**




