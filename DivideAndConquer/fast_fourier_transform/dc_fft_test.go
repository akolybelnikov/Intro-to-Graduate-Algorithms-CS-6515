package fast_fourier_transform

import "testing"

func TestPolynomial_FFT(t *testing.T) {
	//v := ToComplex([]float64{1,2,3,4})
	//p := Polynomial{coeff: v}
	//f := p.FFT()
	//if len(f) == 0 {
	//	t.Errorf("FFT length = %q", len(f))
	//}
	p := Pol(999)
	s := p.Expand()
	t.Log(s)
	if len(s) == 0 {
		t.Errorf("string length is %q", len(s))
	}
}
