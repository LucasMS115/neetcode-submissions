class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */

    // O(n+m) time & O(n+m) - n is the number of nodes & m is the number of edges (m < n^2)
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;

        const graph = Array.from({ length: n }, () => []), // =~ O(m) space, where m is the number of edges & m < n^2
              visited = new Set(); // O(n) space

        // O(m)
        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }
        console.log(graph)

        // O(n)
        function hasCycle(node, parent) {
            if (visited.has(node)) return true;

            visited.add(node); // O(1)
            for (const neighbor of graph[node]) {
                if (neighbor === parent) continue;
                if (hasCycle(neighbor, node)) return true;
            }

            return false;
        }

        if (hasCycle(0, -1)) return false;

        console.log(visited)
        return visited.size === n; // O(1)
    }
}
