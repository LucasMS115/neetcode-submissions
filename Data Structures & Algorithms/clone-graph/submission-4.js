/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const map = new Map(); // original -> clone
        const queue = [node];

        map.set(node, new Node(node.val));

        while (queue.length) {
            const curr = queue.shift();

            for (const neighbor of curr.neighbors) {
                if (!map.has(neighbor)) {
                    map.set(neighbor, new Node(neighbor.val));
                    queue.push(neighbor);
                }

                // conecta os clones
                map.get(curr).neighbors.push(map.get(neighbor));
            }
        }

        return map.get(node);
    }
}
