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

        function dfs (row, col, idx, visited) {
            if (found) return;

            let key = `${row}-${col}`;
            
            if (visited.has(key)) return;
            
            if (board[row][col] === word[idx]) idx++;
            else return;

            found = idx === word.length;

            visited.add(key);

            const steps = [[row+1, col], [row-1, col], [row, col+1], [row, col-1]];
            for (const [nextRow, nextCol] of steps) {
                if (nextRow >= 0 && nextRow < board.length &&
                    nextCol >= 0 && nextCol < board[0].length) {

                    dfs(nextRow, nextCol, idx, visited);
                }
            }

            visited.delete(key);
            idx--;
        }

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (!found) dfs(row, col, 0, new Set());
                else break;
            }
        }
        

        return found;
    }


}
