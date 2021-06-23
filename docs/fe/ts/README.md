---
title: TypeScript
sidebar: auto
---

## interface接口、泛型、类 初步学习

主要是为了类型静态检查

## 泛型实例

类型推断

```ts
function echo<T>(arg: T): T {
  return arg
}

function swap<T, U>(tuple: [T,U]): [U, T] {
  return [tuple[1], tulpe[0]]
}

// function withAPI(url: string) {
//   return fetch(url).then(resp => resp.json())
// }

// withAPI('1').then(resp => {
// })

function withAPI<T>(url: string): Promise<T> {
  return fetch(url).then(resp => resp.json())
}

withAPI<{ name: string }>('getName').then(resp => {
})

withAPI<{ age: number }>('getAge').then(resp => {
})
```

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
