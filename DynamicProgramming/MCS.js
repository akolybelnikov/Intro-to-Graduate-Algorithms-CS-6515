/**
 * 6.1. A contiguous subsequence of a list S is a subsequence made up of consecutive elements of S. For
instance, if S is
5, 15, −30, 10, −5, 40, 10,
then 15, −30, 10 is a contiguous subsequence but 5, 15, 40 is not. Give a linear-time algorithm for
the following task:
Input: A list of numbers, a1, a2, . . . , an.
Output: The contiguous subsequence of maximum sum (a subsequence of length zero
has sum zero).
For the preceding example, the answer would be 10, −5, 40, 10, with a sum of 55.
(Hint: For each j ∈ {1, 2, . . . , n}, consider contiguous subsequences ending exactly at position j.)
 */
function findMax(arr) {
  let max = 0
  let sum = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (sum + arr[i] > arr[i]) {
      sum += arr[i]
      if (sum > max) {
        max = sum
      }
    } else {
      sum = arr[i]
    }
  }
  return max
}

module.exports = findMax
