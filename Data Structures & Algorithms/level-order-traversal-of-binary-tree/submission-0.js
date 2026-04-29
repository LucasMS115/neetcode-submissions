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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        
        const res = [];
        const queue = [root];
        let level = [];
        let levelCount = 1,
            nextLevelCount = 0;
        
        while (queue.length) {
            const curr = queue.shift();
            level.push(curr.val);
            levelCount--;

            if (curr.left) {
                queue.push(curr.left);
                nextLevelCount++;
            }

            if (curr.right) {
                queue.push(curr.right);
                nextLevelCount++;
            }

            if (levelCount === 0) {
                res.push(level);
                level = [];
                levelCount = nextLevelCount;
                nextLevelCount = 0;
            }

        }

        return res;
    }


}
