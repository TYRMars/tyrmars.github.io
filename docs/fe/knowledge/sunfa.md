[剑指 Offer 04. 二维数组中的查找](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    return matrix.flat().findIndex((item) => item === target) > -1
};

var findNumberIn2DArray = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i][matrix[i].length - 1] === target) return true
        if(matrix[i][matrix[i].length - 1] > target) {
            for(let j = matrix[i].length - 2; j >= 0; j--) {
                if(matrix[i][j] < target) continue
                if(matrix[i][j] === target) return true
            }
        }
    }
    return false
}
```
