let array = [5, 7, 4, -3, 9, 1, 10, 4, 5, 8, 9, 3]

function findLongestIncreasingSubsequence(x) {
  let maxArray = new Array(x).fill(1)
  let max = 1
  for (let i = 1; i < x; i++) {
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

findLongestIncreasingSubsequence(array.length)
