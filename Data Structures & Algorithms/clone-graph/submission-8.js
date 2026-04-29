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

    // versão recursiva - dfs
    cloneGraph(node) {
        if (!node) return null;

        const originalToClone = {};

        function clone(node) {
            if (!node) return null;
            if (originalToClone[node.val]) return originalToClone[node.val];
            
            const cloned = new Node(node.val);
            originalToClone[node.val] = cloned;

            for (const nei of node.neighbors) {
                cloned.neighbors.push(clone(nei));
            }

            return cloned;
        }

        return clone(node);
    }

    // versão iterativa - bfs
    // cloneGraph(node) {
    //     if (!node) return null;

    //     const map = new Map(); // original -> clone
    //     const queue = [node];

    //     map.set(node, new Node(node.val));

    //     while (queue.length) {
    //         const curr = queue.shift();

    //         for (const neighbor of curr.neighbors) {
    //             if (!map.has(neighbor)) {
    //                 map.set(neighbor, new Node(neighbor.val));
    //                 queue.push(neighbor);
    //             }

    //             // conecta os clones
    //             map.get(curr).neighbors.push(map.get(neighbor));
    //         }
    //     }

    //     return map.get(node);
    // }
}
