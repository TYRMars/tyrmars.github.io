---
title: JavaScipt
sidebar: auto
---

[JavaScript 踩坑指南](https://jonathan-zhang.gitbook.io/javascript-steppitguide/)

## new操作符

```js
function new(func, ...args) {
  const newObject = Object.create(func.prototype);
  const k = func.apply(newObject, ...args)
  if(typeof k === 'object') {
    return k
  } else {
    return newObject
  }
}
```

## event loop(事件循环/事件轮询)

* JS单线程
* 异步要基于回调来实现
* event loop就是异步回调的实现原理

JS执行步骤：从前到后，一行一行执行、错误终止执行、先执行同步，再执行异步

[菲利普·罗伯茨：到底什么是Event Loop呢？ | 欧洲 JSConf 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

```js
// Call Stack

function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(n) {
  var squared = square(n);
  console.log(squared);
}

printSquare(4)
```

## Promise 处理异步

```js
const handlerClick = () => {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.apiopen.top/getJok');
    xhr.send()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if(xhr.status >= 200 && shr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.status);
        }
      }
    }
  })

  p.then((value) => {

  }, error => {

  })
}
```

## 自定义promise

```js
function Promise(executor){
  this.PromiseState = 'pending';
  this.PromiseResult = null;
  this.callbacks = [];

  const _this = this;

  // resolve 函数
  function resolve(data) {
    // 修改对象状态
    if(_this.PromiseState === 'pending') return
    _this.PromiseState = 'fulfiled'
    // 设置对象结果值
    _this.PromiseResult = data;
    _this.callbacks.forEach((item) => {
      item.onResolved(data)
    })
  }

   // reject 函数
   function reject(data) {
    if(_this.PromiseState === 'pending') return 
    _this.PromiseState = 'rejected'
    _this.PromiseResult = data;
    _this.callbacks.forEach((item) => {
      item.onRejected(data)
    })
   }

  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

Promise.prototype.then = function(onResolved, onRejected) {
  // if(this.PromiseState === 'fulfilled') {
  //   onResolved(this.PromiseResult)
  // }
  // if(this.PromiseState === 'rejected') {
  //   onReject(this.PromiseResult)
  // }
  if(this.PromiseState === 'pending') {
    this.callbacks.push({
      onResolved,
      onRejected
    })
  }
}
```

## 柯里化

```js
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

function curry(fn, ...arges) {
  return fn.length <= args.length
  ? fn(...args)
  : curry.bind(null, fn, ...args);
}
```

## 深拷贝

```js
const object = {
  a: 1,
  b: 'qwe',
  c: [1,2,3],
  d: {
    test: '',
  }
}

JSON.parse(JSON.stringify())

const deepClone = (cloneData) => {
  if(typeof cloneData !== 'object' || cloneData == null) {
    return cloneData
  }

  let result
  if(cloneData instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for(let key in cloneData) {
    // key 不是原型属性
    if(cloneData.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(cloneData[key])
    }
  }

  return result
}

```

## 防抖

* 防止多次触发

```js
function debonce(func, delay) {
  let timer;

  if(timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    func();
  }, delay);
}

function debonce(func, delay) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function ()  {
      func.apply(context, args)
      timer = null;
    }, delay)
  }
}
```

## 节流

* 防止多次发出

```js
function throttle(func, delay) {
  let timer;
  return function () {
    if(timer) return
    timer = setTimeout(() => {
      func.apply(context, arguments);
      timer = null;
    }, delay)
  }
}
// setTimeOut
function throttle(func, delay) {
  let timer;
  return function () {
    if(timer) {
      return;
    }
    let context = this;
    let args = arguments;
    timer = setTimeout(function ()  {
      func.apply(context, args);
      timer = null;
    }, delay)
  }
}
// Date
function throttle(func, delay) {
  let pre = 0;
  return function () {
    let context = this;
    let args = arguments;
    let now = new Date();
    if(now - pre > delay) {
      func.apply(context, args);
      pre = now;
    }
  }
}
```

## call、apply、bind

```js
// call
Function.prototype.newCall = function(obj) {
  var obj = obj || window;
  obj.p = this;
  var newArguments = [];
  for (var i = 1; i < arguments.length; i++) {
    newArguments.push(`argumen[${i}]`)
  }
  var result = eval(`obj.p(${newArguments})`)
  delete onj.p;
}
```

## map

```js
Array.prototype._map(fn) {
  for (let i = 0; i < this.length; i ++) {
    return fn(this[i]);
  }
}
```

## Search获取参数

```js
function getSearch(name) {
  return (new URLSearchParams(window.location.search)).get(name)
}

function getSearch() {
  const res = {}
  const search = location.search.substr(1)
  search.splite('&').forEach((paramstr) => {
    const arr = paramStr.split('=');
    const key = arr[0]
    const val = arr[1]
    res[key] = val
  })

  return res
}
```

## EventEmitter

```js
class EventEmitter {
  constructor() {
    this.listeners = {};
    this.maxListener = 10;
  }
}
```

## iFrame

iFrame 知识总结

## JSBridge 相关知识点

现在 hybrid 应用越来越多，不管在移动端或者PC、Mac端，都需要用到JSBridge
