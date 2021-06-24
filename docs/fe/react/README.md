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

### 类与Hooks对比

#### 类组件的不足

* 状态逻辑复用难
* 类组件拆分问题
* this指向问题
