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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (!preorder || !inorder || !preorder.length || !inorder.length) return null;

        const node = new TreeNode(preorder[0]);
        const mid = inorder.indexOf(preorder[0]); // tell how many values are in the left subtree
        const leftValues = preorder.slice(1, mid+1); // cut the array by size of the left subtree
        const leftOrder = inorder.slice(0, mid); // cut the arry to include what is at the left of node.val | mid
        const rightValues = preorder.slice(mid+1);
        const rightOrder = inorder.slice(mid+1);

        node.left = this.buildTree(leftValues, leftOrder);
        node.right = this.buildTree(rightValues, rightOrder);

        return node;
    }

}
