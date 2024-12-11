/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    num = `${num}`.split("");
    if(num.includes("6")) {
        for(let i = 0; i < num.length; i++) {
            if(num[i] === "6") {
                num[i] = "9";
                return parseInt(num.join(""));
            }
        }
    } else {
        return parseInt(num.join(""));
    }
};
