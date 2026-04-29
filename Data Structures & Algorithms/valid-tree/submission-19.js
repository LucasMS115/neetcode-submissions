class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */

    // O(n+m) time & O(n+m) - n is the number of nodes & m is the number of edges (m < n^2)
    validTree(n, edges) {
        if (n <= 1 && !edges.length) return true; // one or zero nodes with no edges

        const graph = new Map(), // =~ O(m) space, where m is the number of edges & m < n^2
              visited = new Set(); // O(n) space

        // O(m)
        for (const [u, v] of edges) {
            if (!graph.get(u)) graph.set(u, [v]); //O(1)
            else graph.get(u).push(v); //O(1)

            if (!graph.get(v)) graph.set(v, [u]);
            else graph.get(v).push(u);
        }

        // O(n)
        function hasCycle(val, prev) {
            if (visited.has(val)) return true;

            visited.add(val); // O(1)
            for (const neighbor of graph.get(val)) {
                if (neighbor === prev) continue;
                if (hasCycle(neighbor, val)) return true;
            }

            return false;
        }

        if (hasCycle(0, -1)) return false;

        return visited.size === n; // O(1)
    }
}
