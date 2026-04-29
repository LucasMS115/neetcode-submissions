class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const reachPacific = this.reachFrom(heights, 0, 0);
        const reachAtlantic = this.reachFrom(heights, heights.length-1, heights[0].length-1);

        const res = [];
        for (const pair of reachPacific.intersection(reachAtlantic)) {
            const tuple = pair.split(',').map(strNum => parseInt(strNum));
            res.push(tuple);
        }
        
        return res;
    }

    reachFrom(heights, startRow, startCol) {
        const ROWS = heights.length,
              COLS = heights[0].length;
              
        const res = new Set();

        function dfs(row, col, prev) {
            if (row < 0 || row >= ROWS || col < 0 || col >= COLS ||
                res.has([row, col].toString()) || heights[row][col] < prev) {
                return;
            }

            res.add([row, col].toString());

            dfs(row-1, col, heights[row][col]);
            dfs(row+1, col, heights[row][col]);
            dfs(row, col-1, heights[row][col]);
            dfs(row, col+1, heights[row][col]);           
        }

        for (let col = 0; col < COLS; col++) {
            dfs(startRow, col, -Infinity);
        }

        for (let row = 0; row < ROWS; row++) {
            dfs(row, startCol, -Infinity);
        } 

        return res;
    }

}
