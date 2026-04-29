class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const paths = new Set();

        function dfs(acc, path) {
            if (acc > target) return;

            if (acc === target) {
                let key = structuredClone(path);
                key = key.sort((a,b) => a-b).join(" ");
                paths.add(key);
                return;
            }

            for (let num of nums) {
                path.push(num);
                dfs(acc+num, path);
                path.pop(num);
            }
        }

        dfs(0, []);
        
        const res = [];

        for (let path of paths) {
            path = path.split(" ");
            res.push(path.map(numStr => parseInt(numStr)));
        }

        return res;
    }
}
