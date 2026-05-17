class MinHeap {
    constructor() {
        this.data = [];
    }

    //O(logn)
    add(tuple) {
        this.data.push(tuple);

        this.data.sort((a, b) => b[1]-a[1]); //temp
    }

    extractMin() {
        return this.data.pop();
    }

    size() {
        return this.data.length;
    }
}

class Solution {
    networkDelayTime(times, n, k) {
        const graph = {};
       
        for (let i = 1; i <= n; i++) graph[i] = [];
        
        for (const [v1, v2, time] of times) graph[v1].push( [v2, time] );

        const shortest = {};
        const minHeap = new MinHeap();
        minHeap.add([k, 0]);

        while (minHeap.size()) {
            const [v1, t1] = minHeap.extractMin();

            if (shortest[v1] !== undefined) continue;
            shortest[v1] = t1;

            for (const [v2, t2] of graph[v1]) {
                if (shortest[v2] !== undefined) continue;

                minHeap.add( [v2, t1+t2] );
            }
        }

        if (Object.keys(shortest).length !== n) return -1;

        return Math.max(...Object.values(shortest));
    }
}
