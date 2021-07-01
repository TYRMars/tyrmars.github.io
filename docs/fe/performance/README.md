---
title: Web性能相关
sidebar: auto
---

[V8引擎](https://v8.dev/#prop_access)

## 代码优化

* node 查看性能

```js
const { performance, PerformanceObserver } = require('perf_hooks');
const add = (a,b) => a+b;

const num1 = 1;
const num2 = 2;

performance.mark('start');

for(let i = 0; i < 10000000; i++) {
  add(num1, num2);
}

add(num1, 's');

for(let i = 0; i < 10000000; i++) {
  add(num1, num2);
}

performance.mark('end');

const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0]);
})

observer.observe({ entryTypes: ['measure'] });

performance.measure('测量1', 'start', 'end');

// PerformanceEntry {
//   name: '测量1',
//   entryType: 'measure',
//   startTime: 25.567501,
//   duration: 32.1128
// }
```

去除

```js
const { performance, PerformanceObserver } = require('perf_hooks');
const add = (a,b) => a+b;

const num1 = 1;
const num2 = 2;

performance.mark('start');

for(let i = 0; i < 10000000; i++) {
  add(num1, num2);
}

for(let i = 0; i < 10000000; i++) {
  add(num1, num2);
}

performance.mark('end');

const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0]);
})

observer.observe({ entryTypes: ['measure'] });

performance.measure('测量1', 'start', 'end');

// PerformanceEntry {
//   name: '测量2',
//   entryType: 'measure',
//   startTime: 25.243699,
//   duration: 12.227501
// }
```

```bash
$ node --trace-opt  perfromance.js
[marking 0x00e92e6c1c61 <JSFunction (sfi = 000001582941F6F9)> for optimized recompilation, reason: hot and stable]
[marking 0x00e92e6cd6d1 <JSFunction add (sfi = 000001582941F7C1)> for optimized recompilation, reason: small function]
[compiling method 0x00e92e6cd6d1 <JSFunction add (sfi = 000001582941F7C1)> using TurboFan]
[compiling method 0x00e92e6c1c61 <JSFunction (sfi = 000001582941F6F9)> using TurboFan OSR]
[optimizing 0x00e92e6c1c61 <JSFunction (sfi = 000001582941F6F9)> - took 0.210, 0.388, 0.035 ms]      
[optimizing 0x00e92e6cd6d1 <JSFunction add (sfi = 000001582941F7C1)> - took 0.577, 0.753, 0.020 ms]  
[completed optimizing 0x00e92e6cd6d1 <JSFunction add (sfi = 000001582941F7C1)>]
[marking 0x00e92e6c1c61 <JSFunction (sfi = 000001582941F6F9)> for optimized recompilation, reason: hot and stable]
[compiling method 0x00e92e6c1c61 <JSFunction (sfi = 000001582941F6F9)> using TurboFan OSR]
[optimizing 0x00e92e6c1c61 <JSFunction (sfi = 000001582941F6F9)> - took 0.193, 0.369, 0.026 ms]      
PerformanceEntry {
  name: '测量2',
  entryType: 'measure',
  startTime: 48.314,
  duration: 20.3714
}
```

### 函数优化

* lazy parsing 懒解析 vs eager parsing 解饿解析
* 为了优化加载速度，浏览器对函数一般采取lazy parsing 懒解析方式（调用时才会解析）。
* 但是某些情况下需要立即执行该函数，会触发浏览器对函数进行eager parsing 饥饿解析
* 如何直接进行饥饿解析，看如下代码

```js
export default () => {
  const add = (a,b) => a + b;
  const num1 = 1;
  const num2 = 2;

  add(num1,num2);
}

// 给函数+()告诉解析器，要对函数进行饥饿解析
export default () => {
  const add = ((a,b) => a + b);
  const num1 = 1;
  const num2 = 2;

  add(num1,num2);
}
```

### 对象优化

* 以相同顺序初始化对象成员，避免隐藏类的调整
* 实例化后避免添加新的属性
* 尽量使用Array代替array-like对象

#### 以相同顺序初始化对象成员，避免隐藏类的调整

:::tip
[V8中的隐藏类（Hidden Classes）和内联缓存（Inline Caching）](https://segmentfault.com/a/1190000039247203)

[V8 中的 Fast 属性](https://zhuanlan.zhihu.com/p/29321540)
:::

```js
/* 1 */ 
// ✔
class RectArea { // HC0
  constructor(l,w) {
    this.l = l; // HC1
    this.w = w; // HC2
  }
}

const rect1 = new RectArea(3,4)
const rect2 = new RectArea(5,6)

// ❌
const car1 = { color: 'red' }; // HC0
car1.seats = 4; // HC1

const car2 = { seats: 2 }; // HC2
car2.color = 'blue'; // HC3
```

```js
/* 2 */
const car1 = { color: 'red' }; // In-object 属性
car1.seats = 4; // Noramal/Fast 属性， 存储在property store中，需要通过描述数组扫描间接查找
```
