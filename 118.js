/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [[1]];
    for(let i = 0; i < numRows - 1; i++) {
        res.push([1]);

        for(let j = 0; j < res[i].length - 1; j++) {
            res[i + 1].push(res[i][j] + res[i][j + 1]);
        }
        
        res[i + 1].push(1);
    }
    return res;
};
