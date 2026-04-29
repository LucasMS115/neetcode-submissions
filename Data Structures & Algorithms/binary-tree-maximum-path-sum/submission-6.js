/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let max = -Infinity;

        function dfs(node) {
            if (!node) return 0;

            let maxLeft = Math.max(dfs(node.left), 0);
            let maxRight = Math.max(dfs(node.right), 0);
                
            const maxPath = Math.max(
                maxLeft + node.val,
                maxRight + node.val,
                node.val
            );

            const currMax = Math.max(maxPath, maxLeft + maxRight + node.val);
            max = Math.max(max, currMax);

            return maxPath;
        }

        dfs(root);

        return max;
    }

}
