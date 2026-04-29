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
        //max => max = max left + max right + curr
        //return => max of (left || right) + curr

        let max = -Infinity;

        function dfs(node) {
            if (!node) return 0;

            let maxLeft;
            let maxRight;

            if (node.left) maxLeft = dfs(node.left);
            if (node.right) maxRight = dfs(node.right); 
                
            const maxPath = Math.max(
                (maxLeft || 0) + node.val,
                (maxRight || 0) + node.val,
                node.val
            );
            const currMax = Math.max(
                (maxLeft || 0) + (maxRight || 0) + node.val,
                maxPath
            );
            max = Math.max(max, currMax);

            return maxPath;
        }

        dfs(root);

        return max;
    }


}
