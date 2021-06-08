---
title: 数据结构与算法学习
sidebar: auto
---

## 基本数据结构

堆数据结构

```JavaScript
class Heap {
  constructor(data) {
    this.data = data
  }
  sort() {

  }

  static swap (arr, a, b) {
    if (a===b) {
      return ''
    }
    let c = arr[a]
    arr[a] = arr[b]
    arr[b] = c
  }

  // i 父节点
  static maxHeapify (arr, i, size) {
    // 左节点
    let l = i * 2 + 1
    // 右节点
    let r = i * 2 + 2
    let largest = i

    if(l <= size && Arr[l] > Arr[largest]) {
      largest = l
    }

    if(r <= size && Arr[r] > Arr[largest]) {
      largest = r
    }

    if(largest !== i) {
      Heap.swap(Arr, i, largest)
      Heap.maxHeapify(Arr, largest, size)
    }
  }
}
```
