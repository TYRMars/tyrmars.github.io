---
title: JavaScipt
sidebar: auto
---

[JavaScript 踩坑指南](https://jonathan-zhang.gitbook.io/javascript-steppitguide/)

## 事件循环

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

## iFrame

iFrame 知识总结

## JSBridge 相关知识点

现在 hybrid 应用越来越多，不管在移动端或者PC、Mac端，都需要用到JSBridge
