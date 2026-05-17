class Solution {
    networkDelayTime(times, n, k) {

        const graph = {};

        for (const [u, v, w] of times) {
            if (!graph[u]) graph[u] = [];

            graph[u].push([v, w]);
        }

        const dist = {};

        for (let i = 1; i <= n; i++) {
            dist[i] = Infinity;
        }

        dist[k] = 0;

        const visited = new Set();

        while (visited.size < n) {

            let currNode = -1;
            let currDist = Infinity;

            // Find closest unvisited node
            for (let i = 1; i <= n; i++) {
                if (!visited.has(i) && dist[i] < currDist) {
                    currDist = dist[i];
                    currNode = i;
                }
            }

            if (currNode === -1) return -1;

            visited.add(currNode);

            const neighbors = graph[currNode] || [];

            for (const [neighbor, weight] of neighbors) {

                const newDist = currDist + weight;

                if (newDist < dist[neighbor]) {
                    dist[neighbor] = newDist;
                }
            }
        }

        return Math.max(...Object.values(dist));
    }
}
