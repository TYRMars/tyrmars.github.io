---
title: React 学习
sidebar: auto
---

## 前言

React踩坑指南（React 15） [react-steppitguide](https://jonathan-zhang.gitbook.io/react-steppitguide/)

以下更新React 16之后

## 什么是Hooks

* 没有hooks 之前，React就提倡使用`函数组件`，但是这样就只能是无状态组件，也没有生命周期可以使用。
* hooks 是 React 16.8 新增的特性， 它可以让你在不编写class的情况下使用state以及其他的React特性。

### 类组件的不足

* 状态逻辑复用难
* 类组件拆分问题
* this指向问题

:::tip
[v17.0.2](https://github.com/facebook/react/releases/tag/v17.0.2) 在React项目主目录下有 [packages/react/src/ReactHooks.js](https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js)
:::

```js
export function useState<S>(
  initialState: (() => S) | S,
): [S, Dispatch<BasicStateAction<S>>] {
  const dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

export function useReducer<S, I, A>(
  reducer: (S, A) => S,
  initialArg: I,
  init?: I => S,
): [S, Dispatch<A>] {
  const dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}

export function useRef<T>(initialValue: T): {|current: T|} {
  const dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

export function useEffect(
  create: () => (() => void) | void,
  deps: Array<mixed> | void | null,
): void {
  const dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}

export function useLayoutEffect(
  create: () => (() => void) | void,
  deps: Array<mixed> | void | null,
): void {
  const dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}

export function useCallback<T>(
  callback: T,
  deps: Array<mixed> | void | null,
): T {
  const dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}

export function useMemo<T>(
  create: () => T,
  deps: Array<mixed> | void | null,
): T {
  const dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}

export function useImperativeHandle<T>(
  ref: {|current: T | null|} | ((inst: T | null) => mixed) | null | void,
  create: () => T,
  deps: Array<mixed> | void | null,
): void {
  const dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
```

可以发现

## useState实现原理

