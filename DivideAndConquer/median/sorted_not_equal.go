package median

import "math"

const MaxInt = int(^uint(0) >> 1)

func FindMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	if len(nums1) > len(nums2) {
		return findMedianUtil(nums2, nums1)
	}
	return findMedianUtil(nums1, nums2)
}

func findMedianUtil(nums1 []int, nums2 []int) (med float64) {
	n := len(nums1)
	m := len(nums2)

	if n == 0 && m == 0 {
		return float64(0)
	}

	if n == 0 {
		return takeMedian(nums2)
	}

	low := 0
	high := n
	var (
		maxLeftN  int
		minRightN int
		maxLeftM  int
		minRightM int
	)
	for low <= high {
		partitionN := (low + high) / 2
		partitionM := (n+m+1)/2 - partitionN

		if partitionN == 0 {
			maxLeftN = int(math.Inf(-1))
		} else {
			maxLeftN = nums1[partitionN-1]
		}

		if partitionN == n {
			minRightN = MaxInt
		} else {
			minRightN = nums1[partitionN]
		}

		if partitionM == 0 {
			maxLeftM = int(math.Inf(-1))
		} else {
			maxLeftM = nums2[partitionM-1]
		}

		if partitionM == m {
			minRightM = MaxInt
		} else {
			minRightM = nums2[partitionM]
		}

		if maxLeftN <= minRightM && maxLeftM <= minRightN {
			if (n+m)%2 == 0 {
				med = (math.Max(float64(maxLeftN), float64(maxLeftM)) + math.Min(float64(minRightN), float64(minRightM))) / 2.0
				return
			} else {
				med = math.Max(float64(maxLeftN), float64(maxLeftM))
				return
			}
		} else if maxLeftN > minRightM {
			high = partitionN - 1
		} else {
			low = partitionN + 1
		}
	}
	return
}

func takeMedian(nums []int) (m float64) {
	n := len(nums)
	if n%2 == 0 {
		m = float64(nums[(n/2)-1]+nums[n/2]) / 2.0
	} else {
		m = float64(nums[n/2])
	}
	return
}
