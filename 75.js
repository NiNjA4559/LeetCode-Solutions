/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) { 
    if(new Set(nums).size === 1) return;
    const len = nums.length;
    for(let i = 0; i < len; i++) {
        if(nums[i] === 0 && new Set(nums.slice(0, i+1)).size>1) {
            nums.unshift(0);
            nums.splice(i+1, 1);
        } else if(nums[i] === 2) {
            if(new Set(nums.slice(i, len)).size === 1) return;
            nums.push(2)
            nums.splice(i, 1);
            i-=1;
        }
    }
};
