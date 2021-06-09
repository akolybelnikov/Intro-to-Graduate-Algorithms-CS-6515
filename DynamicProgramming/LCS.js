/**
 * [DPV] 6.11. Given two strings x = x1x2 ···xn and y = y1y2 ···ym, we wish to find the length of their longest
 * common subsequence, that is, the largest k for which there are indices i1 < i2 < · · · < ik and
 * j <j <···<j with x x ···x =y y ···y .Show how to do this in time O(mn).
 * */

function LongestCommonSubsequence(x, y) {
    let matrix = new Array(x.length + 1).fill(new Array(y.length + 1).fill(0))
    let max = 0
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (x[i - 1] === y[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1
            } else {
                matrix[i][j] = Math.max(matrix[i][j - 1], matrix[i - 1][j])
            }
            if (matrix[i][j] > max) {
                max = matrix[i][j]
            }
        }
    }

    return max
}

module.exports = LongestCommonSubsequence
