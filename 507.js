/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num === 1) return false;
    var sum = 0;
    for(let i = 1; i<Math.floor(Math.pow(num, 0.5)+1); i++) {
        if(!(num % i)) {
            sum+=i+num/i;
        }
    }
    return sum === 2*num? true: false;
};
