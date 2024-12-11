/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums = Array.from(new Set(nums));
    const min = Math.min(...nums);
    if(min<k) {
        return -1;
    } else {
        return nums.length-1+((min-k)?1:0);
    }
};
