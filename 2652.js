/**
 * @param {number} n
 * @return {number}
 */
function sum(n, k) {
    n = Math.floor(n/k);
    return k*n*(n+1)/2;
}
var sumOfMultiples = function(n) {
    return sum(n, 3)+sum(n, 5)+sum(n, 7)-(sum(n, 15)+sum(n, 35)+sum(n, 21))+sum(n, 105);
};
