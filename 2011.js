/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    const add = operations.filter(o => o.startsWith("+") || o.endsWith("+")).length;
    return 2*add - operations.length;
};
