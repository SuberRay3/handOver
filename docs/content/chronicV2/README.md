# 慢病 v2.0

::: tip
相较于 1.0 版本，2.0 版本在功能上 PC 端增加了**方案分配**、**方案修改**、**方案执行**、**多次评估**功能。
:::

## 概览

- CRF 录入逻辑沿用 1.0 版本。
- 量表评估填写逻辑维持不变，计算结果由单一分数改为多结果 (array 格式)。
- 量表内容渲染采用递归模板。
- 方案点击后相应的行为（跳转评估 or 直接更改状态）由前端配置决定。
- 方案内容和执行采用递归模板。
- 患者管理页方案内容模板和执行按钮状态 **前端自己有维护一套模版数据**。
- 关键指标增加了从微信端读取数据。

## 版本

目前针对 **朝阳医院** 和 **301 呼吸科** 有