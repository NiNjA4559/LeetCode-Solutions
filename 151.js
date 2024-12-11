/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(/\s/g).filter(c => c.length && !c.includes(" ")).reverse().join(" ")
};
