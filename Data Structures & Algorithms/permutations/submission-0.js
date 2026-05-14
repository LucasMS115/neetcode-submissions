class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];

        function dfs(path, visited) {
            if (path.length === nums.length) {
                res.push([...path]);
                return;
            };

            for (let i = 0; i < nums.length; i++) {
                const num = nums[i];
                if (visited.has(num)) continue;

                visited.add(num);
                path.push(num);

                dfs(path, visited);

                visited.delete(num);
                path.pop();
            }
        }

        dfs([], new Set());

        return res;
    }
}
