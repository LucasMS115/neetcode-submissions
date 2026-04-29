
// Union find solution
class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */

    countComponents(n, edges) {
       const parents = Array.from(Array(n).keys()),
             rank = new Array(n).fill(1);

        function findRoot(node) {
            let curr = node;

            while (curr !== parents[curr]) {
                parents[curr] = parents[parents[curr]];
                curr = parents[curr];
            }

            return curr;
        }

        function union(node1, node2) {
            const root1 = findRoot(node1),
                  root2 = findRoot(node2);

            if (root1 === root2) return 0;

            if (rank[root2] > rank[root1]) {
                parents[root1] = root2;
                rank[root2] += rank[root1];
            } else {
                parents[root2] = root1;
                rank[root1] += rank[root2];
            }

            return 1;
        }

        let count = n;
        for (const [v1, v2] of edges) {
            count -= union(v1, v2);
        }

        return count;
    }
}

// Intuitive dfs solution
// class Solution {
//     /**
//      * @param {number} n
//      * @param {number[][]} edges
//      * @returns {number}
//      */

//     graphBuilder(edges) {
//         const graph = {};

//         for (let [a, b] of edges) {
//             a = a.toString();
//             b = b.toString();

//             if (!graph[a]) graph[a] = new Set([b]);
//             else graph[a].add(b);

//             if (!graph[b]) graph[b] = new Set([a]);
//             else graph[b].add(a);
//         }

//         return graph;
//     }

//     countComponents(n, edges) {
//         const graph = this.graphBuilder(edges);
//         const visited = new Set();
//         let count = 0;

//         const dfs = (key) => {
//             if (visited.has(key)) return;
//             visited.add(key);

//             for (let neighbor of graph[key]) {
//                 dfs(neighbor);
//             }
//         };

//         for (let key of Object.keys(graph)) {
//             if (!visited.has(key)) {
//                 dfs(key);
//                 count++;
//             }
//         }

//         return count + (n - visited.size);
//     }
// }

/*

{
    0: [1]
    1: [2]
    2: []
    3: [4]
    4: []
}

counter = 2;
visited({0,1,2,3,4})
0 -> 1 -> 2
>> 2
3 -> 4
>> 4


counter = 2;
visited({2,1,0,4,3})

1: [2]
2: [] // return true
0: [1] // return false
3: [4]
4: [] // return true


[[0,1],[1,2],[1,3],[3,4]]
counter = 1;
visited({2, 4, 3, 1, 0})

0: 1
1: 2,3
2: [] // true
3: 4
4: [] // true

[[0,1],[1,2],[2,0],[3,4]]
counter = 2;
processed({2,1,0,4,3})
visiting({})

0: [1]
1: [2]
2: [0] // return true
3: [4]
4: [] // return true


*/