(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{219:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"取数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取数","aria-hidden":"true"}},[t._v("#")]),t._v(" 取数")]),t._v(" "),e("h2",{attrs:{id:"演示地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#演示地址","aria-hidden":"true"}},[t._v("#")]),t._v(" 演示地址")]),t._v(" "),e("h4",{attrs:{id:"内网"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内网","aria-hidden":"true"}},[t._v("#")]),t._v(" 内网")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"http://192.168.1.174:2000/extract-src/#/view",target:"_blank",rel:"noopener noreferrer"}},[t._v("取数 朝阳"),e("OutboundLink")],1),t._v("\n账号：chenyangyu  密码：chenyangyu")]),t._v(" "),e("p",[t._v("账号：test  密码：test")])])]),t._v(" "),e("h4",{attrs:{id:"主分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 主分支")]),t._v(" "),e("ul",[e("li",[t._v("仓库： http://192.168.1.62:9999/dev/front.end2016/extract.git （front.end2016）")]),t._v(" "),e("li",[t._v("分支： master")])]),t._v(" "),e("h4",{attrs:{id:"朝阳分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#朝阳分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 朝阳分支")]),t._v(" "),e("ul",[e("li",[t._v("仓库： http://192.168.1.62:9999/dev/front.end2016/extract.git （front.end2016）")]),t._v(" "),e("li",[t._v("分支： extract-chanyang-theme")])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("上述两个分支代码始终保持统一，主要不同就是 extract-chanyang-theme 中各项目的 "),e("code",[t._v("index.html")]),t._v(" 文件中会多一个 "),e("code",[t._v("chaoyang-theme-red.scss")]),t._v(" 的红色主题文件。")])]),t._v(" "),e("h2",{attrs:{id:"代码细节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码细节","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码细节")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[e("strong",[t._v("取数的核心提取过程完全依靠 "),e("code",[t._v("src/widget/extract-choser")]),t._v(" 完成。")])])]),t._v(" "),e("p",[e("strong",[t._v("1. 页面数据")])]),t._v(" "),e("p",[e("code",[t._v("alltree")]),t._v(" 接口：返回左侧导航所有数据 + 右侧最外层数据")]),t._v(" "),e("p",[e("code",[t._v("all")]),t._v(" 接口：返回右侧具体子集数据")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("extractChoser 指令")])])]),t._v(" "),e("p",[e("code",[t._v("summaryData")]),t._v(" -> 由 "),e("code",[t._v("DataAdapter.convertCategory")]),t._v(" 加工过后形成渲染左侧导航。")]),t._v(" "),e("p",[e("code",[t._v("allData")]),t._v(" -> 右侧具体的选项数据，通过 "),e("code",[t._v("DataAdapter.convertPopUp")]),t._v(" 加工成如：性别 -> 男 / 女 的形式。原始数据是没有男女这一部分的。")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("左侧导航选中状态通过点击事件为对应的数据添加 "),e("code",[t._v("$active: true")]),t._v(" 状态。")]),t._v(" "),e("p",[t._v("右侧子集展开效果通过为数据添加 "),e("code",[t._v("$active: true")]),t._v(" 实现，元素自身选中状态则是通过为数据添加 "),e("code",[t._v("$checked: true")]),t._v(" 实现。")])]),t._v(" "),e("p",[t._v("最终通过 "),e("code",[t._v("TaskInteractiveService.setCompleteData")]),t._v(" 方法将左右两侧的数据进行合并。合并的基本逻辑是 "),e("strong",[t._v("alltree '性别'层级的tagId对应all接口的'id'进行父子级拼接")])]),t._v(" "),e("p",[e("strong",[t._v("2. 页面切换数据回溯")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回此页面要做数据匹配对应")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scope"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mappingData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    TaskMappingService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("taskRollbackMapping")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scope"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("allData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("scope"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mappingData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("scope"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("used"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])])])},[],!1,null,null,null);a.default=n.exports}}]);