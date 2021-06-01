package integer_multiplication

import (
	"math/bits"
)

func Multiply(x, y uint) uint {
	var max int
	nx := bits.Len(x)
	ny := bits.Len(y)
	if nx == 0 || ny == 0 {
		return 0
	}
	if nx >= ny {
		max = nx
	} else {
		max = ny
	}
	if max == 1 {
		return 1
	}
	if max%2 != 0 {
		max = max + 1
	}

	xl := x >> (max / 2)
	xr := x - (xl << (max / 2))
	yl := y >> (max / 2)
	yr := y - (yl << (max / 2))

	ml := Multiply(xl, yl)
	mr := Multiply(xr, yr)
	mc := Multiply(xl+xr, yl+yr)

	result := (ml << max) + ((mc - ml - mr) << (max / 2)) + mr

	return result
}
