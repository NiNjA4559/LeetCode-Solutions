/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const res = [];
    nums.sort((a, b) => a-b).forEach((n, i) => {
        if(n === nums[i+1]) res.push(n);
    })
    return res;
};
