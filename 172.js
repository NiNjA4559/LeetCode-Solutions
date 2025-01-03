/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let res = 0;
    for(let i = 5; i <= n; i *= 5) {
        res += Math.floor(n/i);
    }
    return res;
};
