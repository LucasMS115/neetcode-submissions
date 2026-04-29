
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
        this.minHeap = new MinHeap();
        this.maxHeap = new MaxHeap();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (!this.minHeap.size() || num > this.minHeap.peak() ) {
            this.minHeap.add(num);
        } else {
            this.maxHeap.add(num);
        }

        this.rebalance();
    }

    rebalance () {
        if (this.minHeap.size() < this.maxHeap.size()) {
            this.minHeap.add(this.maxHeap.extractMax());
        } else if (this.minHeap.size() > this.maxHeap.size()+1) {
            this.maxHeap.add(this.minHeap.extractMin());
        }

        console.log(this.minHeap)
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.minHeap.size() > this.maxHeap.size()) {
            return this.minHeap.peak();
        } else {
            const median = (this.minHeap.peak() + this.maxHeap.peak())/2;
            return median.toFixed(1);
        }
    }
}

// const mediaFinder = new MedianFinder();

// mediaFinder.addNum(2)
// mediaFinder.addNum(5)
// mediaFinder.addNum(1)
// mediaFinder.addNum(9)
