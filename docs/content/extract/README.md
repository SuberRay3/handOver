# 取数

## 演示地址

#### 内网
- [取数 朝阳](http://192.168.1.174:2000/extract-src/#/view)
  账号：chenyangyu  密码：chenyangyu

  账号：test  密码：test

#### 主分支

- 仓库： http://192.168.1.62:9999/dev/front.end2016/extract.git （front.end2016）
- 分支： master

#### 朝阳分支

- 仓库： http://192.168.1.62:9999/dev/front.end2016/extract.git （front.end2016）
- 分支： extract-chanyang-theme

:::tip
上述两个分支代码始终保持统一，主要不同就是 extract-chanyang-theme 中各项目的 `index.html` 文件中会多一个 `chaoyang-theme-red.scss` 的红色主题文件。
:::

## 代码细节

::: tip
**取数的核心提取过程完全依靠 `src/widget/extract-choser` 完成。**
:::

**1. 页面数据**

`alltree` 接口：返回左侧导航所有数据 + 右侧最外层数据

`all` 接口：返回右侧具体子集数据

- **extractChoser 指令** 

`summaryData` -> 由 `DataAdapter.convertCategory` 加工过后形成渲染左侧导航。

`allData` -> 右侧具体的选项数据，通过 `DataAdapter.convertPopUp` 加工成如：性别 -> 男 / 女 的形式。原始数据是没有男女这一部分的。

::: tip
左侧导航选中状态通过点击事件为对应的数据添加 `$active: true` 状态。

右侧子集展开效果通过为数据添加 `$active: true` 实现，元素自身选中状态则是通过为数据添加 `$checked: true` 实现。
:::

最终通过 `TaskInteractiveService.setCompleteData` 方法将左右两侧的数据进行合并。合并的基本逻辑是 **alltree '性别'层级的tagId对应all接口的'id'进行父子级拼接**

**2. 页面切换数据回溯**

```js
//返回此页面要做数据匹配对应
if(scope.mappingData){
    TaskMappingService.taskRollbackMapping(scope.allData.data,scope.mappingData,scope.used);
}
```






