/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
        let res = [1];
    for(let i = 0; i < rowIndex; i++) {
        const arr = [1];

        for(let j = 0; j < res.length - 1; j++) {
            arr.push(res[j] + res[j + 1]);
        }
        
        arr.push(1);
        res = arr;
    }
    return res;
};
