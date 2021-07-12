---
title: 知识列表
sidebar: auto
---

## 协同编辑

实时协同编辑 与 非实时协同编辑

### 实时通信

P2P概念 、 C/S方式

通信协议：双向通信 websocket

#### 通信内容：基于状态同步

useCollabState useCollabRef

同步实例 [excalidraw](https://github.com/excalidraw/excalidraw)

* 数据模型-数组 元素删除非真删除
* 元素版本号
* versionNonce字段
* 生成version时随机生成
* 同时更改时，比较versionNonce
* 传输量大
* 难处理

#### 基于操作

同步指令

#### 问题

保证文档一致性：

1. 段落锁
2. OT算法

:::tip
[OT GitHub](https://github.com/Operational-Transformation)

[Operational Transformation](https://en.m.wikipedia.org/wiki/Operational_transformation)

[operational Transformation Visualization](http://operational-transformation.github.io/index.html)
:::

* 菱形图
* 操作合并
* OT(a,b) = (a',b')
* 协同调度协议 --- 基本语句
* 通用调度协议 OT Generic OT
* 基于上下文协同调度 Context-based OT
* OT算法复杂度
* 时间复杂度O(M * N)

### 后端数据库基于JSON

shareDB 数据库

<https://github.com/ottypes/json0>

[CRDT 算法](https://jzwdsb.github.io/2019/01/CRDT/)

#### 文档

[etherpad](https://etherpad.org/#)

[slate](https://github.com/ianstormtaylor/slate)

[draftjs](https://draftjs.org/)

[quilljs](https://quilljs.com/)

#### 表格

[spreadjs](https://www.grapecity.com.cn/developer/spreadjs)

[handsontable](https://handsontable.com/)

#### 代码编辑器

[ace](https://ace.c9.io/)
