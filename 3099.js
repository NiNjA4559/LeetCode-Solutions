/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    const sum = `${x}`.split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
    if(x % sum) return -1;
    return sum;
};
