/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    if(m>n) {
        return n*(n+1)/2;
    } else if(m<n) {
        let num1 = 0;
        let num2 = 0;
        for(let i = 1; i < n+1; i++) {
            if(i%m) num1 += i;
        }
        return 2*num1 - n*(n+1)/2;
    } else {
        return n*(n-3)/2;
    }

};
