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
     * @return {boolean}
     */

    // it will be a dfs
    // how the return of the recursion be?
    // how can we know the max of left, the max of right & if left and right are valid?

    isValidBST(root) {
        let valid = true;

        // root=[1,2,3]
        function validate(node) {
            if (!node || !valid) return null;

            const leftResult = validate(node.left); 
            const rightResult = validate(node.right); 

            if ((rightResult && rightResult[0] <= node.val) ||
                (leftResult && leftResult[1] >= node.val)) 
            {
                valid = false;
            }

            return [ 
                leftResult !== null ? leftResult[0]  : node.val,
                rightResult !== null ? rightResult[1] : node.val
            ];
        }

        validate(root);

        return valid;
    }
}
