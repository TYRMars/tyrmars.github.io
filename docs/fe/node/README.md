---
title: Node.js
sidebar: auto
---

## 进程是什么?

进程（Process）是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。

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

* spawn ： 子进程中执行的是非node程序，提供一组参数后，执行的结果以流的形式返回。
* execFile：子进程中执行的是非node程序，提供一组参数后，执行的结果以回调的形式返回。
* exec：子进程执行的是非node程序，传入一串shell命令，执行后结果以回调的形式返回，与execFile
不同的是exec可以直接执行一串shell命令。
* fork：子进程执行的是node程序，提供一组参数后，执行的结果以流的形式返回，与spawn不同，fork生成的子进程只能执行node应用。接下来的小节将具体的介绍这一些方法。

#### 1、 exec、execFile

exec是直接执行的一段shell命令，而execFile是执行的一个应用

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

#### 3、 fork (Node执行)

```js
const child = cp.fork(path.resolve(__dirname, 'child.js'));
console.log('parent pid', process.pid)
```

```js
// child.js
console.log('child pid', process.pid)
```

fork执行后的区别。这两个进程的pid是不相同的。

fork: Node(main) -> Node(child)

```js
// main process
const child = cp.fork(path.resolve(__dirname, 'child.js'));
console.log('parent pid', process.pid)

child.send('hello child process', () => {
  // 发送完成后断开
  child.disconnect();
})
```

```js
// child process
process.on('message', (msg) => {
  console.log(msg)
})

process.send('hello main process')
```

主进程收信息

```js

// main process
const child = cp.fork(path.resolve(__dirname, 'child.js'));
console.log('parent pid', process.pid)

child.send('hello child process', () => {
  // 发送完成后断开
  // child.disconnect();
})

child.on('message', (msg) => {
  console.log(msg);
})
```

### 同步

#### 1、execSync、execFileSync

execSync 执行出来的结果是 buffer 需要通过toString做转换

```js
const ret = cp.execSync('ls -al|grep node_modules')

console.log(ret.toString())
```

#### 2、spawn

返回process结果

::: warning

在执行execFile时，安全性高于exec。例如：在执行rf -rm 这种命令，execSync可以直接执行，但是execFile执行时，在传入参数的同时，会检测传入实参执行的安全性，如果存在安全性问题，会抛出异常。除了execFile外，spawn和fork也都不能直接执行shell，因此安全性较高。

:::

## 事件

[Node.js 事件循环，定时器和 process.nextTick()](https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/)

## Stream 概念

[Node.js 中的一股清流：理解 Stream（流）的基本概念](https://juejin.cn/post/6844904014975500301)