/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const arr = [...matrix];
    arr.forEach((m, i) => {
        matrix.push(arr.map(ma => ma[i]).reverse());
        matrix.shift();
    })
};
