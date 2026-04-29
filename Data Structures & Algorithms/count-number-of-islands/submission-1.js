class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length,
              COLS = grid[0].length;

        let count = 0;

        console.log();

        function dfs(row, col) {
            if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return;

            const curr = grid[row][col];

            if (curr === "0") return;
            else grid[row][col] = "0";

            const steps = [[row-1, col], [row+1, col], [row, col-1], [row, col+1]];
            for (const [r, c] of steps) {
                dfs (r,c);
            }
        }

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
