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

/*

Input: root node of BST & int k
Outuput: the KTH smallest value

cases:
Input root:
- empty / null
- whith / without children 
- n nodes <= k
- valid BST
- can have negative values

Input K:
- 1-indexed
- k >= 1
- k < n nodes

Output:
- kth smallest node value
- integer
- can be null


*/

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    
    kthSmallest(root, k) {
        if (!root) return null; 

        let count = 0;

        function dfs(node) {
            if(!node) return null;

            const leftRes = dfs(node.left);
            if (leftRes) return leftRes;
            
            count++;
            if (count === k) {
                return node;
            }

            return dfs(node.right);
        }

        return dfs(root).val;
    }

}
