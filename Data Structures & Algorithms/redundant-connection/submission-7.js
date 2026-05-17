class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length,
              parents = new Array(n+1),
              rank = new Array(n+1).fill(1);

        for (let i = 0; i <= n; i++) {
            parents[i] = i;
        }

        function findRoot(vi) {
            let curr = vi;

            while (curr !== parents[curr]) {
                curr = parents[curr];
            }

            return curr;
        }

        function union(v1, v2) {
            const r1 = findRoot(v1),
                  r2 = findRoot(v2);
            
            if (r1 !== r2) {
                if (rank[r1] >= rank[r2]) {
                    parents[r2] = r1;
                    rank[r1] += rank[r2];
                } else {
                    parents[r1] = r2
                    rank[r2] += rank[r1];
                }

                return true;            
            }

            return false;
        }

        for (const [v1, v2] of edges) {
            if (!union(v1, v2)) return [v1, v2];
        }
    }
}
