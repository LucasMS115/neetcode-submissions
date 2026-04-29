class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */


    validTree(n, edges) {
        // adj matrix 
        // {val1: val2}
            // has cycle
            // has all nodes

        // build adj matrix with double edges
        // chose edge zero, traverse the graph building a set
        // if a cycle is found, return false
        // return set size === n
        if (n <= 1 && !edges.length) return true;
        if (n > 1 && !edges.length) return false;

        const graph = new Map(),
              visited = new Set();

        for (const [val1, val2] of edges) {
            if (!graph.get(val1)) graph.set(val1, [val2]);
            else graph.get(val1).push(val2);

            if (!graph.get(val2)) graph.set(val2, [val1]);
            else graph.get(val2).push(val1);
        }

        console.log(graph);

        function validTree(val, prev) {
            console.log(graph.get(val))
            if (!graph.get(val) || visited.has(val)) return false;

            visited.add(val);
            for (const neighbor of graph.get(val)) {
                if (neighbor === prev) continue;
                if (neighbor === val) return false;
                if (!validTree(neighbor, val)) return false;
            }

            return true;
        }

        if (!validTree(0, -1)) return false;

        console.log(visited)

        return visited.size === n;
    }
}
