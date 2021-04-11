---
title: CSS
sidebar: auto
---

## CSS 常见问题

### 外边距塌陷

```css
div {
  margin-top: 10px;
}
```

会发生外边距塌陷的情况

1. `垂直方向`，不是水平方向
2. `块级元素`，不是行内元素，也不是行内块级元素

#### 外边距计算方式

##### 相邻

正数 && 正数 最大的数

```css

.div_1 {
  margin-bottom: 30px;
}

.div_2 {
  /* √ */
  margin-top: 40px;
}

```

* 负数 && 负数 绝对值最大的数

```css

.div_1 {
  margin-bottom: -30px;
}

.div_2 {
  /* √ */
  margin-top: -40px;
}

```

* 正数 && 负数 相加的和

```css

/* 10px */

.div_1 {
  margin-bottom: -30px;
}

.div_2 {
  margin-top: 40px;
}

```
