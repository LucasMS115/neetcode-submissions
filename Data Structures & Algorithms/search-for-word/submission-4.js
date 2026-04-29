class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        if (!word || !word.length) return true;
        if (!board || !board.length || !board[0].length) return false;

        let found = false;

        // stack will have at most word.length
        // O(4^w) time and O(w) space, w = word.length
        function dfs (row, col, idx) {
            if (found || board[row][col] !== word[idx]) return;

            idx++;
            found = idx === word.length;
            board[row][col] = ".";

            // O(n*m * 4^w), n = rows and m = cols
            const steps = [[row+1, col], [row-1, col], [row, col+1], [row, col-1]];
            for (const [nextRow, nextCol] of steps) {
                if (nextRow >= 0 && nextRow < board.length &&
                    nextCol >= 0 && nextCol < board[0].length) {

                    dfs(nextRow, nextCol, idx);
                }
            }

            idx--;
            board[row][col] = word[idx];
        }

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (!found) dfs(row, col, 0);
                else break;
            }
        }
        
        return found;
    }
}
