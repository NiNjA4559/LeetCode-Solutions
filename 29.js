/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function legalise(num, sign) {
    return num > 2147483647 ? (sign ? 2147483647 : -2147483648) : (sign ? num : - num);
}
var divide = function (dividend, divisor) {
    const sign = Math.sign(dividend) === Math.sign(divisor);
    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);
    if (dividend < divisor) return 0;
    if (divisor === 1) return legalise(dividend, sign);
    let quotient = 0;
    if (divisor <= 36) {
        dividend = dividend.toString(divisor);
        quotient = parseInt(dividend.slice(0, dividend.length - 1), divisor);
    } else {
        while (dividend >= divisor) {
            dividend -= divisor;
            quotient += 1;
        }
    }
    return legalise(quotient, sign);
}
