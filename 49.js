/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {};
    strs.forEach((s,i) => {
        const sorted = s.split("").sort().join("");
        obj[sorted]?obj[sorted].push(s):obj[sorted]=[s];
    })
    return Object.values(obj);
};
