/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    let ones = 0;
    n = `${n}`;
    for (let i = 0; i < n.length; i++) {
        let str = n[i];
        if (str !== "0") {
            if (str === "1") {
                ones += parseInt(n) % Math.pow(10, n.length - i - 1) + 1 + (n.length - i - 1) * Math.pow(10, n.length - i - 2);
            } else {
                ones += Math.pow(10, n.length - i - 2) * (parseInt(str) * (n.length - i - 1) + 10);
            }
        }
    }
    return ones;
};
