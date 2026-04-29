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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (!root) return null;

        if ( (root.val >= p.val && root.val <= q.val) ||
             (root.val <= p.val && root.val >= q.val) ) return root; 

        const leftResult = this.lowestCommonAncestor(root.left, p, q),
              rightResult = this.lowestCommonAncestor(root.right, p, q);

        if (leftResult) return leftResult;
        if (rightResult) return rightResult;
        return null;
    }
}
