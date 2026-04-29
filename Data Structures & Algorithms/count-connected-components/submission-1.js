class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        if (!edges || !edges.length) return n;

        const graph = new Map(),
              visited = new Set();
        let count = 0;

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

        for (const node of graph.keys()) {
            if (visited.has(node)) continue;

            count += 1;
            dfs(node);
        }

        return count + (n - visited.size);
    }
}
