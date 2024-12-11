/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let res = 0;
    nums.forEach(n => {
        if(n%3) res+=1
        });
    return res;
};
