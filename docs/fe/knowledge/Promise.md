---
title: Promise
sidebar: auto
---

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
