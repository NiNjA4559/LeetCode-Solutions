/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let sum = 0, res = 0;
    banned = new Set(banned);
    for(let i = 1; i <=n; i++) {
        if(sum+i > maxSum) break;
        if(!banned.has(i)) {
            sum+=i;
            res+=1;
        }
    }
    return res;
};
