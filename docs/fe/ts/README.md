---
title: TypeScript
sidebar: auto
---

## interface接口、泛型、类 初步学习

主要是为了类型静态检查

### 泛型实例

类型推断

#### 函数：参数类型会流入函数体内

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

#### interface 与 泛型

先来看一下React FunctionComponent 源码，定义了一个复合类型

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

写一个函数组件

```tsx
import React, { FunctionComponent } from 'react';

// Test.propTypes

interface TestProps {
  title: string;
}

const Test: FunctionComponent<TestProps> = (props) => {
  props.
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}
```
