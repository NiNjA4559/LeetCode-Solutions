/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    num1 = num1.split("+").map(n => parseInt(n));
    num2 = num2.split("+").map(n => parseInt(n));
    return `${num1[0]*num2[0] - num1[1]*num2[1]}+${num1[0]*num2[1] + num1[1]*num2[0]}i`
};
