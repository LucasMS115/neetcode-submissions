class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = {};

        //O(n) time and space, we solve each case once
        function dfs(remainingSteps) {
            if (remainingSteps === 0) return 1;
            if (remainingSteps < 0) return 0;

            if (memo[remainingSteps]) return memo[remainingSteps];

            const possibilities = dfs(remainingSteps-1) + dfs(remainingSteps-2);
            memo[remainingSteps] = possibilities;
            return possibilities;
        }

        return dfs(n);
    }
}
