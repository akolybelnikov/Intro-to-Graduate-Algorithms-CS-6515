package main

import "fmt"

// Euclid’s rule yields a simple divide and conquer algorithm for computing the gcd.
// For x, y such that x >= y > 0, gcd(x, y) = gcd(x % y, y).
func basicEucidean(x, y int) int {
	if y == 0 {
		return x
	}

	return basicEucidean(y, x%y)
}

// find d = gcd(x, y) and d = alpha*x + beta*y
func extendedEuclidean(x, y int) (d int, alpha int, beta int) {
	if y == 0 {
		return x, 1, 0
	}
	d, alpha, beta = extendedEuclidean(y, x%y)

	return d, beta, alpha - (x/y)*beta
}

func main() {
	//fmt.Println(basicEucidean(14000, 438))
	fmt.Println(extendedEuclidean(142000001, 43875757))
}
