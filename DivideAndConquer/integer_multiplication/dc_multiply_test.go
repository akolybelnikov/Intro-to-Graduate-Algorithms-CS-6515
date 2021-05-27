package integer_multiplication

import "testing"

func TestMultiply(t *testing.T) {
	if got := Multiply(2, 2); got != 2 {
		t.Errorf("Multiply() = %q, want %q", got, 2)
	}
}
