/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let arr = new Array(nums.length).fill(0);
    nums.forEach((n, i) => arr[i] = nums[n]);
    return arr;
};
