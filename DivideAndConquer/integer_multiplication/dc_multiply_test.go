package integer_multiplication

import "testing"

func TestMultiply(t *testing.T) {
	want := 2
	if got := Multiply(1, 2); got != want {
		t.Errorf("Multiply() = %q, want %q", got, want)
	}
}
