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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return [];

        const queue = [root];
        const serialization = [];

        while (queue.length) {
            const curr = queue.shift();

            serialization.push(curr?.val || null);
            if (curr) queue.push(curr.left || null);
            if (curr) queue.push(curr.right || null);
        }

        while(!serialization[serialization.length-1]) serialization.pop();
    
        return serialization;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data || !data.length) return null;

        let root = new TreeNode();
        root.val = data.shift();

        const queue = [root];
        let queueIdx = 0,
            dataIdx = 1;

        while (queueIdx < queue.length) {
            const curr = queue[queueIdx];
            queueIdx++;

            const leftVal = data.shift();
            dataIdx++;
            const rightVal = data.shift();
            dataIdx++;
            
            if (leftVal !== null && leftVal !== undefined) {
                curr.left = new TreeNode();
                curr.left.val = leftVal;
                queue.push(curr.left);
            } else {
                curr.left = null;
            }

            if (rightVal !== null && rightVal !== undefined) {
                curr.right = new TreeNode();
                curr.right.val = rightVal;
                queue.push(curr.right)
            } else {
                curr.right = null;
            };
        }

        return root;
    }
}
