package integer_multiplication

import "testing"

func TestMultiply(t *testing.T) {
	if got := Multiply(155, 186); got != 155*186 {
		t.Errorf("Multiply() = %q, want %q", got, 2)
	}
}
