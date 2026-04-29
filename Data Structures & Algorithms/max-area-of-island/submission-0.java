class Solution {
    private int walkIsland(int row, int col, int[][] grid, Integer[][] visited) {
        if (row < 0 || row >= grid.length ||
            col < 0 || col >= grid[0].length ||
            grid[row][col] == 0 || visited[row][col] != null) return 0;

        visited[row][col] = 1;

        return 1 +
               walkIsland(row+1, col, grid, visited) + 
               walkIsland(row-1, col, grid, visited) + 
               walkIsland(row, col+1, grid, visited) + 
               walkIsland(row, col-1, grid, visited);
    };

    public int maxAreaOfIsland(int[][] grid) {
        Integer[][] visited = new Integer[grid.length][];

        for (int i = 0; i < grid.length; i++) {
            visited[i] = new Integer[grid[0].length];
        };

        int max = 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                max = Math.max(max, walkIsland(i, j, grid, visited));
            }
        }

        return max;
    }
}
