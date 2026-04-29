class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Set(),
              cols = new Set(),
              boxes = new Set(); 

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                const val = board[r][c];

                if (val === ".") continue;

                const rowKey = `${r}-${val}`,
                      colKey = `${c}-${val}`,
                      boxKey = `${Math.floor(r/3)}-${Math.floor(c/3)}-${val}`;

                if (rows.has(rowKey) || cols.has(colKey) || boxes.has(boxKey)) return false;
                rows.add(rowKey); 
                cols.add(colKey);
                boxes.add(boxKey);
            }
        }

        return true;
    }
}

/*
rows = `${r}-${val}`
cols = `${c}-${val}`
box = `${Math.floor(r/3)}-${Math.floor(c/3)}-${val}`

*/