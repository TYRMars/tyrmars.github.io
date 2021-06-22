---
title: Node.js
sidebar: auto
---

## 多进程

## 进程是什么?

进程（Process）是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。

### 主要概念

* 第一，进程是一个实体。每一个进程都有它自己的地址空间，一般情况下，包括文本区域（text region）、数据区域（data region）和堆栈（stack region）。文本区域存储处理器执行的代码；数据区域存储变量和进程执行期间使用的动态分配的内存；堆栈区域存储着活动过程调用的指令和本地变量。
* 第二，进程是一个“执行中的程序”。程序是一个没有生命的实体，只有处理器赋予程序生命时（操作系统执行之），它才能成为一个活动的实体，我们称其为进程。

```text
UID     PID    PPID  TTY        STIME COMMAND
   zhang    2062    2037 cons0    21:44:12 /usr/bin/ps
   zhang    2037       1 cons0    21:23:06 /usr/bin/bash
```

在[child_process](http://nodejs.cn/api/child_process.html)中创建的进程就是Node.js的子进程

## child_process用法

### 异步

#### 1、 exec、execFile

```js
const cp = require('child_process');
const path = require('path');

// 异步操作
// 执行命令相关 shell
cp.exec('ls -al|grep node_moudles', function(err, stdout, stderr) {

})

// 异步操作
// 执行Shell文件 不能执行-al|grep node_moudles
cp.execFile('ls', ['-al'], function(err, stdout, stderr) {

})

// 新建一个ls.shell
// ls -al|grep node_moudles

cp.execFile(path.resolve(__dirname, 'ls.shell'), function(err, stdout, stderr) {

})
```

exec、execFile 第二个参数 [options](http://nodejs.cn/api/child_process.html#child_process_child_process_exec_command_options_callback) 可以看一下官方文档

#### 2、 spawn

spawn 是流式，适合耗时任务

spawn 返回的是子进程，并且它没有callback函数

```js
const child = cp.spawn(path.resolve(__dirname, 'ls.shell'), ['-al', '-bl']);

child.stdout.on('data', function(chunk) {

})

child.stderr.on('data', function(chunk) {

})
```

::: tip

spawn: 耗时任务（比如：npm install），需要不断的认知
exec/execFile：适合开销较小的任务

:::

```js
// 使用npm命令
const child = cp.spawn('npm', ['install'])

child.stdout.on('data', function(chunk) {

})

child.stderr.on('data', function(chunk) {

})
```

#### 3、 fork

```js
const child = cp.fork(path.resolve(__dirname, 'child.js'));
console.log('parent pid', process.pid)

child.send('hello child process')
```

```js
// child.js
console.log('child pid', process.pid)
```

这两个pid是不相同的,fork操作完后
