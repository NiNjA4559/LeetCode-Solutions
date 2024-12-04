/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const arr = [-1,-1];
    for(let i = 0;i<Math.ceil(nums.length/2);i++) {
        if(arr[0] === -1 && nums[i] === target) arr[0] = i;
        if(arr[1] === -1 && nums[nums.length-1-i] === target) arr[1] = nums.length-i-1;
        if(arr[0]!==-1 && arr[1]!==-1) break;
    }
    return arr;
};
