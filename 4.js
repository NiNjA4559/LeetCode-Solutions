/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a,b) => b-a);
    return merged.length%2?merged[merged.length/2 - 0.5]:(merged[merged.length/2 - 1]+merged[merged.length/2])/2;
};
