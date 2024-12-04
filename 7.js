/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = "";
    const ex = `${x}`;
    for(let i=ex.length-1;i>-1;i--) {
        rev+=ex[i];
    }
    const result = parseInt(rev)*Math.sign(x)
    return result>=-2147483648 && result<=2147483647?result: 0;
};
