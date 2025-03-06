/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    let num = 1;
    for(let i = 1; i <= 2*n; i++) {
        num *= i*(i%2?1:0.5);
        num = num % 1000000007;
    }
    return num;
};
