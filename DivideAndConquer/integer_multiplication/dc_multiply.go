package integer_multiplication

import (
	"fmt"
	"math/bits"
)

func Multiply(x, y uint) uint {
	fmt.Println(bits.Len(x), bits.Len(x))
	return x * y
}
