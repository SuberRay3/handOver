# 慢病 V2.0 PC 端

:::warning
  🔺重要元素
:::

## 演示地址

#### 内网
- [慢病v2.0 PC 端 朝阳](http://192.168.1.174:2000/chronic-disease-V2-src/#/list)
  账号：manbing  密码：123qwe

- [慢病v2.0 PC 端 呼吸科](http://192.168.1.181/chronic-disease-V2-src/#/list)
  账号：huxk 密码：huxk

#### 阿里云
- [慢病v2.0 PC 端 微医](http://emr.infisa.com.cn/chronic-disease-V2-src/#/list)
  
  账号：zhuren  密码：zhuren

:::tip
和移动端共用一个数据库，所以阿里云主要是为了跟公司外的客户演示。尽量保持稳定。
:::

## 代码管理

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

- **`basic.directives.js`** **基础指令**

:::tip
承担了一部分 `component` 的任务。
:::
  
  已存在患者指令(existedPati)、全新患者指令(brandNewPati)、totast 提示框(toastPop)、时间范围选择(iptDateRange) ...

- **`utils.directives.js`** **工具指令**

:::tip
主要为了解决页面渲染过程中数据不合适问题，通过渲染过程代替 controller 中遍历的过程。
:::

  🔺`sortData`: 将后台返回的无序对象改为有序数组，便于循环中展示。主要用在单条计划递归渲染时。

  因为返回的原始数据是对象类型，导致前端无法按照理想顺序渲染，故实现此指令。

  ```html
  <ul class="content-list"
      sort-data
      data-pre-level="{{$ctrl.preMapLevel}}">
  </ul>
  ```

  🔺`copyContentToScore`: 解决量表中小文本类型值的转移任务。

  🔺`converAnsobjToOptobj`: 解决单选和多选类型的结果存放。

  `toggleCollapse`: 控制可折叠元素上的展开 / 收起状态。

  `toggleAll`: 目前已不再引用。

  `numToString`: 将数字类型的数据转为字符串，**主要为了解决 select 无法 ngModel** 的问题。

  🔺`addResultField`: 为分配方案的原始数据 schemeTemplate -> schemeMaterials 同级增加result 字段，内容和 schemeMaterials 一模一样

  🔺`planItemSearch`: 方案搜索

  - **`form/Scale.js` 量表相关指令**

  🔺`chronScaleModal`: 量表内容模态框

  `saveScale()`: 保存量表计算结果，并且将用户此次保存的量表填写结果缓存在 session 中。

  ```js
  // 初始化填写第一个量表
  sessionStorage.setItem('savedScales', JSON.stringify(fistRst))
  // 第一个之后的量表
  sessionStorage.setItem('savedScales', JSON.stringify(savedRst))
  ```

  `calcScale()`: 计算结果

  循环遍历选中的**单选**和**多选**元素的 `choicedOptionList` 属性将其 `concat` 到一起，存入 `checkedRad: Array[]` 变量中。

  对于 **时间-年月日** 和 **小文本输入** 则是直接将元素 `optionList[0]` `push` 进 `checkedRad` 中。

  最终将 `checkedRad` `POST` 给后台进行计算。

  `saveScale()`: 保存计算结果

  `scope.input` 对应的是点击弹出量表模态框时的 input 框数据实体。

  ```js
    scope.input = {
      bizName: "呼吸困难指数（mMRC）_a_35",
      changed: false,
      children: [],
      description: null,
      exportTag: "1",
      filterTag: "1",
      formulaName: null,
      group: null,
      hasNecessary: false,
      hasNotNull: false,
      id: null,
      label: "呼吸困难指数( mMRC)",
      name: "呼吸困难指数（mMRC）_a_35",
      notNull: false,
      order: 0,
      parent: "呼吸困难指数（mMRC）",
      patiProperty: "null",
      scaleUrl: "2",
      score: "2", // 存储了返回结果的第一项的 score 属性
      type: "量表",
      unit: null,
      value: " mMRC-分级1,11", // 计算结果(多个'；'隔开的计算结果用于页面展示), 结果id (为了后台定位最新结果)
      width: null
    }
  ```

- **planFieldMap 方案渲染模版 & 按钮**

- **量表公式自动计算**

`form.directive.js -> inputTextCalc`: 处理 CRF 中需要自动计算的表单项。

后台返回的数据中，具有 **`formulaName`** 属性的对象代表这个表单项需要自动计算。属性的值对应 `inputTextCalc` 指令里定义的计算规则。

::: warning
计算 model 元素的 `formulaName` 非空，而不是计算结果的 model 元素非空。

例如：fev1 = feq + fvc，则返回的数据应是

```js
var data = {
  feq: {
    formula: '公式名'
  },
  fvc: {
    formula: '公式名'
  },
  fev1: {
    formula: null
  }
}

```
:::

  ```js
  // 计算公式对照表
  var formulaMap = {
      'FEV1/FVC实测值': function() {
          if(scope.parent[1].value && scope.parent[3].value && scope.parent[1].value > 0 && scope.parent[3].value > 0) {
              var rst = scope.parent[1].value / scope.parent[3].value * 100
              scope.parent[4].value = Utils.fixedRound(rst, 2)
          } else {
              scope.parent[4].value = null
              scope.parent[6].value = null
          }

          formulaMap['GOLD分级']()

      }
  }
  ```

  通过后台返回的公式名称在 `formulaMap` 中查找对应的计算法则。

  模板中绑定 `calc()` 触发具体的计算事件。

  ```html
  <input class="form-control" type="text" name="{{input.name}}" ng-change="calc(input.formulaName)()" ng-model="input.value" >
  ```

  



