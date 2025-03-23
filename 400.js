/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    if (n == 9) return 9;
    let k = 0;
    while (n >= 0) {
        k += 1;
        n -= k * 9 * (10 ** (k - 1));
    };
    // Sum = ((10**k)*(9*k - 1) + 1)/9;
    const remainingDigits = n + k * 9 * (10 ** (k - 1));
    const leftover = remainingDigits % k;
    const num = (10 ** (k - 1)) + Math.floor(remainingDigits / k);
    return parseInt(leftover > 0 ? `${num}`[leftover - 1] : `${num - 1}`[k - 1]);
};
