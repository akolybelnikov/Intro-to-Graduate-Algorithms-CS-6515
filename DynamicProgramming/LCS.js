function L(x, y) {
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

module.exports = L
