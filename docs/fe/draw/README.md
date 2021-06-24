---
title: 图形学
sidebar: auto
---

[B站Video - GAMES101-现代计算机图形学入门-闫令琪](https://www.bilibili.com/video/BV1X7411F744)

[跨平台Web Canvas渲染引擎架构的设计与思考(内含实现方案)](https://mp.weixin.qq.com/s/-_4KZx54DblCylzh-kjJtw)

## Canvas基础知识

```js
const canvas = document.getElementById("canvas");

canvas.width = 1024;
canvas.height = 768;

const context = canvas.getContext("2d");
```

### 绘制直线

moveTo与lineTo是状态设置，stroke是最终来画

* moveTo 是起始点
* lineTo 是线段位置

```js
context.moveTo(100,100)
context.lineTo(700,700)
context.lineWith = 5
context.strokeStyle = "#000000"

context.stroke()
```

### fill 着色

```js
context.fillStyle = "#000000"
context.fill()
```

### 绘制弧线

centerx centery radius 圆心坐标 x、y，半径

startingAngle, endingAngle 起始角度、结束角度

anticlockwise 顺时针还是逆时针

```js
context.arc(
  centerx, centery, radius,
  startingAngle, endingAngle,
  anticlockwise = false
)
```

### 封闭路径

beginPath 开始路径，重新规划路径

closePath 结束路径，结束当前路径

```js
context.beginPath()
context.closePath()
```

### canvas 绘图

Canvas 2D API 中的 CanvasRenderingContext2D.drawImage() 方法提供了多种方式在Canvas上绘制图像。

```js
ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

image 是我们所需要绘制到canvas 图像的文件。HTMLImageElement、HTMLCanvasElement、SVGImageElement 这三个是我们平时所使用最多的

sx, sy, sWidth, sHeight 是原图片绘制中进行裁剪使用

dx, dy, dWidth, dHeight 是控制图片在canvas

image 绘制方式一般是等待image onload再去绘制

```js
const img = new Image()
img.src = "https://mdn.mozillademos.org/files/225/Canvas_drawimage.jpg"
img.onload = () => {
  // 执行绘制
  ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
}
```
