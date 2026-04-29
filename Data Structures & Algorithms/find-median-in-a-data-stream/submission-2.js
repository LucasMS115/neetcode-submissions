
class MinHeap {
    constructor() {
        this.heap = [];
    }

    add(num) {
        this.heap.push(num);
        this.heap.sort((a, b) => b-a); 
    }

    peak () {
        return this.heap[this.heap.length-1];
    }

    extractMin () {
        return this.heap.pop();
    }

    size () {
        return this.heap.length;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    add(num) {
        this.heap.push(num);
        this.heap.sort((a, b) => a-b); 
    }

    peak () {
        return this.heap[this.heap.length-1];
    }

    extractMax () {
        return this.heap.pop();
    }

    size () {
        return this.heap.length;
    }
}

class MedianFinder {
    constructor() {
        // => O(n) space, n = number of times add was called
        this.minHeap = new MinHeap(); //O(n/2)
        this.maxHeap = new MaxHeap(); //O(n/2)
    }

    // O(log n)
    addNum(num) {
        if (!this.minHeap.size() || num > this.minHeap.peak() ) {
            this.minHeap.add(num); // O(log n)
        } else {
            this.maxHeap.add(num); // O(log n)
        }

        this.rebalance(); // O(log n)
    }

    // O(log n)
    rebalance () {
        if (this.minHeap.size() < this.maxHeap.size()) {
            this.minHeap.add(this.maxHeap.extractMax()); // O(2 logn)
        } else if (this.minHeap.size() > this.maxHeap.size()+1) {
            this.maxHeap.add(this.minHeap.extractMin()); // O(2 logn)
        }
    }

    // O(1)
    findMedian() {
        if (this.minHeap.size() > this.maxHeap.size()) {
            return this.minHeap.peak();
        } else {
            const median = (this.minHeap.peak() + this.maxHeap.peak())/2;
            return median.toFixed(1);
        }
    }
}

