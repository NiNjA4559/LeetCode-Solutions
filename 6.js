/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    let res = "";
    const gap  = 2*(numRows-1)
    for(let i = 0; i < numRows; i++) {
        for(let j = i; j < s.length; j+= gap) {
            res += s[j];
            if(i !== 0 && 2*i < gap) res += s[j+gap-2*i] || "";
        }
        
    }
    return res;
};
