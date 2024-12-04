/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<=0) return false;
    if(n>=1) {
        while(n>=1) {
            if(n===1) return true;
            n/=2;

        }
    } else {
        while(n<1) {
            if(n===1) return true;
            n*=2
        }
    }
    return false;
};
