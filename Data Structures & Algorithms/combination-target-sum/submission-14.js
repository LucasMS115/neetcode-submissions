class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const steps = [...nums];

        const paths = [];

        
        function dfs(stepsIdx, acc, path) {
            if (acc > target) return;

            if (acc === target) {
                paths.push([...path]);
                return;
            }

            for (let i = stepsIdx; i < steps.length; i++) {
                const next = steps[i];

                path.push(next);
                dfs(i, acc+next, path)
                path.pop();
            }
        }

        dfs(0 , 0, []);

        return paths;
    }
}
