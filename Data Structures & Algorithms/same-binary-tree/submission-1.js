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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) return true;
        if (!p || !q) return false;

        const queueP = [p],
              queueQ = [q];

        let idxP = 0,
            idxQ = 0;
        
        while (idxP < queueP.length) {
            const currP = queueP[idxP],
                  currQ = queueQ[idxQ];
            idxP++;
            idxQ++;
            
            if (!currP && !currQ) continue;
            if ((!currP || !currQ) || (currP.val !== currQ.val)) return false;

            queueP.push(currP.left);
            queueP.push(currP.right);

            queueQ.push(currQ.left);
            queueQ.push(currQ.right);
        }

        return true;
    }
}
