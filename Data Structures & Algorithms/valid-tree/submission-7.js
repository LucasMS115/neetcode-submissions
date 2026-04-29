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
        for (const [val1, val2] of edges) {
            if (!graph.get(val1)) graph.set(val1, [val2]); //O(1)
            else graph.get(val1).push(val2); //O(1)

            if (!graph.get(val2)) graph.set(val2, [val1]);
            else graph.get(val2).push(val1);
        }

        // O(n)
        function hasCycle(val, prev) {
            if (visited.has(val)) return true;

            visited.add(val); // O(1)
            for (const neighbor of graph.get(val)) {
                if (neighbor === prev) continue;
                if (neighbor === val || hasCycle(neighbor, val)) return true;
            }

            return false;
        }

        if (hasCycle(0, -1)) return false;

        return visited.size === n; // O(1)
    }
}
