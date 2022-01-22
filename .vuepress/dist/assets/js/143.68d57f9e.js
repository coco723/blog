(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{532:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用travisci构建gitbook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用travisci构建gitbook"}},[t._v("#")]),t._v(" 使用TravisCI构建Gitbook")]),t._v(" "),a("h2",{attrs:{id:"为什么要使用travis-ci构建gitbook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用travis-ci构建gitbook"}},[t._v("#")]),t._v(" 为什么要使用Travis CI构建Gitbook？")]),t._v(" "),a("p",[t._v("为你的项目接入Travis CI后，可以实现你的项目完全在线自动部署，无论你在任何地方，只要能够接入到互联网，访问到GitHub，就可以更新你的电子书，同时使其自动发不到GitHub上。")]),t._v(" "),a("p",[t._v("特别是你的电子书需要和一些非技术类同学协作时，借助Gitbook，他可以只通过浏览器对电子书进行修改，无需在自己的电脑上偶主Gitbook环境")]),t._v(" "),a("h2",{attrs:{id:"配置你步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置你步骤"}},[t._v("#")]),t._v(" 配置你步骤")]),t._v(" "),a("p",[t._v("创建.travis.yml文件")]),t._v(" "),a("p",[t._v("Travis的构建基于"),a("code",[t._v(".travis.yml")]),t._v("文件进行的，因此，为了让Travis CI能够正常构建，我们先来创建"),a("code",[t._v(".travis.yml")]),t._v("。")]),t._v(" "),a("p",[t._v("访问你的GitHub项目主页，点击其中的"),a("strong",[t._v("Create new File")])]),t._v(" "),a("p",[t._v("在弹出的界面中填入文件名 "),a("code",[t._v(".travis.yml")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("directories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" $HOME/.npm\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("before_install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" export TZ='Asia/Shanghai'\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm install gitbook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cli "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("g\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" gitbook install\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" gitbook build . ./build\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip_cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])])]),a("p",[t._v("添加完成后，选择**commit new file 即可。")]),t._v(" "),a("h2",{attrs:{id:"配置travis-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置travis-ci"}},[t._v("#")]),t._v(" 配置Travis CI")]),t._v(" "),a("p",[t._v("如果你想要借助Travis CI来构建，除了创建配置文件以外，还需要使用你的GitHub账号登陆Travis CI，进行一些简单的配置")]),t._v(" "),a("p",[t._v("访问"),a("a",{attrs:{href:"https://travis-ci.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis CI"),a("OutboundLink")],1),t._v("官网，使用Github登陆")]),t._v(" "),a("p",[t._v("登陆后，点击右上角用户头像，在谭书的下拉窗口中选择"),a("strong",[t._v("Settings。")])]),t._v(" "),a("p",[t._v("在下方的"),a("code",[t._v("Repository")]),t._v("列表中找到你的项目")]),t._v(" "),a("p",[t._v("点击项目后的"),a("strong",[t._v("Settings")]),t._v("，进入到项目的界面")]),t._v(" "),a("p",[t._v("在项目界面中找到"),a("strong",[t._v("More Options")]),t._v("，选择其中的"),a("strong",[t._v("Settings")])]),t._v(" "),a("p",[t._v("进入到项目的设置界面。")]),t._v(" "),a("p",[t._v("在下方的"),a("strong",[t._v("Environment Variables")]),t._v("中添加一个新的名为"),a("code",[t._v("$GITHUB_TOKEN")]),t._v("的环境变量，将你自己的"),a("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("Personal Access Token"),a("OutboundLink")],1),t._v("填入其中，用于后续的GitHub Pages自动上传")]),t._v(" "),a("p",[t._v("添加完成后，再次点击"),a("strong",[t._v("More Options")]),t._v("，选择其中的"),a("strong",[t._v("Trigger Build")]),t._v("。")]),t._v(" "),a("p",[t._v("在弹出的界面中直接点击按钮开始构建")]),t._v(" "),a("p",[t._v("随后，你就可以等待Travis CI 的自动构建了")]),t._v(" "),a("p",[t._v("稍等片刻，当你发现Travis CI的构建变成绿色后，就说明已经构建完成了")]),t._v(" "),a("p",[t._v("此时，回到Github，点击界面中的Branc，就可以看到所有的分支了")])])}),[],!1,null,null,null);s.default=e.exports}}]);