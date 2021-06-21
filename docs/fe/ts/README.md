---
title: TypeScript
sidebar: auto
---

## interface接口、泛型、类 初步学习

先来看一下React FunctionComponent 源码

```ts
type FC<P={}> = FunctionComponent<P>; // P 泛型默认值为{}

interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<any,any> | null; // 函数类型 参数有 props和
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>; // 
  displayName?: string;
}

type PropsWithChildren<P> = P & { children?: ReactNode }; // 与的关系
```
