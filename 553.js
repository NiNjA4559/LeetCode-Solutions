/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    if(nums.length < 3) return nums.join("/");
    const n1 = nums.shift();
    return n1 + "/(" + nums.join("/") + ")";
};
