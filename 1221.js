/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    const n = s.length;
    let r = 0;
    let l = 0;
    let res = 0;
    for(let i = 0; i<s.length; i++) {
        if(s[i] === "R") {
            r+=1;
        } else {
            l+=1;
        };
        if(r === l) {
            res+=1;
            r=0;
            l=0;
        }
    }
    return res;
};
