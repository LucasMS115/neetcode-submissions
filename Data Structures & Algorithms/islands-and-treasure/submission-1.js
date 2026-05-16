class Solution {
    islandsAndTreasure(grid) {
        const INF = 2147483647;

        const rows = grid.length;
        const cols = grid[0].length;

        const queue = [];
        let head = 0;

        // Add all gates first
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                }
            }
        }

        const dirs = [
            [1,0],
            [-1,0],
            [0,1],
            [0,-1]
        ];

        while (head < queue.length) {
            const [row, col] = queue[head];
            head++;

            for (const [dr, dc] of dirs) {
                const nr = row + dr;
                const nc = col + dc;

                if (
                    nr < 0 || nr >= rows ||
                    nc < 0 || nc >= cols ||
                    grid[nr][nc] !== INF
                ) {
                    continue;
                }

                grid[nr][nc] = grid[row][col] + 1;

                queue.push([nr, nc]);
            }
        }
    }
}