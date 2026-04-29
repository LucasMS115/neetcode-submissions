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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root && subRoot) return false;
        if (!subRoot) return true;

        const dfs = node => {
            if (!node) return false;

            return this.sameTree(node, subRoot) || 
                   dfs(node.left) || 
                   dfs(node.right);
        }

        return dfs(root);
    }

    sameTree(p, q) {
        if (!p && !q) return true;
        if (!p || !q) return false;

        const queueP = [p],
              queueQ = [q];

        while (queueP.length) {
            const currP = queueP.shift(),
                  currQ = queueQ.shift();

            if (!currP && !currQ) continue;
            if ( (!currP || !currQ) || (currP.val !== currQ.val) ) return false;

            queueP.push(currP.left);
            queueP.push(currP.right);

            queueQ.push(currQ.left);
            queueQ.push(currQ.right);
        }

        return queueP.length === queueQ.length;
    }
}
