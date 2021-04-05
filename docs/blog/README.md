---
title: 博客
sidebar: auto
---

## 2021-04-05 日记

### Array.from 与 Array.fill

今天在用`Array(8).fill(Array(8).fill(false))`的时候发现。创建出来的二维数组`[i][j]`在做push和pop操作，它每一项都会push、pop。查询后发现当一个对象或者数组传递给fill的时候，填充数组的是这个对象或者数组的引用（地址信息），也就是同一个对象或者数组。

::: tip
`Array.from()` 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

`Array.fill()` 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
:::

经过查询发现可以使用`Array.from()`来创建新的数组，它的第一个参数可以传入伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）。第二个可选参数`mapFn`，等于在生成的数组再执行一次map方法然后返回。`Array.from({ length: 8 }, (e) => Array(8).fill(false))`
