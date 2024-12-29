/**
 * @param {string[]} board
 * @return {boolean}
 */
const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var validTicTacToe = function(board) {
    const x = [];
    const o = [];
    board = board.join("");
    for(let i = 0; i < board.length; i++) {
        if(board[i] === "X") {
            x.push(i);
        } else if(board[i] === "O") {
            o.push(i);
        }
    }
    if(x.length-o.length > 1 || x.length-o.length < 0) return false;
    const winX = winningPositions.some(win => win.every(index => x.includes(index)));
    const winY = winningPositions.some(win => win.every(index => o.includes(index)));
    if((winX && winY) || (winX && x.length<=o.length) || (winY && x.length!==o.length)) return false;
    return true;
};
