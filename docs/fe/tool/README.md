---
title: 前端工具
sidebar: auto
---

* 收集常用的工具

## 判断滑动手势

```typescript
const GESTURE_SIGNAL = {
  NONE: 0,
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4,
}

const getSlideAngle = (dx: number, dy: number) => {
  return (Math.atan2(dy, dx) * 180) / Math.PI
}

const getSlideDirection = (
  startX: number,
  startY: number,
  endX: number,
  endY: number,
) => {
  const dy = startY - endY
  const dx = endX - startX
  let result = GESTURE_SIGNAL.NONE
  if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
    return result
  }
  const angle = GetSlideAngle(dx, dy)
  if (angle >= -45 && angle < 45) {
    result = GESTURE_SIGNAL.RIGHT
  } else if (angle >= 45 && angle < 135) {
    result = GESTURE_SIGNAL.UP
  } else if (angle >= -135 && angle < -45) {
    result = GESTURE_SIGNAL.DOWN
  } else if (
    (angle >= 135 && angle <= 180) ||
    (angle >= -180 && angle < -135)
  ) {
    result = GESTURE_SIGNAL.LEFT
  }
  return result
}

```
