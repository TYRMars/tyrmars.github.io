---
title: 知识列表
sidebar: auto
---

## iFrame

iFrame 知识总结

## JSBridge 相关知识点

现在 hybrid 应用越来越多，不管在移动端或者PC、Mac端，都需要用到JSBridge

## lerna与monorepo

### 1.monorepo

因为lerna，monorep这个开发策略变得火热。在版本管理中，monorepo 就是把所有的相关项目都放在一个仓库中，这种单个存储库的方式有优势也有劣势：

* 易于复用代码：公用的逻辑可以放在packages之外，共用
* 多项目依赖关系简化
* 代码提交的原子性

### 2.monorepo开发策略在前端中使用（lerna）

在开发前端项目中组件库组件库是常见的，如果我们使用的是multirepo开发策略每个组件都是一个git项目，组件库主项目也是一个git项目，一些工具库也是git项目。现在跨越了多个代码仓库的，这样如果组件库的主项目要使用的新开发的组件，就必须要组件发版，组件更改变得的麻烦。这时就可以使用monorepo，在一个git项目中建立多个package。但在使用开发中，多个package的node_moudle的包版本管理又是件很头疼的事情。
lerna就是针对以上问题，在使用 git 和 npm 管理多软件包代码仓库的工作流程进行优化的工具。

## plop

[What Is Plop – File Generator Tool System](https://apiumhub.com/tech-blog-barcelona/plop-file-generator-tool/)

plop是一个小工具，它可以节省您的时间，并帮助您的团队构建具有一致性的新文件。

使用`Handlebars.js`作为模板

基于`Inquirer.js`构建

```shell
npm i -g plop

npm i --save-dev plop
```

配置文件为`plopfile.ts` 或者 `plopfile.js`

```js
module.exports = function (plop) {
 plop.setGenerator('controller', {
   description: 'application controller',

   // inquirer prompts
   prompts: [{
     type: 'input',
     name: 'name',
     message: 'Controller name?'
   }],

   // actions to perform
   actions: [{
     type: 'add',
     path: 'src/controllers/{{dashCase name}}.js',
     templateFile: 'templates/controller.hbs',
   }]
 });
};
```

在package.json中添加

```json
// package.json
{
    ...,
    "scripts": {
        "plop": "plop"
    },
    ...
}

```
