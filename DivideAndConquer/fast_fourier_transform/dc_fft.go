package fast_fourier_transform

import (
	"fmt"
	"math"
	"math/bits"
	"strings"
)

type Polynomial struct {
	coeff []complex128
}

func ToComplex(x []float64) []complex128 {
	y := make([]complex128, len(x))
	for n, v := range x {
		y[n] = complex(v, 0)
	}
	return y
}

func (p Polynomial) FFT() (y []complex128) {
	n := len(p.coeff)

	if n == 1 {
		return []complex128{1, p.coeff[0]}
	}

	w := make([]complex128, n)
	for i := 0; i < n; i++ {
		alpha := -2 * math.Pi * float64(i) / float64(n)
		w[i] = complex(math.Cos(alpha), math.Sin(alpha))
	}

	var (
		Aeven, Aodd Polynomial
	)
	Aeven.coeff = make([]complex128, n/2)
	Aodd.coeff = make([]complex128, n/2)

	for c := 0; c < n/2; c++ {
		Aeven.coeff[c] = p.coeff[c*2]
		Aodd.coeff[c] = p.coeff[c*2+1]
	}

	s := Aeven.FFT()
	t := Aodd.FFT()

	y = make([]complex128, n)

	for k := 0; k < n/2; k++ {
		y[k] = s[k] + w[k]*t[k]
		y[k+n/2] = s[k] - w[k]*t[k]
	}

	return
}

type Pol uint64

func (x Pol) Deg() int {
	return bits.Len64(uint64(x)) - 1
}

func (x Pol) Expand() string {
	var s []string
	for i := x.Deg(); i > 1; i-- {
		if x&(1<<uint(i)) > 0 {
			s = append(s, fmt.Sprintf("1x^%d", i))
		} else {
			s = append(s, fmt.Sprintf("0x^%d", i))
		}
	}

	if x&2 > 0 {
		s = append(s, "1x")
	} else {
		s = append(s, "0x")
	}

	if x&1 > 0 {
		s = append(s, "1")
	} else {
		s = append(s, "0")
	}
	if len(s) == 0 {
		n := 5/2.0
		fmt.Println(n)
	}

	return strings.Join(s, "+")
}
