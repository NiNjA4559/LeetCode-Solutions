/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const table = {};
    for(let i = 0; i < nums.length; i++) {
        const j = table[target-nums[i]]
        if(j!==undefined) return [i, j];
        table[nums[i]] = i;

    }
};
