# 异常视图

异常视图 **不是项目**。最初是为微医方系统 iframe 嵌套使用而开发。体量只是一段 HTML 片段，而后在 `record-collect-src（病史采集）` `record-src-demo（新版统一视图）` 嵌入使用过。

::: tip
异常视图作为 directive 被抽离，在 `record-src-demo/js/template.directive.js` 中定义。
:::

- `record-src-demo`：采用了直接将 HTML 拷贝到 `recordList.html` 中的引用方式。
- `record-collect-src`：采用了 `<pati-profile></pati-profile>`