class Solution {

    euclideanDistance(p1, p2) {
        const x1 = p1[0], y1 = p1[1];
        const x2 = p2[0], y2 = p2[1];

        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    heapify(points) {
        points.sort( (p1, p2) => {
            return this.euclideanDistance([0,0], p2) - this.euclideanDistance([0,0], p1)
        });
    }

    // O(n + klogn) time, and O(1) space (heap in place) || O(n) if heap is a new structure
    kClosest(points, k) {
        const res = [];

        this.heapify(points); // O(n) on a heap

        while (k && points.length) {
            res.push(points.pop()); // O(logn) on a heap
            k--;
        }

        return res;
    }
}

// class Node {
//     constructor (coords) {
//         this.coords = coords;
//         this.distance = this.originDistance(coords);
//     }

//     originDistance(coords) {
//         let x1 = coords[0],
//             y1 = coords[1];

//         return Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2)); 
//     }
// }

// class MinHeap {
//     constructor (points) {
//         const heap = points.map(point => new Node(point)); //O(n) tempo e espaço - map to nodes
//         this.heap = heap.sort((a,b) => b.distance - a.distance); //O(n) tempo e espaço - build heap
//     }

//     extractMin() {
//         return this.heap.pop(); // O(logn)
//     };

//     size () {
//         return this.heap.length; // O(1)
//     }
// }

// class Solution {
//     kClosest(points, k) {
//         const minHeap = new MinHeap(points); //O(n) tempo e espaço - build heap
//         const res = [];

//         while (minHeap.size() && k) {
//             res.push(minHeap.extractMin().coords);
//             k--;
//         }

//         return res;
//     }
// }
