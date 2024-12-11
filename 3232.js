/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let ones = 0;
    let tens = 0;
    nums.forEach(n => {
        if(n<10) {
            ones+=n
        } else {
            tens+=n
        }
    })
    if(ones === tens) return false;
    return true;
};
