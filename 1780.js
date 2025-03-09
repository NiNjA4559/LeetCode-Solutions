/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    if(n.toString(3).includes(2)) return false;
    return true;
};
