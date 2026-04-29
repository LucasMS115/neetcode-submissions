class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */

    graphBuilder(edges) {
        const graph = {};

        for (let [a, b] of edges) {
            a = a.toString();
            b = b.toString();

            if (!graph[a]) graph[a] = new Set([b]);
            else graph[a].add(b);

            if (!graph[b]) graph[b] = new Set([a]);
            else graph[b].add(a);
        }

        return graph;
    }

    countComponents(n, edges) {
        const graph = this.graphBuilder(edges);
        const visited = new Set();
        let count = 0;

        const dfs = (key) => {
            if (visited.has(key)) return;
            visited.add(key);
            for (let neighbor of graph[key]) {
                dfs(neighbor);
            }
        };

        for (let key of Object.keys(graph)) {
            if (!visited.has(key)) {
                dfs(key);
                count++;
            }
        }

        return count + (n - visited.size);
    }
}

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