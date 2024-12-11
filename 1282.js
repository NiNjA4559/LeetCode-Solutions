/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let obj = {};
    const res = [];
    groupSizes.forEach((s, i) => {
        if(obj[s]) {
           obj[s].push(i);
        } else {
            obj[s] = [i];
        }
        if(obj[s].length === s) {
            res.push(obj[s]);
            obj[s] = [];
        }
    })
    return res;
};
