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
     * @return {TreeNode}
     */
    invertTree(root) {

        function dfs(node) {
            if (!node) return;

            dfs(node.left);
            dfs(node.right);
            
            const left = node.left;
            node.left = node.right;
            node.right = left;
        }

        dfs(root);

        return root;
    }
}
