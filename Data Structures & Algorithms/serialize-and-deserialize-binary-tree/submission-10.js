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
            const node = queue.shift();

            if (node) {
                serialization.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            } else {
                serialization.push(null);
            }
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

        const root = new TreeNode(data[0]);
        const queue = [root];

        let queueIdx = 0,
            dataIdx = 1;

        while (queueIdx < queue.length) {
            const curr = queue[queueIdx];
            queueIdx++;
            
            const leftVal = data[dataIdx];
            if (leftVal !== null && leftVal !== undefined) {
                curr.left = new TreeNode(leftVal);
                queue.push(curr.left);
            } else {
                curr.left = null;
            }
            dataIdx++;

            const rightVal = data[dataIdx];
            if (rightVal !== null && rightVal !== undefined) {
                curr.right = new TreeNode(rightVal);
                queue.push(curr.right)
            } else {
                curr.right = null;
            };
            dataIdx++;
        }

        return root;
    }
}
