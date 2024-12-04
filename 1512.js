/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let obj = {};
    nums.forEach(n => {
        obj[n]?obj[n]+=1:obj[n]=1;
    })
    return Object.values(obj).reduce((a, b) => a + b*(b-1)/2, 0);
};
