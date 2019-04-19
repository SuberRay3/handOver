# 肾内科 - 病理平台

## 演示地址

#### 内网

- [出入院登记 175](http://192.168.1.175:35200/pathology-src/#/list)

病理医生 -> 账号：bingli  密码：bingli

临床医生 -> 账号：linchuang  密码：linchuang

超级管理员 -> 账号：snk_admin 密码：snk_amdin

### 角色权限

**病理医生：**
- 病理报告单读、写

**超级管理员：**

- 同病理医生

**临床医生：**
- 首页新建肾穿申请单
- 申请单保存、发送、撤销
- 送检单保存、发送

## 代码管理

#### 主分支

- 仓库： http://192.168.1.62:9999/dev/front.end2016/extract.git （front.end2016）
- 分支： master

## 代码细节

**角色代号**
- 病理医生：27
- 临床医生：30
- 超级管理员：24

**表单类型代号**
- 1 -> 申请单
- 2 -> 送检单
- 3 -> 病理报告
- 4 -> 报告单

**`applyForm.html`**

三种类型的表单共一个模板 -> applyForm.html。根据后台数据的不同渲染成不同的样子。

**打印**

因为医院对于打印出的格式有特殊要求，实现较复杂。所以选择了先通过 word 编辑表格样式，然后另存为 html。

最终在项目代码里通过下方方式：

```html
<div ng-if="currOpt.formId == '1'" class="ng-include: './js/html/apply.html'"></div>
<div ng-if="currOpt.formId == '2'" class="ng-include: './js/html/send.html'"></div>
```

引入页面。

若后续需要更改，可通过同样的方式在 word 中进行修改，然后导出并引入到项目中。

**`applyForm.controller.js`**

#### 特殊交互字段

```js
$scope.specAct = {
    supItem: ['61'],
    specInd: ['61', '447', '448'],  // 页面不渲染的元素
    specFiledMap: {
      '60': ['61', '447', '448']
    },
    specEnterItem: null,
    specEle: {
      '61': {
        'labelId': '61',
        'data': null
      },
      '447': {
        'labelId': '447',
        'data': null       
      },
      '448': {
        'labelId': '448',
        'data': null   
      }
    }
  }
```

配合 `<collect-spec-data></collect-spec-data>` 和 `<spec-inter-act-con></spec-inter-act-con>` 实现 **送检单的重复肾活检** 功能。

#### 扁平化数据实现拼接 “生成报告单” 功能的内容项

```js
ApplyFormService.genReportData($scope.orgPageData) // 将数据打成扁平化的
sessionStorage.setItem('savedDir', JSON.stringify(savedDir))　// 缓存报告页数据字典,用于下个页面生成报告单用
```

格式如下：

```js
var savedDir = {
   "1": {
        "id": 495,
        "xlPatientId": "301_123",
        "xlMedicalId": "301_2_123",
        "patiId": "301_123",
        "patiVisitId": "123",
        "categoryLevel": null,
        "hasNecessary": "false",
        "dimension": null,
        "label": "门诊号",
        "labelId": "1",
        "name": "基本信息_门诊号",
        "type": "1",
        "typeName": "小文本输入",
        "value": null,
        "units": null,
        "hasUnit": "0",
        "moduleId": "56",
        "children": null,
        "undoed": false,
        "sort": 0,
        "addTextBoxType": null,
        "basic": false,
        "$$hashKey": "object:372"
    },
    ...
}
```


