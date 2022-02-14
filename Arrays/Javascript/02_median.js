// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

var findMedianSortedArrays = function (nums1, nums2) {
    arr = (nums1.concat(nums2)).sort(function (a, b) { return a - b })
    median = undefined
    console.log(arr)
    if (arr.length % 2 == 0) {
        median = (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2
    } else {
        console.log((arr.length - 1) / 2)
        median = arr[(arr.length - 1) / 2]
    }

    return median
};

console.log(findMedianSortedArrays([2], [-3, -4]))


