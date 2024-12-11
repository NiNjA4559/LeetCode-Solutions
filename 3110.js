/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let score = 0;
    let prev = s.charCodeAt(0);
    for(let i = 1; i < s.length; i++) {
        score+=Math.abs(s.charCodeAt(i)-prev);
        prev = s.charCodeAt(i);
    }
    return score;
};
