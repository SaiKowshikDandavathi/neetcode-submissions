class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        if (!board || board.length === 0) return false;
        const rows = new Map();
        const cols = new Map();
        const squares = new Map();

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                
                let cur = board[r][c];
                if (cur === '.') continue;
                let square = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;
                if (
                    (rows.get(r) && rows.get(r).has(cur)) ||
                    (cols.get(c) && cols.get(c).has(cur)) ||
                    (squares.get(square) && squares.get(square).has(cur))
                ) {
                    return false;
                }
                if (!rows.get(r)) rows.set(r, new Set());
                if (!cols.get(c)) cols.set(c, new Set());
                if (!squares.get(square)) squares.set(square, new Set());
                rows.get(r).add(cur);
                cols.get(c).add(cur);
                squares.get(square).add(cur);
            }
        }
        return true;
    }
}
