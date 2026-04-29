class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */

    // O(n+m) time & space - n = number of nodes & m number of edges
    countComponents(n, edges) {
        if (!edges || !edges.length) return n;

        const graph = new Map(), // O(m) space, m = number of edges & m < n^2
              visited = new Set(); // O(n) space
        let count = 0;

        // O(m)
        for (const [u, v] of edges) {
            if (!graph.get(u)) graph.set(u, [v]);
            else graph.get(u).push(v);

            if (!graph.get(v)) graph.set(v, [u]);
            else graph.get(v).push(u);
        }

        function dfs (node) {
            if (visited.has(node)) return;

            visited.add(node);
            for (const neighbor of graph.get(node)) {
                dfs(neighbor);
            }
        }

        // O(n)
        for (const node of graph.keys()) {
            if (visited.has(node)) continue;

            count += 1;
            dfs(node); //O(n) - but doesn't run twice in the same node
        }

        return count + (n - visited.size); // O(1)
    }
}
