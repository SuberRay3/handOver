# 肾内科

肾内科项目主要由 **出入院登记(admission-regist-src)** **病理平台(pathology-src)** **日报表统计(daily-shift-src)** 组成。

前两个由我负责。

## 院内后台链接

```js
var backApi = {
    'system-management': {                                                  // 登录
        'url': 'http://172.18.134.123:35118/security-server/'
    },
    'admission-regist-src': {                                               // 出入院登记
        'url': 'http://172.18.134.123:35112/admission_regist'
    },
    'pathology-src': {                                                      // 病理平台
        'url':'http://172.18.134.123:35112/admission_regist/pathology/',
    },
    'daily-shift-src': {
        'url':'http://172.18.134.123:35112/admission_regist/',              // 日报表统计
    },
    'navi': {                                                               // 菜单
        'url': 'http://172.18.134.123:35118/security-server/menu/platform/tree'
    }
}
```
