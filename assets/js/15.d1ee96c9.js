(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{372:function(t,a,s){"use strict";s.r(a);var n=s(26),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"iframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iframe"}},[t._v("#")]),t._v(" iFrame")]),t._v(" "),s("p",[t._v("iFrame 知识总结")]),t._v(" "),s("h2",{attrs:{id:"jsbridge-相关知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsbridge-相关知识点"}},[t._v("#")]),t._v(" JSBridge 相关知识点")]),t._v(" "),s("p",[t._v("现在 hybrid 应用越来越多，不管在移动端或者PC、Mac端，都需要用到JSBridge")]),t._v(" "),s("h2",{attrs:{id:"lerna与monorepo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lerna与monorepo"}},[t._v("#")]),t._v(" lerna与monorepo")]),t._v(" "),s("h3",{attrs:{id:"_1-monorepo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-monorepo"}},[t._v("#")]),t._v(" 1.monorepo")]),t._v(" "),s("p",[t._v("因为lerna，monorep这个开发策略变得火热。在版本管理中，monorepo 就是把所有的相关项目都放在一个仓库中，这种单个存储库的方式有优势也有劣势：")]),t._v(" "),s("ul",[s("li",[t._v("易于复用代码：公用的逻辑可以放在packages之外，共用")]),t._v(" "),s("li",[t._v("多项目依赖关系简化")]),t._v(" "),s("li",[t._v("代码提交的原子性")])]),t._v(" "),s("h3",{attrs:{id:"_2-monorepo开发策略在前端中使用-lerna"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-monorepo开发策略在前端中使用-lerna"}},[t._v("#")]),t._v(" 2.monorepo开发策略在前端中使用（lerna）")]),t._v(" "),s("p",[t._v("在开发前端项目中组件库组件库是常见的，如果我们使用的是multirepo开发策略每个组件都是一个git项目，组件库主项目也是一个git项目，一些工具库也是git项目。现在跨越了多个代码仓库的，这样如果组件库的主项目要使用的新开发的组件，就必须要组件发版，组件更改变得的麻烦。这时就可以使用monorepo，在一个git项目中建立多个package。但在使用开发中，多个package的node_moudle的包版本管理又是件很头疼的事情。\nlerna就是针对以上问题，在使用 git 和 npm 管理多软件包代码仓库的工作流程进行优化的工具。")]),t._v(" "),s("h2",{attrs:{id:"plop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plop"}},[t._v("#")]),t._v(" plop")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://apiumhub.com/tech-blog-barcelona/plop-file-generator-tool/",target:"_blank",rel:"noopener noreferrer"}},[t._v("What Is Plop – File Generator Tool System"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("plop是一个小工具，它可以节省您的时间，并帮助您的团队构建具有一致性的新文件。")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("Handlebars.js")]),t._v("作为模板")]),t._v(" "),s("p",[t._v("基于"),s("code",[t._v("Inquirer.js")]),t._v("构建")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g plop\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save-dev plop\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("配置文件为"),s("code",[t._v("plopfile.ts")]),t._v(" 或者 "),s("code",[t._v("plopfile.js")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("plop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n plop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setGenerator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'controller'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application controller'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// inquirer prompts")]),t._v("\n   prompts"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Controller name?'")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// actions to perform")]),t._v("\n   actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'add'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/controllers/{{dashCase name}}.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     templateFile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'templates/controller.hbs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("p",[t._v("在package.json中添加")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plop"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plop"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"协同编辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协同编辑"}},[t._v("#")]),t._v(" 协同编辑")]),t._v(" "),s("p",[t._v("实时协同编辑 与 非实时协同编辑")]),t._v(" "),s("h3",{attrs:{id:"实时通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实时通信"}},[t._v("#")]),t._v(" 实时通信")]),t._v(" "),s("p",[t._v("P2P概念 、 C/S方式")]),t._v(" "),s("p",[t._v("通信协议：双向通信 websocket")]),t._v(" "),s("h4",{attrs:{id:"通信内容-基于状态同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通信内容-基于状态同步"}},[t._v("#")]),t._v(" 通信内容：基于状态同步")]),t._v(" "),s("p",[t._v("useCollabState useCollabRef")]),t._v(" "),s("p",[t._v("同步实例 "),s("a",{attrs:{href:"https://github.com/excalidraw/excalidraw",target:"_blank",rel:"noopener noreferrer"}},[t._v("excalidraw"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("数据模型-数组 元素删除非真删除")]),t._v(" "),s("li",[t._v("元素版本号")]),t._v(" "),s("li",[t._v("versionNonce字段")]),t._v(" "),s("li",[t._v("生成version时随机生成")]),t._v(" "),s("li",[t._v("同时更改时，比较versionNonce")]),t._v(" "),s("li",[t._v("传输量大")]),t._v(" "),s("li",[t._v("难处理")])]),t._v(" "),s("h4",{attrs:{id:"基于操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于操作"}},[t._v("#")]),t._v(" 基于操作")]),t._v(" "),s("p",[t._v("同步指令")]),t._v(" "),s("h4",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("保证文档一致性：")]),t._v(" "),s("ol",[s("li",[t._v("段落锁")]),t._v(" "),s("li",[t._v("OT算法")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Operational-Transformation",target:"_blank",rel:"noopener noreferrer"}},[t._v("OT GitHub"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://en.m.wikipedia.org/wiki/Operational_transformation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Operational Transformation"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://operational-transformation.github.io/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("operational Transformation Visualization"),s("OutboundLink")],1)])]),t._v(" "),s("ul",[s("li",[t._v("菱形图")]),t._v(" "),s("li",[t._v("操作合并")]),t._v(" "),s("li",[t._v("OT(a,b) = (a',b')")]),t._v(" "),s("li",[t._v("协同调度协议 --- 基本语句")]),t._v(" "),s("li",[t._v("通用调度协议 OT Generic OT")]),t._v(" "),s("li",[t._v("基于上下文协同调度 Context-based OT")]),t._v(" "),s("li",[t._v("OT算法复杂度")]),t._v(" "),s("li",[t._v("时间复杂度O(M * N)")])]),t._v(" "),s("h3",{attrs:{id:"后端数据库基于json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端数据库基于json"}},[t._v("#")]),t._v(" 后端数据库基于JSON")]),t._v(" "),s("p",[t._v("shareDB 数据库")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/ottypes/json0",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ottypes/json0"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://jzwdsb.github.io/2019/01/CRDT/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CRDT 算法"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[t._v("#")]),t._v(" 文档")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://etherpad.org/#",target:"_blank",rel:"noopener noreferrer"}},[t._v("etherpad"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/ianstormtaylor/slate",target:"_blank",rel:"noopener noreferrer"}},[t._v("slate"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://draftjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("draftjs"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://quilljs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("quilljs"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"表格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表格"}},[t._v("#")]),t._v(" 表格")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.grapecity.com.cn/developer/spreadjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("spreadjs"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://handsontable.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("handsontable"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"代码编辑器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码编辑器"}},[t._v("#")]),t._v(" 代码编辑器")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://ace.c9.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ace"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);