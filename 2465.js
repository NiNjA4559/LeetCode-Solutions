/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    const set = new Set();
    while(nums.length) {
        const min = Math.min(...nums);
        const max = Math.max(...nums);
        set.add((min+max)/2)
        nums[nums.indexOf(min)] = nums[nums.length-1];
        nums.pop();
        nums[nums.indexOf(max)] = nums[nums.length-1];
        nums.pop();
    }
    return set.size;
};
