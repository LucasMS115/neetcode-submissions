class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    // O (n*m) time and space
    numIslands(grid) {
        const ROWS = grid.length,
              COLS = grid[0].length;

        let count = 0;

        console.log();

        // O (n*m) time and space
        function dfs(row, col) {
            if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return;

            const curr = grid[row][col];

            if (curr === "0") return;
            else grid[row][col] = "0";

            dfs(row - 1, col);
            dfs(row + 1, col);
            dfs(row, col - 1);
            dfs(row, col + 1);
        }


        // O (n*m) time and space
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === "1") {
                    count += 1;
                    dfs (r, c);
                }
            }
        }

        return count;
    }

}
