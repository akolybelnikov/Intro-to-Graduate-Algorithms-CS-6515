package median

import "testing"

func TestSortedNotEqual1(t *testing.T) {
	if got := FindMedianSortedArrays([]int{1,4,6}, []int{2,3,5}); got != 3.5 {
		t.Errorf("Median = %f, want %f", got, 3.5)
	}
}

func TestSortedNotEqual2(t *testing.T) {
	if got := FindMedianSortedArrays([]int{1,5,6}, []int{2,3,4,7}); got != 4.0 {
		t.Errorf("Median = %f, want %f", got, 4.0)
	}
}

func TestSortedNotEqual3(t *testing.T) {
	if got := FindMedianSortedArrays([]int{1,3}, []int{2}); got != 2.0 {
		t.Errorf("Median = %f, want %f", got, 2.0)
	}
}
