/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let ones = 0;
    n = `${n}`;
    n.split("").forEach((str, i) => {
        if(str === "0") return;
        if(str === "1") {
            ones += parseInt(n)%Math.pow(10, n.length-i-1) + 1 + (n.length-i-1)*Math.pow(10, n.length-i-2);
        } else {
            ones += Math.pow(10, n.length-i-2)*(parseInt(str)*(n.length-i-1)+10);
        }
    })
    return ones;
};
