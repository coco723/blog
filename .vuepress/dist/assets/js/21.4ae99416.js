(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{409:function(t,a,s){"use strict";s.r(a);var n=s(54),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git规范和changelog生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git规范和changelog生成"}},[t._v("#")]),t._v(" Git规范和Changelog生成")]),t._v(" "),s("p",[t._v("良好的Git commit规范优势：")]),t._v(" "),s("ul",[s("li",[t._v("加快Code Review的流程")]),t._v(" "),s("li",[t._v("根据Git Commit的元数据生成Changelog")]),t._v(" "),s("li",[t._v("后续维护者可以知道Feature被修改的原因")])]),t._v(" "),s("h2",{attrs:{id:"技术方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术方案"}},[t._v("#")]),t._v(" 技术方案")]),t._v(" "),s("p",[t._v("Git提交格式：")]),t._v(" "),s("ul",[s("li",[t._v("统一团队Git commit日志标准，便于后续代码review和版本发布")]),t._v(" "),s("li",[t._v("使用angular的Git commit日志作为基本规范\n"),s("ul",[s("li",[t._v("提交类型限制为：feature、fix、docs、style、refactor、pref、test、chore、revert等。")]),t._v(" "),s("li",[t._v("提交信息分为两部分，标题（首字母不大写，末尾不要标点）、主题内（正常描述信息即可）")])])]),t._v(" "),s("li",[t._v("日志提交时友好的类型选择提示\n"),s("ul",[s("li",[t._v("使用commitize工具")])])]),t._v(" "),s("li",[t._v("不符合要求格式的日志拒绝提交的保障机制\n"),s("ul",[s("li",[t._v("使用validate-commit-msg工具")]),t._v(" "),s("li",[t._v("需要同时在客户端、gitlab server hook做")])])]),t._v(" "),s("li",[t._v("统一changelog文档信息生成\n"),s("ul",[s("li",[t._v("使用conventional-changelog-cli工具")])])])]),t._v(" "),s("h2",{attrs:{id:"提交格式要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交格式要求"}},[t._v("#")]),t._v(" 提交格式要求")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("(scope): "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("subject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("BLANK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("LINE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("BLANK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("LINE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("对格式的说明如下：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("type：代表某次提交的类型，比如修复一个bug还是增加一个新的feature，所有的type类型如下：")])]),t._v(" "),s("li",[s("p",[t._v("feat： 新增feature；")])]),t._v(" "),s("li",[s("p",[t._v("fix：修复bug")])]),t._v(" "),s("li",[s("p",[t._v("docs：仅仅修改了文档，比如README，CHANGELOG，CONTRIBURTE等等")])]),t._v(" "),s("li",[s("p",[t._v("style：仅仅修改了空格，格式缩进，逗号等等，不改变代码的逻辑")])]),t._v(" "),s("li",[s("p",[t._v("refactor：代码重构，没有价新功能或者修复bug")])]),t._v(" "),s("li",[s("p",[t._v("pref：优化相关，比如提升性能、体验")])]),t._v(" "),s("li",[s("p",[t._v("test：测试用例，包括单元测试、集成测试等等")])]),t._v(" "),s("li",[s("p",[t._v("chore： 改变构建流程、或者增加依赖库、工具等")])]),t._v(" "),s("li",[s("p",[t._v("revert：回滚到上一个版本")])])]),t._v(" "),s("h2",{attrs:{id:"本地开发阶段增加precommit钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地开发阶段增加precommit钩子"}},[t._v("#")]),t._v(" 本地开发阶段增加precommit钩子")]),t._v(" "),s("p",[t._v("安装husky")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" husky --save-dev\n\n")])])]),s("p",[t._v("通过commitmsg钩子校验信息")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"script"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commitmsg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"validate-commit-msg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"changelog"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"conventional-changelog -p angular -i CHANGELOG.md -s -r 0"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"validate-commit-msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.11.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"conventional-changelog"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^1.2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^0.13.1"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);