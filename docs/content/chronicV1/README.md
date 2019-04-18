# 慢病 v1.0 ![](https://img.shields.io/badge/%E7%8A%B6%E6%80%81-%E5%B7%B2%E5%BA%9F%E5%BC%83-red.svg)

### 0. 功能概览
慢病管理第一版，主要功能包含新建患者、患者分组、患者评估、 CRF 录入、记录随诊信息、关键指标分析。

目的是为了将慢性病患者的信息有效管理起来。根据患者入院时的基本信息和护理基本信息将患者分在对应的护理组中。医生通过定期的随访，填写对应的 CRF 和评估表，获取患者身体最新状态。

每个患者的详情页面会汇总展示历史的随访信息和评估结果的关键指标趋势。方便医生干预。

~~时间线页面 (timeline.html) 可以看到患者的护理信息，按照时间顺序排列。（未开发）~~

~~统一视图页面 (unitView.html) 可以看到患者统一视图的详细信息。（未开发）~~

### 1. 系统原型 & 业务流程
[原型 & 业务流程](http://localhost:8080/chronicV1/prototype/)

### 2. 项目状态
本版本实际在院内部署过一次，至今已长久未有维护。很大程度上已被 2.0 版本所替代。

### 3. 代码存放
- 仓库： http://192.168.1.62:9999/dev/front.end2016/extract.git （front.end2016）
- 分支： master

### 4. 演示地址
[慢病v1.0](http://192.168.1.174:2000/chronic-disease-src/#/list) (已失效)

### 5. 代码重点
#### **CRF 表单**

采用原有科研时期的表单组件。内部包含多种类型组件：时间、文本、单选、多选等。



#### **量表表单**

新开发的组件。

#### 1. 表单元素类型组件

```json
{
  '组件名': 'recurScaleContent',
  '组件模板': './form/basic-template/chron-scale-content.html'
}
```
组件内包含了以下类型：
- 单选：单项选择
- 单选-范围： 横向的单选
- 多选：多项选择
- 文本：纯文本

`setCheckbox(secChild, check)`: 将点击的多选项 copy 至 `choicedOptionList` 一份。

`setRadio(secChild, radio)`: 将点击的多选项 copy 至 `choicedOptionList` 一份。

#### 2. 评估模态框组件

```json
{
  '组件名': 'chronScaleModal',
  '组件模板': './form/basic-template/chron-scale-modal.html',
}
```

组件工具函数：
- `recur(data, callback)` 负责遍历量表原始数据，并提供回调函数，实现自定义操作。本页面**清空当前**、**converAnsobjToOptobj 指令** 用到。

#### 3. 内部指令
- `converAnsobjToOptobj`

```html
<conver-ansobj-to-optobj sec-data="secChild" opt-obj="opt"></conver-ansobj-to-optobj>
```

```json
{
  '组件作用'： '表单将已保存项选项从结果对象转化为选项对象'
}
```

后台返回的原始数据格式为： 
```json
{
  content: "1"
  id: 2
  optionId: 50
  questionId: 10
  resultId: 3
}
```

而在保存回传的时候后台需要更改为以下格式：
```json
{
  formId: 2
  id: 49
  name: "我仅在费力运动时出现呼吸困难"
  questionId: 10
  rn: 0
  score: "0"
  type: "sum"
}
```

所以上述就是这个 directive 的作用。







