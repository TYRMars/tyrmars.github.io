---
title: TypeScript
sidebar: auto
---

## interface接口、泛型、类 初步学习

先来看一下React FunctionComponent 源码

```ts
interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement
}
```
