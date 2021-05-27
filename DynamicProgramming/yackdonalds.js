/**
 * DPV 6.3. Yuckdonald’s is considering opening a series of restaurants along Quaint Valley Highway (QVH).
The n possible locations are along a straight line, and the distances of these locations from the
start of QVH are, in miles and in increasing order, m1, m2, . . . , mn. The constraints are as follows:
    • At each location, Yuckdonald’s may open at most one restaurant. The maximized profit from
    opening a restaurant at location i is pi , where pi > 0 and i = 1, 2, . . . , n.
    • Any two restaurants should be at least k miles apart, where k is a positive integer.
Give an efficient algorithm to compute the maximum maximized total profit subject to the given
constraints.
 */

let locations = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80]
let expectedProfits = [94, 101, 31, 57, 18, 94, 13, 16, 74, 27, 58, 66, 72]
let maximized = new Array(expectedProfits.length).fill(0)
maximized[0] = expectedProfits[0]

function findMax(restaurants, expectedProfits, minDistance) {
  for (let i = 0; i < restaurants.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp =
        maximized[j] +
        diff(restaurants[j], restaurants[i], minDistance) * expectedProfits[i]
      if (temp > maximized[i]) {
        maximized[i] = temp
      }
      if (maximized[i] < expectedProfits[i]) {
        maximized[i] = expectedProfits[i]
      }
    }
  }
  return maximized[maximized.length - 1]
}

function diff(a, b, dist) {
  if (b - a < dist) {
    return 0
  } else {
    return 1
  }
}

findMax(locations, expectedProfits, 10)
