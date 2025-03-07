/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    if(nums.includes(0)) return 0;
    return nums.reduce((a, b) => a * b) > 0? 1: -1;
};
