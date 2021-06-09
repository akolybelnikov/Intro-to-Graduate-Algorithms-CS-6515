function findLongestIncreasingSubsequence(array) {
    let maxArray = new Array(array.length).fill(1)
    let max = 1
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[j] < array[i] && maxArray[i] <= maxArray[j]) {
                maxArray[i] += 1
                if (maxArray[i] > max) {
                    max = maxArray[i]
                }
            }
        }
    }
    return max
}

module.exports = findLongestIncreasingSubsequence
